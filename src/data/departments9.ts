// 疾病库扩容E：中医/整形/男科/睡眠/急诊/全科 新增疾病
import type { Department } from "./departments"

export const moreDepartments7: Department[] = [
  {
    id: "tcm", name: "中医科", color: "#8B7CF6", emoji: "🌿",
    diseases: [
      { id: "tcm-cold-wind-cold", name: "感冒（风寒）", deptId: "tcm", aliases: ["风寒感冒"], symptoms: ["恶寒重、发热轻", "无汗", "头痛身痛", "鼻塞流清涕"], diagnosis: ["中医辨证（风寒束表）", "舌脉诊"], tips: "辛温解表，可用生姜红糖水；注意保暖避风；多饮温水，微微发汗即可，避免大汗", drugs: [] },
      { id: "tcm-cold-wind-heat", name: "感冒（风热）", deptId: "tcm", aliases: ["风热感冒"], symptoms: ["发热重、恶寒轻", "咽喉红肿疼痛", "鼻塞流黄涕", "口渴欲饮"], diagnosis: ["中医辨证（风热犯表）", "舌脉诊"], tips: "辛凉解表，多饮水；饮食清淡，忌辛辣油腻；体温持续升高需及时就医", drugs: [] },
      { id: "tcm-cough-phlegm-damp", name: "咳嗽（痰湿）", deptId: "tcm", aliases: ["痰湿咳嗽"], symptoms: ["咳嗽痰多", "痰白黏腻", "胸闷脘痞", "食欲不振"], diagnosis: ["中医辨证（痰湿蕴肺）", "舌脉诊"], tips: "燥湿化痰，少食生冷甜腻之品；适当运动助运化；痰多日久不愈建议专科调理", drugs: [] },
      { id: "tcm-cough-lung-yin", name: "咳嗽（肺阴虚）", deptId: "tcm", aliases: ["肺阴虚咳嗽", "干咳"], symptoms: ["干咳少痰", "痰中带血丝", "口干咽燥", "午后潮热"], diagnosis: ["中医辨证（肺阴亏虚）", "舌脉诊", "胸部影像学排查"], tips: "养阴润肺，可食百合雪梨；忌辛辣燥热之品；久咳不愈或咯血需影像学检查", drugs: [] },
      { id: "tcm-stomach-cold", name: "胃痛（脾胃虚寒）", deptId: "tcm", aliases: ["脾胃虚寒胃痛", "胃寒痛"], symptoms: ["胃脘隐痛", "喜温喜按", "空腹及受凉后加重", "泛吐清水"], diagnosis: ["中医辨证（脾胃虚寒）", "舌脉诊", "必要时胃镜排除器质病变"], tips: "温中健脾，饮食温热易消化；忌生冷寒凉；规律三餐，必要时胃镜检查", drugs: [] },
      { id: "tcm-constipation-qi", name: "便秘（气虚）", deptId: "tcm", aliases: ["气虚便秘"], symptoms: ["虽有便意但排便无力", "大便不干硬", "用力后汗出气短", "神疲乏力"], diagnosis: ["中医辨证（气虚不运）", "舌脉诊"], tips: "益气润肠，适当进食粗粮蔬菜；避免久坐，加强腹肌锻炼；避免长期依赖泻药", drugs: [] },
      { id: "tcm-insomnia-heart-spleen", name: "失眠（心脾两虚）", deptId: "tcm", aliases: ["心脾两虚不寐"], symptoms: ["入睡困难、多梦易醒", "心悸健忘", "头晕乏力", "食欲不振"], diagnosis: ["中医辨证（心脾两虚）", "舌脉诊"], tips: "补益心脾，睡前温水泡脚；避免睡前思虑过度；可配合百合莲子粥食疗", drugs: [] },
      { id: "tcm-vertigo-liver-yang", name: "眩晕（肝阳上亢）", deptId: "tcm", aliases: ["肝阳上亢眩晕"], symptoms: ["头晕胀痛", "面红目赤", "急躁易怒", "耳鸣口苦"], diagnosis: ["中医辨证（肝阳上亢）", "舌脉诊", "监测血压"], tips: "平肝潜阳，保持情绪平稳；低盐饮食、戒烟限酒；血压明显升高需规范降压", drugs: [] },
      { id: "tcm-headache-wind-cold", name: "头痛（风寒）", deptId: "tcm", aliases: ["风寒头痛"], symptoms: ["头痛连及项背", "遇风遇冷加重", "恶寒发热", "鼻塞流涕"], diagnosis: ["中医辨证（风寒头痛）", "舌脉诊"], tips: "疏风散寒，注意头部保暖；可饮生姜葱白汤；头痛剧烈或伴呕吐需及时就医", drugs: [] },
      { id: "tcm-lumbago-kidney", name: "腰痛（肾虚）", deptId: "tcm", aliases: ["肾虚腰痛"], symptoms: ["腰部酸软隐痛", "劳累后加重", "膝软无力", "夜尿频多"], diagnosis: ["中医辨证（肾虚腰痛）", "舌脉诊", "必要时腰椎影像学检查"], tips: "补肾强腰，避免久坐久站和负重；规律作息、节制房劳；腰痛持续或伴下肢麻木需查腰椎", drugs: [] },
      { id: "tcm-menstrual-irregularity", name: "月经不调", deptId: "tcm", aliases: ["月经先后无定期", "经期紊乱"], symptoms: ["月经周期紊乱", "经量多少不一", "经色经质异常", "伴腹痛或乳房胀痛"], diagnosis: ["中医辨证", "妇科B超", "性激素六项"], tips: "调经先调生活：规律作息、避免熬夜；经期注意保暖；连续紊乱3个月以上建议妇科检查", drugs: [] },
      { id: "tcm-dysmenorrhea-cold", name: "痛经（寒凝血瘀）", deptId: "tcm", aliases: ["寒凝血瘀痛经"], symptoms: ["经前或经期小腹冷痛", "得热痛减", "经色紫暗有血块", "畏寒肢冷"], diagnosis: ["中医辨证（寒凝血瘀）", "妇科B超排除器质病变"], tips: "温经散寒，经期注意保暖、忌食生冷；可用热水袋敷小腹；痛经剧烈或进行性加重需就医", drugs: [] },
      { id: "tcm-acne-damp-heat", name: "痤疮（湿热）", deptId: "tcm", aliases: ["湿热痤疮"], symptoms: ["面部丘疹脓疱", "皮肤油腻", "口苦口臭", "大便黏滞"], diagnosis: ["中医辨证（湿热蕴结）", "舌脉诊"], tips: "清热利湿，少食辛辣油腻甜食；保持面部清洁、避免挤压；反复不愈可中西医结合治疗", drugs: [] },
      { id: "tcm-eczema-damp-heat", name: "湿疹（湿热）", deptId: "tcm", aliases: ["湿热浸淫湿疹"], symptoms: ["皮肤红斑丘疹", "渗液糜烂", "瘙痒剧烈", "口干口苦"], diagnosis: ["中医辨证（湿热浸淫）", "舌脉诊"], tips: "清热祛湿止痒，忌辛辣海鲜发物；避免热水烫洗和搔抓；渗液明显或继发感染需皮肤科处理", drugs: [] },
      { id: "tcm-fatigue-qi-deficiency", name: "乏力（气虚）", deptId: "tcm", aliases: ["气虚乏力"], symptoms: ["神疲乏力", "少气懒言", "动则汗出", "头晕心悸"], diagnosis: ["中医辨证（气虚证）", "血常规、甲功等排除器质性疾病"], tips: "补气健脾，保证充足睡眠；适当有氧运动循序渐进；乏力持续不缓解需排查贫血、甲减等", drugs: [] }
    ]
  },  {
    id: "plastic", name: "整形美容科", color: "#F08CA8", emoji: "✨",
    diseases: [
      { id: "plastic-hypertrophic-scar", name: "瘢痕增生", deptId: "plastic", aliases: ["增生性瘢痕"], symptoms: ["瘢痕高出皮面", "颜色鲜红", "质地较硬", "伴瘙痒或刺痛"], diagnosis: ["皮肤科/整形科查体", "瘢痕评估量表"], tips: "早期干预效果好，可用硅酮凝胶贴；避免搔抓和暴晒；半年内坚持规范治疗", drugs: [] },
      { id: "plastic-keloid", name: "瘢痕疙瘩", deptId: "plastic", aliases: ["蟹足肿"], symptoms: ["瘢痕超出原损伤范围", "呈蟹足样生长", "质地坚硬", "持续瘙痒疼痛"], diagnosis: ["整形科查体", "必要时皮肤病理活检"], tips: "治疗难度较大，需综合治疗（注射+激光+放疗等）；避免纹身、穿孔等诱发因素；有家族史者谨慎手术", drugs: [] },
      { id: "plastic-pigmented-nevus", name: "色素痣", deptId: "plastic", aliases: ["黑痣", "痣"], symptoms: ["皮肤黑色或褐色斑点", "多数平坦或微隆起", "一般无自觉症状"], diagnosis: ["皮肤镜检查", "必要时病理活检"], tips: "绝大多数为良性，无需处理；出现形状不对称、边界不规则、颜色不均、快速增大或破溃需及时就医（ABCDE原则）", drugs: [] },
      { id: "plastic-hyperpigmentation", name: "皮肤色素沉着", deptId: "plastic", aliases: ["色素沉着", "色斑"], symptoms: ["局部皮肤颜色加深", "晒后加重", "边界不清或清晰", "多见于面部手背"], diagnosis: ["皮肤镜检查", "Wood灯检查"], tips: "严格防晒是基础；避免滥用美白产品；激光治疗需正规机构评估；持续加重需排查内分泌原因", drugs: [] },
      { id: "plastic-seborrheic-alopecia", name: "脱发（脂溢性）", deptId: "plastic", aliases: ["脂溢性脱发", "雄激素性脱发"], symptoms: ["头顶及发际线进行性稀疏", "头皮油腻", "头皮屑增多", "发丝变细"], diagnosis: ["皮肤镜检查", "拉发试验", "性激素检查"], tips: "早期规范用药（米诺地尔、非那雄胺遵医嘱）；规律作息、清淡饮食；植发需评估毛囊状态", drugs: [] },
      { id: "plastic-wrinkles", name: "皱纹", deptId: "plastic", aliases: ["面部皱纹", "动态纹"], symptoms: ["眼角鱼尾纹", "眉间川字纹", "额部抬头纹", "皮肤弹性下降"], diagnosis: ["皮肤弹性评估", "皱纹分级评估"], tips: "严格防晒、戒烟；保持充足睡眠和皮肤保湿；肉毒素等医美项目需正规机构评估", drugs: [] },
      { id: "plastic-eye-bags", name: "眼袋", deptId: "plastic", aliases: ["下眼睑袋"], symptoms: ["下睑皮肤松弛", "眶隔脂肪膨出", "晨起明显", "伴黑眼圈"], diagnosis: ["整形科查体", "眼袋分型评估"], tips: "保证睡眠、避免熬夜；睡前少饮水；不同类型眼袋处理方式不同，需专科评估", drugs: [] },
      { id: "plastic-facial-laxity", name: "面部松弛", deptId: "plastic", aliases: ["面部皮肤松弛", "面颈部松弛"], symptoms: ["面颊皮肤松弛下垂", "下颌缘轮廓模糊", "法令纹加深", "颈部皮肤松弛"], diagnosis: ["面部皮肤松弛分级评估", "整形科查体"], tips: "严格防晒、做好保湿；射频等光电治疗需正规机构；重度松弛可考虑手术提升", drugs: [] },
      { id: "plastic-breast-ptosis", name: "乳房下垂", deptId: "plastic", aliases: ["乳房松弛下垂"], symptoms: ["乳房位置下移", "乳头乳晕朝下", "乳房皮肤松弛", "上极空虚"], diagnosis: ["整形科查体", "乳房下垂分级（Regnault分级）", "乳腺超声常规检查"], tips: "合理减重避免快速消瘦；坚持佩戴合适内衣；手术矫正需评估生育哺乳需求与乳腺健康", drugs: [] },
      { id: "plastic-fat-accumulation", name: "脂肪堆积", deptId: "plastic", aliases: ["局部脂肪堆积", "顽固脂肪"], symptoms: ["腹部、腰腹或大腿局部脂肪堆积", "节食运动难以消除", "局部皮肤松弛"], diagnosis: ["体脂率与围度测量", "体成分分析"], tips: "先通过饮食运动全身减脂；局部顽固脂肪可考虑吸脂等医美手段；需排除内分泌性肥胖", drugs: [] },
      { id: "plastic-scar-revision", name: "疤痕修复", deptId: "plastic", aliases: ["瘢痕修复", "疤痕治疗"], symptoms: ["陈旧性疤痕明显", "疤痕色深或凹陷", "影响外观或功能", "伴瘙痒不适"], diagnosis: ["疤痕评估（类型、位置、大小）", "必要时病理检查"], tips: "疤痕稳定后（约半年）再考虑修复；方法包括激光、手术切除、注射等；治疗需多次并耐心", drugs: [] },
      { id: "plastic-tattoo-removal", name: "纹身去除", deptId: "plastic", aliases: ["洗纹身"], symptoms: ["纹身影响外观", "后悔纹身", "纹身部位色素沉着或排异"], diagnosis: ["纹身颜色与深度评估", "皮肤类型评估"], tips: "激光去除需多次治疗，间隔1-2个月；深色与彩色纹身难度较大；选择正规医疗机构，避免留疤", drugs: [] },
      { id: "plastic-acne-scar", name: "痤疮疤痕", deptId: "plastic", aliases: ["痘坑", "痘印"], symptoms: ["面部凹陷性疤痕", "色素沉着或红斑", "皮肤凹凸不平"], diagnosis: ["疤痕类型评估（冰锥型/车厢型/滚动型）", "皮肤镜检查"], tips: "点阵激光、微针等可改善；治疗期间严格防晒；避免挤压痘痘是预防关键", drugs: [] },
      { id: "plastic-enlarged-pores", name: "毛孔粗大", deptId: "plastic", aliases: ["毛孔粗大"], symptoms: ["面部毛孔明显粗大", "皮肤出油多", "黑头粉刺", "皮肤粗糙"], diagnosis: ["皮肤肤质评估", "皮肤镜检查"], tips: "温和清洁、控油保湿；避免挤压黑头；果酸焕肤、光子等治疗需正规机构", drugs: [] },
      { id: "plastic-dark-circles", name: "黑眼圈", deptId: "plastic", aliases: ["眼周色素沉着"], symptoms: ["眼周肤色暗沉", "青紫色或褐色", "熬夜后加重", "可伴眼袋"], diagnosis: ["黑眼圈分型评估（色素型/血管型/结构型）"], tips: "保证睡眠、避免揉眼；色素型注意防晒与美白护肤；血管型与结构型需医美评估，护肤品效果有限", drugs: [] }
    ]
  },
  {
    id: "andrology", name: "男科", color: "#6FA8DC", emoji: "🚹",
    diseases: [
      { id: "andro-peyronie-disease", name: "阴茎硬结症", deptId: "andrology", aliases: ["Peyronie病", "阴茎海绵体硬结"], symptoms: ["阴茎弯曲", "勃起时疼痛", "阴茎可触及硬结", "勃起功能受影响"], diagnosis: ["触诊检查", "阴茎超声", "必要时勃起状态评估"], tips: "急性期避免性生活刺激；稳定期可考虑药物或手术矫正；需男科专科评估", drugs: [] },
      { id: "andro-premature-ejaculation", name: "早泄", deptId: "andrology", aliases: ["射精过早"], symptoms: ["射精潜伏期短", "难以控制射精", "双方满意度下降", "焦虑自责"], diagnosis: ["病史评估（IELT）", "排除器质性病因"], tips: "行为训练（动-停法）与心理调节；必要时药物辅助；与伴侣充分沟通，避免过度焦虑", drugs: [] },
      { id: "andro-oligospermia", name: "少精症", deptId: "andrology", aliases: ["精子数量减少"], symptoms: ["多无明显症状", "备孕困难", "精液化验精子浓度低于正常"], diagnosis: ["精液分析（至少2次）", "性激素检查", "阴囊彩超"], tips: "戒烟限酒、避免高温环境（桑拿、久坐）；补充锌硒与叶酸；查找并治疗病因（精索静脉曲张、感染等）", drugs: [] },
      { id: "andro-asthenospermia", name: "弱精症", deptId: "andrology", aliases: ["精子活力低下"], symptoms: ["多无明显症状", "备孕困难", "精液分析提示前向运动精子比例低"], diagnosis: ["精液分析（活力评估）", "精子形态学检查", "性激素与阴囊彩超"], tips: "规律作息、适度运动；避免熬夜与久坐；必要时药物治疗，改善生活方式是基础", drugs: [] },
      { id: "andro-azoospermia", name: "无精症", deptId: "andrology", aliases: ["无精子症"], symptoms: ["多无明显症状", "婚后不育", "精液检查未见精子"], diagnosis: ["精液分析（离心后仍无精子）", "性激素、染色体核型", "睾丸穿刺或活检评估生精功能"], tips: "需明确梗阻性或非梗阻性；部分可手术取精助孕；建议到生殖中心系统评估", drugs: [] },
      { id: "andro-chronic-prostatitis", name: "慢性前列腺炎", deptId: "andrology", aliases: ["前列腺炎（慢性）", "慢性骨盆疼痛综合征"], symptoms: ["会阴部坠胀隐痛", "尿频尿急尿不尽", "尿道灼热", "久坐后加重"], diagnosis: ["前列腺液检查", "尿常规", "直肠指检", "必要时B超"], tips: "避免久坐、忌酒与辛辣；规律排精有助缓解；温水坐浴；症状反复需规范疗程治疗，勿滥用抗生素", drugs: [] },
      { id: "andro-seminal-vesiculitis", name: "精囊炎", deptId: "andrology", aliases: ["血精"], symptoms: ["血精（精液带血）", "会阴部不适", "射精疼痛", "尿频尿急"], diagnosis: ["精液常规检查", "经直肠超声", "尿常规"], tips: "急性期暂停性生活；多饮水、避免久坐；规范抗感染；反复血精需排除精囊肿瘤等", drugs: [] },
      { id: "andro-male-infertility", name: "男性不育", deptId: "andrology", aliases: ["男性生育力低下"], symptoms: ["规律性生活1年以上未孕", "精液检查异常", "性功能障碍"], diagnosis: ["精液分析", "性激素检查", "阴囊彩超与遗传学检查"], tips: "夫妻双方共同检查；戒烟限酒、控制体重；避免高温与有害环境；必要时辅助生殖技术", drugs: [] },
      { id: "andro-androgen-deficiency", name: "雄激素缺乏", deptId: "andrology", aliases: ["男性迟发性性腺功能减退", "LOH", "男性更年期"], symptoms: ["性欲减退", "晨勃减少", "乏力、情绪低落", "肌肉量下降、腹部脂肪增加"], diagnosis: ["血清总睾酮/游离睾酮（晨起测定）", "性激素结合球蛋白", "排除继发病因"], tips: "改善生活方式（运动、减重、睡眠）是基础；睾酮补充治疗需专科评估利弊并定期监测", drugs: [] },
      { id: "andro-spermatorrhea", name: "遗精", deptId: "andrology", aliases: ["梦遗"], symptoms: ["无性刺激下精液自行溢出", "梦中遗精", "频繁时伴腰酸乏力", "头晕耳鸣"], diagnosis: ["病史评估", "排除器质性疾病"], tips: "偶发遗精属正常生理现象；避免睡前过度兴奋与看刺激性内容；频繁遗精伴不适需专科调理", drugs: [] },
      { id: "andro-impotence", name: "阳痿", deptId: "andrology", aliases: ["勃起困难", "不举"], symptoms: ["阴茎勃起困难", "勃起硬度不足", "难以维持勃起", "晨勃减少"], diagnosis: ["IIEF-5量表评估", "性激素检查", "排除心血管等基础疾病"], tips: "戒烟限酒、控制三高；规律运动改善血管功能；避免滥用保健品；必要时规范药物治疗", drugs: [] },
      { id: "andro-hydrocele", name: "睾丸鞘膜积液", deptId: "andrology", aliases: ["鞘膜积液"], symptoms: ["阴囊一侧增大", "坠胀感", "透光试验阳性", "一般无疼痛"], diagnosis: ["体格检查（透光试验）", "阴囊彩超"], tips: "少量积液可观察；量大或影响生活需手术治疗；需与疝气、睾丸肿瘤鉴别，及时就医", drugs: [] },
      { id: "andro-semen-abnormality", name: "精液质量异常", deptId: "andrology", aliases: ["精液异常", "精子质量差"], symptoms: ["精液量少或过多", "精子密度或活力异常", "精液液化异常", "备孕困难"], diagnosis: ["精液分析（禁欲2-7天）", "精子形态学", "性激素与生殖道超声"], tips: "禁欲时间影响精液结果，复查需规范；戒烟限酒、避免高温；必要时药物或辅助生殖", drugs: [] },
      { id: "andro-ejaculatory-dysfunction", name: "射精障碍", deptId: "andrology", aliases: ["不射精", "逆行射精"], symptoms: ["性交时难以射精", "射精无力或延迟", "射精后尿液浑浊（逆行射精）", "快感缺失"], diagnosis: ["病史评估", "射精后尿常规找精子", "必要时尿动力学检查"], tips: "查找药物、手术、神经等病因；部分可行行为与药物治疗；备孕者需评估取精方案", drugs: [] },
      { id: "andro-hypoactive-sexual-desire", name: "性欲减退", deptId: "andrology", aliases: ["性欲低下", "男性性冷淡"], symptoms: ["对性生活兴趣明显下降", "性幻想减少", "回避性行为", "伴乏力或情绪低落"], diagnosis: ["性激素检查", "甲状腺功能", "心理状态评估"], tips: "排查睾酮低下、甲减、抑郁等病因；保证睡眠、适度运动、减负减压；必要时专科治疗", drugs: [] }
    ]
  },  {
    id: "sleep", name: "睡眠医学科", color: "#A78BFA", emoji: "😴",
    diseases: [
      { id: "sleep-upper-airway-resistance", name: "上气道阻力综合征", deptId: "sleep", aliases: ["UARS", "上气道阻力增高"], symptoms: ["白天嗜睡乏力", "夜间反复微觉醒", "打鼾但不典型", "晨起头痛口干"], diagnosis: ["多导睡眠监测（PSG）", "食管压力测定", "Epworth嗜睡量表"], tips: "侧卧睡眠、减重；避免饮酒与镇静药物；持续嗜睡影响生活需专科评估治疗", drugs: [] },
      { id: "sleep-primary-insomnia", name: "原发性失眠", deptId: "sleep", aliases: ["慢性失眠", "失眠症"], symptoms: ["入睡困难或维持困难", "早醒", "白天疲劳困倦", "对睡眠过度担忧"], diagnosis: ["睡眠日记与量表评估", "排除其他睡眠疾病（必要时PSG）"], tips: "固定作息时间，床只用于睡眠；睡前1小时远离手机；认知行为治疗（CBT-I）是首选；避免自行长期服用安眠药", drugs: [] },
      { id: "sleep-narcolepsy", name: "发作性睡病", deptId: "sleep", aliases: ["猝倒症"], symptoms: ["白天不可抗拒的嗜睡发作", "情绪激动时突发猝倒", "入睡前幻觉", "睡眠瘫痪（鬼压床）"], diagnosis: ["多导睡眠监测+多次小睡潜伏期试验（MSLT）", "脑脊液食欲素检测"], tips: "规律小睡（定时15-20分钟）；避免驾驶等危险活动；药物治疗需睡眠专科规范管理", drugs: [] },
      { id: "sleep-restless-legs", name: "不宁腿综合征", deptId: "sleep", aliases: ["不安腿综合征", "RLS"], symptoms: ["夜间腿部难以名状的不适感", "活动或走动后缓解", "静息时加重", "影响入睡"], diagnosis: ["临床诊断标准（IRLSSG）", "血清铁蛋白检查", "排除周围神经病变"], tips: "规律作息、适度白天运动；避免咖啡因与酒精；查铁蛋白，缺铁者补铁治疗；症状重需药物干预", drugs: [] },
      { id: "sleep-periodic-limb-movement", name: "周期性肢体运动障碍", deptId: "sleep", aliases: ["PLMD", "睡眠期周期性腿动"], symptoms: ["睡眠中下肢周期性抽动", "夜间反复觉醒", "晨起疲劳", "白天嗜睡"], diagnosis: ["多导睡眠监测（PLMS指数）", "排除不宁腿综合征"], tips: "减少咖啡因摄入、避免睡前饮酒；常与不宁腿综合征并存，需睡眠专科评估治疗", drugs: [] },
      { id: "sleep-sleepwalking", name: "梦游", deptId: "sleep", aliases: ["睡行症", "梦行症"], symptoms: ["睡眠中起身走动", "眼神呆滞、反应迟钝", "次日不能回忆", "多发于儿童"], diagnosis: ["病史与睡眠监测评估", "排除癫痫等器质性疾病"], tips: "保证卧室安全（锁门窗、清理障碍物）；避免睡眠剥夺与睡前饮酒；不要强行叫醒，轻轻引导回床；频繁或危险发作需就医", drugs: [] },
      { id: "sleep-night-terrors", name: "夜惊", deptId: "sleep", aliases: ["睡惊症"], symptoms: ["入睡后突然惊叫哭闹", "坐起惊恐、目光呆滞", "心跳呼吸加快", "次日不能回忆"], diagnosis: ["病史评估", "必要时多导睡眠监测"], tips: "多发于儿童，多数随年龄自愈；保证规律作息、避免过度疲劳；发作时注意保护安全，勿强行唤醒", drugs: [] },
      { id: "sleep-nightmare-disorder", name: "噩梦障碍", deptId: "sleep", aliases: ["梦魇", "反复噩梦"], symptoms: ["反复出现恐怖梦境", "梦中惊醒", "醒后清晰记得噩梦内容", "对睡眠产生恐惧"], diagnosis: ["睡眠日记评估", "必要时多导睡眠监测", "心理状态评估"], tips: "避免睡前看恐怖内容与饮酒；规律作息、缓解日间压力；创伤相关噩梦建议心理治疗", drugs: [] },
      { id: "sleep-central-sleep-apnea", name: "中枢性睡眠呼吸暂停", deptId: "sleep", aliases: ["中枢性呼吸暂停", "CSA"], symptoms: ["睡眠中反复呼吸暂停", "晨起头痛", "白天嗜睡", "夜间憋醒感"], diagnosis: ["多导睡眠监测（区分中枢性与阻塞性）", "心肺功能评估", "必要时血气分析"], tips: "常与心衰、阿片类药物相关，需治疗原发病；无创通气（ASV）等治疗需睡眠专科指导", drugs: [] },
      { id: "sleep-circadian-rhythm-disorder", name: "昼夜节律紊乱", deptId: "sleep", aliases: ["生物钟紊乱", "睡眠时相延迟综合征"], symptoms: ["入睡与醒来时间明显推迟", "与社交作息冲突", "白天困倦", "周末补觉后更难调整"], diagnosis: ["睡眠日记与体动记录仪", "昼夜节律评估（DLMO）"], tips: "固定起床时间，早晨多晒太阳；睡前减少蓝光暴露；调整需循序渐进，必要时专科光疗干预", drugs: [] },
      { id: "sleep-shift-work-disorder", name: "轮班工作睡眠障碍", deptId: "sleep", aliases: ["倒班睡眠障碍"], symptoms: ["轮班后入睡困难", "睡眠时间缩短", "工作时困倦嗜睡", "注意力下降"], diagnosis: ["睡眠日记评估", "Epworth嗜睡量表"], tips: "下班后保持环境黑暗安静以助眠；轮班间隙安排固定小睡；咖啡因避免在睡前6小时内摄入；长期不适可考虑调整班次", drugs: [] },
      { id: "sleep-insufficient-sleep-syndrome", name: "睡眠不足综合征", deptId: "sleep", aliases: ["睡眠剥夺", "睡眠不足"], symptoms: ["总睡眠时间长期不足", "白天困倦嗜睡", "注意力记忆力下降", "情绪烦躁"], diagnosis: ["睡眠日记评估", "排除其他睡眠疾病"], tips: "成人保证7-9小时睡眠；固定作息、提高睡眠效率；白天短暂午睡不超过30分钟；避免依赖咖啡因硬撑", drugs: [] },
      { id: "sleep-sleep-onset-insomnia", name: "入睡困难", deptId: "sleep", aliases: ["入睡延迟", "上床后难以入睡"], symptoms: ["躺下30分钟以上难以入睡", "睡前思绪万千", "对入睡焦虑", "白天精神差"], diagnosis: ["睡眠日记评估", "睡眠卫生评估"], tips: "保持卧室安静黑暗凉爽；睡前放松训练（腹式呼吸、冥想）；躺床20-30分钟未睡着可先起床，有困意再回床", drugs: [] },
      { id: "sleep-early-morning-awakening", name: "早醒", deptId: "sleep", aliases: ["清晨早醒"], symptoms: ["凌晨过早醒来", "醒后难以再入睡", "白天疲劳", "常伴情绪低落"], diagnosis: ["睡眠日记评估", "抑郁等情绪状态筛查"], tips: "固定起床时间、晨起晒太阳；避免睡前饮酒（易致早醒）；早醒持续伴情绪低落需排查抑郁", drugs: [] },
      { id: "sleep-poor-sleep-quality", name: "睡眠质量差", deptId: "sleep", aliases: ["睡眠浅", "多梦易醒"], symptoms: ["睡眠浅、多梦", "夜间易醒", "醒后不解乏", "白天困倦"], diagnosis: ["睡眠日记与量表评估", "必要时多导睡眠监测"], tips: "睡前避免饱食、咖啡因与酒精；规律运动（避免睡前剧烈运动）；营造良好睡眠环境；持续不改善需专科评估", drugs: [] }
    ]
  },
  {
    id: "emergency", name: "急诊科", color: "#E05252", emoji: "🚑",
    diseases: [
      { id: "emerg-acs", name: "急性冠脉综合征", deptId: "emergency", aliases: ["ACS", "急性冠脉综合征（含心梗）"], symptoms: ["压榨性胸痛（持续>20分钟）", "向左肩臂或下颌放射", "大汗、濒死感", "恶心呕吐"], diagnosis: ["心电图（18导联）", "心肌肌钙蛋白", "冠状动脉造影"], tips: "立即拨打120，静卧休息；怀疑心梗时尽早嚼服阿司匹林（遵医嘱）；切勿自行驾车就医；争分夺秒开通血管", drugs: [] },
      { id: "emerg-tia", name: "短暂性脑缺血发作", deptId: "emergency", aliases: ["TIA", "小中风"], symptoms: ["一过性肢体麻木无力", "言语不清", "单眼黑蒙", "症状数分钟至1小时缓解"], diagnosis: ["头颅CT/MRI", "颈动脉超声", "脑血管评估"], tips: "症状即使缓解也是脑卒中预警信号，需尽快就医评估；控制血压血脂、戒烟；遵医嘱抗血小板治疗", drugs: [] },
      { id: "emerg-anaphylactic-shock", name: "过敏性休克", deptId: "emergency", aliases: ["严重过敏反应", "过敏休克"], symptoms: ["皮疹、瘙痒", "喉头水肿、呼吸困难", "血压下降、面色苍白", "恶心呕吐、意识模糊"], diagnosis: ["临床诊断（接触过敏原后快速起病）", "监测血压、血氧"], tips: "立即脱离过敏原并拨打120；保持平卧、抬高下肢；肾上腺素是首选急救药物；有过敏史者随身携带急救药物", drugs: [] },
      { id: "emerg-hypoglycemic-coma", name: "低血糖昏迷", deptId: "emergency", aliases: ["严重低血糖", "低血糖晕厥"], symptoms: ["心慌出汗、手抖", "意识模糊", "抽搐", "昏迷"], diagnosis: ["指尖血糖测定（<2.8mmol/L）", "意识状态评估"], tips: "意识清醒者立即进食含糖食物（15g）；意识不清者切勿强行喂食，侧卧防误吸并立即就医；糖尿病患者规律进餐、随身带糖", drugs: [] },
      { id: "emerg-hyperglycemic-crisis", name: "高血糖危象", deptId: "emergency", aliases: ["糖尿病酮症酸中毒", "高渗性昏迷"], symptoms: ["极度口渴多尿", "恶心呕吐、腹痛", "呼吸深大（烂苹果味）", "嗜睡、昏迷"], diagnosis: ["血糖测定（显著升高）", "血酮/尿酮体", "血气分析与电解质"], tips: "属糖尿病急症，需立即住院补液与胰岛素治疗；糖尿病患者感染、漏药时警惕；规律监测血糖、按时用药", drugs: [] },
      { id: "emerg-acute-poisoning", name: "急性中毒", deptId: "emergency", aliases: ["药物中毒", "农药中毒", "食物中毒"], symptoms: ["恶心呕吐、腹痛腹泻", "头晕头痛", "意识障碍", "呼吸困难或抽搐"], diagnosis: ["毒物接触史询问", "血尿毒物检测", "肝肾功能与血气分析"], tips: "立即脱离毒物环境；保留可疑毒物及包装供鉴定；催吐需谨慎（腐蚀性、石油类禁用）；昏迷者侧卧并立即送医", drugs: [] },
      { id: "emerg-heatstroke", name: "中暑", deptId: "emergency", aliases: ["热射病", "重度中暑"], symptoms: ["高热（体温>40℃）", "皮肤干热无汗", "意识障碍、抽搐", "心率呼吸加快"], diagnosis: ["体温测定", "电解质与肝肾功能", "凝血功能评估"], tips: "立即转移至阴凉处，脱衣散热、冷水擦浴；补充淡盐水（意识清醒时）；体温过高或意识障碍立即送医；高温时段减少户外活动", drugs: [] },
      { id: "emerg-drowning", name: "溺水", deptId: "emergency", aliases: ["淹溺"], symptoms: ["呼吸心跳停止或微弱", "意识丧失", "口鼻有泡沫", "皮肤发绀"], diagnosis: ["现场心肺评估", "血气分析", "胸部影像学（肺水肿评估）"], tips: "立即呼救并拨打120；岸上施救时先清理口鼻异物、开放气道；心肺复苏（CPR）要持续到专业救援到达；即使复苏成功也需医院观察防迟发性肺水肿", drugs: [] },
      { id: "emerg-electrical-injury", name: "电击伤", deptId: "emergency", aliases: ["触电", "电烧伤"], symptoms: ["电流入口出口烧伤", "心律失常或心跳骤停", "意识丧失", "肌肉强直"], diagnosis: ["心电图监测", "肌酸激酶与肾功能", "创面评估"], tips: "施救前先切断电源，切勿徒手接触触电者；心跳骤停立即心肺复苏；电击伤即使外观轻也需住院观察心肾损伤", drugs: [] },
      { id: "emerg-burn", name: "烧伤", deptId: "emergency", aliases: ["烫伤", "灼伤"], symptoms: ["皮肤红肿水疱", "创面疼痛剧烈", "大面积烧伤伴渗液", "严重时休克"], diagnosis: ["烧伤面积与深度评估（九分法）", "生命体征监测"], tips: "立即用流动凉水冲洗创面15-20分钟；勿涂牙膏酱油等，勿挑破水疱；衣物粘连勿强行撕脱；大面积烧伤覆盖干净敷料后立即送医", drugs: [] },
      { id: "emerg-acute-fracture", name: "骨折（急诊）", deptId: "emergency", aliases: ["急性骨折", "外伤骨折"], symptoms: ["伤处剧烈疼痛", "局部肿胀畸形", "活动受限", "骨擦音或异常活动"], diagnosis: ["X线检查", "必要时CT", "血管神经损伤评估"], tips: "疑似骨折先固定制动，避免搬动加重损伤；开放性骨折用干净敷料覆盖压迫止血；肿胀明显时抬高患肢、冰敷", drugs: [] },
      { id: "emerg-acute-abdominal-pain", name: "急性腹痛", deptId: "emergency", aliases: ["急腹症"], symptoms: ["突发剧烈腹痛", "腹痛持续加重", "伴恶心呕吐或发热", "腹胀或停止排气排便"], diagnosis: ["腹部查体", "血常规与淀粉酶", "腹部超声或CT"], tips: "就诊前暂禁食禁水（可能需急诊手术）；不要自行服用止痛药以免掩盖病情；腹痛伴发热、呕血或休克征象立即急诊", drugs: [] },
      { id: "emerg-chest-pain-unknown", name: "胸痛待查", deptId: "emergency", aliases: ["急性胸痛", "胸痛原因待查"], symptoms: ["突发胸痛", "伴胸闷气短", "放射至肩背或下颌", "出汗或恶心"], diagnosis: ["心电图", "心肌肌钙蛋白", "胸部影像学", "D-二聚体排查肺栓塞"], tips: "胸痛原因多样（心梗、肺栓塞、主动脉夹层等），均可能致命；立即急诊评估，切勿拖延或自行用药", drugs: [] },
      { id: "emerg-hemoptysis", name: "咯血", deptId: "emergency", aliases: ["咳血", "痰中带血"], symptoms: ["咳嗽时咯出鲜血", "痰中带血丝", "大咯血时血液涌出", "伴呼吸困难或胸痛"], diagnosis: ["胸部CT", "支气管镜检查", "血常规与凝血功能"], tips: "大咯血立即侧卧（患侧向下）防窒息并拨打120；保持镇静、避免剧烈咳嗽；少量痰中带血也需查明病因（结核、肿瘤等）", drugs: [] },
      { id: "emerg-hematemesis", name: "呕血", deptId: "emergency", aliases: ["吐血", "上消化道出血"], symptoms: ["呕吐咖啡色或鲜红色血液", "黑便", "头晕乏力", "面色苍白、心慌"], diagnosis: ["急诊胃镜", "血常规与凝血功能", "生命体征监测"], tips: "立即禁食禁水并就医；平卧、头偏向一侧防误吸；呕血量较大或伴晕厥需紧急输血补液；肝硬化患者尤需警惕", drugs: [] }
    ]
  },  {
    id: "gp", name: "全科医学科", color: "#7BB08A", emoji: "🩺",
    diseases: [
      { id: "gp-acute-bronchitis", name: "急性支气管炎", deptId: "gp", aliases: ["支气管炎（急性）"], symptoms: ["咳嗽（先干咳后咳痰）", "咳痰（白痰或黄痰）", "可伴低热", "胸骨后不适"], diagnosis: ["病史与肺部听诊", "血常规", "必要时胸部X线"], tips: "多饮水、充分休息；多数由病毒感染引起，抗生素需医生判断；咳嗽超过3周或痰中带血需进一步检查", drugs: [] },
      { id: "gp-fever-of-unknown-origin", name: "发热待查", deptId: "gp", aliases: ["不明原因发热", "FUO"], symptoms: ["发热持续3周以上", "体温超过38.3℃", "伴乏力消瘦", "伴关节痛或皮疹"], diagnosis: ["血常规、血培养", "炎症指标（CRP、血沉）", "影像学与免疫学检查"], tips: "记录体温曲线与伴随症状；发热期间多饮水、注意休息；退热药按需使用，勿长期滥用；病因复杂需系统排查", drugs: [] },
      { id: "gp-fatigue-of-unknown-origin", name: "乏力待查", deptId: "gp", aliases: ["不明原因乏力", "疲劳待查"], symptoms: ["持续性疲劳乏力", "休息后难以缓解", "伴睡眠不佳", "伴食欲下降"], diagnosis: ["血常规与生化", "甲状腺功能", "血糖与维生素水平"], tips: "规律作息、适度运动；排查贫血、甲减、糖尿病等常见病因；症状持续6个月以上需专科进一步评估", drugs: [] },
      { id: "gp-weight-loss-unknown", name: "体重下降待查", deptId: "gp", aliases: ["不明原因消瘦"], symptoms: ["6-12个月内体重下降超过5%", "食欲减退或正常", "伴乏力", "伴发热或盗汗"], diagnosis: ["血糖与甲状腺功能", "肿瘤标志物筛查", "胸部及腹部影像学"], tips: "排除糖尿病、甲亢、肿瘤、结核等病因；记录体重变化曲线；不明原因消瘦建议系统体检，勿自行进补", drugs: [] },
      { id: "gp-edema-unknown", name: "水肿待查", deptId: "gp", aliases: ["下肢水肿", "不明原因水肿"], symptoms: ["下肢或眼睑水肿", "晨起眼睑肿或下午下肢肿", "按压凹陷", "伴乏力气短"], diagnosis: ["尿常规与肾功能", "肝功能与白蛋白", "心脏超声"], tips: "水肿原因多样（心、肝、肾、营养等）；适当抬高下肢、限盐；晨轻暮重多与体位相关；伴气短或尿少需及时就医", drugs: [] },
      { id: "gp-arthralgia-unknown", name: "关节痛待查", deptId: "gp", aliases: ["不明原因关节痛"], symptoms: ["单个或多个关节疼痛", "晨僵", "关节肿胀或活动受限", "伴发热或皮疹"], diagnosis: ["血常规与炎症指标", "类风湿因子、抗CCP抗体", "关节X线或超声"], tips: "区分炎性与非炎性关节痛；避免过度负重，适当活动；关节红肿热痛或晨僵超过1小时需风湿科评估", drugs: [] },
      { id: "gp-lymphadenopathy-unknown", name: "淋巴结肿大待查", deptId: "gp", aliases: ["淋巴结肿大原因待查"], symptoms: ["颈部或腋下等淋巴结肿大", "质软或质硬", "伴疼痛或无痛", "伴发热盗汗消瘦"], diagnosis: ["血常规", "淋巴结超声", "必要时淋巴结活检"], tips: "多数为感染引起，抗感染后复查；无痛性、进行性肿大或伴全身症状需警惕肿瘤；直径大于1cm持续不消建议活检评估", drugs: [] },
      { id: "gp-abnormal-screening", name: "体检异常（血脂/血糖/血压）", deptId: "gp", aliases: ["体检指标异常", "三高筛查异常"], symptoms: ["多无明显症状", "体检发现血脂、血糖或血压升高", "超重或腹型肥胖"], diagnosis: ["血脂全套", "空腹血糖与糖化血红蛋白", "规范血压测量"], tips: "先生活方式干预：低盐低脂饮食、规律运动、控制体重；定期复查监测；持续异常需按医嘱药物干预，勿自行停药", drugs: [] },
      { id: "gp-subhealth", name: "亚健康", deptId: "gp", aliases: ["亚健康状态"], symptoms: ["疲劳乏力", "睡眠质量差", "注意力不集中", "情绪不稳或易感冒"], diagnosis: ["全面体检排除器质性疾病", "生活方式与心理评估"], tips: "规律作息、均衡饮食、每周适量运动；学会压力管理；体检正常不等于无需调整生活方式，坚持自律最重要", drugs: [] },
      { id: "gp-chronic-fatigue-syndrome", name: "疲劳综合征", deptId: "gp", aliases: ["ME/CFS", "肌痛性脑脊髓炎"], symptoms: ["持续6个月以上严重疲劳", "活动后疲劳加重（PEM）", "睡眠后仍不解乏", "肌肉关节痛、记忆力下降"], diagnosis: ["排除性诊断（全面检查后）", "疲劳量表评估"], tips: "避免过度劳累，采用能量管理（Pacing）；规律作息、渐进式活动；寻求专业支持，警惕合并焦虑抑郁", drugs: [] },
      { id: "gp-seasonal-allergy", name: "季节性过敏", deptId: "gp", aliases: ["花粉症", "季节性过敏性鼻炎"], symptoms: ["喷嚏连作、流清涕", "鼻痒鼻塞", "眼痒流泪", "春季或秋季发作"], diagnosis: ["过敏原检测（花粉等）", "症状与季节相关性评估"], tips: "花粉季减少户外活动、关窗、佩戴口罩；回家后清洗鼻腔面部；遵医嘱使用抗过敏药物", drugs: [] },
      { id: "gp-food-allergy", name: "食物过敏", deptId: "gp", aliases: ["过敏性食物反应"], symptoms: ["进食特定食物后皮疹瘙痒", "口唇肿胀", "腹痛腹泻", "严重时呼吸困难"], diagnosis: ["过敏原检测（食物特异性IgE）", "食物激发试验（专科进行）", "排除食物不耐受"], tips: "严格回避致敏食物，阅读食品配料表；外出就餐主动告知；曾发生严重反应者需随身携带肾上腺素并学会使用", drugs: [] },
      { id: "gp-adverse-drug-reaction", name: "药物不良反应", deptId: "gp", aliases: ["药物过敏", "药物副作用"], symptoms: ["服药后皮疹瘙痒", "恶心呕吐或腹泻", "头晕乏力", "严重时呼吸困难或肝肾功能异常"], diagnosis: ["用药史与时间相关性评估", "血常规、肝肾功能", "停药观察"], tips: "出现疑似反应立即停药并咨询医生；记录过敏药物名称，就诊时主动告知；切勿自行重复使用曾致敏的药物", drugs: [] },
      { id: "gp-vaccination-consultation", name: "预防接种咨询", deptId: "gp", aliases: ["疫苗接种咨询", "疫苗咨询"], symptoms: ["无不适症状（咨询性就诊）", "接种前担忧", "接种后轻微发热或局部红肿"], diagnosis: ["接种史评估", "健康状况评估（禁忌证筛查）"], tips: "按时接种国家免疫规划疫苗；接种后留观30分钟；轻微局部反应多可自行缓解；特殊健康状况接种前咨询医生", drugs: [] },
      { id: "gp-health-checkup-consultation", name: "健康体检咨询", deptId: "gp", aliases: ["体检报告解读", "健康管理咨询"], symptoms: ["无特异性症状（咨询性就诊）", "体检报告异常指标", "家族史健康风险评估"], diagnosis: ["体检报告解读", "个体化风险评估", "必要的复查与补充检查"], tips: "定期体检有助于早发现早干预；结合年龄、性别、家族史选择体检项目；异常指标需按建议复查，勿过度焦虑", drugs: [] }
    ]
  }
]