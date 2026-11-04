// module: Generating1
// extracted from 02-index-8bb27f01.js.js @ 669493
{
  const o = ln(),
    i = fn(),
    n = p(!1),
    s = p(!1),
    u = ue => {
      s.value = !1, A.success("登录成功")
    },
    d = p("titles"),
    f = p(0),
    y = p([]),
    w = p([]),
    S = p(!1),
    z = p(0),
    x = p(0),
    C = p([]),
    V = p(!1),
    $ = p(0),
    N = p(!1),
    T = Le(() => N.value ? w.value : w.value.slice(0, 5));
  let R = null,
    O = null,
    J = null,
    ee = !1;
  const ie = async () => {
    if (J) try {
      const ue = await Xu(J);
      if (ue) {
        if (ue.titles && Array.isArray(ue.titles) && ue.titles.length > 0 && (y.value.length === 0 || ue.status === 0 && ue.titles.length > y.value.length) && (y.value = [...ue.titles], S.value || (w.value = [...ue.titles])), ue.status === 2) O && (clearInterval(O), O = null), f.value = 100, V.value = !1, S.value = !1, d.value = "notes", z.value = ue.succ || 0, x.value = ue.fail || 0, $.value = ue.count || y.value.length, y.value.length > 0 && (C.value = y.value.map((U, de) => ({
          id: `${J}-${de}`,
          title: U,
          originalIndex: de
        }))), ne();
        else if (ue.status === 1) f.value = 50, V.value = !1, S.value = !0, d.value = "titles", $.value = ue.count || y.value.length, ue.titles && Array.isArray(ue.titles) && ue.titles.length > 0 && (w.value = [...ue.titles]), O && (clearInterval(O), O = null), ne();
        else if (ue.status === 0) {
          V.value = !0, S.value = !1;
          const U = ue.count || 0,
            de = ue.titles ? ue.titles.length : 0,
            _e = ue.succ || 0;
          de >= U && U > 0 ? (d.value = "notes", $.value = U, z.value = _e, x.value = ue.fail || 0, U > 0 ? f.value = 50 + Math.floor(_e / U * 50) : f.value = 50, ue.titles && ue.titles.length > 0 && (C.value = ue.titles.slice(0, _e).map((xe, Ce) => ({
            id: `${J}-${Ce}`,
            title: xe,
            originalIndex: Ce
          })))) : (d.value = "titles", $.value = U, U > 0 ? f.value = Math.floor(de / U * 50) : f.value = 0), ne()
        }
      }
    } catch (ue) {
      console.error("轮询任务状态失败:", ue)
    }
  }, Ae = () => {
    J && (O && clearInterval(O), ie(), O = setInterval(() => {
      ie()
    }, 3e3))
  }, F = () => {
    O && (clearInterval(O), O = null)
  }, Y = async () => {
    try {
      const ue = i.query.id;
      if (ue) {
        J = ue;
        try {
          const Re = await Xu(ue);
          if (Re) {
            if (Re.titles && Array.isArray(Re.titles) && (y.value = [...Re.titles], w.value = [...Re.titles]), Re.status === 2) f.value = 100, V.value = !1, S.value = !1, d.value = "notes", z.value = Re.succ || 0, x.value = Re.fail || 0, $.value = Re.count || y.value.length, y.value.length > 0 && (C.value = y.value.map((nt, tt) => ({
              id: `${J}-${tt}`,
              title: nt,
              originalIndex: tt
            })));
            else if (Re.status === 1) f.value = 50, V.value = !1, S.value = !0, d.value = "titles", $.value = Re.count || y.value.length, Re.titles && Array.isArray(Re.titles) && Re.titles.length > 0 && (w.value = [...Re.titles]), O && (clearInterval(O), O = null);
            else if (Re.status === 0) {
              V.value = !0, S.value = !1;
              const nt = Re.count || 0,
                tt = Re.titles ? Re.titles.length : 0,
                qe = Re.succ || 0;
              tt >= nt && nt > 0 ? (d.value = "notes", $.value = nt, z.value = qe, x.value = Re.fail || 0, nt > 0 ? f.value = 50 + Math.floor(qe / nt * 50) : f.value = 50, Re.titles && Re.titles.length > 0 && (C.value = Re.titles.slice(0, qe).map((Me, rt) => ({
                id: `${J}-${rt}`,
                title: Me,
                originalIndex: rt
              })))) : (d.value = "titles", $.value = nt, nt > 0 ? f.value = Math.floor(tt / nt * 50) : f.value = 0)
            }
            Re.param && sessionStorage.setItem("generateParams", JSON.stringify({
              mode: Re.param.mode || "single",
              count: Re.param.count || Re.count || 0,
              singleTitle: Re.param.singleTitle || "",
              titles: Re.param.titles || [],
              noteType: Re.param.noteType || "分享",
              wordCount: Re.param.wordCount || "300",
              contentOptions: Re.param.contentOptions || [],
              titleStyles: Re.param.titleStyles || [],
              titleWithEmoji: Re.param.titleWithEmoji || !1,
              skipTitleConfirm: Re.param.skipTitleConfirm || !1,
              customExtra: Re.param.customExtra || void 0,
              taskId: J
            })), ne(), Re.status !== 2 && Ae();
            return
          }
        } catch (Re) {
          console.error("获取任务状态失败:", Re)
        }
        const xe = `generatingState1_${J}`,
          Ce = sessionStorage.getItem(xe);
        if (Ce) {
          const Re = JSON.parse(Ce);
          d.value = Re.currentStage || "titles", f.value = Re.overallProgress || 0, y.value = Re.generatedTitles || [], w.value = Re.editableTitles || [], S.value = Re.showTitleConfirm || !1, z.value = Re.completedNotes || 0, C.value = Re.finalTasks || [], V.value = Re.isGenerating || !1, $.value = Re.totalCount || 0, Re.params && sessionStorage.setItem("generateParams", JSON.stringify(Re.params));
          return
        }
      }
      if (!i.path.startsWith("/generating1")) return;
      const U = JSON.parse(sessionStorage.getItem("generateParams") || "{}");
      if (U.mode !== "single") {
        i.path === "/generating1" && o.push("/generates");
        return
      }
      U.taskId ? (J = U.taskId, i.path === "/generating1" && (!i.query.id || i.query.id !== U.taskId) && o.replace(`/generating1?id=${U.taskId}`)) : i.path === "/generating1" && (J = `task1-${Date.now()}-${Math.random().toString(36).substr(2,9)}`, o.replace(`/generating1?id=${J}`), U.taskId = J, sessionStorage.setItem("generateParams", JSON.stringify(U)));
      const de = `generatingState1_${J}`,
        _e = sessionStorage.getItem(de);
      if (_e) {
        const xe = JSON.parse(_e);
        d.value = xe.currentStage || "titles", f.value = xe.overallProgress || 0, y.value = xe.generatedTitles || [], w.value = xe.editableTitles || [], S.value = xe.showTitleConfirm || !1, z.value = xe.completedNotes || 0, C.value = xe.finalTasks || [], V.value = xe.isGenerating || !1, $.value = xe.totalCount || 0
      } else $.value = U.count || 0, d.value = "titles", f.value = 0, y.value = [], w.value = [], S.value = !1, z.value = 0, C.value = [], V.value = !1
    } catch (ue) {
      console.error("Failed to load state:", ue)
    }
  }, ne = () => {
    try {
      J || (J = `task1-${Date.now()}-${Math.random().toString(36).substr(2,9)}`, o.replace(`/generating1?id=${J}`));
      const ue = `generatingState1_${J}`,
        U = JSON.parse(sessionStorage.getItem("generateParams") || "{}"),
        de = {
          currentStage: d.value,
          overallProgress: f.value,
          generatedTitles: y.value,
          editableTitles: w.value,
          showTitleConfirm: S.value,
          completedNotes: z.value,
          finalTasks: C.value,
          isGenerating: V.value,
          totalCount: $.value,
          generateTaskId: J,
          mode: "single",
          params: U
        };
      i.path === "/generating1" && (!i.query.id || i.query.id !== J) && o.replace(`/generating1?id=${J}`)
    } catch (ue) {
      console.error("Failed to save state:", ue)
    }
  }, De = () => {
    if (!ee) {
      ee = !0;
      try {
        const ue = JSON.parse(sessionStorage.getItem("generateParams") || "{}");
        if (ue.mode !== "single") {
          i.path === "/generating1" && o.push("/generates");
          return
        }
        if (J || (ue.taskId ? J = ue.taskId : J = `task1-${Date.now()}`), $.value = ue.count || y.value.length || 0, f.value === 100 && C.value.length === y.value.length && y.value.length > 0) return;
        y.value.length === 0 && w.value.length;
        const de = `generatingState1_${J}`,
          _e = sessionStorage.getItem(de),
          xe = ue.count || 0;
        if (y.value.length > 0 || w.value.length > 0) {
          if (y.value.length >= xe && xe > 0) {
            if (S.value) return;
            if (d.value === "notes") {
              V.value && b();
              return
            } else {
              if (w.value = [...y.value], ue.skipTitleConfirm) {
                y.value = [...w.value], S.value = !1, V.value = !0, d.value = "notes", f.value = 50, z.value = 0, C.value = [], ne();
                const Ce = y.value.length;
                y.value.forEach((Re, nt) => {
                  setTimeout(async () => {
                    await new Promise(tt => setTimeout(tt, 800 + Math.random() * 400)), z.value++, C.value.push({
                      id: `${nt}-${Date.now()}`,
                      title: Re,
                      originalIndex: nt
                    }), f.value = 50 + Math.floor(z.value / Ce * 50), ne(), z.value === Ce && (V.value = !1, f.value = 100, ne(), we())
                  }, nt * 200)
                })
              } else S.value = !0, f.value = 50;
              ne();
              return
            }
          } else if (y.value.length > 0 && y.value.length < xe) {
            re(ue);
            return
          }
          return
        }
        if (V.value) {
          if (d.value === "titles") {
            re(ue);
            return
          } else if (d.value === "notes") {
            b();
            return
          }
        }!V.value && y.value.length === 0 && w.value.length === 0 && Q(ue)
      } finally {
        ee = !1
      }
    }
  }, Q = async ue => {
    if (y.value.length > 0 || w.value.length > 0) {
      if (console.warn("警告：尝试重新生成标题，但标题已存在，应使用 continueTitlesGeneration"), y.value.length > 0) {
        re(ue);
        return
      }
      return
    }
    V.value = !0, d.value = "titles", f.value = 0, y.value = [], S.value = !1;
    const U = ue.singleTitle || "自动标题",
      de = ue.count || 0;
    for (let _e = 0; _e < de; _e++) {
      await new Promise(Ce => setTimeout(Ce, 500 + Math.random() * 300));
      const xe = ue.titleWithEmoji ? ["🔥", "✨", "💡", "🎯", "⭐"][_e % 5] : "";
      y.value.push(`${U} - ${_e+1}${xe}`), f.value = Math.floor((_e + 1) / de * 50), ne()
    }
    if (V.value = !1, w.value = [...y.value], ue.skipTitleConfirm) {
      y.value = [...w.value], S.value = !1, V.value = !0, d.value = "notes", f.value = 50, z.value = 0, C.value = [], ne();
      const _e = y.value.length;
      y.value.forEach((xe, Ce) => {
        setTimeout(async () => {
          await new Promise(Re => setTimeout(Re, 800 + Math.random() * 400)), z.value++, C.value.push({
            id: `${Ce}-${Date.now()}`,
            title: xe,
            originalIndex: Ce
          }), f.value = 50 + Math.floor(z.value / _e * 50), ne(), z.value === _e && (V.value = !1, f.value = 100, ne(), we())
        }, Ce * 200)
      })
    } else S.value = !0;
    ne()
  }, re = async ue => {
    const U = y.value.length,
      de = ue.count || 0;
    if (U >= de) {
      if (V.value = !1, w.value = [...y.value], ue.skipTitleConfirm) {
        y.value = [...w.value], S.value = !1, V.value = !0, d.value = "notes", f.value = 50, z.value = 0, C.value = [], ne();
        const xe = y.value.length;
        y.value.forEach((Ce, Re) => {
          setTimeout(async () => {
            await new Promise(nt => setTimeout(nt, 800 + Math.random() * 400)), z.value++, C.value.push({
              id: `${Re}-${Date.now()}`,
              title: Ce,
              originalIndex: Re
            }), f.value = 50 + Math.floor(z.value / xe * 50), ne(), z.value === xe && (V.value = !1, f.value = 100, ne(), we())
          }, Re * 200)
        })
      } else S.value = !0, f.value = 50;
      ne();
      return
    }
    V.value = !0, d.value = "titles";
    const _e = ue.singleTitle || "自动标题";
    for (let xe = U; xe < de; xe++) {
      await new Promise(Re => setTimeout(Re, 500 + Math.random() * 300));
      const Ce = ue.titleWithEmoji ? ["🔥", "✨", "💡", "🎯", "⭐"][xe % 5] : "";
      y.value.push(`${_e} - ${xe+1}${Ce}`), f.value = Math.floor((xe + 1) / de * 50), ne()
    }
    V.value = !1, w.value = [...y.value], S.value = !0, f.value = 50, ne()
  }, b = () => {
    if (d.value === "notes" && V.value) {
      if (J) {
        Ae();
        return
      }
      const ue = y.value.length;
      y.value.forEach((U, de) => {
        C.value.findIndex(_e => _e.originalIndex === de) === -1 && setTimeout(async () => {
          await new Promise(_e => setTimeout(_e, 800 + Math.random() * 400)), z.value++, C.value.push({
            id: `${de}-${Date.now()}`,
            title: U,
            originalIndex: de
          }), f.value = 50 + Math.floor(z.value / ue * 50), ne(), z.value === ue && (V.value = !1, f.value = 100, ne(), we())
        }, de * 200)
      })
    }
  }, te = async () => {
    const ue = w.value ? w.value.length : y.value.length;
    if (await La.confirm(`确认将为全部 ${ue} 个标题生成图文内容并配图吗？`, "确认生成", {
        confirmButtonText: "确认生成",
        cancelButtonText: "再想想",
        type: "warning"
      }).catch(() => !1)) {
      if (!J) {
        A.error("任务ID不存在，无法确认标题");
        return
      }
      try {
        const de = w.value && w.value.length > 0 ? w.value : y.value;
        await kf(J, de), y.value = [...de], S.value = !1, V.value = !0, d.value = "notes", f.value = 50, z.value = 0, x.value = 0, C.value = [], ne(), Ae(), A.success("标题确认成功，开始生成图文")
      } catch (de) {
        console.error("确认标题失败:", de);
        const _e = (de == null ? void 0 : de.message) || "确认标题失败，请稍后重试";
        A.error(_e)
      }
    }
  }, we = () => {
    try {
      const ue = "taskRecords1";
      try {
        const de = sessionStorage.getItem(ue);
        if (de) {
          let _e = JSON.parse(de);
          const xe = _e.findIndex(Ce => Ce.taskId === J);
          xe >= 0 && (_e[xe].status = "completed", _e[xe].progress = 100, _e[xe].stage = "2/2", sessionStorage.setItem(ue, JSON.stringify(_e)))
        }
      } catch (de) {
        console.error("Failed to update task record:", de)
      }
      const U = `generatingState1_${J}`;
      sessionStorage.removeItem(U)
    } catch (ue) {
      console.error("保存生成记录和作品失败:", ue)
    }
  }, ae = () => {
    if (!J) {
      o.push("/works?filter=task");
      return
    }
    const ue = `/works?filter=task&taskId=${encodeURIComponent(String(J))}&type=batch`;
    o.push(ue).catch(() => {})
  }, me = () => {
    o.push("/user?tab=task_record&subtab=completed")
  }, ce = () => {
    o.push("/generates")
  };
  return Ll(async () => {
    if (document.title = "火兔工具箱_生成中", i.path !== "/generating1" && !i.path.startsWith("/generating1")) return;
    try {
      for (let Ce = sessionStorage.length - 1; Ce >= 0; Ce--) {
        const Re = sessionStorage.key(Ce);
        Re && (Re === "taskRecords1" || Re.startsWith("generatingState1_") || Re.startsWith("isBackFrom_")) && sessionStorage.removeItem(Re)
      }
    } catch {}
    if (await Y(), J && sessionStorage.getItem(`isBackFrom_${J}`) === "true" && (sessionStorage.removeItem(`isBackFrom_${J}`), y.value.length > 0 || C.value.length > 0 || f.value > 0)) return;
    if (f.value === 100 && C.value.length === y.value.length && y.value.length > 0) {
      const Re = JSON.parse(sessionStorage.getItem("generateParams") || "{}").count || 0;
      if (C.value.length < Re, console.warn("检测到状态异常：进度显示100%但任务未真正完成，正在修复状态..."), y.value.length >= Re && Re > 0) {
        d.value = "notes", f.value = 50, V.value = !0, z.value = C.value.length, b();
        return
      }
    }
    const U = `generatingState1_${J}`,
      de = sessionStorage.getItem(U),
      _e = JSON.parse(sessionStorage.getItem("generateParams") || "{}"),
      xe = _e.count || 0;
    if (y.value.length > 0 || w.value.length > 0 || de) {
      if (y.value.length >= xe && xe > 0) {
        d.value === "notes" ? V.value ? b() : C.value.length < y.value.length && (V.value = !0, b()) : C.value.length === 0 ? (w.value = [...y.value], S.value = !0, f.value = 50, V.value = !1, d.value = "titles", ne()) : (V.value = !0, d.value = "notes", f.value = 50 + Math.floor(C.value.length / y.value.length * 50), z.value = C.value.length, S.value = !1, ne(), b());
        return
      } else if (y.value.length > 0 && y.value.length < xe) {
        re(_e);
        return
      } else if (de && y.value.length === 0) {
        V.value || De();
        return
      }
    }!de && y.value.length === 0 && w.value.length === 0 && De(), R = setInterval(() => {
      V.value && ne()
    }, 2e3), J && !O && (f.value === 100 && C.value.length === y.value.length && y.value.length > 0 || Ae())
  }), Zl(() => {
    R && clearInterval(R), F()
  }), (ue, U) => {
    const de = sc,
      _e = cn,
      xe = xl,
      Ce = $l,
      Re = No,
      nt = no;
    return c(), v("div", rL, [e("main", uL, [e("div", cL, [e("div", dL, [e("div", {
      class: Pe(["step-item", {
        active: d.value === "titles" && V.value,
        waiting: d.value === "titles" && !V.value && y.value.length === 0,
        completed: y.value.length > 0 && d.value !== "titles" || S.value || f.value >= 50
      }])
    }, [U[3] || (U[3] = e("div", {
      class: "step-number"
    }, "1", -1)), e("div", vL, h(d.value === "titles" && V.value ? "生成标题中" : y.value.length > 0 && (S.value || d.value === "notes" || f.value >= 50) ? "标题已生成" : "等待生成标题"), 1)], 2), e("div", {
      class: Pe(["step-connector", {
        active: y.value.length > 0 && (S.value || d.value === "notes" || f.value >= 50),
        completed: f.value === 100
      }])
    }, null, 2), e("div", {
      class: Pe(["step-item", {
        waiting: S.value && !V.value,
        active: d.value === "notes" && V.value,
        completed: f.value === 100
      }])
    }, [U[4] || (U[4] = e("div", {
      class: "step-number"
    }, "2", -1)), e("div", mL, h(f.value === 100 ? "图文已生成" : d.value === "notes" && V.value ? "生成图文中" : (S.value && !V.value, "等待生成图文")), 1)], 2)]), e("div", gL, [e("div", fL, [e("span", pL, h(f.value === 100 ? "第二步：图文已全部成功生成" : d.value === "titles" && V.value ? "第一步：正在生成标题..." : y.value.length > 0 && S.value && !V.value ? "第一步：标题已生成完毕，请确定标题，立即生成图文" : d.value === "notes" && V.value ? "第二步：正在生成图文内容..." : "第一步：正在生成标题..."), 1), e("span", yL, h(f.value) + "%", 1)]), a(de, {
      percentage: f.value,
      status: f.value === 100 ? "success" : void 0,
      "stroke-width": 10
    }, null, 8, ["percentage", "status"]), e("div", hL, h(d.value === "titles" ? `已完成 ${y.value.length}/${$.value} 个标题` : `已完成 ${z.value}/${y.value.length} 篇图文${x.value>0?`，失败 ${x.value} 篇`:""}`), 1)]), S.value && y.value.length > 0 ? (c(), v("div", bL, [e("div", wL, [U[5] || (U[5] = e("h3", null, "请确认标题", -1)), e("p", _L, " AI已为您生成 " + h(w.value.length) + " 个标题，您可以考虑是否编辑修改，确认后将开始为每个标题生成对应的图文内容并配图 ", 1)]), e("div", kL, [(c(!0), v(Ue, null, gt(T.value, (tt, qe) => (c(), v("div", {
      key: qe,
      class: "title-item"
    }, [e("div", CL, h(qe + 1), 1), a(_e, {
      modelValue: w.value[qe],
      "onUpdate:modelValue": Me => w.value[qe] = Me,
      placeholder: `标题 ${qe+1}`,
      maxlength: "20",
      "show-word-limit": "",
      class: "title-input"
    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]))), 128)), w.value.length > 5 ? (c(), v("div", AL, [a(xe, {
      type: "primary",
      plain: "",
      size: "small",
      onClick: U[0] || (U[0] = tt => N.value = !N.value),
      class: "expand-btn-small"
    }, {
      default: l(() => [g(h(N.value ? "收起" : "展开全部"), 1)]),
      _: 1
    })])) : M("", !0)]), e("div", IL, [e("div", xL, [a(xe, {
      type: "primary",
      size: "large",
      onClick: te
    }, {
      default: l(() => [...U[6] || (U[6] = [g("确定标题，立即生成图文", -1)])]),
      _: 1
    }), a(Re, {
      content: "确定后，系统将为您生成以上标题对应的图文内容，并带图。",
      placement: "top"
    }, {
      default: l(() => [a(Ce, {
        class: "confirm-help-icon"
      }, {
        default: l(() => [a(P(Ha))]),
        _: 1
      })]),
      _: 1
    })])])])) : M("", !0), f.value === 100 && !S.value && !V.value && (C.value.length > 0 || z.value > 0) ? (c(), v("div", SL, [e("div", EL, [U[12] || (U[12] = e("div", {
      class: "completion-icon"
    }, "✅", -1)), U[13] || (U[13] = e("h3", null, "图文已全部生成完成", -1)), x.value > 0 ? (c(), v("div", TL, [e("p", null, "成功生成 " + h(z.value) + " 篇图文，失败 " + h(x.value) + " 篇", 1)])) : M("", !0), e("div", $L, [e("div", PL, [U[8] || (U[8] = e("span", {
      class: "link-text"
    }, "为您生成的图文已经同步到我的作品，", -1)), a(xe, {
      type: "primary",
      link: "",
      onClick: ae
    }, {
      default: l(() => [...U[7] || (U[7] = [g("点击进入", -1)])]),
      _: 1
    })]), e("div", VL, [U[10] || (U[10] = e("span", {
      class: "link-text"
    }, '您的生成记录可以在"个人中心-任务记录"查看，', -1)), a(xe, {
      type: "primary",
      link: "",
      onClick: me
    }, {
      default: l(() => [...U[9] || (U[9] = [g("点击进入", -1)])]),
      _: 1
    })])]), a(xe, {
      type: "primary",
      onClick: ce,
      class: "back-btn"
    }, {
      default: l(() => [...U[11] || (U[11] = [g("返回批量生成", -1)])]),
      _: 1
    })])])) : M("", !0), V.value ? (c(), v("div", zL, [a(Ce, {
      class: "tip-icon"
    }, {
      default: l(() => [a(P(si))]),
      _: 1
    }), U[14] || (U[14] = e("p", null, '任务正在后台进行，您可以关闭此页面，生成完成后可在"任务记录"中查看结果', -1))])) : M("", !0)])]), a(Wn, {
      modelValue: n.value,
      "onUpdate:modelValue": U[1] || (U[1] = tt => n.value = tt)
    }, null, 8, ["modelValue"]), a(nt, {
      modelValue: s.value,
      "onUpdate:modelValue": U[2] || (U[2] = tt => s.value = tt),
      onLoginSuccess: u
    }, null, 8, ["modelValue"])])
  }
}
