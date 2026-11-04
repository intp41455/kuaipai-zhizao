// module: ImageEditModal
// extracted from 02-index-8bb27f01.js.js @ 1516106
{
  modelValue: {
    type: Boolean,
    default: !1
  },
  recordId: {
    type: [Number, String],
    default: ""
  },
  imageIndex: {
    type: [Number, String],
    default: 0
  },
  imageUrl: {
    type: String,
    default: ""
  },
  initPrompt: {
    type: String,
    default: ""
  },
  pointCost: {
    type: [Number, String],
    default: 3
  },
  resolutionLabel: {
    type: String,
    default: "1K"
  },
  editApi: {
    type: Function,
    default: null
  }
}
