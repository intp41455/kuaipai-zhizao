// module: InstallGuideModal
// extracted from 02-index-8bb27f01.js.js @ 398064
{
  const {
    open: o,
    bookmarkHint: i,
    isInstalled: n,
    closeGuide: s,
    installToDesktop: u
  } = eb(), d = Le(() => {
    const C = $o();
    return C && C.name ? C.name : Mo
  }), f = p(!1), y = p(""), w = p(""), S = p("");

  function z() {
    s(), y.value = "", w.value = "", S.value = "", f.value = !1
  }
  async function x() {
    if (f.value) return;
    w.value = "", f.value = !0;
    const C = await u();
    if (f.value = !1, C === "installed") {
      y.value = "installed";
      return
    }
    n() ? (S.value = "installed", w.value = "检测到你之前已安装过——删的只是桌面图标，应用还装着，所以浏览器不再弹安装框。") : (S.value = "notready", w.value = "当前浏览器暂未就绪，请用电脑版 Chrome / Edge 打开本站后再点一次；也可按 " + i.value + " 收藏。")
  }
  return (C, V) => (c(), ye(ic, {
    to: "body"
  }, [a(ji, {
    name: "ig"
  }, {
    default: l(() => [P(o) ? (c(), v("div", {
      key: 0,
      class: "ig-mask",
      onClick: lt(z, ["self"])
    }, [e("div", B6, [e("button", {
      class: "ig__close",
      "aria-label": "关闭",
      onClick: z
    }, [...V[0] || (V[0] = [e("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [e("path", {
      d: "M18 6 6 18M6 6l12 12"
    })], -1)])]), e("div", N6, [e("h2", U6, [V[1] || (V[1] = g("欢迎使用", -1)), e("span", R6, "【" + h(d.value) + "】", 1)])]), e("div", j6, [e("div", q6, [V[2] || (V[2] = g(" 建议", -1)), V[3] || (V[3] = e("span", {
      class: "ig__emoji"
    }, "⭐", -1)), V[4] || (V[4] = g("收藏网页 ", -1)), e("span", F6, h(P(i)), 1)]), e("div", W6, [V[5] || (V[5] = g(" 或", -1)), V[6] || (V[6] = e("span", {
      class: "ig__emoji"
    }, "🖥️", -1)), V[7] || (V[7] = g("添加", -1)), e("b", null, "【" + h(d.value) + "】", 1), V[8] || (V[8] = g("到桌面 ", -1))]), e("div", G6, " 无需每次输入网址，点击快捷方式即可使用" + h(d.value), 1), y.value === "installed" ? (c(), v("p", J6, " ✅ 已添加到桌面，下次双击图标即可直达" + h(d.value), 1)) : w.value ? (c(), v("div", H6, [e("p", Q6, h(w.value), 1), S.value === "installed" ? (c(), v("ul", K6, [e("li", null, [V[9] || (V[9] = g("找回桌面图标：地址栏输入 ", -1)), V[10] || (V[10] = e("b", null, "chrome://apps", -1)), g(" → 右键「" + h(d.value) + "」→ ", 1), V[11] || (V[11] = e("b", null, "创建快捷方式", -1)), V[12] || (V[12] = g(" → 勾选「桌面」。", -1))]), e("li", null, [V[13] || (V[13] = g("想重装覆盖：先在 ", -1)), V[14] || (V[14] = e("b", null, "chrome://apps", -1)), V[15] || (V[15] = g(" 里", -1)), V[16] || (V[16] = e("b", null, "卸载", -1)), g("「" + h(d.value) + "」，再回来点一次「添加到桌面」即可。", 1)])])) : M("", !0)])) : M("", !0), e("div", Y6, [e("button", {
      class: "ig__btn ig__btn--ghost",
      onClick: z
    }, "以后再说"), y.value !== "installed" ? (c(), v("button", {
      key: 0,
      class: "ig__btn ig__btn--primary",
      disabled: f.value,
      onClick: x
    }, h(f.value ? "正在添加…" : "添加到桌面"), 9, X6)) : (c(), v("button", {
      key: 1,
      class: "ig__btn ig__btn--primary",
      onClick: z
    }, "完成"))])]), V[17] || (V[17] = e("div", {
      class: "ig__foot"
    }, "也可在「个人中心 → 添加到桌面」随时打开", -1))])])) : M("", !0)]),
    _: 1
  })]))
}
