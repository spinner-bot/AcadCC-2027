#!/usr/bin/env sh
set -eu

ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
ERRORS=0

fail() {
  printf '%s\n' "[ERROR] $1" >&2
  ERRORS=$((ERRORS + 1))
}

if [ ! -f "$ROOT/.gitignore" ]; then
  fail "缺少 .gitignore"
fi

for required in \
  "README.md" \
  "MANIFEST.json" \
  "presentation/index.html" \
  "presentation/styles.css" \
  "presentation/app.js" \
  "report/C方向调研报告.html" \
  "report/C方向调研报告.md"
do
  if [ ! -f "$ROOT/$required" ]; then
    fail "缺少必需文件: $required"
  fi
done

for forbidden_dir in .git .codex-build node_modules __pycache__ .pytest_cache .venv venv _preview qa; do
  found=$(find "$ROOT" -type d -name "$forbidden_dir" -print -quit 2>/dev/null || true)
  if [ -n "$found" ]; then
    fail "禁止提交本地构建/缓存目录: ${found#$ROOT/}"
  fi
done

for forbidden_ext in ppt pptx doc docx xls xlsx pdf zip 7z rar tmp temp log ndjson png jpg jpeg gif webp bmp tif tiff ico mp4 mov avi mkv mp3 wav flac exe dll so dylib bin class jar wasm ttf otf woff woff2 eot db sqlite sqlite3; do
  while IFS= read -r found; do
    [ -n "$found" ] || continue
    fail "禁止提交二进制或临时文件: ${found#$ROOT/}"
  done <<EOF
$(find "$ROOT" -type f -name "*.$forbidden_ext" -print 2>/dev/null)
EOF
done

while IFS= read -r found; do
  [ -n "$found" ] || continue
  base=${found##*/}
  if [ "$base" = ".gitignore" ]; then
    continue
  fi
  case "$found" in
    *.md|*.txt|*.html|*.css|*.js|*.json|*.csv|*.ps1|*.sh|*.bat|*.yml|*.yaml|*.xml|*.svg) ;;
    *) fail "禁止提交非文本格式: ${found#$ROOT/}"; continue ;;
  esac

  if od -An -tx1 "$found" | tr -s ' ' '\n' | grep -qx '00'; then
    fail "文件包含 NUL 字节，判定为二进制: ${found#$ROOT/}"
    continue
  fi

  header=$(od -An -tx1 -N4 "$found" | tr -d ' \n')
  case "$header" in
    504b0304|25504446|d0cf11e0|89504e47|ffd8ff*|47494638|52494646|7f454c46|4d5a*)
      fail "文件头命中二进制格式: ${found#$ROOT/}"
      continue
      ;;
  esac

  if command -v iconv >/dev/null 2>&1; then
    if ! iconv -f UTF-8 -t UTF-8 "$found" >/dev/null 2>&1; then
      fail "文件不是有效 UTF-8 文本: ${found#$ROOT/}"
    fi
  fi
done <<EOF
$(find "$ROOT" -type f -print 2>/dev/null)
EOF

while IFS= read -r found; do
  [ -n "$found" ] || continue
  fail "禁止提交符号链接或目录联接: ${found#$ROOT/}"
done <<EOF
$(find "$ROOT" -type l -print 2>/dev/null)
EOF

while IFS= read -r found; do
  [ -n "$found" ] || continue
  fail "禁止提交系统或 Office 临时文件: ${found#$ROOT/}"
done <<EOF
$(find "$ROOT" -type f \( -name '.DS_Store' -o -name 'Thumbs.db' -o -name 'Desktop.ini' -o -name '~$*' \) -print 2>/dev/null)
EOF

while IFS= read -r found; do
  size=$(wc -c < "$found" | tr -d ' ')
  if [ "$size" -gt 5242880 ]; then
    fail "文件超过 5 MB，请确认是否应提交: ${found#$ROOT/}"
  fi
done <<EOF
$(find "$ROOT" -type f -print 2>/dev/null)
EOF

if grep -RIlEi --exclude='pre-push-check.sh' --exclude='pre-push-check.ps1' \
  --include='*.md' --include='*.txt' --include='*.html' --include='*.css' --include='*.js' \
  --include='*.json' --include='*.csv' --include='*.ps1' --include='*.sh' --include='*.bat' \
  --include='*.yml' --include='*.yaml' \
  '(-----BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----|ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|(password|passwd|pwd)[[:space:]]*[:=][[:space:]]*[^[:space:]]{6,}|(api[_-]?key|secret|token)[[:space:]]*[:=][[:space:]]*[A-Za-z0-9_-]{12,})' \
  "$ROOT" >/dev/null 2>&1; then
  fail "疑似密钥或凭据"
fi

if [ "$ERRORS" -gt 0 ]; then
  printf '%s\n' "自检失败：共发现 $ERRORS 个问题，请修复后再推送。" >&2
  exit 1
fi

printf '%s\n' "自检通过：.gitignore 存在，目录仅包含 UTF-8 文本，未发现二进制文件、超大文件或疑似凭据。"
