// module: Yulanm2
// extracted from 02-index-8bb27f01.js.js @ 1723613
{
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
