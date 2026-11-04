// module: Generate
// extracted from 02-index-8bb27f01.js.js @ 601550
{
  const o = p(1),
    i = fn(),
    n = ln(),
    s = p(!1),
    u = p(!1),
    d = p(!1),
    f = p(0),
    y = p(window.innerWidth <= 768),
    w = p(!!localStorage.getItem("authToken")),
    S = p({}),
    z = p(!0),
    x = p(!1),
    C = p(""),
    V = be => {
      if (!be) return 0;
      let he = 0,
        kt = 0;
      const Bt = Array.from(be);
      for (; kt < Bt.length;) {
        const Ze = Bt[kt],
          Wt = Ze.charCodeAt(0);
        if (Wt >= 19968 && Wt <= 40959) he += 1, kt += 1;
        else if (Wt >= 48 && Wt <= 57) {
          let aa = 0;
          for (; kt < Bt.length && Bt[kt].charCodeAt(0) >= 48 && Bt[kt].charCodeAt(0) <= 57;) aa++, kt++;
          he += Math.ceil(aa / 2)
        } else if (Wt >= 55296 && Wt <= 56319 && kt + 1 < Bt.length) {
          const aa = Bt[kt + 1].charCodeAt(0);
          if (aa >= 56320 && aa <= 57343) {
            Ze + Bt[kt + 1];
            const xa = (Wt - 55296) * 1024 + (aa - 56320) + 65536;
            (xa >= 127744 && xa <= 129535 || xa >= 128512 && xa <= 128591 || xa >= 128640 && xa <= 128767 || xa >= 9728 && xa <= 9983 || xa >= 9984 && xa <= 10175 || xa >= 127456 && xa <= 127487) && (he += 1), kt += 2
          } else kt += 1
        } else(Wt >= 127744 && Wt <= 129535 || Wt >= 9728 && Wt <= 9983 || Wt >= 9984 && Wt <= 10175) && (he += 1), kt += 1
      }
      return Math.ceil(he)
    },
    $ = be => {
      const he = be.target.value;
      if (V(he) > 20) {
        let Bt = he.length;
        for (let Ze = he.length; Ze >= 0; Ze--) {
          const Wt = he.substring(0, Ze);
          if (V(Wt) <= 20) {
            Bt = Ze;
            break
          }
        }
        F.value.title = he.substring(0, Bt), be.target.value = F.value.title
      }
    },
    N = () => {
      const be = C.value;
      if (V(be) > 20) {
        let kt = be.length;
        for (let Bt = be.length; Bt >= 0; Bt--) {
          const Ze = be.substring(0, Bt);
          if (V(Ze) <= 20) {
            kt = Bt;
            break
          }
        }
        C.value = be.substring(0, kt)
      }
    },
    T = p(!1),
    R = p(!1),
    O = p(0),
    J = p("正在生成大纲..."),
    ee = p(!1),
    ie = 2 * Math.PI * 52,
    Ae = Le(() => ie - O.value / 100 * ie),
    F = p({
      title: "",
      noteType: "分享",
      wordCount: "800",
      titleMode: "aiNew",
      contentOptions: ["addEmoji", "addHashtag", "filterBannedWords", "filterMarketingWords"]
    }),
    Y = p(!1),
    ne = p(!1),
    De = p(!1),
    Q = p(null),
    re = be => {
      Q.value = be
    },
    b = () => {
      Q.value = null
    },
    te = p({
      industry: "",
      ageMode: "any",
      ageRange: [18, 30],
      targetGroup: "",
      painPoints: "",
      solution: "",
      notes: ""
    }),
    we = p(!1),
    ae = p([]),
    me = [{
      id: "demo-1",
      title: "秋季穿搭灵感速览",
      image: "https://picsum.photos/seed/generate-demo-1/600/800",
      category: "穿搭"
    }, {
      id: "demo-2",
      title: "早餐搭配一周不重样",
      image: "https://picsum.photos/seed/generate-demo-2/600/800",
      category: "美食"
    }, {
      id: "demo-3",
      title: "居家健身塑形计划",
      image: "https://picsum.photos/seed/generate-demo-3/600/800",
      category: "健身"
    }, {
      id: "demo-4",
      title: "职场通勤妆容教程",
      image: "https://picsum.photos/seed/generate-demo-4/600/800",
      category: "美妆"
    }, {
      id: "demo-5",
      title: "旅行摄影构图技巧",
      image: "https://picsum.photos/seed/generate-demo-5/600/800",
      category: "摄影"
    }, {
      id: "demo-6",
      title: "效率工作台布置灵感",
      image: "https://picsum.photos/seed/generate-demo-6/600/800",
      category: "生活"
    }],
    ce = ["小雨的日常", "阳光宝贝", "小猫咪爱吃鱼", "咖啡不加糖", "午后时光", "星星点灯", "月亮不睡", "爱吃甜食的猫", "周末宅家", "夏日清风", "秋日私语", "冬日暖阳", "春天的风", "夏天的雨", "秋天的叶", "追风少年", "青春无敌", "时光荏苒", "岁月如歌", "梦想家"],
    ue = p(!1),
    U = p({
      title: "",
      content: "",
      tags: [],
      images: [],
      editTime: "",
      comments: []
    }),
    de = p({
      name: "",
      avatar: ""
    }),
    _e = Le(() => ({
      ...U.value,
      user: de.value
    })),
    xe = () => {
      const be = Math.floor(Math.random() * ce.length);
      return {
        name: ce[be],
        avatar: `https://picsum.photos/seed/generate-user-${be}-${Date.now()}/40/40`
      }
    },
    Ce = () => {
      let be = xe();
      return S.value && (S.value.nickname || S.value.avatar) && (be = {
        name: S.value.nickname || be.name,
        avatar: S.value.avatar || Xl || be.avatar
      }), be.avatar || (be.avatar = Xl), be
    },
    Re = be => {
      const he = be ? new Date(be) : new Date;
      if (Number.isNaN(he.getTime())) return Re(Date.now());
      const kt = he.getFullYear(),
        Bt = String(he.getMonth() + 1).padStart(2, "0"),
        Ze = String(he.getDate()).padStart(2, "0");
      return `${kt}-${Bt}-${Ze}`
    },
    nt = be => {
      const he = [`最近很多人都在问${be}，今天整理了一份实用心得。

01 前期准备
- 明确目标
- 梳理要点
- 准备素材

02 详细步骤
- 从基础开始拆解
- 每一步记录体会
- 遇到问题及时调整

03 复盘总结
- 提炼关键经验
- 形成可复制的方法
- 持续优化更新

希望对你有帮助，记得收藏点赞哦～`, `聊聊${be}这件事，我常用的思路是这样的：

第一部分：核心逻辑
- 为什么要做
- 能解决什么问题
- 最关键的价值点

第二部分：实操方法
- 具体步骤拆解
- 需要注意的细节
- 推荐的配套工具

第三部分：进阶建议
- 如何提升效果
- 可以延伸的方向
- 常见误区提醒

欢迎在评论区交流你的经验～`, `${be}这个主题我实践了很多次，总结出一套锦囊：

✔ 关键步骤
1. 前期调研
2. 方案设计
3. 复盘优化

✔ 实用技巧
- 保持节奏感
- 善用工具提高效率
- 及时记录灵感

✔ 心得分享
坚持输出是核心，只有沉淀方法论才能持续成长。

如果觉得有收获，欢迎关注继续一起探索。`];
      return he[Math.floor(Math.random() * he.length)]
    },
    tt = (be = []) => {
      const he = be.map(Ze => String(Ze || "").replace(/^#/, "").trim()).filter(Boolean),
        kt = Array.from(new Set(he)),
        Bt = ["干货分享", "实用技巧", "经验总结", "效率提升", "客观测评", "避坑指南", "入门必看", "日常养成", "灵感收藏", "必备清单"].filter(Ze => !kt.includes(Ze));
      for (; kt.length < 6 && Bt.length > 0;) kt.push(Bt.shift());
      return kt.slice(0, 8)
    },
    qe = be => {
      var kt;
      if (!be) return "";
      const he = [];
      return be.originalData && typeof be.originalData.desc == "string" && he.push(be.originalData.desc), typeof be.content == "string" && he.push(be.content), typeof be.note == "string" && he.push(be.note), typeof be.description == "string" && he.push(be.description), typeof be.desc == "string" && he.push(be.desc), Array.isArray(be.paragraphs) && he.push(be.paragraphs.join(`

`)), Array.isArray(be.sections) && he.push(be.sections.map(Bt => typeof Bt == "string" ? Bt : Bt && typeof Bt.text == "string" ? Bt.text : "").filter(Boolean).join(`

`)), Array.isArray(be.contents) && he.push(be.contents.join(`

`)), ((kt = he.find(Bt => Bt && Bt.trim())) == null ? void 0 : kt.trim()) || ""
    },
    Me = be => {
      if (!be) return [];
      const he = [];
      return ["tags", "hashtags", "topics", "tagList"].forEach(kt => {
        const Bt = be[kt];
        Array.isArray(Bt) && he.push(...Bt)
      }), typeof be.category == "string" && he.push(be.category), typeof be.subCategory == "string" && he.push(be.subCategory), he
    },
    rt = be => {
      const he = [];
      if (be != null && be.originalData && Array.isArray(be.originalData.images) && be.originalData.images.length > 0 && be.originalData.images.forEach(Bt => {
          if (Bt) {
            const Ze = Bt.startsWith("//") ? "https:" + Bt : Bt;
            he.push(Ze)
          }
        }), be != null && be.image && he.push(be.image), Array.isArray(be == null ? void 0 : be.images) && be.images.forEach(Bt => {
          if (Bt) {
            const Ze = Bt.startsWith("//") ? "https:" + Bt : Bt;
            he.push(Ze)
          }
        }), be != null && be.cover) {
        const Bt = be.cover.startsWith("//") ? "https:" + be.cover : be.cover;
        he.unshift(Bt)
      }
      const kt = Array.from(new Set(he.filter(Boolean)));
      if (!kt.length) {
        const Bt = encodeURIComponent((be == null ? void 0 : be.title) || (be == null ? void 0 : be.id) || "example");
        for (let Ze = 0; Ze < 3; Ze++) kt.push(`https://picsum.photos/seed/generate-${Bt}-${Ze}/600/800`)
      }
      return kt.slice(0, 3)
    },
    ct = be => rt(be)[0],
    E = be => Array.isArray(be) ? be.slice(0, 3).map((he, kt) => {
      const Bt = (he == null ? void 0 : he.text) || (he == null ? void 0 : he.content) || "";
      return Bt ? {
        user: (he == null ? void 0 : he.user) || (he == null ? void 0 : he.nickname) || `用户${kt+1}`,
        avatar: (he == null ? void 0 : he.avatar) || Xl,
        text: Bt,
        date: Re((he == null ? void 0 : he.date) || (he == null ? void 0 : he.createdAt) || Date.now()),
        replies: he == null ? void 0 : he.replies,
        pinned: !!(he != null && he.pinned)
      } : null
    }).filter(Boolean) : [],
    _ = be => {
      const he = (be == null ? void 0 : be.title) || "精选案例",
        kt = qe(be) || nt(he),
        Bt = tt(Me(be)),
        Ze = rt(be),
        Wt = Re((be == null ? void 0 : be.updatedAt) || (be == null ? void 0 : be.createdAt) || Date.now());
      return {
        title: he,
        content: kt,
        tags: Bt,
        images: Ze,
        editTime: Wt,
        comments: E(be == null ? void 0 : be.comments)
      }
    },
    je = be => {
      de.value = Ce(), U.value = _(be), ue.value = !0
    },
    K = be => {
      const he = be.slice();
      for (let kt = he.length - 1; kt > 0; kt--) {
        const Bt = Math.floor(Math.random() * (kt + 1));
        [he[kt], he[Bt]] = [he[Bt], he[kt]]
      }
      return he
    },
    B = async () => {
      var be;
      try {
        const he = await np({
          page: 1,
          size: 60,
          type_id: 0
        });
        let kt = [];
        he && typeof he == "object" && (Array.isArray(he.rows) ? kt = he.rows : Array.isArray((be = he.data) == null ? void 0 : be.rows) ? kt = he.data.rows : Array.isArray(he.data) ? kt = he.data : Array.isArray(he) && (kt = he)), kt = kt.filter(Wt => !!((Array.isArray(Wt.images) ? Wt.images : [])[0] || Wt.cover || Wt.image || Wt.img));
        const Bt = K(kt).slice(0, vz);
        if (Bt.length > 0) {
          ae.value = Bt.map(Wt => {
            let aa = "";
            Wt.images && Array.isArray(Wt.images) && Wt.images.length > 0 && (aa = Wt.images[0], aa && aa.startsWith("//") && (aa = "https:" + aa)), aa || (aa = Wt.cover || Wt.image || Wt.img || ""), aa && aa.startsWith("//") && (aa = "https:" + aa), aa || (aa = `https://picsum.photos/seed/${Wt.id||Date.now()}/600/800`);
            const xa = Wt.first_name || Wt.second_name || Wt.type_name || "默认",
              Kt = [];
            if (Wt.desc) {
              const at = Wt.desc.match(/#[^#\s\n\r]+/g);
              at && Kt.push(...at.map(Fe => Fe.replace("#", "")))
            }
            return {
              id: Wt.id,
              title: Wt.title || "",
              image: aa,
              cover: aa,
              images: Array.isArray(Wt.images) ? Wt.images.map(at => at && at.startsWith("//") ? "https:" + at : at) : [aa],
              category: xa,
              desc: Wt.desc || Wt.content || "",
              content: Wt.desc || Wt.content || "",
              note: Wt.desc || Wt.content || "",
              description: Wt.desc || Wt.content || "",
              tags: Kt.length > 0 ? Kt : ["案例展示", "热门推荐"],
              originalData: Wt
            }
          });
          return
        }
        const Ze = await xv();
        Array.isArray(Ze) && Ze.length > 0 ? ae.value = Ze.map(Wt => {
          let aa = "";
          Wt.images && Array.isArray(Wt.images) && Wt.images.length > 0 && (aa = Wt.images[0], aa && aa.startsWith("//") && (aa = "https:" + aa)), aa || (aa = `https://picsum.photos/seed/${Wt.id||Date.now()}/600/800`);
          const xa = Wt.first_name || Wt.second_name || "默认",
            Kt = [];
          if (Wt.desc) {
            const at = Wt.desc.match(/#[^#\s\n\r]+/g);
            at && Kt.push(...at.map(Fe => Fe.replace("#", "")))
          }
          return {
            id: Wt.id,
            title: Wt.title || "",
            image: aa,
            cover: aa,
            images: Wt.images ? Wt.images.map(at => at && at.startsWith("//") ? "https:" + at : at) : [aa],
            category: xa,
            desc: Wt.desc || "",
            content: Wt.desc || "",
            note: Wt.desc || "",
            description: Wt.desc || "",
            tags: Kt.length > 0 ? Kt : ["案例展示", "热门推荐"],
            originalData: Wt
          }
        }) : ae.value = me
      } catch (he) {
        console.error("加载热门模板失败:", he), ae.value = me
      }
    }, W = async () => {
      var be;
      try {
        const he = localStorage.getItem("authToken");
        if (he && he.trim()) {
          await new Promise(kt => setTimeout(kt, 200));
          try {
            const kt = await zl();
            kt ? (S.value = {
              ...kt,
              nickname: kt.nickname || kt.nickName || "用户",
              avatar: kt.avatar || kt.avatarUrl || ""
            }, w.value = !0) : (S.value = {}, w.value = !1)
          } catch (kt) {
            if ((kt == null ? void 0 : kt.code) === 999 || ((be = kt == null ? void 0 : kt.response) == null ? void 0 : be.code) === 999) {
              console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), S.value = {}, w.value = !1;
              return
            }
            console.error("获取用户信息失败:", kt), S.value = {}, w.value = !1
          }
        } else S.value = {}, w.value = !1
      } catch (he) {
        console.error("检查登录状态失败:", he), w.value = !1, S.value = {}
      }
    }, Te = () => {
      y.value = window.innerWidth <= 768
    }, it = be => {
      be === "profile" ? (n.push("/user"), Sa.value = !1) : be === "wallet" ? (n.push("/user?tab=wallet"), Sa.value = !1) : be === "recharge" ? (st(), Sa.value = !1) : be === "logout" && (ui(), W(), Sa.value = !1)
    }, yt = () => !!localStorage.getItem("authToken"), st = () => {
      if (!yt()) {
        u.value = !0;
        return
      }
      s.value = !0
    }, Ie = be => {
      S.value = be, w.value = !0, u.value = !1, A.success("登录成功")
    }, pe = () => {
      s.value = !0, setTimeout(() => {
        window.dispatchEvent(new CustomEvent("switch-to-personal"))
      }, 100)
    }, Be = () => {}, xt = (be = 0) => {
      if (!y.value) return;
      const he = be > 0 ? 100 : 0;
      setTimeout(() => {
        Da(() => {
          const kt = document.querySelector(".generate-page-floating-buttons .floating-buttons");
          kt ? (kt.style.setProperty("bottom", "10px", "important"), kt.style.setProperty("top", "auto", "important"), kt.style.setProperty("right", "10px", "important"), kt.style.setProperty("transform", "none", "important"), kt.style.setProperty("position", "fixed", "important"), kt.style.setProperty("z-index", "50", "important")) : be < 5 && setTimeout(() => xt(be + 1), 200)
        })
      }, he)
    };
  Ll(async () => {
    document.title = "火兔工具箱_单篇大字报图文", localStorage.getItem("generate_useCustomExtra") === "true" && !F.value.contentOptions.includes("customExtra") && F.value.contentOptions.push("customExtra"), Qe(), va(), await B(), Te(), await W(), window.addEventListener("resize", Te), window.addEventListener("resize", xt), window.addEventListener("scroll", xt), window.addEventListener("user-logout", W), window.addEventListener("user-login-success", W);
    const he = () => {
      xt(), setTimeout(() => xt(), 200), setTimeout(() => xt(), 500), setTimeout(() => xt(), 1e3)
    };
    setTimeout(he, 100), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
      setTimeout(he, 100)
    }) : setTimeout(he, 100), setTimeout(() => {
      Da(() => {
        const kt = document.querySelector(".generate-page-floating-buttons .floating-buttons");
        if (kt) {
          const Bt = new MutationObserver(() => {
            xt()
          });
          Bt.observe(kt, {
            attributes: !0,
            attributeFilter: ["class"]
          }), window.generatePageFloatingButtonObserver = Bt
        }
      })
    }, 200)
  }), oa(() => i.query, () => {
    va()
  }, {
    deep: !0
  }), Zl(() => {
    window.removeEventListener("resize", Te), window.removeEventListener("resize", xt), window.removeEventListener("scroll", xt), window.removeEventListener("user-logout", W), window.removeEventListener("user-login-success", W), window.generatePageFloatingButtonObserver && (window.generatePageFloatingButtonObserver.disconnect(), window.generatePageFloatingButtonObserver = null)
  });
  const Yt = p([{
      id: 1,
      name: "单篇大字报图文",
      icon: MV
    }, {
      id: 14,
      name: "批量大字报图文",
      icon: OV
    }, {
      id: 2,
      name: "AI灵感参考",
      icon: BV
    }, {
      id: 4,
      name: "文案模板",
      icon: nb
    }, {
      id: 3,
      name: "我的图文作品",
      icon: NV
    }, {
      id: 15,
      name: "超级工具箱",
      icon: Sg
    }, {
      id: 16,
      name: "运营资料包",
      icon: ob
    }, {
      id: 17,
      name: "素材资料包",
      icon: zd
    }]),
    Ye = Le(() => {
      const be = Yt.value.find(he => he.id === o.value);
      return be ? be.name : "毕业论文"
    }),
    va = () => {
      if (i.query) {
        if (i.query.title && (F.value.title = String(i.query.title)), i.query.noteType && (F.value.noteType = String(i.query.noteType)), i.query.wordCount && (F.value.wordCount = String(i.query.wordCount)), i.query.titleMode && (F.value.titleMode = String(i.query.titleMode)), i.query.contentOptions) try {
          const be = JSON.parse(String(i.query.contentOptions));
          if (Array.isArray(be) && (F.value.contentOptions = be, be.includes("customExtra") && i.query.customExtra)) try {
            const he = JSON.parse(String(i.query.customExtra));
            he && typeof he == "object" && (te.value = {
              industry: he.industry || "",
              ageMode: he.ageMode || "any",
              ageRange: Array.isArray(he.ageRange) ? he.ageRange : [18, 30],
              targetGroup: he.targetGroup || "",
              painPoints: he.painPoints || "",
              solution: he.solution || "",
              notes: he.notes || ""
            }, F.value.customExtra = {
              ...te.value
            }, j())
          } catch (he) {
            console.error("解析customExtra失败:", he)
          }
        } catch (be) {
          console.error("解析contentOptions失败:", be)
        }
        if (i.query.customExtra) try {
          const be = JSON.parse(String(i.query.customExtra));
          be && typeof be == "object" && (te.value = {
            industry: be.industry || "",
            ageMode: be.ageMode || "any",
            ageRange: Array.isArray(be.ageRange) ? be.ageRange : [18, 30],
            targetGroup: be.targetGroup || "",
            painPoints: be.painPoints || "",
            solution: be.solution || "",
            notes: be.notes || ""
          }, F.value.contentOptions.includes("customExtra") && (F.value.customExtra = {
            ...te.value
          }), j())
        } catch (be) {
          console.error("解析customExtra失败:", be)
        }
      }
    };
  va();
  const Ea = async () => {
    var he, kt, Bt;
    if (T.value || R.value) return;
    R.value = !0;
    try {
      if (!yt())
        if (y.value) {
          u.value = !0;
          return
        } else {
          u.value = !0;
          return
        } if (!z.value) {
        A.warning("请先同意平台条款");
        return
      }
      if (!F.value.title) {
        A.warning("请输入文章标题");
        return
      }
      if ((he = F.value.contentOptions) != null && he.includes("customExtra")) try {
        await $v(((kt = te.value) == null ? void 0 : kt.industry) || "", {
          onEdit: () => {
            Y.value = !0
          }
        })
      } catch {
        return
      }
      await W()
    } finally {
      R.value = !1
    }
    if (Number(((Bt = S.value) == null ? void 0 : Bt.create_points) ?? 0) < 1) {
      f.value = 1, d.value = !0;
      return
    }
    T.value = !0, O.value = 0, ee.value = !1, J.value = "正在准备...";
    let be = !1;
    try {
      const Ze = {
        type: 1,
        titleMode: F.value.titleMode === "useKeyword" ? "old" : "new",
        title: F.value.title || "",
        noteType: F.value.noteType || "分享",
        wordCount: F.value.wordCount || "fanwei",
        contentOptions: F.value.contentOptions || []
      };
      F.value.desc && (Ze.desc = F.value.desc), F.value.contentOptions.includes("customExtra") && (Ze.customExtra = {
        industry: te.value.industry || "",
        ageMode: te.value.ageMode || "any",
        ageRange: te.value.ageRange || [18, 30],
        targetGroup: te.value.targetGroup || "",
        painPoints: te.value.painPoints || "",
        solution: te.value.solution || "",
        notes: te.value.notes || ""
      }), Q.value && (Ze.persona = $i(qd(Q.value))), Ze.customExtra && (Ze.customExtra = qi(Ze.customExtra)), (() => {
        J.value = "正在生成标题...";
        const Kt = () => {
          if (O.value < 33 && !be) O.value += 1, setTimeout(Kt, 30);
          else if (O.value >= 33 && !be) {
            O.value = 33, J.value = "正在生成内容...";
            const at = () => {
              if (O.value < 66 && !be) O.value += 1, setTimeout(at, 30);
              else if (O.value >= 66 && !be) {
                O.value = 66, J.value = "正在生成配图...";
                const Fe = () => {
                  O.value < 99 && !be ? (O.value += 1, setTimeout(Fe, 30)) : O.value >= 99 && !be && (O.value = 99, be = !0)
                };
                Fe()
              }
            };
            at()
          }
        };
        Kt()
      })();
      const aa = await bf(Ze),
        xa = typeof aa == "string" ? aa : (aa == null ? void 0 : aa.id) || (aa == null ? void 0 : aa.workId) || aa;
      if (!xa) throw new Error("生成失败，未返回作品ID");
      O.value = 100, J.value = "生成完成！", await new Promise(Kt => setTimeout(Kt, 500)), T.value = !1, ft(xa), n.push(`/note/${xa}`), A.success("生成成功！")
    } catch (Ze) {
      console.error("生成失败:", Ze), T.value = !1, O.value = 0;
      const Wt = Ze.message || Ze.msg || "";
      Wt.includes("点数不足") || Wt.includes("余额不足") || Wt.includes("创作点数不足") ? d.value = !0 : A.error("生成失败：" + Wt || "未知错误")
    }
  }, ft = be => {
    try {
      const he = new Date,
        kt = `${he.getFullYear()}-${String(he.getMonth()+1).padStart(2,"0")}-${String(he.getDate()).padStart(2,"0")} ${String(he.getHours()).padStart(2,"0")}:${String(he.getMinutes()).padStart(2,"0")}:${String(he.getSeconds()).padStart(2,"0")}`,
        Bt = Date.now();
      return console.log("已保存生成记录，workId:", be), be
    } catch (he) {
      return console.error("保存生成记录失败:", he), null
    }
  }, Z = async () => {
    try {
      if (navigator.clipboard) try {
        const kt = await navigator.clipboard.readText();
        if (kt) {
          F.value.title = kt.trim(), A.success("粘贴成功");
          return
        } else {
          A.warning("剪贴板为空");
          return
        }
      } catch (kt) {
        console.log("Clipboard API 失败，尝试 execCommand:", kt)
      }
      const be = document.createElement("textarea");
      if (document.body.appendChild(be), be.focus(), be.select(), document.execCommand("paste") && be.value) F.value.title = be.value.trim(), A.success("粘贴成功");
      else {
        A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
        const kt = document.querySelector(".keyword-input-row input");
        kt && (kt.focus(), kt.select())
      }
      document.body.removeChild(be)
    } catch (be) {
      console.error("粘贴失败:", be), A.warning("粘贴失败，请手动粘贴"), await Da();
      const he = document.querySelector(".keyword-input-row input");
      if (he) {
        he.focus();
        try {
          he.select()
        } catch (kt) {
          console.log("select 失败:", kt)
        }
      }
    }
  }, pt = async () => {
    try {
      const be = await navigator.clipboard.readText();
      C.value = be ?? ""
    } catch (be) {
      console.error(be)
    }
  }, Et = () => {
    F.value.title = C.value, x.value = !1
  };
  oa(x, be => {
    be && (C.value = F.value.title || "")
  });
  const Mt = () => {
    !te.value.industry && !te.value.targetGroup && !te.value.painPoints && Qe(), Y.value = !0
  };
  oa(() => F.value.contentOptions.slice(), (be, he) => {
    const kt = be.includes("customExtra"),
      Bt = Array.isArray(he) ? he.includes("customExtra") : !1;
    kt ? localStorage.setItem("generate_useCustomExtra", "true") : localStorage.setItem("generate_useCustomExtra", "false"), kt && !Bt && !te.value.industry && !te.value.targetGroup && !te.value.painPoints && Qe();
    const Wt = ["filterBannedWords", "filterMarketingWords"].filter(aa => !be.includes(aa));
    Wt.length > 0 && (F.value.contentOptions = [...be, ...Wt])
  });
  const Qe = () => {
      try {
        const be = localStorage.getItem(sy);
        if (be) {
          const he = JSON.parse(be);
          te.value = {
            industry: he.industry || "",
            ageMode: he.ageMode || "any",
            ageRange: Array.isArray(he.ageRange) ? he.ageRange : [18, 30],
            targetGroup: he.targetGroup || "",
            painPoints: he.painPoints || "",
            solution: he.solution || "",
            notes: he.notes || ""
          }, we.value = !0
        } else we.value = !1
      } catch {
        we.value = !1
      }
    },
    j = () => {
      try {
        localStorage.setItem(sy, JSON.stringify(te.value)), we.value = !0
      } catch (be) {
        console.error("保存失败:", be)
      }
    },
    Ee = p(null),
    ht = be => {
      F.value.customExtra = {
        ...be
      }, we.value = !0, ne.value = !0, F.value.contentOptions.includes("customExtra") || F.value.contentOptions.push("customExtra"), Y.value = !1
    },
    jt = () => {
      ne.value = !1, we.value = !1, F.value.contentOptions = F.value.contentOptions.filter(be => be !== "customExtra")
    },
    ca = () => {
      Y.value = !1
    };
  return (be, he) => {
    var Nt;
    const kt = $l,
      Bt = No,
      Ze = bo,
      Wt = Kn,
      aa = yo,
      xa = ho,
      Kt = rs,
      at = Vo,
      Fe = xl,
      Ke = cn,
      et = Rl;
    return c(), v("div", UV, [a(ei, {
      title: "单篇大字报图文",
      "is-logged-in": w.value,
      "user-info": S.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: he[0] || (he[0] = Ut => Sa.value = !0),
      onLoginClick: he[1] || (he[1] = Ut => u.value = !0),
      onCommand: it
    }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), y.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: he[2] || (he[2] = Ut => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": y.value
      }])
    }, [M("", !0), ee.value ? M("", !0) : (c(), v("div", RV, [o.value === 1 ? (c(), v(Ue, {
      key: 0
    }, [he[24] || (he[24] = g(" 单篇大字报", -1)), he[25] || (he[25] = e("span", {
      class: "highlight-red"
    }, "图文", -1))], 64)) : (c(), v(Ue, {
      key: 1
    }, [g(h(Ye.value), 1)], 64))])), ee.value ? M("", !0) : (c(), v("div", jV, [a(os)])), ee.value ? M("", !0) : (c(), v("div", qV, [a(at, {
      model: F.value,
      size: "large",
      "label-width": y.value ? "80px" : void 0
    }, {
      default: l(() => [a(aa, {
        label: "模式:",
        required: ""
      }, {
        default: l(() => [a(Wt, {
          modelValue: F.value.titleMode,
          "onUpdate:modelValue": he[3] || (he[3] = Ut => F.value.titleMode = Ut)
        }, {
          default: l(() => [a(Ze, {
            value: "useKeyword"
          }, {
            default: l(() => [he[26] || (he[26] = e("span", {
              class: "radio-text"
            }, "原标题", -1)), a(Bt, {
              content: "勾选后，关键词将作为图文标题使用，不再进行AI生成新标题",
              placement: "top"
            }, {
              default: l(() => [a(kt, {
                class: "help-icon help-icon-top-right"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(Ze, {
            value: "aiNew"
          }, {
            default: l(() => [he[27] || (he[27] = e("span", {
              class: "radio-text"
            }, "AI生成新标题", -1)), a(Bt, {
              content: "勾选后，Ai将参考您提供的标题帮你生成一个新的标题",
              placement: "top"
            }, {
              default: l(() => [a(kt, {
                class: "help-icon help-icon-top-right"
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
      }), a(aa, {
        label: "标题:",
        required: ""
      }, {
        default: l(() => [e("div", FV, [e("div", WV, [el(e("input", {
          "onUpdate:modelValue": he[4] || (he[4] = Ut => F.value.title = Ut),
          placeholder: "请输入您的标题，如:教你制作简历模板",
          class: "simple-input",
          type: "text",
          onInput: $
        }, null, 544), [
          [En, F.value.title]
        ]), e("div", GV, h(V(F.value.title)) + "/20", 1)]), e("div", JV, [F.value.title ? (c(), v("div", {
          key: 1,
          class: "input-action-btn clear-action-btn",
          onClick: he[5] || (he[5] = Ut => F.value.title = "")
        }, [...he[29] || (he[29] = [e("span", {
          class: "action-text"
        }, "清空", -1)])])) : (c(), v("div", {
          key: 0,
          class: "input-action-btn paste-action-btn",
          onClick: Z
        }, [...he[28] || (he[28] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])]))])])]),
        _: 1
      }), a(aa, {
        label: "类型:",
        required: "",
        class: "note-type-form-item"
      }, {
        default: l(() => [a(Wt, {
          modelValue: F.value.noteType,
          "onUpdate:modelValue": he[6] || (he[6] = Ut => F.value.noteType = Ut),
          class: "note-type-radio-group"
        }, {
          default: l(() => [a(Ze, {
            value: "分享"
          }, {
            default: l(() => [...he[30] || (he[30] = [g("分享", -1)])]),
            _: 1
          }), a(Ze, {
            value: "攻略"
          }, {
            default: l(() => [...he[31] || (he[31] = [g("攻略", -1)])]),
            _: 1
          }), a(Ze, {
            value: "教程"
          }, {
            default: l(() => [...he[32] || (he[32] = [g("教程", -1)])]),
            _: 1
          }), a(Ze, {
            value: "电商"
          }, {
            default: l(() => [...he[33] || (he[33] = [g("电商", -1)])]),
            _: 1
          }), a(Ze, {
            value: "测评"
          }, {
            default: l(() => [...he[34] || (he[34] = [g("测评", -1)])]),
            _: 1
          }), a(Ze, {
            value: "干货"
          }, {
            default: l(() => [...he[35] || (he[35] = [g("干货", -1)])]),
            _: 1
          }), a(Ze, {
            value: "任意"
          }, {
            default: l(() => [...he[36] || (he[36] = [g("任意", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(aa, {
        label: "字数:",
        required: "",
        class: "word-count-form-item"
      }, {
        default: l(() => [a(Wt, {
          modelValue: F.value.wordCount,
          "onUpdate:modelValue": he[7] || (he[7] = Ut => F.value.wordCount = Ut),
          class: "word-count-radio-group"
        }, {
          default: l(() => [a(Ze, {
            value: "200"
          }, {
            default: l(() => [...he[37] || (he[37] = [g("200字左右", -1)])]),
            _: 1
          }), a(Ze, {
            value: "300"
          }, {
            default: l(() => [...he[38] || (he[38] = [g("300字左右", -1)])]),
            _: 1
          }), a(Ze, {
            value: "500"
          }, {
            default: l(() => [...he[39] || (he[39] = [g("500字左右", -1)])]),
            _: 1
          }), a(Ze, {
            value: "800"
          }, {
            default: l(() => [...he[40] || (he[40] = [g("800字左右", -1)])]),
            _: 1
          }), a(Ze, {
            value: "fanwei"
          }, {
            default: l(() => [...he[41] || (he[41] = [g("不限字数", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(aa, {
        label: "内容:",
        required: ""
      }, {
        default: l(() => [a(Kt, {
          modelValue: F.value.contentOptions,
          "onUpdate:modelValue": he[8] || (he[8] = Ut => F.value.contentOptions = Ut),
          class: "content-options-checkbox-group"
        }, {
          default: l(() => [a(xa, {
            value: "addTags"
          }, {
            default: l(() => [...he[42] || (he[42] = [g("引用标题", -1)])]),
            _: 1
          }), a(xa, {
            value: "addEmoji"
          }, {
            default: l(() => [...he[43] || (he[43] = [g("添加表情", -1)])]),
            _: 1
          }), a(xa, {
            value: "addHashtag"
          }, {
            default: l(() => [...he[44] || (he[44] = [g("添加话题", -1)])]),
            _: 1
          }), a(xa, {
            value: "filterBannedWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [he[45] || (he[45] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤敏感词", -1)), a(Bt, {
              content: "说明：本系统会自动检测常见的写作问题，帮你提升内容表达。",
              placement: "top"
            }, {
              default: l(() => [a(kt, {
                class: "filter-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(xa, {
            value: "filterMarketingWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [he[46] || (he[46] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤营销词", -1)), a(Bt, {
              content: "说明：本系统会识别口水句与冗余表达，帮你让内容更精炼。",
              placement: "top"
            }, {
              default: l(() => [a(kt, {
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
        }, 8, ["modelValue"]), e("span", {
          class: Pe(["pill-btn", {
            active: ne.value
          }]),
          onClick: Mt
        }, [a(kt, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", HV, [g(h(ne.value ? "已关联创作信息" : "关联创作信息"), 1), a(Bt, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...he[47] || (he[47] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a(kt, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: he[9] || (he[9] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), he[48] || (he[48] = e("span", {
          class: "suggest-hint"
        }, "（建议填）", -1))], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!Q.value
          }]),
          onClick: he[11] || (he[11] = Ut => De.value = !0)
        }, [a(kt, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", QV, [g(h(Q.value ? Q.value.name : "绑定人设"), 1), a(Bt, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...he[49] || (he[49] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(kt, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: he[10] || (he[10] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), he[50] || (he[50] = e("span", {
          class: "suggest-hint"
        }, "（建议填）", -1))], 2)]),
        _: 1
      })]),
      _: 1
    }, 8, ["model", "label-width"]), e("div", KV, [a(Bt, {
      content: (!z.value || !F.value.title) && !T.value ? "请您先输入内容，再点击按钮执行" : "",
      placement: "top",
      disabled: z.value && F.value.title || T.value || R.value
    }, {
      default: l(() => [a(Fe, {
        type: "primary",
        size: "large",
        class: "generate-btn",
        disabled: !z.value || !F.value.title || T.value || R.value,
        onClick: Ea
      }, {
        default: l(() => [g(h(T.value ? "生成中..." : "一键生成图文（消耗1）"), 1)]),
        _: 1
      }, 8, ["disabled"])]),
      _: 1
    }, 8, ["content", "disabled"]), he[51] || (he[51] = e("div", {
      class: "case-display-tip"
    }, "成品图文案例展示区", -1))]), ae.value.length > 0 ? (c(), v("div", YV, [e("div", XV, [(c(!0), v(Ue, null, gt(ae.value, Ut => (c(), v("div", {
      key: Ut.id || Ut.title,
      class: "example-card",
      onClick: Ge => je(Ut)
    }, [e("div", ez, [e("img", {
      src: ct(Ut),
      alt: Ut.title || "案例预览",
      class: "card-image"
    }, null, 8, tz), he[52] || (he[52] = e("div", {
      class: "card-hover-overlay"
    }, [e("div", {
      class: "hover-text-line2"
    }, "点击预览")], -1))])], 8, ZV))), 128))])])) : M("", !0), T.value ? (c(), v("div", az, [e("div", lz, [e("div", nz, [(c(), v("svg", oz, [e("circle", {
      class: "progress-ring-circle",
      stroke: "#8b5cf6",
      "stroke-width": "4",
      fill: "transparent",
      r: "52",
      cx: "60",
      cy: "60",
      style: Il({
        strokeDasharray: ie,
        strokeDashoffset: Ae.value
      })
    }, null, 4)])), e("div", iz, h(Math.round(O.value)) + "%", 1)]), e("div", sz, h(J.value), 1)])])) : M("", !0)]))], 2), a(Hr, {
      modelValue: ue.value,
      "onUpdate:modelValue": he[12] || (he[12] = Ut => ue.value = Ut),
      "is-mobile": y.value,
      data: _e.value,
      title: "案例图文预览"
    }, null, 8, ["modelValue", "is-mobile", "data"]), a(ri, {
      "recharge-type": "dialog",
      "distribution-link": "/user?tab=distribution",
      onOpenRecharge: st,
      onOpenLogin: he[13] || (he[13] = Ut => u.value = !0),
      class: "generate-page-floating-buttons"
    }), a(Os, {
      modelValue: te.value,
      "onUpdate:modelValue": he[14] || (he[14] = Ut => te.value = Ut),
      visible: Y.value,
      "onUpdate:visible": he[15] || (he[15] = Ut => Y.value = Ut),
      mode: "dialog",
      "is-mobile": y.value,
      onConfirm: ht,
      onCancel: ca,
      onClearHistory: jt,
      ref_key: "customExtraFormRef",
      ref: Ee
    }, null, 8, ["modelValue", "visible", "is-mobile"]), a(gc, {
      modelValue: De.value,
      "onUpdate:modelValue": he[16] || (he[16] = Ut => De.value = Ut),
      "bound-persona": Q.value,
      onBind: re,
      onUnbind: b
    }, null, 8, ["modelValue", "bound-persona"]), a(et, {
      modelValue: x.value,
      "onUpdate:modelValue": he[20] || (he[20] = Ut => x.value = Ut),
      title: "输入标题",
      width: y.value ? "90%" : "500px",
      center: "",
      class: "title-input-dialog"
    }, {
      footer: l(() => [a(Fe, {
        onClick: he[19] || (he[19] = Ut => x.value = !1)
      }, {
        default: l(() => [...he[55] || (he[55] = [g("取消", -1)])]),
        _: 1
      }), a(Fe, {
        type: "primary",
        onClick: Et
      }, {
        default: l(() => [...he[56] || (he[56] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", rz, [e("div", uz, [a(Ke, {
        modelValue: C.value,
        "onUpdate:modelValue": he[17] || (he[17] = Ut => C.value = Ut),
        placeholder: "请输入您的标题，如:教你制作简历模板",
        type: "text",
        size: "large",
        class: "dialog-title-input",
        onKeyup: gn(Et, ["enter"]),
        onInput: N
      }, null, 8, ["modelValue"]), e("div", cz, h(V(C.value)) + "/20", 1)]), e("div", dz, [C.value ? (c(), v("div", {
        key: 1,
        class: "dialog-action-btn clear-action-btn",
        onClick: he[18] || (he[18] = Ut => C.value = "")
      }, [...he[54] || (he[54] = [e("span", {
        class: "action-text"
      }, "清空", -1)])])) : (c(), v("div", {
        key: 0,
        class: "dialog-action-btn paste-action-btn",
        onClick: pt
      }, [...he[53] || (he[53] = [e("span", {
        class: "action-text"
      }, "粘贴", -1)])]))])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Wn, {
      modelValue: s.value,
      "onUpdate:modelValue": he[21] || (he[21] = Ut => s.value = Ut)
    }, null, 8, ["modelValue"]), a(no, {
      modelValue: u.value,
      "onUpdate:modelValue": he[22] || (he[22] = Ut => u.value = Ut),
      onLoginSuccess: Ie
    }, null, 8, ["modelValue"]), a(mc, {
      modelValue: d.value,
      "onUpdate:modelValue": he[23] || (he[23] = Ut => d.value = Ut),
      "current-points": (Nt = S.value) == null ? void 0 : Nt.create_points,
      "required-points": f.value,
      onRecharge: pe,
      onCancel: Be
    }, null, 8, ["modelValue", "current-points", "required-points"])])
  }
}
