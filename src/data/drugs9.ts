import type { CatalogDrug } from './departments'

// 用药库扩容I：心血管/内分泌/消化/呼吸 第四批（更多常用西药 + 中成药）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  htn: [
    { id: 'irbesartan-hctz', generic: '厄贝沙坦氢氯噻嗪', brand: '安博诺', origin: '进口', spec: '150mg/12.5mg×7片/盒', perDose: '1片', times: ['早饭后'] },
    { id: 'perindopril-indap', generic: '培哚普利吲达帕胺', brand: '百普乐', origin: '进口', spec: '4mg/1.25mg×10片/盒', perDose: '1片', times: ['早饭后'] },
    { id: 'valsartan-amlo', generic: '缬沙坦氨氯地平', brand: '倍博特', origin: '进口', spec: '80mg/5mg×7片/盒', perDose: '1片', times: ['早饭后'] },
    { id: 'nimodipine', generic: '尼莫地平', brand: '国产', origin: '国产', spec: '20mg×50片/瓶', perDose: '20mg', times: ['早饭后', '晚饭后'] },
    { id: 'labetalol', generic: '拉贝洛尔', brand: '国产', origin: '国产', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'duzhong', generic: '杜仲降压片', brand: '国产', origin: '国产', spec: '0.5g×60片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'yinxing-tongzhi', generic: '银杏酮酯滴丸', brand: '国产', origin: '国产', spec: '30mg×100丸/瓶', perDose: '60mg', times: ['早饭后', '晚饭后'] },
    { id: 'qishen-yiqi', generic: '芪参益气滴丸', brand: '天士力', origin: '国产', spec: '0.5g×18袋/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'xinbao', generic: '心宝丸', brand: '国产', origin: '国产', spec: '60mg×20丸/盒', perDose: '120mg', times: ['早饭后', '晚饭后'] },
    { id: 'danlou', generic: '丹蒌片', brand: '国产', origin: '国产', spec: '0.6g×36片/盒', perDose: '1.8g', times: ['早饭后', '晚饭后'] }
  ],
  t2dm: [
    { id: 'dapagliflozin-met', generic: '达格列净二甲双胍', brand: '安达格', origin: '进口', spec: '5mg/500mg×14片/盒', perDose: '1片', times: ['早饭前', '晚饭前'] },
    { id: 'empagliflozin-met', generic: '恩格列净二甲双胍', brand: '欧双宁', origin: '进口', spec: '5mg/500mg×14片/盒', perDose: '1片', times: ['早饭前', '晚饭前'] },
    { id: 'insulin-degludec', generic: '德谷胰岛素', brand: '诺和达', origin: '进口', spec: '300IU/3ml预充笔', perDose: '10IU', times: ['睡前'] },
    { id: 'insulin-lispro', generic: '赖脯胰岛素', brand: '优泌乐', origin: '进口', spec: '300IU/3ml预充笔', perDose: '4IU', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'jinqi', generic: '金芪降糖片', brand: '国产', origin: '国产', spec: '0.35g×72片/盒', perDose: '2.1g', times: ['早饭前', '午饭前', '晚饭前'] },
    { id: 'tangmaikang', generic: '糖脉康颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '5g', times: ['早饭前', '晚饭前'] }
  ],
  hyperlipid: [
    { id: 'ezetimibe-atorva', generic: '依折麦布阿托伐他汀', brand: '国产', origin: '国产', spec: '10mg/10mg×10片/盒', perDose: '1片', times: ['晚饭后'] },
    { id: 'luoxin', generic: '洛伐他汀', brand: '国产', origin: '国产', spec: '20mg×10片/盒', perDose: '20mg', times: ['晚饭后'] }
  ],
  gastritis: [
    { id: 'itopride', generic: '伊托必利', brand: '国产', origin: '国产', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'xiangsha-hezhong', generic: '香砂和中丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  gerd: [
    { id: 'mosapride-cit', generic: '枸橼酸莫沙必利', brand: '加斯清', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'weichang', generic: '肠胃舒胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'muxiang-shunqi', generic: '木香顺气丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'shenqu', generic: '神曲消食口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  nafld: [
    { id: 'ganxile', generic: '肝喜乐片', brand: '国产', origin: '国产', spec: '0.4g×60片/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'qingfei-yihuo', generic: '清肺抑火丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'yangyin-qingfei', generic: '养阴清肺口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  asthma: [
    { id: 'zhiqiao', generic: '止喘灵口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  ar: [
    { id: 'biyankang', generic: '鼻炎康片', brand: '国产', origin: '国产', spec: '0.35g×60片/盒', perDose: '1.4g', times: ['早饭后', '晚饭后'] },
    { id: 'xinqin', generic: '辛芩颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] }
  ]
}