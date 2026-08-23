import type { CatalogDrug } from './departments'

// 用药库扩容G：第二批扩容（心血管/内分泌/消化/呼吸/神经 + 更多中成药）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  htn: [
    { id: 'tianma-gouteng', generic: '天麻钩藤颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'fufang-luobuma', generic: '复方罗布麻片', brand: '国产', origin: '国产', spec: '复方×100片/瓶', perDose: '2片', times: ['早饭后', '晚饭后'] },
    { id: 'captopril', generic: '卡托普利', brand: '国产', origin: '国产', spec: '25mg×100片/瓶', perDose: '25mg', times: ['早饭后'] },
    { id: 'enalapril', generic: '依那普利', brand: '国产', origin: '国产', spec: '10mg×16片/盒', perDose: '10mg', times: ['早饭后'] },
    { id: 'valsartan-hctz', generic: '缬沙坦氢氯噻嗪', brand: '复代文', origin: '进口', spec: '80mg/12.5mg×7片/盒', perDose: '1片', times: ['早饭后'] },
    { id: 'fosinopril', generic: '福辛普利', brand: '蒙诺', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  t2dm: [
    { id: 'glibenclamide', generic: '格列本脲', brand: '国产', origin: '国产', spec: '2.5mg×100片/瓶', perDose: '2.5mg', times: ['早饭前'] },
    { id: 'metformin-glu', generic: '二甲双胍格列本脲', brand: '国产', origin: '国产', spec: '250mg/1.25mg×48片/盒', perDose: '1片', times: ['早饭前', '晚饭前'] },
    { id: 'sitagliptin-met', generic: '西格列汀二甲双胍', brand: '捷诺达', origin: '进口', spec: '50mg/500mg×14片/盒', perDose: '1片', times: ['早饭前', '晚饭前'] }
  ],
  hyperlipid: [
    { id: 'fluvastatin', generic: '氟伐他汀', brand: '来适可', origin: '进口', spec: '40mg×7粒/盒', perDose: '40mg', times: ['睡前'] },
    { id: 'gemfibrozil', generic: '吉非罗齐', brand: '国产', origin: '国产', spec: '300mg×30粒/盒', perDose: '300mg', times: ['早饭后', '晚饭后'] }
  ],
  gout: [
    { id: 'loshisuan', generic: '洛索洛芬钠', brand: '乐松', origin: '进口', spec: '60mg×20片/盒', perDose: '60mg', times: ['早饭后', '晚饭后'] },
    { id: 'celecoxib-gout', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后'] }
  ],
  gastritis: [
    { id: 'metoclopramide', generic: '甲氧氯普胺', brand: '胃复安', origin: '国产', spec: '5mg×100片/瓶', perDose: '5mg', times: ['早饭后', '晚饭后'] },
    { id: 'sucralfate', generic: '硫糖铝', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'fuzi-lizhong', generic: '附子理中丸', brand: '仲景', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'lactulose', generic: '乳果糖口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '15ml', times: ['早饭前'] },
    { id: 'shenling', generic: '参苓白术散', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'bifidobacterium', generic: '双歧杆菌三联活菌', brand: '培菲康', origin: '国产', spec: '0.21g×24粒/盒', perDose: '0.42g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'ambroxol-er', generic: '盐酸氨溴索缓释', brand: '沐舒坦', origin: '进口', spec: '75mg×10粒/盒', perDose: '75mg', times: ['早饭后'] },
    { id: 'qingre-huatan', generic: '清肺化痰丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  migraine: [
    { id: 'tianma-su', generic: '天麻素片', brand: '国产', origin: '国产', spec: '25mg×24片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'vitamin-b', generic: '维生素B1片', brand: '国产', origin: '国产', spec: '10mg×100片/瓶', perDose: '10mg', times: ['早饭后'] }
  ],
  insomnia: [
    { id: 'guipi', generic: '归脾丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'baiziren', generic: '柏子养心丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] }
  ],
  depression: [
    { id: 'suhe-wan', generic: '解郁安神颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'xintong', generic: '心脑欣胶囊', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  anxiety: [
    { id: 'ningxin', generic: '宁心安神胶囊', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  ar: [
    { id: 'desloratadine', generic: '地氯雷他定', brand: '恩理思', origin: '进口', spec: '5mg×6片/盒', perDose: '5mg', times: ['睡前'] },
    { id: 'levocetirizine', generic: '左西替利嗪', brand: '迪皿', origin: '国产', spec: '5mg×14片/盒', perDose: '5mg', times: ['睡前'] }
  ],
  urticaria: [
    { id: 'ebastine', generic: '依巴斯汀', brand: '开思亭', origin: '进口', spec: '10mg×10片/盒', perDose: '10mg', times: ['早饭后'] }
  ],
  uti: [
    { id: 'levofloxacin-uti', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] },
    { id: 'cefixime', generic: '头孢克肟', brand: '世福素', origin: '进口', spec: '100mg×6片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] }
  ],
  bph: [
    { id: 'solifenacin', generic: '索利那新', brand: '卫喜康', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后'] },
    { id: 'mirabegron', generic: '米拉贝隆', brand: '贝坦利', origin: '进口', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭后'] }
  ],
  oa: [
    { id: 'loxoprofen-oa', generic: '洛索洛芬钠', brand: '乐松', origin: '进口', spec: '60mg×20片/盒', perDose: '60mg', times: ['早饭后', '晚饭后'] },
    { id: 'glucosamine-hcl', generic: '盐酸氨基葡萄糖', brand: '国产', origin: '国产', spec: '750mg×20粒/盒', perDose: '750mg', times: ['早饭后', '晚饭后'] }
  ],
  cold: [
    { id: 'amoxicillin', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'azithromycin', generic: '阿奇霉素', brand: '希舒美', origin: '进口', spec: '0.25g×6片/盒', perDose: '0.5g', times: ['早饭后'] },
    { id: 'roxithromycin', generic: '罗红霉素', brand: '国产', origin: '国产', spec: '150mg×12片/盒', perDose: '150mg', times: ['早饭后', '晚饭后'] },
    { id: 'niuhuang-jiedu', generic: '牛黄解毒片', brand: '同仁堂', origin: '国产', spec: '0.25g×48片/盒', perDose: '0.75g', times: ['早饭后', '晚饭后'] },
    { id: 'huanglian-shangqing', generic: '黄连上清丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  osteoporosis: [
    { id: 'zhonghua', generic: '骨松宝颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] },
    { id: 'guyou', generic: '骨友灵搽剂', brand: '国产', origin: '国产', spec: '50ml/瓶', perDose: '适量外涂', times: ['早饭后', '晚饭后'] }
  ],
  cervical: [
    { id: 'fuzi-lizhong-j', generic: '骨刺消痛液', brand: '国产', origin: '国产', spec: '30ml/瓶', perDose: '适量外涂', times: ['早饭后', '晚饭后'] },
    { id: 'tianshu-yao', generic: '腰痛宁胶囊', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.9g', times: ['睡前'] }
  ],
  mci: [
    { id: 'naoliqing', generic: '脑力清丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'shenqi-wuweizi', generic: '参芪五味子片', brand: '国产', origin: '国产', spec: '0.3g×48片/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  menopause: [
    { id: 'zhongjing', generic: '知柏地黄丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'guifu-dihuang', generic: '桂附地黄丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  ida: [
    { id: 'bazhen', generic: '八珍丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'shiquan', generic: '十全大补丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  ra: [
    { id: 'xuefu', generic: '血府逐瘀口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  eczema: [
    { id: 'danshen-ez', generic: '丹参酮胶囊', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
  ],
  pharyngitis: [
    { id: 'longdan', generic: '龙胆泻肝丸', brand: '同仁堂', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ]
}