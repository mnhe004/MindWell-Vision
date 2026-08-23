import type { Department } from './departments'

// 疾病库扩容第 4 批：新科室 + 各科补充大类
export const moreDepartments2: Department[] = [
  { id: 'endocrine', name: '内分泌科', color: '#1DB39F', emoji: '🫀', diseases: [
    { id: 'gh-deficiency', name: '生长激素缺乏症', deptId: 'endocrine', aliases: ['矮小症'], symptoms: ['身材矮小', '生长速度缓慢', '骨龄落后'], diagnosis: ['生长激素激发试验', '骨龄X线', 'IGF-1'], tips: '儿童期早期干预效果最好。', drugs: [
      { id: 'gh', generic: '重组人生长激素', brand: '赛增', origin: '国产', spec: '4IU/支', perDose: '按体重', times: ['睡前'] }
    ] },
    { id: 'diabetes-insipidus', name: '尿崩症', deptId: 'endocrine', aliases: ['中枢性尿崩症'], symptoms: ['烦渴多饮', '大量低渗尿', '夜尿多'], diagnosis: ['禁水-加压素试验', '血尿渗透压', '头颅MRI'], tips: '规律补充水分，注意电解质。', drugs: [
      { id: 'desmopressin', generic: '去氨加压素', brand: '弥凝', origin: '进口', spec: '0.1mg×30片/盒', perDose: '0.1mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'acromegaly', name: '肢端肥大症', deptId: 'endocrine', aliases: ['生长激素腺瘤'], symptoms: ['手足增大', '面容变粗', '头痛', '血压升高'], diagnosis: ['生长激素/IGF-1', '垂体MRI'], tips: '内分泌+神经外科联合诊治。', drugs: [
      { id: 'octreotide', generic: '奥曲肽', brand: '善龙', origin: '进口', spec: '20mg/瓶', perDose: '按医嘱', times: ['早饭后'] }
    ] }
  ] },
  { id: 'cardio', name: '心血管内科', color: '#F78F6E', emoji: '❤️', diseases: [
    { id: 'cardiomyopathy', name: '心肌病', deptId: 'cardio', aliases: ['扩张型心肌病'], symptoms: ['活动后气促', '心悸', '下肢水肿', '乏力'], diagnosis: ['心脏彩超（射血分数降低）', '心电图', '心肌酶'], tips: '规范抗心衰治疗，避免劳累与感染。', drugs: [
      { id: 'sacub-cm', generic: '沙库巴曲缬沙坦', brand: '诺欣妥', origin: '进口', spec: '100mg×14片/盒', perDose: '100mg', times: ['早饭后', '晚饭后'] },
      { id: 'metop-cm', generic: '美托洛尔', brand: '倍他乐克', origin: '进口', spec: '25mg×20片/盒', perDose: '25mg', times: ['早饭后'] }
    ] },
    { id: 'endocarditis', name: '感染性心内膜炎', deptId: 'cardio', aliases: ['心内膜炎'], symptoms: ['持续发热', '心脏杂音', '瘀点', '贫血'], diagnosis: ['血培养', '心脏彩超（赘生物）'], tips: '规范抗感染，注意口腔卫生。', drugs: [
      { id: 'penicillin', generic: '青霉素G', brand: '国产', origin: '国产', spec: '80万U/瓶', perDose: '按医嘱', times: ['早饭后'] }
    ] },
    { id: 'peripheral-artery', name: '外周动脉疾病', deptId: 'cardio', aliases: ['动脉硬化闭塞'], symptoms: ['行走后腿痛', '足部发凉', '间歇性跛行'], diagnosis: ['踝肱指数(ABI)', '下肢动脉超声'], tips: '戒烟、控制三高、步行锻炼。', drugs: [
      { id: 'cilostazol2', generic: '西洛他唑', brand: '培达', origin: '进口', spec: '50mg×12片/盒', perDose: '50mg', times: ['早饭后', '晚饭后'] },
      { id: 'asa-pad2', generic: '阿司匹林', brand: '拜阿司匹灵', origin: '进口', spec: '100mg×30片/盒', perDose: '100mg', times: ['早饭后'] }
    ] }
  ] },
  { id: 'resp', name: '呼吸内科', color: '#3FB7E0', emoji: '🫁', diseases: [
    { id: 'pe', name: '肺栓塞', deptId: 'resp', aliases: ['PE'], symptoms: ['突发胸痛', '呼吸困难', '咯血', '晕厥'], diagnosis: ['D-二聚体', 'CT肺动脉造影(CTPA)'], tips: '久坐/术后人群需警惕，及时就医。', drugs: [
      { id: 'rivar-pe', generic: '利伐沙班', brand: '拜瑞妥', origin: '进口', spec: '15mg×7片/盒', perDose: '15mg', times: ['晚饭后'] },
      { id: 'heparin', generic: '低分子肝素', brand: '克赛', origin: '进口', spec: '4000IU/0.4ml', perDose: '4000IU', times: ['早饭后'] }
    ] },
    { id: 'ild', name: '间质性肺病', deptId: 'resp', aliases: ['肺纤维化'], symptoms: ['进行性气短', '干咳', '杵状指'], diagnosis: ['高分辨CT', '肺功能', '肺活检'], tips: '戒烟、避免粉尘；规范抗纤维化治疗。', drugs: [
      { id: 'pirfenidone', generic: '吡非尼酮', brand: '艾思瑞', origin: '国产', spec: '200mg×90粒/盒', perDose: '600mg', times: ['早饭后', '午饭后', '晚饭后'] },
      { id: 'nintedanib', generic: '尼达尼布', brand: '维加特', origin: '进口', spec: '150mg×30粒/盒', perDose: '150mg', times: ['早饭后', '晚饭后'] }
    ] }
  ] },
  { id: 'gastro', name: '消化内科', color: '#F7B731', emoji: '🍚', diseases: [
    { id: 'pancreatitis', name: '急性胰腺炎', deptId: 'gastro', aliases: ['胰腺炎'], symptoms: ['上腹剧痛放射至背', '恶心呕吐', '发热'], diagnosis: ['血淀粉酶/脂肪酶', '腹部CT'], tips: '急性期禁食、补液；胆源性需处理结石。', drugs: [
      { id: 'octreotide-pa', generic: '奥曲肽', brand: '善宁', origin: '进口', spec: '0.1mg/1ml×5支', perDose: '0.1mg', times: ['早饭后'] },
      { id: 'ulastatin', generic: '乌司他丁', brand: '天普洛安', origin: '国产', spec: '10万U/瓶', perDose: '按医嘱', times: ['早饭后'] }
    ] },
    { id: 'bile-reflux', name: '胆汁反流性胃炎', deptId: 'gastro', aliases: ['反流性胃炎'], symptoms: ['上腹烧灼痛', '口苦', '反酸'], diagnosis: ['胃镜', '胆汁反流检测'], tips: '规律饮食，避免浓茶咖啡。', drugs: [
      { id: 'mosap-br', generic: '莫沙必利', brand: '加斯清', origin: '进口', spec: '5mg×10片/盒', perDose: '5mg', times: ['早饭后', '午饭后', '晚饭后'] },
      { id: 'hydrotal-br', generic: '铝碳酸镁', brand: '达喜', origin: '进口', spec: '0.5g×20片/盒', perDose: '0.5g', times: ['早饭后', '晚饭后'] }
    ] }
  ] },
  { id: 'neuro', name: '神经内科', color: '#8B7CF6', emoji: '🧠', diseases: [
    { id: 'ms', name: '多发性硬化', deptId: 'neuro', aliases: ['MS'], symptoms: ['肢体无力麻木', '视力下降', '行走不稳', '疲劳'], diagnosis: ['头颅/脊髓MRI', '腰穿(寡克隆带)'], tips: '规范疾病修饰治疗，规律随访。', drugs: [
      { id: 'interferon-b', generic: '干扰素β', brand: '倍泰龙', origin: '进口', spec: '30μg/支', perDose: '30μg', times: ['早饭后'] }
    ] },
    { id: 'mg', name: '重症肌无力', deptId: 'neuro', aliases: ['MG'], symptoms: ['晨轻暮重乏力', '眼睑下垂', '吞咽困难'], diagnosis: ['新斯的明试验', '乙酰胆碱受体抗体'], tips: '避免劳累感染，规范免疫治疗。', drugs: [
      { id: 'pyridostigmine', generic: '溴吡斯的明', brand: '美斯的明', origin: '国产', spec: '60mg×60片/盒', perDose: '60mg', times: ['早饭后', '午饭后', '晚饭后'] },
      { id: 'pred-mg', generic: '泼尼松', brand: '国产', origin: '国产', spec: '5mg×100片/盒', perDose: '按医嘱', times: ['早饭后'] }
    ] }
  ] },
  { id: 'nephro', name: '肾内科', color: '#4CA6A0', emoji: '🫘', diseases: [
    { id: 'aki', name: '急性肾损伤', deptId: 'nephro', aliases: ['急性肾衰竭'], symptoms: ['少尿/无尿', '水肿', '乏力恶心'], diagnosis: ['血肌酐快速升高', '尿量减少', '肾脏超声'], tips: '查找并去除诱因（药物/脱水等），及时就医。', drugs: [
      { id: 'furos-aki', generic: '呋塞米', brand: '速尿', origin: '国产', spec: '20mg×100片/盒', perDose: '20mg', times: ['早饭后'] }
    ] },
    { id: 'tubulointerstitial', name: '间质性肾炎', deptId: 'nephro', aliases: ['药物性肾病'], symptoms: ['夜尿增多', '血尿', '肾功能下降'], diagnosis: ['尿常规', '肾功能', '必要时肾穿刺'], tips: '避免滥用止痛药等肾损伤药物。', drugs: [
      { id: 'vals-ti', generic: '缬沙坦', brand: '代文', origin: '进口', spec: '80mg×7粒/盒', perDose: '80mg', times: ['早饭后'] }
    ] }
  ] },
  { id: 'psych', name: '精神心理科', color: '#A78BFA', emoji: '🌿', diseases: [
    { id: 'panic', name: '惊恐障碍', deptId: 'psych', aliases: ['急性焦虑发作'], symptoms: ['突发行心悸', '濒死感', '出汗发抖', '害怕失控'], diagnosis: ['精神科评估', '排除心脏疾病'], tips: '认知行为治疗+药物；发作时深呼吸。', drugs: [
      { id: 'escit-panic', generic: '艾司西酞普兰', brand: '来士普', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭后'] },
      { id: 'alpraz-panic', generic: '阿普唑仑', brand: '国产', origin: '国产', spec: '0.4mg×20片/盒', perDose: '0.4mg', times: ['睡前'] }
    ] },
    { id: 'ptsd', name: '创伤后应激障碍', deptId: 'psych', aliases: ['PTSD'], symptoms: ['反复闪回创伤', '噩梦', '回避', '警觉增高'], diagnosis: ['精神科评估'], tips: '专业心理治疗（EMDR等）+药物。', drugs: [
      { id: 'sert-ptsd', generic: '舍曲林', brand: '左洛复', origin: '进口', spec: '50mg×14片/盒', perDose: '50mg', times: ['早饭后'] }
    ] },
    { id: 'social-anxiety', name: '社交焦虑障碍', deptId: 'psych', aliases: ['社交恐惧'], symptoms: ['害怕社交场合', '脸红出汗', '回避社交'], diagnosis: ['精神科评估'], tips: '逐步暴露练习+药物。', drugs: [
      { id: 'escit-sa', generic: '艾司西酞普兰', brand: '来士普', origin: '进口', spec: '10mg×7片/盒', perDose: '10mg', times: ['早饭后'] }
    ] }
  ] },
  { id: 'ortho', name: '骨科', color: '#C98A6B', emoji: '🦴', diseases: [
    { id: 'femoral-head', name: '股骨头坏死', deptId: 'ortho', aliases: ['股骨头缺血性坏死'], symptoms: ['髋部/腹股沟疼痛', '跛行', '活动受限'], diagnosis: ['X线', '髋关节MRI'], tips: '避免负重、戒酒停激素；早期干预。', drugs: [
      { id: 'alend-fh', generic: '阿仑膦酸钠', brand: '福善美', origin: '进口', spec: '70mg×4片/盒', perDose: '70mg', times: ['醒来'] }
    ] },
    { id: 'carpal-tunnel', name: '腕管综合征', deptId: 'ortho', aliases: ['鼠标手'], symptoms: ['手指麻木（拇食中指）', '夜间加重', '手部无力'], diagnosis: ['神经传导速度', '腕部查体'], tips: '避免长时间屈腕；必要时手术松解。', drugs: [
      { id: 'mecobal-cts', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] }
    ] },
    { id: 'achilles', name: '跟腱炎', deptId: 'ortho', aliases: ['跟腱痛'], symptoms: ['足跟上方疼痛', '晨起僵硬', '运动后加重'], diagnosis: ['临床查体', '超声'], tips: '减少跳跃跑动，拉伸放松小腿。', drugs: [
      { id: 'diclof-ach', generic: '双氯芬酸凝胶', brand: '扶他林', origin: '进口', spec: '1%×20g/支', perDose: '适量外用', times: ['早饭后', '晚饭后'] }
    ] }
  ] },
  {
    id: 'thyroid-surg', name: '甲状腺外科', color: '#7BA8C9', emoji: '🪢',
    diseases: [
      { id: 'thyroid-cancer', name: '甲状腺癌', deptId: 'thyroid-surg', aliases: ['甲状腺恶性肿瘤'], symptoms: ['颈部无痛性肿块', '声音嘶哑', '吞咽不适'], diagnosis: ['甲状腺彩超+TI-RADS', '细针穿刺活检'], tips: '多数预后良好，规范手术+随访。', drugs: [
        { id: 'lt4-tc', generic: '左甲状腺素钠', brand: '优甲乐', origin: '进口', spec: '100μg×100片/盒', perDose: '100μg', times: ['醒来'] }
      ] },
      { id: 'thyroglossal', name: '甲状舌管囊肿', deptId: 'thyroid-surg', aliases: ['颈部囊肿'], symptoms: ['颈前正中肿块', '随吞咽上下移动', '感染时红肿'], diagnosis: ['颈部超声', 'CT'], tips: '反复感染需手术切除。', drugs: [] }
    ]
  },
  {
    id: 'obstetrics', name: '产科', color: '#EE8FA3', emoji: '👶',
    diseases: [
      { id: 'hyperemesis', name: '妊娠剧吐', deptId: 'obstetrics', aliases: ['孕吐严重'], symptoms: ['持续剧烈呕吐', '脱水', '体重下降'], diagnosis: ['临床评估', '电解质/尿酮体'], tips: '少量多餐、补充维生素B6；严重需住院补液。', drugs: [
        { id: 'b6-preg', generic: '维生素B6', brand: '国产', origin: '国产', spec: '10mg×100片/盒', perDose: '10mg', times: ['早饭后', '午饭后', '晚饭后'] }
      ] },
      { id: 'threatened-abortion', name: '先兆流产', deptId: 'obstetrics', aliases: ['先兆流产'], symptoms: ['孕早期阴道少量出血', '下腹隐痛'], diagnosis: ['超声', '血HCG/孕酮'], tips: '卧床休息、避免劳累；遵医嘱保胎。', drugs: [
        { id: 'dydro-ta', generic: '地屈孕酮', brand: '达芙通', origin: '进口', spec: '10mg×20片/盒', perDose: '10mg', times: ['早饭后', '晚饭后'] }
      ] }
    ]
  },
  {
    id: 'spine', name: '脊柱外科', color: '#8FA6B2', emoji: '🦴',
    diseases: [
      { id: 'spinal-stenosis', name: '腰椎管狭窄', deptId: 'spine', aliases: ['椎管狭窄'], symptoms: ['行走后腰腿痛', '间歇性跛行', '下肢麻木'], diagnosis: ['腰椎MRI', 'X线'], tips: '保守治疗为主，严重者手术减压。', drugs: [
        { id: 'mecobal-ss', generic: '甲钴胺', brand: '弥可保', origin: '进口', spec: '0.5mg×20片/盒', perDose: '0.5mg', times: ['早饭后', '晚饭后'] },
        { id: 'celecox-ss', generic: '塞来昔布', brand: '西乐葆', origin: '进口', spec: '0.2g×6粒/盒', perDose: '0.2g', times: ['早饭后'] }
      ] },
      { id: 'scoliosis', name: '脊柱侧弯', deptId: 'spine', aliases: ['侧弯畸形'], symptoms: ['双肩不等高', '脊柱侧凸', '背部不对称'], diagnosis: ['全脊柱X线（Cobb角）', '体格检查'], tips: '青少年期早期干预（支具/矫形）。', drugs: [] }
    ]
  }
]