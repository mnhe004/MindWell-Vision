import Tesseract, { type Worker } from 'tesseract.js'
import { allDiseases } from '@/data/medical'
import type { CatalogDrug } from '@/data/departments'

const PATHS = {
  workerPath: '/tesseract/worker.min.js',
  corePath: '/tesseract-core/',
  langPath: '/tessdata/'
}

let workerPromise: Promise<Worker> | null = null
let progressHandler: ((p: number) => void) | null = null
let statusHandler: ((s: string) => void) | null = null

export function setOcrProgressHandler(fn: ((p: number) => void) | null) {
  progressHandler = fn
}

export function setOcrStatusHandler(fn: ((s: string) => void) | null) {
  statusHandler = fn
}

function status(s: string) {
  log('stage:', s)
  try { statusHandler?.(s) } catch {}
}

function log(...args: unknown[]) {
  try { console.log('[OCR]', ...args) } catch {}
}

function getWorker(): Promise<Worker> {
  if (!workerPromise) {
    status('正在创建识别引擎（加载核心）…')
    workerPromise = Tesseract.createWorker('chi_sim', 1, {
      ...PATHS,
      workerBlobURL: false,
      logger: (m) => {
        try {
          if (m.status === 'recognizing text' && progressHandler) progressHandler(m.progress ?? 0)
          log('status:', m.status, m.progress != null ? Math.round(m.progress * 100) + '%' : '')
        } catch {}
      }
    })
    workerPromise.then(() => status('识别引擎就绪')).catch((e) => { log('worker failed:', String(e)); status('引擎加载失败'); workerPromise = null })
  }
  return workerPromise
}

function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`${label} 超时（${Math.round(ms / 1000)}s）`)), ms)
    p.then((v) => { clearTimeout(t); resolve(v) }, (e) => { clearTimeout(t); reject(e) })
  })
}

export async function downscaleImage(src: string, maxDim = 1400): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      try {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height))
        const w = Math.max(1, Math.round(img.width * scale))
        const h = Math.max(1, Math.round(img.height * scale))
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d')
        if (!ctx) { resolve(src); return }
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, w, h)
        ctx.drawImage(img, 0, 0, w, h)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      } catch (e) { reject(e) }
    }
    img.onerror = () => reject(new Error('图片加载失败'))
    img.src = src
  })
}

export async function ocrImage(image: string): Promise<string> {
  status('正在压缩图片…')
  const small = await downscaleImage(image)
  status('正在加载中文识别模型…')
  const worker = await withTimeout(getWorker(), 90000, 'OCR 引擎加载')
  status('正在识别文字…')
  const { data } = await withTimeout(worker.recognize(small), 90000, '文字识别')
  log('recognized, text length:', data.text.length, 'first 40:', data.text.slice(0, 40))
  return data.text
}

export function normalizeText(s: string): string {
  return s.toLowerCase().replace(/[\s\p{P}]+/gu, '')
}

export interface MatchHit {
  drug: CatalogDrug
  diseaseName: string
  matched: string[]
}

export function identifyDrugs(text: string, limit = 8): MatchHit[] {
  const norm = normalizeText(text)
  if (!norm) return []
  const seen = new Set<string>()
  const hits: MatchHit[] = []
  for (const d of allDiseases) {
    for (const drug of d.drugs) {
      if (seen.has(drug.generic)) continue
      const matched: string[] = []
      for (const key of [drug.generic, drug.brand]) {
        const nk = normalizeText(key)
        if (nk.length >= 2 && norm.includes(nk)) matched.push(key)
      }
      if (matched.length > 0) {
        seen.add(drug.generic)
        hits.push({ drug, diseaseName: d.name, matched })
      }
    }
  }
  hits.sort((a, b) => bestLen(b) - bestLen(a))
  return hits.slice(0, limit)
}

function bestLen(h: MatchHit): number {
  return Math.max(...h.matched.map((m) => m.length))
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(r.result as string)
    r.onerror = () => reject(new Error('文件读取失败'))
    r.readAsDataURL(file)
  })
}