import { departments, type Department, type Disease, type CatalogDrug } from './departments'
import { moreDepartments } from './departments2'
import { subDiseases } from './departments3'
import { extraDrugs } from './drugs2'
import { extraDrugs as extraDrugs3 } from './drugs3'
import { extraDrugs as extraDrugs4 } from './drugs4'
import { extraDrugs as extraDrugs5 } from './drugs5'
import { extraDrugs as extraDrugs6 } from './drugs6'
import { extraDrugs as extraDrugs7 } from './drugs7'
import { extraDrugs as extraDrugs8 } from './drugs8'
import { extraDrugs as extraDrugs9 } from './drugs9'
import { extraDrugs as extraDrugs10 } from './drugs10'
import { extraDrugs as extraDrugs11 } from './drugs11'
import { extraDrugs as extraDrugs12 } from './drugs12'
import { extraDrugs as extraDrugs13 } from './drugs13'
import { extraDrugs as extraDrugs14 } from './drugs14'
import { extraDrugs as extraDrugs15 } from './drugs15'
import { extraDrugs as extraDrugs16 } from './drugs16'
import { extraDrugs as extraDrugs17 } from './drugs17'
import { extraDrugs as extraDrugs18 } from './drugs18'
import { extraDrugs as extraDrugs19 } from './drugs19'
import { extraDrugs as extraDrugs20 } from './drugs20'
import { extraDrugs as extraDrugs21 } from './drugs21'
import { extraDrugs as extraDrugs22 } from './drugs22'
import { extraDrugs as extraDrugs23 } from './drugs23'
import { extraDrugs as extraDrugs24 } from './drugs24'
import { extraDrugs as extraDrugs25 } from './drugs25'
import { extraDrugs as extraDrugs26 } from './drugs26'
import { extraDrugs as extraDrugs27 } from './drugs27'
import { extraDrugs as extraDrugs28 } from './drugs28'
import { extraDrugs as extraDrugs29 } from './drugs29'
import { extraDrugs as extraDrugs30 } from './drugs30'
import { moreDepartments2 } from './departments4'
import { moreDepartments3 } from './departments5'
import { moreDepartments4 } from './departments6'
import { moreDepartments5 } from './departments7'
import { moreDepartments6 } from './departments8'
import { moreDepartments7 } from './departments9'

export const TIME_SLOTS = ['醒来', '早饭前', '早饭后', '午饭前', '午饭后', '晚饭前', '晚饭后', '空腹', '睡前'] as const

export const TIME_SLOT_DEFAULTS: Record<string, string> = {
  '醒来': '07:00',
  '早饭前': '07:00',
  '早饭后': '08:00',
  '午饭前': '11:30',
  '午饭后': '12:30',
  '晚饭前': '17:30',
  '晚饭后': '18:30',
  '空腹': '10:00',
  '睡前': '21:30'
}

function mergeDepartments(): Department[] {
  const allExtras = [...moreDepartments, ...moreDepartments2, ...moreDepartments3, ...moreDepartments4, ...moreDepartments5, ...moreDepartments6, ...moreDepartments7]
  // 先合并同名科室的疾病（不丢数据）
  const merged = departments.map((d) => {
    const extras = allExtras.filter((md) => md.id === d.id)
    const extraDiseases = extras.flatMap((e) => e.diseases)
    return extraDiseases.length ? { ...d, diseases: [...d.diseases, ...extraDiseases] } : d
  })
  // 新科室（含存在于 allExtras 但不在基础库的）：先收集所有 extras 科室，同名合并，再与 merged 去重
  const knownIds = new Set(merged.map((d) => d.id))
  const extraDeptMap = new Map<string, Department>()
  for (const md of allExtras) {
    if (knownIds.has(md.id)) continue
    const existing = extraDeptMap.get(md.id)
    if (existing) existing.diseases = [...existing.diseases, ...md.diseases]
    else extraDeptMap.set(md.id, { ...md, diseases: [...md.diseases] })
  }
  return [...merged, ...Array.from(extraDeptMap.values())]
}

export const allDepartments: Department[] = mergeDepartments()

export const allDiseases: Disease[] = (() => {
  const base = [...allDepartments.flatMap((d) => d.diseases), ...subDiseases]
  const mergedExtra: Record<string, CatalogDrug[]> = {}
  for (const rec of [extraDrugs, extraDrugs3, extraDrugs4, extraDrugs5, extraDrugs6, extraDrugs7, extraDrugs8, extraDrugs9, extraDrugs10, extraDrugs11, extraDrugs12, extraDrugs13, extraDrugs14, extraDrugs15, extraDrugs16, extraDrugs17, extraDrugs18, extraDrugs19, extraDrugs20, extraDrugs21, extraDrugs22, extraDrugs23, extraDrugs24, extraDrugs25, extraDrugs26, extraDrugs27, extraDrugs28, extraDrugs29, extraDrugs30]) {
    for (const [k, arr] of Object.entries(rec)) {
      mergedExtra[k] = [...(mergedExtra[k] ?? []), ...arr]
    }
  }
  for (const d of base) {
    const extra = mergedExtra[d.id]
    if (extra && extra.length) d.drugs = [...d.drugs, ...extra]
  }
  return base
})()

export function findSubDiseases(parentId: string): Disease[] {
  return subDiseases.filter((d) => d.parentId === parentId)
}

export function findDepartment(id: string): Department | undefined {
  return allDepartments.find((d) => d.id === id)
}

export function findDisease(id: string): Disease | undefined {
  return allDiseases.find((d) => d.id === id)
}

// 按中文名/简称反查疾病（报告里存的是显示名，指标关联需要规范 id）
export function findDiseaseByName(name: string): Disease | undefined {
  const n = name.trim()
  if (!n) return undefined
  return allDiseases.find((d) => d.name === n || d.name.includes(n) || n.includes(d.name))
}

export interface DrugHit {
  drug: CatalogDrug
  disease: Disease
}

export function searchDrugs(query: string, diseaseId?: string, limit = 8): DrugHit[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const pool: DrugHit[] = allDiseases.flatMap((d) => d.drugs.map((drug) => ({ drug, disease: d })))
  const match = (s: string) => s.toLowerCase().includes(q)
  let results = pool.filter(({ drug }) => match(drug.generic) || match(drug.brand))
  if (diseaseId) {
    results = results.sort((a, b) => (a.disease.id === diseaseId ? 0 : 1) - (b.disease.id === diseaseId ? 0 : 1))
  }
  const seen = new Set<string>()
  const out: DrugHit[] = []
  for (const r of results) {
    if (seen.has(r.drug.generic)) continue
    seen.add(r.drug.generic)
    out.push(r)
    if (out.length >= limit) break
  }
  return out
}