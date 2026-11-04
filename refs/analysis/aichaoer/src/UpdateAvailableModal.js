// module: UpdateAvailableModal
// extracted from 02-index-8bb27f01.js.js @ 403780
{
  const {
    open: o,
    applying: i,
    dirty: n,
    confirm: s,
    postpone: u
  } = uT();
  return (d, f) => (c(), ye(ic, {
    to: "body"
  }, [a(ji, {
    name: "upd-fade"
  }, {
    default: l(() => [P(o) ? (c(), v("div", cT, [e("div", dT, [f[2] || (f[2] = e("h3", {
      id: "upd-title",
      class: "upd__title"
    }, "新版本可用", -1)), e("p", vT, h(P(n) ? "检测到网页有更新。当前页面有未提交的文字或已上传的图片，立即刷新会丢失。建议先完成后再更新。" : "检测到网页有更新，点击确定以获取最新版本。"), 1), e("div", {
      class: Pe(["upd__foot", {
        "upd__foot--split": P(n)
      }])
    }, [P(n) ? (c(), v("button", {
      key: 0,
      class: "upd__later",
      type: "button",
      disabled: P(i),
      onClick: f[0] || (f[0] = (...y) => P(u) && P(u)(...y))
    }, "稍后再说", 8, mT)) : M("", !0), e("button", {
      class: "upd__ok",
      type: "button",
      disabled: P(i),
      onClick: f[1] || (f[1] = (...y) => P(s) && P(s)(...y))
    }, h(P(n) ? "仍要刷新" : "确定"), 9, gT)], 2)])])) : M("", !0)]),
    _: 1
  })]))
}
