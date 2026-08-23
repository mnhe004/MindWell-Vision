import type { CatalogDrug } from './departments'

// 用药库扩容T：更多中成药 + 二三线西药
export const extraDrugs: Record<string, CatalogDrug[]> = {
  cold: [
    { id: 'fenghan-ganmao', generic: '风寒感冒颗粒', brand: '国产', origin: '国产', spec: '8g×10袋/盒', perDose: '8g', times: ['早饭后', '晚饭后'] },
    { id: 'fengre-ganmao', generic: '风热感冒颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'yinhuang', generic: '银黄颗粒', brand: '国产', origin: '国产', spec: '4g×10袋/盒', perDose: '4g', times: ['早饭后', '晚饭后'] },
    { id: 'fufang-gancao', generic: '复方甘草片', brand: '国产', origin: '国产', spec: '0.5g×100片/瓶', perDose: '2g', times: ['早饭后', '晚饭后'] },
    { id: 'shedan-chuanbei', generic: '蛇胆川贝液', brand: '国产', origin: '国产', spec: '10ml×6支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  pharyngitis: [
    { id: 'qingyan-diwan', generic: '清咽滴丸', brand: '国产', origin: '国产', spec: '20mg×60丸/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] },
    { id: 'caoshanhu', generic: '复方草珊瑚含片', brand: '国产', origin: '国产', spec: '0.5g×24片/盒', perDose: '含化', times: ['早饭后', '午饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'liuwei-anxiao', generic: '六味安消胶囊', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'tongbianling', generic: '通便灵胶囊', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '1.25g', times: ['睡前'] },
    { id: 'zhishu-kuanzhong', generic: '枳术宽中胶囊', brand: '国产', origin: '国产', spec: '0.43g×36粒/盒', perDose: '1.29g', times: ['早饭后', '晚饭后'] }
  ],
  t2dm: [
    { id: 'rosiglitazone', generic: '罗格列酮', brand: '文迪雅', origin: '进口', spec: '4mg×7片/盒', perDose: '4mg', times: ['早饭后'] },
    { id: 'voglibose', generic: '伏格列波糖', brand: '倍欣', origin: '进口', spec: '0.2mg×30片/盒', perDose: '0.2mg', times: ['早饭前', '午饭前', '晚饭前'] },
    { id: 'miglitol', generic: '米格列醇', brand: '国产', origin: '国产', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭前', '午饭前', '晚饭前'] },
    { id: 'ertugliflozin', generic: '艾托格列净', brand: '国产', origin: '国产', spec: '5mg×14片/盒', perDose: '5mg', times: ['早饭前'] },
    { id: 'semaglutide', generic: '司美格鲁肽', brand: '诺和泰', origin: '进口', spec: '1.34mg/ml×3ml', perDose: '0.25mg', times: ['早饭后'] }
  ],
  'irregular-menses': [
    { id: 'tongjingbao', generic: '痛经宝颗粒', brand: '国产', origin: '国产', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'fuke-shijin', generic: '妇科十味片', brand: '国产', origin: '国产', spec: '0.3g×100片/瓶', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  bph: [
    { id: 'jinsuo', generic: '金锁固精丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  mci: [
    { id: 'huatuo', generic: '华佗再造丸', brand: '国产', origin: '国产', spec: '8g×10袋/盒', perDose: '8g', times: ['早饭后', '晚饭后'] },
    { id: 'angong', generic: '安宫牛黄丸', brand: '同仁堂', origin: '国产', spec: '3g×1丸/盒', perDose: '3g', times: ['早饭后'] },
    { id: 'naodesheng', generic: '脑得生丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'dengzhanhua', generic: '灯盏花素片', brand: '国产', origin: '国产', spec: '20mg×36片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'goupi', generic: '狗皮膏', brand: '国产', origin: '国产', spec: '7cm×10cm×6贴/盒', perDose: '1贴', times: ['早饭后', '晚饭后'] },
    { id: 'shangshi', generic: '伤湿止痛膏', brand: '国产', origin: '国产', spec: '7cm×10cm×6贴/盒', perDose: '1贴', times: ['早饭后', '晚饭后'] }
  ],
  eczema: [
    { id: 'calamine', generic: '炉甘石洗剂', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '适量外涂', times: ['早饭后', '晚饭后'] },
    { id: 'pevisone', generic: '派瑞松乳膏', brand: '国产', origin: '国产', spec: '15g/支', perDose: '适量外涂', times: ['早饭后', '晚饭后'] }
  ],
  nafld: [
    { id: 'glycyrrhizin', generic: '复方甘草酸苷片', brand: '美能', origin: '进口', spec: '25mg×100片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'diammonium', generic: '甘草酸二铵胶囊', brand: '国产', origin: '国产', spec: '50mg×24粒/盒', perDose: '150mg', times: ['早饭后', '晚饭后'] }
  ],
  gastritis: [
    { id: 'fufang-jineijin', generic: '复方鸡内金片', brand: '国产', origin: '国产', spec: '0.3g×100片/瓶', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'weidean', generic: '胃得安片', brand: '国产', origin: '国产', spec: '0.5g×60片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  'qi-blood-def': [
    { id: 'liujunzi', generic: '六君子丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'baoji', generic: '保济丸', brand: '国产', origin: '国产', spec: '3.7g×20袋/盒', perDose: '3.7g', times: ['早饭后', '晚饭后'] }
  ],
  'dryeye': [
    { id: 'fufang-xueshuantong', generic: '复方血栓通胶囊', brand: '国产', origin: '国产', spec: '0.5g×30粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  hyperlipid: [
    { id: 'policosanol', generic: '多廿烷醇', brand: '国产', origin: '国产', spec: '10mg×30片/盒', perDose: '10mg', times: ['晚饭后'] }
  ]
}