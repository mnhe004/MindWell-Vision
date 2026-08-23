// 药物文字识别：onnxruntime-web + PaddleOCR PP-OCRv4（det + cls + rec 全离线）
// 引擎与食物识别相同（onnxruntime wasm），已在 Android WebView 验证可运行
import * as ort from 'onnxruntime-web'

const ORT_DIR = '/ort/'
const MODEL_DIR = '/models/ocr/'

const MEAN = [0.485, 0.456, 0.406]
const STD = [0.229, 0.224, 0.225]

// det 参数（与 ch_PP-OCRv4_det 推理配置一致）
const DET_LIMIT_SIDE = 736
const DET_THRESH = 0.3
const DET_BOX_THRESH = 0.5
const DET_UNCLIP = 1.6

// rec 参数
const REC_HEIGHT = 48
const REC_MAX_WIDTH = 320

// cls 参数
const CLS_IMAGE_W = 192
const CLS_IMAGE_H = 48
const CLS_THRESH = 0.9

let detSession: ort.InferenceSession | null = null
let recSession: ort.InferenceSession | null = null
let clsSession: ort.InferenceSession | null = null
let dict: string[] | null = null

async function ensureEnv() {
  ort.env.wasm.wasmPaths = ORT_DIR
  ort.env.wasm.numThreads = 1
}

export async function getDetSession() {
  if (!detSession) { await ensureEnv(); detSession = await ort.InferenceSession.create(MODEL_DIR + 'ch_PP-OCRv4_det_infer.onnx', { executionProviders: ['wasm'] }) }
  return detSession
}
export async function getRecSession() {
  if (!recSession) { await ensureEnv(); recSession = await ort.InferenceSession.create(MODEL_DIR + 'ch_PP-OCRv4_rec_infer.onnx', { executionProviders: ['wasm'] }) }
  return recSession
}
export async function getClsSession() {
  if (!clsSession) { await ensureEnv(); clsSession = await ort.InferenceSession.create(MODEL_DIR + 'ch_ppocr_mobile_v2.0_cls_infer.onnx', { executionProviders: ['wasm'] }) }
  return clsSession
}

async function loadDict(): Promise<string[]> {
  if (!dict) {
    const res = await fetch(MODEL_DIR + 'ppocr_keys_v1.txt')
    const text = await res.text()
    dict = text.split(/\r?\n/).filter((l) => l.length > 0)
  }
  return dict
}

interface RawImage { data: Uint8ClampedArray; width: number; height: number }

function loadImageToCanvas(src: string): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      resolve(canvas)
    }
    img.onerror = () => reject(new Error('图片加载失败'))
    img.src = src
  })
}

function canvasToRaw(canvas: HTMLCanvasElement): RawImage {
  const ctx = canvas.getContext('2d')!
  const d = ctx.getImageData(0, 0, canvas.width, canvas.height)
  return { data: d.data, width: canvas.width, height: canvas.height }
}

// 等比缩放 + 归一化 → NCHW Float32
function preprocess(img: RawImage, targetH: number, targetW: number): Float32Array {
  const out = new Float32Array(3 * targetH * targetW)
  const { data, width: sw, height: sh } = img
  const xRatio = sw / targetW
  const yRatio = sh / targetH
  for (let y = 0; y < targetH; y++) {
    const sy = Math.min(sh - 1, Math.floor(y * yRatio))
    for (let x = 0; x < targetW; x++) {
      const sx = Math.min(sw - 1, Math.floor(x * xRatio))
      const si = (sy * sw + sx) * 4
      const r = data[si] / 255
      const g = data[si + 1] / 255
      const b = data[si + 2] / 255
      const oi = y * targetW + x
      out[oi] = (r - MEAN[0]) / STD[0]
      out[targetH * targetW + oi] = (g - MEAN[1]) / STD[1]
      out[2 * targetH * targetW + oi] = (b - MEAN[2]) / STD[2]
    }
  }
  return out
}

// —— DB 后处理：概率图 → 文本框（简化版：连通域 + 外接矩形 + unclip） ——
interface DetBox { x0: number; y0: number; x1: number; y1: number; score: number }

