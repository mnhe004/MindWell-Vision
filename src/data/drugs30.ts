import type { CatalogDrug } from './departments'

// 用药库扩容AD：抗菌/抗病毒/心血管/神经/帕金森 等二线药 最终补充
export const extraDrugs: Record<string, CatalogDrug[]> = {
  septicemia: [
    { id: 'meropenem', generic: '美罗培南', brand: '美平', origin: '进口', spec: '0.5g/支', perDose: '0.5g', times: ['早饭后'] },
    { id: 'linezolid', generic: '利奈唑胺片', brand: '斯沃', origin: '进口', spec: '600mg×10片/盒', perDose: '600mg', times: ['早饭后', '晚饭后'] },
    { id: 'tigecycline', generic: '替加环素', brand: '泰阁', origin: '进口', spec: '50mg/支', perDose: '50mg', times: ['早饭后'] }
  ],
  pneumonia: [
    { id: 'ceftazidime', generic: '头孢他啶', brand: '复达欣', origin: '进口', spec: '1g/支', perDose: '1g', times: ['早饭后'] },
    { id: 'ceftizoxime', generic: '头孢唑肟', brand: '国产', origin: '国产', spec: '1g/支', perDose: '1g', times: ['早饭后'] },
    { id: 'aztreonam', generic: '氨曲南', brand: '国产', origin: '国产', spec: '0.5g/支', perDose: '0.5g', times: ['早饭后'] }
  ],
  chb: [
    { id: 'adefovir', generic: '阿德福韦酯片', brand: '国产', origin: '国产', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] },
    { id: 'telbivudine', generic: '替比夫定片', brand: '国产', origin: '国产', spec: '600mg×7片/盒', perDose: '600mg', times: ['早饭后'] }
  ],
  'cryptococcal-meningitis': [
    { id: 'caspofungin', generic: '卡泊芬净', brand: '科赛斯', origin: '进口', spec: '50mg/支', perDose: '50mg', times: ['早饭后'] }
  ],
  hf: [
    { id: 'dopamine', generic: '盐酸多巴胺注射液', brand: '国产', origin: '国产', spec: '20mg/2ml×10支/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'dobutamine', generic: '盐酸多巴酚丁胺注射液', brand: '国产', origin: '国产', spec: '20mg/2ml×10支/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'bumetanide', generic: '布美他尼片', brand: '国产', origin: '国产', spec: '1mg×24片/盒', perDose: '1mg', times: ['早饭后'] }
  ],
  parkinson: [
    { id: 'entacapone-cn', generic: '恩他卡朋片', brand: '珂丹', origin: '进口', spec: '200mg×30片/盒', perDose: '200mg', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'ropinirole', generic: '盐酸罗匹尼罗片', brand: '国产', origin: '国产', spec: '0.25mg×30片/盒', perDose: '0.25mg', times: ['早饭后', '午饭后', '晚饭后'] }
  ],
  depression: [
    { id: 'mianserin', generic: '盐酸米安色林片', brand: '国产', origin: '国产', spec: '30mg×14片/盒', perDose: '30mg', times: ['睡前'] }
  ],
  anxiety: [
    { id: 'buspirone-cn', generic: '盐酸丁螺环酮片', brand: '国产', origin: '国产', spec: '5mg×20片/盒', perDose: '5mg', times: ['早饭后', '晚饭后'] }
  ],
  'lumbar-hernia': [
    { id: 'zhongtongan', generic: '肿痛安胶囊', brand: '国产', origin: '国产', spec: '0.28g×36粒/盒', perDose: '0.56g', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'shexiang-haitie', generic: '麝香海马追风膏', brand: '国产', origin: '国产', spec: '7cm×10cm×6贴/盒', perDose: '1贴', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'xuanfei-zhike', generic: '宣肺止嗽合剂', brand: '国产', origin: '国产', spec: '120ml/瓶', perDose: '20ml', times: ['早饭后', '晚饭后'] }
  ]
}