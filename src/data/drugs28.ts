import type { CatalogDrug } from './departments'

// 用药库扩容AB：男科/睡眠/整形 + 更多中成药与二线西药
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'andro-male-infertility': [
    { id: 'levocarnitine-male', generic: '左卡尼汀口服液', brand: '国产', origin: '国产', spec: '1g/10ml×10支/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'shengjing-male', generic: '生精片', brand: '国产', origin: '国产', spec: '0.5g×24片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  'andro-androgen-deficiency': [
    { id: 'testosterone-undecanoate', generic: '十一酸睾酮软胶囊', brand: '安特尔', origin: '进口', spec: '40mg×16粒/盒', perDose: '80mg', times: ['早饭后'] }
  ],
  'plastic-hypertrophic-scar': [
    { id: 'silicone-gel', generic: '硅酮凝胶', brand: '倍舒痕', origin: '进口', spec: '15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  'plastic-scar-revision': [
    { id: 'silicone-sheet', generic: '硅酮贴片', brand: '国产', origin: '国产', spec: '12cm×6cm/片', perDose: '贴敷', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'banxia-zhike', generic: '半夏止咳糖浆', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '15ml', times: ['早饭后', '晚饭后'] },
    { id: 'fufang-gancao-kf', generic: '复方甘草口服液', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'shidishui', generic: '十滴水', brand: '国产', origin: '国产', spec: '5ml×10支/盒', perDose: '5ml', times: ['早饭后'] }
  ],
  'qi-blood-def': [
    { id: 'guifu-lizhong', generic: '桂附理中丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  migraine: [
    { id: 'ergotamine', generic: '麦角胺咖啡因片', brand: '国产', origin: '国产', spec: '复方×20片/盒', perDose: '2片', times: ['早饭后'] }
  ],
  htn: [
    { id: 'aliskiren', generic: '阿利吉仑片', brand: '国产', origin: '国产', spec: '150mg×7片/盒', perDose: '150mg', times: ['早饭后'] }
  ],
  af: [
    { id: 'propafenone-cn', generic: '盐酸普罗帕酮片', brand: '心律平', origin: '国产', spec: '50mg×50片/盒', perDose: '150mg', times: ['早饭后', '晚饭后'] },
    { id: 'amiodarone-cn', generic: '盐酸胺碘酮片', brand: '可达龙', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] }
  ],
  hf: [
    { id: 'sacubitril', generic: '沙库巴曲缬沙坦钠片', brand: '诺欣妥', origin: '进口', spec: '100mg×14片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] }
  ],
  gastritis: [
    { id: 'teprenone-cn', generic: '替普瑞酮胶囊', brand: '施维舒', origin: '进口', spec: '50mg×20粒/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
  ],
  nafl: [
    { id: 'bicyclol-cn', generic: '双环醇片', brand: '百赛诺', origin: '国产', spec: '25mg×18片/盒', perDose: '25mg', times: ['早饭后', '晚饭后'] }
  ],
  ckd: [
    { id: 'alpha-ketoacid', generic: '复方α-酮酸片', brand: '开同', origin: '进口', spec: '0.63g×100片/盒', perDose: '2.52g', times: ['早饭后', '午饭后', '晚饭后'] }
  ],
  ra: [
    { id: 'leflunomide-cn', generic: '来氟米特片', brand: '爱若华', origin: '国产', spec: '10mg×16片/盒', perDose: '20mg', times: ['早饭后'] }
  ],
  'geriatric-cognitive-impairment': [
    { id: 'donepezil-cn', generic: '盐酸多奈哌齐片', brand: '安理申', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['睡前'] },
    { id: 'memantine-cn', generic: '盐酸美金刚片', brand: '易倍申', origin: '进口', spec: '10mg×28片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  'geriatric-urinary-incontinence': [
    { id: 'solifenacin-cn', generic: '琥珀酸索利那新片', brand: '卫喜康', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后'] }
  ],
  'sleep-night-terrors': [
    { id: 'melatonin-nt', generic: '褪黑素片', brand: '国产', origin: '国产', spec: '3mg×60片/盒', perDose: '3mg', times: ['睡前'] }
  ]
}