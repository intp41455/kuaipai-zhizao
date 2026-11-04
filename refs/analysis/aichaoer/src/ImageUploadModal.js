// module: ImageUploadModal
// extracted from 02-index-8bb27f01.js.js @ 1101619
{
  visible: {
    type: Boolean,
    default: !1
  },
  maxFiles: {
    type: Number,
    default: 5
  },
  slotLabels: {
    type: Array,
    default: () => []
  },
  maxSlotIndex: {
    type: Number,
    default: null
  },
  multiFileTitle: {
    type: String,
    default: ""
  },
  multiFileDesc: {
    type: String,
    default: ""
  },
  singleFileTitle: {
    type: String,
    default: ""
  },
  singleFileDesc: {
    type: String,
    default: ""
  },
  singleFileSlotDesc: {
    type: String,
    default: ""
  },
  initialImageCount: {
    type: Number,
    default: 0
  },
  existingImages: {
    type: Array,
    default: () => []
  },
  showProductGuide: {
    type: Boolean,
    default: !1
  },
  showMaterialLibraryEntry: {
    type: Boolean,
    default: !1
  },
  materialLibraryEntryText: {
    type: String,
    default: "从素材库选择"
  },
  showTemplateLibraryEntry: {
    type: Boolean,
    default: !1
  },
  templateLibraryEntryText: {
    type: String,
    default: "从模板库选择"
  },
  mobileUploadMax: {
    type: Number,
    default: 0
  }
}
