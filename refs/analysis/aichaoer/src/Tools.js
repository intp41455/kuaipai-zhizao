// module: Tools
// extracted from 02-index-8bb27f01.js.js @ 1393218
{
  const o = ln(),
    i = fn(),
    n = p(!1),
    s = p(window.innerWidth <= 768),
    u = p(!1),
    d = p(!!localStorage.getItem("authToken")),
    f = p({}),
    y = p(!1),
    w = p(!1),
    S = p(null),
    z = p({
      description: "",
      contactName: "",
      wechat: "",
      email: ""
    }),
    x = {
      description: [{
        required: !0,
        message: "请输入需求描述",
        trigger: "blur"
      }, {
        min: 10,
        message: "需求描述至少需要10个字符",
        trigger: "blur"
      }],
      contactName: [],
      wechat: [{
        validator: (ft, Z, pt) => {
          const Et = (Z || "").trim();
          Et && Et.length < 2 ? pt(new Error("微信号至少需要2个字符")) : pt()
        },
        trigger: "blur"
      }],
      email: [{
        validator: (ft, Z, pt) => {
          const Et = (Z || "").trim();
          Et && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Et) ? pt(new Error("请输入有效的邮箱地址")) : pt()
        },
        trigger: "blur"
      }]
    },
    C = Le(() => {
      const ft = i.path;
      return ft.startsWith("/yunying") ? "yunying" : ft.startsWith("/sucai") ? "sucai" : "tools"
    }),
    V = p(15),
    $ = () => {
      const ft = {
        tools: 15,
        yunying: 16,
        sucai: 17
      };
      V.value = ft[C.value] || 15
    },
    N = Le(() => ({
      tools: "超级工具箱",
      yunying: "运营资料包",
      sucai: "素材资料包"
    })[C.value] || "超级工具箱"),
    T = Le(() => ({
      tools: "搜索工具关键词",
      yunying: "搜索资料关键词",
      sucai: "搜索素材关键词"
    })[C.value] || "搜索关键词"),
    R = p("all"),
    O = p(""),
    J = p(1),
    ee = p(!1),
    ie = p([]),
    Ae = p([]),
    F = p([]),
    Y = async () => {
      try {
        const ft = await zf();
        ie.value = ft.map(Z => ({
          value: Z.id,
          label: Z.name
        }))
      } catch (ft) {
        console.error("加载工具分类失败:", ft), A.error("加载工具分类失败，请稍后重试"), ie.value = []
      }
    }, ne = async () => {
      try {
        const ft = await Mf();
        Ae.value = ft.map(Z => ({
          value: Z.id,
          label: Z.name
        }))
      } catch (ft) {
        console.error("加载运营资料包分类失败:", ft), A.error("加载运营资料包分类失败，请稍后重试"), Ae.value = []
      }
    }, De = async () => {
      try {
        const ft = await Nf();
        F.value = ft.map(Z => ({
          value: Z.id,
          label: Z.name
        }))
      } catch (ft) {
        console.error("加载素材资料包分类失败:", ft), A.error("加载素材资料包分类失败，请稍后重试"), F.value = []
      }
    }, Q = Le(() => C.value === "tools" ? [{
      value: "all",
      label: "全部"
    }, ...ie.value] : C.value === "yunying" ? [{
      value: "all",
      label: "全部"
    }, ...Ae.value] : C.value === "sucai" ? [{
      value: "all",
      label: "全部"
    }, ...F.value] : []), re = Le(() => C.value === "tools" ? b.value : C.value === "yunying" ? rt.value : je.value), b = p([]), te = p(!1), we = p({
      current: 1,
      total: 0,
      total_page: 1,
      page_size: 10
    }), ae = async (ft = 1, Z = !1) => {
      if (!te.value) {
        te.value = !0;
        try {
          const pt = {
            page: ft,
            size: Is
          };
          if (R.value !== "all" && C.value === "tools") {
            const Mt = R.value;
            Mt && Mt !== "all" && (pt.type_id = Mt)
          }
          O.value && O.value.trim() && (pt.title = O.value.trim());
          const Et = await Lf(pt);
          if (Et && Et.rows && Array.isArray(Et.rows)) {
            const Mt = Et.rows.map(Qe => {
              let j = [];
              if (Qe.images) try {
                j = typeof Qe.images == "string" ? JSON.parse(Qe.images) : Qe.images
              } catch (Ee) {
                console.warn("解析 images 失败:", Ee), j = []
              }
              return {
                id: Qe.id,
                category: Qe.type_id || 0,
                cover: j && j.length > 0 ? j[0] : "",
                title: Qe.title || "",
                desc: Qe.desc || "",
                images: j,
                intro: Qe.intro || "",
                feature: Qe.feature || "",
                worth: Qe.worth || "",
                details: Qe.details || "",
                explain: Qe.explain || "",
                problem: Qe.problem || "",
                down_url: Qe.down_url || "",
                status: Qe.status || 0
              }
            });
            Z && ft > 1 ? b.value = [...b.value, ...Mt] : b.value = Mt, Et.pages && (we.value = {
              current: Et.pages.current || ft,
              total: Et.pages.total || 0,
              total_page: Et.pages.total_page || 1,
              page_size: Et.pages.page_size || Is
            })
          } else Z || (b.value = [])
        } catch (pt) {
          console.error("加载工具列表失败:", pt), A.error("加载工具列表失败，请稍后重试"), Z || (b.value = [])
        } finally {
          te.value = !1
        }
      }
    }, me = p({
      id: "yy-ebook-content",
      title: "内容运营手册 · 全流程",
      subtitle: "从 0 到 1 系统化学习内容运营，7 大模块覆盖账号定位、内容结构分析、内容打造、封面标题、文案人设、数据复盘与避坑指南。",
      tags: ["0 基础友好", "全流程 SOP", "7 大模块"],
      chapters: [{
        idx: 1,
        title: "内容 0-1 账号定位与包装全流程学习手册",
        desc: "系统搭建账号基础：行业定位、头像昵称、简介关键词、人设包装。",
        link: "https://my.feishu.cn/wiki/JXgywKsE4i9Jagks5B3cGBIAngb?from=from_copylink"
      }, {
        idx: 2,
        title: "对标账号筛选与内容结构分析方法学习手册",
        desc: "找到对的同行：对标筛选标准、内容结构分析模板、差异化突破。",
        link: "https://my.feishu.cn/wiki/DemcwPYXyiz7tykSXfUcEyaCndh?from=from_copylink"
      }, {
        idx: 3,
        title: "优质内容打造全流程学习手册（选题 + 规划 + 稀缺性）",
        desc: "三大核心：选题挖掘、内容规划、稀缺性打造，让图文更易爆。",
        link: "https://my.feishu.cn/wiki/HJCQwzws3irNZ9kfU83cpkrjnlb?from=from_copylink"
      }, {
        idx: 4,
        title: "封面 + 标题高点击率创作手册",
        desc: "点击率是命门：封面设计公式、标题模板、高转化文字排版。",
        link: "https://my.feishu.cn/wiki/ZCcswhcoaisyupkNnK6cABybngd?from=from_copylink"
      }, {
        idx: 5,
        title: "文案写作与人设打造指南",
        desc: "文字功夫：钩子开头、结构化正文、情感共鸣、鲜活人设。",
        link: "https://my.feishu.cn/wiki/SXGqwTZggiC8MFkobzycIja1nW8?from=from_copylink"
      }, {
        idx: 6,
        title: "账号维护与数据复盘全流程 SOP",
        desc: "日常精细化：账号维护节奏、发布时间、数据指标与复盘动作。",
        link: "https://my.feishu.cn/wiki/PKsXw3WXViqG3pkT1P2cFIe3nlh?from=from_copylink"
      }, {
        idx: 7,
        title: "新手常见问题与避坑指南",
        desc: "少走弯路：写作问题识别、表达优化、冷启动常见误区整理。",
        link: "https://my.feishu.cn/wiki/Pj8IwibQ7iiOPukNc0zcCuvynAe?from=from_copylink"
      }]
    }), ce = p(!1), ue = p(new Set), U = () => {
      try {
        const ft = localStorage.getItem("yunying:ebook:visited");
        ft && (ue.value = new Set(JSON.parse(ft)))
      } catch {}
      ce.value = !0
    }, de = ft => {
      window.open(ft.link, "_blank", "noopener,noreferrer"), ue.value.add(ft.idx);
      try {
        localStorage.setItem("yunying:ebook:visited", JSON.stringify([...ue.value]))
      } catch {}
    }, _e = Le(() => {
      const ft = me.value.chapters.length,
        Z = [...ue.value].filter(pt => pt >= 1 && pt <= ft).length;
      return {
        done: Z,
        total: ft,
        percent: Math.round(Z / ft * 100)
      }
    });
  try {
    const ft = localStorage.getItem("yunying:ebook:visited");
    ft && (ue.value = new Set(JSON.parse(ft)))
  } catch {}
  const xe = p([{
      id: "yy-content-ops",
      title: "内容运营资料",
      desc: "账号运营完整资料包，涵盖账号定位、内容结构分析、内容传播技巧、数据分析与流量机制。",
      iconComp: as,
      iconBg: "linear-gradient(135deg, #ff7a9a, #8b5cf6)",
      badge: "夸克网盘",
      provider: "quark",
      tags: ["账号运营", "内容传播", "优质"],
      link: "https://pan.quark.cn/s/a332d23ff40b",
      password: ""
    }, {
      id: "yy-ai-prompt",
      title: "全行业 AI 提示词大全",
      desc: "覆盖文案、营销、电商、教育、设计等几十个行业的高质量 AI 提示词合集，开箱即用。",
      iconComp: Qo,
      iconBg: "linear-gradient(135deg, #818cf8, #6366f1)",
      badge: "百度网盘",
      provider: "baidu",
      tags: ["AI 提示词", "全行业", "模板"],
      link: "https://pan.baidu.com/s/13ohf9E8PF1nwgc8L9OsTBw",
      password: "5us4"
    }, {
      id: "yy-content-ecom",
      title: "电商运营资料",
      desc: "电商从 0 到 1 开店手册：选品、挂车、图文分享、ROI 优化与直播商品推荐全流程。",
      iconComp: H_,
      iconBg: "linear-gradient(135deg, #f59e0b, #f97316)",
      badge: "夸克网盘",
      provider: "quark",
      tags: ["电商", "选品", "商品推荐"],
      link: "https://pan.quark.cn/s/d9f51736383c",
      password: ""
    }]),
    Ce = Le(() => {
      const ft = O.value.trim().toLowerCase();
      return ft ? xe.value.filter(Z => Z.title.toLowerCase().includes(ft) || Z.desc.toLowerCase().includes(ft) || Z.tags.some(pt => pt.toLowerCase().includes(ft))) : xe.value
    }),
    Re = p(!1),
    nt = p(null),
    tt = ft => {
      nt.value = ft, Re.value = !0
    },
    qe = async (ft, Z = "内容") => {
      try {
        await navigator.clipboard.writeText(ft), A.success(`${Z}已复制`)
      } catch {
        A.warning("复制失败，请手动复制")
      }
    }, Me = () => {
      nt.value && window.open(nt.value.link, "_blank", "noopener,noreferrer")
    }, rt = p([]), ct = p(!1), E = p({
      current: 1,
      total: 0,
      total_page: 1,
      page_size: 10
    }), _ = async (ft = 1, Z = !1) => {
      if (!ct.value) {
        ct.value = !0;
        try {
          const pt = {
            page: ft,
            size: Is
          };
          if (R.value !== "all" && C.value === "yunying") {
            const Mt = R.value;
            Mt && Mt !== "all" && (pt.type_id = Mt)
          }
          O.value && O.value.trim() && (pt.title = O.value.trim());
          const Et = await Of(pt);
          if (Et && Et.rows && Array.isArray(Et.rows)) {
            const Mt = Et.rows.map(Qe => {
              let j = [];
              if (Qe.images) try {
                j = typeof Qe.images == "string" ? JSON.parse(Qe.images) : Qe.images
              } catch (Ee) {
                console.warn("解析 images 失败:", Ee), j = []
              }
              return {
                id: Qe.id,
                category: Qe.type_id || 0,
                cover: j && j.length > 0 ? j[0] : "",
                title: Qe.title || "",
                desc: Qe.desc || "",
                images: j
              }
            });
            Z && ft > 1 ? rt.value = [...rt.value, ...Mt] : rt.value = Mt, Et.pages && (E.value = {
              current: Et.pages.current || ft,
              total: Et.pages.total || 0,
              total_page: Et.pages.total_page || 1,
              page_size: Et.pages.page_size || Is
            })
          } else Z || (rt.value = [])
        } catch (pt) {
          console.error("加载运营资料包列表失败:", pt), A.error("加载运营资料包列表失败，请稍后重试"), Z || (rt.value = [])
        } finally {
          ct.value = !1
        }
      }
    }, je = p([]), K = p(!1), B = p({
      current: 1,
      total: 0,
      total_page: 1,
      page_size: 10
    }), W = async (ft = 1, Z = !1) => {
      if (!K.value) {
        K.value = !0;
        try {
          const pt = {
            page: ft,
            size: Is
          };
          if (R.value !== "all" && C.value === "sucai") {
            const Mt = R.value;
            Mt && Mt !== "all" && (pt.type_id = Mt)
          }
          O.value && O.value.trim() && (pt.title = O.value.trim());
          const Et = await Uf(pt);
          if (Et && Et.rows && Array.isArray(Et.rows)) {
            const Mt = Et.rows.map(Qe => {
              let j = [];
              if (Qe.images) try {
                j = typeof Qe.images == "string" ? JSON.parse(Qe.images) : Qe.images
              } catch (Ee) {
                console.warn("解析 images 失败:", Ee), j = []
              }
              return {
                id: Qe.id,
                category: Qe.type_id || 0,
                cover: j && j.length > 0 ? j[0] : "",
                title: Qe.title || "",
                desc: Qe.desc || "",
                images: j
              }
            });
            Z && ft > 1 ? je.value = [...je.value, ...Mt] : je.value = Mt, Et.pages && (B.value = {
              current: Et.pages.current || ft,
              total: Et.pages.total || 0,
              total_page: Et.pages.total_page || 1,
              page_size: Et.pages.page_size || Is
            })
          } else Z || (je.value = [])
        } catch (pt) {
          console.error("加载素材资料包列表失败:", pt), A.error("加载素材资料包列表失败，请稍后重试"), Z || (je.value = [])
        } finally {
          K.value = !1
        }
      }
    }, Te = Le(() => {
      if (C.value === "tools") return b.value;
      if (C.value === "yunying") return rt.value;
      if (C.value === "sucai") return je.value;
      const ft = O.value.trim().toLowerCase();
      return re.value.filter(Z => {
        const pt = R.value === "all" || Z.category === R.value,
          Et = ft === "" || Z.title.toLowerCase().includes(ft) || Z.desc.toLowerCase().includes(ft);
        return pt && Et
      })
    }), it = Le(() => C.value === "tools" ? b.value : C.value === "yunying" ? rt.value : C.value === "sucai" ? je.value : Te.value.slice(0, J.value * Is)), yt = Le(() => C.value === "tools" ? we.value.current < we.value.total_page : C.value === "yunying" ? E.value.current < E.value.total_page : C.value === "sucai" ? B.value.current < B.value.total_page : Te.value.length > it.value.length), st = async () => {
      if (yt.value)
        if (C.value === "tools") {
          ee.value = !0;
          try {
            await ae(we.value.current + 1, !0)
          } finally {
            ee.value = !1
          }
        } else if (C.value === "yunying") {
        ee.value = !0;
        try {
          await _(E.value.current + 1, !0)
        } finally {
          ee.value = !1
        }
      } else if (C.value === "sucai") {
        ee.value = !0;
        try {
          await W(B.value.current + 1, !0)
        } finally {
          ee.value = !1
        }
      } else ee.value = !0, await new Promise(ft => setTimeout(ft, 300)), J.value += 1, ee.value = !1
    }, Ie = () => {
      C.value === "tools" ? ae(1) : C.value === "yunying" ? _(1) : C.value === "sucai" ? W(1) : J.value = 1
    }, pe = ft => {
      C.value === "tools" ? ae(1) : C.value === "yunying" ? _(1) : C.value === "sucai" ? W(1) : Ie()
    }, Be = () => {
      s.value = window.innerWidth <= 768
    }, xt = async () => {
      var ft;
      try {
        const Z = localStorage.getItem("authToken");
        if (Z && Z.trim()) {
          await new Promise(pt => setTimeout(pt, 200));
          try {
            const pt = await zl();
            pt ? (f.value = {
              ...pt,
              nickname: pt.nickname || pt.nickName || "用户",
              avatar: pt.avatar || pt.avatarUrl || ""
            }, d.value = !0) : (f.value = {}, d.value = !1)
          } catch (pt) {
            if ((pt == null ? void 0 : pt.code) === 999 || ((ft = pt == null ? void 0 : pt.response) == null ? void 0 : ft.code) === 999) {
              console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), f.value = {}, d.value = !1;
              return
            }
            console.error("获取用户信息失败:", pt), f.value = {}, d.value = !1
          }
        } else f.value = {}, d.value = !1
      } catch (Z) {
        console.error("检查登录状态失败:", Z), d.value = !1, f.value = {}
      }
    }, Yt = ft => {
      f.value = ft, d.value = !0, u.value = !1, A.success("登录成功"), xt()
    }, Ye = ft => {
      ft === "profile" ? (o.push("/user"), Sa.value = !1) : ft === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : ft === "recharge" ? (n.value = !0, Sa.value = !1) : ft === "logout" && (ui(), xt(), Sa.value = !1)
    }, va = ft => {
      try {
        if (ft.category === "custom" || ft.id === "custom") {
          y.value = !0;
          return
        }
        C.value === "yunying" || C.value === "sucai" ? o.push(`/product2/${C.value}/${ft.id}`) : o.push(`/product/${C.value}/${ft.id}`)
      } catch (Z) {
        console.error(Z)
      }
    };
  Ll(async () => {
    i.path === "/tools" ? (document.title = "火兔工具箱_超级工具箱", await Promise.all([Y(), ae(1)])) : i.path === "/yunying" ? (document.title = "火兔工具箱_运营资料包", await Promise.all([ne(), _(1)])) : i.path === "/sucai" && (document.title = "火兔工具箱_素材资料包", await Promise.all([De(), W(1)])), $(), R.value = "all", O.value = "", J.value = 1, Be(), await xt(), window.addEventListener("resize", Be), window.addEventListener("user-logout", xt), window.addEventListener("user-login-success", xt)
  }), Zl(() => {
    window.removeEventListener("resize", Be), window.removeEventListener("user-logout", xt), window.removeEventListener("user-login-success", xt)
  }), oa(() => i.path, async () => {
    i.path === "/tools" ? await Promise.all([Y(), ae(1)]) : i.path === "/yunying" ? await Promise.all([ne(), _(1)]) : i.path === "/sucai" && await Promise.all([De(), W(1)]), i.path === "/tools" ? document.title = "火兔工具箱_超级工具箱" : i.path === "/yunying" ? document.title = "火兔工具箱_运营资料包" : i.path === "/sucai" && (document.title = "火兔工具箱_素材资料包"), $(), R.value = "all", O.value = "", J.value = 1
  });
  const Ea = async () => {
    if (S.value) try {
      await S.value.validate(), w.value = !0, await new Promise(Et => setTimeout(Et, 1e3));
      const ft = "customDevRecords.v1";
      let Z = [];
      try {
        const Et = localStorage.getItem(ft);
        Et && (Z = JSON.parse(Et))
      } catch (Et) {
        console.error("读取定制开发记录失败:", Et)
      }
      const pt = {
        id: Date.now(),
        description: z.value.description,
        contactName: z.value.contactName || "",
        wechat: z.value.wechat || "",
        email: z.value.email || "",
        submitTime: new Date().toLocaleString("zh-CN"),
        status: "pending"
      };
      Z.unshift(pt), localStorage.setItem(ft, JSON.stringify(Z)), A.success("需求提交成功！我们将在1-3个工作日内与您联系"), z.value = {
        description: "",
        contactName: "",
        wechat: "",
        email: ""
      }, S.value.resetFields(), y.value = !1
    } catch (ft) {
      ft !== !1 && (console.error("提交定制开发需求失败:", ft), A.error("提交失败，请稍后重试"))
    } finally {
      w.value = !1
    }
  };
  return (ft, Z) => {
    var ca;
    const pt = xl,
      Et = cn,
      Mt = jr,
      Qe = Kn,
      j = $l,
      Ee = Rl,
      ht = yo,
      jt = Vo;
    return c(), v("div", loe, [a(ei, {
      title: N.value,
      "is-logged-in": d.value,
      "user-info": f.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: Z[0] || (Z[0] = be => Sa.value = !0),
      onLoginClick: Z[1] || (Z[1] = be => u.value = !0),
      onCommand: Ye
    }, null, 8, ["title", "is-logged-in", "user-info", "show-mobile-menu"]), s.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: Z[2] || (Z[2] = be => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": s.value
      }])
    }, [s.value ? M("", !0) : (c(), v("div", noe, [e("div", ooe, h(N.value), 1), e("div", ioe, [C.value === "tools" ? (c(), ye(pt, {
      key: 0,
      type: "primary",
      size: "small",
      class: "custom-dev-btn",
      onClick: Z[3] || (Z[3] = be => y.value = !0)
    }, {
      default: l(() => [...Z[23] || (Z[23] = [g(" 我要定制开发 ", -1)])]),
      _: 1
    })) : M("", !0), a(Et, {
      modelValue: O.value,
      "onUpdate:modelValue": Z[4] || (Z[4] = be => O.value = be),
      placeholder: T.value,
      clearable: "",
      size: "small",
      class: "search-inline",
      onKeyup: gn(Ie, ["enter"])
    }, {
      append: l(() => [a(pt, {
        onClick: Ie
      }, {
        default: l(() => [...Z[24] || (Z[24] = [g("搜索", -1)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "placeholder"])])])), s.value ? (c(), v("div", soe, h(N.value), 1)) : M("", !0), e("div", roe, [a(Qe, {
      modelValue: R.value,
      "onUpdate:modelValue": Z[5] || (Z[5] = be => R.value = be),
      size: "small",
      class: "category-group",
      onChange: pe
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(Q.value, be => (c(), ye(Mt, {
        key: be.value,
        value: be.value
      }, {
        default: l(() => [g(h(be.label), 1)]),
        _: 2
      }, 1032, ["value"]))), 128))]),
      _: 1
    }, 8, ["modelValue"])]), s.value ? (c(), v("div", uoe, [C.value === "tools" ? (c(), ye(pt, {
      key: 0,
      type: "primary",
      size: "small",
      class: "custom-dev-btn",
      onClick: Z[6] || (Z[6] = be => y.value = !0)
    }, {
      default: l(() => [...Z[25] || (Z[25] = [g(" 我要定制开发 ", -1)])]),
      _: 1
    })) : M("", !0), a(Et, {
      modelValue: O.value,
      "onUpdate:modelValue": Z[7] || (Z[7] = be => O.value = be),
      placeholder: T.value,
      clearable: "",
      size: "small",
      class: "search-inline",
      onKeyup: gn(Ie, ["enter"])
    }, {
      append: l(() => [a(pt, {
        onClick: Ie
      }, {
        default: l(() => [...Z[26] || (Z[26] = [g("搜索", -1)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "placeholder"])])) : M("", !0), C.value === "yunying" ? (c(), v("div", {
      key: 3,
      class: "yy-ebook-hero",
      onClick: U
    }, [e("div", coe, [Z[30] || (Z[30] = e("div", {
      class: "yy-ebook-cover-tag"
    }, "学习电子书", -1)), e("div", doe, [a(j, {
      size: 40
    }, {
      default: l(() => [a(P(Ju))]),
      _: 1
    }), Z[27] || (Z[27] = e("div", {
      class: "yy-ebook-cover-title"
    }, "内容运营", -1)), Z[28] || (Z[28] = e("div", {
      class: "yy-ebook-cover-subtitle"
    }, "全流程手册", -1)), Z[29] || (Z[29] = e("div", {
      class: "yy-ebook-cover-chapters"
    }, "7 章节", -1))])]), e("div", voe, [e("div", moe, [Z[31] || (Z[31] = e("span", {
      class: "yy-ebook-badge yy-ebook-badge--hot"
    }, "🔥 NEW", -1)), Z[32] || (Z[32] = e("span", {
      class: "yy-ebook-badge"
    }, "系统化学习", -1)), (c(!0), v(Ue, null, gt(me.value.tags, be => (c(), v("span", {
      class: "yy-ebook-badge",
      key: be
    }, h(be), 1))), 128))]), e("div", goe, h(me.value.title), 1), e("div", foe, h(me.value.subtitle), 1), e("div", poe, [e("div", yoe, [e("div", {
      class: "yy-ebook-progress-fill",
      style: Il({
        width: _e.value.percent + "%"
      })
    }, null, 4)]), e("span", hoe, " 已学 " + h(_e.value.done) + " / " + h(_e.value.total) + " 章 ", 1)]), e("div", boe, [Z[33] || (Z[33] = e("span", null, "点击卡片查看目录", -1)), a(j, null, {
      default: l(() => [a(P(Wl))]),
      _: 1
    })])])])) : M("", !0), C.value === "yunying" ? (c(), v("div", woe, [(c(!0), v(Ue, null, gt(Ce.value, be => (c(), v("div", {
      key: be.id,
      class: "yy-card",
      onClick: he => tt(be)
    }, [e("div", {
      class: Pe(["yy-card-badge", "yy-card-badge--" + be.provider])
    }, h(be.badge), 3), e("div", {
      class: "yy-card-icon",
      style: Il({
        background: be.iconBg
      })
    }, [a(j, {
      size: 32
    }, {
      default: l(() => [(c(), ye(Jo(be.iconComp)))]),
      _: 2
    }, 1024)], 4), e("div", koe, h(be.title), 1), e("div", Coe, h(be.desc), 1), e("div", Aoe, [(c(!0), v(Ue, null, gt(be.tags, he => (c(), v("span", {
      key: he,
      class: "yy-card-tag"
    }, h(he), 1))), 128))]), e("div", Ioe, [a(j, null, {
      default: l(() => [a(P(ig))]),
      _: 1
    }), Z[34] || (Z[34] = e("span", null, "查看资料", -1))])], 8, _oe))), 128)), Ce.value.length ? M("", !0) : (c(), v("div", xoe, [...Z[35] || (Z[35] = [e("div", {
      class: "empty-tools-content"
    }, [e("div", {
      class: "empty-tools-text"
    }, "未找到匹配的资料"), e("div", {
      class: "empty-tools-hint"
    }, "请尝试其他关键词或清空搜索条件")], -1)])]))])) : (c(), v(Ue, {
      key: 5
    }, [e("div", Soe, [it.value.length === 0 ? (c(), v("div", Eoe, [e("div", Toe, [e("div", $oe, h(O.value ? "未找到匹配的工具" : "工具开发中"), 1), O.value ? (c(), v("div", Poe, " 请尝试其他关键词或清空搜索条件 ")) : M("", !0)])])) : M("", !0), (c(!0), v(Ue, null, gt(it.value, be => (c(), v("div", {
      key: be.id,
      class: "tool-card",
      onClick: he => va(be),
      "data-category": be.category
    }, [e("div", zoe, [e("img", {
      src: be.cover,
      class: "cover-img"
    }, null, 8, Loe)]), e("div", {
      class: "tool-title",
      title: be.title
    }, h(be.title), 9, Doe), e("div", Moe, h(be.desc), 1)], 8, Voe))), 128))]), yt.value ? (c(), v("div", Ooe, [a(pt, {
      class: "load-more-btn",
      onClick: st,
      loading: ee.value
    }, {
      default: l(() => [...Z[36] || (Z[36] = [g("加载更多", -1)])]),
      _: 1
    }, 8, ["loading"])])) : M("", !0)], 64))], 2), a(Ee, {
      modelValue: Re.value,
      "onUpdate:modelValue": Z[11] || (Z[11] = be => Re.value = be),
      title: ((ca = nt.value) == null ? void 0 : ca.title) || "资料详情",
      width: s.value ? "92%" : "480px",
      "align-center": "",
      class: "yy-dialog",
      "append-to-body": ""
    }, {
      footer: l(() => [a(pt, {
        onClick: Z[10] || (Z[10] = be => Re.value = !1)
      }, {
        default: l(() => [...Z[42] || (Z[42] = [g("取消", -1)])]),
        _: 1
      }), a(pt, {
        type: "primary",
        onClick: Me
      }, {
        default: l(() => [a(j, null, {
          default: l(() => [a(P(ig))]),
          _: 1
        }), Z[43] || (Z[43] = e("span", null, "打开网盘", -1))]),
        _: 1
      })]),
      default: l(() => [nt.value ? (c(), v("div", Boe, [e("div", Noe, [e("span", {
        class: Pe(["yy-dlg-chip", "yy-dlg-chip--" + nt.value.provider])
      }, h(nt.value.badge), 3), (c(!0), v(Ue, null, gt(nt.value.tags, be => (c(), v("span", {
        key: be,
        class: "yy-dlg-tag"
      }, h(be), 1))), 128))]), e("div", Uoe, h(nt.value.desc), 1), e("div", Roe, [Z[38] || (Z[38] = e("div", {
        class: "yy-dlg-field-label"
      }, "网盘链接", -1)), a(Et, {
        "model-value": nt.value.link,
        readonly: ""
      }, {
        append: l(() => [a(pt, {
          onClick: Z[8] || (Z[8] = be => qe(nt.value.link, "链接"))
        }, {
          default: l(() => [...Z[37] || (Z[37] = [g("复制", -1)])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model-value"])]), nt.value.password ? (c(), v("div", joe, [Z[40] || (Z[40] = e("div", {
        class: "yy-dlg-field-label"
      }, "提取码", -1)), a(Et, {
        "model-value": nt.value.password,
        readonly: "",
        class: "yy-dlg-pwd"
      }, {
        append: l(() => [a(pt, {
          onClick: Z[9] || (Z[9] = be => qe(nt.value.password, "提取码"))
        }, {
          default: l(() => [...Z[39] || (Z[39] = [g("复制", -1)])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model-value"])])) : M("", !0), e("div", qoe, [a(j, null, {
        default: l(() => [a(P(si))]),
        _: 1
      }), Z[41] || (Z[41] = e("span", null, "点击「打开网盘」将在新标签打开，请先登录对应网盘账号", -1))])])) : M("", !0)]),
      _: 1
    }, 8, ["modelValue", "title", "width"]), a(Ee, {
      modelValue: ce.value,
      "onUpdate:modelValue": Z[12] || (Z[12] = be => ce.value = be),
      width: s.value ? "95%" : "720px",
      "align-center": "",
      "append-to-body": "",
      class: "yy-ebook-dialog"
    }, {
      header: l(() => [e("div", Foe, [e("div", Woe, [a(j, {
        size: 22
      }, {
        default: l(() => [a(P(Ju))]),
        _: 1
      })]), e("div", Goe, [e("div", Joe, h(me.value.title), 1), e("div", Hoe, "全 " + h(me.value.chapters.length) + " 章 · 已学 " + h(_e.value.done) + " / " + h(_e.value.total), 1)])])]),
      default: l(() => [e("div", Qoe, [e("div", Koe, h(me.value.subtitle), 1), e("ol", Yoe, [(c(!0), v(Ue, null, gt(me.value.chapters, be => (c(), v("li", {
        key: be.idx,
        class: Pe(["yy-ebook-toc-item", {
          "is-done": ue.value.has(be.idx)
        }]),
        onClick: he => de(be)
      }, [e("div", Zoe, [ue.value.has(be.idx) ? (c(), ye(j, {
        key: 0,
        class: "yy-ebook-toc-check"
      }, {
        default: l(() => [a(P(ts))]),
        _: 1
      })) : (c(), v("span", eie, h(String(be.idx).padStart(2, "0")), 1))]), e("div", tie, [e("div", aie, h(be.title), 1), e("div", lie, h(be.desc), 1)]), e("div", nie, [a(j, null, {
        default: l(() => [a(P(qg))]),
        _: 1
      }), e("span", null, h(ue.value.has(be.idx) ? "再次学习" : "开始学习"), 1)])], 10, Xoe))), 128))]), e("div", oie, [a(j, null, {
        default: l(() => [a(P(si))]),
        _: 1
      }), Z[44] || (Z[44] = e("span", null, "点击章节在飞书新标签页打开对应学习文档。学习进度会保存在本地。", -1))])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Wn, {
      modelValue: n.value,
      "onUpdate:modelValue": Z[13] || (Z[13] = be => n.value = be)
    }, null, 8, ["modelValue"]), a(no, {
      modelValue: u.value,
      "onUpdate:modelValue": Z[14] || (Z[14] = be => u.value = be),
      onLoginSuccess: Yt
    }, null, 8, ["modelValue"]), a(ri, {
      onOpenRecharge: Z[15] || (Z[15] = be => n.value = !0),
      onOpenLogin: Z[16] || (Z[16] = be => u.value = !0)
    }), a(Ee, {
      modelValue: y.value,
      "onUpdate:modelValue": Z[22] || (Z[22] = be => y.value = be),
      title: "软件定制开发",
      width: s.value ? "90%" : "600px",
      center: "",
      class: "custom-dev-dialog"
    }, {
      footer: l(() => [a(pt, {
        onClick: Z[21] || (Z[21] = be => y.value = !1)
      }, {
        default: l(() => [...Z[48] || (Z[48] = [g("取消", -1)])]),
        _: 1
      }), a(pt, {
        type: "primary",
        onClick: Ea,
        loading: w.value
      }, {
        default: l(() => [...Z[49] || (Z[49] = [g("提交需求", -1)])]),
        _: 1
      }, 8, ["loading"])]),
      default: l(() => [a(jt, {
        model: z.value,
        "label-width": "100px",
        rules: x,
        ref_key: "customDevFormRef",
        ref: S
      }, {
        default: l(() => [a(ht, {
          label: "需求描述",
          prop: "description"
        }, {
          default: l(() => [a(Et, {
            modelValue: z.value.description,
            "onUpdate:modelValue": Z[17] || (Z[17] = be => z.value.description = be),
            type: "textarea",
            rows: 6,
            placeholder: "请详细描述您的定制开发需求，包括功能要求、使用场景、预期效果等",
            maxlength: "1000",
            "show-word-limit": ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(ht, {
          class: "contact-info-form-item"
        }, {
          default: l(() => [e("div", iie, [e("div", sie, [a(ht, {
            prop: "contactName",
            class: "contact-form-item"
          }, {
            label: l(() => [e("span", rie, [a(j, {
              class: "contact-icon"
            }, {
              default: l(() => [a(P(_n))]),
              _: 1
            }), Z[45] || (Z[45] = g(" 联系人： ", -1))])]),
            default: l(() => [a(Et, {
              modelValue: z.value.contactName,
              "onUpdate:modelValue": Z[18] || (Z[18] = be => z.value.contactName = be),
              placeholder: "请输入联系人姓名（选填）",
              maxlength: "50",
              class: "contact-input"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]), e("div", uie, [a(ht, {
            prop: "wechat",
            class: "contact-form-item"
          }, {
            label: l(() => [e("span", cie, [a(j, {
              class: "contact-icon"
            }, {
              default: l(() => [a(P(Po))]),
              _: 1
            }), Z[46] || (Z[46] = g(" 微信号： ", -1))])]),
            default: l(() => [a(Et, {
              modelValue: z.value.wechat,
              "onUpdate:modelValue": Z[19] || (Z[19] = be => z.value.wechat = be),
              placeholder: "请输入微信号（选填）",
              maxlength: "50",
              class: "contact-input"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]), e("div", die, [a(ht, {
            prop: "email",
            class: "contact-form-item"
          }, {
            label: l(() => [e("span", vie, [a(j, {
              class: "contact-icon"
            }, {
              default: l(() => [a(P(J_))]),
              _: 1
            }), Z[47] || (Z[47] = g(" 邮箱： ", -1))])]),
            default: l(() => [a(Et, {
              modelValue: z.value.email,
              "onUpdate:modelValue": Z[20] || (Z[20] = be => z.value.email = be),
              placeholder: "请输入邮箱地址（选填）",
              maxlength: "100",
              class: "contact-input"
            }, null, 8, ["modelValue"])]),
            _: 1
          })])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue", "width"])])
  }
}
