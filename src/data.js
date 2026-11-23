export const DATA = {
  id: 'dsh-gout',
  name: '痛风',
  prefix: 'gout',
  label: '痛风',
  defaultEeriness: 2,
  gain: 0.38,
  flareChance: 0.4,
  flareGain: 30,
  triggerWeight: 0.9,
  flareWeight: 1.2,
  reliefs: [
    { id: 'colchicine', label: '吃药', relief: 26, minutes: 45, calm: 10 },
    { id: 'elevate', label: '把脚垫高', relief: 16, minutes: 30, calm: 6 },
    { id: 'ice', label: '隔着毛巾冰敷', relief: 12, minutes: 20, calm: 5 },
  ],
  body: {
    stiff: '大脚趾那儿有点胀，走路得歪着脚。',
    ache: '右脚大脚趾关节又红又热，被子压着都疼；走一步抽一下。',
    flare: '那只脚完全不敢落地，碰一下就跳起来；只能单脚蹦着走。',
  },
  voice: {
    base: '涉及走动、站起来、出门时，允许说一句「我这儿不方便」；别硬撑说没事。',
    flare: '允许短促的倒吸气、允许一句话被疼截断；不要长篇解释病情。',
  },
}
