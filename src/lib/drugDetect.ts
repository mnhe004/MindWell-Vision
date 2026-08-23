// YOLOv11 药盒检测（onnxruntime-web）——与 PaddleOCR 配合：先检测药盒位置，再裁剪识别
// 模型：medical-pills 数据集训练（YOLO11n，mAP50=0.993），单类 'pill'
import * as ort from 'onnxruntime-web'

const MODEL = '/models/yolo/pills.onnx'
const CONF_THRESH = 0.35
const NMS_IOU = 0.45
const IMG_SIZE = 640

let session: ort.InferenceSession | null = null

export async function getPillSession(): Promise<ort.InferenceSession> {
  if (!session) {
    ort.env.wasm.wasmPaths = '/ort/'
    ort.env.wasm.numThreads = 1
    session = await ort.InferenceSession.create(MODEL, { executionProviders: ['wasm'] })
  }
  return session
}

export interface DetectBox {
  x0: number; y0: number; x1: number; y1: number
  conf: number
}

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

// 等比缩放 + letterbox 到 640x640（与训练一致）
function preprocess(canvas: HTMLCanvasElement): { input: Float32Array; scale: number; padX: number; padY: number } {
  const ctx = canvas.getContext('2d')!
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
  const sw = canvas.width, sh = canvas.height
  const scale = Math.min(IMG_SIZE / sw, IMG_SIZE / sh)
  const nw = Math.round(sw * scale), nh = Math.round(sh * scale)
  const padX = Math.round((IMG_SIZE - nw) / 2), padY = Math.round((IMG_SIZE - nh) / 2)
  const out = new Float32Array(3 * IMG_SIZE * IMG_SIZE)
  for (let y = 0; y < nh; y++) {
    const sy = Math.min(sh - 1, Math.floor(y / scale))
    for (let x = 0; x < nw; x++) {
      const sx = Math.min(sw - 1, Math.floor(x / scale))
      const si = (sy * sw + sx) * 4
      const ox = x + padX, oy = y + padY
      const oi = oy * IMG_SIZE + ox
      out[oi] = data[si] / 255
      out[IMG_SIZE * IMG_SIZE + oi] = data[si + 1] / 255
      out[2 * IMG_SIZE * IMG_SIZE + oi] = data[si + 2] / 255
    }
  }
  return { input: out, scale, padX, padY }
}

function nms(boxes: { x0: number; y0: number; x1: number; y1: number; conf: number }[]): typeof boxes {
  const sorted = [...boxes].sort((a, b) => b.conf - a.conf)
  const keep: typeof boxes = []
  for (const b of sorted) {
    let overlap = false
    for (const k of keep) {
      const ix = Math.max(0, Math.min(b.x1, k.x1) - Math.max(b.x0, k.x0))
      const iy = Math.max(0, Math.min(b.y1, k.y1) - Math.max(b.y0, k.y0))
      const inter = ix * iy
      const union = (b.x1 - b.x0) * (b.y1 - b.y0) + (k.x1 - k.x0) * (k.y1 - k.y0) - inter
      if (union > 0 && inter / union > NMS_IOU) { overlap = true; break }
    }
    if (!overlap) keep.push(b)
  }
  return keep
}

export async function detectPills(dataUrl: string): Promise<DetectBox[]> {
  const sess = await getPillSession()
  const canvas = await loadImageToCanvas(dataUrl)
  const { input, scale, padX, padY } = preprocess(canvas)
  const feeds: Record<string, ort.Tensor> = {}
  feeds[sess.inputNames[0]] = new ort.Tensor('float32', input, [1, 3, IMG_SIZE, IMG_SIZE])
  const results = await sess.run(feeds)
  const out = results[sess.outputNames[0]].data as Float32Array
  // [1, 5, 8400]：每列 = [x_center, y_center, w, h, conf]
  const N = 8400
  const raw: { x0: number; y0: number; x1: number; y1: number; conf: number }[] = []
  for (let i = 0; i < N; i++) {
    const conf = out[4 * N + i]
    if (conf < CONF_THRESH) continue
    const cx = out[0 * N + i]
    const cy = out[1 * N + i]
    const w = out[2 * N + i]
    const h = out[3 * N + i]
    // letterbox 逆变换回原图坐标
    const x0 = (cx - w / 2 - padX) / scale
    const y0 = (cy - h / 2 - padY) / scale
    const x1 = (cx + w / 2 - padX) / scale
    const y1 = (cy + h / 2 - padY) / scale
    raw.push({ x0: Math.max(0, x0), y0: Math.max(0, y0), x1: Math.min(canvas.width, x1), y1: Math.min(canvas.height, y1), conf })
  }
  return nms(raw).map((b) => ({ x0: Math.round(b.x0), y0: Math.round(b.y0), x1: Math.round(b.x1), y1: Math.round(b.y1), conf: b.conf }))
}