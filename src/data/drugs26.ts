import type { CatalogDrug } from './departments'

// 用药库扩容Z：中成药 + 西药 最终补充批次
export const extraDrugs: Record<string, CatalogDrug[]> = {
  cold: [
    { id: 'fufang-ganmaoling', generic: '复方感冒灵颗粒', brand: '三九', origin: '国产', spec: '14g×9袋/盒', perDose: '14g', times: ['早饭后', '晚饭后'] },
    { id: 'vc-yinqiao', generic: '维C银翘片', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  pneumonia: [
    { id: 'tanreqing', generic: '痰热清胶囊', brand: '国产', origin: '国产', spec: '0.4g×24粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  'bact-diarrhea': [
    { id: 'bupi-yichang', generic: '补脾益肠丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'guchang-zhixie', generic: '固肠止泻丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  'irregular-menses': [
    { id: 'baogong', generic: '葆宫止血颗粒', brand: '国产', origin: '国产', spec: '15g×6袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] }
  ],
  eczema: [
    { id: 'fufang-zhangnao', generic: '复方樟脑乳膏', brand: '国产', origin: '国产', spec: '10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
    { id: 'hydrocortisone-butyrate', generic: '丁酸氢化可的松乳膏', brand: '国产', origin: '国产', spec: '0.1%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  asthma: [
    { id: 'aminophylline', generic: '氨茶碱片', brand: '国产', origin: '国产', spec: '0.1g×100片/瓶', perDose: '0.1g', times: ['早饭后', '晚饭后'] }
  ],
  parkinson: [
    { id: 'levodopa-benserazide', generic: '多巴丝肼片', brand: '美多芭', origin: '进口', spec: '250mg×40片/盒', perDose: '250mg', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'pramipexole', generic: '盐酸普拉克索片', brand: '森福罗', origin: '进口', spec: '0.25mg×30片/盒', perDose: '0.25mg', times: ['早饭后', '午饭后', '晚饭后'] }
  ],
  epilepsy: [
    { id: 'phenobarbital', generic: '苯巴比妥片', brand: '国产', origin: '国产', spec: '30mg×100片/瓶', perDose: '30mg', times: ['睡前'] },
    { id: 'phenytoin', generic: '苯妥英钠片', brand: '国产', origin: '国产', spec: '100mg×100片/瓶', perDose: '100mg', times: ['早饭后', '晚饭后'] }
  ],
  'lumbar-hernia': [
    { id: 'manjingzi', generic: '腰痛片', brand: '国产', origin: '国产', spec: '0.3g×100片/瓶', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  gout: [
    { id: 'colchicine-cn', generic: '秋水仙碱片', brand: '国产', origin: '国产', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后'] }
  ],
  htn: [
    { id: 'perindopril-cn', generic: '培哚普利叔丁胺片', brand: '雅施达', origin: '进口', spec: '4mg×30片/盒', perDose: '4mg', times: ['早饭后'] },
    { id: 'irbesartan-cn', generic: '厄贝沙坦片', brand: '安博维', origin: '进口', spec: '150mg×7片/盒', perDose: '150mg', times: ['早饭后'] }
  ],
  hyperlipid: [
    { id: 'simvastatin-cn', generic: '辛伐他汀片', brand: '舒降之', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] },
    { id: 'pravastatin-cn', generic: '普伐他汀钠片', brand: '普拉固', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
  ],
  copd: [
    { id: 'tiotropium-cn', generic: '噻托溴铵粉吸入剂', brand: '思力华', origin: '进口', spec: '18μg×30粒', perDose: '1粒', times: ['早饭后'] }
  ],
  ar: [
    { id: 'mometasone-ar', generic: '糠酸莫米松鼻喷雾剂', brand: '内舒拿', origin: '进口', spec: '50μg/揿×140揿', perDose: '2揿', times: ['早饭后', '晚饭后'] },
    { id: 'fluticasone-nasal', generic: '丙酸氟替卡松鼻喷雾剂', brand: '辅舒良', origin: '进口', spec: '50μg/揿×120揿', perDose: '2揿', times: ['早饭后', '晚饭后'] }
  ],
  gastritis: [
    { id: 'lansoprazole', generic: '兰索拉唑肠溶片', brand: '国产', origin: '国产', spec: '15mg×14片/盒', perDose: '30mg', times: ['早饭前'] },
    { id: 'pantoprazole-cn', generic: '泮托拉唑钠肠溶片', brand: '潘妥洛克', origin: '进口', spec: '40mg×7片/盒', perDose: '40mg', times: ['早饭前'] }
  ]
}