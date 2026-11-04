// module: Tiaozhuan
// extracted from 02-index-8bb27f01.js.js @ 1701807
{
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
