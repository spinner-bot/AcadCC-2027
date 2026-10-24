#!/usr/bin/env sh
# ============================================================
# 调研 E · 推送前自检
# 用法：在 Git Bash 里执行  sh "pre-research/Part 1/调研E（数据与实验可行性）/scripts/pre-push-check.sh"
#       或直接双击项目根目录的 推送前自检.bat
# 目的：拦住不该进仓库的东西，避免污染远程仓库。
# 思路对齐 调研C/scripts/pre-push-check.sh。
# ============================================================
set -eu

ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
ERRORS=0

fail() { printf '%s\n' "[ERROR] $1" >&2; ERRORS=$((ERRORS + 1)); }
ok()   { printf '%s\n' "[ OK ] $1"; }

printf '%s\n' "自检目录：${ROOT}"
printf '%s\n' "----------------------------------------------------"

# ---------- 1. .gitignore 必须存在 ----------
if [ -f "$ROOT/.gitignore" ]; then
  ok ".gitignore 存在"
else
  fail "缺少 .gitignore —— 组内硬性要求，每个方向目录都必须有"
fi

# ---------- 2. 目录白名单放行、黑名单拦截 ----------
for forbidden_dir in .git __pycache__ .pytest_cache .venv venv env \
                    .ipynb_checkpoints .mypy_cache .ruff_cache \
                    data/raw data/downloads datasets downloads .cache node_modules
do
  found=$(find "$ROOT" -type d -path "*${forbidden_dir}" -print -quit 2>/dev/null || true)
  if [ -n "$found" ]; then
    fail "存在禁止提交的目录: ${found#$ROOT/}（数据集/缓存应留在本地）"
  fi
done

# ---------- 3. 扩展名白名单 ----------
# 本方向只接受文本化成果
ALLOWED='md txt csv tsv json jsonl py sh ps1 bat yml yaml xml'
is_allowed() {
  ext=${1##*.}
  [ "$ext" = "$1" ] && return 1          # 无扩展名
  for a in $ALLOWED; do
    [ "$ext" = "$a" ] && return 0
  done
  return 1
}

while IFS= read -r f; do
  [ -n "$f" ] || continue
  base=${f##*/}
  case "$base" in
    .gitignore|.gitkeep|.gitattributes) continue ;;
  esac
  if ! is_allowed "$base"; then
    fail "扩展名不在白名单内: ${f#$ROOT/}"
  fi
done <<EOF
$(find "$ROOT" -type f -print 2>/dev/null)
EOF

# ---------- 4. 文件头 + NUL 字节，识别伪装的二进制 ----------
while IFS= read -r f; do
  [ -n "$f" ] || continue
  base=${f##*/}
  case "$base" in
    .gitignore|.gitkeep|.gitattributes) continue ;;
  esac
  is_allowed "$base" || continue

  if od -An -tx1 "$f" 2>/dev/null | tr -s ' ' '\n' | grep -qx '00'; then
    fail "文件含 NUL 字节，是二进制: ${f#$ROOT/}"
    continue
  fi
  header=$(od -An -tx1 -N4 "$f" 2>/dev/null | tr -d ' \n')
  case "$header" in
    504b0304|25504446|d0cf11e0|89504e47|ffd8ff*|47494638|52494646|7f454c46)
      fail "文件头是二进制格式（zip/pdf/office/图片）: ${f#$ROOT/}"
      continue
      ;;
  esac
  if command -v iconv >/dev/null 2>&1; then
    iconv -f UTF-8 -t UTF-8 "$f" >/dev/null 2>&1 || fail "不是有效 UTF-8 文本: ${f#$ROOT/}"
  fi
done <<EOF
$(find "$ROOT" -type f -print 2>/dev/null)
EOF

# ---------- 5. Office 锁文件与系统垃圾文件 ----------
while IFS= read -r f; do
  [ -n "$f" ] || continue
  fail "存在临时/垃圾文件: ${f#$ROOT/}"
done <<EOF
$(find "$ROOT" -type f \( -name '~\$*' -o -name '.DS_Store' -o -name 'Thumbs.db' -o -name 'Desktop.ini' \) -print 2>/dev/null)
EOF

# ---------- 6. 单文件体积上限 5 MB ----------
while IFS= read -r f; do
  [ -n "$f" ] || continue
  size=$(wc -c < "$f" | tr -d ' ')
  if [ "$size" -gt 5242880 ]; then
    fail "文件超过 5 MB（$(($size / 1024 / 1024)) MB）: ${f#$ROOT/}"
  fi
done <<EOF
$(find "$ROOT" -type f -print 2>/dev/null)
EOF

# ---------- 7. 符号链接 / 目录联接 ----------
while IFS= read -r f; do
  [ -n "$f" ] || continue
  fail "存在符号链接: ${f#$ROOT/}"
done <<EOF
$(find "$ROOT" -type l -print 2>/dev/null)
EOF

# ---------- 8. 疑似密钥与凭据 ----------
if grep -RIlEi --exclude='pre-push-check.sh' \
  --include='*.md' --include='*.txt' --include='*.csv' --include='*.json' \
  --include='*.jsonl' --include='*.py' --include='*.sh' --include='*.ps1' --include='*.bat' \
  '(-----BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----|ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16})' \
  "$ROOT" >/dev/null 2>&1; then
  fail "疑似密钥或访问令牌"
fi

printf '%s\n' "----------------------------------------------------"
if [ "$ERRORS" -gt 0 ]; then
  printf '%s\n' "自检失败：共 $ERRORS 个问题。修好再推送。" >&2
  exit 1
fi

printf '%s\n' "自检通过：.gitignore 存在；目录内只有 UTF-8 文本；"
printf '%s\n' "         未发现二进制、数据集目录、超大文件、临时文件或凭据。"
