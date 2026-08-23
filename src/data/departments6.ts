// 疾病库扩容B：神经/呼吸/肾内/骨科 新增疾病
import type { Department } from "./departments"

export const moreDepartments4: Department[] = [
  {
    id: "neuro", name: "神经内科", color: "#8B7CF6", emoji: "🧠",
    diseases: [
      { id: "trigeminal-neuralgia", name: "三叉神经痛", deptId: "neuro", aliases: ["面部神经痛"], symptoms: ["面部电击样、刀割样剧痛", "刷牙、洗脸、说话可诱发", "疼痛局限于单侧三叉神经分布区", "发作间歇期完全正常"], diagnosis: ["神经系统查体（寻找触发点）", "头颅MRI排除继发性病因"], tips: '避免触碰面部触发点，注意保暖；药物控制不佳者可考虑微创或手术治疗', drugs: [] },
      { id: "facial-nerve-palsy", name: "面神经麻痹（面瘫）", deptId: "neuro", aliases: ["面瘫", "贝尔面瘫"], symptoms: ["口角歪斜、鼓腮漏气", "患侧眼闭合不全", "额纹消失、不能皱眉", "进食时食物滞留"], diagnosis: ["神经系统查体", "肌电图评估神经损伤程度"], tips: '发病72小时内尽早激素治疗；外出佩戴眼罩、人工泪液保护角膜', drugs: [] },
      { id: "guillain-barre-syndrome", name: "吉兰-巴雷综合征", deptId: "neuro", aliases: ["GBS", "急性炎症性脱髓鞘性多神经病"], symptoms: ["四肢对称性进行性无力", "肢体末端麻木、感觉异常", "面瘫、复视等颅神经症状", "严重时呼吸费力"], diagnosis: ["脑脊液检查（蛋白-细胞分离）", "肌电图及神经传导速度"], tips: '病情进展较快，需住院治疗；急性期警惕呼吸肌麻痹、监测呼吸', drugs: [] },
      { id: "als", name: "肌萎缩侧索硬化", deptId: "neuro", aliases: ["ALS", "渐冻症"], symptoms: ["进行性肢体无力、肌肉萎缩", "肌肉跳动（束颤）", "言语不清、吞咽困难", "饮水呛咳"], diagnosis: ["肌电图（广泛神经源性损害）", "头颅及颈髓MRI"], tips: '尽早明确诊断，延缓病情进展；重视呼吸功能与营养支持', drugs: [] },
      { id: "peripheral-neuropathy", name: "周围神经病", deptId: "neuro", aliases: ["末梢神经炎", "多发性周围神经病"], symptoms: ["四肢末端麻木、刺痛", "袜套样感觉减退", "肌力下降、肌肉萎缩"], diagnosis: ["肌电图/神经传导速度", "血糖、维生素B12等病因筛查"], tips: '积极治疗原发病（糖尿病、营养缺乏等）；补充B族维生素、戒烟限酒', drugs: [] },
      { id: "neuromyelitis-optica", name: "视神经脊髓炎", deptId: "neuro", aliases: ["NMO", "视神经脊髓炎谱系疾病"], symptoms: ["单眼或双眼视力急剧下降", "眼球转动痛", "肢体无力、感觉异常", "顽固性呃逆、恶心呕吐"], diagnosis: ["头颅及脊髓MRI", "血清AQP4抗体检测"], tips: '急性期尽早激素冲击治疗；长期免疫抑制治疗预防复发', drugs: [] },
      { id: "meningitis", name: "脑膜炎", deptId: "neuro", aliases: ["化脓性脑膜炎", "细菌性脑膜炎"], symptoms: ["高热、剧烈头痛", "喷射性呕吐", "颈项强直", "意识障碍、抽搐"], diagnosis: ["腰穿脑脊液检查", "血培养", "头颅CT"], tips: '疑似脑膜炎需紧急就医；规范足疗程抗感染治疗', drugs: [] },
      { id: "encephalitis", name: "脑炎", deptId: "neuro", aliases: ["病毒性脑炎", "自身免疫性脑炎"], symptoms: ["发热伴头痛", "精神行为异常、胡言乱语", "抽搐发作", "意识障碍"], diagnosis: ["脑脊液检查", "头颅MRI", "脑电图"], tips: '及时明确病因（病毒性/自身免疫性）；尽早抗病毒或免疫治疗', drugs: [] },
      { id: "adult-hydrocephalus", name: "脑积水", deptId: "neuro", aliases: ["交通性脑积水", "正常压力脑积水"], symptoms: ["头痛、恶心呕吐", "步态不稳、行走缓慢", "尿失禁", "反应迟钝、记忆力下降"], diagnosis: ["头颅CT/MRI", "颅内压监测"], tips: '部分患者需脑室-腹腔分流手术；定期复查影像评估病情', drugs: [] },
      { id: "cerebral-aneurysm", name: "脑动脉瘤", deptId: "neuro", aliases: ["颅内动脉瘤"], symptoms: ["多数无症状、体检偶然发现", "破裂时突发剧烈头痛", "恶心呕吐、颈项强直"], diagnosis: ["头颅CTA/MRA", "全脑血管造影（DSA）"], tips: '破裂出血需紧急处理；未破裂者由医生评估随访或介入治疗', drugs: [] },
      { id: "cerebral-hemorrhage-sequelae", name: "脑出血后遗症", deptId: "neuro", aliases: ["脑出血恢复期"], symptoms: ["偏侧肢体无力或麻木", "言语不清、吞咽困难", "情绪低落、记忆力减退"], diagnosis: ["头颅CT/MRI复查", "康复功能评估"], tips: '尽早介入康复治疗；严格控制血压、规律服药预防复发', drugs: [] },
      { id: "bppv", name: "眩晕症（耳石症）", deptId: "neuro", aliases: ["耳石症", "良性阵发性位置性眩晕", "BPPV"], symptoms: ["头部位置改变时突发眩晕", "眩晕持续数秒至1分钟", "恶心、呕吐", "无耳鸣及听力下降"], diagnosis: ["位置诱发试验（Dix-Hallpike）", "前庭功能检查"], tips: '首选手法复位（耳石复位）；复位后避免剧烈转头、仰头动作', drugs: [] },
      { id: "vestibular-neuritis", name: "前庭神经炎", deptId: "neuro", aliases: ["前庭神经元炎"], symptoms: ["突发剧烈旋转性眩晕", "恶心呕吐、不敢睁眼", "持续数小时至数天", "无耳鸣听力下降"], diagnosis: ["前庭功能检查", "头颅MRI排除脑干病变"], tips: '急性期卧床休息、抗眩晕治疗；缓解后尽早进行前庭康复训练', drugs: [] },
      { id: "restless-legs-syndrome", name: "不安腿综合征", deptId: "neuro", aliases: ["不宁腿综合征", "RLS"], symptoms: ["夜间腿部难以名状的不适感", "活动肢体后缓解", "入睡困难、夜间频繁觉醒"], diagnosis: ["依据国际诊断标准临床诊断", "血清铁蛋白、肾功能等筛查"], tips: '睡前规律活动、按摩腿部；避免咖啡因和酒精，缺铁者补铁', drugs: [] },
      { id: "essential-tremor", name: "特发性震颤", deptId: "neuro", aliases: ["良性特发性震颤"], symptoms: ["双手姿势性震颤", "写字、端杯时加重", "少量饮酒后短暂缓解", "头部或声音震颤"], diagnosis: ["神经系统查体", "排除帕金森病等其他震颤"], tips: '避免紧张焦虑及过量咖啡因；明显影响生活时考虑药物或手术治疗', drugs: [] }
    ]
  },
  {
    id: "resp", name: "呼吸内科", color: "#3FB7E0", emoji: "🫁",
    diseases: [
      { id: "cap", name: "肺炎（社区获得性）", deptId: "resp", aliases: ["社区获得性肺炎", "CAP"], symptoms: ["发热、畏寒", "咳嗽、咳黄痰", "胸痛、呼吸急促"], diagnosis: ["胸部X线/CT", "血常规、C反应蛋白", "痰培养及药敏"], tips: '规范足疗程抗感染治疗；多饮水、充分休息，高热不退及时复诊', drugs: [] },
      { id: "mycoplasma-pneumonia", name: "支原体肺炎", deptId: "resp", aliases: ["肺炎支原体感染"], symptoms: ["顽固性刺激性干咳", "低热、咽痛", "乏力、头痛"], diagnosis: ["肺炎支原体IgM抗体", "胸部X线/CT"], tips: '咳嗽迁延数周属常见表现；遵医嘱足疗程使用大环内酯类等药物', drugs: [] },
      { id: "pulmonary-tuberculosis", name: "肺结核", deptId: "resp", aliases: ["结核病", "肺痨"], symptoms: ["咳嗽咳痰超过2周", "午后低热、盗汗", "咯血或痰中带血", "消瘦乏力"], diagnosis: ["痰涂片/培养找抗酸杆菌", "胸部CT", "结核菌素试验/T-SPOT"], tips: '规范全程抗结核治疗（6个月以上）；治疗期间定期复查肝肾功能', drugs: [] },
      { id: "lung-nodule", name: "肺结节", deptId: "resp", aliases: ["肺部小结节", "磨玻璃结节"], symptoms: ["多数无明显症状", "偶有咳嗽、胸痛"], diagnosis: ["低剂量胸部CT", "定期随访复查"], tips: '根据结节大小与性质定期随访；戒烟，避免油烟粉尘暴露', drugs: [] },
      { id: "pulmonary-fibrosis", name: "肺纤维化", deptId: "resp", aliases: ["特发性肺纤维化", "IPF"], symptoms: ["进行性加重的呼吸困难", "刺激性干咳", "杵状指", "双下肺爆裂音（Velcro啰音）"], diagnosis: ["高分辨率CT（蜂窝肺表现）", "肺功能检查"], tips: '戒烟、预防呼吸道感染；规范抗纤维化治疗，必要时家庭氧疗', drugs: [] },
      { id: "emphysema", name: "肺气肿", deptId: "resp", aliases: ["阻塞性肺气肿"], symptoms: ["活动后气短进行性加重", "桶状胸、呼吸音减低", "咳嗽、咳痰、喘息"], diagnosis: ["肺功能检查（残气量增高）", "胸部CT"], tips: '戒烟是延缓进展的关键；接种流感疫苗和肺炎疫苗', drugs: [] },
      { id: "bronchiectasis-b", name: "支气管扩张", deptId: "resp", aliases: ["支扩"], symptoms: ["慢性咳嗽、大量脓痰", "反复咯血", "反复肺部感染"], diagnosis: ["胸部高分辨率CT", "痰培养"], tips: '体位引流排痰、雾化祛痰；出现咯血时保持镇静并及时就医', drugs: [] },
      { id: "osa-b", name: "睡眠呼吸暂停综合征", deptId: "resp", aliases: ["OSA", "阻塞性睡眠呼吸暂停"], symptoms: ["夜间响亮打鼾、呼吸暂停", "白天嗜睡、晨起头痛", "夜间憋醒、夜尿增多"], diagnosis: ["多导睡眠监测（PSG）"], tips: '减重、侧卧位睡眠、戒烟酒；中重度者考虑无创呼吸机治疗', drugs: [] },
      { id: "pleural-effusion", name: "胸腔积液", deptId: "resp", aliases: ["胸水"], symptoms: ["胸闷、气促", "患侧胸痛、咳嗽", "大量积液时呼吸困难"], diagnosis: ["胸部X线/CT", "胸腔穿刺抽液化验"], tips: '明确积液性质（渗出液/漏出液）对因治疗；结核性积液需规范抗结核治疗', drugs: [] },
      { id: "pneumothorax-b", name: "气胸", deptId: "resp", aliases: ["自发性气胸"], symptoms: ["突发一侧胸痛", "呼吸困难、胸闷", "咳嗽"], diagnosis: ["胸部X线/CT"], tips: '少量气胸可保守观察；量多或张力性气胸需穿刺抽气或闭式引流', drugs: [] },
      { id: "pneumoconiosis", name: "尘肺", deptId: "resp", aliases: ["矽肺", "煤工尘肺"], symptoms: ["慢性咳嗽、咳痰", "进行性气短", "胸痛"], diagnosis: ["职业粉尘接触史", "胸部高分辨率CT", "肺功能检查"], tips: '脱离粉尘作业环境；定期肺功能监测、预防呼吸道感染', drugs: [] },
      { id: "cor-pulmonale", name: "肺心病", deptId: "resp", aliases: ["慢性肺源性心脏病"], symptoms: ["慢性咳喘基础上心悸、气促", "双下肢水肿", "口唇发绀", "颈静脉怒张"], diagnosis: ["心电图、心脏彩超", "胸部CT、血气分析"], tips: '积极治疗原发肺部疾病、家庭氧疗；限盐，规范控制右心衰竭', drugs: [] },
      { id: "chronic-bronchitis", name: "慢性支气管炎", deptId: "resp", aliases: ["慢支"], symptoms: ["慢性咳嗽、咳痰每年超过3个月", "晨起咳痰明显", "冬春季反复加重"], diagnosis: ["肺功能检查", "胸部X线/CT"], tips: '戒烟是最重要的干预措施；接种疫苗、预防感冒', drugs: [] },
      { id: "flu-seasonal", name: "流感", deptId: "resp", aliases: ["流行性感冒"], symptoms: ["突发高热、畏寒", "全身肌肉酸痛、乏力", "咽痛、干咳", "头痛"], diagnosis: ["流感抗原/核酸检测", "血常规"], tips: '发病48小时内抗病毒效果最佳；居家隔离、多休息多饮水', drugs: [] },
      { id: "post-covid-syndrome", name: "新冠后遗症", deptId: "resp", aliases: ["长新冠", "COVID-19后遗症"], symptoms: ["持续疲劳、乏力", "气短、胸闷", "注意力不集中、记忆力下降", "咳嗽、嗅觉味觉减退"], diagnosis: ["以症状评估为主", "胸部CT、肺功能、心电图等排查"], tips: '循序渐进恢复体力活动；症状持续或加重时及时就医', drugs: [] }
    ]
  },
  {
    id: "nephro", name: "肾内科", color: "#4CA6A0", emoji: "🫘",
    diseases: [
      { id: "glomerulonephritis", name: "肾小球肾炎", deptId: "nephro", aliases: ["肾炎"], symptoms: ["血尿（洗肉水样或镜下血尿）", "泡沫尿（蛋白尿）", "眼睑及下肢水肿", "血压升高"], diagnosis: ["尿常规（血尿、蛋白尿）", "肾功能、补体C3", "必要时肾穿刺活检"], tips: '急性期卧床休息、低盐饮食；感染后需彻底治疗并定期复查', drugs: [] },
      { id: "nephrotic-syndrome-b", name: "肾病综合征", deptId: "nephro", aliases: ["NS"], symptoms: ["大量泡沫尿", "全身明显水肿", "乏力、食欲减退"], diagnosis: ["24小时尿蛋白定量", "血清白蛋白、血脂", "必要时肾穿刺活检"], tips: '低盐饮食、控制液体入量；警惕感染与血栓并发症', drugs: [] },
      { id: "iga-nephropathy", name: "IgA肾病", deptId: "nephro", aliases: ["IgA肾炎"], symptoms: ["上呼吸道感染后出现血尿", "泡沫尿", "腰痛", "多数无明显水肿"], diagnosis: ["尿常规、肾功能", "肾穿刺活检确诊"], tips: '控制感染、避免劳累；监测血压与尿蛋白', drugs: [] },
      { id: "acute-glomerulonephritis", name: "急性肾小球肾炎", deptId: "nephro", aliases: ["急性肾炎"], symptoms: ["血尿、蛋白尿", "眼睑水肿、晨起明显", "血压升高", "尿量减少"], diagnosis: ["尿常规、肾功能", "补体C3、抗链球菌溶血素O（ASO）"], tips: '急性期卧床休息、低盐饮食；链球菌感染后1-3周发病者注意随访', drugs: [] },
      { id: "gouty-nephropathy", name: "痛风性肾病", deptId: "nephro", aliases: ["高尿酸血症肾病", "尿酸肾病"], symptoms: ["夜尿增多", "泡沫尿、蛋白尿", "关节痛风反复发作"], diagnosis: ["血尿酸、尿常规", "肾功能", "肾脏超声"], tips: '低嘌呤饮食、戒酒、多饮水；降尿酸药物需长期规律服用', drugs: [] },
      { id: "hypertensive-nephro-b", name: "高血压肾病", deptId: "nephro", aliases: ["高血压肾损害"], symptoms: ["夜尿增多", "微量蛋白尿", "头晕、血压控制不佳"], diagnosis: ["尿微量白蛋白", "肾功能、肾脏超声"], tips: '严格控制血压（<130/80 mmHg）；低盐饮食、规律服药', drugs: [] },
      { id: "pyelonephritis", name: "肾盂肾炎", deptId: "nephro", aliases: ["急性肾盂肾炎"], symptoms: ["发热、寒战", "腰痛、肾区叩击痛", "尿频、尿急、尿痛"], diagnosis: ["尿常规、尿培养", "血常规", "肾脏超声"], tips: '多饮水、勤排尿；足疗程抗感染并复查尿培养', drugs: [] },
      { id: "hydronephrosis", name: "肾积水", deptId: "nephro", aliases: ["肾盂积水"], symptoms: ["多数早期无症状", "患侧腰部胀痛", "合并感染时发热"], diagnosis: ["肾脏超声", "CT尿路造影"], tips: '寻找并解除梗阻原因（结石、肿瘤等）；定期复查肾功能', drugs: [] },
      { id: "renal-insufficiency", name: "肾功能不全", deptId: "nephro", aliases: ["慢性肾功能不全"], symptoms: ["乏力、食欲减退", "夜尿增多", "水肿", "恶心、皮肤瘙痒"], diagnosis: ["血肌酐、估算肾小球滤过率（eGFR）", "肾脏超声"], tips: '低盐优质低蛋白饮食；控制血压血糖、避免肾毒性药物', drugs: [] },
      { id: "uremia", name: "尿毒症", deptId: "nephro", aliases: ["终末期肾病", "ESRD"], symptoms: ["恶心呕吐、食欲极差", "少尿或无尿", "全身水肿、皮肤瘙痒", "胸闷气促（心衰表现）"], diagnosis: ["血肌酐、eGFR<15", "电解质、血气分析", "肾脏超声"], tips: '及时启动透析或肾移植评估；严格限盐限水、低钾饮食', drugs: [] },
      { id: "renal-cyst-b", name: "肾囊肿", deptId: "nephro", aliases: ["单纯性肾囊肿"], symptoms: ["多数无症状", "囊肿较大时腰部胀痛"], diagnosis: ["肾脏超声/CT"], tips: '无症状小囊肿定期随访即可；囊肿巨大或压迫明显时考虑穿刺硬化或手术', drugs: [] },
      { id: "polycystic-kidney-disease", name: "多囊肾", deptId: "nephro", aliases: ["成人型多囊肾", "PKD"], symptoms: ["双侧腰痛、腹部包块", "血尿", "高血压", "反复尿路感染"], diagnosis: ["肾脏超声/CT（双肾多发囊肿）", "基因检测"], tips: '定期监测血压与肾功能；避免剧烈运动防止囊肿破裂', drugs: [] },
      { id: "renal-tubular-acidosis", name: "肾小管酸中毒", deptId: "nephro", aliases: ["RTA"], symptoms: ["乏力、骨痛", "多尿、烦渴", "低钾表现（肌无力、软瘫）"], diagnosis: ["血气分析（代谢性酸中毒）", "血钾、尿pH", "氯化铵负荷试验"], tips: '口服枸橼酸盐或碳酸氢钠纠正酸中毒；定期监测电解质', drugs: [] },
      { id: "henoch-schoenlein-nephritis", name: "紫癜性肾炎", deptId: "nephro", aliases: ["过敏性紫癜肾炎"], symptoms: ["双下肢紫癜后出现血尿", "泡沫尿", "关节痛、腹痛"], diagnosis: ["尿常规、肾功能", "必要时肾穿刺活检"], tips: '急性期休息、避免过敏原；监测尿蛋白与血压', drugs: [] },
      { id: "cystitis", name: "膀胱炎", deptId: "nephro", aliases: ["急性膀胱炎"], symptoms: ["尿频、尿急、尿痛", "耻骨上区不适", "血尿"], diagnosis: ["尿常规、尿培养"], tips: '多饮水、注意个人卫生；性行为后排尿可减少感染风险', drugs: [] }
    ]
  },
  {
    id: "ortho", name: "骨科", color: "#C98A6B", emoji: "🦴",
    diseases: [
      { id: "lumbar-disc-herniation", name: "腰椎间盘突出", deptId: "ortho", aliases: ["腰突", "腰椎间盘突出症"], symptoms: ["腰痛伴下肢放射痛", "咳嗽、用力时加重", "足背或足底麻木", "严重时下肢无力"], diagnosis: ["腰椎MRI", "腰椎X线/CT"], tips: '急性期卧床休息、避免弯腰负重；加强核心肌群锻炼、保持正确坐姿', drugs: [] },
      { id: "lumbar-muscle-strain", name: "腰肌劳损", deptId: "ortho", aliases: ["慢性腰肌劳损"], symptoms: ["腰部酸痛、僵硬", "劳累后加重、休息缓解", "久坐久站后不适"], diagnosis: ["体格检查", "腰椎X线排除骨性病变"], tips: '避免久坐久站、定时起身活动；热敷、按摩及腰背肌功能锻炼', drugs: [] },
      { id: "sciatica", name: "坐骨神经痛", deptId: "ortho", aliases: ["坐骨神经痛综合征"], symptoms: ["臀部沿大腿后侧至小腿放射痛", "久坐或弯腰时加重", "下肢麻木、刺痛"], diagnosis: ["体格检查（直腿抬高试验）", "腰椎MRI排除椎间盘压迫"], tips: '明确病因（腰椎、梨状肌等）；避免久坐、适当拉伸', drugs: [] },
      { id: "frozen-shoulder-b", name: "肩周炎", deptId: "ortho", aliases: ["冻结肩", "粘连性肩关节囊炎"], symptoms: ["肩关节疼痛", "抬臂、梳头、穿衣受限", "夜间疼痛明显"], diagnosis: ["体格检查（关节活动度受限）", "肩关节X线/超声"], tips: '坚持爬墙、钟摆等康复锻炼；疼痛明显时热敷或理疗', drugs: [] },
      { id: "tennis-elbow", name: "网球肘", deptId: "ortho", aliases: ["肱骨外上髁炎"], symptoms: ["肘外侧疼痛", "拧毛巾、提重物时加重", "前臂伸肌附着点压痛"], diagnosis: ["体格检查（Mills试验）", "肘关节X线/超声"], tips: '减少手腕反复用力的动作；佩戴护肘、局部冰敷', drugs: [] },
      { id: "tenosynovitis-b", name: "腱鞘炎", deptId: "ortho", aliases: ["狭窄性腱鞘炎", "妈妈手"], symptoms: ["手腕或手指根部疼痛", "活动时弹响、卡顿", "晨起僵硬"], diagnosis: ["体格检查（Finkelstein试验）", "超声"], tips: '减少重复性手部动作、制动休息；局部热敷，严重者局部封闭或手术', drugs: [] },
      { id: "meniscus-tear-b", name: "半月板损伤", deptId: "ortho", aliases: ["膝关节半月板损伤"], symptoms: ["膝关节疼痛、肿胀", "关节交锁、打软腿", "下蹲、扭转时疼痛加重"], diagnosis: ["膝关节MRI", "体格检查（麦氏征）"], tips: '避免深蹲、急转急停；损伤严重者关节镜手术治疗', drugs: [] },
      { id: "ligament-sprain", name: "韧带拉伤", deptId: "ortho", aliases: ["韧带损伤", "踝关节扭伤"], symptoms: ["扭伤后关节肿胀、疼痛", "局部淤青", "活动受限、不敢负重"], diagnosis: ["体格检查", "X线排除骨折", "MRI评估韧带损伤程度"], tips: '急性期遵循RICE原则（休息、冰敷、加压、抬高）；恢复期循序渐进康复训练', drugs: [] },
      { id: "achilles-tendinitis-b", name: "跟腱炎", deptId: "ortho", aliases: ["跟腱痛"], symptoms: ["足跟上方跟腱处疼痛", "晨起僵硬", "跑步、跳跃后加重"], diagnosis: ["体格检查", "超声/MRI"], tips: '减少跳跃跑动、控制运动量；小腿拉伸及离心训练', drugs: [] },
      { id: "plantar-fasciitis", name: "足底筋膜炎", deptId: "ortho", aliases: ["足跟痛", "跖筋膜炎"], symptoms: ["晨起第一步足跟剧痛", "行走后稍缓解", "久站久走后加重"], diagnosis: ["体格检查（足底内侧压痛）", "X线排除骨刺相关病变"], tips: '穿支撑良好的鞋、足底拉伸；冰敷并用瓶子滚动按摩足底', drugs: [] },
      { id: "hallux-valgus", name: "拇外翻", deptId: "ortho", aliases: ["大脚骨"], symptoms: ["大脚趾向外偏斜", "第一跖趾关节内侧突出、疼痛", "穿鞋摩擦痛、局部红肿"], diagnosis: ["足部X线（拇外翻角测量）", "体格检查"], tips: '穿宽松舒适的鞋、避免高跟鞋；畸形明显或疼痛严重时考虑手术', drugs: [] },
      { id: "ankylosing-spondylitis-b", name: "强直性脊柱炎", deptId: "ortho", aliases: ["AS", "强脊"], symptoms: ["腰背痛伴晨僵", "活动后减轻、休息加重", "夜间痛醒", "臀部交替痛"], diagnosis: ["骶髂关节MRI", "HLA-B27检测"], tips: '坚持规律功能锻炼、保持脊柱活动度；戒烟、规范抗炎治疗', drugs: [] },
      { id: "scoliosis-b", name: "脊柱侧弯", deptId: "ortho", aliases: ["脊柱侧凸"], symptoms: ["双肩不等高", "肩胛骨不对称突出", "弯腰时背部一侧隆起"], diagnosis: ["全脊柱X线（Cobb角测量）", "体格检查（Adams前屈试验）"], tips: '青少年期及早干预（支具、体操）；定期复查角度变化', drugs: [] },
      { id: "fracture-common", name: "骨折（常见部位）", deptId: "ortho", aliases: ["四肢骨折", "桡骨远端骨折"], symptoms: ["伤后局部剧烈疼痛、肿胀", "畸形、异常活动", "骨擦音、活动受限"], diagnosis: ["X线检查", "复杂部位CT"], tips: '现场制动固定、避免不当搬动；及时复位固定并规范康复锻炼', drugs: [] },
      { id: "osteoporotic-compression-fracture", name: "骨质疏松性压缩骨折", deptId: "ortho", aliases: ["椎体压缩骨折", "胸腰椎压缩性骨折"], symptoms: ["老年人轻微外伤后腰背剧痛", "翻身、起身时疼痛加重", "身高变矮、驼背"], diagnosis: ["胸腰椎X线/CT", "骨密度检查"], tips: '卧床休息、佩戴支具；规范抗骨质疏松治疗（钙剂、维生素D、双膦酸盐）', drugs: [] }
    ]
  }
]