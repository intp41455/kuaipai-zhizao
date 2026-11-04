// module: AppSidebar
// extracted from 02-index-8bb27f01.js.js @ 230131
{
  selectedType: {
    type: Number,
    required: !1,
    default: 0
  },
  username: {
    type: String,
    default: "用户"
  },
  userInfo: {
    type: Object,
    default: () => ({})
  },
  isLoggedIn: {
    type: Boolean,
    default: !1
  },
  useInternalLogin: {
    type: Boolean,
    default: !0
  },
  mobileOpen: {
    type: Boolean,
    default: !1
  },
  externalMobileControl: {
    type: Boolean,
    default: !1
  }
}
