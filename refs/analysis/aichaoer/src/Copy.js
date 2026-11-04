// module: Copy
// extracted from 02-index-8bb27f01.js.js @ 1142584
{
  const o = ln(),
    i = fn();
  gZ();
  const n = p(!1),
    s = p(!1),
    u = p(0),
    d = () => {
      y.value ? o.push("/wappay") : n.value = !0
    },
    f = p(!1),
    y = p(window.innerWidth <= 768),
    w = p(!!localStorage.getItem("authToken")),
    S = p({}),
    z = ["小玲", "晓玲", "玉玲", "雅玲", "思玲", "梦玲", "若玲", "书玲", "阿婷", "沐雨", "星悦", "云舒", "晚棠", "清欢", "南乔", "知夏", "半夏", "静瑶", "语汐", "若溪", "晚晴", "浅夏", "听风", "安禾"];

  function x() {
    return z[Math.floor(Math.random() * z.length)]
  }
  const C = [{
    text: "3分钟前 图文《如何选择**********》生成成功"
  }, {
    text: "5分钟前 图文《毛衣编制教程**********》生成成功"
  }, {
    text: "8分钟前 图文《制作简历模板**********》生成成功"
  }, {
    text: "10分钟前 图文 《化妆技巧**********》生成成功"
  }, {
    text: "12分钟前 图文《只要学会这个*****》生成成功"
  }, {
    text: "15分钟前 图文《中国古**********》生成成功"
  }, {
    text: "18分钟前 图文《美妆头**********》生成成功"
  }, {
    text: "20分钟前 图文《矿用低**********》生成成功"
  }, {
    text: "22分钟前 图文《价值观**********》生成成功"
  }, {
    text: "25分钟前 图文《建国7**********》生成成功"
  }, {
    text: "2分钟前 图文《护肤心得分享**********》生成成功"
  }, {
    text: "4分钟前 图文《美食制作教程**********》生成成功"
  }, {
    text: "6分钟前 图文《旅行攻略指南**********》生成成功"
  }, {
    text: "9分钟前 图文《穿搭搭配技巧**********》生成成功"
  }, {
    text: "11分钟前 图文《健身运动计划**********》生成成功"
  }, {
    text: "13分钟前 图文《学习方法分享**********》生成成功"
  }, {
    text: "16分钟前 图文《职场技能提升**********》生成成功"
  }, {
    text: "19分钟前 图文《家居装饰灵感**********》生成成功"
  }, {
    text: "21分钟前 图文《宠物养护知识**********》生成成功"
  }, {
    text: "24分钟前 图文《理财投资建议**********》生成成功"
  }, {
    text: "1分钟前 图文《摄影技巧分享**********》生成成功"
  }, {
    text: "7分钟前 图文《读书图文整理**********》生成成功"
  }, {
    text: "14分钟前 图文《亲子教育心得**********》生成成功"
  }, {
    text: "17分钟前 图文《情感故事分享**********》生成成功"
  }, {
    text: "23分钟前 图文《科技产品评测**********》生成成功"
  }, {
    text: "26分钟前 图文《健康养生知识**********》生成成功"
  }, {
    text: "28分钟前 图文《创业经验分享**********》生成成功"
  }, {
    text: "30分钟前 图文《生活小妙招**********》生成成功"
  }];
  p((() => [...C].sort(() => Math.random() - .5).slice(0, 10).map(I => ({
    text: `***${x()}，${I.text}`
  })))());
  const $ = p("text"),
    N = Le(() => {
      var Se;
      if (!w.value) return !1;
      const oe = (Se = S.value) == null ? void 0 : Se.jointime;
      if (oe == null || oe === "") return !1;
      let I = "";
      if (typeof oe == "string" && /^\d{4}-\d{2}-\d{2}/.test(oe)) I = oe.slice(0, 10);
      else {
        const Ct = Number(oe);
        if (!Number.isFinite(Ct) || Ct <= 0) return !1;
        I = new Date((Ct + 8 * 3600) * 1e3).toISOString().slice(0, 10)
      }
      return I < rne
    }),
    T = p("note"),
    R = p(""),
    O = p(""),
    J = p(""),
    ee = p(""),
    ie = Le(() => T.value === "note" ? R.value : O.value),
    Ae = p(!1),
    F = p("collect"),
    Y = p(1),
    ne = p(0),
    De = p([]),
    Q = p(""),
    re = p([]),
    b = p(1),
    te = p(0),
    we = p([]),
    ae = p(""),
    me = p([]),
    ce = p(!1),
    ue = Le(() => {
      const oe = De.value,
        I = Q.value;
      return I ? oe.filter(Se => String(Se.groupid ?? "") === String(I)) : oe
    });

  function U(oe) {
    var ua, ra;
    const I = oe != null && oe.data && typeof oe.data == "object" && !Array.isArray(oe.data) ? oe.data : oe,
      Se = Array.isArray(I == null ? void 0 : I.rows) ? I.rows : Array.isArray(I) ? I : [],
      Ct = Number(((ua = I == null ? void 0 : I.pages) == null ? void 0 : ua.total) ?? (I == null ? void 0 : I.total) ?? ((ra = oe == null ? void 0 : oe.pages) == null ? void 0 : ra.total) ?? 0) || 0;
    return {
      rows: Se,
      total: Ct
    }
  }

  function de(oe) {
    return ((oe == null ? void 0 : oe.title) || "").toString().trim() || "无标题"
  }

  function _e(oe, I = 30) {
    const Se = ((oe == null ? void 0 : oe.desc) || (oe == null ? void 0 : oe.content) || "").toString();
    if (!Se) return "";
    const Ct = Se.replace(/\s+/g, " ").trim();
    return Ct.length > I ? Ct.slice(0, I) + "..." : Ct
  }

  function xe(oe) {
    if (oe == null) return "";
    const I = Number(oe),
      Se = new Date(I < 1e12 ? I * 1e3 : I);
    if (Number.isNaN(Se.getTime())) return "";
    const ua = Date.now() - Se.getTime();
    return ua < 6e4 ? "刚刚" : ua < 36e5 ? Math.floor(ua / 6e4) + " 分钟前" : ua < 864e5 ? Math.floor(ua / 36e5) + " 小时前" : `${Se.getFullYear()}-${String(Se.getMonth()+1).padStart(2,"0")}-${String(Se.getDate()).padStart(2,"0")}`
  }
  async function Ce() {
    try {
      const oe = await v0();
      re.value = Array.isArray(oe) ? oe : []
    } catch (oe) {
      re.value = [], A.error((oe == null ? void 0 : oe.message) || "获取导入分组失败")
    }
  }
  async function Re() {
    try {
      const oe = await m0();
      me.value = Array.isArray(oe) ? oe : []
    } catch (oe) {
      me.value = [], A.error((oe == null ? void 0 : oe.message) || "获取收藏分组失败")
    }
  }
  async function nt(oe = Y.value) {
    var I;
    Y.value = oe;
    try {
      const Se = await d0({
          page: oe,
          size: Jm
        }),
        Ct = Se != null && Se.data && typeof Se.data == "object" ? Se.data : Se,
        ua = Array.isArray(Ct == null ? void 0 : Ct.rows) ? Ct.rows : [],
        ra = Number(((I = Ct == null ? void 0 : Ct.pages) == null ? void 0 : I.total) ?? (Ct == null ? void 0 : Ct.total) ?? 0) || 0;
      ne.value = ra, De.value = ua
    } catch (Se) {
      De.value = [], ne.value = 0, A.error((Se == null ? void 0 : Se.message) || "获取导入列表失败")
    }
  }
  async function tt(oe = b.value) {
    ce.value = !0, b.value = oe;
    try {
      const I = {
        page: oe,
        size: Hm
      };
      ae.value && (I.groupid = ae.value);
      const Se = await g0(I),
        {
          rows: Ct,
          total: ua
        } = U(Se);
      te.value = ua, we.value = Ct
    } catch (I) {
      we.value = [], te.value = 0, A.error((I == null ? void 0 : I.message) || "获取收藏列表失败")
    } finally {
      ce.value = !1
    }
  }

  function qe(oe) {
    nt(oe)
  }

  function Me(oe) {
    tt(oe)
  }

  function rt() {
    tt(1)
  }

  function ct(oe) {
    oe === "collect" ? nt(1) : oe === "favorite" && tt(1)
  }
  async function E() {
    await Promise.all([Ce(), Re()]), F.value === "collect" ? await nt(1) : await tt(1)
  }

  function _() {
    const {
      href: oe
    } = o.resolve({
      name: "Article"
    });
    window.open(oe, "_blank", "noopener,noreferrer")
  }

  function je(oe) {
    const I = (oe == null ? void 0 : oe.link) != null && oe.link !== "" ? String(oe.link).trim() : "";
    if (!I) {
      A.warning("该记录暂无链接");
      return
    }
    T.value === "goods" ? O.value = I : R.value = I, Ae.value = !1, A.success("已填入链接")
  }
  const K = p(null),
    B = p(!1),
    W = Le(() => {
      var I;
      const oe = (I = K.value) == null ? void 0 : I.images;
      return !oe || !Array.isArray(oe) ? [] : oe.filter(Se => Se && String(Se).trim())
    }),
    Te = Le(() => {
      if (y.value) return "92%";
      const oe = typeof window < "u" ? window.innerHeight : 900,
        Se = Math.min(oe * .9 - 120, 900) * 4 / 3;
      return `${Math.min(Se,1200)}px`
    }),
    it = p(0);

  function yt(oe) {
    it.value = typeof oe == "number" ? oe : 0
  }
  let st = null;

  function Ie() {
    if (y.value) {
      const oe = document.querySelector(".batch-result-detail-dialog .result-detail-yulan-content");
      oe && (oe.style.height = "", oe.style.maxHeight = "");
      return
    }
    st && clearTimeout(st), st = setTimeout(() => {
      const oe = document.querySelector(".batch-result-detail-dialog .result-detail-gallery"),
        I = document.querySelector(".batch-result-detail-dialog .result-detail-yulan-content");
      if (oe && I) {
        const Se = oe.offsetHeight;
        Se > 0 && (I.style.height = `${Se}px`, I.style.maxHeight = `${Se}px`)
      }
    }, 120)
  }
  oa(B, oe => {
    oe && (it.value = 0, Da(() => Ie()))
  }), oa(() => W.value.length, () => {
    B.value && Da(() => Ie())
  });
  const pe = p(""),
    Be = p({
      title: "",
      content: "",
      images: []
    }),
    xt = p(!1),
    Yt = p(!1),
    Ye = p(!1),
    va = p(""),
    Ea = p(null),
    ft = p(-1),
    Z = p("replace");

  function pt() {
    const oe = Ea.value;
    if (!oe) {
      A.warning("文件选择器未就绪，请稍后重试");
      return
    }
    oe.value = "";
    try {
      if (typeof oe.showPicker == "function") {
        oe.showPicker();
        return
      }
    } catch {}
    oe.click()
  }

  function Et(oe) {
    if (!oe) return !1;
    if (typeof oe.type == "string" && oe.type.startsWith("image/")) return !0;
    const I = String(oe.name || "").toLowerCase();
    return /\.(jpg|jpeg|png|gif|webp|bmp|heic|heif|avif)$/i.test(I)
  }
  const Mt = p(null),
    Qe = p(""),
    j = p("comprehensive"),
    Ee = p(!1),
    ht = p(0),
    jt = p(""),
    ca = p(50),
    be = p(50),
    he = p(50),
    kt = p(["穿搭", "美妆", "护肤", "减肥", "美食", "健身", "家居", "旅行", "数码", "摄影", "好物分享", "显瘦", "口红", "面膜", "收纳", "瘦身", "手机", "包包", "鞋子", "防晒"]),
    Bt = p(null),
    Ze = p(0),
    Wt = oe => {
      Ze.value = typeof oe == "number" ? oe : 0
    },
    aa = oe => {
      var I;
      Ze.value = oe, (I = Bt.value) == null || I.setActiveItem(oe)
    },
    xa = p(!1),
    Kt = p(!1),
    at = p(!1),
    Fe = p(0),
    Ke = p(""),
    et = p(!1),
    Nt = p(0);
  let Ut = null,
    Ge = null;
  const dt = () => {
      Ut && (clearTimeout(Ut), Ut = null), Ge && (clearInterval(Ge), Ge = null)
    },
    qt = (oe = 30) => {
      dt(), Nt.value = oe, Ge = setInterval(() => {
        Nt.value > 0 && (Nt.value -= 1), Nt.value <= 0 && Ge && (clearInterval(Ge), Ge = null)
      }, 1e3), Ut = setTimeout(() => {
        dt(), wc()
      }, oe * 1e3)
    },
    ka = (oe = 60) => new Promise(I => {
      const Se = () => {
        Fe.value < 100 ? (Fe.value = Math.min(100, Fe.value + 1), setTimeout(Se, oe)) : I()
      };
      Se()
    }),
    Ne = p({
      imageMode: "aiImage",
      imageCount: 1,
      titleMode: "aiNew",
      copywritingMode: "rewrite",
      noteType: "任意",
      wordCount: "fanwei",
      contentOptions: ["addEmoji", "addHashtag", "filterBannedWords", "filterMarketingWords", "customExtra"]
    });
  Le(() => {
    var ua, ra;
    let oe = parseInt(Ne.value.imageCount, 10) || 1;
    Ne.value.imageMode === "aiImage" && ((ra = (ua = K.value) == null ? void 0 : ua.images) != null && ra.length) && (oe *= Math.max(1, K.value.images.length));
    const I = oe * 20,
      Se = oe * 40,
      Ct = wa => wa < 60 ? `${wa}秒` : `${Math.ceil(wa/60)}分钟`;
    return `${Ct(I)}-${Ct(Se)}`
  });
  const ga = Le(() => {
      var I;
      const oe = parseInt(Ne.value.imageCount, 10) || 1;
      if (Ne.value.imageMode === "aiImage") {
        const Se = Math.max(1, ((I = K.value) == null ? void 0 : I.images) && K.value.images.length || 0);
        return oe * Se * 4
      }
      return oe
    }),
    St = Le(() => 2 * Math.PI * 52);
  Le(() => St.value - Fe.value / 100 * St.value);
  const Oe = p(!1);
  Le(() => !K.value || !K.value.content ? !1 : K.value.content.length > 200 || K.value.content.split(`
`).length > 3);
  const Ve = Le(() => {
      var I;
      return (((I = K.value) == null ? void 0 : I.content) || "").replace(/\[话题\]/g, "").replace(/#([^#\s]+)#/g, "#$1")
    }),
    Ma = Le(() => !!(i.query.templateId || i.query.templateKey));
  Le(() => (y.value, !Ma.value && !K.value && $.value !== "text"));
  const Je = p({
      industry: "",
      ageMode: "any",
      ageRange: [18, 30],
      targetGroup: "",
      painPoints: "",
      solution: "",
      notes: ""
    }),
    ve = p(!1),
    $t = p(!1),
    ta = p(!1),
    ha = p(null),
    Qt = oe => {
      ha.value = oe
    },
    ba = () => {
      ha.value = null
    },
    Ja = p(!1),
    ml = p(!1);
  let $e = null,
    We = null;
  const ze = () => {
      $t.value = !0, $e && ($e.resolve(), $e = null)
    },
    H = () => {
      $e && ($e.reject(new Error("cancel")), $e = null)
    },
    Lt = () => {
      ml.value = !1, We && (We.reject(new Error("cancel")), We = null)
    },
    Ft = () => {
      We && (We.reject(new Error("cancel")), We = null)
    },
    Rt = p("");
  let Ot = 0;
  const Xt = p([]),
    At = () => {
      Xt.value.push({
        id: ++Ot,
        from: "",
        to: ""
      })
    },
    pa = oe => {
      Xt.value.splice(oe, 1)
    },
    Oa = () => Xt.value.map(oe => ({
      from: (oe.from || "").trim(),
      to: (oe.to || "").trim()
    })).filter(oe => oe.from),
    Fa = Le(() => Oa().length),
    gl = oe => !Array.isArray(oe) || oe.length === 0 ? "" : ["【内容替换·强制要求】请在生成的标题与正文中，按下列对应关系替换内容，并围绕替换后的内容自然组织上下文（涉及的相关细节也一并调整），确保整体通顺合理，最终文案中不得再出现被替换掉的原词：", ...oe.map(Se => Se.to ? `- 把「${Se.from}」替换为「${Se.to}」` : `- 删除原文中的「${Se.from}」`)].join(`
`),
    jl = p(!1),
    en = () => {
      Xt.value.length === 0 && At(), jl.value = !0
    },
    fa = () => {
      Xt.value = Xt.value.filter(oe => (oe.from || "").trim() || (oe.to || "").trim()), jl.value = !1
    },
    Ka = p([]),
    Dl = p(""),
    tn = p(0),
    zt = p([]),
    dl = Le(() => !!(Rt.value || "").trim() || Ka.value.length > 0 || zt.value.length > 0),
    Nl = p(""),
    kn = p(0),
    Cn = p(null),
    ll = Le(() => Math.max(1, parseInt(Ne.value.imageCount, 10) || 1)),
    Ul = Le(() => Math.max(0, ll.value - Ka.value.length)),
    _l = Le(() => {
      const oe = ll.value;
      return `${oe===1?"仅 1 张":`最多 ${oe} 张（已选 ${Ka.value.length}）`} · JPG / PNG / HEIC · 最大 10MB`
    }),
    Tn = oe => typeof oe == "string" ? oe : Array.isArray(oe) ? oe[0] || "" : Array.isArray(oe == null ? void 0 : oe.data) ? oe.data[0] || "" : (oe == null ? void 0 : oe.data) || (oe == null ? void 0 : oe.url) || "",
    Dn = () => {
      if (Dl.value) {
        try {
          URL.revokeObjectURL(Dl.value)
        } catch {}
        Dl.value = ""
      }
    },
    An = p([]),
    dn = p(!1),
    $n = oe => {
      if (Array.isArray(oe)) return oe;
      if (typeof oe != "string") return [];
      const I = oe.trim();
      if (!I) return [];
      if (I.startsWith("[")) try {
        const Se = JSON.parse(I);
        return Array.isArray(Se) ? Se : []
      } catch {
        return []
      }
      return [I]
    },
    Xe = oe => {
      if (!oe || typeof oe != "object") return "";
      const I = oe.url || oe.image || oe.img || oe.cover || oe.cover_url || oe.image_url || oe.ref_url || oe.reference_url;
      if (I) return String(I);
      const Se = $n(oe.images).find(Boolean);
      if (Se) return String(Se);
      const Ct = $n(oe.references).find(Boolean);
      return Ct ? String(Ct) : ""
    },
    se = oe => (Array.isArray(oe) ? oe : Array.isArray(oe == null ? void 0 : oe.rows) ? oe.rows : Array.isArray(oe == null ? void 0 : oe.list) ? oe.list : []).map(Se => ({
      id: (Se == null ? void 0 : Se.id) ?? (Se == null ? void 0 : Se.url) ?? (Se == null ? void 0 : Se.image) ?? Math.random(),
      url: Xe(Se)
    })).filter(Se => !!Se.url),
    Tt = async () => {
      dn.value = !0;
      try {
        const oe = await Qh({
          page: 1,
          size: 50
        });
        An.value = se(oe)
      } catch (oe) {
        console.error("加载历史风格图失败", oe), An.value = [], A.error((oe == null ? void 0 : oe.message) || "加载历史风格图失败")
      } finally {
        dn.value = !1
      }
    }, Ht = p(null), Pa = p(!1), Va = p(0), X = Le(() => !Be.value.images || Be.value.images.length === 0 ? [] : Be.value.images.map(oe => {
      var I;
      return oe.url ? oe.url : (I = oe.response) != null && I.data ? Array.isArray(oe.response.data) ? oe.response.data[0] : oe.response.data : oe.raw ? URL.createObjectURL(oe.raw) : null
    }).filter(oe => oe !== null)), le = Le(() => Va.value === 0), ot = Le(() => X.value.length > 0 && Va.value === X.value.length - 1), vt = () => {
      X.value.length > 0 && Va.value > 0 && (Va.value = Va.value - 1)
    }, bt = () => {
      X.value.length > 0 && Va.value < X.value.length - 1 && (Va.value = Va.value + 1)
    }, Jt = p(0), Ra = p(0), Ca = p(0), Ba = oe => {
      !y.value || X.value.length <= 1 || (Jt.value = oe.touches[0].clientX, Ra.value = oe.touches[0].clientY, Ca.value = Date.now())
    }, Qa = oe => {
      !y.value || X.value.length <= 1 || oe.preventDefault()
    }, rl = oe => {
      if (!y.value || X.value.length <= 1) return;
      const I = oe.changedTouches[0].clientX,
        Se = oe.changedTouches[0].clientY,
        Ct = I - Jt.value,
        ua = Se - Ra.value,
        ra = Date.now() - Ca.value;
      Math.abs(Ct) > Math.abs(ua) && Math.abs(Ct) > 30 && ra < 500 && (Ct > 0 ? le.value || vt() : ot.value || bt())
    };
  oa(Pa, oe => {
    oe || (Va.value = 0)
  });
  const sa = () => {
      ve.value = !0
    },
    Ga = p(null),
    ol = () => {
      ml.value = !0
    },
    Sl = () => {
      var oe;
      if (Ul.value <= 0) {
        A.warning(`参考风格图最多 ${ll.value} 张`);
        return
      }(oe = Ga.value) == null || oe.click()
    },
    In = async oe => {
      var Ct;
      const I = (Ct = oe.target.files) == null ? void 0 : Ct[0];
      if (oe.target && (oe.target.value = ""), !I) return;
      if (!Ao()) {
        f.value = !0;
        return
      }
      if (Ul.value <= 0) {
        A.warning(`参考风格图最多 ${ll.value} 张`);
        return
      }
      let Se = I;
      try {
        Yo(Se) && (Se = await _i(Se))
      } catch (ua) {
        A.warning((ua == null ? void 0 : ua.message) || "图片处理失败");
        return
      }
      if (!Se.type.startsWith("image/")) {
        A.warning("请上传图片文件");
        return
      }
      Dn(), Dl.value = URL.createObjectURL(Se), tn.value = 10;
      try {
        const ua = await Pr(Se),
          ra = Tn(ua);
        if (!ra) throw new Error("上传失败，未返回图片地址");
        tn.value = 100, Ka.value = [...Ka.value, String(ra)], Dn(), A.success("参考风格图上传成功")
      } catch (ua) {
        Dn(), A.error((ua == null ? void 0 : ua.message) || "参考风格图上传失败，请重试")
      } finally {
        tn.value = 0
      }
    }, wo = oe => {
      if (typeof oe != "number") {
        Dn(), Ka.value = [];
        return
      }
      Ka.value = Ka.value.filter((I, Se) => Se !== oe)
    }, nn = () => {
      if (Nl.value) {
        try {
          URL.revokeObjectURL(Nl.value)
        } catch {}
        Nl.value = ""
      }
    }, Pn = () => {
      var oe;
      (oe = Cn.value) == null || oe.click()
    }, Gn = async oe => {
      const I = Array.from(oe.target.files || []);
      if (oe.target && (oe.target.value = ""), !I.length) return;
      if (!Ao()) {
        f.value = !0;
        return
      }
      const Se = As - zt.value.length;
      if (Se <= 0) {
        A.warning(`产品图最多 ${As} 张`);
        return
      }
      const Ct = I.slice(0, Se);
      I.length > Se && A.warning(`最多再传 ${Se} 张，超出的已忽略`);
      let ua = 0;
      for (let ra of Ct) {
        let wa = ra;
        try {
          Yo(wa) && (wa = await _i(wa))
        } catch (tl) {
          A.warning((tl == null ? void 0 : tl.message) || "图片处理失败");
          continue
        }
        if (!wa.type.startsWith("image/")) {
          A.warning("请上传图片文件");
          continue
        }
        nn(), Nl.value = URL.createObjectURL(wa), kn.value = 10;
        try {
          const tl = await Pr(wa),
            pl = Tn(tl);
          if (!pl) throw new Error("上传失败，未返回图片地址");
          kn.value = 100, zt.value = [...zt.value, String(pl)], ua++
        } catch (tl) {
          A.error((tl == null ? void 0 : tl.message) || "产品图上传失败，请重试")
        } finally {
          nn(), kn.value = 0
        }
      }
      ua && A.success("产品参考图上传成功")
    }, co = oe => {
      zt.value = zt.value.filter((I, Se) => Se !== oe)
    }, Pt = () => {
      nn(), zt.value = []
    }, yl = p(!1), Mn = p(!1), vn = p([]), Nn = p("all"), zo = p([]), On = p([]), ti = oe => On.value.includes(oe), _o = oe => {
      const I = oe == null ? void 0 : oe.url;
      if (!I) return;
      const Se = On.value;
      Se.indexOf(I) !== -1 ? On.value = Se.filter(ua => ua !== I) : Se.length < Ul.value ? On.value = [...Se, I] : Ul.value === 0 ? A.warning(`参考风格图最多 ${ll.value} 张`) : A.warning(`最多再选择 ${Ul.value} 张`)
    }, ci = Le(() => {
      const oe = Nn.value,
        I = vn.value;
      if (oe === "all") return I;
      if (oe === "cg:none") return I.filter(Ct => !Ct.customGroupId);
      const Se = oe.startsWith("cg:") ? oe.slice(3) : "";
      return Se ? I.filter(Ct => String(Ct.customGroupId) === Se) : I
    }), fe = () => {
      if (!Ao()) {
        f.value = !0;
        return
      }
      if (Ul.value <= 0) {
        A.warning(`参考风格图最多 ${ll.value} 张`);
        return
      }
      On.value = [], Nn.value = "all", yl.value = !0
    }, q = p(!1), wt = async () => {
      if (!Ao()) {
        f.value = !0;
        return
      }
      if (Ul.value <= 0) {
        A.warning(`参考风格图最多 ${ll.value} 张`);
        return
      }
      On.value = [], q.value = !0, await Tt()
    }, Gt = async () => {
      try {
        const oe = await dc();
        zo.value = Array.isArray(oe) ? oe.filter(I => I && I.id !== void 0 && I.id !== null && Number(I.id) !== 0) : []
      } catch {
        zo.value = []
      }
    }, za = async () => {
      Mn.value = !0;
      try {
        await Gt();
        const oe = await kv({
            page: 1,
            size: 200
          }),
          I = Array.isArray(oe == null ? void 0 : oe.rows) ? oe.rows : [];
        vn.value = I.map(Se => {
          const Ct = Se.groupid ?? Se.group_id ?? Se.groupId ?? Se.customGroupId,
            ra = (Ct === "" || Ct === null || Ct === void 0 ? 0 : Number(Ct)) === 0 ? "" : String(Ct);
          return {
            id: Se.id,
            name: Se.name || `素材${Se.id}`,
            url: Se.url,
            customGroupId: ra
          }
        }).filter(Se => !!Se.url)
      } catch (oe) {
        console.error("加载素材库失败", oe), vn.value = [], A.error((oe == null ? void 0 : oe.message) || "加载素材库失败")
      } finally {
        Mn.value = !1
      }
    }, Ua = () => {
      yl.value = !1, o.push("/user?tab=material_library")
    }, Ta = () => {
      const oe = On.value;
      if (!Array.isArray(oe) || oe.length === 0) return;
      const I = Ul.value,
        Se = oe.slice(0, I);
      if (Se.length === 0) {
        A.warning(`参考风格图最多 ${ll.value} 张`);
        return
      }
      Ka.value = [...Ka.value, ...Se], On.value = [], yl.value = !1, ja.value = !1, q.value = !1, A.success(`已添加 ${Se.length} 张参考风格图`)
    }, ja = p(!1), sl = oe => {
      if (!oe) return "";
      let I = oe.previewImage || oe.cover || oe.images || oe.image || oe.img || oe.preview_image || "";
      if (Array.isArray(I)) return I[0] || "";
      if (typeof I == "string") {
        const Se = I.trim();
        if (Se.startsWith("[") && Se.endsWith("]")) try {
          const Ct = JSON.parse(Se);
          if (Array.isArray(Ct)) return Ct[0] || ""
        } catch {}
        return Se
      }
      return ""
    }, Gl = () => {
      if (!Ao()) {
        f.value = !0;
        return
      }
      if (Ul.value <= 0) {
        A.warning(`参考风格图最多 ${ll.value} 张`);
        return
      }
      ja.value = !0
    }, fl = oe => {
      const I = sl(oe);
      if (!I) {
        A.warning("该模板暂无可用封面图");
        return
      }
      if (Ul.value <= 0) {
        A.warning(`参考风格图最多 ${ll.value} 张`);
        return
      }
      if (Ka.value.includes(I)) {
        A.info("该模板封面已添加");
        return
      }
      Ka.value = [...Ka.value, I];
      const Se = Ul.value;
      Se > 0 ? A.success(`已添加 1 张参考风格图，剩余 ${Se} 张可继续选择`) : A.success("已添加 1 张参考风格图")
    }, Pl = oe => {
      const I = sl(oe);
      I && window.open(I, "_blank", "noopener,noreferrer")
    }, on = async () => {
      if (Dl.value) {
        A.warning("参考风格图正在上传，请稍候");
        return
      }
      We && (We.resolve(), We = null), ml.value = !1
    }, vo = () => {
      $.value = "text", va.value = ""
    };
  Le(() => {
    if (!ie.value) return !1;
    try {
      const oe = new URL(ie.value);
      return !!oe.protocol && !!oe.host
    } catch {
      return !1
    }
  });
  const hn = Le(() => !!(Be.value.content && Be.value.content.trim()) && Be.value.images.length > 0),
    oo = () => {
      if ($.value === "search") {
        $.value = "link", o.push("/chazhao");
        return
      }
      va.value = "", K.value = null, xt.value = !1, Kt.value = !1, Oe.value = !1, $.value === "link" ? (Be.value = {
        title: "",
        content: "",
        images: []
      }, Qe.value = "") : $.value === "text" && (R.value = "", O.value = "", Qe.value = "")
    },
    ko = oe => {
      Qe.value = oe, Mt.value && Mt.value.focus()
    },
    Un = () => {},
    Rn = async () => {
      if (!Qe.value.trim()) {
        A.warning("请输入搜索关键词");
        return
      }
      try {
        sessionStorage.setItem("aicopy_search_keyword", Qe.value), sessionStorage.setItem("aicopy_search_sortMode", j.value), sessionStorage.setItem("aicopy_search_inputMode", $.value)
      } catch (wa) {
        console.warn("保存搜索数据失败:", wa)
      }
      ca.value = 50, be.value = 50, he.value = 50, Ee.value = !0, ht.value = 0, jt.value = "searching";
      const oe = 61 + Math.floor(Math.random() * 40),
        I = 55 + Math.floor(Math.random() * 50),
        Se = 76 + Math.floor(Math.random() * 30),
        Ct = () => {
          ca.value < oe && (ca.value = Math.min(ca.value + Math.floor(Math.random() * 3) + 1, oe)), be.value < I && (be.value = Math.min(be.value + Math.floor(Math.random() * 3) + 1, I)), he.value < Se && (he.value = Math.min(he.value + Math.floor(Math.random() * 3) + 1, Se))
        },
        ua = setInterval(() => {
          ht.value < 90 && (ht.value += 10, ht.value >= 30 && jt.value === "searching" ? jt.value = "analyzing" : ht.value >= 60 && jt.value === "analyzing" && (jt.value = "matching")), Ct()
        }, 200),
        ra = setInterval(() => {
          Ct()
        }, 100);
      try {
        const wa = await Zf(Qe.value.trim());
        clearInterval(ua), clearInterval(ra), ca.value = oe, be.value = I, he.value = Se, ht.value = 100;
        try {
          sessionStorage.setItem("xhs_search_results", JSON.stringify({
            hot_queries: wa.hot_queries || [],
            notes: wa.notes || [],
            total: wa.total || 0,
            from_cache: wa.from_cache || !1
          }))
        } catch (tl) {
          console.warn("保存搜索结果失败:", tl)
        }
        setTimeout(() => {
          Ee.value = !1, o.push({
            path: "/aisousuo",
            query: {
              keyword: Qe.value,
              sortMode: j.value
            }
          })
        }, 500)
      } catch (wa) {
        clearInterval(ua), clearInterval(ra), ht.value = 100, console.error("搜索优质模板失败:", wa), A.error((wa == null ? void 0 : wa.message) || "搜索失败，请稍后重试"), setTimeout(() => {
          Ee.value = !1
        }, 1e3)
      }
    }, ia = () => {
      var I;
      if (!Ao()) {
        f.value = !0;
        return
      }
      if (!hn.value) {
        va.value = "请输入内容", setTimeout(() => va.value = "", 2e3);
        return
      }
      const oe = Be.value.images.filter(Se => {
        var Ct;
        return Se.url || ((Ct = Se.response) == null ? void 0 : Ct.data)
      }).map(Se => {
        var Ct;
        return Se.url || ((Ct = Se.response) == null ? void 0 : Ct.data) || (Se.response && Array.isArray(Se.response) ? Se.response[0] : Se.response)
      }).filter(Se => Se && Se.trim());
      K.value = {
        title: ((I = Be.value.title) == null ? void 0 : I.trim()) || "未命名标题",
        platform: "用户输入",
        content: Be.value.content.trim(),
        images: oe,
        link: ""
      }, xt.value = !0, y.value && (Oe.value = !1), A.success("内容已确认"), va.value = ""
    }, kl = async oe => {
      var Se;
      const I = (oe || "").trim();
      if (I) try {
        if ((Se = navigator.clipboard) != null && Se.writeText) await navigator.clipboard.writeText(I);
        else {
          const Ct = document.createElement("textarea");
          Ct.value = I, Ct.style.position = "fixed", Ct.style.left = "-9999px", document.body.appendChild(Ct), Ct.focus(), Ct.select(), document.execCommand("copy"), document.body.removeChild(Ct)
        }
        A.success("链接已复制")
      } catch {
        A.error("复制失败，请手动复制")
      }
    }, sn = oe => {
      const I = (oe || "").trim();
      I && window.open(I, "_blank", "noopener,noreferrer")
    };

  function Co(oe) {
    A.info({
      message: zg() ? "微信内无法自动读取剪贴板，请长按输入框，在菜单中选择「粘贴」" : "当前浏览器无法自动读取剪贴板，请长按输入框，在菜单中选择「粘贴」",
      duration: 4500,
      showClose: !0
    }), pZ(oe)
  }

  function Us(oe) {
    Id(oe, () => T.value === "note" ? R.value : O.value, I => {
      T.value === "note" ? R.value = I : O.value = I
    })
  }

  function Rs(oe) {
    Id(oe, () => Be.value.title, I => {
      Be.value.title = I
    })
  }

  function js(oe) {
    Id(oe, () => Be.value.content, I => {
      Be.value.content = I
    })
  }

  function qs(oe) {
    Id(oe, () => Qe.value, I => {
      Qe.value = I
    })
  }
  const He = async () => {
    try {
      if (navigator.clipboard) try {
        const Se = await navigator.clipboard.readText();
        if (Se) {
          T.value === "note" ? R.value = Se : O.value = Se, A.success("粘贴成功");
          return
        }
        if (!pi()) {
          A.warning("剪贴板为空");
          return
        }
      } catch (Se) {
        console.log("Clipboard API 失败，尝试 execCommand:", Se)
      }
      const oe = document.createElement("textarea");
      if (document.body.appendChild(oe), oe.focus(), oe.select(), document.execCommand("paste") && oe.value) T.value === "note" ? R.value = oe.value : O.value = oe.value, A.success("粘贴成功");
      else if (pi()) Co(".link-input textarea, .link-input input");
      else {
        A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
        const Se = document.querySelector(".link-input textarea, .link-input input");
        Se && (Se.focus(), Se.select())
      }
      document.body.removeChild(oe)
    } catch (oe) {
      if (console.error("粘贴失败:", oe), pi()) Co(".link-input textarea, .link-input input");
      else {
        A.warning("粘贴失败，请手动粘贴"), await Da();
        const I = document.querySelector(".link-input textarea, .link-input input");
        if (I) {
          I.focus();
          try {
            I.select()
          } catch (Se) {
            console.log("select 失败:", Se)
          }
        }
      }
    }
  }, G = async () => {
    try {
      if (navigator.clipboard) try {
        const Se = await navigator.clipboard.readText();
        if (Se) {
          Be.value.title = Se, A.success("粘贴成功");
          return
        }
        if (!pi()) {
          A.warning("剪贴板为空");
          return
        }
      } catch (Se) {
        console.log("Clipboard API 失败，尝试 execCommand:", Se)
      }
      const oe = document.createElement("textarea");
      if (document.body.appendChild(oe), oe.focus(), oe.select(), document.execCommand("paste") && oe.value) Be.value.title = oe.value, A.success("粘贴成功");
      else if (pi()) Co(".input-mode-content .input-wrapper .text-input input");
      else {
        A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
        const Se = document.querySelector(".input-mode-content .input-wrapper .text-input input");
        Se && (Se.focus(), Se.select())
      }
      document.body.removeChild(oe)
    } catch (oe) {
      if (console.error("粘贴失败:", oe), pi()) Co(".input-mode-content .input-wrapper .text-input input");
      else {
        A.warning("粘贴失败，请手动粘贴"), await Da();
        const I = document.querySelector(".input-mode-content .input-wrapper .text-input input");
        if (I) {
          I.focus();
          try {
            I.select()
          } catch (Se) {
            console.log("select 失败:", Se)
          }
        }
      }
    }
  }, It = async () => {
    try {
      if (navigator.clipboard) try {
        const Se = await navigator.clipboard.readText();
        if (Se) {
          Be.value.content = Se, A.success("粘贴成功");
          return
        }
        if (!pi()) {
          A.warning("剪贴板为空");
          return
        }
      } catch (Se) {
        console.log("Clipboard API 失败，尝试 execCommand:", Se)
      }
      const oe = document.createElement("textarea");
      if (document.body.appendChild(oe), oe.focus(), oe.select(), document.execCommand("paste") && oe.value) Be.value.content = oe.value, A.success("粘贴成功");
      else if (pi()) Co(".input-mode-content .input-wrapper .text-input textarea");
      else {
        A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
        const Se = document.querySelector(".input-mode-content .input-wrapper .text-input textarea");
        Se && (Se.focus(), Se.select())
      }
      document.body.removeChild(oe)
    } catch (oe) {
      if (console.error("粘贴失败:", oe), pi()) Co(".input-mode-content .input-wrapper .text-input textarea");
      else {
        A.warning("粘贴失败，请手动粘贴"), await Da();
        const I = document.querySelector(".input-mode-content .input-wrapper .text-input textarea");
        if (I) {
          I.focus();
          try {
            I.select()
          } catch (Se) {
            console.log("select 失败:", Se)
          }
        }
      }
    }
  }, da = () => {
    Be.value.title = "", va.value = ""
  }, na = () => {
    Be.value.content = "", va.value = ""
  }, la = oe => {
    const I = Be.value.images[oe];
    if (I != null && I.preview) try {
      URL.revokeObjectURL(I.preview)
    } catch {}
    Be.value.images.splice(oe, 1)
  }, Aa = (oe, I) => {
    const Se = Be.value.images,
      Ct = oe + I;
    if (Ct < 0 || Ct >= Se.length) return;
    const ua = Se[oe];
    Se.splice(oe, 1, Se[Ct]), Se.splice(Ct, 1, ua)
  }, Kl = oe => {
    if (!Ao()) {
      f.value = !0;
      return
    }
    const I = new Set(Be.value.images.map(ua => ua.url).filter(Boolean)),
      Se = 10 - Be.value.images.length;
    if (Se <= 0) {
      A.warning("最多 10 张图片");
      return
    }(oe || []).filter(ua => ua && !I.has(ua)).slice(0, Se).forEach(ua => {
      Be.value.images.push({
        uid: `up_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
        name: "",
        url: ua,
        preview: "",
        uploading: !1,
        progress: 100
      })
    })
  }, ql = async oe => {
    if (!Ao()) {
      f.value = !0;
      return
    }
    if (!oe || !oe.length) {
      Yt.value = !1;
      return
    }
    Yt.value = !1;
    const I = [];
    for (const ua of oe) {
      let ra = ua;
      if (Yo(ua)) try {
        ra = await _i(ua)
      } catch (wa) {
        A.error(wa.message || "HEIC 格式暂不支持，请先将图片转换为 JPEG 或 PNG 格式");
        continue
      }
      I.push({
        rawFile: ua,
        fileToUpload: ra
      })
    }
    if (!I.length) return;
    const Se = I.map(({
        rawFile: ua,
        fileToUpload: ra
      }) => {
        const wa = `up_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
          tl = URL.createObjectURL(ra),
          pl = {
            uid: wa,
            name: ua.name,
            url: "",
            preview: tl,
            uploading: !0,
            progress: 0
          };
        return Be.value.images.push(pl), {
          uid: wa,
          preview: tl,
          fileToUpload: ra
        }
      }),
      Ct = ua => Be.value.images.find(ra => ra.uid === ua);
    await Promise.all(Se.map(async ({
      uid: ua,
      preview: ra,
      fileToUpload: wa
    }) => {
      try {
        const tl = await $h(wa, {
            onProgress: bl => {
              const bn = Ct(ua);
              bn && (bn.progress = bl)
            }
          }),
          pl = Tn(tl);
        if (!pl) throw new Error("上传失败，未返回图片地址");
        const cl = Ct(ua);
        if (cl && (cl.url = pl, cl.progress = 100, cl.uploading = !1, cl.preview)) {
          try {
            URL.revokeObjectURL(cl.preview)
          } catch {}
          cl.preview = ""
        }
      } catch (tl) {
        try {
          URL.revokeObjectURL(ra)
        } catch {}
        Be.value.images = Be.value.images.filter(pl => pl.uid !== ua), A.error((tl == null ? void 0 : tl.message) || "图片上传失败，请重试")
      }
    }))
  }, il = () => {
    T.value === "note" ? (R.value = "", J.value = "", ee.value = "") : O.value = "", va.value = "", K.value = null, pe.value = "", xt.value = !1, Kt.value = !1, Oe.value = !1
  }, Za = ["douyin.com", "iesdouyin.com"], hl = oe => {
    const I = String(oe || "").toLowerCase();
    return Za.some(Se => I.includes(Se))
  }, Yl = async () => {
    if (hl(ie.value)) {
      La.alert('<div class="parse-fail-dialog-body"><div class="parse-fail-dialog-text">应合规要求，本站已下线抖音（douyin.com）相关内容的解析功能，暂不支持解析抖音链接，敬请谅解。</div></div>', "暂不支持解析", {
        dangerouslyUseHTMLString: !0,
        confirmButtonText: "我知道了",
        center: !0,
        customClass: "parse-fail-dialog",
        roundButton: !0
      }).catch(() => {});
      return
    }
    if (!Ao()) {
      f.value = !0;
      return
    }
    Ye.value = !0, va.value = "", K.value = null;
    const oe = T.value === "note" && !!J.value,
      I = T.value === "note" && !!ee.value,
      Se = oe || I;
    pe.value = Se ? "" : ie.value || "";
    try {
      let Ct;
      T.value === "goods" ? Ct = await Fh(ie.value) : oe ? Ct = await br("", {
        chazhao: J.value
      }) : I ? Ct = await br("", {
        search: ee.value
      }) : Ct = await br(ie.value);
      const ua = (() => {
        try {
          return new URL(ie.value).host
        } catch {
          return ""
        }
      })();
      let ra = "未知平台";
      Se || ua.includes("xiaohongshu") || ua.includes("xhs") ? ra = "图文" : ua.includes("kuaishou") && (ra = "短视频");
      let wa = [];
      Ct != null && Ct.images && Array.isArray(Ct.images) ? wa = Ct.images.filter(pl => pl && pl.trim()) : Ct != null && Ct.image ? wa = [Ct.image] : Ct != null && Ct.cover && (wa = [Ct.cover]);
      const tl = Se ? String((Ct == null ? void 0 : Ct.note_url) || (Ct == null ? void 0 : Ct.noteUrl) || (Ct == null ? void 0 : Ct.link) || (Ct == null ? void 0 : Ct.url) || "").trim() : (ie.value || "").trim();
      K.value = {
        title: (Ct == null ? void 0 : Ct.title) || "",
        platform: ra,
        content: (Ct == null ? void 0 : Ct.desc) || "",
        images: wa,
        link: tl
      }, Se && tl && (R.value = tl, pe.value = tl), Ze.value = 0, y.value && (Oe.value = !1), A.success("解析成功")
    } catch (Ct) {
      console.error("解析失败:", Ct), va.value = (Ct == null ? void 0 : Ct.message) || "解析失败，请稍后重试", La.alert(`<div class="parse-fail-dialog-body"><div class="parse-fail-dialog-text">${va.value}</div></div>`, "解析失败", {
        dangerouslyUseHTMLString: !0,
        confirmButtonText: "我知道了",
        center: !0,
        customClass: "parse-fail-dialog",
        roundButton: !0
      }).catch(() => {})
    } finally {
      Ye.value = !1, oe && (J.value = ""), I && (ee.value = "")
    }
  }, Cl = async oe => {
    if (!K.value || !Array.isArray(K.value.images) || oe < 0 || oe >= K.value.images.length) return;
    const I = oe + 1;
    try {
      await La.confirm(`您要删除第 ${I} 张图，确定则删除，或取消。`, "确认删除", {
        confirmButtonText: "确定删除",
        cancelButtonText: "取消",
        type: "warning"
      })
    } catch {
      return
    }
    const Se = [...K.value.images];
    Se.splice(oe, 1), K.value = {
      ...K.value,
      images: Se
    }, Ze.value = Math.min(Ze.value, Math.max(0, Se.length - 1))
  }, mo = p(!1), Jl = p([]), Pi = p(!1), io = p(0), di = oe => {
    io.value = oe, Pi.value = !0
  }, Dt = oe => {
    var Se, Ct;
    const I = ((Ct = (Se = K.value) == null ? void 0 : Se.images) == null ? void 0 : Ct.length) || 0;
    I !== 0 && (io.value = (io.value + oe + I) % I)
  }, El = Le(() => {
    var I, Se;
    const oe = ((Se = (I = K.value) == null ? void 0 : I.images) == null ? void 0 : Se.length) || 0;
    return oe > 0 && Jl.value.length === oe
  }), xn = Le(() => {
    var Se, Ct;
    const oe = Jl.value.length,
      I = ((Ct = (Se = K.value) == null ? void 0 : Se.images) == null ? void 0 : Ct.length) || 0;
    return oe > 0 && oe < I
  }), Xn = () => {
    Jl.value = [], mo.value = !0
  }, vi = () => {
    Jl.value = []
  }, Vi = (oe, I) => {
    const Se = new Set(Jl.value);
    I ? Se.add(oe) : Se.delete(oe), Jl.value = Array.from(Se).sort((Ct, ua) => Ct - ua)
  }, zv = oe => {
    var I, Se;
    if (oe) {
      const Ct = ((Se = (I = K.value) == null ? void 0 : I.images) == null ? void 0 : Se.length) || 0;
      Jl.value = Array.from({
        length: Ct
      }, (ua, ra) => ra)
    } else Jl.value = []
  }, Lv = async () => {
    const oe = [...Jl.value];
    if (!oe.length) return;
    try {
      await La.confirm(`确定要删除选中的 ${oe.length} 张图片？此操作不可撤销。`, "批量删除确认", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning"
      })
    } catch {
      return
    }
    if (!K.value || !Array.isArray(K.value.images)) return;
    const I = K.value.images.filter((Se, Ct) => !oe.includes(Ct));
    K.value = {
      ...K.value,
      images: I
    }, Ze.value = Math.min(Ze.value, Math.max(0, I.length - 1)), Jl.value = [], mo.value = !1, A.success(`已删除 ${oe.length} 张图片`)
  }, Fs = oe => {
    !K.value || !Array.isArray(K.value.images) || oe < 0 || oe >= K.value.images.length || (Z.value = "replace", ft.value = oe, pt())
  }, Ws = (oe, I) => {
    !K.value || !Array.isArray(K.value.images) || I < 0 || I >= K.value.images.length || (Z.value = oe === "before" ? "insertBefore" : "insertAfter", ft.value = I, pt())
  }, Fi = async oe => {
    var ra, wa, tl;
    const I = (ra = oe.target.files) == null ? void 0 : ra[0];
    oe.target.value = "";
    const Se = ft.value,
      Ct = Z.value;
    if (ft.value = -1, Z.value = "replace", Se < 0 || !((wa = K.value) != null && wa.images) || !I) return;
    if (!Et(I)) {
      A.warning("请选择图片文件");
      return
    }
    let ua = I;
    if (Yo(I)) try {
      ua = await _i(I), A.info("HEIC 格式已转换为 JPEG")
    } catch (pl) {
      A.error((pl == null ? void 0 : pl.message) || "HEIC 格式暂不支持");
      return
    }
    try {
      const pl = await ao(ua),
        cl = Tn(pl);
      if (!cl) {
        A.error("上传失败，未返回图片地址");
        return
      }
      const bl = [...K.value.images];
      let bn = Ze.value;
      Ct === "replace" ? (bl[Se] = cl, bn = Se) : Ct === "insertBefore" ? (bl.splice(Se, 0, cl), bn = Se) : Ct === "insertAfter" && (bl.splice(Se + 1, 0, cl), bn = Se + 1), K.value = {
        ...K.value,
        images: bl
      }, Ze.value = Math.min(bn, bl.length - 1), await Da(), (tl = Bt.value) == null || tl.setActiveItem(Ze.value), A.success(Ct === "replace" ? "图片已替换" : "图片已插入")
    } catch (pl) {
      A.error((pl == null ? void 0 : pl.message) || "图片上传失败，请重试")
    }
  }, wc = () => {
    dt(), at.value = !1, et.value = !1, Ja.value = !1, o.push("/works")
  }, Dv = () => {
    dt(), Ja.value = !1, at.value = !1, et.value = !1, A.success("您的上一个任务生成中，稍后请去“我的作品”查看")
  }, Mv = (oe, I = 1, Se = !1) => {
    const Ct = (oe || "").trim(),
      ua = Math.max(1, Number(I) || 1),
      ra = `【出图基础要求（本批每张图通用，仅作画质底线，不决定改动幅度）】
1. 画面高清、清晰锐利，主体不糊、不拉伸、不变形、无畸形。
2. 无多余水印、二维码、杂乱物体与无意义装饰，构图干净。
3. 文字清晰、排版整齐、无错字乱码；如需用字优先使用免费可商用或开源字体（思源系列、阿里巴巴普惠体、文泉驿等），避免受版权保护的商业字体。
4. 成片可直接使用，整体观感专业、自然。`,
      wa = ua >= 2 ? `

【整套图·风格统一规范（本篇共 ${ua} 张配图，必须照做）】
这 ${ua} 张配图属于同一套图，但每张是"各自独立出图、彼此看不到对方"的，因此要先把整套图的视觉规范锁成一套"具体到能照抄的数值"，再让每一张都套用同一套数值：
0. 【最高优先·以用户要求为准】若用户补充要求已点名任何视觉项（颜色 / 色值、字体、字号、位置等），整套 ${ua} 张按用户指定的值统一；未指定的项${Se?"以参考图":"以原套图"}为基准，不得盖过用户要求。
1. 用户未指定的项，${Se?"以参考风格图":"以原套图"}为基准提取并锁定一套统一的视觉规范：主色 / 辅色 / 点缀色 / 背景色写出具体色值（例如写成 #2563EB 这样的十六进制色值，而不是"蓝色"），主标题 / 正文的字体风格与字号层级、构图网格与对齐、页边距与留白、圆角 / 线条 / 图标等装饰元素风格、画面比例——全套 ${ua} 张严格保持同一套值，不得逐张漂移换色或换版式。
2. 每一张都要完整套用这同一套数值（独立出图时只看得到自己这一张），确保 ${ua} 张拼在一起像同一套模板、同一个设计师做出来的。
3. 各张内容要"互补"而不是"雷同"：每张保留自己原有的画面职责与信息（各自的角度 / 卖点 / 信息不同），只统一"视觉外观"，不要把多张做成几乎一样的重复图。` : "";
    return Ct ? `【用户补充要求｜全局最高优先级｜按原文执行】
${Ct}

凡与上文冲突的系统默认一律让位，以上文为准；不冲突的部分可合并。

${ra}

${Gm}${wa}` : `${ra}

${Gm}${wa}`
  }, Yr = async () => {
    var oe, I, Se;
    if (!Ao()) {
      f.value = !0;
      return
    }
    if (K.value && !(at.value || $e || We)) {
      if (Ne.value.imageMode === "aiImage" && !$t.value) try {
        await new Promise((Ct, ua) => {
          $e = {
            resolve: Ct,
            reject: ua
          }, ve.value = !0
        })
      } catch {
        return
      }
      if (Ne.value.imageMode === "aiImage") try {
        await new Promise((Ct, ua) => {
          We = {
            resolve: Ct,
            reject: ua
          }, ml.value = !0
        })
      } catch {
        return
      } {
        const Ct = Ne.value.imageMode,
          ua = parseInt(Ne.value.imageCount, 10) || 1;
        let ra = 0;
        if (Ct === "aiImage") {
          const tl = Math.max(1, K.value.images && K.value.images.length || 0);
          ra = ua * tl * 4
        } else ra = ua * 1;
        if (Number(((oe = S.value) == null ? void 0 : oe.create_points) ?? 0) < ra) {
          u.value = ra, s.value = !0;
          return
        }
      } {
        const Ct = Ne.value.imageMode;
        let ua = "";
        const ra = parseInt(Ne.value.imageCount, 10) || 1;
        let wa = "",
          tl = 0;
        if (Ct === "aiImage") {
          ua = "AI 图生图（仿优质）";
          const pl = Math.max(1, K.value.images && K.value.images.length || 0),
            cl = ra * pl;
          tl = cl * 4, wa = `
              <div class="cost-confirm-row">
                <span class="cost-confirm-label">生成篇数</span>
                <span class="cost-confirm-value">${ra} 篇</span>
              </div>
              <div class="cost-confirm-row">
                <span class="cost-confirm-label">配图合计</span>
                <span class="cost-confirm-value">${cl} 张</span>
              </div>
              <div class="cost-confirm-row">
                <span class="cost-confirm-label">单张消耗</span>
                <span class="cost-confirm-value">4 点</span>
              </div>`
        } else if (Ct === "aiNew") {
          ua = "AI 文字生图";
          const pl = 1;
          tl = ra * pl, wa = `
              <div class="cost-confirm-row">
                <span class="cost-confirm-label">生成篇数</span>
                <span class="cost-confirm-value">${ra} 篇</span>
              </div>
              <div class="cost-confirm-row">
                <span class="cost-confirm-label">单篇消耗</span>
                <span class="cost-confirm-value">${pl} 点</span>
              </div>`
        } else {
          ua = "原图二创去重";
          const pl = 1;
          tl = ra * pl, wa = `
              <div class="cost-confirm-row">
                <span class="cost-confirm-label">生成篇数</span>
                <span class="cost-confirm-value">${ra} 篇</span>
              </div>
              <div class="cost-confirm-row">
                <span class="cost-confirm-label">单篇消耗</span>
                <span class="cost-confirm-value">${pl} 点</span>
              </div>`
        }
        try {
          await La({
            title: "",
            message: `
          <div class="cost-confirm-modern">
            <div class="cost-confirm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div class="cost-confirm-title">确认本次点数消耗</div>
            <div class="cost-confirm-desc">当前模式：「${ua}」</div>
            <div class="cost-confirm-card">
              ${wa}
              <div class="cost-confirm-divider"></div>
              <div class="cost-confirm-row cost-confirm-total">
                <span class="cost-confirm-label">合计消耗</span>
                <span class="cost-confirm-value cost-confirm-highlight">${tl} 点</span>
              </div>
            </div>
          </div>
        `,
            dangerouslyUseHTMLString: !0,
            showCancelButton: !0,
            confirmButtonText: "确认生成",
            cancelButtonText: "取消",
            center: !0,
            showClose: !0,
            customClass: "cost-confirm-dialog",
            roundButton: !0
          })
        } catch {
          return
        }
      }
      try {
        const Ct = Ne.value.contentOptions || [],
          ua = Ne.value.wordCount === "fanwei" ? "random" : Ne.value.wordCount;
        let ra = null;
        if ($t.value || Ne.value.contentOptions && Ne.value.contentOptions.includes("customExtra")) {
          const Tl = {
            industry: Je.value.industry || "",
            ageMode: Je.value.ageMode || "any",
            targetGroup: Je.value.targetGroup || "",
            painPoints: Je.value.painPoints || "",
            solution: Je.value.solution || "",
            notes: Je.value.notes || ""
          };
          Tl.ageMode === "range" && (Tl.ageRange = Array.isArray(Je.value.ageRange) && Je.value.ageRange.length === 2 ? Je.value.ageRange : [18, 30]), ra = qi(Tl);
          const Bn = !!(Tl.industry || Tl.targetGroup || Tl.painPoints || Tl.solution || Tl.notes || Tl.ageMode === "range");
          ra && $t.value && Bn && (ra = `【最高优先级·用户已关联创作信息】请务必优先并严格依据以下创作信息进行创作，生成的标题、正文与配图都要紧扣这些设定，确保与用户的产品、目标人群与核心卖点保持一致：
${ra}`)
        }
        const wa = {
            type: 3,
            count: parseInt(Ne.value.imageCount, 10) || 1,
            title: K.value.title || "",
            desc: K.value.content || "",
            noteType: Ne.value.noteType || "任意",
            wordCount: ua || "random",
            contentOptions: Ct || [],
            customExtra: ra || null,
            persona: ha.value ? $i(ha.value) : null,
            imageMode: Ne.value.imageMode || "aiNew",
            copywritingMode: Ne.value.copywritingMode || "rewrite"
          },
          tl = Oa();
        tl.length && (wa.replaceRules = tl, wa.replacePrompt = gl(tl));
        const pl = (pe.value || "").trim();
        if (pl && (wa.link = pl), K.value.images && Array.isArray(K.value.images) && K.value.images.length > 0 && (wa.images = K.value.images), Ne.value.imageMode === "aiImage") {
          const Tl = (Rt.value || "").trim(),
            Bn = Math.max(1, K.value.images && K.value.images.length || 0),
            fo = Ka.value.slice(0, ll.value);
          wa.supply = Mv(Tl, Bn, fo.length > 0), fo.length > 0 && (wa.references = fo);
          const Ol = zt.value.slice(0, As);
          Ol.length && (wa.product_images = Ol)
        } else Ne.value.imageMode === "aiNew" && (wa.supply = Gm);
        at.value = !0, Ja.value = !0, et.value = !1, Fe.value = 0, Ke.value = "正在准备...";
        let cl = !1,
          bl = !1;
        (() => {
          Ke.value = "正在创建任务...";
          const Tl = () => {
            if (Fe.value < 20 && !cl) Fe.value += 1, setTimeout(Tl, bl ? 20 : 600);
            else if (Fe.value >= 20 && !cl) {
              Fe.value = 20, Ke.value = "正在生成标题...";
              const Bn = () => {
                if (Fe.value < 40 && !cl) Fe.value += 1, setTimeout(Bn, bl ? 20 : 600);
                else if (Fe.value >= 40 && !cl) {
                  Fe.value = 40, Ke.value = "正在生成内容...";
                  const fo = () => {
                    if (Fe.value < 60 && !cl) Fe.value += 1, setTimeout(fo, bl ? 20 : 600);
                    else if (Fe.value >= 60 && !cl) {
                      Fe.value = 60, Ke.value = "正在生成配图...";
                      const Ol = () => {
                        Fe.value < 99 && !cl ? (Fe.value += 1, setTimeout(Ol, bl ? 20 : 600)) : Fe.value >= 99 && !cl && (Fe.value = 99, cl = !0)
                      };
                      Ol()
                    }
                  };
                  fo()
                }
              };
              Bn()
            }
          };
          Tl()
        })();
        const Hl = (parseInt(Ne.value.imageCount, 10) || 1) > 1,
          Al = await (Hl ? Af : Cf)(wa);
        if (console.log("aiCopy 接口返回:", Al), Dn(), Ka.value = [], Pt(), Hl) {
          bl = !0, cl = !0, await ka(60), Ke.value = "任务创建成功", et.value = !0, at.value = !1, qt(30);
          return
        }
        let Ml = null;
        if (typeof Al == "string" ? Ml = Al : Al != null && Al.data ? Ml = typeof Al.data == "string" ? Al.data : ((I = Al.data) == null ? void 0 : I.id) || Al.data : Al != null && Al.id && (Ml = Al.id), Ml) console.log("直接获取到 workId:", Ml), bl = !0, cl = !1, Fe.value < 99 && (Fe.value = 99);
        else {
          const Tl = String(Al || "");
          if (!Tl) throw new Error("创建任务失败：未返回任务ID或作品ID");
          console.log("未直接获取到 workId，开始轮询任务状态，taskId:", Tl);
          let Bn = 0;
          const fo = 60;
          for (; !Ml && Bn < fo;) {
            await new Promise(Ol => setTimeout(Ol, 3e3));
            try {
              const Ol = await Xu(Tl);
              if (Ol && Ol.status === 2) {
                if (bl = !0, cl = !1, Ml = Ol.workId || Ol.recordId, !Ml && Ol.records && Array.isArray(Ol.records) && Ol.records.length > 0 && (Ml = Ol.records[0].id), !Ml && Ol.data && (Array.isArray(Ol.data) && Ol.data.length > 0 ? Ml = Ol.data[0].id : Ol.data.id ? Ml = Ol.data.id : Ol.data.workId ? Ml = Ol.data.workId : Ol.data.recordId && (Ml = Ol.data.recordId)), !Ml) try {
                  const Sn = await Zu({
                    taskId: Tl,
                    page: 1,
                    size: 1
                  });
                  let xo = [];
                  (Se = Sn == null ? void 0 : Sn.data) != null && Se.rows ? xo = Sn.data.rows : Array.isArray(Sn == null ? void 0 : Sn.data) ? xo = Sn.data : Array.isArray(Sn) ? xo = Sn : Sn != null && Sn.rows && (xo = Sn.rows), xo && xo.length > 0 && (Ml = xo[0].id)
                } catch (Sn) {
                  console.error("通过getRecordLists获取workId失败:", Sn)
                }
                if (Ml) {
                  console.log("轮询获取到 workId:", Ml);
                  break
                }
              } else if (Ol && (Ol.status === 1 || Ol.status === 0)) {
                Bn++;
                continue
              }
            } catch (Ol) {
              console.error("获取任务状态失败:", Ol), Bn++
            }
            Bn++
          }
        }
        if (bl = !0, cl = !0, await ka(60), Ke.value = "生成完成！", await new Promise(Tl => setTimeout(Tl, 300)), !Ml) throw at.value = !1, Ja.value = !1, new Error("生成超时，请稍后在我的作品中查看");
        console.log("生成完成，作品 ID:", Ml), at.value = !1, et.value = !0, A.success("生成成功！30 秒后将自动跳转到【我的作品】"), qt(30)
      } catch (Ct) {
        console.error("创建任务失败:", Ct), at.value = !1, et.value = !1, Fe.value = 0;
        const ua = (Ct == null ? void 0 : Ct.message) || (Ct == null ? void 0 : Ct.msg) || "创建任务失败，请稍后重试";
        ua.includes("点数不足") || ua.includes("余额不足") || ua.includes("创作点数不足") ? (n.value = !0, setTimeout(() => {
          window.dispatchEvent(new CustomEvent("switch-to-personal"))
        }, 100)) : A.error(ua)
      }
    }
  }, Ro = async () => {
    var oe;
    try {
      const I = localStorage.getItem("authToken");
      if (I && I.trim()) {
        await new Promise(Se => setTimeout(Se, 200));
        try {
          const Se = await zl();
          Se ? (S.value = {
            ...Se,
            nickname: Se.nickname || Se.nickName || "用户",
            avatar: Se.avatar || Se.avatarUrl || ""
          }, w.value = !0) : (S.value = {}, w.value = !1)
        } catch (Se) {
          if ((Se == null ? void 0 : Se.code) === 999 || ((oe = Se == null ? void 0 : Se.response) == null ? void 0 : oe.code) === 999) {
            console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), S.value = {}, w.value = !1;
            return
          }
          console.error("获取用户信息失败:", Se), S.value = {}, w.value = !1
        }
      } else S.value = {}, w.value = !1
    } catch (I) {
      console.error("检查登录状态失败:", I), w.value = !1, S.value = {}
    }
  }, cs = () => {
    y.value, y.value = window.innerWidth <= 768
  };
  oa(() => Ne.value.contentOptions.slice(), oe => {
    localStorage.setItem("copy_useCustomExtra", "true");
    const Se = ["filterBannedWords", "filterMarketingWords", "customExtra"].filter(Ct => !oe.includes(Ct));
    Se.length > 0 && (Ne.value.contentOptions = [...oe, ...Se])
  });
  const Ov = oe => {
      oe === "profile" ? (o.push("/user"), Sa.value = !1) : oe === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : oe === "recharge" ? (n.value = !0, Sa.value = !1) : oe === "logout" && (ui(), Ro(), Sa.value = !1)
    },
    Ao = () => !!localStorage.getItem("authToken"),
    Gs = () => zg(),
    Js = oe => {
      if (y.value && !Ao()) return oe.preventDefault(), oe.stopPropagation(), f.value = !0, !1
    },
    Wi = () => {
      y.value && !Ao() && (f.value = !0, Da(() => {
        const oe = document.activeElement;
        oe && (oe.tagName === "INPUT" || oe.tagName === "TEXTAREA") && oe.blur()
      }))
    },
    Bv = () => {
      K.value = null, xt.value = !1, Oe.value = !1, Kt.value = !1, va.value = ""
    },
    go = oe => {
      S.value = oe, w.value = !0, f.value = !1, A.success("登录成功"), Ro()
    },
    Nv = () => {
      try {
        const oe = Object.keys(sessionStorage),
          I = Date.now();
        oe.forEach(Se => {
          if (Se.startsWith("template_copy_") && Se.endsWith("_expires")) {
            const Ct = parseInt(sessionStorage.getItem(Se));
            if (Ct && I > Ct) {
              const ua = Se.replace("_expires", "");
              sessionStorage.removeItem(ua), sessionStorage.removeItem(Se)
            }
          }
        })
      } catch (oe) {
        console.warn("清理过期模板数据失败:", oe)
      }
    },
    Io = () => {
      Nv();
      let oe = null;
      if (i.query.templateKey) try {
        const I = i.query.templateKey,
          Se = sessionStorage.getItem(I),
          Ct = sessionStorage.getItem(`${I}_expires`);
        if (Ct && Date.now() > parseInt(Ct)) {
          sessionStorage.removeItem(I), sessionStorage.removeItem(`${I}_expires`), A.warning("模板数据已过期，请重新选择");
          return
        }
        Se && (oe = JSON.parse(Se), sessionStorage.removeItem(I), sessionStorage.removeItem(`${I}_expires`))
      } catch (I) {
        console.error("从sessionStorage读取模板数据失败:", I)
      }
      if (!oe && i.query.templateId && (oe = {
          templateId: i.query.templateId,
          title: i.query.title ? decodeURIComponent(i.query.title) : "",
          content: i.query.content ? decodeURIComponent(i.query.content) : "",
          images: i.query.images ? (() => {
            try {
              const I = JSON.parse(i.query.images);
              return Array.isArray(I) ? I : []
            } catch {
              return []
            }
          })() : [],
          noteType: i.query.noteType || "分享",
          wordCount: i.query.wordCount || "300",
          titleMode: i.query.titleMode || "useKeyword",
          contentOptions: i.query.contentOptions ? (() => {
            try {
              const I = JSON.parse(i.query.contentOptions);
              return Array.isArray(I) ? I : []
            } catch {
              return []
            }
          })() : [],
          customExtra: i.query.customExtra ? (() => {
            try {
              return JSON.parse(i.query.customExtra)
            } catch {
              return {}
            }
          })() : {}
        }), oe) {
        if ($.value = "text", oe.title && (Be.value.title = oe.title), oe.content) {
          let I = oe.content;
          I = I.replace(/#[^#\s\n\r]+/g, "").trim(), Be.value.content = I, xt.value = !0;
          let Se = [];
          oe.images && Array.isArray(oe.images) && (Se = oe.images.filter(Ct => Ct && Ct.trim())), K.value = {
            platform: "图文",
            title: Be.value.title || "",
            content: I,
            images: Se,
            link: oe.link || oe.url || ""
          }
        }
        oe.noteType && (Ne.value.noteType = oe.noteType), oe.wordCount && (Ne.value.wordCount = oe.wordCount), oe.contentOptions && Array.isArray(oe.contentOptions) && (Ne.value.contentOptions = oe.contentOptions), Ne.value.wordCount = "fanwei", Ne.value.contentOptions.includes("addEmoji") || (Ne.value.contentOptions = ["addEmoji", ...Ne.value.contentOptions]), oe.customExtra && typeof oe.customExtra == "object" && (Je.value = {
          industry: oe.customExtra.industry || "",
          ageMode: oe.customExtra.ageMode || "any",
          ageRange: Array.isArray(oe.customExtra.ageRange) && oe.customExtra.ageRange.length === 2 ? oe.customExtra.ageRange : [18, 30],
          targetGroup: oe.customExtra.targetGroup || "",
          painPoints: oe.customExtra.painPoints || "",
          solution: oe.customExtra.solution || "",
          notes: oe.customExtra.notes || ""
        })
      }
    },
    Vn = (oe = 0) => {
      if (!y.value) return;
      const I = Gs(),
        Se = oe > 0 ? I ? 200 : 100 : I ? 100 : 0;
      setTimeout(() => {
        Da(() => {
          const Ct = document.querySelector(".floating-buttons");
          if (Ct) {
            const ua = Ct.classList.contains("expanded");
            I && ua ? (Ct.style.setProperty("top", "50%", "important"), Ct.style.setProperty("bottom", "auto", "important"), Ct.style.setProperty("right", "10px", "important"), Ct.style.setProperty("transform", "translateY(-50%)", "important"), Ct.style.setProperty("position", "fixed", "important"), Ct.style.setProperty("z-index", "50", "important")) : (Ct.style.setProperty("bottom", "10px", "important"), Ct.style.setProperty("top", "auto", "important"), Ct.style.setProperty("right", "10px", "important"), Ct.style.setProperty("transform", "none", "important"), Ct.style.setProperty("position", "fixed", "important"), Ct.style.setProperty("z-index", "50", "important")), I && (Ct.style.display = "none", Da(() => {
              Ct.style.display = ""
            }))
          } else oe < (I ? 10 : 5) && setTimeout(() => Vn(oe + 1), I ? 300 : 200)
        })
      }, Se)
    },
    Hs = () => {
      if (!y.value) return null;
      const oe = document.querySelector(".floating-buttons");
      if (!oe) return null;
      const I = new MutationObserver(() => {
        const Se = Gs();
        setTimeout(() => {
          Vn(), Se && oe.classList.contains("expanded") && setTimeout(() => {
            Vn()
          }, 100)
        }, Se ? 100 : 50)
      });
      return I.observe(oe, {
        attributes: !0,
        attributeFilter: ["class"]
      }), I
    },
    Xr = () => {
      try {
        const oe = sessionStorage.getItem("aicopy_search_keyword"),
          I = sessionStorage.getItem("aicopy_search_sortMode"),
          Se = sessionStorage.getItem("aicopy_search_inputMode");
        oe && (Qe.value = oe), I && (j.value = I), Se && Se === "search" && ($.value = Se)
      } catch (oe) {
        console.warn("恢复搜索数据失败:", oe)
      }
    };
  return Ll(async () => {
    document.title = "火兔工具箱_AI 参考创作 - 生成相似图文", cs(), await Ro(), Xr(), Io(), N.value && i.query.link && i.query.mode === "link" ? (T.value = "note", R.value = String(i.query.link), $.value = "link", Da(() => {
      Yl()
    })) : i.query.chazhao ? (T.value = "note", $.value = "link", J.value = String(i.query.chazhao), Da(() => {
      Yl()
    })) : i.query.search && (T.value = "note", $.value = "link", ee.value = String(i.query.search), Da(() => {
      Yl()
    })), window.addEventListener("resize", cs), window.addEventListener("resize", Ie), window.addEventListener("resize", Vn), window.addEventListener("scroll", Vn), window.addEventListener("user-logout", Ro), window.addEventListener("user-login-success", Ro);
    const oe = Gs(),
      I = () => {
        Vn(), oe ? (setTimeout(() => Vn(), 300), setTimeout(() => Vn(), 600), setTimeout(() => Vn(), 1e3), setTimeout(() => Vn(), 1500)) : (setTimeout(() => Vn(), 200), setTimeout(() => Vn(), 500), setTimeout(() => Vn(), 1e3))
      };
    setTimeout(I, oe ? 200 : 100), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
      setTimeout(I, oe ? 200 : 100)
    }) : setTimeout(I, oe ? 200 : 100), oe && window.addEventListener("load", () => {
      setTimeout(() => {
        Vn()
      }, 500)
    }), setTimeout(() => {
      Da(() => {
        const Se = Hs();
        Se && (window.floatingButtonObserver = Se)
      })
    }, 200)
  }), Zl(() => {
    dt(), window.removeEventListener("resize", cs), window.removeEventListener("resize", Ie), window.removeEventListener("resize", Vn), window.removeEventListener("scroll", Vn), window.removeEventListener("user-logout", Ro), window.removeEventListener("user-login-success", Ro), window.floatingButtonObserver && (window.floatingButtonObserver.disconnect(), window.floatingButtonObserver = null)
  }), (oe, I) => {
    var Cc, ds, zi;
    const Se = $l,
      Ct = Si,
      ua = Ei,
      ra = xl,
      wa = bo,
      tl = Kn,
      pl = jr,
      cl = cn,
      bl = Or,
      bn = Br,
      jo = Nr,
      Hl = No,
      rn = yo,
      Al = Oo,
      Ml = Bo,
      Tl = ho,
      Bn = rs,
      fo = Vo,
      Ol = Fn("ArrowDown"),
      Sn = Fn("ArrowUp"),
      xo = Jg,
      Gi = Hg,
      _c = Zy,
      mi = Ur,
      Ji = Ii,
      Zr = xi,
      Lo = Rl,
      kc = W_,
      Uv = Rr;
    return c(), v("div", yZ, [a(ei, {
      title: "AI复刻同款图文",
      "is-logged-in": w.value,
      "user-info": S.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: I[0] || (I[0] = mt => Sa.value = !0),
      onLoginClick: I[1] || (I[1] = mt => f.value = !0),
      onCommand: Ov
    }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), y.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: I[2] || (I[2] = mt => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": y.value,
        "main-content--result-wide": K.value && !y.value
      }])
    }, [e("input", {
      ref_key: "replaceImageInputRef",
      ref: Ea,
      type: "file",
      accept: "image/*,.jpg,.jpeg,.png,.gif,.webp,.bmp,.heic,.heif",
      class: "replace-image-input-hidden",
      onChange: Fi
    }, null, 544), M("", !0), M("", !0), I[220] || (I[220] = ii('<div class="page-title-wrapper" data-v-cd162a88><div class="main-title-row" data-v-cd162a88><h1 class="main-title page-title-text" data-v-cd162a88> AI<span class="highlight-red" data-v-cd162a88>灵感</span>参考 </h1></div><p class="subtitle" data-v-cd162a88><span class="subtitle-line2" data-v-cd162a88><span class="highlight-red" data-v-cd162a88>喜欢</span>的内容可以从本地上传图和文案来<span class="highlight-blue" data-v-cd162a88>仿写</span></span></p></div>', 1)), a(os), e("div", {
      class: Pe(["card", {
        "card-with-result": K.value
      }])
    }, [e("div", hZ, [e("div", bZ, [e("div", wZ, [I[97] || (I[97] = e("div", {
      class: "field-label mode-selector-title"
    }, "选择原文方式，开始一键仿写：", -1)), K.value ? (c(), ye(ra, {
      key: 0,
      type: "default",
      size: "small",
      class: "back-button",
      onClick: Bv
    }, {
      default: l(() => [a(Se, null, {
        default: l(() => [a(P(an))]),
        _: 1
      }), I[96] || (I[96] = e("span", null, "返回", -1))]),
      _: 1
    })) : M("", !0)]), a(tl, {
      modelValue: $.value,
      "onUpdate:modelValue": I[3] || (I[3] = mt => $.value = mt),
      class: "mode-radio-group",
      onChange: oo
    }, {
      default: l(() => [N.value ? (c(), ye(wa, {
        key: 0,
        value: "link"
      }, {
        default: l(() => [...I[98] || (I[98] = [g("模式1：输入对标链接解析", -1)])]),
        _: 1
      })) : M("", !0), a(wa, {
        value: "text"
      }, {
        default: l(() => [...I[99] || (I[99] = [g("模式2：从本地上传图和文案", -1)])]),
        _: 1
      }), a(wa, {
        value: "search"
      }, {
        default: l(() => [...I[100] || (I[100] = [g("模式3：查找图文（行业优质）", -1)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])])]), $.value === "search" ? el((c(), v("div", _Z, [e("div", kZ, [e("div", CZ, [a(Se, {
      class: "keyword-search-icon"
    }, {
      default: l(() => [a(P(Ai))]),
      _: 1
    }), el(e("input", {
      ref_key: "searchKeywordInputRef",
      ref: Mt,
      "onUpdate:modelValue": I[4] || (I[4] = mt => Qe.value = mt),
      type: "text",
      class: "keyword-input",
      placeholder: "输入产品关键词,如:面膜、口红、穿搭...",
      onPaste: qs
    }, null, 544), [
      [En, Qe.value]
    ])])]), e("div", AZ, [e("div", IZ, [a(Se, {
      class: "sort-icon"
    }, {
      default: l(() => [a(P(F_))]),
      _: 1
    }), I[101] || (I[101] = e("span", {
      class: "sort-title"
    }, "排序方式:", -1))]), e("div", xZ, [a(tl, {
      modelValue: j.value,
      "onUpdate:modelValue": I[5] || (I[5] = mt => j.value = mt),
      onChange: Un
    }, {
      default: l(() => [a(pl, {
        value: "comprehensive"
      }, {
        default: l(() => [I[102] || (I[102] = g(" 综合排序", -1)), j.value === "comprehensive" ? (c(), v("span", SZ, " √")) : M("", !0)]),
        _: 1
      }), a(pl, {
        value: "latest"
      }, {
        default: l(() => [I[103] || (I[103] = g(" 最新发布", -1)), j.value === "latest" ? (c(), v("span", EZ, " √")) : M("", !0)]),
        _: 1
      }), a(pl, {
        value: "likes"
      }, {
        default: l(() => [I[104] || (I[104] = g(" 最多点赞", -1)), j.value === "likes" ? (c(), v("span", TZ, " √")) : M("", !0)]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"])])]), e("div", $Z, [a(ra, {
      type: "primary",
      size: "large",
      class: "search-button",
      disabled: !Qe.value.trim(),
      onClick: Rn
    }, {
      default: l(() => [a(Se, {
        class: "search-button-icon"
      }, {
        default: l(() => [a(P(Ai))]),
        _: 1
      }), I[105] || (I[105] = g(" 查找图文（行业优质） ", -1))]),
      _: 1
    }, 8, ["disabled"])]), e("div", PZ, [I[106] || (I[106] = e("div", {
      class: "hot-keywords-header"
    }, [e("span", {
      class: "fire-icon"
    }, "🔥"), e("span", {
      class: "hot-keywords-title"
    }, "热门关键词")], -1)), e("div", VZ, [(c(!0), v(Ue, null, gt(kt.value, (mt, Na) => (c(), v("div", {
      key: Na,
      class: "hot-keyword-item",
      onClick: ul => ko(mt)
    }, h(mt), 9, zZ))), 128))])])], 512)), [
      [po, !K.value]
    ]) : M("", !0), $.value === "link" && N.value ? el((c(), v("div", LZ, [e("div", DZ, [I[108] || (I[108] = e("div", {
      class: "field-label"
    }, "链接解析", -1)), M("", !0)]), M("", !0), e("div", MZ, [T.value === "note" ? (c(), ye(cl, {
      key: 0,
      modelValue: R.value,
      "onUpdate:modelValue": I[7] || (I[7] = mt => R.value = mt),
      type: "textarea",
      rows: 4,
      placeholder: "",
      size: "large",
      class: "link-input",
      onPaste: Us
    }, null, 8, ["modelValue"])) : (c(), ye(cl, {
      key: 1,
      modelValue: O.value,
      "onUpdate:modelValue": I[8] || (I[8] = mt => O.value = mt),
      type: "textarea",
      rows: 4,
      placeholder: "",
      size: "large",
      class: "link-input",
      onPaste: Us
    }, null, 8, ["modelValue"])), ie.value ? (c(), ye(ra, {
      key: 2,
      class: "action-btn clear-btn",
      size: "small",
      onClick: il
    }, {
      default: l(() => [...I[111] || (I[111] = [g(" 清除 ", -1)])]),
      _: 1
    })) : (c(), ye(ra, {
      key: 3,
      class: "action-btn paste-btn",
      size: "small",
      onClick: He
    }, {
      default: l(() => [...I[112] || (I[112] = [g(" 粘贴 ", -1)])]),
      _: 1
    }))]), I[113] || (I[113] = e("div", {
      class: "link-input-subtip"
    }, "部分平台暂不支持，有疑问可咨询客服", -1)), e("div", OZ, [a(ra, {
      type: "primary",
      size: "large",
      disabled: Ye.value || !ie.value.trim(),
      class: Pe({
        "parsed-button": Ye.value || K.value
      }),
      onClick: Yl
    }, {
      default: l(() => [g(h(Ye.value ? "解析中..." : T.value === "note" ? "一键解析图文链接" : "一键解析商品链接"), 1)]),
      _: 1
    }, 8, ["disabled", "class"])])], 512)), [
      [po, !K.value && !J.value && !ee.value]
    ]) : M("", !0), $.value === "link" && (J.value || ee.value) && !K.value ? (c(), v("div", BZ, [a(Se, {
      class: "is-loading id-parsing-icon"
    }, {
      default: l(() => [a(P(Fl))]),
      _: 1
    }), e("span", NZ, h(Ye.value ? "正在解析图文，请稍候…" : "正在加载…"), 1)])) : M("", !0), $.value === "text" ? el((c(), v("div", UZ, [y.value ? M("", !0) : (c(), v("div", RZ, [e("div", jZ, [I[115] || (I[115] = e("div", {
      class: "field-label"
    }, [g("上传图片 "), e("span", {
      class: "required-label"
    }, "（必填，至少1张）")], -1)), Be.value.images && Be.value.images.length > 0 ? (c(), ye(ra, {
      key: 0,
      type: "primary",
      size: "small",
      icon: P(Uu),
      onClick: I[9] || (I[9] = mt => Pa.value = !0),
      class: "preview-btn"
    }, {
      default: l(() => [...I[114] || (I[114] = [g(" 图片预览 ", -1)])]),
      _: 1
    }, 8, ["icon"])) : M("", !0)]), e("div", qZ, [e("div", FZ, [(c(!0), v(Ue, null, gt(Be.value.images, (mt, Na) => (c(), v("div", {
      key: mt.uid || Na,
      class: Pe(["copy-upload-thumb", {
        "is-uploading": mt.uploading
      }])
    }, [e("img", {
      src: mt.url || mt.preview,
      alt: mt.name,
      class: "copy-upload-thumb-img"
    }, null, 8, WZ), mt.uploading ? (c(), v("div", GZ, [e("span", JZ, h(mt.progress || 0) + "%", 1), e("div", HZ, [e("div", {
      class: "copy-upload-thumb-fill",
      style: Il({
        width: (mt.progress || 0) + "%"
      })
    }, null, 4)])])) : M("", !0), e("button", {
      type: "button",
      class: "copy-upload-thumb-remove",
      onClick: lt(ul => la(Na), ["stop"])
    }, [a(Se, null, {
      default: l(() => [a(P(un))]),
      _: 1
    })], 8, QZ), mt.uploading ? M("", !0) : (c(), v("div", KZ, [e("button", {
      type: "button",
      class: "copy-upload-thumb-move",
      disabled: Na === 0,
      title: "向前",
      onClick: lt(ul => Aa(Na, -1), ["stop"])
    }, "‹", 8, YZ), e("span", XZ, h(Na + 1), 1), e("button", {
      type: "button",
      class: "copy-upload-thumb-move",
      disabled: Na === Be.value.images.length - 1,
      title: "向后",
      onClick: lt(ul => Aa(Na, 1), ["stop"])
    }, "›", 8, ZZ)]))], 2))), 128)), Be.value.images.length < 10 ? (c(), v("div", {
      key: 0,
      class: "copy-upload-add",
      onClick: I[10] || (I[10] = mt => Yt.value = !0)
    }, [a(Se, null, {
      default: l(() => [a(P(Ql))]),
      _: 1
    }), I[116] || (I[116] = e("span", {
      class: "upload-text"
    }, "上传图片", -1))])) : M("", !0)]), I[117] || (I[117] = e("div", {
      class: "el-upload__tip"
    }, "支持多图上传，最多10张", -1))])])), e("div", eee, [I[126] || (I[126] = e("div", {
      class: "field-label"
    }, [g("标题 "), e("span", {
      class: "optional-label"
    }, "（选填）")], -1)), e("div", tee, [a(cl, {
      modelValue: Be.value.title,
      "onUpdate:modelValue": I[11] || (I[11] = mt => Be.value.title = mt),
      placeholder: "请输入图文标题（选填）",
      size: "large",
      class: "text-input",
      onClick: Js,
      onFocus: Wi,
      onPaste: Rs
    }, null, 8, ["modelValue"]), Be.value.title ? (c(), ye(ra, {
      key: 0,
      class: "action-btn clear-btn",
      size: "small",
      onClick: da
    }, {
      default: l(() => [...I[118] || (I[118] = [g(" 清除 ", -1)])]),
      _: 1
    })) : (c(), ye(ra, {
      key: 1,
      class: "action-btn paste-btn",
      size: "small",
      onClick: G
    }, {
      default: l(() => [...I[119] || (I[119] = [g(" 粘贴 ", -1)])]),
      _: 1
    }))]), I[127] || (I[127] = e("div", {
      class: "field-label",
      style: {
        "margin-top": "16px"
      }
    }, "内容", -1)), e("div", aee, [a(cl, {
      modelValue: Be.value.content,
      "onUpdate:modelValue": I[12] || (I[12] = mt => Be.value.content = mt),
      type: "textarea",
      rows: y.value ? 6 : 8,
      placeholder: "请粘贴或输入图文原文内容",
      class: "text-input",
      onClick: Js,
      onFocus: Wi,
      onPaste: js
    }, null, 8, ["modelValue", "rows"]), Be.value.content ? (c(), ye(ra, {
      key: 0,
      class: "action-btn clear-btn textarea-clear-btn",
      size: "small",
      onClick: na
    }, {
      default: l(() => [...I[120] || (I[120] = [g(" 清除 ", -1)])]),
      _: 1
    })) : (c(), ye(ra, {
      key: 1,
      class: "action-btn paste-btn textarea-paste-btn",
      size: "small",
      onClick: It
    }, {
      default: l(() => [...I[121] || (I[121] = [g(" 粘贴 ", -1)])]),
      _: 1
    }))]), y.value ? (c(), v("div", lee, [e("div", nee, [I[123] || (I[123] = e("div", {
      class: "field-label",
      style: {
        "margin-top": "16px"
      }
    }, [g("上传图片 "), e("span", {
      class: "required-label"
    }, "（必填，至少1张）")], -1)), Be.value.images && Be.value.images.length > 0 ? (c(), ye(ra, {
      key: 0,
      type: "primary",
      size: "small",
      icon: P(Uu),
      onClick: I[13] || (I[13] = mt => Pa.value = !0),
      class: "preview-btn"
    }, {
      default: l(() => [...I[122] || (I[122] = [g(" 图片预览 ", -1)])]),
      _: 1
    }, 8, ["icon"])) : M("", !0)]), e("div", oee, [e("div", iee, [(c(!0), v(Ue, null, gt(Be.value.images, (mt, Na) => (c(), v("div", {
      key: mt.uid || Na,
      class: Pe(["copy-upload-thumb copy-upload-thumb--mobile", {
        "is-uploading": mt.uploading
      }])
    }, [e("img", {
      src: mt.url || mt.preview,
      alt: mt.name,
      class: "copy-upload-thumb-img"
    }, null, 8, see), mt.uploading ? (c(), v("div", ree, [e("span", uee, h(mt.progress || 0) + "%", 1), e("div", cee, [e("div", {
      class: "copy-upload-thumb-fill",
      style: Il({
        width: (mt.progress || 0) + "%"
      })
    }, null, 4)])])) : M("", !0), e("button", {
      type: "button",
      class: "copy-upload-thumb-remove",
      onClick: lt(ul => la(Na), ["stop"])
    }, [a(Se, null, {
      default: l(() => [a(P(un))]),
      _: 1
    })], 8, dee), mt.uploading ? M("", !0) : (c(), v("div", vee, [e("button", {
      type: "button",
      class: "copy-upload-thumb-move",
      disabled: Na === 0,
      title: "向前",
      onClick: lt(ul => Aa(Na, -1), ["stop"])
    }, "‹", 8, mee), e("span", gee, h(Na + 1), 1), e("button", {
      type: "button",
      class: "copy-upload-thumb-move",
      disabled: Na === Be.value.images.length - 1,
      title: "向后",
      onClick: lt(ul => Aa(Na, 1), ["stop"])
    }, "›", 8, fee)]))], 2))), 128)), Be.value.images.length < 10 ? (c(), v("div", {
      key: 0,
      class: "copy-upload-add copy-upload-add--mobile",
      onClick: I[14] || (I[14] = mt => Yt.value = !0)
    }, [a(Se, null, {
      default: l(() => [a(P(Ql))]),
      _: 1
    }), I[124] || (I[124] = e("span", {
      class: "upload-text"
    }, "上传图片", -1))])) : M("", !0)]), I[125] || (I[125] = e("div", {
      class: "el-upload__tip"
    }, "支持多图上传，最多10张", -1))])])) : M("", !0)]), e("div", pee, [a(ra, {
      type: "primary",
      size: "large",
      disabled: !hn.value,
      onClick: ia
    }, {
      default: l(() => [...I[128] || (I[128] = [g(" 确认并继续 ", -1)])]),
      _: 1
    }, 8, ["disabled"])])], 512)), [
      [po, !K.value]
    ]) : M("", !0), a(Ib, {
      visible: Yt.value,
      "max-files": 10,
      "multi-file-title": "图片",
      "initial-image-count": Be.value.images.length,
      "existing-images": Be.value.images.map(mt => mt.url).filter(Boolean),
      onConfirm: ql,
      onCancel: I[15] || (I[15] = mt => Yt.value = !1),
      onReceiveMobile: Kl,
      onRemoveExisting: la
    }, null, 8, ["visible", "initial-image-count", "existing-images"]), va.value ? (c(), v("div", yee, [I[131] || (I[131] = e("div", {
      class: "aicopy-url-hint-icon"
    }, "!", -1)), e("div", hee, [I[129] || (I[129] = e("div", {
      class: "aicopy-url-hint-title"
    }, "您输入的网址不支持", -1)), e("div", bee, h(va.value), 1)]), a(ra, {
      type: "primary",
      size: "small",
      class: "aicopy-url-hint-btn",
      onClick: vo
    }, {
      default: l(() => [I[130] || (I[130] = g(" 去使用模式2 ", -1)), a(Se, null, {
        default: l(() => [a(P(Wl))]),
        _: 1
      })]),
      _: 1
    })])) : M("", !0), K.value && !y.value ? (c(), v("div", wee, [e("div", _ee, [I[146] || (I[146] = e("div", {
      class: "result-title"
    }, "原文内容", -1)), e("div", kee, [e("div", Cee, [e("button", {
      type: "button",
      class: "result-platform-preview-btn",
      onClick: I[16] || (I[16] = mt => B.value = !0)
    }, [a(Se, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    }), I[132] || (I[132] = e("span", null, "预览", -1))]), K.value && K.value.images && K.value.images.length > 0 ? (c(), v("button", {
      key: 0,
      type: "button",
      class: "result-platform-preview-btn result-platform-batch-del-btn",
      onClick: Xn
    }, [a(Se, null, {
      default: l(() => [a(P(zn))]),
      _: 1
    }), I[133] || (I[133] = e("span", null, "批量删除", -1))])) : M("", !0)]), K.value.images && K.value.images.length > 0 ? (c(), v("div", Aee, [K.value.images.length > 1 ? (c(), v("div", Iee, [a(ua, {
      ref_key: "carouselRef",
      ref: Bt,
      interval: 0,
      autoplay: !1,
      "indicator-position": "none",
      class: "result-images-carousel",
      onChange: Wt
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(K.value.images, (mt, Na) => (c(), ye(Ct, {
        key: Na
      }, {
        default: l(() => [e("div", xee, [e("img", {
          src: mt,
          alt: `图片${Na+1}`
        }, null, 8, See), e("div", Eee, [a(ra, {
          text: "",
          size: "small",
          class: "result-image-action-btn result-image-action-btn--delete",
          onClick: lt(ul => Cl(Na), ["stop"])
        }, {
          default: l(() => [...I[134] || (I[134] = [g(" 删除 ", -1)])]),
          _: 1
        }, 8, ["onClick"]), a(ra, {
          text: "",
          size: "small",
          class: "result-image-action-btn result-image-action-btn--replace",
          onClick: lt(ul => Fs(Na), ["stop"])
        }, {
          default: l(() => [...I[135] || (I[135] = [g(" 替换 ", -1)])]),
          _: 1
        }, 8, ["onClick"]), a(jo, {
          trigger: "click",
          onCommand: ul => Ws(ul, Na),
          onClick: I[18] || (I[18] = lt(() => {}, ["stop"]))
        }, {
          dropdown: l(() => [a(bn, null, {
            default: l(() => [a(bl, {
              command: "before"
            }, {
              default: l(() => [...I[137] || (I[137] = [g("给此图前面加一张", -1)])]),
              _: 1
            }), a(bl, {
              command: "after"
            }, {
              default: l(() => [...I[138] || (I[138] = [g("给此图后面加一张", -1)])]),
              _: 1
            })]),
            _: 1
          })]),
          default: l(() => [e("span", {
            class: "result-image-dropdown-trigger",
            onClick: I[17] || (I[17] = lt(() => {}, ["stop"]))
          }, [a(ra, {
            text: "",
            size: "small",
            class: "result-image-action-btn result-image-action-btn--insert"
          }, {
            default: l(() => [...I[136] || (I[136] = [g(" 上传一张 ", -1)])]),
            _: 1
          })])]),
          _: 1
        }, 8, ["onCommand"])])])]),
        _: 2
      }, 1024))), 128))]),
      _: 1
    }, 512), e("div", Tee, [(c(!0), v(Ue, null, gt(K.value.images, (mt, Na) => (c(), v("button", {
      key: Na,
      type: "button",
      class: Pe(["result-carousel-indicator", {
        "is-active": Ze.value === Na
      }]),
      onClick: ul => aa(Na)
    }, h(Na + 1), 11, $ee))), 128))])])) : (c(), v("div", Pee, [e("div", Vee, [e("img", {
      src: K.value.images[0],
      alt: "图片"
    }, null, 8, zee), e("div", Lee, [a(ra, {
      text: "",
      size: "small",
      class: "result-image-action-btn result-image-action-btn--delete",
      onClick: I[19] || (I[19] = lt(mt => Cl(0), ["stop"]))
    }, {
      default: l(() => [...I[139] || (I[139] = [g(" 删除 ", -1)])]),
      _: 1
    }), a(ra, {
      text: "",
      size: "small",
      class: "result-image-action-btn result-image-action-btn--replace",
      onClick: I[20] || (I[20] = lt(mt => Fs(0), ["stop"]))
    }, {
      default: l(() => [...I[140] || (I[140] = [g(" 替换 ", -1)])]),
      _: 1
    }), a(jo, {
      trigger: "click",
      onCommand: I[22] || (I[22] = mt => Ws(mt, 0)),
      onClick: I[23] || (I[23] = lt(() => {}, ["stop"]))
    }, {
      dropdown: l(() => [a(bn, null, {
        default: l(() => [a(bl, {
          command: "before"
        }, {
          default: l(() => [...I[142] || (I[142] = [g("给此图前面加一张", -1)])]),
          _: 1
        }), a(bl, {
          command: "after"
        }, {
          default: l(() => [...I[143] || (I[143] = [g("给此图后面加一张", -1)])]),
          _: 1
        })]),
        _: 1
      })]),
      default: l(() => [e("span", {
        class: "result-image-dropdown-trigger",
        onClick: I[21] || (I[21] = lt(() => {}, ["stop"]))
      }, [a(ra, {
        text: "",
        size: "small",
        class: "result-image-action-btn result-image-action-btn--insert"
      }, {
        default: l(() => [...I[141] || (I[141] = [g(" 上传一张 ", -1)])]),
        _: 1
      })])]),
      _: 1
    })])])]))])) : M("", !0), e("div", Dee, [I[144] || (I[144] = e("span", {
      class: "k"
    }, "标题：", -1)), e("span", Mee, h(K.value.title), 1)]), e("div", Oee, [I[145] || (I[145] = e("span", {
      class: "k"
    }, "内容：", -1)), e("span", Bee, h(Ve.value), 1)])])]), e("div", Nee, [I[175] || (I[175] = e("div", {
      class: "result-title"
    }, "增加创作要求", -1)), e("div", Uee, [a(fo, {
      "label-width": "120px"
    }, {
      default: l(() => [a(rn, {
        label: "配图模式:"
      }, {
        default: l(() => [a(tl, {
          modelValue: Ne.value.imageMode,
          "onUpdate:modelValue": I[24] || (I[24] = mt => Ne.value.imageMode = mt),
          class: "image-mode-radio-group"
        }, {
          default: l(() => [a(wa, {
            value: "original"
          }, {
            default: l(() => [I[148] || (I[148] = g(" 原图二创去重 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[147] || (I[147] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", {
                style: {
                  "margin-bottom": "6px"
                }
              }, [e("strong", null, "说明："), g("这个模式下，会针对原图片基础上进行"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "降重处理"), g("，但是基本"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "肉眼看不会有太多变化"), g("，文案处理会保证"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "优质属性"), g("与"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "原创度"), g("兼得。原图去重技术为："), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "增加图片边框"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "滤镜处理"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "角度微调"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "透明贴纸"), g("等。")]), e("div", null, [e("strong", null, "小建议："), g("优先使用"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "没有水印"), g("、"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "没有版权"), g("、"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "没有品牌标识"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "文案多一些"), g("的作品！")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(wa, {
            value: "aiNew"
          }, {
            default: l(() => [I[150] || (I[150] = g(" AI文字生图 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[149] || (I[149] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", null, [e("strong", null, "说明："), g("基于本系统的AI智能文生图，为您的新内容生成"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "原创大字报日记风格配图"), g("，并对原来的文案进行"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "一键仿写"), g("。")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(wa, {
            value: "aiImage"
          }, {
            default: l(() => [I[152] || (I[152] = g(" AI图生图(仿优质) ", -1)), I[153] || (I[153] = e("span", {
              class: "image-mode-recommend-tag"
            }, "（更推荐）", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[151] || (I[151] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", {
                style: {
                  "margin-bottom": "6px"
                }
              }, [e("strong", null, "说明："), g("基于目标图片生成新的"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "绝对原创图片"), g("，保持"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "风格一致"), g("的同时实现原创。")]), e("div", null, [g("因为本次制作"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "高级且消耗点数多"), g("，建议您把"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "关联创作信息"), g("和"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "配图要求"), g("写明确，这样预期效果更佳！")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
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
      }), M("", !0), a(rn, {
        label: "文案模式:"
      }, {
        default: l(() => [a(tl, {
          modelValue: Ne.value.copywritingMode,
          "onUpdate:modelValue": I[26] || (I[26] = mt => Ne.value.copywritingMode = mt)
        }, {
          default: l(() => [a(wa, {
            value: "rewrite"
          }, {
            default: l(() => [I[156] || (I[156] = g(" 原文二创 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[155] || (I[155] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", null, [e("strong", null, "说明："), g("对原文案进行"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "仿写"), g("，保证了"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "原创度"), g("，"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "推荐选择"), g("。")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(wa, {
            value: "unchanged"
          }, {
            default: l(() => [I[158] || (I[158] = g(" 引用原文 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[157] || (I[157] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", null, [e("strong", null, "说明："), g("原文是什么最终还是什么，选择这个代表"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "仅创作图片"), g("，"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "不改动原文"), g("。")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
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
      }), a(rn, {
        label: "图文类型:"
      }, {
        default: l(() => [a(Ml, {
          modelValue: Ne.value.noteType,
          "onUpdate:modelValue": I[27] || (I[27] = mt => Ne.value.noteType = mt),
          placeholder: "选择类型",
          style: {
            width: "120px"
          },
          placement: "top"
        }, {
          default: l(() => [a(Al, {
            label: "分享",
            value: "分享"
          }), a(Al, {
            label: "攻略",
            value: "攻略"
          }), a(Al, {
            label: "教程",
            value: "教程"
          }), a(Al, {
            label: "分享",
            value: "分享"
          }), a(Al, {
            label: "电商",
            value: "电商"
          }), a(Al, {
            label: "测评",
            value: "测评"
          }), a(Al, {
            label: "干货",
            value: "干货"
          }), a(Al, {
            label: "默认",
            value: "任意"
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(rn, {
        label: "图文字数:"
      }, {
        default: l(() => [a(tl, {
          modelValue: Ne.value.wordCount,
          "onUpdate:modelValue": I[28] || (I[28] = mt => Ne.value.wordCount = mt)
        }, {
          default: l(() => [a(wa, {
            value: "200"
          }, {
            default: l(() => [...I[159] || (I[159] = [g("200字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "300"
          }, {
            default: l(() => [...I[160] || (I[160] = [g("300字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "500"
          }, {
            default: l(() => [...I[161] || (I[161] = [g("500字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "800"
          }, {
            default: l(() => [...I[162] || (I[162] = [g("800字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "fanwei"
          }, {
            default: l(() => [...I[163] || (I[163] = [g("不限字数", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(rn, {
        label: "内容需要:"
      }, {
        default: l(() => [a(Bn, {
          modelValue: Ne.value.contentOptions,
          "onUpdate:modelValue": I[29] || (I[29] = mt => Ne.value.contentOptions = mt),
          class: "content-options-checkbox-group"
        }, {
          default: l(() => [a(Tl, {
            value: "addTags"
          }, {
            default: l(() => [...I[164] || (I[164] = [g("引用标题", -1)])]),
            _: 1
          }), a(Tl, {
            value: "addEmoji",
            class: "filter-checkbox"
          }, {
            default: l(() => [...I[165] || (I[165] = [g("添加表情", -1)])]),
            _: 1
          }), a(Tl, {
            value: "addHashtag",
            class: "filter-checkbox"
          }, {
            default: l(() => [...I[166] || (I[166] = [g("添加话题", -1)])]),
            _: 1
          }), a(Tl, {
            value: "filterBannedWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [I[167] || (I[167] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤敏感词", -1)), a(Hl, {
              content: "说明：本系统会自动检测常见的写作问题，帮你提升内容表达。",
              placement: "top"
            }, {
              default: l(() => [a(Se, {
                class: "filter-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(Tl, {
            value: "filterMarketingWords",
            class: "filter-checkbox filter-marketing-checkbox"
          }, {
            default: l(() => [I[168] || (I[168] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤营销词", -1)), a(Hl, {
              content: "说明：本系统会识别口水句与冗余表达，帮你让内容更精炼。",
              placement: "top"
            }, {
              default: l(() => [a(Se, {
                class: "filter-help-icon"
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
      }), Ne.value.imageMode === "original" || Ne.value.imageMode === "aiNew" || Ne.value.imageMode === "aiImage" ? (c(), ye(rn, {
        key: 1,
        label: "生成篇数:"
      }, {
        default: l(() => [a(Ml, {
          modelValue: Ne.value.imageCount,
          "onUpdate:modelValue": I[30] || (I[30] = mt => Ne.value.imageCount = mt),
          placeholder: "选择篇数",
          style: {
            width: "64px"
          },
          filterable: !1,
          placement: "top"
        }, {
          default: l(() => [(c(), v(Ue, null, gt(20, mt => a(Al, {
            key: mt,
            label: mt,
            value: mt
          }, null, 8, ["label", "value"])), 64))]),
          _: 1
        }, 8, ["modelValue"]), Ne.value.imageMode === "aiImage" && Number(Ne.value.imageCount) >= 2 ? (c(), v("span", Ree, "（说明：数量≥2篇，支持风格图多种方案，可点击下方补充配图方案选择参考图）")) : M("", !0)]),
        _: 1
      })) : M("", !0), a(rn, {
        label: "二创要求:",
        class: "image-requirement-form-item"
      }, {
        default: l(() => [e("div", jee, [e("span", {
          class: Pe(["pill-btn", {
            active: $t.value
          }]),
          onClick: sa
        }, [a(Se, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", qee, h($t.value ? "已关联创作信息" : "未关联创作信息"), 1), $t.value ? M("", !0) : (c(), v("span", Fee, h(Ne.value.imageMode === "aiImage" ? "（必填）" : "（建议填）"), 1))], 2), Ne.value.imageMode === "aiImage" ? (c(), v("span", {
          key: 0,
          class: Pe(["pill-btn", {
            active: dl.value
          }]),
          onClick: ol
        }, [a(Se, null, {
          default: l(() => [a(P(qn))]),
          _: 1
        }), e("span", Wee, h(dl.value ? "已补充配图要求" : "未补充配图要求"), 1), dl.value ? M("", !0) : (c(), v("span", Gee, "（必填）"))], 2)) : M("", !0), e("span", {
          class: Pe(["pill-btn", {
            active: !!ha.value
          }]),
          onClick: I[32] || (I[32] = mt => ta.value = !0)
        }, [a(Se, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", Jee, [g(h(ha.value ? ha.value.name : "绑定人设"), 1), a(Hl, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...I[169] || (I[169] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(Se, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: I[31] || (I[31] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), ha.value ? M("", !0) : (c(), v("span", Hee, "（建议填）"))], 2), e("span", {
          class: Pe(["pill-btn", {
            active: Fa.value > 0
          }]),
          onClick: en
        }, [a(Se, null, {
          default: l(() => [a(P(Ud))]),
          _: 1
        }), e("span", Qee, [g(h(Fa.value > 0 ? `内容替换 · ${Fa.value}条` : "内容替换"), 1), a(Hl, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...I[170] || (I[170] = [e("div", {
            style: {
              "max-width": "248px",
              "line-height": "1.7"
            }
          }, [e("div", null, "把原文里的指定内容替换成你的内容（如「长沙」换成「西安」）。"), e("div", {
            style: {
              "margin-top": "5px",
              color: "#ffd86b"
            }
          }, "选填：此功能不填写也不影响生成结果。"), e("div", {
            style: {
              "margin-top": "3px",
              color: "#ffd86b"
            }
          }, "但「关联创作信息」里务必填写产品简介、目标人群、核心卖点等关键信息，否则会明显影响创作质量。")], -1)])]),
          default: l(() => [a(Se, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: I[33] || (I[33] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), Fa.value === 0 ? (c(), v("span", Kee, "（选填）")) : M("", !0)], 2)])]),
        _: 1
      }), a(rn, null, {
        default: l(() => [a(ra, {
          type: "danger",
          size: "large",
          class: Pe(["aicopy-generate-btn", {
            "aicopy-generate-btn--mobile-float": y.value
          }]),
          loading: xa.value,
          onClick: Yr
        }, {
          default: l(() => [I[171] || (I[171] = g(" 一键生成仿文", -1)), e("span", Yee, "（" + h(Ne.value.imageMode === "original" ? "原图二创去重" : Ne.value.imageMode === "aiNew" ? "AI文字生图" : "AI图生图(仿优质)") + "）", 1), e("span", Xee, "消耗" + h(ga.value), 1)]),
          _: 1
        }, 8, ["class", "loading"])]),
        _: 1
      })]),
      _: 1
    }), e("p", Zee, [a(Se, {
      class: "image-mode-form-hint__icon",
      "aria-hidden": "true"
    }, {
      default: l(() => [a(P(si))]),
      _: 1
    }), e("span", ete, [I[174] || (I[174] = e("span", {
      class: "image-mode-form-hint__lead"
    }, "说明：", -1)), e("span", tte, [I[172] || (I[172] = g("三种创作方式不一样，可以点击上方类型后面的", -1)), a(Se, {
      class: "image-mode-form-hint__q-icon",
      "aria-hidden": "true"
    }, {
      default: l(() => [a(P(Ha))]),
      _: 1
    }), I[173] || (I[173] = g("来查看具体的区别", -1))])])])])])])) : M("", !0), K.value && y.value ? (c(), v("div", ate, [e("div", lte, [I[190] || (I[190] = e("div", {
      class: "result-title-wrapper"
    }, [e("div", {
      class: "result-title"
    }, "解析结果")], -1)), e("div", nte, [e("div", ote, [e("button", {
      type: "button",
      class: "result-platform-preview-btn",
      onClick: I[34] || (I[34] = mt => B.value = !0)
    }, [a(Se, null, {
      default: l(() => [a(P(Do))]),
      _: 1
    }), I[176] || (I[176] = e("span", null, "预览", -1))]), K.value && K.value.images && K.value.images.length > 0 ? (c(), v("button", {
      key: 0,
      type: "button",
      class: "result-platform-preview-btn result-platform-batch-del-btn",
      onClick: Xn
    }, [a(Se, null, {
      default: l(() => [a(P(zn))]),
      _: 1
    }), I[177] || (I[177] = e("span", null, "批量删除", -1))])) : M("", !0)]), K.value.images && K.value.images.length > 0 ? (c(), v("div", ite, [K.value.images.length > 1 ? (c(), v("div", ste, [a(ua, {
      ref_key: "carouselRef",
      ref: Bt,
      interval: 0,
      autoplay: !1,
      "indicator-position": "none",
      class: "result-images-carousel-mobile",
      onChange: Wt
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(K.value.images, (mt, Na) => (c(), ye(Ct, {
        key: Na
      }, {
        default: l(() => [e("div", rte, [e("img", {
          src: mt,
          alt: `图片${Na+1}`
        }, null, 8, ute), e("div", cte, [a(ra, {
          text: "",
          size: "small",
          class: "result-image-action-btn result-image-action-btn--delete",
          onClick: lt(ul => Cl(Na), ["stop"])
        }, {
          default: l(() => [...I[178] || (I[178] = [g(" 删除 ", -1)])]),
          _: 1
        }, 8, ["onClick"]), a(ra, {
          text: "",
          size: "small",
          class: "result-image-action-btn result-image-action-btn--replace",
          onClick: lt(ul => Fs(Na), ["stop"])
        }, {
          default: l(() => [...I[179] || (I[179] = [g(" 替换 ", -1)])]),
          _: 1
        }, 8, ["onClick"]), a(jo, {
          trigger: "click",
          onCommand: ul => Ws(ul, Na),
          onClick: I[36] || (I[36] = lt(() => {}, ["stop"]))
        }, {
          dropdown: l(() => [a(bn, null, {
            default: l(() => [a(bl, {
              command: "before"
            }, {
              default: l(() => [...I[181] || (I[181] = [g("给此图前面加一张", -1)])]),
              _: 1
            }), a(bl, {
              command: "after"
            }, {
              default: l(() => [...I[182] || (I[182] = [g("给此图后面加一张", -1)])]),
              _: 1
            })]),
            _: 1
          })]),
          default: l(() => [e("span", {
            class: "result-image-dropdown-trigger",
            onClick: I[35] || (I[35] = lt(() => {}, ["stop"]))
          }, [a(ra, {
            text: "",
            size: "small",
            class: "result-image-action-btn result-image-action-btn--insert"
          }, {
            default: l(() => [...I[180] || (I[180] = [g(" 上传一张 ", -1)])]),
            _: 1
          })])]),
          _: 1
        }, 8, ["onCommand"])])])]),
        _: 2
      }, 1024))), 128))]),
      _: 1
    }, 512), e("div", dte, [(c(!0), v(Ue, null, gt(K.value.images, (mt, Na) => (c(), v("button", {
      key: Na,
      type: "button",
      class: Pe(["result-carousel-indicator", {
        "is-active": Ze.value === Na
      }]),
      onClick: ul => aa(Na)
    }, h(Na + 1), 11, vte))), 128))])])) : (c(), v("div", mte, [e("div", gte, [e("img", {
      src: K.value.images[0],
      alt: "图片"
    }, null, 8, fte), e("div", pte, [a(ra, {
      text: "",
      size: "small",
      class: "result-image-action-btn result-image-action-btn--delete",
      onClick: I[37] || (I[37] = lt(mt => Cl(0), ["stop"]))
    }, {
      default: l(() => [...I[183] || (I[183] = [g(" 删除 ", -1)])]),
      _: 1
    }), a(ra, {
      text: "",
      size: "small",
      class: "result-image-action-btn result-image-action-btn--replace",
      onClick: I[38] || (I[38] = lt(mt => Fs(0), ["stop"]))
    }, {
      default: l(() => [...I[184] || (I[184] = [g(" 替换 ", -1)])]),
      _: 1
    }), a(jo, {
      trigger: "click",
      onCommand: I[40] || (I[40] = mt => Ws(mt, 0)),
      onClick: I[41] || (I[41] = lt(() => {}, ["stop"]))
    }, {
      dropdown: l(() => [a(bn, null, {
        default: l(() => [a(bl, {
          command: "before"
        }, {
          default: l(() => [...I[186] || (I[186] = [g("给此图前面加一张", -1)])]),
          _: 1
        }), a(bl, {
          command: "after"
        }, {
          default: l(() => [...I[187] || (I[187] = [g("给此图后面加一张", -1)])]),
          _: 1
        })]),
        _: 1
      })]),
      default: l(() => [e("span", {
        class: "result-image-dropdown-trigger",
        onClick: I[39] || (I[39] = lt(() => {}, ["stop"]))
      }, [a(ra, {
        text: "",
        size: "small",
        class: "result-image-action-btn result-image-action-btn--insert"
      }, {
        default: l(() => [...I[185] || (I[185] = [g(" 上传一张 ", -1)])]),
        _: 1
      })])]),
      _: 1
    })])])]))])) : M("", !0), e("div", yte, [I[188] || (I[188] = e("span", {
      class: "k"
    }, "标题：", -1)), e("span", hte, h(K.value.title), 1)]), e("div", {
      class: Pe(["result-item content", {
        "content-collapsed": !Oe.value
      }])
    }, [I[189] || (I[189] = e("span", {
      class: "k"
    }, "内容：", -1)), e("span", bte, h(Ve.value), 1)], 2), K.value.content && (K.value.content.length > 100 || K.value.content.split(`
`).length > 2) ? (c(), ye(ra, {
      key: 1,
      text: "",
      class: "toggle-content-btn content-toggle-btn",
      onClick: I[42] || (I[42] = mt => Oe.value = !Oe.value)
    }, {
      default: l(() => [a(Se, null, {
        default: l(() => [Oe.value ? (c(), ye(Sn, {
          key: 1
        })) : (c(), ye(Ol, {
          key: 0
        }))]),
        _: 1
      }), e("span", wte, h(Oe.value ? "收起" : "展开查看"), 1)]),
      _: 1
    })) : M("", !0)])]), e("div", _te, [I[216] || (I[216] = e("div", {
      class: "result-title"
    }, "增加创作要求", -1)), a(fo, {
      "label-width": "120px"
    }, {
      default: l(() => [a(rn, {
        label: "配图模式:"
      }, {
        default: l(() => [a(tl, {
          modelValue: Ne.value.imageMode,
          "onUpdate:modelValue": I[43] || (I[43] = mt => Ne.value.imageMode = mt),
          class: "image-mode-radio-group"
        }, {
          default: l(() => [a(wa, {
            value: "original"
          }, {
            default: l(() => [I[192] || (I[192] = g(" 原图二创去重 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[191] || (I[191] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", {
                style: {
                  "margin-bottom": "6px"
                }
              }, [e("strong", null, "说明："), g("这个模式下，会针对原图片基础上进行"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "降重处理"), g("，但是基本"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "肉眼看不会有太多变化"), g("，文案处理会保证"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "优质属性"), g("与"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "原创度"), g("兼得。原图去重技术为："), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "增加图片边框"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "滤镜处理"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "角度微调"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "透明贴纸"), g("等。")]), e("div", null, [e("strong", null, "小建议："), g("优先使用"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "没有水印"), g("、"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "没有版权"), g("、"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "没有品牌标识"), g("、"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "文案多一些"), g("的作品！")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(wa, {
            value: "aiNew"
          }, {
            default: l(() => [I[194] || (I[194] = g(" AI文字生图 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[193] || (I[193] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", null, [e("strong", null, "说明："), g("基于本系统的AI智能文生图，为您的新内容生成"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "原创大字报日记风格配图"), g("，并对原来的文案进行"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "一键仿写"), g("。")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(wa, {
            value: "aiImage"
          }, {
            default: l(() => [I[196] || (I[196] = g(" AI图生图(仿优质) ", -1)), I[197] || (I[197] = e("span", {
              class: "image-mode-recommend-tag"
            }, "（更推荐）", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[195] || (I[195] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", {
                style: {
                  "margin-bottom": "6px"
                }
              }, [e("strong", null, "说明："), g("基于目标图片生成新的"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "绝对原创图片"), g("，保持"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "风格一致"), g("的同时实现原创。")]), e("div", null, [g("因为本次制作"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "高级且消耗点数多"), g("，建议您把"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "关联创作信息"), g("和"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "配图要求"), g("写明确，这样预期效果更佳！")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
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
      }), M("", !0), a(rn, {
        label: "文案模式:"
      }, {
        default: l(() => [a(tl, {
          modelValue: Ne.value.copywritingMode,
          "onUpdate:modelValue": I[45] || (I[45] = mt => Ne.value.copywritingMode = mt)
        }, {
          default: l(() => [a(wa, {
            value: "rewrite"
          }, {
            default: l(() => [I[200] || (I[200] = g(" 原文二创 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[199] || (I[199] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", null, [e("strong", null, "说明："), g("对原文案进行"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "仿写"), g("，保证了"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "原创度"), g("，"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "推荐选择"), g("。")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(wa, {
            value: "unchanged"
          }, {
            default: l(() => [I[202] || (I[202] = g(" 引用原文 ", -1)), a(Hl, {
              placement: "top",
              effect: "light",
              "popper-class": "sky-blue-tooltip",
              "raw-content": ""
            }, {
              content: l(() => [...I[201] || (I[201] = [e("div", {
                style: {
                  "max-width": "320px",
                  "line-height": "1.8",
                  "font-size": "13px"
                }
              }, [e("div", null, [e("strong", null, "说明："), g("原文是什么最终还是什么，选择这个代表"), e("span", {
                style: {
                  background: "rgba(255,180,0,0.3)",
                  padding: "0 3px",
                  "border-radius": "2px"
                }
              }, "仅创作图片"), g("，"), e("span", {
                style: {
                  color: "#ffa940"
                }
              }, "不改动原文"), g("。")])], -1)])]),
              default: l(() => [a(Se, {
                class: "image-mode-help-icon"
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
      }), a(rn, {
        label: "图文类型:"
      }, {
        default: l(() => [a(Ml, {
          modelValue: Ne.value.noteType,
          "onUpdate:modelValue": I[46] || (I[46] = mt => Ne.value.noteType = mt),
          placeholder: "选择类型",
          style: {
            width: "120px"
          },
          placement: "top"
        }, {
          default: l(() => [a(Al, {
            label: "分享",
            value: "分享"
          }), a(Al, {
            label: "攻略",
            value: "攻略"
          }), a(Al, {
            label: "教程",
            value: "教程"
          }), a(Al, {
            label: "分享",
            value: "分享"
          }), a(Al, {
            label: "电商",
            value: "电商"
          }), a(Al, {
            label: "测评",
            value: "测评"
          }), a(Al, {
            label: "干货",
            value: "干货"
          }), a(Al, {
            label: "默认",
            value: "任意"
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(rn, {
        label: "图文字数:"
      }, {
        default: l(() => [a(tl, {
          modelValue: Ne.value.wordCount,
          "onUpdate:modelValue": I[47] || (I[47] = mt => Ne.value.wordCount = mt)
        }, {
          default: l(() => [a(wa, {
            value: "200"
          }, {
            default: l(() => [...I[203] || (I[203] = [g("200字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "300"
          }, {
            default: l(() => [...I[204] || (I[204] = [g("300字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "500"
          }, {
            default: l(() => [...I[205] || (I[205] = [g("500字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "800"
          }, {
            default: l(() => [...I[206] || (I[206] = [g("800字左右", -1)])]),
            _: 1
          }), a(wa, {
            value: "fanwei"
          }, {
            default: l(() => [...I[207] || (I[207] = [g("不限字数", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(rn, {
        label: "内容需要:"
      }, {
        default: l(() => [a(Bn, {
          modelValue: Ne.value.contentOptions,
          "onUpdate:modelValue": I[48] || (I[48] = mt => Ne.value.contentOptions = mt),
          class: "content-options-checkbox-group"
        }, {
          default: l(() => [a(Tl, {
            value: "addTags"
          }, {
            default: l(() => [...I[208] || (I[208] = [g("引用标题", -1)])]),
            _: 1
          }), a(Tl, {
            value: "addEmoji",
            class: "filter-checkbox"
          }, {
            default: l(() => [...I[209] || (I[209] = [g("添加表情", -1)])]),
            _: 1
          }), a(Tl, {
            value: "addHashtag",
            class: "filter-checkbox"
          }, {
            default: l(() => [...I[210] || (I[210] = [g("添加话题", -1)])]),
            _: 1
          }), a(Tl, {
            value: "filterBannedWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [I[211] || (I[211] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤敏感词", -1)), a(Hl, {
              content: "说明：本系统会自动检测常见的写作问题，帮你提升内容表达。",
              placement: "top"
            }, {
              default: l(() => [a(Se, {
                class: "filter-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(Tl, {
            value: "filterMarketingWords",
            class: "filter-checkbox filter-marketing-checkbox"
          }, {
            default: l(() => [I[212] || (I[212] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤营销词", -1)), a(Hl, {
              content: "说明：本系统会识别口水句与冗余表达，帮你让内容更精炼。",
              placement: "top"
            }, {
              default: l(() => [a(Se, {
                class: "filter-help-icon"
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
      }), Ne.value.imageMode === "original" || Ne.value.imageMode === "aiNew" || Ne.value.imageMode === "aiImage" ? (c(), ye(rn, {
        key: 1,
        label: "生成篇数:"
      }, {
        default: l(() => [a(Ml, {
          modelValue: Ne.value.imageCount,
          "onUpdate:modelValue": I[49] || (I[49] = mt => Ne.value.imageCount = mt),
          placeholder: "选择篇数",
          style: {
            width: "64px"
          },
          filterable: !1,
          placement: "top"
        }, {
          default: l(() => [(c(), v(Ue, null, gt(20, mt => a(Al, {
            key: mt,
            label: mt,
            value: mt
          }, null, 8, ["label", "value"])), 64))]),
          _: 1
        }, 8, ["modelValue"]), Ne.value.imageMode === "aiImage" && Number(Ne.value.imageCount) >= 2 ? (c(), v("span", kte, "（说明：数量≥2篇，支持风格图多种方案，可点击下方补充配图方案选择参考图）")) : M("", !0)]),
        _: 1
      })) : M("", !0), a(rn, {
        label: "二创要求:",
        class: "image-requirement-form-item"
      }, {
        default: l(() => [e("div", Cte, [e("span", {
          class: Pe(["pill-btn", {
            active: $t.value
          }]),
          onClick: sa
        }, [a(Se, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", Ate, h($t.value ? "已关联创作信息" : "未关联创作信息"), 1), $t.value ? M("", !0) : (c(), v("span", Ite, h(Ne.value.imageMode === "aiImage" ? "（必填）" : "（建议填）"), 1))], 2), Ne.value.imageMode === "aiImage" ? (c(), v("span", {
          key: 0,
          class: Pe(["pill-btn", {
            active: dl.value
          }]),
          onClick: ol
        }, [a(Se, null, {
          default: l(() => [a(P(qn))]),
          _: 1
        }), e("span", xte, h(dl.value ? "已补充配图要求" : "未补充配图要求"), 1), dl.value ? M("", !0) : (c(), v("span", Ste, "（必填）"))], 2)) : M("", !0), e("span", {
          class: Pe(["pill-btn", {
            active: !!ha.value
          }]),
          onClick: I[51] || (I[51] = mt => ta.value = !0)
        }, [a(Se, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", Ete, [g(h(ha.value ? ha.value.name : "绑定人设"), 1), a(Hl, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...I[213] || (I[213] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(Se, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: I[50] || (I[50] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), ha.value ? M("", !0) : (c(), v("span", Tte, "（建议填）"))], 2), e("span", {
          class: Pe(["pill-btn", {
            active: Fa.value > 0
          }]),
          onClick: en
        }, [a(Se, null, {
          default: l(() => [a(P(Ud))]),
          _: 1
        }), e("span", $te, [g(h(Fa.value > 0 ? `内容替换 · ${Fa.value}条` : "内容替换"), 1), a(Hl, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...I[214] || (I[214] = [e("div", {
            style: {
              "max-width": "248px",
              "line-height": "1.7"
            }
          }, [e("div", null, "把原文里的指定内容替换成你的内容（如「长沙」换成「西安」）。"), e("div", {
            style: {
              "margin-top": "5px",
              color: "#ffd86b"
            }
          }, "选填：此功能不填写也不影响生成结果。"), e("div", {
            style: {
              "margin-top": "3px",
              color: "#ffd86b"
            }
          }, "但「关联创作信息」里务必填写产品简介、目标人群、核心卖点等关键信息，否则会明显影响创作质量。")], -1)])]),
          default: l(() => [a(Se, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: I[52] || (I[52] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), Fa.value === 0 ? (c(), v("span", Pte, "（选填）")) : M("", !0)], 2)])]),
        _: 1
      }), a(rn, null, {
        default: l(() => [a(ra, {
          type: "danger",
          size: "large",
          class: Pe(["aicopy-generate-btn", {
            "aicopy-generate-btn--mobile-float": y.value
          }]),
          onClick: Yr
        }, {
          default: l(() => [I[215] || (I[215] = g(" 一键生成仿文", -1)), e("span", Vte, "（" + h(Ne.value.imageMode === "original" ? "原图二创去重" : Ne.value.imageMode === "aiNew" ? "AI文字生图" : "AI图生图(仿优质)") + "）", 1), e("span", zte, "消耗" + h(ga.value), 1)]),
          _: 1
        }, 8, ["class"])]),
        _: 1
      })]),
      _: 1
    })]), e("p", Lte, [a(Se, {
      class: "image-mode-form-hint__icon",
      "aria-hidden": "true"
    }, {
      default: l(() => [a(P(si))]),
      _: 1
    }), e("span", Dte, [I[219] || (I[219] = e("span", {
      class: "image-mode-form-hint__lead"
    }, "说明：", -1)), e("span", Mte, [I[217] || (I[217] = g("三种创作方式不一样，可以点击上方类型后面的", -1)), a(Se, {
      class: "image-mode-form-hint__q-icon",
      "aria-hidden": "true"
    }, {
      default: l(() => [a(P(Ha))]),
      _: 1
    }), I[218] || (I[218] = g("来查看具体的区别", -1))])])])])) : M("", !0)], 2)], 2), a(Wn, {
      modelValue: n.value,
      "onUpdate:modelValue": I[53] || (I[53] = mt => n.value = mt)
    }, null, 8, ["modelValue"]), a(mc, {
      modelValue: s.value,
      "onUpdate:modelValue": I[54] || (I[54] = mt => s.value = mt),
      "current-points": (Cc = S.value) == null ? void 0 : Cc.create_points,
      "required-points": u.value,
      onRecharge: d
    }, null, 8, ["modelValue", "current-points", "required-points"]), a(no, {
      modelValue: f.value,
      "onUpdate:modelValue": I[55] || (I[55] = mt => f.value = mt),
      onLoginSuccess: go
    }, null, 8, ["modelValue"]), a(Lo, {
      modelValue: Ae.value,
      "onUpdate:modelValue": I[61] || (I[61] = mt => Ae.value = mt),
      title: "导入链接",
      width: y.value ? "92%" : "640px",
      "append-to-body": "",
      "destroy-on-close": "",
      class: "link-library-dialog",
      onOpened: E
    }, {
      default: l(() => [a(Zr, {
        modelValue: F.value,
        "onUpdate:modelValue": I[60] || (I[60] = mt => F.value = mt),
        onTabChange: ct
      }, {
        default: l(() => [a(Ji, {
          label: "我的导入",
          name: "collect"
        }, {
          default: l(() => [e("div", Ote, [a(Ml, {
            modelValue: Q.value,
            "onUpdate:modelValue": I[56] || (I[56] = mt => Q.value = mt),
            placeholder: "全部分组",
            clearable: "",
            size: "small",
            class: "link-library-group-select"
          }, {
            default: l(() => [a(Al, {
              label: "全部",
              value: ""
            }), (c(!0), v(Ue, null, gt(re.value, mt => (c(), ye(Al, {
              key: mt.id,
              label: mt.name,
              value: String(mt.id)
            }, null, 8, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]), e("div", Bte, [ue.value.length > 0 ? (c(), ye(Gi, {
            key: 0,
            data: ue.value,
            stripe: "",
            size: "small",
            "max-height": "360",
            "header-cell-style": {
              background: "#fafafa",
              fontSize: "12px"
            }
          }, {
            default: l(() => [a(xo, {
              label: "图文信息",
              "min-width": "220",
              align: "left"
            }, {
              default: l(({
                row: mt
              }) => [e("div", Nte, [e("div", Ute, h(de(mt)), 1), e("div", Rte, h(_e(mt, 72)), 1), e("div", jte, "导入于 " + h(xe(mt.createtime)), 1)])]),
              _: 1
            }), a(xo, {
              label: "操作",
              width: "88",
              align: "center",
              fixed: "right"
            }, {
              default: l(({
                row: mt
              }) => [a(ra, {
                type: "primary",
                link: "",
                size: "small",
                onClick: Na => je(mt)
              }, {
                default: l(() => [...I[221] || (I[221] = [g("选用", -1)])]),
                _: 1
              }, 8, ["onClick"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["data"])) : (c(), ye(_c, {
            key: 1,
            description: "暂无导入记录",
            "image-size": 64
          }))]), ne.value > Jm ? (c(), v("div", qte, [a(mi, {
            "current-page": Y.value,
            "onUpdate:currentPage": I[57] || (I[57] = mt => Y.value = mt),
            "page-size": Jm,
            total: ne.value,
            layout: "prev, pager, next",
            small: "",
            onCurrentChange: qe
          }, null, 8, ["current-page", "total"])])) : M("", !0)]),
          _: 1
        }), a(Ji, {
          label: "我的收藏",
          name: "favorite"
        }, {
          default: l(() => [e("div", Fte, [a(Ml, {
            modelValue: ae.value,
            "onUpdate:modelValue": I[58] || (I[58] = mt => ae.value = mt),
            placeholder: "全部分组",
            clearable: "",
            size: "small",
            class: "link-library-group-select",
            onChange: rt
          }, {
            default: l(() => [a(Al, {
              label: "全部",
              value: ""
            }), (c(!0), v(Ue, null, gt(me.value, mt => (c(), ye(Al, {
              key: mt.id,
              label: mt.name,
              value: String(mt.id)
            }, null, 8, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]), e("div", Wte, [we.value.length > 0 ? el((c(), ye(Gi, {
            key: 0,
            data: we.value,
            stripe: "",
            size: "small",
            "max-height": "360",
            "header-cell-style": {
              background: "#fafafa",
              fontSize: "12px"
            }
          }, {
            default: l(() => [a(xo, {
              label: "收藏信息",
              "min-width": "220",
              align: "left"
            }, {
              default: l(({
                row: mt
              }) => [e("div", Gte, [e("div", Jte, h(mt.title || "无标题"), 1), e("div", Hte, h(mt.desc || ""), 1), e("div", Qte, "收藏于 " + h(xe(mt.createtime)), 1)])]),
              _: 1
            }), a(xo, {
              label: "操作",
              width: "88",
              align: "center",
              fixed: "right"
            }, {
              default: l(({
                row: mt
              }) => [a(ra, {
                type: "primary",
                link: "",
                size: "small",
                onClick: Na => je(mt)
              }, {
                default: l(() => [...I[222] || (I[222] = [g("选用", -1)])]),
                _: 1
              }, 8, ["onClick"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["data"])), [
            [Uv, ce.value]
          ]) : ce.value ? (c(), v("div", Kte, [a(Se, {
            class: "is-loading",
            size: 22
          }, {
            default: l(() => [a(P(Fl))]),
            _: 1
          }), I[223] || (I[223] = e("span", null, "加载中...", -1))])) : (c(), ye(_c, {
            key: 2,
            description: "暂无收藏",
            "image-size": 64
          }))]), te.value > Hm ? (c(), v("div", Yte, [a(mi, {
            "current-page": b.value,
            "onUpdate:currentPage": I[59] || (I[59] = mt => b.value = mt),
            "page-size": Hm,
            total: te.value,
            layout: "prev, pager, next",
            small: "",
            onCurrentChange: Me
          }, null, 8, ["current-page", "total"])])) : M("", !0)]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"]), e("div", Xte, [a(ra, {
        type: "primary",
        link: "",
        size: "small",
        class: "link-library-manage-btn",
        onClick: _
      }, {
        default: l(() => [...I[224] || (I[224] = [g(" 去文案库管理链接 ", -1)])]),
        _: 1
      })])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Lo, {
      modelValue: B.value,
      "onUpdate:modelValue": I[64] || (I[64] = mt => B.value = mt),
      title: "预览原文",
      "align-center": "",
      width: Te.value,
      "append-to-body": "",
      "destroy-on-close": "",
      class: "batch-result-detail-dialog"
    }, {
      default: l(() => [K.value ? (c(), v("div", Zte, [I[232] || (I[232] = e("div", {
        class: "result-detail-meta"
      }, [e("span", {
        class: "result-detail-index"
      }, "当前图文")], -1)), e("div", eae, [e("div", tae, [I[226] || (I[226] = e("div", {
        class: "result-detail-gallery-top"
      }, null, -1)), e("div", aae, [W.value.length > 1 ? (c(), ye(ua, {
        key: `aicopy-preview-${W.value.length}`,
        interval: 0,
        autoplay: !1,
        "indicator-position": W.value.length > 1 ? "outside" : "none",
        class: Pe(["result-detail-gallery-carousel", {
          "is-first": it.value === 0
        }, {
          "is-last": it.value >= W.value.length - 1
        }]),
        height: "100%",
        onChange: yt
      }, {
        default: l(() => [(c(!0), v(Ue, null, gt(W.value, (mt, Na) => (c(), ye(Ct, {
          key: `${Na}-${mt}`
        }, {
          default: l(() => [e("div", lae, [e("img", {
            src: mt,
            alt: `配图 ${Na+1}`
          }, null, 8, nae)])]),
          _: 2
        }, 1024))), 128))]),
        _: 1
      }, 8, ["indicator-position", "class"])) : W.value.length === 1 ? (c(), v("div", oae, [e("img", {
        src: W.value[0],
        alt: K.value.title || "配图"
      }, null, 8, iae)])) : (c(), v("div", sae, [...I[225] || (I[225] = [e("div", null, "暂无配图", -1)])]))])]), I[231] || (I[231] = e("div", {
        class: "result-detail-yulan-divider"
      }, null, -1)), e("div", rae, [e("div", uae, h(K.value.title || "（无标题）"), 1), I[230] || (I[230] = e("div", {
        class: "result-detail-yulan-title-divider"
      }, null, -1)), e("div", cae, h(K.value.content || "（无正文）"), 1), M("", !0)])])])) : M("", !0)]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Lo, {
      modelValue: Ee.value,
      "onUpdate:modelValue": I[65] || (I[65] = mt => Ee.value = mt),
      width: y.value ? "90%" : "400px",
      center: "",
      "close-on-click-modal": !1,
      "show-close": !1,
      class: "search-window-dialog"
    }, {
      default: l(() => [e("div", dae, [e("div", vae, [e("div", mae, [I[233] || (I[233] = e("div", {
        class: "engine-icon heart-icon"
      }, [e("span", {
        class: "icon-emoji"
      }, "❤️")], -1)), e("div", gae, h(ca.value), 1)]), e("div", fae, [I[234] || (I[234] = e("div", {
        class: "engine-icon user-icon"
      }, [e("span", {
        class: "icon-emoji"
      }, "👤")], -1)), e("div", pae, h(be.value), 1)]), e("div", yae, [I[235] || (I[235] = e("div", {
        class: "engine-icon chat-icon"
      }, [e("span", {
        class: "icon-emoji"
      }, "💬")], -1)), e("div", hae, h(he.value), 1)])]), I[236] || (I[236] = e("div", {
        class: "ai-engine-status"
      }, " AI 引擎全力运行中… ", -1)), e("div", bae, [e("div", {
        class: "progress-fill",
        style: Il({
          width: ht.value + "%"
        })
      }, null, 4)])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(ri, {
      onOpenRecharge: I[66] || (I[66] = mt => n.value = !0),
      onOpenLogin: I[67] || (I[67] = mt => f.value = !0)
    }), a(Os, {
      modelValue: Je.value,
      "onUpdate:modelValue": I[68] || (I[68] = mt => Je.value = mt),
      visible: ve.value,
      "onUpdate:visible": I[69] || (I[69] = mt => ve.value = mt),
      mode: "dialog",
      "is-mobile": y.value,
      ref_key: "customExtraFormRef",
      ref: Ht,
      onConfirm: ze,
      onCancel: H,
      onClearHistory: I[70] || (I[70] = mt => $t.value = !1)
    }, null, 8, ["modelValue", "visible", "is-mobile"]), a(gc, {
      modelValue: ta.value,
      "onUpdate:modelValue": I[71] || (I[71] = mt => ta.value = mt),
      "bound-persona": ha.value,
      onBind: Qt,
      onUnbind: ba
    }, null, 8, ["modelValue", "bound-persona"]), a(Lo, {
      modelValue: ml.value,
      "onUpdate:modelValue": I[75] || (I[75] = mt => ml.value = mt),
      width: y.value ? "92%" : "720px",
      "append-to-body": "",
      class: "image-modify-dialog",
      "show-close": !0,
      onClosed: Ft
    }, {
      header: l(() => [...I[237] || (I[237] = [e("div", {
        class: "image-modify-header"
      }, [e("div", {
        class: "image-modify-header-icon"
      }, [e("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, [e("path", {
        d: "M12 20h9"
      }), e("path", {
        d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
      })])]), e("div", {
        class: "image-modify-header-text"
      }, [e("div", {
        class: "image-modify-title"
      }, [g("图片修改要求 "), e("span", {
        class: "image-modify-required"
      }, "（必填）")]), e("div", {
        class: "image-modify-desc"
      }, "请描述您希望对原图进行的修改，描述越详细生成效果越贴近预期")])], -1)])]),
      footer: l(() => [a(ra, {
        onClick: Lt
      }, {
        default: l(() => [...I[254] || (I[254] = [g("取消", -1)])]),
        _: 1
      }), a(ra, {
        type: "primary",
        onClick: on
      }, {
        default: l(() => [...I[255] || (I[255] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", wae, [I[253] || (I[253] = e("div", {
        class: "image-modify-tip"
      }, [e("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }, [e("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), e("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }), e("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      })]), g(" 填写后将作为本批所有图片的最高优先级要求：写明「保留/不变」的元素会被 100% 原样保留，未提及的也一律不动，只改你指定要改的，且多张图严格统一。 ")], -1)), a(fo, {
        "label-position": "top"
      }, {
        default: l(() => [a(rn, null, {
          label: l(() => [...I[238] || (I[238] = [e("span", {
            class: "image-modify-label"
          }, [g("二创要求 "), e("span", {
            class: "image-modify-required-star"
          }, "*")], -1)])]),
          default: l(() => [a(cl, {
            modelValue: Rt.value,
            "onUpdate:modelValue": I[72] || (I[72] = mt => Rt.value = mt),
            type: "textarea",
            rows: 14,
            maxlength: "800",
            "show-word-limit": "",
            placeholder: `请按「要改 / 要保持不变 / 其它说明」三段写清，越具体越准：

【只改这些】
· 例：只把外边框颜色改成更深一档（写清改哪一项、改成什么）

【这些务必原样保留、不要改动】
· 例：除上述改动外，大标题、小标题、字体、文字内容、配色、背景、版式位置全部保持原图原样
·（写「只改 A，其余全部不变」时，请把「其余一切元素一律保持原图原样、不要自由发挥」明确写出来）

【其它说明】（选填）
· 例：多张图按同一标准统一处理、不要二次美化、不要加水印`,
            class: "image-modify-textarea"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(rn, null, {
          label: l(() => [e("span", _ae, [I[240] || (I[240] = g(" 参考风格图 ", -1)), e("span", kae, "（选填）· " + h(ll.value === 1 ? "限 1 张" : `最多 ${ll.value} 张`) + "，当前已选 " + h(Ka.value.length) + " 张", 1), a(Hl, {
            placement: "top",
            effect: "dark",
            "show-after": 100
          }, {
            content: l(() => [...I[239] || (I[239] = [e("div", {
              class: "image-modify-ref-tip"
            }, [e("div", {
              class: "image-modify-ref-tip-line"
            }, "1. 风格图按所选顺序在多篇之间循环使用。"), e("div", {
              class: "image-modify-ref-tip-line"
            }, "2. 篇数与风格图数相等（如 3 篇 + 3 张）：刚好 1 对 1，每篇一张。"), e("div", {
              class: "image-modify-ref-tip-line"
            }, "3. 风格图少于篇数（如 3 篇 + 2 张）：按顺序循环复用，会有篇目复用同一张风格图。"), e("div", {
              class: "image-modify-ref-tip-line"
            }, "4. 仅选 1 张则全部篇目使用同一张；未选择则由 AI 自由发挥决定风格。")], -1)])]),
            default: l(() => [a(Se, {
              class: "image-modify-ref-label-help",
              "aria-label": "风格图分配说明"
            }, {
              default: l(() => [a(P(Ha))]),
              _: 1
            })]),
            _: 1
          })])]),
          default: l(() => [e("div", Cae, [e("div", {
            class: Pe(["image-modify-ref-upload", {
              "has-image": Ka.value.length > 0 || !!Dl.value
            }])
          }, [Ka.value.length > 0 || Dl.value ? (c(), v("div", Aae, [(c(!0), v(Ue, null, gt(Ka.value, (mt, Na) => (c(), v("div", {
            key: mt + "-" + Na,
            class: "image-modify-ref-thumb-item"
          }, [a(kc, {
            src: mt,
            fit: "cover",
            class: "image-modify-ref-thumb",
            alt: `参考风格图${Na+1}`,
            "preview-src-list": Ka.value,
            "initial-index": Na,
            "preview-teleported": ""
          }, null, 8, ["src", "alt", "preview-src-list", "initial-index"]), e("button", {
            type: "button",
            class: "image-modify-ref-thumb-remove",
            "aria-label": `移除第 ${Na+1} 张参考风格图`,
            onClick: lt(ul => wo(Na), ["stop"])
          }, [a(Se, null, {
            default: l(() => [a(P(un))]),
            _: 1
          })], 8, Iae)]))), 128)), Dl.value ? (c(), v("div", xae, [e("img", {
            src: Dl.value,
            class: "image-modify-ref-thumb-img",
            alt: "上传中"
          }, null, 8, Sae), e("div", Eae, [(c(), v("svg", Tae, [I[241] || (I[241] = e("circle", {
            class: "image-modify-ref-progress-ring-track",
            cx: "18",
            cy: "18",
            r: "16"
          }, null, -1)), e("circle", {
            class: "image-modify-ref-progress-ring-bar",
            cx: "18",
            cy: "18",
            r: "16",
            "stroke-dasharray": `${tn.value},100`
          }, null, 8, $ae)])), e("span", Pae, h(tn.value) + "%", 1)])])) : M("", !0)])) : M("", !0), Ka.value.length < ll.value && !Dl.value ? (c(), v("label", {
            key: 1,
            class: "image-modify-ref-dropzone",
            tabindex: "0",
            onClick: lt(Sl, ["prevent"]),
            onKeydown: [gn(lt(Sl, ["prevent"]), ["enter"]), gn(lt(Sl, ["prevent"]), ["space"])]
          }, [e("input", {
            ref_key: "imageModifyDialogFileInput",
            ref: Ga,
            type: "file",
            accept: "image/*,.jpg,.jpeg,.png,.webp,.heic,.heif",
            class: "image-modify-file-input-hidden",
            onClick: I[73] || (I[73] = lt(() => {}, ["stop"])),
            onChange: In
          }, null, 544), I[243] || (I[243] = e("svg", {
            class: "image-modify-ref-icon",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [e("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2"
          }), e("circle", {
            cx: "8.5",
            cy: "8.5",
            r: "1.5"
          }), e("polyline", {
            points: "21 15 16 10 5 21"
          })], -1)), e("div", zae, [I[242] || (I[242] = e("span", {
            class: "image-modify-ref-dropzone-title"
          }, "点击上传参考风格图", -1)), e("span", Lae, h(_l.value), 1)])], 40, Vae)) : M("", !0)], 2), e("div", Dae, [I[247] || (I[247] = e("div", {
            class: "image-modify-ref-sources-divider"
          }, [e("span", {
            class: "image-modify-ref-sources-divider-text"
          }, "或从已有图片中选择")], -1)), e("div", Mae, [e("button", {
            type: "button",
            class: Pe(["image-modify-ref-source-card", {
              "is-disabled": Ul.value <= 0
            }]),
            disabled: Ul.value <= 0,
            onClick: lt(fe, ["stop"])
          }, [e("div", Bae, [a(Se, null, {
            default: l(() => [a(P(Ps))]),
            _: 1
          })]), e("div", Nae, [I[244] || (I[244] = e("div", {
            class: "image-modify-ref-source-title"
          }, "从素材库", -1)), e("div", Uae, h(ll.value === 1 ? "选 1 张参考图" : `剩余 ${Ul.value} 张可选`), 1)])], 10, Oae), e("button", {
            type: "button",
            class: Pe(["image-modify-ref-source-card", {
              "is-disabled": Ul.value <= 0
            }]),
            disabled: Ul.value <= 0,
            onClick: lt(Gl, ["stop"])
          }, [e("div", jae, [a(Se, null, {
            default: l(() => [a(P(mr))]),
            _: 1
          })]), e("div", qae, [I[245] || (I[245] = e("div", {
            class: "image-modify-ref-source-title"
          }, "从模板库", -1)), e("div", Fae, h(ll.value === 1 ? "整套共用，每张都套" : `剩余 ${Ul.value} 张可选`), 1)])], 10, Rae), e("button", {
            type: "button",
            class: Pe(["image-modify-ref-source-card", {
              "is-disabled": Ul.value <= 0
            }]),
            disabled: Ul.value <= 0,
            onClick: lt(wt, ["stop"])
          }, [e("div", Gae, [a(Se, null, {
            default: l(() => [a(P(ev))]),
            _: 1
          })]), e("div", Jae, [I[246] || (I[246] = e("div", {
            class: "image-modify-ref-source-title"
          }, "从历史风格图", -1)), e("div", Hae, h(An.value.length > 0 ? `共 ${An.value.length} 张可复用` : "暂无记录"), 1)])], 10, Wae)])]), Ka.value.length > 0 ? (c(), v("p", Qae, [g("已选择 " + h(Ka.value.length) + " 张参考图", 1), ll.value > 1 ? (c(), v("span", Kae, " / 最多 " + h(ll.value) + " 张", 1)) : M("", !0), I[248] || (I[248] = g("：原图锁脸；风格/模板图套用到整套每一张，不是只改封面。", -1))])) : (c(), v("p", Yae, "说明：原帖配图负责人物身份（脸必须是原图的人）；这里上传的图是整套视觉模板（配色/背景/字体/版式），封面和内页都要套用，不会用这张图里的脸。" + h(ll.value > 1 ? "多张时各篇可参考不同图。" : ""), 1))])]),
          _: 1
        }), a(rn, null, {
          label: l(() => [e("span", Xae, [I[249] || (I[249] = g(" 产品参考图 ", -1)), e("span", Zae, "（选填）· 最多 " + h(As) + " 张，当前已选 " + h(zt.value.length) + " 张", 1)])]),
          default: l(() => [e("div", ele, [e("div", {
            class: Pe(["image-modify-ref-upload", {
              "has-image": zt.value.length > 0 || !!Nl.value
            }])
          }, [zt.value.length > 0 || Nl.value ? (c(), v("div", tle, [(c(!0), v(Ue, null, gt(zt.value, (mt, Na) => (c(), v("div", {
            key: mt + "-" + Na,
            class: "image-modify-ref-thumb-item"
          }, [a(kc, {
            src: mt,
            fit: "cover",
            class: "image-modify-ref-thumb",
            alt: `产品图${Na+1}`,
            "preview-src-list": zt.value,
            "initial-index": Na,
            "preview-teleported": ""
          }, null, 8, ["src", "alt", "preview-src-list", "initial-index"]), e("button", {
            type: "button",
            class: "image-modify-ref-thumb-remove",
            "aria-label": `移除第 ${Na+1} 张产品图`,
            onClick: lt(ul => co(Na), ["stop"])
          }, [a(Se, null, {
            default: l(() => [a(P(un))]),
            _: 1
          })], 8, ale)]))), 128)), Nl.value ? (c(), v("div", lle, [e("img", {
            src: Nl.value,
            class: "image-modify-ref-thumb-img",
            alt: "上传中"
          }, null, 8, nle), e("div", ole, [(c(), v("svg", ile, [I[250] || (I[250] = e("circle", {
            class: "image-modify-ref-progress-ring-track",
            cx: "18",
            cy: "18",
            r: "16"
          }, null, -1)), e("circle", {
            class: "image-modify-ref-progress-ring-bar",
            cx: "18",
            cy: "18",
            r: "16",
            "stroke-dasharray": `${kn.value},100`
          }, null, 8, sle)])), e("span", rle, h(kn.value) + "%", 1)])])) : M("", !0)])) : M("", !0), zt.value.length < As && !Nl.value ? (c(), v("label", {
            key: 1,
            class: "image-modify-ref-dropzone",
            tabindex: "0",
            onClick: lt(Pn, ["prevent"]),
            onKeydown: [gn(lt(Pn, ["prevent"]), ["enter"]), gn(lt(Pn, ["prevent"]), ["space"])]
          }, [e("input", {
            ref_key: "copyProductFileInput",
            ref: Cn,
            type: "file",
            multiple: "",
            accept: "image/*,.jpg,.jpeg,.png,.webp,.heic,.heif",
            class: "image-modify-file-input-hidden",
            onClick: I[74] || (I[74] = lt(() => {}, ["stop"])),
            onChange: Gn
          }, null, 544), I[252] || (I[252] = e("svg", {
            class: "image-modify-ref-icon",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [e("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2"
          }), e("circle", {
            cx: "8.5",
            cy: "8.5",
            r: "1.5"
          }), e("polyline", {
            points: "21 15 16 10 5 21"
          })], -1)), e("div", cle, [e("span", dle, [I[251] || (I[251] = g("点击上传产品参考图", -1)), zt.value.length ? (c(), v("span", vle, "（还可 " + h(As - zt.value.length) + " 张）", 1)) : M("", !0)]), e("span", {
            class: "image-modify-ref-dropzone-desc"
          }, "最多 " + h(As) + " 张 · 可一次多选 · JPG / PNG / HEIC · 单张 ≤10MB")])], 40, ule)) : M("", !0)], 2), zt.value.length ? (c(), v("p", mle, "已上传 " + h(zt.value.length) + " 张产品参考图（同一件商品的多角度），复刻出来的每张配图里的商品都会对齐为你的这件产品。", 1)) : (c(), v("p", gle, "说明：上传你的产品图（可多张，同一件商品的多角度）作为参考，复刻出来的配图会把画面里的商品换成 / 对齐为你的产品；不影响配图张数，不传则按原帖商品复刻。"))])]),
          _: 1
        })]),
        _: 1
      })])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Lo, {
      modelValue: jl.value,
      "onUpdate:modelValue": I[77] || (I[77] = mt => jl.value = mt),
      title: "内容替换",
      width: y.value ? "92%" : "560px",
      "append-to-body": "",
      class: "content-replace-dialog"
    }, {
      footer: l(() => [a(ra, {
        onClick: I[76] || (I[76] = mt => jl.value = !1)
      }, {
        default: l(() => [...I[259] || (I[259] = [g("取消", -1)])]),
        _: 1
      }), a(ra, {
        type: "primary",
        onClick: fa
      }, {
        default: l(() => [...I[260] || (I[260] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", fle, [a(Se, {
        class: "content-replace-dialog-tip-icon"
      }, {
        default: l(() => [a(P(si))]),
        _: 1
      }), I[256] || (I[256] = e("span", null, "把原文里的指定内容替换成你的内容（例如「长沙」换成「西安」）。默认可不填，可添加多条，数量不限。", -1))]), Xt.value.length === 0 ? (c(), v("div", ple, " 暂无替换规则，点击下方「添加替换」开始添加 ")) : (c(), v("div", yle, [I[257] || (I[257] = e("div", {
        class: "content-replace-list-head"
      }, [e("span", {
        class: "content-replace-head-col"
      }, "原文内容"), e("span", {
        class: "content-replace-head-arrow"
      }), e("span", {
        class: "content-replace-head-col"
      }, "替换为"), e("span", {
        class: "content-replace-head-del"
      })], -1)), (c(!0), v(Ue, null, gt(Xt.value, (mt, Na) => (c(), v("div", {
        key: mt.id,
        class: "content-replace-row"
      }, [a(cl, {
        modelValue: mt.from,
        "onUpdate:modelValue": ul => mt.from = ul,
        placeholder: "原文内容（如：长沙）",
        class: "content-replace-input"
      }, null, 8, ["modelValue", "onUpdate:modelValue"]), a(Se, {
        class: "content-replace-arrow"
      }, {
        default: l(() => [a(P(Wl))]),
        _: 1
      }), a(cl, {
        modelValue: mt.to,
        "onUpdate:modelValue": ul => mt.to = ul,
        placeholder: "替换为（如：西安）",
        class: "content-replace-input"
      }, null, 8, ["modelValue", "onUpdate:modelValue"]), a(ra, {
        link: "",
        type: "danger",
        icon: P(zn),
        class: "content-replace-del",
        onClick: ul => pa(Na)
      }, null, 8, ["icon", "onClick"])]))), 128))])), a(ra, {
        class: "content-replace-add",
        icon: P(Ql),
        onClick: At
      }, {
        default: l(() => [...I[258] || (I[258] = [g("添加替换", -1)])]),
        _: 1
      }, 8, ["icon"])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Lo, {
      modelValue: yl.value,
      "onUpdate:modelValue": I[80] || (I[80] = mt => yl.value = mt),
      title: "从素材库选择参考风格图",
      width: y.value ? "96%" : "960px",
      class: "material-library-dialog image-modify-material-library-dialog",
      "align-center": "",
      "destroy-on-close": "",
      "append-to-body": "",
      onOpened: za
    }, {
      footer: l(() => [e("span", $le, "已选 " + h(On.value.length) + " / 剩余可选 " + h(Ul.value) + " 张", 1), a(ra, {
        onClick: I[79] || (I[79] = mt => yl.value = !1)
      }, {
        default: l(() => [...I[267] || (I[267] = [g("取消", -1)])]),
        _: 1
      }), a(ra, {
        type: "primary",
        disabled: On.value.length === 0,
        onClick: Ta
      }, {
        default: l(() => [...I[268] || (I[268] = [g("确定", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      default: l(() => [Mn.value ? (c(), v("div", hle, [a(Se, {
        class: "is-loading"
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      }), I[261] || (I[261] = e("span", null, "加载中...", -1))])) : vn.value.length === 0 ? (c(), v("div", ble, [I[263] || (I[263] = e("p", null, "暂无素材，请先上传图片到素材库", -1)), a(ra, {
        type: "primary",
        onClick: Ua
      }, {
        default: l(() => [...I[262] || (I[262] = [g("去素材库管理", -1)])]),
        _: 1
      })])) : (c(), v("div", wle, [e("div", _le, [a(ra, {
        type: "primary",
        link: "",
        onClick: Ua
      }, {
        default: l(() => [a(Se, null, {
          default: l(() => [a(P(Ps))]),
          _: 1
        }), I[264] || (I[264] = g(" 进入素材库 ", -1))]),
        _: 1
      }), I[265] || (I[265] = e("span", {
        class: "material-library-toolbar-tip"
      }, "可前往素材库添加更多图片后返回此处选择", -1))]), a(Zr, {
        modelValue: Nn.value,
        "onUpdate:modelValue": I[78] || (I[78] = mt => Nn.value = mt),
        class: "material-library-tabs"
      }, {
        default: l(() => [a(Ji, {
          label: "全部",
          name: "all"
        }), a(Ji, {
          label: "未分组",
          name: "cg:none"
        }), (c(!0), v(Ue, null, gt(zo.value, mt => (c(), ye(Ji, {
          key: mt.id,
          name: `cg:${mt.id}`
        }, {
          label: l(() => [e("span", kle, [e("span", Cle, h(mt.name), 1)])]),
          _: 2
        }, 1032, ["name"]))), 128))]),
        _: 1
      }, 8, ["modelValue"]), e("div", Ale, [ci.value.length === 0 ? (c(), v("div", Ile, [...I[266] || (I[266] = [e("p", null, "该分组下暂无素材", -1)])])) : (c(), v("div", xle, [(c(!0), v(Ue, null, gt(ci.value, mt => (c(), v("div", {
        key: mt.id,
        class: Pe(["material-library-item", {
          selected: ti(mt.url)
        }]),
        onClick: Na => _o(mt)
      }, [e("img", {
        src: mt.url,
        alt: mt.name
      }, null, 8, Ele), ti(mt.url) ? (c(), v("div", Tle, [a(Se, null, {
        default: l(() => [a(P(Zo))]),
        _: 1
      })])) : M("", !0)], 10, Sle))), 128))]))])]))]),
      _: 1
    }, 8, ["modelValue", "width"]), a(xb, {
      modelValue: ja.value,
      "onUpdate:modelValue": I[81] || (I[81] = mt => ja.value = mt),
      "is-mobile": y.value,
      "fixed-type": 1,
      onSelect: fl,
      onPreview: Pl
    }, null, 8, ["modelValue", "is-mobile"]), a(Lo, {
      modelValue: q.value,
      "onUpdate:modelValue": I[83] || (I[83] = mt => q.value = mt),
      title: "从历史风格图选择",
      width: y.value ? "96%" : "960px",
      class: "material-library-dialog image-modify-history-library-dialog",
      "align-center": "",
      "destroy-on-close": "",
      "append-to-body": ""
    }, {
      footer: l(() => [e("span", Rle, "已选 " + h(On.value.length) + " / 剩余可选 " + h(Ul.value) + " 张", 1), a(ra, {
        onClick: I[82] || (I[82] = mt => q.value = !1)
      }, {
        default: l(() => [...I[272] || (I[272] = [g("取消", -1)])]),
        _: 1
      }), a(ra, {
        type: "primary",
        disabled: On.value.length === 0,
        onClick: Ta
      }, {
        default: l(() => [...I[273] || (I[273] = [g("确定", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      default: l(() => [dn.value ? (c(), v("div", Ple, [a(Se, {
        class: "is-loading"
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      }), I[269] || (I[269] = e("span", null, "加载中...", -1))])) : An.value.length === 0 ? (c(), v("div", Vle, [...I[270] || (I[270] = [e("p", null, "暂无历史记录", -1), e("p", {
        class: "material-library-empty-sub"
      }, "使用「参考风格图」生成后，可从这里快速复用", -1)])])) : (c(), v("div", zle, [e("div", Lle, [a(ra, {
        type: "primary",
        link: "",
        loading: dn.value,
        onClick: Tt
      }, {
        default: l(() => [a(Se, null, {
          default: l(() => [a(P(Ar))]),
          _: 1
        }), I[271] || (I[271] = g(" 刷新 ", -1))]),
        _: 1
      }, 8, ["loading"]), e("span", Dle, "共 " + h(An.value.length) + " 张，按最近使用倒序排列", 1)]), e("div", Mle, [e("div", Ole, [(c(!0), v(Ue, null, gt(An.value, mt => (c(), v("div", {
        key: mt.url,
        class: Pe(["material-library-item", {
          selected: ti(mt.url)
        }]),
        onClick: Na => _o({
          url: mt.url
        })
      }, [e("img", {
        src: mt.url,
        alt: "历史风格图",
        loading: "lazy"
      }, null, 8, Nle), ti(mt.url) ? (c(), v("div", Ule, [a(Se, null, {
        default: l(() => [a(P(Zo))]),
        _: 1
      })])) : M("", !0)], 10, Ble))), 128))])])]))]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Lo, {
      modelValue: Pa.value,
      "onUpdate:modelValue": I[86] || (I[86] = mt => Pa.value = mt),
      width: y.value ? "90%" : "600px",
      fullscreen: !1,
      onClose: I[87] || (I[87] = mt => Va.value = 0),
      "align-center": "",
      "append-to-body": "",
      class: "image-preview-dialog"
    }, {
      default: l(() => [X.value.length > 0 ? (c(), v("div", jle, [X.value.length > 1 && !le.value ? (c(), ye(Se, {
        key: 0,
        class: Pe(["preview-arrow", "preview-arrow-left"]),
        onClick: I[84] || (I[84] = lt(mt => vt(), ["stop"]))
      }, {
        default: l(() => [a(P(an))]),
        _: 1
      })) : M("", !0), X.value.length > 1 && !ot.value ? (c(), ye(Se, {
        key: 1,
        class: Pe(["preview-arrow", "preview-arrow-right"]),
        onClick: I[85] || (I[85] = lt(mt => bt(), ["stop"]))
      }, {
        default: l(() => [a(P(Wl))]),
        _: 1
      })) : M("", !0), e("div", {
        class: "preview-image-wrapper",
        onTouchstart: Ba,
        onTouchmove: Qa,
        onTouchend: rl
      }, [X.value[Va.value] ? (c(), v("img", {
        key: 0,
        src: X.value[Va.value],
        alt: `预览图片${Va.value+1}`,
        class: "preview-large-image"
      }, null, 8, qle)) : M("", !0)], 32), X.value.length > 1 ? (c(), v("div", Fle, [e("div", Wle, h(Va.value + 1) + " / " + h(X.value.length), 1)])) : M("", !0)])) : (c(), v("div", Gle, [...I[274] || (I[274] = [e("p", null, "暂无图片", -1)])]))]),
      _: 1
    }, 8, ["modelValue", "width"]), a(mY, {
      modelValue: Ja.value,
      "onUpdate:modelValue": I[88] || (I[88] = mt => Ja.value = mt),
      progress: Fe.value,
      message: Ke.value,
      "is-mobile": y.value,
      success: et.value,
      countdown: Nt.value,
      onViewWorks: wc,
      onContinueCreate: Dv
    }, null, 8, ["modelValue", "progress", "message", "is-mobile", "success", "countdown"]), a(Lo, {
      modelValue: mo.value,
      "onUpdate:modelValue": I[91] || (I[91] = mt => mo.value = mt),
      width: y.value ? "96vw" : "960px",
      title: "批量删除图片",
      "align-center": "",
      "append-to-body": "",
      class: "batch-delete-images-dialog",
      onClose: vi
    }, {
      footer: l(() => {
        var mt, Na;
        return [e("div", ane, [e("div", lne, [a(Tl, {
          "model-value": El.value,
          indeterminate: xn.value,
          onChange: zv
        }, {
          default: l(() => [...I[276] || (I[276] = [g("全选", -1)])]),
          _: 1
        }, 8, ["model-value", "indeterminate"]), e("span", nne, "已选 " + h(Jl.value.length) + " / " + h(((Na = (mt = K.value) == null ? void 0 : mt.images) == null ? void 0 : Na.length) || 0), 1)]), e("div", one, [a(ra, {
          onClick: I[90] || (I[90] = ul => mo.value = !1)
        }, {
          default: l(() => [...I[277] || (I[277] = [g("取消", -1)])]),
          _: 1
        }), a(ra, {
          type: "danger",
          disabled: Jl.value.length === 0,
          onClick: Lv
        }, {
          default: l(() => [g("删除选中（" + h(Jl.value.length) + "）", 1)]),
          _: 1
        }, 8, ["disabled"])])])]
      }),
      default: l(() => {
        var mt;
        return [e("div", Jle, " 勾选要删除的图片，点击下方「删除选中（" + h(Jl.value.length) + "）」即可批量移除。 ", 1), e("div", Hle, [e("div", Qle, [(c(!0), v(Ue, null, gt(((mt = K.value) == null ? void 0 : mt.images) || [], (Na, ul) => (c(), v("div", {
          key: `${ul}-${Na}`,
          class: Pe(["batch-delete-item", {
            "is-selected": Jl.value.includes(ul)
          }]),
          role: "checkbox",
          "aria-checked": Jl.value.includes(ul),
          tabindex: "0",
          onClick: so => Vi(ul, !Jl.value.includes(ul)),
          onKeydown: [gn(lt(so => Vi(ul, !Jl.value.includes(ul)), ["prevent"]), ["space"]), gn(lt(so => Vi(ul, !Jl.value.includes(ul)), ["prevent"]), ["enter"])]
        }, [e("div", Yle, [e("img", {
          src: Na,
          alt: `图片${ul+1}`
        }, null, 8, Xle), e("span", Zle, h(ul + 1), 1), e("button", {
          type: "button",
          class: "batch-delete-zoom-btn",
          title: "查看大图",
          onClick: lt(so => di(ul), ["prevent", "stop"])
        }, [a(Se, null, {
          default: l(() => [a(P(Uu))]),
          _: 1
        })], 8, ene)]), e("div", tne, [a(Tl, {
          "model-value": Jl.value.includes(ul),
          onClick: I[89] || (I[89] = lt(() => {}, ["stop"])),
          onChange: so => Vi(ul, so)
        }, {
          default: l(() => [...I[275] || (I[275] = [g("选择", -1)])]),
          _: 1
        }, 8, ["model-value", "onChange"])])], 42, Kle))), 128))])])]
      }),
      _: 1
    }, 8, ["modelValue", "width"]), a(Lo, {
      modelValue: Pi.value,
      "onUpdate:modelValue": I[94] || (I[94] = mt => Pi.value = mt),
      width: y.value ? "96vw" : "720px",
      title: `图片 ${io.value+1} / ${((zi=(ds=K.value)==null?void 0:ds.images)==null?void 0:zi.length)||0}`,
      "align-center": "",
      "append-to-body": "",
      class: "batch-delete-preview-dialog"
    }, {
      default: l(() => {
        var mt, Na, ul, so, vs, Hi;
        return [e("div", ine, [(((Na = (mt = K.value) == null ? void 0 : mt.images) == null ? void 0 : Na.length) || 0) > 1 ? (c(), v("button", {
          key: 0,
          type: "button",
          class: "batch-delete-preview-nav batch-delete-preview-nav--prev",
          onClick: I[92] || (I[92] = ms => Dt(-1))
        }, [a(Se, null, {
          default: l(() => [a(P(an))]),
          _: 1
        })])) : M("", !0), (so = (ul = K.value) == null ? void 0 : ul.images) != null && so[io.value] ? (c(), v("img", {
          key: 1,
          src: K.value.images[io.value],
          alt: `图片${io.value+1}`
        }, null, 8, sne)) : M("", !0), (((Hi = (vs = K.value) == null ? void 0 : vs.images) == null ? void 0 : Hi.length) || 0) > 1 ? (c(), v("button", {
          key: 2,
          type: "button",
          class: "batch-delete-preview-nav batch-delete-preview-nav--next",
          onClick: I[93] || (I[93] = ms => Dt(1))
        }, [a(Se, null, {
          default: l(() => [a(P(Wl))]),
          _: 1
        })])) : M("", !0)])]
      }),
      _: 1
    }, 8, ["modelValue", "width", "title"])])
  }
}
