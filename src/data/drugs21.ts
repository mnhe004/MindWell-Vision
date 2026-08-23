import type { CatalogDrug } from './departments'

// 用药库扩容U：更多降压/抗血小板/抗凝/消化/抗感染/呼吸/抗过敏/精神 二线药
export const extraDrugs: Record<string, CatalogDrug[]> = {
  htn: [
    { id: 'felodipine', generic: '非洛地平', brand: '波依定', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后'] },
    { id: 'lercanidipine', generic: '乐卡地平', brand: '国产', origin: '国产', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] },
    { id: 'eplerenone', generic: '依普利酮', brand: '国产', origin: '国产', spec: '25mg×28片/盒', perDose: '25mg', times: ['早饭后'] },
    { id: 'prazosin', generic: '哌唑嗪', brand: '国产', origin: '国产', spec: '1mg×100片/瓶', perDose: '1mg', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'ticagrelor', generic: '替格瑞洛', brand: '倍林达', origin: '进口', spec: '90mg×14片/盒', perDose: '90mg', times: ['早饭后', '晚饭后'] },
    { id: 'prasugrel', generic: '普拉格雷', brand: '国产', origin: '国产', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  af: [
    { id: 'fondaparinux', generic: '磺达肝癸钠', brand: '国产', origin: '国产', spec: '2.5mg/支', perDose: '2.5mg', times: ['早饭后'] }
  ],
  gerd: [
    { id: 'famotidine', generic: '法莫替丁', brand: '国产', origin: '国产', spec: '20mg×30片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] },
    { id: 'ranitidine', generic: '雷尼替丁', brand: '国产', origin: '国产', spec: '0.15g×30片/盒', perDose: '0.15g', times: ['早饭后', '晚饭后'] }
  ],
  pneumonia: [
    { id: 'cefoperazone-sulbactam', generic: '头孢哌酮舒巴坦', brand: '国产', origin: '国产', spec: '1g/支', perDose: '1g', times: ['早饭后'] },
    { id: 'piperacillin-tazobactam', generic: '哌拉西林他唑巴坦', brand: '国产', origin: '国产', spec: '4.5g/支', perDose: '4.5g', times: ['早饭后'] },
    { id: 'doxycycline', generic: '多西环素', brand: '国产', origin: '国产', spec: '0.1g×12片/盒', perDose: '0.1g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'ipratropium', generic: '异丙托溴铵', brand: '爱全乐', origin: '进口', spec: '20μg/揿×200揿', perDose: '2揿', times: ['早饭后', '晚饭后'] },
    { id: 'terbutaline', generic: '特布他林', brand: '博利康尼', origin: '进口', spec: '2.5mg×20片/盒', perDose: '2.5mg', times: ['早饭后', '晚饭后'] },
    { id: 'doxofylline', generic: '多索茶碱', brand: '国产', origin: '国产', spec: '0.2g×12片/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] }
  ],
  urticaria: [
    { id: 'epinastine', generic: '依匹斯汀', brand: '国产', origin: '国产', spec: '10mg×10片/盒', perDose: '10mg', times: ['早饭后'] },
    { id: 'mizolastine', generic: '咪唑斯汀', brand: '国产', origin: '国产', spec: '10mg×10片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  depression: [
    { id: 'vortioxetine', generic: '伏硫西汀', brand: '国产', origin: '国产', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  anxiety: [
    { id: 'tandospirone', generic: '坦度螺酮', brand: '国产', origin: '国产', spec: '10mg×30片/盒', perDose: '10mg', times: ['早饭后', '晚饭后'] }
  ],
  acne: [
    { id: 'minocycline', generic: '米诺环素', brand: '国产', origin: '国产', spec: '50mg×20粒/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
  ],
  uti: [
    { id: 'smz-tmp', generic: '复方磺胺甲噁唑', brand: '国产', origin: '国产', spec: '0.4g/80mg×20片/盒', perDose: '0.8g', times: ['早饭后', '晚饭后'] }
  ],
  'irregular-menses': [
    { id: 'yimu-tiao', generic: '调经促孕丸', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] }
  ]
}