import type { CatalogDrug } from './departments'

// 用药库扩容D：心血管 + 呼吸 + 消化 + 内分泌（西药补充 + 中成药）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  htn: [
    { id: 'songling', generic: '松龄血脉康胶囊', brand: '康弘', origin: '国产', spec: '0.5g×30粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'zhenju', generic: '珍菊降压片', brand: '国产', origin: '国产', spec: '0.25g×100片/瓶', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
    { id: 'qingnao', generic: '清脑降压片', brand: '国产', origin: '国产', spec: '0.3g×48片/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] },
    { id: 'niuhuang-jiangya', generic: '牛黄降压丸', brand: '同仁堂', origin: '国产', spec: '1.6g×10丸/盒', perDose: '1.6g', times: ['早饭后'] },
    { id: 'indapamide', generic: '吲达帕胺', brand: '纳催离', origin: '进口', spec: '1.5mg×30片/盒', perDose: '1.5mg', times: ['早饭前'] },
    { id: 'amlod-benaz', generic: '氨氯地平贝那普利', brand: '国产', origin: '国产', spec: '5mg/10mg×7片/盒', perDose: '1片', times: ['早饭后'] },
    { id: 'nitrendipine', generic: '尼群地平', brand: '国产', origin: '国产', spec: '10mg×100片/瓶', perDose: '10mg', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'shexiang-baoxin', generic: '麝香保心丸', brand: '和黄', origin: '国产', spec: '22.5mg×42丸/盒', perDose: '45mg', times: ['早饭后', '晚饭后'] },
    { id: 'suxiao-jiuxin', generic: '速效救心丸', brand: '中新', origin: '国产', spec: '40mg×60丸×2瓶/盒', perDose: '200mg', times: ['早饭后'] },
    { id: 'fufang-danshen', generic: '复方丹参滴丸', brand: '天士力', origin: '国产', spec: '27mg×180丸/瓶', perDose: '270mg', times: ['早饭后', '晚饭后'] },
    { id: 'tongxinluo', generic: '通心络胶囊', brand: '以岭', origin: '国产', spec: '0.26g×30粒/盒', perDose: '0.78g', times: ['早饭后', '晚饭后'] },
    { id: 'wenxin', generic: '稳心颗粒', brand: '步长', origin: '国产', spec: '9g×9袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'shensong', generic: '参松养心胶囊', brand: '以岭', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'trimetazidine', generic: '曲美他嗪', brand: '万爽力', origin: '进口', spec: '20mg×30片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] },
    { id: 'ivabradine', generic: '伊伐布雷定', brand: '可兰特', origin: '进口', spec: '5mg×14片/盒', perDose: '5mg', times: ['早饭后', '晚饭后'] }
  ],
  af: [
    { id: 'wenxin-af', generic: '稳心颗粒', brand: '步长', origin: '国产', spec: '9g×9袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'shensong-af', generic: '参松养心胶囊', brand: '以岭', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'apixaban', generic: '阿哌沙班', brand: '艾乐妥', origin: '进口', spec: '2.5mg×14片/盒', perDose: '2.5mg', times: ['早饭后', '晚饭后'] },
    { id: 'edoxaban', generic: '依度沙班', brand: '里先安', origin: '进口', spec: '30mg×14片/盒', perDose: '30mg', times: ['早饭后'] }
  ],
  hf: [
    { id: 'qili-qiangxin', generic: '芪苈强心胶囊', brand: '以岭', origin: '国产', spec: '0.3g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'empagliflozin-hf', generic: '恩格列净', brand: '欧唐静', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭前'] },
    { id: 'dapagliflozin-hf', generic: '达格列净', brand: '安达唐', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭前'] }
  ],
  asthma: [
    { id: 'mometasone-f', generic: '糠酸莫米松吸入', brand: '国产', origin: '国产', spec: '0.1%×1支', perDose: '2揿', times: ['早饭后', '晚饭后'] },
    { id: 'suhuang', generic: '苏黄止咳胶囊', brand: '扬子江', origin: '国产', spec: '0.45g×24粒/盒', perDose: '1.35g', times: ['早饭后', '晚饭后'] },
    { id: 'guilong', generic: '桂龙咳喘宁胶囊', brand: '国产', origin: '国产', spec: '0.3g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'bailing', generic: '百令胶囊', brand: '中美华东', origin: '国产', spec: '0.5g×60粒/盒', perDose: '2.5g', times: ['早饭后', '晚饭后'] },
    { id: 'jinshuibao', generic: '金水宝胶囊', brand: '济民可信', origin: '国产', spec: '0.33g×60粒/盒', perDose: '1.65g', times: ['早饭后', '晚饭后'] },
    { id: 'tiotropium-olod', generic: '噻托溴铵奥达特罗', brand: '思力华能倍乐', origin: '进口', spec: '2.5μg/2.5μg×30吸', perDose: '1吸', times: ['早饭后'] }
  ],
  ar: [
    { id: 'xinyi', generic: '辛夷鼻炎丸', brand: '国产', origin: '国产', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'cangerzi', generic: '苍耳子鼻炎滴丸', brand: '国产', origin: '国产', spec: '1.5g×6袋/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'xiangju', generic: '香菊胶囊', brand: '国产', origin: '国产', spec: '0.3g×36粒/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  gastritis: [
    { id: 'sanjiu-weitai', generic: '三九胃泰颗粒', brand: '三九', origin: '国产', spec: '20g×10袋/盒', perDose: '20g', times: ['早饭后', '晚饭后'] },
    { id: 'xiangsha-yangwei', generic: '香砂养胃丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'weisu', generic: '胃苏颗粒', brand: '扬子江', origin: '国产', spec: '15g×9袋/盒', perDose: '15g', times: ['早饭后', '晚饭后'] },
    { id: 'qizhi-weitong', generic: '气滞胃痛颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'morodan', generic: '摩罗丹', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'bismuth-pot', generic: '胶体果胶铋', brand: '国产', origin: '国产', spec: '50mg×24粒/盒', perDose: '150mg', times: ['早饭后', '晚饭后'] }
  ],
  gerd: [
    { id: 'zuojin', generic: '左金丸', brand: '国产', origin: '国产', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'weikang', generic: '胃康胶囊', brand: '国产', origin: '国产', spec: '0.5g×30粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'pantoprazole', generic: '泮托拉唑', brand: '潘妥洛克', origin: '进口', spec: '40mg×7片/盒', perDose: '40mg', times: ['早饭前'] },
    { id: 'esomeprazole', generic: '艾司奥美拉唑', brand: '耐信', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['早饭前'] }
  ],
  nafld: [
    { id: 'dangfei', generic: '当飞利肝宁胶囊', brand: '国产', origin: '国产', spec: '0.4g×30粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'huganpian', generic: '护肝片', brand: '国产', origin: '国产', spec: '0.35g×100片/瓶', perDose: '1.4g', times: ['早饭后', '晚饭后'] },
    { id: 'polyene-ph', generic: '多烯磷脂酰胆碱胶囊', brand: '易善复', origin: '进口', spec: '228mg×24粒/盒', perDose: '456mg', times: ['早饭后', '晚饭后'] }
  ],
  dyspepsia: [
    { id: 'baohe', generic: '保和丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'jianwei-xiaoshi', generic: '健胃消食片', brand: '江中', origin: '国产', spec: '0.8g×32片/盒', perDose: '2.4g', times: ['早饭后', '晚饭后'] },
    { id: 'xiangsha-liujunzi', generic: '香砂六君子丸', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  t2dm: [
    { id: 'xiaoke', generic: '消渴丸', brand: '中一', origin: '国产', spec: '0.25g×120丸/瓶', perDose: '1.25g', times: ['早饭前', '午饭前', '晚饭前'] },
    { id: 'shenqi-jiangtang', generic: '参芪降糖颗粒', brand: '国产', origin: '国产', spec: '3g×20袋/盒', perDose: '3g', times: ['早饭前', '午饭前', '晚饭前'] },
    { id: 'yuquan', generic: '玉泉丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭前', '晚饭前'] },
    { id: 'saxagliptin', generic: '沙格列汀', brand: '安立泽', origin: '进口', spec: '5mg×7片/盒', perDose: '5mg', times: ['早饭前'] },
    { id: 'vildagliptin', generic: '维格列汀', brand: '佳维乐', origin: '进口', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭前', '晚饭前'] }
  ],
  hyperlipid: [
    { id: 'xuezhikang', generic: '血脂康胶囊', brand: '北大维信', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.6g', times: ['晚饭后'] },
    { id: 'jiaogulan', generic: '绞股蓝总苷片', brand: '国产', origin: '国产', spec: '20mg×60片/盒', perDose: '40mg', times: ['早饭后', '晚饭后'] },
    { id: 'hedan', generic: '荷丹片', brand: '国产', origin: '国产', spec: '0.73g×48片/盒', perDose: '1.46g', times: ['早饭后', '晚饭后'] }
  ],
  gout: [
    { id: 'tongfengding', generic: '痛风定胶囊', brand: '国产', origin: '国产', spec: '0.4g×36粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'simiao', generic: '四妙丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'lesinurad', generic: '雷西纳德', brand: '国产', origin: '国产', spec: '200mg×14片/盒', perDose: '200mg', times: ['早饭前'] }
  ],
  osteoporosis: [
    { id: 'xianlinggubao', generic: '仙灵骨葆胶囊', brand: '同济堂', origin: '国产', spec: '0.5g×40粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'gushukang', generic: '骨疏康颗粒', brand: '国产', origin: '国产', spec: '10g×12袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] },
    { id: 'qianggu', generic: '强骨胶囊', brand: '国产', origin: '国产', spec: '0.25g×30粒/盒', perDose: '0.75g', times: ['早饭后', '晚饭后'] },
    { id: 'raloxifene', generic: '雷洛昔芬', brand: '易维特', origin: '进口', spec: '60mg×7片/盒', perDose: '60mg', times: ['早饭后'] }
  ],
  hypothy: [
    { id: 'youjiale-fen', generic: '左甲状腺素钠片', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] }
  ],
  hyperthy: [
    { id: 'methimazole-tab', generic: '甲巯咪唑', brand: '赛治', origin: '进口', spec: '10mg×50片/盒', perDose: '10mg', times: ['早饭前'] },
    { id: 'xiakucao', generic: '夏枯草口服液', brand: '国产', origin: '国产', spec: '10ml×12支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ]
}