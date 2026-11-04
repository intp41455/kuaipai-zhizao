// module: Aisousuo
// extracted from 02-index-8bb27f01.js.js @ 1732159
{
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
