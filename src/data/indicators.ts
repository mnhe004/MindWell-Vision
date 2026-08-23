// 常见检查指标库：正常值参考 + 异常判断（用于问诊卡片与紧急信息卡）
export interface IndicatorDef {
  id: string
  name: string          // 中文名
  en?: string           // 英文/缩写
  unit: string
  normalLow: number     // 正常范围下限
  normalHigh: number    // 正常范围上限
  lowLabel?: string     // 低于下限的名称
  highLabel?: string    // 高于上限的名称
  relatedDiseases: string[]  // 关联疾病 id（用于按疾病提取）
  note?: string         // 备注（如男女差异）
}

export const INDICATORS: IndicatorDef[] = [
  // —— 血脂 ——
  { id: 'tc', name: '总胆固醇', en: 'TC', unit: 'mmol/L', normalLow: 2.8, normalHigh: 5.2, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['hyperlipid', 'chd'], note: '理想 <5.2' },
  { id: 'tg', name: '甘油三酯', en: 'TG', unit: 'mmol/L', normalLow: 0.45, normalHigh: 1.7, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['hyperlipid', 'nafld'] },
  { id: 'ldl', name: '低密度脂蛋白胆固醇', en: 'LDL-C', unit: 'mmol/L', normalLow: 1.0, normalHigh: 3.4, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['hyperlipid', 'chd'], note: '心脑血管高危人群应 <2.6' },
  { id: 'hdl', name: '高密度脂蛋白胆固醇', en: 'HDL-C', unit: 'mmol/L', normalLow: 1.0, normalHigh: 2.0, lowLabel: '偏低(不利)', highLabel: '良好', relatedDiseases: ['hyperlipid', 'chd'], note: '越高越好，<1.0 为异常' },
  // —— 血糖 ——
  { id: 'fbg', name: '空腹血糖', en: 'FPG', unit: 'mmol/L', normalLow: 3.9, normalHigh: 6.1, lowLabel: '低血糖', highLabel: '偏高', relatedDiseases: ['t2dm', 'gdm'] },
  { id: 'hba1c', name: '糖化血红蛋白', en: 'HbA1c', unit: '%', normalLow: 4.0, normalHigh: 6.0, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['t2dm'], note: '糖尿病患者目标 <7%' },
  { id: 'pg2h', name: '餐后2小时血糖', en: '2hPG', unit: 'mmol/L', normalLow: 3.9, normalHigh: 7.8, lowLabel: '低血糖', highLabel: '偏高', relatedDiseases: ['t2dm'] },
  // —— 血压（非抽血，但关键） ——
  { id: 'sbp', name: '收缩压（高压）', en: 'SBP', unit: 'mmHg', normalLow: 90, normalHigh: 140, lowLabel: '偏低', highLabel: '高血压', relatedDiseases: ['htn', 'chd', 'ckd'] },
  { id: 'dbp', name: '舒张压（低压）', en: 'DBP', unit: 'mmHg', normalLow: 60, normalHigh: 90, lowLabel: '偏低', highLabel: '高血压', relatedDiseases: ['htn', 'chd', 'ckd'] },
  // —— 肝功 ——
  { id: 'alt', name: '谷丙转氨酶', en: 'ALT', unit: 'U/L', normalLow: 7, normalHigh: 40, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['nafld', 'autoimmune-hepatitis'], note: '男性 <50，女性 <40 较常见' },
  { id: 'ast', name: '谷草转氨酶', en: 'AST', unit: 'U/L', normalLow: 13, normalHigh: 40, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['nafld', 'autoimmune-hepatitis'] },
  { id: 'ggt', name: 'γ-谷氨酰转肽酶', en: 'GGT', unit: 'U/L', normalLow: 7, normalHigh: 50, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['nafld'] },
  { id: 'tbili', name: '总胆红素', en: 'TBIL', unit: 'μmol/L', normalLow: 3.4, normalHigh: 20.5, lowLabel: '偏低', highLabel: '偏高(黄疸?)', relatedDiseases: ['autoimmune-hepatitis'] },
  // —— 肾功 ——
  { id: 'scr', name: '血肌酐', en: 'Cr', unit: 'μmol/L', normalLow: 44, normalHigh: 106, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['ckd', 'htn'] },
  { id: 'bun', name: '尿素氮', en: 'BUN', unit: 'mmol/L', normalLow: 2.9, normalHigh: 8.2, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['ckd'] },
  { id: 'ua', name: '尿酸', en: 'UA', unit: 'μmol/L', normalLow: 150, normalHigh: 420, lowLabel: '偏低', highLabel: '高尿酸', relatedDiseases: ['gout', 'ckd'], note: '男性 <420，女性 <360' },
  // —— 甲状腺 ——
  { id: 'tsh', name: '促甲状腺激素', en: 'TSH', unit: 'mIU/L', normalLow: 0.27, normalHigh: 4.2, lowLabel: '偏低(甲亢?)', highLabel: '偏高(甲减?)', relatedDiseases: ['hypothy', 'hyperthy'] },
  { id: 'ft3', name: '游离三碘甲状腺原氨酸', en: 'FT3', unit: 'pmol/L', normalLow: 3.1, normalHigh: 6.8, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['hyperthy', 'hypothy'] },
  { id: 'ft4', name: '游离甲状腺素', en: 'FT4', unit: 'pmol/L', normalLow: 12, normalHigh: 22, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['hypothy', 'hyperthy'] },
  // —— 血常规 ——
  { id: 'hb', name: '血红蛋白', en: 'Hb', unit: 'g/L', normalLow: 115, normalHigh: 175, lowLabel: '贫血', highLabel: '偏高', relatedDiseases: ['ida'], note: '男 >130，女 >115' },
  { id: 'wbc', name: '白细胞', en: 'WBC', unit: '×10⁹/L', normalLow: 3.5, normalHigh: 9.5, lowLabel: '偏低', highLabel: '偏高(感染?)', relatedDiseases: ['leukemia'] },
  { id: 'plt', name: '血小板', en: 'PLT', unit: '×10⁹/L', normalLow: 125, normalHigh: 350, lowLabel: '偏低(出血风险)', highLabel: '偏高', relatedDiseases: ['leukemia'] },
  { id: 'neu', name: '中性粒细胞', en: 'NEUT', unit: '×10⁹/L', normalLow: 1.8, normalHigh: 6.3, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['leukemia', 'cold'] },
  // —— 其他 ——
  { id: 'crp', name: 'C反应蛋白', en: 'CRP', unit: 'mg/L', normalLow: 0, normalHigh: 8, lowLabel: '-', highLabel: '偏高(炎症?)', relatedDiseases: ['ra', 'sle', 'cold'] },
  { id: 'esr', name: '血沉', en: 'ESR', unit: 'mm/h', normalLow: 0, normalHigh: 20, lowLabel: '-', highLabel: '偏高', relatedDiseases: ['ra', 'sle'] },
  { id: 'ca', name: '血钙', en: 'Ca', unit: 'mmol/L', normalLow: 2.1, normalHigh: 2.6, lowLabel: '偏低', highLabel: '偏高', relatedDiseases: ['osteoporosis'] },
  { id: 'vitd', name: '维生素D', en: '25(OH)D', unit: 'ng/mL', normalLow: 20, normalHigh: 50, lowLabel: '缺乏', highLabel: '偏高', relatedDiseases: ['osteoporosis', 'sarcopenia'] },
  { id: 'k', name: '血钾', en: 'K', unit: 'mmol/L', normalLow: 3.5, normalHigh: 5.5, lowLabel: '低钾', highLabel: '高钾', relatedDiseases: ['ckd', 'hf'] },
  { id: 'na', name: '血钠', en: 'Na', unit: 'mmol/L', normalLow: 137, normalHigh: 147, lowLabel: '低钠', highLabel: '高钠', relatedDiseases: ['hf', 'ckd'] }
]

export function findIndicator(name: string): IndicatorDef | undefined {
  const n = name.toLowerCase()
  return INDICATORS.find((i) => i.name === name || (i.en ?? '').toLowerCase() === n || name.includes(i.name.slice(0, 2)))
}

export function indicatorStatus(def: IndicatorDef, value: number): 'low' | 'normal' | 'high' {
  if (value < def.normalLow) return 'low'
  if (value > def.normalHigh) return 'high'
  return 'normal'
}

// 解析指标值（容忍单位前缀如 "5.2"、">5.2"、"5.2↑"）
export function parseIndicatorValue(raw: string): number | null {
  const m = raw.replace(/[<>=↑↓\s]/g, '').match(/^\d+(\.\d+)?/)
  return m ? parseFloat(m[0]) : null
}