import type { CatalogDrug } from './departments'

// 用药库扩容Y：更多中成药（唯一药名，便于 OCR 识别）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'ped-pneumonia': [
    { id: 'xiaoer-feire', generic: '小儿肺热咳喘口服液', brand: '葵花', origin: '国产', spec: '10ml×6支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'xiaoer-huatan', generic: '小儿化痰止咳颗粒', brand: '国产', origin: '国产', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] }
  ],
  'ped-diarrhea': [
    { id: 'jianer-xiaoshi', generic: '健儿消食口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'xiaoer-qixing', generic: '小儿七星茶颗粒', brand: '国产', origin: '国产', spec: '7g×10袋/盒', perDose: '7g', times: ['早饭后', '晚饭后'] }
  ],
  rickets: [
    { id: 'longmu-zhuanggu', generic: '龙牡壮骨颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] }
  ],
  ida: [
    { id: 'jianpi-shengxue', generic: '健脾生血颗粒', brand: '国产', origin: '国产', spec: '3g×12袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] }
  ],
  copd: [
    { id: 'chuanbei-qingfei', generic: '川贝清肺糖浆', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '15ml', times: ['早饭后', '晚饭后'] },
    { id: 'feilike', generic: '肺力咳合剂', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '15ml', times: ['早饭后', '晚饭后'] }
  ],
  cough: [],
  cold: [
    { id: 'zhike-juhong', generic: '止咳橘红丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'keteling', generic: '咳特灵胶囊', brand: '国产', origin: '国产', spec: '0.36g×30粒/盒', perDose: '0.72g', times: ['早饭后', '晚饭后'] },
    { id: 'shedan-chenpi', generic: '蛇胆陈皮散', brand: '国产', origin: '国产', spec: '0.3g×6瓶/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] }
  ],
  'senile-constipation': [
    { id: 'fanxieye', generic: '番泻叶颗粒', brand: '国产', origin: '国产', spec: '3g×10袋/盒', perDose: '3g', times: ['睡前'] },
    { id: 'qirong', generic: '芪蓉润肠口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  'bact-diarrhea': [
    { id: 'changweining', generic: '肠胃宁片', brand: '国产', origin: '国产', spec: '0.3g×48片/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] },
    { id: 'changyanning', generic: '肠炎宁片', brand: '国产', origin: '国产', spec: '0.4g×36片/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  'irregular-menses': [
    { id: 'nvjin', generic: '女金丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'gongxuening', generic: '宫血宁胶囊', brand: '国产', origin: '国产', spec: '0.13g×24粒/盒', perDose: '0.26g', times: ['早饭后', '晚饭后'] },
    { id: 'shaofu', generic: '少腹逐瘀颗粒', brand: '国产', origin: '国产', spec: '5g×10袋/盒', perDose: '5g', times: ['早饭后', '晚饭后'] }
  ],
  'kidney-def': [
    { id: 'shengjing', generic: '生精片', brand: '国产', origin: '国产', spec: '0.5g×24片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
  ],
  oa: [
    { id: 'tianma-wan', generic: '天麻丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'dahuoluo', generic: '大活络丸', brand: '国产', origin: '国产', spec: '3.5g×6丸/盒', perDose: '3.5g', times: ['早饭后', '晚饭后'] },
    { id: 'mugua', generic: '木瓜丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'zhuifeng', generic: '追风透骨丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  chd: [
    { id: 'xueshuan-xinmaining', generic: '血栓心脉宁胶囊', brand: '国产', origin: '国产', spec: '0.5g×30粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
    { id: 'danqi', generic: '丹七片', brand: '国产', origin: '国产', spec: '0.3g×60片/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  stroke: [
    { id: 'fufang-dilong', generic: '复方地龙胶囊', brand: '国产', origin: '国产', spec: '0.28g×24粒/盒', perDose: '0.56g', times: ['早饭后', '晚饭后'] },
    { id: 'shuxuening', generic: '舒血宁片', brand: '国产', origin: '国产', spec: '19.2mg×24片/盒', perDose: '38.4mg', times: ['早饭后', '晚饭后'] }
  ],
  pruritus: [
    { id: 'wuji-gao', generic: '无极膏', brand: '国产', origin: '国产', spec: '10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
    { id: 'yanghuaxin', generic: '氧化锌软膏', brand: '国产', origin: '国产', spec: '15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
  ],
  dryeye: [
    { id: 'zhangyanming', generic: '障眼明片', brand: '国产', origin: '国产', spec: '0.3g×100片/瓶', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  rhinitis: [
    { id: 'qianbai', generic: '千柏鼻炎片', brand: '国产', origin: '国产', spec: '0.3g×60片/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  'qi-blood-def': [
    { id: 'huangqi', generic: '黄芪颗粒', brand: '国产', origin: '国产', spec: '4g×12袋/盒', perDose: '4g', times: ['早饭后', '晚饭后'] }
  ],
  osteoporosis: [
    { id: 'jintiange', generic: '金天格胶囊', brand: '国产', origin: '国产', spec: '0.4g×24粒/盒', perDose: '1.2g', times: ['早饭后', '晚饭后'] }
  ],
  'cervicogenic-ha': [
    { id: 'xiaoluohuo', generic: '小活络丸', brand: '国产', origin: '国产', spec: '3g×10丸/盒', perDose: '3g', times: ['早饭后', '晚饭后'] }
  ]
}