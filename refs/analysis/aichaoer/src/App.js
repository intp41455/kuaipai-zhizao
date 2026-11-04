// module: App
// extracted from 02-index-8bb27f01.js.js @ 405227
{
  const o = Z => {
      if (Z == null) return "";
      const pt = Array.isArray(Z) ? Z[0] : Z;
      return String(pt ?? "").trim()
    },
    i = () => {
      var Z, pt, Et;
      try {
        if ((Z = new URLSearchParams(window.location.search).get("token")) != null && Z.trim() || (pt = sessionStorage.getItem("pendingWechatAuthToken")) != null && pt.trim()) return !0
      } catch {}
      return !!((Et = n.query) != null && Et.token && o(n.query.token))
    },
    n = fn(),
    s = ln(),
    u = Le(() => n.path.startsWith("/ecomset") ? n.fullPath : n.name || n.path);

  function d(Z) {
    return Z === "/wappay" ? !0 : Z.startsWith("/note") ? !Z.startsWith("/noteanli") : Z.startsWith("/product/") || Z.startsWith("/product2/") || Z.startsWith("/generating") || Z.startsWith("/outline-edit") || Z.startsWith("/tiaozhuan") || Z.startsWith("/yulanm") || Z.startsWith("/quanyi") || Z === "/aipic" || Z === "/aicopypic" || Z === "/aifengmian" || Z === "/aihaibao" || Z.startsWith("/video") || Z.startsWith("/aipicing") ? !0 : Z.startsWith("/daoru") ? Z !== "/daoru/caogao" : !1
  }

  function f(Z) {
    return !!(Z === "/generate" || Z === "/generates" || Z === "/aicopy" || Z === "/aicopys" || Z === "/yijuhua" || Z === "/user" || Z === "/tools" || Z === "/yunying" || Z.startsWith("/zntool") || Z.startsWith("/zhiding") || Z.startsWith("/chazhao") || Z.startsWith("/aisousuo") || Z.startsWith("/fabu") || Z.startsWith("/banyun") || Z.startsWith("/chanpin") || Z.startsWith("/ainotes") || Z.startsWith("/renshe") || Z.startsWith("/mote") || Z.startsWith("/shangpin") || Z.startsWith("/aipic/tuji"))
  }

  function y(Z) {
    return Z.startsWith("/dianpuwenan") || Z.startsWith("/shitibaowen")
  }

  function w(Z) {
    return Z.startsWith("/wangdianma/visit") || Z.startsWith("/fabuma")
  }

  function S(Z) {
    return Z === "/tiaokuan" || Z === "/jiaocheng" || Z.startsWith("/jiaocheng/")
  }

  function z(Z) {
    return !!(Z.startsWith("/ecomset") || Z.startsWith("/mote") || Z.startsWith("/shangpin") || Z.startsWith("/pod") || Z.startsWith("/liaotiandianshang") || Z.startsWith("/cardmaker") || Z.startsWith("/tuzhuanvideo") || Z.startsWith("/daihuokoubo") || Z.startsWith("/gzh/writings") || Z.startsWith("/pingjia"))
  }
  const x = Le(() => {
      const Z = n.path;
      return !(Z === "/" || n.name === "NoteAnliWork" || y(Z) || w(Z) || f(Z) || d(Z))
    }),
    C = Le(() => !x.value && !f(n.path)),
    V = p(!1),
    $ = p(!1),
    N = p(!1);
  let T = null;
  const R = p(!1),
    O = p(!1),
    J = Le(() => w(n.path) || S(n.path) ? !1 : n.path !== "/"),
    ee = Le(() => J.value && !d(n.path)),
    ie = Le(() => J.value && !d(n.path) && z(n.path)),
    Ae = Le(() => {
      var pt;
      return n.path === "/shangpin" ? "" : n.name && ((pt = K0[n.name]) == null ? void 0 : pt.name) || ""
    }),
    F = p(!!localStorage.getItem("authToken")),
    Y = p({});
  async function ne() {
    if (F.value = !!localStorage.getItem("authToken"), !F.value) {
      Y.value = {};
      return
    }
    try {
      const Z = await zl();
      Y.value = (Z == null ? void 0 : Z.data) ?? Z ?? {}, re(Y.value), ue(Y.value), qe(Y.value)
    } catch {
      Y.value = {}
    }
  }
  const De = p(!1),
    Q = p("");

  function re(Z) {
    if (!Z || typeof Z != "object") return;
    const pt = Number(Z.isvip) === 1 || Number(Z.isVip) === 1,
      Et = !!String(Z.email || "").trim(),
      Mt = !!String(Z.phone || Z.mobile || "").trim(),
      Qe = !!String(Z.wechat || Z.openid || "").trim();
    if (!(!pt || !Et || Mt || Qe)) {
      try {
        const j = Number(localStorage.getItem(Q1) || 0);
        if (j && Date.now() < j) return
      } catch {}
      Q.value = String(Z.email || ""), De.value = !0
    }
  }

  function b(Z) {
    try {
      localStorage.setItem(Q1, String(Date.now() + Z * 24 * 3600 * 1e3))
    } catch {}
  }

  function te() {
    b(7)
  }

  function we() {
    b(1), s.push("/user")
  }
  const ae = p(!1),
    me = p("");

  function ce(Z) {
    return `phoneBackupNextAt:${Z||"0"}`
  }

  function ue(Z) {
    if (De.value || ae.value || !Z || typeof Z != "object") return;
    const pt = String(Z.phone || Z.mobile || "").trim();
    if (!/^1[3-9]\d{9}$/.test(pt) || Z.hasPassword || Z.wechat || Z.openid) return;
    let Et = !1;
    try {
      Et = sessionStorage.getItem(K1) === "1", Et && sessionStorage.removeItem(K1)
    } catch {}
    if (!Et) return;
    const Mt = String(Z.id || Z.userid || Z.userId || "");
    try {
      const Qe = Number(localStorage.getItem(ce(Mt)) || 0);
      if (Qe && Date.now() < Qe) return
    } catch {}
    me.value = pt, ae.value = !0
  }

  function U(Z) {
    var Et, Mt, Qe;
    const pt = String(((Et = Y.value) == null ? void 0 : Et.id) || ((Mt = Y.value) == null ? void 0 : Mt.userid) || ((Qe = Y.value) == null ? void 0 : Qe.userId) || "");
    try {
      localStorage.setItem(ce(pt), String(Date.now() + Z * 24 * 3600 * 1e3))
    } catch {}
  }

  function de() {
    U(7)
  }

  function _e() {
    U(1), s.push("/user?tab=password")
  }

  function xe() {
    U(1), s.push({
      path: "/user",
      query: {
        bind: "wechat"
      }
    })
  }
  const Ce = p(!1),
    Re = p(""),
    nt = p(0);

  function tt(Z) {
    if (Z == null || Z === "") return 0;
    const pt = String(Z).trim();
    if (/^\d+$/.test(pt)) {
      const Mt = Number(pt);
      return Mt < 1e12 ? Mt * 1e3 : Mt
    }
    const Et = Date.parse(pt.replace(/-/g, "/"));
    return isNaN(Et) ? 0 : Et
  }

  function qe(Z) {
    if (!Z || typeof Z != "object" || De.value || ae.value || !(Number(Z.isvip) === 1 || Number(Z.isVip) === 1)) return;
    const Et = tt(Z.vip_expiretime);
    if (!Et) return;
    const Mt = Et - Date.now(),
      Qe = Math.ceil(Mt / 864e5);
    if (Mt <= 0 || Qe > bT) return;
    try {
      const ht = Number(localStorage.getItem(Y1) || 0);
      if (ht && Date.now() < ht) return
    } catch {}
    const j = new Date(Et),
      Ee = ht => String(ht).padStart(2, "0");
    Re.value = `${j.getFullYear()}-${Ee(j.getMonth()+1)}-${Ee(j.getDate())}`, nt.value = Math.max(0, Qe), Ce.value = !0
  }

  function Me(Z) {
    try {
      localStorage.setItem(Y1, String(Date.now() + Z * 24 * 3600 * 1e3))
    } catch {}
  }

  function rt() {
    Me(1)
  }

  function ct() {
    Me(1), V.value = !0
  }
  async function E(Z) {
    if (Z === "profile") {
      s.push("/user"), Sa.value = !1;
      return
    }
    if (Z === "logout") {
      await ui().finally(() => {
        Sa.value = !1, ne()
      });
      return
    }
  }
  const _ = Le(() => {
      const Z = n.path;
      return Z.startsWith("/ecomset") ? n.query.scene === "multi-view" ? 103 : n.query.scene === "change-bg" ? 104 : 99 : Z.startsWith("/console") ? -10 : Z.startsWith("/aidianshang") ? -11 : Z.startsWith("/user") ? -12 : Z.startsWith("/wappay") ? -13 : Z.startsWith("/quanyi") ? -14 : Z.startsWith("/caogao") ? -15 : Z.startsWith("/geo/home") ? 97 : Z.startsWith("/geo/sucai") ? 90 : Z.startsWith("/geo/article") ? 91 : Z.startsWith("/geo/liuliang") ? 92 : Z.startsWith("/zhiding") ? 21 : Z.startsWith("/chanpin") ? 31 : Z.startsWith("/renshe") ? 43 : Z.startsWith("/liaotiandianshang") ? 95 : Z.startsWith("/fantui") ? 96 : Z.startsWith("/mote") ? 57 : Z.startsWith("/shangpin") ? 58 : Z.startsWith("/pod") ? 100 : Z.startsWith("/xiangqingye") ? 56 : Z.startsWith("/yijuhua") ? 0 : Z.startsWith("/ainotes") ? 70 : Z.startsWith("/dspics") ? 71 : Z.startsWith("/beiwanglu") ? 50 : Z.startsWith("/gongge") && !Z.startsWith("/gonggepintu") ? 51 : Z.startsWith("/pengyouquan") ? 53 : Z.startsWith("/wanggandazi") ? 52 : Z.startsWith("/zhishikepu") ? 54 : Z.startsWith("/ceping") ? 55 : Z.startsWith("/generate") && !Z.startsWith("/generates") ? 1 : Z.startsWith("/generates") ? 14 : Z.startsWith("/chazhao") ? 26 : Z.startsWith("/aicopys") ? 38 : Z.startsWith("/aicopypic") ? 64 : Z.startsWith("/aicopy") ? 2 : Z.startsWith("/zhanshi") ? -4 : Z.startsWith("/kaifa") ? 62 : Z.startsWith("/noteanli") ? 40 : Z.startsWith("/make") ? 23 : Z.startsWith("/tishici") ? 61 : Z.startsWith("/article") ? 25 : Z.startsWith("/aiwenan") ? 32 : Z.startsWith("/pingjia") ? 105 : Z.startsWith("/xuanti") ? 49 : Z.startsWith("/photo") ? 22 : Z.startsWith("/daoru") ? 20 : Z.startsWith("/templates") ? 4 : Z.startsWith("/works") ? 3 : Z.startsWith("/mypic") ? -1 : Z.startsWith("/myvideo") ? -2 : Z.startsWith("/pics") ? 19 : Z.startsWith("/tools") ? 15 : Z.startsWith("/yunying") ? 16 : Z.startsWith("/cardmaker") ? 37 : Z.startsWith("/logo") ? 74 : Z.startsWith("/fanyi") ? 75 : Z.startsWith("/zhengjianzhao") ? 77 : Z.startsWith("/gonggepintu") ? 98 : Z.startsWith("/caijian") ? 93 : Z.startsWith("/imgtools") ? 102 : Z.startsWith("/wenzikapian") ? 101 : Z.startsWith("/aifengmian") ? 33 : Z.startsWith("/aihaibao") ? 63 : Z.startsWith("/aicopypic") ? 64 : Z.startsWith("/aidantu") ? 67 : Z.startsWith("/ziyoutuwen") ? 72 : Z.startsWith("/gaitu") ? 73 : Z.startsWith("/aipic") ? 24 : Z.startsWith("/tuzhuanvideo") ? 79 : Z.startsWith("/video3") ? 66 : Z.startsWith("/video2") ? 65 : Z.startsWith("/video") ? 29 : Z.startsWith("/daihuokoubo") ? 78 : Z.startsWith("/zhenduan") ? 27 : Z.startsWith("/yuce") ? 28 : Z.startsWith("/fabu") ? n.query.invite === "23" ? 94 : 30 : Z.startsWith("/banyun") ? 39 : Z.startsWith("/wangdianma") ? 41 : Z.startsWith("/dianpuwenan") ? 80 : Z.startsWith("/shitibaowen") ? 81 : Z.startsWith("/gzhst") ? 76 : Z.startsWith("/gzh") ? 42 : Z.startsWith("/tutorial") ? 15 : Z.startsWith("/baokuan") ? 35 : Z.startsWith("/weigui") ? 36 : Z.startsWith("/zntool") || Z.startsWith("/sucai") ? 17 : 0
    }),
    je = Z => {
      Z === "profile" ? s.push("/user") : Z === "wallet" ? s.push("/user?tab=wallet") : Z === "distribution" ? s.push("/user?tab=distribution") : Z === "recharge" ? K() : Z === "password" ? s.push("/user?tab=password") : Z === "logout" && Te()
    },
    K = () => {
      V.value = !0
    },
    B = () => {
      $.value = !0
    },
    W = Z => {
      $.value = !1, window.dispatchEvent(new CustomEvent("user-login", {
        detail: Z
      })), O.value && (O.value = !1, s.push("/user?tab=my_coupons"))
    },
    Te = async () => {
      try {
        await cv()
      } catch (Z) {
        console.error("退出登录接口调用失败:", Z)
      } finally {
        localStorage.removeItem("authToken"), localStorage.removeItem("userInfo"), sessionStorage.removeItem("authToken"), sessionStorage.removeItem("userInfo"), window.dispatchEvent(new CustomEvent("user-logout")), s.push("/"), A.success("已退出登录")
      }
    }, it = () => {
      const Z = new URLSearchParams(window.location.search),
        pt = (Z.get("invite") || Z.get("inivite") || "").trim(),
        Et = !!String(Z.get("cdk") || "").trim();
      if (pt) {
        localStorage.setItem("inviteCode", pt), console.log("邀请码已保存:", pt);
        const Mt = !!localStorage.getItem("authToken");
        if (n.path === "/" && !Mt && !Et && !i() && ($.value = !0), n.query.inivite != null || Z.has("inivite") && !Z.has("invite")) {
          const Qe = {
            ...n.query
          };
          Qe.inivite != null && (Qe.invite || (Qe.invite = o(Qe.inivite) || pt), delete Qe.inivite), s.replace({
            path: n.path,
            query: Qe,
            hash: n.hash
          }).catch(() => {})
        }
      }
    }, yt = () => {
      const pt = new URLSearchParams(window.location.search).get("cdk");
      if (pt && pt.trim()) {
        wg(pt);
        const Et = !!localStorage.getItem("authToken");
        n.path === "/" && !Et && (R.value || (R.value = !0, O.value = !0, N.value = !0));
        try {
          const Mt = new URL(window.location.href);
          Mt.searchParams.delete("cdk");
          let Qe = Mt.pathname;
          Mt.search && Mt.search !== "?" && (Qe += Mt.search), Mt.hash && (Qe += Mt.hash), window.history.replaceState({}, "", Qe)
        } catch (Mt) {
          console.warn("清除URL中的cdk参数失败:", Mt)
        }
      }
    };
  let st = null;
  const Ie = () => {
      const Z = n.query.token != null,
        pt = (() => {
          try {
            return new URLSearchParams(window.location.search).has("token")
          } catch {
            return !1
          }
        })();
      if (!Z && !pt) return;
      const Et = {
        ...n.query
      };
      delete Et.token, Et.inivite != null && (Et.invite || (Et.invite = o(Et.inivite)), delete Et.inivite), s.replace({
        path: n.path,
        query: Et,
        hash: n.hash
      }).catch(() => {
        try {
          const Mt = new URL(window.location.href);
          Mt.searchParams.delete("token"), window.history.replaceState({}, "", Mt.pathname + Mt.search + Mt.hash)
        } catch {}
      })
    },
    pe = () => {
      try {
        localStorage.removeItem("inviteCode"), j0()
      } catch {}
      if (n.query.invite != null || n.query.inivite != null) {
        const Z = {
          ...n.query
        };
        delete Z.invite, delete Z.inivite, delete Z.token, s.replace({
          path: n.path,
          query: Z,
          hash: n.hash
        }).catch(() => {})
      }
    },
    Be = (Z, pt = null) => {
      $.value = !1, pe();
      try {
        sessionStorage.removeItem(yd)
      } catch {}
      window.dispatchEvent(new CustomEvent("user-login")), window.dispatchEvent(new CustomEvent("user-login-success", {
        detail: pt ? {
          token: Z,
          ...pt,
          userInfo: pt
        } : {
          token: Z
        }
      }))
    },
    xt = async () => st || (st = (async () => {
      const Z = new URLSearchParams(window.location.search);
      let pt = Z.get("token");
      if (!pt || !pt.trim()) try {
        pt = sessionStorage.getItem(yd) || ""
      } catch {
        pt = ""
      }
      if (pt && pt.trim()) {
        const Et = pt.trim();
        try {
          localStorage.setItem("authToken", Et);
          try {
            sessionStorage.setItem(yd, Et)
          } catch {}
          $r(), Ie();
          let Mt = null,
            Qe = null;
          for (let j = 0; j < 3; j++) try {
            if (j > 0 && (await new Promise(Ee => setTimeout(Ee, 300 * j)), $r()), Mt = await zl({
                force: !0
              }), Mt) break
          } catch (Ee) {
            if (Qe = Ee, console.warn(`微信登录验证第${j+1}次尝试失败:`, Ee), ((Ee == null ? void 0 : Ee.code) === 999 || Ee != null && Ee.isAuthPrompt) && !localStorage.getItem("authToken")) break
          }
          if (Mt) {
            Be(Et, Mt), console.log("微信授权登录成功，token已验证:", Et.substring(0, 20) + "..."), A.success("登录成功");
            return
          }
          if (localStorage.getItem("authToken") === Et) {
            Be(Et, null), A.success("登录成功"), zl({
              force: !0
            }).catch(() => {});
            return
          }
          throw Qe || new Error("获取用户信息失败")
        } catch (Mt) {
          console.error("处理微信登录回调失败:", Mt);
          try {
            sessionStorage.removeItem(yd)
          } catch {}
          A.error("登录处理失败，请重试")
        }
      } else Z.has("token") && Ie()
    })().finally(() => {
      st = null
    }), st), Yt = () => {
      B()
    }, Ye = () => {
      typeof window < "u" && window.innerWidth <= 768 ? s.push("/wappay").catch(() => {}) : K()
    }, va = () => {
      $.value = !0
    }, Ea = () => ne(), ft = () => ne();
  return Ll(() => {
    window.addEventListener("open-login-dialog", Yt), window.addEventListener("go-open-vip", Ye), window.addEventListener("user-login", Ea), window.addEventListener("user-login-success", Ea), window.addEventListener("user-logout", ft), it(), yt();
    const Z = xt();
    Promise.resolve(Z).finally(() => {
      ne();
      try {
        const pt = (localStorage.getItem("inviteCode") || "").trim(),
          Et = !!localStorage.getItem("authToken");
        pt && !Et && n.path === "/" && !N.value && !i() && ($.value = !0)
      } catch {}
    }), s.afterEach(pt => {
      var Et;
      Sa.value = !1, typeof document < "u" && document.body && (document.body.style.overflow = "", document.body.classList.remove("el-popup-parent--hidden"), (Et = document.documentElement) == null || Et.classList.remove("page-scroll-lock")), setTimeout(() => {
        var ht;
        const Mt = new URLSearchParams(window.location.search).has("token");
        if ((ht = pt.query) != null && ht.token || Mt) {
          xt();
          return
        }
        const Qe = o(pt.query.invite) || o(pt.query.inivite),
          j = o(pt.query.cdk),
          Ee = !!j;
        if (Qe) {
          localStorage.setItem("inviteCode", Qe);
          const jt = !!localStorage.getItem("authToken");
          pt.path === "/" && !jt && !Ee && !i() && ($.value = !0)
        }
        if (j) {
          wg(j);
          const jt = !!localStorage.getItem("authToken");
          pt.path === "/" && !jt && !i() && (R.value || (R.value = !0, O.value = !0, N.value = !0))
        }
      }, 50)
    }), T = pt => {
      pt != null && pt.persisted && xt().finally(() => {
        ne()
      })
    }, window.addEventListener("pageshow", T)
  }), Zl(() => {
    window.removeEventListener("open-login-dialog", Yt), window.removeEventListener("go-open-vip", Ye), window.removeEventListener("user-login", Ea), window.removeEventListener("user-login-success", Ea), window.removeEventListener("user-logout", ft), T && (window.removeEventListener("pageshow", T), T = null)
  }), (Z, pt) => {
    const Et = Fn("router-view");
    return c(), v("div", hT, [J.value ? (c(), ye(sI, {
      key: 0,
      selectedType: _.value,
      useInternalLogin: !0,
      "external-mobile-control": ee.value,
      "mobile-open": P(Sa),
      onUserCommand: je,
      onOpenRecharge: K,
      onOpenLogin: B,
      onToggleMobileMenu: pt[0] || (pt[0] = Mt => Sa.value = !P(Sa)),
      onCloseMobileMenu: pt[1] || (pt[1] = Mt => Sa.value = !1)
    }, null, 8, ["selectedType", "external-mobile-control", "mobile-open"])) : M("", !0), ie.value ? (c(), ye(ei, {
      key: 1,
      title: Ae.value,
      "is-logged-in": F.value,
      "user-info": Y.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: pt[2] || (pt[2] = Mt => Sa.value = !0),
      onLoginClick: B,
      onCommand: E
    }, null, 8, ["title", "is-logged-in", "user-info", "show-mobile-menu"])) : M("", !0), (c(), ye(Et, {
      key: u.value
    })), x.value ? (c(), ye(ri, {
      key: 2,
      class: "global-floating-buttons",
      onOpenRecharge: K,
      onOpenLogin: B
    })) : M("", !0), C.value ? (c(), ye(jE, {
      key: 3
    })) : M("", !0), a(Wn, {
      modelValue: V.value,
      "onUpdate:modelValue": pt[3] || (pt[3] = Mt => V.value = Mt)
    }, null, 8, ["modelValue"]), a(y6, {
      modelValue: N.value,
      "onUpdate:modelValue": pt[4] || (pt[4] = Mt => N.value = Mt),
      onConfirm: va
    }, null, 8, ["modelValue"]), a(no, {
      modelValue: $.value,
      "onUpdate:modelValue": pt[5] || (pt[5] = Mt => $.value = Mt),
      onLoginSuccess: W
    }, null, 8, ["modelValue"]), a(_6, {
      modelValue: De.value,
      "onUpdate:modelValue": pt[6] || (pt[6] = Mt => De.value = Mt),
      email: Q.value,
      onGoBind: we,
      onDismiss: te
    }, null, 8, ["modelValue", "email"]), a(I6, {
      modelValue: ae.value,
      "onUpdate:modelValue": pt[7] || (pt[7] = Mt => ae.value = Mt),
      phone: me.value,
      onGoPassword: _e,
      onGoWechat: xe,
      onDismiss: de
    }, null, 8, ["modelValue", "phone"]), a($6, {
      modelValue: Ce.value,
      "onUpdate:modelValue": pt[8] || (pt[8] = Mt => Ce.value = Mt),
      "expiry-text": Re.value,
      "days-left": nt.value,
      onGoRenew: ct,
      onDismiss: rt
    }, null, 8, ["modelValue", "expiry-text", "days-left"]), a(eT), a(pT)])
  }
}
