import type { Department } from './departments'

export const moreDepartments: Department[] = [
  {
    id: 'ped', name: '儿科', color: '#6FB8E0', emoji: '🧒',
    diseases: [
      { id: 'hfmd', name: '手足口病', deptId: 'ped', aliases: ['手足口'], symptoms: ['发热', '口腔疱疹', '手足臀部皮疹'], diagnosis: ['典型临床表现', '肠道病毒核酸检测'], tips: '注意手卫生、居家隔离；重症立即就医。', drugs: [
        { id: 'ifn-spray', generic: '重组人干扰素喷雾', brand: '国产', origin: '国产', spec: '10ml/瓶', perDose: '适量喷口腔', times: ['早饭后', '晚饭后'] },
        { id: 'parac-ped', generic: '对乙酰氨基酚', brand: '泰诺林', origin: '进口', spec: '15ml/瓶', perDose: '按体重', times: ['早饭后'] }
      ] },
      { id: 'ped-diarrhea', name: '小儿腹泻', deptId: 'ped', aliases: ['婴幼儿腹泻'], symptoms: ['腹泻', '呕吐', '脱水'], diagnosis: ['大便常规', '轮状病毒抗原检测'], tips: '口服补液盐防脱水；继续喂养。', drugs: [
        { id: 'ors', generic: '口服补液盐III', brand: '国产', origin: '国产', spec: '5.125g×6袋/盒', perDose: '1袋', times: ['早饭后', '午饭后', '晚饭后'] },
        { id: 'smectite', generic: '蒙脱石散', brand: '思密达', origin: '进口', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '午饭后', '晚饭后'] },
        { id: 'bifido', generic: '双歧杆菌三联活菌', brand: '培菲康', origin: '国产', spec: '210mg×24粒/盒', perDose: '1粒', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'ped-pneumonia', name: '小儿肺炎', deptId: 'ped', aliases: ['儿童肺炎'], symptoms: ['发热', '咳嗽', '气促'], diagnosis: ['胸部X线', '血常规', '病原学检测'], tips: '注意观察呼吸；高热不退及时就医。', drugs: [
        { id: 'amox-ped', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '按体重', times: ['早饭后', '晚饭后'] },
        { id: 'ibu-ped', generic: '布洛芬混悬液', brand: '美林', origin: '进口', spec: '100ml/瓶', perDose: '按体重', times: ['早饭后'] },
        { id: 'ambrox-ped', generic: '氨溴索', brand: '沐舒坦', origin: '进口', spec: '30mg×20片/盒', perDose: '30mg', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'ped-asthma', name: '儿童哮喘', deptId: 'ped', aliases: ['小儿哮喘'], symptoms: ['喘息', '夜间咳嗽', '胸闷'], diagnosis: ['肺功能检查', '过敏原检测'], tips: '规律吸入控制药物；避免过敏原。', drugs: [
        { id: 'budes-ped', generic: '布地奈德', brand: '普米克令舒', origin: '进口', spec: '0.5mg/2ml×10支', perDose: '1支', times: ['早饭后', '晚饭后'] },
        { id: 'salbut-ped', generic: '沙丁胺醇', brand: '万托林', origin: '进口', spec: '100μg/揿×200揿', perDose: '1揿', times: ['早饭后', '睡前'] },
        { id: 'montel-ped', generic: '孟鲁司特', brand: '顺尔宁', origin: '进口', spec: '4mg×5片/盒', perDose: '4mg', times: ['睡前'] }
      ] },
      { id: 'rickets', name: '维生素D缺乏性佝偻病', deptId: 'ped', aliases: ['佝偻病'], symptoms: ['多汗', '易惊', '骨骼改变'], diagnosis: ['血清25-羟维生素D', '血钙磷'], tips: '多晒太阳、补充维生素D。', drugs: [
        { id: 'vd-ped', generic: '维生素D', brand: '国产', origin: '国产', spec: '400IU×30粒/盒', perDose: '400IU', times: ['早饭后'] },
        { id: 'caltrate-ped', generic: '碳酸钙D3', brand: '钙尔奇D', origin: '进口', spec: '600mg×60片/盒', perDose: '300mg', times: ['早饭后'] }
      ] },
      { id: 'kawasaki', name: '川崎病', deptId: 'ped', aliases: ['皮肤黏膜淋巴结综合征'], symptoms: ['持续发热', '皮疹', '结膜充血', '杨梅舌'], diagnosis: ['临床诊断标准', '心脏彩超'], tips: '及时治疗防冠状动脉损伤。', drugs: [
        { id: 'asa-ped', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '按体重', times: ['早饭后'] },
        { id: 'ivig', generic: '静脉注射丙种球蛋白', brand: '国产', origin: '国产', spec: '2.5g/瓶', perDose: '按体重', times: ['早饭后'] }
      ] }
    ]
  },
  {
    id: 'inf', name: '感染科', color: '#E08A5A', emoji: '🦠',
    diseases: [
      { id: 'tb', name: '肺结核', deptId: 'inf', aliases: ['结核病'], symptoms: ['咳嗽咳痰', '低热盗汗', '咯血', '消瘦'], diagnosis: ['痰涂片抗酸染色', '胸部CT', 'T-SPOT'], tips: '规范全程治疗、定期复查；注意隔离。', drugs: [
        { id: 'isoniazid', generic: '异烟肼', brand: '国产', origin: '国产', spec: '0.1g×100片/盒', perDose: '0.3g', times: ['早饭后'] },
        { id: 'rifamp', generic: '利福平', brand: '国产', origin: '国产', spec: '0.15g×100粒/盒', perDose: '0.45g', times: ['早饭后'] },
        { id: 'pyraz', generic: '吡嗪酰胺', brand: '国产', origin: '国产', spec: '0.25g×100片/盒', perDose: '0.5g', times: ['早饭后'] },
        { id: 'ethamb', generic: '乙胺丁醇', brand: '国产', origin: '国产', spec: '0.25g×100片/盒', perDose: '0.75g', times: ['早饭后'] }
      ] },
      { id: 'chb', name: '慢性乙型肝炎', deptId: 'inf', aliases: ['乙肝'], symptoms: ['乏力', '食欲减退', '黄疸', '右上腹不适'], diagnosis: ['乙肝两对半', 'HBV-DNA', '肝功能'], tips: '长期随访、规范抗病毒；戒酒。', drugs: [
        { id: 'entecavir', generic: '恩替卡韦', brand: '博路定', origin: '进口', spec: '0.5mg×7片/盒', perDose: '0.5mg', times: ['空腹'] },
        { id: 'tdf', generic: '替诺福韦', brand: '韦瑞德', origin: '进口', spec: '300mg×30片/盒', perDose: '300mg', times: ['早饭后'] }
      ] },
      { id: 'flu', name: '流行性感冒', deptId: 'inf', aliases: ['流感'], symptoms: ['高热', '全身酸痛', '咽痛', '乏力'], diagnosis: ['流感抗原检测', '流感核酸'], tips: '48小时内抗病毒效果佳；多休息。', drugs: [
        { id: 'oseltamivir', generic: '奥司他韦', brand: '达菲', origin: '进口', spec: '75mg×10粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] },
        { id: 'parac-flu', generic: '对乙酰氨基酚', brand: '泰诺林', origin: '进口', spec: '0.5g×10片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'bact-diarrhea', name: '感染性腹泻（细菌性）', deptId: 'inf', aliases: ['急性肠炎'], symptoms: ['腹泻腹痛', '发热', '里急后重'], diagnosis: ['大便培养', '大便常规'], tips: '补液为主；注意饮食卫生。', drugs: [
        { id: 'levo-inf', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] },
        { id: 'ors2', generic: '口服补液盐III', brand: '国产', origin: '国产', spec: '5.125g×6袋/盒', perDose: '1袋', times: ['早饭后', '午饭后', '晚饭后'] },
        { id: 'smectite2', generic: '蒙脱石散', brand: '思密达', origin: '进口', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '午饭后', '晚饭后'] }
      ] },
      { id: 'hzv', name: '带状疱疹', deptId: 'inf', aliases: ['缠腰龙'], symptoms: ['单侧皮疹水疱', '剧烈神经痛', '低热'], diagnosis: ['典型皮损', '必要时病毒检测'], tips: '早期抗病毒可减轻后遗神经痛。', drugs: [
        { id: 'acyclovir', generic: '阿昔洛韦', brand: '国产', origin: '国产', spec: '0.2g×24片/盒', perDose: '0.4g', times: ['早饭后', '午饭后', '晚饭后'] },
        { id: 'valacyclovir', generic: '伐昔洛韦', brand: '明竹欣', origin: '国产', spec: '0.3g×6片/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] },
        { id: 'gabapentin', generic: '加巴喷丁', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.3g', times: ['睡前'] }
      ] },
      { id: 'mp-inf', name: '肺炎支原体感染', deptId: 'inf', aliases: ['支原体肺炎'], symptoms: ['刺激性干咳', '低热', '咽痛'], diagnosis: ['肺炎支原体抗体', '胸部X线'], tips: '咳嗽迁延，注意休息。', drugs: [
        { id: 'azithro', generic: '阿奇霉素', brand: '希舒美', origin: '进口', spec: '0.25g×6片/盒', perDose: '0.5g', times: ['早饭后'] },
        { id: 'levo-mp', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] }
      ] }
    ]
  },
  {
    id: 'stom', name: '口腔科', color: '#D98CB0', emoji: '🦷',
    diseases: [
      { id: 'caries', name: '龋齿', deptId: 'stom', aliases: ['蛀牙'], symptoms: ['牙痛遇冷热加重', '牙齿黑点', '食物嵌塞'], diagnosis: ['口腔检查', '牙科X线'], tips: '及时充填治疗；使用含氟牙膏。', drugs: [
        { id: 'fluoride', generic: '氟化钠护齿剂', brand: '国产', origin: '国产', spec: '20ml/支', perDose: '适量涂布', times: ['睡前'] }
      ] },
      { id: 'periodontitis', name: '牙周炎', deptId: 'stom', aliases: ['牙周病'], symptoms: ['牙龈出血', '牙齿松动', '口臭'], diagnosis: ['牙周探查', '牙科X线'], tips: '定期洁牙、保持口腔卫生。', drugs: [
        { id: 'metro-dent', generic: '甲硝唑', brand: '国产', origin: '国产', spec: '0.2g×100片/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
        { id: 'chlorhex', generic: '复方氯己定含漱液', brand: '国产', origin: '国产', spec: '200ml/瓶', perDose: '10ml含漱', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'rau', name: '复发性口腔溃疡', deptId: 'stom', aliases: ['口腔溃疡'], symptoms: ['口腔黏膜溃疡', '疼痛', '影响进食'], diagnosis: ['临床检查'], tips: '避免辛辣刺激；补充B族维生素。', drugs: [
        { id: 'chlorhex-rau', generic: '复方氯己定含漱液', brand: '国产', origin: '国产', spec: '200ml/瓶', perDose: '10ml含漱', times: ['早饭后', '晚饭后'] },
        { id: 'watermelon', generic: '西瓜霜喷剂', brand: '国产', origin: '国产', spec: '3g/瓶', perDose: '适量喷', times: ['早饭后', '午饭后', '晚饭后'] },
        { id: 'vb2', generic: '维生素B2', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '10mg', times: ['早饭后'] }
      ] },
      { id: 'pericoronitis', name: '智齿冠周炎', deptId: 'stom', aliases: ['冠周炎'], symptoms: ['智齿区肿痛', '张口受限', '牙龈红肿'], diagnosis: ['口腔检查', 'X线'], tips: '炎症消退后评估是否拔除智齿。', drugs: [
        { id: 'metro-peri', generic: '甲硝唑', brand: '国产', origin: '国产', spec: '0.2g×100片/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
        { id: 'amox-peri', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'gingivitis', name: '牙龈炎', deptId: 'stom', aliases: ['牙龈发炎'], symptoms: ['牙龈红肿', '刷牙出血', '口臭'], diagnosis: ['口腔检查'], tips: '洁牙、正确刷牙。', drugs: [
        { id: 'chlorhex-gin', generic: '复方氯己定含漱液', brand: '国产', origin: '国产', spec: '200ml/瓶', perDose: '10ml含漱', times: ['早饭后', '晚饭后'] }
      ] }
    ]
  }
,
  {
    id: 'hepato', name: '肝胆胰外科', color: '#C9A24A', emoji: '🫚',
    diseases: [
      { id: 'gallstone', name: '胆囊结石', deptId: 'hepato', aliases: ['胆结石'], symptoms: ['右上腹隐痛', '进食油腻后加重', '恶心'], diagnosis: ['腹部超声', 'CT'], tips: '低脂饮食；反复发作考虑手术。', drugs: [
        { id: 'udca', generic: '熊去氧胆酸', brand: '优思弗', origin: '进口', spec: '250mg×25粒/盒', perDose: '250mg', times: ['早饭后', '晚饭后'] },
        { id: 'anisod', generic: '山莨菪碱', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '5mg', times: ['早饭后'] }
      ] },
      { id: 'cholecystitis', name: '胆囊炎', deptId: 'hepato', aliases: ['急性胆囊炎'], symptoms: ['右上腹剧痛', '发热', '恶心呕吐'], diagnosis: ['腹部超声', '血常规', 'Murphy征'], tips: '急性期禁食、抗感染；必要时手术。', drugs: [
        { id: 'cefo-chole', generic: '头孢克肟', brand: '世福素', origin: '进口', spec: '100mg×6片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] },
        { id: 'anisod2', generic: '山莨菪碱', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '5mg', times: ['早饭后'] }
      ] },
      { id: 'liver-cyst', name: '肝囊肿', deptId: 'hepato', aliases: ['肝脏囊肿'], symptoms: ['多无症状', '右上腹闷胀', '囊肿大时可触及'], diagnosis: ['腹部超声', 'CT'], tips: '无症状定期随访即可。', drugs: [] },
      { id: 'hemangioma', name: '肝血管瘤', deptId: 'hepato', aliases: ['肝脏血管瘤'], symptoms: ['多无症状', '偶有右上腹不适'], diagnosis: ['腹部超声', '增强CT/MRI'], tips: '良性病变，定期随访。', drugs: [] }
    ]
  },
  {
    id: 'breast', name: '乳腺外科', color: '#EE8FA3', emoji: '🎀',
    diseases: [
      { id: 'mastoplasia', name: '乳腺增生', deptId: 'breast', aliases: ['乳腺小叶增生'], symptoms: ['乳房胀痛', '可触及结节', '经前加重'], diagnosis: ['乳腺超声', '钼靶'], tips: '规律作息、情绪放松；定期复查。', drugs: [
        { id: 'tamox', generic: '枸橼酸他莫昔芬', brand: '国产', origin: '国产', spec: '10mg×60片/盒', perDose: '10mg', times: ['早饭后'] },
        { id: 'xiaoyao', generic: '逍遥丸', brand: '国产', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'fibroadenoma', name: '乳腺纤维腺瘤', deptId: 'breast', aliases: ['纤维瘤'], symptoms: ['无痛性肿块', '边界清晰', '活动度好'], diagnosis: ['乳腺超声', '穿刺活检'], tips: '定期随访；增长快者考虑手术。', drugs: [] },
      { id: 'breast-cancer', name: '乳腺癌', deptId: 'breast', aliases: ['乳腺恶性肿瘤'], symptoms: ['无痛性肿块', '乳头溢液', '皮肤橘皮样变'], diagnosis: ['钼靶', '超声', '穿刺活检'], tips: '早筛早治；规范综合治疗。', drugs: [
        { id: 'tamox2', generic: '他莫昔芬', brand: '国产', origin: '国产', spec: '10mg×60片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] },
        { id: 'anastrozole', generic: '阿那曲唑', brand: '瑞宁得', origin: '进口', spec: '1mg×14片/盒', perDose: '1mg', times: ['早饭后'] }
      ] }
    ]
  },
  {
    id: 'vascular', name: '血管外科', color: '#5A8FC9', emoji: '🩸',
    diseases: [
      { id: 'varicose', name: '下肢静脉曲张', deptId: 'vascular', aliases: ['静脉曲张'], symptoms: ['下肢浅静脉迂曲扩张', '沉重酸胀', '皮肤色素沉着'], diagnosis: ['下肢静脉超声', '体格检查'], tips: '避免久站久坐；穿弹力袜。', drugs: [
        { id: 'diosmin', generic: '地奥司明', brand: '爱脉朗', origin: '进口', spec: '500mg×20片/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] },
        { id: 'aescin2', generic: '迈之灵', brand: '马栗种子提取物', origin: '进口', spec: '150mg×20片/盒', perDose: '300mg', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'dvt', name: '深静脉血栓', deptId: 'vascular', aliases: ['下肢深静脉血栓'], symptoms: ['单侧下肢肿胀', '疼痛', '皮温升高'], diagnosis: ['下肢静脉超声', 'D-二聚体'], tips: '抬高患肢；抗凝治疗防肺栓塞。', drugs: [
        { id: 'rivar-dvt', generic: '利伐沙班', brand: '拜瑞妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['晚饭后'] },
        { id: 'warfar', generic: '华法林', brand: '国产', origin: '国产', spec: '2.5mg×100片/盒', perDose: '2.5mg', times: ['晚饭后'] }
      ] },
      { id: 'paod', name: '下肢动脉硬化闭塞症', deptId: 'vascular', aliases: ['间歇性跛行'], symptoms: ['行走后小腿疼痛', '下肢发凉', '皮肤苍白'], diagnosis: ['踝肱指数(ABI)', '下肢动脉超声/CTA'], tips: '戒烟、控制三高；步行锻炼。', drugs: [
        { id: 'cilostazol', generic: '西洛他唑', brand: '培达', origin: '进口', spec: '50mg×12片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
        { id: 'asa-paod', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
      ] }
    ]
  },
  {
    id: 'pain', name: '疼痛科', color: '#C96A5A', emoji: '🩹',
    diseases: [
      { id: 'phn', name: '带状疱疹后神经痛', deptId: 'pain', aliases: ['PHN'], symptoms: ['皮疹愈合后持续疼痛', '烧灼样/针刺样痛'], diagnosis: ['带状疱疹病史', '疼痛评估'], tips: '早期规范治疗可降低发生率。', drugs: [
        { id: 'gabapentin2', generic: '加巴喷丁', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] },
        { id: 'pregab', generic: '普瑞巴林', brand: '乐瑞卡', origin: '进口', spec: '75mg×14粒/盒', perDose: '75mg', times: ['早饭后', '晚饭后'] },
        { id: 'dulox', generic: '度洛西汀', brand: '欣百达', origin: '进口', spec: '30mg×14粒/盒', perDose: '30mg', times: ['早饭后'] }
      ] },
      { id: 'cervicogenic-ha', name: '颈源性头痛', deptId: 'pain', aliases: ['颈椎性头痛'], symptoms: ['枕颈部疼痛', '放射至头部', '颈部活动受限'], diagnosis: ['体格检查', '颈椎MRI'], tips: '纠正姿势；物理治疗。', drugs: [
        { id: 'celecox-pain', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
        { id: 'eperisone', generic: '乙哌立松', brand: '妙纳', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'mps', name: '肌筋膜疼痛综合征', deptId: 'pain', aliases: ['肌筋膜炎'], symptoms: ['局部肌肉酸痛', '可触及扳机点', '活动受限'], diagnosis: ['临床查体', '排除其他'], tips: '拉伸放松、避免久坐。', drugs: [
        { id: 'eperisone2', generic: '乙哌立松', brand: '妙纳', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
        { id: 'diclof-pain', generic: '双氯芬酸', brand: '扶他林', origin: '进口', spec: '75mg×10片/盒', perDose: '75mg', times: ['早饭后'] }
      ] }
    ]
  },
  {
    id: 'onco', name: '肿瘤科', color: '#9A7BC9', emoji: '🎗️',
    diseases: [
      { id: 'lung-cancer', name: '肺癌', deptId: 'onco', aliases: ['肺恶性肿瘤'], symptoms: ['刺激性干咳', '痰中带血', '胸痛', '消瘦'], diagnosis: ['胸部CT', '支气管镜活检'], tips: '戒烟、低剂量CT筛查。', drugs: [
        { id: 'gefitinib', generic: '吉非替尼', brand: '易瑞沙', origin: '进口', spec: '250mg×10片/盒', perDose: '250mg', times: ['空腹'] },
        { id: 'osimert', generic: '奥希替尼', brand: '泰瑞沙', origin: '进口', spec: '80mg×30片/盒', perDose: '80mg', times: ['早饭后'] }
      ] },
      { id: 'gastric-cancer', name: '胃癌', deptId: 'onco', aliases: ['胃恶性肿瘤'], symptoms: ['上腹不适', '食欲减退', '黑便', '消瘦'], diagnosis: ['胃镜+活检', '腹部CT'], tips: '根除幽门螺杆菌、定期胃镜。', drugs: [
        { id: 'capecitabine', generic: '卡培他滨', brand: '希罗达', origin: '进口', spec: '500mg×12片/盒', perDose: '按医嘱', times: ['早饭后', '晚饭后'] },
        { id: 'oxalipl', generic: '奥沙利铂', brand: '乐沙定', origin: '进口', spec: '50mg/瓶', perDose: '按医嘱', times: ['早饭后'] }
      ] },
      { id: 'crc', name: '结直肠癌', deptId: 'onco', aliases: ['大肠癌'], symptoms: ['便血', '排便习惯改变', '腹痛', '消瘦'], diagnosis: ['结肠镜+活检', 'CT'], tips: '45岁起肠镜筛查。', drugs: [
        { id: 'capecitabine2', generic: '卡培他滨', brand: '希罗达', origin: '进口', spec: '500mg×12片/盒', perDose: '按医嘱', times: ['早饭后', '晚饭后'] },
        { id: 'bevacizumab', generic: '贝伐珠单抗', brand: '安维汀', origin: '进口', spec: '100mg/4ml/瓶', perDose: '按医嘱', times: ['早饭后'] }
      ] },
      { id: 'lymphoma', name: '淋巴瘤', deptId: 'onco', aliases: ['恶性淋巴瘤'], symptoms: ['无痛性淋巴结肿大', '发热', '盗汗', '消瘦'], diagnosis: ['淋巴结活检', 'PET-CT'], tips: '规范化疗/靶向治疗。', drugs: [
        { id: 'rituximab', generic: '利妥昔单抗', brand: '美罗华', origin: '进口', spec: '100mg/10ml/瓶', perDose: '按医嘱', times: ['早饭后'] }
      ] }
    ]
  },
  {
    id: 'tcm', name: '中医科', color: '#7BA06A', emoji: '🌿',
    diseases: [
      { id: 'spleen-def', name: '脾虚', deptId: 'tcm', aliases: ['脾气虚'], symptoms: ['食欲不振', '腹胀便溏', '乏力', '面色萎黄'], diagnosis: ['中医辨证', '舌脉诊'], tips: '少食生冷、规律饮食。', drugs: [
        { id: 'shenling', generic: '参苓白术散', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] },
        { id: 'jianpi', generic: '健脾丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '1丸', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'kidney-def', name: '肾虚', deptId: 'tcm', aliases: ['肾气不足'], symptoms: ['腰膝酸软', '乏力', '夜尿多', '耳鸣'], diagnosis: ['中医辨证', '舌脉诊'], tips: '规律作息、节制房劳。', drugs: [
        { id: 'liuwei', generic: '六味地黄丸', brand: '同仁堂', origin: '国产', spec: '9g×10丸/盒', perDose: '1丸', times: ['早饭后', '晚饭后'] },
        { id: 'jinkui', generic: '金匮肾气丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '1丸', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'liver-stag', name: '肝郁气滞', deptId: 'tcm', aliases: ['肝气郁结'], symptoms: ['情绪抑郁', '胸胁胀痛', '嗳气', '月经不调'], diagnosis: ['中医辨证', '舌脉诊'], tips: '疏解情绪、适当运动。', drugs: [
        { id: 'xiaoyao2', generic: '逍遥丸', brand: '国产', origin: '国产', spec: '200丸/瓶', perDose: '8丸', times: ['早饭后', '晚饭后'] },
        { id: 'chaihu', generic: '柴胡舒肝丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '1丸', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'dampness', name: '湿气重', deptId: 'tcm', aliases: ['脾虚湿盛'], symptoms: ['身体困重', '头重如裹', '大便黏腻', '舌苔厚腻'], diagnosis: ['中医辨证', '舌脉诊'], tips: '少食油腻甜食、适当祛湿。', drugs: [
        { id: 'huoxiang', generic: '藿香正气丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] },
        { id: 'shenling2', generic: '参苓白术散', brand: '国产', origin: '国产', spec: '9g×10袋/盒', perDose: '9g', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'qi-blood-def', name: '气血不足', deptId: 'tcm', aliases: ['气血两虚'], symptoms: ['面色苍白', '头晕乏力', '心悸', '月经量少'], diagnosis: ['中医辨证', '血常规'], tips: '均衡营养、充足睡眠。', drugs: [
        { id: 'bazhen', generic: '八珍丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '1丸', times: ['早饭后', '晚饭后'] },
        { id: 'guipi', generic: '归脾丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '1丸', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'tcm-insomnia', name: '失眠（心脾两虚）', deptId: 'tcm', aliases: ['不寐'], symptoms: ['入睡困难', '多梦易醒', '心悸健忘'], diagnosis: ['中医辨证'], tips: '睡前泡脚、放松心情。', drugs: [
        { id: 'guipi2', generic: '归脾丸', brand: '国产', origin: '国产', spec: '9g×10丸/盒', perDose: '1丸', times: ['睡前'] },
        { id: 'suanzao', generic: '酸枣仁合剂', brand: '国产', origin: '国产', spec: '100ml/瓶', perDose: '10ml', times: ['睡前'] }
      ] }
    ]
  },
  {
    id: 'nutrition', name: '营养科', color: '#8AA85A', emoji: '🥗',
    diseases: [
      { id: 'obesity', name: '肥胖症', deptId: 'nutrition', aliases: ['超重'], symptoms: ['BMI≥28', '腹型肥胖', '易疲劳'], diagnosis: ['BMI测量', '体成分分析'], tips: '控制总热量、规律运动。', drugs: [
        { id: 'orlistat', generic: '奥利司他', brand: '舒尔佳', origin: '国产', spec: '60mg×24粒/盒', perDose: '60mg', times: ['早饭后', '午饭后', '晚饭后'] },
        { id: 'met-ob', generic: '二甲双胍', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] }
      ] },
      { id: 'malnutrition', name: '营养不良', deptId: 'nutrition', aliases: ['消瘦'], symptoms: ['体重下降', '乏力', '肌肉减少', '贫血'], diagnosis: ['体重/BMI', '血清白蛋白'], tips: '补充优质蛋白与能量。', drugs: [
        { id: 'ensure', generic: '肠内营养粉剂', brand: '安素', origin: '进口', spec: '400g/罐', perDose: '50g', times: ['早饭后', '晚饭后'] },
        { id: 'whey2', generic: '乳清蛋白粉', brand: '国产', origin: '国产', spec: '400g/罐', perDose: '30g', times: ['早饭后'] }
      ] },
      { id: 'met-syndrome', name: '代谢综合征', deptId: 'nutrition', aliases: ['胰岛素抵抗'], symptoms: ['中心性肥胖', '血压/血糖/血脂异常'], diagnosis: ['腰围+BMI', '血脂血糖血压综合评估'], tips: '综合干预生活方式。', drugs: [
        { id: 'met-ms', generic: '二甲双胍', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前', '晚饭前'] },
        { id: 'atorva-ms', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
      ] },
      { id: 'vitd-def', name: '维生素D缺乏', deptId: 'nutrition', aliases: ['VD缺乏'], symptoms: ['骨痛', '肌无力', '易疲劳'], diagnosis: ['血清25-羟维生素D'], tips: '多晒太阳、补充维生素D。', drugs: [
        { id: 'vd3', generic: '维生素D3', brand: '国产', origin: '国产', spec: '400IU×30粒/盒', perDose: '800IU', times: ['早饭后'] },
        { id: 'caltrate-vd', generic: '碳酸钙D3', brand: '钙尔奇D', origin: '进口', spec: '600mg×60片/盒', perDose: '600mg', times: ['早饭后'] }
      ] },
      { id: 'anemia-nutr', name: '巨幼细胞性贫血', deptId: 'nutrition', aliases: ['叶酸缺乏性贫血'], symptoms: ['面色苍白', '乏力', '舌炎', '四肢麻木'], diagnosis: ['血常规(大细胞)', '叶酸/B12测定'], tips: '补充叶酸与B12。', drugs: [
        { id: 'folic', generic: '叶酸', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '5mg', times: ['早饭后'] },
        { id: 'b12', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
      ] }
    ]
  },
  {
    id: 'rehab', name: '康复医学科', color: '#5AA0A8', emoji: '🤸',
    diseases: [
      { id: 'stroke-rehab', name: '脑卒中后康复', deptId: 'rehab', aliases: ['中风后遗症'], symptoms: ['偏瘫', '言语障碍', '吞咽困难'], diagnosis: ['功能评估', '影像学'], tips: '早期康复、循序渐进。', drugs: [
        { id: 'butylphth', generic: '丁苯酞', brand: '恩必普', origin: '国产', spec: '0.1g×24粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
        { id: 'citicoline', generic: '胞磷胆碱', brand: '国产', origin: '国产', spec: '0.1g×24粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'fracture-rehab', name: '骨折后康复', deptId: 'rehab', aliases: ['术后康复'], symptoms: ['关节僵硬', '肌力下降', '活动受限'], diagnosis: ['功能评估', 'X线'], tips: '在指导下渐进负重。', drugs: [
        { id: 'caltrate-rehab', generic: '碳酸钙D3', brand: '钙尔奇D', origin: '进口', spec: '600mg×60片/盒', perDose: '600mg', times: ['早饭后'] },
        { id: 'glucos-rehab', generic: '硫酸氨基葡萄糖', brand: '维固力', origin: '进口', spec: '250mg×20粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'neck-back-rehab', name: '颈肩腰腿痛康复', deptId: 'rehab', aliases: ['慢性劳损'], symptoms: ['颈肩腰腿疼痛', '活动受限', '肌肉僵硬'], diagnosis: ['体格检查', '影像学'], tips: '纠正姿势、核心训练。', drugs: [
        { id: 'eperisone3', generic: '乙哌立松', brand: '妙纳', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
        { id: 'celecox-rehab', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后'] }
      ] },
      { id: 'cardiac-rehab', name: '心肺康复', deptId: 'rehab', aliases: ['心肺功能康复'], symptoms: ['活动后气促', '耐力下降'], diagnosis: ['心肺运动试验', '心功能评估'], tips: '循序渐进有氧运动。', drugs: [] }
    ]
  },
  {
    id: 'hem', name: '血液内科', color: '#C95A5A', emoji: '🩸',
    diseases: [
      { id: 'aa', name: '再生障碍性贫血', deptId: 'hem', aliases: ['再障'], symptoms: ['面色苍白', '出血倾向', '反复感染'], diagnosis: ['血常规(全血减少)', '骨髓穿刺'], tips: '避免感染、遵医嘱免疫治疗。', drugs: [
        { id: 'cyclosporine', generic: '环孢素', brand: '新山地明', origin: '进口', spec: '25mg×50粒/盒', perDose: '按医嘱', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'itp', name: '免疫性血小板减少症', deptId: 'hem', aliases: ['ITP'], symptoms: ['皮肤瘀点瘀斑', '牙龈出血', '鼻出血'], diagnosis: ['血常规(血小板减少)', '骨髓检查'], tips: '避免磕碰、慎用抗凝药。', drugs: [
        { id: 'pred-itp', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] },
        { id: 'eltrombopag', generic: '艾曲泊帕', brand: '瑞弗兰', origin: '进口', spec: '25mg×14片/盒', perDose: '25mg', times: ['空腹'] }
      ] },
      { id: 'leukemia', name: '白血病', deptId: 'hem', aliases: ['急性白血病'], symptoms: ['发热', '贫血', '出血', '淋巴结肿大'], diagnosis: ['血常规', '骨髓穿刺', '流式/基因'], tips: '尽早血液科规范治疗。', drugs: [
        { id: 'imatinib', generic: '伊马替尼', brand: '格列卫', origin: '进口', spec: '100mg×60片/盒', perDose: '400mg', times: ['早饭后'] }
      ] },
      { id: 'thrombocytosis', name: '血小板增多症', deptId: 'hem', aliases: ['原发性血小板增多'], symptoms: ['头痛', '手足麻木', '血栓风险'], diagnosis: ['血常规', '骨髓检查', '基因检测'], tips: '定期监测、防血栓。', drugs: [
        { id: 'hydroxyurea', generic: '羟基脲', brand: '国产', origin: '国产', spec: '0.5g×100片/盒', perDose: '0.5g', times: ['早饭后'] },
        { id: 'asa-thr', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
      ] }
    ]
  },
  { id: 'endocrine', name: '内分泌科', color: '#1DB39F', emoji: '🫀', diseases: [
    { id: 'thyroid-nodule', name: '甲状腺结节', deptId: 'endocrine', aliases: ['甲状腺肿块'], symptoms: ['颈部肿块', '多无症状', '偶有压迫感'], diagnosis: ['甲状腺超声', '甲状腺功能', '必要时穿刺'], tips: '多数为良性，定期超声随访。', drugs: [] },
    { id: 'subclinical-hypo', name: '亚临床甲减', deptId: 'endocrine', aliases: ['亚临床甲状腺功能减退'], symptoms: ['多无症状', '乏力', '血脂升高'], diagnosis: ['TSH升高、FT4正常'], tips: '定期复查甲功，必要时补充左甲状腺素。', drugs: [
      { id: 'lt4-sub', generic: '左甲状腺素钠', brand: '优甲乐', origin: '进口', spec: '50μg×100片/盒', perDose: '50μg', times: ['醒来'] }
    ] },
    { id: 'hyperaldosteronism', name: '原发性醛固酮增多症', deptId: 'endocrine', aliases: ['原醛'], symptoms: ['高血压', '低血钾', '乏力'], diagnosis: ['醛固酮/肾素比值', '肾上腺CT'], tips: '难治性高血压需排查。', drugs: [
      { id: 'spiron-ald', generic: '螺内酯', brand: '安体舒通', origin: '国产', spec: '20mg×100片/盒', perDose: '20mg', times: ['早饭后'] }
    ] },
    { id: 'cushing', name: '库欣综合征', deptId: 'endocrine', aliases: ['皮质醇增多症'], symptoms: ['向心性肥胖', '皮肤紫纹', '高血压', '血糖升高'], diagnosis: ['皮质醇节律', '小剂量地塞米松抑制试验'], tips: '需内分泌专科明确病因。', drugs: [] },
    { id: 'hyperparathy', name: '甲状旁腺功能亢进', deptId: 'endocrine', aliases: ['甲旁亢'], symptoms: ['骨痛', '肾结石', '血钙升高'], diagnosis: ['血钙', '甲状旁腺激素(PTH)'], tips: '监测血钙、必要时手术。', drugs: [
      { id: 'cinacalcet', generic: '西那卡塞', brand: '盖平', origin: '进口', spec: '25mg×10片/盒', perDose: '25mg', times: ['早饭后'] }
    ] }
  ] },
  { id: 'cardio', name: '心血管内科', color: '#F78F6E', emoji: '❤️', diseases: [
    { id: 'myocarditis', name: '心肌炎', deptId: 'cardio', aliases: ['病毒性心肌炎'], symptoms: ['心悸', '胸闷', '乏力', '活动后气短'], diagnosis: ['心肌酶/肌钙蛋白', '心脏彩超', '心电图'], tips: '充分休息、避免剧烈运动。', drugs: [
      { id: 'coq10', generic: '辅酶Q10', brand: '能气朗', origin: '进口', spec: '10mg×30片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] },
      { id: 'trimetazidine', generic: '曲美他嗪', brand: '万爽力', origin: '进口', spec: '20mg×30片/盒', perDose: '20mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'pericarditis', name: '心包炎', deptId: 'cardio', aliases: ['急性心包炎'], symptoms: ['胸痛（前倾缓解）', '发热', '心悸'], diagnosis: ['心脏彩超', '心电图', '炎症指标'], tips: '休息、抗炎治疗。', drugs: [
      { id: 'ibu-peri', generic: '布洛芬', brand: '芬必得', origin: '国产', spec: '0.3g×20粒/盒', perDose: '0.3g', times: ['早饭后'] },
      { id: 'colch-peri', generic: '秋水仙碱', brand: '国产', origin: '国产', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后'] }
    ] },
    { id: 'hypotension', name: '低血压', deptId: 'cardio', aliases: ['血压偏低'], symptoms: ['头晕', '乏力', '直立性黑朦'], diagnosis: ['血压测量', '排除其他'], tips: '多饮水、缓慢起身、适当增加盐分。', drugs: [] },
    { id: 'atherosclerosis', name: '动脉粥样硬化', deptId: 'cardio', aliases: ['动脉硬化'], symptoms: ['多无症状', '随部位出现供血不足表现'], diagnosis: ['颈动脉超声', '血脂', 'CTA'], tips: '控三高、戒烟、他汀治疗。', drugs: [
      { id: 'atorva-as', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] },
      { id: 'asa-as', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
    ] },
    { id: 'hhd', name: '高血压性心脏病', deptId: 'cardio', aliases: ['高心病'], symptoms: ['心悸', '气促', '下肢水肿'], diagnosis: ['心脏彩超(左室肥厚)', '血压监测'], tips: '严格控制血压。', drugs: [
      { id: 'vals-hhd', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
      { id: 'metop-hhd', generic: '美托洛尔', brand: '倍他乐克', origin: '进口', spec: '25mg×20片/盒', perDose: '25mg', times: ['早饭后'] }
    ] }
  ] },
  { id: 'resp', name: '呼吸内科', color: '#3FB7E0', emoji: '🫁', diseases: [
    { id: 'pneumonia', name: '细菌性肺炎', deptId: 'resp', aliases: ['肺炎'], symptoms: ['发热', '咳嗽咳痰', '胸痛'], diagnosis: ['胸部X线', '血常规', '痰培养'], tips: '规范抗感染、多饮水。', drugs: [
      { id: 'amox-pneu', generic: '阿莫西林克拉维酸', brand: '阿莫仙', origin: '国产', spec: '0.375g×12片/盒', perDose: '0.375g', times: ['早饭后', '晚饭后'] },
      { id: 'moxiflox', generic: '莫西沙星', brand: '拜复乐', origin: '进口', spec: '0.4g×3片/盒', perDose: '0.4g', times: ['早饭后'] }
    ] },
    { id: 'bronchiectasis', name: '支气管扩张', deptId: 'resp', aliases: ['支扩'], symptoms: ['慢性咳嗽', '大量脓痰', '反复咯血'], diagnosis: ['胸部高分辨CT'], tips: '体位引流、祛痰；急性期抗感染。', drugs: [
      { id: 'ambrox-be', generic: '氨溴索', brand: '沐舒坦', origin: '进口', spec: '30mg×20片/盒', perDose: '30mg', times: ['早饭后', '晚饭后'] },
      { id: 'acetylcyst', generic: '乙酰半胱氨酸', brand: '富露施', origin: '进口', spec: '600mg×10片/盒', perDose: '600mg', times: ['早饭后'] }
    ] },
    { id: 'pulmonary-nodule', name: '肺结节', deptId: 'resp', aliases: ['肺部结节'], symptoms: ['多无症状', '偶有咳嗽'], diagnosis: ['胸部CT', '定期随访'], tips: '按医生建议定期复查CT。', drugs: [] },
    { id: 'osa', name: '睡眠呼吸暂停综合征', deptId: 'resp', aliases: ['打鼾', 'OSA'], symptoms: ['夜间打鼾', '白天嗜睡', '晨起头痛'], diagnosis: ['多导睡眠监测(PSG)'], tips: '减重、侧卧、必要时无创通气。', drugs: [] },
    { id: 'pleurisy', name: '胸膜炎', deptId: 'resp', aliases: ['胸膜腔积液'], symptoms: ['胸痛（呼吸加重）', '发热', '咳嗽'], diagnosis: ['胸部X线/超声', '胸水检查'], tips: '明确病因后治疗。', drugs: [
      { id: 'ibu-pleu', generic: '布洛芬', brand: '芬必得', origin: '国产', spec: '0.3g×20粒/盒', perDose: '0.3g', times: ['早饭后'] }
    ] }
  ] },
  { id: 'gastro', name: '消化内科', color: '#F7B731', emoji: '🍚', diseases: [
    { id: 'pud', name: '消化性溃疡', deptId: 'gastro', aliases: ['胃溃疡/十二指肠溃疡'], symptoms: ['上腹痛（节律性）', '反酸', '黑便'], diagnosis: ['胃镜', '幽门螺杆菌检测'], tips: '规律饮食、戒烟酒、根除幽门螺杆菌。', drugs: [
      { id: 'omep-pud', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前', '晚饭前'] },
      { id: 'hydrotal-pud', generic: '铝碳酸镁', brand: '达喜', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭后', '午饭后', '晚饭后'] }
    ] },
    { id: 'ibs', name: '肠易激综合征', deptId: 'gastro', aliases: ['IBS'], symptoms: ['腹痛伴排便习惯改变', '腹泻便秘交替', '腹胀'], diagnosis: ['排除器质性病变', '罗马标准'], tips: '调整饮食、管理情绪。', drugs: [
      { id: 'pinaverium', generic: '匹维溴铵', brand: '得舒特', origin: '进口', spec: '50mg×30片/盒', perDose: '50mg', times: ['早饭后', '午饭后', '晚饭后'] },
      { id: 'bifido-ibs', generic: '双歧杆菌三联活菌', brand: '培菲康', origin: '国产', spec: '210mg×24粒/盒', perDose: '1粒', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'uc', name: '溃疡性结肠炎', deptId: 'gastro', aliases: ['UC'], symptoms: ['黏液脓血便', '腹痛', '里急后重'], diagnosis: ['结肠镜+活检'], tips: '规律用药、定期复查肠镜。', drugs: [
      { id: 'mesalazine', generic: '美沙拉嗪', brand: '颇得斯安', origin: '进口', spec: '0.5g×100片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'crohn', name: '克罗恩病', deptId: 'gastro', aliases: ['CD'], symptoms: ['腹痛', '腹泻', '消瘦', '肛周病变'], diagnosis: ['肠镜+活检', '影像学'], tips: '营养支持、长期随访。', drugs: [
      { id: 'mesalazine2', generic: '美沙拉嗪', brand: '颇得斯安', origin: '进口', spec: '0.5g×100片/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
      { id: 'azathioprine', generic: '硫唑嘌呤', brand: '依木兰', origin: '进口', spec: '50mg×100片/盒', perDose: '50mg', times: ['早饭后'] }
    ] },
    { id: 'acute-gastroenteritis', name: '急性胃肠炎', deptId: 'gastro', aliases: ['胃肠炎'], symptoms: ['恶心呕吐', '腹痛腹泻', '发热'], diagnosis: ['临床诊断', '大便常规'], tips: '补液、清淡饮食。', drugs: [
      { id: 'ors3', generic: '口服补液盐III', brand: '国产', origin: '国产', spec: '5.125g×6袋/盒', perDose: '1袋', times: ['早饭后', '午饭后', '晚饭后'] },
      { id: 'smectite3', generic: '蒙脱石散', brand: '思密达', origin: '进口', spec: '3g×10袋/盒', perDose: '3g', times: ['早饭后', '午饭后', '晚饭后'] }
    ] }
  ] },
  { id: 'neuro', name: '神经内科', color: '#8B7CF6', emoji: '🧠', diseases: [
    { id: 'stroke', name: '脑梗死', deptId: 'neuro', aliases: ['脑卒中/脑梗'], symptoms: ['偏瘫', '言语不清', '口角歪斜', '肢体麻木'], diagnosis: ['头颅CT/MRI', '血管评估'], tips: '突发症状立即拨打120，抢时间窗。', drugs: [
      { id: 'asa-stroke', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] },
      { id: 'clopid-stroke', generic: '氯吡格雷', brand: '波立维', origin: '进口', spec: '75mg×7片/盒', perDose: '75mg', times: ['早饭后'] },
      { id: 'atorva-stroke', generic: '阿托伐他汀', brand: '立普妥', origin: '进口', spec: '20mg×7片/盒', perDose: '20mg', times: ['睡前'] }
    ] },
    { id: 'ich', name: '脑出血', deptId: 'neuro', aliases: ['脑溢血'], symptoms: ['突发剧烈头痛', '呕吐', '意识障碍'], diagnosis: ['头颅CT'], tips: '立即急诊；控制血压。', drugs: [] },
    { id: 'epilepsy', name: '癫痫', deptId: 'neuro', aliases: ['羊癫风'], symptoms: ['抽搐', '意识丧失', '愣神'], diagnosis: ['脑电图', '头颅MRI'], tips: '规律服药、勿擅自停药；避免危险作业。', drugs: [
      { id: 'valproate', generic: '丙戊酸钠', brand: '德巴金', origin: '进口', spec: '0.5g×30片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
      { id: 'levetiracetam', generic: '左乙拉西坦', brand: '开浦兰', origin: '进口', spec: '0.5g×30片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
      { id: 'carbamazepine', generic: '卡马西平', brand: '得理多', origin: '进口', spec: '200mg×30片/盒', perDose: '200mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'trigeminal', name: '三叉神经痛', deptId: 'neuro', aliases: ['面部神经痛'], symptoms: ['面部电击样剧痛', '刷牙吃饭诱发'], diagnosis: ['临床特征', '头颅MRI'], tips: '避免诱发动作；药物无效可微创治疗。', drugs: [
      { id: 'carbamazepine2', generic: '卡马西平', brand: '得理多', origin: '进口', spec: '200mg×30片/盒', perDose: '200mg', times: ['早饭后', '晚饭后'] },
      { id: 'gabapentin3', generic: '加巴喷丁', brand: '国产', origin: '国产', spec: '0.3g×24粒/盒', perDose: '0.3g', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'facial-palsy', name: '面神经麻痹', deptId: 'neuro', aliases: ['面瘫'], symptoms: ['口角歪斜', '闭眼不全', '额纹消失'], diagnosis: ['临床查体'], tips: '早期激素治疗、护眼、面部康复。', drugs: [
      { id: 'pred-facial', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] },
      { id: 'mecobal-facial', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'meniere', name: '眩晕症（梅尼埃病）', deptId: 'neuro', aliases: ['美尼尔'], symptoms: ['反复眩晕', '耳鸣', '听力下降'], diagnosis: ['前庭功能检查', '纯音测听'], tips: '发作时卧床、低盐饮食。', drugs: [
      { id: 'betahistine', generic: '倍他司汀', brand: '敏使朗', origin: '进口', spec: '6mg×100片/盒', perDose: '6mg', times: ['早饭后', '午饭后', '晚饭后'] }
    ] }
  ] },
  { id: 'nephro', name: '肾内科', color: '#4CA6A0', emoji: '🫘', diseases: [
    { id: 'cgn', name: '慢性肾小球肾炎', deptId: 'nephro', aliases: ['慢性肾炎'], symptoms: ['血尿', '蛋白尿', '水肿', '高血压'], diagnosis: ['尿常规', '肾功能', '必要时肾穿刺'], tips: '低盐、控血压、定期复查。', drugs: [
      { id: 'vals-cgn', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] },
      { id: 'benaz-cgn', generic: '贝那普利', brand: '洛汀新', origin: '进口', spec: '10mg×14片/盒', perDose: '10mg', times: ['早饭后'] }
    ] },
    { id: 'ns', name: '肾病综合征', deptId: 'nephro', aliases: ['NS'], symptoms: ['大量蛋白尿', '全身水肿', '低白蛋白血症'], diagnosis: ['24小时尿蛋白定量', '血清白蛋白'], tips: '限盐、监测尿量体重。', drugs: [
      { id: 'pred-ns', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] },
      { id: 'mmf-ns', generic: '吗替麦考酚酯', brand: '骁悉', origin: '进口', spec: '250mg×40粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'renal-cyst', name: '肾囊肿', deptId: 'nephro', aliases: ['肾脏囊肿'], symptoms: ['多无症状', '偶有腰胀'], diagnosis: ['肾脏超声'], tips: '无症状定期随访。', drugs: [] }
  ] },
  { id: 'rheum', name: '风湿免疫科', color: '#E06A6A', emoji: '🦴', diseases: [
    { id: 'as', name: '强直性脊柱炎', deptId: 'rheum', aliases: ['AS'], symptoms: ['腰背痛伴晨僵', '活动后减轻', '夜间痛'], diagnosis: ['HLA-B27', '骶髂关节MRI'], tips: '坚持功能锻炼、规律用药。', drugs: [
      { id: 'celecox-as', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
      { id: 'sulfasalazine', generic: '柳氮磺吡啶', brand: '国产', origin: '国产', spec: '0.25g×60片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'sjogren', name: '干燥综合征', deptId: 'rheum', aliases: ['干燥症'], symptoms: ['口干', '眼干', '关节痛'], diagnosis: ['抗SSA/SSB抗体', '唇腺活检'], tips: '多饮水、人工泪液护眼。', drugs: [
      { id: 'hcq-sjogren', generic: '羟氯喹', brand: '赛能', origin: '进口', spec: '200mg×10片/盒', perDose: '200mg', times: ['早饭后'] }
    ] },
    { id: 'psa', name: '银屑病关节炎', deptId: 'rheum', aliases: ['PsA'], symptoms: ['银屑病皮疹', '关节肿痛', '晨僵'], diagnosis: ['临床+皮疹', '影像学'], tips: '皮肤与关节同治。', drugs: [
      { id: 'mtx-psa', generic: '甲氨蝶呤', brand: '国产', origin: '国产', spec: '2.5mg×100片/盒', perDose: '10mg', times: ['早饭后'] },
      { id: 'celecox-psa', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后'] }
    ] },
    { id: 'vasculitis', name: '血管炎', deptId: 'rheum', aliases: ['系统性血管炎'], symptoms: ['发热', '乏力', '多系统受累'], diagnosis: ['ANCA抗体', '组织活检'], tips: '免疫专科规范治疗。', drugs: [
      { id: 'pred-vas', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] }
    ] }
  ] },
  { id: 'derm', name: '皮肤科', color: '#F08CA8', emoji: '🧴', diseases: [
    { id: 'psoriasis', name: '银屑病', deptId: 'derm', aliases: ['牛皮癣'], symptoms: ['红斑上覆银白鳞屑', '瘙痒'], diagnosis: ['典型皮损', '皮肤活检'], tips: '避免搔抓、保湿、光疗。', drugs: [
      { id: 'calcipotriol', generic: '卡泊三醇软膏', brand: '达力士', origin: '进口', spec: '0.005%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
      { id: 'momet-pso', generic: '糠酸莫米松乳膏', brand: '艾洛松', origin: '进口', spec: '0.1%×10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'tinea', name: '体癣（真菌感染）', deptId: 'derm', aliases: ['股癣/足癣'], symptoms: ['环形红斑', '瘙痒', '脱屑'], diagnosis: ['真菌镜检'], tips: '保持皮肤干燥、抗真菌治疗。', drugs: [
      { id: 'terbinafine', generic: '特比萘芬乳膏', brand: '兰美抒', origin: '进口', spec: '1%×15g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
      { id: 'miconazole', generic: '咪康唑乳膏', brand: '达克宁', origin: '进口', spec: '2%×20g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'chloasma', name: '黄褐斑', deptId: 'derm', aliases: ['肝斑'], symptoms: ['面部对称褐斑', '日晒后加重'], diagnosis: ['临床'], tips: '严格防晒、规范淡斑。', drugs: [
      { id: 'hydroquinone', generic: '氢醌乳膏', brand: '国产', origin: '国产', spec: '2%×20g/支', perDose: '适量外用', times: ['睡前'] }
    ] },
    { id: 'alopecia', name: '斑秃', deptId: 'derm', aliases: ['鬼剃头'], symptoms: ['片状脱发', '多无症状'], diagnosis: ['临床'], tips: '避免精神紧张、可外用激素。', drugs: [
      { id: 'minoxidil', generic: '米诺地尔', brand: '蔓迪', origin: '国产', spec: '5%×60ml/瓶', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
    ] }
  ] },
  { id: 'ophth', name: '眼科', color: '#5FB8C9', emoji: '👁️', diseases: [
    { id: 'cataract', name: '白内障', deptId: 'ophth', aliases: ['老年性白内障'], symptoms: ['渐进性视物模糊', '畏光', '色彩变暗'], diagnosis: ['裂隙灯检查'], tips: '成熟后可行手术治疗。', drugs: [
      { id: 'pirenoxine', generic: '吡诺克辛滴眼液', brand: '卡林优', origin: '进口', spec: '5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'dr', name: '糖尿病视网膜病变', deptId: 'ophth', aliases: ['糖网'], symptoms: ['视物模糊', '眼前黑影', '视力下降'], diagnosis: ['眼底检查', 'OCT'], tips: '严格控制血糖、定期眼底筛查。', drugs: [] },
    { id: 'conjunctivitis', name: '结膜炎', deptId: 'ophth', aliases: ['红眼病'], symptoms: ['眼红', '异物感', '分泌物增多'], diagnosis: ['裂隙灯'], tips: '注意手卫生、勿揉眼。', drugs: [
      { id: 'oflox-eye', generic: '氧氟沙星滴眼液', brand: '泰利必妥', origin: '进口', spec: '0.3%×5ml/支', perDose: '1滴', times: ['早饭后', '午饭后', '晚饭后'] },
      { id: 'olopatadine', generic: '奥洛他定滴眼液', brand: '帕坦洛', origin: '进口', spec: '0.1%×5ml/支', perDose: '1滴', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'amd', name: '黄斑变性', deptId: 'ophth', aliases: ['老年性黄斑变性'], symptoms: ['中心视力下降', '视物变形'], diagnosis: ['OCT', '眼底造影'], tips: '及时抗VEGF治疗。', drugs: [] }
  ] },
  { id: 'ent', name: '耳鼻咽喉科', color: '#7BA8C9', emoji: '👂', diseases: [
    { id: 'otitis-media', name: '中耳炎', deptId: 'ent', aliases: ['化脓性中耳炎'], symptoms: ['耳痛', '听力下降', '耳流脓'], diagnosis: ['耳镜检查'], tips: '保持耳道干燥、及时抗感染。', drugs: [
      { id: 'oflox-ear', generic: '氧氟沙星滴耳液', brand: '泰利必妥', origin: '进口', spec: '0.3%×5ml/支', perDose: '数滴', times: ['早饭后', '晚饭后'] },
      { id: 'cefix-om', generic: '头孢克肟', brand: '世福素', origin: '进口', spec: '100mg×6片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'sudden-deaf', name: '突发性耳聋', deptId: 'ent', aliases: ['突聋'], symptoms: ['突然听力下降', '耳鸣', '耳闷'], diagnosis: ['纯音测听'], tips: '72小时内就诊、尽早激素治疗。', drugs: [
      { id: 'pred-sd', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] },
      { id: 'ginkgo', generic: '银杏叶提取物', brand: '金纳多', origin: '进口', spec: '40mg×20片/盒', perDose: '80mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'tinnitus', name: '耳鸣', deptId: 'ent', aliases: ['神经性耳鸣'], symptoms: ['耳内鸣响', '影响睡眠'], diagnosis: ['听力检查'], tips: '避免噪音、放松情绪。', drugs: [
      { id: 'ginkgo-tin', generic: '银杏叶提取物', brand: '金纳多', origin: '进口', spec: '40mg×20片/盒', perDose: '80mg', times: ['早饭后', '晚饭后'] },
      { id: 'mecobal-tin', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'tonsillitis', name: '扁桃体炎', deptId: 'ent', aliases: ['急性扁桃体炎'], symptoms: ['咽痛', '发热', '吞咽困难'], diagnosis: ['咽部检查'], tips: '多饮水、休息；反复发作考虑手术。', drugs: [
      { id: 'amox-ton', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] },
      { id: 'parac-ton', generic: '对乙酰氨基酚', brand: '泰诺林', origin: '进口', spec: '0.5g×10片/盒', perDose: '0.5g', times: ['早饭后'] }
    ] }
  ] },
  { id: 'psych', name: '精神心理科', color: '#A78BFA', emoji: '🌿', diseases: [
    { id: 'bipolar', name: '双相情感障碍', deptId: 'psych', aliases: ['躁郁症'], symptoms: ['情绪高涨与低落交替', '精力异常', '睡眠需求改变'], diagnosis: ['精神科评估'], tips: '心境稳定剂长期治疗。', drugs: [
      { id: 'lithium', generic: '碳酸锂', brand: '国产', origin: '国产', spec: '250mg×100片/盒', perDose: '按医嘱', times: ['早饭后', '晚饭后'] },
      { id: 'quetiapine', generic: '喹硫平', brand: '思瑞康', origin: '进口', spec: '25mg×20片/盒', perDose: '按医嘱', times: ['睡前'] }
    ] },
    { id: 'ocd', name: '强迫症', deptId: 'psych', aliases: ['OCD'], symptoms: ['反复强迫思维', '重复行为'], diagnosis: ['精神科评估'], tips: '认知行为治疗+药物。', drugs: [
      { id: 'sert-ocd', generic: '舍曲林', brand: '左洛复', origin: '进口', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭后'] },
      { id: 'fluvox', generic: '氟伏沙明', brand: '兰释', origin: '进口', spec: '50mg×30片/盒', perDose: '50mg', times: ['睡前'] }
    ] }
  ] },
  { id: 'gyn', name: '妇产科', color: '#EE8FA3', emoji: '🌺', diseases: [
    { id: 'fibroid', name: '子宫肌瘤', deptId: 'gyn', aliases: ['子宫平滑肌瘤'], symptoms: ['月经量增多', '下腹坠胀', '压迫症状'], diagnosis: ['妇科超声'], tips: '无症状定期随访。', drugs: [] },
    { id: 'endometriosis', name: '子宫内膜异位症', deptId: 'gyn', aliases: ['内异症'], symptoms: ['痛经', '不孕', '性交痛'], diagnosis: ['超声', '腹腔镜'], tips: '激素治疗或手术。', drugs: [
      { id: 'dienogest', generic: '地诺孕素', brand: '唯散宁', origin: '进口', spec: '2mg×28片/盒', perDose: '2mg', times: ['睡前'] },
      { id: 'dydro-endo', generic: '地屈孕酮', brand: '达芙通', origin: '进口', spec: '10mg×20片/盒', perDose: '10mg', times: ['早饭后'] }
    ] },
    { id: 'irregular-menses', name: '月经不调', deptId: 'gyn', aliases: ['月经紊乱'], symptoms: ['周期紊乱', '经量异常'], diagnosis: ['性激素六项', '妇科超声'], tips: '规律作息、必要时调经。', drugs: [
      { id: 'dydro-menses', generic: '地屈孕酮', brand: '达芙通', origin: '进口', spec: '10mg×20片/盒', perDose: '10mg', times: ['早饭后'] },
      { id: 'wuji', generic: '乌鸡白凤丸', brand: '国产', origin: '国产', spec: '6g×10袋/盒', perDose: '6g', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'vaginitis', name: '阴道炎', deptId: 'gyn', aliases: ['外阴阴道炎'], symptoms: ['白带异常', '外阴瘙痒', '异味'], diagnosis: ['白带常规'], tips: '保持外阴清洁、规范用药。', drugs: [
      { id: 'metronidazole', generic: '甲硝唑', brand: '国产', origin: '国产', spec: '0.2g×100片/盒', perDose: '0.4g', times: ['早饭后', '晚饭后'] },
      { id: 'clotrimazole', generic: '克霉唑栓', brand: '凯妮汀', origin: '进口', spec: '0.5g×1枚', perDose: '1枚', times: ['睡前'] }
    ] }
  ] },
  { id: 'uro', name: '泌尿外科', color: '#6FA8DC', emoji: '💧', diseases: [
    { id: 'prostatitis', name: '前列腺炎', deptId: 'uro', aliases: ['慢性前列腺炎'], symptoms: ['尿频尿急', '会阴坠胀', '下腹不适'], diagnosis: ['前列腺液检查', '超声'], tips: '避免久坐、温水坐浴。', drugs: [
      { id: 'tamsul-pro', generic: '坦索罗辛', brand: '哈乐', origin: '进口', spec: '0.2mg×10粒/盒', perDose: '0.2mg', times: ['睡前'] },
      { id: 'levo-pro', generic: '左氧氟沙星', brand: '可乐必妥', origin: '进口', spec: '0.5g×4片/盒', perDose: '0.5g', times: ['早饭后'] }
    ] },
    { id: 'incontinence', name: '压力性尿失禁', deptId: 'uro', aliases: ['漏尿'], symptoms: ['咳嗽大笑时漏尿', '尿频'], diagnosis: ['尿动力学检查'], tips: '盆底肌训练（凯格尔）。', drugs: [] },
    { id: 'varicocele', name: '精索静脉曲张', deptId: 'uro', aliases: ['精索静脉曲张'], symptoms: ['阴囊坠胀', '久站加重'], diagnosis: ['阴囊超声'], tips: '症状明显或影响生育可手术。', drugs: [] }
  ] },
  { id: 'ortho', name: '骨科', color: '#C98A6B', emoji: '🦴', diseases: [
    { id: 'lumbar-hernia', name: '腰椎间盘突出', deptId: 'ortho', aliases: ['腰突'], symptoms: ['腰痛', '下肢放射痛', '麻木'], diagnosis: ['腰椎MRI'], tips: '急性期休息、加强核心力量。', drugs: [
      { id: 'celecox-lh', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
      { id: 'mecobal-lh', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] },
      { id: 'eperisone-lh', generic: '乙哌立松', brand: '妙纳', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'frozen-shoulder', name: '肩周炎', deptId: 'ortho', aliases: ['冻结肩'], symptoms: ['肩痛', '活动受限', '夜间痛'], diagnosis: ['临床查体'], tips: '坚持功能锻炼。', drugs: [
      { id: 'diclof-fs', generic: '双氯芬酸', brand: '扶他林', origin: '进口', spec: '75mg×10片/盒', perDose: '75mg', times: ['早饭后'] },
      { id: 'eperisone-fs', generic: '乙哌立松', brand: '妙纳', origin: '进口', spec: '50mg×20片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'tenosynovitis', name: '腱鞘炎', deptId: 'ortho', aliases: ['狭窄性腱鞘炎'], symptoms: ['局部疼痛', '活动时弹响', '手指活动受限'], diagnosis: ['临床查体'], tips: '制动休息、避免重复动作。', drugs: [
      { id: 'diclof-ts', generic: '双氯芬酸凝胶', brand: '扶他林', origin: '进口', spec: '1%×20g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'meniscus', name: '半月板损伤', deptId: 'ortho', aliases: ['膝关节半月板损伤'], symptoms: ['膝关节痛', '交锁', '肿胀'], diagnosis: ['膝关节MRI'], tips: '避免深蹲扭转；严重者关节镜手术。', drugs: [
      { id: 'celecox-mn', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] },
      { id: 'glucos-mn', generic: '硫酸氨基葡萄糖', brand: '维固力', origin: '进口', spec: '250mg×20粒/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
    ] }
  ] },
  { id: 'geri', name: '老年医学科', color: '#8FA6B2', emoji: '🌳', diseases: [
    { id: 'frailty', name: '老年衰弱', deptId: 'geri', aliases: ['衰弱综合征'], symptoms: ['乏力', '体重下降', '步速减慢', '易跌倒'], diagnosis: ['衰弱评估量表'], tips: '营养+抗阻运动+防跌倒。', drugs: [
      { id: 'whey-frail', generic: '乳清蛋白粉', brand: '国产', origin: '国产', spec: '400g/罐', perDose: '30g', times: ['早饭后'] },
      { id: 'vd-frail', generic: '维生素D', brand: '国产', origin: '国产', spec: '400IU×30粒/盒', perDose: '400IU', times: ['早饭后'] }
    ] },
    { id: 'senile-constipation', name: '老年性便秘', deptId: 'geri', aliases: ['便秘'], symptoms: ['排便困难', '便干', '排便次数减少'], diagnosis: ['临床评估'], tips: '多膳食纤维、多饮水、定时排便。', drugs: [
      { id: 'lactulose', generic: '乳果糖', brand: '杜密克', origin: '进口', spec: '15ml×6袋/盒', perDose: '15ml', times: ['早饭前'] },
      { id: 'polyethylene', generic: '聚乙二醇4000', brand: '福松', origin: '进口', spec: '10g×10袋/盒', perDose: '10g', times: ['早饭后'] }
    ] }
  ] },
  { id: 'gp', name: '全科医学科', color: '#7BB08A', emoji: '🩺', diseases: [
    { id: 'prediabetes', name: '糖尿病前期', deptId: 'gp', aliases: ['糖耐量异常'], symptoms: ['多无症状', '空腹血糖偏高'], diagnosis: ['空腹血糖', 'OGTT'], tips: '生活方式干预可逆转。', drugs: [
      { id: 'met-pre', generic: '二甲双胍', brand: '格华止', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭前'] }
    ] },
    { id: 'hp-infection', name: '幽门螺杆菌感染', deptId: 'gp', aliases: ['HP阳性'], symptoms: ['多无症状', '腹胀', '嗳气'], diagnosis: ['C13/C14呼气试验'], tips: '规范四联根除治疗。', drugs: [
      { id: 'omep-hp', generic: '奥美拉唑', brand: '洛赛克', origin: '进口', spec: '20mg×14片/盒', perDose: '20mg', times: ['早饭前', '晚饭前'] },
      { id: 'amox-hp', generic: '阿莫西林', brand: '国产', origin: '国产', spec: '0.25g×24粒/盒', perDose: '1g', times: ['早饭后', '晚饭后'] },
      { id: 'clarith', generic: '克拉霉素', brand: '克拉仙', origin: '进口', spec: '250mg×8片/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] },
      { id: 'bismuth-hp', generic: '枸橼酸铋钾', brand: '丽珠得乐', origin: '国产', spec: '0.3g×40粒/盒', perDose: '0.6g', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'b12-def', name: '维生素B12缺乏', deptId: 'gp', aliases: ['VB12缺乏'], symptoms: ['乏力', '手脚麻木', '贫血'], diagnosis: ['血清维生素B12'], tips: '补充B12、必要时肌注。', drugs: [
      { id: 'mecobal-b12', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'hcy', name: '高同型半胱氨酸血症', deptId: 'gp', aliases: ['高Hcy'], symptoms: ['多无症状', '增加心脑血管风险'], diagnosis: ['血同型半胱氨酸'], tips: '补充叶酸、B6、B12。', drugs: [
      { id: 'folic-hcy', generic: '叶酸', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '5mg', times: ['早饭后'] },
      { id: 'b6', generic: '维生素B6', brand: '国产', origin: '国产', spec: '10mg×100片/盒', perDose: '10mg', times: ['早饭后'] }
    ] },
    { id: 'cfs', name: '慢性疲劳综合征', deptId: 'gp', aliases: ['慢性疲劳'], symptoms: ['持续疲劳', '睡眠不恢复', '注意力下降'], diagnosis: ['排除性诊断'], tips: '规律作息、适度运动、减压。', drugs: [] }
  ] },
  {
    id: 'neurosurgery', name: '神经外科', color: '#6B8FC9', emoji: '🧠',
    diseases: [
      { id: 'meningioma', name: '脑膜瘤', deptId: 'neurosurgery', aliases: ['颅内肿瘤'], symptoms: ['头痛', '癫痫', '局灶神经症状'], diagnosis: ['头颅MRI'], tips: '多数良性，定期随访或手术。', drugs: [] },
      { id: 'pituitary-adenoma', name: '垂体瘤', deptId: 'neurosurgery', aliases: ['垂体腺瘤'], symptoms: ['头痛', '视力下降', '内分泌紊乱'], diagnosis: ['头颅MRI', '激素检查'], tips: '内分泌+神经外科联合诊治。', drugs: [
        { id: 'cabergoline', generic: '卡麦角林', brand: '国产', origin: '国产', spec: '0.5mg×8片/盒', perDose: '0.5mg', times: ['早饭后'] }
      ] },
      { id: 'hemifacial-spasm', name: '面肌痉挛', deptId: 'neurosurgery', aliases: ['面肌抽搐'], symptoms: ['一侧面部不自主抽动', '眼睑跳动'], diagnosis: ['临床', '头颅MRI'], tips: '肉毒素注射或微血管减压。', drugs: [
        { id: 'botox', generic: 'A型肉毒毒素', brand: '保妥适', origin: '进口', spec: '100U/瓶', perDose: '局部注射', times: ['早饭后'] }
      ] },
      { id: 'hydrocephalus', name: '脑积水', deptId: 'neurosurgery', aliases: ['交通性脑积水'], symptoms: ['头痛', '步态异常', '尿失禁', '认知下降'], diagnosis: ['头颅CT/MRI'], tips: '必要时分流手术。', drugs: [] },
      { id: 'tbi-sequela', name: '颅脑损伤后遗症', deptId: 'neurosurgery', aliases: ['脑外伤后'], symptoms: ['头痛', '头晕', '认知下降', '情绪改变'], diagnosis: ['头颅CT/MRI'], tips: '康复训练、定期随访。', drugs: [
        { id: 'citicoline-tbi', generic: '胞磷胆碱', brand: '国产', origin: '国产', spec: '0.1g×24粒/盒', perDose: '0.2g', times: ['早饭后', '晚饭后'] }
      ] }
    ]
  },
  {
    id: 'thoracic', name: '胸外科', color: '#5A9AB8', emoji: '🫁',
    diseases: [
      { id: 'pneumothorax', name: '气胸', deptId: 'thoracic', aliases: ['自发性气胸'], symptoms: ['突发胸痛', '呼吸困难'], diagnosis: ['胸部X线/CT'], tips: '张力性气胸需急诊处理。', drugs: [] },
      { id: 'esophageal-cancer', name: '食管癌', deptId: 'thoracic', aliases: ['食管恶性肿瘤'], symptoms: ['进行性吞咽困难', '胸骨后不适', '消瘦'], diagnosis: ['胃镜+活检'], tips: '戒烟酒、早期筛查。', drugs: [] },
      { id: 'palmar-hyperhidrosis', name: '手汗症', deptId: 'thoracic', aliases: ['多汗症'], symptoms: ['双手多汗', '社交困扰'], diagnosis: ['临床'], tips: '重度可胸腔镜交感神经切断。', drugs: [] },
      { id: 'mediastinal-tumor', name: '纵隔肿瘤', deptId: 'thoracic', aliases: ['纵隔占位'], symptoms: ['胸闷', '多无症状'], diagnosis: ['胸部CT'], tips: '明确性质后手术。', drugs: [] }
    ]
  },
  {
    id: 'cardiac-surg', name: '心血管外科', color: '#C96A6A', emoji: '🫀',
    diseases: [
      { id: 'valvular', name: '心脏瓣膜病', deptId: 'cardiac-surg', aliases: ['瓣膜性心脏病'], symptoms: ['气促', '心悸', '心脏杂音'], diagnosis: ['心脏彩超'], tips: '定期评估、必要时手术。', drugs: [
        { id: 'warf-val', generic: '华法林', brand: '国产', origin: '国产', spec: '2.5mg×100片/盒', perDose: '2.5mg', times: ['晚饭后'] }
      ] },
      { id: 'aortic-dissection', name: '主动脉夹层', deptId: 'cardiac-surg', aliases: ['主动脉夹层动脉瘤'], symptoms: ['剧烈胸背痛', '大汗', '血压异常'], diagnosis: ['主动脉CTA'], tips: '急症，立即就医。', drugs: [] },
      { id: 'chd-congenital', name: '先天性心脏病', deptId: 'cardiac-surg', aliases: ['先心病'], symptoms: ['心脏杂音', '发绀', '活动后气促'], diagnosis: ['心脏彩超'], tips: '早诊早治、手术矫治。', drugs: [] }
    ]
  },
  {
    id: 'general-surg', name: '普外科 / 胃肠外科', color: '#A08A5A', emoji: '🩺',
    diseases: [
      { id: 'appendicitis', name: '阑尾炎', deptId: 'general-surg', aliases: ['急性阑尾炎'], symptoms: ['转移性右下腹痛', '发热', '恶心'], diagnosis: ['腹部超声', 'CT', '血常规'], tips: '确诊后多需手术。', drugs: [
        { id: 'cefo-app', generic: '头孢克肟', brand: '世福素', origin: '进口', spec: '100mg×6片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'inguinal-hernia', name: '腹股沟疝', deptId: 'general-surg', aliases: ['疝气'], symptoms: ['腹股沟区可复性包块', '坠胀'], diagnosis: ['体格检查', '超声'], tips: '择期手术，避免嵌顿。', drugs: [] },
      { id: 'hemorrhoids', name: '痔疮', deptId: 'general-surg', aliases: ['痔'], symptoms: ['便血', '肛门肿物', '疼痛'], diagnosis: ['肛门指检', '肛镜'], tips: '多吃纤维、温水坐浴。', drugs: [
        { id: 'mayinglong', generic: '马应龙麝香痔疮膏', brand: '国产', origin: '国产', spec: '10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] },
        { id: 'diosmin-hem', generic: '地奥司明', brand: '爱脉朗', origin: '进口', spec: '500mg×20片/盒', perDose: '500mg', times: ['早饭后', '晚饭后'] }
      ] },
      { id: 'anal-fissure', name: '肛裂', deptId: 'general-surg', aliases: ['肛门裂伤'], symptoms: ['排便剧痛', '便血', '便秘'], diagnosis: ['肛门检查'], tips: '软化大便、温水坐浴。', drugs: [
        { id: 'nitroglycerin-af', generic: '硝酸甘油软膏', brand: '国产', origin: '国产', spec: '0.2%×10g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
      ] }
    ]
  }
]