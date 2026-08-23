import type { CatalogDrug } from './departments'

// 用药库扩容L：中医证型 + 儿科 + 感染 + 口腔 + 肝胆 + 乳腺 + 血管 + 疼痛（中成药重点）
export const extraDrugs: Record<string, CatalogDrug[]> = {
  'spleen-def': [
    { id: 'shenling-sd', generic: '参苓白术散', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'jianpi-wan', generic: '健脾丸', brand: '仲景', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'renshen-jianpi', generic: '人参健脾丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  'kidney-def': [
    { id: 'liuwei-kd', generic: '六味地黄丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'jinkui-kd', generic: '金匮肾气丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'zuogui', generic: '左归丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'yougui', generic: '右归丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'wuzi', generic: '五子衍宗丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  'liver-stag': [
    { id: 'xiaoyao-ls', generic: '逍遥丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'jiawei-ls', generic: '加味逍遥丸', brand: '同仁堂', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'chaihu-shugan', generic: '柴胡舒肝丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'shugan-ls', generic: '舒肝丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'yueju', generic: '越鞠丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
  ],
  dampness: [
    { id: 'huoxiang-damp', generic: '藿香正气口服液', brand: '太极', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] },
    { id: 'ermiao', generic: '二妙丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
    { id: 'pingwei', generic: '平胃散', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
  ],
  'qi-blood-def': [
    { id: 'bazhen-q', generic: '八珍丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'shiquan-q', generic: '十全大补丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'renshen-yangrong', generic: '人参养荣丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
    { id: 'yiqi-yangxue', generic: '益气养血口服液', brand: '国产', origin: '国产', spec: '10ml×10支/盒', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  'tcm-insomnia': [
    { id: 'guipi-ti', generic: '归脾丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
    { id: 'tianwang-ti', generic: '天王补心丹', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] },
    { id: 'baizi-ti', generic: '柏子养心丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '9g', times: ['睡前'] }
  ],
  hfmd: [
    { id: 'kaihoujian', generic: '开喉剑喷雾剂', brand: '国产', origin: '国产', spec: '30ml/瓶', perDose: '喷口腔', times: ['早饭后', '晚饭后'] },
    { id: 'kangfuxin', generic: '康复新液', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '含漱', times: ['早饭后', '晚饭后'] }
  ],
  'ped-diarrhea': [
    { id: 'montmorillonite-pd', generic: '蒙脱石散', brand: '思密达', origin: '进口', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'ors-pd', generic: '口服补液盐III', brand: '国产', origin: '国产', spec: '5.125g×6袋/盒', perDose: '1袋冲水', times: ['早饭后', '晚饭后'] }
  ],
  'ped-pneumonia': [
    { id: 'azithromycin-pp', generic: '阿奇霉素干混悬剂', brand: '希舒美', origin: '进口', spec: '0.1g×6袋/盒', perDose: '0.1g', times: ['早饭后'] },
    { id: 'ambroxol-pp', generic: '盐酸氨溴索口服液', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '10ml', times: ['早饭后', '晚饭后'] }
  ],
  'ped-asthma': [
    { id: 'montelukast-pa', generic: '孟鲁司特钠咀嚼片', brand: '顺尔宁', origin: '进口', spec: '5mg×5片/盒', perDose: '5mg', times: ['睡前'] }
  ],
  rickets: [
    { id: 'vd-rick', generic: '维生素D滴剂', brand: '国产', origin: '国产', spec: '400IU×30粒/盒', perDose: '400IU', times: ['早饭后'] }
  ],
  kawasaki: [
    { id: 'aspirin-kd', generic: '阿司匹林肠溶片', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
  ],
  tb: [
    { id: 'isoniazid', generic: '异烟肼', brand: '国产', origin: '国产', spec: '0.1g×100片/瓶', perDose: '0.3g', times: ['早饭前'] },
    { id: 'rifampicin', generic: '利福平', brand: '国产', origin: '国产', spec: '0.15g×100粒/瓶', perDose: '0.45g', times: ['早饭前'] },
    { id: 'ethambutol', generic: '乙胺丁醇', brand: '国产', origin: '国产', spec: '0.25g×100片/瓶', perDose: '0.75g', times: ['早饭前'] },
    { id: 'pyrazinamide', generic: '吡嗪酰胺', brand: '国产', origin: '国产', spec: '0.25g×100片/瓶', perDose: '0.5g', times: ['早饭后'] }
  ],
  chb: [
    { id: 'entecavir', generic: '恩替卡韦', brand: '博路定', origin: '进口', spec: '0.5mg×7片/盒', perDose: '0.5mg', times: ['睡前'] },
    { id: 'tenofovir', generic: '富马酸替诺福韦', brand: '韦瑞德', origin: '进口', spec: '300mg×30片/盒', perDose: '300mg', times: ['早饭后'] },
    { id: 'taf', generic: '丙酚替诺福韦', brand: '韦立得', origin: '进口', spec: '25mg×30片/盒', perDose: '25mg', times: ['早饭后'] }
  ],
  flu: [
    { id: 'oseltamivir-flu', generic: '磷酸奥司他韦', brand: '达菲', origin: '进口', spec: '75mg×10粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] }
  ],
  'bact-diarrhea': [
    { id: 'montmorillonite-bd', generic: '蒙脱石散', brand: '思密达', origin: '进口', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '晚饭后'] },
    { id: 'levofloxacin-bd', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] }
  ],
  hzv: [
    { id: 'acyclovir', generic: '阿昔洛韦', brand: '国产', origin: '国产', spec: '0.2g×24片/盒', perDose: '0.4g', times: ['早饭后', '晚饭后'] },
    { id: 'famciclovir', generic: '泛昔洛韦', brand: '国产', origin: '国产', spec: '0.25g×6片/盒', perDose: '0.25g', times: ['早饭后', '晚饭后'] },
    { id: 'mecobalamin-hzv', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
  ],
  'mp-inf': [
    { id: 'azithromycin-mp', generic: '阿奇霉素', brand: '希舒美', origin: '进口', spec: '0.25g×6片/盒', perDose: '0.5g', times: ['早饭后'] }
  ],
  periodontitis: [
    { id: 'metronidazole-pe', generic: '甲硝唑片', brand: '国产', origin: '国产', spec: '0.2g×100片/瓶', perDose: '0.4g', times: ['早饭后', '晚饭后'] }
  ],
  rau: [
    { id: 'xiguashuang-rau', generic: '西瓜霜润喉片', brand: '三金', origin: '国产', spec: '1.2g×24片/盒', perDose: '含化', times: ['早饭后', '午饭后', '晚饭后'] },
    { id: 'bingpeng', generic: '冰硼散', brand: '国产', origin: '国产', spec: '3g/瓶', perDose: '适量外敷', times: ['早饭后', '晚饭后'] }
  ],
  pericoronitis: [
    { id: 'metronidazole-pc', generic: '甲硝唑片', brand: '国产', origin: '国产', spec: '0.2g×100片/瓶', perDose: '0.4g', times: ['早饭后', '晚饭后'] }
  ],
  gallstone: [
    { id: 'ursodeoxycholic', generic: '熊去氧胆酸胶囊', brand: '优思弗', origin: '进口', spec: '250mg×25粒/盒', perDose: '250mg', times: ['晚饭后'] },
    { id: 'danshu-gs', generic: '胆舒胶囊', brand: '国产', origin: '国产', spec: '0.45g×30粒/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  cholecystitis: [
    { id: 'xiaoyan-lidan-cc', generic: '消炎利胆片', brand: '国产', origin: '国产', spec: '0.5g×100片/瓶', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  mastoplasia: [
    { id: 'rupixiao', generic: '乳癖消片', brand: '国产', origin: '国产', spec: '0.5g×48片/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] },
    { id: 'xiaoyao-mp', generic: '逍遥丸', brand: '仲景', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
  ],
  fibroadenoma: [
    { id: 'rupisanjie', generic: '乳癖散结胶囊', brand: '国产', origin: '国产', spec: '0.5g×36粒/盒', perDose: '1.5g', times: ['早饭后', '晚饭后'] }
  ],
  varicose: [
    { id: 'maizhiling', generic: '迈之灵', brand: '德国', origin: '进口', spec: '150mg×20片/盒', perDose: '300mg', times: ['早饭后', '晚饭后'] },
    { id: 'diosmin', generic: '地奥司明片', brand: '国产', origin: '国产', spec: '0.45g×20片/盒', perDose: '0.9g', times: ['早饭后', '晚饭后'] }
  ],
  dvt: [
    { id: 'rivaroxaban-dvt', generic: '利伐沙班', brand: '拜瑞妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['晚饭后'] },
    { id: 'warfarin-dvt', generic: '华法林钠', brand: '国产', origin: '国产', spec: '2.5mg×60片/瓶', perDose: '2.5mg', times: ['晚饭后'] }
  ],
  paod: [
    { id: 'cilostazol', generic: '西洛他唑', brand: '国产', origin: '国产', spec: '50mg×12片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] },
    { id: 'beraprost', generic: '贝前列素钠', brand: '国产', origin: '国产', spec: '20μg×12片/盒', perDose: '40μg', times: ['早饭后', '晚饭后'] }
  ],
  phn: [
    { id: 'gabapentin', generic: '加巴喷丁', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] },
    { id: 'pregabalin-phn', generic: '普瑞巴林', brand: '乐瑞卡', origin: '进口', spec: '75mg×14粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] }
  ],
  'cervicogenic-ha': [
    { id: 'jingfukang-ch', generic: '颈复康颗粒', brand: '颈复康', origin: '国产', spec: '5g×10袋/盒', perDose: '10g', times: ['早饭后', '晚饭后'] }
  ],
  mps: [
    { id: 'eperisone', generic: '乙哌立松', brand: '妙纳', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
    { id: 'loxoprofen-mps', generic: '洛索洛芬钠', brand: '乐松', origin: '进口', spec: '60mg×20片/盒', perDose: '60mg', times: ['早饭后', '晚饭后'] }
  ]
}