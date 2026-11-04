// module: aiwenan
// extracted from 02-index-8bb27f01.js.js @ 1817912
{
  const o = ln(),
    i = fn(),
    n = ["quick", "oneLine", "rewrite"],
    s = () => {
      const ze = i.query && i.query.mode;
      return n.includes(ze) ? ze : "quick"
    },
    u = (ze, H = 2e3) => {
      if (ze == null) return "";
      let Lt = String(ze);
      return Lt = Lt.replace(/[\u200B-\u200D\uFEFF]/g, ""), Lt = Lt.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ""), Lt = Lt.replace(/\n{3,}/g, `

`), Lt = Lt.trim(), Lt.length > H && (Lt = Lt.slice(0, H)), Lt
    },
    d = new Set(["150", "300", "500", "800", "fanwei"]),
    f = new Set([300, 400, 500, 600, 700, 800, 900]),
    y = ze => {
      const H = String(ze ?? "").trim();
      return d.has(H) ? H : "800"
    },
    w = ze => {
      const H = Number(ze);
      return f.has(H) ? H : 800
    },
    S = ze => String(ze ?? "").trim() === "fanwei" ? "fanwei" : w(ze),
    z = ze => {
      var Ft;
      if (!ze) return !1;
      const H = Number(ze.status || ((Ft = ze.response) == null ? void 0 : Ft.status) || 0);
      if (H >= 500 && H <= 599) return !0;
      const Lt = String(ze.message || "");
      return !!(/服务器内部错误|服务器错误|请求失败 \(5\d\d/.test(Lt) || /network|timeout|load failed|failed to fetch/i.test(Lt))
    },
    x = async (ze, {
      retries: H = 1,
      delayMs: Lt = 1200
    } = {}) => {
      let Ft;
      for (let Rt = 0; Rt <= H; Rt++) try {
        return await ze()
      } catch (Ot) {
        if (Ft = Ot, Rt < H && z(Ot)) {
          await new Promise(Xt => setTimeout(Xt, Lt));
          continue
        }
        throw Ot
      }
      throw Ft
    }, C = p(window.innerWidth <= 768), V = () => {
      C.value = window.innerWidth <= 768
    }, $ = p(s()), N = p(""), T = p({
      title: "",
      copyType: "任意",
      wordCount: "800",
      contentOptions: ["filterBannedWords", "filterMarketingWords", "addEmoji", "addHashtag"]
    }), R = p({
      prompt: "",
      wordCount: 800
    }), O = p({
      inputMode: "text",
      link: "",
      reference: "",
      degree: "balanced",
      preserve: [],
      focus: [],
      style: [],
      brandEnabled: !1,
      brand: "",
      requirement: "",
      wordCount: "fanwei"
    }), J = [{
      value: "close",
      label: "贴近原文",
      desc: "轻度改写，结构与风格基本照搬，仅替换措辞去重"
    }, {
      value: "balanced",
      label: "适度改写",
      desc: "保留原意与结构，措辞句式大幅更换",
      recommend: !0
    }, {
      value: "heavy",
      label: "大幅重构",
      desc: "只借鉴选题与爆款框架，高度原创发挥"
    }], ee = [{
      value: "structure",
      label: "文章结构"
    }, {
      value: "hook",
      label: "开头钩子"
    }, {
      value: "tone",
      label: "语气风格"
    }, {
      value: "format",
      label: "排版格式"
    }, {
      value: "title",
      label: "标题套路"
    }, {
      value: "punchline",
      label: "金句热梗"
    }], ie = [{
      value: "sellingPoint",
      label: "突出卖点"
    }, {
      value: "price",
      label: "价格优惠"
    }, {
      value: "painPoint",
      label: "痛点共鸣"
    }, {
      value: "trust",
      label: "信任背书"
    }, {
      value: "scene",
      label: "使用场景"
    }, {
      value: "cta",
      label: "互动引导"
    }], Ae = [{
      value: "avoidSensitive",
      label: "避敏感词"
    }, {
      value: "avoidMarketing",
      label: "避极限词"
    }, {
      value: "colloquial",
      label: "更口语"
    }, {
      value: "professional",
      label: "更专业"
    }, {
      value: "concise",
      label: "更克制"
    }, {
      value: "emoji",
      label: "加表情"
    }, {
      value: "hashtag",
      label: "加话题"
    }], F = (ze, H) => {
      const Lt = O.value[ze];
      if (!Array.isArray(Lt)) return;
      const Ft = Lt.indexOf(H);
      Ft === -1 ? Lt.push(H) : Lt.splice(Ft, 1)
    }, Y = p(!1), ne = Le(() => {
      const ze = J.find(H => H.value === O.value.degree);
      return ze && ze.label || "适度改写"
    }), De = Le(() => {
      const ze = O.value,
        H = (Rt, Ot) => Rt.filter(Xt => (Ot || []).includes(Xt.value)).map(Xt => Xt.label),
        Lt = [...H(ee, ze.preserve), ...H(ie, ze.focus), ...H(Ae, ze.style)],
        Ft = (ze.brandEnabled ? ze.brand : "").trim();
      return Ft && Lt.push(`品牌：${Ft}`), (ze.requirement || "").trim() && Lt.push("含补充要求"), Lt
    }), Q = () => {
      O.value.degree = "balanced", O.value.preserve = [], O.value.focus = [], O.value.style = [], O.value.brandEnabled = !1, O.value.brand = "", O.value.requirement = ""
    }, re = p(!1), b = p(""), te = p(!1), we = p(!1), ae = p(!1), me = p(null), ce = p({
      industry: "",
      ageMode: "any",
      ageRange: [18, 30],
      targetGroup: "",
      painPoints: "",
      solution: "",
      notes: ""
    }), ue = p(!1), U = p(0), de = p("理解需求，正在创建标题"), _e = p(1), xe = p(0), Ce = p([]), Re = Le(() => Ce.value.length > 0);
  let nt = null;
  const tt = p(!1),
    qe = p(!1),
    Me = p(!1),
    rt = p(0),
    ct = Le(() => !!localStorage.getItem("authToken")),
    E = p({}),
    _ = ["写一条“早八通勤提神咖啡”推荐文案，语气轻松，结尾引导收藏。", "把“低糖酸奶”写成优质推荐文案，突出口感和配料干净。", "给“春季敏感肌修护面霜”写一条推荐文案，避免夸大承诺。"],
    je = Pb.flatMap(ze => ze.titles || []).map(ze => String(ze).replace(/^[“"'「『]+|[”"'」』]+$/g, "").trim()).filter(Boolean),
    K = ze => {
      const H = je,
        Lt = Math.min(ze, H.length),
        Ft = H.map((Rt, Ot) => Ot);
      for (let Rt = 0; Rt < Lt; Rt++) {
        const Ot = Rt + Math.floor(Math.random() * (Ft.length - Rt)),
          Xt = Ft[Rt];
        Ft[Rt] = Ft[Ot], Ft[Ot] = Xt
      }
      return Ft.slice(0, Lt).map(Rt => H[Rt])
    },
    B = p([]),
    W = p(null),
    Te = async () => {
      if ($.value !== "quick") return;
      if (window.innerWidth < 1025) {
        B.value = K(9);
        return
      }
      B.value.length || (B.value = K(Sy * 4), await Da());
      const ze = W.value;
      if (!ze) return;
      const H = ze.clientHeight,
        Lt = ze.querySelector(".tip-item"),
        Ft = (Lt ? Lt.getBoundingClientRect().height : 41) + 8,
        Rt = H > 0 && Ft > 0 ? Math.max(3, Math.min(10, Math.floor((H + 8) / Ft))) : 4;
      B.value = K(Rt * Sy)
    }, it = [300, 400, 500, 600, 700, 800, 900], yt = Le(() => $.value === "quick" ? "标题生成文案" : $.value === "oneLine" ? "一句话文案" : "一键仿写文案"), st = Le(() => $.value === "quick" ? !!(T.value.title || "").trim() : $.value === "oneLine" ? !!(R.value.prompt || "").trim() : !!(O.value.reference || "").trim()), Ie = async () => {
      qe.value = !1, await pe()
    }, pe = async () => {
      try {
        if (!localStorage.getItem("authToken")) {
          E.value = {};
          return
        }
        const H = await zl();
        E.value = H || {}, window.dispatchEvent(new CustomEvent("localStorage-change", {
          detail: {
            key: "userInfo",
            data: H
          }
        }))
      } catch (ze) {
        console.warn("刷新用户信息失败:", ze)
      }
    }, Be = () => {
      tt.value = !0, setTimeout(() => {
        window.dispatchEvent(new CustomEvent("switch-to-personal"))
      }, 100)
    }, xt = ze => {
      const H = ze && typeof ze == "object" ? ze : {},
        Lt = {
          industry: H.industry || "",
          ageMode: H.ageMode || "any",
          ageRange: Array.isArray(H.ageRange) ? H.ageRange : [18, 30],
          targetGroup: H.targetGroup || "",
          painPoints: H.painPoints || "",
          solution: H.solution || "",
          notes: H.notes || ""
        };
      return Lt.ageMode !== "range" && delete Lt.ageRange, Lt
    }, Yt = ze => {
      ce.value = {
        ...ce.value,
        ...ze || {}
      }, te.value = !0
    }, Ye = () => {
      te.value = !1
    }, va = ze => {
      me.value = ze
    }, Ea = () => {
      me.value = null
    }, ft = ze => {
      const H = (ze || "").trim();
      return H ? (H.split(/\r?\n/).map(Ft => Ft.trim()).find(Boolean) || "").slice(0, 50) : ""
    }, Z = async (ze = 1) => {
      var H;
      if (!ct.value) return qe.value = !0, !1;
      await pe();
      {
        const Lt = Math.max(1, Number(ze) || 1);
        if (Number(((H = E.value) == null ? void 0 : H.create_points) ?? 0) < Lt) return rt.value = Lt, Me.value = !0, !1
      }
      try {
        await La.confirm(`本次创作将消耗 ${ze} 点数，是否继续？`, "确认点数消耗", {
          confirmButtonText: "继续",
          cancelButtonText: "取消",
          type: "warning",
          center: !0
        })
      } catch {
        return !1
      }
      return !0
    }, pt = () => {
      if (!te.value) return null;
      const ze = xt(ce.value),
        H = ["industry", "targetGroup", "painPoints", "solution", "notes"].some(Rt => String(ze[Rt] || "").trim()),
        Lt = ze.ageMode === "range" && Array.isArray(ze.ageRange) && ze.ageRange.length === 2;
      return !H && !Lt ? null : qi(ze) || null
    }, Et = ze => {
      let H;
      ze < 35 ? H = "理解需求，正在创建标题" : ze < 65 ? H = "正在创建内容" : ze < 90 ? H = "正在生成话题" : H = "即将完成", _e.value > 1 && xe.value > 0 ? de.value = `${H}（第 ${xe.value}/${_e.value} 篇）` : de.value = H
    }, Mt = () => {
      nt && (clearInterval(nt), nt = null)
    }, Qe = (ze = 1) => {
      Mt(), U.value = 1, Et(U.value);
      const H = Math.max(120, 300 * Math.max(1, Number(ze) || 1));
      nt = setInterval(() => {
        if (!ue.value) {
          Mt();
          return
        }
        U.value >= 99 || (U.value = Math.min(99, U.value + 1), Et(U.value))
      }, H)
    }, j = p(!1), Ee = () => {
      j.value = !1, Bt()
    }, ht = {
      close: "贴近原文改写：保持原文的整体结构、段落顺序与表达框架基本不变，主要通过替换近义词、微调语序与句式来改写，使成文在信息和风格上与原文高度接近；改动以满足平台原创度/查重要求为限，不做额外发挥。",
      balanced: "适度改写：保留原文的核心信息与主体结构，对措辞、句式和表达方式做较大幅度的更换与重组，使成文读起来是一篇全新的文案、与原文字面明显不同，但核心观点与卖点保持一致。",
      heavy: "大幅重构：只借鉴原文的选题角度、核心立意与爆款框架，对结构、逻辑、措辞与表达重新组织、自由原创，可调整段落顺序与论述方式，最终产出一篇高度原创的全新文案。"
    }, jt = {
      structure: "沿用原文的整体结构与段落推进顺序。",
      hook: "沿用原文开头的钩子写法与切入角度。",
      tone: "延续原文的语气与行文风格。",
      format: "沿用原文的排版形式，如表情符号、分点列举、空行与断句节奏等。",
      title: "沿用原文标题的句式套路与制造吸引力的方式。",
      punchline: "保留并复用原文中的金句、网络热梗等高光表达。"
    }, ca = {
      sellingPoint: "重点突出核心卖点与差异化优势。",
      price: "突出价格、优惠力度或性价比信息。",
      painPoint: "先精准戳中目标人群的痛点、引发共鸣，再顺势给出解决方案。",
      trust: "补充可信的背书细节，如真实体验、具体数据、前后对比或资质证明等。",
      scene: "结合具体的使用场景来描写，增强画面感与代入感。",
      cta: "在结尾自然地加入互动引导或行动号召。"
    }, be = {
      avoidSensitive: "规避平台敏感词与容易触发违规的表达。",
      avoidMarketing: "规避“最、第一、国家级、顶级”等绝对化与极限营销用语。",
      colloquial: "用更口语、更生活化的表达，像和朋友聊天一样自然。",
      professional: "用更专业、更具权威感的表达。",
      concise: "行文克制精简，去掉空话套话与多余修饰。",
      emoji: "在合适的位置点缀贴合内容的表情符号，不刻意堆砌。",
      hashtag: "在文末补充几个相关话题标签（以 # 开头）。"
    }, he = () => {
      const ze = O.value,
        H = [];
      (ht[ze.degree] || ht.balanced) && H.push(ht[ze.degree] || ht.balanced), (ze.preserve || []).forEach(Ot => {
        jt[Ot] && H.push(jt[Ot])
      });
      const Lt = u(ze.brandEnabled ? ze.brand : "", 60);
      Lt && H.push(`全文以我的品牌 / 产品「${Lt}」为主角自然展开；原文中出现的其他品牌或产品名，统一替换为它。`), (ze.focus || []).forEach(Ot => {
        ca[Ot] && H.push(ca[Ot])
      }), (ze.style || []).forEach(Ot => {
        be[Ot] && H.push(be[Ot])
      });
      const Ft = u(ze.requirement, 600),
        Rt = ["请以下面提供的原文为参考范本进行仿写，输出一篇全新的文案。"];
      return H.length && Rt.push("", "【仿写要求】", H.map((Ot, Xt) => `${Xt+1}. ${Ot}`).join(`
`)), Ft && Rt.push("", "【补充要求】（优先级最高，与上述要求冲突时一律以此为准）", Ft), Rt.join(`
`)
    }, kt = async () => {
      const ze = u(N.value, 40) || "常规语气",
        H = pt(),
        Lt = $i(me.value) || null;
      let Ft = {},
        Rt;
      if ($.value === "quick") {
        const Oa = new Set(["addEmoji", "addHashtag", "filterBannedWords", "filterMarketingWords"]);
        if (Ft = {
            title: u(T.value.title, 120),
            noteType: u(T.value.copyType, 20) || "任意",
            wordCount: y(T.value.wordCount),
            contentOptions: (Array.isArray(T.value.contentOptions) ? T.value.contentOptions : []).filter(Fa => Oa.has(Fa))
          }, H && (Ft.customExtra = H), Lt && (Ft.persona = Lt), !Ft.title) throw new Error("请先输入标题");
        Rt = await x(() => Kf(Ft))
      } else if ($.value === "oneLine") {
        if (Ft = {
            prompt: u(R.value.prompt, 6e3),
            tone: ze,
            wordCount: w(R.value.wordCount)
          }, H && (Ft.customExtra = H), Lt && (Ft.persona = Lt), !Ft.prompt) throw new Error("请输入一句话主题");
        Rt = await x(() => Yf(Ft))
      } else {
        const Oa = u(O.value.reference, 5e3);
        if (Ft = {
            title: u(ft(Oa), 120),
            desc: Oa,
            wordCount: S(O.value.wordCount),
            contentOptions: [],
            prompt: u(he(), 2e3)
          }, H && (Ft.customExtra = H), Lt && (Ft.persona = Lt), !Ft.desc) throw new Error("请粘贴或解析参考内容");
        Rt = await x(() => Xf(Ft))
      }
      const Ot = Rt != null && Rt.data && typeof Rt.data == "object" ? Rt.data : Rt,
        Xt = ((Ot == null ? void 0 : Ot.content) || (Ot == null ? void 0 : Ot.text) || "").toString();
      if (!Xt.trim()) throw new Error("生成失败，未返回内容");
      const At = ((Ot == null ? void 0 : Ot.title) || "").toString().trim();
      let pa;
      return $.value === "quick" ? pa = At || (T.value.title || "").trim() || ft(Xt) || "优质文案" : $.value === "oneLine" ? pa = At || ft(Xt) || "一句话文案" : pa = At || ft(Xt) || "一键仿写文案", {
        title: pa,
        content: Xt
      }
    }, Bt = async () => {
      var Ot, Xt, At;
      if (ue.value) return;
      if (!st.value) {
        A.warning("请先输入内容");
        return
      }
      if (te.value) try {
        await $v(((Ot = ce.value) == null ? void 0 : Ot.industry) || "", {
          onEdit: () => {
            we.value = !0
          }
        })
      } catch {
        return
      }
      const ze = Math.max(1, Math.min(10, Number(_e.value) || 1));
      if (_e.value = ze, !await Z(ze)) return;
      ue.value = !0, Ce.value = [], xe.value = 0, j.value = !1, Qe(ze);
      const Lt = [];
      let Ft = null,
        Rt = !1;
      try {
        for (let pa = 0; pa < ze; pa++) {
          xe.value = pa + 1, U.value = Math.floor(pa / ze * 100), Et(U.value);
          try {
            const Oa = await kt();
            Ce.value.push(Oa)
          } catch (Oa) {
            Ft = Oa, Lt.push({
              index: pa + 1,
              error: Oa
            });
            const Fa = (Oa == null ? void 0 : Oa.message) || "";
            if (Fa.includes("点数不足") || Fa.includes("余额不足") || Fa.includes("创作点数不足")) {
              Rt = !0;
              break
            }
            if (Fa.includes("请先输入") || Fa.includes("请输入") || Fa.includes("请粘贴")) {
              Rt = !0;
              break
            }
          }
        }
        if (Mt(), U.value = 100, de.value = "即将完成", await pe(), Ce.value.length === 0) throw Ft || new Error("生成失败");
        if (Lt.length === 0 ? A.success(ze > 1 ? `成功生成 ${Ce.value.length} 篇` : "生成成功") : A.warning(`成功 ${Ce.value.length} 篇，失败 ${Lt.length} 篇`), Rt && Lt.length > 0) {
          const pa = ((At = (Xt = Lt[Lt.length - 1]) == null ? void 0 : Xt.error) == null ? void 0 : At.message) || "";
          (pa.includes("点数不足") || pa.includes("余额不足") || pa.includes("创作点数不足")) && (Me.value = !0)
        }
      } catch (pa) {
        const Oa = (pa == null ? void 0 : pa.message) || "生成失败";
        Oa.includes("点数不足") || Oa.includes("余额不足") || Oa.includes("创作点数不足") ? Me.value = !0 : z(pa) ? (A({
          type: "error",
          message: '生成服务暂时不可用，已为你自动重试一次仍失败。点击下方"重试"或稍后再试。',
          duration: 5e3,
          showClose: !0
        }), j.value = !0) : A.error(Oa)
      } finally {
        Mt(), ue.value = !1, xe.value = 0
      }
    }, Ze = async ze => {
      if (ze) try {
        await navigator.clipboard.writeText(ze), A.success("已复制")
      } catch {
        A.warning("复制失败，请手动选择复制")
      }
    }, Wt = async () => {
      var Lt;
      const ze = Ce.value || [];
      if (ze.length === 0) return;
      let H = "";
      ze.length === 1 ? H = (((Lt = ze[0]) == null ? void 0 : Lt.content) || "").trim() : H = ze.map((Ft, Rt) => {
        const Ot = ((Ft == null ? void 0 : Ft.title) || "").trim(),
          Xt = ((Ft == null ? void 0 : Ft.content) || "").trim();
        return `【第${Rt+1}篇】${Ot}
${Xt}`
      }).join(`

---

`), await Ze(H)
    }, aa = async () => {
      var Lt;
      const ze = Ce.value || [];
      if (ze.length === 0) return;
      let H = "";
      ze.length === 1 ? H = (((Lt = ze[0]) == null ? void 0 : Lt.title) || "").trim() : H = ze.map((Ft, Rt) => `${Rt+1}. ${((Ft==null?void 0:Ft.title)||"").trim()}`).filter(Boolean).join(`
`), await Ze(H)
    }, xa = async ze => {
      var Lt;
      const H = (((Lt = Ce.value[ze]) == null ? void 0 : Lt.title) || "").trim();
      await Ze(H)
    }, Kt = async ze => {
      var Lt;
      const H = (((Lt = Ce.value[ze]) == null ? void 0 : Lt.content) || "").trim();
      await Ze(H)
    }, at = () => {
      o.push("/article").catch(() => {})
    }, Fe = async ze => {
      try {
        const H = await navigator.clipboard.readText();
        ze === "quickTitle" && (T.value.title = (H || "").trim()), ze === "oneLinePrompt" && (R.value.prompt = (H || "").trim()), ze === "rewriteLink" && (O.value.link = (H || "").trim())
      } catch (H) {
        console.warn("粘贴失败:", H), A.warning("当前环境不支持自动粘贴，请手动粘贴")
      }
    }, Ke = ze => {
      R.value.prompt = ze
    }, et = ze => {
      T.value.title = String(ze || "").slice(0, 40)
    }, Nt = p(!1), Ut = p([]), Ge = p(!1), dt = p([]), qt = p(""), ka = p(""), Ne = p(""), ga = Le(() => {
      const ze = (ka.value || "").toLowerCase().trim(),
        H = Ne.value === "" || Ne.value == null ? "" : String(Ne.value);
      return Ut.value.filter(Lt => {
        const Ft = String(Lt.title || "").toLowerCase(),
          Rt = !ze || Ft.includes(ze),
          Ot = Lt.groupId == null || Lt.groupId === 0 ? "" : String(Lt.groupId);
        return Rt && (!H || Ot === H)
      })
    });

  function St() {
    ka.value = (qt.value || "").trim()
  }

  function Oe(ze) {
    var Lt;
    if (ze == null || ze === "" || ze === 0) return "未分组";
    const H = String(ze);
    return ((Lt = dt.value.find(Ft => Ft.id != null && String(Ft.id) === H)) == null ? void 0 : Lt.name) || "未分组"
  }

  function Ve(ze) {
    const H = String(ze || "").trim();
    if (!H) return "暂无预览";
    const Lt = 120;
    return H.length > Lt ? H.slice(0, Lt) + "..." : H
  }

  function Ma(ze) {
    const H = ze.groupid ?? ze.groupId;
    return {
      id: ze.id,
      title: ze.title || "未命名",
      content: ze.desc ?? ze.content ?? "",
      groupId: H != null && H !== 0 ? H : null,
      createdAt: ze.createtime ?? ze.createdAt ?? 0,
      updatedAt: ze.updatetime ?? ze.updatedAt ?? ze.createtime ?? ze.createdAt ?? 0
    }
  }
  async function Je() {
    Ge.value = !0;
    try {
      const ze = await Hf({
          page: 1,
          size: 100
        }),
        H = (ze == null ? void 0 : ze.rows) ?? (ze == null ? void 0 : ze.data) ?? (Array.isArray(ze) ? ze : []);
      Ut.value = H.map(Ma)
    } catch (ze) {
      console.error(ze), Ut.value = [], A.error((ze == null ? void 0 : ze.message) || "加载提示词列表失败")
    } finally {
      Ge.value = !1
    }
  }
  async function ve() {
    if (!(dt.value && dt.value.length > 0)) try {
      const ze = await Qf();
      dt.value = Array.isArray(ze) ? ze : []
    } catch (ze) {
      console.error(ze), dt.value = []
    }
  }

  function $t() {
    Nt.value = !0, qt.value = "", ka.value = "", Ne.value = "", Je(), ve()
  }

  function ta(ze) {
    if (ze == null || ze === "") return "";
    const H = Number(ze),
      Lt = H > 1e12 ? H : H * 1e3,
      Ft = new Date(Lt);
    return Number.isNaN(Ft.getTime()) ? "" : `${Ft.getFullYear()}/${String(Ft.getMonth()+1).padStart(2,"0")}/${String(Ft.getDate()).padStart(2,"0")}`
  }

  function ha(ze) {
    const H = (ze.content || "").trim();
    if (!H) {
      A.warning("该条内容为空");
      return
    }
    R.value.prompt = H.slice(0, 6e3), Nt.value = !1;
    const Lt = (ze.title || "未命名").slice(0, 24);
    A.success(`已导入「${Lt}」`)
  }

  function Qt() {
    Nt.value = !1, o.push("/tishici")
  }

  function ba() {
    Nt.value = !1, o.push("/tishici")
  }
  const Ja = async () => {
    if (!Ip(Jr(E.value))) {
      A.warning("您不是会员，无法使用解析功能");
      return
    }
    const ze = (O.value.link || "").trim();
    if (ze) {
      re.value = !0, b.value = "";
      try {
        const H = await br(ze),
          Lt = ((H == null ? void 0 : H.title) || "").toString().trim(),
          Ft = ((H == null ? void 0 : H.content) || (H == null ? void 0 : H.desc) || "").toString().trim(),
          Rt = [Lt, Ft].filter(Boolean).join(`
`);
        if (!Rt.trim()) throw new Error("解析成功但未提取到正文内容");
        O.value.reference = Rt, A.success("解析成功，已回填参考文案")
      } catch (H) {
        b.value = (H == null ? void 0 : H.message) || "解析失败，请稍后重试", A.error(b.value)
      } finally {
        re.value = !1
      }
    }
  }, ml = ze => {
    $.value !== ze && ($.value = ze, i.query.mode !== ze && o.replace({
      query: {
        ...i.query,
        mode: ze
      }
    }))
  };
  oa(() => i.query.mode, ze => {
    n.includes(ze) && ze !== $.value && ($.value = ze)
  }), oa($, ze => {
    ze === "quick" && Da(Te)
  });
  let $e = null;
  const We = () => {
    $e && clearTimeout($e), $e = setTimeout(() => {
      Te()
    }, 200)
  };
  return Ll(async () => {
    window.addEventListener("resize", V), window.addEventListener("resize", We), n.includes(i.query.mode) || o.replace({
      query: {
        ...i.query,
        mode: $.value
      }
    }), await Da(), Te(), await pe()
  }), Zl(() => {
    window.removeEventListener("resize", V), window.removeEventListener("resize", We), $e && clearTimeout($e), Mt()
  }), (ze, H) => {
    var tn;
    const Lt = yo,
      Ft = bo,
      Rt = Kn,
      Ot = ho,
      Xt = rs,
      At = Vo,
      pa = cn,
      Oa = xl,
      Fa = $l,
      gl = Oo,
      jl = Bo,
      en = Fn("QuestionFilled"),
      fa = No,
      Ka = sc,
      Dl = Rl;
    return c(), v("div", y_e, [a(ei, {
      title: "爆款文案生成",
      "is-logged-in": ct.value,
      "user-info": E.value,
      "show-mobile-menu": !1,
      onLoginClick: H[0] || (H[0] = zt => qe.value = !0)
    }, null, 8, ["is-logged-in", "user-info"]), e("main", {
      class: Pe(["aiwenan-main", {
        mobile: C.value
      }])
    }, [H[94] || (H[94] = ii('<div class="hero" data-v-1f39f47e><div class="hero-bg-orb hero-bg-orb--a" data-v-1f39f47e></div><div class="hero-inner" data-v-1f39f47e><div class="hero-left" data-v-1f39f47e><h1 class="hero-title" data-v-1f39f47e> 爆款文案生成器 <span class="hero-badge" aria-label="爆款" data-v-1f39f47e>🔥</span></h1><div class="hero-subtitle" data-v-1f39f47e>标题生成文案 · 一句话文案 · 一键仿写文案</div></div></div></div>', 1)), a(os), e("div", h_e, [e("div", b_e, [e("div", {
      class: Pe(["mode-tab", {
        active: $.value === "quick"
      }]),
      onClick: H[1] || (H[1] = zt => ml("quick"))
    }, " 标题生成文案 ", 2), e("div", {
      class: Pe(["mode-tab", {
        active: $.value === "oneLine"
      }]),
      onClick: H[2] || (H[2] = zt => ml("oneLine"))
    }, " 一句话文案 ", 2), e("div", {
      class: Pe(["mode-tab", {
        active: $.value === "rewrite"
      }]),
      onClick: H[3] || (H[3] = zt => ml("rewrite"))
    }, " 一键仿写文案 ", 2)])]), e("div", w_e, [e("div", __e, [e("div", k_e, [e("div", C_e, h(yt.value), 1)]), $.value === "quick" ? (c(), v("div", A_e, [a(At, {
      model: T.value,
      size: "large",
      "label-position": "left",
      "label-width": (C.value, "60px")
    }, {
      default: l(() => [a(Lt, {
        label: "标题:",
        required: ""
      }, {
        default: l(() => [e("div", I_e, [e("div", x_e, [el(e("input", {
          "onUpdate:modelValue": H[4] || (H[4] = zt => T.value.title = zt),
          class: "simple-input",
          type: "text",
          placeholder: "请输入标题/主题，如：教你做低脂便当"
        }, null, 512), [
          [En, T.value.title]
        ]), e("div", S_e, h((T.value.title || "").length) + "/40", 1)]), e("div", E_e, [T.value.title ? (c(), v("div", {
          key: 1,
          class: "input-action-btn clear-action-btn",
          onClick: H[6] || (H[6] = zt => T.value.title = "")
        }, [...H[54] || (H[54] = [e("span", {
          class: "action-text"
        }, "清空", -1)])])) : (c(), v("div", {
          key: 0,
          class: "input-action-btn paste-action-btn",
          onClick: H[5] || (H[5] = zt => Fe("quickTitle"))
        }, [...H[53] || (H[53] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])]))])])]),
        _: 1
      }), a(Lt, {
        label: "类型:",
        required: "",
        class: "note-type-form-item"
      }, {
        default: l(() => [a(Rt, {
          modelValue: T.value.copyType,
          "onUpdate:modelValue": H[7] || (H[7] = zt => T.value.copyType = zt),
          class: "note-type-radio-group"
        }, {
          default: l(() => [a(Ft, {
            value: "分享"
          }, {
            default: l(() => [...H[55] || (H[55] = [g("分享", -1)])]),
            _: 1
          }), a(Ft, {
            value: "攻略"
          }, {
            default: l(() => [...H[56] || (H[56] = [g("攻略", -1)])]),
            _: 1
          }), a(Ft, {
            value: "教程"
          }, {
            default: l(() => [...H[57] || (H[57] = [g("教程", -1)])]),
            _: 1
          }), a(Ft, {
            value: "电商"
          }, {
            default: l(() => [...H[58] || (H[58] = [g("电商", -1)])]),
            _: 1
          }), a(Ft, {
            value: "测评"
          }, {
            default: l(() => [...H[59] || (H[59] = [g("测评", -1)])]),
            _: 1
          }), a(Ft, {
            value: "干货"
          }, {
            default: l(() => [...H[60] || (H[60] = [g("干货", -1)])]),
            _: 1
          }), a(Ft, {
            value: "任意"
          }, {
            default: l(() => [...H[61] || (H[61] = [g("任意", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(Lt, {
        label: "内容:",
        required: ""
      }, {
        default: l(() => [a(Xt, {
          modelValue: T.value.contentOptions,
          "onUpdate:modelValue": H[8] || (H[8] = zt => T.value.contentOptions = zt),
          class: "content-options-checkbox-group"
        }, {
          default: l(() => [a(Ot, {
            value: "addEmoji"
          }, {
            default: l(() => [...H[62] || (H[62] = [g("添加表情", -1)])]),
            _: 1
          }), a(Ot, {
            value: "addHashtag"
          }, {
            default: l(() => [...H[63] || (H[63] = [g("添加话题", -1)])]),
            _: 1
          }), a(Ot, {
            value: "filterBannedWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [...H[64] || (H[64] = [e("span", {
              class: "filter-checkbox-text"
            }, "过滤敏感词", -1)])]),
            _: 1
          }), a(Ot, {
            value: "filterMarketingWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [...H[65] || (H[65] = [e("span", {
              class: "filter-checkbox-text"
            }, "过滤营销词", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      })]),
      _: 1
    }, 8, ["model", "label-width"]), e("div", T_e, [H[66] || (H[66] = e("div", {
      class: "tip-title"
    }, "🔥 热门标题参考 · 点击直接填入标题", -1)), e("div", {
      ref_key: "quickTipGridRef",
      ref: W,
      class: "tip-grid quick-tip-grid"
    }, [(c(!0), v(Ue, null, gt(B.value, (zt, dl) => (c(), v("div", {
      key: dl,
      class: "tip-item",
      title: zt,
      onClick: Nl => et(zt)
    }, h(zt), 9, $_e))), 128))], 512)])])) : $.value === "oneLine" ? (c(), v("div", P_e, [e("div", V_e, [e("div", z_e, [el(e("textarea", {
      "onUpdate:modelValue": H[9] || (H[9] = zt => R.value.prompt = zt),
      class: "imitative-input",
      placeholder: "输入一句话主题/需求，如：帮我写一条能让人收藏的“早八通勤护肤”推荐文案。建议补充：目标受众、卖点、价格、语气、要避开的敏感词等。",
      rows: "13",
      maxlength: "6000"
    }, null, 512), [
      [En, R.value.prompt]
    ]), C.value ? M("", !0) : (c(), v("div", L_e, [R.value.prompt.trim() ? (c(), v("div", {
      key: 1,
      class: "pro-input-action-btn clear-btn",
      onClick: H[11] || (H[11] = zt => R.value.prompt = "")
    }, [...H[68] || (H[68] = [e("span", {
      class: "action-text"
    }, "清空", -1)])])) : (c(), v("div", {
      key: 0,
      class: "pro-input-action-btn",
      onClick: H[10] || (H[10] = zt => Fe("oneLinePrompt"))
    }, [...H[67] || (H[67] = [e("span", {
      class: "action-text"
    }, "粘贴", -1)])])), e("div", {
      class: "pro-input-action-btn import-tishici-btn",
      onClick: $t
    }, [...H[69] || (H[69] = [e("span", {
      class: "action-text"
    }, "导入", -1)])])])), e("div", {
      class: Pe(["char-count", {
        warning: R.value.prompt.length > 4800,
        error: R.value.prompt.length >= 6e3
      }])
    }, h(R.value.prompt.length) + "/6000 ", 3)]), e("div", D_e, [H[70] || (H[70] = e("div", {
      class: "tip-title"
    }, "可直接粘贴以下示例改一改：", -1)), e("div", M_e, [e("div", {
      class: "tip-item",
      onClick: H[12] || (H[12] = zt => Ke(_[0]))
    }, h(_[0]), 1), e("div", {
      class: "tip-item",
      onClick: H[13] || (H[13] = zt => Ke(_[1]))
    }, h(_[1]), 1), e("div", {
      class: "tip-item",
      onClick: H[14] || (H[14] = zt => Ke(_[2]))
    }, h(_[2]), 1)])])])])) : (c(), v("div", O_e, [O.value.inputMode === "link" ? (c(), v("div", B_e, [H[73] || (H[73] = e("div", {
      class: "field-label"
    }, "输入要仿写的作品链接", -1)), e("div", N_e, [a(pa, {
      modelValue: O.value.link,
      "onUpdate:modelValue": H[15] || (H[15] = zt => O.value.link = zt),
      type: "textarea",
      rows: C.value ? 4 : 2,
      placeholder: "粘贴作品链接",
      size: "large",
      class: "link-input"
    }, null, 8, ["modelValue", "rows"]), O.value.link ? (c(), ye(Oa, {
      key: 0,
      class: "action-btn clear-btn",
      size: "small",
      onClick: H[16] || (H[16] = zt => O.value.link = "")
    }, {
      default: l(() => [...H[71] || (H[71] = [g(" 清除 ", -1)])]),
      _: 1
    })) : (c(), ye(Oa, {
      key: 1,
      class: "action-btn paste-btn",
      size: "small",
      onClick: H[17] || (H[17] = zt => Fe("rewriteLink"))
    }, {
      default: l(() => [...H[72] || (H[72] = [g(" 粘贴 ", -1)])]),
      _: 1
    }))]), e("div", U_e, [a(Oa, {
      type: "primary",
      size: "large",
      loading: re.value,
      disabled: !O.value.link.trim() || re.value,
      onClick: Ja
    }, {
      default: l(() => [g(h(re.value ? "解析中..." : "一键解析"), 1)]),
      _: 1
    }, 8, ["loading", "disabled"])]), b.value ? (c(), v("div", R_e, h(b.value), 1)) : M("", !0)])) : M("", !0), e("div", j_e, [e("div", q_e, [H[74] || (H[74] = e("div", {
      class: "block-title"
    }, "参考文案", -1)), a(pa, {
      modelValue: O.value.reference,
      "onUpdate:modelValue": H[18] || (H[18] = zt => O.value.reference = zt),
      type: "textarea",
      rows: C.value ? 8 : 12,
      maxlength: "6000",
      "show-word-limit": "",
      placeholder: "粘贴你想仿写的优质文案（标题+正文都可以）"
    }, null, 8, ["modelValue", "rows"])]), e("div", {
      class: "form-block rewrite-req-trigger",
      onClick: H[20] || (H[20] = zt => Y.value = !0)
    }, [e("div", F_e, [e("div", W_e, [H[75] || (H[75] = g(" 仿写要求 ", -1)), e("span", G_e, h(ne.value), 1)]), a(Oa, {
      class: "req-config-btn",
      size: "small",
      onClick: H[19] || (H[19] = lt(zt => Y.value = !0, ["stop"]))
    }, {
      default: l(() => [a(Fa, null, {
        default: l(() => [a(P(qn))]),
        _: 1
      }), H[76] || (H[76] = e("span", null, "设置仿写要求", -1))]),
      _: 1
    })]), e("div", J_e, [De.value.length ? (c(!0), v(Ue, {
      key: 0
    }, gt(De.value, (zt, dl) => (c(), v("span", {
      key: dl,
      class: "summary-chip"
    }, h(zt), 1))), 128)) : (c(), v("span", H_e, "点击「设置仿写要求」可选择：保留要点、品牌植入、内容侧重、合规与风格、补充要求…"))])])])])), C.value ? M("", !0) : (c(), v("div", Q_e, [e("div", K_e, [e("div", Y_e, [e("div", X_e, [H[77] || (H[77] = e("span", {
      class: "control-inline-label"
    }, "字数", -1)), $.value === "quick" ? (c(), ye(jl, {
      key: 0,
      modelValue: T.value.wordCount,
      "onUpdate:modelValue": H[21] || (H[21] = zt => T.value.wordCount = zt),
      class: "control-select control-select--narrow",
      placeholder: "选择字数"
    }, {
      default: l(() => [a(gl, {
        label: "150字左右",
        value: "150"
      }), a(gl, {
        label: "300字左右",
        value: "300"
      }), a(gl, {
        label: "500字左右",
        value: "500"
      }), a(gl, {
        label: "800字左右",
        value: "800"
      }), a(gl, {
        label: "不限字数",
        value: "fanwei"
      })]),
      _: 1
    }, 8, ["modelValue"])) : $.value === "oneLine" ? (c(), ye(jl, {
      key: 1,
      modelValue: R.value.wordCount,
      "onUpdate:modelValue": H[22] || (H[22] = zt => R.value.wordCount = zt),
      class: "control-select control-select--narrow",
      placeholder: "选择字数"
    }, {
      default: l(() => [(c(), v(Ue, null, gt(it, zt => a(gl, {
        key: zt,
        label: `${zt}字左右`,
        value: zt
      }, null, 8, ["label", "value"])), 64))]),
      _: 1
    }, 8, ["modelValue"])) : (c(), ye(jl, {
      key: 2,
      modelValue: O.value.wordCount,
      "onUpdate:modelValue": H[23] || (H[23] = zt => O.value.wordCount = zt),
      class: "control-select control-select--narrow",
      placeholder: "选择字数"
    }, {
      default: l(() => [a(gl, {
        label: "不限字数",
        value: "fanwei"
      }), (c(), v(Ue, null, gt(it, zt => a(gl, {
        key: zt,
        label: `${zt}字左右`,
        value: zt
      }, null, 8, ["label", "value"])), 64))]),
      _: 1
    }, 8, ["modelValue"]))]), e("div", Z_e, [H[80] || (H[80] = e("span", {
      class: "control-inline-label"
    }, "关联与人设", -1)), e("div", e2e, [e("span", {
      class: Pe(["pill-btn", {
        active: te.value
      }]),
      onClick: H[25] || (H[25] = zt => we.value = !0)
    }, [a(Fa, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", t2e, [g(h(te.value ? "已关联创作信息" : "关联创作信息"), 1), a(fa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...H[78] || (H[78] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(Fa, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: H[24] || (H[24] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(en)]),
        _: 1
      })]),
      _: 1
    })])], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!me.value
      }]),
      onClick: H[27] || (H[27] = zt => ae.value = !0)
    }, [a(Fa, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", a2e, [g(h(me.value ? me.value.name : "绑定人设"), 1), a(fa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...H[79] || (H[79] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
      default: l(() => [a(Fa, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: H[26] || (H[26] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(en)]),
        _: 1
      })]),
      _: 1
    })])], 2), a(Ld, {
      modelValue: N.value,
      "onUpdate:modelValue": H[28] || (H[28] = zt => N.value = zt),
      class: "inline-tone-picker",
      tones: [{
        label: "常规语气",
        value: "常规语气"
      }, {
        label: "轻松日常",
        value: "轻松日常"
      }, {
        label: "专业权威",
        value: "专业权威"
      }, {
        label: "幽默风趣",
        value: "幽默风趣"
      }, {
        label: "温暖治愈",
        value: "温暖治愈"
      }, {
        label: "干货实用",
        value: "干货实用"
      }]
    }, null, 8, ["modelValue"])])])])]), e("div", l2e, [e("div", n2e, [H[81] || (H[81] = e("span", {
      class: "batch-count-label"
    }, "生成数量", -1)), a(jl, {
      modelValue: _e.value,
      "onUpdate:modelValue": H[29] || (H[29] = zt => _e.value = zt),
      disabled: ue.value,
      size: "default",
      class: "batch-count-select"
    }, {
      default: l(() => [(c(), v(Ue, null, gt(10, zt => a(gl, {
        key: zt,
        label: `${zt} 篇`,
        value: zt
      }, null, 8, ["label", "value"])), 64))]),
      _: 1
    }, 8, ["modelValue", "disabled"])]), a(Oa, {
      class: "primary-btn",
      type: "primary",
      loading: ue.value,
      disabled: !st.value,
      onClick: Bt
    }, {
      default: l(() => [g(h(ue.value ? "生成中..." : `一键生成（消耗${_e.value}）`), 1)]),
      _: 1
    }, 8, ["loading", "disabled"])])]))]), e("div", o2e, [e("div", i2e, [e("div", s2e, [H[82] || (H[82] = g(" 生成结果 ", -1)), Ce.value.length > 1 ? (c(), v("span", r2e, "共 " + h(Ce.value.length) + " 篇", 1)) : M("", !0)]), e("div", u2e, [a(Oa, {
      size: "small",
      class: "my-library-btn",
      onClick: at
    }, {
      default: l(() => [...H[83] || (H[83] = [g("进入我的文案库", -1)])]),
      _: 1
    }), a(Oa, {
      size: "small",
      disabled: !Re.value,
      onClick: aa
    }, {
      default: l(() => [g(h(Ce.value.length > 1 ? "复制全部标题" : "复制标题"), 1)]),
      _: 1
    }, 8, ["disabled"]), a(Oa, {
      size: "small",
      disabled: !Re.value,
      onClick: Wt
    }, {
      default: l(() => [g(h(Ce.value.length > 1 ? "复制全部内容" : "复制内容"), 1)]),
      _: 1
    }, 8, ["disabled"])])]), j.value && !ue.value ? (c(), v("div", c2e, [e("div", d2e, [a(Fa, null, {
      default: l(() => [a(P(zs))]),
      _: 1
    })]), H[85] || (H[85] = e("div", {
      class: "retry-banner-body"
    }, [e("div", {
      class: "retry-banner-title"
    }, "生成服务暂不稳定"), e("div", {
      class: "retry-banner-desc"
    }, "已为你自动重试一次仍失败，请稍候再试，或直接点击右侧按钮立即重试。")], -1)), a(Oa, {
      type: "primary",
      size: "small",
      disabled: ue.value,
      onClick: Ee
    }, {
      default: l(() => [...H[84] || (H[84] = [g("立即重试", -1)])]),
      _: 1
    }, 8, ["disabled"])])) : M("", !0), Re.value ? (c(), v("div", p2e, [ue.value && _e.value > 1 ? (c(), v("div", y2e, [a(Fa, {
      class: "is-loading"
    }, {
      default: l(() => [a(P(Fl))]),
      _: 1
    }), e("span", null, "正在生成第 " + h(xe.value) + " / " + h(_e.value) + " 篇，已完成 " + h(Ce.value.length) + " 篇", 1)])) : M("", !0), Ce.value.length === 1 ? (c(), v(Ue, {
      key: 1
    }, [e("div", h2e, [H[88] || (H[88] = e("div", {
      class: "field-label"
    }, "标题", -1)), a(pa, {
      modelValue: Ce.value[0].title,
      "onUpdate:modelValue": H[30] || (H[30] = zt => Ce.value[0].title = zt),
      maxlength: "120",
      "show-word-limit": "",
      placeholder: "可编辑标题（保存到文案库会用它）"
    }, null, 8, ["modelValue"])]), e("div", b2e, [H[89] || (H[89] = e("div", {
      class: "field-label"
    }, "正文", -1)), a(pa, {
      modelValue: Ce.value[0].content,
      "onUpdate:modelValue": H[31] || (H[31] = zt => Ce.value[0].content = zt),
      type: "textarea",
      rows: 12,
      maxlength: "8000",
      "show-word-limit": ""
    }, null, 8, ["modelValue"])])], 64)) : (c(!0), v(Ue, {
      key: 2
    }, gt(Ce.value, (zt, dl) => (c(), v("div", {
      key: dl,
      class: "result-item-card"
    }, [e("div", w2e, [e("div", _2e, "第 " + h(dl + 1) + " 篇", 1), e("div", k2e, [a(Oa, {
      size: "small",
      onClick: Nl => xa(dl)
    }, {
      default: l(() => [...H[90] || (H[90] = [g("复制标题", -1)])]),
      _: 1
    }, 8, ["onClick"]), a(Oa, {
      size: "small",
      onClick: Nl => Kt(dl)
    }, {
      default: l(() => [...H[91] || (H[91] = [g("复制内容", -1)])]),
      _: 1
    }, 8, ["onClick"])])]), e("div", C2e, [H[92] || (H[92] = e("div", {
      class: "field-label"
    }, "标题", -1)), a(pa, {
      modelValue: zt.title,
      "onUpdate:modelValue": Nl => zt.title = Nl,
      maxlength: "120",
      "show-word-limit": "",
      placeholder: "可编辑标题"
    }, null, 8, ["modelValue", "onUpdate:modelValue"])]), e("div", A2e, [H[93] || (H[93] = e("div", {
      class: "field-label"
    }, "正文", -1)), a(pa, {
      modelValue: zt.content,
      "onUpdate:modelValue": Nl => zt.content = Nl,
      type: "textarea",
      rows: 8,
      maxlength: "8000",
      "show-word-limit": ""
    }, null, 8, ["modelValue", "onUpdate:modelValue"])])]))), 128))])) : (c(), v("div", v2e, [H[86] || (H[86] = e("div", {
      class: "empty-title"
    }, "还没有生成内容", -1)), H[87] || (H[87] = e("div", {
      class: "empty-desc"
    }, "在左侧完成输入后点击“一键生成”，结果会出现在这里。", -1)), ue.value ? (c(), v("div", m2e, [a(Ka, {
      type: "circle",
      percentage: U.value,
      "stroke-width": 8,
      width: 96,
      color: "#8b5cf6"
    }, null, 8, ["percentage"]), e("div", g2e, h(de.value), 1), e("div", f2e, h(U.value) + "%", 1)])) : M("", !0)]))])])], 2), C.value ? (c(), v("div", I2e, [e("div", x2e, [$.value === "quick" ? (c(), v("div", S2e, [e("span", {
      class: Pe(["pill-btn", {
        active: te.value
      }]),
      onClick: H[33] || (H[33] = zt => we.value = !0)
    }, [a(Fa, null, {
      default: l(() => [a(Ho)]),
      _: 1
    }), e("span", E2e, [g(h(te.value ? "已关联" : "关联创作"), 1), a(fa, {
      placement: "top",
      effect: "dark"
    }, {
      content: l(() => [...H[95] || (H[95] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
      default: l(() => [a(Fa, {
        class: "pill-btn-tip pill-btn-tip-corner",
        onClick: H[32] || (H[32] = lt(() => {}, ["stop"]))
      }, {
        default: l(() => [a(en)]),
        _: 1
      })]),
      _: 1
    })])], 2), e("span", {
      class: Pe(["pill-btn", {
        active: !!me.value
      }]),
      onClick: H[34] || (H[34] = zt => ae.value = !0)
    }, [a(Fa, null, {
      default: l(() => [a(P(_n))]),
      _: 1
    }), e("span", T2e, h(me.value ? me.value.name : "人设"), 1)], 2)])) : M("", !0)]), e("div", $2e, [e("div", P2e, [a(jl, {
      modelValue: _e.value,
      "onUpdate:modelValue": H[35] || (H[35] = zt => _e.value = zt),
      disabled: ue.value,
      size: "small",
      class: "batch-count-select"
    }, {
      default: l(() => [(c(), v(Ue, null, gt(10, zt => a(gl, {
        key: zt,
        label: `${zt} 篇`,
        value: zt
      }, null, 8, ["label", "value"])), 64))]),
      _: 1
    }, 8, ["modelValue", "disabled"])]), a(Oa, {
      size: "large",
      class: "primary-btn mobile-primary-btn",
      type: "primary",
      loading: ue.value,
      disabled: !st.value,
      onClick: Bt
    }, {
      default: l(() => [g(h(ue.value ? "生成中..." : `生成（消耗${_e.value}）`), 1)]),
      _: 1
    }, 8, ["loading", "disabled"])])])) : M("", !0), a(Os, {
      modelValue: ce.value,
      "onUpdate:modelValue": H[36] || (H[36] = zt => ce.value = zt),
      visible: we.value,
      "onUpdate:visible": H[37] || (H[37] = zt => we.value = zt),
      mode: "dialog",
      "is-mobile": C.value,
      onConfirm: Yt,
      onClearHistory: Ye
    }, null, 8, ["modelValue", "visible", "is-mobile"]), a(gc, {
      modelValue: ae.value,
      "onUpdate:modelValue": H[38] || (H[38] = zt => ae.value = zt),
      "bound-persona": me.value,
      onBind: va,
      onUnbind: Ea
    }, null, 8, ["modelValue", "bound-persona"]), a(Wn, {
      modelValue: tt.value,
      "onUpdate:modelValue": H[39] || (H[39] = zt => tt.value = zt)
    }, null, 8, ["modelValue"]), a(no, {
      modelValue: qe.value,
      "onUpdate:modelValue": H[40] || (H[40] = zt => qe.value = zt),
      onLoginSuccess: Ie
    }, null, 8, ["modelValue"]), a(ri, {
      onOpenRecharge: H[41] || (H[41] = zt => tt.value = !0),
      onOpenLogin: H[42] || (H[42] = zt => qe.value = !0)
    }), a(mc, {
      modelValue: Me.value,
      "onUpdate:modelValue": H[43] || (H[43] = zt => Me.value = zt),
      "current-points": (tn = E.value) == null ? void 0 : tn.create_points,
      "required-points": rt.value,
      onRecharge: Be
    }, null, 8, ["modelValue", "current-points", "required-points"]), a(Dl, {
      modelValue: Nt.value,
      "onUpdate:modelValue": H[47] || (H[47] = zt => Nt.value = zt),
      title: "导入我的提示词",
      width: C.value ? "90%" : "600px",
      center: "",
      class: "import-tishici-dialog",
      "append-to-body": ""
    }, {
      footer: l(() => [a(Oa, {
        onClick: Qt
      }, {
        default: l(() => [...H[103] || (H[103] = [g("去创建", -1)])]),
        _: 1
      }), a(Oa, {
        onClick: H[46] || (H[46] = zt => Nt.value = !1)
      }, {
        default: l(() => [...H[104] || (H[104] = [g("取消", -1)])]),
        _: 1
      })]),
      default: l(() => [Ge.value ? (c(), v("div", V2e, [a(Fa, {
        class: "is-loading",
        size: 22
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      }), H[96] || (H[96] = e("span", null, "加载中...", -1))])) : (c(), v(Ue, {
        key: 1
      }, [Ut.value.length === 0 ? (c(), v("div", z2e, [...H[97] || (H[97] = [e("p", null, "暂无提示词，请先在「我的提示词库」中新增", -1)])])) : (c(), v("div", L2e, [e("div", D2e, [a(pa, {
        modelValue: qt.value,
        "onUpdate:modelValue": H[44] || (H[44] = zt => qt.value = zt),
        size: "small",
        placeholder: "搜索标题",
        class: "import-search-input",
        onKeyup: gn(St, ["enter"])
      }, null, 8, ["modelValue"]), a(Oa, {
        type: "primary",
        size: "small",
        onClick: St
      }, {
        default: l(() => [...H[98] || (H[98] = [g("搜索", -1)])]),
        _: 1
      }), a(jl, {
        modelValue: Ne.value,
        "onUpdate:modelValue": H[45] || (H[45] = zt => Ne.value = zt),
        size: "small",
        placeholder: "全部分组",
        class: "import-group-select"
      }, {
        default: l(() => [a(gl, {
          value: ""
        }, {
          default: l(() => [...H[99] || (H[99] = [g("全部分组", -1)])]),
          _: 1
        }), (c(!0), v(Ue, null, gt(dt.value, zt => (c(), ye(gl, {
          key: zt.id,
          label: zt.name,
          value: zt.id
        }, null, 8, ["label", "value"]))), 128))]),
        _: 1
      }, 8, ["modelValue"])]), ga.value.length === 0 ? (c(), v("div", M2e, [...H[100] || (H[100] = [e("p", null, "没有匹配的提示词", -1)])])) : (c(), v("div", O2e, [(c(!0), v(Ue, null, gt(ga.value, zt => (c(), v("div", {
        key: zt.id,
        class: "article-import-item"
      }, [e("div", B2e, [e("span", N2e, h(zt.title || "未命名"), 1)]), e("div", U2e, h(Ve(zt.content)), 1), e("div", R2e, h(Oe(zt.groupId)) + " · " + h(ta(zt.createdAt)), 1), e("div", j2e, [a(Oa, {
        type: "primary",
        size: "small",
        onClick: dl => ha(zt)
      }, {
        default: l(() => [...H[101] || (H[101] = [g("导入", -1)])]),
        _: 1
      }, 8, ["onClick"]), a(Oa, {
        size: "small",
        link: "",
        onClick: ba
      }, {
        default: l(() => [...H[102] || (H[102] = [g("进入查看", -1)])]),
        _: 1
      })])]))), 128))]))]))], 64))]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Dl, {
      modelValue: Y.value,
      "onUpdate:modelValue": H[52] || (H[52] = zt => Y.value = zt),
      title: "设置仿写要求",
      width: C.value ? "92%" : "640px",
      "append-to-body": "",
      class: "rewrite-req-dialog"
    }, {
      footer: l(() => [a(Oa, {
        onClick: Q
      }, {
        default: l(() => [...H[112] || (H[112] = [g("重置", -1)])]),
        _: 1
      }), a(Oa, {
        type: "primary",
        onClick: H[51] || (H[51] = zt => Y.value = !1)
      }, {
        default: l(() => [...H[113] || (H[113] = [g("完成", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", q2e, [e("div", F2e, [H[106] || (H[106] = e("div", {
        class: "req-section-title"
      }, [g("改写幅度"), e("span", {
        class: "req-required"
      }, "必选")], -1)), e("div", W2e, [(c(), v(Ue, null, gt(J, zt => e("div", {
        key: zt.value,
        class: Pe(["degree-card", {
          active: O.value.degree === zt.value
        }]),
        onClick: dl => O.value.degree = zt.value
      }, [H[105] || (H[105] = e("span", {
        class: "degree-radio"
      }, null, -1)), e("div", J2e, [e("div", H2e, [g(h(zt.label) + " ", 1), zt.recommend ? (c(), v("span", Q2e, "推荐")) : M("", !0)]), e("div", K2e, h(zt.desc), 1)])], 10, G2e)), 64))])]), e("div", Y2e, [H[107] || (H[107] = e("div", {
        class: "req-section-title"
      }, [g("保留要点"), e("span", {
        class: "req-hint"
      }, "可多选")], -1)), e("div", X2e, [(c(), v(Ue, null, gt(ee, zt => e("span", {
        key: zt.value,
        class: Pe(["req-chip", {
          active: O.value.preserve.includes(zt.value)
        }]),
        onClick: dl => F("preserve", zt.value)
      }, h(zt.label), 11, Z2e)), 64))])]), e("div", eke, [e("div", tke, [a(Ot, {
        modelValue: O.value.brandEnabled,
        "onUpdate:modelValue": H[48] || (H[48] = zt => O.value.brandEnabled = zt),
        class: "brand-checkbox"
      }, {
        default: l(() => [...H[108] || (H[108] = [g("植入我的品牌 / 产品", -1)])]),
        _: 1
      }, 8, ["modelValue"])]), O.value.brandEnabled ? (c(), ye(pa, {
        key: 0,
        modelValue: O.value.brand,
        "onUpdate:modelValue": H[49] || (H[49] = zt => O.value.brand = zt),
        maxlength: "40",
        "show-word-limit": "",
        class: "brand-input",
        placeholder: "填写你的品牌名 / 产品名，仿写时会自然替换植入"
      }, null, 8, ["modelValue"])) : M("", !0)]), e("div", ake, [H[109] || (H[109] = e("div", {
        class: "req-section-title"
      }, [g("内容侧重"), e("span", {
        class: "req-hint"
      }, "可多选")], -1)), e("div", lke, [(c(), v(Ue, null, gt(ie, zt => e("span", {
        key: zt.value,
        class: Pe(["req-chip", {
          active: O.value.focus.includes(zt.value)
        }]),
        onClick: dl => F("focus", zt.value)
      }, h(zt.label), 11, nke)), 64))])]), e("div", oke, [H[110] || (H[110] = e("div", {
        class: "req-section-title"
      }, [g("合规与风格"), e("span", {
        class: "req-hint"
      }, "可多选")], -1)), e("div", ike, [(c(), v(Ue, null, gt(Ae, zt => e("span", {
        key: zt.value,
        class: Pe(["req-chip", {
          active: O.value.style.includes(zt.value)
        }]),
        onClick: dl => F("style", zt.value)
      }, h(zt.label), 11, ske)), 64))])]), e("div", rke, [H[111] || (H[111] = e("div", {
        class: "req-section-title"
      }, [g("补充要求"), e("span", {
        class: "req-hint"
      }, "（选填）")], -1)), a(pa, {
        modelValue: O.value.requirement,
        "onUpdate:modelValue": H[50] || (H[50] = zt => O.value.requirement = zt),
        type: "textarea",
        rows: 4,
        maxlength: "2000",
        "show-word-limit": "",
        class: "req-extra-input",
        placeholder: "还有别的要求可以直接写，例如：目标人群是宝妈；某句金句一定要保留；多举一个使用场景；标题再夸张一点…"
      }, null, 8, ["modelValue"])])])]),
      _: 1
    }, 8, ["modelValue", "width"])])
  }
}
}, cke = al(uke, [
  ["__scopeId", "data-v-1f39f47e"]
]), dke = [{
  path: "/",
  name: "Home",
  component: w9
}, {
  path: "/console",
  name: "Console",
  component: () => ya(() => import("./Console-d90be1b0.js"), ["assets/js/Console-d90be1b0.js", "assets/js/element-plus-f206ab5d.js", "assets/js/favoriteNav-2791330e.js", "assets/js/vue-router-9fee84ca.js", "assets/css/Console-195f607d.css"])
}, {
  path: "/aidianshang",
  name: "AIdianshang",
  component: () => ya(() => import("./AIdianshang-ceed4845.js"), ["assets/js/AIdianshang-ceed4845.js", "assets/js/element-plus-f206ab5d.js", "assets/js/ltds-example-4-73ee0650.js", "assets/js/assetGlob-e779cef9.js", "assets/js/vue-router-9fee84ca.js", "assets/css/AIdianshang-3cb5abe9.css"])
}, {
  path: "/zhanshi",
  name: "Zhanshi",
  component: () => ya(() => import("./Zhanshi-08e3c228.js"), ["assets/js/Zhanshi-08e3c228.js", "assets/js/element-plus-f206ab5d.js", "assets/js/DemoGuideBottomNav-58f478a9.js", "assets/js/vue-router-9fee84ca.js", "assets/css/DemoGuideBottomNav-3a05c9ca.css", "assets/js/favoriteNav-2791330e.js", "assets/css/Zhanshi-873e705c.css"])
}, {
  path: "/kaifa",
  name: "Kaifa",
  component: () => ya(() => import("./kaifa-3a64df2d.js"), ["assets/js/kaifa-3a64df2d.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/kaifa-3caa1df4.css"])
}, {
  path: "/generate",
  name: "Generate",
  component: gz
}, {
  path: "/generates",
  name: "Generates",
  component: sL
}, {
  path: "/generating1",
  name: "Generating1",
  component: DL
}, {
  path: "/generating2",
  redirect: "/generating1"
}, {
  path: "/generating3",
  redirect: "/generating1"
}, {
  path: "/user",
  name: "UserCenter",
  component: DQ
}, {
  path: "/templates",
  name: "Templates",
  component: QK
}, {
  path: "/works",
  name: "Works",
  component: aoe
}, {
  path: "/tools",
  name: "Tools",
  component: fy
}, {
  path: "/yunying",
  name: "Yunying",
  component: fy
}, {
  path: "/zhenduan",
  name: "Zhenduan",
  component: () => ya(() => import("./zhenduan-648c8075.js"), ["assets/js/zhenduan-648c8075.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/zhenduan-1a70a163.css"])
}, {
  path: "/yuce",
  name: "Yuce",
  component: () => ya(() => import("./yuce-13af9171.js"), ["assets/js/yuce-13af9171.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/ComingSoonDialog-1247d127.js", "assets/css/ComingSoonDialog-54fa34a5.css", "assets/css/yuce-f436fc71.css"])
}, {
  path: "/yuce/progress",
  name: "YuceProgress",
  component: () => ya(() => import("./yuceProgress-b50ac8cb.js"), ["assets/js/yuceProgress-b50ac8cb.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/yuceProgress-d6da57ba.css"])
}, {
  path: "/yuce/result",
  name: "YuceResult",
  component: () => ya(() => import("./yuceResult-cb98347b.js"), ["assets/js/yuceResult-cb98347b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/yuceResult-3cc351ad.css"])
}, {
  path: "/fabu",
  name: "Fabu",
  component: () => ya(() => import("./fabu-7f521186.js"), ["assets/js/fabu-7f521186.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/fabu-99354843.css"])
}, {
  path: "/banyun",
  name: "Banyun",
  component: () => ya(() => import("./banyun-2ac137cb.js"), ["assets/js/banyun-2ac137cb.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/banyun-384a3074.css"])
}, {
  path: "/banyuning",
  name: "Banyuning",
  component: () => ya(() => import("./banyun-2ac137cb.js"), ["assets/js/banyun-2ac137cb.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/banyun-384a3074.css"])
}, {
  path: "/zntool",
  name: "Zntool",
  component: () => ya(() => import("./Zntool-2c177baf.js"), ["assets/js/Zntool-2c177baf.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/gaitu1-993f6879.js", "assets/js/marked.esm-bf1273d9.js", "assets/css/Zntool-9cadfe12.css"])
}, {
  path: "/xuanti",
  name: "Xuanti",
  component: () => ya(() => import("./xuanti-f8515b62.js"), ["assets/js/xuanti-f8515b62.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/xuanti-62be7f20.css"])
}, {
  path: "/chazhao",
  name: "Chazhao",
  component: () => ya(() => import("./chazhao-557fc639.js"), ["assets/js/chazhao-557fc639.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/chazhao-9f4a1edd.css"])
}, {
  path: "/aicopy",
  name: "Copy",
  component: cne
}, {
  path: "/aicopys",
  name: "Aicopys",
  component: () => ya(() => import("./aicopys-e7cbd6cb.js"), ["assets/js/aicopys-e7cbd6cb.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/xlsx-75bbc624.js", "assets/css/aicopys-324ed976.css"])
}, {
  path: "/daoru/caogao",
  name: "Caogao",
  component: () => ya(() => import("./Caogao-351ddcaa.js"), ["assets/js/Caogao-351ddcaa.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/Caogao-1420ad88.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/daoru",
  name: "Daoru",
  redirect: "/daoru/caogao"
}, {
  path: "/daoru/new",
  name: "DaoruNew",
  component: () => ya(() => import("./daoru-55c2ca10.js"), ["assets/js/daoru-55c2ca10.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/imageDownload-9126bae7.js", "assets/js/html2canvas.esm-e0a7d97b.js", "assets/js/index-cad1e958.js", "assets/js/index-54488eb5.js", "assets/css/daoru-4f3d42bc.css", "assets/css/el-color-picker-97484565.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/daoru/:id",
  name: "DaoruWithId",
  component: () => ya(() => import("./daoru-55c2ca10.js"), ["assets/js/daoru-55c2ca10.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/imageDownload-9126bae7.js", "assets/js/html2canvas.esm-e0a7d97b.js", "assets/js/index-cad1e958.js", "assets/js/index-54488eb5.js", "assets/css/daoru-4f3d42bc.css", "assets/css/el-color-picker-97484565.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/yijuhua",
  name: "Yijuhua",
  component: nce
}, {
  path: "/ainotes",
  name: "Ainotes",
  component: () => ya(() => import("./ainotes-31169a19.js"), ["assets/js/ainotes-31169a19.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/ainotes-2af7fc5a.css"])
}, {
  path: "/dspics",
  name: "Dspics",
  component: () => ya(() => import("./dspics-c12f219f.js"), ["assets/js/dspics-c12f219f.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/dspics-478c6961.css", "assets/css/el-color-picker-97484565.css"])
}, {
  path: "/beiwanglu",
  name: "Beiwanglu",
  component: () => ya(() => import("./beiwanglu-fa5a4d9f.js"), ["assets/js/beiwanglu-fa5a4d9f.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/memoTemplates-c886f9d1.js", "assets/css/memoTemplates-aadadb07.css", "assets/js/useYijuhuaGenerateProgress-9c076e8d.js", "assets/css/beiwanglu-c4a563cd.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/gongge",
  name: "Gongge",
  component: () => ya(() => import("./gongge-36255470.js"), ["assets/js/gongge-36255470.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/useYijuhuaGenerateProgress-9c076e8d.js", "assets/js/gonggeTemplates-f216e909.js", "assets/css/gongge-19f1de61.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/noteplus",
  name: "NotePlus",
  component: () => ya(() => import("./noteplus-03c98820.js"), ["assets/js/noteplus-03c98820.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/memoTemplates-c886f9d1.js", "assets/css/memoTemplates-aadadb07.css", "assets/js/gonggeTemplates-f216e909.js", "assets/css/noteplus-9110d7c7.css"])
}, {
  path: "/pengyouquan",
  name: "Pengyouquan",
  component: () => ya(() => import("./pengyouquan-608a18ef.js"), ["assets/js/pengyouquan-608a18ef.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/useYijuhuaGenerateProgress-9c076e8d.js", "assets/js/pengyouquanTemplates-e18bf469.js", "assets/css/pengyouquan-d9c7408f.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/wanggandazi",
  name: "Wanggandazi",
  component: () => ya(() => import("./wanggandazi-6c7066e6.js"), ["assets/js/wanggandazi-6c7066e6.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/ComingSoonDialog-1247d127.js", "assets/css/ComingSoonDialog-54fa34a5.css", "assets/js/useYijuhuaGenerateProgress-9c076e8d.js", "assets/js/wanggandaziTemplates-81cc0b17.js", "assets/css/wanggandazi-bd803341.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/zhishikepu",
  name: "Zhishikepu",
  component: () => ya(() => import("./zhishikepu-dcc54d37.js"), ["assets/js/zhishikepu-dcc54d37.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/useYijuhuaGenerateProgress-9c076e8d.js", "assets/js/cepingTemplates-c705c5c7.js", "assets/css/zhishikepu-225dcc8a.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/ceping",
  name: "Ceping",
  component: () => ya(() => import("./ceping-69c893a4.js"), ["assets/js/ceping-69c893a4.js", "assets/js/zhishikepu-dcc54d37.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/useYijuhuaGenerateProgress-9c076e8d.js", "assets/js/cepingTemplates-c705c5c7.js", "assets/css/zhishikepu-225dcc8a.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/outline-edit",
  name: "OutlineEdit",
  component: () => ya(() => import("./OutlineEdit-46d4d28f.js"), ["assets/js/OutlineEdit-46d4d28f.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/OutlineEdit-87d1319a.css"])
}, {
  path: "/zhiding",
  name: "Zhiding",
  component: () => ya(() => import("./Zhiding-7b314896.js"), ["assets/js/Zhiding-7b314896.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/Zhiding-1ae4b03d.css"])
}, {
  path: "/chanpin",
  name: "Chanpin",
  component: () => ya(() => import("./chanpin-4a5167fe.js"), ["assets/js/chanpin-4a5167fe.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/chanpin-b450f3bd.css"])
}, {
  path: "/renshe",
  name: "Renshe",
  component: () => ya(() => import("./renshe-915c2e63.js"), ["assets/js/renshe-915c2e63.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/renshe-c5f2ecdc.css"])
}, {
  path: "/mote",
  name: "Mote",
  component: () => ya(() => import("./mote-ff99f673.js"), ["assets/js/mote-ff99f673.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/useTopLayer-ae2c206f.js", "assets/js/assetGlob-e779cef9.js", "assets/css/mote-1df2cf46.css"])
}, {
  path: "/shangpin",
  name: "Shangpin",
  component: () => ya(() => import("./shangpin-f1109f3e.js"), ["assets/js/shangpin-f1109f3e.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/StylePicker-959893e4.js", "assets/js/assetGlob-e779cef9.js", "assets/css/StylePicker-2dc3ab37.css", "assets/js/usePageScrollLock-8ead61e2.js", "assets/js/imageDownload-9126bae7.js", "assets/css/shangpin-7c9d799e.css"])
}, {
  path: "/ecomhot",
  redirect: t => ({
    path: "/mote",
    query: {
      ...t.query,
      tab: String(t.query.scene || t.query.tab || "face-swap")
    }
  })
}, {
  path: "/ecomset",
  name: "Dspro",
  component: () => ya(() => import("./Workbench-46dfe229.js"), ["assets/js/Workbench-46dfe229.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/useAuthGate-591ea2a8.js", "assets/js/useTopLayer-ae2c206f.js", "assets/css/Workbench-d36718b4.css"]),
  beforeEnter: (t, o, i) => {
    !t.query.cat && !t.query.scene ? i({
      path: "/ecomset",
      query: {
        ...t.query,
        cat: "product",
        scene: "product-main"
      },
      replace: !0
    }) : i()
  }
}, {
  path: "/pod",
  name: "Pod",
  component: () => ya(() => import("./pod-3680898f.js"), ["assets/js/pod-3680898f.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/usePageScrollLock-8ead61e2.js", "assets/css/pod-b90c6ce7.css"])
}, {
  path: "/liaotiandianshang",
  name: "Liaotiandianshang",
  component: () => ya(() => import("./liaotiandianshang-7e41ddff.js"), ["assets/js/liaotiandianshang-7e41ddff.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/ltds-example-4-73ee0650.js", "assets/css/liaotiandianshang-b4815dbe.css"])
}, {
  path: "/fantui",
  name: "Fantui",
  component: () => ya(() => import("./fantui-f53a515b.js"), ["assets/js/fantui-f53a515b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/fantui-14dec921.css"])
}, {
  path: "/note/:id",
  name: "NoteEditor",
  component: dge,
  meta: {
    requireOwnedWork: !0
  }
}, {
  path: "/note2/:id",
  name: "NoteEditor2",
  component: Gpe,
  meta: {
    requireOwnedWork: !0
  }
}, {
  path: "/notepro/:id",
  name: "NotePro",
  component: () => ya(() => import("./NotePro-1128bfe3.js"), ["assets/js/NotePro-1128bfe3.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/NotePro-88312a5b.css"]),
  meta: {
    requireOwnedWork: !0
  }
}, {
  path: "/notemax/:id",
  name: "NoteMax",
  component: () => ya(() => import("./NoteMax-a2bcf078.js"), ["assets/js/NoteMax-a2bcf078.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/NoteMax-d1975108.css"]),
  meta: {
    requireOwnedWork: !0
  }
}, {
  path: "/photonote/:id",
  name: "PhotoNote",
  component: () => ya(() => import("./PhotoNote-820d129b.js"), ["assets/js/PhotoNote-820d129b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/PhotoNote-f14bde8d.css"]),
  meta: {
    requireOwnedWork: !0
  }
}, {
  path: "/notediy/:id",
  name: "NoteDiy",
  component: () => ya(() => import("./NoteDiy-7a6a40da.js"), ["assets/js/NoteDiy-7a6a40da.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/html2canvas.esm-e0a7d97b.js", "assets/css/NoteDiy-9b75e1d1.css"]),
  meta: {
    requireOwnedWork: !0
  }
}, {
  path: "/product/:category/:id",
  name: "Product",
  component: y1e
}, {
  path: "/product2/:category/:id",
  name: "Product2",
  component: Dye
}, {
  path: "/tiaozhuan",
  name: "Tiaozhuan",
  component: ihe
}, {
  path: "/fabuma",
  name: "Fabuma",
  component: () => ya(() => import("./Fabuma-168467ee.js"), ["assets/js/Fabuma-168467ee.js", "assets/js/vue-router-9fee84ca.js", "assets/js/element-plus-f206ab5d.js", "assets/css/Fabuma-dc64ea3e.css"])
}, {
  path: "/yulanm",
  name: "Yulanm",
  component: _he
}, {
  path: "/yulanm2",
  name: "Yulanm2",
  component: Ohe
}, {
  path: "/aisousuo",
  name: "Aisousuo",
  component: V0e
}, {
  path: "/pics",
  name: "Pics",
  component: dwe
}, {
  path: "/wappay",
  name: "Wappay",
  component: p_e
}, {
  path: "/aiwenan",
  name: "AiWenan",
  component: cke
}, {
  path: "/pingjia",
  name: "Pingjia",
  component: () => ya(() => import("./pingjia-a6535da7.js"), ["assets/js/pingjia-a6535da7.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/pingjia-158036c3.css"])
}, {
  path: "/baokuan",
  name: "Baokuan",
  component: () => ya(() => import("./baokuan-ac2ea29d.js"), ["assets/js/baokuan-ac2ea29d.js", "assets/js/element-plus-f206ab5d.js", "assets/js/marked.esm-bf1273d9.js", "assets/js/vue-router-9fee84ca.js", "assets/css/baokuan-32cb8654.css"])
}, {
  path: "/video3",
  name: "Video3",
  component: () => ya(() => import("./video3-53da7f65.js"), ["assets/js/video3-53da7f65.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/localVideoWorks-c38a6e08.js", "assets/js/productLibrary-395ba5e9.js", "assets/js/publishCopy-4a80fb39.js", "assets/js/dianpuLink-a83a0281.js", "assets/js/VideoGenerateOverlay-0f3f6573.js", "assets/css/VideoGenerateOverlay-1928535b.css", "assets/css/video3-c06e8b8b.css"])
}, {
  path: "/weigui",
  name: "Weigui",
  component: () => ya(() => import("./weigui-0aad273b.js"), ["assets/js/weigui-0aad273b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/marked.esm-bf1273d9.js", "assets/css/weigui-40b3d998.css"])
}, {
  path: "/photo",
  name: "Photo",
  component: () => ya(() => import("./photo-79d846ef.js"), ["assets/js/photo-79d846ef.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/photo-647577c1.css"])
}, {
  path: "/make",
  name: "Make",
  component: () => ya(() => import("./make-bee594c0.js"), ["assets/js/make-bee594c0.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/memoTemplates-c886f9d1.js", "assets/css/memoTemplates-aadadb07.css", "assets/js/gonggeTemplates-f216e909.js", "assets/js/wanggandaziTemplates-81cc0b17.js", "assets/js/cepingTemplates-c705c5c7.js", "assets/js/pengyouquanTemplates-e18bf469.js", "assets/css/make-265b1200.css"])
}, {
  path: "/noteanli/:slug",
  name: "NoteAnliWork",
  component: () => ya(() => import("./NoteAnli-11926290.js"), ["assets/js/NoteAnli-11926290.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/NoteAnli-6d5dec72.css"])
}, {
  path: "/noteanli",
  name: "NoteAnliList",
  component: () => ya(() => import("./anli-9b657fbd.js"), ["assets/js/anli-9b657fbd.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/DemoGuideBottomNav-58f478a9.js", "assets/css/DemoGuideBottomNav-3a05c9ca.css", "assets/css/anli-75b782d0.css"])
}, {
  path: "/anli",
  redirect: "/noteanli"
}, {
  path: "/article",
  name: "Article",
  component: () => ya(() => import("./article-ffc99ecb.js"), ["assets/js/article-ffc99ecb.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/article-7d44f412.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/tishici",
  name: "Tishici",
  component: () => ya(() => import("./tishici-fca781df.js"), ["assets/js/tishici-fca781df.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/tishici-3a4ee16c.css", "assets/css/el-divider-53038a21.css"])
}, {
  path: "/quanyi",
  name: "Quanyi",
  component: () => ya(() => import("./quanyi-25921619.js"), ["assets/js/quanyi-25921619.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/quanyi-a3456226.css"])
}, {
  path: "/tiaokuan",
  name: "Tiaokuan",
  component: () => ya(() => import("./Tiaokuan-5377fd81.js"), ["assets/js/Tiaokuan-5377fd81.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/Tiaokuan-b65abee9.css"])
}, {
  path: "/jiaocheng",
  name: "Jiaocheng",
  component: () => ya(() => import("./Jiaocheng-7a6ae73d.js"), ["assets/js/Jiaocheng-7a6ae73d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/element-plus-f206ab5d.js", "assets/css/Jiaocheng-49feb628.css"])
}, {
  path: "/jiaocheng/:board",
  name: "JiaochengBoard",
  component: () => ya(() => import("./Jiaocheng-7a6ae73d.js"), ["assets/js/Jiaocheng-7a6ae73d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/element-plus-f206ab5d.js", "assets/css/Jiaocheng-49feb628.css"])
}, {
  path: "/gaitu",
  name: "Gaitu",
  component: () => ya(() => import("./gaitu-6636a6f2.js"), ["assets/js/gaitu-6636a6f2.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/gaitu-4a47d3d7.css"])
}, {
  path: "/aipic",
  name: "Aipic",
  component: () => ya(() => import("./aipic-eecdb644.js"), ["assets/js/aipic-eecdb644.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/StylePicker-959893e4.js", "assets/js/assetGlob-e779cef9.js", "assets/css/StylePicker-2dc3ab37.css", "assets/css/aipic-8e2b73de.css"])
}, {
  path: "/aidantu",
  name: "Aidantu",
  component: () => ya(() => import("./aidantu-bdde66dc.js"), ["assets/js/aidantu-bdde66dc.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/aidantu-3633a7ed.css"])
}, {
  path: "/ziyoutuwen",
  name: "Ziyoutuwen",
  component: () => ya(() => import("./ziyoutuwen-b4c93f54.js"), ["assets/js/ziyoutuwen-b4c93f54.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/ziyoutuwen-ffa93d08.css"])
}, {
  path: "/aicopypic",
  name: "Aicopypic",
  component: () => ya(() => import("./aicopypic-df2ef835.js"), ["assets/js/aicopypic-df2ef835.js", "assets/js/aipic-eecdb644.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/StylePicker-959893e4.js", "assets/js/assetGlob-e779cef9.js", "assets/css/StylePicker-2dc3ab37.css", "assets/css/aipic-8e2b73de.css"])
}, {
  path: "/xiangqingye",
  name: "Xiangqingye",
  component: () => ya(() => import("./aipic-eecdb644.js"), ["assets/js/aipic-eecdb644.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/StylePicker-959893e4.js", "assets/js/assetGlob-e779cef9.js", "assets/css/StylePicker-2dc3ab37.css", "assets/css/aipic-8e2b73de.css"])
}, {
  path: "/aifengmian",
  name: "Aifengmian",
  component: () => ya(() => import("./aifengmian-03998c34.js"), ["assets/js/aifengmian-03998c34.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/aifengmian-44413f33.css"])
}, {
  path: "/wenzikapian",
  name: "Wenzikapian",
  component: () => ya(() => import("./wenzikapian-9a6faa1b.js"), ["assets/js/wenzikapian-9a6faa1b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/html2canvas.esm-e0a7d97b.js", "assets/js/useAuthGate-591ea2a8.js", "assets/js/vue-router-9fee84ca.js", "assets/css/wenzikapian-a9d2840e.css"])
}, {
  path: "/aihaibao",
  name: "Aihaibao",
  component: () => ya(() => import("./aihaibao-16e4cc46.js"), ["assets/js/aihaibao-16e4cc46.js", "assets/js/aifengmian-03998c34.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/aifengmian-44413f33.css"])
}, {
  path: "/logo",
  name: "Logo",
  component: () => ya(() => import("./logo-667439eb.js"), ["assets/js/logo-667439eb.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/logo-ff74c2fc.css"])
}, {
  path: "/gzhst",
  name: "Gzhst",
  component: () => ya(() => import("./gzhst-f438199a.js"), ["assets/js/gzhst-f438199a.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/gzhst-b10e9737.css"])
}, {
  path: "/fanyi",
  name: "Fanyi",
  component: () => ya(() => import("./fanyi-f3c4c5d3.js"), ["assets/js/fanyi-f3c4c5d3.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/fanyi-bfd2e39a.css"])
}, {
  path: "/zhengjianzhao",
  name: "Zhengjianzhao",
  component: () => ya(() => import("./zhengjianzhao-8c128534.js"), ["assets/js/zhengjianzhao-8c128534.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/zhengjianzhao-6b019918.css"])
}, {
  path: "/zhengjianzhao/create",
  name: "ZhengjianzhaoCreate",
  component: () => ya(() => import("./zhengjianzhaoCreate-bc212f93.js"), ["assets/js/zhengjianzhaoCreate-bc212f93.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/zhengjianzhao-8c128534.js", "assets/css/zhengjianzhao-6b019918.css", "assets/css/zhengjianzhaoCreate-cf2cece6.css"])
}, {
  path: "/caijian",
  name: "Caijian",
  component: () => ya(() => import("./caijian-1b6f4a2e.js"), ["assets/js/caijian-1b6f4a2e.js", "assets/js/element-plus-f206ab5d.js", "assets/js/gaitu1-993f6879.js", "assets/js/vue-router-9fee84ca.js", "assets/css/caijian-ff75170c.css"])
}, {
  path: "/gonggepintu",
  name: "Gonggepintu",
  component: () => ya(() => import("./gonggepintu-62385fdb.js"), ["assets/js/gonggepintu-62385fdb.js", "assets/js/element-plus-f206ab5d.js", "assets/js/imageDownload-9126bae7.js", "assets/js/vue-router-9fee84ca.js", "assets/css/gonggepintu-c6bc04de.css", "assets/css/el-color-picker-97484565.css"])
}, {
  path: "/imgtools/:tool?",
  name: "ImgTools",
  component: () => ya(() => import("./ImgTools-0c065e0d.js"), ["assets/js/ImgTools-0c065e0d.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/ImgTools-35c1b0bd.css"])
}, {
  path: "/cardmaker",
  name: "Cardmaker",
  component: () => ya(() => import("./cardmaker-680de685.js"), ["assets/js/cardmaker-680de685.js", "assets/js/element-plus-f206ab5d.js", "assets/js/html2canvas.esm-e0a7d97b.js", "assets/js/vue-router-9fee84ca.js", "assets/css/cardmaker-a7685a03.css"])
}, {
  path: "/aipic/tuji",
  name: "AipicTuji",
  component: () => ya(() => import("./aipic-tuji-3e915a2b.js"), ["assets/js/aipic-tuji-3e915a2b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/aipic-tuji-89091db2.css"])
}, {
  path: "/video",
  name: "Video",
  component: () => ya(() => import("./video-34f752a2.js"), ["assets/js/video-34f752a2.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/ComingSoonDialog-1247d127.js", "assets/css/ComingSoonDialog-54fa34a5.css", "assets/js/VideoGenerateOverlay-0f3f6573.js", "assets/css/VideoGenerateOverlay-1928535b.css", "assets/js/videoModelSwitch-8a218fcb.js", "assets/css/videoModelSwitch-2715655d.css", "assets/css/video-3af1ed1a.css"])
}, {
  path: "/tuzhuanvideo",
  name: "TuZhuanVideo",
  component: () => ya(() => import("./tuzhuanvideo-611cbd30.js"), ["assets/js/tuzhuanvideo-611cbd30.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/VideoGenerateOverlay-0f3f6573.js", "assets/css/VideoGenerateOverlay-1928535b.css", "assets/js/videoModelSwitch-8a218fcb.js", "assets/css/videoModelSwitch-2715655d.css", "assets/css/tuzhuanvideo-94d8a0ea.css"])
}, {
  path: "/daihuokoubo",
  name: "Daihuokoubo",
  component: () => ya(() => import("./daihuokoubo-3e2ca16b.js"), ["assets/js/daihuokoubo-3e2ca16b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/VideoGenerateOverlay-0f3f6573.js", "assets/css/VideoGenerateOverlay-1928535b.css", "assets/js/videoModelSwitch-8a218fcb.js", "assets/css/videoModelSwitch-2715655d.css", "assets/css/daihuokoubo-90b0db55.css"])
}, {
  path: "/video2",
  name: "Video2",
  component: () => ya(() => import("./video2-ad82d690.js"), ["assets/js/video2-ad82d690.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/VideoGenerateOverlay-0f3f6573.js", "assets/css/VideoGenerateOverlay-1928535b.css", "assets/js/localVideoWorks-c38a6e08.js", "assets/js/productLibrary-395ba5e9.js", "assets/js/publishCopy-4a80fb39.js", "assets/js/dianpuLink-a83a0281.js", "assets/css/video2-2e6fb330.css"])
}, {
  path: "/video/detail/:id",
  name: "VideoDetailRedirect",
  redirect: t => ({
    path: "/video",
    query: {
      detailId: t.params.id
    }
  })
}, {
  path: "/aipicing",
  name: "Aipicing",
  component: () => ya(() => import("./aipicing-cf240a5a.js"), ["assets/js/aipicing-cf240a5a.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/imageDownload-9126bae7.js", "assets/css/aipicing-76f5fa15.css"])
}, {
  path: "/mypic",
  name: "Mypic",
  component: () => ya(() => import("./mypic-25eac531.js"), ["assets/js/mypic-25eac531.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/mypic-f2499eba.css"])
}, {
  path: "/myvideo",
  name: "Myvideo",
  component: () => ya(() => import("./myvideo-89c1687d.js"), ["assets/js/myvideo-89c1687d.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/localVideoWorks-c38a6e08.js", "assets/js/publishCopy-4a80fb39.js", "assets/css/myvideo-849d1752.css"])
}, {
  path: "/myedits",
  name: "MyEdits",
  component: () => ya(() => import("./MyEdits-f11aa33b.js"), ["assets/js/MyEdits-f11aa33b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/MyEdits-648423ab.css"])
}, {
  path: "/wangdianma",
  name: "Wangdianma",
  component: () => ya(() => import("./wangdianma-611a0289.js"), ["assets/js/wangdianma-611a0289.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/dianpuLink-a83a0281.js", "assets/js/marketingCalendar-c6d45d74.js", "assets/css/wangdianma-d22c9829.css"])
}, {
  path: "/wangdianma/visit",
  name: "WangdianmaVisit",
  component: () => ya(() => import("./wdmCustomer-0ead32de.js"), ["assets/js/wdmCustomer-0ead32de.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/dianpuLink-a83a0281.js", "assets/css/wdmCustomer-f6cd2e1d.css"])
}, {
  path: "/dianpuwenan",
  name: "Dianpuwenan",
  component: () => ya(() => import("./dianpuwenan-187ac1ad.js"), ["assets/js/dianpuwenan-187ac1ad.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/baowenLibrary-32d035ca.js", "assets/css/baowenLibrary-1033cca0.css", "assets/js/publishCopy-4a80fb39.js", "assets/js/dianpuLink-a83a0281.js", "assets/js/marketingCalendar-c6d45d74.js", "assets/css/dianpuwenan-51c72a72.css"])
}, {
  path: "/shitibaowen",
  name: "Shitibaowen",
  component: () => ya(() => import("./shitibaowen-db2f643e.js"), ["assets/js/shitibaowen-db2f643e.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/baowenLibrary-32d035ca.js", "assets/css/baowenLibrary-1033cca0.css", "assets/js/dianpuLink-a83a0281.js", "assets/css/shitibaowen-8fb56569.css"])
}, {
  path: "/gzh",
  name: "Gzh",
  component: () => ya(() => import("./gzh-10c64e5b.js"), ["assets/js/gzh-10c64e5b.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/css/gzh-84d9e99b.css"])
}, {
  path: "/geo",
  name: "Geo",
  redirect: "/geo/home"
}, {
  path: "/geo/home",
  name: "GeoHome",
  component: () => ya(() => import("./GeoHome-3a895f39.js"), ["assets/js/GeoHome-3a895f39.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/useGeoStore-fbee1a97.js", "assets/css/GeoHome-89cadf3b.css"])
}, {
  path: "/geo/sucai",
  name: "GeoSucai",
  component: () => ya(() => import("./SucaiYuanli-ac07533d.js"), ["assets/js/SucaiYuanli-ac07533d.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/GeoGuideDrawer-286ce810.js", "assets/css/GeoGuideDrawer-daff2666.css", "assets/js/useGeoStore-fbee1a97.js", "assets/css/SucaiYuanli-50469a46.css"])
}, {
  path: "/geo/article",
  name: "GeoArticle",
  component: () => ya(() => import("./ArticleWriting-af537caf.js"), ["assets/js/ArticleWriting-af537caf.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/GeoGuideDrawer-286ce810.js", "assets/css/GeoGuideDrawer-daff2666.css", "assets/js/index-cad1e958.js", "assets/js/useGeoStore-fbee1a97.js", "assets/js/geoArticleImages-694a2175.js", "assets/css/ArticleWriting-2b2b0c0e.css"])
}, {
  path: "/geo/liuliang",
  name: "GeoLiuliang",
  component: () => ya(() => import("./LiuliangFuke-8d0e8b5a.js"), ["assets/js/LiuliangFuke-8d0e8b5a.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/GeoGuideDrawer-286ce810.js", "assets/css/GeoGuideDrawer-daff2666.css", "assets/js/useGeoStore-fbee1a97.js", "assets/js/geoArticleImages-694a2175.js", "assets/css/LiuliangFuke-9c4c3d47.css"])
}, {
  path: "/gzh/writings",
  name: "GzhWritings",
  component: () => ya(() => import("./Writings-32b4a06e.js"), ["assets/js/Writings-32b4a06e.js", "assets/js/element-plus-f206ab5d.js", "assets/js/vue-router-9fee84ca.js", "assets/js/index-cad1e958.js", "assets/js/index-54488eb5.js", "assets/css/Writings-e6b2ac2d.css"])
}, {
  path: "/reg",
  name: "Register",
  redirect: t => {
    const o = t.query.invite,
      i = t.query.cdk;
    try {
      typeof window < "u" && window.localStorage && (o && window.localStorage.setItem("inviteCode", String(o).trim()), i != null && String(i).trim() !== "" && wg(i))
    } catch {}
    const n = {};
    o && (n.invite = String(o).trim());
    const s = i != null ? String(i).trim() : "";
    return s && (n.cdk = s), Object.keys(n).length ? {
      path: "/",
      query: n
    } : {
      path: "/"
    }
  }
}], Qr = e2({
  history: t2(),
  routes: dke
});

function Vb(t) {
  try {
    return typeof localStorage > "u" ? "" : localStorage.getItem(t) || ""
  } catch {
    return ""
  }
}

function zb(t, o) {
  try {
    if (typeof localStorage > "u") return;
    localStorage.setItem(t, o)
  } catch {}
}
Qr.beforeEach((t, o, i) => {
  const n = t.query.invite ?? t.query.inivite;
  if (n != null && String(n).trim() !== "") return zb("inviteCode", String(n).trim()), i();
  const s = Vb("inviteCode");
  if (s) return i({
    path: t.path,
    query: {
      ...t.query,
      invite: s
    },
    hash: t.hash,
    replace: o === a2
  });
  i()
});
Qr.beforeEach(async (t, o, i) => {
  var d, f, y;
  const n = (d = t.meta) == null ? void 0 : d.requireOwnedWork,
    s = (f = t.meta) == null ? void 0 : f.requireVip;
  if (!n && !s) return i();
  let u = Vb("authToken");
  if (!u) {
    const w = (y = t.query) == null ? void 0 : y.token,
      S = String(Array.isArray(w) ? w[0] : w || "").trim();
    if (S) {
      zb("authToken", S);
      try {
        sessionStorage.setItem("pendingWechatAuthToken", S)
      } catch {}
      u = S
    }
  }
  if (!u) {
    const {
      ElMessage: w
    } = await ya(() => import("./element-plus-f206ab5d.js").then(S => S.de), []);
    return w.warning(s ? "请先登录并开通会员后访问该页面" : "请先登录后访问该页面"), i({
      path: "/"
    })
  }
  if (n && !s) return i();
  try {
    const [{
      getUserInfo: w
    }, {
      canAccessVipPage: S
    }] = await Promise.all([ya(() => Promise.resolve().then(() => R0), void 0), ya(() => Promise.resolve().then(() => AT), void 0)]), z = await w(), x = (z == null ? void 0 : z.data) ?? z ?? {};
    if (S(x)) return i();
    const {
      ElMessage: C
    } = await ya(() => import("./element-plus-f206ab5d.js").then($ => $.de), []);
    C.warning("该页面仅限会员或代理访问，请先开通会员");
    const V = typeof window < "u" && window.innerWidth <= 768;
    return i({
      path: V ? "/wappay" : "/quanyi"
    })
  } catch {
    return i({
      path: "/"
    })
  }
});
Qr.afterEach(t => {
  t6(t)
});
const vke = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: Qr
}, Symbol.toStringTag, {
  value: "Module"
})); /*! Element Plus v2.14.2 */
var mke = {
  name: "zh-cn",
  el: {
    breadcrumb: {
      label: "面包屑"
    },
    colorpicker: {
      confirm: "确定",
      clear: "清空",
      defaultLabel: "颜色选择器",
      description: "当前颜色 {color}，按 Enter 键选择新颜色",
      alphaLabel: "选择透明度的值",
      alphaDescription: "透明度 {alpha}, 当前颜色 {color}",
      hueLabel: "选择色相值",
      hueDescription: "色相 {hue}, 当前颜色 {color}",
      svLabel: "选择饱和度与明度的值",
      svDescription: "饱和度 {saturation}, 明度 {brightness}, 当前颜色 {color}",
      predefineDescription: "选择 {value} 作为颜色"
    },
    datepicker: {
      now: "此刻",
      today: "今天",
      cancel: "取消",
      clear: "清空",
      confirm: "确定",
      dateTablePrompt: "使用方向键与 Enter 键可选择日期",
      monthTablePrompt: "使用方向键与 Enter 键可选择月份",
      yearTablePrompt: "使用方向键与 Enter 键可选择年份",
      selectedDate: "已选日期",
      selectDate: "选择日期",
      selectTime: "选择时间",
      startDate: "开始日期",
      startTime: "开始时间",
      endDate: "结束日期",
      endTime: "结束时间",
      prevYear: "前一年",
      nextYear: "后一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      year: "年",
      month1: "1 月",
      month2: "2 月",
      month3: "3 月",
      month4: "4 月",
      month5: "5 月",
      month6: "6 月",
      month7: "7 月",
      month8: "8 月",
      month9: "9 月",
      month10: "10 月",
      month11: "11 月",
      month12: "12 月",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      weeksFull: {
        sun: "星期日",
        mon: "星期一",
        tue: "星期二",
        wed: "星期三",
        thu: "星期四",
        fri: "星期五",
        sat: "星期六"
      },
      months: {
        jan: "一月",
        feb: "二月",
        mar: "三月",
        apr: "四月",
        may: "五月",
        jun: "六月",
        jul: "七月",
        aug: "八月",
        sep: "九月",
        oct: "十月",
        nov: "十一月",
        dec: "十二月"
      }
    },
    inputNumber: {
      decrease: "减少数值",
      increase: "增加数值"
    },
    select: {
      loading: "加载中",
      noMatch: "无匹配数据",
      noData: "无数据",
      placeholder: "请选择"
    },
    mention: {
      loading: "加载中"
    },
    dropdown: {
      toggleDropdown: "切换下拉选项"
    },
    cascader: {
      noMatch: "无匹配数据",
      loading: "加载中",
      placeholder: "请选择",
      noData: "暂无数据"
    },
    pagination: {
      goto: "前往",
      pagesize: "条/页",
      total: "共 {total} 条",
      pageClassifier: "页",
      page: "页",
      prev: "上一页",
      next: "下一页",
      currentPage: "第 {pager} 页",
      prevPages: "向前 {pager} 页",
      nextPages: "向后 {pager} 页",
      deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
    },
    dialog: {
      close: "关闭此对话框"
    },
    drawer: {
      close: "关闭此对话框"
    },
    messagebox: {
      title: "提示",
      confirm: "确定",
      cancel: "取消",
      error: "输入的数据不合法!",
      close: "关闭此对话框"
    },
    upload: {
      deleteTip: "按 Delete 键可删除",
      delete: "删除",
      preview: "查看图片",
      continue: "继续上传"
    },
    slider: {
      defaultLabel: "滑块介于 {min} 至 {max}",
      defaultRangeStartLabel: "选择起始值",
      defaultRangeEndLabel: "选择结束值"
    },
    table: {
      emptyText: "暂无数据",
      confirmFilter: "筛选",
      resetFilter: "重置",
      clearFilter: "全部",
      sumText: "合计",
      selectAllLabel: "选择所有行",
      selectRowLabel: "选择当前行",
      expandRowLabel: "展开当前行",
      collapseRowLabel: "收起当前行",
      sortLabel: "按 {column} 排序",
      filterLabel: "按 {column} 过滤"
    },
    tag: {
      close: "关闭此标签"
    },
    tour: {
      next: "下一步",
      previous: "上一步",
      finish: "结束导览",
      close: "关闭此对话框"
    },
    tree: {
      emptyText: "暂无数据"
    },
    transfer: {
      noMatch: "无匹配数据",
      noData: "无数据",
      titles: ["列表 1", "列表 2"],
      filterPlaceholder: "请输入搜索内容",
      noCheckedFormat: "共 {total} 项",
      hasCheckedFormat: "已选 {checked}/{total} 项"
    },
    image: {
      error: "加载失败"
    },
    pageHeader: {
      title: "返回"
    },
    popconfirm: {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    },
    carousel: {
      leftArrow: "上一张幻灯片",
      rightArrow: "下一张幻灯片",
      indicator: "幻灯片切换至索引 {index}"
    },
    inputOTP: {
      groupLabel: "一次性密码输入框",
      defaultLabel: "请输入第 {index} 位 OTP 字符"
    }
  }
};
(() => {
  var t = Object.defineProperty,
    o = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    n = Object.prototype.propertyIsEnumerable,
    s = (Ge, dt, qt) => dt in Ge ? t(Ge, dt, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: qt
    }) : Ge[dt] = qt,
    u = (Ge, dt) => {
      for (var qt in dt || (dt = {})) i.call(dt, qt) && s(Ge, qt, dt[qt]);
      if (o)
        for (var qt of o(dt)) n.call(dt, qt) && s(Ge, qt, dt[qt]);
      return Ge
    },
    d = (Ge, dt, qt) => (s(Ge, typeof dt != "symbol" ? dt + "" : dt, qt), qt),
    f = (Ge, dt, qt) => new Promise((ka, Ne) => {
      var ga = Ve => {
          try {
            Oe(qt.next(Ve))
          } catch (Ma) {
            Ne(Ma)
          }
        },
        St = Ve => {
          try {
            Oe(qt.throw(Ve))
          } catch (Ma) {
            Ne(Ma)
          }
        },
        Oe = Ve => Ve.done ? ka(Ve.value) : Promise.resolve(Ve.value).then(ga, St);
      Oe((qt = qt.apply(Ge, dt)).next())
    }),
    y = navigator.userAgent || "",
    w = /android/i.test(y),
    S = /iphone|ipad|ipod/i.test(y),
    z = /micromessenger\/([\d.]+)/i.test(y),
    x = /qq\/([\d.]+)/i.test(y),
    C = () => w ? "Android" : S ? "iOS" : "pc";
  /chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(y) && w && y.indexOf("Version") < 0;
  var V = {
      UNIVERSAL_LINK: "https://oia.xiaohongshu.com/oia",
      URL_SCHEMA: "xhsdiscover://js_share_sdk",
      APP_STORE_LINK: "http://www.xiaohongshu.com/web_api/sns/v1/catalan/ios/5b61227acd30d845a70d3107",
      YINGYONGBAO: "http://a.app.qq.com/o/simple.jsp?pkgname=com.xingin.xhs",
      TIMEOUT: 1e3
    },
    $ = {
      isCombo: !0,
      maxComboNum: 5,
      collectTime: 5e3
    },
    N = function(Ge, dt, qt, ka) {
      function Ne(ga) {
        return ga instanceof qt ? ga : new qt(function(St) {
          St(ga)
        })
      }
      return new(qt || (qt = Promise))(function(ga, St) {
        function Oe(Je) {
          try {
            Ma(ka.next(Je))
          } catch (ve) {
            St(ve)
          }
        }

        function Ve(Je) {
          try {
            Ma(ka.throw(Je))
          } catch (ve) {
            St(ve)
          }
        }

        function Ma(Je) {
          Je.done ? ga(Je.value) : Ne(Je.value).then(Oe, Ve)
        }
        Ma((ka = ka.apply(Ge, dt || [])).next())
      })
    },
    T = Function("return this")();
  T.__APM_COMBO_CACHE_GROUP__ = null;

  function R(Ge) {
    return Object.prototype.toString.call(Ge) === "[object Object]"
  }

  function O(Ge, dt) {
    let qt = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: dt
    };
    return R(dt) && (qt.body = JSON.stringify(dt)), fetch(Ge, qt)
  }

  function J(Ge, dt = {}, {
    request: qt = null,
    isCombo: ka = !0,
    maxComboNum: Ne = 5,
    collectTime: ga = Ne * 1e3,
    callback: St = null
  } = {}) {
    if (!Ge || JSON.stringify(dt) === "{}") return;
    let Oe = () => N(this, void 0, void 0, function*() {
      var Ve;
      if (!((Ve = T.__APM_COMBO_CACHE_GROUP__) === null || Ve === void 0) && Ve.data.length) {
        let {
          key: Ma,
          data: Je,
          timer: ve
        } = T.__APM_COMBO_CACHE_GROUP__;
        return clearTimeout(ve), T.__APM_COMBO_CACHE_GROUP__ = null, yield(qt || O).call(null, Ma, Je)
      }
      return null
    });
    return new Promise((Ve, Ma) => {
      var Je, ve;
      if (!ka) qt.call(null, Ge, dt);
      else if (Ge) {
        if (!((Je = T.__APM_COMBO_CACHE_GROUP__) === null || Je === void 0) && Je.key || (T.__APM_COMBO_CACHE_GROUP__ = {
            key: Ge,
            data: [],
            timer: setTimeout(() => {
              var $t;
              let ta = ($t = T.__APM_COMBO_CACHE_GROUP__) === null || $t === void 0 ? void 0 : $t.data;
              Oe().then(ha => {
                St == null || St(ta), Ve(ha)
              }).catch(ha => {
                Ma(ha)
              })
            }, ga)
          }), T.__APM_COMBO_CACHE_GROUP__.data.push(dt), T.__APM_COMBO_CACHE_GROUP__.data.length >= Ne) {
          let $t = (ve = T.__APM_COMBO_CACHE_GROUP__) === null || ve === void 0 ? void 0 : ve.data;
          Oe().then(ta => {
            St == null || St($t), Ve(ta)
          }).catch(ta => {
            Ma(ta)
          })
        }
      } else Ma(`接口 url: ${Ge} 不能为空`)
    })
  }

  function ee(Ge, dt, {
    request: qt
  }) {
    return (qt || O).call(null, Ge, dt)
  }
  var ie = class {
      constructor(Ge, dt = $) {
        this.endpoint = Ge, this.config = dt;
        let {
          request: qt,
          requestCallback: ka,
          isCombo: Ne,
          maxComboNum: ga,
          collectTime: St
        } = this.config;
        this.url = Ge, this.request = qt, this.requestCallback = ka, this.maxComboNum = ga, this.isCombo = Ne, this.collectTime = St
      }
      push(Ge) {
        return J(this.url, Ge, {
          request: this.request,
          isCombo: this.isCombo,
          maxComboNum: this.maxComboNum,
          collectTime: this.collectTime,
          callback: this.requestCallback
        })
      }
      flush(Ge) {
        return ee(this.url, Ge, {
          request: this.request
        })
      }
    },
    Ae = new ie("https://spider-tracker.xiaohongshu.com/api/data", {
      request: (Ge, dt) => fetch(Ge, {
        method: "POST",
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,fr;q=0.6",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "Biz-Type": 1663676682
        },
        body: JSON.stringify(dt)
      }).then(qt => qt.json()),
      isCombo: !1
    });

  function F(Ge) {
    try {
      let dt = {
        context: {
          app_id: 26,
          session_id: "",
          platform: "Web",
          user_agent: navigator.userAgent || "",
          artifact_name: "goten",
          artifact_version: "0.0.1",
          user_id: "goten_js_sdk_mock_user_id",
          group_user_id: "",
          attributes: {}
        },
        event_info: {
          module_key: Ge,
          action: "CLICK",
          page_key: "goten",
          event_seq: 5,
          event_time: Date.now(),
          event_id: "",
          route_matched_path: "",
          url: "goten",
          attributes: {}
        }
      };
      Ae.push(dt)
    } catch (dt) {
      console.warn("[light track not support]:", dt)
    }
  }
  var Y = F;

  function ne(Ge, dt) {
    let qt = setTimeout(() => {
      Ge == null || Ge()
    }, dt);
    typeof document.addEventListener > "u" || typeof document.hidden > "u" ? console.log("This function requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.") : (document.addEventListener("visibilitychange", () => {
      document.hidden && clearTimeout(qt)
    }), window.onpagehide = () => {
      clearTimeout(qt)
    })
  }

  function De() {
    return ne(() => {
      window.location.href = V.APP_STORE_LINK
    }, V.TIMEOUT)
  }

  function Q(Ge) {
    return ne(() => {
      window.location.href = `${V.YINGYONGBAO}?android_schema=${encodeURIComponent(Ge)}`
    }, V.TIMEOUT)
  }

  function re(Ge) {
    Y("growth_js_sdk_share");
    let {
      universalLink: dt,
      urlSchema: qt,
      supportUniversal: ka
    } = Ge;
    S ? z || x || ka ? window.location.href = dt : (window.location.href = qt, De()) : w ? (window.location.href = qt, Q(qt)) : console.log("请在移动端设备调试")
  }
  var b = "3.7.5",
    te = b,
    we = typeof atob == "function",
    ae = typeof btoa == "function",
    me = typeof Buffer == "function",
    ce = typeof TextDecoder == "function" ? new TextDecoder : void 0,
    ue = typeof TextEncoder == "function" ? new TextEncoder : void 0,
    U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    de = Array.prototype.slice.call(U),
    _e = (Ge => {
      let dt = {};
      return Ge.forEach((qt, ka) => dt[qt] = ka), dt
    })(de),
    xe = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    Ce = String.fromCharCode.bind(String),
    Re = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : Ge => new Uint8Array(Array.prototype.slice.call(Ge, 0)),
    nt = Ge => Ge.replace(/=/g, "").replace(/[+\/]/g, dt => dt == "+" ? "-" : "_"),
    tt = Ge => Ge.replace(/[^A-Za-z0-9\+\/]/g, ""),
    qe = Ge => {
      let dt, qt, ka, Ne, ga = "",
        St = Ge.length % 3;
      for (let Oe = 0; Oe < Ge.length;) {
        if ((qt = Ge.charCodeAt(Oe++)) > 255 || (ka = Ge.charCodeAt(Oe++)) > 255 || (Ne = Ge.charCodeAt(Oe++)) > 255) throw new TypeError("invalid character found");
        dt = qt << 16 | ka << 8 | Ne, ga += de[dt >> 18 & 63] + de[dt >> 12 & 63] + de[dt >> 6 & 63] + de[dt & 63]
      }
      return St ? ga.slice(0, St - 3) + "===".substring(St) : ga
    },
    Me = ae ? Ge => btoa(Ge) : me ? Ge => Buffer.from(Ge, "binary").toString("base64") : qe,
    rt = me ? Ge => Buffer.from(Ge).toString("base64") : Ge => {
      let dt = [];
      for (let qt = 0, ka = Ge.length; qt < ka; qt += 4096) dt.push(Ce.apply(null, Ge.subarray(qt, qt + 4096)));
      return Me(dt.join(""))
    },
    ct = (Ge, dt = !1) => dt ? nt(rt(Ge)) : rt(Ge),
    E = Ge => {
      if (Ge.length < 2) {
        var dt = Ge.charCodeAt(0);
        return dt < 128 ? Ge : dt < 2048 ? Ce(192 | dt >>> 6) + Ce(128 | dt & 63) : Ce(224 | dt >>> 12 & 15) + Ce(128 | dt >>> 6 & 63) + Ce(128 | dt & 63)
      } else {
        var dt = 65536 + (Ge.charCodeAt(0) - 55296) * 1024 + (Ge.charCodeAt(1) - 56320);
        return Ce(240 | dt >>> 18 & 7) + Ce(128 | dt >>> 12 & 63) + Ce(128 | dt >>> 6 & 63) + Ce(128 | dt & 63)
      }
    },
    _ = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    je = Ge => Ge.replace(_, E),
    K = me ? Ge => Buffer.from(Ge, "utf8").toString("base64") : ue ? Ge => rt(ue.encode(Ge)) : Ge => Me(je(Ge)),
    B = (Ge, dt = !1) => dt ? nt(K(Ge)) : K(Ge),
    W = Ge => B(Ge, !0),
    Te = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    it = Ge => {
      switch (Ge.length) {
        case 4:
          var dt = (7 & Ge.charCodeAt(0)) << 18 | (63 & Ge.charCodeAt(1)) << 12 | (63 & Ge.charCodeAt(2)) << 6 | 63 & Ge.charCodeAt(3),
            qt = dt - 65536;
          return Ce((qt >>> 10) + 55296) + Ce((qt & 1023) + 56320);
        case 3:
          return Ce((15 & Ge.charCodeAt(0)) << 12 | (63 & Ge.charCodeAt(1)) << 6 | 63 & Ge.charCodeAt(2));
        default:
          return Ce((31 & Ge.charCodeAt(0)) << 6 | 63 & Ge.charCodeAt(1))
      }
    },
    yt = Ge => Ge.replace(Te, it),
    st = Ge => {
      if (Ge = Ge.replace(/\s+/g, ""), !xe.test(Ge)) throw new TypeError("malformed base64.");
      Ge += "==".slice(2 - (Ge.length & 3));
      let dt, qt = "",
        ka, Ne;
      for (let ga = 0; ga < Ge.length;) dt = _e[Ge.charAt(ga++)] << 18 | _e[Ge.charAt(ga++)] << 12 | (ka = _e[Ge.charAt(ga++)]) << 6 | (Ne = _e[Ge.charAt(ga++)]), qt += ka === 64 ? Ce(dt >> 16 & 255) : Ne === 64 ? Ce(dt >> 16 & 255, dt >> 8 & 255) : Ce(dt >> 16 & 255, dt >> 8 & 255, dt & 255);
      return qt
    },
    Ie = we ? Ge => atob(tt(Ge)) : me ? Ge => Buffer.from(Ge, "base64").toString("binary") : st,
    pe = me ? Ge => Re(Buffer.from(Ge, "base64")) : Ge => Re(Ie(Ge).split("").map(dt => dt.charCodeAt(0))),
    Be = Ge => pe(Yt(Ge)),
    xt = me ? Ge => Buffer.from(Ge, "base64").toString("utf8") : ce ? Ge => ce.decode(pe(Ge)) : Ge => yt(Ie(Ge)),
    Yt = Ge => tt(Ge.replace(/[-_]/g, dt => dt == "-" ? "+" : "/")),
    Ye = Ge => xt(Yt(Ge)),
    va = Ge => {
      if (typeof Ge != "string") return !1;
      let dt = Ge.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(dt) || !/[^\s0-9a-zA-Z\-_]/.test(dt)
    },
    Ea = Ge => ({
      value: Ge,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }),
    ft = function() {
      let Ge = (dt, qt) => Object.defineProperty(String.prototype, dt, Ea(qt));
      Ge("fromBase64", function() {
        return Ye(this)
      }), Ge("toBase64", function(dt) {
        return B(this, dt)
      }), Ge("toBase64URI", function() {
        return B(this, !0)
      }), Ge("toBase64URL", function() {
        return B(this, !0)
      }), Ge("toUint8Array", function() {
        return Be(this)
      })
    },
    Z = function() {
      let Ge = (dt, qt) => Object.defineProperty(Uint8Array.prototype, dt, Ea(qt));
      Ge("toBase64", function(dt) {
        return ct(this, dt)
      }), Ge("toBase64URI", function() {
        return ct(this, !0)
      }), Ge("toBase64URL", function() {
        return ct(this, !0)
      })
    },
    pt = () => {
      ft(), Z()
    },
    Et = {
      version: b,
      VERSION: te,
      atob: Ie,
      atobPolyfill: st,
      btoa: Me,
      btoaPolyfill: qe,
      fromBase64: Ye,
      toBase64: B,
      encode: B,
      encodeURI: W,
      encodeURL: W,
      utob: je,
      btou: yt,
      decode: Ye,
      isValid: va,
      fromUint8Array: ct,
      toUint8Array: Be,
      extendString: ft,
      extendUint8Array: Z,
      extendBuiltins: pt
    },
    Mt = class extends Error {
      constructor(Ge) {
        super(Ge || "Validation Error"), d(this, "errCode"), d(this, "message"), this.errCode = 10001, this.message = Ge || "Validation Error"
      }
    },
    Qe = class extends Mt {
      constructor(Ge) {
        super(Ge || "Validation Error"), d(this, "errCode"), d(this, "message"), this.errCode = 10002, this.message = Ge || "Validation Error"
      }
    },
    j = {
      ValidationError: Mt,
      PropertyRequiredError: Qe
    },
    Ee = class extends Error {
      constructor(Ge) {
        super(Ge || "Unauthorized Error"), d(this, "errCode"), d(this, "message"), this.errCode = 20001, this.message = Ge || "Unauthorized Error"
      }
    },
    ht = class extends Error {
      constructor(Ge) {
        super(Ge || "InternalServer Error"), d(this, "errCode"), d(this, "message"), this.errCode = 20002, this.message = Ge || "Unauthorized Error"
      }
    },
    jt = class extends Error {
      constructor(Ge) {
        super(Ge || "BadRequest Error"), d(this, "errCode"), d(this, "message"), this.errCode = 20003, this.message = Ge || "Unauthorized Error"
      }
    },
    ca = {
      UnauthorizedError: Ee,
      InternalServerError: ht,
      BadRequestError: jt
    },
    be = "https://edith.xiaohongshu.com/api/sns/v1/ext/check/token";

  function he(Ge) {
    let dt = "",
      qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      ka = qt.length;
    for (let Ne = 0; Ne < Ge; Ne++) dt += qt.charAt(Math.floor(Math.random() * ka));
    return dt
  }
  var kt = he(10);

  function Bt(Ge, dt) {
    let {
      appKey: qt,
      nonce: ka,
      timestamp: Ne,
      signature: ga
    } = dt ?? {}, St = {
      sessionId: kt,
      pageUrl: window.location.href,
      appPlatform: C(),
      userAgent: navigator.userAgent || "",
      appKey: qt
    }, Oe = JSON.stringify(u(u({}, Ge), St));
    return fetch(be, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        app_key: qt,
        nonce: ka,
        timestamp: Ne,
        signature: ga,
        data: Et.encode(Oe)
      })
    }).then(Ve => Ve.json())
  }

  function Ze(Ge, dt) {
    let qt = Object.entries(dt).map(([ka, Ne]) => `${encodeURIComponent(ka)}=${encodeURIComponent(Ne)}`).join("&");
    return `${Ge}?${qt}`
  }

  function Wt(Ge, dt) {
    return f(this, null, function*() {
      let qt = "";
      try {
        let St = yield Bt(Ge, dt);
        if (St.success) qt = St.data.data_code;
        else throw St
      } catch (St) {
        throw new ca.UnauthorizedError(St == null ? void 0 : St.msg)
      }
      let {
        URL_SCHEMA: ka,
        UNIVERSAL_LINK: Ne
      } = V, ga = Ze(`${ka}`, {
        share_code: qt,
        app_key: dt.appKey,
        session_id: kt
      });
      return {
        universalLink: Ze(Ne, {
          deeplink: ga
        }),
        urlSchema: ga
      }
    })
  }
  var aa = {
      propertyRequiredError: {
        code: 10001,
        message: "No field"
      },
      validationError: {
        code: 10002,
        message: "Invalid data"
      }
    },
    xa = aa,
    Kt = Ge => `${xa.propertyRequiredError.message}: ${Ge}`,
    at = Ge => `${xa.validationError.message}: ${Ge}`;

  function Fe(Ge) {
    return Ge.length ? Array.isArray(Ge) && Ge.every(dt => typeof dt == "string" && (dt.startsWith("https") || dt.startsWith("http"))) : !1
  }

  function Ke(Ge) {
    return typeof Ge == "string"
  }

  function et(Ge) {
    let {
      type: dt,
      images: qt,
      video: ka,
      title: Ne,
      cover: ga,
      content: St
    } = Ge ?? {};
    if (!dt) throw new j.PropertyRequiredError(Kt("type"));
    switch (dt) {
      case "normal":
        if (qt) {
          if (!Fe(qt)) throw new j.ValidationError(at("images"))
        } else throw new j.PropertyRequiredError(Kt("images"));
        break;
      case "video":
        if (ka)
          if (Ke(ka)) {
            if (!ka.startsWith("https") && !ka.startsWith("http")) throw new j.ValidationError(at("video"))
          } else throw new j.ValidationError(at("video"));
        else throw new j.PropertyRequiredError(Kt("video"));
        break;
      default:
        throw new j.ValidationError(at("type"))
    }
    if (Ne && !Ke(Ne)) throw new j.ValidationError(at("title"));
    if (ga && Ke(Ne) && !ga.startsWith("https") && !ga.startsWith("http")) throw new j.ValidationError(at("cover"));
    if (St && !Ke(St)) throw new j.ValidationError(at("content"));
    return !0
  }
  var Nt = class {
      share(Ge) {
        return f(this, arguments, function*({
          shareInfo: dt,
          verifyConfig: qt,
          fail: ka
        }) {
          Y("growth_js_sdk_share");
          try {
            et(dt);
            let {
              universalLink: Ne,
              urlSchema: ga
            } = (yield Wt(dt, qt)) || {};
            re({
              universalLink: Ne,
              urlSchema: ga,
              supportUniversal: !0
            })
          } catch (Ne) {
            ka == null || ka(Ne)
          }
        })
      }
    },
    Ut = new Nt;
  window.xhs = Ut
})();
const gke = ["/aicopy", "/aicopys", "/chazhao"],
  Ey = "content-protection-noselect-style",
  xs = "content-protection-noselect";
let Ty = !1,
  ss = "",
  $y = !1;
const Kr = t => t ? gke.some(o => t === o || t.startsWith(o + "/")) : !1,
  fke = () => {
    try {
      const t = typeof localStorage < "u" ? localStorage.getItem("userInfo") : "";
      return t ? JSON.parse(t) || {} : {}
    } catch {
      return {}
    }
  },
  hc = () => {
    const t = fke();
    return lc(t) || vc(t)
  },
  pke = () => {
    if (typeof document > "u" || document.getElementById(Ey)) return;
    const t = document.createElement("style");
    t.id = Ey, t.textContent = `
.${xs}, .${xs} * {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  -webkit-touch-callout: none !important;
}
.${xs} input,
.${xs} textarea,
.${xs} [contenteditable="true"],
.${xs} [contenteditable=""] {
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  user-select: text !important;
}
`, document.head.appendChild(t)
  },
  yke = t => {
    var o;
    return t ? t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable ? !0 : !!((o = t.closest) != null && o.call(t, 'input, textarea, [contenteditable="true"], [contenteditable=""]')) : !1
  },
  hke = t => {
    if (Kr(ss) && !yke(t.target)) return t.preventDefault(), t.stopPropagation(), !1
  },
  bke = t => {
    if (!Kr(ss) || hc()) return;
    const o = t.target;
    if (!(o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable))) return t.preventDefault(), !1
  },
  Py = t => {
    if (!Kr(ss) || hc()) return;
    const o = t.target;
    if (!(o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable)) && (t.preventDefault(), t.clipboardData)) try {
      t.clipboardData.setData("text/plain", "")
    } catch {}
  },
  wke = t => {
    Kr(ss) && (hc() || t.preventDefault())
  },
  _ke = t => {
    if (!Kr(ss)) return;
    const o = (t.key || "").toLowerCase();
    if (o === "f12") {
      t.preventDefault();
      return
    }
    if ((t.ctrlKey || t.metaKey) && t.shiftKey && (o === "i" || o === "j" || o === "c")) {
      t.preventDefault();
      return
    }
    if ((t.ctrlKey || t.metaKey) && o === "u") {
      t.preventDefault();
      return
    }
    if (!hc() && (t.ctrlKey || t.metaKey) && (o === "c" || o === "x" || o === "a")) {
      const i = t.target;
      if (i && (i.tagName === "INPUT" || i.tagName === "TEXTAREA" || i.isContentEditable)) return;
      t.preventDefault()
    }
  },
  kke = () => {
    $y || typeof document > "u" || (document.addEventListener("contextmenu", hke, {
      capture: !0
    }), document.addEventListener("selectstart", bke, {
      capture: !0
    }), document.addEventListener("copy", Py, {
      capture: !0
    }), document.addEventListener("cut", Py, {
      capture: !0
    }), document.addEventListener("dragstart", wke, {
      capture: !0
    }), document.addEventListener("keydown", _ke, {
      capture: !0
    }), $y = !0)
  },
  Lg = () => {
    if (typeof document > "u" || !document.body) return;
    const o = Kr(ss) && !hc();
    document.body.classList.toggle(xs, o)
  },
  Lu = () => {
    Lg()
  };

function Cke(t) {
  var o, i;
  if (!Ty) {
    if (Ty = !0, pke(), kke(), t && typeof t.afterEach == "function") {
      t.afterEach(n => {
        ss = n.path || "", Lg()
      });
      try {
        ss = ((i = (o = t.currentRoute) == null ? void 0 : o.value) == null ? void 0 : i.path) || ""
      } catch {}
      Lg()
    }
    typeof window < "u" && (window.addEventListener("user-login", Lu), window.addEventListener("user-login-success", Lu), window.addEventListener("user-logout", Lu), window.addEventListener("storage", n => {
      (!n || n.key === "userInfo" || n.key === "authToken" || n.key === "is_daili") && Lu()
    }), window.addEventListener("localStorage-change", n => {
      var u;
      const s = (u = n == null ? void 0 : n.detail) == null ? void 0 : u.key;
      (s === "userInfo" || s === "authToken" || s === "is_daili" || !s) && Lu()
    }))
  }
}
let Ss = null,
  Xd = !1,
  Dg = "";

function Lb(t) {
  if (!t || typeof document > "u") return;
  const o = new URL(t, window.location.origin).href,
    i = document.querySelector('link[rel="icon"]');
  if (i && i.href === o) return;
  const n = /\.jpe?g(\?|$)/i.test(t) ? "image/jpeg" : "image/png";
  document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]').forEach(d => d.remove());
  const s = document.createElement("link");
  s.rel = "icon", s.type = n, s.href = t, document.head.appendChild(s);
  const u = document.createElement("link");
  u.rel = "apple-touch-icon", u.href = t, document.head.appendChild(u)
}

function Mg() {
  if (typeof document > "u") return;
  const t = $o();
  if (!t || !t.name || t.name === Mo) return;
  const o = i => typeof i == "string" ? i.split(Mo).join(t.name) : i;
  if (!Xd) try {
    const i = Object.getPrototypeOf(document),
      n = Object.getOwnPropertyDescriptor(i, "title") || Object.getOwnPropertyDescriptor(Document.prototype, "title");
    n && n.set && n.get && (Ss = n, Dg = t.name, Object.defineProperty(document, "title", {
      configurable: !0,
      get() {
        return n.get.call(document)
      },
      set(s) {
        n.set.call(document, o(s))
      }
    }), Xd = !0)
  } catch {}
  try {
    document.title = document.title
  } catch {}
  Lb(_A(t.logo))
}

function Ake() {
  const t = Dg;
  if (hA(), Xd && Ss && Ss.get && Ss.set) {
    let o = "";
    try {
      o = Ss.get.call(document)
    } catch {}
    try {
      Object.defineProperty(document, "title", {
        configurable: !0,
        get() {
          return Ss.get.call(document)
        },
        set(i) {
          Ss.set.call(document, i)
        }
      })
    } catch {}
    if (Xd = !1, Dg = "", t && o) try {
      document.title = o.split(t).join(Mo)
    } catch {}
  }
  Lb("/pwa/icon-192.png")
}
Mg();

function Ike(t) {
  return typeof t == "string" ? t : t && typeof t == "object" && typeof t.message == "string" ? t.message : ""
}
let Og = null,
  Du = null;

function Dd(t) {
  t && typeof t == "object" ? Og = t.data && typeof t.data == "object" ? t.data : t : Og = null
}

function Vy(t) {
  if (!t) return !1;
  try {
    return lc(t) || vc(t)
  } catch {
    return !1
  }
}
async function xke() {
  return Du || (Du = (async () => {
    try {
      const {
        getUserInfo: t
      } = await ya(() => Promise.resolve().then(() => R0), void 0), o = await t(), i = (o == null ? void 0 : o.data) ?? o ?? null;
      return Dd(i), i
    } catch {
      return null
    } finally {
      Du = null
    }
  })(), Du)
}
typeof window < "u" && (window.addEventListener("user-login-success", t => {
  Dd((t == null ? void 0 : t.detail) ?? null), q1((t == null ? void 0 : t.detail) ?? null), Mg()
}), window.addEventListener("user-logout", () => {
  Dd(null), Ake()
}), window.addEventListener("user-info-updated", t => {
  Dd((t == null ? void 0 : t.detail) ?? null), q1((t == null ? void 0 : t.detail) ?? null), Mg()
}));
let tg = !1,
  zy = 0;
const Ske = /load failed|failed to fetch|network request failed|networkerror|网络连接不稳定|网络请求失败/i;

function Eke(t) {
  tg || (tg = !0, La.confirm(t || "您的会员已过期，是否前往开通？", "会员已过期", {
    type: "warning",
    center: !0,
    confirmButtonText: "去开通会员",
    cancelButtonText: "取消",
    closeOnClickModal: !1
  }).then(() => {
    window.dispatchEvent(new CustomEvent("go-open-vip"))
  }).catch(() => {}).finally(() => {
    tg = !1
  }))
}
async function Tke(t, o, i, n) {
  const s = () => {
    try {
      const d = "操作失败，请稍后重试";
      typeof i == "object" && i !== null ? o.call(A, {
        ...i,
        message: d
      }, ...n) : o.call(A, d, ...n)
    } catch {
      try {
        o.call(A, "操作失败，请稍后重试")
      } catch {}
    }
  };
  if (Vy(Og)) {
    s();
    return
  }
  if ((() => {
      var d;
      try {
        return !!((d = window.localStorage) != null && d.getItem("authToken"))
      } catch {
        return !1
      }
    })()) {
    const d = await xke();
    if (Vy(d)) {
      s();
      return
    }
  }
  Eke(t)
} ["warning", "error"].forEach(t => {
  const o = A[t];
  A[t] = function(n, ...s) {
    const u = Ike(n);
    if (u && iv.test(u)) return window.dispatchEvent(new CustomEvent("open-login-dialog")), {
      close: () => {}
    };
    if (u && vk.test(u)) return Tke(u, o, n, s), {
      close: () => {}
    };
    if (t === "error" && u && Ske.test(u)) {
      const d = Date.now();
      if (d - zy < 3e3) return {
        close: () => {}
      };
      zy = d;
      const f = "网络连接不稳定，请检查网络后重试";
      return typeof n == "object" && n !== null ? o.call(A, {
        ...n,
        message: f
      }, ...s) : o.call(A, f, ...s)
    }
    return o.call(A, n, ...s)
  }
});
const bc = Y_(wT);
for (const [t, o] of Object.entries(X_)) bc.component(t, o);
bc.use(s2());
bc.use(Qr);
bc.use(Z_, {
  locale: mke
});
Cke(Qr);
bc.mount("#app");
window.__htAppMounted = !0;
"serviceWorker" in navigator && (/MicroMessenger/i.test(navigator.userAgent || "") ? navigator.serviceWorker.getRegistrations().then(t => Promise.all(t.map(o => o.unregister()))).catch(() => {}) : window.addEventListener("load", () => {
  navigator.serviceWorker.register("/sw.js").catch(() => {})
}));
export {
  P0 as $, $o as A, Q0 as B, Jr as C, Mo as D, ri as E, GT as F, xk as G, qT as H, mc as I, lA as J, h0 as K, no as L, ei as M, ya as N, sA as O, y0 as P, w0 as Q, Ep as R, _0 as S, KCe as T, WT as U, k0 as V, T0 as W, $0 as X, uk as Y, gg as Z, al as _, HT as a, V0 as a$, b0 as a0, p0 as a1, my as a2, lAe as a3, nAe as a4, Pb as a5, ZCe as a6, _d as a7, eAe as a8, tAe as a9, qi as aA, $i as aB, Gm as aC, Af as aD, Zu as aE, If as aF, mk as aG, mC as aH, _f as aI, Yu as aJ, cC as aK, Tp as aL, wv as aM, Ln as aN, Mr as aO, Ms as aP, Ib as aQ, Cie as aR, kv as aS, dc as aT, lp as aU, op as aV, BC as aW, MC as aX, Xk as aY, c0 as aZ, Ld as a_, Cv as aa, LC as ab, sAe as ac, os as ad, YCe as ae, XCe as af, kd as ag, aAe as ah, Fd as ai, gZ as aj, Id as ak, cA as al, Ni as am, Zf as an, m0 as ao, uA as ap, FC as aq, GC as ar, Os as as, gc as at, mY as au, pi as av, br as aw, Ho as ax, zg as ay, pZ as az, JCe as b, $Ce as b$, Hf as b0, Qf as b1, Th as b2, qd as b3, hf as b4, yf as b5, yk as b6, Hr as b7, xb as b8, ise as b9, Pk as bA, $k as bB, Ek as bC, Tk as bD, Sk as bE, tC as bF, eC as bG, sC as bH, rC as bI, Yk as bJ, Vk as bK, nC as bL, zk as bM, lC as bN, kk as bO, uC as bP, Zk as bQ, vk as bR, m2 as bS, gb as bT, $T as bU, zke as bV, Lke as bW, Hn as bX, jke as bY, ECe as bZ, TCe as b_, Yo as ba, _i as bb, HC as bc, NC as bd, $v as be, Gf as bf, Jf as bg, J0 as bh, H0 as bi, DC as bj, Vh as bk, Pr as bl, af as bm, Bke as bn, z0 as bo, F0 as bp, Kh as bq, Wr as br, Fr as bs, Gr as bt, Tb as bu, Lk as bv, Ok as bw, Bk as bx, Dk as by, Mk as bz, lc as c, yv as c$, DCe as c0, OCe as c1, NCe as c2, UCe as c3, LCe as c4, ICe as c5, zCe as c6, SCe as c7, xCe as c8, VCe as c9, Kke as cA, Wke as cB, Gke as cC, Jke as cD, Hke as cE, Qke as cF, MCe as cG, PCe as cH, wCe as cI, rCe as cJ, oCe as cK, sCe as cL, qCe as cM, xp as cN, Fke as cO, BCe as cP, WCe as cQ, qke as cR, FCe as cS, vp as cT, Oh as cU, Bh as cV, $h as cW, _k as cX, jh as cY, Wh as cZ, Wu as c_, kCe as ca, CCe as cb, ACe as cc, _Ce as cd, vCe as ce, fCe as cf, hCe as cg, pCe as ch, yCe as ci, dCe as cj, gCe as ck, bCe as cl, mCe as cm, cCe as cn, uCe as co, iCe as cp, tCe as cq, nCe as cr, aCe as cs, lCe as ct, Xke as cu, Zke as cv, eCe as cw, Yke as cx, RCe as cy, jCe as cz, Xl as d, A0 as d$, sb as d0, $b as d1, i0 as d2, pv as d3, hv as d4, iAe as d5, a0 as d6, Ef as d7, bv as d8, Yh as d9, tA as dA, aA as dB, ZC as dC, eA as dD, Dke as dE, Mke as dF, Nke as dG, Uke as dH, jS as dI, Oke as dJ, Qk as dK, Ck as dL, Ak as dM, ET as dN, GCe as dO, ib as dP, Rh as dQ, Nh as dR, Uh as dS, Ik as dT, Kk as dU, yp as dV, Gh as dW, dC as dX, I0 as dY, C0 as dZ, S0 as d_, Yf as da, oA as db, iA as dc, qh as dd, Ip as de, mA as df, gA as dg, vA as dh, Jh as di, _T as dj, lb as dk, np as dl, d0 as dm, v0 as dn, g0 as dp, KC as dq, YC as dr, QC as ds, XC as dt, jC as du, qC as dv, WC as dw, JC as dx, UC as dy, RC as dz, zl as e, IC as e0, fC as e1, AC as e2, gC as e3, pC as e4, yC as e5, hC as e6, bC as e7, PC as e8, $C as e9, TC as ea, kC as eb, CC as ec, xC as ed, SC as ee, wC as ef, VC as eg, x0 as eh, Fu as ei, oC as ej, Rke as f, Ap as g, ui as h, vc as i, oAe as j, QCe as k, Sp as l, fr as m, RT as n, Ts as o, BT as p, HCe as q, JT as r, Sa as s, Tv as t, UT as u, Wn as v, ao as w, rb as x, E0 as y, rA as z
};
