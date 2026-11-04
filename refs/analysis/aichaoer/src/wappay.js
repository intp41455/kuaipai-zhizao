// module: wappay
// extracted from 02-index-8bb27f01.js.js @ 1777228
{
  const o = Le(() => Wr(Fr)),
    i = ln(),
    n = p(typeof window < "u" ? window.innerWidth <= 768 : !0);

  function s() {
    typeof window > "u" || (n.value = window.innerWidth <= 768)
  }
  const u = p("team"),
    d = p({}),
    f = Le(() => d.value.isvip === 1 || d.value.is_vip === 1),
    y = p(null),
    w = p(!1),
    S = p([]),
    z = p(!1),
    x = Le(() => {
      if (S.value.length === 0) return [];
      let Ie = [];
      return u.value === "team" ? Ie = S.value.filter(pe => pe.type === 0) : u.value === "agent" && (Ie = S.value.filter(pe => pe.type === 2)), Ie.sort((pe, Be) => {
        const xt = pe.days || 0,
          Yt = Be.days || 0;
        return xt !== Yt ? xt - Yt : (pe.sort || 0) - (Be.sort || 0)
      }), Ie.map((pe, Be) => {
        let xt = "";
        const Yt = pe.days || 0,
          Ye = String(pe.name || pe.title || "");
        Yt > 0 && Yt <= 40 || Ye.includes("月卡") ? xt = "月卡" : Yt === 90 ? xt = "季卡" : Yt === 365 ? xt = "年卡" : Yt === 1095 ? xt = "三年卡" : Ye.includes("季卡") || Ye.includes("3个月") ? xt = "季卡" : Ye.includes("年卡") && !Ye.includes("三年") ? xt = "年卡" : Ye.includes("三年") && (xt = "三年卡");
        let va = pe.tag || pe.badge || pe.tag1 || pe.tag2;
        const Ea = String(va || "").trim();
        Ea === "超划算推荐" ? va = "买2年送1年" : Ea === "短长期" && (va = "短期体验");
        let ft = Be % 3;
        return u.value === "team" && (Yt === 90 ? ft = 0 : Yt === 365 ? ft = 1 : Yt === 1095 && (ft = 2)), {
          id: pe.id,
          name: pe.name || pe.title,
          price: parseFloat(pe.price || 0),
          originalPrice: parseFloat(pe.original_price || 0),
          desc: pe.desc || pe.description,
          tag: va,
          tagVariant: ft,
          count: pe.points || pe.count || 0,
          days: Yt,
          recommend: pe.recommend || 0,
          cardType: xt
        }
      })
    }),
    C = Le(() => {
      let Ie = "#4094FF",
        pe = "#8b5cf6";
      u.value === "team" ? (Ie = "#d4af37", pe = "#2c3e50") : u.value === "agent" && (Ie = "#ff6600", pe = "#ff6600");
      const Be = {
        Camera: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7-7H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"/></svg>',
        Promotion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.51-6.9l-.96-1.78C9.26 1.82 8 2.79 7.03 4.07l-2.8 2.8c-.57.57-.57 1.5 0 2.07l.96.96c-.25 1.25-.14 2.58.54 3.87.68 1.28 1.78 2.35 3.18 3.05l.96-.96c.57-.57 1.5-.57 2.07 0l2.8 2.8c.78.78 2.05 1.15 3.26.68l1.78-.96c2.25-1.5 4.96-1.23 6.9.51l.03-.03 2.51 2.54c.39.39.39 1.02 0 1.41l-2.7 2.7c-.39.39-1.02.39-1.41 0zm3.89-9.85l-2.8-2.8c-.78-.78-2.05-1.15-3.26-.68l-1.78.96c-2.25 1.5-4.96 1.23-6.9-.51l-.03.03-2.51-2.54c-.39-.39-1.02-.39-1.41 0l-2.7 2.7c-.39.39-.39 1.02 0 1.41l2.51 2.54.03.03c-1.74 1.94-2.01 4.65-.51 6.9l.96 1.78c.47 1.21.14 2.48-.68 3.26l-2.8 2.8c-.57.57-.57 1.5 0 2.07l2.8 2.8c.78.78 2.05 1.15 3.26.68l1.78-.96c2.25-1.5 4.96-1.23 6.9.51l.03-.03 2.51 2.54c.39.39 1.02.39 1.41 0l2.7-2.7c.39-.39.39-1.02 0-1.41l-2.51-2.54-.03-.03c1.74-1.94 2.01-4.65.51-6.9l-.96-1.78c-.47-1.21-1.23-2.05-2.01-2.83z"/></svg>',
        Grid: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>',
        LightBulb: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/></svg>'
      };
      return [{
        id: 1,
        name: "一句话图文",
        icon: qn,
        color: Ie,
        tag: "热门",
        tagColor: pe
      }, {
        id: 2,
        name: "拍照分享",
        svg: Be.Camera,
        color: Ie
      }, {
        id: 3,
        name: "优质对标",
        svg: Be.Promotion,
        color: Ie,
        tag: "热门",
        tagColor: pe
      }, {
        id: 4,
        name: "自定义发布",
        icon: Xy,
        color: Ie
      }, {
        id: 5,
        name: "文本模式",
        icon: Ci,
        color: Ie
      }, {
        id: 6,
        name: "素材库",
        icon: to,
        color: Ie
      }, {
        id: 7,
        name: "专属客服",
        icon: Nu,
        color: Ie
      }, {
        id: 8,
        name: "无限模版",
        svg: Be.Grid,
        color: Ie
      }, {
        id: 9,
        name: "定制开发",
        svg: Be.LightBulb,
        color: Ie
      }, {
        id: 10,
        name: "多账号管理",
        icon: Ko,
        color: Ie
      }, {
        id: 11,
        name: "一键导出",
        icon: og,
        color: Ie
      }, {
        id: 12,
        name: "定时发布",
        icon: ev,
        color: Ie
      }, {
        id: 13,
        name: "设计好图",
        icon: Ng,
        color: Ie
      }, {
        id: 14,
        name: "优质文案",
        icon: Rg,
        color: Ie
      }, {
        id: 15,
        name: "选题库",
        icon: Cr,
        color: Ie
      }, {
        id: 16,
        name: "工作流",
        icon: jg,
        color: Ie
      }, {
        id: 17,
        name: "敏感词库",
        icon: zs,
        color: Ie
      }, {
        id: 18,
        name: "10w+素材",
        icon: to,
        color: Ie
      }, {
        id: 19,
        name: "3000+封面",
        svg: Be.Grid,
        color: Ie
      }]
    }),
    V = Le(() => {
      const Ie = x.value.find(pe => pe.id === y.value);
      return Ie ? Ie.price : 0
    }),
    $ = Le(() => typeof localStorage > "u" ? !1 : !!localStorage.getItem("authToken")),
    N = p([]),
    T = p(null),
    R = p(!1),
    O = Ie => {
      if (!Ie || typeof Ie != "object") return null;
      const pe = Ie.expiretime;
      let Be = 0;
      if (pe != null) {
        const va = Number(pe);
        Be = Number.isFinite(va) ? va < 1e12 ? va * 1e3 : va : 0
      }
      const xt = Number(Ie.is_expire) === 1,
        Yt = Number(Ie.status) === 1,
        Ye = Number(Ie.id);
      return Number.isFinite(Ye) ? {
        id: Ye,
        threshold: Number(Ie.threshold_amount) || 0,
        discount: Number(Ie.discount_amount) || 0,
        expireAt: Be,
        used: Yt,
        isExpire: xt
      } : null
    },
    J = (Ie, pe) => {
      const Be = Number(pe) || 0,
        xt = Math.min(Number(Ie == null ? void 0 : Ie.discount) || 0, Be);
      return Math.round(xt * 100) / 100
    },
    ee = Le(() => {
      if (u.value !== "team") return [];
      const Ie = Number(V.value) || 0;
      return N.value.filter(pe => pe.threshold <= Ie)
    }),
    ie = Le(() => T.value == null ? null : ee.value.find(Ie => Ie.id === T.value) || null),
    Ae = Le(() => {
      const Ie = ie.value;
      if (!Ie) return 0;
      const pe = Number(V.value) || 0,
        Be = Math.min(Number(Ie.discount) || 0, pe);
      return Math.round(Be * 100) / 100
    }),
    F = Le(() => {
      const Ie = Number(V.value) || 0,
        pe = Math.max(0, Ie - Ae.value);
      return Math.round(pe * 100) / 100
    }),
    Y = Le(() => u.value === "team" ? F.value : V.value),
    ne = () => {
      if (!$.value || u.value !== "team" || R.value) return;
      const Ie = ee.value;
      if (!Ie.length) {
        T.value = null;
        return
      }
      const pe = Number(V.value) || 0;
      let Be = Ie[0],
        xt = J(Be, pe);
      for (let va = 1; va < Ie.length; va++) {
        const Ea = Ie[va],
          ft = J(Ea, pe);
        ft > xt ? (Be = Ea, xt = ft) : ft === xt && Ea.threshold > Be.threshold && (Be = Ea)
      }
      if (xt <= 0) {
        T.value = null;
        return
      }
      const Yt = T.value != null ? Ie.find(va => va.id === T.value) : null;
      (Yt ? J(Yt, pe) : -1) < xt && (T.value = Be.id)
    },
    De = () => {
      R.value = !0
    },
    Q = Ie => {
      Ie != null && (R.value = !1)
    },
    re = async () => {
      if (!$.value || u.value !== "team") {
        N.value = [], T.value = null;
        return
      }
      try {
        const Ie = await _v(),
          pe = Array.isArray(Ie) ? Ie : Array.isArray(Ie == null ? void 0 : Ie.list) ? Ie.list : Array.isArray(Ie == null ? void 0 : Ie.lists) ? Ie.lists : Array.isArray(Ie == null ? void 0 : Ie.rows) ? Ie.rows : [],
          Be = Date.now();
        N.value = pe.map(O).filter(Boolean).filter(xt => !xt.used && !xt.isExpire && (xt.expireAt === 0 || xt.expireAt > Be))
      } catch {
        N.value = []
      } finally {
        await Da(), ne()
      }
    };
  oa(ee, Ie => {
    T.value != null && !Ie.some(pe => pe.id === T.value) && (T.value = null), Da(() => ne())
  }), oa(y, (Ie, pe) => {
    pe != null && Ie !== pe && (R.value = !1), Da(() => ne())
  });
  const b = () => {
      re()
    },
    te = Le(() => {
      const Ie = x.value.find(Yt => Yt.id === y.value);
      if (!Ie) return "";
      const pe = S.value.find(Yt => Yt.id === y.value);
      if (!pe) return "";
      let Be = pe.days || 0;
      if (!Be && Ie.name) {
        const Yt = String(Ie.name);
        Yt.includes("月卡") ? Be = 31 : Yt.includes("季卡") || Yt.includes("3个月") ? Be = 90 : Yt.includes("三年") ? Be = 365 * 3 : (Yt.includes("年卡") || Yt.includes("一年")) && (Be = 365)
      }
      if (Be === 999999 || !Be) return "永久有效";
      const xt = new Date;
      return xt.setDate(xt.getDate() + Be), xt.toISOString().split("T")[0]
    }),
    we = () => {
      i.back()
    },
    ae = () => {
      i.push("/quanyi")
    },
    me = Ie => {
      y.value = Ie
    },
    ce = p(null),
    ue = p(!1);

  function U() {
    const Ie = ce.value;
    if (!Ie) {
      ue.value = !1;
      return
    }
    const {
      scrollLeft: pe,
      scrollWidth: Be,
      clientWidth: xt
    } = Ie;
    ue.value = pe + xt < Be - 4
  }

  function de(Ie) {
    const pe = ce.value;
    if (!pe) return;
    const Be = Math.max(130, Math.floor(pe.clientWidth * .55));
    pe.scrollBy({
      left: Ie * Be,
      behavior: "smooth"
    })
  }
  const _e = p(!1),
    xe = p(!1),
    Ce = p(!1),
    Re = () => {
      _e.value = !0
    },
    nt = p(!1),
    tt = p(!1),
    qe = p(""),
    Me = p(""),
    rt = p(!1);
  let ct = null;
  const E = Le(() => {
      try {
        if (typeof navigator > "u" || !navigator.userAgent) return !1;
        const Ie = navigator.userAgent.toLowerCase(),
          pe = Ie.includes("micromessenger"),
          Be = Ie.includes("android") || Ie.includes("iphone") || Ie.includes("ipad"),
          xt = typeof window < "u" && window.__wxjs_environment === "miniprogram";
        return pe && Be && !xt
      } catch {
        return !1
      }
    }),
    _ = p(!1),
    je = async Ie => {
      d.value = {
        ...d.value,
        phone: Ie
      };
      try {
        const pe = await zl({
          force: !0
        });
        pe && (d.value = pe)
      } catch {}
    }, K = async () => {
      if (!y.value) {
        A.warning("请选择套餐");
        return
      }
      if (!await hp({
          user: d.value,
          fetchLatest: async () => {
            const Be = await zl({
              force: !0
            });
            return Be && (d.value = Be), Be
          },
          onNeedBind: () => {
            _.value = !0
          }
        })) return;
      if (!w.value) {
        La.alert("请先阅读并勾选同意<br><strong>《会员协议》《购买说明》《隐私协议》</strong>，<br>勾选后方可购买开通服务！", "温馨提示", {
          confirmButtonText: "去勾选",
          dangerouslyUseHTMLString: !0
        });
        return
      }
      if (!x.value.find(Be => Be.id === y.value)) {
        A.warning("套餐信息错误");
        return
      }
      const pe = S.value.find(Be => Be.id === y.value);
      if (!pe) {
        A.warning("套餐信息错误");
        return
      }
      try {
        nt.value = !0;
        const xt = {
          pay_type: E.value ? "mppay" : "wxpay",
          good_id: pe.id
        };
        u.value === "team" && T.value != null && (xt.coupon_id = T.value);
        const Yt = await Ui(xt);
        if (Yt && Yt.order_no) {
          const Ye = Yt.code_url,
            va = Yt.order_no;
          E.value ? typeof Ye == "object" && Ye.appId ? await yt(Ye) : typeof Ye == "string" ? (Me.value = va, await B(Ye)) : A.error("支付参数格式错误") : typeof Ye == "string" ? (Me.value = va, await B(Ye)) : A.error("二维码生成失败")
        } else A.error("创建订单失败")
      } catch (Be) {
        console.error("支付失败:", Be), A.error(Be.message || "支付失败，请重试")
      } finally {
        nt.value = !1
      }
    }, B = async Ie => {
      try {
        const pe = await Ln.toDataURL(Ie, {
          width: 300,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        });
        qe.value = pe, tt.value = !0, W()
      } catch (pe) {
        console.error("生成支付二维码失败:", pe), A.error("生成支付二维码失败，请重试")
      }
    }, W = () => {
      if (!rt.value) {
        if (!Me.value) {
          console.error("订单号不存在，无法检查支付状态");
          return
        }
        rt.value = !0, ct = setInterval(async () => {
          try {
            const Ie = await Ds({
              order_no: Me.value
            });
            if (Ie && Ie.status !== void 0) {
              const {
                status: pe
              } = Ie;
              pe === 1 ? (Te(), tt.value = !1, A.success("支付成功"), await zl(), i.back()) : pe === 2 ? (Te(), tt.value = !1, A.error("支付失败，请重试")) : pe === 3 && (Te(), tt.value = !1, A.warning("已取消支付"))
            }
          } catch (Ie) {
            console.error("检查支付状态失败:", Ie)
          }
        }, 3e3), setTimeout(() => {
          Te(), tt.value && (tt.value = !1, A.warning("支付超时，请重新支付"))
        }, 30 * 60 * 1e3)
      }
    }, Te = () => {
      ct && (clearInterval(ct), ct = null), rt.value = !1
    }, it = () => {
      Te(), tt.value = !1, qe.value = "", Me.value = ""
    }, yt = Ie => new Promise((pe, Be) => {
      if (typeof window > "u") {
        Be(new Error("请在微信中打开"));
        return
      }
      typeof window.WeixinJSBridge < "u" ? window.WeixinJSBridge.invoke("getBrandWCPayRequest", {
        appId: Ie.appId,
        timeStamp: Ie.timeStamp,
        nonceStr: Ie.nonceStr,
        package: Ie.package,
        signType: Ie.signType,
        paySign: Ie.paySign
      }, xt => {
        xt.err_msg === "get_brand_wcpay_request:ok" ? (A.success("支付成功"), zl(), i.back(), pe(xt)) : xt.err_msg === "get_brand_wcpay_request:cancel" ? (A.warning("支付已取消"), Be(new Error("用户取消支付"))) : (console.error("支付失败:", xt), A.error("支付失败，请重试"), Be(new Error("支付失败")))
      }) : (document.addEventListener("WeixinJSBridgeReady", () => {
        yt(Ie).then(pe).catch(Be)
      }, !1), setTimeout(() => {
        Be(new Error("微信支付环境未准备好，请稍后重试"))
      }, 3e3))
    }), st = async () => {
      if (!z.value) try {
        z.value = !0;
        const Ie = await Ls();
        if (Array.isArray(Ie)) {
          S.value = Ie.map(Be => ({
            id: Be.id,
            name: Be.name || Be.title,
            title: Be.title,
            price: Be.price,
            original_price: Be.original_price,
            desc: Be.description || Be.intro,
            tag: Be.badge || Be.tag1 || Be.tag2,
            tag1: Be.tag1,
            tag2: Be.tag2,
            type: Be.type || 0,
            platform: Be.platform,
            count: Be.count || 0,
            points: Be.points || 0,
            days: Be.days || 0,
            recommend: Be.curr || 0,
            sort: Be.sort || 0
          }));
          const pe = x.value;
          if (pe.length > 0) {
            const Be = pe.find(xt => xt.recommend === 1);
            Be ? y.value = Be.id : y.value = pe[0].id
          }
        } else A.error("加载套餐失败")
      } catch (Ie) {
        console.error("加载VIP套餐失败:", Ie), A.error("加载套餐失败")
      } finally {
        z.value = !1
      }
    };
  return oa(u, () => {
    T.value = null, R.value = !1;
    const Ie = x.value;
    if (Ie.length > 0) {
      const pe = Ie.find(Be => Be.recommend === 1);
      if (pe) {
        y.value = pe.id, Da(() => re());
        return
      }
      y.value = Ie[0].id
    } else y.value = null;
    Da(() => re())
  }), oa(x, Ie => {
    if (Ie.length > 0 && !y.value) {
      const pe = Ie.find(Be => Be.recommend === 1);
      if (pe) {
        y.value = pe.id;
        return
      }
      y.value = Ie[0].id
    }
    Da(() => U())
  }, {
    immediate: !0
  }), oa(z, Ie => {
    Ie || Da(() => U())
  }), Ll(async () => {
    s(), window.addEventListener("resize", s, {
      passive: !0
    }), window.addEventListener("resize", U, {
      passive: !0
    }), window.addEventListener("user-login-success", b), await st();
    try {
      const Ie = await zl();
      Ie && (d.value = Ie)
    } catch (Ie) {
      console.error("加载用户信息失败:", Ie)
    }
    await re(), await Da(), U()
  }), ki(() => {
    window.removeEventListener("resize", s), window.removeEventListener("resize", U), window.removeEventListener("user-login-success", b), Te()
  }), (Ie, pe) => {
    const Be = $l,
      xt = Oo,
      Yt = Bo,
      Ye = ho,
      va = xl,
      Ea = Rl;
    return c(), v("div", vwe, [e("div", mwe, [e("div", {
      class: Pe(["bar-left", {
        "bar-left--empty": n.value
      }]),
      onClick: pe[0] || (pe[0] = ft => !n.value && we())
    }, [n.value ? M("", !0) : (c(), ye(Be, {
      key: 0
    }, {
      default: l(() => [a(P(an))]),
      _: 1
    }))], 2), pe[14] || (pe[14] = e("div", {
      class: "bar-title"
    }, "会员中心", -1)), e("div", {
      class: Pe(["bar-right", {
        "bar-right--back-text": n.value
      }]),
      onClick: pe[1] || (pe[1] = ft => n.value ? we() : Re())
    }, [n.value ? (c(), v("span", gwe, "< 返回")) : (c(), ye(Be, {
      key: 1,
      class: "service-icon"
    }, {
      default: l(() => [a(P(Nu))]),
      _: 1
    }))], 2)]), e("div", fwe, [e("div", pwe, [e("div", ywe, [e("img", {
      src: d.value.avatar || P(Xl),
      class: "user-avatar",
      alt: "头像"
    }, null, 8, hwe)]), e("div", bwe, [e("div", wwe, h(d.value.nickname || d.value.username || "创客用户"), 1), e("div", _we, h(f.value ? "VIP会员" : "成为会员，海量功能免费使用"), 1)])]), pe[30] || (pe[30] = ii('<div class="package-tab" data-v-3894ae84><div class="header-title" data-v-3894ae84><div class="header-title-card" data-v-3894ae84><div class="header-title-row" data-v-3894ae84><span class="header-title-line" data-v-3894ae84> 一次付费，享<span class="header-title-em" data-v-3894ae84>创作+配图+软件导出文案</span></span><span class="header-title-kicker" data-v-3894ae84>全家桶</span></div></div></div></div>', 1)), e("div", kwe, [e("div", {
      ref_key: "vipPackagesScrollRef",
      ref: ce,
      class: "vip-packages-scroll",
      onScrollPassive: U
    }, [z.value ? (c(), v("div", Cwe, [a(P(V1), {
      text: "加载中..."
    })])) : (c(), v("div", Awe, [(c(!0), v(Ue, null, gt(x.value, ft => (c(), v("div", {
      key: ft.id,
      class: Pe(["package-item", {
        active: y.value === ft.id,
        "package-item--team": u.value === "team",
        "package-item--agent": u.value === "agent"
      }]),
      onClick: Z => me(ft.id)
    }, [e("div", xwe, [e("div", Swe, h(ft.cardType || ft.name || ft.title), 1), e("div", {
      class: Pe(["package-discount-price", {
        "package-discount-price--team": u.value === "team",
        "package-discount-price--agent": u.value === "agent"
      }])
    }, [pe[15] || (pe[15] = g(" ￥", -1)), e("span", Ewe, h(ft.price), 1)], 2), e("div", Twe, [e("div", $we, "¥" + h(ft.originalPrice || ft.original_price), 1)])]), e("div", {
      class: Pe(["package-item-bottom", {
        "package-item-bottom--team": u.value === "team",
        "package-item-bottom--agent": u.value === "agent"
      }])
    }, [u.value === "team" ? (c(), v("span", Pwe, "到账" + h(ft.count) + "创作点数", 1)) : (c(), v(Ue, {
      key: 1
    }, [g(h(ft.desc || ft.description || (u.value === "aiPoints" ? `${ft.count}条` : `${ft.count}篇`)), 1)], 64))], 2), ft.tag ? (c(), v("div", {
      key: 0,
      class: Pe(["package-tag", {
        "package-tag--agent": u.value === "agent",
        "package-tag--team": u.value === "team",
        "package-tag--gift": /送/.test(ft.tag || "")
      }, `package-tag--v${ft.tagVariant??0}`])
    }, h(ft.tag), 3)) : M("", !0)], 10, Iwe))), 128))]))], 544), !z.value && x.value.length > 1 ? (c(), v("button", {
      key: 0,
      type: "button",
      class: "pkg-scroll-arrow pkg-scroll-arrow--right",
      "aria-label": "向右滑动套餐",
      disabled: !ue.value,
      onClick: pe[2] || (pe[2] = ft => de(1))
    }, [a(Be, null, {
      default: l(() => [a(P(Wl))]),
      _: 1
    })], 8, Vwe)) : M("", !0)]), pe[31] || (pe[31] = e("div", {
      class: "divider"
    }, null, -1)), e("div", zwe, [e("div", Lwe, [pe[17] || (pe[17] = e("div", {
      class: "rights-title"
    }, "会员专属权益", -1)), e("div", {
      class: "rights-detail",
      onClick: ae
    }, [pe[16] || (pe[16] = g(" 权益对比 ", -1)), a(Be, null, {
      default: l(() => [a(P(Wl))]),
      _: 1
    })])]), e("div", Dwe, [(c(!0), v(Ue, null, gt(C.value, ft => (c(), v("div", {
      key: ft.id,
      class: "right-item",
      "data-team": u.value === "team"
    }, [ft.icon && !ft.svg ? (c(), ye(Be, {
      key: 0,
      size: 24,
      color: ft.color
    }, {
      default: l(() => [(c(), ye(Jo(ft.icon)))]),
      _: 2
    }, 1032, ["color"])) : ft.svg ? (c(), v("div", {
      key: 1,
      class: "right-icon-svg",
      innerHTML: ft.svg,
      style: Il({
        color: ft.color
      })
    }, null, 12, Owe)) : (c(), ye(Be, {
      key: 2,
      size: 24,
      color: ft.color
    }, {
      default: l(() => [(c(), ye(Jo(ft.iconName)))]),
      _: 2
    }, 1032, ["color"])), e("div", Bwe, h(ft.name), 1), ft.tag ? (c(), v("div", Nwe, h(ft.tag), 1)) : M("", !0)], 8, Mwe))), 128))])]), pe[32] || (pe[32] = e("div", {
      class: "divider"
    }, null, -1)), e("div", Uwe, [pe[29] || (pe[29] = e("div", {
      class: "notes-title"
    }, "购买说明", -1)), e("div", Rwe, [e("div", jwe, [pe[18] || (pe[18] = g("1. 开通会员即视为您同意", -1)), pe[19] || (pe[19] = e("a", {
      href: "https://ai.feishu.cn/wiki/EBy9w6XJfiJ09KkVVbccvPXAn9e",
      target: "_blank"
    }, "会员协议", -1)), pe[20] || (pe[20] = g("、", -1)), e("span", {
      class: "link",
      onClick: pe[3] || (pe[3] = ft => Ce.value = !0)
    }, "购买说明"), pe[21] || (pe[21] = g("和", -1)), pe[22] || (pe[22] = e("a", {
      href: "https://ai.feishu.cn/wiki/EBy9w6XJfiJ09KkVVbccvPXAn9e",
      target: "_blank"
    }, "隐私协议", -1)), pe[23] || (pe[23] = g("；", -1))]), pe[26] || (pe[26] = e("div", {
      class: "note-item"
    }, "2. 购买的会员以自然天计算，多次购买可累加，会员可在系统各端使用；", -1)), e("div", {
      class: "note-item"
    }, [pe[24] || (pe[24] = g("3. 若您在购买前后有任何问题，请", -1)), e("span", {
      class: "link",
      onClick: Re
    }, "戳此联系客服"), pe[25] || (pe[25] = g("，我们会为您尽快解决。", -1))]), pe[27] || (pe[27] = e("div", {
      class: "note-item"
    }, [g("4. 支持"), e("span", {
      class: "note-item-red"
    }, "手机和电脑"), g("同时使用，支持"), e("span", {
      class: "note-item-red"
    }, "多设备"), g("同时登录。")], -1)), pe[28] || (pe[28] = e("div", {
      class: "note-item"
    }, "5. 无需手工复制站贴，手机/电脑一键导出超省心。", -1)), e("div", {
      class: "note-item note-item-clickable",
      onClick: pe[4] || (pe[4] = ft => xe.value = !0)
    }, "6. 虚拟类产品不支持退款")])]), pe[33] || (pe[33] = e("div", {
      class: "divider"
    }, null, -1))]), e("div", qwe, [u.value === "team" && $.value && N.value.length > 0 ? (c(), v("div", Fwe, [e("div", Wwe, [a(Be, {
      class: "wappay-coupon-icon",
      "aria-hidden": "true"
    }, {
      default: l(() => [a(P(ag))]),
      _: 1
    }), pe[34] || (pe[34] = e("span", {
      class: "wappay-coupon-label"
    }, "优惠券", -1))]), a(Yt, {
      modelValue: T.value,
      "onUpdate:modelValue": pe[5] || (pe[5] = ft => T.value = ft),
      placeholder: "不使用优惠券",
      clearable: "",
      size: "small",
      class: "wappay-coupon-select",
      disabled: ee.value.length === 0,
      "aria-label": "选择优惠券",
      onClear: De,
      onChange: Q
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(ee.value, ft => (c(), ye(xt, {
        key: ft.id,
        label: `满${ft.threshold}减${ft.discount}`,
        value: ft.id
      }, null, 8, ["label", "value"]))), 128))]),
      _: 1
    }, 8, ["modelValue", "disabled"]), ee.value.length === 0 ? (c(), v("p", Gwe, "暂无满足当前套餐门槛的可用券")) : M("", !0)])) : u.value === "team" && !$.value ? (c(), v("p", Jwe, "登录账号后支付可使用优惠券")) : M("", !0), u.value === "team" && Ae.value > 0 ? (c(), v("div", Hwe, [pe[35] || (pe[35] = e("span", null, "券后价", -1)), e("span", Qwe, "￥" + h(Y.value), 1), e("span", Kwe, "已减¥" + h(Ae.value), 1)])) : M("", !0), e("div", Ywe, [e("div", Xwe, [pe[36] || (pe[36] = g("开通后到期时间为 ", -1)), e("span", Zwe, h(te.value), 1)])]), e("div", e_e, [a(Ye, {
      modelValue: w.value,
      "onUpdate:modelValue": pe[6] || (pe[6] = ft => w.value = ft)
    }, null, 8, ["modelValue"]), e("span", t_e, [pe[37] || (pe[37] = g(" 开通会员即视为您同意 ", -1)), pe[38] || (pe[38] = e("a", {
      href: "https://ai.feishu.cn/wiki/EBy9w6XJfiJ09KkVVbccvPXAn9e",
      target: "_blank"
    }, "会员协议", -1)), pe[39] || (pe[39] = g("、 ", -1)), e("span", {
      class: "link",
      onClick: pe[7] || (pe[7] = ft => Ce.value = !0)
    }, "购买说明"), pe[40] || (pe[40] = g("和 ", -1)), pe[41] || (pe[41] = e("a", {
      href: "https://ai.feishu.cn/wiki/EBy9w6XJfiJ09KkVVbccvPXAn9e",
      target: "_blank"
    }, "隐私协议", -1)), pe[42] || (pe[42] = g("，并知悉", -1)), e("span", {
      class: "link",
      onClick: pe[8] || (pe[8] = ft => xe.value = !0)
    }, "不支持退款"), pe[43] || (pe[43] = g("，使用问题可", -1)), e("span", {
      class: "link",
      onClick: Re
    }, "咨询客服"), pe[44] || (pe[44] = g("。 ", -1))])]), a(va, {
      class: Pe(["pay-btn", {
        "pay-btn--team": u.value === "team",
        "pay-btn--agent": u.value === "agent"
      }]),
      onClick: K,
      disabled: !y.value,
      loading: nt.value
    }, {
      default: l(() => [e("div", a_e, [e("div", l_e, [pe[46] || (pe[46] = g(" 立即开通 ", -1)), e("div", n_e, [pe[45] || (pe[45] = g(" ￥", -1)), e("span", null, h(Y.value), 1)])]), pe[47] || (pe[47] = e("div", {
        class: "pay-btn-hint"
      }, [g(" 鉴于功能越来越强大，近期即将涨价 "), e("span", {
        class: "pay-btn-hint-icon",
        "aria-hidden": "true"
      }, "↗20%")], -1))])]),
      _: 1
    }, 8, ["class", "disabled", "loading"])]), a(Ea, {
      modelValue: _e.value,
      "onUpdate:modelValue": pe[9] || (pe[9] = ft => _e.value = ft),
      title: "客服二维码",
      width: "90%",
      center: "",
      class: "qr-dialog"
    }, {
      default: l(() => [e("div", o_e, [e("img", {
        src: o.value,
        alt: "客服二维码",
        class: "qr-image"
      }, null, 8, i_e), pe[48] || (pe[48] = e("p", {
        class: "qr-title"
      }, "添加客服二维码", -1)), e("p", s_e, h(P(Gr)), 1)])]),
      _: 1
    }, 8, ["modelValue"]), a(Ea, {
      modelValue: tt.value,
      "onUpdate:modelValue": pe[10] || (pe[10] = ft => tt.value = ft),
      width: "85%",
      "max-width": 320,
      "align-center": "",
      "close-on-click-modal": !1,
      class: "pay-qrcode-dialog"
    }, {
      default: l(() => [e("div", r_e, [e("div", u_e, [pe[49] || (pe[49] = e("div", {
        class: "qrcode-title"
      }, "微信扫码支付", -1)), a(Be, {
        class: "close-icon",
        onClick: it
      }, {
        default: l(() => [a(P(un))]),
        _: 1
      })]), e("div", c_e, [e("div", d_e, [e("img", {
        src: qe.value,
        alt: "支付二维码",
        class: "qrcode-image"
      }, null, 8, v_e)]), pe[50] || (pe[50] = e("div", {
        class: "qrcode-tip"
      }, "请使用微信扫描二维码完成支付", -1)), rt.value ? (c(), v("div", m_e, [a(P(V1), {
        text: "正在检查支付状态..."
      })])) : M("", !0)]), e("div", g_e, [a(va, {
        class: "cancel-pay-btn",
        onClick: it
      }, {
        default: l(() => [...pe[51] || (pe[51] = [g("取消支付", -1)])]),
        _: 1
      })])])]),
      _: 1
    }, 8, ["modelValue"]), a(Ea, {
      modelValue: Ce.value,
      "onUpdate:modelValue": pe[11] || (pe[11] = ft => Ce.value = ft),
      title: "购买说明",
      width: "92%",
      "max-width": 640,
      "align-center": "",
      class: "purchase-notice-dialog"
    }, {
      default: l(() => [...pe[52] || (pe[52] = [e("div", {
        class: "purchase-notice-content"
      }, [e("div", {
        class: "purchase-notice-intro"
      }, "为保障您的权益，请在购买前仔细阅读以下说明："), e("div", {
        class: "purchase-notice-list"
      }, [e("p", null, "1. 开通会员即视为您同意会员协议、用户协议和隐私协议；"), e("p", null, "2. 购买的会员以自然天计算，多次购买可累加，会员可在系统各端使用；"), e("p", null, "3. 若您在购买前后有任何问题，请戳此联系客服，我们会为您尽快解决。"), e("p", null, "4. 支持手机和电脑同时使用，支持多设备同时登录。"), e("p", null, "5. 无需手工复制站贴，手机/电脑一键导出超省心。"), e("p", null, "6. 本产品购买后不支持任何理由退款，请知晓！")])], -1)])]),
      _: 1
    }, 8, ["modelValue"]), a(Ea, {
      modelValue: xe.value,
      "onUpdate:modelValue": pe[12] || (pe[12] = ft => xe.value = ft),
      title: "虚拟产品不支持退款",
      width: "92%",
      "max-width": 640,
      "align-center": "",
      class: "refund-notice-dialog"
    }, {
      default: l(() => [...pe[53] || (pe[53] = [e("div", {
        class: "refund-notice-content"
      }, [e("div", {
        class: "refund-notice-banner"
      }, [e("span", {
        class: "refund-notice-banner-icon"
      }, "⚠️"), e("span", null, [g("本产品为"), e("strong", null, "虚拟数字化服务"), g("，购买后"), e("strong", null, "不支持任何理由退款")])]), e("div", {
        class: "refund-notice-section"
      }, [e("div", {
        class: "refund-notice-section-title"
      }, [e("span", {
        class: "refund-dot"
      }), g("产品性质")]), e("p", null, [g("本系统售卖为网站系统会员、AI 创作类虚拟权益，属于"), e("em", null, "线上数字化虚拟服务"), g("。会员权益开通、账号激活、权限发放后即时生效，服务即时交付且"), e("em", null, "无法回收、二次售卖"), g("，故一经购买"), e("mark", null, "概不支持无理由退款、退货、换货"), g("。")])]), e("div", {
        class: "refund-notice-section"
      }, [e("div", {
        class: "refund-notice-section-title"
      }, [e("span", {
        class: "refund-dot"
      }), g("购买提示")]), e("p", null, [g("请各位用户下单前仔细了解套餐内容、功能权限与使用规则，确认符合自身需求后再付款。若遇到账号登录、功能异常、使用故障等问题，可随时"), e("em", null, "联系客服免费协助排查处理"), g("，保障正常使用；因"), e("mark", null, "个人拍错、不想用、不会操作、预期不符"), g("等主观原因，不接受退款申请。")])]), e("div", {
        class: "refund-notice-footer"
      }, "下单付款即视为默认同意本规则，感谢理解与支持。")], -1)])]),
      _: 1
    }, 8, ["modelValue"]), a(q0, {
      modelValue: _.value,
      "onUpdate:modelValue": pe[13] || (pe[13] = ft => _.value = ft),
      onSuccess: je
    }, null, 8, ["modelValue"])])
  }
}
