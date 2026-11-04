// module: NoteEditor
// extracted from 02-index-8bb27f01.js.js @ 1545081
{
  const o = ln(),
    i = fn(),
    n = p("用户12681635"),
    s = fe => fe === 0 || fe === "0",
    u = fe => fe === -1 || fe === "-1",
    d = fe => !s(fe) && !u(fe) && fe != null && fe !== "" ? String(fe) : "",
    f = p(!1),
    y = p(!1),
    w = p(!1),
    S = p(null),
    z = p(null),
    x = p(0),
    C = p(null),
    V = p(null),
    $ = fe => Array.isArray(fe) && fe.some(q => q === 0 || q === "0"),
    N = p(!1),
    T = p(0),
    R = p(0),
    O = p(!1),
    J = p("custom"),
    ee = p(""),
    ie = p(!1),
    Ae = p(!1),
    F = p(!1),
    Y = p(""),
    ne = p(0);
  let De = null;
  const Q = p(!1),
    re = p(0),
    b = p(-1),
    te = p(!1),
    we = p(-1),
    ae = p(""),
    me = p(!1),
    ce = p(""),
    ue = p(!1),
    U = p(0),
    de = p(2 * Math.PI * 26),
    _e = Le(() => de.value * (1 - U.value / 100)),
    xe = p(!1);

  function Ce() {
    var q;
    const fe = (q = i.params) == null ? void 0 : q.id;
    return fe != null && fe !== "" ? String(fe) : ""
  }

  function Re() {
    const fe = Ce();
    return fe ? `use_material_library_for_last_image_${fe}` : null
  }

  function nt() {
    const fe = Ce();
    return fe ? `material_library_random_group_id_${fe}` : null
  }

  function tt() {
    const fe = Re();
    if (!fe) return !1;
    try {
      const q = localStorage.getItem(fe);
      if (q === "true") return !0;
      if (q === "false") return !1;
      const wt = yt == null ? void 0 : yt();
      return wt ? !!wt.enabled : !1
    } catch {
      return !1
    }
  }

  function qe() {
    const fe = nt();
    if (!fe) return "";
    try {
      const q = localStorage.getItem(fe);
      if (q != null && q !== "") return String(q);
      const wt = yt == null ? void 0 : yt();
      return wt && wt.groupId ? String(wt.groupId) : ""
    } catch {
      return ""
    }
  }
  const Me = p(tt()),
    rt = p(qe());

  function ct() {
    const fe = rt.value;
    return fe != null && String(fe).trim() !== "" ? String(fe).trim() : qe()
  }
  oa(Me, fe => {
    fe || (rt.value = qe())
  });
  const E = p([]),
    _ = p(-1),
    je = p(null),
    K = p(!1);
  oa(() => i.params.id, (fe, q) => {
    String(fe ?? "") !== String(q ?? "") && (Me.value = tt(), rt.value = qe(), Ie.value = it(), _.value = -1, je.value = null)
  });

  function B(fe) {
    if (!Me.value) return !1;
    if (_.value === fe) return !0;
    const q = Ve.value.images || [],
      wt = q.length - 1;
    return fe === wt && wt >= 0 && !!je.value && q[wt] === je.value
  }
  let W = Promise.resolve();

  function Te(fe) {
    return W = W.then(() => fe()).catch(q => {
      console.error("素材库设置队列异常:", q)
    }), W
  }

  function it() {
    try {
      const fe = localStorage.getItem($d);
      return fe === "all" || fe === "current" ? fe : ""
    } catch {
      return ""
    }
  }

  function yt() {
    try {
      const fe = localStorage.getItem(Km);
      if (!fe) return null;
      const q = JSON.parse(fe);
      return !q || typeof q != "object" ? null : {
        enabled: !!q.enabled,
        groupId: q.groupId == null ? "" : String(q.groupId)
      }
    } catch {
      return null
    }
  }

  function st(fe) {
    try {
      fe ? localStorage.setItem(Km, JSON.stringify({
        enabled: !!fe.enabled,
        groupId: fe.groupId == null ? "" : String(fe.groupId)
      })) : localStorage.removeItem(Km)
    } catch {}
  }
  const Ie = p(it());

  function pe(fe) {
    try {
      fe ? localStorage.setItem($d, fe) : localStorage.removeItem($d)
    } catch {}
    try {
      window.dispatchEvent(new CustomEvent(Ym, {
        detail: fe || ""
      }))
    } catch {}
  }
  const Be = fe => {
    const q = fe === "all" || fe === "current" ? fe : "";
    Ie.value !== q && (Ie.value = q, q === "all" ? (st({
      enabled: !!Me.value,
      groupId: ct()
    }), A.success("已为「批量大字报图文」板块设置默认引用方式")) : q === "current" ? (st(null), A.success("已仅对当前作品生效")) : st(null), pe(q))
  };
  oa([Me, rt], () => {
    Ie.value === "all" && st({
      enabled: !!Me.value,
      groupId: ct()
    })
  });

  function xt(fe) {
    if (!fe || fe.key !== $d) return;
    const q = fe.newValue;
    Ie.value = q === "all" || q === "current" ? q : ""
  }

  function Yt(fe) {
    const q = fe == null ? void 0 : fe.detail;
    Ie.value = q === "all" || q === "current" ? q : ""
  }

  function Ye() {
    try {
      const fe = nt();
      if (!fe) return;
      const q = rt.value;
      localStorage.setItem(fe, q === "" || q == null ? "" : String(q))
    } catch (fe) {
      console.error("保存素材库分组偏好失败:", fe)
    }
  }

  function va(fe) {
    return fe == null || fe === "" ? null : `note_material_tail_url_${fe}`
  }

  function Ea(fe, q) {
    if (!q) return;
    const wt = va(fe);
    if (wt) try {
      localStorage.setItem(wt, q), pt(fe)
    } catch {}
  }

  function ft() {
    var Gt, za;
    const fe = ((Gt = Ve.value) == null ? void 0 : Gt.id) ?? ((za = i.params) == null ? void 0 : za.id),
      q = va(fe),
      wt = Z(fe);
    if (q) try {
      localStorage.removeItem(q), wt && localStorage.removeItem(wt)
    } catch {}
  }

  function Z(fe) {
    return fe == null || fe === "" ? null : `note_material_tail_group_${fe}`
  }

  function pt(fe) {
    const q = Z(fe);
    if (!q) return;
    const wt = ct();
    try {
      localStorage.setItem(q, wt === "" || wt == null ? "" : String(wt))
    } catch {}
  }

  function Et() {
    var Ua, Ta;
    if (!Me.value) return !1;
    const fe = Ve.value.images || [];
    if (!fe.length) return !1;
    const q = ((Ua = Ve.value) == null ? void 0 : Ua.id) ?? ((Ta = i.params) == null ? void 0 : Ta.id),
      wt = va(q);
    if (!wt) return !1;
    let Gt = "";
    try {
      Gt = localStorage.getItem(wt) || ""
    } catch {}
    if (!Gt) return !1;
    if (fe[fe.length - 1] === Gt) {
      const ja = ct();
      if (ja !== "" && String(ja).trim() !== "") {
        let sl = "";
        try {
          sl = localStorage.getItem(Z(q)) || ""
        } catch {}
        if (String(sl) !== String(ja)) return !1
      }
      return _.value = fe.length - 1, je.value = Gt, !0
    }
    return !1
  }
  async function Mt() {
    if (he.value) try {
      const fe = await dc();
      if (!Array.isArray(fe)) {
        E.value = [];
        return
      }
      E.value = fe.map(q => ({
        id: (q == null ? void 0 : q.id) ?? (q == null ? void 0 : q.group_id) ?? (q == null ? void 0 : q.groupid),
        name: (q == null ? void 0 : q.name) ?? (q == null ? void 0 : q.group_name) ?? ""
      })).filter(q => q.id != null && q.id !== "")
    } catch (fe) {
      console.warn("加载素材分组失败:", fe), E.value = []
    }
  }
  const Qe = () => Te(async () => {
      K.value = !0;
      try {
        await Da();
        const fe = Re();
        fe && localStorage.setItem(fe, String(Me.value)), await ht(), await Ee()
      } catch (fe) {
        console.error("保存素材库偏好设置失败:", fe), A.error("保存失败：" + ((fe == null ? void 0 : fe.message) || "未知错误"))
      } finally {
        K.value = !1
      }
    }),
    j = () => (rt.value == null && (rt.value = ""), Ye(), Te(async () => {
      K.value = !0;
      try {
        await Da(), Me.value && await ht(), await Ee()
      } catch (fe) {
        console.error("分组变更自动保存失败:", fe), A.error("自动保存失败：" + ((fe == null ? void 0 : fe.message) || "未知错误"))
      } finally {
        K.value = !1
      }
    }));
  async function Ee() {
    var q, wt;
    if (!((q = Ve.value) != null && q.id)) {
      A.warning("作品ID不存在，设置已记在本地");
      return
    }
    const fe = ca();
    await Yu(Ve.value.id, Ve.value.title, Ve.value.content, fe), Ve.value.updatedAt = new Date().toISOString(), A.success("已为您自动保存"), Me.value && ((wt = Ve.value.images) != null && wt.length) && Ea(Ve.value.id, Ve.value.images[Ve.value.images.length - 1])
  }
  const ht = async () => {
    var fe;
    if (Ve.value.images || (Ve.value.images = []), Me.value) {
      const q = await jt();
      if (!Me.value) return;
      if (q) {
        const wt = Ve.value.images,
          Gt = wt.length - 1,
          za = _.value,
          Ua = je.value,
          Ta = za >= 0 && za === Gt || Gt >= 0 && Ua && wt[Gt] === Ua;
        wt.length === 0 ? (wt.push(q), _.value = 0, je.value = q) : Ta ? (wt[Gt] = q, _.value = Gt, je.value = q) : za >= 0 && za <= Gt ? (wt.splice(za, 1), wt.push(q), _.value = wt.length - 1, je.value = q) : (wt.push(q), _.value = wt.length - 1, je.value = q), Ea((fe = Ve.value) == null ? void 0 : fe.id, je.value)
      } else {
        if (!Me.value) return;
        A.warning('素材库中没有可引用的图片，请先上传并勾选"允许作品图结尾引用"'), Me.value = !1;
        try {
          const wt = Re();
          wt && localStorage.setItem(wt, "false")
        } catch {}
        _.value >= 0 && _.value < Ve.value.images.length && Ve.value.images.splice(_.value, 1), _.value = -1, je.value = null, ft()
      }
    } else {
      ft();
      const q = Ve.value.images,
        wt = _.value,
        Gt = q.length - 1,
        za = je.value;
      je.value = null, wt >= 0 && wt < q.length ? q.splice(wt, 1) : Gt >= 0 && za && q[Gt] === za && q.splice(Gt, 1), _.value = -1
    }
  }, jt = async () => {
    try {
      const fe = ct(),
        q = {};
      if (fe !== "" && String(fe).trim() !== "") {
        const Gt = String(fe).trim(),
          za = Number(Gt);
        q.groupid = Number.isFinite(za) && String(za) === Gt ? za : Gt
      }
      const wt = await i0(q);
      return wt && wt.url && wt.is_use === 0 ? wt.url : null
    } catch (fe) {
      return console.error("获取随机素材失败:", fe), null
    }
  }, ca = () => Me.value ? !Ve.value.images || Ve.value.images.length === 0 ? [...Ve.value.images] : [...Ve.value.images] : [...Ve.value.images], be = p({}), he = p(!!localStorage.getItem("authToken")), kt = () => String(Ve.value.id || Ve.value.globalId || ""), Bt = {
    humanFeatures: 97,
    suspectedAI: 3
  }, Ze = fe => Bt, Wt = p({
    ...Bt
  }), aa = Le(() => Wt.value.humanFeatures), xa = Le(() => Wt.value.suspectedAI), Kt = fe => {
    const q = kt();
    if (!q) return !1;
    try {
      const Gt = JSON.parse(localStorage.getItem(Xm) || "{}")[q] || {};
      return fe === "title" ? (Gt.rewriteTitleCount || 0) < 1 : fe === "content" ? (Gt.rewriteContentCount || 0) < 1 : !1
    } catch (wt) {
      return console.error("检查限免使用失败:", wt), !1
    }
  }, at = fe => {
    const q = kt();
    if (q) try {
      const wt = JSON.parse(localStorage.getItem(Xm) || "{}");
      wt[q] || (wt[q] = {}), fe === "title" ? wt[q].rewriteTitleCount = (wt[q].rewriteTitleCount || 0) + 1 : fe === "content" && (wt[q].rewriteContentCount = (wt[q].rewriteContentCount || 0) + 1), localStorage.setItem(Xm, JSON.stringify(wt))
    } catch (wt) {
      console.error("记录使用次数失败:", wt)
    }
  }, Fe = p(0), Ke = p(0), et = p(!1), Nt = p(""), Ut = p(!1), Ge = p(!1), dt = p(!1), qt = p([{
    id: "edge",
    name: "Edge浏览器",
    logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_edge-browser.3bf78fcf093a.png"
  }, {
    id: "360safe",
    name: "360安全",
    logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_360-anquan-browser.8530966b0bab.png"
  }, {
    id: "360jisu",
    name: "360极速",
    logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_360-jisu-browser.c4116862c5f8.png"
  }, {
    id: "chrome",
    name: "Chrome",
    logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_chrome-browser.6dc5e59383e0.png"
  }]), ka = p(null), Ne = p("douyin"), ga = p(!1), St = () => {
    const fe = navigator.userAgent || navigator.vendor || window.opera || "",
      q = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|Mobile|mobile/i.test(fe),
      wt = window.innerWidth <= 768,
      Gt = "ontouchstart" in window || navigator.maxTouchPoints > 0,
      za = /Windows|Macintosh|Linux|X11/i.test(fe) && !q;
    w.value = q || wt && (Gt || !za)
  }, Oe = fe => {
    if (Ne.value === "douyin") {
      const q = "https://creator.douyin.com/publish",
        wt = new URLSearchParams({
          workId: String(fe.id || ""),
          title: encodeURIComponent(fe.title || ""),
          cover: encodeURIComponent(fe.images && fe.images[0] || fe.cover || "")
        });
      return `${q}?${wt.toString()}`
    } else {
      const q = "https://xiaohongshu.com/publish",
        wt = new URLSearchParams({
          workId: String(fe.id || ""),
          title: encodeURIComponent(fe.title || ""),
          cover: encodeURIComponent(fe.images && fe.images[0] || fe.cover || "")
        });
      return `${q}?${wt.toString()}`
    }
  }, Ve = p({
    id: null,
    title: "",
    content: "",
    images: [],
    tags: [],
    source: "",
    createdAt: "",
    updatedAt: null,
    published: !1,
    publishedAt: null,
    initialImageCount: 0,
    templateInfo: {
      title: "3招拿捏人性,没有卖不出去的饰品!",
      category: "女装饰品"
    }
  });
  oa(() => Ve.value.id, fe => {
    fe && (String(fe || Ve.value.globalId || ""), Wt.value = Ze())
  }, {
    immediate: !0
  }), oa(() => Ve.value.images, (fe, q) => {
    Me.value && _.value >= 0 && _.value >= fe.length && (_.value = -1)
  }, {
    deep: !0
  });
  const Ma = fe => {
      if (fe == null || typeof fe != "string") return null;
      try {
        return JSON.parse(fe)
      } catch {
        return null
      }
    },
    Je = () => {
      De && (clearInterval(De), De = null), ne.value = 0, Y.value = "", F.value = !1
    },
    ve = fe => {
      Y.value = fe || "生成中", ne.value = 0, F.value = !0, De && (clearInterval(De), De = null);
      const q = Date.now();
      De = setInterval(() => {
        const wt = Date.now() - q,
          Gt = Math.min(1, wt / sge),
          za = Math.min(99, Math.floor(Gt * 99));
        ne.value = za
      }, 120)
    },
    $t = () => {
      De && (clearInterval(De), De = null), ne.value = 100, window.setTimeout(() => {
        F.value = !1, ne.value = 0, Y.value = ""
      }, 550)
    },
    ta = fe => {
      if (fe == null) return "";
      if (typeof fe == "string") return fe.trim();
      if (typeof fe == "number" || typeof fe == "boolean") return String(fe);
      try {
        return JSON.stringify(fe, null, 2)
      } catch {
        return String(fe)
      }
    },
    ha = fe => {
      const q = fe || {},
        Gt = ((...Ua) => {
          for (const Ta of Ua) {
            const ja = q == null ? void 0 : q[Ta];
            if (typeof ja == "string" && ja.trim()) return ja.trim();
            if (typeof ja == "number" || typeof ja == "boolean") return String(ja);
            if (typeof ja == "object") {
              const sl = ta(ja);
              if (sl) return sl
            }
          }
          return ""
        })("title_old", "prompt", "content_prompt", "desc_prompt", "work_prompt", "prompt_text", "outline", "outline_text");
      if (Gt) return Gt;
      const za = (q == null ? void 0 : q.diy) ?? (q == null ? void 0 : q.diyInfo);
      if (za) {
        const Ua = typeof za == "string" ? Ma(za) ?? null : za,
          Ta = Ua && typeof Ua == "object" ? Ua : null;
        if (Ta) {
          const ja = (() => {
            const Gl = ["title_old", "prompt", "content_prompt", "desc_prompt", "work_prompt", "prompt_text"];
            for (const fl of Gl) {
              const Pl = Ta == null ? void 0 : Ta[fl];
              if (typeof Pl == "string" && Pl.trim()) return Pl.trim();
              if (typeof Pl == "number" || typeof Pl == "boolean") return String(Pl)
            }
            return ""
          })();
          if (ja.trim()) return ja;
          const sl = ta(Ta);
          if (sl) return sl
        } else {
          const ja = ta(za);
          if (ja) return ja
        }
      }
      return ""
    },
    Qt = fe => {
      const q = fe.images || [];
      Ve.value = {
        id: fe.id,
        type: fe.type,
        title: fe.title || "",
        content: fe.desc || fe.title || "请输入图文内容...",
        images: q,
        tags: [],
        source: "yijuhua",
        createdAt: fe.createtime ? new Date(fe.createtime * 1e3).toISOString() : new Date().toISOString(),
        updatedAt: fe.updatetime ? new Date(fe.updatetime * 1e3).toISOString() : null,
        published: fe.is_release === 1,
        publishedAt: fe.is_release === 1 && fe.updatetime ? new Date(fe.updatetime * 1e3).toISOString() : null,
        initialImageCount: q.length,
        templateInfo: {
          title: fe.title || "",
          category: ""
        }
      }, ce.value = ha(fe)
    },
    ba = p(!1),
    Ja = Le(() => {
      var fe;
      return (((fe = Ve.value) == null ? void 0 : fe.images) || [])[we.value] || ""
    }),
    ml = () => {
      var q;
      const fe = we.value;
      fe >= 0 && ((q = Ve.value) != null && q.images) && Ve.value.images[fe] !== void 0 && (Ve.value.images[fe] = 0), $e(), we.value = -1
    },
    $e = () => {
      var q;
      if (!$(Ve.value.images)) return;
      const fe = ((q = Ve.value) == null ? void 0 : q.id) ?? i.params.id;
      fe && (V.value || (V.value = setInterval(async () => {
        var Gt;
        const wt = ((Gt = Ve.value) == null ? void 0 : Gt.id) ?? fe;
        if (wt) try {
          const za = await Ms(Number(wt));
          za && (Qt(za), Me.value && (await Da(), Et() || ht()), $(Ve.value.images) || V.value && (clearInterval(V.value), V.value = null))
        } catch (za) {
          console.warn("轮询作品详情失败:", za)
        }
      }, ige)))
    },
    We = async () => {
      try {
        const fe = i.params.id;
        if (!fe) {
          A.error("作品ID不存在"), o.push("/works");
          return
        }
        try {
          const wt = await Ms(Number(fe));
          if (wt) {
            const Gt = wt.images || [];
            Qt(wt), Me.value && (await Da(), Et() || ht()), $e();
            return
          }
        } catch (wt) {
          console.warn("从API获取作品失败，尝试从本地加载:", wt)
        }
        null || (A.error("作品不存在"), o.push("/works"))
      } catch (fe) {
        console.error("Failed to load work:", fe), A.error("加载作品失败"), o.push("/works")
      }
    }, ze = () => {
      if (xe.value) {
        A.warning("图片上传中，请稍候");
        return
      }
      S.value && S.value.click()
    }, H = async fe => {
      const q = fe.target.files;
      if (!q || q.length === 0) return;
      const wt = 20;
      Array.isArray(Ve.value.images) || (Ve.value.images = []);
      const Gt = wt - Ve.value.images.length;
      if (Gt <= 0) {
        A.warning(`最多只能上传${wt}张图片`), S.value && (S.value.value = "");
        return
      }
      const za = Array.from(q),
        Ua = za.slice(0, Gt);
      za.length > Ua.length && A.warning(`最多只能上传${wt}张图片，已为您保留前${Gt}张`);
      let Ta = 0;
      const ja = [];
      xe.value = !0;
      try {
        for (const sl of Ua) {
          if (!sl.type.startsWith("image/")) {
            ja.push(`${sl.name}（文件类型不支持）`);
            continue
          }
          let Gl = sl;
          if (Yo(sl)) try {
            Gl = await _i(sl), A.info("HEIC 格式已转换为 JPEG")
          } catch (fl) {
            console.error("HEIC 处理失败:", fl), ja.push(`${sl.name}（${fl.message||"HEIC 格式暂不支持"}）`);
            continue
          }
          try {
            const fl = await ao(Gl);
            (Array.isArray(fl) ? fl : Array.isArray(fl == null ? void 0 : fl.data) ? fl.data : [(fl == null ? void 0 : fl.data) || (fl == null ? void 0 : fl.url) || fl]).forEach(on => {
              on && Ve.value.images.length < wt && (Ve.value.images.push(on), Ta += 1)
            })
          } catch (fl) {
            console.error("图片上传失败:", fl), ja.push(`${sl.name}（上传失败）`)
          }
        }
        Ta > 0 && A.success(`成功上传 ${Ta} 张图片`), ja.length > 0 && A.warning(`部分图片未能上传：${ja.join("、")}`)
      } finally {
        xe.value = !1, S.value && (S.value.value = "")
      }
    }, Lt = fe => {
      if (fe <= 0) return;
      const q = [...Ve.value.images],
        wt = q[fe];
      q[fe] = q[fe - 1], q[fe - 1] = wt, Ve.value.images = q, A.success("图片已向左移动")
    }, Ft = fe => {
      if (fe >= Ve.value.images.length - 1) return;
      const q = [...Ve.value.images],
        wt = q[fe];
      q[fe] = q[fe + 1], q[fe + 1] = wt, Ve.value.images = q, A.success("图片已向右移动")
    }, Rt = async fe => {
      try {
        await La.confirm("确定要删除这张图片吗？", "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }), fe === _.value ? (Me.value = !1, Qe()) : fe < _.value && _.value--, Ve.value.images.splice(fe, 1), A.success("图片已删除")
      } catch {}
    }, Ot = p(-1), Xt = p(!1), At = (fe, q) => {
      Ot.value = fe, Xt.value = !0, q.dataTransfer.effectAllowed = "move", q.dataTransfer.setData("text/html", q.target.outerHTML);
      const wt = q.target.classList.contains("image-item") || q.target.classList.contains("image-card") ? q.target : q.target.closest(".image-item") || q.target.closest(".image-card");
      wt && (wt.style.opacity = "0.5", wt.classList.add("dragging"))
    }, pa = fe => {
      fe.preventDefault(), fe.dataTransfer.dropEffect = "move"
    }, Oa = (fe, q) => {
      if (q.preventDefault(), Ot.value === -1 || Ot.value === fe) return;
      const wt = [...Ve.value.images],
        [Gt] = wt.splice(Ot.value, 1);
      wt.splice(fe, 0, Gt), Ve.value.images = wt, _.value === Ot.value ? _.value = fe : Ot.value < _.value && fe >= _.value ? _.value-- : Ot.value > _.value && fe <= _.value && _.value++, Ot.value = -1
    }, Fa = fe => {
      Xt.value = !1;
      const q = fe.target.classList.contains("image-item") || fe.target.classList.contains("image-card") ? fe.target : fe.target.closest(".image-item") || fe.target.closest(".image-card");
      q && (q.style.opacity = "1", q.classList.remove("dragging")), Ot.value = -1
    }, gl = fe => {
      C.value && (N.value = !0, T.value = fe.pageX - C.value.offsetLeft, R.value = C.value.scrollLeft, C.value.style.cursor = "grabbing")
    }, jl = fe => {
      if (!N.value || !C.value) return;
      fe.preventDefault();
      const wt = (fe.pageX - C.value.offsetLeft - T.value) * 2;
      C.value.scrollLeft = R.value - wt
    }, en = () => {
      C.value && (N.value = !1, C.value.style.cursor = "grab")
    }, fa = fe => {
      if (!C.value) return;
      const q = 190,
        wt = C.value.scrollLeft,
        Gt = fe === "left" ? wt - q : wt + q;
      C.value.scrollTo({
        left: Gt,
        behavior: "smooth"
      })
    }, Ka = async () => {
      try {
        if (!Ve.value.id) {
          A.error("作品ID不存在");
          return
        }
        const fe = await ca();
        await Yu(Ve.value.id, Ve.value.title, Ve.value.content, fe), Ve.value.updatedAt = new Date().toISOString(), A.success("保存成功")
      } catch (fe) {
        console.error("Failed to save work:", fe), A.error("保存失败：" + (fe.message || "未知错误"))
      }
    }, Dl = Le(() => {
      if (!Ve.value.images || Ve.value.images.length === 0) return 0;
      const fe = Ve.value.images.length,
        q = Ve.value.initialImageCount || 0;
      return Math.max(0, fe - q)
    }), tn = Le(() => {
      if (!Ve.value.images || Ve.value.images.length === 0) return 0;
      const fe = Ve.value.initialImageCount || 0,
        q = Ve.value.images.length;
      return Dl.value > 0 || q >= fe ? Math.max(0, fe - 1) : Math.max(0, q - 1)
    }), zt = () => {
      const fe = i.params.id || Ve.value.id;
      if (!fe) {
        A.error("作品ID不存在");
        return
      }
      o.push({
        path: `/notediy/${fe}`,
        query: {
          from: "note"
        }
      })
    }, dl = async () => {
      if (!Ve.value.images || Ve.value.images.length === 0) {
        A.warning("没有图片可下载");
        return
      }
      try {
        await La.confirm(`确定要下载所有图片吗？共${Ve.value.images.length}张图片。`, "下载确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "info"
        }), A.info("正在下载图片，请稍候...");
        const fe = new Mr,
          q = Ve.value.images.map(async (Pl, on) => {
            try {
              const vo = await fetch(Pl, {
                method: "GET",
                mode: "cors",
                cache: "no-cache"
              });
              if (!vo.ok) throw new Error(`HTTP error! status: ${vo.status}`);
              const hn = await vo.blob(),
                oo = on === 0 ? "封面图1.jpg" : `内容图${on}.jpg`;
              fe.file(oo, hn)
            } catch (vo) {
              console.error(`下载图片${on}失败:`, vo);
              try {
                const hn = await new Promise((ko, Un) => {
                    const Rn = new XMLHttpRequest;
                    Rn.open("GET", Pl, !0), Rn.responseType = "blob", Rn.onload = () => {
                      Rn.status === 200 ? ko(Rn.response) : Un(new Error(`XMLHttpRequest failed with status: ${Rn.status}`))
                    }, Rn.onerror = () => Un(new Error("XMLHttpRequest failed")), Rn.send()
                  }),
                  oo = on === 0 ? "封面图1.jpg" : `内容图${on}.jpg`;
                fe.file(oo, hn)
              } catch (hn) {
                throw console.error(`使用 XMLHttpRequest 下载图片${on}也失败:`, hn), new Error(`下载图片${on}失败: ${vo.message||vo}`)
              }
            }
          }),
          wt = await Promise.allSettled(q),
          Gt = wt.filter(Pl => Pl.status === "rejected");
        if (Gt.length > 0) {
          if (console.warn(`有 ${Gt.length} 张图片下载失败:`, Gt), Gt.length === wt.length) throw new Error("所有图片下载失败，请检查网络连接或图片链接");
          A.warning(`有 ${Gt.length} 张图片下载失败，将继续下载其他图片`)
        }
        const za = await fe.generateAsync({
            type: "blob"
          }),
          Ua = document.createElement("a"),
          Ta = new Date,
          ja = `${Ta.getFullYear()}${String(Ta.getMonth()+1).padStart(2,"0")}${String(Ta.getDate()).padStart(2,"0")}${String(Ta.getHours()).padStart(2,"0")}${String(Ta.getMinutes()).padStart(2,"0")}${String(Ta.getSeconds()).padStart(2,"0")}`,
          fl = `${(Ve.value.title||"未命名图文").replace(/[<>:"/\\|?*]/g,"_").trim()}_${ja}.zip`;
        Ua.href = URL.createObjectURL(za), Ua.download = fl, Ua.click(), URL.revokeObjectURL(Ua.href), A.success("图片下载成功！")
      } catch (fe) {
        if (fe === "cancel") return;
        console.error("下载失败:", fe);
        const q = (fe == null ? void 0 : fe.message) || (fe == null ? void 0 : fe.toString()) || "未知错误";
        A.error("下载失败：" + q)
      }
    }, Nl = fe => {
      re.value = fe, Q.value = !0, w.value || document.addEventListener("keydown", kn)
    }, kn = fe => {
      Q.value && (fe.key === "ArrowLeft" ? (fe.preventDefault(), Cn.value || Ul()) : fe.key === "ArrowRight" ? (fe.preventDefault(), ll.value || _l()) : fe.key === "Escape" && (fe.preventDefault(), Q.value = !1))
    };
  oa(Q, fe => {
    !fe && !w.value && document.removeEventListener("keydown", kn)
  });
  const Cn = Le(() => re.value === 0),
    ll = Le(() => Ve.value.images && Ve.value.images.length > 0 && re.value === Ve.value.images.length - 1),
    Ul = () => {
      Ve.value.images && Ve.value.images.length > 0 && re.value > 0 && (re.value = re.value - 1)
    },
    _l = () => {
      Ve.value.images && Ve.value.images.length > 0 && re.value < Ve.value.images.length - 1 && (re.value = re.value + 1)
    };
  let Tn = null;
  const Dn = fe => {
      w.value || !Ve.value.images || Ve.value.images.length <= 1 || (fe.preventDefault(), fe.stopPropagation(), Tn && clearTimeout(Tn), Tn = setTimeout(() => {
        fe.deltaY > 0 ? ll.value || _l() : fe.deltaY < 0 && (Cn.value || Ul())
      }, 100))
    },
    An = fe => {
      Fe.value = fe.touches[0].clientX
    },
    dn = fe => {
      Ke.value = fe.changedTouches[0].clientX, $n()
    },
    $n = () => {
      const fe = Fe.value - Ke.value;
      Math.abs(fe) > rge && (fe > 0 ? ll.value || _l() : Cn.value || Ul())
    },
    Xe = fe => {
      if (!fe) return 0;
      try {
        return parseInt(localStorage.getItem(Iy + fe) || "0", 10) || 0
      } catch {
        return 0
      }
    },
    se = (fe, q) => {
      if (fe) try {
        localStorage.setItem(Iy + fe, String(q))
      } catch (wt) {
        console.warn("记录AI封面免费次数失败", wt)
      }
    },
    Tt = fe => fe ? typeof fe == "string" ? fe : Array.isArray(fe) ? fe[0] || "" : fe.url || fe.imageUrl || fe.image || fe.images && fe.images[0] || "" : "",
    Ht = async fe => {
      var wt, Gt, za;
      const q = (wt = Ve.value) == null ? void 0 : wt.id;
      if (!q) {
        A.error("作品ID不存在，无法重试");
        return
      }
      if (fe === 0) {
        const Ua = Xe(q);
        if (Ua >= Ay) {
          A.warning(`本作品免费更换次数已用完（共${Ay}次），不再支持更换。`);
          return
        }
        const Ta = ((Gt = Ve.value) == null ? void 0 : Gt.title) || "";
        if (!Ta) {
          A.warning("请先填写标题");
          return
        }
        Ve.value.images && Ve.value.images[0] !== void 0 && (Ve.value.images[0] = 0), b.value = 0, ue.value = !0;
        try {
          const ja = await bv(Ta),
            sl = Tt(ja);
          if (!sl) throw new Error("生成失败，未返回封面图片");
          Ve.value.images && Ve.value.images[0] !== void 0 && (Ve.value.images[0] = sl), se(q, Ua + 1), A.success("封面更换成功")
        } catch (ja) {
          console.error("AI更换封面失败:", ja), A.error((ja == null ? void 0 : ja.message) || ((za = ja == null ? void 0 : ja.response) == null ? void 0 : za.msg) || "更换封面失败，请重试"), Ve.value.images && Ve.value.images[0] !== void 0 && (Ve.value.images[0] = -1)
        } finally {
          ue.value = !1, b.value = -1
        }
        return
      }
      A.warning("图片重试功能已下线，暂不支持重试生成")
    }, Pa = () => {
      te.value = !1, we.value = -1, ae.value = ""
    }, Va = async () => {
      var za, Ua;
      const fe = we.value,
        q = (za = Ve.value) == null ? void 0 : za.id;
      if (fe < 0 || !q) {
        te.value = !1;
        return
      }
      te.value = !1;
      const Gt = (((Ua = Ve.value) == null ? void 0 : Ua.images) || [])[fe];
      try {
        if (!Gt || s(Gt) || u(Gt)) throw new Error("当前图片不可编辑，请稍后重试");
        ue.value = !0, b.value = fe, await pv({
          id: q,
          image_prompt: ae.value,
          image_index: fe,
          image_url: Gt
        }), A.success("已提交修改，图片将重新生成"), Ve.value.images && Ve.value.images[fe] !== void 0 && (Ve.value.images[fe] = 0), $e()
      } catch (Ta) {
        console.error("修改图片失败:", Ta), A.error((Ta == null ? void 0 : Ta.message) || "修改图片失败，请稍后重试")
      } finally {
        ue.value = !1, b.value = -1, we.value = -1, ae.value = ""
      }
    }, X = () => {
      var q;
      const fe = re.value;
      !((q = Ve.value) != null && q.images) || Ve.value.images[fe] === void 0 || (Q.value = !1, we.value = fe, ae.value = "", ba.value = !0)
    }, le = async fe => {
      try {
        await La.confirm("如替换后则无法恢复到原图，请您考虑好，建议先下载保存再来替换。", "替换提醒", {
          confirmButtonText: "确定替换",
          cancelButtonText: "取消",
          type: "warning"
        })
      } catch {
        return
      }
      x.value = fe, z.value && z.value.click()
    }, ot = async fe => {
      const q = fe.target.files;
      if (!q || q.length === 0) {
        z.value && (z.value.value = "");
        return
      }
      const wt = q[0];
      if (!wt.type.startsWith("image/")) {
        A.error("请选择图片文件"), z.value && (z.value.value = "");
        return
      }
      try {
        xe.value = !0, A.info("正在上传图片...");
        const Gt = await ao(wt),
          Ua = (Array.isArray(Gt) ? Gt : Array.isArray(Gt == null ? void 0 : Gt.data) ? Gt.data : [(Gt == null ? void 0 : Gt.data) || (Gt == null ? void 0 : Gt.url) || Gt])[0] || "";
        if (!Ua) throw new Error("上传失败，未返回图片URL");
        const Ta = x.value;
        if (Ve.value.images && Ve.value.images[Ta] !== void 0) Ve.value.images[Ta] = Ua;
        else throw new Error("图片索引无效");
        await Ka(), A.success(Ta === 0 ? "封面更换成功" : "图片替换成功"), Q.value = !1
      } catch (Gt) {
        console.error("本地替换图片失败:", Gt), A.error("替换图片失败，请重试")
      } finally {
        xe.value = !1, z.value && (z.value.value = "")
      }
    }, vt = () => {
      try {
        Ve.value.published = !0, Ve.value.publishedAt = new Date().toISOString()
      } catch (fe) {
        console.error("标记作品为已发布失败:", fe)
      }
    }, bt = async () => {
      et.value = !1, await We()
    }, Jt = async () => {
      try {
        Ve.value.published ? await La.confirm(`作品"${Ve.value.title||"未命名"}"已标记发布，是否重新跳转发布？`, "重新发布", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "info"
        }) : await Tp();
        const fe = await ca(),
          q = [...Ve.value.images];
        Ve.value.images = fe;
        const wt = Ve.value.id || Ve.value.globalId;
        if (!wt) {
          A.error("作品ID不存在，无法发布");
          return
        }
        try {
          await wv(wt);
          const Gt = Oe(Ve.value);
          Ve.value.images = q;
          const za = navigator.userAgent || navigator.vendor || window.opera || "",
            Ua = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|Mobile|mobile/i.test(za),
            Ta = window.innerWidth <= 768,
            ja = "ontouchstart" in window || navigator.maxTouchPoints > 0,
            sl = /Windows|Macintosh|Linux|X11/i.test(za) && !Ua;
          if (Ua || Ta && (ja || !sl)) {
            vt();
            const fl = `/tiaozhuan?workId=${wt}`;
            window.location.href = fl
          } else {
            vt();
            const fl = `${window.location.origin}/tiaozhuan?workId=${wt}`;
            if (Nt.value = fl, et.value = !0, await Da(), ka.value) try {
              await Ln.toCanvas(ka.value, fl, {
                width: 280,
                margin: 2
              })
            } catch (Pl) {
              console.error("生成二维码失败", Pl), A.error("生成二维码失败")
            }
          }
        } catch (Gt) {
          console.error("发布失败:", Gt), A.error((Gt == null ? void 0 : Gt.message) || "发布失败，请稍后重试")
        }
      } catch {}
    }, Ra = () => {
      const fe = document.documentElement.getAttribute("data-huotu-extension") === "installed",
        q = document.querySelector('meta[name="huotu-extension"]') !== null;
      return fe || q
    }, Ca = fe => {
      if (!fe || typeof fe != "string") return fe;
      const q = /#([^#\s\n\r]+)/g;
      let wt;
      const Gt = [];
      for (;
        (wt = q.exec(fe)) !== null;) Gt.push({
        fullMatch: wt[0],
        index: wt.index,
        length: wt[0].length
      });
      if (Gt.length <= 5) return fe;
      const za = Gt.slice(5);
      let Ua = fe;
      for (let Ta = za.length - 1; Ta >= 0; Ta--) {
        const ja = za[Ta],
          sl = Ua.substring(0, ja.index),
          Gl = Ua.substring(ja.index + ja.length),
          fl = sl.replace(/\s+$/, ""),
          Pl = Gl.replace(/^\s+/, "");
        Ua = fl + Pl
      }
      return Ua
    }, Ba = async () => {
      if (!ga.value)
        if (Ra()) {
          ga.value = !0;
          try {
            const fe = await ca(),
              q = Array.isArray(fe) ? fe.filter(Ua => Ua !== 0 && Ua !== -1 && Ua).map(Ua => String(Ua)) : [],
              wt = Ne.value === "douyin" ? "DOUYIN_PUBLISH" : "XHS_PUBLISH";
            let Gt = String(Ve.value.content || "");
            Ne.value === "douyin" && (Gt = Ca(Gt));
            const za = {
              type: wt,
              payload: {
                title: String(Ve.value.title || "我的标题"),
                content: Gt,
                images: q
              }
            };
            window.postMessage(za, "*"), A.success("已提交发布")
          } catch (fe) {
            console.error("发布失败:", fe), A.error("发布失败，请检查数据格式"), ga.value = !1
          }
        } else Ge.value = !0
    }, Qa = () => {
      Ut.value = !1, Ge.value = !0
    }, rl = () => {
      const fe = "https://api.aichaoer.cn/plug/%E7%81%AB%E5%85%94%E5%B7%A5%E5%85%B7%E7%AE%B1%E5%8F%91%E5%B8%83%E5%8A%A9%E6%89%8B1.0.1.zip";
      window.open(fe, "_blank")
    }, sa = () => {
      dt.value = !0
    }, Ga = () => {
      Ge.value = !1
    }, ol = async () => {
      try {
        await navigator.clipboard.writeText(Ve.value.title), A.success("标题已复制")
      } catch {
        A.error("复制失败")
      }
    }, Sl = () => {
      vn()
    }, In = async () => {
      try {
        await navigator.clipboard.writeText(Ve.value.content), A.success("内容已复制")
      } catch {
        A.error("复制失败")
      }
    }, wo = () => {
      me.value = !0
    }, nn = async () => {
      const fe = ce.value ? String(ce.value) : "";
      if (!fe.trim()) {
        A.warning("暂无可复制的提示词");
        return
      }
      try {
        await navigator.clipboard.writeText(fe), A.success("提示词已复制")
      } catch {
        A.error("复制失败")
      }
    }, Pn = () => {
      Nn()
    }, Gn = () => {
      window.history.length > 1 ? o.back() : o.push("/works")
    }, co = () => {
      const fe = Ve.value.id || Ve.value.globalId;
      if (!fe) {
        A.error("作品ID不存在，无法预览");
        return
      }
      o.push(`/tiaozhuan?workId=${fe}`)
    }, Pt = () => Xl, yl = () => n.value || "用户", Mn = () => {
      if (Ve.value.updatedAt) {
        const za = new Date(Ve.value.updatedAt),
          Ua = za.getFullYear(),
          Ta = String(za.getMonth() + 1).padStart(2, "0"),
          ja = String(za.getDate()).padStart(2, "0");
        return `${Ua}-${Ta}-${ja}`
      }
      if (Ve.value.createdAt) {
        const za = new Date(Ve.value.createdAt),
          Ua = za.getFullYear(),
          Ta = String(za.getMonth() + 1).padStart(2, "0"),
          ja = String(za.getDate()).padStart(2, "0");
        return `${Ua}-${Ta}-${ja}`
      }
      const fe = new Date,
        q = fe.getFullYear(),
        wt = String(fe.getMonth() + 1).padStart(2, "0"),
        Gt = String(fe.getDate()).padStart(2, "0");
      return `${q}-${wt}-${Gt}`
    }, vn = async () => {
      var fe, q;
      try {
        let wt = !1;
        if (!kt()) {
          A.error("图文ID不存在，无法使用AI重写标题");
          return
        }
        const za = Kt("title");
        za ? await La.confirm("确定要使用AI重写标题吗？首次免费使用，系统将根据当前内容重新生成标题", "确认重写", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "info"
        }) : (await _o(), await La.confirm("确定要使用AI重写标题吗？将消耗1个点数，系统将根据当前内容重新生成标题", "确认重写", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })), ie.value = !0, ve("正在重写标题");
        const Ua = Ve.value.title || "",
          Ta = Ve.value.content || "",
          ja = ((fe = Ve.value) == null ? void 0 : fe.id) || ((q = Ve.value) == null ? void 0 : q.globalId) || "",
          sl = await yv(Ua, Ta, ja),
          Gl = (sl == null ? void 0 : sl.title) || "";
        if (!Gl) throw new Error("生成失败，未返回新标题");
        const fl = Gl.length > 20 ? Gl.substring(0, 20) : Gl;
        Ve.value.title = fl, at("title"), await Ka();
        const Pl = za ? "标题重写成功（首次免费）" : "标题重写成功";
        A.success(Pl), wt = !0, $t()
      } catch (wt) {
        wt !== "cancel" && (console.error("AI重写标题失败:", wt), A.error("重写标题失败")), Je()
      } finally {
        ie.value = !1
      }
    }, Nn = async () => {
      try {
        await _o(), O.value = !0, J.value = "custom", ee.value = ""
      } catch (fe) {
        console.error("打开改写对话框失败:", fe)
      }
    }, zo = async () => {
      var fe, q;
      try {
        let wt = !1;
        if (J.value === "custom" && !ee.value.trim()) {
          A.warning("请填写修改要求");
          return
        }
        if (!kt()) {
          A.error("图文ID不存在，无法使用AI改写内容"), O.value = !1;
          return
        }
        const za = Kt("content");
        if (za) {
          const on = J.value === "custom" ? "按您的要求改写内容" : "生成全新内容";
          await La.confirm(`确定要使用AI改写内容吗？首次免费使用，系统将${on}。`, "确认改写", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "info"
          })
        } else {
          await _o();
          const on = J.value === "custom" ? "按您的要求改写内容" : "生成全新内容";
          await La.confirm(`确定要使用AI改写内容吗？将消耗1个点数，系统将${on}。`, "确认改写", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
        }
        Ae.value = !0, ve("正在重写内容"), O.value = !1;
        const Ua = Ve.value.title || "",
          Ta = Ve.value.content || "";
        let ja = "";
        J.value === "custom" ? ja = ee.value.trim() : ja = "";
        const sl = ((fe = Ve.value) == null ? void 0 : fe.id) || ((q = Ve.value) == null ? void 0 : q.globalId) || "",
          Gl = await hv(Ua, Ta, ja, sl),
          fl = (Gl == null ? void 0 : Gl.content) || "";
        if (!fl) throw new Error("生成失败，未返回新内容");
        Ve.value.content = fl, at("content"), await Ka();
        const Pl = za ? "内容改写成功（首次免费）" : "内容改写成功";
        A.success(Pl), wt = !0, $t(), J.value = "custom", ee.value = ""
      } catch (wt) {
        wt !== "cancel" && (console.error("AI改写内容失败:", wt), A.error("改写内容失败")), Je()
      } finally {
        Ae.value = !1
      }
    }, On = fe => {
      if (!fe) return "";
      const q = new Date(fe),
        wt = String(q.getMonth() + 1).padStart(2, "0"),
        Gt = String(q.getDate()).padStart(2, "0");
      return `${wt}-${Gt}`
    }, ti = fe => {
      if (!fe || typeof fe != "string") return "";
      const q = fe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"),
        wt = /#([^#\s\n\r]+)/g;
      return q.replace(wt, '<span class="hashtag-tag">#$1</span>')
    }, _o = async () => {
      try {
        if (localStorage.getItem("authToken")) try {
          const q = await zl();
          if (q && typeof q == "object") {
            const wt = Number(q.createPoints ?? q.create_points ?? q.points ?? q.createPoint ?? 0),
              Gt = !Number.isNaN(wt) && wt >= 0 ? wt : 0;
            be.value = {
              ...q,
              createPoints: Gt,
              create_points: Gt
            }, he.value = !0, console.log("用户信息已更新，余额:", Gt, "原始数据:", q)
          } else console.warn("获取用户信息返回的数据格式不正确:", q), be.value = {}, he.value = !1
        } catch (q) {
          console.error("获取用户信息失败:", q), be.value = {}, he.value = !1
        } else be.value = {}, he.value = !1
      } catch (fe) {
        console.error("检查登录状态失败:", fe), he.value = !1, be.value = {}
      }
      he.value ? await Mt() : E.value = []
    }, ci = fe => {
      var q, wt, Gt, za, Ua;
      if (((q = fe.data) == null ? void 0 : q.type) === "XHS_PUBLISH_RESULT" || ((wt = fe.data) == null ? void 0 : wt.type) === "DOUYIN_PUBLISH_RESULT") {
        const Ta = (Gt = fe.data) != null && Gt.response && typeof fe.data.response == "object" ? fe.data.response : fe.data || {};
        if (ga.value = !1, (Ta == null ? void 0 : Ta.success) === !0) {
          const ja = (Ta == null ? void 0 : Ta.message) || ((za = fe.data) == null ? void 0 : za.message) || (typeof Ta == "string" ? Ta : JSON.stringify(Ta)) || "发布成功";
          A.success(ja)
        } else {
          const ja = (Ta == null ? void 0 : Ta.error) || (Ta == null ? void 0 : Ta.message) || ((Ua = fe.data) == null ? void 0 : Ua.message) || (typeof Ta == "string" ? Ta : "") || "发布失败";
          A.error(ja)
        }
      }
    };
  return Ll(async () => {
    document.title = "火兔工具箱_图文编辑", St(), window.addEventListener("resize", St), window.addEventListener("storage", xt), window.addEventListener(Ym, Yt), await _o(), await We(), window.addEventListener("user-login-success", _o), window.addEventListener("message", ci)
  }), Zl(() => {
    window.removeEventListener("resize", St), window.removeEventListener("user-login-success", _o), window.removeEventListener("message", ci), window.removeEventListener("storage", xt), window.removeEventListener(Ym, Yt), V.value && (clearInterval(V.value), V.value = null), De && (clearInterval(De), De = null)
  }), (fe, q) => {
    var oo, ko, Un, Rn;
    const wt = $l,
      Gt = xl,
      za = No,
      Ua = ho,
      Ta = Oo,
      ja = Bo,
      sl = cn,
      Gl = Si,
      fl = Ei,
      Pl = Rl,
      on = bo,
      vo = Kn,
      hn = sc;
    return c(), v("div", {
      class: Pe(["note-editor-page", {
        "mobile-mode": w.value
      }])
    }, [P(i).params.id && P(i).params.id !== "new" ? (c(), ye(Wu, {
      key: 0,
      "work-id": P(i).params.id,
      title: ((oo = Ve.value) == null ? void 0 : oo.title) || ""
    }, null, 8, ["work-id", "title"])) : M("", !0), w.value ? (c(), v("header", Hce, [e("div", Qce, [a(Gt, {
      type: "default",
      size: "small",
      class: "back-button-mobile",
      onClick: Gn
    }, {
      default: l(() => [a(wt, null, {
        default: l(() => [a(P(an))]),
        _: 1
      }), q[53] || (q[53] = e("span", null, "返回", -1))]),
      _: 1
    })]), e("div", Kce, [a(Gt, {
      type: "default",
      size: "small",
      class: "switch-diy-btn-mobile",
      onClick: zt
    }, {
      default: l(() => [a(wt, null, {
        default: l(() => [a(P(Ud))]),
        _: 1
      }), q[54] || (q[54] = e("span", null, "切换到DIY创作模式", -1))]),
      _: 1
    })]), e("div", Yce, [w.value ? (c(), ye(Gt, {
      key: 0,
      type: "primary",
      size: "small",
      class: "preview-btn-mobile",
      onClick: co
    }, {
      default: l(() => [...q[55] || (q[55] = [g(" 图文预览 ", -1)])]),
      _: 1
    })) : M("", !0)])])) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": w.value
      }])
    }, [w.value ? (c(), v("div", Xce, [e("div", Zce, [e("div", ede, [el(e("input", {
      "onUpdate:modelValue": q[0] || (q[0] = ia => Ve.value.title = ia),
      class: "title-input",
      placeholder: "请输入标题",
      maxlength: "20"
    }, null, 512), [
      [En, Ve.value.title]
    ]), e("div", tde, h(Ve.value.title.length) + "/20", 1)]), e("div", ade, [a(Gt, {
      size: "small",
      class: "action-btn action-btn-prompt",
      onClick: wo
    }, {
      default: l(() => [...q[56] || (q[56] = [g(" 本作品提示词 ", -1)])]),
      _: 1
    }), a(Gt, {
      size: "small",
      class: "action-btn action-btn-copy",
      onClick: ol
    }, {
      default: l(() => [...q[57] || (q[57] = [g(" 复制标题 ", -1)])]),
      _: 1
    }), a(Gt, {
      size: "small",
      class: "action-btn action-btn-rewrite",
      onClick: Sl,
      disabled: ie.value
    }, {
      default: l(() => [...q[58] || (q[58] = [g(" AI重写标题 ", -1)])]),
      _: 1
    }, 8, ["disabled"])])]), e("div", lde, [e("div", nde, [e("div", ode, [e("div", ide, [(c(!0), v(Ue, null, gt(Ve.value.images, (ia, kl) => (c(), v("div", {
      key: `image-${kl}`,
      class: "image-item",
      draggable: "true",
      onDragstart: sn => At(kl, sn),
      onDragover: q[1] || (q[1] = lt(sn => pa(sn), ["prevent"])),
      onDrop: sn => Oa(kl, sn),
      onDragend: Fa
    }, [s(ia) ? (c(), v("div", {
      key: 0,
      class: "image-preview image-preview-loading",
      onClick: sn => Nl(kl)
    }, [...q[59] || (q[59] = [e("span", {
      class: "image-loading-icon"
    }, "⏳", -1), e("span", {
      class: "image-loading-text"
    }, [g("生成中"), e("span", {
      class: "loading-dots"
    }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])], 8, rde)) : u(ia) ? (c(), v("div", {
      key: 1,
      class: "image-preview image-preview-failed",
      onClick: sn => Nl(kl)
    }, [e("span", cde, [q[60] || (q[60] = g("出图拥堵", -1)), a(za, {
      content: "此时间段使用高级模式作图人较多导致",
      placement: "top"
    }, {
      default: l(() => [a(wt, {
        class: "image-failed-tip"
      }, {
        default: l(() => [a(P(Ha))]),
        _: 1
      })]),
      _: 1
    })]), a(Gt, {
      type: "primary",
      size: "small",
      class: "retry-image-btn",
      disabled: ""
    }, {
      default: l(() => [...q[61] || (q[61] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
      _: 1
    }), a(wt, {
      class: "retry-loading-icon"
    }, {
      default: l(() => [a(P(Fl))]),
      _: 1
    })], 8, ude)) : (c(), v("img", {
      key: 2,
      src: d(ia),
      class: "image-preview",
      onClick: sn => Nl(kl)
    }, null, 8, dde)), e("div", vde, h(kl + 1), 1), B(kl) ? M("", !0) : (c(), ye(wt, {
      key: 3,
      class: "image-remove",
      onClick: lt(sn => Rt(kl), ["stop"])
    }, {
      default: l(() => [a(P(un))]),
      _: 1
    }, 8, ["onClick"]))], 40, sde))), 128))])]), Ve.value.images.length < 20 ? (c(), v("div", {
      key: 0,
      class: Pe(["image-add-btn-fixed", {
        uploading: xe.value
      }]),
      onClick: q[2] || (q[2] = ia => !xe.value && ze())
    }, [xe.value ? (c(), ye(wt, {
      key: 1,
      class: "add-icon uploading-icon"
    }, {
      default: l(() => [a(P(Fl))]),
      _: 1
    })) : (c(), ye(wt, {
      key: 0,
      class: "add-icon"
    }, {
      default: l(() => [a(P(Ql))]),
      _: 1
    })), e("span", mde, h(xe.value ? "上传中..." : "添加图片"), 1)], 2)) : M("", !0)]), e("div", gde, [a(Ua, {
      modelValue: Me.value,
      "onUpdate:modelValue": q[3] || (q[3] = ia => Me.value = ia),
      onChange: Qe
    }, {
      default: l(() => [...q[62] || (q[62] = [e("span", null, [g("最后一张图引用我的素材库（"), e("span", {
        class: "random-text"
      }, "随机获取"), g("）")], -1)])]),
      _: 1
    }, 8, ["modelValue"]), a(ja, {
      modelValue: rt.value,
      "onUpdate:modelValue": q[4] || (q[4] = ia => rt.value = ia),
      placeholder: "全部",
      size: "small",
      class: "material-library-group-select",
      clearable: "",
      disabled: Me.value,
      onChange: j
    }, {
      default: l(() => [a(Ta, {
        label: "全部",
        value: ""
      }), (c(!0), v(Ue, null, gt(E.value, ia => (c(), ye(Ta, {
        key: ia.id,
        label: ia.name,
        value: String(ia.id)
      }, null, 8, ["label", "value"]))), 128))]),
      _: 1
    }, 8, ["modelValue", "disabled"]), a(za, {
      effect: "dark",
      placement: "top",
      content: ky,
      "popper-class": "material-library-tooltip"
    }, {
      default: l(() => [a(wt, {
        class: "question-icon"
      }, {
        default: l(() => [a(P(Ha))]),
        _: 1
      })]),
      _: 1
    }), e("div", fde, [q[65] || (q[65] = e("span", {
      class: "material-scope-label"
    }, "应用范围：", -1)), a(Ua, {
      "model-value": Ie.value === "all",
      onChange: q[5] || (q[5] = ia => Be(ia ? "all" : ""))
    }, {
      default: l(() => [...q[63] || (q[63] = [g(" 板块下全部作品 ", -1)])]),
      _: 1
    }, 8, ["model-value"]), a(Ua, {
      "model-value": Ie.value === "current",
      onChange: q[6] || (q[6] = ia => Be(ia ? "current" : ""))
    }, {
      default: l(() => [...q[64] || (q[64] = [g(" 当前作品 ", -1)])]),
      _: 1
    }, 8, ["model-value"]), a(za, {
      effect: "dark",
      placement: "top",
      content: Cy,
      "popper-class": "material-library-tooltip"
    }, {
      default: l(() => [a(wt, {
        class: "question-icon"
      }, {
        default: l(() => [a(P(Ha))]),
        _: 1
      })]),
      _: 1
    })])])]), e("div", pde, [e("div", yde, [el(e("textarea", {
      "onUpdate:modelValue": q[7] || (q[7] = ia => Ve.value.content = ia),
      class: "content-textarea",
      placeholder: "请输入图文内容...",
      rows: "10"
    }, null, 512), [
      [En, Ve.value.content]
    ])]), e("div", hde, [a(Gt, {
      size: "small",
      class: "action-btn action-btn-copy",
      onClick: In
    }, {
      default: l(() => [...q[66] || (q[66] = [g(" 复制内容 ", -1)])]),
      _: 1
    }), a(Gt, {
      size: "small",
      class: "action-btn action-btn-rewrite",
      onClick: Pn
    }, {
      default: l(() => [...q[67] || (q[67] = [g(" AI改写内容 ", -1)])]),
      _: 1
    })])]), w.value ? (c(), v("div", bde, [q[75] || (q[75] = e("div", {
      class: "report-header"
    }, [e("h3", {
      class: "report-title"
    }, "AI检测分析"), e("p", {
      class: "report-hint"
    }, "提示:本结果仅为辅助判断,不应作为任何审核或处罚的决定性依据。")], -1)), e("div", wde, [e("div", _de, [(c(), v("svg", kde, [q[68] || (q[68] = e("circle", {
      cx: "100",
      cy: "100",
      r: "80",
      fill: "none",
      stroke: "#f0f0f0",
      "stroke-width": "20"
    }, null, -1)), e("circle", {
      cx: "100",
      cy: "100",
      r: "80",
      fill: "none",
      stroke: "#52c41a",
      "stroke-width": "20",
      "stroke-dasharray": `${aa.value*5.0265} 502.65`,
      "stroke-dashoffset": "0",
      transform: "rotate(-90 100 100)",
      class: "chart-segment human"
    }, null, 8, Cde), e("circle", {
      cx: "100",
      cy: "100",
      r: "80",
      fill: "none",
      stroke: "#faad14",
      "stroke-width": "20",
      "stroke-dasharray": `${xa.value*5.0265} 502.65`,
      "stroke-dashoffset": -(aa.value * 5.0265),
      transform: "rotate(-90 100 100)",
      class: "chart-segment suspected"
    }, null, 8, Ade)])), e("div", Ide, [e("div", xde, h(aa.value) + "%", 1), q[69] || (q[69] = e("div", {
      class: "chart-label"
    }, "人工特征", -1))])]), e("div", Sde, [e("div", Ede, [q[70] || (q[70] = e("span", {
      class: "category-dot human-dot"
    }, null, -1)), q[71] || (q[71] = e("span", {
      class: "category-name"
    }, "人工特征", -1)), e("span", Tde, h(aa.value) + "%", 1)]), e("div", $de, [q[72] || (q[72] = e("span", {
      class: "category-dot suspected-dot"
    }, null, -1)), q[73] || (q[73] = e("span", {
      class: "category-name"
    }, "疑似AI", -1)), e("span", Pde, h(xa.value) + "%", 1)]), q[74] || (q[74] = e("div", {
      class: "category-item"
    }, [e("span", {
      class: "category-dot ai-dot"
    }), e("span", {
      class: "category-name"
    }, "AI特征"), e("span", {
      class: "category-percent"
    }, "0%")], -1))])])])) : M("", !0)])) : M("", !0), e("input", {
      ref_key: "fileInput",
      ref: S,
      type: "file",
      multiple: "",
      accept: "image/*",
      style: {
        display: "none"
      },
      onChange: H
    }, null, 544)], 2), w.value ? (c(), v("footer", Vde, [a(Gt, {
      class: "footer-btn save-btn",
      onClick: Ka
    }, {
      default: l(() => [...q[76] || (q[76] = [g(" 保存 ", -1)])]),
      _: 1
    }), a(Gt, {
      class: Pe(["footer-btn publish-btn", {
        "published-btn": Ve.value.published
      }]),
      type: "primary",
      onClick: Jt
    }, {
      default: l(() => [g(h(Ve.value.published ? "已发布" : "发布"), 1)]),
      _: 1
    }, 8, ["class"])])) : M("", !0), w.value ? M("", !0) : (c(), v("div", zde, [e("div", Lde, [e("div", Dde, [e("button", {
      class: "back-text-btn",
      onClick: Gn
    }, [a(wt, null, {
      default: l(() => [a(P(an))]),
      _: 1
    }), q[77] || (q[77] = e("span", null, "返回", -1))]), e("div", Mde, [a(wt, {
      class: "notice-icon"
    }, {
      default: l(() => [a(P(eh))]),
      _: 1
    }), e("span", Ode, [q[78] || (q[78] = g("本次AI为您生成：封面图", -1)), q[79] || (q[79] = e("span", {
      class: "content-count-blue"
    }, "1", -1)), q[80] || (q[80] = g("张+内容图", -1)), e("span", Bde, h(tn.value), 1), q[81] || (q[81] = g("张+用户添加", -1)), e("span", Nde, h(Dl.value), 1), q[82] || (q[82] = g("张", -1))])])]), e("div", Ude, [a(Gt, {
      type: "default",
      size: "small",
      class: "work-prompt-btn",
      onClick: wo
    }, {
      default: l(() => [a(wt, null, {
        default: l(() => [a(P(Eo))]),
        _: 1
      }), q[83] || (q[83] = g(" 本作品提示词 ", -1))]),
      _: 1
    }), a(Wu, {
      "work-id": P(i).params.id,
      title: ((ko = Ve.value) == null ? void 0 : ko.title) || "",
      inline: "",
      tight: ""
    }, null, 8, ["work-id", "title"]), a(Gt, {
      type: "default",
      size: "small",
      class: "switch-diy-btn",
      onClick: zt
    }, {
      default: l(() => [a(wt, null, {
        default: l(() => [a(P(Ud))]),
        _: 1
      }), q[84] || (q[84] = g(" 切换到DIY创作模式 ", -1))]),
      _: 1
    }), Ve.value.images && Ve.value.images.length > 0 ? (c(), ye(Gt, {
      key: 0,
      type: "primary",
      size: "small",
      class: "download-all-btn",
      onClick: dl
    }, {
      default: l(() => [a(wt, null, {
        default: l(() => [a(P(To))]),
        _: 1
      }), q[85] || (q[85] = g(" 一键下载全部图片 ", -1))]),
      _: 1
    })) : M("", !0)])]), e("div", Rde, [e("div", jde, [e("div", qde, [e("div", Fde, [Ve.value.images && Ve.value.images.length > 0 ? (c(), ye(wt, {
      key: 0,
      class: "image-nav-arrow image-nav-arrow-left",
      onClick: q[8] || (q[8] = ia => fa("left"))
    }, {
      default: l(() => [a(P(an))]),
      _: 1
    })) : M("", !0), e("div", {
      ref_key: "imagesScrollContainer",
      ref: C,
      class: Pe(["images-scroll-container-pc", {
        "has-scroll": Ve.value.images.length > 4
      }]),
      onMousedown: gl,
      onMousemove: jl,
      onMouseup: en,
      onMouseleave: en
    }, [e("div", Wde, [(c(!0), v(Ue, null, gt(Ve.value.images, (ia, kl) => (c(), v("div", {
      key: kl,
      class: "image-card",
      draggable: "true",
      onDragstart: sn => At(kl, sn),
      onDragover: q[13] || (q[13] = lt(sn => pa(sn), ["prevent"])),
      onDrop: sn => Oa(kl, sn),
      onDragend: Fa
    }, [e("div", Jde, [e("div", Hde, [s(ia) ? (c(), v("div", Qde, [...q[86] || (q[86] = [e("span", {
      class: "image-loading-icon"
    }, "⏳", -1), e("span", {
      class: "image-loading-text"
    }, [g("生成中"), e("span", {
      class: "loading-dots"
    }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])])) : u(ia) ? (c(), v("div", Kde, [e("span", Yde, [q[87] || (q[87] = g("出图拥堵", -1)), a(za, {
      content: "此时间段使用高级模式作图人较多导致",
      placement: "top"
    }, {
      default: l(() => [a(wt, {
        class: "image-failed-tip"
      }, {
        default: l(() => [a(P(Ha))]),
        _: 1
      })]),
      _: 1
    })]), a(Gt, {
      type: "primary",
      size: "small",
      class: "retry-image-btn",
      disabled: ""
    }, {
      default: l(() => [...q[88] || (q[88] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
      _: 1
    }), a(wt, {
      class: "retry-loading-icon"
    }, {
      default: l(() => [a(P(Fl))]),
      _: 1
    })])) : (c(), v("img", {
      key: 2,
      src: d(ia),
      alt: `生成的图片${kl+1}`,
      class: "image-preview-pc"
    }, null, 8, Xde)), e("div", Zde, h(kl + 1), 1)]), B(kl) ? M("", !0) : (c(), ye(wt, {
      key: 0,
      class: "image-delete-btn-pc",
      onClick: lt(sn => Rt(kl), ["stop"]),
      title: "删除图片"
    }, {
      default: l(() => [a(P(un))]),
      _: 1
    }, 8, ["onClick"])), !s(ia) && !u(ia) ? (c(), v("div", eve, [e("div", tve, [a(Gt, {
      type: "primary",
      size: "small",
      class: "preview-btn",
      onClick: lt(sn => Nl(kl), ["stop"])
    }, {
      default: l(() => [...q[89] || (q[89] = [g(" 预览或替换 ", -1)])]),
      _: 1
    }, 8, ["onClick"])]), e("div", {
      class: "overlay-move-buttons",
      onMousedown: q[11] || (q[11] = lt(() => {}, ["stop"])),
      onClick: q[12] || (q[12] = lt(() => {}, ["stop"]))
    }, [kl > 0 ? (c(), ye(wt, {
      key: 0,
      class: "move-btn move-btn-left",
      onClick: lt(sn => Lt(kl), ["stop"]),
      onMousedown: q[9] || (q[9] = lt(() => {}, ["stop"])),
      title: "向左移动"
    }, {
      default: l(() => [a(P(an))]),
      _: 1
    }, 8, ["onClick"])) : M("", !0), kl < Ve.value.images.length - 1 ? (c(), ye(wt, {
      key: 1,
      class: "move-btn move-btn-right",
      onClick: lt(sn => Ft(kl), ["stop"]),
      onMousedown: q[10] || (q[10] = lt(() => {}, ["stop"])),
      title: "向右移动"
    }, {
      default: l(() => [a(P(Wl))]),
      _: 1
    }, 8, ["onClick"])) : M("", !0)], 32)])) : M("", !0), b.value === kl && ue.value ? (c(), v("div", ave, [e("div", lve, [(c(), v("svg", nve, [e("circle", {
      class: "progress-ring-circle",
      stroke: "#409eff",
      "stroke-width": "4",
      fill: "transparent",
      r: "26",
      cx: "30",
      cy: "30",
      style: Il({
        strokeDasharray: de.value,
        strokeDashoffset: _e.value
      })
    }, null, 4)])), e("div", ove, h(U.value) + "%", 1)])])) : M("", !0)])], 40, Gde))), 128))])], 34), Ve.value.images && Ve.value.images.length > 0 ? (c(), ye(wt, {
      key: 1,
      class: "image-nav-arrow image-nav-arrow-right",
      onClick: q[14] || (q[14] = ia => fa("right"))
    }, {
      default: l(() => [a(P(Wl))]),
      _: 1
    })) : M("", !0), Ve.value.images.length < 20 ? (c(), v("div", {
      key: 2,
      class: Pe(["image-add-btn-pc", {
        uploading: xe.value
      }]),
      onClick: q[15] || (q[15] = ia => !xe.value && ze())
    }, [xe.value ? (c(), ye(wt, {
      key: 1,
      class: "add-icon-pc uploading-icon"
    }, {
      default: l(() => [a(P(Fl))]),
      _: 1
    })) : (c(), ye(wt, {
      key: 0,
      class: "add-icon-pc"
    }, {
      default: l(() => [a(P(Ql))]),
      _: 1
    })), e("span", ive, h(xe.value ? "上传中..." : "添加图片"), 1)], 2)) : M("", !0)]), e("div", sve, [a(Ua, {
      modelValue: Me.value,
      "onUpdate:modelValue": q[16] || (q[16] = ia => Me.value = ia),
      onChange: Qe
    }, {
      default: l(() => [...q[90] || (q[90] = [e("span", null, [g("最后一张图引用我的素材库（"), e("span", {
        class: "random-text"
      }, "随机获取"), g("）")], -1)])]),
      _: 1
    }, 8, ["modelValue"]), a(ja, {
      modelValue: rt.value,
      "onUpdate:modelValue": q[17] || (q[17] = ia => rt.value = ia),
      placeholder: "全部",
      size: "small",
      class: "material-library-group-select",
      clearable: "",
      disabled: Me.value,
      onChange: j
    }, {
      default: l(() => [a(Ta, {
        label: "全部",
        value: ""
      }), (c(!0), v(Ue, null, gt(E.value, ia => (c(), ye(Ta, {
        key: ia.id,
        label: ia.name,
        value: String(ia.id)
      }, null, 8, ["label", "value"]))), 128))]),
      _: 1
    }, 8, ["modelValue", "disabled"]), a(za, {
      effect: "dark",
      placement: "top",
      content: ky,
      "popper-class": "material-library-tooltip"
    }, {
      default: l(() => [a(wt, {
        class: "question-icon"
      }, {
        default: l(() => [a(P(Ha))]),
        _: 1
      })]),
      _: 1
    }), e("div", rve, [q[93] || (q[93] = e("span", {
      class: "material-scope-label"
    }, "应用范围：", -1)), a(Ua, {
      "model-value": Ie.value === "all",
      onChange: q[18] || (q[18] = ia => Be(ia ? "all" : ""))
    }, {
      default: l(() => [...q[91] || (q[91] = [g(" 板块下全部作品 ", -1)])]),
      _: 1
    }, 8, ["model-value"]), a(Ua, {
      "model-value": Ie.value === "current",
      onChange: q[19] || (q[19] = ia => Be(ia ? "current" : ""))
    }, {
      default: l(() => [...q[92] || (q[92] = [g(" 当前作品 ", -1)])]),
      _: 1
    }, 8, ["model-value"]), a(za, {
      effect: "dark",
      placement: "top",
      content: Cy,
      "popper-class": "material-library-tooltip"
    }, {
      default: l(() => [a(wt, {
        class: "question-icon"
      }, {
        default: l(() => [a(P(Ha))]),
        _: 1
      })]),
      _: 1
    })])])]), e("div", uve, [q[94] || (q[94] = e("h3", {
      class: "section-title"
    }, "图文标题", -1)), a(sl, {
      modelValue: Ve.value.title,
      "onUpdate:modelValue": q[21] || (q[21] = ia => Ve.value.title = ia),
      placeholder: "请输入标题",
      maxlength: "20",
      "show-word-limit": "",
      class: "title-input-pc"
    }, {
      append: l(() => [e("div", cve, [a(wt, {
        onClick: ol
      }, {
        default: l(() => [a(P(Eo))]),
        _: 1
      }), a(wt, {
        onClick: q[20] || (q[20] = ia => !ie.value && Sl()),
        style: Il({
          pointerEvents: ie.value ? "none" : "auto",
          opacity: ie.value ? .6 : 1
        })
      }, {
        default: l(() => [a(P(Ar))]),
        _: 1
      }, 8, ["style"])])]),
      _: 1
    }, 8, ["modelValue"])]), e("div", dve, [e("div", vve, [q[95] || (q[95] = e("h3", {
      class: "section-title"
    }, "图文内容", -1)), e("div", mve, [a(wt, {
      onClick: In,
      title: "复制内容"
    }, {
      default: l(() => [a(P(Eo))]),
      _: 1
    }), a(wt, {
      onClick: q[22] || (q[22] = ia => !Ae.value && Pn()),
      title: "AI重写内容",
      style: Il({
        pointerEvents: Ae.value ? "none" : "auto",
        opacity: Ae.value ? .6 : 1
      })
    }, {
      default: l(() => [a(P(Ar))]),
      _: 1
    }, 8, ["style"])])]), e("div", gve, [a(sl, {
      modelValue: Ve.value.content,
      "onUpdate:modelValue": q[23] || (q[23] = ia => Ve.value.content = ia),
      type: "textarea",
      rows: 12,
      placeholder: "请输入内容",
      maxlength: "4096",
      "show-word-limit": "",
      class: "content-textarea-pc"
    }, null, 8, ["modelValue"])]), e("div", fve, [e("div", pve, [a(Gt, {
      type: "success",
      class: "action-btn-content",
      onClick: Ka
    }, {
      default: l(() => [a(wt, null, {
        default: l(() => [a(P(Zo))]),
        _: 1
      }), q[96] || (q[96] = g(" 保存 ", -1))]),
      _: 1
    }), a(Gt, {
      type: "primary",
      plain: !Ve.value.published,
      class: Pe(["action-btn-content publish-btn-pc", {
        "published-btn-pc": Ve.value.published
      }]),
      onClick: Jt
    }, {
      default: l(() => [g(h(Ve.value.published ? "已发布" : "手机发布"), 1)]),
      _: 1
    }, 8, ["plain", "class"]), e("div", yve, [e("a", {
      class: "publish-pc-tutorial-link",
      href: "https://ecnfcn7p0fh4.feishu.cn/wiki/UNEAw3YFmiRvTjkMnUuc0blDngc?from=from_copylink",
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: q[24] || (q[24] = lt(() => {}, ["stop"]))
    }, "教程"), a(Gt, {
      type: "primary",
      plain: "",
      class: Pe(["action-btn-content publish-pc-btn", {
        "is-publishing": ga.value
      }]),
      onClick: Ba
    }, {
      default: l(() => [g(h(ga.value ? "发布中..." : "电脑发布"), 1)]),
      _: 1
    }, 8, ["class"])]), a(ja, {
      modelValue: Ne.value,
      "onUpdate:modelValue": q[25] || (q[25] = ia => Ne.value = ia),
      class: "publish-platform-select",
      size: "default"
    }, {
      default: l(() => [a(Ta, {
        label: "DY",
        value: "douyin"
      }), a(Ta, {
        label: "XH",
        value: "xhs"
      })]),
      _: 1
    }, 8, ["modelValue"]), a(Wu, {
      "work-id": P(i).params.id,
      title: ((Un = Ve.value) == null ? void 0 : Un.title) || "",
      inline: ""
    }, null, 8, ["work-id", "title"])])])])]), e("div", hve, [q[114] || (q[114] = e("h3", {
      class: "section-title"
    }, "手机预览", -1)), e("div", bve, [e("div", wve, [e("img", {
      src: P(sb),
      alt: "手机壳",
      class: "phone-case"
    }, null, 8, _ve), e("div", kve, [e("div", Cve, [Ve.value.images && Ve.value.images.length > 0 ? (c(), v("div", Ave, [a(fl, {
      "indicator-position": "outside"
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(Ve.value.images, (ia, kl) => (c(), ye(Gl, {
        key: kl
      }, {
        default: l(() => [s(ia) ? (c(), v("div", Ive, [...q[97] || (q[97] = [e("span", {
          class: "image-loading-icon"
        }, "⏳", -1), e("span", {
          class: "image-loading-text"
        }, [g("生成中"), e("span", {
          class: "loading-dots"
        }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])])) : u(ia) ? (c(), v("div", xve, [e("span", Sve, [q[98] || (q[98] = g("出图拥堵", -1)), a(za, {
          content: "此时间段使用高级模式作图人较多导致",
          placement: "top"
        }, {
          default: l(() => [a(wt, {
            class: "image-failed-tip"
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), a(Gt, {
          type: "primary",
          size: "small",
          class: "retry-image-btn",
          disabled: ""
        }, {
          default: l(() => [...q[99] || (q[99] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
          _: 1
        }), a(wt, {
          class: "retry-loading-icon"
        }, {
          default: l(() => [a(P(Fl))]),
          _: 1
        })])) : (c(), v("div", Eve, [e("img", {
          src: d(ia),
          alt: `生成的图片${kl+1}`,
          class: "carousel-card-image"
        }, null, 8, Tve)]))]),
        _: 2
      }, 1024))), 128))]),
      _: 1
    })])) : M("", !0), e("div", $ve, [e("div", Pve, h(Ve.value.title || "📝学法减分攻略来啦！轻松拿回你的小本本！"), 1), e("div", {
      class: "article-content",
      innerHTML: ti(Ve.value.content || "学法减分功能介绍：适用于轻微违章被扣分的情况，可通过学习考试来恢复部分分数。下面整理具体流程与常见问题，帮助大家了解适用条件。")
    }, null, 8, Vve), e("div", zve, [e("div", Lve, h(On(Ve.value.createdAt) || "01-10"), 1), q[100] || (q[100] = e("div", {
      class: "article-dots"
    }, "...", -1))])]), e("div", Dve, [q[105] || (q[105] = e("div", {
      class: "comment-section"
    }, [e("img", {
      src: "http://jiandan.link/_nuxt/comment.Dw_-c_r2.svg",
      class: "comment-icon"
    }), e("div", {
      class: "comment-text"
    }, "暂无评论")], -1)), e("div", Mve, [q[104] || (q[104] = e("div", {
      class: "comment-input"
    }, [e("img", {
      src: "http://jiandan.link/_nuxt/office_logo_zi.BJgrjNni.svg",
      class: "input-avatar"
    }), e("span", {
      class: "input-placeholder"
    }, "说点什么...")], -1)), e("div", Ove, [e("div", Bve, [a(wt, null, {
      default: l(() => [a(P(Xo))]),
      _: 1
    }), q[101] || (q[101] = e("span", null, "67", -1))]), e("div", Nve, [a(wt, null, {
      default: l(() => [a(P(Xo))]),
      _: 1
    }), q[102] || (q[102] = e("span", null, "78", -1))]), e("div", Uve, [a(wt, null, {
      default: l(() => [a(P(Po))]),
      _: 1
    }), q[103] || (q[103] = e("span", null, "38", -1))]), a(wt, {
      class: "share-icon"
    }, {
      default: l(() => [a(P(Ko))]),
      _: 1
    })])])])])])])]), w.value ? M("", !0) : (c(), v("div", Rve, [q[113] || (q[113] = e("div", {
      class: "report-header"
    }, [e("h3", {
      class: "report-title"
    }, "AI检测分析"), e("p", {
      class: "report-hint"
    }, "提示:本结果仅为辅助判断,不应作为任何审核或处罚的决定性依据。")], -1)), e("div", jve, [e("div", qve, [(c(), v("svg", Fve, [q[106] || (q[106] = e("circle", {
      cx: "100",
      cy: "100",
      r: "80",
      fill: "none",
      stroke: "#f0f0f0",
      "stroke-width": "20"
    }, null, -1)), e("circle", {
      cx: "100",
      cy: "100",
      r: "80",
      fill: "none",
      stroke: "#52c41a",
      "stroke-width": "20",
      "stroke-dasharray": `${aa.value*5.0265} 502.65`,
      "stroke-dashoffset": "0",
      transform: "rotate(-90 100 100)",
      class: "chart-segment human"
    }, null, 8, Wve), e("circle", {
      cx: "100",
      cy: "100",
      r: "80",
      fill: "none",
      stroke: "#faad14",
      "stroke-width": "20",
      "stroke-dasharray": `${xa.value*5.0265} 502.65`,
      "stroke-dashoffset": -(aa.value * 5.0265),
      transform: "rotate(-90 100 100)",
      class: "chart-segment suspected"
    }, null, 8, Gve)])), e("div", Jve, [e("div", Hve, h(aa.value) + "%", 1), q[107] || (q[107] = e("div", {
      class: "chart-label"
    }, "人工特征", -1))])]), e("div", Qve, [e("div", Kve, [q[108] || (q[108] = e("span", {
      class: "category-dot human-dot"
    }, null, -1)), q[109] || (q[109] = e("span", {
      class: "category-name"
    }, "人工特征", -1)), e("span", Yve, h(aa.value) + "%", 1)]), e("div", Xve, [q[110] || (q[110] = e("span", {
      class: "category-dot suspected-dot"
    }, null, -1)), q[111] || (q[111] = e("span", {
      class: "category-name"
    }, "疑似AI", -1)), e("span", Zve, h(xa.value) + "%", 1)]), q[112] || (q[112] = e("div", {
      class: "category-item"
    }, [e("span", {
      class: "category-dot ai-dot"
    }), e("span", {
      class: "category-name"
    }, "AI特征"), e("span", {
      class: "category-percent"
    }, "0%")], -1))])])]))])])])), a(Wn, {
      modelValue: f.value,
      "onUpdate:modelValue": q[26] || (q[26] = ia => f.value = ia)
    }, null, 8, ["modelValue"]), a(Pl, {
      modelValue: y.value,
      "onUpdate:modelValue": q[30] || (q[30] = ia => y.value = ia),
      title: "图文预览",
      width: w.value ? "95%" : "900px",
      center: "",
      class: "note-preview-dialog",
      "close-on-click-modal": !1
    }, {
      default: l(() => [e("div", eme, [w.value ? (c(), v("div", tme, [e("div", ame, [e("div", lme, [e("img", {
        src: Pt(),
        alt: "avatar"
      }, null, 8, nme)]), e("div", ome, h(yl()), 1), a(Gt, {
        size: "small",
        type: "danger",
        class: "note-follow-btn"
      }, {
        default: l(() => [...q[115] || (q[115] = [g("关注", -1)])]),
        _: 1
      })])])) : M("", !0), e("div", {
        class: Pe(["note-preview-gallery", {
          "mobile-gallery": w.value
        }]),
        onWheel: q[29] || (q[29] = lt(() => {}, ["stop", "prevent"]))
      }, [e("div", {
        class: "note-gallery-container",
        onWheel: q[28] || (q[28] = lt(() => {}, ["stop", "prevent"]))
      }, [Ve.value.images && Ve.value.images.length > 0 ? (c(), ye(fl, {
        key: 0,
        interval: 0,
        autoplay: !1,
        "indicator-position": "outside",
        class: "note-gallery-carousel",
        onWheel: q[27] || (q[27] = lt(() => {}, ["stop", "prevent"]))
      }, {
        default: l(() => [(c(!0), v(Ue, null, gt(Ve.value.images, (ia, kl) => (c(), ye(Gl, {
          key: kl
        }, {
          default: l(() => [e("div", ime, [s(ia) ? (c(), v("div", sme, [...q[116] || (q[116] = [e("span", {
            class: "image-loading-icon"
          }, "⏳", -1), e("span", null, "生成中", -1)])])) : u(ia) ? (c(), v("div", rme, [e("span", ume, [q[117] || (q[117] = g("出图拥堵", -1)), a(za, {
            content: "此时间段使用高级模式作图人较多导致",
            placement: "top"
          }, {
            default: l(() => [a(wt, {
              class: "image-failed-tip"
            }, {
              default: l(() => [a(P(Ha))]),
              _: 1
            })]),
            _: 1
          })]), a(Gt, {
            type: "primary",
            size: "small",
            class: "retry-image-btn",
            disabled: ""
          }, {
            default: l(() => [...q[118] || (q[118] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
            _: 1
          }), a(wt, {
            class: "retry-loading-icon"
          }, {
            default: l(() => [a(P(Fl))]),
            _: 1
          })])) : (c(), v("img", {
            key: 2,
            src: d(ia),
            alt: "preview"
          }, null, 8, cme))])]),
          _: 2
        }, 1024))), 128))]),
        _: 1
      })) : (c(), v("div", dme, [...q[119] || (q[119] = [e("div", null, "暂无图片", -1)])]))], 32)], 34), e("div", vme, [w.value ? M("", !0) : (c(), v("div", mme, [e("div", gme, [e("div", fme, [e("img", {
        src: Pt(),
        alt: "avatar"
      }, null, 8, pme)]), e("div", yme, h(yl()), 1), a(Gt, {
        size: "small",
        type: "danger",
        class: "note-follow-btn"
      }, {
        default: l(() => [...q[120] || (q[120] = [g("关注", -1)])]),
        _: 1
      })])])), w.value ? M("", !0) : (c(), v("div", hme)), e("div", bme, h(Ve.value.title || "未命名图文"), 1), e("div", wme, h(Ve.value.content || "暂无内容"), 1), Ve.value.tags && Ve.value.tags.length > 0 ? (c(), v("div", _me, [(c(!0), v(Ue, null, gt(Ve.value.tags, ia => (c(), v("span", {
        class: "note-tag",
        key: ia
      }, "#" + h(ia), 1))), 128))])) : M("", !0), e("div", kme, "编辑于 " + h(Mn()), 1), q[122] || (q[122] = e("div", {
        class: "note-content-comments"
      }, [e("div", {
        class: "note-comments-header"
      }, "共0条评论"), e("div", {
        class: "note-comments-list"
      }, [e("div", {
        class: "note-empty-comments"
      }, "暂无评论")])], -1)), e("div", Cme, [q[121] || (q[121] = e("div", {
        class: "note-comment-placeholder"
      }, "登录后评论", -1)), e("div", Ame, [a(wt, {
        class: "note-action-icon"
      }, {
        default: l(() => [a(P(Po))]),
        _: 1
      }), a(wt, {
        class: "note-action-icon"
      }, {
        default: l(() => [a(P(Xo))]),
        _: 1
      }), a(wt, {
        class: "note-action-icon"
      }, {
        default: l(() => [a(P(Ko))]),
        _: 1
      })])])])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Pl, {
      modelValue: O.value,
      "onUpdate:modelValue": q[34] || (q[34] = ia => O.value = ia),
      title: "AI改写内容",
      width: w.value ? "90%" : "500px",
      "close-on-click-modal": !1,
      class: "rewrite-dialog"
    }, {
      footer: l(() => [a(Gt, {
        onClick: q[33] || (q[33] = ia => O.value = !1),
        disabled: Ae.value
      }, {
        default: l(() => [...q[126] || (q[126] = [g("取消", -1)])]),
        _: 1
      }, 8, ["disabled"]), a(Gt, {
        type: "primary",
        onClick: zo,
        disabled: Ae.value || J.value === "custom" && !ee.value.trim()
      }, {
        default: l(() => [...q[127] || (q[127] = [g(" 确定 ", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      default: l(() => [e("div", Ime, [q[125] || (q[125] = e("p", {
        class: "dialog-tip"
      }, "请选择改写方式：", -1)), a(vo, {
        modelValue: J.value,
        "onUpdate:modelValue": q[31] || (q[31] = ia => J.value = ia),
        class: "rewrite-mode-group",
        disabled: Ae.value
      }, {
        default: l(() => [a(on, {
          value: "custom",
          class: "radio-item"
        }, {
          default: l(() => [...q[123] || (q[123] = [g("是，填写修改要求", -1)])]),
          _: 1
        }), a(on, {
          value: "new",
          class: "radio-item"
        }, {
          default: l(() => [...q[124] || (q[124] = [g("否，直接生成全新内容", -1)])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue", "disabled"]), J.value === "custom" ? (c(), v("div", xme, [a(sl, {
        modelValue: ee.value,
        "onUpdate:modelValue": q[32] || (q[32] = ia => ee.value = ia),
        type: "textarea",
        rows: 4,
        placeholder: "请输入您的修改要求，例如：增加更多实用技巧、调整语气更轻松活泼、添加更多emoji表情等",
        maxlength: "200",
        "show-word-limit": "",
        class: "requirement-input",
        disabled: Ae.value
      }, null, 8, ["modelValue", "disabled"])])) : M("", !0)])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Pl, {
      modelValue: F.value,
      "onUpdate:modelValue": q[35] || (q[35] = ia => F.value = ia),
      title: Y.value,
      width: "420px",
      center: "",
      "close-on-click-modal": !1,
      "show-close": !1,
      class: "rewrite-progress-dialog"
    }, {
      default: l(() => [e("div", Sme, [e("div", Eme, h(ne.value) + "%", 1), a(hn, {
        percentage: ne.value,
        "stroke-width": 10,
        "show-text": !1,
        status: "active"
      }, null, 8, ["percentage"]), q[128] || (q[128] = e("div", {
        class: "rewrite-progress-hint"
      }, "正在生成，请稍候...", -1))])]),
      _: 1
    }, 8, ["modelValue", "title"]), a(Pl, {
      modelValue: Q.value,
      "onUpdate:modelValue": q[40] || (q[40] = ia => Q.value = ia),
      "close-on-click-modal": !0,
      class: "image-preview-dialog",
      width: w.value ? "90%" : "800px",
      fullscreen: !1,
      onClose: q[41] || (q[41] = ia => re.value = 0),
      "align-center": ""
    }, {
      default: l(() => [e("div", {
        class: "preview-image-container",
        onWheel: Dn
      }, [Ve.value.images && Ve.value.images.length > 1 ? (c(), ye(wt, {
        key: 0,
        class: Pe(["preview-arrow", "preview-arrow-left", {
          "arrow-disabled": Cn.value
        }]),
        onClick: q[36] || (q[36] = lt(ia => !Cn.value && Ul(), ["stop"]))
      }, {
        default: l(() => [a(P(an))]),
        _: 1
      }, 8, ["class"])) : M("", !0), Ve.value.images && Ve.value.images.length > 1 ? (c(), ye(wt, {
        key: 1,
        class: Pe(["preview-arrow", "preview-arrow-right", {
          "arrow-disabled": ll.value
        }]),
        onClick: q[37] || (q[37] = lt(ia => !ll.value && _l(), ["stop"]))
      }, {
        default: l(() => [a(P(Wl))]),
        _: 1
      }, 8, ["class"])) : M("", !0), e("div", {
        class: "preview-image-wrapper",
        onWheel: Dn
      }, [Ve.value.images && Ve.value.images[re.value] !== void 0 && s(Ve.value.images[re.value]) ? (c(), v("div", Tme, [...q[129] || (q[129] = [e("span", {
        class: "image-loading-icon"
      }, "⏳", -1), e("span", {
        class: "image-loading-text"
      }, [g("生成中"), e("span", {
        class: "loading-dots"
      }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])])) : Ve.value.images && Ve.value.images[re.value] !== void 0 && u(Ve.value.images[re.value]) ? (c(), v("div", $me, [e("span", Pme, [q[130] || (q[130] = g("出图拥堵", -1)), a(za, {
        content: "此时间段使用高级模式作图人较多导致",
        placement: "top"
      }, {
        default: l(() => [a(wt, {
          class: "image-failed-tip"
        }, {
          default: l(() => [a(P(Ha))]),
          _: 1
        })]),
        _: 1
      })]), a(Gt, {
        type: "primary",
        size: "small",
        class: "retry-image-btn",
        disabled: ""
      }, {
        default: l(() => [...q[131] || (q[131] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
        _: 1
      }), a(wt, {
        class: "retry-loading-icon"
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      })])) : Ve.value.images && Ve.value.images[re.value] && d(Ve.value.images[re.value]) ? (c(), v("img", {
        key: 2,
        src: d(Ve.value.images[re.value]),
        alt: `预览图片${re.value+1}`,
        class: "preview-large-image",
        onTouchstart: An,
        onTouchend: dn
      }, null, 40, Vme)) : M("", !0)], 32), Ve.value.images && Ve.value.images.length > 0 ? (c(), v("div", zme, [Ve.value.images[re.value] !== void 0 && !s(Ve.value.images[re.value]) && !u(Ve.value.images[re.value]) ? (c(), v("div", Lme, [Ve.value.type !== 0 && P(i).query.from !== "yijuhua_shunan" ? (c(), ye(Gt, {
        key: 0,
        type: "primary",
        size: "small",
        class: "replace-cover-btn edit-request-btn",
        onClick: X
      }, {
        default: l(() => [...q[132] || (q[132] = [g(" 我要修改 ", -1)])]),
        _: 1
      })) : M("", !0), re.value === 0 ? (c(), ye(Gt, {
        key: 1,
        type: "primary",
        size: "small",
        class: "replace-cover-btn ai-replace-btn",
        onClick: q[38] || (q[38] = ia => Ht(0))
      }, {
        default: l(() => [...q[133] || (q[133] = [g(" AI更换封面 ", -1)])]),
        _: 1
      })) : M("", !0)])) : M("", !0), Ve.value.images && Ve.value.images.length > 1 ? (c(), v("div", Dme, h(re.value + 1) + " / " + h(Ve.value.images.length), 1)) : M("", !0), Ve.value.images[re.value] !== void 0 && !s(Ve.value.images[re.value]) && !u(Ve.value.images[re.value]) ? (c(), v("div", Mme, [a(Gt, {
        type: "default",
        size: "small",
        class: "replace-cover-btn local-replace-btn",
        onClick: q[39] || (q[39] = ia => le(re.value))
      }, {
        default: l(() => [g(h(re.value === 0 ? "本地更换封面" : "本地替换内容配图"), 1)]),
        _: 1
      })])) : M("", !0)])) : M("", !0), e("input", {
        ref_key: "localImageFileInput",
        ref: z,
        type: "file",
        accept: "image/*",
        style: {
          display: "none"
        },
        onChange: ot
      }, null, 544)], 32)]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Tb, {
      modelValue: ba.value,
      "onUpdate:modelValue": q[42] || (q[42] = ia => ba.value = ia),
      "record-id": (Rn = Ve.value) == null ? void 0 : Rn.id,
      "image-index": we.value,
      "image-url": Ja.value,
      onSuccess: ml
    }, null, 8, ["modelValue", "record-id", "image-index", "image-url"]), a(Pl, {
      modelValue: te.value,
      "onUpdate:modelValue": q[44] || (q[44] = ia => te.value = ia),
      title: "修改图片提示词",
      width: w.value ? "90%" : "1050px",
      class: "edit-prompt-dialog"
    }, {
      footer: l(() => [a(Gt, {
        onClick: Pa
      }, {
        default: l(() => [...q[138] || (q[138] = [g("取消", -1)])]),
        _: 1
      }), a(Gt, {
        type: "primary",
        loading: ue.value && b.value === we.value,
        onClick: Va
      }, {
        default: l(() => [...q[139] || (q[139] = [g("确定提交", -1)])]),
        _: 1
      }, 8, ["loading"])]),
      default: l(() => [e("div", {
        class: Pe(["retry-outline-dialog-content", {
          "has-preview": Ve.value.images && Ve.value.images[we.value] !== void 0
        }])
      }, [Ve.value.images && Ve.value.images[we.value] !== void 0 ? (c(), v("div", Ome, [q[136] || (q[136] = e("div", {
        class: "edit-prompt-preview-label"
      }, "预览图", -1)), e("div", Bme, [s(Ve.value.images[we.value]) ? (c(), v("div", Nme, [a(wt, {
        class: "is-loading"
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      }), q[134] || (q[134] = e("span", null, "加载中", -1))])) : u(Ve.value.images[we.value]) ? (c(), v("div", Ume, [a(wt, null, {
        default: l(() => [a(P(un))]),
        _: 1
      }), q[135] || (q[135] = e("span", null, "加载失败", -1))])) : (c(), v("img", {
        key: 2,
        src: d(Ve.value.images[we.value]),
        alt: `第${we.value+1}张图`,
        class: "edit-prompt-preview-img"
      }, null, 8, Rme))])])) : M("", !0), e("div", jme, [e("p", qme, "当前为第 " + h(we.value + 1) + " 张图片，可输入修改补充要求后点击「确定提交」。", 1), a(sl, {
        modelValue: ae.value,
        "onUpdate:modelValue": q[43] || (q[43] = ia => ae.value = ia),
        type: "textarea",
        rows: w.value ? 8 : 14,
        maxlength: "500",
        "show-word-limit": "",
        placeholder: "请输入或修改图片提示词，可补充生成要求"
      }, null, 8, ["modelValue", "rows"]), q[137] || (q[137] = e("p", {
        class: "edit-cost-tip"
      }, [g("本次二次修改将额外扣除 "), e("strong", null, "3"), g(" 个点数。")], -1))])], 2)]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Pl, {
      modelValue: me.value,
      "onUpdate:modelValue": q[47] || (q[47] = ia => me.value = ia),
      title: "本作品提示词",
      width: w.value ? "90%" : "800px",
      class: "work-prompt-dialog",
      "close-on-click-modal": !0
    }, {
      footer: l(() => [a(Gt, {
        onClick: nn,
        disabled: !ce.value || !String(ce.value).trim()
      }, {
        default: l(() => [...q[140] || (q[140] = [g("复制", -1)])]),
        _: 1
      }, 8, ["disabled"]), a(Gt, {
        type: "primary",
        onClick: q[46] || (q[46] = ia => me.value = !1)
      }, {
        default: l(() => [...q[141] || (q[141] = [g("关闭", -1)])]),
        _: 1
      })]),
      default: l(() => [a(sl, {
        modelValue: ce.value,
        "onUpdate:modelValue": q[45] || (q[45] = ia => ce.value = ia),
        type: "textarea",
        rows: 14,
        readonly: "",
        placeholder: "暂无提示词（请稍后或联系管理员确认后端字段）",
        class: "work-prompt-input"
      }, null, 8, ["modelValue"])]),
      _: 1
    }, 8, ["modelValue", "width"]), w.value ? M("", !0) : (c(), ye(Pl, {
      key: 4,
      modelValue: et.value,
      "onUpdate:modelValue": q[48] || (q[48] = ia => et.value = ia),
      width: "360px",
      center: ""
    }, {
      footer: l(() => [e("div", Wme, [a(Gt, {
        onClick: bt
      }, {
        default: l(() => [...q[144] || (q[144] = [g("确定", -1)])]),
        _: 1
      })])]),
      default: l(() => [e("div", Fme, [e("canvas", {
        ref_key: "qrCanvas",
        ref: ka
      }, null, 512), q[142] || (q[142] = e("div", {
        class: "qr-title-with-icon"
      }, [e("span", null, [g("可用微信"), e("i", {
        class: "fa-brands fa-weixin",
        style: {
          "font-size": "18px",
          color: "#07c160",
          "margin-left": "4px"
        }
      }), g("扫码来发布")])], -1)), q[143] || (q[143] = e("p", {
        class: "qr-tip"
      }, "已标记发布，请用手机扫描此二维码发布", -1))])]),
      _: 1
    }, 8, ["modelValue"])), a(Pl, {
      modelValue: Ut.value,
      "onUpdate:modelValue": q[50] || (q[50] = ia => Ut.value = ia),
      width: 692,
      center: "",
      class: "publish-plugin-dialog",
      "close-on-click-modal": !1
    }, {
      default: l(() => [e("div", Gme, [q[148] || (q[148] = e("div", {
        class: "plugin-guide-video-box"
      }, [e("video", {
        autoplay: "",
        loop: "",
        src: "https://api.aichaoer.cn/plug/%E5%8F%91%E5%B8%83%E6%95%99%E7%A8%8B.mp4"
      })], -1)), e("div", Jme, [q[147] || (q[147] = e("div", {
        class: "plugin-guide-title"
      }, [e("span", {
        class: "plugin-guide-icon"
      }, "💡"), g(" 安装小插件，一键导出3:5全屏内容 ")], -1)), e("div", Hme, [a(Gt, {
        type: "default",
        size: "large",
        style: {
          "margin-right": "16px",
          width: "92px"
        },
        onClick: q[49] || (q[49] = ia => Ut.value = !1)
      }, {
        default: l(() => [...q[145] || (q[145] = [g(" 取消 ", -1)])]),
        _: 1
      }), a(Gt, {
        type: "primary",
        size: "large",
        class: "plugin-guide-start-button",
        onClick: Qa
      }, {
        default: l(() => [...q[146] || (q[146] = [g(" 开始安装 ", -1)])]),
        _: 1
      })])])])]),
      _: 1
    }, 8, ["modelValue"]), a(Pl, {
      modelValue: Ge.value,
      "onUpdate:modelValue": q[51] || (q[51] = ia => Ge.value = ia),
      width: 692,
      center: "",
      class: "browser-select-dialog",
      "close-on-click-modal": !1
    }, {
      default: l(() => [e("div", Qme, [e("div", Kme, [e("div", Yme, [e("img", {
        class: "browser-select-icon",
        alt: "icon_guide",
        src: P($b)
      }, null, 8, Xme), q[149] || (q[149] = e("div", {
        class: "browser-select-title"
      }, "下载安装小插件", -1))]), q[150] || (q[150] = e("div", {
        class: "browser-select-subtitle"
      }, "安装插件后可模拟人工一键复制粘贴发布节约人力时间,显著提升运营效率", -1))]), q[156] || (q[156] = e("div", {
        class: "browser-select-bg"
      }, null, -1)), e("div", Zme, [q[153] || (q[153] = e("div", {
        class: "browser-section-title"
      }, [e("span", {
        style: {
          "margin-right": "6px"
        }
      }, "⭐"), g("支持下方浏览器 ")], -1)), e("div", ege, [(c(!0), v(Ue, null, gt(qt.value, ia => (c(), v("div", {
        key: ia.id,
        class: "browser-card"
      }, [e("div", tge, [e("img", {
        alt: ia.name,
        src: ia.logo
      }, null, 8, age)]), e("div", lge, h(ia.name), 1)]))), 128))]), e("div", nge, [e("div", {
        class: "app-store-btn-box",
        onClick: rl
      }, [...q[151] || (q[151] = [e("span", {
        class: "app-store-btn"
      }, "下载安装插件", -1)])]), M("", !0)]), q[154] || (q[154] = e("div", {
        class: "version-section"
      }, [e("div", {
        class: "version-text"
      }, "最新版本: V1.0.10 2025-12-08")], -1))]), e("div", oge, [a(Gt, {
        type: "primary",
        size: "large",
        class: "learned-btn",
        onClick: Ga
      }, {
        default: l(() => [...q[155] || (q[155] = [e("span", null, "学会了，关闭", -1), e("img", {
          alt: "next",
          src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/%3E%3C/svg%3E",
          style: {
            width: "16px",
            height: "16px"
          }
        }, null, -1)])]),
        _: 1
      })])])]),
      _: 1
    }, 8, ["modelValue"]), a(Pl, {
      modelValue: dt.value,
      "onUpdate:modelValue": q[52] || (q[52] = ia => dt.value = ia),
      width: 800,
      center: "",
      class: "tutorial-video-dialog",
      "close-on-click-modal": !0
    }, {
      default: l(() => [e("div", {
        class: "tutorial-video-box"
      }, [e("video", {
        autoplay: "",
        loop: "",
        controls: "",
        src: uge
      })])]),
      _: 1
    }, 8, ["modelValue"])], 2)
  }
}
}, dge = al(cge, [
  ["__scopeId", "data-v-3fb21a1d"]
]);
const vge = {
    key: 1,
    class: "mobile-header"
  },
  mge = {
    class: "header-left"
  },
  gge = {
    class: "header-right"
  },
  fge = {
    key: 0,
    class: "content-scroll-area"
  },
  pge = {
    class: "title-card"
  },
  yge = {
    class: "title-editor"
  },
  hge = {
    class: "title-counter"
  },
  bge = {
    class: "title-actions"
  },
  wge = {
    class: "images-section"
  },
  _ge = {
    class: "images-container"
  },
  kge = {
    class: "images-scroll-container"
  },
  Cge = {
    class: "images-grid"
  },
  Age = ["onClick"],
  Ige = ["onClick"],
  xge = {
    class: "image-failed-text"
  },
  Sge = ["src", "onClick"],
  Ege = {
    class: "image-index"
  },
  Tge = {
    class: "add-text"
  },
  $ge = {
    class: "content-section"
  },
  Pge = {
    class: "content-wrapper-mobile"
  },
  Vge = {
    class: "content-actions-mobile"
  },
  zge = {
    key: 2,
    class: "mobile-footer"
  },
  Lge = {
    key: 3,
    class: "result-container"
  },
  Dge = {
    class: "pc-back-header"
  },
  Mge = {
    class: "result-layout"
  },
  Oge = {
    class: "edit-section"
  },
  Bge = {
    class: "images-section-pc"
  },
  Nge = {
    class: "section-title-row"
  },
  Uge = {
    class: "section-title section-title-notice"
  },
  Rge = {
    class: "notice-text"
  },
  jge = {
    class: "content-count-blue"
  },
  qge = {
    class: "content-count-blue"
  },
  Fge = ["onDragstart", "onDragover", "onDragenter", "onDragleave", "onDrop"],
  Wge = {
    class: "image-wrapper-pc"
  },
  Gge = {
    class: "image-container-pc"
  },
  Jge = {
    key: 0,
    class: "image-preview-pc image-preview-loading"
  },
  Hge = {
    key: 1,
    class: "image-preview-pc image-preview-failed"
  },
  Qge = {
    class: "image-failed-text"
  },
  Kge = ["src", "alt"],
  Yge = ["onMousedown"],
  Xge = {
    key: 1,
    class: "image-loading-overlay"
  },
  Zge = {
    class: "loading-progress"
  },
  efe = {
    class: "progress-ring",
    width: "60",
    height: "60"
  },
  tfe = {
    class: "loading-percent"
  },
  afe = {
    class: "add-text-pc"
  },
  lfe = {
    class: "title-section-pc"
  },
  nfe = {
    class: "input-actions"
  },
  ofe = {
    class: "content-section-pc"
  },
  ife = {
    class: "content-title-row"
  },
  sfe = {
    class: "content-actions"
  },
  rfe = {
    class: "content-wrapper"
  },
  ufe = {
    class: "download-content"
  },
  cfe = {
    class: "action-buttons-row"
  },
  dfe = {
    class: "publish-pc-with-tutorial"
  },
  vfe = {
    class: "preview-section"
  },
  mfe = {
    class: "phone-preview"
  },
  gfe = {
    class: "phone-frame"
  },
  ffe = ["src"],
  pfe = {
    class: "phone-screen"
  },
  yfe = {
    class: "phone-content"
  },
  hfe = {
    key: 0,
    class: "preview-carousel"
  },
  bfe = {
    key: 0,
    class: "preview-image preview-image-loading"
  },
  wfe = {
    key: 1,
    class: "preview-image preview-image-failed"
  },
  _fe = {
    class: "image-failed-text"
  },
  kfe = ["src", "alt"],
  Cfe = {
    class: "preview-article"
  },
  Afe = {
    class: "article-title"
  },
  Ife = ["innerHTML"],
  xfe = {
    class: "article-footer"
  },
  Sfe = {
    class: "article-date"
  },
  Efe = {
    class: "preview-interactions"
  },
  Tfe = {
    class: "interaction-bar"
  },
  $fe = {
    class: "interaction-stats"
  },
  Pfe = {
    class: "stat-item"
  },
  Vfe = {
    class: "stat-item"
  },
  zfe = {
    class: "stat-item"
  },
  Lfe = {
    class: "note-preview-wrap"
  },
  Dfe = {
    key: 0,
    class: "note-mobile-user-header"
  },
  Mfe = {
    class: "note-user-info"
  },
  Ofe = {
    class: "note-user-avatar"
  },
  Bfe = ["src"],
  Nfe = {
    class: "note-user-name"
  },
  Ufe = {
    class: "note-gallery-item"
  },
  Rfe = {
    key: 0,
    class: "note-gallery-placeholder loading"
  },
  jfe = {
    key: 1,
    class: "note-gallery-placeholder failed"
  },
  qfe = {
    class: "image-failed-text"
  },
  Ffe = ["src"],
  Wfe = {
    key: 1,
    class: "note-gallery-placeholder"
  },
  Gfe = {
    class: "note-preview-content"
  },
  Jfe = {
    key: 0,
    class: "note-content-header"
  },
  Hfe = {
    class: "note-user-info"
  },
  Qfe = {
    class: "note-user-avatar"
  },
  Kfe = ["src"],
  Yfe = {
    class: "note-user-name"
  },
  Xfe = {
    key: 1,
    class: "note-content-header-spacer"
  },
  Zfe = {
    class: "note-content-title"
  },
  epe = {
    class: "note-content-description"
  },
  tpe = {
    key: 2,
    class: "note-content-tags"
  },
  ape = {
    class: "note-content-edit-time"
  },
  lpe = {
    class: "note-comment-input-area"
  },
  npe = {
    class: "note-comment-actions"
  },
  ope = {
    class: "rewrite-dialog-content"
  },
  ipe = {
    key: 0,
    class: "custom-requirement-section"
  },
  spe = {
    class: "rewrite-progress-window"
  },
  rpe = {
    class: "rewrite-progress-percent"
  },
  upe = {
    key: 0,
    class: "preview-large-placeholder loading"
  },
  cpe = {
    key: 1,
    class: "preview-large-placeholder failed"
  },
  dpe = {
    class: "image-failed-text"
  },
  vpe = ["src", "alt"],
  mpe = {
    key: 2,
    class: "preview-bottom-actions"
  },
  gpe = {
    key: 0,
    class: "preview-action-left"
  },
  fpe = {
    key: 1,
    class: "preview-indicator"
  },
  ppe = {
    key: 2,
    class: "preview-action-right"
  },
  ype = {
    key: 0,
    class: "edit-prompt-preview"
  },
  hpe = {
    class: "edit-prompt-preview-img-wrap"
  },
  bpe = {
    key: 0,
    class: "edit-prompt-preview-loading"
  },
  wpe = {
    key: 1,
    class: "edit-prompt-preview-failed"
  },
  _pe = ["src", "alt"],
  kpe = {
    class: "retry-outline-form"
  },
  Cpe = {
    class: "retry-outline-tip"
  },
  Ape = {
    class: "publish-qr-content"
  },
  Ipe = {
    class: "qr-url-tip"
  },
  xpe = {
    class: "dialog-footer"
  },
  Spe = {
    class: "plugin-guide-content"
  },
  Epe = {
    class: "plugin-guide-content-box"
  },
  Tpe = {
    class: "plugin-guide-actions"
  },
  $pe = {
    class: "browser-select-content"
  },
  Ppe = {
    class: "browser-select-header"
  },
  Vpe = {
    class: "browser-select-title-section"
  },
  zpe = ["src"],
  Lpe = {
    class: "browser-select-section"
  },
  Dpe = {
    class: "browser-grid"
  },
  Mpe = {
    class: "browser-logo"
  },
  Ope = ["alt", "src"],
  Bpe = {
    class: "browser-name"
  },
  Npe = {
    class: "install-options"
  };
const Upe = {
    class: "browser-select-footer"
  },
  Rpe = 2e4,
  Zm = "noteAIUsage.v1",
  jpe = 50,
  qpe = "https://api.aichaoer.cn/plug/%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.mp4",
  Fpe = 5e3,
  Wpe = {
    __name: "NoteEditor2",
    setup(t) {
      const o = ln(),
        i = fn(),
        n = p("用户12681635"),
        s = Xe => Xe === 0 || Xe === "0",
        u = Xe => Xe === -1 || Xe === "-1",
        d = Xe => !s(Xe) && !u(Xe) && Xe != null && Xe !== "" ? String(Xe) : "",
        f = p(!1),
        y = p(!1),
        w = p(!1),
        S = p(null),
        z = p(null),
        x = p(null),
        C = p(null),
        V = p(!1),
        $ = p(0),
        N = p(0),
        T = p(-1),
        R = p(-1),
        O = p(!1),
        J = p({
          x: 0,
          index: -1
        }),
        ee = p(!1),
        ie = p(!1),
        Ae = p("custom"),
        F = p(""),
        Y = p(!1),
        ne = p(!1),
        De = p(!1),
        Q = p(""),
        re = p(0);
      let b = null;
      const te = p(!1),
        we = p(""),
        ae = p(!1),
        me = p(0),
        ce = p(-1),
        ue = p(!1),
        U = p(-1),
        de = p(""),
        _e = p(!1),
        xe = p(0),
        Ce = p(2 * Math.PI * 26),
        Re = Le(() => Ce.value * (1 - xe.value / 100)),
        nt = p(!1),
        tt = p({}),
        qe = p(!!localStorage.getItem("authToken")),
        Me = () => String(Ye.value.id || Ye.value.globalId || ""),
        rt = Xe => {
          const se = Me();
          if (!se) return !1;
          try {
            const Ht = JSON.parse(localStorage.getItem(Zm) || "{}")[se] || {};
            return Xe === "title" ? (Ht.rewriteTitleCount || 0) < 1 : Xe === "content" ? (Ht.rewriteContentCount || 0) < 1 : !1
          } catch (Tt) {
            return console.error("检查限免使用失败:", Tt), !1
          }
        },
        ct = Xe => {
          const se = Me();
          if (se) try {
            const Tt = JSON.parse(localStorage.getItem(Zm) || "{}");
            Tt[se] || (Tt[se] = {}), Xe === "title" ? Tt[se].rewriteTitleCount = (Tt[se].rewriteTitleCount || 0) + 1 : Xe === "content" && (Tt[se].rewriteContentCount = (Tt[se].rewriteContentCount || 0) + 1), localStorage.setItem(Zm, JSON.stringify(Tt))
          } catch (Tt) {
            console.error("记录使用次数失败:", Tt)
          }
        },
        E = p(0),
        _ = p(0),
        je = p(!1),
        K = p(""),
        B = p(!1),
        W = p(!1),
        Te = p(!1),
        it = p([{
          id: "edge",
          name: "Edge浏览器",
          logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_edge-browser.3bf78fcf093a.png"
        }, {
          id: "360safe",
          name: "360安全",
          logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_360-anquan-browser.8530966b0bab.png"
        }, {
          id: "360jisu",
          name: "360极速",
          logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_360-jisu-browser.c4116862c5f8.png"
        }, {
          id: "chrome",
          name: "Chrome",
          logo: "https://assets.weibanzhushou.com/web/pt-web/install-page_chrome-browser.6dc5e59383e0.png"
        }]),
        yt = p("douyin"),
        st = p(!1),
        Ie = p(null),
        pe = p(null),
        Be = Xe => Array.isArray(Xe) && Xe.some(se => se === 0 || se === "0"),
        xt = () => {
          const Xe = navigator.userAgent || navigator.vendor || window.opera || "",
            se = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|Mobile|mobile/i.test(Xe),
            Tt = window.innerWidth <= 768,
            Ht = "ontouchstart" in window || navigator.maxTouchPoints > 0,
            Pa = /Windows|Macintosh|Linux|X11/i.test(Xe) && !se;
          w.value = se || Tt && (Ht || !Pa)
        },
        Yt = Xe => {
          const se = "https://xiaohongshu.com/publish",
            Tt = new URLSearchParams({
              workId: String(Xe.id || ""),
              title: encodeURIComponent(Xe.title || ""),
              cover: encodeURIComponent(Xe.images && Xe.images[0] || Xe.cover || "")
            });
          return `${se}?${Tt.toString()}`
        },
        Ye = p({
          id: null,
          title: "",
          content: "",
          images: [],
          tags: [],
          source: "",
          createdAt: "",
          updatedAt: null,
          published: !1,
          publishedAt: null,
          initialImageCount: 0,
          templateInfo: {
            title: "3招拿捏人性,没有卖不出去的饰品!",
            category: "女装饰品"
          }
        }),
        va = Xe => {
          if (Xe == null || typeof Xe != "string") return null;
          try {
            return JSON.parse(Xe)
          } catch {
            return null
          }
        },
        Ea = Xe => {
          if (Xe == null) return "";
          if (typeof Xe == "string") return Xe.trim();
          if (typeof Xe == "number" || typeof Xe == "boolean") return String(Xe);
          try {
            return JSON.stringify(Xe, null, 2)
          } catch {
            return String(Xe)
          }
        },
        ft = Xe => {
          const se = Xe || {},
            Ht = ((...le) => {
              for (const ot of le) {
                const vt = se == null ? void 0 : se[ot];
                if (typeof vt == "string" && vt.trim()) return vt.trim();
                if (typeof vt == "number" || typeof vt == "boolean") return String(vt);
                if (typeof vt == "object") {
                  const bt = Ea(vt);
                  if (bt) return bt
                }
              }
              return ""
            })("title_old", "prompt", "content_prompt", "desc_prompt", "work_prompt", "prompt_text", "outline", "outline_text");
          if (Ht) return Ht;
          const Pa = (se == null ? void 0 : se.diy) ?? (se == null ? void 0 : se.diyInfo);
          if (!Pa) return "";
          const Va = typeof Pa == "string" ? va(Pa) ?? null : Pa,
            X = Va && typeof Va == "object" ? Va : null;
          if (X) {
            for (const ot of ["title_old", "prompt", "content_prompt", "desc_prompt", "work_prompt", "prompt_text"]) {
              const vt = X == null ? void 0 : X[ot];
              if (typeof vt == "string" && vt.trim()) return vt.trim();
              if (typeof vt == "number" || typeof vt == "boolean") return String(vt)
            }
            const le = Ea(X);
            if (le) return le
          } else {
            const le = Ea(Pa);
            if (le) return le
          }
          return ""
        },
        Z = () => {
          te.value = !0
        },
        pt = async () => {
          const Xe = we.value ? String(we.value) : "";
          if (!Xe.trim()) {
            A.warning("暂无可复制的提示词");
            return
          }
          try {
            await navigator.clipboard.writeText(Xe), A.success("提示词已复制")
          } catch {
            A.error("复制失败")
          }
        }, Et = () => {
          b && (clearInterval(b), b = null), re.value = 0, Q.value = "", De.value = !1
        }, Mt = Xe => {
          Q.value = Xe || "生成中", re.value = 0, De.value = !0, b && (clearInterval(b), b = null);
          const se = Date.now();
          b = setInterval(() => {
            const Tt = Date.now() - se,
              Ht = Math.min(1, Tt / Rpe),
              Pa = Math.min(99, Math.floor(Ht * 99));
            re.value = Pa
          }, 120)
        }, Qe = () => {
          b && (clearInterval(b), b = null), re.value = 100, window.setTimeout(() => {
            De.value = !1, re.value = 0, Q.value = ""
          }, 550)
        }, j = Xe => {
          const se = Xe.images || [];
          Ye.value = {
            id: Xe.id,
            type: Xe.type,
            title: Xe.title || "",
            content: Xe.desc || Xe.title || "请输入图文内容...",
            images: se,
            tags: [],
            source: "yijuhua",
            createdAt: Xe.createtime ? new Date(Xe.createtime * 1e3).toISOString() : new Date().toISOString(),
            updatedAt: Xe.updatetime ? new Date(Xe.updatetime * 1e3).toISOString() : null,
            published: Xe.is_release === 1,
            publishedAt: Xe.is_release === 1 && Xe.updatetime ? new Date(Xe.updatetime * 1e3).toISOString() : null,
            initialImageCount: se.length,
            templateInfo: {
              title: Xe.title || "",
              category: ""
            }
          }, we.value = ft(Xe)
        }, Ee = () => {
          var se;
          if (!Be(Ye.value.images)) return;
          const Xe = ((se = Ye.value) == null ? void 0 : se.id) ?? i.params.id;
          Xe && (pe.value || (pe.value = setInterval(async () => {
            var Ht;
            const Tt = ((Ht = Ye.value) == null ? void 0 : Ht.id) ?? Xe;
            if (Tt) try {
              const Pa = await Ms(Number(Tt));
              Pa && (j(Pa), Be(Ye.value.images) || pe.value && (clearInterval(pe.value), pe.value = null))
            } catch (Pa) {
              console.warn("轮询作品详情失败:", Pa)
            }
          }, Fpe)))
        }, ht = async () => {
          try {
            const Xe = i.params.id;
            if (!Xe) {
              A.error("作品ID不存在"), o.push("/works");
              return
            }
            try {
              const Tt = await Ms(Number(Xe));
              if (Tt) {
                const Ht = Tt.images || [];
                j(Tt), Ee();
                return
              }
            } catch (Tt) {
              console.warn("从API获取作品失败，尝试从本地加载:", Tt)
            }
            null || (A.error("作品不存在"), o.push("/works"))
          } catch (Xe) {
            console.error("Failed to load work:", Xe), A.error("加载作品失败"), o.push("/works")
          }
        }, jt = () => {
          if (nt.value) {
            A.warning("图片上传中，请稍候");
            return
          }
          S.value && S.value.click()
        }, ca = async Xe => {
          const se = Xe.target.files;
          if (!se || se.length === 0) return;
          const Tt = 20;
          Array.isArray(Ye.value.images) || (Ye.value.images = []);
          const Ht = Tt - Ye.value.images.length;
          if (Ht <= 0) {
            A.warning(`最多只能上传${Tt}张图片`), S.value && (S.value.value = "");
            return
          }
          const Pa = Array.from(se),
            Va = Pa.slice(0, Ht);
          Pa.length > Va.length && A.warning(`最多只能上传${Tt}张图片，已为您保留前${Ht}张`);
          let X = 0;
          const le = [];
          nt.value = !0;
          try {
            for (const ot of Va) {
              if (!ot.type.startsWith("image/")) {
                le.push(`${ot.name}（文件类型不支持）`);
                continue
              }
              try {
                const vt = await ao(ot);
                (Array.isArray(vt) ? vt : Array.isArray(vt == null ? void 0 : vt.data) ? vt.data : [(vt == null ? void 0 : vt.data) || (vt == null ? void 0 : vt.url) || vt]).forEach(Jt => {
                  Jt && Ye.value.images.length < Tt && (Ye.value.images.push(Jt), X += 1)
                })
              } catch (vt) {
                console.error("图片上传失败:", vt), le.push(`${ot.name}（上传失败）`)
              }
            }
            X > 0 && A.success(`成功上传 ${X} 张图片`), le.length > 0 && A.warning(`部分图片未能上传：${le.join("、")}`)
          } finally {
            nt.value = !1, S.value && (S.value.value = "")
          }
        }, be = async Xe => {
          try {
            await La.confirm("确定要删除这张图片吗？", "确认删除", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            }), Ye.value.images.splice(Xe, 1), A.success("图片已删除")
          } catch {}
        }, he = Xe => {
          if (Xe <= 0) return;
          const se = [...Ye.value.images],
            Tt = se[Xe];
          se[Xe] = se[Xe - 1], se[Xe - 1] = Tt, Ye.value.images = se, A.success("图片已向左移动")
        }, kt = Xe => {
          if (Xe >= Ye.value.images.length - 1) return;
          const se = [...Ye.value.images],
            Tt = se[Xe];
          se[Xe] = se[Xe + 1], se[Xe + 1] = Tt, Ye.value.images = se, A.success("图片已向右移动")
        }, Bt = Xe => {
          const se = Xe.target;
          se.closest("button") || se.closest(".el-icon") || se.closest(".overlay-buttons") || (Xe.stopPropagation(), Xe.clientX, Xe.clientY)
        }, Ze = (Xe, se) => {
          Xe.target.closest("button") || Xe.target.closest(".overlay-buttons")
        }, Wt = (Xe, se) => {
          var le, ot;
          const Tt = Xe.target;
          if (Tt.closest("button") || Tt.closest(".el-icon") || Tt.closest(".overlay-buttons")) return Xe.preventDefault(), !1;
          Xe.stopPropagation(), T.value = se, O.value = !0, ee.value = !0, Xe.dataTransfer.effectAllowed = "move", Xe.dataTransfer.setData("text/html", se.toString());
          const Pa = Xe.currentTarget.getBoundingClientRect(),
            Va = (le = x.value) == null ? void 0 : le.getBoundingClientRect();
          if (Va) {
            const vt = ((ot = x.value) == null ? void 0 : ot.scrollLeft) || 0;
            J.value.x = Pa.left - Va.left + Pa.width / 2 + vt - 14, J.value.index = se
          }
          console.log("拖拽开始:", se, "draggedImageIndex:", T.value);
          const X = Xe.currentTarget.querySelector(".image-preview-pc");
          if (X) {
            const vt = X.cloneNode(!0);
            vt.style.width = "135px", vt.style.height = "auto", vt.style.opacity = "0.8", vt.style.transform = "rotate(5deg)", document.body.appendChild(vt), vt.style.position = "absolute", vt.style.top = "-1000px", Xe.dataTransfer.setDragImage(vt, 67, 82), setTimeout(() => {
              document.body.contains(vt) && document.body.removeChild(vt)
            }, 0)
          }
        }, aa = (Xe, se) => {
          var Tt, Ht;
          if (Xe.preventDefault(), Xe.stopPropagation(), Xe.dataTransfer.dropEffect = "move", T.value !== -1 && T.value !== se) {
            const Va = Xe.currentTarget.getBoundingClientRect(),
              X = (Tt = x.value) == null ? void 0 : Tt.getBoundingClientRect();
            if (X) {
              const le = ((Ht = x.value) == null ? void 0 : Ht.scrollLeft) || 0;
              T.value < se ? (J.value.x = Va.right - X.left + le - 14, J.value.index = se + 1) : (J.value.x = Va.left - X.left + le - 14, J.value.index = se), R.value = se
            }
          }
        }, xa = (Xe, se) => {
          var Tt, Ht;
          if (Xe.preventDefault(), Xe.stopPropagation(), T.value !== -1 && T.value !== se) {
            const Va = Xe.currentTarget.getBoundingClientRect(),
              X = (Tt = x.value) == null ? void 0 : Tt.getBoundingClientRect();
            if (X) {
              const le = ((Ht = x.value) == null ? void 0 : Ht.scrollLeft) || 0;
              T.value < se ? (J.value.x = Va.right - X.left + le - 14, J.value.index = se + 1) : (J.value.x = Va.left - X.left + le - 14, J.value.index = se), R.value = se
            }
          }
        }, Kt = (Xe, se) => {
          const Tt = Xe.currentTarget.getBoundingClientRect(),
            Ht = Xe.clientX,
            Pa = Xe.clientY;
          Ht >= Tt.left && Ht <= Tt.right && Pa >= Tt.top && Pa <= Tt.bottom || R.value === se && (R.value = -1)
        }, at = (Xe, se) => {
          if (Xe.preventDefault(), Xe.stopPropagation(), T.value === -1 || T.value === se) return;
          let Tt = se;
          T.value < se ? Tt = se + 1 : Tt = se;
          const Ht = [...Ye.value.images],
            Pa = Ht[T.value];
          Ht.splice(T.value, 1);
          const Va = T.value < Tt ? Tt - 1 : Tt;
          Ht.splice(Va, 0, Pa), Ye.value.images = Ht, R.value = -1, T.value = -1, O.value = !1, ee.value = !1, J.value = {
            x: 0,
            index: -1
          }
        }, Fe = Xe => {
          console.log("拖拽结束"), Xe.target && Xe.target.style && (Xe.target.style.opacity = "1"), R.value = -1, T.value = -1, O.value = !1, ee.value = !1, J.value = {
            x: 0,
            index: -1
          }
        }, Ke = () => {
          if (!x.value || !C.value) return J.value.x;
          const Xe = x.value.getBoundingClientRect(),
            se = C.value.getBoundingClientRect(),
            Tt = x.value.scrollLeft;
          return Xe.left - se.left + J.value.x + Tt
        }, et = Xe => {
          Xe.target.closest(".image-card") || O.value || !x.value || (V.value = !0, $.value = Xe.pageX - x.value.offsetLeft, N.value = x.value.scrollLeft, x.value.style.cursor = "grabbing")
        }, Nt = Xe => {
          if (!V.value || !x.value) return;
          Xe.preventDefault();
          const Tt = (Xe.pageX - x.value.offsetLeft - $.value) * 2;
          x.value.scrollLeft = N.value - Tt
        }, Ut = () => {
          x.value && (V.value = !1, x.value.style.cursor = "grab")
        }, Ge = Xe => {
          if (!x.value) return;
          const se = 190,
            Tt = x.value.scrollLeft,
            Ht = Xe === "left" ? Tt - se : Tt + se;
          x.value.scrollTo({
            left: Ht,
            behavior: "smooth"
          })
        }, dt = async () => {
          try {
            if (!Ye.value.id) {
              A.error("作品ID不存在");
              return
            }
            await Yu(Ye.value.id, Ye.value.title, Ye.value.content, Ye.value.images), Ye.value.updatedAt = new Date().toISOString(), A.success("保存成功")
          } catch (Xe) {
            console.error("Failed to save work:", Xe), A.error("保存失败：" + (Xe.message || "未知错误"))
          }
        }, qt = Le(() => {
          if (!Ye.value.images || Ye.value.images.length === 0) return 0;
          const Xe = Ye.value.images.length,
            se = Ye.value.initialImageCount || 0;
          return Math.max(0, Xe - se)
        }), ka = Le(() => {
          if (!Ye.value.images || Ye.value.images.length === 0) return 0;
          const Xe = Ye.value.initialImageCount || 0,
            se = Ye.value.images.length;
          return qt.value > 0 || se >= Xe ? Math.max(0, Xe - 1) : Math.max(0, se - 1)
        }), Ne = Xe => Xe === 0 ? "封面图下载" : `内容图${Xe}下载`, ga = async (Xe, se) => {
          try {
            const Tt = se === 0 ? "封面图" : `内容图${se}`,
              Ht = se === 0 ? "封面图" : "内容图";
            if (await La.confirm(`确定要下载${Ht}吗？`, "下载确认", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info"
              }), window.open(Xe, "_blank")) A.success("已在新窗口打开图片，请在新窗口中右键保存");
            else {
              const Va = document.createElement("a");
              Va.href = Xe, Va.download = `${Tt}.jpg`, Va.target = "_blank", Va.click(), A.success("下载成功！")
            }
          } catch (Tt) {
            if (Tt === "cancel") return;
            console.error("下载图片失败:", Tt), A.error("下载图片失败")
          }
        }, St = async () => {
          if (!Ye.value.images || Ye.value.images.length === 0) {
            A.warning("没有图片可下载");
            return
          }
          try {
            await La.confirm(`确定要下载所有图片吗？共${Ye.value.images.length}张图片。`, "下载确认", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "info"
            }), A.info("正在下载图片，请稍候...");
            const Xe = new Mr,
              se = Ye.value.images.map(async (Jt, Ra) => {
                try {
                  const Ca = await fetch(Jt, {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache"
                  });
                  if (!Ca.ok) throw new Error(`HTTP error! status: ${Ca.status}`);
                  const Ba = await Ca.blob(),
                    Qa = Ra === 0 ? "封面图1.jpg" : `内容图${Ra}.jpg`;
                  Xe.file(Qa, Ba)
                } catch (Ca) {
                  console.error(`下载图片${Ra}失败:`, Ca);
                  try {
                    const Ba = await new Promise((rl, sa) => {
                        const Ga = new XMLHttpRequest;
                        Ga.open("GET", Jt, !0), Ga.responseType = "blob", Ga.onload = () => {
                          Ga.status === 200 ? rl(Ga.response) : sa(new Error(`XMLHttpRequest failed with status: ${Ga.status}`))
                        }, Ga.onerror = () => sa(new Error("XMLHttpRequest failed")), Ga.send()
                      }),
                      Qa = Ra === 0 ? "封面图1.jpg" : `内容图${Ra}.jpg`;
                    Xe.file(Qa, Ba)
                  } catch (Ba) {
                    throw console.error(`使用 XMLHttpRequest 下载图片${Ra}也失败:`, Ba), new Error(`下载图片${Ra}失败: ${Ca.message||Ca}`)
                  }
                }
              }),
              Tt = await Promise.allSettled(se),
              Ht = Tt.filter(Jt => Jt.status === "rejected");
            if (Ht.length > 0) {
              if (console.warn(`有 ${Ht.length} 张图片下载失败:`, Ht), Ht.length === Tt.length) throw new Error("所有图片下载失败，请检查网络连接或图片链接");
              A.warning(`有 ${Ht.length} 张图片下载失败，将继续下载其他图片`)
            }
            const Pa = await Xe.generateAsync({
                type: "blob"
              }),
              Va = document.createElement("a"),
              X = new Date,
              le = `${X.getFullYear()}${String(X.getMonth()+1).padStart(2,"0")}${String(X.getDate()).padStart(2,"0")}${String(X.getHours()).padStart(2,"0")}${String(X.getMinutes()).padStart(2,"0")}${String(X.getSeconds()).padStart(2,"0")}`,
              bt = `${(Ye.value.title||"未命名图文").replace(/[<>:"/\\|?*]/g,"_").trim()}_${le}.zip`;
            Va.href = URL.createObjectURL(Pa), Va.download = bt, Va.click(), URL.revokeObjectURL(Va.href), A.success("图片下载成功！")
          } catch (Xe) {
            if (Xe === "cancel") return;
            console.error("下载失败:", Xe);
            const se = (Xe == null ? void 0 : Xe.message) || (Xe == null ? void 0 : Xe.toString()) || "未知错误";
            A.error("下载失败：" + se)
          }
        }, Oe = Xe => {
          me.value = Xe, ae.value = !0, w.value || document.addEventListener("keydown", Ve)
        }, Ve = Xe => {
          ae.value && (Xe.key === "ArrowLeft" ? (Xe.preventDefault(), Ma.value || ve()) : Xe.key === "ArrowRight" ? (Xe.preventDefault(), Je.value || $t()) : Xe.key === "Escape" && (Xe.preventDefault(), ae.value = !1))
        };
      oa(ae, Xe => {
        !Xe && !w.value && document.removeEventListener("keydown", Ve)
      });
      const Ma = Le(() => me.value === 0),
        Je = Le(() => Ye.value.images && Ye.value.images.length > 0 && me.value === Ye.value.images.length - 1),
        ve = () => {
          Ye.value.images && Ye.value.images.length > 0 && me.value > 0 && (me.value = me.value - 1)
        },
        $t = () => {
          Ye.value.images && Ye.value.images.length > 0 && me.value < Ye.value.images.length - 1 && (me.value = me.value + 1)
        };
      let ta = null;
      const ha = Xe => {
          w.value || !Ye.value.images || Ye.value.images.length <= 1 || (Xe.preventDefault(), Xe.stopPropagation(), ta && clearTimeout(ta), ta = setTimeout(() => {
            Xe.deltaY > 0 ? Je.value || $t() : Xe.deltaY < 0 && (Ma.value || ve())
          }, 100))
        },
        Qt = Xe => {
          E.value = Xe.touches[0].clientX
        },
        ba = Xe => {
          _.value = Xe.changedTouches[0].clientX, Ja()
        },
        Ja = () => {
          const Xe = E.value - _.value;
          Math.abs(Xe) > jpe && (Xe > 0 ? Je.value || $t() : Ma.value || ve())
        },
        ml = () => {
          ue.value = !1, U.value = -1, de.value = ""
        },
        $e = async () => {
          var Pa, Va;
          const Xe = U.value,
            se = (Pa = Ye.value) == null ? void 0 : Pa.id;
          if (Xe < 0 || !se) {
            ue.value = !1;
            return
          }
          ue.value = !1;
          const Ht = (((Va = Ye.value) == null ? void 0 : Va.images) || [])[Xe];
          try {
            if (!Ht || s(Ht) || u(Ht)) throw new Error("当前图片不可编辑，请稍后重试");
            _e.value = !0, ce.value = Xe, await pv({
              id: se,
              image_prompt: de.value,
              image_index: Xe,
              image_url: Ht
            }), A.success("已提交修改，图片将重新生成"), Ye.value.images && Ye.value.images[Xe] !== void 0 && (Ye.value.images[Xe] = 0), Ee()
          } catch (X) {
            console.error("修改图片失败:", X), A.error((X == null ? void 0 : X.message) || "修改图片失败，请稍后重试")
          } finally {
            _e.value = !1, ce.value = -1, U.value = -1, de.value = ""
          }
        }, We = p(!1), ze = Le(() => {
          var Xe;
          return (((Xe = Ye.value) == null ? void 0 : Xe.images) || [])[U.value] || ""
        }), H = () => {
          var Tt, Ht;
          const Xe = me.value;
          if (!((Tt = Ye.value) != null && Tt.id) || !((Ht = Ye.value) != null && Ht.images) || Ye.value.images[Xe] === void 0) return;
          const se = Ye.value.images[Xe];
          if (!se || se === 0 || se === "0" || se === -1 || se === "-1") {
            A.warning("当前图片不可编辑，请稍后重试");
            return
          }
          ae.value = !1, U.value = Xe, We.value = !0
        }, Lt = () => {
          var se;
          const Xe = U.value;
          Xe >= 0 && ((se = Ye.value) != null && se.images) && Ye.value.images[Xe] !== void 0 && (Ye.value.images[Xe] = 0), Ee(), U.value = -1
        }, Ft = async () => {
          try {
            await La.confirm("如替换后则无法恢复到原图，请您考虑好，建议先下载保存再来替换。", "替换提醒", {
              confirmButtonText: "确定替换",
              cancelButtonText: "取消",
              type: "warning"
            })
          } catch {
            return
          }
          z.value && z.value.click()
        }, Rt = async Xe => {
          const se = Xe.target.files;
          if (!se || se.length === 0) {
            z.value && (z.value.value = "");
            return
          }
          const Tt = se[0];
          if (!Tt.type.startsWith("image/")) {
            A.error("请选择图片文件"), z.value && (z.value.value = "");
            return
          }
          try {
            nt.value = !0, A.info("正在上传图片...");
            const Ht = await ao(Tt),
              Va = (Array.isArray(Ht) ? Ht : Array.isArray(Ht == null ? void 0 : Ht.data) ? Ht.data : [(Ht == null ? void 0 : Ht.data) || (Ht == null ? void 0 : Ht.url) || Ht])[0] || "";
            if (!Va) throw new Error("上传失败，未返回图片URL");
            Ye.value.images[0] = Va, await dt(), A.success("封面更换成功"), ae.value = !1
          } catch (Ht) {
            console.error("本地更换封面失败:", Ht), A.error("更换封面失败，请重试")
          } finally {
            nt.value = !1, z.value && (z.value.value = "")
          }
        }, Ot = () => {
          try {
            Ye.value.published = !0, Ye.value.publishedAt = new Date().toISOString()
          } catch (Xe) {
            console.error("标记作品为已发布失败:", Xe)
          }
        }, Xt = async () => {
          je.value = !1, await ht()
        }, At = async () => {
          try {
            Ye.value.published ? await La.confirm(`作品"${Ye.value.title||"未命名"}"已标记发布，是否重新跳转发布？`, "重新发布", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "info"
            }) : await Tp();
            const Xe = Ye.value.id || Ye.value.globalId;
            if (!Xe) {
              A.error("作品ID不存在，无法发布");
              return
            }
            try {
              await wv(Xe);
              const se = Yt(Ye.value),
                Tt = navigator.userAgent || navigator.vendor || window.opera || "",
                Ht = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|Mobile|mobile/i.test(Tt),
                Pa = window.innerWidth <= 768,
                Va = "ontouchstart" in window || navigator.maxTouchPoints > 0,
                X = /Windows|Macintosh|Linux|X11/i.test(Tt) && !Ht;
              if (Ht || Pa && (Va || !X)) {
                Ot();
                const ot = `/tiaozhuan?workId=${Xe}`;
                window.location.href = ot
              } else {
                Ot();
                const ot = `${window.location.origin}/tiaozhuan?workId=${Xe}`;
                if (K.value = ot, je.value = !0, await Da(), Ie.value) try {
                  await Ln.toCanvas(Ie.value, ot, {
                    width: 280,
                    margin: 2
                  })
                } catch (vt) {
                  console.error("生成二维码失败", vt), A.error("生成二维码失败")
                }
              }
            } catch (se) {
              console.error("发布失败:", se), A.error((se == null ? void 0 : se.message) || "发布失败，请稍后重试")
            }
          } catch {}
        }, pa = () => {
          const Xe = document.documentElement.getAttribute("data-huotu-extension") === "installed",
            se = document.querySelector('meta[name="huotu-extension"]') !== null;
          return Xe || se
        }, Oa = Xe => {
          if (!Xe || typeof Xe != "string") return Xe;
          const se = /#([^#\s\n\r]+)/g;
          let Tt;
          const Ht = [];
          for (;
            (Tt = se.exec(Xe)) !== null;) Ht.push({
            fullMatch: Tt[0],
            index: Tt.index,
            length: Tt[0].length
          });
          if (Ht.length <= 5) return Xe;
          const Pa = Ht.slice(5);
          let Va = Xe;
          for (let X = Pa.length - 1; X >= 0; X--) {
            const le = Pa[X],
              ot = Va.substring(0, le.index),
              vt = Va.substring(le.index + le.length),
              bt = ot.replace(/\s+$/, ""),
              Jt = vt.replace(/^\s+/, "");
            Va = bt + Jt
          }
          return Va
        }, Fa = () => {
          if (!st.value)
            if (pa()) {
              st.value = !0;
              try {
                const Xe = Array.isArray(Ye.value.images) ? Ye.value.images.filter(Pa => Pa !== 0 && Pa !== -1 && Pa).map(Pa => String(Pa)) : [],
                  se = yt.value === "douyin" ? "DOUYIN_PUBLISH" : "XHS_PUBLISH";
                let Tt = String(Ye.value.content || "");
                yt.value === "douyin" && (Tt = Oa(Tt));
                const Ht = {
                  type: se,
                  payload: {
                    title: String(Ye.value.title || "我的标题"),
                    content: Tt,
                    images: Xe
                  }
                };
                window.postMessage(Ht, "*"), A.success("已提交发布")
              } catch (Xe) {
                console.error("发布失败:", Xe), A.error("发布失败，请检查数据格式"), st.value = !1
              }
            } else W.value = !0
        }, gl = () => {
          B.value = !1, W.value = !0
        }, jl = () => {
          const Xe = "https://api.aichaoer.cn/plug/%E7%81%AB%E5%85%94%E5%B7%A5%E5%85%B7%E7%AE%B1%E5%8F%91%E5%B8%83%E5%8A%A9%E6%89%8B1.0.1.zip";
          window.open(Xe, "_blank")
        }, en = () => {
          Te.value = !0
        }, fa = () => {
          W.value = !1
        }, Ka = async () => {
          try {
            await navigator.clipboard.writeText(Ye.value.title), A.success("标题已复制")
          } catch {
            A.error("复制失败")
          }
        }, Dl = () => {
          Ul()
        }, tn = async () => {
          try {
            await navigator.clipboard.writeText(Ye.value.content), A.success("内容已复制")
          } catch {
            A.error("复制失败")
          }
        }, zt = () => {
          _l()
        }, dl = () => {
          window.history.length > 1 ? o.back() : o.push("/works")
        }, Nl = () => {
          const Xe = Ye.value.id || Ye.value.globalId;
          if (!Xe) {
            A.error("作品ID不存在，无法预览");
            return
          }
          o.push(`/tiaozhuan?workId=${Xe}`)
        }, kn = () => Xl, Cn = () => n.value || "用户", ll = () => {
          if (Ye.value.updatedAt) {
            const Pa = new Date(Ye.value.updatedAt),
              Va = Pa.getFullYear(),
              X = String(Pa.getMonth() + 1).padStart(2, "0"),
              le = String(Pa.getDate()).padStart(2, "0");
            return `${Va}-${X}-${le}`
          }
          if (Ye.value.createdAt) {
            const Pa = new Date(Ye.value.createdAt),
              Va = Pa.getFullYear(),
              X = String(Pa.getMonth() + 1).padStart(2, "0"),
              le = String(Pa.getDate()).padStart(2, "0");
            return `${Va}-${X}-${le}`
          }
          const Xe = new Date,
            se = Xe.getFullYear(),
            Tt = String(Xe.getMonth() + 1).padStart(2, "0"),
            Ht = String(Xe.getDate()).padStart(2, "0");
          return `${se}-${Tt}-${Ht}`
        }, Ul = async () => {
          var Xe, se;
          try {
            if (!Me()) {
              A.error("图文ID不存在，无法使用AI重写标题");
              return
            }
            const Ht = rt("title");
            Ht ? await La.confirm("确定要使用AI重写标题吗？首次免费使用，系统将根据当前内容重新生成标题", "确认重写", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "info"
            }) : (await dn(), await La.confirm("确定要使用AI重写标题吗？将消耗1个点数，系统将根据当前内容重新生成标题", "确认重写", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })), Y.value = !0, Mt("正在重写标题");
            const Pa = Ye.value.title || "",
              Va = Ye.value.content || "",
              X = ((Xe = Ye.value) == null ? void 0 : Xe.id) || ((se = Ye.value) == null ? void 0 : se.globalId) || "",
              le = await yv(Pa, Va, X),
              ot = (le == null ? void 0 : le.title) || "";
            if (!ot) throw new Error("生成失败，未返回新标题");
            const vt = ot.length > 20 ? ot.substring(0, 20) : ot;
            Ye.value.title = vt, ct("title"), await dt();
            const bt = Ht ? "标题重写成功（首次免费）" : "标题重写成功";
            A.success(bt), Qe()
          } catch (Tt) {
            Tt !== "cancel" && (console.error("AI重写标题失败:", Tt), A.error("重写标题失败")), Et()
          } finally {
            Y.value = !1
          }
        }, _l = async () => {
          try {
            await dn(), ie.value = !0, Ae.value = "custom", F.value = ""
          } catch (Xe) {
            console.error("打开改写对话框失败:", Xe)
          }
        }, Tn = async () => {
          var Xe, se;
          try {
            if (Ae.value === "custom" && !F.value.trim()) {
              A.warning("请填写修改要求");
              return
            }
            if (!Me()) {
              A.error("图文ID不存在，无法使用AI改写内容"), ie.value = !1;
              return
            }
            const Ht = rt("content");
            if (Ht) {
              const Jt = Ae.value === "custom" ? "按您的要求改写内容" : "生成全新内容";
              await La.confirm(`确定要使用AI改写内容吗？首次免费使用，系统将${Jt}。`, "确认改写", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info"
              })
            } else {
              await dn();
              const Jt = Ae.value === "custom" ? "按您的要求改写内容" : "生成全新内容";
              await La.confirm(`确定要使用AI改写内容吗？将消耗1个点数，系统将${Jt}。`, "确认改写", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
              })
            }
            ie.value = !1, ne.value = !0, Mt("正在重写内容");
            const Pa = Ye.value.title || "",
              Va = Ye.value.content || "";
            let X = "";
            Ae.value === "custom" ? X = F.value.trim() : X = "";
            const le = ((Xe = Ye.value) == null ? void 0 : Xe.id) || ((se = Ye.value) == null ? void 0 : se.globalId) || "",
              ot = await hv(Pa, Va, X, le),
              vt = (ot == null ? void 0 : ot.content) || "";
            if (!vt) throw new Error("生成失败，未返回新内容");
            Ye.value.content = vt, ct("content"), await dt();
            const bt = Ht ? "内容改写成功（首次免费）" : "内容改写成功";
            A.success(bt), Qe(), Ae.value = "custom", F.value = ""
          } catch (Tt) {
            Tt !== "cancel" && (console.error("AI改写内容失败:", Tt), A.error("改写内容失败")), Et()
          } finally {
            ne.value = !1
          }
        }, Dn = Xe => {
          if (!Xe) return "";
          const se = new Date(Xe),
            Tt = String(se.getMonth() + 1).padStart(2, "0"),
            Ht = String(se.getDate()).padStart(2, "0");
          return `${Tt}-${Ht}`
        }, An = Xe => {
          if (!Xe || typeof Xe != "string") return "";
          const se = Xe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"),
            Tt = /#([^#\s\n\r]+)/g;
          return se.replace(Tt, '<span class="hashtag-tag">#$1</span>')
        }, dn = async () => {
          try {
            if (localStorage.getItem("authToken")) try {
              const se = await zl();
              if (se && typeof se == "object") {
                const Tt = Number(se.createPoints ?? se.create_points ?? se.points ?? se.createPoint ?? 0),
                  Ht = !Number.isNaN(Tt) && Tt >= 0 ? Tt : 0;
                tt.value = {
                  ...se,
                  createPoints: Ht,
                  create_points: Ht
                }, qe.value = !0, console.log("用户信息已更新，余额:", Ht, "原始数据:", se)
              } else console.warn("获取用户信息返回的数据格式不正确:", se), tt.value = {}, qe.value = !1
            } catch (se) {
              console.error("获取用户信息失败:", se), tt.value = {}, qe.value = !1
            } else tt.value = {}, qe.value = !1
          } catch (Xe) {
            console.error("检查登录状态失败:", Xe), qe.value = !1, tt.value = {}
          }
        }, $n = Xe => {
          var se, Tt, Ht, Pa, Va;
          if (((se = Xe.data) == null ? void 0 : se.type) === "XHS_PUBLISH_RESULT" || ((Tt = Xe.data) == null ? void 0 : Tt.type) === "DOUYIN_PUBLISH_RESULT") {
            const X = (Ht = Xe.data) != null && Ht.response && typeof Xe.data.response == "object" ? Xe.data.response : Xe.data || {};
            if (st.value = !1, (X == null ? void 0 : X.success) === !0) {
              const le = (X == null ? void 0 : X.message) || ((Pa = Xe.data) == null ? void 0 : Pa.message) || (typeof X == "string" ? X : JSON.stringify(X)) || "发布成功";
              A.success(le)
            } else {
              const le = (X == null ? void 0 : X.error) || (X == null ? void 0 : X.message) || ((Va = Xe.data) == null ? void 0 : Va.message) || (typeof X == "string" ? X : "") || "发布失败";
              A.error(le)
            }
          }
        };
      return Ll(async () => {
        document.title = "火兔工具箱_图文编辑", xt(), window.addEventListener("resize", xt), await dn(), ht(), window.addEventListener("user-login-success", dn), window.addEventListener("message", $n)
      }), Zl(() => {
        window.removeEventListener("resize", xt), window.removeEventListener("user-login-success", dn), window.removeEventListener("message", $n), pe.value && (clearInterval(pe.value), pe.value = null), b && (clearInterval(b), b = null)
      }), (Xe, se) => {
        var Ba, Qa, rl;
        const Tt = $l,
          Ht = xl,
          Pa = No,
          Va = cn,
          X = Oo,
          le = Bo,
          ot = Si,
          vt = Ei,
          bt = Rl,
          Jt = bo,
          Ra = Kn,
          Ca = sc;
        return c(), v("div", {
          class: Pe(["note-editor-page", {
            "mobile-mode": w.value
          }])
        }, [P(i).params.id && P(i).params.id !== "new" ? (c(), ye(Wu, {
          key: 0,
          "work-id": P(i).params.id,
          title: ((Ba = Ye.value) == null ? void 0 : Ba.title) || ""
        }, null, 8, ["work-id", "title"])) : M("", !0), w.value ? (c(), v("header", vge, [e("div", mge, [a(Ht, {
          type: "default",
          size: "small",
          class: "back-button-mobile",
          onClick: dl
        }, {
          default: l(() => [a(Tt, null, {
            default: l(() => [a(P(an))]),
            _: 1
          }), se[53] || (se[53] = e("span", null, "返回", -1))]),
          _: 1
        })]), se[55] || (se[55] = e("div", {
          class: "header-center"
        }, [e("span", {
          class: "header-title"
        }, "图文编辑")], -1)), e("div", gge, [w.value ? (c(), ye(Ht, {
          key: 0,
          type: "primary",
          size: "small",
          class: "preview-btn-mobile",
          onClick: Nl
        }, {
          default: l(() => [...se[54] || (se[54] = [g(" 图文预览 ", -1)])]),
          _: 1
        })) : M("", !0)])])) : M("", !0), e("main", {
          class: Pe(["main-content", {
            "mobile-content": w.value
          }])
        }, [w.value ? (c(), v("div", fge, [e("div", pge, [e("div", yge, [el(e("input", {
          "onUpdate:modelValue": se[0] || (se[0] = sa => Ye.value.title = sa),
          class: "title-input",
          placeholder: "请输入标题",
          maxlength: "20"
        }, null, 512), [
          [En, Ye.value.title]
        ]), e("div", hge, h(Ye.value.title.length) + "/20", 1)]), e("div", bge, [a(Ht, {
          size: "small",
          class: "action-btn action-btn-prompt",
          onClick: Z
        }, {
          default: l(() => [...se[56] || (se[56] = [g(" 本作品提示词 ", -1)])]),
          _: 1
        }), a(Ht, {
          size: "small",
          class: "action-btn action-btn-copy",
          onClick: Ka
        }, {
          default: l(() => [...se[57] || (se[57] = [g(" 复制标题 ", -1)])]),
          _: 1
        }), a(Ht, {
          size: "small",
          class: "action-btn action-btn-rewrite",
          disabled: Y.value,
          onClick: se[1] || (se[1] = sa => !Y.value && Dl())
        }, {
          default: l(() => [...se[58] || (se[58] = [g(" AI重写标题 ", -1)])]),
          _: 1
        }, 8, ["disabled"])])]), e("div", wge, [e("div", _ge, [e("div", kge, [e("div", Cge, [(c(!0), v(Ue, null, gt(Ye.value.images, (sa, Ga) => (c(), v("div", {
          key: `image-${Ga}`,
          class: "image-item"
        }, [s(sa) ? (c(), v("div", {
          key: 0,
          class: "image-preview image-preview-loading",
          onClick: ol => Oe(Ga)
        }, [...se[59] || (se[59] = [e("span", {
          class: "image-loading-icon"
        }, "⏳", -1), e("span", {
          class: "image-loading-text"
        }, [g("生成中"), e("span", {
          class: "loading-dots"
        }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])], 8, Age)) : u(sa) ? (c(), v("div", {
          key: 1,
          class: "image-preview image-preview-failed",
          onClick: ol => Oe(Ga)
        }, [e("span", xge, [se[60] || (se[60] = g("出图拥堵", -1)), a(Pa, {
          content: "此时间段使用高级模式作图人较多导致",
          placement: "top"
        }, {
          default: l(() => [a(Tt, {
            class: "image-failed-tip"
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), a(Ht, {
          type: "primary",
          size: "small",
          class: "retry-image-btn",
          disabled: ""
        }, {
          default: l(() => [...se[61] || (se[61] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
          _: 1
        }), a(Tt, {
          class: "retry-loading-icon"
        }, {
          default: l(() => [a(P(Fl))]),
          _: 1
        })], 8, Ige)) : (c(), v("img", {
          key: 2,
          src: d(sa),
          class: "image-preview",
          onClick: ol => Oe(Ga)
        }, null, 8, Sge)), e("div", Ege, h(Ga + 1), 1), a(Tt, {
          class: "image-remove",
          onClick: lt(ol => be(Ga), ["stop"])
        }, {
          default: l(() => [a(P(un))]),
          _: 1
        }, 8, ["onClick"])]))), 128))])]), Ye.value.images.length < 20 ? (c(), v("div", {
          key: 0,
          class: Pe(["image-add-btn-fixed", {
            uploading: nt.value
          }]),
          onClick: se[2] || (se[2] = sa => !nt.value && jt())
        }, [nt.value ? (c(), ye(Tt, {
          key: 1,
          class: "add-icon uploading-icon"
        }, {
          default: l(() => [a(P(Fl))]),
          _: 1
        })) : (c(), ye(Tt, {
          key: 0,
          class: "add-icon"
        }, {
          default: l(() => [a(P(Ql))]),
          _: 1
        })), e("span", Tge, h(nt.value ? "上传中..." : "添加图片"), 1)], 2)) : M("", !0)])]), e("div", $ge, [e("div", Pge, [el(e("textarea", {
          "onUpdate:modelValue": se[3] || (se[3] = sa => Ye.value.content = sa),
          class: "content-textarea",
          placeholder: "请输入图文内容...",
          rows: "10"
        }, null, 512), [
          [En, Ye.value.content]
        ])]), e("div", Vge, [a(Ht, {
          size: "small",
          class: "action-btn action-btn-copy",
          onClick: tn
        }, {
          default: l(() => [...se[62] || (se[62] = [g(" 复制内容 ", -1)])]),
          _: 1
        }), a(Ht, {
          size: "small",
          class: "action-btn action-btn-rewrite",
          disabled: ne.value,
          onClick: se[4] || (se[4] = sa => !ne.value && zt())
        }, {
          default: l(() => [...se[63] || (se[63] = [g(" AI改写内容 ", -1)])]),
          _: 1
        }, 8, ["disabled"])])])])) : M("", !0), e("input", {
          ref_key: "fileInput",
          ref: S,
          type: "file",
          multiple: "",
          accept: "image/*",
          style: {
            display: "none"
          },
          onChange: ca
        }, null, 544)], 2), w.value ? (c(), v("footer", zge, [a(Ht, {
          class: "footer-btn save-btn",
          onClick: dt
        }, {
          default: l(() => [...se[64] || (se[64] = [g(" 保存 ", -1)])]),
          _: 1
        }), a(Ht, {
          class: Pe(["footer-btn publish-btn", {
            "published-btn": Ye.value.published
          }]),
          type: "primary",
          onClick: At
        }, {
          default: l(() => [g(h(Ye.value.published ? "已发布" : "发布"), 1)]),
          _: 1
        }, 8, ["class"])])) : M("", !0), w.value ? M("", !0) : (c(), v("div", Lge, [e("div", Dge, [a(Ht, {
          class: "back-button",
          onClick: dl,
          icon: P(an),
          circle: ""
        }, null, 8, ["icon"]), e("span", {
          class: "back-text",
          onClick: dl
        }, "返回")]), e("div", Mge, [e("div", Oge, [e("div", Bge, [e("div", Nge, [e("h3", Uge, [a(Tt, {
          class: "notice-icon"
        }, {
          default: l(() => [a(P(eh))]),
          _: 1
        }), e("span", Rge, [se[65] || (se[65] = g("本次AI为您生成：封面图", -1)), se[66] || (se[66] = e("span", {
          class: "content-count-blue"
        }, "1", -1)), se[67] || (se[67] = g("张+内容图", -1)), e("span", jge, h(ka.value), 1), se[68] || (se[68] = g("张+用户添加", -1)), e("span", qge, h(qt.value), 1), se[69] || (se[69] = g("张", -1))])]), Ye.value.images && Ye.value.images.length > 0 ? (c(), ye(Ht, {
          key: 0,
          type: "primary",
          size: "small",
          class: "download-all-btn",
          onClick: St
        }, {
          default: l(() => [a(Tt, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), se[70] || (se[70] = g(" 一键下载全部图片 ", -1))]),
          _: 1
        })) : M("", !0)]), e("div", {
          class: "images-container-pc",
          ref_key: "imagesContainerPc",
          ref: C
        }, [Ye.value.images.length > 4 ? (c(), ye(Tt, {
          key: 0,
          class: "image-nav-arrow image-nav-arrow-left",
          onClick: se[5] || (se[5] = sa => Ge("left"))
        }, {
          default: l(() => [a(P(an))]),
          _: 1
        })) : M("", !0), e("div", {
          ref_key: "imagesScrollContainer",
          ref: x,
          class: Pe(["images-scroll-container-pc", {
            "has-scroll": Ye.value.images.length > 4,
            "dragging-image": O.value
          }]),
          onMousedown: et,
          onMousemove: Nt,
          onMouseup: Ut,
          onMouseleave: Ut
        }, [e("div", {
          class: Pe(["images-grid-pc", {
            "dragging-active": O.value
          }])
        }, [(c(!0), v(Ue, null, gt(Ye.value.images, (sa, Ga) => (c(), v("div", {
          key: Ga,
          class: Pe(["image-card", {
            dragging: T.value === Ga,
            "drag-over": R.value === Ga && T.value !== Ga
          }]),
          draggable: "true",
          onDragstart: ol => Wt(ol, Ga),
          onDragover: ol => aa(ol, Ga),
          onDragenter: ol => xa(ol, Ga),
          onDragleave: ol => Kt(ol, Ga),
          onDrop: ol => at(ol, Ga),
          onDragend: Fe,
          onMousedown: Bt
        }, [e("div", Wge, [e("div", Gge, [s(sa) ? (c(), v("div", Jge, [...se[71] || (se[71] = [e("span", {
          class: "image-loading-icon"
        }, "⏳", -1), e("span", {
          class: "image-loading-text"
        }, [g("生成中"), e("span", {
          class: "loading-dots"
        }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])])) : u(sa) ? (c(), v("div", Hge, [e("span", Qge, [se[72] || (se[72] = g("出图拥堵", -1)), a(Pa, {
          content: "此时间段使用高级模式作图人较多导致",
          placement: "top"
        }, {
          default: l(() => [a(Tt, {
            class: "image-failed-tip"
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), a(Ht, {
          type: "primary",
          size: "small",
          class: "retry-image-btn",
          disabled: ""
        }, {
          default: l(() => [...se[73] || (se[73] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
          _: 1
        }), a(Tt, {
          class: "retry-loading-icon"
        }, {
          default: l(() => [a(P(Fl))]),
          _: 1
        })])) : (c(), v("img", {
          key: 2,
          src: d(sa),
          alt: `生成的图片${Ga+1}`,
          class: "image-preview-pc"
        }, null, 8, Kge))]), a(Tt, {
          class: "image-delete-btn-pc",
          onClick: lt(ol => be(Ga), ["stop"]),
          onMousedown: se[6] || (se[6] = lt(() => {}, ["stop"])),
          onDragstart: se[7] || (se[7] = lt(() => {}, ["stop"])),
          title: "删除图片"
        }, {
          default: l(() => [a(P(un))]),
          _: 1
        }, 8, ["onClick"]), !s(sa) && !u(sa) ? (c(), v("div", {
          key: 0,
          class: "image-overlay-pc",
          onMousedown: ol => Ze(ol),
          onClick: se[16] || (se[16] = lt(() => {}, ["stop"]))
        }, [e("div", {
          class: "overlay-buttons",
          onMousedown: se[10] || (se[10] = lt(() => {}, ["stop"])),
          onClick: se[11] || (se[11] = lt(() => {}, ["stop"]))
        }, [a(Ht, {
          type: "primary",
          size: "small",
          class: "preview-btn",
          onClick: lt(ol => Oe(Ga), ["stop"]),
          onMousedown: se[8] || (se[8] = lt(() => {}, ["stop"])),
          onDragstart: se[9] || (se[9] = lt(() => {}, ["stop"]))
        }, {
          default: l(() => [...se[74] || (se[74] = [g(" 预览 ", -1)])]),
          _: 1
        }, 8, ["onClick"])], 32), e("div", {
          class: "overlay-move-buttons",
          onMousedown: se[14] || (se[14] = lt(() => {}, ["stop"])),
          onClick: se[15] || (se[15] = lt(() => {}, ["stop"]))
        }, [Ga > 0 ? (c(), ye(Tt, {
          key: 0,
          class: "move-btn move-btn-left",
          onClick: lt(ol => he(Ga), ["stop"]),
          onMousedown: se[12] || (se[12] = lt(() => {}, ["stop"])),
          title: "向左移动"
        }, {
          default: l(() => [a(P(an))]),
          _: 1
        }, 8, ["onClick"])) : M("", !0), Ga < Ye.value.images.length - 1 ? (c(), ye(Tt, {
          key: 1,
          class: "move-btn move-btn-right",
          onClick: lt(ol => kt(Ga), ["stop"]),
          onMousedown: se[13] || (se[13] = lt(() => {}, ["stop"])),
          title: "向右移动"
        }, {
          default: l(() => [a(P(Wl))]),
          _: 1
        }, 8, ["onClick"])) : M("", !0)], 32)], 40, Yge)) : M("", !0), ce.value === Ga && _e.value ? (c(), v("div", Xge, [e("div", Zge, [(c(), v("svg", efe, [e("circle", {
          class: "progress-ring-circle",
          stroke: "#409eff",
          "stroke-width": "4",
          fill: "transparent",
          r: "26",
          cx: "30",
          cy: "30",
          style: Il({
            strokeDasharray: Ce.value,
            strokeDashoffset: Re.value
          })
        }, null, 4)])), e("div", tfe, h(xe.value) + "%", 1)])])) : M("", !0)]), e("div", {
          class: "image-actions",
          onMousedown: se[18] || (se[18] = lt(() => {}, ["stop"])),
          onDragstart: se[19] || (se[19] = lt(() => {}, ["stop"]))
        }, [a(Ht, {
          type: "primary",
          size: "small",
          class: Pe(["download-btn", {
            "download-btn-cover": Ga === 0
          }]),
          onClick: ol => ga(sa, Ga),
          onMousedown: se[17] || (se[17] = lt(() => {}, ["stop"]))
        }, {
          default: l(() => [a(Tt, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), g(" " + h(Ne(Ga)), 1)]),
          _: 2
        }, 1032, ["class", "onClick"])], 32)], 42, Fge))), 128))], 2)], 34), ee.value && T.value !== -1 ? (c(), v("div", {
          key: 1,
          class: "drag-arrow-indicator",
          style: Il({
            left: Ke() + "px"
          })
        }, [...se[75] || (se[75] = [e("svg", {
          width: "28",
          height: "28",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [e("path", {
          d: "M12 4L12 20M12 4L6 10M12 4L18 10",
          stroke: "#409eff",
          "stroke-width": "2.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })], -1)])], 4)) : M("", !0), Ye.value.images.length > 4 ? (c(), ye(Tt, {
          key: 2,
          class: "image-nav-arrow image-nav-arrow-right",
          onClick: se[20] || (se[20] = sa => Ge("right"))
        }, {
          default: l(() => [a(P(Wl))]),
          _: 1
        })) : M("", !0), Ye.value.images.length < 20 ? (c(), v("div", {
          key: 3,
          class: Pe(["image-add-btn-pc", {
            uploading: nt.value
          }]),
          onClick: se[21] || (se[21] = sa => !nt.value && jt())
        }, [nt.value ? (c(), ye(Tt, {
          key: 1,
          class: "add-icon-pc uploading-icon"
        }, {
          default: l(() => [a(P(Fl))]),
          _: 1
        })) : (c(), ye(Tt, {
          key: 0,
          class: "add-icon-pc"
        }, {
          default: l(() => [a(P(Ql))]),
          _: 1
        })), e("span", afe, h(nt.value ? "上传中..." : "添加图片"), 1)], 2)) : M("", !0)], 512)]), e("div", lfe, [se[76] || (se[76] = e("h3", {
          class: "section-title"
        }, "图文标题", -1)), a(Va, {
          modelValue: Ye.value.title,
          "onUpdate:modelValue": se[23] || (se[23] = sa => Ye.value.title = sa),
          placeholder: "请输入标题",
          maxlength: "20",
          "show-word-limit": "",
          class: "title-input-pc"
        }, {
          append: l(() => [e("div", nfe, [a(Tt, {
            onClick: Ka
          }, {
            default: l(() => [a(P(Eo))]),
            _: 1
          }), a(Tt, {
            onClick: se[22] || (se[22] = sa => !Y.value && Dl()),
            style: Il({
              pointerEvents: Y.value ? "none" : "auto",
              opacity: Y.value ? .6 : 1
            })
          }, {
            default: l(() => [a(P(Ar))]),
            _: 1
          }, 8, ["style"])])]),
          _: 1
        }, 8, ["modelValue"])]), e("div", ofe, [e("div", ife, [se[77] || (se[77] = e("h3", {
          class: "section-title"
        }, "图文内容", -1)), e("div", sfe, [a(Tt, {
          onClick: tn,
          title: "复制内容"
        }, {
          default: l(() => [a(P(Eo))]),
          _: 1
        }), a(Tt, {
          onClick: se[24] || (se[24] = sa => !ne.value && zt()),
          title: "AI重写内容",
          style: Il({
            pointerEvents: ne.value ? "none" : "auto",
            opacity: ne.value ? .6 : 1
          })
        }, {
          default: l(() => [a(P(Ar))]),
          _: 1
        }, 8, ["style"])])]), e("div", rfe, [a(Va, {
          modelValue: Ye.value.content,
          "onUpdate:modelValue": se[25] || (se[25] = sa => Ye.value.content = sa),
          type: "textarea",
          rows: 12,
          placeholder: "请输入内容",
          maxlength: "4096",
          "show-word-limit": "",
          class: "content-textarea-pc"
        }, null, 8, ["modelValue"])]), e("div", ufe, [e("div", cfe, [a(Ht, {
          type: "success",
          class: "action-btn-content",
          onClick: dt
        }, {
          default: l(() => [a(Tt, null, {
            default: l(() => [a(P(Zo))]),
            _: 1
          }), se[78] || (se[78] = g(" 保存 ", -1))]),
          _: 1
        }), a(Ht, {
          type: "primary",
          plain: !Ye.value.published,
          class: Pe(["action-btn-content publish-btn-pc", {
            "published-btn-pc": Ye.value.published
          }]),
          onClick: At
        }, {
          default: l(() => [g(h(Ye.value.published ? "已发布" : "手机导出"), 1)]),
          _: 1
        }, 8, ["plain", "class"]), e("div", dfe, [e("a", {
          class: "publish-pc-tutorial-link",
          href: "https://ecnfcn7p0fh4.feishu.cn/wiki/UNEAw3YFmiRvTjkMnUuc0blDngc?from=from_copylink",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: se[26] || (se[26] = lt(() => {}, ["stop"]))
        }, "教程"), a(Ht, {
          type: "primary",
          plain: "",
          class: Pe(["action-btn-content publish-pc-btn", {
            "is-publishing": st.value
          }]),
          onClick: Fa
        }, {
          default: l(() => [g(h(st.value ? "发布中..." : "电脑发布"), 1)]),
          _: 1
        }, 8, ["class"])]), a(le, {
          modelValue: yt.value,
          "onUpdate:modelValue": se[27] || (se[27] = sa => yt.value = sa),
          class: "publish-platform-select",
          size: "default"
        }, {
          default: l(() => [a(X, {
            label: "DY",
            value: "douyin"
          }), a(X, {
            label: "XH",
            value: "xhs"
          })]),
          _: 1
        }, 8, ["modelValue"]), a(Wu, {
          "work-id": P(i).params.id,
          title: ((Qa = Ye.value) == null ? void 0 : Qa.title) || "",
          inline: ""
        }, null, 8, ["work-id", "title"])])])])]), e("div", vfe, [se[88] || (se[88] = e("h3", {
          class: "section-title"
        }, "手机预览", -1)), e("div", mfe, [e("div", gfe, [e("img", {
          src: P(sb),
          alt: "手机壳",
          class: "phone-case"
        }, null, 8, ffe), e("div", pfe, [e("div", yfe, [Ye.value.images && Ye.value.images.length > 0 ? (c(), v("div", hfe, [a(vt, {
          "indicator-position": "outside"
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(Ye.value.images, (sa, Ga) => (c(), ye(ot, {
            key: Ga
          }, {
            default: l(() => [s(sa) ? (c(), v("div", bfe, [...se[79] || (se[79] = [e("span", {
              class: "image-loading-icon"
            }, "⏳", -1), e("span", {
              class: "image-loading-text"
            }, [g("生成中"), e("span", {
              class: "loading-dots"
            }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])])) : u(sa) ? (c(), v("div", wfe, [e("span", _fe, [se[80] || (se[80] = g("出图拥堵", -1)), a(Pa, {
              content: "此时间段使用高级模式作图人较多导致",
              placement: "top"
            }, {
              default: l(() => [a(Tt, {
                class: "image-failed-tip"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]), a(Ht, {
              type: "primary",
              size: "small",
              class: "retry-image-btn",
              disabled: ""
            }, {
              default: l(() => [...se[81] || (se[81] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
              _: 1
            }), a(Tt, {
              class: "retry-loading-icon"
            }, {
              default: l(() => [a(P(Fl))]),
              _: 1
            })])) : (c(), v("img", {
              key: 2,
              src: d(sa),
              alt: `生成的图片${Ga+1}`,
              class: "preview-image"
            }, null, 8, kfe))]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        })])) : M("", !0), e("div", Cfe, [e("div", Afe, h(Ye.value.title || "📝学法减分攻略来啦！轻松拿回你的小本本！"), 1), e("div", {
          class: "article-content",
          innerHTML: An(Ye.value.content || "学法减分功能介绍：适用于轻微违章被扣分的情况，可通过学习考试来恢复部分分数。下面整理具体流程与常见问题，帮助大家了解适用条件。")
        }, null, 8, Ife), e("div", xfe, [e("div", Sfe, h(Dn(Ye.value.createdAt) || "01-10"), 1), se[82] || (se[82] = e("div", {
          class: "article-dots"
        }, "...", -1))])]), e("div", Efe, [se[87] || (se[87] = e("div", {
          class: "comment-section"
        }, [e("img", {
          src: "http://jiandan.link/_nuxt/comment.Dw_-c_r2.svg",
          class: "comment-icon"
        }), e("div", {
          class: "comment-text"
        }, "暂无评论")], -1)), e("div", Tfe, [se[86] || (se[86] = e("div", {
          class: "comment-input"
        }, [e("img", {
          src: "http://jiandan.link/_nuxt/office_logo_zi.BJgrjNni.svg",
          class: "input-avatar"
        }), e("span", {
          class: "input-placeholder"
        }, "说点什么...")], -1)), e("div", $fe, [e("div", Pfe, [a(Tt, null, {
          default: l(() => [a(P(Xo))]),
          _: 1
        }), se[83] || (se[83] = e("span", null, "67", -1))]), e("div", Vfe, [a(Tt, null, {
          default: l(() => [a(P(Xo))]),
          _: 1
        }), se[84] || (se[84] = e("span", null, "78", -1))]), e("div", zfe, [a(Tt, null, {
          default: l(() => [a(P(Po))]),
          _: 1
        }), se[85] || (se[85] = e("span", null, "38", -1))]), a(Tt, {
          class: "share-icon"
        }, {
          default: l(() => [a(P(Ko))]),
          _: 1
        })])])])])])])])])])])), a(Wn, {
          modelValue: f.value,
          "onUpdate:modelValue": se[28] || (se[28] = sa => f.value = sa)
        }, null, 8, ["modelValue"]), a(bt, {
          modelValue: y.value,
          "onUpdate:modelValue": se[32] || (se[32] = sa => y.value = sa),
          title: "图文预览",
          width: w.value ? "95%" : "900px",
          center: "",
          class: "note-preview-dialog",
          "close-on-click-modal": !1
        }, {
          default: l(() => [e("div", Lfe, [w.value ? (c(), v("div", Dfe, [e("div", Mfe, [e("div", Ofe, [e("img", {
            src: kn(),
            alt: "avatar"
          }, null, 8, Bfe)]), e("div", Nfe, h(Cn()), 1), a(Ht, {
            size: "small",
            type: "danger",
            class: "note-follow-btn"
          }, {
            default: l(() => [...se[89] || (se[89] = [g("关注", -1)])]),
            _: 1
          })])])) : M("", !0), e("div", {
            class: Pe(["note-preview-gallery", {
              "mobile-gallery": w.value
            }]),
            onWheel: se[31] || (se[31] = lt(() => {}, ["stop", "prevent"]))
          }, [e("div", {
            class: "note-gallery-container",
            onWheel: se[30] || (se[30] = lt(() => {}, ["stop", "prevent"]))
          }, [Ye.value.images && Ye.value.images.length > 0 ? (c(), ye(vt, {
            key: 0,
            interval: 0,
            autoplay: !1,
            "indicator-position": "outside",
            class: "note-gallery-carousel",
            onWheel: se[29] || (se[29] = lt(() => {}, ["stop", "prevent"]))
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(Ye.value.images, (sa, Ga) => (c(), ye(ot, {
              key: Ga
            }, {
              default: l(() => [e("div", Ufe, [s(sa) ? (c(), v("div", Rfe, [...se[90] || (se[90] = [e("span", {
                class: "image-loading-icon"
              }, "⏳", -1), e("span", null, "生成中", -1)])])) : u(sa) ? (c(), v("div", jfe, [e("span", qfe, [se[91] || (se[91] = g("出图拥堵", -1)), a(Pa, {
                content: "此时间段使用高级模式作图人较多导致",
                placement: "top"
              }, {
                default: l(() => [a(Tt, {
                  class: "image-failed-tip"
                }, {
                  default: l(() => [a(P(Ha))]),
                  _: 1
                })]),
                _: 1
              })]), a(Ht, {
                type: "primary",
                size: "small",
                class: "retry-image-btn",
                disabled: ""
              }, {
                default: l(() => [...se[92] || (se[92] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
                _: 1
              }), a(Tt, {
                class: "retry-loading-icon"
              }, {
                default: l(() => [a(P(Fl))]),
                _: 1
              })])) : (c(), v("img", {
                key: 2,
                src: d(sa),
                alt: "preview"
              }, null, 8, Ffe))])]),
              _: 2
            }, 1024))), 128))]),
            _: 1
          })) : (c(), v("div", Wfe, [...se[93] || (se[93] = [e("div", null, "暂无图片", -1)])]))], 32)], 34), e("div", Gfe, [w.value ? M("", !0) : (c(), v("div", Jfe, [e("div", Hfe, [e("div", Qfe, [e("img", {
            src: kn(),
            alt: "avatar"
          }, null, 8, Kfe)]), e("div", Yfe, h(Cn()), 1), a(Ht, {
            size: "small",
            type: "danger",
            class: "note-follow-btn"
          }, {
            default: l(() => [...se[94] || (se[94] = [g("关注", -1)])]),
            _: 1
          })])])), w.value ? M("", !0) : (c(), v("div", Xfe)), e("div", Zfe, h(Ye.value.title || "未命名图文"), 1), e("div", epe, h(Ye.value.content || "暂无内容"), 1), Ye.value.tags && Ye.value.tags.length > 0 ? (c(), v("div", tpe, [(c(!0), v(Ue, null, gt(Ye.value.tags, sa => (c(), v("span", {
            class: "note-tag",
            key: sa
          }, "#" + h(sa), 1))), 128))])) : M("", !0), e("div", ape, "编辑于 " + h(ll()), 1), se[96] || (se[96] = e("div", {
            class: "note-content-comments"
          }, [e("div", {
            class: "note-comments-header"
          }, "共0条评论"), e("div", {
            class: "note-comments-list"
          }, [e("div", {
            class: "note-empty-comments"
          }, "暂无评论")])], -1)), e("div", lpe, [se[95] || (se[95] = e("div", {
            class: "note-comment-placeholder"
          }, "登录后评论", -1)), e("div", npe, [a(Tt, {
            class: "note-action-icon"
          }, {
            default: l(() => [a(P(Po))]),
            _: 1
          }), a(Tt, {
            class: "note-action-icon"
          }, {
            default: l(() => [a(P(Xo))]),
            _: 1
          }), a(Tt, {
            class: "note-action-icon"
          }, {
            default: l(() => [a(P(Ko))]),
            _: 1
          })])])])])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(bt, {
          modelValue: ie.value,
          "onUpdate:modelValue": se[36] || (se[36] = sa => ie.value = sa),
          title: "AI改写内容",
          width: w.value ? "90%" : "500px",
          "close-on-click-modal": !1,
          class: "rewrite-dialog"
        }, {
          footer: l(() => [a(Ht, {
            onClick: se[35] || (se[35] = sa => ie.value = !1),
            disabled: ne.value
          }, {
            default: l(() => [...se[100] || (se[100] = [g("取消", -1)])]),
            _: 1
          }, 8, ["disabled"]), a(Ht, {
            type: "primary",
            onClick: Tn,
            disabled: ne.value || Ae.value === "custom" && !F.value.trim()
          }, {
            default: l(() => [...se[101] || (se[101] = [g(" 确定 ", -1)])]),
            _: 1
          }, 8, ["disabled"])]),
          default: l(() => [e("div", ope, [se[99] || (se[99] = e("p", {
            class: "dialog-tip"
          }, "请选择改写方式：", -1)), a(Ra, {
            modelValue: Ae.value,
            "onUpdate:modelValue": se[33] || (se[33] = sa => Ae.value = sa),
            class: "rewrite-mode-group",
            disabled: ne.value
          }, {
            default: l(() => [a(Jt, {
              value: "custom",
              class: "radio-item"
            }, {
              default: l(() => [...se[97] || (se[97] = [g("是，填写修改要求", -1)])]),
              _: 1
            }), a(Jt, {
              value: "new",
              class: "radio-item"
            }, {
              default: l(() => [...se[98] || (se[98] = [g("否，直接生成全新内容", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue", "disabled"]), Ae.value === "custom" ? (c(), v("div", ipe, [a(Va, {
            modelValue: F.value,
            "onUpdate:modelValue": se[34] || (se[34] = sa => F.value = sa),
            type: "textarea",
            rows: 4,
            placeholder: "请输入您的修改要求，例如：增加更多实用技巧、调整语气更轻松活泼、添加更多emoji表情等",
            maxlength: "200",
            "show-word-limit": "",
            class: "requirement-input",
            disabled: ne.value
          }, null, 8, ["modelValue", "disabled"])])) : M("", !0)])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(bt, {
          modelValue: De.value,
          "onUpdate:modelValue": se[37] || (se[37] = sa => De.value = sa),
          title: Q.value,
          width: "420px",
          center: "",
          "close-on-click-modal": !1,
          "show-close": !1,
          class: "rewrite-progress-dialog"
        }, {
          default: l(() => [e("div", spe, [e("div", rpe, h(re.value) + "%", 1), a(Ca, {
            percentage: re.value,
            "stroke-width": 10,
            "show-text": !1,
            status: "active"
          }, null, 8, ["percentage"]), se[102] || (se[102] = e("div", {
            class: "rewrite-progress-hint"
          }, "正在生成，请稍候...", -1))])]),
          _: 1
        }, 8, ["modelValue", "title"]), a(bt, {
          modelValue: ae.value,
          "onUpdate:modelValue": se[40] || (se[40] = sa => ae.value = sa),
          "close-on-click-modal": !0,
          class: "image-preview-dialog",
          width: w.value ? "90%" : "800px",
          fullscreen: !1,
          onClose: se[41] || (se[41] = sa => me.value = 0),
          "align-center": ""
        }, {
          default: l(() => [e("div", {
            class: "preview-image-container",
            onWheel: ha
          }, [Ye.value.images && Ye.value.images.length > 1 ? (c(), ye(Tt, {
            key: 0,
            class: Pe(["preview-arrow", "preview-arrow-left", {
              "arrow-disabled": Ma.value
            }]),
            onClick: se[38] || (se[38] = lt(sa => !Ma.value && ve(), ["stop"]))
          }, {
            default: l(() => [a(P(an))]),
            _: 1
          }, 8, ["class"])) : M("", !0), Ye.value.images && Ye.value.images.length > 1 ? (c(), ye(Tt, {
            key: 1,
            class: Pe(["preview-arrow", "preview-arrow-right", {
              "arrow-disabled": Je.value
            }]),
            onClick: se[39] || (se[39] = lt(sa => !Je.value && $t(), ["stop"]))
          }, {
            default: l(() => [a(P(Wl))]),
            _: 1
          }, 8, ["class"])) : M("", !0), e("div", {
            class: "preview-image-wrapper",
            onWheel: ha
          }, [Ye.value.images && Ye.value.images[me.value] !== void 0 && s(Ye.value.images[me.value]) ? (c(), v("div", upe, [...se[103] || (se[103] = [e("span", {
            class: "image-loading-icon"
          }, "⏳", -1), e("span", {
            class: "image-loading-text"
          }, [g("生成中"), e("span", {
            class: "loading-dots"
          }, [e("span", null, "."), e("span", null, "."), e("span", null, ".")])], -1)])])) : Ye.value.images && Ye.value.images[me.value] !== void 0 && u(Ye.value.images[me.value]) ? (c(), v("div", cpe, [e("span", dpe, [se[104] || (se[104] = g("出图拥堵", -1)), a(Pa, {
            content: "此时间段使用高级模式作图人较多导致",
            placement: "top"
          }, {
            default: l(() => [a(Tt, {
              class: "image-failed-tip"
            }, {
              default: l(() => [a(P(Ha))]),
              _: 1
            })]),
            _: 1
          })]), a(Ht, {
            type: "primary",
            size: "small",
            class: "retry-image-btn",
            disabled: ""
          }, {
            default: l(() => [...se[105] || (se[105] = [g("系统正在重试", -1), e("br", null, null, -1), g("（预计5分钟）", -1), e("br", null, null, -1), g("着急请找客服", -1)])]),
            _: 1
          }), a(Tt, {
            class: "retry-loading-icon"
          }, {
            default: l(() => [a(P(Fl))]),
            _: 1
          })])) : Ye.value.images && Ye.value.images[me.value] && d(Ye.value.images[me.value]) ? (c(), v("img", {
            key: 2,
            src: d(Ye.value.images[me.value]),
            alt: `预览图片${me.value+1}`,
            class: "preview-large-image",
            onTouchstart: Qt,
            onTouchend: ba
          }, null, 40, vpe)) : M("", !0)], 32), Ye.value.images && Ye.value.images.length > 0 ? (c(), v("div", mpe, [Ye.value.images[me.value] !== void 0 && !s(Ye.value.images[me.value]) && !u(Ye.value.images[me.value]) ? (c(), v("div", gpe, [a(Ht, {
            type: "primary",
            size: "small",
            class: "replace-cover-btn edit-request-btn",
            onClick: H
          }, {
            default: l(() => [...se[106] || (se[106] = [g(" 我要修改 ", -1)])]),
            _: 1
          })])) : M("", !0), Ye.value.images && Ye.value.images.length > 1 ? (c(), v("div", fpe, h(me.value + 1) + " / " + h(Ye.value.images.length), 1)) : M("", !0), me.value === 0 && Ye.value.images && Ye.value.images[0] !== void 0 && !s(Ye.value.images[0]) && !u(Ye.value.images[0]) ? (c(), v("div", ppe, [a(Ht, {
            type: "default",
            size: "small",
            class: "replace-cover-btn local-replace-btn",
            onClick: Ft
          }, {
            default: l(() => [...se[107] || (se[107] = [g(" 本地更换封面 ", -1)])]),
            _: 1
          })])) : M("", !0)])) : M("", !0), e("input", {
            ref_key: "localCoverFileInput",
            ref: z,
            type: "file",
            accept: "image/*",
            style: {
              display: "none"
            },
            onChange: Rt
          }, null, 544)], 32)]),
          _: 1
        }, 8, ["modelValue", "width"]), a(Tb, {
          modelValue: We.value,
          "onUpdate:modelValue": se[42] || (se[42] = sa => We.value = sa),
          "record-id": (rl = Ye.value) == null ? void 0 : rl.id,
          "image-index": U.value,
          "image-url": ze.value,
          onSuccess: Lt
        }, null, 8, ["modelValue", "record-id", "image-index", "image-url"]), a(bt, {
          modelValue: ue.value,
          "onUpdate:modelValue": se[44] || (se[44] = sa => ue.value = sa),
          title: "修改图片提示词",
          width: w.value ? "90%" : "1050px",
          class: "edit-prompt-dialog"
        }, {
          footer: l(() => [a(Ht, {
            onClick: ml
          }, {
            default: l(() => [...se[112] || (se[112] = [g("取消", -1)])]),
            _: 1
          }), a(Ht, {
            type: "primary",
            loading: _e.value && ce.value === U.value,
            onClick: $e
          }, {
            default: l(() => [...se[113] || (se[113] = [g("确定提交", -1)])]),
            _: 1
          }, 8, ["loading"])]),
          default: l(() => [e("div", {
            class: Pe(["retry-outline-dialog-content", {
              "has-preview": Ye.value.images && Ye.value.images[U.value] !== void 0
            }])
          }, [Ye.value.images && Ye.value.images[U.value] !== void 0 ? (c(), v("div", ype, [se[110] || (se[110] = e("div", {
            class: "edit-prompt-preview-label"
          }, "预览图", -1)), e("div", hpe, [s(Ye.value.images[U.value]) ? (c(), v("div", bpe, [a(Tt, {
            class: "is-loading"
          }, {
            default: l(() => [a(P(Fl))]),
            _: 1
          }), se[108] || (se[108] = e("span", null, "加载中", -1))])) : u(Ye.value.images[U.value]) ? (c(), v("div", wpe, [a(Tt, null, {
            default: l(() => [a(P(un))]),
            _: 1
          }), se[109] || (se[109] = e("span", null, "加载失败", -1))])) : (c(), v("img", {
            key: 2,
            src: d(Ye.value.images[U.value]),
            alt: `第${U.value+1}张图`,
            class: "edit-prompt-preview-img"
          }, null, 8, _pe))])])) : M("", !0), e("div", kpe, [e("p", Cpe, "当前为第 " + h(U.value + 1) + " 张图片，可输入修改补充要求后点击「确定提交」。", 1), a(Va, {
            modelValue: de.value,
            "onUpdate:modelValue": se[43] || (se[43] = sa => de.value = sa),
            type: "textarea",
            rows: w.value ? 8 : 14,
            maxlength: "500",
            "show-word-limit": "",
            placeholder: "请输入或修改图片提示词，可补充生成要求"
          }, null, 8, ["modelValue", "rows"]), se[111] || (se[111] = e("p", {
            class: "edit-cost-tip"
          }, [g("本次二次修改将额外扣除 "), e("strong", null, "3"), g(" 个点数。")], -1))])], 2)]),
          _: 1
        }, 8, ["modelValue", "width"]), a(bt, {
          modelValue: te.value,
          "onUpdate:modelValue": se[47] || (se[47] = sa => te.value = sa),
          title: "本作品提示词",
          width: w.value ? "90%" : "800px",
          class: "work-prompt-dialog",
          "close-on-click-modal": !0
        }, {
          footer: l(() => [a(Ht, {
            onClick: pt,
            disabled: !we.value || !String(we.value).trim()
          }, {
            default: l(() => [...se[114] || (se[114] = [g("复制", -1)])]),
            _: 1
          }, 8, ["disabled"]), a(Ht, {
            type: "primary",
            onClick: se[46] || (se[46] = sa => te.value = !1)
          }, {
            default: l(() => [...se[115] || (se[115] = [g("关闭", -1)])]),
            _: 1
          })]),
          default: l(() => [a(Va, {
            modelValue: we.value,
            "onUpdate:modelValue": se[45] || (se[45] = sa => we.value = sa),
            type: "textarea",
            rows: 14,
            readonly: "",
            placeholder: "暂无提示词（请稍后或联系管理员确认后端字段）",
            class: "work-prompt-input"
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["modelValue", "width"]), w.value ? M("", !0) : (c(), ye(bt, {
          key: 4,
          modelValue: je.value,
          "onUpdate:modelValue": se[48] || (se[48] = sa => je.value = sa),
          title: "微信扫码发布",
          width: "360px",
          center: ""
        }, {
          footer: l(() => [e("div", xpe, [a(Ht, {
            onClick: Xt
          }, {
            default: l(() => [...se[117] || (se[117] = [g("确定", -1)])]),
            _: 1
          })])]),
          default: l(() => [e("div", Ape, [e("canvas", {
            ref_key: "qrCanvas",
            ref: Ie
          }, null, 512), se[116] || (se[116] = e("p", {
            class: "qr-tip"
          }, "已标记发布，请用手机扫描此二维码发布", -1)), e("p", Ipe, h(K.value), 1)])]),
          _: 1
        }, 8, ["modelValue"])), a(bt, {
          modelValue: B.value,
          "onUpdate:modelValue": se[50] || (se[50] = sa => B.value = sa),
          width: 692,
          center: "",
          class: "publish-plugin-dialog",
          "close-on-click-modal": !1
        }, {
          default: l(() => [e("div", Spe, [se[121] || (se[121] = e("div", {
            class: "plugin-guide-video-box"
          }, [e("video", {
            autoplay: "",
            loop: "",
            src: "https://api.aichaoer.cn/plug/%E5%8F%91%E5%B8%83%E6%95%99%E7%A8%8B.mp4"
          })], -1)), e("div", Epe, [se[120] || (se[120] = e("div", {
            class: "plugin-guide-title"
          }, [e("span", {
            class: "plugin-guide-icon"
          }, "💡"), g(" 安装小插件，一键导出3:5全屏内容 ")], -1)), e("div", Tpe, [a(Ht, {
            type: "default",
            size: "large",
            style: {
              "margin-right": "16px",
              width: "92px"
            },
            onClick: se[49] || (se[49] = sa => B.value = !1)
          }, {
            default: l(() => [...se[118] || (se[118] = [g(" 取消 ", -1)])]),
            _: 1
          }), a(Ht, {
            type: "primary",
            size: "large",
            class: "plugin-guide-start-button",
            onClick: gl
          }, {
            default: l(() => [...se[119] || (se[119] = [g(" 开始安装 ", -1)])]),
            _: 1
          })])])])]),
          _: 1
        }, 8, ["modelValue"]), a(bt, {
          modelValue: W.value,
          "onUpdate:modelValue": se[51] || (se[51] = sa => W.value = sa),
          width: 692,
          center: "",
          class: "browser-select-dialog",
          "close-on-click-modal": !1
        }, {
          default: l(() => [e("div", $pe, [e("div", Ppe, [e("div", Vpe, [e("img", {
            class: "browser-select-icon",
            alt: "icon_guide",
            src: P($b)
          }, null, 8, zpe), se[122] || (se[122] = e("div", {
            class: "browser-select-title"
          }, "下载安装小插件", -1))]), se[123] || (se[123] = e("div", {
            class: "browser-select-subtitle"
          }, "安装插件后可模拟人工一键复制粘贴发布节约人力时间,显著提升运营效率", -1))]), se[129] || (se[129] = e("div", {
            class: "browser-select-bg"
          }, null, -1)), e("div", Lpe, [se[126] || (se[126] = e("div", {
            class: "browser-section-title"
          }, [e("span", {
            style: {
              "margin-right": "6px"
            }
          }, "⭐"), g("支持下方浏览器 ")], -1)), e("div", Dpe, [(c(!0), v(Ue, null, gt(it.value, sa => (c(), v("div", {
            key: sa.id,
            class: "browser-card"
          }, [e("div", Mpe, [e("img", {
            alt: sa.name,
            src: sa.logo
          }, null, 8, Ope)]), e("div", Bpe, h(sa.name), 1)]))), 128))]), e("div", Npe, [e("div", {
            class: "app-store-btn-box",
            onClick: jl
          }, [...se[124] || (se[124] = [e("span", {
            class: "app-store-btn"
          }, "下载安装插件", -1)])]), M("", !0)]), se[127] || (se[127] = e("div", {
            class: "version-section"
          }, [e("div", {
            class: "version-text"
          }, "最新版本: V1.0.10 2025-12-08")], -1))]), e("div", Upe, [a(Ht, {
            type: "primary",
            size: "large",
            class: "learned-btn",
            onClick: fa
          }, {
            default: l(() => [...se[128] || (se[128] = [e("span", null, "学会了，关闭", -1), e("img", {
              alt: "next",
              src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'/%3E%3C/svg%3E",
              style: {
                width: "16px",
                height: "16px"
              }
            }, null, -1)])]),
            _: 1
          })])])]),
          _: 1
        }, 8, ["modelValue"]), a(bt, {
          modelValue: Te.value,
          "onUpdate:modelValue": se[52] || (se[52] = sa => Te.value = sa),
          width: 800,
          center: "",
          class: "tutorial-video-dialog",
          "close-on-click-modal": !0
        }, {
          default: l(() => [e("div", {
            class: "tutorial-video-box"
          }, [e("video", {
            autoplay: "",
            loop: "",
            controls: "",
            src: qpe
          })])]),
          _: 1
        }, 8, ["modelValue"])], 2)
      }
    }
  },
  Gpe = al(Wpe, [
    ["__scopeId", "data-v-39c39cd0"]
  ]);
const Jpe = {
    class: "product-page"
  },
  Hpe = {
    class: "main-content"
  },
  Qpe = {
    class: "breadcrumb-section"
  },
  Kpe = {
    class: "product-main"
  },
  Ype = {
    class: "product-images"
  },
  Xpe = {
    class: "main-image-container"
  },
  Zpe = ["src", "alt"],
  e1e = ["src", "alt"],
  t1e = {
    class: "product-info"
  },
  a1e = {
    class: "product-title"
  },
  l1e = {
    class: "product-subtitle"
  },
  n1e = {
    class: "product-intro-form"
  },
  o1e = {
    class: "action-buttons"
  },
  i1e = {
    class: "product-details"
  },
  s1e = ["innerHTML"],
  r1e = ["innerHTML"],
  u1e = ["innerHTML"],
  c1e = {
    class: "qr-content"
  },
  d1e = ["src"],
  v1e = {
    class: "qr-time"
  },
  m1e = {
    class: "download-dialog-content"
  },
  g1e = {
    class: "download-url-display"
  },
  f1e = {
    class: "download-dialog-buttons"
  },
  p1e = {
    __name: "Product",
    setup(t) {
      const o = Le(() => Wr(Fr)),
        i = fn(),
        n = ln(),
        s = p(15),
        u = p(!1),
        d = p(!1),
        f = p(!1),
        y = p(!1),
        w = () => !!localStorage.getItem("authToken"),
        S = Y => {
          d.value = !1, A.success("登录成功")
        },
        z = p("detail"),
        x = p(null),
        C = p(!1),
        V = () => {
          C.value = window.innerWidth <= 768
        },
        $ = p({
          id: null,
          title: "",
          subtitle: "",
          cover: "",
          images: [],
          detail: "",
          usage: "",
          faq: "",
          category: "",
          intro: "",
          features: "",
          value: ""
        }),
        N = {
          tools: {
            path: "/tools",
            name: "超级工具箱",
            type: 15
          },
          yunying: {
            path: "/yunying",
            name: "运营资料包",
            type: 16
          },
          sucai: {
            path: "/sucai",
            name: "素材资料包",
            type: 17
          }
        },
        T = Le(() => {
          var Y;
          return ((Y = N[$.value.category]) == null ? void 0 : Y.path) || "/tools"
        }),
        R = Le(() => {
          var Y;
          return ((Y = N[$.value.category]) == null ? void 0 : Y.name) || "超级工具箱"
        }),
        O = p(""),
        J = (Y, ne) => {
          const De = parseInt(ne);
          if (Y === "tools") {
            const Q = ["批量拼图", "文案生成器", "文档处理助手", "账号维护脚本工具", "敏感词检测", "图转视频", "标题金句生成", "PDF转图片", "长图拼接工具", "文案改写助手", "Excel批量处理", "自动点赞评论", "内容安全检测", "PPT转视频", "九宫格拼图"],
              re = ["多图按模板自动拼接生成拼图，支持布局、留白、水印设置。", "主题一键生成多风格文案，含标题、卖点、金句与CTA。", "PDF转图片、格式转换、批量重命名与合并等文件处理。", "自动化常规操作，策略可配，降低内容自检，提升账号权重。", "文本敏感词检测与替换建议，降低内容写作问题。", "图片+文案自动合成短视频，内置多套转场与配乐。", "按关键词生成标题与开头金句，提升点击率与读完率。", "按页导出清晰图片并自定义尺寸与质量参数。", "多张图片垂直或水平拼接，支持自定义间距与边框样式。", "智能改写文案，保持原意的同时提升表达多样性与吸引力。", "批量导入导出、格式转换、数据清洗与公式计算等操作。", "模风格化实用户行为，自动点赞、评论、关注，提升账号活跃度。", "全方位内容安全检测，包括敏感词、图片、视频等多维度审核。", "将PPT演示文稿一键转换为视频，支持配音、动画与转场效果。", "快速生成九宫格拼图，支持自定义分割线与文字水印添加。"];
            return {
              title: Q[De - 1] || "工具产品",
              subtitle: re[De - 1] || "专业的工具产品",
              cover: `https://picsum.photos/seed/tools${De}/600/600`,
              images: [`https://picsum.photos/seed/tools${De}-1/600/600`, `https://picsum.photos/seed/tools${De}-2/600/600`, `https://picsum.photos/seed/tools${De}-3/600/600`]
            }
          } else if (Y === "yunying") {
            const Q = ["运营入门到进阶", "活动玩法模板合集", "增长飞轮案例", "素材模板库", "投放方案与素材", "写作建议手册", "短视频运营教程", "品牌物料打包", "AARRR 指标表", "节点活动手册", "社群运营实战", "用户留存策略", "新品推广方案", "信息流投放指南", "电商写作建议"],
              re = ["系统掌握用户增长、内容运营、活动策划等核心方法论与实战案例。", "裂变、抽奖、拼团、签到、多种活动落地模板与复盘要点整理。", "盘点头部平台的增长模型与关键策略，借鉴落地打法。", "常用海报/长图/推文模板与设计规范，拿来即用。", "多平台渠道投放的预算、素材与人群策略建议。", "各写作建议、写作问题案例与规避建议，帮助降低内容风险。", "账号定位、内容选题、拍剪规范与数据复盘流程。", "品牌视觉物料与运营素材的统一打包版本，便于协作。", "从拉新到留存的关键指标与看板模板，支持本地化。", "节日节点的热点借势与活动创意，包含执行清单。", "社群搭建、活跃度提升、转化策略与社群裂变完整方案。", "提升用户粘性的核心策略、工具与方法，降低流失率。", "新品上线的完整推广流程，从预热到爆发的全链路策略。", "短视频、图文等信息流平台的投放技巧与素材优化方法。", "电商、电商等主流电商平台的规则解读与通过运营指南。"];
            return {
              title: Q[De - 1] || "运营资料包",
              subtitle: re[De - 1] || "专业的运营资料包",
              cover: `https://picsum.photos/seed/yunying${De}/600/600`,
              images: [`https://picsum.photos/seed/yunying${De}-1/600/600`, `https://picsum.photos/seed/yunying${De}-2/600/600`, `https://picsum.photos/seed/yunying${De}-3/600/600`]
            }
          } else if (Y === "sucai") {
            const Q = ["电商主图合集", "扁平插画图标库", "短视频转场包", "BGM配乐精选", "商用字体合集", "节日海报模板", "背景纹理包", "字幕条与下三分素材", "3D 插画合集", "PPT 模板合集", "产品摄影素材", "手绘风格插画", "片头片尾模板", "音效素材库", "创意字体包"],
              re = ["精选电商类目主图与细节图模板，适配常见尺寸与平台规范。", "海量扁平风格插画与通用图标，适用于海报、H5与PPT。", "常用转场、光效、字幕条素材，便于快速剪辑组合。", "适合 vlog、开箱、教程等场景的免版权音乐与音效。", "常用中文/英文字体，覆盖海报、正文、标题等多个场景。", "覆盖热门节日节点的通用海报模板，含排版与色板。", "纸张、渐变、噪点、格纹等高分辨率背景纹理素材。", "常见风格字幕条/徽标动效与下三分，透明通道便捷叠加。", "氛围强烈的 3D 插画元素，适合封面与视觉强化。", "主题演示模板与图表库，快速完成活动/汇报幻灯片。", "高清产品摄影图片，涵盖多行业多场景，可直接商用。", "温馨手绘风格插画元素，适合儿童、家居、生活类内容。", "专业级片头片尾动画模板，支持自定义文字与品牌标识。", "丰富的音效素材，包括提示音、环境音、转场音效等。", "独具特色的创意字体，适合标题、海报、品牌设计使用。"];
            return {
              title: Q[De - 1] || "素材资料包",
              subtitle: re[De - 1] || "专业的素材资料包",
              cover: `https://picsum.photos/seed/sucai${De}/600/600`,
              images: [`https://picsum.photos/seed/sucai${De}-1/600/600`, `https://picsum.photos/seed/sucai${De}-2/600/600`, `https://picsum.photos/seed/sucai${De}-3/600/600`]
            }
          }
          return {
            title: "产品详情",
            subtitle: "产品描述",
            cover: "https://picsum.photos/seed/product/600/600",
            images: ["https://picsum.photos/seed/product1/600/600", "https://picsum.photos/seed/product2/600/600", "https://picsum.photos/seed/product3/600/600"]
          }
        },
        ee = async () => {
          const Y = i.params.id,
            ne = i.params.category || "tools";
          if (N[ne] && (s.value = N[ne].type), ne === "tools") try {
            const b = await Df(Y);
            if (b) {
              $.value = {
                id: b.id,
                title: b.title || "",
                subtitle: b.desc || "",
                cover: b.images && b.images.length > 0 ? b.images[0] : "",
                images: b.images || [],
                intro: b.intro || "",
                features: b.feature || "",
                value: b.worth || "",
                detail: b.details || "",
                usage: b.explain || "",
                faq: b.problem || "",
                category: ne
              }, O.value = b.down_url || "";
              return
            }
          } catch (b) {
            console.error("加载工具详情失败:", b), A.error("加载工具详情失败，请稍后重试")
          }
          const De = J(ne, Y),
            re = (b => b.includes("拼图") ? {
              intro: "专业的批量拼图工具，支持多种布局模板，自动拼接生成精美拼图，操作简单快捷。",
              features: "多图自动拼接、支持自定义布局、可设置留白和水印、批量处理高效便捷。",
              value: "节省图片处理时间，提升内容制作效率，一键生成专业级拼图效果。"
            } : b.includes("文案") ? {
              intro: "智能文案生成器，基于AI技术，一键生成多风格文案，包含标题、卖点、金句等。",
              features: "AI智能生成、多风格可选、涵盖标题卖点金句、支持批量生成、实时预览效果。",
              value: "快速产出高质量文案，提升内容创作效率，降低文案创作成本。"
            } : {
              intro: `${De.subtitle}`,
              features: "功能强大、操作简单、性能稳定、持续更新、专业可靠。",
              value: "提升工作效率，节省时间成本，降低操作难度，提高工作质量。"
            })(De.title);
          $.value = {
            id: Y,
            title: De.title,
            subtitle: De.subtitle,
            cover: De.cover,
            images: De.images,
            intro: re.intro,
            features: re.features,
            value: re.value,
            detail: `
      <h3>产品简介</h3>
      <p>${De.subtitle}</p>
      <h3>主要功能</h3>
      <ul>
        <li>功能强大，操作简单</li>
        <li>支持多种格式</li>
        <li>自动优化处理</li>
        <li>一键导出结果</li>
      </ul>
      <h3>适用场景</h3>
      <p>适合各类用户使用，提升工作效率。</p>
    `,
            usage: `
      <h3>使用步骤</h3>
      <ol>
        <li>下载并安装产品</li>
        <li>打开产品，选择功能</li>
        <li>导入需要处理的内容</li>
        <li>点击处理，等待完成</li>
        <li>导出处理结果</li>
      </ol>
    `,
            faq: `
      <h3>常见问题</h3>
      <div class="faq-item">
        <h4>Q: 支持哪些格式？</h4>
        <p>A: 支持主流格式，具体请查看产品说明。</p>
      </div>
      <div class="faq-item">
        <h4>Q: 处理速度如何？</h4>
        <p>A: 处理速度快，可根据内容大小调整。</p>
      </div>
    `,
            category: ne
          }, O.value = `https://example.com/download/tools/${Y}.exe`
        }, ie = () => {
          n.go(-1)
        }, Ae = () => {
          if (!C.value && !w()) {
            d.value = !0;
            return
          }
          if (!O.value) {
            A.warning("下载链接获取失败，请稍后重试");
            return
          }
          C.value ? y.value = !0 : (window.open(O.value, "_blank"), A.success("正在打开下载页面"))
        }, F = () => {
          if (!O.value) {
            A.warning("下载链接不存在");
            return
          }
          navigator.clipboard.writeText(O.value).then(() => {
            A.success("下载地址已复制到剪贴板"), y.value = !1
          }).catch(() => {
            A.error("复制失败，请手动复制")
          })
        };
      return Ll(async () => {
        document.title = "火兔工具箱_产品详情", await ee(), V(), window.addEventListener("resize", V)
      }), Zl(() => {
        window.removeEventListener("resize", V)
      }), (Y, ne) => {
        const De = $l,
          Q = xl,
          re = th,
          b = ah,
          te = Si,
          we = Ei,
          ae = lh,
          me = nh,
          ce = Ii,
          ue = xi,
          U = Rl,
          de = cn;
        return c(), v("div", Jpe, [e("main", Hpe, [a(Q, {
          class: "back-button",
          circle: "",
          onClick: ie
        }, {
          default: l(() => [a(De, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        }), e("div", Qpe, [a(b, {
          separator: "/"
        }, {
          default: l(() => [a(re, {
            to: {
              path: "/"
            }
          }, {
            default: l(() => [...ne[8] || (ne[8] = [g("首页", -1)])]),
            _: 1
          }), a(re, {
            to: {
              path: T.value
            }
          }, {
            default: l(() => [g(h(R.value), 1)]),
            _: 1
          }, 8, ["to"]), a(re, null, {
            default: l(() => [g(h($.value.title), 1)]),
            _: 1
          })]),
          _: 1
        })]), e("div", Kpe, [e("div", Ype, [e("div", Xpe, [$.value.images && $.value.images.length > 0 ? (c(), ye(we, {
          key: 0,
          ref_key: "carouselRef",
          ref: x,
          interval: 0,
          "indicator-position": "outside",
          arrow: "hover",
          class: "product-carousel"
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt($.value.images, (_e, xe) => (c(), ye(te, {
            key: xe
          }, {
            default: l(() => [e("img", {
              src: _e,
              alt: `产品图片${xe+1}`,
              class: "main-image"
            }, null, 8, Zpe)]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        }, 512)) : (c(), v("img", {
          key: 1,
          src: $.value.cover,
          alt: $.value.title,
          class: "main-image"
        }, null, 8, e1e))])]), e("div", t1e, [e("h1", a1e, h($.value.title), 1), e("div", l1e, h($.value.subtitle), 1), e("div", n1e, [a(me, {
          column: 1,
          border: ""
        }, {
          default: l(() => [a(ae, {
            label: "产品简介"
          }, {
            default: l(() => [g(h($.value.intro || "专业的工具软件，功能强大，操作简单，提升工作效率。"), 1)]),
            _: 1
          }), a(ae, {
            label: "产品特点"
          }, {
            default: l(() => [g(h($.value.features || "操作简单、功能丰富、性能稳定、持续更新。"), 1)]),
            _: 1
          }), a(ae, {
            label: "价值体现"
          }, {
            default: l(() => [g(h($.value.value || "提升工作效率，节省时间成本，降低操作难度，提高工作质量。"), 1)]),
            _: 1
          })]),
          _: 1
        })]), e("div", o1e, [a(Q, {
          type: "primary",
          size: "large",
          class: "download-btn",
          onClick: Ae
        }, {
          default: l(() => [a(De, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), ne[9] || (ne[9] = g(" 下载软件 ", -1))]),
          _: 1
        }), a(Q, {
          type: "default",
          size: "large",
          class: "consult-btn",
          onClick: ne[0] || (ne[0] = _e => f.value = !0)
        }, {
          default: l(() => [a(De, null, {
            default: l(() => [a(P(Po))]),
            _: 1
          }), ne[10] || (ne[10] = g(" 咨询客服 ", -1))]),
          _: 1
        })])])]), e("div", i1e, [a(ue, {
          modelValue: z.value,
          "onUpdate:modelValue": ne[1] || (ne[1] = _e => z.value = _e),
          class: "details-tabs"
        }, {
          default: l(() => [a(ce, {
            label: "产品详情",
            name: "detail"
          }, {
            default: l(() => [e("div", {
              class: "detail-content",
              innerHTML: $.value.detail
            }, null, 8, s1e)]),
            _: 1
          }), a(ce, {
            label: "使用说明",
            name: "usage"
          }, {
            default: l(() => [e("div", {
              class: "detail-content",
              innerHTML: $.value.usage
            }, null, 8, r1e)]),
            _: 1
          }), a(ce, {
            label: "常见问题",
            name: "faq"
          }, {
            default: l(() => [e("div", {
              class: "detail-content",
              innerHTML: $.value.faq
            }, null, 8, u1e)]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])])]), a(Wn, {
          modelValue: u.value,
          "onUpdate:modelValue": ne[2] || (ne[2] = _e => u.value = _e)
        }, null, 8, ["modelValue"]), a(no, {
          modelValue: d.value,
          "onUpdate:modelValue": ne[3] || (ne[3] = _e => d.value = _e),
          onLoginSuccess: S
        }, null, 8, ["modelValue"]), a(U, {
          modelValue: f.value,
          "onUpdate:modelValue": ne[4] || (ne[4] = _e => f.value = _e),
          title: "客服二维码",
          width: C.value ? "90%" : "450px",
          center: "",
          class: "consult-dialog qr-dialog"
        }, {
          default: l(() => [e("div", c1e, [e("img", {
            src: o.value,
            alt: "客服二维码",
            class: "qr-image"
          }, null, 8, d1e), ne[11] || (ne[11] = e("p", {
            class: "qr-title"
          }, "添加客服二维码", -1)), e("p", v1e, h(P(Gr)), 1)])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(U, {
          modelValue: y.value,
          "onUpdate:modelValue": ne[7] || (ne[7] = _e => y.value = _e),
          title: "下载地址",
          width: C.value ? "90%" : "500px",
          center: "",
          class: "download-dialog"
        }, {
          default: l(() => [e("div", m1e, [e("div", g1e, [a(de, {
            modelValue: O.value,
            "onUpdate:modelValue": ne[5] || (ne[5] = _e => O.value = _e),
            readonly: "",
            class: "download-url-input"
          }, {
            append: l(() => [a(Q, {
              onClick: F
            }, {
              default: l(() => [...ne[12] || (ne[12] = [g("复制", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]), e("div", f1e, [a(Q, {
            type: "primary",
            onClick: F
          }, {
            default: l(() => [...ne[13] || (ne[13] = [g("复制下载地址", -1)])]),
            _: 1
          }), a(Q, {
            onClick: ne[6] || (ne[6] = _e => y.value = !1)
          }, {
            default: l(() => [...ne[14] || (ne[14] = [g("取消", -1)])]),
            _: 1
          })])])]),
          _: 1
        }, 8, ["modelValue", "width"])])
      }
    }
  },
  y1e = al(p1e, [
    ["__scopeId", "data-v-66cc194f"]
  ]);
const h1e = {
    class: "dialog-header"
  },
  b1e = {
    key: 0,
    class: "payment-content-pc"
  },
  w1e = {
    class: "payment-left"
  },
  _1e = {
    class: "product-info-section"
  },
  k1e = {
    class: "product-name"
  },
  C1e = {
    class: "product-price"
  },
  A1e = {
    class: "payment-method-section"
  },
  I1e = {
    class: "payment-tabs"
  },
  x1e = {
    class: "amount-section"
  },
  S1e = {
    class: "amount-value"
  },
  E1e = {
    key: 0,
    class: "countdown-section"
  },
  T1e = {
    class: "countdown-time"
  },
  $1e = {
    class: "agreement-section"
  },
  P1e = {
    class: "payment-right"
  },
  V1e = {
    class: "qr-code-section"
  },
  z1e = {
    class: "qr-tip"
  },
  L1e = {
    class: "product-info-section-mobile"
  },
  D1e = {
    class: "product-name-mobile"
  },
  M1e = {
    class: "product-price-mobile"
  },
  O1e = {
    class: "agreement-section"
  },
  B1e = {
    key: 0,
    class: "confirm-payment-section"
  },
  N1e = {
    key: 2,
    class: "success-section"
  },
  U1e = {
    __name: "PaymentDialog",
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      product: {
        type: Object,
        default: () => ({
          id: null,
          title: "",
          price: 0
        })
      }
    },
    emits: ["update:modelValue", "payment-success"],
    setup(t, {
      emit: o
    }) {
      const i = t,
        n = o,
        s = Le({
          get: () => i.modelValue,
          set: R => n("update:modelValue", R)
        }),
        u = p("wechat"),
        d = p(!0),
        f = p(!1),
        y = p(!1),
        w = p(600),
        S = p("10:00"),
        z = p(!1);
      let x = null;
      const C = () => {
          z.value = window.innerWidth <= 768
        },
        V = () => {
          if (w.value <= 0) {
            clearInterval(x), S.value = "00:00", A.warning("支付时间已过期，请重新支付");
            return
          }
          const R = Math.floor(w.value / 60),
            O = w.value % 60;
          S.value = `${String(R).padStart(2,"0")}:${String(O).padStart(2,"0")}`, w.value--
        },
        $ = () => {
          x && (clearInterval(x), x = null), y.value = !1, w.value = 600, s.value = !1
        },
        N = () => {
          setTimeout(() => {
            y.value = !0, setTimeout(() => {
              const R = `https://example.com/download/${i.product.category}/${i.product.id}.zip`;
              n("payment-success", R, u.value), $()
            }, 1500)
          }, 3e3)
        },
        T = () => {
          if (!d.value) {
            A.warning("请先阅读并同意服务协议");
            return
          }
          N()
        };
      return oa(s, R => {
        R ? (C(), y.value = !1, w.value = 600, V(), x && clearInterval(x), x = setInterval(V, 1e3), !z.value && d.value && setTimeout(() => {
          N()
        }, 500)) : x && (clearInterval(x), x = null)
      }), Ll(() => {
        C(), window.addEventListener("resize", C)
      }), Zl(() => {
        window.removeEventListener("resize", C), x && clearInterval(x)
      }), (R, O) => {
        const J = $l,
          ee = ho,
          ie = xl,
          Ae = Rl;
        return c(), v(Ue, null, [a(Ae, {
          modelValue: s.value,
          "onUpdate:modelValue": O[6] || (O[6] = F => s.value = F),
          "show-close": !1,
          width: z.value ? "90%" : "720px",
          class: "payment-dialog",
          "before-close": $,
          "align-center": ""
        }, {
          header: l(() => [e("div", h1e, [O[8] || (O[8] = e("div", {
            class: "header-title"
          }, "支付购买资料包", -1)), a(J, {
            class: "close-button",
            onClick: $
          }, {
            default: l(() => [a(P(un))]),
            _: 1
          })])]),
          default: l(() => [e("div", {
            class: Pe(["payment-container", {
              "payment-container-mobile": z.value
            }])
          }, [z.value ? (c(), v(Ue, {
            key: 1
          }, [e("div", L1e, [e("div", D1e, h(t.product.title), 1), e("div", M1e, "¥" + h(t.product.price), 1)]), e("div", O1e, [a(ee, {
            modelValue: d.value,
            "onUpdate:modelValue": O[5] || (O[5] = F => d.value = F),
            size: "small"
          }, {
            default: l(() => [O[18] || (O[18] = g(" 我已阅读并同意 ", -1)), e("a", {
              href: "javascript:;",
              onClick: O[4] || (O[4] = lt(F => f.value = !0, ["stop"]))
            }, "《服务协议》")]),
            _: 1
          }, 8, ["modelValue"])]), y.value ? M("", !0) : (c(), v("div", B1e, [a(ie, {
            type: "primary",
            size: "large",
            class: "confirm-payment-btn mobile-pay-btn",
            onClick: T,
            disabled: !d.value
          }, {
            default: l(() => [...O[19] || (O[19] = [g(" 立即支付 ", -1)])]),
            _: 1
          }, 8, ["disabled"])]))], 64)) : (c(), v("div", b1e, [e("div", w1e, [e("div", _1e, [e("div", k1e, h(t.product.title), 1), e("div", C1e, "¥" + h(t.product.price), 1)]), e("div", A1e, [O[13] || (O[13] = e("div", {
            class: "section-title"
          }, "选择支付方式", -1)), e("div", I1e, [e("div", {
            class: Pe(["payment-tab", {
              "payment-tab-active": u.value === "wechat"
            }]),
            onClick: O[0] || (O[0] = F => u.value = "wechat")
          }, [O[9] || (O[9] = e("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAMFBMVEVHcEw1vE41vkw2v0s2v0w3v0wuvEQouj5r0Hql4q7I7c7i9uWM2pn///9TyGXz+/RBLjxoAAAABXRSTlMAOcL1+XDJrPQAAAEoSURBVHja1dXBkoQgDATQHTXdBAL8/9+uRekwE9ZRD3PYvnDwESFVwM9X85jm5WPm6fG0i5xm2fUkFzJteL6C5w0vV/AyYhAgcQEDQWNKKZrwDCOkvCcKPmLE/BrjB8ytbNc4xIzZpxxhhLwmIOY+Jh5gNgVqw6C1OQdYauuB1tzHpPwbF7feakVIXMIGopiqFWDE8lZ2JZb2X8Bh1+UASW9THYb1r0qpruFuGajPSoK1bnzpfPW4bzEytPLIa6R1XOGwhA0bY9tYbDOtdXzA1A2jZh8ZcFxLrE454uKx5GqUEgLTeeWynw6ot4ke93NXPDZ43AMdCh9if2ySiMNO2wsuJ1gg2npSVbPB45FTShGQQXmKeyAOn2e5deXeusxvPRO3HqD/ml/eDypshGCXOQAAAABJRU5ErkJggg==",
            alt: "微信"
          }, null, -1)), O[10] || (O[10] = e("span", null, "微信支付", -1)), u.value === "wechat" ? (c(), ye(J, {
            key: 0,
            class: "tab-check-icon"
          }, {
            default: l(() => [a(P(Zo))]),
            _: 1
          })) : M("", !0)], 2), e("div", {
            class: Pe(["payment-tab", {
              "payment-tab-active": u.value === "alipay"
            }]),
            onClick: O[1] || (O[1] = F => u.value = "alipay")
          }, [O[11] || (O[11] = e("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAALVBMVEVHcEwAm+gAnugAnugAnugAn+gAn+kAnugAn+gAnugAn+gAnecAnugAnugAnuj+dklBAAAAD3RSTlMACm246fgs3v+bhBnKQFqNA45NAAABKElEQVR42tWVyY7DIAxADV5Ygvn/z50RcUqK3DZRNYd5t6DHZjsG/i0hIvELCGM4u5LyW5KcXM4f4Gmn/JEERswXiCbjukr5ZZXRZFrGKwBsq0wm8xWZv5CZjCHTAbtyAZfiyi0aOvJ/0G6e+Xu5y2Ab9bJTX8lc+xOWXVf2Ehz4otytxlyZsNRasJF9BgBovpx6AEMi8l6T4kcDTTVCHwPoyimAYiJqWHVOUz/OHeqs3KKws0V0osFB85nWT+fhRW5Q3D/O/EK+PN0Qw/S1pIecQFcXMFPdYDIvKKel06hn3O8qjowAMQ21jd23I3WMushWw9K77htregpNWOSMc0NZQjMPP5sMRhURrc1rjEX99uXTbjXGOy03XG/mJHeeicsP0MjTH/MDoKwjZhfI4AgAAAAASUVORK5CYII=",
            alt: "支付宝"
          }, null, -1)), O[12] || (O[12] = e("span", null, "支付宝", -1)), u.value === "alipay" ? (c(), ye(J, {
            key: 0,
            class: "tab-check-icon"
          }, {
            default: l(() => [a(P(Zo))]),
            _: 1
          })) : M("", !0)], 2)])]), e("div", x1e, [O[14] || (O[14] = e("div", {
            class: "amount-label"
          }, "支付金额", -1)), e("div", S1e, "¥" + h(t.product.price), 1)]), w.value > 0 ? (c(), v("div", E1e, [O[15] || (O[15] = e("span", {
            class: "countdown-label"
          }, "支付倒计时：", -1)), e("span", T1e, h(S.value), 1)])) : M("", !0), e("div", $1e, [a(ee, {
            modelValue: d.value,
            "onUpdate:modelValue": O[3] || (O[3] = F => d.value = F),
            size: "small"
          }, {
            default: l(() => [O[16] || (O[16] = g(" 我已阅读并同意 ", -1)), e("a", {
              href: "javascript:;",
              onClick: O[2] || (O[2] = lt(F => f.value = !0, ["stop"]))
            }, "《服务协议》")]),
            _: 1
          }, 8, ["modelValue"])])]), e("div", P1e, [e("div", V1e, [O[17] || (O[17] = e("div", {
            class: "qr-code-wrapper"
          }, [e("img", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHIUlEQVR4nO3dUW5cKxZA0U6r5z/lvAE81EIih31x1vqMXLllu7aQwMCv379//wfo/Ld+A/C3EyHERAgxEUJMhBD737//6devX/ffx/+3P4W7/+aX/2f78qX217H/bU585f5bWnrlk2wkhJgIISZCiIkQYiKEmAghtliiWLr2d97708r709+HL19+5bXFjH2Hv6P9b3P/QYfrFhM++Ek2EkJMhBATIcRECDERQkyEENtdolg6nGc/nCyeWI344NMnXr50uDxzuG6xNLG14vBBE083EkJMhBATIcRECDERQkyEEDtaomh9cO5+/+X7b+mDKzET6xYTR0K9wkgIMRFCTIQQEyHERAgxEULs4SWKifnriSOMXjGxwtGe6fQKIyHERAgxEUJMhBATIcRECLGjJYp2rvnaesAH5+4nLqy+tuQz8eYPtZ9kIyHERAgxEUJMhBATIcRECLHdJYpX9gdcmxNvv3LCK9/7tQO+rjESQkyEEBMhxEQIMRFCTIQQ+/U3nLrT3nPwwbOSrh2HdW094OmPsZEQYiKEmAghJkKIiRBiIoTYYominVb+4B+5v3IC0v6DJkxcPz7xvX9wY4eREGIihJgIISZCiIkQYiKE2OKgp4m/kb92Ys+1l++79n/u/zo+eIv1tZWYDy6MGQkhJkKIiRBiIoSYCCEmQojt7qJo/yB9ws+76/va+UsfPFXp6eOwjIQQEyHERAgxEUJMhBATIcSO7qK4dtzQxIOubcJ4+nrnDx7KNPHyfROfECMhxEQIMRFCTIQQEyHERAix3SWKn3fB8r5XTr6acG37S7vjYenacpeREGIihJgIISZCiIkQYiKE2OIuin0Tc7hP3w79ynLCxMuXJn4gP28dyEgIMRFCTIQQEyHERAgxEUJsd4ni6an/a39i3+41OZyRn3j50s9bC9l/uYOe4ItECDERQkyEEBMhxEQIsaNdFBMm5pqvXRHRXrnRXhExsWaz//JXvqMlIyHERAgxEUJMhBATIcRECLHFXRRPX4L99IOurTEcmtgs0l4q3h4JZSSEmAghJkKIiRBiIoSYCCG22EXRXm09sUjwwZnu/ZcfPuja2VPXtmvsv3zpg/exGwkhJkKIiRBiIoSYCCEmQogtdlGsv+57E7suqLjg2nlWE9tK2k/I/tONhBATIcRECDERQkyEEBMhxHaXKEaefWsC+oPnLx0+fcK1y7onfPDgLNdlwzNECDERQkyEEBMhxEQIsUtLFE/vJFh65fKDaxcqPP0rbu9ONxJCTIQQEyHERAgxEUJMhBBb3EUxsbnhg4fzXPuOrmk3Dbyy/WXC4fduJISYCCEmQoiJEGIihJgIIXZ0F8W1G5Lbiwrag54m3tK1/QETayH7D3rlthIjIcRECDERQkyEEBMhxEQIsfKgp2vHDV2bkT/08zYN7L98qb304tqqiZEQYiKEmAghJkKIiRBiIoTYYonig5dLX5sTX2qPb2q3LDw99d+umuwzEkJMhBATIcRECDERQkyEEDvaRdHekNxOUe+/pYkH7T/96Qfte+X28iUjIcRECDERQkyEEBMhxEQIsd3rspfaCf1rezgOtTd27PvgJSKH2uUZBz3BM0QIMRFCTIQQEyHERAixP7+Lop2VXro2oX/twuoJr1zWvfTBVRNLFPAMEUJMhBATIcRECDERQuyP35fdXljd7k54Zc1m6ZU7SA598IIKIyHERAgxEUJMhBATIcRECLGjg56WDuevXzkaqL2HY2li8v3aVx7+PA8/YC0jIcRECDERQkyEEBMhxEQIscUuivbP4dtbFg61P6V9rxwz1e63WJr4fBoJISZCiIkQYiKEmAghJkKIHS1RXPP0ZRL7T9/XHrU08aObeEsTJt68kRBiIoSYCCEmQoiJEGIihNjioKcJE1PV12al26dPzMgfrq9cW8h5ejVin5EQYiKEmAghJkKIiRBiIITYn78u+5qJyeJ2z8FSOyN/qN3+cvh/Lk38io2EEBMhxEQIMRFCTIQQEyHE/vx12RMmrmJuL23+m2/bvnaS2CsLJEZCiIkQYiKEmAghJkKIiRBBu/s9tdcRL7XrFtcuAJ9YNVm69h2150RNvNxdFPA2EUJMhBATIcRECDERQuzouuyn73w+1D59qd2dsO+Dh1wdsosC3iZCiIkQYiKEmAghJkKIXbou+5prx/hM7DloDya6tsKx9MGlqWs/ECMhxEQIMRFCTIQQEyHERAixn7ZEsXS48DDxt/zXDo+auAh639NHbO3/n0uuy4ZniBBiIoSYCCEmQoiJEGJHSxTX/sT+0NM7HpYmLn44fNDS/oPaRZfDn+fS/oOMhBATIcRECDERQkyEEBMhxHaXKF65FWDplS0L+195+KBrF1S8soti4uNtFwU8Q4QQEyHERAgxEUJMhBBbXJcN3GQkhJgIISZCiIkQYiKEmAgh9g9PjQYiv9f8vgAAAABJRU5ErkJggg==",
            alt: "二维码",
            class: "qr-code-img"
          })], -1)), e("div", z1e, "请使用" + h(u.value === "wechat" ? "微信" : "支付宝") + "扫描二维码完成支付", 1)])])])), y.value ? (c(), v("div", N1e, [a(J, {
            class: "success-icon"
          }, {
            default: l(() => [a(P(Fg))]),
            _: 1
          }), O[20] || (O[20] = e("div", {
            class: "success-text"
          }, "支付成功！正在获取下载地址...", -1))])) : M("", !0)], 2)]),
          _: 1
        }, 8, ["modelValue", "width"]), a(Ae, {
          modelValue: f.value,
          "onUpdate:modelValue": O[7] || (O[7] = F => f.value = F),
          title: "服务协议",
          width: z.value ? "90%" : "600px"
        }, {
          default: l(() => [...O[21] || (O[21] = [e("div", {
            class: "agreement-content"
          }, [e("p", null, "这里展示《服务协议》内容示例。可根据实际情况替换为正式协议文本。")], -1)])]),
          _: 1
        }, 8, ["modelValue", "width"])], 64)
      }
    }
  },
  R1e = al(U1e, [
    ["__scopeId", "data-v-de86e5cc"]
  ]);
const j1e = {
    class: "product-page"
  },
  q1e = {
    class: "main-content"
  },
  F1e = {
    class: "breadcrumb-section"
  },
  W1e = {
    class: "product-main"
  },
  G1e = {
    class: "product-images"
  },
  J1e = {
    class: "main-image-container"
  },
  H1e = ["src", "alt"],
  Q1e = ["src", "alt"],
  K1e = {
    class: "product-info"
  },
  Y1e = {
    class: "product-title"
  },
  X1e = {
    class: "product-subtitle"
  },
  Z1e = {
    class: "price-section"
  },
  eye = {
    class: "price-row"
  },
  tye = {
    class: "current-price"
  },
  aye = {
    class: "price-value"
  },
  lye = {
    key: 0,
    class: "original-price-inline"
  },
  nye = {
    class: "price-value-line"
  },
  oye = {
    class: "product-intro-form"
  },
  iye = {
    class: "action-buttons"
  },
  sye = {
    class: "product-details"
  },
  rye = ["innerHTML"],
  uye = ["innerHTML"],
  cye = ["innerHTML"],
  dye = {
    class: "download-content"
  },
  vye = {
    class: "download-url-section"
  },
  mye = {
    key: 0,
    class: "download-buttons"
  },
  gye = {
    key: 1,
    class: "download-buttons-mobile"
  },
  fye = {
    class: "qr-content"
  },
  pye = ["src"],
  yye = {
    class: "qr-time"
  },
  hye = {
    class: "my-packages-content"
  },
  bye = {
    class: "amount-text"
  },
  wye = {
    key: 1,
    class: "my-packages-cards"
  },
  _ye = {
    class: "package-card-header"
  },
  kye = {
    class: "package-card-title"
  },
  Cye = {
    class: "package-card-content"
  },
  Aye = {
    class: "package-card-item"
  },
  Iye = {
    class: "package-card-value"
  },
  xye = {
    class: "package-card-item"
  },
  Sye = {
    class: "package-card-value amount-text"
  },
  Eye = {
    class: "package-card-item"
  },
  Tye = {
    class: "package-card-value"
  },
  $ye = {
    class: "package-card-item"
  },
  Pye = {
    class: "package-download-url"
  },
  Vye = {
    class: "package-card-actions"
  },
  zye = {
    key: 2,
    class: "empty-packages"
  },
  Lye = {
    __name: "Product2",
    setup(t) {
      const o = Le(() => Wr(Fr)),
        i = fn(),
        n = ln(),
        s = p(16),
        u = p(!1),
        d = p(!1),
        f = () => !!localStorage.getItem("authToken"),
        y = ue => {
          d.value = !1, A.success("登录成功")
        },
        w = p(!1),
        S = p(!1),
        z = p(!1),
        x = p(!1),
        C = p("detail"),
        V = p(null),
        $ = p(""),
        N = p(!1),
        T = () => {
          N.value = window.innerWidth <= 768
        },
        R = p({
          id: null,
          title: "",
          subtitle: "",
          cover: "",
          images: [],
          price: 0,
          originalPrice: 0,
          detail: "",
          usage: "",
          faq: "",
          category: "",
          intro: "",
          features: "",
          value: ""
        }),
        O = {
          yunying: {
            path: "/yunying",
            name: "运营资料包",
            type: 16
          },
          sucai: {
            path: "/sucai",
            name: "素材资料包",
            type: 17
          }
        },
        J = Le(() => {
          var ue;
          return ((ue = O[R.value.category]) == null ? void 0 : ue.path) || "/yunying"
        }),
        ee = Le(() => {
          var ue;
          return ((ue = O[R.value.category]) == null ? void 0 : ue.name) || "运营资料包"
        }),
        ie = (ue, U) => {
          const de = parseInt(U);
          if (ue === "yunying") {
            const _e = ["运营入门到进阶", "活动玩法模板合集"],
              xe = ["系统掌握用户增长、内容运营、活动策划等核心方法论与实战案例。", "裂变、抽奖、拼团、签到、多种活动落地模板与复盘要点整理。"];
            return {
              title: _e[de - 1] || "运营资料包",
              subtitle: xe[de - 1] || "专业的运营资料包",
              cover: `https://picsum.photos/seed/yunying${de}/600/600`,
              images: [`https://picsum.photos/seed/yunying${de}-1/600/600`, `https://picsum.photos/seed/yunying${de}-2/600/600`, `https://picsum.photos/seed/yunying${de}-3/600/600`],
              price: 99,
              originalPrice: 199
            }
          } else if (ue === "sucai") {
            const _e = ["电商主图合集", "扁平插画图标库"],
              xe = ["精选电商类目主图与细节图模板，适配常见尺寸与平台规范。", "海量扁平风格插画与通用图标，适用于海报、H5与PPT。"];
            return {
              title: _e[de - 1] || "素材资料包",
              subtitle: xe[de - 1] || "专业的素材资料包",
              cover: `https://picsum.photos/seed/sucai${de}/600/600`,
              images: [`https://picsum.photos/seed/sucai${de}-1/600/600`, `https://picsum.photos/seed/sucai${de}-2/600/600`, `https://picsum.photos/seed/sucai${de}-3/600/600`],
              price: 79,
              originalPrice: 159
            }
          }
          return {
            title: "产品详情",
            subtitle: "产品描述",
            cover: "https://picsum.photos/seed/product/600/600",
            images: [],
            price: 99,
            originalPrice: 199
          }
        },
        Ae = async () => {
          const ue = i.params.id,
            U = i.params.category || "yunying";
          if (!O[U]) {
            console.error(`Invalid category: ${U}, defaulting to yunying`), n.replace(`/product2/yunying/${ue}`);
            return
          }
          if (s.value = O[U].type, U === "yunying") try {
            const Ce = await Bf(ue);
            if (Ce) {
              let Re = [];
              if (Ce.images) try {
                Re = typeof Ce.images == "string" ? JSON.parse(Ce.images) : Ce.images
              } catch (nt) {
                console.warn("解析 images 失败:", nt), Re = Array.isArray(Ce.images) ? Ce.images : []
              }
              R.value = {
                id: Ce.id,
                title: Ce.title || "",
                subtitle: Ce.desc || "",
                cover: Re && Re.length > 0 ? Re[0] : "",
                images: Re,
                price: Ce.price || 0,
                originalPrice: Ce.original_price || 0,
                intro: Ce.intro || "",
                features: Ce.feature || "",
                value: Ce.worth || "",
                detail: Ce.details || "",
                usage: Ce.explain || "",
                faq: Ce.problem || "",
                category: U
              };
              return
            }
          } catch (Ce) {
            console.error("加载运营资料包详情失败:", Ce), A.error("加载运营资料包详情失败，请稍后重试")
          }
          if (U === "sucai") try {
            const Ce = await Rf(ue);
            if (Ce) {
              let Re = [];
              if (Ce.images) try {
                Re = typeof Ce.images == "string" ? JSON.parse(Ce.images) : Ce.images
              } catch (nt) {
                console.warn("解析 images 失败:", nt), Re = Array.isArray(Ce.images) ? Ce.images : []
              }
              R.value = {
                id: Ce.id,
                title: Ce.title || "",
                subtitle: Ce.desc || "",
                cover: Re && Re.length > 0 ? Re[0] : "",
                images: Re,
                price: Ce.price || 0,
                originalPrice: Ce.original_price || 0,
                intro: Ce.intro || "",
                features: Ce.feature || "",
                value: Ce.worth || "",
                detail: Ce.details || "",
                usage: Ce.explain || "",
                faq: Ce.problem || "",
                category: U
              };
              return
            }
          } catch (Ce) {
            console.error("加载素材资料包详情失败:", Ce), A.error("加载素材资料包详情失败，请稍后重试")
          }
          const de = ie(U, ue),
            xe = ((Ce, Re) => {
              if (Ce === "yunying") {
                if (Re.includes("运营入门")) return {
                  intro: "系统化的运营知识体系，从入门到进阶全覆盖，包含用户增长、内容运营、活动策划等核心方法论与实战案例。",
                  features: "知识体系完整、实战案例丰富、方法论清晰、持续更新迭代、适合不同阶段学习。",
                  value: "快速建立运营知识体系，掌握核心方法论，提升运营能力，减少摸索时间。"
                };
                if (Re.includes("活动玩法")) return {
                  intro: "精选多种活动玩法模板，涵盖裂变、抽奖、拼团、签到等常见活动形式，包含落地模板与复盘要点。",
                  features: "玩法丰富多样、模板可直接使用、包含复盘要点、覆盖主流活动类型、快速落地执行。",
                  value: "快速掌握活动玩法，提升活动策划效率，降低试错成本，提高活动成功率。"
                }
              } else if (Ce === "sucai") {
                if (Re.includes("电商主图")) return {
                  intro: "精选电商类目主图与细节图模板，适配常见尺寸与平台规范，直接可用。",
                  features: "分类清晰完整、尺寸适配主流平台、符合平台规范、高质量素材、开箱即用。",
                  value: "节省设计时间，提升主图质量，符合平台规范，提高转化率。"
                };
                if (Re.includes("插画图标")) return {
                  intro: "海量扁平风格插画与通用图标库，适用于海报、H5、PPT等多种场景。",
                  features: "风格统一、数量丰富、格式多样、适用场景广、商用无忧。",
                  value: "丰富视觉素材库，提升设计效率，统一视觉风格，降低设计成本。"
                }
              }
              return {
                intro: `${de.subtitle}`,
                features: "内容全面、格式规范、分类清晰、持续更新、专业可靠。",
                value: "节省资料收集时间，提升工作效率，降低学习成本，快速上手应用。"
              }
            })(U, de.title);
          R.value = {
            id: ue,
            title: de.title,
            subtitle: de.subtitle,
            cover: de.cover,
            images: de.images,
            price: de.price,
            originalPrice: de.originalPrice,
            intro: xe.intro,
            features: xe.features,
            value: xe.value,
            detail: `
      <h3>产品简介</h3>
      <p>${de.subtitle}</p>
      <h3>主要内容</h3>
      <ul>
        <li>内容丰富，实用性强</li>
        <li>格式规范，易于使用</li>
        <li>持续更新，及时获取</li>
        <li>专业制作，质量保证</li>
      </ul>
      <h3>适用场景</h3>
      <p>适合各类用户使用，提升工作效率。</p>
    `,
            usage: `
      <h3>使用步骤</h3>
      <ol>
        <li>支付成功后获取下载地址</li>
        <li>下载资料包到本地</li>
        <li>解压文件，查看内容</li>
        <li>根据需要使用相关资源</li>
      </ol>
    `,
            faq: `
      <h3>常见问题</h3>
      <div class="faq-item">
        <h4>Q: 支付后多久可以获得下载地址？</h4>
        <p>A: 支付成功后立即可以获得下载地址。</p>
      </div>
      <div class="faq-item">
        <h4>Q: 资料包多久更新一次？</h4>
        <p>A: 我们会定期更新资料包内容，保持时效性。</p>
      </div>
    `,
            category: U
          }
        }, F = () => {
          n.go(-1)
        }, Y = async () => {
          if (!N.value && !f()) {
            d.value = !0;
            return
          }
          const ue = `payment_${R.value.category}_${R.value.id}`,
            U = localStorage.getItem(ue);
          if (U) {
            const de = JSON.parse(U);
            $.value = de.downloadUrl, S.value = !0
          } else if (N.value) try {
            await La.confirm(`确定要购买"${R.value.title}"吗？`, "确认支付", {
              confirmButtonText: "确定支付",
              cancelButtonText: "取消",
              type: "info"
            }), w.value = !0
          } catch {} else w.value = !0
        }, ne = (ue, U = "wechat") => {
          const _e = new Date().toLocaleString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit"
            }).replace(/\//g, "-"),
            xe = `payment_${R.value.category}_${R.value.id}`;
          localStorage.setItem(xe, JSON.stringify({
            downloadUrl: ue,
            paidAt: Date.now()
          }));
          const Ce = `DL${Date.now()}${Math.floor(Math.random()*1e3)}`;
          try {
            const Re = "downloadRecords.v1";
            let nt = [];
            const tt = localStorage.getItem(Re);
            tt && (nt = JSON.parse(tt)), nt = nt.filter(Me => !(Me.productName === R.value.title && Me.productCategory === R.value.category));
            const qe = {
              id: Ce,
              orderNo: Ce,
              productName: R.value.title,
              productCategory: R.value.category,
              categoryName: ee.value,
              downloadUrl: ue,
              price: R.value.price,
              paymentMethod: U,
              payTime: _e,
              status: "success"
            };
            nt.unshift(qe), localStorage.setItem(Re, JSON.stringify(nt)), window.dispatchEvent(new CustomEvent("localStorage-change", {
              detail: {
                key: Re
              }
            })), ae.value++, console.log("下载记录已保存，当前记录数量:", nt.length)
          } catch (Re) {
            console.error("保存下载记录失败:", Re)
          }
          try {
            const Re = "rechargeRecords";
            let nt = [];
            const tt = localStorage.getItem(Re);
            tt && (nt = JSON.parse(tt));
            const qe = {
              orderNo: Ce,
              paymentMethod: U,
              amount: R.value.price,
              points: 0,
              status: "success",
              payTime: _e,
              type: "product",
              productName: R.value.title,
              productCategory: R.value.category,
              categoryName: ee.value,
              downloadUrl: ue
            };
            nt.unshift(qe), localStorage.setItem(Re, JSON.stringify(nt)), window.dispatchEvent(new Event("storage")), window.dispatchEvent(new CustomEvent("localStorage-change", {
              detail: {
                key: Re
              }
            }))
          } catch (Re) {
            console.error("保存充值记录失败:", Re)
          }
          $.value = ue, w.value = !1, S.value = !0
        }, De = () => {
          if (!$.value) {
            A.warning("下载链接不存在");
            return
          }
          navigator.clipboard.writeText($.value).then(() => {
            A.success("下载地址已复制到剪贴板"), N.value && (S.value = !1)
          }).catch(() => {
            A.error("复制失败，请手动复制")
          })
        }, Q = () => {
          window.open($.value, "_blank")
        }, re = () => {
          try {
            const ue = "downloadRecords.v1",
              U = localStorage.getItem(ue);
            if (U) {
              const de = JSON.parse(U),
                _e = [],
                xe = new Map,
                Ce = de.sort((Re, nt) => {
                  const tt = new Date(Re.payTime.replace(/-/g, "/")).getTime();
                  return new Date(nt.payTime.replace(/-/g, "/")).getTime() - tt
                });
              for (const Re of Ce) {
                const nt = `${Re.productName}_${Re.productCategory}`;
                xe.has(nt) || (xe.set(nt, !0), _e.push(Re))
              }
              _e.length < de.length && (localStorage.setItem(ue, JSON.stringify(_e)), window.dispatchEvent(new CustomEvent("localStorage-change", {
                detail: {
                  key: ue
                }
              })), ae.value++)
            }
          } catch (ue) {
            console.error("清理重复下载记录失败:", ue)
          }
        }, b = Le(() => {
          ae.value;
          try {
            const ue = "downloadRecords.v1",
              U = localStorage.getItem(ue);
            if (U) {
              const de = JSON.parse(U),
                _e = [],
                xe = new Map,
                Ce = de.sort((Re, nt) => {
                  const tt = new Date(Re.payTime.replace(/-/g, "/")).getTime();
                  return new Date(nt.payTime.replace(/-/g, "/")).getTime() - tt
                });
              for (const Re of Ce) {
                const nt = `${Re.productName}_${Re.productCategory}`;
                xe.has(nt) || (xe.set(nt, !0), _e.push(Re))
              }
              return _e
            }
            return []
          } catch (ue) {
            return console.error("读取我的资料包失败:", ue), []
          }
        }), te = ue => {
          navigator.clipboard.writeText(ue).then(() => {
            A.success("下载地址已复制到剪贴板")
          }).catch(() => {
            A.error("复制失败")
          })
        }, we = ue => {
          window.open(ue, "_blank")
        }, ae = p(0), me = () => {
          ae.value++, re(), x.value = !0
        }, ce = ue => {
          (ue.key === "downloadRecords.v1" || ue.detail && ue.detail.key === "downloadRecords.v1") && (ae.value++, re())
        };
      return Ll(async () => {
        document.title = "火兔工具箱_产品详情", await Ae(), T(), window.addEventListener("resize", T), window.addEventListener("storage", ce), window.addEventListener("localStorage-change", ce), re()
      }), Zl(() => {
        window.removeEventListener("resize", T), window.removeEventListener("storage", ce), window.removeEventListener("localStorage-change", ce)
      }), oa(() => i.params, async () => {
        await Ae()
      }, {
        deep: !0
      }), (ue, U) => {
        const de = $l,
          _e = xl,
          xe = th,
          Ce = ah,
          Re = Si,
          nt = Ei,
          tt = lh,
          qe = nh,
          Me = Ii,
          rt = xi,
          ct = cn,
          E = Rl,
          _ = Jg,
          je = Hg,
          K = Zd;
        return c(), v("div", j1e, [e("main", q1e, [a(_e, {
          class: "back-button",
          circle: "",
          onClick: F
        }, {
          default: l(() => [a(de, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        }), e("div", F1e, [a(Ce, {
          separator: "/"
        }, {
          default: l(() => [a(xe, {
            to: {
              path: "/"
            }
          }, {
            default: l(() => [...U[11] || (U[11] = [g("首页", -1)])]),
            _: 1
          }), a(xe, {
            to: {
              path: J.value
            }
          }, {
            default: l(() => [g(h(ee.value), 1)]),
            _: 1
          }, 8, ["to"]), a(xe, null, {
            default: l(() => [g(h(R.value.title), 1)]),
            _: 1
          })]),
          _: 1
        })]), e("div", W1e, [e("div", G1e, [e("div", J1e, [R.value.images && R.value.images.length > 0 ? (c(), ye(nt, {
          key: 0,
          ref_key: "carouselRef",
          ref: V,
          interval: 0,
          "indicator-position": "outside",
          arrow: "hover",
          class: "product-carousel"
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(R.value.images, (B, W) => (c(), ye(Re, {
            key: W
          }, {
            default: l(() => [e("img", {
              src: B,
              alt: `产品图片${W+1}`,
              class: "main-image"
            }, null, 8, H1e)]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        }, 512)) : (c(), v("img", {
          key: 1,
          src: R.value.cover,
          alt: R.value.title,
          class: "main-image"
        }, null, 8, Q1e))])]), e("div", K1e, [e("h1", Y1e, h(R.value.title), 1), e("div", X1e, h(R.value.subtitle), 1), e("div", Z1e, [e("div", eye, [e("div", tye, [U[13] || (U[13] = e("span", {
          class: "price-label"
        }, "价格：", -1)), e("span", aye, "¥" + h(R.value.price), 1), R.value.originalPrice ? (c(), v("span", lye, [U[12] || (U[12] = e("span", {
          class: "price-label"
        }, "原价：", -1)), e("span", nye, "¥" + h(R.value.originalPrice), 1)])) : M("", !0)]), a(_e, {
          type: "primary",
          link: "",
          class: "my-packages-btn",
          onClick: me
        }, {
          default: l(() => [a(de, null, {
            default: l(() => [a(P(K_))]),
            _: 1
          }), U[14] || (U[14] = g(" 我的资料包 ", -1))]),
          _: 1
        })])]), e("div", oye, [a(qe, {
          column: 1,
          border: ""
        }, {
          default: l(() => [a(tt, {
            label: "资料包简介"
          }, {
            default: l(() => [g(h(R.value.intro || "精选优质资料包，内容丰富实用，助力提升工作效率。"), 1)]),
            _: 1
          }), a(tt, {
            label: "资料包特点"
          }, {
            default: l(() => [g(h(R.value.features || "内容全面、格式规范、分类清晰、持续更新。"), 1)]),
            _: 1
          }), a(tt, {
            label: "价值体现"
          }, {
            default: l(() => [g(h(R.value.value || "节省资料收集时间，提升工作效率，降低学习成本，快速上手应用。"), 1)]),
            _: 1
          })]),
          _: 1
        })]), e("div", iye, [a(_e, {
          type: "primary",
          size: "large",
          class: "download-btn",
          onClick: Y
        }, {
          default: l(() => [a(de, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), U[15] || (U[15] = g(" 下载资料包 ", -1))]),
          _: 1
        }), a(_e, {
          type: "default",
          size: "large",
          class: "consult-btn",
          onClick: U[0] || (U[0] = B => z.value = !0)
        }, {
          default: l(() => [a(de, null, {
            default: l(() => [a(P(Po))]),
            _: 1
          }), U[16] || (U[16] = g(" 咨询客服 ", -1))]),
          _: 1
        })])])]), e("div", sye, [a(rt, {
          modelValue: C.value,
          "onUpdate:modelValue": U[1] || (U[1] = B => C.value = B),
          class: "details-tabs"
        }, {
          default: l(() => [a(Me, {
            label: "产品详情",
            name: "detail"
          }, {
            default: l(() => [e("div", {
              class: "detail-content",
              innerHTML: R.value.detail
            }, null, 8, rye)]),
            _: 1
          }), a(Me, {
            label: "使用说明",
            name: "usage"
          }, {
            default: l(() => [e("div", {
              class: "detail-content",
              innerHTML: R.value.usage
            }, null, 8, uye)]),
            _: 1
          }), a(Me, {
            label: "常见问题",
            name: "faq"
          }, {
            default: l(() => [e("div", {
              class: "detail-content",
              innerHTML: R.value.faq
            }, null, 8, cye)]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])])]), a(Wn, {
          modelValue: u.value,
          "onUpdate:modelValue": U[2] || (U[2] = B => u.value = B)
        }, null, 8, ["modelValue"]), a(no, {
          modelValue: d.value,
          "onUpdate:modelValue": U[3] || (U[3] = B => d.value = B),
          onLoginSuccess: y
        }, null, 8, ["modelValue"]), a(R1e, {
          modelValue: w.value,
          "onUpdate:modelValue": U[4] || (U[4] = B => w.value = B),
          product: R.value,
          onPaymentSuccess: ne
        }, null, 8, ["modelValue", "product"]), a(E, {
          modelValue: S.value,
          "onUpdate:modelValue": U[8] || (U[8] = B => S.value = B),
          title: "下载地址",
          width: N.value ? "90%" : "600px",
          center: "",
          class: "download-dialog"
        }, {
          default: l(() => [e("div", dye, [U[23] || (U[23] = e("p", {
            class: "download-tip"
          }, "支付成功！您可以通过以下方式下载资料包：", -1)), e("div", vye, [a(ct, {
            modelValue: $.value,
            "onUpdate:modelValue": U[5] || (U[5] = B => $.value = B),
            readonly: "",
            class: "download-input"
          }, {
            append: l(() => [a(_e, {
              onClick: De
            }, {
              default: l(() => [...U[17] || (U[17] = [g("复制", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]), N.value ? (c(), v("div", gye, [a(_e, {
            type: "primary",
            onClick: De
          }, {
            default: l(() => [...U[21] || (U[21] = [g("复制下载地址", -1)])]),
            _: 1
          }), a(_e, {
            onClick: U[7] || (U[7] = B => S.value = !1)
          }, {
            default: l(() => [...U[22] || (U[22] = [g("取消", -1)])]),
            _: 1
          })])) : (c(), v("div", mye, [a(_e, {
            type: "primary",
            onClick: Q
          }, {
            default: l(() => [...U[18] || (U[18] = [g("直接下载", -1)])]),
            _: 1
          }), a(_e, {
            onClick: De
          }, {
            default: l(() => [...U[19] || (U[19] = [g("复制下载地址", -1)])]),
            _: 1
          }), a(_e, {
            onClick: U[6] || (U[6] = B => S.value = !1)
          }, {
            default: l(() => [...U[20] || (U[20] = [g("关闭", -1)])]),
            _: 1
          })]))])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(E, {
          modelValue: z.value,
          "onUpdate:modelValue": U[9] || (U[9] = B => z.value = B),
          title: "客服二维码",
          width: N.value ? "90%" : "450px",
          center: "",
          class: "consult-dialog qr-dialog"
        }, {
          default: l(() => [e("div", fye, [e("img", {
            src: o.value,
            alt: "客服二维码",
            class: "qr-image"
          }, null, 8, pye), U[24] || (U[24] = e("p", {
            class: "qr-title"
          }, "添加客服二维码", -1)), e("p", yye, h(P(Gr)), 1)])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(E, {
          modelValue: x.value,
          "onUpdate:modelValue": U[10] || (U[10] = B => x.value = B),
          title: "我的资料包",
          width: N.value ? "90%" : "800px",
          center: "",
          class: "my-packages-dialog"
        }, {
          default: l(() => [e("div", hye, [N.value ? (c(), v("div", wye, [(c(!0), v(Ue, null, gt(b.value, B => (c(), v("div", {
            key: B.id,
            class: "my-package-card"
          }, [e("div", _ye, [e("span", kye, h(B.productName), 1), a(K, {
            type: "success",
            size: "small"
          }, {
            default: l(() => [...U[27] || (U[27] = [g("已购买", -1)])]),
            _: 1
          })]), e("div", Cye, [e("div", Aye, [U[28] || (U[28] = e("span", {
            class: "package-card-label"
          }, "项目类型：", -1)), e("span", Iye, h(B.categoryName), 1)]), e("div", xye, [U[29] || (U[29] = e("span", {
            class: "package-card-label"
          }, "支付金额：", -1)), e("span", Sye, "￥" + h(B.price), 1)]), e("div", Eye, [U[30] || (U[30] = e("span", {
            class: "package-card-label"
          }, "购买时间：", -1)), e("span", Tye, h(B.payTime), 1)]), e("div", $ye, [U[32] || (U[32] = e("span", {
            class: "package-card-label"
          }, "下载地址：", -1)), e("div", Pye, [a(ct, {
            value: B.downloadUrl,
            readonly: "",
            size: "small",
            class: "download-url-input-mobile"
          }, {
            append: l(() => [a(_e, {
              onClick: W => te(B.downloadUrl),
              size: "small"
            }, {
              default: l(() => [...U[31] || (U[31] = [g("复制", -1)])]),
              _: 1
            }, 8, ["onClick"])]),
            _: 2
          }, 1032, ["value"])])])]), e("div", Vye, [a(_e, {
            type: "primary",
            size: "small",
            onClick: W => we(B.downloadUrl)
          }, {
            default: l(() => [...U[33] || (U[33] = [g(" 直接下载 ", -1)])]),
            _: 1
          }, 8, ["onClick"])])]))), 128))])) : (c(), ye(je, {
            key: 0,
            data: b.value,
            style: {
              width: "100%"
            },
            "empty-text": "暂无购买记录"
          }, {
            default: l(() => [a(_, {
              prop: "productName",
              label: "产品名称",
              width: "200"
            }), a(_, {
              prop: "categoryName",
              label: "项目类型",
              width: "150"
            }), a(_, {
              prop: "price",
              label: "支付金额",
              width: "120"
            }, {
              default: l(({
                row: B
              }) => [e("span", bye, "￥" + h(B.price), 1)]),
              _: 1
            }), a(_, {
              prop: "payTime",
              label: "购买时间",
              width: "180"
            }), a(_, {
              label: "下载地址",
              "min-width": "200"
            }, {
              default: l(({
                row: B
              }) => [a(ct, {
                value: B.downloadUrl,
                readonly: "",
                size: "small",
                class: "download-url-input"
              }, {
                append: l(() => [a(_e, {
                  onClick: W => te(B.downloadUrl),
                  size: "small"
                }, {
                  default: l(() => [...U[25] || (U[25] = [g("复制", -1)])]),
                  _: 1
                }, 8, ["onClick"])]),
                _: 2
              }, 1032, ["value"])]),
              _: 1
            }), a(_, {
              label: "操作",
              width: "120",
              fixed: "right"
            }, {
              default: l(({
                row: B
              }) => [a(_e, {
                type: "primary",
                link: "",
                size: "small",
                onClick: W => we(B.downloadUrl)
              }, {
                default: l(() => [...U[26] || (U[26] = [g(" 直接下载 ", -1)])]),
                _: 1
              }, 8, ["onClick"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["data"])), b.value.length === 0 ? (c(), v("div", zye, "暂无购买记录")) : M("", !0)])]),
          _: 1
        }, 8, ["modelValue", "width"])])
      }
    }
  },
  Dye = al(Lye, [
    ["__scopeId", "data-v-e6e166cf"]
  ]);
const Mye = {
    class: "tiaozhuan-container"
  },
  Oye = {
    class: "back-header back-header-left"
  },
  Bye = {
    class: "back-header back-header-right"
  },
  Nye = {
    class: "preview-section"
  },
  Uye = {
    class: "preview-content"
  },
  Rye = {
    key: 0,
    class: "preview-carousel"
  },
  jye = {
    key: 0,
    class: "image-slot-loading"
  },
  qye = {
    key: 1,
    class: "image-slot-failed"
  },
  Fye = ["src", "alt"],
  Wye = {
    key: 0,
    class: "carousel-page-hint"
  },
  Gye = {
    key: 1,
    class: "preview-title"
  },
  Jye = ["innerHTML"],
  Hye = {
    key: 3,
    class: "preview-text-empty"
  },
  Qye = {
    key: 4,
    class: "preview-empty"
  },
  Kye = {
    class: "publish-section-float"
  },
  Yye = {
    class: "publish-content"
  },
  Xye = {
    class: "publish-button-wrapper"
  },
  Zye = {
    class: "publish-options"
  },
  ehe = {
    class: "wechat-android-content"
  },
  the = {
    class: "dialog-link-box"
  },
  ahe = {
    class: "link-text"
  },
  lhe = {
    class: "dialog-actions"
  },
  nhe = 50,
  eg = "tiaozhuan_sync_mode_preference",
  xy = "xhs_adjustment_notice_v1",
  ohe = {
    __name: "Tiaozhuan",
    setup(t) {
      const o = fn(),
        i = ln(),
        n = p(null),
        s = p(!1),
        u = p(""),
        d = p({
          title: "",
          cover: "",
          content: "",
          images: []
        }),
        f = K => {
          if (!K || typeof K != "string") return K;
          const B = K.trim();
          return B.startsWith("//") ? "https:" + B : B
        },
        y = K => K === 0 || K === "0",
        w = K => K === -1 || K === "-1",
        S = K => !y(K) && !w(K) && K != null && K !== "" ? f(String(K)) : "",
        z = K => {
          if (!Array.isArray(K)) return "";
          for (const B of K)
            if (!y(B) && !w(B) && B != null && String(B).trim()) return f(String(B));
          return ""
        },
        x = Le(() => {
          const K = d.value.images && Array.isArray(d.value.images) ? d.value.images : [];
          return K.length > 0 ? K : d.value.cover && typeof d.value.cover == "string" && d.value.cover.trim() ? [d.value.cover] : []
        });
      oa(() => d.value.images, K => {
        console.log("workData.images 变化:", K), console.log("allImages 计算值:", x.value)
      }, {
        deep: !0,
        immediate: !0
      });
      const C = p("450px"),
        V = p(0),
        $ = K => {
          V.value = K
        },
        N = p(0),
        T = p(0),
        R = p(0),
        O = p(0),
        J = p(!1),
        ee = K => {
          J.value = !0, N.value = K.touches[0].clientX, T.value = K.touches[0].clientY
        },
        ie = K => {
          if (!J.value) return;
          const B = K.touches[0].clientX,
            W = K.touches[0].clientY,
            Te = Math.abs(B - N.value),
            it = Math.abs(W - T.value);
          it > Te || it > 10 || Te > it * 2 && Te > 10 && (K.preventDefault(), K.stopPropagation())
        },
        Ae = K => {
          if (!J.value || !n.value) {
            J.value = !1;
            return
          }
          R.value = K.changedTouches[0].clientX, O.value = K.changedTouches[0].clientY, F(), J.value = !1
        },
        F = () => {
          if (!n.value || x.value.length <= 1) {
            N.value = 0, T.value = 0, R.value = 0, O.value = 0;
            return
          }
          const K = R.value - N.value,
            B = O.value - T.value;
          if (Math.abs(K) > Math.abs(B) * 2 && Math.abs(K) > nhe) {
            const W = n.value.activeIndex || 0,
              Te = x.value.length;
            K > 0 ? W > 0 && n.value.prev() : W < Te - 1 && n.value.next()
          }
          N.value = 0, T.value = 0, R.value = 0, O.value = 0
        },
        Y = () => {
          try {
            const K = localStorage.getItem(eg);
            return K && ["single-cover-full", "all-images-full", "all-images-first"].includes(K) ? K : "all-images-full"
          } catch {
            return "all-images-full"
          }
        },
        ne = () => {
          const K = o.query.syncMode;
          return K && ["single-cover-full", "all-images-full", "all-images-first"].includes(K) ? K : Y()
        },
        De = p(ne()),
        Q = p(["douyin", "xiaohongshu"].includes(String(o.query.platform || "").toLowerCase()) ? String(o.query.platform).toLowerCase() : "douyin"),
        re = () => {
          const K = new Date().toISOString().slice(0, 10);
          let B = {};
          try {
            B = JSON.parse(localStorage.getItem(xy) || "{}")
          } catch {
            B = {}
          }
          if (B.date !== K && (B = {
              date: K,
              count: 0
            }), B.count >= 2) return !1;
          B.count += 1;
          try {
            localStorage.setItem(xy, JSON.stringify(B))
          } catch {}
          return !0
        },
        b = () => {
          re() && La.alert("如遇到标题和内容无法下载，请您复制，切屏粘贴即可发布，感谢理解。", "温馨提示", {
            confirmButtonText: "我知道了",
            type: "info",
            center: !0
          }).catch(() => {})
        },
        te = K => {
          Q.value = K, K === "xiaohongshu" && b()
        },
        we = K => {
          try {
            localStorage.setItem(eg, K);
            const B = new URL(window.location.href);
            B.searchParams.set("syncMode", K), window.history.replaceState({}, "", B.toString())
          } catch (B) {
            console.error("保存同步模式失败:", B)
          }
        },
        ae = () => {
          const K = ne();
          if (K !== De.value && (De.value = K, !o.query.syncMode)) {
            const B = new URL(window.location.href);
            B.searchParams.set("syncMode", K), window.history.replaceState({}, "", B.toString())
          }
        },
        me = K => !K || typeof K != "string" ? "" : /<[a-z][\s\S]*>/i.test(K) ? K : K.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/#[^\s#\n\r]+/g, it => `<span class="hashtag-tag">${it}</span>`).replace(/\n/g, "<br>"),
        ce = K => {
          if (!K || typeof K != "string") return "";
          const B = K.split(/\n/);
          if (B.length === 0) return "";
          for (let W = B.length - 1; W >= 0; W--) {
            const Te = B[W].trim();
            if (Te.length === 0) continue;
            const it = Te.match(/#[^#\n\r]+#/g);
            if (it && it.length > 0) return it.join(" ")
          }
          return ""
        },
        ue = K => {
          if (!K || typeof K != "string") return K;
          const B = /#([^#\s\n\r]+)/g;
          let W;
          const Te = [];
          for (;
            (W = B.exec(K)) !== null;) Te.push({
            fullMatch: W[0],
            index: W.index,
            length: W[0].length
          });
          if (Te.length <= 5) return K;
          const it = Te.slice(5);
          let yt = K;
          for (let st = it.length - 1; st >= 0; st--) {
            const Ie = it[st],
              pe = yt.substring(0, Ie.index),
              Be = yt.substring(Ie.index + Ie.length),
              xt = pe.replace(/\s+$/, ""),
              Yt = Be.replace(/^\s+/, "");
            yt = xt + Yt
          }
          return yt
        },
        U = K => {
          if (!K || typeof K != "string") return "";
          const B = /<[a-z][\s\S]*>/i.test(K);
          let W = "";
          if (B) try {
            const Te = document.createElement("div");
            if (Te.innerHTML = K, W = Te.outerText || Te.innerText || Te.textContent || "", !W || W.trim().length === 0) {
              W = K.replace(/<br\s*\/?>/gi, `
`).replace(/<\/p>/gi, `
`).replace(/<\/div>/gi, `
`).replace(/<[^>]+>/g, "");
              const it = document.createElement("textarea");
              it.innerHTML = W, W = it.value
            }
          } catch (Te) {
            console.error("解析HTML内容失败:", Te), W = K.replace(/<br\s*\/?>/gi, `
`).replace(/<\/p>/gi, `
`).replace(/<\/div>/gi, `
`).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&#(\d+);/g, (it, yt) => String.fromCharCode(yt)).replace(/&#x([0-9a-fA-F]+);/g, (it, yt) => String.fromCharCode(parseInt(yt, 16)))
          } else W = K;
          return W = W.replace(/\n{3,}/g, `

`), W = W.split(`
`).map(Te => Te.trim()).join(`
`), W.trim()
        },
        de = K => !K || typeof K != "string" ? "" : K.trim(),
        _e = (K, B = !1) => {
          if (!K || typeof K != "string") return "";
          const W = K.trim(),
            Te = W.split(/\n+/).filter(yt => yt.trim().length > 0);
          let it = "";
          if (Te.length > 0) it = Te[0].trim(), it = it.replace(/#[^#\n\r]+#/g, "").trim();
          else {
            const yt = W.split(/[。！？]/).filter(st => st.trim().length > 0);
            yt.length > 0 ? (it = yt[0].trim(), it = it.replace(/#[^#\n\r]+#/g, "").trim()) : (it = W.trim().substring(0, 100), it = it.replace(/#[^#\n\r]+#/g, "").trim())
          }
          if (B) {
            const yt = ce(K);
            if (yt) return it + `

` + yt
          }
          return it
        },
        xe = () => {
          const K = navigator.userAgent.toLowerCase();
          return /micromessenger/.test(K)
        },
        Ce = () => /android/i.test(navigator.userAgent),
        Re = async () => {
          const K = o.query.workId;
          if (!K) {
            A.error("作品ID不存在");
            return
          }
          try {
            const W = o.query.source === "anli" ? Jh : Ms;
            try {
              const Te = await W(K);
              if (console.log("API 返回的完整数据:", JSON.stringify(Te, null, 2)), Te) {
                d.value.title = Te.title || d.value.title || "", d.value.content = Te.content || Te.text || Te.desc || "";
                let it = [];
                const yt = Te.images || Te.imageList || Te.img || Te.image || [];
                if (console.log("图片数据源:", yt, "类型:", typeof yt), yt) try {
                  if (typeof yt == "string") try {
                    it = JSON.parse(yt), console.log("解析 JSON 成功:", it)
                  } catch (Ie) {
                    console.warn("解析 images JSON 失败，尝试其他方式:", Ie), yt.includes(",") ? (it = yt.split(",").map(pe => pe.trim()).filter(pe => pe), console.log("按逗号分割:", it)) : yt.trim() && (it = [yt.trim()], console.log("单个图片URL:", it))
                  } else Array.isArray(yt) ? (it = yt, console.log("直接使用数组:", it)) : console.warn("图片数据格式未知:", typeof yt, yt)
                } catch (Ie) {
                  console.error("处理图片数据时出错:", Ie), it = []
                }
                Array.isArray(it) || (console.warn("imagesArray 不是数组，重置为空数组。原始值:", it), it = []), d.value.images = it, V.value = 0;
                let st = Te.cover || "";
                (!st || st === 0 || st === "0" || st === -1 || st === "-1") && (st = z(it)), st ? d.value.cover = f(String(st)) : d.value.cover = "", d.value.images.length === 0 && d.value.cover && (d.value.images = [d.value.cover]), console.log("最终作品数据:", {
                  title: d.value.title,
                  content: d.value.content,
                  cover: d.value.cover,
                  images: d.value.images,
                  imagesCount: d.value.images.length,
                  allImages: x.value,
                  allImagesCount: x.value.length
                })
              } else console.warn("API 返回的数据为空:", Te)
            } catch (Te) {
              console.error("无法从API获取作品详情:", Te), A.error("加载作品数据失败，请刷新页面重试")
            }
          } catch (B) {
            console.error("加载作品数据失败:", B), A.error("加载作品数据失败，请刷新页面重试")
          }
        }, nt = () => {
          i.go(-1)
        }, tt = async () => {
          try {
            const K = u.value || window.location.href;
            await navigator.clipboard.writeText(K), A.success("链接已复制，请到浏览器中打开"), s.value = !1
          } catch {
            try {
              const B = u.value || window.location.href,
                W = document.createElement("textarea");
              W.value = B, W.style.position = "fixed", W.style.opacity = "0", document.body.appendChild(W), W.select(), document.execCommand("copy"), document.body.removeChild(W), A.success("链接已复制，请到浏览器中打开"), s.value = !1
            } catch (B) {
              console.error("复制失败:", B), A.error("复制失败，请手动复制链接")
            }
          }
        }, qe = async K => {
          if (!K) return !1;
          try {
            return await navigator.clipboard.writeText(K), !0
          } catch {
            try {
              const W = document.createElement("textarea");
              W.value = K, W.style.position = "fixed", W.style.opacity = "0", document.body.appendChild(W), W.select();
              const Te = document.execCommand("copy");
              return document.body.removeChild(W), Te
            } catch (W) {
              return console.error("复制失败:", W), !1
            }
          }
        }, Me = async () => {
          const K = (d.value.title || "").trim();
          if (!K) {
            A.warning("暂无标题可复制");
            return
          }
          await qe(K) ? A.success("标题已复制") : A.error("复制失败，请手动复制")
        }, rt = async () => {
          const K = d.value.content || "";
          if (!K || !String(K).trim()) {
            A.warning("暂无内容可复制");
            return
          }
          const B = U(String(K));
          await qe(B) ? A.success("内容已复制") : A.error("复制失败，请手动复制")
        }, ct = async () => {
          try {
            const K = new URL(window.location.href),
              B = localStorage.getItem("authToken");
            B && B.trim() && (K.searchParams.delete("token"), K.searchParams.set("token", B.trim()));
            const W = K.toString();
            await navigator.clipboard.writeText(W), await La.alert("您已复制成功，请在浏览器打开访问，小编推荐用：edge浏览器。", "提示", {
              confirmButtonText: "确定",
              type: "success"
            })
          } catch {
            try {
              const B = new URL(window.location.href),
                W = localStorage.getItem("authToken");
              W && W.trim() && (B.searchParams.delete("token"), B.searchParams.set("token", W.trim()));
              const Te = B.toString(),
                it = document.createElement("textarea");
              it.value = Te, it.style.position = "fixed", it.style.opacity = "0", document.body.appendChild(it), it.select(), document.execCommand("copy"), document.body.removeChild(it), await La.alert("您已复制成功，请在浏览器打开访问，小编推荐用：edge浏览器。", "提示", {
                confirmButtonText: "确定",
                type: "success"
              })
            } catch (B) {
              console.error("复制失败:", B), A.error("复制失败，请手动复制链接")
            }
          }
        }, E = async () => {
          const K = String(o.query.u || o.query.userid || "").trim(),
            B = String(o.query.workId || "").trim();
          if (!K || !B) return !0;
          try {
            return await Xh(K, B, Q.value), !0
          } catch (W) {
            return A.error((W == null ? void 0 : W.message) || "自动归档失败，请重试"), !1
          }
        }, _ = async () => {
          var Te, it, yt, st;
          const K = o.query.workId;
          if (!K) {
            A.error("作品ID不存在");
            return
          }
          if (!await E()) return;
          if (xe() && Ce()) {
            u.value = window.location.href, s.value = !0;
            return
          }
          let B = [],
            W = d.value.content || "";
          if (De.value === "single-cover-full") {
            if (d.value.cover) B = [d.value.cover];
            else if (x.value.length > 0) {
              const pe = S(x.value[0]) ? f(String(x.value[0])) : "";
              pe && (B = [pe])
            }
            const Ie = d.value.content || "";
            W = de(Ie), console.log("单封面+全文模式 - 内容长度:", W.length, "内容预览:", W.substring(0, 100))
          } else if (De.value === "all-images-full") {
            const Ie = (x.value || []).filter(Be => S(Be)).map(Be => f(String(Be)));
            B = Ie.length > 0 ? Ie : d.value.cover ? [d.value.cover] : [];
            const pe = d.value.content || "";
            W = de(pe), console.log("全部图+全文模式 - 内容长度:", W.length, "内容预览:", W.substring(0, 100))
          } else if (De.value === "all-images-first") {
            const Ie = (x.value || []).filter(pe => S(pe)).map(pe => f(String(pe)));
            B = Ie.length > 0 ? Ie : d.value.cover ? [d.value.cover] : [], W = _e(d.value.content || "", !0), console.log("全部图+第一段模式 - 内容长度:", W.length, "内容预览:", W.substring(0, 100))
          }
          if (Q.value === "douyin" && (W = ue(W)), !B || B.length === 0) {
            A.error("发布失败：作品中没有图片，无法发布");
            return
          }
          if (B = B.filter(Ie => !y(Ie) && !w(Ie) && Ie != null && String(Ie).trim()).map(Ie => f(String(Ie))), B.length === 0) {
            A.error("发布失败：图片数据无效，无法发布");
            return
          }
          try {
            const Ie = {
              workId: String(K),
              title: d.value.title || "",
              desc: W,
              cover: B[0] || "",
              images: B
            };
            if (Q.value === "douyin") {
              const pe = await a0({
                title: Ie.title,
                desc: Ie.desc,
                cover: B
              });
              if (pe && (pe.success === !0 || pe.code === 200)) {
                const Be = ((Te = pe.data) == null ? void 0 : Te.share_url) || ((it = pe.data) == null ? void 0 : it.scheme) || ((yt = pe.data) == null ? void 0 : yt.url) || ((st = pe.data) == null ? void 0 : st.link) || "";
                if (Be) try {
                  const xt = document.createElement("iframe");
                  xt.style.display = "none", xt.src = Be, document.body.appendChild(xt), setTimeout(() => {
                    document.body.removeChild(xt), A.success("正在跳转到抖音...")
                  }, 1e3), setTimeout(() => {
                    window.location.href = Be
                  }, 100)
                } catch (xt) {
                  console.error("跳转失败:", xt);
                  try {
                    window.location.href = Be
                  } catch {
                    A.error("跳转失败，请确保已安装抖音 APP")
                  }
                } else A.error("获取抖音跳转链接失败")
              } else A.error("发布失败：" + ((pe == null ? void 0 : pe.msg) || "未知错误"))
            } else {
              const pe = await Ef(Ie);
              if (pe && pe.code === 200)
                if (window.xhs && window.xhs.share) {
                  const Be = {
                      type: "normal",
                      title: Ie.title || "",
                      content: Ie.desc || "",
                      images: B
                    },
                    xt = {
                      appKey: pe.data.appKey,
                      nonce: pe.data.nonce,
                      timestamp: pe.data.timestamp,
                      signature: pe.data.signature
                    };
                  window.xhs.share({
                    shareInfo: Be,
                    verifyConfig: xt,
                    success: () => {
                      A.success("发布成功！"), i.back()
                    },
                    fail: Yt => {
                      console.error("XHS 发布失败:", Yt), A.error("发布失败：" + ((Yt == null ? void 0 : Yt.message) || Yt || "未知错误"))
                    }
                  })
                } else A.error("SDK 未加载，请刷新页面重试");
              else A.error("发布失败：" + ((pe == null ? void 0 : pe.msg) || "未知错误"))
            }
          } catch (Ie) {
            console.error("发布失败:", Ie), A.error("发布失败：" + ((Ie == null ? void 0 : Ie.message) || "请稍后重试"))
          }
        }, je = () => {
          window.innerWidth <= 768 ? C.value = "450px" : C.value = "600px"
        };
      return Ll(() => {
        if (document.title = "火兔工具箱_一键导出", ae(), !o.query.syncMode && De.value) {
          const K = new URL(window.location.href);
          K.searchParams.set("syncMode", De.value), window.history.replaceState({}, "", K.toString())
        }
        Re(), je(), window.addEventListener("resize", je)
      }), oa(() => o.query.workId, (K, B) => {
        K && K !== B && (ae(), Re())
      }), oa(() => o.query.syncMode, K => {
        if (K && ["single-cover-full", "all-images-full", "all-images-first"].includes(K) && K !== De.value) {
          De.value = K;
          try {
            localStorage.setItem(eg, K)
          } catch (B) {
            console.error("保存同步模式失败:", B)
          }
        }
      }), Zl(() => {
        window.removeEventListener("resize", je)
      }), (K, B) => {
        const W = $l,
          Te = xl,
          it = Si,
          yt = Ei,
          st = Or,
          Ie = Br,
          pe = Nr,
          Be = bo,
          xt = Kn,
          Yt = Rl;
        return c(), v(Ue, null, [e("div", Mye, [e("div", Oye, [a(Te, {
          class: "back-button",
          onClick: nt,
          circle: ""
        }, {
          default: l(() => [a(W, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        })]), e("div", Bye, [a(Te, {
          class: "back-button",
          onClick: nt,
          circle: ""
        }, {
          default: l(() => [a(W, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        })]), e("div", Nye, [B[4] || (B[4] = e("div", {
          class: "section-header"
        }, [e("h2", {
          class: "section-title"
        }, "图文预览及导出")], -1)), e("div", Uye, [x.value.length > 0 ? (c(), v("div", Rye, [(c(), ye(yt, {
          height: C.value,
          "indicator-position": x.value.length > 1 ? "inside" : "none",
          class: "note-gallery-carousel",
          touchable: !0,
          interval: 0,
          autoplay: !1,
          key: `carousel-${x.value.length}`,
          ref_key: "carouselRef",
          ref: n,
          onChange: $
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(x.value, (Ye, va) => (c(), ye(it, {
            key: `img-${va}-${Ye}`
          }, {
            default: l(() => [e("div", {
              class: "carousel-image-wrapper",
              onTouchstartPassive: ee,
              onTouchmove: ie,
              onTouchend: Ae
            }, [y(Ye) ? (c(), v("div", jye, "生成中")) : w(Ye) ? (c(), v("div", qye, "生成失败")) : S(Ye) ? (c(), v("img", {
              key: 2,
              src: S(Ye),
              alt: `图片${va+1}`
            }, null, 8, Fye)) : M("", !0)], 32)]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        }, 8, ["height", "indicator-position"])), x.value.length > 1 ? (c(), v("div", Wye, h(V.value + 1) + " / " + h(x.value.length), 1)) : M("", !0)])) : M("", !0), d.value.title ? (c(), v("div", Gye, h(d.value.title), 1)) : M("", !0), d.value.content ? (c(), v("div", {
          key: 2,
          class: "preview-text",
          innerHTML: me(d.value.content)
        }, null, 8, Jye)) : d.value.title || x.value.length > 0 ? (c(), v("div", Hye, " 暂无图文内容 ")) : M("", !0), !d.value.title && x.value.length === 0 && !d.value.content ? (c(), v("div", Qye, " 暂无预览内容 ")) : M("", !0)])]), B[5] || (B[5] = e("div", {
          class: "bottom-spacer"
        }, null, -1))]), e("div", {
          class: Pe(["copy-link-float-btn copy-title-float-btn", {
            "is-disabled": !d.value.title
          }]),
          onClick: Me
        }, [a(W, {
          class: "copy-link-icon"
        }, {
          default: l(() => [a(P(Md))]),
          _: 1
        }), B[6] || (B[6] = e("span", {
          class: "copy-link-text copy-link-text-2lines"
        }, [e("span", null, "标题")], -1))], 2), e("div", {
          class: Pe(["copy-link-float-btn copy-content-float-btn", {
            "is-disabled": !d.value.content
          }]),
          onClick: rt
        }, [a(W, {
          class: "copy-link-icon"
        }, {
          default: l(() => [a(P(Md))]),
          _: 1
        }), B[7] || (B[7] = e("span", {
          class: "copy-link-text copy-link-text-2lines"
        }, [e("span", null, "内容")], -1))], 2), e("div", {
          class: "copy-link-float-btn",
          onClick: ct
        }, [a(W, {
          class: "copy-link-icon"
        }, {
          default: l(() => [a(P(ig))]),
          _: 1
        }), B[8] || (B[8] = e("span", {
          class: "copy-link-text copy-link-text-2lines"
        }, [e("span", null, "链接")], -1))]), e("div", Kye, [e("div", Yye, [e("div", Xye, [a(Te, {
          type: "primary",
          size: "large",
          class: Pe(["publish-button", {
            "publish-button-douyin": Q.value === "douyin"
          }]),
          onClick: _
        }, {
          default: l(() => [B[11] || (B[11] = e("span", {
            class: "publish-button-text"
          }, "一键下载发布", -1)), a(pe, {
            trigger: "click",
            onCommand: te,
            class: "platform-dropdown",
            onClick: B[1] || (B[1] = lt(() => {}, ["stop"]))
          }, {
            dropdown: l(() => [a(Ie, null, {
              default: l(() => [a(st, {
                command: "xiaohongshu",
                class: Pe({
                  "is-selected": Q.value === "xiaohongshu"
                })
              }, {
                default: l(() => [...B[9] || (B[9] = [g(" XH ", -1)])]),
                _: 1
              }, 8, ["class"]), a(st, {
                command: "douyin",
                class: Pe({
                  "is-selected": Q.value === "douyin"
                })
              }, {
                default: l(() => [...B[10] || (B[10] = [g(" 抖音 ", -1)])]),
                _: 1
              }, 8, ["class"])]),
              _: 1
            })]),
            default: l(() => [e("span", {
              class: "platform-selector",
              onClick: B[0] || (B[0] = lt(() => {}, ["stop"]))
            }, [g(h(Q.value === "douyin" ? "抖音" : "XH") + " ", 1), a(W, {
              class: "dropdown-icon"
            }, {
              default: l(() => [a(P(jn))]),
              _: 1
            })])]),
            _: 1
          })]),
          _: 1
        }, 8, ["class"])]), e("div", Zye, [a(xt, {
          modelValue: De.value,
          "onUpdate:modelValue": B[2] || (B[2] = Ye => De.value = Ye),
          class: "sync-mode-group",
          onChange: we
        }, {
          default: l(() => [a(Be, {
            value: "all-images-full"
          }, {
            default: l(() => [...B[12] || (B[12] = [g("全部图+全文", -1)])]),
            _: 1
          }), a(Be, {
            value: "single-cover-full"
          }, {
            default: l(() => [...B[13] || (B[13] = [g("单封面+全文", -1)])]),
            _: 1
          }), a(Be, {
            value: "all-images-first"
          }, {
            default: l(() => [...B[14] || (B[14] = [g("全部图+第一段", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])])])]), a(Yt, {
          modelValue: s.value,
          "onUpdate:modelValue": B[3] || (B[3] = Ye => s.value = Ye),
          title: "提示",
          width: "90%",
          "max-width": "400px",
          center: "",
          "close-on-click-modal": !1,
          class: "wechat-android-dialog"
        }, {
          default: l(() => [e("div", ehe, [B[16] || (B[16] = e("div", {
            class: "dialog-tip-text"
          }, " 由于微信限制安卓跳转，您需要复制当前链接到浏览器访问 ", -1)), e("div", the, [e("div", ahe, h(u.value), 1)]), e("div", lhe, [a(Te, {
            type: "primary",
            size: "large",
            class: "copy-link-button",
            onClick: tt
          }, {
            default: l(() => [...B[15] || (B[15] = [g(" 立即复制 ", -1)])]),
            _: 1
          })])])]),
          _: 1
        }, 8, ["modelValue"])], 64)
      }
    }
  },
  ihe = al(ohe, [
    ["__scopeId", "data-v-234eec41"]
  ]);
const she = {
    class: "yulanm-container"
  },
  rhe = {
    class: "back-header back-header-left"
  },
  uhe = {
    class: "back-header back-header-right"
  },
  che = {
    class: "preview-section"
  },
  dhe = {
    class: "preview-content"
  },
  vhe = {
    key: 0,
    class: "preview-carousel"
  },
  mhe = ["src", "alt"],
  ghe = {
    key: 1,
    class: "preview-title"
  },
  fhe = {
    key: 2,
    class: "preview-text"
  },
  phe = {
    key: 3,
    class: "preview-text-empty"
  },
  yhe = {
    key: 4,
    class: "preview-tags"
  },
  hhe = {
    key: 5,
    class: "preview-empty"
  },
  bhe = 50,
  whe = {
    __name: "Yulanm",
    setup(t) {
      const o = fn(),
        i = ln(),
        n = p(null),
        s = p({
          title: "",
          cover: "",
          content: "",
          images: [],
          tags: []
        }),
        u = Le(() => s.value.images && Array.isArray(s.value.images) && s.value.images.length > 0 ? s.value.images.filter(ee => ee && typeof ee == "string" && ee.trim()) : s.value.cover && typeof s.value.cover == "string" && s.value.cover.trim() ? [s.value.cover] : []),
        d = p("450px"),
        f = p(0),
        y = p(0),
        w = p(0),
        S = p(0),
        z = p(!1),
        x = ee => {
          z.value = !0, f.value = ee.touches[0].clientX, y.value = ee.touches[0].clientY
        },
        C = ee => {
          if (!z.value) return;
          const ie = ee.touches[0].clientX,
            Ae = ee.touches[0].clientY,
            F = Math.abs(ie - f.value),
            Y = Math.abs(Ae - y.value);
          Y > F || Y > 10 || F > Y * 2 && F > 10 && (ee.preventDefault(), ee.stopPropagation())
        },
        V = ee => {
          if (!z.value || !n.value) {
            z.value = !1;
            return
          }
          w.value = ee.changedTouches[0].clientX, S.value = ee.changedTouches[0].clientY, $(), z.value = !1
        },
        $ = () => {
          if (!n.value || u.value.length <= 1) {
            f.value = 0, y.value = 0, w.value = 0, S.value = 0;
            return
          }
          const ee = w.value - f.value,
            ie = S.value - y.value;
          if (Math.abs(ee) > Math.abs(ie) * 2 && Math.abs(ee) > bhe) {
            const Ae = n.value.activeIndex || 0,
              F = u.value.length;
            ee > 0 ? Ae > 0 && n.value.prev() : Ae < F - 1 && n.value.next()
          }
          f.value = 0, y.value = 0, w.value = 0, S.value = 0
        },
        N = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768,
        T = ee => {
          if (!ee || typeof ee != "string") return [];
          const ie = [],
            Ae = /#([^#\s\n\r]+)/g;
          let F;
          for (;
            (F = Ae.exec(ee)) !== null;) {
            const Y = F[1].trim();
            Y && !ie.includes(Y) && ie.push(Y)
          }
          return ie
        },
        R = () => {
          const ee = o.query.title,
            ie = o.query.content,
            Ae = o.query.images,
            F = o.query.cover,
            Y = o.query.tags;
          if (!N()) {
            A.warning("此页面仅支持手机访问"), setTimeout(() => {
              i.push("/")
            }, 2e3);
            return
          }
          try {
            if (ee && (s.value.title = decodeURIComponent(ee)), ie && (s.value.content = decodeURIComponent(ie)), Ae) try {
              const ne = JSON.parse(decodeURIComponent(Ae));
              Array.isArray(ne) && (s.value.images = ne)
            } catch {
              console.log("无法解析图片数组，尝试单个图片")
            }
            if (F && (s.value.cover = decodeURIComponent(F), (!s.value.images || s.value.images.length === 0) && (s.value.images = [s.value.cover])), Y) try {
              const ne = JSON.parse(decodeURIComponent(Y));
              Array.isArray(ne) && ne.length > 0 ? s.value.tags = ne : s.value.content && (s.value.tags = T(s.value.content))
            } catch {
              console.log("无法解析话题标签数组，尝试从内容中提取"), s.value.content && (s.value.tags = T(s.value.content))
            } else s.value.content && (s.value.tags = T(s.value.content));
            console.log("话题标签:", s.value.tags)
          } catch (ne) {
            console.error("加载预览数据失败:", ne), A.error("加载预览数据失败")
          }
        },
        O = () => {
          i.go(-1)
        },
        J = () => {
          window.innerWidth <= 768 ? d.value = "450px" : d.value = "600px"
        };
      return oa(u, async (ee, ie) => {
        ee && ee.length > 0 && (await Da(), setTimeout(() => {
          n.value && (typeof n.value.setActiveItem == "function" && n.value.setActiveItem(0), typeof n.value.updateItems == "function" && n.value.updateItems())
        }, 200))
      }, {
        immediate: !0,
        deep: !0
      }), Ll(async () => {
        document.title = "火兔工具箱_预览", R(), J(), window.addEventListener("resize", J), await Da(), n.value && u.value.length > 0 && setTimeout(() => {
          n.value && typeof n.value.setActiveItem == "function" && n.value.setActiveItem(0)
        }, 100)
      }), Zl(() => {
        window.removeEventListener("resize", J)
      }), (ee, ie) => {
        const Ae = $l,
          F = xl,
          Y = Si,
          ne = Ei;
        return c(), v("div", she, [e("div", rhe, [a(F, {
          class: "back-button",
          onClick: O,
          circle: ""
        }, {
          default: l(() => [a(Ae, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        })]), e("div", uhe, [a(F, {
          class: "back-button",
          onClick: O,
          circle: ""
        }, {
          default: l(() => [a(Ae, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        })]), e("div", che, [ie[0] || (ie[0] = e("div", {
          class: "section-header"
        }, [e("h2", {
          class: "section-title"
        }, "案例图文预览")], -1)), e("div", dhe, [u.value.length > 0 ? (c(), v("div", vhe, [(c(), ye(ne, {
          height: d.value,
          "indicator-position": u.value.length > 1 ? "inside" : "none",
          class: "note-gallery-carousel",
          touchable: !0,
          interval: 0,
          autoplay: !1,
          key: `carousel-${u.value.length}`,
          ref_key: "carouselRef",
          ref: n
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(u.value, (De, Q) => (c(), ye(Y, {
            key: `img-${Q}-${De}`
          }, {
            default: l(() => [e("div", {
              class: "carousel-image-wrapper",
              onTouchstart: x,
              onTouchmove: C,
              onTouchend: V
            }, [e("img", {
              src: De,
              alt: `图片${Q+1}`
            }, null, 8, mhe)], 32)]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        }, 8, ["height", "indicator-position"]))])) : M("", !0), s.value.title ? (c(), v("div", ghe, h(s.value.title), 1)) : M("", !0), s.value.content ? (c(), v("div", fhe, h(s.value.content), 1)) : s.value.title || u.value.length > 0 ? (c(), v("div", phe, " 暂无图文内容 ")) : M("", !0), s.value.tags && s.value.tags.length > 0 ? (c(), v("div", yhe, [(c(!0), v(Ue, null, gt(s.value.tags, De => (c(), v("span", {
          class: "preview-tag",
          key: De
        }, "#" + h(De), 1))), 128))])) : M("", !0), !s.value.title && u.value.length === 0 && !s.value.content ? (c(), v("div", hhe, " 暂无预览内容 ")) : M("", !0)])])])
      }
    }
  },
  _he = al(whe, [
    ["__scopeId", "data-v-0b1f9969"]
  ]);
const khe = {
    class: "yulanm2-container"
  },
  Che = {
    class: "back-header back-header-left"
  },
  Ahe = {
    class: "back-header back-header-right"
  },
  Ihe = {
    class: "preview-section"
  },
  xhe = {
    class: "preview-content"
  },
  She = {
    key: 0,
    class: "preview-carousel"
  },
  Ehe = ["src", "alt"],
  The = {
    key: 1,
    class: "preview-title"
  },
  $he = {
    key: 2,
    class: "preview-text"
  },
  Phe = {
    key: 3,
    class: "preview-text-empty"
  },
  Vhe = {
    key: 4,
    class: "preview-tags"
  },
  zhe = {
    key: 5,
    class: "preview-empty"
  },
  Lhe = {
    key: 0,
    class: "floating-actions"
  },
  Dhe = 50,
  Mhe = {
    __name: "Yulanm2",
    setup(t) {
      const o = fn(),
        i = ln(),
        n = p(null),
        s = p({
          title: "",
          cover: "",
          content: "",
          images: [],
          tags: []
        }),
        u = p(null),
        d = Le(() => o.query.from === "pics"),
        f = Le(() => d.value || yT()),
        y = Le(() => s.value.images && Array.isArray(s.value.images) && s.value.images.length > 0 ? s.value.images.filter(ne => ne && typeof ne == "string" && ne.trim()) : s.value.cover && typeof s.value.cover == "string" && s.value.cover.trim() ? [s.value.cover] : []),
        w = p("450px"),
        S = p(0),
        z = p(0),
        x = p(0),
        C = p(0),
        V = p(!1),
        $ = ne => {
          V.value = !0, S.value = ne.touches[0].clientX, z.value = ne.touches[0].clientY
        },
        N = ne => {
          if (!V.value) return;
          const De = ne.touches[0].clientX,
            Q = ne.touches[0].clientY,
            re = Math.abs(De - S.value),
            b = Math.abs(Q - z.value);
          b > re || b > 10 || re > b && re > 5 && (ne.preventDefault(), ne.stopPropagation())
        },
        T = ne => {
          if (!V.value || !n.value) {
            V.value = !1;
            return
          }
          x.value = ne.changedTouches[0].clientX, C.value = ne.changedTouches[0].clientY, R(), V.value = !1
        },
        R = () => {
          if (!n.value || y.value.length <= 1) {
            S.value = 0, z.value = 0, x.value = 0, C.value = 0;
            return
          }
          const ne = x.value - S.value,
            De = C.value - z.value;
          if (Math.abs(ne) > Math.abs(De) * 2 && Math.abs(ne) > Dhe) {
            const Q = n.value.activeIndex || 0,
              re = y.value.length;
            ne > 0 ? Q > 0 && n.value.prev() : Q < re - 1 && n.value.next()
          }
          S.value = 0, z.value = 0, x.value = 0, C.value = 0
        },
        O = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768,
        J = () => {
          const ne = o.query.title,
            De = o.query.content,
            Q = o.query.images,
            re = o.query.cover,
            b = o.query.tags,
            te = o.query.template;
          if (!O()) {
            A.warning("此页面仅支持手机访问"), setTimeout(() => {
              i.push("/")
            }, 2e3);
            return
          }
          try {
            if (ne && (s.value.title = decodeURIComponent(ne)), De && (s.value.content = decodeURIComponent(De)), te) try {
              u.value = JSON.parse(decodeURIComponent(te));
              const we = u.value;
              if (!Q) {
                if (we.images && Array.isArray(we.images) && we.images.length > 0) {
                  const ae = we.images.filter(me => me != null).map(me => String(me).trim()).filter(me => me.length > 0);
                  ae.length > 0 && (s.value.images = ae)
                } else if (we.cover && String(we.cover).trim()) {
                  s.value.images = [String(we.cover).trim()];
                  for (let ae = 1; ae <= 3; ae++) s.value.images.push(`https://picsum.photos/seed/template-${we.id||"default"}-${ae}/400/533`)
                }
              }
            } catch (we) {
              console.error("无法解析模板数据:", we)
            }
            if (Q) try {
              const we = decodeURIComponent(Q);
              let ae;
              try {
                ae = JSON.parse(we)
              } catch {
                we && we.trim() ? ae = [we] : ae = []
              }
              if (Array.isArray(ae) && ae.length > 0) {
                const me = ae.filter(ce => ce != null).map(ce => String(ce).trim()).filter(ce => ce.length > 0);
                me.length > 0 && (s.value.images = me, console.log("成功加载图片数组，共", me.length, "张:", me))
              }
            } catch (we) {
              console.error("无法解析图片数组:", we, "原始值:", Q)
            }
            if (re && (!s.value.images || s.value.images.length === 0) && (s.value.cover = decodeURIComponent(re), s.value.images = [s.value.cover]), b) try {
              const we = JSON.parse(decodeURIComponent(b));
              Array.isArray(we) && (s.value.tags = we)
            } catch {
              console.log("无法解析标签数组")
            }
            console.log("加载的图片数组:", s.value.images), console.log("allImages computed:", y.value), console.log("图片数量:", y.value.length)
          } catch (we) {
            console.error("加载预览数据失败:", we), A.error("加载预览数据失败")
          }
        },
        ee = () => {
          if (!u.value) {
            A.warning("模板数据不存在");
            return
          }
          const ne = u.value;
          let De = ne.titleMode || "useKeyword";
          De === "aiGenerate" && (De = "aiNew");
          let Q = Array.isArray(ne.contentOptions) ? [...ne.contentOptions] : [];
          const re = Q.indexOf("addCTA");
          re !== -1 && (Q[re] = "addTags"), i.push({
            path: "/generate",
            query: {
              title: ne.title,
              templateId: String(ne.id),
              group: ne.group || "",
              category: ne.category || "其他",
              noteType: ne.noteType || "分享",
              wordCount: ne.wordCount || "300",
              titleMode: De,
              contentOptions: JSON.stringify(Q),
              customExtra: ne.customExtra ? JSON.stringify(ne.customExtra) : ""
            }
          })
        },
        ie = () => {
          if (!u.value) {
            A.warning("模板数据不存在");
            return
          }
          const ne = u.value;
          let De = ne.titleMode || "useKeyword";
          De === "aiGenerate" && (De = "aiNew");
          let Q = Array.isArray(ne.contentOptions) ? [...ne.contentOptions] : [];
          const re = Q.indexOf("addCTA");
          re !== -1 && (Q[re] = "addTags"), i.push({
            path: "/generates",
            query: {
              title: ne.title,
              templateId: String(ne.id),
              group: ne.group || "",
              category: ne.category || "其他",
              noteType: ne.noteType || "分享",
              wordCount: ne.wordCount || "300",
              titleMode: De,
              contentOptions: JSON.stringify(Q),
              customExtra: ne.customExtra ? JSON.stringify(ne.customExtra) : ""
            }
          })
        },
        Ae = () => {
          if (!u.value) {
            A.warning("模板数据不存在");
            return
          }
          const ne = u.value,
            De = ne.desc || ne.note || s.value.content || "";
          let Q = [];
          y.value && y.value.length > 0 ? Q = y.value.filter(me => me && me.trim()) : ne.images && Array.isArray(ne.images) && ne.images.length > 0 ? Q = ne.images.filter(me => me && me.trim()) : ne.cover && (Q = [ne.cover]);
          let re = ne.titleMode || "useKeyword";
          re === "aiGenerate" && (re = "aiNew");
          let b = Array.isArray(ne.contentOptions) ? [...ne.contentOptions] : [];
          const te = b.indexOf("addCTA");
          te !== -1 && (b[te] = "addTags"), ["filterBannedWords", "filterMarketingWords"].forEach(me => {
            b.includes(me) || b.push(me)
          });
          const ae = {
            templateId: String(ne.id),
            title: s.value.title || ne.title || "",
            content: De,
            noteType: ne.noteType || "分享",
            wordCount: ne.wordCount || "300",
            titleMode: re,
            contentOptions: JSON.stringify(b),
            customExtra: ne.customExtra ? JSON.stringify(ne.customExtra) : ""
          };
          Q.length > 0 && (ae.images = JSON.stringify(Q)), i.push({
            path: "/aicopy",
            query: ae
          })
        },
        F = () => {
          i.go(-1)
        },
        Y = () => {
          window.innerWidth <= 768 ? w.value = "450px" : w.value = "600px"
        };
      return oa(y, async (ne, De) => {
        ne && ne.length > 0 && (await Da(), setTimeout(() => {
          n.value && (typeof n.value.setActiveItem == "function" && n.value.setActiveItem(0), typeof n.value.updateItems == "function" && n.value.updateItems())
        }, 200))
      }, {
        immediate: !0,
        deep: !0
      }), Ll(async () => {
        document.title = "火兔工具箱_预览", J(), Y(), window.addEventListener("resize", Y), await Da(), n.value && y.value.length > 0 && setTimeout(() => {
          n.value && typeof n.value.setActiveItem == "function" && n.value.setActiveItem(0)
        }, 100)
      }), Zl(() => {
        window.removeEventListener("resize", Y)
      }), (ne, De) => {
        const Q = $l,
          re = xl,
          b = Si,
          te = Ei;
        return c(), v("div", khe, [e("div", Che, [a(re, {
          class: "back-button",
          onClick: F,
          circle: ""
        }, {
          default: l(() => [a(Q, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        })]), e("div", Ahe, [a(re, {
          class: "back-button",
          onClick: F,
          circle: ""
        }, {
          default: l(() => [a(Q, null, {
            default: l(() => [a(P(an))]),
            _: 1
          })]),
          _: 1
        })]), e("div", Ihe, [De[0] || (De[0] = e("div", {
          class: "section-header"
        }, [e("h2", {
          class: "section-title"
        }, "模板图文预览")], -1)), e("div", xhe, [y.value.length > 0 ? (c(), v("div", She, [(c(), ye(te, {
          height: w.value,
          "indicator-position": y.value.length > 1 ? "inside" : "none",
          class: "note-gallery-carousel",
          touchable: !0,
          interval: 0,
          autoplay: !1,
          key: `carousel-${y.value.length}`,
          ref_key: "carouselRef",
          ref: n
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(y.value, (we, ae) => (c(), ye(b, {
            key: `img-${ae}-${we}`
          }, {
            default: l(() => [e("div", {
              class: "carousel-image-wrapper",
              onTouchstart: $,
              onTouchmove: N,
              onTouchend: T
            }, [e("img", {
              src: we,
              alt: `图片${ae+1}`
            }, null, 8, Ehe)], 32)]),
            _: 2
          }, 1024))), 128))]),
          _: 1
        }, 8, ["height", "indicator-position"]))])) : M("", !0), s.value.title ? (c(), v("div", The, h(s.value.title), 1)) : M("", !0), s.value.content ? (c(), v("div", $he, h(s.value.content), 1)) : s.value.title || y.value.length > 0 ? (c(), v("div", Phe, " 暂无图文内容 ")) : M("", !0), s.value.tags && s.value.tags.length > 0 ? (c(), v("div", Vhe, [(c(!0), v(Ue, null, gt(s.value.tags, we => (c(), v("span", {
          class: "preview-tag",
          key: we
        }, "#" + h(we), 1))), 128))])) : M("", !0), !s.value.title && y.value.length === 0 && !s.value.content ? (c(), v("div", zhe, " 暂无预览内容 ")) : M("", !0)])]), f.value ? M("", !0) : (c(), v("div", Lhe, [a(re, {
          class: "btn-red",
          onClick: ee
        }, {
          default: l(() => [...De[1] || (De[1] = [g("单篇生成", -1)])]),
          _: 1
        }), a(re, {
          class: "btn-blue",
          onClick: ie
        }, {
          default: l(() => [...De[2] || (De[2] = [g("批量生成", -1)])]),
          _: 1
        }), a(re, {
          class: "btn-green",
          onClick: Ae
        }, {
          default: l(() => [...De[3] || (De[3] = [g("灵感参考", -1)])]),
          _: 1
        })]))])
      }
    }
  },
  Ohe = al(Mhe, [
    ["__scopeId", "data-v-78c96de1"]
  ]);
const Bhe = {
    class: "aisousuo-page"
  },
  Nhe = {
    key: 0,
    class: "page-title"
  },
  Uhe = {
    key: 1,
    class: "results-header"
  },
  Rhe = {
    class: "results-title"
  },
  jhe = {
    class: "results-keyword"
  },
  qhe = {
    class: "templates-section"
  },
  Fhe = {
    key: 0,
    class: "loading-container"
  },
  Whe = {
    key: 1,
    class: "empty-container"
  },
  Ghe = {
    key: 2,
    class: "templates-grid"
  },
  Jhe = ["onClick"],
  Hhe = ["onClick"],
  Qhe = ["src"],
  Khe = {
    class: "template-cover-overlay"
  },
  Yhe = {
    class: "template-info"
  },
  Xhe = {
    class: "template-title"
  },
  Zhe = {
    class: "template-user"
  },
  e0e = {
    class: "user-avatar"
  },
  t0e = ["src"],
  a0e = {
    class: "user-name"
  },
  l0e = {
    class: "template-stats"
  },
  n0e = {
    class: "stat-item"
  },
  o0e = {
    class: "stat-value"
  },
  i0e = {
    class: "stat-item"
  },
  s0e = {
    class: "stat-value"
  },
  r0e = {
    class: "stat-item"
  },
  u0e = {
    class: "stat-value"
  },
  c0e = {
    class: "stat-item"
  },
  d0e = {
    class: "stat-value"
  },
  v0e = {
    key: 3,
    class: "load-more-section"
  },
  m0e = {
    class: "template-menu-content"
  },
  g0e = {
    key: 0,
    class: "menu-template-cover"
  },
  f0e = ["src"],
  p0e = {
    class: "menu-template-title"
  },
  y0e = {
    class: "menu-user-info"
  },
  h0e = {
    class: "menu-user-avatar"
  },
  b0e = ["src"],
  w0e = {
    class: "menu-user-name"
  },
  _0e = {
    class: "menu-stats"
  },
  k0e = {
    class: "menu-stat-item"
  },
  C0e = {
    class: "menu-stat-value"
  },
  A0e = {
    class: "menu-stat-item"
  },
  I0e = {
    class: "menu-stat-value"
  },
  x0e = {
    class: "menu-stat-item"
  },
  S0e = {
    class: "menu-stat-value"
  },
  E0e = {
    class: "menu-stat-item"
  },
  T0e = {
    class: "menu-stat-value"
  },
  $0e = {
    class: "menu-actions"
  },
  P0e = {
    __name: "Aisousuo",
    setup(t) {
      const o = ln(),
        i = fn(),
        n = p(window.innerWidth <= 768),
        s = p(!1),
        u = p(!1),
        d = p(!!localStorage.getItem("authToken")),
        f = p({}),
        y = p(""),
        w = p("comprehensive"),
        S = p([]),
        z = p(!1),
        x = p(!1),
        C = p(1),
        V = p(20),
        $ = p(1),
        N = p(!1),
        T = p(null),
        R = () => {
          o.back()
        },
        O = () => {
          n.value = window.innerWidth <= 768
        },
        J = we => we >= 1e3 ? (we / 1e3).toFixed(1) + "k" : we.toString(),
        ee = we => we ? we.startsWith("https://api.aichaoer.cn/yz/pics/pic?url=") ? we : `https://api.aichaoer.cn/yz/pics/pic?url=${encodeURIComponent(we)}` : "",
        ie = () => {
          const we = [{
            id: "mock_1",
            title: "给女粉宝宝送化妆品第一弹",
            desc: "精选好物推荐，送给最爱的她",
            cover: "https://via.placeholder.com/300x400/ff6b9d/ffffff?text=化妆品",
            images: ["https://via.placeholder.com/300x400/ff6b9d/ffffff?text=化妆品"],
            content: "精选好物推荐，送给最爱的她",
            group: "xkhsb",
            category: "美妆",
            noteType: "分享",
            wordCount: "300",
            titleMode: "new",
            contentOptions: ["addEmoji", "addHashtag"],
            customExtra: {},
            likes: 724,
            comments: 884,
            favorites: 333,
            shares: 15
          }, {
            id: "mock_2",
            title: "这种妆感真的好喜欢!",
            desc: "自然清透的妆容分享",
            cover: "https://via.placeholder.com/300x400/ffb3ba/ffffff?text=妆容",
            images: ["https://via.placeholder.com/300x400/ffb3ba/ffffff?text=妆容"],
            content: "自然清透的妆容分享",
            group: "家霞仙子",
            category: "美妆",
            noteType: "分享",
            wordCount: "300",
            titleMode: "new",
            contentOptions: ["addEmoji", "addHashtag"],
            customExtra: {},
            likes: 1700,
            comments: 69,
            favorites: 696,
            shares: 68
          }, {
            id: "mock_3",
            title: "优佳丽美妆大牌 美妆 伴手礼 集合店",
            desc: "大牌美妆伴手礼推荐",
            cover: "https://via.placeholder.com/300x400/ffdfba/ffffff?text=伴手礼",
            images: ["https://via.placeholder.com/300x400/ffdfba/ffffff?text=伴手礼"],
            content: "大牌美妆伴手礼推荐",
            group: "优佳丽",
            category: "美妆",
            noteType: "分享",
            wordCount: "300",
            titleMode: "new",
            contentOptions: ["addEmoji", "addHashtag"],
            customExtra: {},
            likes: 520,
            comments: 128,
            favorites: 89,
            shares: 32
          }, {
            id: "mock_4",
            title: "秋冬必备口红推荐",
            desc: "显白又显气质的口红合集",
            cover: "https://via.placeholder.com/300x400/ff2442/ffffff?text=口红",
            images: ["https://via.placeholder.com/300x400/ff2442/ffffff?text=口红"],
            content: "显白又显气质的口红合集",
            group: "美妆达人",
            category: "美妆",
            noteType: "分享",
            wordCount: "300",
            titleMode: "new",
            contentOptions: ["addEmoji", "addHashtag"],
            customExtra: {},
            likes: 1200,
            comments: 256,
            favorites: 450,
            shares: 78
          }, {
            id: "mock_5",
            title: "护肤步骤全攻略",
            desc: "正确的护肤顺序让你事半功倍",
            cover: "https://via.placeholder.com/300x400/87ceeb/ffffff?text=护肤",
            images: ["https://via.placeholder.com/300x400/87ceeb/ffffff?text=护肤"],
            content: "正确的护肤顺序让你事半功倍",
            group: "护肤专家",
            category: "护肤",
            noteType: "攻略",
            wordCount: "500",
            titleMode: "new",
            contentOptions: ["addEmoji", "addHashtag"],
            customExtra: {},
            likes: 890,
            comments: 145,
            favorites: 320,
            shares: 56
          }, {
            id: "mock_6",
            title: "显瘦穿搭分享",
            desc: "这样穿显瘦10斤",
            cover: "https://via.placeholder.com/300x400/dda0dd/ffffff?text=穿搭",
            images: ["https://via.placeholder.com/300x400/dda0dd/ffffff?text=穿搭"],
            content: "这样穿显瘦10斤",
            group: "穿搭博主",
            category: "穿搭",
            noteType: "分享",
            wordCount: "300",
            titleMode: "new",
            contentOptions: ["addEmoji", "addHashtag"],
            customExtra: {},
            likes: 2100,
            comments: 389,
            favorites: 567,
            shares: 123
          }];
          S.value = we, z.value = !1
        },
        Ae = async (we = 1, ae = !1) => {
          if (!(z.value && !ae)) {
            z.value = !0;
            try {
              if (y.value.trim()) {
                let me = null;
                if (!ae && we === 1) try {
                  const ce = sessionStorage.getItem("xhs_search_results");
                  ce && (me = JSON.parse(ce), sessionStorage.removeItem("xhs_search_results"))
                } catch (ce) {
                  console.warn("读取搜索结果失败:", ce)
                }
                if (!me || ae && we > 1) try {
                  me = await Zf(y.value.trim())
                } catch (ce) {
                  console.error("搜索优质模板失败:", ce), A.error((ce == null ? void 0 : ce.message) || "搜索失败，请稍后重试"), me = null
                }
                if (me && Array.isArray(me.notes) && me.notes.length > 0) {
                  const ce = me.notes.map((ue, U) => {
                    const de = ue.fixed_cover_image || ue.note_cover_url_default || ue.note_cover_url_pre || "",
                      _e = de ? ee(yO(de)) : "",
                      xe = Array.isArray(ue.note_image_list) && ue.note_image_list.length > 0 ? ue.note_image_list : _e ? [_e] : [];
                    return {
                      id: ue.note_id || `xhs_${U}`,
                      title: ue.note_display_title || "",
                      desc: ue.note_desc || ue.note_display_title || "",
                      cover: _e,
                      images: xe,
                      content: ue.note_desc || ue.note_display_title || "",
                      group: ue.auther_nick_name || "用户",
                      avatar: ue.auther_avatar || "",
                      category: "",
                      noteType: ue.note_type || "normal",
                      wordCount: "300",
                      titleMode: "new",
                      contentOptions: [],
                      customExtra: {
                        note_url: ue.note_url || "",
                        shareable_url: ue.shareable_url || "",
                        auther_avatar: ue.auther_avatar || ""
                      },
                      likes: ue.note_liked_count || 0,
                      comments: ue.note_comment_count || 0,
                      favorites: ue.note_collected_count || 0,
                      shares: ue.note_shared_count || 0
                    }
                  });
                  ae && we > 1 ? S.value = [...S.value, ...ce] : S.value = ce, $.value = 1
                } else {
                  const ce = {
                      page: we,
                      size: V.value,
                      title: y.value.trim()
                    },
                    ue = await ec(ce);
                  if (ue && ue.rows && Array.isArray(ue.rows) && ue.rows.length > 0) {
                    const U = ue.rows.map(de => {
                      let _e = [];
                      if (de.images) try {
                        _e = typeof de.images == "string" ? JSON.parse(de.images) : de.images
                      } catch (xe) {
                        console.warn("解析 images 失败:", xe), _e = []
                      }
                      return {
                        id: de.id,
                        title: de.title || "",
                        desc: de.desc || "",
                        cover: de.images && _e.length > 0 ? ee(_e[0]) : "",
                        images: _e,
                        content: de.content || "",
                        group: de.first_name || "",
                        category: de.second_name || "",
                        noteType: de.note_type || "分享",
                        wordCount: de.word_count || "300",
                        titleMode: de.title_mode || "new",
                        contentOptions: de.content_options || [],
                        customExtra: de.custom_extra || {},
                        likes: de.likes || Math.floor(Math.random() * 2e3) + 100,
                        comments: de.comments || Math.floor(Math.random() * 1e3) + 50,
                        favorites: de.favorites || Math.floor(Math.random() * 500) + 20,
                        shares: de.shares || Math.floor(Math.random() * 100) + 5
                      }
                    });
                    ae && we > 1 ? S.value = [...S.value, ...U] : S.value = U, ue.pages && ($.value = ue.pages.total_page || 1)
                  } else ae || ie()
                }
              } else ae || ie()
            } catch (me) {
              console.error("加载模板失败:", me), ae || ie()
            } finally {
              z.value = !1, x.value = !1
            }
          }
        }, F = async () => {
          x.value || C.value >= $.value || (x.value = !0, C.value += 1, await Ae(C.value, !0))
        }, Y = we => {
          T.value = we, N.value = !0
        }, ne = async () => {
          if (!T.value || !T.value.title) {
            A.warning("标题为空");
            return
          }
          try {
            await navigator.clipboard.writeText(T.value.title), A.success("标题已复制到剪贴板"), N.value = !1
          } catch (we) {
            console.error("复制失败:", we), A.error("复制失败，请手动复制")
          }
        }, De = async () => {
          var Re;
          if (!T.value) return;
          const we = T.value;
          if (!d.value) {
            s.value = !0, N.value = !1;
            return
          }
          const ae = ((Re = we.customExtra) == null ? void 0 : Re.shareable_url) || "";
          if (ae && ae.trim()) {
            o.push({
              path: "/aicopy",
              query: {
                link: ae.trim(),
                mode: "link"
              }
            }), N.value = !1;
            return
          }
          const me = we.desc || we.content || "";
          let ce = [];
          we.images && Array.isArray(we.images) && we.images.length > 0 ? ce = we.images.filter(nt => nt && nt.trim()) : we.cover && (ce = [we.cover]);
          let ue = we.titleMode || "new";
          ue === "aiGenerate" && (ue = "aiNew");
          let U = Array.isArray(we.contentOptions) ? [...we.contentOptions] : [];
          const de = U.indexOf("addCTA");
          de !== -1 && (U[de] = "addTags"), ["filterBannedWords", "filterMarketingWords"].forEach(nt => {
            U.includes(nt) || U.push(nt)
          });
          const xe = {
              templateId: String(we.id),
              title: we.title || "",
              content: me,
              images: ce,
              noteType: we.noteType || "分享",
              wordCount: we.wordCount || "300",
              titleMode: ue,
              contentOptions: U,
              customExtra: we.customExtra || {}
            },
            Ce = `template_copy_${we.id}_${Date.now()}`;
          try {
            sessionStorage.setItem(Ce, JSON.stringify(xe)), sessionStorage.setItem(`${Ce}_expires`, String(Date.now() + 5 * 60 * 1e3)), o.push({
              path: "/aicopy",
              query: {
                templateKey: Ce,
                mode: "template"
              }
            }), N.value = !1
          } catch (nt) {
            console.error("存储模板数据失败:", nt), A.error("操作失败，请稍后重试")
          }
        }, Q = async () => {
          var we;
          try {
            const ae = localStorage.getItem("authToken");
            if (ae && ae.trim()) {
              await new Promise(me => setTimeout(me, 200));
              try {
                const me = await zl();
                me ? (f.value = {
                  ...me,
                  nickname: me.nickname || me.nickName || "用户",
                  avatar: me.avatar || me.avatarUrl || ""
                }, d.value = !0) : (f.value = {}, d.value = !1)
              } catch (me) {
                if ((me == null ? void 0 : me.code) === 999 || ((we = me == null ? void 0 : me.response) == null ? void 0 : we.code) === 999) {
                  localStorage.removeItem("authToken"), f.value = {}, d.value = !1;
                  return
                }
                f.value = {}, d.value = !1
              }
            } else f.value = {}, d.value = !1
          } catch (ae) {
            console.error("检查登录状态失败:", ae), d.value = !1, f.value = {}
          }
        }, re = we => {
          f.value = we, d.value = !0, s.value = !1, A.success("登录成功"), Q()
        }, b = we => {
          we === "profile" ? (o.push("/user"), Sa.value = !1) : we === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : we === "recharge" ? (u.value = !0, Sa.value = !1) : we === "logout" && (ui(), Q(), Sa.value = !1)
        }, te = Le(() => C.value < $.value);
      return Ll(async () => {
        document.title = "优质创作 - 搜索结果", O(), Q(), window.addEventListener("resize", O), window.addEventListener("user-logout", Q), window.addEventListener("user-login-success", Q), i.query.keyword && (y.value = String(i.query.keyword)), i.query.sortMode && (w.value = String(i.query.sortMode)), y.value.trim() ? await Ae(1) : ie()
      }), Zl(() => {
        window.removeEventListener("resize", O), window.removeEventListener("user-logout", Q), window.removeEventListener("user-login-success", Q)
      }), (we, ae) => {
        const me = $l,
          ce = xl,
          ue = Rl;
        return c(), v("div", Bhe, [e("div", {
          class: "back-button-wrapper",
          onClick: R
        }, [a(me, {
          class: "back-icon"
        }, {
          default: l(() => [a(P(an))]),
          _: 1
        })]), a(ei, {
          title: "优质创作",
          "is-logged-in": d.value,
          "user-info": f.value,
          "show-mobile-menu": P(Sa),
          onMenuClick: ae[0] || (ae[0] = U => Sa.value = !0),
          onLoginClick: ae[1] || (ae[1] = U => s.value = !0),
          onCommand: b
        }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), n.value && P(Sa) ? (c(), v("div", {
          key: 0,
          class: "mobile-overlay show",
          onClick: ae[2] || (ae[2] = U => Sa.value = !1)
        })) : M("", !0), e("main", {
          class: Pe(["main-content", {
            "mobile-content": n.value
          }])
        }, [n.value ? M("", !0) : (c(), v("div", Nhe, h(y.value || "优质") + "优质内容推荐 ", 1)), n.value ? (c(), v("div", Uhe, [e("div", Rhe, [e("span", jhe, h(y.value || "优质"), 1), ae[8] || (ae[8] = e("span", {
          class: "results-text"
        }, "优质内容推荐", -1))])])) : M("", !0), e("div", qhe, [z.value ? (c(), v("div", Fhe, [a(me, {
          class: "loading-icon"
        }, {
          default: l(() => [a(P(Fl))]),
          _: 1
        }), ae[9] || (ae[9] = e("span", null, "加载中...", -1))])) : S.value.length === 0 ? (c(), v("div", Whe, [...ae[10] || (ae[10] = [e("span", null, "未找到相关模板", -1)])])) : (c(), v("div", Ghe, [(c(!0), v(Ue, null, gt(S.value, U => (c(), v("div", {
          key: U.id,
          class: "template-card",
          onClick: lt(de => Y(U), ["stop"])
        }, [U.cover ? (c(), v("div", {
          key: 0,
          class: "template-cover",
          onClick: lt(de => Y(U), ["stop"])
        }, [e("img", {
          src: U.cover,
          alt: "模板封面"
        }, null, 8, Qhe), e("div", Khe, [a(ce, {
          type: "primary",
          class: "enter-btn",
          onClick: lt(de => Y(U), ["stop"])
        }, {
          default: l(() => [...ae[11] || (ae[11] = [g(" 进入 ", -1)])]),
          _: 1
        }, 8, ["onClick"])])], 8, Hhe)) : M("", !0), e("div", Yhe, [e("div", Xhe, h(U.title), 1), e("div", Zhe, [e("div", e0e, [e("img", {
          src: U.avatar || P(Xl),
          alt: "用户头像"
        }, null, 8, t0e)]), e("span", a0e, h(U.group || "用户"), 1)]), e("div", l0e, [e("div", n0e, [ae[12] || (ae[12] = e("span", {
          class: "stat-icon"
        }, "❤️", -1)), e("span", o0e, h(J(U.likes || 0)), 1)]), e("div", i0e, [ae[13] || (ae[13] = e("span", {
          class: "stat-icon"
        }, "💬", -1)), e("span", s0e, h(J(U.comments || 0)), 1)]), e("div", r0e, [ae[14] || (ae[14] = e("span", {
          class: "stat-icon"
        }, "⭐", -1)), e("span", u0e, h(J(U.favorites || 0)), 1)]), e("div", c0e, [ae[15] || (ae[15] = e("span", {
          class: "stat-icon"
        }, "📤", -1)), e("span", d0e, h(J(U.shares || 0)), 1)])])])], 8, Jhe))), 128))])), te.value && !z.value ? (c(), v("div", v0e, [a(ce, {
          onClick: F,
          loading: x.value
        }, {
          default: l(() => [...ae[16] || (ae[16] = [g("加载更多", -1)])]),
          _: 1
        }, 8, ["loading"])])) : M("", !0)])], 2), a(Wn, {
          modelValue: u.value,
          "onUpdate:modelValue": ae[3] || (ae[3] = U => u.value = U)
        }, null, 8, ["modelValue"]), a(no, {
          modelValue: s.value,
          "onUpdate:modelValue": ae[4] || (ae[4] = U => s.value = U),
          onLoginSuccess: re
        }, null, 8, ["modelValue"]), a(ue, {
          modelValue: N.value,
          "onUpdate:modelValue": ae[5] || (ae[5] = U => N.value = U),
          width: n.value ? "90%" : "500px",
          center: "",
          "show-close": !0,
          class: "template-menu-dialog"
        }, {
          default: l(() => {
            var U, de, _e, xe, Ce, Re, nt, tt;
            return [e("div", m0e, [(U = T.value) != null && U.cover ? (c(), v("div", g0e, [e("img", {
              src: T.value.cover,
              alt: "作品封面"
            }, null, 8, f0e)])) : M("", !0), e("div", p0e, h(((de = T.value) == null ? void 0 : de.title) || ""), 1), e("div", y0e, [e("div", h0e, [e("img", {
              src: ((_e = T.value) == null ? void 0 : _e.avatar) || P(Xl),
              alt: "用户头像"
            }, null, 8, b0e)]), e("span", w0e, h(((xe = T.value) == null ? void 0 : xe.group) || "用户"), 1)]), e("div", _0e, [e("div", k0e, [ae[17] || (ae[17] = e("span", {
              class: "menu-stat-icon"
            }, "❤️", -1)), e("span", C0e, h(J(((Ce = T.value) == null ? void 0 : Ce.likes) || 0)), 1), ae[18] || (ae[18] = e("span", {
              class: "menu-stat-label"
            }, "点赞", -1))]), e("div", A0e, [ae[19] || (ae[19] = e("span", {
              class: "menu-stat-icon"
            }, "💬", -1)), e("span", I0e, h(J(((Re = T.value) == null ? void 0 : Re.comments) || 0)), 1), ae[20] || (ae[20] = e("span", {
              class: "menu-stat-label"
            }, "评论", -1))]), e("div", x0e, [ae[21] || (ae[21] = e("span", {
              class: "menu-stat-icon"
            }, "⭐", -1)), e("span", S0e, h(J(((nt = T.value) == null ? void 0 : nt.favorites) || 0)), 1), ae[22] || (ae[22] = e("span", {
              class: "menu-stat-label"
            }, "收藏", -1))]), e("div", E0e, [ae[23] || (ae[23] = e("span", {
              class: "menu-stat-icon"
            }, "📤", -1)), e("span", T0e, h(J(((tt = T.value) == null ? void 0 : tt.shares) || 0)), 1), ae[24] || (ae[24] = e("span", {
              class: "menu-stat-label"
            }, "分享", -1))])]), e("div", $0e, [a(ce, {
              size: "large",
              class: "menu-action-btn copy-title-btn",
              onClick: ne
            }, {
              default: l(() => [...ae[25] || (ae[25] = [g(" 复制标题 ", -1)])]),
              _: 1
            }), a(ce, {
              size: "large",
              class: "menu-action-btn start-create-btn",
              onClick: De
            }, {
              default: l(() => [...ae[26] || (ae[26] = [g(" 开始创作 ", -1)])]),
              _: 1
            })])])]
          }),
          _: 1
        }, 8, ["modelValue", "width"]), a(ri, {
          onOpenRecharge: ae[6] || (ae[6] = U => u.value = !0),
          onOpenLogin: ae[7] || (ae[7] = U => s.value = !0)
        })])
      }
    }
  },
  V0e = al(P0e, [
    ["__scopeId", "data-v-86ca62c2"]
  ]);
const z0e = {
    class: "pics-page"
  },
  L0e = {
    key: 0,
    class: "top-nav-bar"
  },
  D0e = {
    key: 1,
    class: "page-title-mobile"
  },
  M0e = {
    class: "category-tabs"
  },
  O0e = {
    class: "category-buttons"
  },
  B0e = {
    key: 2,
    class: "source-tabs"
  },
  N0e = {
    class: "tabs-header-row"
  },
  U0e = {
    key: 3,
    class: "booklist-tabs"
  },
  R0e = {
    class: "tabs-header-row"
  },
  j0e = {
    key: 4
  },
  q0e = {
    class: "templates-grid"
  },
  F0e = {
    class: "cover-3-4"
  },
  W0e = ["src", "onClick"],
  G0e = ["onClick"],
  J0e = {
    class: "template-id"
  },
  H0e = {
    key: 0,
    class: "templates-pagination"
  },
  Q0e = {
    key: 1,
    class: "empty-state"
  },
  K0e = {
    key: 5,
    class: "cover-generator"
  },
  Y0e = {
    class: "generator-header"
  },
  X0e = {
    class: "generator-subtitle"
  },
  Z0e = {
    class: "input-section"
  },
  ebe = {
    cl