function dbPostprocess(probMap: Float32Array, H: number, W: number, scaleX: number, scaleY: number): DetBox[] {
  const bin = new Uint8Array(H * W)
  for (let i = 0; i < H * W; i++) bin[i] = probMap[i] > DET_THRESH ? 1 : 0
  const visited = new Uint8Array(H * W)
  const boxes: DetBox[] = []
  const queue = new Int32Array(H * W)
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = y * W + x
      if (!bin[idx] || visited[idx]) continue
      // BFS 找连通域
      let head = 0, tail = 0
      queue[tail++] = idx
      visited[idx] = 1
      let minX = x, maxX = x, minY = y, maxY = y, sum = 0, count = 0
      while (head < tail) {
        const cur = queue[head++]
        const cx = cur % W, cy = (cur / W) | 0
        if (cx < minX) minX = cx; if (cx > maxX) maxX = cx
        if (cy < minY) minY = cy; if (cy > maxY) maxY = cy
        sum += probMap[cur]; count++
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (!dx && !dy) continue
            const nx = cx + dx, ny = cy + dy
            if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue
            const ni = ny * W + nx
            if (bin[ni] && !visited[ni]) { visited[ni] = 1; queue[tail++] = ni }
          }
        }
      }
      const bw = maxX - minX + 1, bh = maxY - minY + 1
      if (bw < 3 || bh < 3 || count < 20) continue
      // 用原始框计算分（unclip 前），避免背景稀释
      const rawScore = sum / count
      if (rawScore < DET_BOX_THRESH) continue
      // unclip 放大
      const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2
      const nw = bw * DET_UNCLIP, nh = bh * DET_UNCLIP
      let x0 = Math.round(cx - nw / 2), y0 = Math.round(cy - nh / 2)
      let x1 = Math.round(cx + nw / 2), y1 = Math.round(cy + nh / 2)
      x0 = Math.max(0, x0); y0 = Math.max(0, y0)
      x1 = Math.min(W - 1, x1); y1 = Math.min(H - 1, y1)
      boxes.push({
        x0: Math.round(x0 * scaleX), y0: Math.round(y0 * scaleY),
        x1: Math.round(x1 * scaleX), y1: Math.round(y1 * scaleY),
        score: rawScore
      })
    }
  }
  return boxes
}

// 裁剪 + 缩放 + 归一化 → 用于 cls/rec 的输入
function cropPreprocess(img: RawImage, x0: number, y0: number, x1: number, y1: number, outH: number, outW: number, rotate180: boolean): Float32Array {
  const out = new Float32Array(3 * outH * outW)
  const { data, width: sw, height: sh } = img
  const cw = Math.max(1, x1 - x0), ch = Math.max(1, y1 - y0)
  for (let y = 0; y < outH; y++) {
    const srcY = rotate180 ? y1 - Math.round((y / outH) * ch) : y0 + Math.round((y / outH) * ch)
    for (let x = 0; x < outW; x++) {
      const srcX = rotate180 ? x1 - Math.round((x / outW) * cw) : x0 + Math.round((x / outW) * cw)
      const sx = Math.min(sw - 1, Math.max(0, srcX))
      const sy = Math.min(sh - 1, Math.max(0, srcY))
      const si = (sy * sw + sx) * 4
      const r = data[si] / 255, g = data[si + 1] / 255, b = data[si + 2] / 255
      const oi = y * outW + x
      out[oi] = (r - MEAN[0]) / STD[0]
      out[outH * outW + oi] = (g - MEAN[1]) / STD[1]
      out[2 * outH * outW + oi] = (b - MEAN[2]) / STD[2]
    }
  }
  return out
}

// CTC 贪心解码
function ctcDecode(preds: Float32Array, T: number, dictList: string[]): string {
  const blank = 0
  let last = -1
  const chars: string[] = []
  for (let t = 0; t < T; t++) {
    let best = 0, bestV = -Infinity
    for (let c = 0; c < 6625; c++) {
      const v = preds[t * 6625 + c]
      if (v > bestV) { bestV = v; best = c }
    }
    if (best !== blank && best !== last) {
      const ch = dictList[best - 1]
      if (ch) chars.push(ch)
    }
    last = best
  }
  return chars.join('')
}

