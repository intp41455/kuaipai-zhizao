// module: Yijuhua
// extracted from 02-index-8bb27f01.js.js @ 1442142
{
  const o = ln(),
    i = fn(),
    n = p(!1),
    s = p(!1),
    u = p(!1),
    d = p(0),
    f = p(!1),
    y = p(!1),
    w = p(!1),
    S = p(null),
    z = He => {
      S.value = He
    },
    x = () => {
      S.value = null
    },
    C = p({
      industry: "",
      ageMode: "any",
      ageRange: [18, 30],
      targetGroup: "",
      painPoints: "",
      solution: "",
      notes: ""
    }),
    V = () => {
      try {
        const He = localStorage.getItem(wy);
        if (He) {
          const G = JSON.parse(He);
          G && typeof G == "object" && (C.value = {
            industry: G.industry || "",
            ageMode: G.ageMode || "any",
            ageRange: Array.isArray(G.ageRange) ? G.ageRange : [18, 30],
            targetGroup: G.targetGroup || "",
            painPoints: G.painPoints || "",
            solution: G.solution || "",
            notes: G.notes || ""
          })
        }
      } catch (He) {
        console.error("加载补充创作信息缓存失败:", He)
      }
    },
    $ = () => {
      try {
        localStorage.setItem(wy, JSON.stringify(C.value))
      } catch (He) {
        console.error("保存补充创作信息缓存失败:", He)
      }
    },
    N = p(window.innerWidth <= 768),
    T = p(!!localStorage.getItem("authToken")),
    R = p({}),
    O = p(""),
    J = p(!1),
    ee = p(""),
    ie = p("auto");
  try {
    const He = localStorage.getItem(_y);
    (He === "manual" || He === "auto") && (ie.value = He)
  } catch {}
  oa(ie, He => {
    try {
      localStorage.setItem(_y, He === "manual" ? "manual" : "auto")
    } catch {}
  });
  const Ae = p(null),
    F = p(!1),
    Y = p("imitate"),
    ne = p(null),
    De = p({
      content: ""
    }),
    Q = p(!1),
    re = Le(() => !!O.value.trim() || !!ne.value),
    b = Le(() => Y.value === "write" ? "已选择 AI帮写文案，待一键生成时撰写新文案并配图" : "已选择 AI仿写文案，待一键生成时仿写新文案并配图"),
    te = Le(() => Y.value === "write" ? "预览 AI帮写文案" : "预览 AI仿写文案"),
    we = () => {
      var He;
      if (!Co()) {
        s.value = !0;
        return
      }(He = Ae.value) == null || He.openWrite()
    },
    ae = () => {
      var He;
      if (!Co()) {
        s.value = !0;
        return
      }(He = Ae.value) == null || He.openImitate()
    },
    me = He => {
      d.value = Number(He) || 1, u.value = !0
    },
    ce = ({
      content: He,
      title: G
    } = {}) => {
      let It = String(He || "");
      const da = String(G || "").trim();
      da && (It = `${da}

${It}`.trim()), O.value = It.length > 2e3 ? It.slice(0, 2e3) : It
    },
    ue = (He = {}) => {
      ce(He), ne.value = null, F.value = !1
    },
    U = () => {
      Q.value = !1, O.value = De.value.content || "", ne.value = null, F.value = !1
    },
    de = () => {
      Q.value = !1, Y.value === "write" ? we() : ae()
    },
    _e = () => {
      ne.value && (Q.value = !0)
    },
    xe = (He, G = 0) => {
      if (!He || G > 6) return {
        title: "",
        content: ""
      };
      if (typeof He == "string") return {
        title: "",
        content: He.trim()
      };
      if (Array.isArray(He)) return {
        title: "",
        content: He.map(It => xe(It, G + 1).content).filter(Boolean).join(`
`)
      };
      if (typeof He == "object") {
        const It = String(He.title ?? He.headline ?? "").trim();
        for (const da of ["content", "text", "article", "copy", "result", "output", "desc", "description"])
          if (typeof He[da] == "string" && He[da].trim()) return {
            title: It,
            content: He[da].trim()
          };
        for (const da of ["data", "message", "row", "detail"]) {
          const na = xe(He[da], G + 1);
          if (na.content) return {
            title: na.title || It,
            content: na.content
          }
        }
      }
      return {
        title: "",
        content: ""
      }
    },
    Ce = async (He = {}) => {
      let G;
      He.kind === "write" ? G = await Gf({
        prompt: He.prompt
      }) : G = await Jf(He.mode === "images" ? {
        mode: "images",
        images: He.images || [],
        requirement: He.requirement || ""
      } : {
        mode: "text",
        content: He.content || "",
        requirement: He.requirement || ""
      });
      const It = xe(G);
      if (!It.content) throw new Error(He.kind === "write" ? "接口未返回文案内容" : "接口未返回仿写内容");
      return It
    }, Re = (He = {}) => {
      var G;
      Oe.value || ((G = Ae.value) == null || G.closeAll(), ne.value || (De.value = {
        content: O.value || ""
      }), ne.value = He, Y.value = He.kind === "write" ? "write" : "imitate", F.value = !0, A.success("已选择全自动，可取消重选；点击一键生成后才会撰写新文案并配图"))
    }, nt = p("shunan"), tt = p(3), qe = Array.from({
      length: 10
    }, (He, G) => ({
      label: `${G+1} 个`,
      value: G + 1
    })), Me = p(1), rt = Array.from({
      length: 10
    }, (He, G) => ({
      label: `${G+1} 套`,
      value: G + 1
    }));
  oa(nt, (He, G) => {
    ka.value = He, Ea.value && He === "shunan" && (G === "lingxi" || G === "lingxi_gallery") && (A.warning("普通模式不支持模板参考图，已切换回 Pro 模式"), nt.value = "lingxi", ka.value = "lingxi")
  }), oa(f, He => {
    He && !C.value.industry && !C.value.targetGroup && !C.value.painPoints && V()
  });
  const ct = p("常规语气"),
    E = p([{
      label: "常规语气",
      value: "常规语气"
    }, {
      label: "正式语气",
      value: "正式语气"
    }, {
      label: "幽默语气",
      value: "幽默语气"
    }, {
      label: "夸张语气",
      value: "夸张语气"
    }, {
      label: "友好语气",
      value: "友好语气"
    }, {
      label: "推销语气",
      value: "推销语气"
    }, {
      label: "讽刺语气",
      value: "讽刺语气"
    }, {
      label: "诗歌语气",
      value: "诗歌语气"
    }]),
    _ = () => nt.value === "lingxi_gallery" ? !!(Ie.value || pe.value) : !!(nt.value === "lingxi" ? B.value : K.value),
    je = He => {
      const G = nt.value,
        It = G === "lingxi_gallery";
      let da = "一句话图文";
      G === "shunan" ? da = "一句话图文 - 普通版(大字报)" : G === "lingxi" ? da = "一句话图文 - 高级版(单封面)" : G === "lingxi_gallery" && (da = "一句话图文 - 高级版(多图集)");
      const na = [];
      na.push(`创作类型：${da}`), na.push(`【核心主题】：${He}`), ct.value && na.push(`语气：${ct.value}`);
      const la = y.value && C.value ? qi(C.value) : "";
      la && na.push(la.replace("【补充创作信息】", "【需要在本次内容中植入/种草的信息】（请把以下信息自然地融入正文、案例或卖点中）"));
      const Aa = S.value;
      if (Aa && Aa.name) {
        const ql = Aa.type === "merchant" || Aa.type === 1,
          il = Aa.data || {},
          Za = Cl => Array.isArray(Cl) ? Cl.filter(Boolean).join("、") : Cl || "",
          hl = [];
        ql ? (il.brandName && hl.push(`品牌名称：${il.brandName}`), il.merchantType && hl.push(`商家类型：${il.merchantType}`), Za(il.industry) && hl.push(`所属行业：${Za(il.industry)}`), Za(il.brandTone) && hl.push(`品牌调性：${Za(il.brandTone)}`), Za(il.sellingPoints) && hl.push(`核心卖点：${Za(il.sellingPoints)}`), Za(il.targetCustomer) && hl.push(`目标客户：${Za(il.targetCustomer)}`)) : (Za(il.baseIdentity) && hl.push(`基础身份：${Za(il.baseIdentity)}`), Za(il.realIdentity) && hl.push(`现实身份：${Za(il.realIdentity)}`), Za(il.coreTags) && hl.push(`核心标签：${Za(il.coreTags)}`), il.story && hl.push(`背景故事：${il.story}`));
        const Yl = [`本次创作身份的人设定位是：${Aa.name}`, "请全程以该人设的身份背景、语气和表达方式来创作内容。"];
        hl.length && Yl.push(hl.map(Cl => `- ${Cl}`).join(`
`)), na.push(Yl.join(`
`))
      }
      const Kl = It ? Math.max(1, Number(tt.value) || 1) : 1;
      return It && na.push(`本配图总数量：${Kl} 张`), na.push("配图比例：竖版 3:4（宽:高 = 3:4）"), _() ? na.push("【参考图】已作为配图模板。大纲只写要上图的文字，不要写实拍、换色、换版式等配图建议。") : It && Kl >= 2 && na.push(`【整套图】共 ${Kl} 张，配色/字体/版式统一，每张内容不同。`), na.join(`

`)
    },
    K = p(""),
    B = p(""),
    W = p(null),
    Te = p(null),
    it = p(!1),
    yt = p(!1),
    st = p(0),
    Ie = p(""),
    pe = p(""),
    Be = p(!1),
    xt = p(!1),
    Yt = p(""),
    Ye = p(!1),
    va = p(!1),
    Ea = p(!1),
    ft = () => {
      B.value = Ie.value || pe.value || ""
    },
    Z = p(!1),
    pt = p(0),
    Et = p([]),
    Mt = p(!1),
    Qe = p([]),
    j = p("all"),
    Ee = p("all"),
    ht = p(null),
    jt = p([]),
    ca = He => He === 1 ? "product" : He === 2 ? "scene" : He === 3 ? "display" : "other",
    be = He => {
      if (He == null || He === "") return null;
      if (typeof He == "number") {
        const It = He < 1e12 ? He * 1e3 : He;
        return new Date(It)
      }
      const G = new Date(He);
      return isNaN(G.getTime()) ? null : G
    },
    he = He => {
      const G = Ee.value;
      if (G === "all") return !0;
      const It = be(He.createTime);
      if (!It) return !1;
      const da = new Date,
        na = new Date(da.getFullYear(), da.getMonth(), da.getDate(), 0, 0, 0, 0),
        la = new Date(da.getFullYear(), da.getMonth(), da.getDate(), 23, 59, 59, 999);
      if (G === "today") return It >= na && It <= la;
      const Aa = new Date(da.getFullYear(), da.getMonth(), da.getDate() - 1, 0, 0, 0, 0),
        Kl = new Date(da.getFullYear(), da.getMonth(), da.getDate() - 1, 23, 59, 59, 999);
      if (G === "yesterday") return It >= Aa && It <= Kl;
      if (G === "week") {
        const ql = new Date(da.getFullYear(), da.getMonth(), da.getDate() - 6, 0, 0, 0, 0);
        return It >= ql && It <= la
      }
      if (G === "custom" && ht.value) {
        const [ql, il, Za] = ht.value.split("-").map(Number), hl = new Date(ql, il - 1, Za, 0, 0, 0, 0), Yl = new Date(ql, il - 1, Za, 23, 59, 59, 999);
        return It >= hl && It <= Yl
      }
      return !0
    },
    kt = Le(() => {
      let He = Et.value;
      const G = j.value;
      if (G === "cg:none") He = He.filter(It => !It.customGroupId);
      else if (G && G.startsWith("cg:")) {
        const It = G.slice(3);
        He = He.filter(da => da.customGroupId === It)
      }
      return He.filter(It => he(It))
    }),
    Bt = p(1),
    Ze = Le(() => kt.value.length),
    Wt = Le(() => {
      const He = kt.value,
        G = (Bt.value - 1) * Td;
      return He.slice(G, G + Td)
    }),
    aa = He => {
      Bt.value = He
    };
  oa([j, Ee, ht], () => {
    Bt.value = 1
  });
  const xa = async () => {
    try {
      const He = await dc();
      jt.value = Array.isArray(He) ? He.map(G => ({
        id: String(G.id),
        name: G.name || ""
      })) : []
    } catch (He) {
      console.warn("加载素材分组失败:", He), jt.value = []
    }
  }, Kt = async () => {
    Mt.value = !0, Qe.value = [], j.value = "all", Ee.value = "all", ht.value = null, Bt.value = 1;
    try {
      await xa();
      const He = await kv({
          page: 1,
          size: 200
        }),
        G = Array.isArray(He == null ? void 0 : He.rows) ? He.rows : [];
      Et.value = G.map(It => {
        const da = ca(It.type),
          na = It.groupid ?? It.group_id ?? It.groupId ?? It.customGroupId,
          Aa = (na === "" || na === null || na === void 0 ? 0 : Number(na)) === 0 ? "" : String(na);
        return {
          id: It.id,
          name: It.name || `素材${It.id}`,
          url: It.url,
          group: da,
          customGroupId: Aa,
          createTime: It.createtime || It.createTime || ""
        }
      })
    } catch (He) {
      console.error("加载素材库失败:", He), Et.value = [], A.error((He == null ? void 0 : He.message) || "加载素材库失败，请先登录或稍后重试")
    } finally {
      Mt.value = !1
    }
  }, at = He => Qe.value.includes(He), Fe = He => {
    const G = He == null ? void 0 : He.url;
    if (!G) return;
    Qe.value.indexOf(G) !== -1 ? Qe.value = [] : Qe.value = [G]
  }, Ke = () => {
    const He = Qe.value[0];
    if (He) {
      if (nt.value !== "lingxi_gallery") B.value = He, Ea.value = !1, A.success("已从素材库选择参考图");
      else {
        const G = pt.value;
        G === 1 ? pe.value = He : Ie.value = He, ft(), Ea.value = !1, A.success(G === 1 ? "已选择内容参考图" : "已选择封面参考图")
      }
      Z.value = !1, Qe.value = []
    }
  }, et = () => {
    Z.value = !1, o.push("/user?tab=material_library")
  }, Nt = He => {
    if (!localStorage.getItem("authToken")) {
      s.value = !0;
      return
    }
    nt.value === "lingxi_gallery" && (pt.value = typeof He == "number" ? He : st.value), yt.value = !1, Z.value = !0
  }, Ut = He => {
    const G = He.previewImage || He.cover;
    B.value = G, Ie.value = G, Ea.value = !0, W.value && (W.value.value = ""), Te.value && (Te.value.value = ""), A.success("已选择模板")
  }, Ge = () => {
    Ye.value = !0
  }, dt = () => {
    yt.value = !1, Ge()
  }, qt = p([{
    id: "shunan",
    name: "普通大字报",
    consumption: "1"
  }, {
    id: "lingxi",
    name: "高级设计师",
    consumption: "5"
  }, {
    id: "lingxi_gallery",
    name: "高级图集",
    consumption: "4/图"
  }]), ka = p("shunan");
  Le(() => qt.value.find(He => He.id === ka.value) || qt.value[0]);
  const Ne = p(!1),
    ga = p(!1),
    St = p(!1),
    Oe = p(!1),
    Ve = p(!1),
    Ma = p(!1),
    Je = p(0),
    ve = p(""),
    $t = p(!1),
    ta = p(!1),
    ha = p(""),
    Qt = p(!1),
    ba = p(!1),
    Ja = p(30);
  let ml = null,
    $e = null;
  const We = () => {
      ml && (clearTimeout(ml), ml = null), $e && (clearInterval($e), $e = null)
    },
    ze = () => {
      We(), Ja.value = 30, $e = setInterval(() => {
        Ja.value > 0 && (Ja.value -= 1), Ja.value <= 0 && $e && (clearInterval($e), $e = null)
      }, 1e3), ml = setTimeout(() => {
        We(), Qt.value = !0, $t.value = !1, ba.value = !1, o.push("/works").catch(() => {})
      }, 3e4)
    },
    H = (He = 60) => new Promise(G => {
      const It = () => {
        Je.value < 100 ? (Je.value = Math.min(100, Je.value + 1), setTimeout(It, He)) : G()
      };
      It()
    }),
    Lt = p(0),
    Ft = p(["联网搜索中", "七大AI模型匹配中", "设计师正在思考", "多模态合并中"]),
    Rt = p(0);
  Le(() => Ft.value[Rt.value]);
  const Ot = p(["分析优质潜质", "生成标题内容", "生成配图"]),
    Xt = p(0);
  Le(() => Ot.value[Xt.value]);
  const At = p(["高级制作，让图文内容更具优质潜力", "一键生成，省时省力，为高效而生", "AI智能创作，让每一篇图文都成为优质", "专业设计，让内容更有吸引力", "快速生成，释放你的创作灵感", "高效率制作，几分钟完成专业级图文", "一键导出，轻松分享到各大平台", "优质潜质，AI算法助力内容脱颖而出", "灵感参考，学习热门图文的成功秘诀"]),
    pa = p(0);
  let Oa = null,
    Fa = null;
  const gl = () => {
      Oa && clearInterval(Oa), pa.value = Math.floor(Math.random() * At.value.length), Oa = setInterval(() => {
        let He;
        do He = Math.floor(Math.random() * At.value.length); while (He === pa.value && At.value.length > 1);
        pa.value = He
      }, 3e3)
    },
    jl = () => {
      Oa && (clearInterval(Oa), Oa = null)
    },
    en = Le(() => typeof window < "u" && window.innerWidth <= 768 ? 62 : 65),
    fa = Le(() => 2 * Math.PI * en.value),
    Ka = Le(() => fa.value - Je.value / 100 * fa.value);
  Le(() => fa.value - Lt.value / 100 * fa.value);
  const Dl = () => {
      Fa && clearInterval(Fa), Rt.value = 0, Fa = setInterval(() => {
        Rt.value = (Rt.value + 1) % Ft.value.length, Lt.value < Je.value && (Lt.value = Math.min(Lt.value + Math.random() * 3, Je.value))
      }, 2500)
    },
    tn = () => {
      Fa && (clearInterval(Fa), Fa = null)
    };
  oa($t, He => {
    He ? (pa.value = 0, Lt.value = 0, Rt.value = 0, gl(), Dl()) : (jl(), tn())
  }), oa(Je, He => {
    He > Lt.value && (Lt.value = Math.min(He + Math.random() * 2, He))
  });
  const zt = ["给美妆护肤写一篇分享图文", "给穿搭时尚写一篇入门图文", "给美食探店写一篇推荐图文", "给旅游攻略写一篇使用指南", "给家居好物写一篇推荐图文", "给数码产品写一篇测评图文", "给健身教程写一篇学习图文", "给职场技能写一篇干货分享", "给考研资料包写一篇介绍图文", "给公考资料写一篇使用指南", "给AI工具写一篇推荐图文", "给设计素材写一篇推荐图文", "给办公教程写一篇学习图文", "给编程教程写一篇入门图文", "给脚本工具写一篇推荐图文", "给考研专项资料包写一篇介绍", "给公考省考资料写一篇使用指南", "给教资备考资料写一篇推荐", "给职业资格证资料写一篇学习", "给语言学习资料写一篇入门", "给中小学教辅资料写一篇推荐", "给课件教案模板写一篇使用技巧", "给手抄报模板写一篇制作教程", "给设计素材包写一篇使用指南", "给PS预设插件写一篇安装教程", "给手账素材包写一篇使用技巧", "给设计源文件写一篇使用指南", "给AI设计工具写一篇推荐图文", "给办公效率脚本写一篇使用指南", "给编程实用脚本写一篇使用技巧", "给AI工具合集写一篇推荐图文", "给批量处理工具写一篇使用指南", "给自动化脚本写一篇使用技巧", "给绘本电子版写一篇介绍图文", "给考研专项资料包写一篇介绍图文", "给公考省考资料写一篇使用指南图文", "给教资备考资料写一篇推荐图文", "给职业资格证资料写一篇学习图文", "给语言学习资料写一篇入门图文", "给中小学教辅资料写一篇推荐图文", "给办公软件教程写一篇学习图文", "给公文写作模板写一篇使用图文", "给行业报告模板写一篇介绍图文", "给数据分析模板写一篇使用图文", "给设计模板素材写一篇推荐图文", "给壁纸图标素材写一篇推荐图文", "给字体样机资源写一篇推荐图文", "给设计教程资料写一篇学习图文", "给视频剪辑资源写一篇推荐图文", "给副业指南网创课程写一篇介绍", "给电商运营教程写一篇学习图文", "给编程开发教程写一篇推荐图文", "给手机摄影修图教程写一篇技巧", "给兴趣技能教程写一篇推荐图文", "给设计辅助工具写一篇推荐图文", "给视频剪辑插件写一篇安装教程", "给无版权软件安装包写一篇推荐", "给行业专用插件写一篇介绍图文", "给数据采集工具写一篇推荐图文", "给少儿教辅资料写一篇推荐图文", "给早教教案资料写一篇推荐图文", "给家长辅导话术写一篇推荐图文", "给儿童兴趣培养资料写一篇介绍", "给考研专项资料包写一篇详细介绍图文", "给大厂面试真题集写一篇推荐图文", "给新媒体运营教程写一篇入门图文", "给编程源文件项目源码写一篇介绍", "给可打印学习资料写一篇使用指南", "给乐高搭建图纸库写一篇使用技巧", "给考研专项资料包写一篇详细介绍图文内容", "给公考省考资料写一篇完整使用指南图文", "给教资备考资料写一篇详细推荐图文内容", "给职业资格证资料写一篇完整学习图文", "给语言学习资料写一篇详细介绍图文内容", "给中小学教辅资料写一篇完整推荐图文", "给课件教案模板写一篇详细使用技巧图文", "给手抄报模板写一篇完整制作教程图文", "给简历模板写一篇详细使用指南图文内容", "给PPT模板写一篇完整设计技巧图文内容", "给设计素材包写一篇详细使用指南图文", "给PS预设插件写一篇完整安装教程图文", "给办公软件教程写一篇详细学习图文内容", "给编程开发教程写一篇完整推荐图文内容", "给AI工具合集写一篇详细推荐图文内容", "给视频剪辑插件写一篇完整安装教程图文", "给设计教程资料写一篇详细学习图文内容", "给新媒体运营教程写一篇完整入门图文", "给电商运营教程写一篇详细学习图文内容", "给手机摄影修图教程写一篇完整技巧图文", "给考研资料包写一篇分享推荐图文", "给PPT模板写一篇干货分享图文", "给设计素材写一篇分享推荐图文", "给办公教程写一篇干货分享图文", "给编程教程写一篇分享推荐图文", "给AI工具写一篇干货分享图文", "给学习资料写一篇分享推荐图文", "给教辅资料写一篇干货分享图文", "给考研专项资料包写一篇分享推荐", "给公考省考资料写一篇干货分享图文", "给教资备考资料写一篇分享推荐图文", "给职业资格证资料写一篇干货分享", "给语言学习资料写一篇分享推荐图文", "给中小学教辅资料写一篇干货分享图文", "给课件教案模板写一篇分享推荐图文", "给简历模板写一篇干货分享图文", "给PPT模板写一篇分享推荐图文", "给设计素材包写一篇干货分享图文", "给PS预设插件写一篇分享推荐图文", "给办公软件教程写一篇干货分享图文", "给编程开发教程写一篇分享推荐图文", "给AI工具合集写一篇干货分享图文", "给视频剪辑插件写一篇分享推荐图文", "给设计教程资料写一篇干货分享图文", "给新媒体运营教程写一篇分享推荐", "给电商运营教程写一篇干货分享图文", "给手机摄影修图教程写一篇分享推荐", "给兴趣技能教程写一篇干货分享图文", "给办公效率脚本写一篇分享推荐图文", "给设计辅助工具写一篇干货分享图文", "给编程实用脚本写一篇分享推荐图文", "给批量处理工具写一篇干货分享图文", "给数据采集工具写一篇分享推荐图文", "给少儿教辅资料写一篇干货分享图文", "给早教教案资料写一篇分享推荐图文", "给家长辅导话术写一篇干货分享图文", "给考研专项资料包写一篇详细分享推荐", "给公考省考资料写一篇完整干货分享图文", "给教资备考资料写一篇详细分享推荐图文", "给职业资格证资料写一篇完整干货分享", "给语言学习资料写一篇详细分享推荐图文", "给中小学教辅资料写一篇完整干货分享图文", "给课件教案模板写一篇详细分享推荐图文", "给简历模板写一篇完整干货分享图文内容", "给PPT模板写一篇详细分享推荐图文内容", "给设计素材包写一篇完整干货分享图文", "给PS预设插件写一篇详细分享推荐图文", "给办公软件教程写一篇完整干货分享图文内容", "给编程开发教程写一篇详细分享推荐图文内容", "给AI工具合集写一篇完整干货分享图文内容", "给视频剪辑插件写一篇详细分享推荐图文", "给设计教程资料写一篇完整干货分享图文内容", "给新媒体运营教程写一篇详细分享推荐图文", "给电商运营教程写一篇完整干货分享图文内容", "给手机摄影修图教程写一篇详细分享推荐图文"],
    dl = ["给美妆护肤写一篇分享推荐图文", "给穿搭时尚写一篇入门图文", "给美食探店写一篇推荐图文", "给旅游攻略写一篇使用指南", "给家居好物写一篇推荐图文", "给数码产品写一篇测评图文", "给健身教程写一篇学习图文", "给职场技能写一篇干货分享"],
    Nl = () => {
      const He = N.value ? 4 : 8;
      if (dl.length >= He) return dl.slice(0, He);
      {
        const It = (da => [...da].sort(() => Math.random() - .5))(zt).filter(da => !dl.includes(da)).slice(0, He - dl.length);
        return [...dl, ...It]
      }
    },
    kn = () => {
      const He = zt.filter(da => da.length === 15 || da.length === 16);
      return (da => [...da].sort(() => Math.random() - .5))(He)[0] || "给考研专项资料包写一篇详细介绍图文内容"
    },
    Cn = p(kn()),
    ll = p(Nl()),
    Ul = Le(() => ll.value),
    _l = p([]),
    Tn = p(["全部"]),
    Dn = p("全部"),
    An = p(!1),
    dn = p(new Map),
    $n = Le(() => N.value ? 5 : 9),
    Xe = async () => {
      try {
        const G = await lp(1);
        let It = [];
        if (G && typeof G == "object" ? Array.isArray(G) ? It = G : G.data && Array.isArray(G.data) ? It = G.data : G.rows && Array.isArray(G.rows) ? It = G.rows : G.list && Array.isArray(G.list) && (It = G.list) : Array.isArray(G) && (It = G), Array.isArray(It) && It.length > 0) {
          const la = It.filter(Aa => typeof Aa == "object" && Aa !== null && "status" in Aa ? Aa.status === 0 : !0).sort((Aa, Kl) => {
            if (typeof Aa == "object" && typeof Kl == "object") {
              const ql = Aa.sort !== void 0 ? Aa.sort : 0,
                il = Kl.sort !== void 0 ? Kl.sort : 0;
              return ql - il
            }
            return 0
          }).map(Aa => typeof Aa == "string" ? Aa : Aa && typeof Aa == "object" && Aa.name ? (Aa.id !== void 0 && dn.value.set(Aa.name, Aa.id), Aa.name) : Aa && typeof Aa == "object" && Aa.title ? (Aa.id !== void 0 && dn.value.set(Aa.title, Aa.id), Aa.title) : String(Aa));
          Tn.value = ["全部", ...la.filter(Aa => Aa !== "全部")]
        } else Tn.value = ["全部"]
      } catch (He) {
        console.error("加载精选案例分类失败:", He), Tn.value = ["全部"]
      }
    }, se = He => {
      Dn.value = He, Tt()
    }, Tt = async () => {
      try {
        const He = {
            type: 1,
            type_id: Dn.value === "全部" ? 0 : dn.value.get(Dn.value) || 0,
            title: "",
            page: 1,
            size: 6
          },
          G = await op(He);
        let It = [];
        if (G && typeof G == "object" && (G.rows && Array.isArray(G.rows) ? It = G.rows : G.data && typeof G.data == "object" ? G.data.rows && Array.isArray(G.data.rows) ? It = G.data.rows : Array.isArray(G.data) && (It = G.data) : Array.isArray(G) && (It = G)), It && It.length > 0) {
          const da = It.slice(0, 6);
          _l.value = da.map(na => {
            let la = "";
            if (na.images) {
              if (Array.isArray(na.images) && na.images.length > 0) la = na.images[0];
              else if (typeof na.images == "string") {
                const Za = na.images.trim();
                if (Za.startsWith("[") && Za.endsWith("]")) try {
                  const hl = JSON.parse(Za);
                  Array.isArray(hl) && hl.length > 0 && (la = hl[0])
                } catch {
                  la = Za
                } else la = Za
              }
            }
            if ((!la || la.trim() === "") && (la = na.cover || na.image || na.img || ""), la && typeof la == "string" && la.startsWith("//") && (la = "https:" + la), la && typeof la == "string" && la.startsWith("/") && !la.startsWith("http://") && !la.startsWith("https://") && (la.includes("://") || (la = "https://api.aichaoer.cn" + la)), !la || la.trim() === "") return null;
            const Aa = na.first_name || na.second_name || na.category || na.category_name || na.type_name || "默认",
              Kl = [];
            if (na.desc) {
              const Za = na.desc.match(/#[^#\s\n\r]+/g);
              Za && Kl.push(...Za.map(hl => hl.replace("#", "")))
            }
            let ql = [];
            if (na.images) {
              if (Array.isArray(na.images)) ql = na.images.map(Za => typeof Za == "string" ? Za.startsWith("//") ? "https:" + Za : Za.startsWith("/") && !Za.includes("://") ? "https://api.aichaoer.cn" + Za : Za : Za).filter(Boolean);
              else if (typeof na.images == "string") {
                const Za = na.images.trim();
                if (Za.startsWith("[") && Za.endsWith("]")) try {
                  const hl = JSON.parse(Za);
                  Array.isArray(hl) && (ql = hl.map(Yl => typeof Yl == "string" ? Yl.startsWith("//") ? "https:" + Yl : Yl.startsWith("/") && !Yl.includes("://") ? "https://api.aichaoer.cn" + Yl : Yl : Yl).filter(Boolean))
                } catch {
                  ql = [Za]
                } else ql = [Za]
              }
            }
            ql.length === 0 && la && (ql = [la]);
            let il = na.usage || na.use_count || na.count || 0;
            return (!il || il === 0) && (il = Math.floor(Math.random() * 1001) + 1e3), {
              id: na.id,
              title: na.title || na.name || "",
              image: la,
              cover: la,
              images: ql,
              category: Aa,
              tags: Kl.length > 0 ? Kl : ["案例展示", "热门推荐"],
              usage: il,
              isNew: na.is_new || na.isNew || !1,
              isHot: na.is_hot || na.isHot || !1,
              originalData: na
            }
          }).filter(Boolean), _l.value.length === 0 ? _l.value = Ht() : _l.value.length < 6
        } else _l.value = Ht()
      } catch (He) {
        console.error("加载热门模板失败:", He), _l.value = Ht()
      }
    }, Ht = () => [{
      id: "placeholder-1",
      title: "如何快速拉近与他人的距离？",
      image: "https://picsum.photos/seed/yijuhua1/600/800",
      cover: "https://picsum.photos/seed/yijuhua1/600/800",
      images: ["https://picsum.photos/seed/yijuhua1/600/800"],
      category: "精选案例",
      tags: ["案例展示", "热门推荐"],
      originalData: {}
    }, {
      id: "placeholder-2",
      title: "让人惊艳的AI产品",
      image: "https://picsum.photos/seed/zhiding/600/800",
      cover: "https://picsum.photos/seed/zhiding/600/800",
      images: ["https://picsum.photos/seed/zhiding/600/800"],
      category: "精选案例",
      tags: ["案例展示", "热门推荐"],
      originalData: {}
    }, {
      id: "placeholder-3",
      title: "高级感封面设计！",
      image: "https://picsum.photos/seed/yijuhua3/600/800",
      cover: "https://picsum.photos/seed/yijuhua3/600/800",
      images: ["https://picsum.photos/seed/yijuhua3/600/800"],
      category: "精选案例",
      tags: ["案例展示", "热门推荐"],
      originalData: {}
    }, {
      id: "placeholder-4",
      title: "优质封面设计指南",
      image: "https://picsum.photos/seed/yijuhua4/600/800",
      cover: "https://picsum.photos/seed/yijuhua4/600/800",
      images: ["https://picsum.photos/seed/yijuhua4/600/800"],
      category: "精选案例",
      tags: ["案例展示", "热门推荐"],
      originalData: {}
    }, {
      id: "placeholder-5",
      title: "做内容运营必备的10个工具",
      image: "https://picsum.photos/seed/yijuhua5/600/800",
      cover: "https://picsum.photos/seed/yijuhua5/600/800",
      images: ["https://picsum.photos/seed/yijuhua5/600/800"],
      category: "精选案例",
      tags: ["案例展示", "热门推荐"],
      originalData: {}
    }, {
      id: "placeholder-6",
      title: "如何做好一款产品？",
      image: "https://picsum.photos/seed/yijuhua6/600/800",
      cover: "https://picsum.photos/seed/yijuhua6/600/800",
      images: ["https://picsum.photos/seed/yijuhua6/600/800"],
      category: "精选案例",
      tags: ["案例展示", "热门推荐"],
      originalData: {}
    }], Pa = p(2), Va = Le(() => {
      if (!Array.isArray(_l.value)) return [];
      const He = N.value ? Pa.value : 6;
      return _l.value.slice(0, He)
    }), X = () => {
      const He = Math.min(_l.value.length, 6);
      Pa.value = Math.min(Pa.value + 4, He)
    }, le = He => He >= 1e3 ? (He / 1e3).toFixed(1) + "k" : He.toString(), ot = p(-1), vt = He => {
      if (!N.value) return;
      const G = He.target;
      !G.closest(".card-image-wrapper") && !G.closest(".card-image-buttons-mobile") && (ot.value = -1)
    }, bt = p(!1), Jt = p({
      title: "",
      content: "",
      tags: [],
      images: [],
      editTime: "",
      comments: []
    }), Ra = p({
      name: "",
      avatar: ""
    }), Ca = Le(() => ({
      ...Jt.value,
      user: Ra.value
    })), Ba = p(null), Qa = ["小雨的日常", "阳光宝贝", "小猫咪爱吃鱼", "咖啡不加糖", "午后时光", "星星点灯", "月亮不睡", "爱吃甜食的猫", "周末宅家", "夏日清风", "秋日私语", "冬日暖阳", "春天的风", "夏天的雨", "秋天的叶", "追风少年", "青春无敌", "时光荏苒", "岁月如歌", "梦想家"], rl = {
      默认: ["生活好物", "效率提升", "干货分享", "实用技巧", "场景描述", "必看攻略", "收藏推荐"],
      设计: ["设计灵感", "配色参考", "排版技巧", "封面设计", "设计教程", "创意设计", "设计干货"],
      运营: ["运营技巧", "内容创作", "账号运营", "数据分析", "内容传播秘籍", "热门话题", "优质打造"],
      成长: ["自我提升", "成长记录", "学习图文", "日常分享", "心态管理", "坚持打卡", "生活记录"]
    }, sa = () => {
      const He = Math.floor(Math.random() * Qa.length);
      return {
        name: Qa[He],
        avatar: `https://picsum.photos/seed/user-${He}-${Date.now()}/40/40`
      }
    }, Ga = He => {
      const G = [`关于 ${He}，下面整理一份实用要点参考。

01 基础准备
- 明确目标
- 列出关键步骤
- 准备好所需工具

02 实操流程
- 按顺序逐步完成
- 及时记录遇到的问题
- 参考案例不断优化

03 经验总结
- 复盘关键环节
- 梳理改进思路
- 输出可复制的方法

以上为内容创作参考，可在此基础上进一步加工。`, `${He} 主题内容框架参考：

第一部分：基础逻辑
- 为什么要做这件事？
- 可以解决哪些痛点？
- 核心价值是什么？

第二部分：实操方法
- 步骤拆解
- 使用工具
- 注意事项

第三部分：延伸建议
- 如何复用这个思路
- 可以探索的新方向
- 避坑提醒

以上为通用结构示例，可结合具体方向继续补充。`, `围绕 ${He}，整理如下要点：

✔ 关键步骤：
1. 做好前期准备
2. 按阶段推进
3. 及时复盘总结

✔ 注意事项：
- 保持耐心，持续优化
- 多参考对标案例
- 善用工具提高效率

✔ 总结：
持续输出与方法论沉淀，是这一话题中最值得关注的点。

以上内容仅供创作参考，欢迎在此基础上进一步加工。`];
      return G[Math.floor(Math.random() * G.length)]
    }, ol = (He = []) => {
      const G = ["干货满满", "原创分享", "经验总结", "避坑指南", "小白必看", "实用技巧", "效率提升", "收藏推荐", "必读", "高效生活"],
        It = [...He],
        da = 8 - It.length;
      if (da > 0) {
        const na = G.sort(() => .5 - Math.random());
        It.push(...na.slice(0, da))
      }
      return It.slice(0, Math.min(10, Math.max(5, It.length)))
    }, Sl = He => {
      const G = He.getFullYear(),
        It = String(He.getMonth() + 1).padStart(2, "0"),
        da = String(He.getDate()).padStart(2, "0");
      return `${G}-${It}-${da}`
    }, In = He => {
      const It = Sl(new Date);
      let da = [],
        na = "";
      if (He.originalData) {
        const il = He.originalData;
        il.images && Array.isArray(il.images) && il.images.length > 0 ? da = il.images.map(Za => Za && Za.startsWith("//") ? "https:" + Za : Za) : da = [He.image], na = il.desc || Ga(He.title)
      } else da = [He.image, `https://picsum.photos/seed/${encodeURIComponent(He.title)}-1/600/800`, `https://picsum.photos/seed/${encodeURIComponent(He.title)}-2/600/800`], na = Ga(He.title);
      let la = sa();
      R.value && (R.value.nickname || R.value.avatar) && (la = {
        name: R.value.nickname || la.name,
        avatar: R.value.avatar || Xl || la.avatar
      });
      const Aa = Array.isArray(He.tags) ? He.tags : [],
        Kl = rl[He.category || "默认"] || rl.默认,
        ql = ol([...new Set([...Aa, ...Kl])]);
      Ra.value = la, Jt.value = {
        title: He.title,
        content: na,
        tags: ql,
        images: da,
        editTime: It,
        comments: []
      }, Ba.value = He, bt.value = !0
    }, wo = He => {
      if (bt.value = !1, Ba.value) sl(Ba.value);
      else if (He) {
        const G = {
          title: He.title || "",
          image: He.images && He.images.length > 0 ? He.images[0] : "",
          cover: He.images && He.images.length > 0 ? He.images[0] : "",
          images: He.images || [],
          originalData: He
        };
        sl(G)
      }
    }, nn = p(!1);
  let Pn = 0;
  const Gn = He => {
      var It;
      const G = (It = He == null ? void 0 : He.dataTransfer) == null ? void 0 : It.types;
      return G ? Array.from(G).includes("Files") : !1
    },
    co = He => {
      it.value || B.value || Gn(He) && (Pn += 1, nn.value = !0)
    },
    Pt = He => {
      it.value || B.value || Gn(He) && He.dataTransfer && (He.dataTransfer.dropEffect = "copy")
    },
    yl = () => {
      Pn = Math.max(0, Pn - 1), Pn === 0 && (nn.value = !1)
    },
    Mn = async He => {
      var da;
      if (Pn = 0, nn.value = !1, it.value || B.value) return;
      const It = Array.from(((da = He.dataTransfer) == null ? void 0 : da.files) || []).find(na => na.type && na.type.startsWith("image/"));
      if (!It) {
        A.warning("请拖入图片文件");
        return
      }
      await vn({
        target: {
          files: [It]
        }
      })
    }, vn = async He => {
      var na;
      const G = (na = He.target.files) == null ? void 0 : na[0];
      if (!G) return;
      if (!G.type.startsWith("image/")) {
        A.warning("请上传图片文件");
        return
      }
      let It = G;
      if (Yo(G)) try {
        It = await _i(G), A.info("HEIC 格式已转换为 JPEG")
      } catch (la) {
        console.error("HEIC 处理失败:", la), A.error(la.message || "HEIC 格式暂不支持，请先将图片转换为 JPEG 或 PNG 格式"), W.value && (W.value.value = "");
        return
      }
      const da = new FileReader;
      da.onload = la => {
        var Aa;
        B.value = ((Aa = la.target) == null ? void 0 : Aa.result) || ""
      }, da.readAsDataURL(It), it.value = !0;
      try {
        const la = await ao(It),
          Aa = typeof la == "string" ? la : (la == null ? void 0 : la.url) || (la == null ? void 0 : la.data) || la;
        if (!Aa) throw new Error("上传失败，未返回图片地址");
        B.value = Aa, Ea.value = !1, A.success("参考图上传成功")
      } catch (la) {
        console.error("参考图上传失败:", la), A.error((la == null ? void 0 : la.message) || "参考图上传失败，请重试"), B.value = "", W.value && (W.value.value = "")
      } finally {
        it.value = !1
      }
    }, Nn = () => {
      B.value = "", Ea.value = !1, W.value && (W.value.value = ""), Te.value && (Te.value.value = "")
    }, zo = () => {
      var He;
      (He = Te.value) == null || He.click()
    }, On = () => {
      B.value && (va.value = !0)
    }, ti = He => {
      He && He.cover && (B.value = He.cover, va.value = !0)
    }, _o = He => {
      const G = (He || []).filter(Boolean);
      G.length && (nt.value === "lingxi_gallery" ? (G.length >= 2 ? (Ie.value = G[0], pe.value = G[1]) : st.value === 0 ? Ie.value = G[0] : pe.value = G[0], ft()) : B.value = G[0], Ea.value = !1)
    }, ci = async He => {
      if (!He || He.length === 0) return;
      const G = He[0];
      if (!G.type.startsWith("image/")) {
        A.warning("请上传图片文件");
        return
      }
      let It = G;
      if (Yo(G)) try {
        It = await _i(G), A.info("HEIC 格式已转换为 JPEG")
      } catch (na) {
        console.error("HEIC 处理失败:", na), A.error((na == null ? void 0 : na.message) || "HEIC 格式暂不支持，请先将图片转换为 JPEG 或 PNG 格式");
        return
      }
      if (nt.value !== "lingxi_gallery") {
        it.value = !0;
        try {
          const na = await ao(It),
            la = typeof na == "string" ? na : (na == null ? void 0 : na.url) || (na == null ? void 0 : na.data) || na;
          if (!la) throw new Error("上传失败，未返回图片地址");
          B.value = la, Ea.value = !1, A.success("参考图上传成功")
        } catch (na) {
          console.error("参考图上传失败:", na), A.error((na == null ? void 0 : na.message) || "参考图上传失败，请重试")
        } finally {
          it.value = !1
        }
        return
      }
      const da = st.value;
      da === 0 ? Be.value = !0 : xt.value = !0;
      try {
        const na = await ao(It),
          la = typeof na == "string" ? na : (na == null ? void 0 : na.url) || (na == null ? void 0 : na.data) || na;
        if (!la) throw new Error("上传失败，未返回图片地址");
        da === 0 ? Ie.value = la : pe.value = la, ft(), Ea.value = !1, A.success(da === 0 ? "封面参考图上传成功" : "内容参考图上传成功")
      } catch (na) {
        console.error("参考图上传失败:", na), A.error((na == null ? void 0 : na.message) || "参考图上传失败，请重试")
      } finally {
        da === 0 ? Be.value = !1 : xt.value = !1
      }
    }, fe = async () => {
      if (!F.value) try {
        if (navigator.clipboard) try {
          const It = await navigator.clipboard.readText();
          if (It) {
            O.value = It.trim(), A.success("粘贴成功");
            return
          } else {
            A.warning("剪贴板为空");
            return
          }
        } catch (It) {
          console.log("Clipboard API 失败，尝试 execCommand:", It)
        }
        const He = document.createElement("textarea");
        if (document.body.appendChild(He), He.focus(), He.select(), document.execCommand("paste") && He.value) O.value = He.value.trim(), A.success("粘贴成功");
        else {
          A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
          const It = document.querySelector(".theme-input");
          It && (It.focus(), It.select())
        }
        document.body.removeChild(He)
      } catch (He) {
        console.error("粘贴失败:", He), A.warning("粘贴失败，请手动粘贴"), await Da();
        const G = document.querySelector(".theme-input");
        if (G) {
          G.focus();
          try {
            G.select()
          } catch (It) {
            console.log("select 失败:", It)
          }
        }
      }
    }, q = () => {
      F.value || (O.value = "", A.success("已清空"))
    }, wt = p(!1);

  function Gt() {
    F.value || (wt.value = !0)
  }

  function za({
    content: He
  }) {
    F.value || (O.value = (He || "").trim().slice(0, 2e3))
  }
  const Ua = async () => {
    try {
      const He = await navigator.clipboard.readText();
      He && (ee.value = He)
    } catch (He) {
      console.error("粘贴失败:", He), A.error("粘贴失败，请检查剪贴板权限")
    }
  }, Ta = () => {
    if (F.value) {
      J.value = !1;
      return
    }
    O.value = ee.value, J.value = !1
  };
  oa(J, He => {
    He && (ee.value = O.value || "")
  });
  const ja = He => {
      F.value || (O.value = He)
    },
    sl = He => {
      let G = "";
      He.cover ? G = He.cover : He.images && Array.isArray(He.images) && He.images.length > 0 ? (G = He.images[0], G && G.startsWith("//") && (G = "https:" + G)) : He.image && (G = He.image), G ? (B.value = G, Ie.value = G, Ea.value = !0, y.value = !1, nt.value !== "lingxi_gallery" && (nt.value = "lingxi", ka.value = "lingxi"), A.success("已加载模板图片")) : A.warning("模板图片加载失败")
    },
    Gl = () => {
      o.push({
        path: "/make",
        query: {
          id: "2"
        }
      })
    },
    fl = () => {
      o.push("/aicopy")
    },
    Pl = He => {
      C.value = {
        ...He
      }, $(), y.value = !0, f.value = !1
    },
    on = () => {
      f.value = !1
    },
    vo = () => {
      y.value = !1
    },
    hn = async () => {
      var G, It;
      if (Ve.value || Ne.value || Oe.value || ga.value) return;
      if (!Co()) {
        s.value = !0;
        return
      }
      const He = ne.value;
      if (!He && !O.value.trim()) {
        A.warning("请输入内容主题");
        return
      }
      Ve.value = !0;
      try {
        if (y.value) try {
          await $v(((G = C.value) == null ? void 0 : G.industry) || "", {
            onEdit: () => {
              f.value = !0
            }
          })
        } catch {
          return
        }
        const da = Math.max(1, Number(Me.value) || 1),
          na = {
            shunan: {
              name: "一句话图文 · 普通版（大字报）",
              per: 1,
              count: 1
            },
            lingxi: {
              name: "一句话图文 · 高级版（单封面）",
              per: 5,
              count: da
            },
            lingxi_gallery: {
              name: "一句话图文 · 高级版（多图集）",
              per: 4,
              count: (Number(tt.value) || 0) * da
            }
          },
          la = na[nt.value] || na.shunan,
          Aa = Number((He == null ? void 0 : He.copyCost) || 0),
          Kl = He ? He.kind === "write" ? "AI帮写文案" : "AI仿写文案" : "";
        {
          const ql = (Number(la.count) || 0) * (Number(la.per) || 0) + Aa,
            il = Number(((It = R.value) == null ? void 0 : It.create_points) ?? 0);
          if (ql > 0 && il < ql) {
            d.value = ql, u.value = !0, Ve.value = !1;
            return
          }
        }
        try {
          await rb({
            modeName: la.name,
            count: la.count,
            perCost: la.per,
            unit: "张",
            countLabel: "配图数量",
            extraCost: Aa,
            extraLabel: Kl
          })
        } catch {
          Ve.value = !1;
          return
        }
        Ve.value = !1, await Rn();
        return
      } finally {
        Ve.value = !1
      }
    }, oo = () => {
      ta.value = !1, ha.value && o.push(ha.value).catch(He => {
        console.error("跳转失败:", He)
      })
    }, ko = () => {
      if (ba.value) {
        We(), Qt.value = !0, $t.value = !1, ba.value = !1, o.push("/works").catch(() => {});
        return
      }
      if ($t.value = !1, Ma.value) {
        Ma.value = !1;
        return
      }
      if (Qt.value) {
        Qt.value = !1;
        return
      }
      A.success("任务正在后台处理，稍后请到「我的作品」中查看"), Da(() => {
        window.location.reload()
      })
    }, Un = () => {
      We(), $t.value = !1, ba.value = !1, Da(() => {
        window.location.reload()
      })
    }, Rn = async () => {
      if (!Oe.value) {
        Oe.value = !0;
        try {
          if (!Co()) {
            s.value = !0;
            return
          }
          const He = ne.value;
          if (!He && !O.value.trim()) {
            A.warning("请输入内容主题");
            return
          }
          let G = null;
          const It = sessionStorage.getItem("pending_survey_data");
          if (It) {
            try {
              G = JSON.parse(It)
            } catch {
              G = null
            }
            sessionStorage.removeItem("pending_survey_data")
          }
          Ma.value = !1, $t.value = !0, Je.value = 0, ve.value = He ? He.kind === "write" ? "AI 正在撰写文案..." : "AI 正在仿写文案..." : "正在准备...", Lt.value = 0;
          let da = !1,
            na = !1;
          if (He) {
            try {
              const la = await Ce(He);
              ce(la), ne.value = null, F.value = !1, await Rs()
            } catch (la) {
              $t.value = !1, Ni(la) || A.error((la == null ? void 0 : la.message) || "文案生成失败，请稍后重试");
              return
            }
            if (!O.value.trim()) {
              $t.value = !1, A.warning("请输入内容主题");
              return
            }
            ve.value = "正在准备..."
          }
          try {
            const la = nt.value === "lingxi_gallery" ? Ie.value || "" : nt.value === "lingxi" ? B.value || "" : K.value || "",
              Aa = nt.value === "lingxi_gallery" && pe.value || "",
              Kl = 909,
              ql = 454;
            (() => {
              ve.value = "正在生成标题...", Xt.value = 0;
              const El = () => {
                if (Je.value < 33 && !da) Je.value += 1, setTimeout(El, na ? ql : Kl);
                else if (Je.value >= 33 && !da) {
                  Je.value = 33, ve.value = "正在生成内容...", Xt.value = 1;
                  const xn = () => {
                    if (Je.value < 66 && !da) Je.value += 1, setTimeout(xn, na ? ql : Kl);
                    else if (Je.value >= 66 && !da) {
                      Je.value = 66, ve.value = "正在生成配图...", Xt.value = 2;
                      const Xn = () => {
                        Je.value < 99 && !da ? (Je.value += 1, setTimeout(Xn, na ? ql : Kl)) : Je.value >= 99 && !da && (Je.value = 99, da = !0)
                      };
                      Xn()
                    }
                  };
                  xn()
                }
              };
              El()
            })();
            const Za = nt.value === "lingxi" || nt.value === "lingxi_gallery" ? ct.value : "常规语气";
            let hl = "normal";
            nt.value === "lingxi" && (hl = "pro");
            let Yl = null;
            if (y.value && C.value && (C.value.industry || C.value.targetGroup || C.value.painPoints || C.value.solution || C.value.notes || C.value.ageMode && C.value.ageMode !== "any")) {
              const xn = {
                industry: C.value.industry || "",
                ageMode: C.value.ageMode || "any",
                targetGroup: C.value.targetGroup || "",
                painPoints: C.value.painPoints || "",
                solution: C.value.solution || "",
                notes: C.value.notes || ""
              };
              xn.ageMode === "range" && (xn.ageRange = Array.isArray(C.value.ageRange) && C.value.ageRange.length === 2 ? C.value.ageRange : [18, 30]), Yl = xn
            }
            let Cl;
            const mo = [la, Aa].filter(Boolean),
              Jl = Math.max(1, Number(Me.value) || 1),
              Pi = je(O.value.trim()),
              io = nt.value === "lingxi" || nt.value === "lingxi_gallery",
              di = () => nt.value === "lingxi_gallery" ? hf(Pi, mo, G, Za, Yl, tt.value === 0 ? void 0 : tt.value, "", {
                yijuhua: 1,
                persona: qd(S.value),
                count: Jl,
                cover_ref: la,
                content_ref: Aa
              }) : yf(Pi, mo, G, Za, Yl, hl, "", {
                ...io ? {
                  yijuhua: 1
                } : {},
                persona: qd(S.value),
                count: io ? Jl : 1,
                cover_ref: la,
                content_ref: Aa
              });
            if (!io && Jl > 1) {
              const El = await Promise.allSettled(Array.from({
                  length: Jl
                }, () => di())),
                xn = El.find(Xn => Xn.status === "fulfilled");
              if (!xn) {
                const Xn = El.find(vi => vi.status === "rejected");
                throw (Xn == null ? void 0 : Xn.reason) || new Error("生成失败")
              }
              Cl = xn.value
            } else Cl = await di();
            if (na = !0, !Cl) throw new Error("生成失败，未返回数据");
            if (io) {
              da = !0, await H(60), ve.value = "任务创建成功", St.value = !1, A.success("任务已创建，将自动跳转到【我的作品】"), ba.value = !0, ze();
              return
            }
            if (Jl > 1) {
              na = !0, da = !0, await H(60), ve.value = "任务创建成功", St.value = !1, A.success("任务已创建，30 秒后将自动跳转到【我的作品】"), ba.value = !0, ze();
              return
            }
            let Dt = null;
            if (typeof Cl == "string") Dt = Cl;
            else if ((Cl == null ? void 0 : Cl.data) !== void 0) {
              const El = Cl.data;
              Dt = typeof El == "string" ? El : (El == null ? void 0 : El.id) ?? (El == null ? void 0 : El.workId) ?? (El == null ? void 0 : El.work_id) ?? (typeof El == "object" ? null : El)
            } else(Cl == null ? void 0 : Cl.id) !== void 0 ? Dt = Cl.id : (Cl == null ? void 0 : Cl.workId) !== void 0 && (Dt = Cl.workId);
            if (Dt != null && (Dt = String(Dt)), !Dt) throw new Error("生成失败，未返回作品ID");
            na = !0, da = !0, await H(60), ve.value = "生成完成！", await new Promise(El => setTimeout(El, 500)), St.value = !1, nt.value === "lingxi_gallery" && G ? sessionStorage.setItem(`survey_data_${Dt}`, JSON.stringify(G)) : hl === "pro" && G && sessionStorage.setItem(`survey_data_${Dt}`, JSON.stringify(G)), A.success("生成成功！30 秒后将自动跳转到【我的作品】"), ba.value = !0, ze()
          } catch (la) {
            console.error("生成失败:", la), $t.value = !1, St.value = !1, Ma.value = !0;
            const Aa = (la == null ? void 0 : la.message) || (la == null ? void 0 : la.msg) || "";
            Ni(la) || (Aa.includes("点数不足") || Aa.includes("余额不足") || Aa.includes("创作点数不足") ? u.value = !0 : A.error(Aa || "生成失败，请稍后重试"))
          }
        } finally {
          Oe.value = !1
        }
      }
    }, ia = async () => {
      var He;
      try {
        const G = localStorage.getItem("authToken");
        if (G && G.trim()) {
          await new Promise(It => setTimeout(It, 200));
          try {
            const It = await zl();
            It ? (R.value = {
              ...It,
              nickname: It.nickname || It.nickName || "用户",
              avatar: It.avatar || It.avatarUrl || ""
            }, T.value = !0) : (R.value = {}, T.value = !1)
          } catch (It) {
            if ((It == null ? void 0 : It.code) === 999 || ((He = It == null ? void 0 : It.response) == null ? void 0 : He.code) === 999) {
              console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), R.value = {}, T.value = !1;
              return
            }
            console.error("获取用户信息失败:", It), R.value = {}, T.value = !1
          }
        } else R.value = {}, T.value = !1
      } catch (G) {
        console.error("检查登录状态失败:", G), T.value = !1, R.value = {}
      }
    }, kl = () => {
      const He = N.value;
      N.value = window.innerWidth <= 768, He !== N.value && (Cn.value = kn(), ll.value = Nl())
    }, sn = He => {
      He === "profile" ? (o.push("/user"), Sa.value = !1) : He === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : He === "recharge" ? (n.value = !0, Sa.value = !1) : He === "logout" && (ui(), ia(), Sa.value = !1)
    }, Co = () => !!localStorage.getItem("authToken"), Us = He => {
      R.value = He, T.value = !0, s.value = !1, A.success("登录成功"), ia()
    }, Rs = async () => {
      var He, G;
      try {
        const It = await zl();
        It && (R.value = {
          ...It,
          nickname: It.nickname || It.nickName || ((He = R.value) == null ? void 0 : He.nickname) || "用户",
          avatar: It.avatar || It.avatarUrl || ((G = R.value) == null ? void 0 : G.avatar) || ""
        })
      } catch {}
    }, js = () => {
      n.value = !0, setTimeout(() => {
        window.dispatchEvent(new CustomEvent("switch-to-personal"))
      }, 100)
    }, qs = () => {};
  return Ll(async () => {
    document.title = "火兔工具箱_一句话图文_优质图文生成", kl(), V(), Cn.value = kn(), ll.value = Nl(), await Xe(), await Tt(), await ia();
    const He = i.query.quickCopy;
    if (He) try {
      const It = `${He}_expires`,
        da = sessionStorage.getItem(It);
      if (da && Date.now() > parseInt(da)) sessionStorage.removeItem(He), sessionStorage.removeItem(It);
      else {
        const na = sessionStorage.getItem(He);
        if (na) {
          const la = JSON.parse(na);
          la.title && (O.value = la.title), la.image && (la.mode === "pro" ? (B.value = la.image, Ie.value = la.image, Ea.value = !0, nt.value = "lingxi", ka.value = "lingxi", y.value = !1) : (K.value = la.image, y.value = !1)), sessionStorage.removeItem(He), sessionStorage.removeItem(It), o.replace({
            path: "/yijuhua"
          })
        }
      }
    } catch (It) {
      console.error("读取一键同款数据失败:", It)
    }
    const G = sessionStorage.getItem("yijuhua_prefill_theme");
    G && (O.value = String(G).slice(0, 2e3), sessionStorage.removeItem("yijuhua_prefill_theme"), A.success("已从「我的提示词库」填入主题")), window.addEventListener("resize", kl), window.addEventListener("user-logout", ia), window.addEventListener("user-login-success", ia), N.value && document.addEventListener("click", vt)
  }), oa(N, He => {
    He ? document.addEventListener("click", vt) : (document.removeEventListener("click", vt), ot.value = -1)
  }), Zl(() => {
    We(), window.removeEventListener("resize", kl), window.removeEventListener("user-logout", ia), window.removeEventListener("user-login-success", ia), document.removeEventListener("click", vt)
  }), (He, G) => {
    var io, di;
    const It = $l,
      da = xl,
      na = Fn("CopyDocument"),
      la = Fn("QuestionFilled"),
      Aa = No,
      Kl = Oo,
      ql = Bo,
      il = Rl,
      Za = cn,
      hl = Ii,
      Yl = xi,
      Cl = jr,
      mo = Kn,
      Jl = Qg,
      Pi = Ur;
    return c(), v("div", sse, [a(ei, {
      title: "一句话图文",
      "is-logged-in": T.value,
      "user-info": R.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: G[0] || (G[0] = Dt => Sa.value = !0),
      onLoginClick: G[1] || (G[1] = Dt => s.value = !0),
      onCommand: sn
    }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), N.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: G[2] || (G[2] = Dt => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": N.value
      }])
    }, [G[140] || (G[140] = ii('<div class="page-title-wrapper" data-v-815aa850><div class="main-title-row" data-v-815aa850><h1 class="main-title" data-v-815aa850> 输入你的<span class="highlight-red" data-v-815aa850>创意主题</span>或<span class="highlight-red" data-v-815aa850>提示词</span></h1></div><p class="subtitle" data-v-815aa850><span class="subtitle-line2" data-v-815aa850>一键生成优质标题、正文和配图</span></p></div>', 1)), e("div", rse, [e("div", use, [e("div", cse, [e("div", {
      class: Pe(["mode-tab", {
        active: nt.value === "shunan"
      }]),
      onClick: G[3] || (G[3] = Dt => {
        nt.value = "shunan", ka.value = "shunan"
      })
    }, " 普通版(大字报) ", 2), e("div", {
      class: Pe(["mode-tab mode-tab-pro", {
        active: nt.value === "lingxi"
      }]),
      onClick: G[4] || (G[4] = Dt => {
        nt.value = "lingxi", ka.value = "lingxi"
      })
    }, [...G[85] || (G[85] = [g(" 高级版（单封面） ", -1), e("span", {
      class: "pro-badge"
    }, "Pro", -1)])], 2), e("div", {
      class: Pe(["mode-tab mode-tab-pro mode-tab-pro-gallery", {
        active: nt.value === "lingxi_gallery"
      }]),
      onClick: G[5] || (G[5] = Dt => {
        nt.value = "lingxi_gallery", ka.value = "lingxi_gallery"
      })
    }, [...G[86] || (G[86] = [g(" 高级版（多图集） ", -1), e("span", {
      class: "pro-badge"
    }, "Max", -1)])], 2)]), e("div", dse, [a(da, {
      class: "popular-rewrite-btn",
      onClick: we
    }, {
      default: l(() => [a(It, null, {
        default: l(() => [a(P(Qo))]),
        _: 1
      }), G[87] || (G[87] = e("span", null, "AI帮写文案", -1))]),
      _: 1
    }), a(da, {
      class: "popular-rewrite-btn",
      onClick: ae
    }, {
      default: l(() => [a(It, null, {
        default: l(() => [a(na)]),
        _: 1
      }), G[88] || (G[88] = e("span", null, "AI仿写文案", -1))]),
      _: 1
    }), a(da, {
      class: "popular-rewrite-btn",
      onClick: fl
    }, {
      default: l(() => [...G[89] || (G[89] = [e("span", null, "🔥", -1), e("span", null, "AI复刻同款", -1)])]),
      _: 1
    })])]), N.value ? (c(), v("div", vse, [e("button", {
      type: "button",
      class: "yijuhua-ai-copy-mobile-btn",
      onClick: we
    }, [a(It, null, {
      default: l(() => [a(P(Qo))]),
      _: 1
    }), G[90] || (G[90] = e("span", null, "AI帮写文案", -1))]), e("button", {
      type: "button",
      class: "yijuhua-ai-copy-mobile-btn",
      onClick: ae
    }, [a(It, null, {
      default: l(() => [a(na)]),
      _: 1
    }), G[91] || (G[91] = e("span", null, "AI仿写文案", -1))])])) : M("", !0), nt.value === "shunan" ? (c(), v("div", mse, [a(os), e("div", {
      class: Pe(["imitative-input-wrapper", {
        "is-ai-copy-locked": F.value
      }])
    }, [F.value ? (c(), v("div", gse, [e("span", fse, [e("span", null, h(b.value), 1), e("button", {
      type: "button",
      class: "ai-copy-lock-eye",
      title: "预览已填信息",
      onClick: _e
    }, [a(It, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    })])]), e("span", {
      class: "ai-copy-lock-actions"
    }, [e("button", {
      type: "button",
      class: "ai-copy-lock-cancel",
      onClick: U
    }, "取消"), e("button", {
      type: "button",
      class: "ai-copy-lock-cancel",
      onClick: de
    }, "重选")])])) : M("", !0), F.value ? M("", !0) : (c(), v(Ue, {
      key: 1
    }, [el(e("textarea", {
      "onUpdate:modelValue": G[6] || (G[6] = Dt => O.value = Dt),
      class: "imitative-input",
      placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
      rows: "10",
      maxlength: "2000"
    }, null, 512), [
      [En, O.value]
    ]), N.value ? M("", !0) : (c(), v("div", pse, [O.value.trim() ? (c(), v("div", {
      key: 1,
      class: "pro-input-action-btn clear-btn",
      onClick: q
    }, [...G[93] || (G[93] = [e("span", {
      class: "action-text"
    }, "清空", -1)])])) : (c(), v("div", {
      key: 0,
      class: "pro-input-action-btn",
      onClick: fe
    }, [...G[92] || (G[92] = [e("span", {
      class: "action-text"
    }, "粘贴", -1)])])), e("div", {
      class: "pro-input-action-btn import-tishici-btn",
      onClick: Gt
    }, [...G[94] || (G[94] = [e("span", {
      class: "action-text"
    }, "导入", -1)])])]))], 64)), F.value ? M("", !0) : (c(), v("div", {
      key: 2,
      class: Pe(["char-count", {
        warning: O.value.length > 1600,
        error: O.value.length >= 2e3
      }])
    }, h(O.value.length) + "/2000", 3))], 2), N.value ? (c(), v("div", yse, [e("div", hse, [e("div", bse, [e("span", {
      class: Pe(["pill-btn", {
        active: y.value
      }]),
      onClick: G[8] || (G[8] = Dt => f.value = !0)
    }, [a(It, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", wse, [g(h(y.value ? "已关联" : "关联创作"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[95] || (G[95] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[7] || (G[7] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })])], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!S.value
      }]),
      onClick: G[10] || (G[10] = Dt => w.value = !0)
    }, [a(It, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", _se, [g(h(S.value ? S.value.name : "绑定人设"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[96] || (G[96] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[9] || (G[9] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), S.value ? M("", !0) : (c(), v("span", kse, "（建议填）"))], 2)]), a(Aa, {
      disabled: re.value,
      content: "请先输入内容再点击生成",
      placement: "top"
    }, {
      default: l(() => [a(da, {
        type: "primary",
        class: "generate-button",
        onClick: hn,
        disabled: !re.value || Oe.value || ga.value || Ve.value
      }, {
        default: l(() => [...G[97] || (G[97] = [g(" 一键生成(消耗1) ", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      _: 1
    }, 8, ["disabled"])])])) : M("", !0), N.value ? M("", !0) : (c(), v("div", Cse, [e("div", Ase, [e("span", {
      class: Pe(["pill-btn", {
        active: y.value
      }]),
      onClick: G[12] || (G[12] = Dt => f.value = !0)
    }, [a(It, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", Ise, [g(h(y.value ? "已关联创作信息" : "关联创作信息"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[98] || (G[98] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[11] || (G[11] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), y.value ? M("", !0) : (c(), v("span", xse, "（建议填）"))], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!S.value
      }]),
      onClick: G[14] || (G[14] = Dt => w.value = !0)
    }, [a(It, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", Sse, [g(h(S.value ? S.value.name : "绑定人设信息"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[99] || (G[99] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[13] || (G[13] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), S.value ? M("", !0) : (c(), v("span", Ese, "（建议填）"))], 2), a(Ld, {
      modelValue: ct.value,
      "onUpdate:modelValue": G[15] || (G[15] = Dt => ct.value = Dt),
      tones: E.value
    }, null, 8, ["modelValue", "tones"])]), a(Aa, {
      disabled: re.value,
      content: "请先输入内容再点击生成",
      placement: "top"
    }, {
      default: l(() => [a(da, {
        type: "primary",
        class: "generate-button",
        onClick: hn,
        disabled: !re.value || Oe.value || ga.value || Ve.value
      }, {
        default: l(() => [...G[100] || (G[100] = [g(" 一键生成(消耗1) ", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      _: 1
    }, 8, ["disabled"])]))])) : M("", !0), nt.value === "lingxi" ? (c(), v("div", Tse, [a(os), e("div", {
      class: Pe(["imitative-input-wrapper", {
        "is-ai-copy-locked": F.value
      }])
    }, [F.value ? (c(), v("div", $se, [e("span", Pse, [e("span", null, h(b.value), 1), e("button", {
      type: "button",
      class: "ai-copy-lock-eye",
      title: "预览已填信息",
      onClick: _e
    }, [a(It, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    })])]), e("span", {
      class: "ai-copy-lock-actions"
    }, [e("button", {
      type: "button",
      class: "ai-copy-lock-cancel",
      onClick: U
    }, "取消"), e("button", {
      type: "button",
      class: "ai-copy-lock-cancel",
      onClick: de
    }, "重选")])])) : M("", !0), F.value ? M("", !0) : (c(), v(Ue, {
      key: 1
    }, [el(e("textarea", {
      "onUpdate:modelValue": G[16] || (G[16] = Dt => O.value = Dt),
      class: "imitative-input",
      placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
      rows: "10",
      maxlength: "2000"
    }, null, 512), [
      [En, O.value]
    ]), N.value ? M("", !0) : (c(), v("div", Vse, [O.value.trim() ? (c(), v("div", {
      key: 1,
      class: "pro-input-action-btn clear-btn",
      onClick: q
    }, [...G[102] || (G[102] = [e("span", {
      class: "action-text"
    }, "清空", -1)])])) : (c(), v("div", {
      key: 0,
      class: "pro-input-action-btn",
      onClick: fe
    }, [...G[101] || (G[101] = [e("span", {
      class: "action-text"
    }, "粘贴", -1)])])), e("div", {
      class: "pro-input-action-btn import-tishici-btn",
      onClick: Gt
    }, [...G[103] || (G[103] = [e("span", {
      class: "action-text"
    }, "导入", -1)])])]))], 64)), F.value ? M("", !0) : (c(), v("div", {
      key: 2,
      class: Pe(["char-count", {
        warning: O.value.length > 1600,
        error: O.value.length >= 2e3
      }])
    }, h(O.value.length) + "/2000", 3))], 2), N.value ? M("", !0) : (c(), v("div", zse, [e("div", Lse, [e("input", {
      ref_key: "proFileInput",
      ref: W,
      type: "file",
      accept: "image/*",
      class: "file-input",
      onChange: vn
    }, null, 544), e("div", {
      class: Pe(["pro-reference-image-upload", {
        "has-image": B.value,
        uploading: it.value,
        "is-dragover": nn.value
      }]),
      onClick: G[17] || (G[17] = Dt => !it.value && !B.value && (yt.value = !0)),
      onDragenter: lt(co, ["prevent"]),
      onDragover: lt(Pt, ["prevent"]),
      onDragleave: lt(yl, ["prevent"]),
      onDrop: lt(Mn, ["prevent"]),
      title: "支持：从本地 / 从素材库 / 从模板库 三种方式导入封面参考图，也可以直接拖拽图片到此处"
    }, [nn.value ? (c(), v("div", Dse, "松开即可上传参考图")) : M("", !0), e("div", Mse, h(Ea.value ? "模板" : "封面"), 1), it.value ? (c(), v("div", Ose, [...G[104] || (G[104] = [e("div", {
      class: "loading-spinner"
    }, null, -1), e("div", {
      class: "loading-text"
    }, "上传中...", -1)])])) : B.value ? (c(), v("img", {
      key: 3,
      src: B.value,
      alt: "参考图",
      class: "uploaded-image"
    }, null, 8, Nse)) : (c(), v("div", Bse, [...G[105] || (G[105] = [ii('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-815aa850><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-815aa850></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-815aa850></circle><polyline points="21 15 16 10 5 21" data-v-815aa850></polyline></svg><span class="upload-placeholder-text" data-v-815aa850>上传封面参考图</span>', 2)])])), B.value && !it.value ? (c(), v("div", {
      key: 4,
      class: "remove-image",
      onClick: lt(Nn, ["stop"])
    }, [a(It, null, {
      default: l(() => [a(P(un))]),
      _: 1
    })])) : M("", !0), B.value && !it.value ? (c(), v("div", {
      key: 5,
      class: "preview-image-btn",
      onClick: lt(On, ["stop"])
    }, [a(It, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    }), G[106] || (G[106] = e("span", {
      class: "preview-text"
    }, "查看", -1))])) : M("", !0)], 34), B.value && Ea.value ? (c(), v("span", Use, "已选择模板风格")) : M("", !0), B.value && !Ea.value ? (c(), v("span", Rse, "已上传封面参考图")) : M("", !0)]), e("div", jse, [e("span", {
      class: Pe(["pill-btn", {
        active: y.value
      }]),
      onClick: G[19] || (G[19] = Dt => f.value = !0)
    }, [a(It, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", qse, [g(h(y.value ? "已关联创作信息" : "关联创作信息"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[107] || (G[107] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[18] || (G[18] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), y.value ? M("", !0) : (c(), v("span", Fse, "（建议填）"))], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!S.value
      }]),
      onClick: G[21] || (G[21] = Dt => w.value = !0)
    }, [a(It, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", Wse, [g(h(S.value ? S.value.name : "绑定人设信息"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[108] || (G[108] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[20] || (G[20] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), S.value ? M("", !0) : (c(), v("span", Gse, "（建议填）"))], 2), a(Ld, {
      modelValue: ct.value,
      "onUpdate:modelValue": G[22] || (G[22] = Dt => ct.value = Dt),
      tones: E.value
    }, null, 8, ["modelValue", "tones"]), e("div", Jse, [e("span", Hse, [G[110] || (G[110] = g("创作数量", -1)), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[109] || (G[109] = [e("div", null, "创作数量代表一次生成的图文作品套数", -1), e("div", null, "1 套代表生成 1 套图文", -1), e("div", null, "2 套代表生成 2 套图文，以此类推", -1)])]),
      default: l(() => [a(It, {
        class: "page-count-label-tip",
        onClick: G[23] || (G[23] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), a(ql, {
      modelValue: Me.value,
      "onUpdate:modelValue": G[24] || (G[24] = Dt => Me.value = Dt),
      size: "small",
      class: "page-count-select article-count-select"
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(P(rt), Dt => (c(), ye(Kl, {
        key: Dt.value,
        label: Dt.label,
        value: Dt.value
      }, null, 8, ["label", "value"]))), 128))]),
      _: 1
    }, 8, ["modelValue"])])]), e("div", Qse, [a(Aa, {
      disabled: re.value,
      content: "请先输入内容再点击生成",
      placement: "top"
    }, {
      default: l(() => [a(da, {
        type: "primary",
        class: "generate-button",
        onClick: hn,
        disabled: !re.value || Oe.value || ga.value || Ve.value
      }, {
        default: l(() => [g(" 一键生成(消耗" + h(5 * (Number(Me.value) || 1)) + ") ", 1)]),
        _: 1
      }, 8, ["disabled"])]),
      _: 1
    }, 8, ["disabled"])])])), N.value ? (c(), v("div", Kse, [e("div", {
      class: Pe(["mobile-image-upload-btn gallery-mobile-upload-row", {
        "has-image": B.value,
        uploading: it.value
      }])
    }, [e("input", {
      ref_key: "mobileProFileInput",
      ref: Te,
      type: "file",
      accept: "image/*",
      class: "mobile-file-input",
      onChange: vn
    }, null, 544), it.value ? (c(), v("div", Yse, [...G[111] || (G[111] = [e("div", {
      class: "loading-spinner"
    }, null, -1)])])) : B.value ? (c(), v("div", {
      key: 2,
      class: "mobile-uploaded-image-wrapper",
      onClick: lt(zo, ["stop"])
    }, [e("img", {
      src: B.value,
      alt: "参考图",
      class: "mobile-uploaded-image"
    }, null, 8, Xse), e("div", {
      class: "mobile-remove-image",
      onClick: lt(Nn, ["stop"])
    }, [a(It, null, {
      default: l(() => [a(P(un))]),
      _: 1
    })])])) : (c(), v("div", {
      key: 1,
      class: "mobile-upload-placeholder",
      onClick: G[25] || (G[25] = lt(Dt => yt.value = !0, ["stop"]))
    }, [...G[112] || (G[112] = [e("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [e("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), e("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }), e("polyline", {
      points: "21 15 16 10 5 21"
    })], -1)])])), e("div", Zse, [e("div", ere, [e("span", {
      class: Pe(["pill-btn", {
        active: y.value
      }]),
      onClick: G[27] || (G[27] = Dt => f.value = !0)
    }, [a(It, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", tre, [g(h(y.value ? "已关联" : "关联创作"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[113] || (G[113] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[26] || (G[26] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })])], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!S.value
      }]),
      onClick: G[29] || (G[29] = Dt => w.value = !0)
    }, [a(It, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", are, [g(h(S.value ? S.value.name : "绑定人设"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[114] || (G[114] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[28] || (G[28] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), S.value ? M("", !0) : (c(), v("span", lre, "（建议填）"))], 2)]), B.value ? (c(), v("span", nre, h(Ea.value ? "模板已选择" : "已上传"), 1)) : M("", !0), B.value ? (c(), ye(It, {
      key: 1,
      class: "mobile-template-preview-icon",
      onClick: lt(On, ["stop"])
    }, {
      default: l(() => [a(P(Do))]),
      _: 1
    })) : M("", !0)])], 2), a(Aa, {
      disabled: re.value,
      content: "请先输入内容再点击生成",
      placement: "top"
    }, {
      default: l(() => [a(da, {
        type: "primary",
        class: "generate-button",
        onClick: hn,
        disabled: !re.value || Oe.value || ga.value || Ve.value
      }, {
        default: l(() => [...G[115] || (G[115] = [g(" 一键生成(消耗5) ", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      _: 1
    }, 8, ["disabled"])])) : M("", !0)])) : M("", !0), nt.value === "lingxi_gallery" ? (c(), v("div", ore, [a(os), e("div", {
      class: Pe(["imitative-input-wrapper", {
        "is-ai-copy-locked": F.value
      }])
    }, [F.value ? (c(), v("div", ire, [e("span", sre, [e("span", null, h(b.value), 1), e("button", {
      type: "button",
      class: "ai-copy-lock-eye",
      title: "预览已填信息",
      onClick: _e
    }, [a(It, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    })])]), e("span", {
      class: "ai-copy-lock-actions"
    }, [e("button", {
      type: "button",
      class: "ai-copy-lock-cancel",
      onClick: U
    }, "取消"), e("button", {
      type: "button",
      class: "ai-copy-lock-cancel",
      onClick: de
    }, "重选")])])) : M("", !0), F.value ? M("", !0) : (c(), v(Ue, {
      key: 1
    }, [el(e("textarea", {
      "onUpdate:modelValue": G[30] || (G[30] = Dt => O.value = Dt),
      class: "imitative-input",
      placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
      rows: "10",
      maxlength: "2000"
    }, null, 512), [
      [En, O.value]
    ]), N.value ? M("", !0) : (c(), v("div", rre, [O.value.trim() ? (c(), v("div", {
      key: 1,
      class: "pro-input-action-btn clear-btn",
      onClick: q
    }, [...G[117] || (G[117] = [e("span", {
      class: "action-text"
    }, "清空", -1)])])) : (c(), v("div", {
      key: 0,
      class: "pro-input-action-btn",
      onClick: fe
    }, [...G[116] || (G[116] = [e("span", {
      class: "action-text"
    }, "粘贴", -1)])])), e("div", {
      class: "pro-input-action-btn import-tishici-btn",
      onClick: Gt
    }, [...G[118] || (G[118] = [e("span", {
      class: "action-text"
    }, "导入", -1)])])]))], 64)), F.value ? M("", !0) : (c(), v("div", {
      key: 2,
      class: Pe(["char-count", {
        warning: O.value.length > 1600,
        error: O.value.length >= 2e3
      }])
    }, h(O.value.length) + "/2000", 3))], 2), N.value ? M("", !0) : (c(), v("div", ure, [e("div", cre, [e("div", dre, [e("div", {
      class: Pe(["pro-reference-image-upload", {
        "has-image": Ie.value,
        uploading: Be.value
      }]),
      onClick: G[33] || (G[33] = Dt => !Be.value && (st.value = 0, yt.value = !0))
    }, [Be.value ? (c(), v("div", vre, [...G[119] || (G[119] = [e("div", {
      class: "loading-spinner"
    }, null, -1), e("div", {
      class: "loading-text"
    }, "上传中...", -1)])])) : Ie.value ? (c(), v(Ue, {
      key: 2
    }, [e("img", {
      src: Ie.value,
      alt: "封面参考图",
      class: "uploaded-image"
    }, null, 8, gre), e("div", {
      class: "remove-image",
      onClick: G[31] || (G[31] = lt(Dt => {
        Ie.value = "", ft()
      }, ["stop"]))
    }, [a(It, null, {
      default: l(() => [a(P(un))]),
      _: 1
    })]), e("div", {
      class: "preview-image-btn",
      onClick: G[32] || (G[32] = lt(Dt => (Yt.value = Ie.value) && (va.value = !0), ["stop"]))
    }, [a(It, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    }), G[121] || (G[121] = e("span", {
      class: "preview-text"
    }, "查看", -1))])], 64)) : (c(), v("div", mre, [...G[120] || (G[120] = [ii('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-815aa850><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-815aa850></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-815aa850></circle><polyline points="21 15 16 10 5 21" data-v-815aa850></polyline></svg><span class="upload-placeholder-text" data-v-815aa850>上传封面参考图</span>', 2)])]))], 2)]), e("div", fre, [e("div", {
      class: Pe(["pro-reference-image-upload", {
        "has-image": pe.value,
        uploading: xt.value
      }]),
      onClick: G[36] || (G[36] = Dt => !xt.value && (st.value = 1, yt.value = !0))
    }, [xt.value ? (c(), v("div", pre, [...G[122] || (G[122] = [e("div", {
      class: "loading-spinner"
    }, null, -1), e("div", {
      class: "loading-text"
    }, "上传中...", -1)])])) : pe.value ? (c(), v(Ue, {
      key: 2
    }, [e("img", {
      src: pe.value,
      alt: "内容参考图",
      class: "uploaded-image"
    }, null, 8, hre), e("div", {
      class: "remove-image",
      onClick: G[34] || (G[34] = lt(Dt => {
        pe.value = "", ft()
      }, ["stop"]))
    }, [a(It, null, {
      default: l(() => [a(P(un))]),
      _: 1
    })]), e("div", {
      class: "preview-image-btn",
      onClick: G[35] || (G[35] = lt(Dt => (Yt.value = pe.value) && (va.value = !0), ["stop"]))
    }, [a(It, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    }), G[124] || (G[124] = e("span", {
      class: "preview-text"
    }, "查看", -1))])], 64)) : (c(), v("div", yre, [...G[123] || (G[123] = [ii('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-815aa850><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-815aa850></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-815aa850></circle><polyline points="21 15 16 10 5 21" data-v-815aa850></polyline></svg><span class="upload-placeholder-text" data-v-815aa850>上传内容参考图</span>', 2)])]))], 2)])]), e("div", bre, [e("span", wre, [G[126] || (G[126] = g("配图页数", -1)), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[125] || (G[125] = [e("div", null, "配图页数代表生成作品配图的数量", -1), e("div", null, "1 则代表作品配图 1 张图", -1), e("div", null, "2 则代表作品配图 2 张图，以此类推", -1)])]),
      default: l(() => [a(It, {
        class: "page-count-label-tip",
        onClick: G[37] || (G[37] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), a(ql, {
      modelValue: tt.value,
      "onUpdate:modelValue": G[38] || (G[38] = Dt => tt.value = Dt),
      size: "small",
      class: "page-count-select"
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(P(qe), Dt => (c(), ye(Kl, {
        key: Dt.value,
        label: Dt.label,
        value: Dt.value
      }, null, 8, ["label", "value"]))), 128))]),
      _: 1
    }, 8, ["modelValue"])]), Ie.value && pe.value ? (c(), v("span", _re, "已上传封面参考图与内容参考图")) : Ie.value ? (c(), v("span", kre, "已上传封面参考图（内容参考图可选）")) : M("", !0)])), e("div", Cre, [N.value ? (c(), v("div", {
      key: 0,
      class: Pe(["mobile-image-upload-btn gallery-mobile-upload-row", {
        "has-image": B.value,
        uploading: it.value
      }])
    }, [e("input", {
      ref_key: "mobileProFileInput",
      ref: Te,
      type: "file",
      accept: "image/*",
      class: "mobile-file-input",
      onChange: vn
    }, null, 544), it.value ? (c(), v("div", Are, [...G[127] || (G[127] = [e("div", {
      class: "loading-spinner"
    }, null, -1)])])) : B.value ? (c(), v("div", {
      key: 2,
      class: "mobile-uploaded-image-wrapper",
      onClick: lt(zo, ["stop"])
    }, [e("img", {
      src: B.value,
      alt: "参考图",
      class: "mobile-uploaded-image"
    }, null, 8, Ire), e("div", {
      class: "mobile-remove-image",
      onClick: lt(Nn, ["stop"])
    }, [a(It, null, {
      default: l(() => [a(P(un))]),
      _: 1
    })])])) : (c(), v("div", {
      key: 1,
      class: "mobile-upload-placeholder",
      onClick: G[39] || (G[39] = lt(Dt => yt.value = !0, ["stop"]))
    }, [...G[128] || (G[128] = [e("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [e("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), e("circle", {
      cx: "8.5",
      cy: "8.5",
      r: "1.5"
    }), e("polyline", {
      points: "21 15 16 10 5 21"
    })], -1)])])), e("div", xre, [e("div", Sre, [e("span", {
      class: Pe(["pill-btn", {
        active: y.value
      }]),
      onClick: G[41] || (G[41] = Dt => f.value = !0)
    }, [a(It, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", Ere, [g(h(y.value ? "已关联" : "关联创作"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[129] || (G[129] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[40] || (G[40] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })])], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!S.value
      }]),
      onClick: G[43] || (G[43] = Dt => w.value = !0)
    }, [a(It, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", Tre, [g(h(S.value ? S.value.name : "绑定人设"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[130] || (G[130] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[42] || (G[42] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), S.value ? M("", !0) : (c(), v("span", $re, "（建议填）"))], 2)]), B.value ? (c(), v("span", Pre, h(Ea.value ? "模板已选择" : "已上传"), 1)) : M("", !0), B.value ? (c(), ye(It, {
      key: 1,
      class: "mobile-template-preview-icon",
      onClick: lt(On, ["stop"])
    }, {
      default: l(() => [a(P(Do))]),
      _: 1
    })) : M("", !0)])], 2)) : M("", !0), e("div", Vre, [e("div", zre, [N.value ? M("", !0) : (c(), v(Ue, {
      key: 0
    }, [e("span", {
      class: Pe(["pill-btn", {
        active: y.value
      }]),
      onClick: G[45] || (G[45] = Dt => f.value = !0)
    }, [a(It, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", Lre, [g(h(y.value ? "已关联创作信息" : "关联创作信息"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[131] || (G[131] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[44] || (G[44] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), y.value ? M("", !0) : (c(), v("span", Dre, "（建议填）"))], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!S.value
      }]),
      onClick: G[47] || (G[47] = Dt => w.value = !0)
    }, [a(It, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", Mre, [g(h(S.value ? S.value.name : "绑定人设信息"), 1), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[132] || (G[132] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
      default: l(() => [a(It, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: G[46] || (G[46] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), S.value ? M("", !0) : (c(), v("span", Ore, "（建议填）"))], 2), a(Ld, {
      modelValue: ct.value,
      "onUpdate:modelValue": G[48] || (G[48] = Dt => ct.value = Dt),
      tones: E.value
    }, null, 8, ["modelValue", "tones"]), e("div", Bre, [e("span", Nre, [G[134] || (G[134] = g("创作数量", -1)), a(Aa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...G[133] || (G[133] = [e("div", null, "创作数量代表一次生成的图文作品套数", -1), e("div", null, "1 套代表生成 1 套图文", -1), e("div", null, "2 套代表生成 2 套图文，以此类推", -1)])]),
      default: l(() => [a(It, {
        class: "page-count-label-tip",
        onClick: G[49] || (G[49] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(la)]),
        _: 1
      })]),
      _: 1
    })]), a(ql, {
      modelValue: Me.value,
      "onUpdate:modelValue": G[50] || (G[50] = Dt => Me.value = Dt),
      size: "small",
      class: "page-count-select article-count-select"
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(P(rt), Dt => (c(), ye(Kl, {
        key: Dt.value,
        label: Dt.label,
        value: Dt.value
      }, null, 8, ["label", "value"]))), 128))]),
      _: 1
    }, 8, ["modelValue"])])], 64))])]), a(Aa, {
      disabled: re.value,
      content: "请先输入内容再点击生成",
      placement: "top"
    }, {
      default: l(() => [a(da, {
        type: "primary",
        class: "generate-button",
        onClick: hn,
        disabled: !re.value || Oe.value || ga.value || Ve.value
      }, {
        default: l(() => [g(" 一键生成(消耗4/图 × " + h(Number(Me.value) || 1) + "套) ", 1)]),
        _: 1
      }, 8, ["disabled"])]),
      _: 1
    }, 8, ["disabled"])])])) : M("", !0)]), e("div", Ure, [e("div", Rre, [(c(!0), v(Ue, null, gt(Ul.value, (Dt, El) => (c(), v("div", {
      key: El,
      class: "prompt-item",
      onClick: xn => ja(Dt)
    }, h(Dt), 9, jre))), 128))]), e("div", {
      class: "showcase-header"
    }, [G[136] || (G[136] = e("div", null, [e("h2", {
      class: "showcase-title"
    }, "海量模板"), e("p", {
      class: "showcase-subtitle"
    }, "探索热门创作灵感")], -1)), e("button", {
      class: "more-case-link",
      type: "button",
      onClick: Gl
    }, [...G[135] || (G[135] = [g(" 进入模板库 ", -1), e("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [e("polyline", {
      points: "9 18 15 12 9 6"
    })], -1)])])]), e("div", {
      class: Pe(["category-tabs-showcase", {
        expanded: An.value
      }])
    }, [An.value ? (c(), v(Ue, {
      key: 1
    }, [(c(!0), v(Ue, null, gt(Tn.value, Dt => (c(), v("button", {
      key: Dt,
      class: Pe(["category-tab-showcase", {
        active: Dn.value === Dt
      }]),
      onClick: El => se(Dt)
    }, h(Dt), 11, Fre))), 128)), e("button", {
      class: "category-expand-btn-showcase",
      onClick: G[52] || (G[52] = Dt => An.value = !An.value),
      type: "button"
    }, [...G[138] || (G[138] = [e("span", null, "收起", -1), e("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "expanded"
    }, [e("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), e("path", {
      d: "M8 12h8"
    })], -1)])])], 64)) : (c(), v(Ue, {
      key: 0
    }, [(c(!0), v(Ue, null, gt(Tn.value.slice(0, $n.value), (Dt, El) => (c(), v("button", {
      key: Dt,
      class: Pe(["category-tab-showcase", {
        active: Dn.value === Dt
      }]),
      onClick: xn => se(Dt)
    }, h(Dt), 11, qre))), 128)), Tn.value.length > $n.value ? (c(), v("button", {
      key: 0,
      class: "category-expand-btn-showcase",
      onClick: G[51] || (G[51] = Dt => An.value = !An.value),
      type: "button"
    }, [...G[137] || (G[137] = [e("span", null, "展开", -1), e("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [e("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), e("path", {
      d: "M12 8v8"
    }), e("path", {
      d: "M8 12h8"
    })], -1)])])) : M("", !0)], 64))], 2), e("div", Wre, [(c(!0), v(Ue, null, gt(Va.value, (Dt, El) => (c(), v("div", {
      key: Dt.id || El,
      class: "template-card-showcase"
    }, [e("div", Gre, [e("img", {
      src: Dt.image,
      alt: Dt.title,
      loading: "lazy"
    }, null, 8, Jre), e("div", Hre, [e("div", Qre, [e("button", {
      class: "preview-btn-showcase",
      onClick: lt(xn => In(Dt), ["stop"])
    }, " 查看模板 ", 8, Kre), e("button", {
      class: "use-template-btn-showcase",
      onClick: lt(xn => sl(Dt), ["stop"])
    }, " 一键同款 ", 8, Yre)])])]), e("div", Xre, [e("div", Zre, [Dt.isNew ? (c(), v("span", eue, "NEW")) : M("", !0), Dt.isHot ? (c(), v("span", tue, "HOT")) : M("", !0)]), e("h3", aue, h(Dt.title), 1), e("div", lue, [e("div", nue, h(Dt.category), 1), Dt.usage ? (c(), v("div", oue, [G[139] || (G[139] = e("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }, [e("path", {
      d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    })], -1)), g(" " + h(le(Dt.usage)), 1)])) : M("", !0)])])]))), 128))]), N.value && _l.value.length > Pa.value ? (c(), v("div", iue, [e("button", {
      class: "more-templates-btn",
      onClick: X
    }, " 更多 ")])) : M("", !0)])], 2), a(Hr, {
      modelValue: bt.value,
      "onUpdate:modelValue": G[53] || (G[53] = Dt => bt.value = Dt),
      "is-mobile": N.value,
      data: Ca.value,
      title: "案例图文预览",
      onUseTemplate: wo
    }, null, 8, ["modelValue", "is-mobile", "data"]), a(il, {
      modelValue: $t.value,
      "onUpdate:modelValue": G[54] || (G[54] = Dt => $t.value = Dt),
      width: N.value ? "90vw" : "600px",
      center: "",
      "show-close": !0,
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      class: "task-progress-dialog",
      onClose: ko
    }, {
      header: l(() => [ba.value ? (c(), v("div", sue, [e("div", rue, [a(It, null, {
        default: l(() => [a(P(Zo))]),
        _: 1
      })]), G[141] || (G[141] = e("span", {
        class: "task-title"
      }, "任务创建成功", -1))])) : (c(), v("div", uue, [a(It, {
        class: "task-icon"
      }, {
        default: l(() => [a(P(ev))]),
        _: 1
      }), G[142] || (G[142] = e("span", {
        class: "task-title"
      }, "任务进行中", -1))])), ba.value ? M("", !0) : (c(), v("div", cue, [e("div", due, [e("div", vue, [(c(), v("svg", {
        class: "progress-ring",
        width: N.value ? 140 : 150,
        height: N.value ? 140 : 150,
        viewBox: N.value ? "0 0 140 140" : "0 0 150 150"
      }, [G[143] || (G[143] = e("defs", null, [e("linearGradient", {
        id: "progressGradient",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, [e("stop", {
        offset: "0%",
        style: {
          "stop-color": "#6366f1",
          "stop-opacity": "1"
        }
      }), e("stop", {
        offset: "50%",
        style: {
          "stop-color": "#8b5cf6",
          "stop-opacity": "1"
        }
      }), e("stop", {
        offset: "100%",
        style: {
          "stop-color": "#8b5cf6",
          "stop-opacity": "1"
        }
      })])], -1)), e("circle", {
        class: "progress-ring-bg",
        stroke: "rgba(99, 102, 241, 0.1)",
        "stroke-width": N.value ? 8 : 10,
        fill: "transparent",
        r: en.value,
        cx: N.value ? 70 : 75,
        cy: N.value ? 70 : 75
      }, null, 8, gue), e("circle", {
        class: "progress-ring-circle",
        stroke: "url(#progressGradient)",
        "stroke-width": N.value ? 8 : 10,
        "stroke-linecap": "round",
        fill: "transparent",
        r: en.value,
        cx: N.value ? 70 : 75,
        cy: N.value ? 70 : 75,
        style: Il({
          strokeDasharray: fa.value,
          strokeDashoffset: Ka.value
        })
      }, null, 12, fue)], 8, mue)), e("div", pue, h(Math.round(Je.value)) + "%", 1)])]), e("div", yue, h(ve.value), 1)]))]),
      footer: l(() => [ba.value ? (c(), v(Ue, {
        key: 0
      }, [a(da, {
        type: "primary",
        onClick: ko,
        class: "task-confirm-btn"
      }, {
        default: l(() => [g(h(Ja.value > 0 ? `跳转到【我的作品】（${Ja.value}s）` : "跳转到【我的作品】"), 1)]),
        _: 1
      }), a(da, {
        class: "task-confirm-btn task-secondary-btn",
        onClick: Un
      }, {
        default: l(() => [...G[146] || (G[146] = [g("继续创作", -1)])]),
        _: 1
      })], 64)) : (c(), ye(da, {
        key: 1,
        type: "primary",
        onClick: ko,
        class: "task-confirm-btn"
      }, {
        default: l(() => [...G[147] || (G[147] = [g("确定并关闭", -1)])]),
        _: 1
      }))]),
      default: l(() => [e("div", hue, [ba.value ? (c(), v("div", bue, "系统正在后台为您生成，请稍后查看，大概需要40秒-2分钟")) : M("", !0), ba.value ? M("", !0) : (c(), v("div", wue, [e("div", _ue, [e("div", {
        class: "linear-progress-fill",
        style: Il({
          width: Je.value + "%"
        })
      }, null, 4)]), e("div", kue, h(Math.round(Je.value)) + "%", 1)])), ba.value ? M("", !0) : (c(), v("div", Cue, [...G[144] || (G[144] = [e("p", null, "您的任务正在进行中，稍后在【我的作品】查看：", -1)])])), G[145] || (G[145] = e("div", {
        class: "task-links"
      }, null, -1))])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(il, {
      modelValue: va.value,
      "onUpdate:modelValue": G[55] || (G[55] = Dt => va.value = Dt),
      width: N.value ? "90vw" : "500px",
      center: "",
      "show-close": !0,
      class: "template-preview-dialog"
    }, {
      header: l(() => [e("div", Aue, [e("div", Iue, [a(It, null, {
        default: l(() => [a(P(to))]),
        _: 1
      })]), G[148] || (G[148] = e("div", {
        class: "template-preview-header-text"
      }, [e("div", {
        class: "template-preview-title"
      }, "我们将参考此模板的风格和结构设计配图"), e("div", {
        class: "template-preview-subtitle"
      }, "基于多模态AI技术为您制作")], -1))])]),
      default: l(() => [e("div", xue, [Yt.value || B.value ? (c(), v("img", {
        key: 0,
        src: Yt.value || B.value,
        alt: "模板预览",
        class: "template-preview-image"
      }, null, 8, Sue)) : M("", !0)])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(il, {
      modelValue: ta.value,
      "onUpdate:modelValue": G[57] || (G[57] = Dt => ta.value = Dt),
      width: N.value ? "90vw" : "400px",
      center: "",
      "show-close": !0,
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      class: "work-complete-dialog",
      "z-index": 3e3
    }, {
      header: l(() => [e("div", Eue, [a(It, {
        class: "success-icon"
      }, {
        default: l(() => [a(P(Fg))]),
        _: 1
      }), G[149] || (G[149] = e("span", {
        class: "work-complete-title"
      }, "作品制作完毕", -1))])]),
      footer: l(() => [e("div", Tue, [a(da, {
        onClick: G[56] || (G[56] = Dt => ta.value = !1)
      }, {
        default: l(() => [...G[150] || (G[150] = [g("关闭", -1)])]),
        _: 1
      }), a(da, {
        type: "primary",
        onClick: oo
      }, {
        default: l(() => [...G[151] || (G[151] = [g("查看作品", -1)])]),
        _: 1
      })])]),
      default: l(() => [G[152] || (G[152] = e("div", {
        class: "work-complete-content"
      }, [e("p", {
        class: "work-complete-message"
      }, "您的作品已生成完成，可以前往查看")], -1))]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Wn, {
      modelValue: n.value,
      "onUpdate:modelValue": G[58] || (G[58] = Dt => n.value = Dt)
    }, null, 8, ["modelValue"]), a(xb, {
      modelValue: Ye.value,
      "onUpdate:modelValue": G[59] || (G[59] = Dt => Ye.value = Dt),
      "is-mobile": N.value,
      onSelect: Ut,
      onPreview: ti
    }, null, 8, ["modelValue", "is-mobile"]), a(Cie, {
      modelValue: wt.value,
      "onUpdate:modelValue": G[60] || (G[60] = Dt => wt.value = Dt),
      "is-mobile": N.value,
      onApply: za
    }, null, 8, ["modelValue", "is-mobile"]), a(ise, {
      ref_key: "aiCopyAssistRef",
      ref: Ae,
      "flow-mode": ie.value,
      "onUpdate:flowMode": G[61] || (G[61] = Dt => ie.value = Dt),
      "is-mobile": N.value,
      "current-points": (io = R.value) == null ? void 0 : io.create_points,
      "has-existing-content": !!O.value.trim(),
      onApply: ue,
      onAutoPipeline: Re,
      onNeedLogin: G[62] || (G[62] = Dt => s.value = !0),
      onInsufficient: me,
      onRefreshUser: Rs
    }, null, 8, ["flow-mode", "is-mobile", "current-points", "has-existing-content"]), a(il, {
      modelValue: Q.value,
      "onUpdate:modelValue": G[64] || (G[64] = Dt => Q.value = Dt),
      title: te.value,
      width: N.value ? "95%" : "560px",
      class: "ai-copy-preview-dialog",
      "align-center": "",
      "append-to-body": ""
    }, {
      footer: l(() => [a(da, {
        onClick: G[63] || (G[63] = Dt => Q.value = !1)
      }, {
        default: l(() => [...G[156] || (G[156] = [g("关闭", -1)])]),
        _: 1
      })]),
      default: l(() => {
        var Dt, El, xn, Xn;
        return [((Dt = ne.value) == null ? void 0 : Dt.kind) === "write" ? (c(), v("div", $ue, [G[153] || (G[153] = e("div", {
          class: "ai-copy-preview-label"
        }, "提示词", -1)), e("div", Pue, h(ne.value.prompt || "暂无内容"), 1)])) : (c(), v(Ue, {
          key: 1
        }, [((El = ne.value) == null ? void 0 : El.mode) === "images" ? (c(), v("div", Vue, [e("div", zue, "已上传图片（" + h((ne.value.images || []).length) + " 张）", 1), e("div", Lue, [(c(!0), v(Ue, null, gt(ne.value.images || [], (vi, Vi) => (c(), v("img", {
          key: `${vi}-${Vi}`,
          src: vi,
          alt: "仿写图片"
        }, null, 8, Due))), 128))])])) : (c(), v("div", Mue, [G[154] || (G[154] = e("div", {
          class: "ai-copy-preview-label"
        }, "仿写原文", -1)), e("div", Oue, h(((xn = ne.value) == null ? void 0 : xn.content) || "暂无内容"), 1)])), (Xn = ne.value) != null && Xn.requirement ? (c(), v("div", Bue, [G[155] || (G[155] = e("div", {
          class: "ai-copy-preview-label"
        }, "仿写要求", -1)), e("div", Nue, h(ne.value.requirement), 1)])) : M("", !0)], 64))]
      }),
      _: 1
    }, 8, ["modelValue", "title", "width"]), a(no, {
      modelValue: s.value,
      "onUpdate:modelValue": G[65] || (G[65] = Dt => s.value = Dt),
      onLoginSuccess: Us
    }, null, 8, ["modelValue"]), a(mc, {
      modelValue: u.value,
      "onUpdate:modelValue": G[66] || (G[66] = Dt => u.value = Dt),
      "current-points": (di = R.value) == null ? void 0 : di.create_points,
      "required-points": d.value,
      onRecharge: js,
      onCancel: qs
    }, null, 8, ["modelValue", "current-points", "required-points"]), a(gc, {
      modelValue: w.value,
      "onUpdate:modelValue": G[67] || (G[67] = Dt => w.value = Dt),
      "bound-persona": S.value,
      onBind: z,
      onUnbind: x
    }, null, 8, ["modelValue", "bound-persona"]), a(Os, {
      modelValue: C.value,
      "onUpdate:modelValue": G[68] || (G[68] = Dt => C.value = Dt),
      visible: f.value,
      "onUpdate:visible": G[69] || (G[69] = Dt => f.value = Dt),
      mode: "dialog",
      "is-mobile": N.value,
      onConfirm: Pl,
      onCancel: on,
      onClearHistory: vo
    }, null, 8, ["modelValue", "visible", "is-mobile"]), a(ri, {
      onOpenRecharge: G[70] || (G[70] = Dt => n.value = !0),
      onOpenLogin: G[71] || (G[71] = Dt => s.value = !0)
    }), a(il, {
      modelValue: J.value,
      "onUpdate:modelValue": G[75] || (G[75] = Dt => J.value = Dt),
      title: "输入内容主题",
      width: N.value ? "90%" : "500px",
      center: "",
      class: "content-input-dialog"
    }, {
      footer: l(() => [a(da, {
        onClick: G[74] || (G[74] = Dt => J.value = !1)
      }, {
        default: l(() => [...G[159] || (G[159] = [g("取消", -1)])]),
        _: 1
      }), a(da, {
        type: "primary",
        onClick: Ta
      }, {
        default: l(() => [...G[160] || (G[160] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", Uue, [a(os, {
        compact: ""
      }), e("div", Rue, [a(Za, {
        modelValue: ee.value,
        "onUpdate:modelValue": G[72] || (G[72] = Dt => ee.value = Dt),
        type: "textarea",
        placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
        rows: 6,
        class: "dialog-content-input",
        onKeyup: gn(lt(Ta, ["ctrl"]), ["enter"])
      }, null, 8, ["modelValue", "onKeyup"])]), e("div", jue, [ee.value.trim() ? (c(), v("div", {
        key: 1,
        class: "dialog-action-btn clear-action-btn",
        onClick: G[73] || (G[73] = Dt => ee.value = "")
      }, [...G[158] || (G[158] = [e("span", {
        class: "action-text"
      }, "清空", -1)])])) : (c(), v("div", {
        key: 0,
        class: "dialog-action-btn paste-action-btn",
        onClick: Ua
      }, [...G[157] || (G[157] = [e("span", {
        class: "action-text"
      }, "粘贴", -1)])]))])])]),
      _: 1
    }, 8, ["modelValue", "width"]), M("", !0), a(Ib, {
      visible: yt.value,
      "onUpdate:visible": G[78] || (G[78] = Dt => yt.value = Dt),
      "max-files": nt.value === "lingxi_gallery" ? 2 : 1,
      "slot-labels": nt.value === "lingxi_gallery" ? ["封面参考图", "内容参考图"] : [],
      "max-slot-index": nt.value === "lingxi_gallery" ? st.value : null,
      "show-material-library-entry": "",
      "material-library-entry-text": "从素材库选择1张参考图",
      "show-template-library-entry": "",
      "template-library-entry-text": "从模板库选择封面参考图",
      onConfirm: ci,
      onOpenMaterialLibrary: Nt,
      onOpenTemplateLibrary: dt,
      onReceiveMobile: _o
    }, null, 8, ["visible", "max-files", "slot-labels", "max-slot-index"]), a(il, {
      modelValue: Z.value,
      "onUpdate:modelValue": G[84] || (G[84] = Dt => Z.value = Dt),
      title: "从我的素材库选择图片",
      width: N.value ? "96%" : "960px",
      class: "material-library-dialog yijuhua-material-library-dialog",
      "destroy-on-close": "",
      "append-to-body": "",
      onOpened: Kt
    }, {
      footer: l(() => [e("span", ace, "已选 " + h(Qe.value.length) + "/1 张", 1), a(da, {
        onClick: G[83] || (G[83] = Dt => Z.value = !1)
      }, {
        default: l(() => [...G[175] || (G[175] = [g("取消", -1)])]),
        _: 1
      }), a(da, {
        type: "primary",
        disabled: Qe.value.length === 0,
        onClick: Ke
      }, {
        default: l(() => [...G[176] || (G[176] = [g("确定", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      default: l(() => [Mt.value ? (c(), v("div", que, [a(It, {
        class: "is-loading"
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      }), G[164] || (G[164] = e("span", null, "加载中...", -1))])) : Et.value.length === 0 ? (c(), v("div", Fue, [G[166] || (G[166] = e("p", null, "暂无素材，请先上传图片到素材库", -1)), a(da, {
        type: "primary",
        onClick: et
      }, {
        default: l(() => [...G[165] || (G[165] = [g("去素材库管理", -1)])]),
        _: 1
      })])) : (c(), v("div", Wue, [e("div", Gue, [a(da, {
        type: "primary",
        link: "",
        onClick: et
      }, {
        default: l(() => [a(It, null, {
          default: l(() => [a(P(Ps))]),
          _: 1
        }), G[167] || (G[167] = g(" 进入素材库 ", -1))]),
        _: 1
      }), G[168] || (G[168] = e("span", {
        class: "material-library-toolbar-tip"
      }, "可前往素材库添加更多图片后返回此处选择", -1))]), a(Yl, {
        modelValue: j.value,
        "onUpdate:modelValue": G[79] || (G[79] = Dt => j.value = Dt),
        class: "material-library-tabs"
      }, {
        default: l(() => [a(hl, {
          label: "全部",
          name: "all"
        }), a(hl, {
          label: "未分组",
          name: "cg:none"
        }), (c(!0), v(Ue, null, gt(jt.value, Dt => (c(), ye(hl, {
          key: Dt.id,
          name: `cg:${Dt.id}`
        }, {
          label: l(() => [e("span", Jue, [e("span", Hue, h(Dt.name), 1)])]),
          _: 2
        }, 1032, ["name"]))), 128))]),
        _: 1
      }, 8, ["modelValue"]), e("div", Que, [G[174] || (G[174] = e("span", {
        class: "material-library-filter-label"
      }, "日期：", -1)), a(mo, {
        modelValue: Ee.value,
        "onUpdate:modelValue": G[80] || (G[80] = Dt => Ee.value = Dt),
        size: "small",
        class: "material-library-filter-group"
      }, {
        default: l(() => [a(Cl, {
          value: "all"
        }, {
          default: l(() => [...G[169] || (G[169] = [g("全部", -1)])]),
          _: 1
        }), a(Cl, {
          value: "today"
        }, {
          default: l(() => [...G[170] || (G[170] = [g("今日", -1)])]),
          _: 1
        }), a(Cl, {
          value: "yesterday"
        }, {
          default: l(() => [...G[171] || (G[171] = [g("昨天", -1)])]),
          _: 1
        }), a(Cl, {
          value: "week"
        }, {
          default: l(() => [...G[172] || (G[172] = [g("最近一周", -1)])]),
          _: 1
        }), a(Cl, {
          value: "custom"
        }, {
          default: l(() => [...G[173] || (G[173] = [g("指定日期", -1)])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"]), Ee.value === "custom" ? (c(), ye(Jl, {
        key: 0,
        modelValue: ht.value,
        "onUpdate:modelValue": G[81] || (G[81] = Dt => ht.value = Dt),
        type: "date",
        placeholder: "选择日期",
        "value-format": "YYYY-MM-DD",
        size: "small",
        class: "material-library-custom-date"
      }, null, 8, ["modelValue"])) : M("", !0)]), e("div", Kue, [e("div", Yue, [(c(!0), v(Ue, null, gt(Wt.value, Dt => (c(), v("div", {
        key: Dt.id,
        class: Pe(["material-library-item", {
          selected: at(Dt.url)
        }]),
        onClick: El => Fe(Dt)
      }, [e("img", {
        src: Dt.url,
        alt: Dt.name
      }, null, 8, Zue), at(Dt.url) ? (c(), v("div", ece, [a(It, null, {
        default: l(() => [a(P(Zo))]),
        _: 1
      })])) : M("", !0)], 10, Xue))), 128))])]), Ze.value > Td ? (c(), v("div", tce, [a(Pi, {
        "current-page": Bt.value,
        "onUpdate:currentPage": G[82] || (G[82] = Dt => Bt.value = Dt),
        "page-size": Td,
        total: Ze.value,
        layout: "prev, pager, next",
        small: "",
        onCurrentChange: aa
      }, null, 8, ["current-page", "total"])])) : M("", !0)]))]),
      _: 1
    }, 8, ["modelValue", "width"])])
  }
}
