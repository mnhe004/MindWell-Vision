import * as ort from 'onnxruntime-web'
import { FOOD101, type Nutrition } from '@/data/nutrition'

// Food-101 标准类别顺序（按字母序，与模型训练一致）
export const FOOD_CLASSES = [
  'apple_pie', 'baby_back_ribs', 'baklava', 'beef_carpaccio', 'beef_tartare', 'beet_salad', 'beignets', 'bibimbap',
  'bread_pudding', 'breakfast_burrito', 'bruschetta', 'caesar_salad', 'cannoli', 'caprese_salad', 'carrot_cake', 'ceviche',
  'cheesecake', 'cheese_plate', 'chicken_curry', 'chicken_quesadilla', 'chicken_wings', 'chocolate_cake', 'chocolate_mousse', 'churros',
  'clam_chowder', 'club_sandwich', 'crab_cakes', 'creme_brulee', 'croque_madame', 'cup_cakes', 'deviled_eggs', 'donuts',
  'dumplings', 'edamame', 'eggs_benedict', 'escargots', 'falafel', 'filet_mignon', 'fish_and_chips', 'foie_gras',
  'french_fries', 'french_onion_soup', 'french_toast', 'fried_calamari', 'fried_rice', 'frozen_yogurt', 'garlic_bread', 'gnocchi',
  'greek_salad', 'grilled_cheese_sandwich', 'grilled_salmon', 'guacamole', 'gyoza', 'hamburger', 'hot_and_sour_soup', 'hot_dog',
  'huevos_rancheros', 'hummus', 'ice_cream', 'lasagna', 'lobster_bisque', 'lobster_roll_sandwich', 'macaroni_and_cheese', 'macarons',
  'miso_soup', 'mussels', 'nachos', 'omelette', 'onion_rings', 'oysters', 'pad_thai', 'paella',
  'pancakes', 'panna_cotta', 'peking_duck', 'pho', 'pizza', 'pork_chop', 'poutine', 'prime_rib',
  'pulled_pork_sandwich', 'ramen', 'ravioli', 'red_velvet_cake', 'risotto', 'samosa', 'sashimi', 'scallops',
  'seaweed_salad', 'shrimp_and_grits', 'spaghetti_bolognese', 'spaghetti_carbonara', 'spring_rolls', 'steak', 'strawberry_shortcake', 'sushi',
  'tacos', 'takoyaki', 'tiramisu', 'tuna_tartare', 'waffles'
]

export interface FoodPrediction {
  cls: string
  zh: string
  emoji: string
  prob: number
  nutrition: Nutrition | undefined
}

let session: ort.InferenceSession | null = null

export async function getFoodSession(): Promise<ort.InferenceSession> {
  if (!session) {
    ort.env.wasm.wasmPaths = '/ort/'
    ort.env.wasm.numThreads = 1
    session = await ort.InferenceSession.create('/models/food101.onnx', { executionProviders: ['wasm'] })
  }
  return session
}

function loadImage(src: string, size: number): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')
      if (!ctx) { reject(new Error('canvas fail')); return }
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, size, size)
      const scale = Math.max(size / img.width, size / img.height)
      const w = img.width * scale
      const h = img.height * scale
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h)
      resolve(canvas)
    }
    img.onerror = () => reject(new Error('图片加载失败'))
    img.src = src
  })
}

function preprocess(canvas: HTMLCanvasElement): Float32Array {
  const ctx = canvas.getContext('2d')!
  const data = ctx.getImageData(0, 0, 224, 224).data
  const mean = [0.485, 0.456, 0.406]
  const std = [0.229, 0.224, 0.225]
  const out = new Float32Array(3 * 224 * 224)
  for (let i = 0; i < 224 * 224; i++) {
    const r = data[i * 4] / 255
    const g = data[i * 4 + 1] / 255
    const b = data[i * 4 + 2] / 255
    out[i] = (r - mean[0]) / std[0]
    out[224 * 224 + i] = (g - mean[1]) / std[1]
    out[2 * 224 * 224 + i] = (b - mean[2]) / std[2]
  }
  return out
}

export async function classifyFood(dataUrl: string, topK = 5): Promise<FoodPrediction[]> {
  const sess = await getFoodSession()
  const canvas = await loadImage(dataUrl, 224)
  const input = preprocess(canvas)
  const feeds: Record<string, ort.Tensor> = {}
  feeds[sess.inputNames[0]] = new ort.Tensor('float32', input, [1, 3, 224, 224])
  const results = await sess.run(feeds)
  const out = results[sess.outputNames[0]].data as Float32Array
  const max = Math.max(...out)
  const exps = Array.from(out).map((v) => Math.exp(v - max))
  const sum = exps.reduce((a, b) => a + b, 0)
  const probs = exps.map((v) => v / sum)
  const idx = Array.from(out.keys()).sort((a, b) => probs[b] - probs[a]).slice(0, topK)
  return idx.map((i) => {
    const cls = FOOD_CLASSES[i] ?? 'unknown'
    const n = FOOD101[cls]
    return { cls, zh: n?.zh ?? cls, emoji: n?.emoji ?? '🍽️', prob: probs[i], nutrition: n }
  })
}