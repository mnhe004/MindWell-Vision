import type { CatalogDrug } from './departments'

// 用药库扩容AA：子疾病/分型用药（肾病分型、心梗心绞痛、消化溃疡、头痛、肝炎、骨关节炎等）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'iga-nephritis': [
    { id: 'losartan-iga', generic: '氯沙坦钾片', brand: '科素亚', origin: '进口', spec: '50mg×7片/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'pred-iga', generic: '泼尼松片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '20mg', times: ['早饭后'] }
  ],
  'membranous-neph': [
    { id: 'pred-mn', generic: '泼尼松片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'tacrolimus-mn', generic: '他克莫司胶囊', brand: '普乐可复', origin: '进口', spec: '0.5mg×50粒/盒', perDose: '1mg', times: ['早饭后', '晚饭后'] }
  ],
  'minimal-change': [
    { id: 'pred-mc', generic: '泼尼松片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '40mg', times: ['早饭后'] }
  ],
  fsgs: [
    { id: 'pred-fsgs', generic: '泼尼松片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '40mg', times: ['早饭后'] },
    { id: 'ciclosporin-fsgs', generic: '环孢素软胶囊', brand: '新山地明', origin: '进口', spec: '25mg×50粒/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
  ],
  'lupus-nephritis': [
    { id: 'hcq-ln', generic: '羟氯喹片', brand: '赛能', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] },
    { id: 'pred-ln', generic: '泼尼松片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'mmf-ln', generic: '吗替麦考酚酯', brand: '骁悉', origin: '进口', spec: '250mg×40粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
  ],
  'henoch-nephritis': [
    { id: 'pred-hn', generic: '泼尼松片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '20mg', times: ['早饭后'] }
  ],
  'diabetic-nephropathy': [
    { id: 'dapagliflozin-dn', generic: '达格列净片', brand: '安达唐', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭前'] },
    { id: 'valsartan-dn', generic: '缬沙坦胶囊', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] }
  ],
  'hypertensive-nephropathy': [
    { id: 'losartan-hn2', generic: '氯沙坦钾片', brand: '科素亚', origin: '进口', spec: '50mg×7片/盒', perDose: '50mg', times: ['早饭后'] }
  ],
  lada: [
    { id: 'insulin-lada', generic: '甘精胰岛素注射液', brand: '来得时', origin: '进口', spec: '300IU/3ml预充笔', perDose: '10IU', times: ['睡前'] }
  ],
  hashimoto: [
    { id: 'lt4-hashimoto', generic: '左甲状腺素钠片', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] }
  ],
  'tophaceous-gout': [
    { id: 'febuxostat-tg', generic: '非布司他片', brand: '优立通', origin: '国产', spec: '40mg×14片/盒', perDose: '40mg', times: ['早饭后'] },
    { id: 'allopurinol-tg', generic: '别嘌醇片', brand: '国产', origin: '国产', spec: '100mg×100片/盒', perDose: '100mg', times: ['早饭后'] }
  ],
  'renal-htn': [
    { id: 'amlodipine-rh', generic: '苯磺酸氨氯地平片', brand: '络活喜', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['早饭后'] }
  ],
  'pregnancy-htn': [
    { id: 'labetalol-ph', generic: '盐酸拉贝洛尔片', brand: '国产', origin: '国产', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'nifedipine-ph', generic: '硝苯地平片', brand: '国产', origin: '国产', spec: '10mg×100片/瓶', perDose: '10mg', times: ['早饭后'] }
  ],
  'stable-angina': [
    { id: 'nitroglycerin-sa', generic: '硝酸甘油片', brand: '国产', origin: '国产', spec: '0.5mg×100片/瓶', perDose: '0.5mg', times: ['早饭后'] },
    { id: 'aspirin-sa', generic: '阿司匹林肠溶片', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] },
    { id: 'atorva-sa', generic: '阿托伐他汀钙片', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
  ],
  mi: [
    { id: 'aspirin-mi', generic: '阿司匹林肠溶片', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] },
    { id: 'clopidogrel-mi', generic: '硫酸氢氯吡格雷片', brand: '波立维', origin: '进口', spec: '75mg×7片/盒', perDose: '75mg', times: ['早饭后'] },
    { id: 'atorva-mi', generic: '阿托伐他汀钙片', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
  ],
  'viral-pneumonia': [
    { id: 'oseltamivir-vp', generic: '磷酸奥司他韦胶囊', brand: '达菲', origin: '进口', spec: '75mg×10粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] },
    { id: 'ribavirin', generic: '利巴韦林片', brand: '国产', origin: '国产', spec: '0.1g×24片/盒', perDose: '0.15g', times: ['早饭后', '晚饭后'] }
  ],
  'fungal-pneumonia': [
    { id: 'fluconazole-fp', generic: '氟康唑胶囊', brand: '大扶康', origin: '进口', spec: '150mg×1粒/盒', perDose: '150mg', times: ['早饭后'] },
    { id: 'voriconazole', generic: '伏立康唑片', brand: '国产', origin: '国产', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后', '晚饭后'] }
  ],
  'atrophic-gastritis': [
    { id: 'morodan-ag', generic: '摩罗丹', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'folic-ag', generic: '叶酸片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后'] }
  ],
  'gastric-ulcer': [
    { id: 'omeprazole-gu', generic: '奥美拉唑肠溶胶囊', brand: '洛赛克', origin: '进口', spec: '20mg×14粒/盒', perDose: '20mg', times: ['早饭前'] },
    { id: 'bismuth-gu', generic: '胶体果胶铋胶囊', brand: '国产', origin: '国产', spec: '50mg×24粒/盒', perDose: '150mg', times: ['早饭后', '晚饭后'] },
    { id: 'clarithromycin-gu', generic: '克拉霉素片', brand: '克拉仙', origin: '进口', spec: '0.25g×8片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  'duodenal-ulcer': [
    { id: 'rabeprazole-du', generic: '雷贝拉唑钠肠溶片', brand: '波利特', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭前'] }
  ],
  'tension-headache': [
    { id: 'ibuprofen-th', generic: '布洛芬缓释胶囊', brand: '芬必得', origin: '国产', spec: '0.3g×20粒/盒', perDose: '0.3g', times: ['早饭后'] },
    { id: 'paracetamol-th', generic: '对乙酰氨基酚片', brand: '泰诺林', origin: '进口', spec: '0.5g×10片/盒', perDose: '0.5g', times: ['早饭后'] }
  ],
  'cluster-headache': [
    { id: 'sumatriptan-ch', generic: '琥珀酸舒马普坦片', brand: '英明格', origin: '进口', spec: '50mg×2片/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'verapamil-ch', generic: '维拉帕米片', brand: '国产', origin: '国产', spec: '40mg×30片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  hcv: [
    { id: 'sofosbuvir', generic: '索磷布韦片', brand: '索华迪', origin: '进口', spec: '400mg×28片/盒', perDose: '400mg', times: ['早饭后'] },
    { id: 'daclatasvir', generic: '达拉他韦片', brand: '国产', origin: '国产', spec: '60mg×28片/盒', perDose: '60mg', times: ['早饭后'] }
  ],
  hav: [
    { id: 'silybin-hav', generic: '水飞蓟宾胶囊', brand: '益肝灵', origin: '国产', spec: '35mg×60片/盒', perDose: '70mg', times: ['早饭后', '晚饭后'] }
  ],
  aih: [
    { id: 'pred-aih', generic: '泼尼松片', brand: '国产', origin: '国产', spec: '5mg×100片/瓶', perDose: '30mg', times: ['早饭后'] },
    { id: 'azathioprine-aih', generic: '硫唑嘌呤片', brand: '国产', origin: '国产', spec: '50mg×100片/盒', perDose: '50mg', times: ['早饭后'] }
  ],
  'knee-oa': [
    { id: 'celecoxib-koa', generic: '塞来昔布胶囊', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
    { id: 'glucosamine-koa', generic: '硫酸氨基葡萄糖胶囊', brand: '维固力', origin: '进口', spec: '250mg×20粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
  ],
  'contact-dermatitis': [
    { id: 'loratadine-cd', generic: '氯雷他定片', brand: '开瑞坦', origin: '进口', spec: '10mg×6片/盒', perDose: '10mg', times: ['睡前'] },
    { id: 'hydrocortisone-cd', generic: '氢化可的松乳膏', brand: '国产', origin: '国产', spec: '1%×10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ]
}