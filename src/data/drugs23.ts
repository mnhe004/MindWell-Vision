import type { CatalogDrug } from './departments'

// 用药库扩容W：更多二线西药（利尿/抗生素/眼科/耳鼻喉/皮肤/骨科/神经）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  htn: [
    { id: 'torasemide', generic: '托拉塞米', brand: '国产', origin: '国产', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] },
    { id: 'amiloride', generic: '阿米洛利', brand: '国产', origin: '国产', spec: '2.5mg×24片/盒', perDose: '2.5mg', times: ['早饭后'] },
    { id: 'clonidine', generic: '可乐定', brand: '国产', origin: '国产', spec: '75μg×100片/瓶', perDose: '75μg', times: ['早饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'pancreatin', generic: '胰酶肠溶胶囊', brand: '得每通', origin: '进口', spec: '150mg×20粒/盒', perDose: '300mg', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'cefalexin', generic: '头孢氨苄', brand: '国产', origin: '国产', spec: '0.25g×24片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'cefradine', generic: '头孢拉定', brand: '国产', origin: '国产', spec: '0.25g×24片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  'herpes-zoster': [
    { id: 'ganciclovir', generic: '更昔洛韦', brand: '国产', origin: '国产', spec: '0.25g/支', perDose: '0.25g', times: ['早饭后'] }
  ],
  'dryeye': [
    { id: 'polyethylene-glycol', generic: '聚乙二醇滴眼液', brand: '思然', origin: '进口', spec: '0.4%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] },
    { id: 'carbomer-eye', generic: '卡波姆眼用凝胶', brand: '国产', origin: '国产', spec: '0.2%×5g/支', perDose: '适量', times: ['睡前'] }
  ],
  rhinitis: [
    { id: 'oxymetazoline', generic: '盐酸羟甲唑啉喷雾', brand: '国产', origin: '国产', spec: '0.05%×10ml/瓶', perDose: '喷鼻', times: ['早饭后', '晚饭后'] },
    { id: 'eucalyptus', generic: '桉柠蒎肠溶软胶囊', brand: '国产', origin: '国产', spec: '0.3g×18粒/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] }
  ],
  acne: [
    { id: 'mupirocin', generic: '莫匹罗星软膏', brand: '百多邦', origin: '进口', spec: '2%×5g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
    { id: 'tretinoin', generic: '维A酸乳膏', brand: '国产', origin: '国产', spec: '0.025%×15g/支', perDose: '适量外用', times: ['睡前'] }
  ],
  eczema: [
    { id: 'fusidic-acid', generic: '夫西地酸乳膏', brand: '国产', origin: '国产', spec: '2%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'meloxicam', generic: '美洛昔康', brand: '莫比可', origin: '进口', spec: '7.5mg×10片/盒', perDose: '7.5mg', times: ['早饭后'] },
    { id: 'naproxen', generic: '萘普生', brand: '国产', origin: '国产', spec: '0.25g×24片/盒', perDose: '0.25g', times: ['早饭后', '晚饭后'] }
  ],
  meniere: [
    { id: 'cinnarizine', generic: '桂利嗪', brand: '国产', origin: '国产', spec: '25mg×30片/盒', perDose: '25mg', times: ['早饭后', '晚饭后'] }
  ],
  epilepsy: [
    { id: 'oxcarbazepine', generic: '奥卡西平', brand: '国产', origin: '国产', spec: '0.3g×30片/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] },
    { id: 'lamotrigine', generic: '拉莫三嗪', brand: '利必通', origin: '进口', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'topiramate', generic: '托吡酯', brand: '国产', origin: '国产', spec: '25mg×60片/盒', perDose: '25mg', times: ['早饭后', '晚饭后'] }
  ]
}