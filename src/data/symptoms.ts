export type SymptomField = 'droplets' | 'pain' | 'fever' | 'freq' | 'duration' | 'color' | 'note'

export interface SymptomType {
  id: string
  name: string
  emoji: string
  fields: SymptomField[]
  hint: string
}

export const symptomTypes: SymptomType[] = [
  { id: 'diarrhea', name: '腹泻（拉肚子）', emoji: '💩', fields: ['droplets', 'freq', 'duration', 'note'], hint: '记录稀便程度、次数与持续天数' },
  { id: 'abdominal-pain', name: '腹痛', emoji: '🫃', fields: ['pain', 'freq', 'duration', 'note'], hint: '选择疼痛位置与程度' },
  { id: 'headache', name: '头痛', emoji: '🤕', fields: ['pain', 'duration', 'note'], hint: '选择疼痛程度与持续时间' },
  { id: 'fever', name: '发热', emoji: '🌡️', fields: ['fever', 'duration', 'note'], hint: '记录体温与持续时间' },
  { id: 'cough', name: '咳嗽', emoji: '😮‍💨', fields: ['duration', 'note'], hint: '记录持续时间与痰液情况' },
  { id: 'dizziness', name: '眩晕', emoji: '💫', fields: ['duration', 'note'], hint: '记录发作频率与伴随症状' },
  { id: 'palpitation', name: '心悸', emoji: '💓', fields: ['duration', 'note'], hint: '记录诱因与持续时间' },
  { id: 'nausea', name: '恶心呕吐', emoji: '🤢', fields: ['freq', 'duration', 'note'], hint: '记录呕吐次数与持续时间' },
  { id: 'joint-pain', name: '关节痛', emoji: '🦴', fields: ['pain', 'duration', 'note'], hint: '选择疼痛关节与程度' },
  { id: 'chest-pain', name: '胸痛', emoji: '❤️‍🩹', fields: ['pain', 'duration', 'note'], hint: '胸痛请高度重视，及时就医' },
  { id: 'shortness-breath', name: '气短/呼吸困难', emoji: '🫁', fields: ['duration', 'note'], hint: '呼吸困难请及时就医' },
  { id: 'skin-rash', name: '皮疹', emoji: '🔴', fields: ['duration', 'note'], hint: '记录部位与是否瘙痒' },
  { id: 'runny-nose', name: '流鼻涕', emoji: '🤧', fields: ['color', 'duration', 'note'], hint: '选择鼻涕颜色与持续时间' },
  { id: 'sneeze', name: '打喷嚏', emoji: '😤', fields: ['freq', 'duration', 'note'], hint: '记录发作频率与持续时间' },
  { id: 'sore-throat', name: '咽喉痛', emoji: '😖', fields: ['pain', 'duration', 'note'], hint: '选择疼痛程度与持续时间' },
  { id: 'hoarse', name: '声音嘶哑', emoji: '🗣️', fields: ['duration', 'note'], hint: '记录持续时间与是否伴咽痛' }
]

export const bodyParts = ['头部', '颈部', '肩部', '胸部', '上腹部', '下腹部', '背部', '腰部', '左上肢', '右上肢', '左下肢', '右下肢', '全身', '其他']