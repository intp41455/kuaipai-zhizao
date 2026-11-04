// module: Yulanm
// extracted from 02-index-8bb27f01.js.js @ 1718738
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
