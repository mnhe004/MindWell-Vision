import type { CatalogDrug } from './departments'

// 补充常用药（按疾病追加）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  insomnia: [
    { id: 'clonazepam', generic: '氯硝西泮', brand: '国产', origin: '国产', spec: '2mg×100片/盒', perDose: '1mg', times: ['睡前'] },
    { id: 'estazolam', generic: '艾司唑仑', brand: '舒乐安定', origin: '国产', spec: '1mg×20片/盒', perDose: '1mg', times: ['睡前'] },
    { id: 'zolpidem', generic: '酒石酸唑吡坦', brand: '思诺思', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['睡前'] },
    { id: 'zaleplon', generic: '扎来普隆', brand: '国产', origin: '国产', spec: '5mg×14粒/盒', perDose: '5mg', times: ['睡前'] }
  ],
  anxiety: [
    { id: 'clonazepam2', generic: '氯硝西泮', brand: '国产', origin: '国产', spec: '2mg×100片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] },
    { id: 'paroxetine', generic: '帕罗西汀', brand: '赛乐特', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'diazepam', generic: '地西泮', brand: '国产', origin: '国产', spec: '2.5mg×20片/盒', perDose: '2.5mg', times: ['睡前'] },
    { id: 'alprazolam-xr', generic: '阿普唑仑缓释片', brand: '国产', origin: '国产', spec: '0.5mg×14片/盒', perDose: '0.5mg', times: ['早饭后'] }
  ],
  depression: [
    { id: 'paroxetine2', generic: '帕罗西汀', brand: '赛乐特', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'amitriptyline', generic: '阿米替林', brand: '国产', origin: '国产', spec: '25mg×100片/盒', perDose: '25mg', times: ['睡前'] },
    { id: 'trazodone', generic: '曲唑酮', brand: '美时玉', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['睡前'] },
    { id: 'bupropion', generic: '安非他酮', brand: '悦克', origin: '国产', spec: '150mg×14片/盒', perDose: '150mg', times: ['早饭后'] }
  ],
  t2dm: [
    { id: 'linagliptin', generic: '利格列汀', brand: '欧唐宁', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['早饭前'] },
    { id: 'dulaglutide', generic: '度拉糖肽', brand: '度易达', origin: '进口', spec: '1.5mg/0.5ml预充笔', perDose: '1.5mg', times: ['早饭后'] },
    { id: 'exenatide', generic: '艾塞那肽', brand: '百泌达', origin: '进口', spec: '5μg/0.25ml预充笔', perDose: '5μg', times: ['早饭前', '晚饭前'] },
    { id: 'pioglitazone', generic: '吡格列酮', brand: '艾可拓', origin: '进口', spec: '15mg×7片/盒', perDose: '15mg', times: ['早饭前'] },
    { id: 'repaglinide', generic: '瑞格列奈', brand: '诺和龙', origin: '进口', spec: '1mg×30片/盒', perDose: '1mg', times: ['早饭前', '午饭前', '晚饭前'] }
  ],
  htn: [
    { id: 'telmisartan', generic: '替米沙坦', brand: '美卡素', origin: '进口', spec: '80mg×7片/盒', perDose: '80mg', times: ['早饭后'] },
    { id: 'olmesartan', generic: '奥美沙坦', brand: '傲坦', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['早饭后'] },
    { id: 'losartan', generic: '氯沙坦', brand: '科素亚', origin: '进口', spec: '50mg×7片/盒', perDose: '50mg', times: ['早饭后'] },
    { id: 'doxazosin', generic: '多沙唑嗪', brand: '可多华', origin: '进口', spec: '4mg×7片/盒', perDose: '4mg', times: ['早饭后'] },
    { id: 'urapidil', generic: '乌拉地尔', brand: '亚宁定', origin: '进口', spec: '30mg×10粒/盒', perDose: '30mg', times: ['早饭后', '晚饭后'] }
  ],
  hyperlipid: [
    { id: 'pitavastatin', generic: '匹伐他汀', brand: '力清之', origin: '进口', spec: '2mg×7片/盒', perDose: '2mg', times: ['睡前'] },
    { id: 'colesevelam', generic: '考来维仑', brand: '国产', origin: '国产', spec: '625mg×60片/盒', perDose: '1.25g', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'nicorandil', generic: '尼可地尔', brand: '喜格迈', origin: '进口', spec: '5mg×30片/盒', perDose: '5mg', times: ['早饭后', '晚饭后'] },
    { id: 'isosorbide-er', generic: '单硝酸异山梨酯缓释', brand: '依姆多', origin: '进口', spec: '60mg×7片/盒', perDose: '60mg', times: ['早饭前'] }
  ],
  asthma: [
    { id: 'budes-form', generic: '布地奈德福莫特罗', brand: '信必可都保', origin: '进口', spec: '160/4.5μg×60吸', perDose: '1吸', times: ['早饭后', '晚饭后'] }
  ],
  gastritis: [
    { id: 'tepremone', generic: '替普瑞酮', brand: '施维舒', origin: '进口', spec: '50mg×20粒/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'rebamipide', generic: '瑞巴派特', brand: '膜固思达', origin: '进口', spec: '0.1g×24片/盒', perDose: '0.1g', times: ['早饭后', '晚饭后'] },
    { id: 'lactobacillus', generic: '复方嗜酸乳杆菌', brand: '益君康', origin: '国产', spec: '0.5g×24片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  gerd: [
    { id: 'tepremone2', generic: '替普瑞酮', brand: '施维舒', origin: '进口', spec: '50mg×20粒/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
  ],
  gout: [
    { id: 'etoricoxib', generic: '依托考昔', brand: '安康信', origin: '进口', spec: '120mg×5片/盒', perDose: '120mg', times: ['早饭后'] }
  ],
  migraine: [
    { id: 'rizatriptan', generic: '利扎曲普坦', brand: '欧立停', origin: '国产', spec: '5mg×6片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  'chest-pain': [],
  'shortness-breath': []
}