export interface DrugOcrResult {
  text: string
  boxes: DetBox[]
  duration: number
}

let onLoadStatus: ((s: string) => void) | null = null
export function setDrugOcrStatusHandler(fn: ((s: string) => void) | null) {
  onLoadStatus = fn
}

function loadStatus(s: string) {
  try { onLoadStatus?.(s) } catch {}
}

// 顺序加载模型（避免并行加载 16MB 造成 WebView 内存峰值）
async function loadSessions() {
  loadStatus('加载文字检测模型…')
  const det = await getDetSession()
  loadStatus('加载文字识别模型…')
  const rec = await getRecSession()
  loadStatus('加载方向模型…')
  const cls = await getClsSession()
  loadStatus('加载中文字典…')
  const dictList = await loadDict()
  return { det, rec, cls, dictList }
}

export async function ocrImageDrugs(dataUrl: string): Promise<DrugOcrResult> {
  const t0 = Date.now()
  const canvas = await loadImageToCanvas(dataUrl)
  const img = canvasToRaw(canvas)
  const { det, rec, cls, dictList } = await loadSessions()

  // —— 1. det ——
  const shortSide = Math.min(img.width, img.height)
  const ratio = Math.min(1, DET_LIMIT_SIDE / shortSide)
  const detH = Math.max(32, Math.round(img.height * ratio / 32) * 32)
  const detW = Math.max(32, Math.round(img.width * ratio / 32) * 32)
  const detInput = preprocess(img, detH, detW)
  const detFeeds: Record<string, ort.Tensor> = {}
  detFeeds[det.inputNames[0]] = new ort.Tensor('float32', detInput, [1, 3, detH, detW])
  const detOut = await det.run(detFeeds)
  const prob = detOut[det.outputNames[0]].data as Float32Array
  const scaleX = img.width / detW
  const scaleY = img.height / detH
  let boxes = dbPostprocess(prob, detH, detW, scaleX, scaleY)

  // 合并重叠框（简单按 y 排序）
  boxes.sort((a, b) => a.y0 - b.y0)

  // —— 2. cls + 3. rec ——
  const lines: string[] = []
  const finalBoxes: DetBox[] = []
  for (let bi = 0; bi < boxes.length; bi++) {
    const b = boxes[bi]
    loadStatus(`识别文字行 ${bi + 1}/${boxes.length}…`)
    // cls：判断是否需要旋转 180°
    const clsInput = cropPreprocess(img, b.x0, b.y0, b.x1, b.y1, CLS_IMAGE_H, CLS_IMAGE_W, false)
    const clsFeeds: Record<string, ort.Tensor> = {}
    clsFeeds[cls.inputNames[0]] = new ort.Tensor('float32', clsInput, [1, 3, CLS_IMAGE_H, CLS_IMAGE_W])
    const clsOut = await cls.run(clsFeeds)
    const clsData = clsOut[cls.outputNames[0]].data as Float32Array
    const label = clsData[0] >= clsData[1] ? 0 : 1
    const rotate = label === 1 && clsData[1] >= CLS_THRESH

    // rec：动态宽度
    const cw = b.x1 - b.x0, ch = b.y1 - b.y0
    const recW = Math.max(4, Math.min(REC_MAX_WIDTH, Math.round(REC_HEIGHT * (cw / Math.max(1, ch)))))
    const recInput = cropPreprocess(img, b.x0, b.y0, b.x1, b.y1, REC_HEIGHT, recW, rotate)
    const recFeeds: Record<string, ort.Tensor> = {}
    recFeeds[rec.inputNames[0]] = new ort.Tensor('float32', recInput, [1, 3, REC_HEIGHT, recW])
    const recOut = await rec.run(recFeeds)
    const preds = recOut[rec.outputNames[0]].data as Float32Array
    const T = Math.floor(preds.length / 6625)
    const text = ctcDecode(preds, T, dictList)
    if (text.trim()) { lines.push(text.trim()); finalBoxes.push(b) }
  }

  return { text: lines.join('\n'), boxes: finalBoxes, duration: Date.now() - t0 }
}