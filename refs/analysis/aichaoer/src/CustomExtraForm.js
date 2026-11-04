// module: CustomExtraForm
// extracted from 02-index-8bb27f01.js.js @ 559891
{
  modelValue: {
    type: Object,
    default: () => ({
      industry: "",
      ageMode: "any",
      ageRange: [18, 30],
      targetGroup: "",
      painPoints: "",
      solution: "",
      notes: ""
    })
  },
  mode: {
    type: String,
    default: "dialog",
    validator: t => ["dialog", "inline"].includes(t)
  },
  isMobile: {
    type: Boolean,
    default: !1
  },
  labelWidth: {
    type: String,
    default: "140px"
  },
  showHistoryTip: {
    type: Boolean,
    default: !0
  },
  visible: {
    type: Boolean,
    default: !1
  },
  ageLabel: {
    type: String,
    default: "用户年龄"
  },
  ageRangeLabel: {
    type: String,
    default: "年龄区间"
  },
  targetGroupLabel: {
    type: String,
    default: "目标群体"
  },
  painPointsLabel: {
    type: String,
    default: "用户痛点"
  },
  targetGroupPlaceholder: {
    type: String,
    default: "例如：应届毕业生、职场新人"
  },
  painPointsPlaceholder: {
    type: String,
    default: "例如：不会制作、自己制作的不好看、不专业不全面"
  },
  inlineMode: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  }
}
