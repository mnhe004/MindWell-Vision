# MindWell-Vision · 药品识别与食品识别

「安心记 MindWell」的**药品识别**与**食品识别**独立模块，全部**本地离线运行**（不联网、不上传、无云依赖），已在实际 Android WebView 环境验证可运行。

> 本仓库是从完整 App [MindWell](https://github.com/mnhe004/MindWell) 中抽取出来的识别引擎部分，可单独阅读、复用与演示。

## 技术栈

| 能力 | 技术 |
|---|---|
| 药盒文字识别 | ONNX Runtime Web + **PaddleOCR PP-OCRv4**（det + cls + rec 三模型） |
| 药丸/药片定位 | ONNX Runtime Web + **YOLOv11**（pills.onnx 目标检测） |
| 食品图像分类 | ONNX Runtime Web + **Food-101**（food101.onnx，101 类） |
| 包装标签 → 食物匹配 | OCR 文本 + 2403 种本地食物库模糊匹配 |
| 营养标签解析 | OCR + 正则（能量/蛋白/脂肪/碳水/纤维/钠，kJ↔kcal） |
| 兜底 OCR | Tesseract.js（chi_sim 中文） |

## 目录结构

```
MindWell-Vision/
├── src/
│   ├── lib/
│   │   ├── drugOcr.ts        # 药品：PaddleOCR 药盒文字识别
│   │   ├── drugDetect.ts     # 药品：YOLOv11 药丸定位（裁剪后放大再识别）
│   │   ├── ocr.ts            # 通用 OCR + 药名匹配药物库（identifyDrugs）
│   │   ├── foodVision.ts     # 食品：Food-101 图像分类（101 类）
│   │   ├── nutritionLabel.ts # 食品：配料表/营养标签解析 → 热量
│   │   └── labelOcr.ts       # 食品：包装文字 → 匹配 2403 种食物库
│   └── data/
│       ├── nutrition.ts      # Food-101 类别 + 营养结构
│       ├── foods*.ts         # 本地食物库（2403 种，含份量/热量）
│       ├── foodsNut.ts       # 食物营养明细
│       └── medical.ts / departments*.ts / drugs*.ts  # 疾病库 + 药物库（药名匹配用）
├── models/
│   ├── food101.onnx          # 食品分类模型
│   ├── ocr/                  # PaddleOCR PP-OCRv4（det/cls/rec + 字典）
│   └── yolo/pills.onnx       # YOLOv11 药丸检测
├── ort/                      # ONNX Runtime Web（wasm）
├── tesseract/                # Tesseract.js 主脚本
├── tesseract-core/           # Tesseract wasm 核心
└── tessdata/                 # chi_sim 中文语言包
```

## 识别流程

**药品识别（拍药盒 / 拍药片）**
1. `detectPills(dataUrl)` — YOLOv11 定位药盒/药片，取最大框裁剪放大。
2. `ocrImageDrugs(dataUrl)` — PaddleOCR PP-OCRv4 识别文字（通用名/商品名/规格）。
3. `identifyDrugs(text)` — 文字匹配本地药物库，返回候选药 + 关联疾病。
4. 失败时回退 `ocr()` Tesseract 引擎。

**食品识别（拍照 / 拍营养标签）**
1. `classifyFood(dataUrl, 5)` — Food-101 输出 Top-5 类别 + 置信度 + 营养。
2. `recognizePackagedFood(dataUrl)` — 先读包装文字 → 匹配食物库（解决饮料/包装食品）。
3. `recognizeNutritionLabel(dataUrl)` — 拍配料表 → 解析「每 100g」能量/三大营养素 → 算热量。
4. `kcalForPortion(label, grams)` — 按实际食用克数折算热量。

## 说明

- 运行环境为浏览器（Vite + React，Android Capacitor WebView 已验证）；`@/` 为 Vite 路径别名（`@` → `src`）。
- 所有模型与识别均在**本机**执行，隐私安全；代码为本仓库主要交付物，模型文件较大（约 68 MB）。
- 依赖：`onnxruntime-web`、`tesseract.js`。