# C 方向：竞品、开源与专利调研

> 目标仓库：<https://github.com/spinner-bot/AcadCC-2027>  
> 版本：v0.9 阶段研判  
> 日期：2026-10-23

本目录将现有 C 方向调研内容整理为 GitHub 可直接阅读和预览的格式，不改动原始研究结论。本目录只允许 UTF-8 文本文件；二进制 Word、PDF、PPTX、ZIP、图片、音视频和数据库文件均不放入提交目录，其内容已转换为 Markdown、HTML、CSS、JavaScript 和 CSV。

## 先看

- **演示**：[presentation/index.html](presentation/index.html)
- **报告（HTML）**：[report/C方向调研报告.html](report/C方向调研报告.html)
- **报告（Markdown）**：[report/C方向调研报告.md](report/C方向调研报告.md)
- **阶段成果提交说明**：[docs/15-阶段成果提交说明.md](docs/15-阶段成果提交说明.md)
- **数据目录**：[data/csv](data/csv)
- **文件清单**：[MANIFEST.json](MANIFEST.json)

演示页支持键盘方向键、空格翻页，按 `N` 查看当前页讲稿，按 `F` 进入全屏。

## 目录结构

```text
acadcc-2027-c-direction/
├─ README.md
├─ MANIFEST.json
├─ report/
│  ├─ C方向调研报告.md
│  └─ C方向调研报告.html
├─ docs/
│  ├─ 04-证据卡模板.md
│  ├─ ...
│  ├─ 20-金蝶每刻合思核验记录.md
│  └─ inquiry-portal.html
├─ presentation/
│  ├─ index.html
│  ├─ styles.css
│  └─ app.js
├─ data/
│  └─ csv/
│     ├─ 01-竞品能力矩阵.csv
│     ├─ 02-开源组件清单.csv
│     ├─ 03-专利检索表.csv
│     ├─ 05-检索日志.csv
│     └─ 18-询价跟踪表.csv
└─ scripts/
   ├─ open-inquiry-portal.ps1
   ├─ open-inquiry-portal.sh
   ├─ open-inquiry-portal.bat
   ├─ pre-push-check.ps1
   └─ pre-push-check.sh
```

## 格式转换对照

| 原内容 | 原格式 | 提交格式 | 位置 |
|---|---|---|---|
| 阶段汇报演示 | PPTX，8 页 | HTML + CSS + JS | `presentation/` |
| 中期整合与验证报告 | Markdown | HTML + Markdown | `report/` |
| 阶段成果提交说明 | DOCX / PDF / Markdown | Markdown | `docs/15-阶段成果提交说明.md` |
| 证据卡与专项记录 | Markdown | Markdown | `docs/` |
| 竞品、开源、专利、日志与询价表 | CSV | CSV | `data/csv/` |
| 询价入口 | HTML + BAT | HTML + PS1 + SH + BAT | `docs/inquiry-portal.html`、`scripts/` |

## 证据与表述边界

- 本目录是 **v0.9 阶段研判**，不是最终 FTO 报告、结题报告或法律意见。
- 厂商官网信息属于厂商公开自述，尚不能等同于客户实测或已上线证据。
- “公开材料未见说明”不等于厂商不支持；“存在相关专利”也不等于已经构成侵权。
- Google Patents 的 Active / Pending 状态不等同于国家知识产权局官方登记簿。
- 价格与客户数据以现有公开线索为限，不应据此形成确定成交价结论。

## 数据文件

| 文件 | 用途 |
|---|---|
| `01-竞品能力矩阵.csv` | 商业竞品 × 能力项；含判定状态与证据编号 |
| `02-开源组件清单.csv` | 开源仓库、许可、维护活跃度 |
| `03-专利检索表.csv` | 专利检索记录与中国专利初筛 |
| `05-检索日志.csv` | 检索过程留痕 |
| `18-询价跟踪表.csv` | 优先厂商询价记录模板 |

## 本地预览

直接双击 `presentation/index.html` 或 `report/C方向调研报告.html` 即可离线查看。若浏览器限制本地脚本，可在本目录运行：

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000/presentation/index.html`。

## 推送前自检

本目录已包含 `.gitignore`，用于排除本地构建目录、缓存、Office 临时文件、二进制原文件和本地密钥。推送前请执行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\pre-push-check.ps1
```

或在 macOS / Linux：

```sh
sh ./scripts/pre-push-check.sh
```

脚本会检查 `.gitignore`、必需文件、禁入目录、文本格式白名单、NUL 字节、二进制文件头、UTF-8 有效性、超过 5 MB 的文件、符号链接和疑似密钥。发现问题时返回非零退出码，不应继续推送。
