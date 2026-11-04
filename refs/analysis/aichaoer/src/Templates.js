// module: Templates
// extracted from 02-index-8bb27f01.js.js @ 1030747
{
  var Va;
  const o = ln(),
    i = fn(),
    n = p(!1),
    s = p(!1),
    u = p(window.innerWidth <= 768),
    d = p(!1),
    f = p(!!localStorage.getItem("authToken")),
    y = p({}),
    w = p("official"),
    S = p(""),
    z = p(""),
    x = p("全部类目"),
    C = Le(() => x.value === "全部类目"),
    V = Le(() => Q.value === uo || Q.value === "一级类目全部：" ? "选择类目" : re.value !== Qn && re.value !== "二级类目全部：" ? `当前目录：${Q.value}>${re.value}` : Q.value),
    $ = Le(() => {
      const X = b().map(le => le.name);
      return w.value === "mine" ? X.filter(le => le !== "教程类" && le !== "素材类" && le !== "资料类") : X
    }),
    N = X => {
      if (!Array.isArray(X) || X.length === 0) return [];
      Z.value = X;
      const le = new Set;
      return X.forEach(ot => {
        ot.children && Array.isArray(ot.children) && ot.children.forEach(vt => {
          vt.name && le.add(vt.name)
        })
      }), X.map(ot => {
        const bt = (ot.children && Array.isArray(ot.children) && ot.children.length > 0 ? ot.children.map(Jt => Jt.name || "").filter(Jt => Jt) : []).filter(Jt => Jt === "其他" ? le.has("其他") : !0);
        return {
          name: ot.name || "",
          subCategories: bt
        }
      })
    },
    T = p([]),
    R = async () => {
      try {
        const X = await ep();
        T.value = N(X)
      } catch (X) {
        console.error("获取模板类型失败:", X), A.error("获取模板分类失败，请刷新页面重试"), T.value = []
      }
    }, O = p([]), J = p([]), ee = async () => {
      try {
        const X = await tp();
        J.value = X;
        const le = new Set;
        X.forEach(ot => {
          ot.children && Array.isArray(ot.children) && ot.children.forEach(vt => {
            vt.name && le.add(vt.name)
          })
        }), O.value = X.map(ot => {
          const bt = (ot.children && Array.isArray(ot.children) && ot.children.length > 0 ? ot.children.map(Jt => Jt.name || "").filter(Jt => Jt) : []).filter(Jt => Jt === "其他" ? le.has("其他") : !0);
          return {
            name: ot.name || "",
            subCategories: bt
          }
        })
      } catch (X) {
        console.error("获取商品模板类型失败:", X), A.error("获取商品模板分类失败，请刷新页面重试"), O.value = []
      }
    }, ie = p([]), Ae = X => {
      ie.value = Array.isArray(X) ? X : [];
      const le = Array.isArray(X) ? X.filter(vt => vt.type === 0).map(vt => ({
          name: vt.name,
          id: vt.id
        })) : [],
        ot = Array.isArray(X) ? X.filter(vt => vt.type === 1).map(vt => ({
          name: vt.name,
          id: vt.id
        })) : [];
      return [{
        name: "图文模板类",
        subCategories: ["默认", ...le.map(vt => vt.name)]
      }, {
        name: "商品模板类",
        subCategories: ["默认", ...ot.map(vt => vt.name)]
      }]
    }, F = (X, le) => {
      if (X === "默认" || X === "其他") return 0;
      const ot = ie.value.find(vt => vt.name === X && vt.type === le);
      return (ot == null ? void 0 : ot.id) || null
    }, Y = p([{
      name: "图文模板类",
      subCategories: ["默认"]
    }, {
      name: "商品模板类",
      subCategories: ["默认"]
    }]), ne = async () => {
      if (!_l()) {
        Y.value = [{
          name: "图文模板类",
          subCategories: ["默认"]
        }, {
          name: "商品模板类",
          subCategories: ["默认"]
        }];
        return
      }
      try {
        const X = await rp();
        Y.value = Ae(X)
      } catch (X) {
        console.error("获取用户类目列表失败:", X), Y.value = [{
          name: "图文模板类",
          subCategories: ["默认"]
        }, {
          name: "商品模板类",
          subCategories: ["默认"]
        }]
      }
    }, De = Le(() => Y.value.filter(X => X.name === "图文模板类" || X.name === "商品模板类")), Q = p(uo), re = p(Qn), b = (X = w.value) => X === "official" ? T.value : X === "product" ? O.value : X === "ultra" ? T.value : Y.value, te = (X, le = w.value) => b(le).find(ot => ot.name === X), we = (X, le = w.value) => {
      const ot = te(X, le);
      return ot ? ot.subCategories.length === 0 ? le === "mine" ? ["默认"] : [] : [...ot.subCategories] : le === "mine" ? ["默认"] : []
    }, ae = Le(() => {
      if (w.value === "mine") {
        const le = b("mine").map(ot => ot.name);
        return [uo, ...le]
      }
      return [uo, ...b().map(le => le.name)]
    }), me = Le(() => {
      if (Q.value === uo) return [];
      const X = we(Q.value);
      return w.value === "mine" ? [Qn, ...X] : [Qn, ...X]
    }), ce = p(!u.value);
  let ue = null;
  const U = p(null),
    de = p([]),
    _e = p(null),
    xe = p([]),
    Ce = p(!1),
    Re = p(!1),
    nt = p(!1),
    tt = p(!1),
    qe = async () => {
      if (await Da(), U.value && de.value.length > 0) {
        const X = U.value.querySelectorAll(".category-pill:not(.expand-subcategory-btn)");
        if (X.length > 0) {
          const le = X[0],
            ot = X[X.length - 1];
          if (le && ot) {
            const vt = le.getBoundingClientRect().top,
              bt = ot.getBoundingClientRect().top;
            Ce.value = Math.abs(vt - bt) > 5
          } else Ce.value = !1
        } else Ce.value = !1;
        if (!ce.value && Me.value.length > 0) {
          const le = Array.from(X).slice(0, Math.min(X.length, zu));
          if (le.length > 0) {
            const ot = le[0],
              vt = le[le.length - 1];
            if (ot && vt) {
              const bt = ot.getBoundingClientRect().top,
                Jt = vt.getBoundingClientRect().top;
              nt.value = Math.abs(bt - Jt) > 5
            } else nt.value = !1
          } else nt.value = !1
        } else nt.value = !1
      }
      if (_e.value && xe.value.length > 0) {
        const X = _e.value.querySelectorAll(".category-pill:not(.expand-subcategory-btn)");
        if (X.length > 0) {
          const le = X[0],
            ot = X[X.length - 1];
          if (le && ot) {
            const vt = le.getBoundingClientRect().top,
              bt = ot.getBoundingClientRect().top;
            Re.value = Math.abs(vt - bt) > 5
          } else Re.value = !1
        } else Re.value = !1;
        if (!ce.value && Me.value.length > 0) {
          const le = Array.from(X).slice(0, Math.min(X.length, zu));
          if (le.length > 0) {
            const ot = le[0],
              vt = le[le.length - 1];
            if (ot && vt) {
              const bt = ot.getBoundingClientRect().top,
                Jt = vt.getBoundingClientRect().top;
              tt.value = Math.abs(bt - Jt) > 5
            } else tt.value = !1
          } else tt.value = !1
        } else tt.value = !1
      }
    }, Me = Le(() => me.value.length <= zu || ce.value ? me.value : me.value.slice(0, zu)), rt = Le(() => me.value.length > zu), ct = Le(() => Ce.value && ce.value && rt.value), E = Le(() => nt.value && !ce.value && rt.value);
  Le(() => Re.value && ce.value && rt.value), Le(() => tt.value && !ce.value && rt.value);
  const _ = () => {
    ce.value = !ce.value, Da(() => {
      qe()
    })
  };
  oa([Me, ce, me], () => {
    Da(() => {
      qe()
    })
  });
  const je = (X, le, ot = "mine") => {
      const vt = String(le || "").trim();
      if (!vt || vt === Qn) return;
      const bt = b(ot),
        Jt = bt.findIndex(Ca => Ca.name === X);
      if (Jt === -1) return;
      const Ra = bt[Jt];
      if (!Ra.subCategories.includes(vt) && (ot === "mine" && _l() && ne().catch(Ca => {
          console.warn("重新加载用户类目失败:", Ca)
        }), ot === "official" || ot === "product")) {
        const Ca = {
          ...Ra,
          subCategories: [...Ra.subCategories, vt]
        };
        T.value.splice(Jt, 1, Ca)
      }
    },
    K = () => {
      w.value === "official" ? Ie.value.current = 1 : w.value === "product" ? ft.value.current = 1 : w.value === "ultra" ? Yt.value.current = 1 : Ge.value.current = 1
    };
  oa(Q, async (X, le) => {
    X !== le && (re.value = Qn, ce.value = !u.value, u.value && (X === uo ? x.value = "全部类目" : x.value = X), K(), st.value = !1, Ea.value = !1, xt.value = !1, w.value === "official" ? Et(1) : w.value === "product" ? Qe(1) : w.value === "ultra" && Mt(1), await Da(), qe())
  }), oa(re, async () => {
    K(), st.value = !1, xt.value = !1, w.value === "official" ? Et(1) : w.value === "product" ? Qe(1) : w.value === "ultra" ? Mt(1) : w.value === "mine" && dt(1), await Da(), qe()
  });
  const B = X => {
      u.value && We(X === "全部类目" ? uo : X)
    },
    W = () => {
      const X = S.value ? S.value.trim() : "";
      z.value = X, K(), w.value === "official" ? Et(1) : w.value === "product" ? Qe(1) : w.value === "ultra" ? Mt(1) : w.value === "mine" && dt(1)
    },
    Te = () => {
      S.value = "", z.value = "", K()
    };
  oa(w, async () => {
    S.value = "", z.value = "", x.value = "全部类目", Q.value = uo, re.value = Qn, K(), w.value === "official" ? Et(1) : w.value === "product" ? Qe(1) : w.value === "ultra" ? Mt(1) : w.value === "mine" && (await ne(), await dt(1))
  });
  const it = p([]),
    yt = p(!1),
    st = p(!1),
    Ie = p({
      current: 1,
      total: 0,
      total_page: 1,
      page_size: 12
    }),
    pe = p([]),
    Be = p(!1),
    xt = p(!1),
    Yt = p({
      current: 1,
      total: 0,
      total_page: 1,
      page_size: 12
    }),
    Ye = p([]),
    va = p(!1),
    Ea = p(!1),
    ft = p({
      current: 1,
      total: 0,
      total_page: 1,
      page_size: 12
    }),
    Z = p([]),
    pt = (X, le = !0) => {
      if (!X || X === uo || X === "全部类目" || X === Qn) return null;
      const ot = w.value === "product" ? J.value : Z.value;
      if (le) {
        const vt = ot.find(bt => bt.name === X);
        return (vt == null ? void 0 : vt.id) || null
      } else {
        for (const vt of ot)
          if (vt.children && Array.isArray(vt.children)) {
            const bt = vt.children.find(Jt => Jt.name === X);
            if (bt) return bt.id || null
          } return null
      }
    },
    Et = async (X = 1) => {
      if (!yt.value) {
        yt.value = !0;
        try {
          const le = {
            page: X,
            size: 12
          };
          if (Q.value !== uo) {
            const vt = pt(Q.value, !0);
            if (vt && (le.first_id = vt), re.value !== Qn) {
              const bt = pt(re.value, !1);
              bt && (le.second_id = bt)
            }
          }
          z.value && z.value.trim() && (le.title = z.value.trim());
          const ot = await ec(le);
          if (ot && ot.rows && Array.isArray(ot.rows)) {
            const vt = ot.rows.map(bt => ({
              id: bt.id,
              title: bt.title || "",
              cover: bt.images && bt.images.length > 0 ? bt.images[0] : "",
              group: bt.first_name || "",
              category: bt.second_name || "",
              desc: bt.desc || "",
              images: bt.images || [],
              noteType: bt.note_type || "分享",
              wordCount: bt.word_count || "300",
              titleMode: bt.title_mode || "new",
              contentOptions: bt.content_options || [],
              customExtra: bt.custom_extra || {},
              is_add: bt.is_add || 0
            }));
            X === 1 ? it.value = vt : it.value = [...it.value, ...vt], ot.pages && (Ie.value = {
              current: ot.pages.current || X,
              total: ot.pages.total || 0,
              total_page: ot.pages.total_page || 1,
              page_size: ot.pages.page_size || 12
            })
          } else X === 1 && (it.value = [])
        } catch (le) {
          console.error("加载官方模板失败:", le), console.error("错误详情:", le.response || le.message), A.error("加载模板列表失败，请稍后重试"), it.value = []
        } finally {
          yt.value = !1, setTimeout(() => {
            w.value === "official" && Ot.value.length === 0 && !yt.value && (st.value = !0)
          }, 3e3)
        }
      }
    }, Mt = async (X = 1) => {
      if (!Be.value) {
        Be.value = !0;
        try {
          const le = {
            page: X,
            size: 12
          };
          if (Q.value !== uo) {
            const vt = pt(Q.value, !0);
            if (vt && (le.first_id = vt), re.value !== Qn) {
              const bt = pt(re.value, !1);
              bt && (le.second_id = bt)
            }
          }
          z.value && z.value.trim() && (le.title = z.value.trim());
          const ot = await ec(le);
          if (ot && ot.rows && Array.isArray(ot.rows)) {
            const vt = ot.rows.map(bt => ({
              id: bt.id,
              title: bt.title || "",
              cover: bt.images && bt.images.length > 0 ? bt.images[0] : "",
              group: bt.first_name || "",
              category: bt.second_name || "",
              desc: bt.desc || "",
              images: bt.images || [],
              noteType: bt.note_type || "分享",
              wordCount: bt.word_count || "300",
              titleMode: bt.title_mode || "new",
              contentOptions: bt.content_options || [],
              customExtra: bt.custom_extra || {},
              is_add: bt.is_add || 0
            }));
            X === 1 ? pe.value = vt : pe.value = [...pe.value, ...vt], ot.pages && (Yt.value = {
              current: ot.pages.current || X,
              total: ot.pages.total || 0,
              total_page: ot.pages.total_page || 1,
              page_size: ot.pages.page_size || 12
            })
          } else X === 1 && (pe.value = [])
        } catch (le) {
          console.error("加载Ultra模板失败:", le), console.error("错误详情:", le.response || le.message), A.error("加载模板列表失败，请稍后重试"), pe.value = []
        } finally {
          Be.value = !1, setTimeout(() => {
            w.value === "ultra" && Ot.value.length === 0 && !Be.value && (xt.value = !0)
          }, 3e3)
        }
      }
    }, Qe = async (X = 1) => {
      if (!va.value) {
        va.value = !0;
        try {
          const le = {
            page: X,
            size: 12
          };
          if (Q.value !== uo) {
            const vt = pt(Q.value, !0);
            if (vt && (le.first_id = vt), re.value !== Qn) {
              const bt = pt(re.value, !1);
              bt && (le.second_id = bt)
            }
          }
          z.value && z.value.trim() && (le.title = z.value.trim());
          const ot = await ap(le);
          if (ot && ot.rows && Array.isArray(ot.rows)) {
            const vt = ot.rows.map(bt => ({
              id: bt.id,
              title: bt.title || "",
              cover: bt.images && bt.images.length > 0 ? bt.images[0] : "",
              group: bt.first_name || "",
              category: bt.second_name || "",
              desc: bt.desc || "",
              images: bt.images || [],
              noteType: bt.note_type || "分享",
              wordCount: bt.word_count || "300",
              titleMode: bt.title_mode || "new",
              contentOptions: bt.content_options || [],
              customExtra: bt.custom_extra || {},
              is_add: bt.is_add || 0
            }));
            X === 1 ? Ye.value = vt : Ye.value = [...Ye.value, ...vt], ot.pages && (ft.value = {
              current: ot.pages.current || X,
              total: ot.pages.total || 0,
              total_page: ot.pages.total_page || 1,
              page_size: ot.pages.page_size || 12
            })
          } else X === 1 && (Ye.value = [])
        } catch (le) {
          console.error("加载商品模板失败:", le), console.error("错误详情:", le.response || le.message), A.error("加载模板列表失败，请稍后重试"), Ye.value = []
        } finally {
          va.value = !1, setTimeout(() => {
            w.value === "product" && Ot.value.length === 0 && !va.value && (Ea.value = !0)
          }, 3e3)
        }
      }
    }, j = p([]), Ee = p(!1), ht = p(!1), jt = p(!1), ca = p(!1), be = p(null), he = p(null), kt = () => {
      jt.value = !0
    }, Bt = () => {
      ca.value = !0
    }, Ze = p({
      title: "",
      group: "图文模板类",
      category: "默认",
      cover: "",
      note: "",
      noteType: "分享",
      wordCount: "300",
      titleMode: "useKeyword",
      contentOptions: ["addHashtag", "filterBannedWords", "filterMarketingWords"],
      customExtra: {
        industry: "",
        ageMode: "any",
        ageRange: [18, 30],
        targetGroup: "",
        painPoints: "",
        solution: "",
        notes: ""
      }
    }), Wt = p("manual"), aa = p(""), xa = p(!1), Kt = p(""), at = p(!1), Fe = p({
      title: "",
      content: "",
      cover: ""
    });
  Le(() => {
    if (!aa.value || !aa.value.trim()) return !1;
    try {
      const X = new URL(aa.value.trim());
      return !!X.protocol && !!X.host
    } catch {
      return !1
    }
  });
  const Ke = async () => {
    if (!Ip(Jr(y.value))) {
      A.warning("您不是会员，无法使用解析功能");
      return
    }
    if (!aa.value || !aa.value.trim()) {
      Kt.value = "请输入图文链接";
      return
    }
    xa.value = !0, Kt.value = "", at.value = !1;
    try {
      const X = await dp(aa.value.trim()),
        le = (X == null ? void 0 : X.title) || "",
        ot = (X == null ? void 0 : X.desc) || "",
        vt = (X == null ? void 0 : X.images) || [];
      let bt = (vt == null ? void 0 : vt[0]) || "";
      bt && bt.startsWith("//") && (bt = "https:" + bt);
      const Jt = (X == null ? void 0 : X.title_mode) || "useKeyword",
        Ra = (X == null ? void 0 : X.note_type) || "分享",
        Ca = (X == null ? void 0 : X.word_count) || "300",
        Ba = (X == null ? void 0 : X.content_options) || [],
        Qa = (X == null ? void 0 : X.custom_extra) || {};
      Fe.value = {
        title: le,
        content: ot,
        cover: bt
      }, le && (Ze.value.title = le.length > 20 ? le.substring(0, 20) : le), bt && (Ze.value.cover = bt), ot && (Ze.value.note = ot), Jt && (Ze.value.titleMode = Jt === "new" ? "useKeyword" : Jt), Ra && (Ze.value.noteType = Ra), Ca && (Ze.value.wordCount = String(Ca)), Array.isArray(Ba) && Ba.length > 0 && (Ze.value.contentOptions = Ba), Qa && typeof Qa == "object" && (Ze.value.customExtra = {
        industry: Qa.industry || "",
        ageMode: Qa.ageMode || "any",
        ageRange: Qa.ageRange || [18, 30],
        targetGroup: Qa.targetGroup || "",
        painPoints: Qa.painPoints || "",
        solution: Qa.solution || "",
        notes: Qa.notes || ""
      }), at.value = !0, A.success("解析成功！信息已自动填充"), Wt.value = "manual"
    } catch (X) {
      console.error("解析链接失败:", X), Kt.value = (X == null ? void 0 : X.message) || "解析失败，请检查链接是否正确或稍后重试", A.error(Kt.value)
    } finally {
      xa.value = !1
    }
  }, et = () => {
    ht.value = !1, Wt.value = "manual", aa.value = "", xa.value = !1, Kt.value = "", at.value = !1, Fe.value = {
      title: "",
      content: "",
      cover: ""
    }
  }, Nt = () => {
    if (!_l()) {
      s.value = !0;
      return
    }
    Oe("图文模板类"), je("图文模板类", "默认", "mine"), Oe("商品模板类"), je("商品模板类", "默认", "mine");
    const X = localStorage.getItem("templates_create_useCustomExtra"),
      le = ["addHashtag", "filterBannedWords", "filterMarketingWords"];
    X === "true" && !le.includes("customExtra") && le.push("customExtra"), Ze.value = {
      title: "",
      group: "图文模板类",
      category: "默认",
      cover: "",
      note: "",
      noteType: "分享",
      wordCount: "300",
      titleMode: "useKeyword",
      contentOptions: le,
      customExtra: {
        industry: "",
        ageMode: "any",
        ageRange: [18, 30],
        targetGroup: "",
        painPoints: "",
        solution: "",
        notes: ""
      }
    }, Wt.value = "manual", aa.value = "", xa.value = !1, Kt.value = "", at.value = !1, Fe.value = {
      title: "",
      content: "",
      cover: ""
    }, ht.value = !0
  }, Ut = async () => {
    var Qa, rl;
    if (!u.value && !_l()) {
      s.value = !0;
      return
    }
    const X = (Ze.value.title || "").trim();
    if (!X) {
      A.warning("请填写标题");
      return
    }
    if (!Ze.value.cover) {
      A.warning("请上传封面图");
      return
    }
    const le = Ze.value.group || "图文模板类",
      ot = Ze.value.category || "默认",
      vt = le === "图文模板类" ? 0 : le === "商品模板类" ? 1 : 0,
      bt = vt,
      Jt = F(ot, vt);
    Oe(le), je(le, ot);
    const Ra = (Ze.value.note || "").replace(/\[话题\]/g, ""),
      Ba = {
        id: Date.now(),
        title: X,
        cover: Ze.value.cover,
        group: le,
        category: ot,
        note: Ra,
        noteType: Ze.value.noteType,
        wordCount: Ze.value.wordCount,
        titleMode: Ze.value.titleMode,
        contentOptions: Ze.value.contentOptions,
        customExtra: Ze.value.contentOptions.includes("customExtra") ? {
          ...Ze.value.customExtra
        } : void 0
      };
    if (j.value.unshift(Ba), _l()) try {
      const sa = {
        title: X,
        desc: Ra || "",
        images: Ze.value.cover ? [Ze.value.cover] : [],
        note_type: Ze.value.noteType || "分享",
        word_count: Ze.value.wordCount || "300",
        title_mode: Ze.value.titleMode === "useKeyword" ? "old" : "new",
        content_options: Array.isArray(Ze.value.contentOptions) ? Ze.value.contentOptions : [],
        first_id: bt,
        second_id: Jt !== null ? Jt : 0
      };
      Ze.value.contentOptions && Ze.value.contentOptions.includes("customExtra") && Ze.value.customExtra && (sa.custom_extra = {
        industry: Ze.value.customExtra.industry || "",
        ageMode: Ze.value.customExtra.ageMode || "any",
        ageRange: Array.isArray(Ze.value.customExtra.ageRange) ? Ze.value.customExtra.ageRange : [18, 30],
        targetGroup: Ze.value.customExtra.targetGroup || "",
        painPoints: Ze.value.customExtra.painPoints || "",
        solution: Ze.value.customExtra.solution || "",
        notes: Ze.value.customExtra.notes || ""
      }), await Jd(sa)
    } catch (sa) {
      console.error("保存模板到服务器失败:", sa), A.warning("模板已保存到本地，但同步到服务器失败，请稍后重试")
    }
    A.success("模板创建成功"), ht.value = !1, Ze.value = {
      title: "",
      group: ((Qa = Y.value[0]) == null ? void 0 : Qa.name) || "图文模板类",
      category: we(((rl = Y.value[0]) == null ? void 0 : rl.name) || "图文模板类", "mine")[0] || "默认",
      cover: "",
      note: "",
      noteType: "分享",
      wordCount: "300",
      titleMode: "useKeyword",
      contentOptions: ["addHashtag", "filterBannedWords", "filterMarketingWords"],
      customExtra: {
        industry: "",
        ageMode: "any",
        ageRange: [18, 30],
        targetGroup: "",
        painPoints: "",
        solution: "",
        notes: ""
      }
    }
  }, Ge = p({
    current: 1,
    total: 0,
    per_page: 12,
    last_page: 1
  }), dt = async (X = 1) => {
    if (_l()) {
      Ee.value = !0;
      try {
        const le = {
          page: X,
          size: 14
        };
        if (w.value === "mine" && Q.value !== uo) {
          const vt = Q.value;
          if (vt === "图文模板类" ? le.first_id = 0 : vt === "商品模板类" && (le.first_id = 1), re.value !== Qn) {
            const bt = re.value,
              Ra = F(bt, vt === "图文模板类" ? 0 : 1);
            Ra !== null && (le.second_id = Ra)
          }
        }
        z.value && z.value.trim() && (le.title = z.value.trim());
        const ot = await sp(le);
        if (ot && ot.data && Array.isArray(ot.data)) {
          const vt = ot.data.map(bt => {
            const Jt = bt.first_name || "图文模板类",
              Ra = bt.second_name || "默认";
            return {
              id: bt.id || Date.now(),
              title: bt.title || "",
              cover: bt.images && bt.images.length > 0 ? bt.images[0] : "",
              group: Jt,
              category: Ra,
              note: bt.desc || "",
              noteType: bt.note_type || "分享",
              wordCount: bt.word_count || "300",
              titleMode: bt.title_mode === "old" ? "useKeyword" : "new",
              contentOptions: Array.isArray(bt.content_options) ? bt.content_options : ["addHashtag", "filterBannedWords", "filterMarketingWords"],
              customExtra: bt.custom_extra || void 0,
              images: bt.images || []
            }
          });
          X === 1 ? j.value = vt : j.value = [...j.value, ...vt], Ge.value = {
            current: ot.current_page || X,
            total: ot.total || 0,
            per_page: ot.per_page || 12,
            last_page: ot.last_page || 1
          }
        } else X === 1 && (j.value = []), Ge.value = {
          current: 1,
          total: 0,
          per_page: 14,
          last_page: 1
        }
      } catch (le) {
        console.error("从服务器加载模板失败:", le), j.value = [], Ge.value = {
          current: 1,
          total: 0,
          per_page: 14,
          last_page: 1
        }
      } finally {
        Ee.value = !1
      }
    } else j.value = [], Ge.value = {
      current: 1,
      total: 0,
      per_page: 14,
      last_page: 1
    }, Ee.value = !1
  }, qt = p(!1), ka = p(null), Ne = p({
    id: null,
    title: "",
    group: ((Va = Y.value[0]) == null ? void 0 : Va.name) || "图文模板类",
    category: "默认",
    cover: "",
    note: "",
    noteType: "分享",
    wordCount: "300",
    titleMode: "useKeyword",
    contentOptions: ["addHashtag", "filterBannedWords", "filterMarketingWords"],
    customExtra: {
      industry: "",
      ageMode: "any",
      ageRange: [18, 30],
      targetGroup: "",
      painPoints: "",
      solution: "",
      notes: ""
    }
  }), ga = X => {
    var vt;
    ka.value = X.id;
    let le = X.group;
    le && !te(le, "mine") && Oe(le), (!le || !te(le, "mine")) && (le = ((vt = Y.value[0]) == null ? void 0 : vt.name) || "图文模板类");
    const ot = X.category || "默认";
    Oe(le), je(le, ot, "mine"), Ne.value = {
      id: X.id,
      title: X.title,
      group: le,
      category: ot,
      cover: X.cover,
      note: X.note || "",
      noteType: X.noteType || "分享",
      wordCount: X.wordCount || "300",
      titleMode: X.titleMode || "useKeyword",
      contentOptions: Array.isArray(X.contentOptions) ? X.contentOptions : ["addHashtag", "filterBannedWords", "filterMarketingWords"],
      customExtra: X.customExtra ? {
        ...X.customExtra
      } : {
        industry: "",
        ageMode: "any",
        ageRange: [18, 30],
        targetGroup: "",
        painPoints: "",
        solution: "",
        notes: ""
      }
    }, qt.value = !0
  }, St = async () => {
    const X = j.value.findIndex(le => le.id === ka.value);
    if (X !== -1) {
      const le = (Ne.value.note || "").replace(/\[话题\]/g, ""),
        ot = {
          ...Ne.value,
          note: le
        };
      if (j.value[X] = {
          ...j.value[X],
          ...ot
        }, _l()) try {
        const vt = Ne.value.group || "图文模板类",
          bt = Ne.value.category || "默认",
          Jt = vt === "图文模板类" ? 0 : vt === "商品模板类" ? 1 : 0,
          Ra = Jt,
          Ca = F(bt, Jt),
          Ba = {
            id: Ne.value.id,
            title: Ne.value.title || "",
            desc: le || "",
            images: Ne.value.cover ? [Ne.value.cover] : [],
            note_type: Ne.value.noteType || "分享",
            word_count: Ne.value.wordCount || "300",
            title_mode: Ne.value.titleMode === "useKeyword" ? "old" : "new",
            content_options: Array.isArray(Ne.value.contentOptions) ? Ne.value.contentOptions : [],
            first_id: Ra,
            second_id: Ca !== null ? Ca : 0
          };
        Ne.value.contentOptions && Ne.value.contentOptions.includes("customExtra") && Ne.value.customExtra && (Ba.custom_extra = {
          industry: Ne.value.customExtra.industry || "",
          ageMode: Ne.value.customExtra.ageMode || "any",
          ageRange: Array.isArray(Ne.value.customExtra.ageRange) ? Ne.value.customExtra.ageRange : [18, 30],
          targetGroup: Ne.value.customExtra.targetGroup || "",
          painPoints: Ne.value.customExtra.painPoints || "",
          solution: Ne.value.customExtra.solution || "",
          notes: Ne.value.customExtra.notes || ""
        }), await Jd(Ba)
      } catch (vt) {
        console.error("保存模板到服务器失败:", vt), A.warning("模板已保存到本地，但同步到服务器失败，请稍后重试")
      }
    }
    qt.value = !1, await dt(1)
  };
  oa(() => Ze.value.group, X => {
    const le = we(X, "mine");
    le.includes(Ze.value.category) || (Ze.value.category = le[0] || "默认")
  }), oa(() => Ne.value.group, X => {
    const le = we(X, "mine");
    le.includes(Ne.value.category) || (Ne.value.category = le[0] || "默认")
  }), oa(() => {
    var X;
    return ((X = Ze.value.contentOptions) == null ? void 0 : X.slice()) || []
  }, X => {
    X.includes("customExtra") ? localStorage.setItem("templates_create_useCustomExtra", "true") : localStorage.setItem("templates_create_useCustomExtra", "false");
    const vt = ["filterBannedWords", "filterMarketingWords"].filter(bt => !X.includes(bt));
    vt.length > 0 && (Ze.value.contentOptions = [...X, ...vt])
  }), oa(() => {
    var X;
    return ((X = Ne.value.contentOptions) == null ? void 0 : X.slice()) || []
  }, X => {
    X.includes("customExtra") ? localStorage.setItem("templates_edit_useCustomExtra", "true") : localStorage.setItem("templates_edit_useCustomExtra", "false");
    const vt = ["filterBannedWords", "filterMarketingWords"].filter(bt => !X.includes(bt));
    vt.length > 0 && (Ne.value.contentOptions = [...X, ...vt])
  });
  const Oe = X => {
      if (!X || X.trim() === "") return;
      const le = X.trim();
      !Y.value.some(vt => vt.name === le) && _l() && ne().catch(vt => {
        console.warn("重新加载用户类目失败:", vt)
      })
    },
    Ve = X => {
      X && (Oe(X), Ne.value.category && !we(X, "mine").includes(Ne.value.category) && (Ne.value.category = "默认"))
    },
    Ma = X => {
      !X || X === Qn || je(Ze.value.group, X, "mine")
    },
    Je = X => {
      !X || X === Qn || je(Ne.value.group, X, "mine")
    },
    ve = async () => {
      try {
        const le = (await navigator.clipboard.readText() || "").replace(/\[话题\]/g, "");
        Ze.value.note = le
      } catch (X) {
        console.error("粘贴失败:", X), A.warning("粘贴失败，请检查剪贴板权限")
      }
    }, $t = () => {
      Ze.value.note = ""
    }, ta = async () => {
      try {
        if (navigator.clipboard) try {
          const ot = await navigator.clipboard.readText();
          if (ot) {
            aa.value = ot, A.success("粘贴成功");
            return
          } else {
            A.warning("剪贴板为空");
            return
          }
        } catch (ot) {
          console.log("Clipboard API 失败，尝试 execCommand:", ot)
        }
        const X = document.createElement("textarea");
        if (document.body.appendChild(X), X.focus(), X.select(), document.execCommand("paste") && X.value) aa.value = X.value, A.success("粘贴成功");
        else {
          A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
          const ot = document.querySelector(".link-input-with-btn textarea");
          ot && (ot.focus(), ot.select())
        }
        document.body.removeChild(X)
      } catch (X) {
        console.error("粘贴失败:", X), A.warning("粘贴失败，请手动粘贴"), await Da();
        const le = document.querySelector(".link-input-with-btn textarea");
        if (le) {
          le.focus();
          try {
            le.select()
          } catch (ot) {
            console.log("select 失败:", ot)
          }
        }
      }
    }, ha = () => {
      aa.value = "", Kt.value = "", at.value = !1
    }, Qt = async (X, le) => {
      var ot;
      if (!_l()) {
        s.value = !0;
        return
      }
      try {
        const vt = le === "edit" ? Ne.value.group : Ze.value.group,
          bt = j.value.filter(Ca => Ca.group === vt && Ca.category === X);
        bt.length > 0 ? (await La.confirm(`该类目下还有 ${bt.length} 个模板，删除后这些模板的类目将变为"其他"。确定要删除吗？`, "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }), bt.forEach(Ca => {
          Ca.category = "默认"
        })) : await La.confirm(`确定要删除二级类目"${X}"吗？`, "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        const Ra = F(X, vt === "图文模板类" ? 0 : vt === "商品模板类" ? 1 : 0);
        if (!Ra) {
          A.warning("未找到该类目，可能已被删除");
          const Ca = Y.value.findIndex(Ba => Ba.name === vt);
          if (Ca !== -1) {
            const Ba = Y.value[Ca],
              Qa = Ba.subCategories.filter(rl => rl !== X);
            Y.value[Ca] = {
              ...Ba,
              subCategories: Qa
            }
          }
          return
        }
        try {
          await cp(Ra), await ne(), le === "edit" && Ne.value.category === X ? Ne.value.category = "其他" : le === "create" && Ze.value.category === X && (Ze.value.category = "其他"), A.success("删除成功")
        } catch (Ca) {
          console.error("删除类目失败:", Ca);
          const Ba = (Ca == null ? void 0 : Ca.message) || ((ot = Ca == null ? void 0 : Ca.response) == null ? void 0 : ot.msg) || "删除类目失败，请稍后重试";
          A.error(Ba)
        }
      } catch (vt) {
        vt !== "cancel" && console.error("删除类目失败:", vt)
      }
    }, ba = async X => {
      var bt;
      const le = X === "edit" ? Ne.value.group : Ze.value.group,
        ot = Y.value.findIndex(Jt => Jt.name === le);
      if (ot === -1) {
        A.warning("请先选择一级类目");
        return
      }
      const vt = Y.value[ot];
      if (!_l()) {
        s.value = !0;
        return
      }
      try {
        const {
          value: Jt
        } = await La.prompt("请输入新的二级类目名称", "新建类目", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputPattern: /^.+$/,
          inputErrorMessage: "类目名称不能为空"
        }), Ra = String(Jt || "").trim();
        if (!Ra) return;
        if (Ra === Qn) {
          A.warning("该名称不可用");
          return
        }
        if (vt.subCategories.includes(Ra)) {
          A.warning("该类目已存在"), X === "edit" ? Ne.value.category = Ra : Ze.value.category = Ra;
          return
        }
        const Ca = le === "图文模板类" ? 0 : le === "商品模板类" ? 1 : 0;
        try {
          await ip({
            type: Ca,
            name: Ra
          }), await ne(), X === "edit" ? Ne.value.category = Ra : Ze.value.category = Ra, w.value === "mine" && Q.value === le && (ce.value = !0), A.success("创建成功")
        } catch (Ba) {
          console.error("创建类目失败:", Ba);
          const Qa = (Ba == null ? void 0 : Ba.message) || ((bt = Ba == null ? void 0 : Ba.response) == null ? void 0 : bt.msg) || "创建类目失败，请稍后重试";
          A.error(Qa)
        }
      } catch (Jt) {
        Jt !== "cancel" && console.error("创建类目失败:", Jt)
      }
    }, Ja = X => {
      La.confirm("确定要删除这个模板吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        if (_l()) try {
          await up(X.id)
        } catch (le) {
          console.error("从服务器删除模板失败:", le), A.error((le == null ? void 0 : le.message) || "删除模板失败，请重试");
          return
        }
        j.value = j.value.filter(le => le.id !== X.id), A.success("删除成功"), await dt(1)
      }).catch(() => {})
    }, ml = X => {
      if (X && typeof X == "object" && X.is_add !== void 0) return X.is_add === 1;
      const le = typeof X == "object" ? X.id : X;
      return j.value.some(ot => ot.id === le || ot.originalId === le)
    }, $e = async X => {
      if (!u.value && !_l()) {
        s.value = !0;
        return
      }
      if (ml(X)) {
        A.warning('该模板已添加到"我的模板"中');
        return
      }
      if (_l()) try {
        w.value === "product" ? await Ff(X.id) : w.value === "ultra" ? await Wd(X.id) : await Wd(X.id), A.success('已添加到"我的模板"');
        const le = [dt(1)];
        w.value === "official" ? le.push(Et(Ie.value.current || 1)) : w.value === "product" ? le.push(Qe(ft.value.current || 1)) : w.value === "ultra" && le.push(Mt(Yt.value.current || 1)), await Promise.all(le)
      } catch (le) {
        console.error("添加到我的模板失败:", le), A.error((le == null ? void 0 : le.message) || "添加到我的模板失败，请重试")
      } else A.warning("请先登录")
    }, We = X => {
      Q.value = X, re.value = Qn, ce.value = !u.value
    }, ze = X => {
      re.value = X, K(), st.value = !1, Ea.value = !1, xt.value = !1
    }, H = Le(() => w.value === "official" || w.value === "product" || w.value === "ultra" || w.value === "mine" && j.value.length > 0), Lt = X => Q.value === uo ? !0 : X.group === Q.value, Ft = X => Q.value === uo ? !0 : (re.value === Qn || X.category === re.value) && X.group === Q.value, Rt = Le(() => {
      let X = [];
      if (w.value === "official" ? X = it.value : w.value === "product" ? X = Ye.value : w.value === "ultra" ? X = pe.value : X = j.value, z.value) {
        const le = z.value.toLowerCase().trim();
        X = X.filter(ot => ot.title.toLowerCase().includes(le) || ot.group && ot.group.toLowerCase().includes(le) || ot.category && ot.category.toLowerCase().includes(le)), !C.value && x.value && (X = X.filter(ot => ot.group === x.value))
      } else !C.value && x.value && x.value !== "全部类目" ? X = X.filter(le => le.group === x.value) : X = X.filter(le => Lt(le) && Ft(le));
      return X
    }), Ot = Le(() => Rt.value), Xt = Le(() => w.value === "official" ? Ie.value.current < Ie.value.total_page : w.value === "product" ? ft.value.current < ft.value.total_page : w.value === "ultra" ? Yt.value.current < Yt.value.total_page : Ge.value.current < Ge.value.last_page), At = () => {
      if (w.value === "official") {
        const X = Ie.value.current + 1;
        Et(X)
      } else if (w.value === "product") {
        const X = ft.value.current + 1;
        Qe(X)
      } else if (w.value === "ultra") {
        const X = Yt.value.current + 1;
        Mt(X)
      } else {
        const X = Ge.value.current + 1;
        dt(X)
      }
      Da(() => {
        const X = document.querySelector(".load-more-wrapper");
        X && X.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        })
      })
    };
  Le(() => j.value.filter(X => Lt(X) && Ft(X)));
  const pa = p(!1),
    Oa = p({
      title: "",
      content: "",
      tags: [],
      images: [],
      editTime: "",
      comments: [],
      user: {},
      useContainForCover: !1
    }),
    Fa = ["小雨的日常", "阳光宝贝", "小猫咪爱吃鱼", "咖啡不加糖", "午后时光", "星星点灯", "月亮不睡", "爱吃甜食的猫", "周末宅家", "夏日清风", "秋日私语", "冬日暖阳", "春天的风", "夏天的雨", "秋天的叶", "追风少年", "青春无敌", "时光荏苒", "岁月如歌", "梦想家"],
    gl = () => {
      const X = Math.floor(Math.random() * Fa.length);
      return {
        name: Fa[X],
        avatar: `https://picsum.photos/seed/user-${X}-${Date.now()}/40/40`
      }
    },
    jl = X => {
      const le = [`围绕 ${X} 的实用要点整理。

首先是基础准备阶段，这一阶段非常重要，直接决定后续效果。需要准备的物品清单一般包括：必备工具、基础材料、参考资料等。

实际操作时要注意几个关键点：第一是操作顺序，需要按照标准流程来；第二是细节把控，很多问题都出现在细节上；第三是遇到问题要及时调整。

常见经验整理：建议从简单版本开始尝试，逐步提升难度；坚持练习最为重要，熟能生巧。

以上内容为创作参考，可结合实际情况进行补充与调整。`, `${X} 主题的整体介绍。下面从几个方面展开。

首先是理论部分，了解基本原理很重要，这样在实践中才能更好地理解和应用。

然后是实践环节，这里有几个常见技巧：选择合适的时间点、准备充足的材料、注意环境因素、及时记录过程。

最后是一些常见经验：要有耐心，不必急于求成；每一个细节都很重要，需要认真对待。以上内容仅供参考。`, `${X} 这一话题的常见结构整理：

第一部分：基础知识。在开始之前，需要明确几个关键概念，便于后续操作。基础知识包括：核心原理、常见误区、注意事项等。

第二部分：实操步骤参考。一般可分为以下几个步骤：第一步是准备工作，第二步是核心操作，第三步是收尾整理。

第三部分：常见问题整理。实践过程中可能会遇到的问题：材料选择、操作技巧、效果评估等，可逐一对照。

以上为通用框架，可结合实际情况进一步加工。`];
      return le[Math.floor(Math.random() * le.length)]
    },
    en = X => {
      if (!X || typeof X != "string") return [];
      const le = [],
        ot = /#([^#\s\n\r]+)/g;
      let vt;
      for (;
        (vt = ot.exec(X)) !== null;) {
        const bt = vt[1].trim();
        bt && !le.includes(bt) && le.push(bt)
      }
      return le
    },
    fa = X => {
      if (!X || typeof X != "string") return X;
      let le = X.replace(/#[^#\s\n\r]+/g, "");
      return le = le.replace(/\[话题\]/g, ""), le = le.replace(/[ \t]+/g, " "), le = le.replace(/\n{3,}/g, `

`), le = le.split(`
`).map(ot => ot.trim()).join(`
`), le.trim()
    },
    Ka = X => {
      const le = X || [],
        ot = ["实用技巧", "干货分享", "经验总结", "避坑指南", "小白必看", "进阶教程", "实战经验", "个人心得", "原创分享", "良心推荐"],
        vt = [...le],
        bt = 8 - vt.length;
      if (bt > 0) {
        const Jt = ot.sort(() => .5 - Math.random());
        vt.push(...Jt.slice(0, bt))
      }
      return vt.slice(0, Math.min(10, Math.max(5, vt.length)))
    },
    Dl = () => {
      const X = [{
          text: "写的不错，太有用了！",
          replies: "10+"
        }, {
          text: "收藏了，非常实用，感谢分享！",
          replies: "8"
        }, {
          text: "说的很详细，对我帮助很大，点赞！",
          replies: "6"
        }, {
          text: "太棒了，正好需要这个，已经实践了效果很好",
          replies: "12+"
        }, {
          text: "干货满满，学到了很多，谢谢！",
          replies: "5"
        }, {
          text: "写的真好，很有参考价值，已收藏",
          replies: "9"
        }, {
          text: "非常认可，这个思路很清晰，学到了",
          replies: "7"
        }, {
          text: "太有用了，按照这个方法试了试，确实有效",
          replies: "11+"
        }],
        le = new Date,
        ot = le.getFullYear(),
        vt = String(le.getMonth() + 1).padStart(2, "0"),
        bt = String(le.getDate()).padStart(2, "0"),
        Jt = `${ot}-${vt}-${bt}`,
        Ra = [],
        Ca = gl();
      Ra.push({
        user: Ca.name,
        avatar: Ca.avatar,
        text: X[0].text,
        date: Jt,
        pinned: !0,
        replies: X[0].replies
      });
      const Ba = X.slice(1).sort(() => .5 - Math.random());
      for (let Qa = 0; Qa < 2; Qa++) {
        const rl = gl(),
          sa = Ba[Qa];
        Ra.push({
          user: rl.name,
          avatar: rl.avatar,
          text: sa.text,
          date: Jt,
          pinned: !1,
          replies: sa.replies
        })
      }
      return Ra
    },
    tn = X => new Promise(le => {
      const ot = new Image;
      ot.onload = () => {
        const vt = ot.width / ot.height,
          bt = 3 / 4,
          Jt = .05,
          Ra = Math.abs(vt - bt) <= Jt;
        le(Ra)
      }, ot.onerror = () => {
        le(!1)
      }, ot.src = X
    }),
    zt = async X => {
      const le = w.value === "mine" ? "默认" : "其他",
        ot = X.category || le,
        vt = new Date,
        bt = vt.getFullYear(),
        Jt = String(vt.getMonth() + 1).padStart(2, "0"),
        Ra = String(vt.getDate()).padStart(2, "0"),
        Ca = `${bt}-${Jt}-${Ra}`,
        Ba = [];
      let Qa = !1;
      if (X.images && Array.isArray(X.images) && X.images.length > 0) Ba.push(...X.images), !u.value && Ba.length > 0 && (Qa = !await tn(Ba[0]));
      else if (X.cover) {
        u.value || (Qa = !await tn(X.cover)), Ba.push(X.cover);
        for (let Sl = 1; Sl <= 3; Sl++) Ba.push(`https://picsum.photos/seed/template-${X.id}-${Sl}/400/533`)
      }
      let rl = gl();
      y.value && (y.value.nickname || y.value.avatar) && (rl = {
        name: y.value.nickname || rl.name,
        avatar: y.value.avatar || Xl || rl.avatar
      });
      const sa = Dl();
      let Ga = "",
        ol = [];
      if (w.value === "mine" && X.note ? (ol = en(X.note), Ga = fa(X.note)) : w.value === "mine" && !X.note ? (Ga = "", ol = []) : (w.value === "official" || w.value === "product") && X.desc ? (ol = en(X.desc), Ga = fa(X.desc)) : (Ga = jl(X.title), ol = Ka(Pa[ot] || Pa.其他)), u.value) {
        const Sl = new URLSearchParams;
        X.title && Sl.append("title", encodeURIComponent(X.title)), Ga && Sl.append("content", encodeURIComponent(Ga)), Ba && Ba.length > 0 && Sl.append("images", encodeURIComponent(JSON.stringify(Ba))), ol && ol.length > 0 && Sl.append("tags", encodeURIComponent(JSON.stringify(ol))), Sl.append("template", encodeURIComponent(JSON.stringify(X))), o.push(`/yulanm2?${Sl.toString()}`);
        return
      }
      Oa.value = {
        title: X.title,
        content: Ga,
        tags: ol,
        images: Ba,
        editTime: Ca,
        comments: sa,
        user: rl,
        useContainForCover: Qa
      }, pa.value = !0
    }, dl = X => {
      if (!u.value && !_l()) {
        s.value = !0;
        return
      }
      let le = X.titleMode || "useKeyword";
      le === "aiGenerate" && (le = "aiNew");
      let ot = Array.isArray(X.contentOptions) ? [...X.contentOptions] : [];
      const vt = ot.indexOf("addCTA");
      vt !== -1 && (ot[vt] = "addTags"), ["filterBannedWords", "filterMarketingWords"].forEach(Jt => {
        ot.includes(Jt) || ot.push(Jt)
      }), o.push({
        path: "/generate",
        query: {
          title: X.title,
          templateId: String(X.id),
          group: X.group || "",
          category: X.category || "默认",
          noteType: X.noteType || "分享",
          wordCount: X.wordCount || "300",
          titleMode: le,
          contentOptions: JSON.stringify(ot),
          customExtra: X.customExtra ? JSON.stringify(X.customExtra) : ""
        }
      })
    }, Nl = X => {
      if (!u.value && !_l()) {
        s.value = !0;
        return
      }
      let le = X.titleMode || "useKeyword";
      le === "aiGenerate" && (le = "aiNew");
      let ot = Array.isArray(X.contentOptions) ? [...X.contentOptions] : [];
      const vt = ot.indexOf("addCTA");
      vt !== -1 && (ot[vt] = "addTags"), ["filterBannedWords", "filterMarketingWords"].forEach(Jt => {
        ot.includes(Jt) || ot.push(Jt)
      }), o.push({
        path: "/generates",
        query: {
          title: X.title,
          templateId: String(X.id),
          group: X.group || "",
          category: X.category || "默认",
          noteType: X.noteType || "分享",
          wordCount: X.wordCount || "300",
          titleMode: le,
          contentOptions: JSON.stringify(ot),
          customExtra: X.customExtra ? JSON.stringify(X.customExtra) : ""
        }
      })
    }, kn = X => {
      if (!u.value && !_l()) {
        s.value = !0;
        return
      }
      const le = X.desc || X.note || "";
      let ot = [];
      X.images && Array.isArray(X.images) && X.images.length > 0 ? ot = X.images.filter(Qa => Qa && Qa.trim()) : X.cover && (ot = [X.cover]);
      let vt = X.titleMode || "useKeyword";
      vt === "aiGenerate" && (vt = "aiNew");
      let bt = Array.isArray(X.contentOptions) ? [...X.contentOptions] : [];
      const Jt = bt.indexOf("addCTA");
      Jt !== -1 && (bt[Jt] = "addTags"), ["filterBannedWords", "filterMarketingWords"].forEach(Qa => {
        bt.includes(Qa) || bt.push(Qa)
      });
      const Ca = {
          templateId: String(X.id),
          title: X.title || "",
          content: le,
          images: ot,
          noteType: X.noteType || "分享",
          wordCount: X.wordCount || "300",
          titleMode: vt,
          contentOptions: bt,
          customExtra: X.customExtra || {}
        },
        Ba = `template_copy_${X.id}_${Date.now()}`;
      try {
        sessionStorage.setItem(Ba, JSON.stringify(Ca)), sessionStorage.setItem(`${Ba}_expires`, String(Date.now() + 5 * 60 * 1e3))
      } catch (Qa) {
        console.error("存储模板数据失败:", Qa), A.error("数据过大，无法传递模板数据");
        return
      }
      o.push({
        path: "/aicopy",
        query: {
          templateKey: Ba
        }
      })
    }, Cn = X => {
      if (!u.value && !_l()) {
        s.value = !0;
        return
      }
      let le = "";
      X.cover ? le = X.cover : X.images && Array.isArray(X.images) && X.images.length > 0 && (le = X.images[0]);
      const ot = X.title || "",
        vt = {
          image: le,
          title: ot,
          timestamp: Date.now()
        },
        bt = `ultra_quick_copy_${Date.now()}`;
      try {
        sessionStorage.setItem(bt, JSON.stringify(vt)), sessionStorage.setItem(`${bt}_expires`, String(Date.now() + 5 * 60 * 1e3))
      } catch (Jt) {
        console.error("存储Ultra同款数据失败:", Jt), A.error("数据过大，无法传递模板数据");
        return
      }
      o.push({
        path: "/yijuhua",
        query: {
          quickCopy: bt
        }
      })
    }, ll = async () => {
      var X;
      try {
        const le = localStorage.getItem("authToken");
        if (le && le.trim()) try {
          const ot = await zl();
          ot ? (y.value = {
            ...ot,
            nickname: ot.nickname || ot.nickName || "用户",
            avatar: ot.avatar || ot.avatarUrl || ""
          }, f.value = !0) : (y.value = {}, f.value = !1)
        } catch (ot) {
          if ((ot == null ? void 0 : ot.code) === 999 || ((X = ot == null ? void 0 : ot.response) == null ? void 0 : X.code) === 999) {
            console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), y.value = {}, f.value = !1;
            return
          }
          console.error("获取用户信息失败:", ot), y.value = {}, f.value = !1
        } else y.value = {}, f.value = !1
      } catch (le) {
        console.error("检查登录状态失败:", le), f.value = !1, y.value = {}
      }
    }, Ul = () => {
      const X = u.value;
      if (u.value = window.innerWidth <= 768, X !== u.value) {
        ce.value = !u.value;
        const le = document.querySelector(".main-content");
        u.value ? le ? le.addEventListener("scroll", $n) : window.addEventListener("scroll", $n) : (d.value = !1, le ? le.removeEventListener("scroll", $n) : window.removeEventListener("scroll", $n))
      }
    }, _l = () => !!localStorage.getItem("authToken"), Tn = () => {
      if (!_l()) {
        s.value = !0;
        return
      }
      n.value = !0
    }, Dn = X => {
      X === "profile" ? (o.push("/user"), Sa.value = !1) : X === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : X === "recharge" ? (Tn(), Sa.value = !1) : X === "logout" && (ui(), ll(), Sa.value = !1)
    }, An = async X => {
      y.value = X, f.value = !0, s.value = !1, A.success("登录成功"), await ll(), await dt()
    }, dn = () => {
      const X = document.querySelector(".main-content");
      X ? X.scrollTo({
        top: 0,
        behavior: "smooth"
      }) : window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, $n = () => {
      if (!u.value) {
        d.value = !1;
        return
      }
      const X = document.querySelector(".main-content");
      X ? d.value = X.scrollTop > 200 : d.value = window.scrollY > 200
    };
  Ll(async () => {
    document.title = "火兔工具箱_文案模板", localStorage.getItem("templates_create_useCustomExtra") === "true" && !Ze.value.contentOptions.includes("customExtra") && Ze.value.contentOptions.push("customExtra"), localStorage.getItem("templates_edit_useCustomExtra") === "true" && !Ne.value.contentOptions.includes("customExtra") && Ne.value.contentOptions.push("customExtra"), Ul(), st.value = !1, Ea.value = !1, xt.value = !1, i.query.source === "ultra" ? (w.value = "ultra", o.replace({
      path: "/templates"
    })) : i.query.source === "product" ? (w.value = "product", o.replace({
      path: "/templates"
    })) : i.query.source === "mine" ? (w.value = "mine", o.replace({
      path: "/templates"
    })) : i.query.source === "official" && (w.value = "official", o.replace({
      path: "/templates"
    }));
    let ot;
    if (w.value === "official" ? ot = Et(1) : w.value === "product" ? ot = Qe(1) : w.value === "ultra" ? ot = Mt(1) : w.value === "mine" ? (await ll(), await ne(), ot = dt(1)) : ot = Et(1), w.value !== "mine" ? (await Promise.all([R(), ee(), ll(), ot]), ne().catch(vt => {
        console.error("加载用户类目失败:", vt)
      })) : (await ot, Promise.all([R(), ee()]).catch(vt => {
        console.error("加载分类数据失败:", vt)
      })), window.addEventListener("resize", Ul), window.addEventListener("user-logout", ll), window.addEventListener("user-login-success", async () => {
        await ll(), await ne(), await Promise.all([Et(1), Qe(1), dt(1)])
      }), u.value) {
      const vt = document.querySelector(".main-content");
      vt ? vt.addEventListener("scroll", $n) : window.addEventListener("scroll", $n)
    }
    await Da(), qe(), ue = () => {
      qe()
    }, window.addEventListener("resize", ue)
  }), Zl(() => {
    window.removeEventListener("resize", Ul), window.removeEventListener("user-logout", ll), window.removeEventListener("user-login-success", ll), ue && window.removeEventListener("resize", ue);
    const X = document.querySelector(".main-content");
    X ? X.removeEventListener("scroll", $n) : window.removeEventListener("scroll", $n)
  });
  const Xe = (X, le) => String(X).length > le ? String(X).slice(0, le) : String(X),
    se = X => Xe(X.title, 20),
    Tt = p(!1),
    Ht = async (X, le) => {
      const ot = X.raw;
      if (!ot) return;
      if (!ot.type.startsWith("image/")) {
        A.warning("请上传图片文件");
        return
      }
      if (ot.size > 10 * 1024 * 1024) {
        uk("图片体积超过 10MB，请压缩后重新上传");
        return
      }
      let vt = ot;
      if (Yo(ot)) try {
        vt = await _i(ot), A.info("HEIC 格式已转换为 JPEG")
      } catch (Jt) {
        console.error("HEIC 处理失败:", Jt), A.error(Jt.message || "HEIC 格式暂不支持，请先将图片转换为 JPEG 或 PNG 格式");
        return
      }
      const bt = new FileReader;
      bt.onload = () => {
        le.cover = String(bt.result)
      }, bt.readAsDataURL(vt), Tt.value = !0;
      try {
        const Jt = await ao(vt),
          Ra = typeof Jt == "string" ? Jt : (Jt == null ? void 0 : Jt.url) || (Jt == null ? void 0 : Jt.data) || (Jt == null ? void 0 : Jt[0]) || Jt;
        if (!Ra) throw new Error("上传失败，未返回图片地址");
        le.cover = Ra, A.success("封面图上传成功")
      } catch (Jt) {
        console.error("封面图上传失败:", Jt), A.error((Jt == null ? void 0 : Jt.message) || "封面图上传失败，请重试")
      } finally {
        Tt.value = !1
      }
    }, Pa = {
      运营教程: ["运营策略", "转化提升", "玩法拆解"],
      技能训练: ["实战练习", "技巧提升", "经验总结"],
      课程图文: ["课堂图文", "学习记录", "要点整理"],
      实操演练: ["动手实践", "流程拆解", "步骤提示"],
      策划方案: ["活动策划", "执行计划", "目标拆解"],
      文案合集: ["文案灵感", "脚本参考", "金句摘录"],
      数据报告: ["数据洞察", "指标分析", "复盘总结"],
      行业洞察: ["趋势分析", "市场洞察", "增长机会"],
      封面模板: ["视觉设计", "封面灵感", "排版参考"],
      排版素材: ["排版技巧", "样式参考", "元素搭配"],
      海报设计: ["海报创意", "配色方案", "版式设计"],
      图标素材: ["图标设计", "UI素材", "视觉元素"],
      其他: ["热门话题", "灵感收藏"]
    };
  return (X, le) => {
    const ot = jr,
      vt = Kn,
      bt = $l,
      Jt = xl,
      Ra = cn,
      Ca = Oo,
      Ba = Bo,
      Qa = No,
      rl = yo,
      sa = Fn("Loading"),
      Ga = oc,
      ol = bo,
      Sl = ho,
      In = rs,
      wo = Vo,
      nn = Ii,
      Pn = Gg,
      Gn = xi,
      co = Rl;
    return c(), v("div", MQ, [a(ei, {
      title: "文案模板",
      "is-logged-in": f.value,
      "user-info": y.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: le[0] || (le[0] = Pt => Sa.value = !0),
      onLoginClick: le[1] || (le[1] = Pt => s.value = !0),
      onCommand: Dn
    }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), u.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: le[2] || (le[2] = Pt => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": u.value
      }])
    }, [u.value ? M("", !0) : (c(), v("div", OQ, "文案模板")), e("div", BQ, [a(vt, {
      modelValue: w.value,
      "onUpdate:modelValue": le[3] || (le[3] = Pt => w.value = Pt),
      size: "small"
    }, {
      default: l(() => [a(ot, {
        value: "official"
      }, {
        default: l(() => [...le[42] || (le[42] = [g("官方模板", -1)])]),
        _: 1
      }), a(ot, {
        value: "product"
      }, {
        default: l(() => [...le[43] || (le[43] = [g("商品模板", -1)])]),
        _: 1
      }), a(ot, {
        value: "ultra"
      }, {
        default: l(() => [...le[44] || (le[44] = [g("Ultra模板", -1)])]),
        _: 1
      }), a(ot, {
        value: "mine"
      }, {
        default: l(() => [...le[45] || (le[45] = [g("我的模板", -1)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), w.value === "mine" ? (c(), ye(Jt, {
      key: 0,
      circle: "",
      size: "small",
      class: "ml-2 create-btn",
      onClick: Nt,
      title: "新建模板"
    }, {
      default: l(() => [a(bt, null, {
        default: l(() => [a(P(Ql))]),
        _: 1
      })]),
      _: 1
    })) : M("", !0), e("div", NQ, [a(Ra, {
      modelValue: S.value,
      "onUpdate:modelValue": le[4] || (le[4] = Pt => S.value = Pt),
      placeholder: "搜索关键词",
      clearable: "",
      size: "small",
      class: "template-search-input",
      onKeyup: gn(W, ["enter"]),
      onClear: Te
    }, {
      prefix: l(() => [a(bt, null, {
        default: l(() => [a(P(Ai))]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), e("div", UQ, [a(Ba, {
      modelValue: x.value,
      "onUpdate:modelValue": le[5] || (le[5] = Pt => x.value = Pt),
      size: "small",
      class: "search-scope-select",
      placeholder: "选择类目",
      onChange: B
    }, {
      prefix: l(() => [e("span", RQ, h(V.value), 1)]),
      default: l(() => [a(Ca, {
        label: "全部类目",
        value: "全部类目"
      }), (c(!0), v(Ue, null, gt($.value, Pt => (c(), ye(Ca, {
        key: Pt,
        label: Pt,
        value: Pt
      }, null, 8, ["label", "value"]))), 128))]),
      _: 1
    }, 8, ["modelValue"]), a(Jt, {
      type: "primary",
      size: "small",
      class: "search-all-btn",
      onClick: W
    }, {
      default: l(() => [...le[46] || (le[46] = [g(" 搜索 ", -1)])]),
      _: 1
    })])])]), H.value && !u.value ? (c(), v("div", jQ, [e("div", qQ, [(c(!0), v(Ue, null, gt(ae.value, Pt => (c(), ye(Jt, {
      key: Pt,
      size: "small",
      class: Pe(["category-pill", {
        "is-active-group": Pt === Q.value
      }]),
      onClick: yl => We(Pt)
    }, {
      default: l(() => [g(h(Pt), 1)]),
      _: 2
    }, 1032, ["class", "onClick"]))), 128))]), me.value.length > 0 ? (c(), v("div", FQ)) : M("", !0), me.value.length > 0 ? (c(), v("div", {
      key: 1,
      class: "category-row",
      ref_key: "categoryRowRef",
      ref: U
    }, [(c(!0), v(Ue, null, gt(Me.value, (Pt, yl) => (c(), ye(Jt, {
      key: `${Q.value}-${Pt}`,
      ref_for: !0,
      ref: Mn => {
        Mn && (de.value[yl] = Mn)
      },
      type: Pt === re.value ? "primary" : "default",
      size: "small",
      class: "category-pill",
      onClick: Mn => ze(Pt)
    }, {
      default: l(() => [g(h(Pt), 1)]),
      _: 2
    }, 1032, ["type", "onClick"]))), 128)), ct.value ? (c(), ye(Jt, {
      key: 0,
      size: "small",
      class: "category-pill expand-subcategory-btn collapse-btn",
      onClick: _
    }, {
      default: l(() => [le[47] || (le[47] = g(" 收起类目 ", -1)), a(bt, null, {
        default: l(() => [a(P(Qy))]),
        _: 1
      })]),
      _: 1
    })) : M("", !0), E.value ? (c(), ye(Jt, {
      key: 1,
      size: "small",
      class: "category-pill expand-subcategory-btn",
      onClick: _
    }, {
      default: l(() => [le[48] || (le[48] = g(" 展开更多类目 ", -1)), a(bt, null, {
        default: l(() => [a(P(jn))]),
        _: 1
      })]),
      _: 1
    })) : M("", !0)], 512)) : M("", !0)])) : M("", !0), u.value && H.value && Q.value !== uo && me.value.length > 0 && re.value === Qn ? (c(), v("div", WQ, [e("div", {
      class: "category-row",
      ref_key: "mobileCategoryRowRef",
      ref: _e
    }, [(c(!0), v(Ue, null, gt(Me.value, (Pt, yl) => (c(), ye(Jt, {
      key: `${Q.value}-${Pt}`,
      ref_for: !0,
      ref: Mn => {
        Mn && (xe.value[yl] = Mn)
      },
      type: Pt === re.value ? "primary" : "default",
      size: "small",
      class: "category-pill",
      onClick: Mn => ze(Pt)
    }, {
      default: l(() => [g(h(Pt), 1)]),
      _: 2
    }, 1032, ["type", "onClick"]))), 128))], 512)])) : M("", !0), H.value ? (c(), v("div", GQ)) : M("", !0), w.value === "official" || w.value === "product" || w.value === "ultra" ? (c(), v("div", JQ, [w.value === "official" && yt.value || w.value === "product" && va.value || w.value === "ultra" && Be.value ? (c(), v("div", HQ, "模板加载中...")) : w.value === "official" && Ot.value.length === 0 && st.value ? (c(), v("div", QQ, "未找到匹配的模板")) : w.value === "product" && Ot.value.length === 0 && Ea.value ? (c(), v("div", KQ, "未找到匹配的模板")) : w.value === "ultra" && Ot.value.length === 0 && xt.value ? (c(), v("div", YQ, "未找到匹配的模板")) : M("", !0), (c(!0), v(Ue, null, gt(Ot.value, Pt => (c(), v("div", {
      key: Pt.id,
      class: "template-card"
    }, [e("div", XQ, [e("img", {
      src: Pt.cover,
      class: "cover-img"
    }, null, 8, ZQ), Pt.category ? (c(), v("div", eK, h(Pt.category), 1)) : M("", !0), e("div", {
      class: "cover-overlay",
      onClick: yl => zt(Pt)
    }, [w.value === "ultra" ? (c(), v("div", {
      key: 0,
      class: "ultra-image-buttons",
      onClick: le[6] || (le[6] = lt(() => {}, ["stop"]))
    }, [e("button", {
      class: "ultra-view-button",
      onClick: lt(yl => zt(Pt), ["stop"])
    }, "查看案例", 8, aK), e("button", {
      class: "ultra-quick-copy-btn",
      onClick: lt(yl => Cn(Pt), ["stop"])
    }, "一键同款", 8, lK)])) : (c(), v("span", nK, "查看案例"))], 8, tK), e("div", oK, [a(Qa, {
      content: ml(Pt) ? "此模板已收藏过了" : "加到我的模板",
      placement: "top"
    }, {
      default: l(() => [a(Jt, {
        size: "small",
        type: "primary",
        class: "add-to-mine-btn",
        onClick: lt(yl => $e(Pt), ["stop"]),
        disabled: ml(Pt),
        circle: ""
      }, {
        default: l(() => [a(bt, null, {
          default: l(() => [ml(Pt) ? (c(), ye(P(R_), {
            key: 0
          })) : (c(), ye(P(Xo), {
            key: 1
          }))]),
          _: 2
        }, 1024)]),
        _: 2
      }, 1032, ["onClick", "disabled"])]),
      _: 2
    }, 1032, ["content"]), a(Qa, {
      content: "AI灵感参考",
      placement: "bottom"
    }, {
      default: l(() => [a(Jt, {
        size: "small",
        class: "copy-template-btn",
        onClick: lt(yl => kn(Pt), ["stop"]),
        circle: ""
      }, {
        default: l(() => [...le[49] || (le[49] = [g(" 仿 ", -1)])]),
        _: 1
      }, 8, ["onClick"])]),
      _: 2
    }, 1024)])]), e("div", {
      class: "template-title",
      title: se(Pt)
    }, h(se(Pt)), 9, iK), e("div", sK, [a(Jt, {
      size: "small",
      class: "btn-red",
      onClick: yl => dl(Pt)
    }, {
      default: l(() => [...le[50] || (le[50] = [g("单篇生成", -1)])]),
      _: 1
    }, 8, ["onClick"]), a(Jt, {
      size: "small",
      class: "btn-blue",
      onClick: yl => Nl(Pt)
    }, {
      default: l(() => [...le[51] || (le[51] = [g("批量生成", -1)])]),
      _: 1
    }, 8, ["onClick"])])]))), 128))])) : (c(), v("div", rK, [j.value.length === 0 && !z.value ? (c(), v("div", uK, [e("div", {
      class: "empty-mine-content",
      onClick: Nt
    }, [a(bt, {
      class: "empty-mine-icon"
    }, {
      default: l(() => [a(P(Ql))]),
      _: 1
    }), le[53] || (le[53] = e("div", {
      class: "empty-mine-text"
    }, "暂无自建模板", -1)), e("div", cK, [u.value ? (c(), v("span", vK, "点击右上方")) : (c(), v("span", dK, "点击左上方")), a(Jt, {
      circle: "",
      size: "small",
      class: "ml-2 create-btn empty-create-btn",
      onClick: lt(Nt, ["stop"]),
      title: "新建模板"
    }, {
      default: l(() => [a(bt, null, {
        default: l(() => [a(P(Ql))]),
        _: 1
      })]),
      _: 1
    }), le[52] || (le[52] = e("span", null, "号创建吧～", -1))])])])) : Ee.value ? (c(), v("div", mK, "模板加载中...")) : Ot.value.length === 0 ? (c(), v("div", gK, "未找到匹配的模板")) : M("", !0), (c(!0), v(Ue, null, gt(Ot.value, Pt => (c(), v("div", {
      key: Pt.id,
      class: "template-card mine-card"
    }, [e("div", fK, [e("img", {
      src: Pt.cover,
      class: "cover-img"
    }, null, 8, pK), e("div", {
      class: "cover-overlay",
      onClick: yl => zt(Pt)
    }, [...le[54] || (le[54] = [e("span", {
      class: "preview-text"
    }, "模板图文预览", -1)])], 8, yK), Pt.category ? (c(), v("div", hK, h(Pt.category), 1)) : M("", !0), e("div", bK, [e("div", wK, [a(Qa, {
      content: "编辑",
      placement: "top"
    }, {
      default: l(() => [a(bt, {
        class: "op-icon",
        onClick: lt(yl => ga(Pt), ["stop"])
      }, {
        default: l(() => [a(P(qn))]),
        _: 1
      }, 8, ["onClick"])]),
      _: 2
    }, 1024), a(Qa, {
      content: "删除",
      placement: "top"
    }, {
      default: l(() => [a(bt, {
        class: "op-icon danger",
        onClick: lt(yl => Ja(Pt), ["stop"])
      }, {
        default: l(() => [a(P(zn))]),
        _: 1
      }, 8, ["onClick"])]),
      _: 2
    }, 1024)]), a(Qa, {
      content: "AI灵感参考",
      placement: "bottom"
    }, {
      default: l(() => [a(Jt, {
        size: "small",
        class: "copy-template-btn",
        onClick: lt(yl => kn(Pt), ["stop"]),
        circle: ""
      }, {
        default: l(() => [...le[55] || (le[55] = [g(" 仿 ", -1)])]),
        _: 1
      }, 8, ["onClick"])]),
      _: 2
    }, 1024)])]), e("div", {
      class: "template-title",
      title: Xe(Pt.title, 20)
    }, h(Xe(Pt.title, 20)), 9, _K), e("div", kK, [a(Jt, {
      size: "small",
      class: "btn-red",
      onClick: yl => dl(Pt)
    }, {
      default: l(() => [...le[56] || (le[56] = [g("单篇生成", -1)])]),
      _: 1
    }, 8, ["onClick"]), a(Jt, {
      size: "small",
      class: "btn-blue",
      onClick: yl => Nl(Pt)
    }, {
      default: l(() => [...le[57] || (le[57] = [g("批量生成", -1)])]),
      _: 1
    }, 8, ["onClick"])])]))), 128))])), Xt.value ? (c(), v("div", CK, [a(Jt, {
      class: "load-more-btn",
      onClick: At,
      loading: w.value === "official" && yt.value || w.value === "product" && va.value || w.value === "ultra" && Be.value
    }, {
      default: l(() => [...le[58] || (le[58] = [g("加载更多", -1)])]),
      _: 1
    }, 8, ["loading"])])) : M("", !0)], 2), a(Hr, {
      modelValue: pa.value,
      "onUpdate:modelValue": le[7] || (le[7] = Pt => pa.value = Pt),
      "is-mobile": u.value,
      data: Oa.value,
      title: "模板图文预览"
    }, {
      header: l(() => [...le[59] || (le[59] = [e("span", null, [g("模板图文预览"), e("span", {
        class: "preview-title-hint"
      }, "（此模板已预设提示词）")], -1)])]),
      _: 1
    }, 8, ["modelValue", "is-mobile", "data"]), a(co, {
      modelValue: ht.value,
      "onUpdate:modelValue": le[22] || (le[22] = Pt => ht.value = Pt),
      title: "新建模板",
      width: u.value ? "90%" : "720px",
      class: "create-template-dialog",
      "close-on-click-modal": !1,
      center: ""
    }, {
      footer: l(() => [a(Jt, {
        onClick: et
      }, {
        default: l(() => [...le[78] || (le[78] = [g("取消", -1)])]),
        _: 1
      }), a(Jt, {
        type: "primary",
        onClick: Ut,
        disabled: Wt.value === "link" && !at.value
      }, {
        default: l(() => [...le[79] || (le[79] = [g("保存", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      default: l(() => [a(Gn, {
        modelValue: Wt.value,
        "onUpdate:modelValue": le[21] || (le[21] = Pt => Wt.value = Pt),
        class: "create-mode-tabs"
      }, {
        default: l(() => [a(nn, {
          label: "手动创建",
          name: "manual"
        }, {
          default: l(() => [a(wo, {
            "label-width": u.value ? "80px" : "140px"
          }, {
            default: l(() => [a(rl, {
              label: "标题"
            }, {
              default: l(() => [a(Ra, {
                modelValue: Ze.value.title,
                "onUpdate:modelValue": le[8] || (le[8] = Pt => Ze.value.title = Pt),
                maxlength: "20",
                "show-word-limit": "",
                placeholder: "不超过20字"
              }, null, 8, ["modelValue"])]),
              _: 1
            }), a(rl, {
              label: "一级类目"
            }, {
              default: l(() => [a(Ba, {
                modelValue: Ze.value.group,
                "onUpdate:modelValue": le[9] || (le[9] = Pt => Ze.value.group = Pt),
                placeholder: "请选择大类"
              }, {
                default: l(() => [(c(!0), v(Ue, null, gt(De.value, Pt => (c(), ye(Ca, {
                  key: Pt.name,
                  label: Pt.name,
                  value: Pt.name
                }, null, 8, ["label", "value"]))), 128))]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), a(rl, {
              label: "二级类目"
            }, {
              default: l(() => [e("div", AK, [a(Ba, {
                modelValue: Ze.value.category,
                "onUpdate:modelValue": le[10] || (le[10] = Pt => Ze.value.category = Pt),
                placeholder: "请选择二级类目",
                filterable: "",
                "allow-create": "",
                "default-first-option": "",
                onChange: Ma,
                class: "subcategory-select-with-delete"
              }, {
                default: l(() => [(c(!0), v(Ue, null, gt(we(Ze.value.group, "mine"), Pt => (c(), ye(Ca, {
                  key: Pt,
                  label: Pt,
                  value: Pt
                }, {
                  default: l(() => [e("span", IK, [e("span", xK, h(Pt), 1), Pt !== "默认" ? (c(), ye(bt, {
                    key: 0,
                    class: "subcategory-delete-icon",
                    onClick: lt(yl => Qt(Pt, "create"), ["stop"])
                  }, {
                    default: l(() => [a(P(zn))]),
                    _: 1
                  }, 8, ["onClick"])) : M("", !0)])]),
                  _: 2
                }, 1032, ["label", "value"]))), 128))]),
                _: 1
              }, 8, ["modelValue"]), a(Jt, {
                size: "small",
                type: "primary",
                class: "add-subcategory-inline",
                onClick: le[11] || (le[11] = Pt => ba("create"))
              }, {
                default: l(() => [...le[60] || (le[60] = [g(" 新建类目 ", -1)])]),
                _: 1
              })])]),
              _: 1
            }), a(rl, {
              label: "封面图"
            }, {
              default: l(() => [a(Ga, {
                class: "cover-uploader",
                "auto-upload": !1,
                "show-file-list": !1,
                accept: "image/*",
                disabled: Tt.value,
                "on-change": Pt => Ht(Pt, Ze.value)
              }, {
                default: l(() => [Ze.value.cover && !Tt.value ? (c(), v("img", {
                  key: 0,
                  src: Ze.value.cover,
                  class: "cover-preview"
                }, null, 8, SK)) : Tt.value ? (c(), v("div", TK, [a(bt, {
                  class: "upload-icon is-loading"
                }, {
                  default: l(() => [a(sa)]),
                  _: 1
                }), le[62] || (le[62] = e("span", {
                  class: "upload-text"
                }, "上传中...", -1))])) : (c(), v("div", EK, [a(bt, {
                  class: "upload-icon"
                }, {
                  default: l(() => [a(P(og))]),
                  _: 1
                }), le[61] || (le[61] = e("span", {
                  class: "upload-text"
                }, "上传封面", -1))]))]),
                _: 1
              }, 8, ["disabled", "on-change"])]),
              _: 1
            }), a(rl, {
              label: "图文类型"
            }, {
              default: l(() => [a(Ba, {
                modelValue: Ze.value.noteType,
                "onUpdate:modelValue": le[12] || (le[12] = Pt => Ze.value.noteType = Pt),
                placeholder: "选择类型"
              }, {
                default: l(() => [a(Ca, {
                  label: "分享",
                  value: "分享"
                }), a(Ca, {
                  label: "测评",
                  value: "测评"
                }), a(Ca, {
                  label: "教程",
                  value: "教程"
                }), a(Ca, {
                  label: "分享",
                  value: "分享"
                }), a(Ca, {
                  label: "商品推荐",
                  value: "商品推荐"
                }), a(Ca, {
                  label: "任意",
                  value: "任意"
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), a(rl, {
              label: "图文字数"
            }, {
              default: l(() => [a(Ba, {
                modelValue: Ze.value.wordCount,
                "onUpdate:modelValue": le[13] || (le[13] = Pt => Ze.value.wordCount = Pt),
                placeholder: "选择字数"
              }, {
                default: l(() => [a(Ca, {
                  label: "300字左右",
                  value: "300"
                }), a(Ca, {
                  label: "500字左右",
                  value: "500"
                }), a(Ca, {
                  label: "800字左右",
                  value: "800"
                }), a(Ca, {
                  label: "1000字左右",
                  value: "1000"
                }), a(Ca, {
                  label: "200-1000字内随机",
                  value: "fanwei"
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), a(rl, {
              label: "标题模式"
            }, {
              default: l(() => [a(vt, {
                modelValue: Ze.value.titleMode,
                "onUpdate:modelValue": le[14] || (le[14] = Pt => Ze.value.titleMode = Pt)
              }, {
                default: l(() => [a(ol, {
                  value: "useKeyword"
                }, {
                  default: l(() => [le[63] || (le[63] = g(" 原标题 ", -1)), a(Qa, {
                    content: "勾选后，关键词将作为图文标题使用，不再进行AI创作新标题",
                    placement: "top"
                  }, {
                    default: l(() => [a(bt, {
                      class: "help-icon"
                    }, {
                      default: l(() => [a(P(Ha))]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                }), a(ol, {
                  value: "aiNew"
                }, {
                  default: l(() => [le[64] || (le[64] = g(" AI创作新标题 ", -1)), a(Qa, {
                    content: "勾选后，Ai将参考您提供的标题帮你生成一个新的标题",
                    placement: "top"
                  }, {
                    default: l(() => [a(bt, {
                      class: "help-icon"
                    }, {
                      default: l(() => [a(P(Ha))]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), a(rl, {
              label: "内容:"
            }, {
              default: l(() => [a(In, {
                modelValue: Ze.value.contentOptions,
                "onUpdate:modelValue": le[15] || (le[15] = Pt => Ze.value.contentOptions = Pt),
                class: "content-options-checkbox-group"
              }, {
                default: l(() => [a(Sl, {
                  value: "addTags"
                }, {
                  default: l(() => [...le[65] || (le[65] = [g("引用标题", -1)])]),
                  _: 1
                }), a(Sl, {
                  value: "addEmoji"
                }, {
                  default: l(() => [...le[66] || (le[66] = [g("添加表情", -1)])]),
                  _: 1
                }), a(Sl, {
                  value: "addHashtag"
                }, {
                  default: l(() => [...le[67] || (le[67] = [g("添加话题", -1)])]),
                  _: 1
                }), a(Sl, {
                  value: "filterBannedWords",
                  class: "filter-checkbox"
                }, {
                  default: l(() => [le[68] || (le[68] = e("span", {
                    class: "filter-checkbox-text"
                  }, "过滤敏感词", -1)), a(Qa, {
                    content: "说明：本系统会自动检测常见的写作问题，帮你提升内容表达。",
                    placement: "top"
                  }, {
                    default: l(() => [a(bt, {
                      class: "filter-help-icon"
                    }, {
                      default: l(() => [a(P(Ha))]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                }), a(Sl, {
                  value: "filterMarketingWords",
                  class: "filter-checkbox"
                }, {
                  default: l(() => [le[69] || (le[69] = e("span", {
                    class: "filter-checkbox-text"
                  }, "过滤营销词", -1)), a(Qa, {
                    content: "说明：本系统会识别口水句与冗余表达，帮你让内容更精炼。",
                    placement: "top"
                  }, {
                    default: l(() => [a(bt, {
                      class: "filter-help-icon"
                    }, {
                      default: l(() => [a(P(Ha))]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                }), a(Sl, {
                  value: "customExtra",
                  class: "custom-extra-checkbox"
                }, {
                  default: l(() => [...le[70] || (le[70] = [g("补充创作信息", -1)])]),
                  _: 1
                }), a(bt, {
                  class: "custom-extra-edit-icon",
                  onClick: kt
                }, {
                  default: l(() => [a(P(qn))]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), a(rl, {
              label: "示例图文"
            }, {
              default: l(() => [e("div", $K, [a(Ra, {
                type: "textarea",
                rows: 6,
                modelValue: Ze.value.note,
                "onUpdate:modelValue": le[16] || (le[16] = Pt => Ze.value.note = Pt),
                placeholder: "示例内容（可用于预览）",
                class: "example-note-input"
              }, null, 8, ["modelValue"]), e("div", PK, [Ze.value.note ? (c(), ye(Jt, {
                key: 1,
                size: "small",
                class: "clear-note-btn",
                onClick: $t
              }, {
                default: l(() => [...le[72] || (le[72] = [g(" 清空 ", -1)])]),
                _: 1
              })) : (c(), ye(Jt, {
                key: 0,
                size: "small",
                class: "paste-note-btn",
                onClick: ve
              }, {
                default: l(() => [...le[71] || (le[71] = [g(" 粘贴 ", -1)])]),
                _: 1
              }))])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["label-width"])]),
          _: 1
        }), a(nn, {
          label: "链接导入",
          name: "link"
        }, {
          default: l(() => [e("div", VK, [e("div", zK, [a(wo, {
            "label-width": u.value ? "80px" : "100px"
          }, {
            default: l(() => [a(rl, {
              label: "图文链接"
            }, {
              default: l(() => [e("div", LK, [a(Ra, {
                modelValue: aa.value,
                "onUpdate:modelValue": le[17] || (le[17] = Pt => aa.value = Pt),
                type: "textarea",
                rows: u.value ? 4 : 3,
                placeholder: "请输入图文链接",
                templates: "",
                onKeyup: gn(lt(Ke, ["ctrl"]), ["enter"]),
                class: "link-input-with-btn"
              }, null, 8, ["modelValue", "rows", "onKeyup"]), u.value ? M("", !0) : (c(), v("div", DK, [aa.value ? (c(), ye(Jt, {
                key: 1,
                size: "small",
                class: "clear-link-btn",
                onClick: ha
              }, {
                default: l(() => [...le[74] || (le[74] = [g(" 清空 ", -1)])]),
                _: 1
              })) : (c(), ye(Jt, {
                key: 0,
                size: "small",
                class: "paste-link-btn",
                onClick: ta
              }, {
                default: l(() => [...le[73] || (le[73] = [g(" 粘贴 ", -1)])]),
                _: 1
              })), a(Jt, {
                type: "primary",
                size: "small",
                loading: xa.value,
                disabled: xa.value,
                onClick: Ke,
                class: "link-parse-btn"
              }, {
                default: l(() => [g(h(xa.value ? "解析中..." : "解析"), 1)]),
                _: 1
              }, 8, ["loading", "disabled"])]))]), u.value ? (c(), v("div", MK, [aa.value ? (c(), ye(Jt, {
                key: 1,
                size: "small",
                class: "clear-link-btn",
                onClick: ha
              }, {
                default: l(() => [...le[76] || (le[76] = [g(" 清空 ", -1)])]),
                _: 1
              })) : (c(), ye(Jt, {
                key: 0,
                size: "small",
                class: "paste-link-btn",
                onClick: ta
              }, {
                default: l(() => [...le[75] || (le[75] = [g(" 粘贴 ", -1)])]),
                _: 1
              })), a(Jt, {
                type: "primary",
                size: "small",
                loading: xa.value,
                disabled: xa.value,
                onClick: Ke,
                class: "link-parse-btn"
              }, {
                default: l(() => [g(h(xa.value ? "解析中..." : "解析"), 1)]),
                _: 1
              }, 8, ["loading", "disabled"])])) : M("", !0)]),
              _: 1
            }), a(rl, {
              label: "一级类目"
            }, {
              default: l(() => [a(Ba, {
                modelValue: Ze.value.group,
                "onUpdate:modelValue": le[18] || (le[18] = Pt => Ze.value.group = Pt),
                placeholder: "请选择大类"
              }, {
                default: l(() => [(c(!0), v(Ue, null, gt(De.value, Pt => (c(), ye(Ca, {
                  key: Pt.name,
                  label: Pt.name,
                  value: Pt.name
                }, null, 8, ["label", "value"]))), 128))]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            }), a(rl, {
              label: "二级类目"
            }, {
              default: l(() => [e("div", OK, [a(Ba, {
                modelValue: Ze.value.category,
                "onUpdate:modelValue": le[19] || (le[19] = Pt => Ze.value.category = Pt),
                placeholder: "请选择二级类目",
                filterable: "",
                "allow-create": "",
                "default-first-option": "",
                onChange: Ma,
                class: "subcategory-select-with-delete"
              }, {
                default: l(() => [(c(!0), v(Ue, null, gt(we(Ze.value.group, "mine"), Pt => (c(), ye(Ca, {
                  key: Pt,
                  label: Pt,
                  value: Pt
                }, {
                  default: l(() => [e("span", BK, [e("span", NK, h(Pt), 1), Pt !== "默认" ? (c(), ye(bt, {
                    key: 0,
                    class: "subcategory-delete-icon",
                    onClick: lt(yl => Qt(Pt, "create"), ["stop"])
                  }, {
                    default: l(() => [a(P(zn))]),
                    _: 1
                  }, 8, ["onClick"])) : M("", !0)])]),
                  _: 2
                }, 1032, ["label", "value"]))), 128))]),
                _: 1
              }, 8, ["modelValue"]), a(Jt, {
                size: "small",
                type: "primary",
                class: "add-subcategory-inline",
                onClick: le[20] || (le[20] = Pt => ba("create"))
              }, {
                default: l(() => [...le[77] || (le[77] = [g(" 新建类目 ", -1)])]),
                _: 1
              })])]),
              _: 1
            })]),
            _: 1
          }, 8, ["label-width"]), Kt.value ? (c(), v("div", UK, [a(Pn, {
            title: Kt.value,
            type: "error",
            closable: !1
          }, null, 8, ["title"])])) : M("", !0), at.value ? (c(), v("div", RK, [a(Pn, {
            title: "解析成功！信息已自动填充到表单",
            type: "success",
            closable: !1
          })])) : M("", !0)])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(co, {
      modelValue: qt.value,
      "onUpdate:modelValue": le[33] || (le[33] = Pt => qt.value = Pt),
      title: "编辑模板",
      width: u.value ? "90%" : "720px",
      class: "edit-template-dialog",
      center: ""
    }, {
      footer: l(() => [a(Jt, {
        onClick: le[32] || (le[32] = Pt => qt.value = !1)
      }, {
        default: l(() => [...le[91] || (le[91] = [g("取消", -1)])]),
        _: 1
      }), a(Jt, {
        type: "primary",
        onClick: St
      }, {
        default: l(() => [...le[92] || (le[92] = [g("保存", -1)])]),
        _: 1
      })]),
      default: l(() => [a(wo, {
        "label-width": u.value ? "80px" : "140px"
      }, {
        default: l(() => [a(rl, {
          label: "标题"
        }, {
          default: l(() => [a(Ra, {
            modelValue: Ne.value.title,
            "onUpdate:modelValue": le[23] || (le[23] = Pt => Ne.value.title = Pt),
            maxlength: "20",
            "show-word-limit": "",
            placeholder: "不超过20字"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(rl, {
          label: "一级类目"
        }, {
          default: l(() => [a(Ba, {
            modelValue: Ne.value.group,
            "onUpdate:modelValue": le[24] || (le[24] = Pt => Ne.value.group = Pt),
            placeholder: "请选择大类",
            filterable: "",
            "allow-create": "",
            "default-first-option": "",
            onChange: Ve
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(Y.value, Pt => (c(), ye(Ca, {
              key: Pt.name,
              label: Pt.name,
              value: Pt.name
            }, null, 8, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(rl, {
          label: "二级类目"
        }, {
          default: l(() => [e("div", jK, [a(Ba, {
            modelValue: Ne.value.category,
            "onUpdate:modelValue": le[25] || (le[25] = Pt => Ne.value.category = Pt),
            placeholder: "请选择二级类目",
            filterable: "",
            "allow-create": "",
            "default-first-option": "",
            onChange: Je,
            class: "subcategory-select-with-delete"
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(we(Ne.value.group, "mine"), Pt => (c(), ye(Ca, {
              key: Pt,
              label: Pt,
              value: Pt
            }, {
              default: l(() => [e("span", qK, [e("span", FK, h(Pt), 1), Pt !== "默认" ? (c(), ye(bt, {
                key: 0,
                class: "subcategory-delete-icon",
                onClick: lt(yl => Qt(Pt, "edit"), ["stop"])
              }, {
                default: l(() => [a(P(zn))]),
                _: 1
              }, 8, ["onClick"])) : M("", !0)])]),
              _: 2
            }, 1032, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"]), a(Jt, {
            size: "small",
            type: "primary",
            class: "add-subcategory-inline",
            onClick: le[26] || (le[26] = Pt => ba("edit"))
          }, {
            default: l(() => [...le[80] || (le[80] = [g(" 新建类目 ", -1)])]),
            _: 1
          })])]),
          _: 1
        }), a(rl, {
          label: "封面图"
        }, {
          default: l(() => [a(Ga, {
            class: "cover-uploader",
            "auto-upload": !1,
            "show-file-list": !1,
            accept: "image/*",
            disabled: Tt.value,
            "on-change": Pt => Ht(Pt, Ne.value)
          }, {
            default: l(() => [Ne.value.cover && !Tt.value ? (c(), v("img", {
              key: 0,
              src: Ne.value.cover,
              class: "cover-preview"
            }, null, 8, WK)) : Tt.value ? (c(), v("div", JK, [a(bt, {
              class: "upload-icon is-loading"
            }, {
              default: l(() => [a(sa)]),
              _: 1
            }), le[82] || (le[82] = e("span", {
              class: "upload-text"
            }, "上传中...", -1))])) : (c(), v("div", GK, [a(bt, {
              class: "upload-icon"
            }, {
              default: l(() => [a(P(og))]),
              _: 1
            }), le[81] || (le[81] = e("span", {
              class: "upload-text"
            }, "上传封面", -1))]))]),
            _: 1
          }, 8, ["disabled", "on-change"])]),
          _: 1
        }), a(rl, {
          label: "图文类型"
        }, {
          default: l(() => [a(Ba, {
            modelValue: Ne.value.noteType,
            "onUpdate:modelValue": le[27] || (le[27] = Pt => Ne.value.noteType = Pt)
          }, {
            default: l(() => [a(Ca, {
              label: "分享",
              value: "分享"
            }), a(Ca, {
              label: "测评",
              value: "测评"
            }), a(Ca, {
              label: "教程",
              value: "教程"
            }), a(Ca, {
              label: "分享",
              value: "分享"
            }), a(Ca, {
              label: "商品推荐",
              value: "商品推荐"
            }), a(Ca, {
              label: "任意",
              value: "任意"
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(rl, {
          label: "图文字数"
        }, {
          default: l(() => [a(Ba, {
            modelValue: Ne.value.wordCount,
            "onUpdate:modelValue": le[28] || (le[28] = Pt => Ne.value.wordCount = Pt)
          }, {
            default: l(() => [a(Ca, {
              label: "300字左右",
              value: "300"
            }), a(Ca, {
              label: "500字左右",
              value: "500"
            }), a(Ca, {
              label: "800字左右",
              value: "800"
            }), a(Ca, {
              label: "1000字左右",
              value: "1000"
            }), a(Ca, {
              label: "200-1000字内随机",
              value: "fanwei"
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(rl, {
          label: "标题模式"
        }, {
          default: l(() => [a(vt, {
            modelValue: Ne.value.titleMode,
            "onUpdate:modelValue": le[29] || (le[29] = Pt => Ne.value.titleMode = Pt)
          }, {
            default: l(() => [a(ol, {
              value: "useKeyword"
            }, {
              default: l(() => [le[83] || (le[83] = g(" 原标题 ", -1)), a(Qa, {
                content: "勾选后，关键词将作为图文标题使用，不再进行AI创作新标题",
                placement: "top"
              }, {
                default: l(() => [a(bt, {
                  class: "help-icon"
                }, {
                  default: l(() => [a(P(Ha))]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), a(ol, {
              value: "aiNew"
            }, {
              default: l(() => [le[84] || (le[84] = g(" AI创作新标题 ", -1)), a(Qa, {
                content: "勾选后，Ai将参考您提供的标题帮你生成一个新的标题",
                placement: "top"
              }, {
                default: l(() => [a(bt, {
                  class: "help-icon"
                }, {
                  default: l(() => [a(P(Ha))]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(rl, {
          label: "内容:"
        }, {
          default: l(() => [a(In, {
            modelValue: Ne.value.contentOptions,
            "onUpdate:modelValue": le[30] || (le[30] = Pt => Ne.value.contentOptions = Pt),
            class: "content-options-checkbox-group"
          }, {
            default: l(() => [a(Sl, {
              value: "addTags"
            }, {
              default: l(() => [...le[85] || (le[85] = [g("引用标题", -1)])]),
              _: 1
            }), a(Sl, {
              value: "addEmoji"
            }, {
              default: l(() => [...le[86] || (le[86] = [g("添加表情", -1)])]),
              _: 1
            }), a(Sl, {
              value: "addHashtag"
            }, {
              default: l(() => [...le[87] || (le[87] = [g("添加话题", -1)])]),
              _: 1
            }), a(Sl, {
              value: "filterBannedWords",
              class: "filter-checkbox"
            }, {
              default: l(() => [le[88] || (le[88] = e("span", {
                class: "filter-checkbox-text"
              }, "过滤敏感词", -1)), a(Qa, {
                content: "说明：本系统会自动检测常见的写作问题，帮你提升内容表达。",
                placement: "top"
              }, {
                default: l(() => [a(bt, {
                  class: "filter-help-icon"
                }, {
                  default: l(() => [a(P(Ha))]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), a(Sl, {
              value: "filterMarketingWords",
              class: "filter-checkbox"
            }, {
              default: l(() => [le[89] || (le[89] = e("span", {
                class: "filter-checkbox-text"
              }, "过滤营销词", -1)), a(Qa, {
                content: "说明：本系统会识别口水句与冗余表达，帮你让内容更精炼。",
                placement: "top"
              }, {
                default: l(() => [a(bt, {
                  class: "filter-help-icon"
                }, {
                  default: l(() => [a(P(Ha))]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), a(Sl, {
              value: "customExtra",
              class: "custom-extra-checkbox"
            }, {
              default: l(() => [...le[90] || (le[90] = [g("补充创作信息", -1)])]),
              _: 1
            }), a(bt, {
              class: "custom-extra-edit-icon",
              onClick: Bt
            }, {
              default: l(() => [a(P(qn))]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(rl, {
          label: "示例图文"
        }, {
          default: l(() => [a(Ra, {
            type: "textarea",
            rows: 6,
            modelValue: Ne.value.note,
            "onUpdate:modelValue": le[31] || (le[31] = Pt => Ne.value.note = Pt)
          }, null, 8, ["modelValue"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["label-width"])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Wn, {
      modelValue: n.value,
      "onUpdate:modelValue": le[34] || (le[34] = Pt => n.value = Pt)
    }, null, 8, ["modelValue"]), a(no, {
      modelValue: s.value,
      "onUpdate:modelValue": le[35] || (le[35] = Pt => s.value = Pt),
      onLoginSuccess: An
    }, null, 8, ["modelValue"]), a(co, {
      modelValue: jt.value,
      "onUpdate:modelValue": le[38] || (le[38] = Pt => jt.value = Pt),
      title: "补充创作信息",
      width: "600px",
      class: Pe("custom-extra-dialog"),
      "append-to-body": ""
    }, {
      default: l(() => [a(Os, {
        modelValue: Ze.value.customExtra,
        "onUpdate:modelValue": le[36] || (le[36] = Pt => Ze.value.customExtra = Pt),
        visible: jt.value,
        "onUpdate:visible": le[37] || (le[37] = Pt => jt.value = Pt),
        mode: "dialog",
        "is-mobile": u.value,
        ref_key: "createCustomExtraFormRef",
        ref: be
      }, null, 8, ["modelValue", "visible", "is-mobile"])]),
      _: 1
    }, 8, ["modelValue"]), a(co, {
      modelValue: ca.value,
      "onUpdate:modelValue": le[41] || (le[41] = Pt => ca.value = Pt),
      title: "补充创作信息",
      width: "600px",
      class: Pe("custom-extra-dialog"),
      "append-to-body": ""
    }, {
      default: l(() => [a(Os, {
        modelValue: Ne.value.customExtra,
        "onUpdate:modelValue": le[39] || (le[39] = Pt => Ne.value.customExtra = Pt),
        visible: ca.value,
        "onUpdate:visible": le[40] || (le[40] = Pt => ca.value = Pt),
        mode: "dialog",
        "is-mobile": u.value,
        ref_key: "editCustomExtraFormRef",
        ref: he
      }, null, 8, ["modelValue", "visible", "is-mobile"])]),
      _: 1
    }, 8, ["modelValue"]), u.value && d.value ? (c(), v("div", {
      key: 1,
      class: "float-search-btn",
      onClick: dn
    }, [a(bt, {
      class: "float-search-icon"
    }, {
      default: l(() => [a(P(Ai))]),
      _: 1
    })])) : M("", !0)])
  }
}
