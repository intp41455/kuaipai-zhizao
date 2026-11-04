// module: GlobalTutorialEntry
// extracted from 02-index-8bb27f01.js.js @ 370717
{
  const o = fn(),
    i = Le(() => J0(o.path)),
    n = p(!1);
  return (s, u) => i.value ? (c(), v(Ue, {
    key: 0
  }, [e("div", NE, [e("button", {
    type: "button",
    class: "gte-btn",
    title: i.value.name + "教程/案例",
    onClick: u[0] || (u[0] = d => n.value = !0)
  }, [...u[2] || (u[2] = [e("span", {
    class: "gte-inner"
  }, [e("span", {
    class: "gte-icon"
  }, "?"), e("span", {
    class: "gte-text"
  }, [g("教程"), e("br"), g("案例")])], -1)])], 8, UE)]), a(H0, {
    modelValue: n.value,
    "onUpdate:modelValue": u[1] || (u[1] = d => n.value = d),
    tutorial: i.value
  }, null, 8, ["modelValue", "tutorial"])], 64)) : M("", !0)
}
