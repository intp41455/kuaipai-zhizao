// module: NoteEditor2
// extracted from 02-index-8bb27f01.js.js @ 1613210
{
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
}, Gpe = al(Wpe, [
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
    class: "text-input-wrapper"
  },
  tbe = {
    class: "keyword-section"
  },
  abe = {
    class: "keyword-input-wrapper"
  },
  lbe = {
    class: "action-buttons"
  },
  nbe = {
    class: "results-section"
  },
  obe = {
    class: "results-header"
  },
  ibe = {
    key: 0,
    class: "empty-results"
  },
  sbe = {
    class: "empty-icon"
  },
  rbe = {
    key: 1,
    class: "generated-images-grid"
  },
  ube = ["onClick"],
  cbe = ["src", "alt"],
  dbe = {
    class: "image-overlay"
  },
  vbe = {
    key: 6
  },
  mbe = {
    class: "templates-grid"
  },
  gbe = {
    class: "cover-3-4"
  },
  fbe = ["src", "onClick"],
  pbe = ["onClick"],
  ybe = {
    class: "template-id"
  },
  hbe = {
    key: 0,
    class: "templates-pagination"
  },
  bbe = {
    key: 1,
    class: "empty-state"
  },
  wbe = {
    key: 7,
    class: "cover-generator"
  },
  _be = {
    class: "template-select-section"
  },
  kbe = {
    class: "template-select-header"
  },
  Cbe = {
    style: {
      display: "flex",
      "align-items": "center",
      gap: "8px"
    }
  },
  Abe = ["src"],
  Ibe = {
    key: 0,
    class: "template-preview"
  },
  xbe = {
    class: "template-preview-card"
  },
  Sbe = ["src"],
  Ebe = {
    class: "template-preview-id"
  },
  Tbe = {
    class: "input-section"
  },
  $be = {
    class: "text-input-wrapper"
  },
  Pbe = {
    class: "ai-mode-header"
  },
  Vbe = {
    class: "textarea-with-actions"
  },
  zbe = {
    class: "ai-generate-btn-wrapper"
  },
  Lbe = {
    key: 0,
    class: "text-input-wrapper",
    style: {
      "margin-top": "16px"
    }
  },
  Dbe = {
    class: "generated-content-preview"
  },
  Mbe = {
    key: 0,
    class: "preview-title"
  },
  Obe = {
    key: 1,
    class: "preview-content"
  },
  Bbe = {
    class: "results-section"
  },
  Nbe = {
    class: "results-header"
  },
  Ube = {
    key: 0,
    class: "empty-results"
  },
  Rbe = {
    class: "empty-icon"
  },
  jbe = {
    key: 1,
    class: "generated-images-grid"
  },
  qbe = ["onClick"],
  Fbe = ["src", "alt"],
  Wbe = {
    class: "image-overlay"
  },
  Gbe = {
    key: 8
  },
  Jbe = {
    class: "templates-grid"
  },
  Hbe = {
    class: "cover-3-4"
  },
  Qbe = ["src", "onClick"],
  Kbe = ["onClick"],
  Ybe = {
    class: "template-id"
  },
  Xbe = {
    key: 0,
    class: "empty-state"
  },
  Zbe = {
    key: 0,
    class: "preview-image-container"
  },
  ewe = {
    class: "preview-image-wrapper"
  },
  twe = ["src", "alt"],
  awe = {
    key: 2,
    class: "preview-bottom-actions"
  },
  lwe = {
    class: "preview-indicator"
  },
  nwe = {
    class: "preview-header-content"
  },
  owe = {
    key: 0,
    class: "template-switcher"
  },
  iwe = {
    class: "variant-indicator"
  },
  swe = {
    key: 0,
    class: "template-dialog-content"
  },
  rwe = ["src"],
  uwe = {
    class: "template-dialog-info"
  },
  cwe = {
    __name: "pics",
    setup(t) {
      var Qe;
      const o = ln(),
        i = p(window.innerWidth <= 768),
        n = p(!1),
        s = p({}),
        u = p(!1),
        d = p("poster"),
        f = p("official"),
        y = p("official"),
        w = p(!1),
        S = p({}),
        z = p(null),
        x = p(1),
        C = p([]),
        V = p(null),
        $ = p(!1),
        N = p([]),
        T = p(!1),
        R = p(1),
        O = p(12),
        J = p(0),
        ie = `分享一个超实用图文封面工具 ${((Qe=$o())==null?void 0:Qe.name)||Mo}`,
        Ae = p(ie),
        F = p("超实用"),
        Y = p(3),
        ne = p(!1),
        De = p([]),
        Q = p(!1),
        re = p(""),
        b = p(""),
        te = p([]),
        we = p(""),
        ae = p("generate"),
        me = p(!1),
        ce = p(null),
        ue = p(null),
        U = p(!1),
        de = p([]),
        _e = Le(() => d.value === "poster" && f.value === "official" || d.value === "booklist" && y.value === "official" || d.value === "booklist" && y.value === "mine" ? N.value : []),
        xe = p(!1),
        Ce = p([]),
        Re = p(0),
        nt = j => {
          d.value = j, j === "poster" ? f.value = "official" : j === "booklist" && (y.value = "official")
        },
        tt = j => {
          j === "myworks" && ct()
        },
        qe = j => {
          j === "myworks" && ct()
        },
        Me = async () => {
          try {
            T.value = !0;
            const j = await f0({
                page: R.value,
                size: O.value
              }),
              Ee = Array.isArray(j == null ? void 0 : j.rows) ? j.rows : [];
            N.value = Ee.map(ht => ({
              id: ht.id,
              title: ht.title,
              desc: ht.desc,
              images: Array.isArray(ht.images) ? ht.images : [],
              cover: Array.isArray(ht.images) && ht.images.length > 0 ? ht.images[0] : ""
            })), j != null && j.pages && (J.value = j.pages.total || 0, R.value = j.pages.current || R.value, O.value = j.pages.page_size || O.value)
          } catch (j) {
            console.error("获取批量做图模板失败:", j)
          } finally {
            T.value = !1
          }
        }, rt = async j => {
          R.value = j, await Me()
        }, ct = () => {
          const j = localStorage.getItem("my_cover_works");
          if (j) try {
            de.value = JSON.parse(j)
          } catch (Ee) {
            console.error("加载我的制作失败:", Ee), de.value = []
          } else de.value = []
        }, E = () => {
          A.info("API功能开发中")
        }, _ = async () => {
          if (!Ae.value.trim()) {
            A.warning("请输入一句话描述");
            return
          }
          try {
            ne.value = !0, De.value = [];
            const j = Y.value,
              Ee = [];
            for (let jt = 0; jt < j; jt++) try {
              const ca = await bv(Ae.value);
              let be = "";
              if (Array.isArray(ca) && ca.length > 0 ? be = ca[0] : ca != null && ca.images && Array.isArray(ca.images) && ca.images.length > 0 ? be = ca.images[0] : ca != null && ca.url ? be = ca.url : typeof ca == "string" && (be = ca), be) Ee.push(be);
              else {
                const he = ["https://cos.aichaoer.cn/web/images/xqy-covers/dp_0001.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0002.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0003.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0004.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0005.png"],
                  kt = jt % he.length;
                Ee.push(he[kt])
              }
              jt < j - 1 && await new Promise(he => setTimeout(he, 300))
            } catch (ca) {
              console.warn(`生成第 ${jt+1} 张封面失败:`, ca);
              const be = ["https://cos.aichaoer.cn/web/images/xqy-covers/dp_0001.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0002.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0003.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0004.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0005.png"],
                he = jt % be.length;
              Ee.push(be[he])
            }
            De.value = Ee;
            const ht = {
              id: Date.now(),
              title: Ae.value,
              cover: Ee[0],
              images: Ee,
              content: Ae.value,
              tags: F.value ? [F.value] : [],
              createdAt: new Date().toISOString()
            };
            de.value.unshift(ht), localStorage.setItem("my_cover_works", JSON.stringify(de.value)), A.success("封面生成成功！")
          } catch (j) {
            console.error("生成封面失败:", j);
            const Ee = Y.value,
              ht = ["https://cos.aichaoer.cn/web/images/xqy-covers/dp_0001.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0002.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0003.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0004.png", "https://cos.aichaoer.cn/web/images/xqy-covers/dp_0005.png"],
              jt = Date.now(),
              ca = [];
            for (let he = 0; he < Ee; he++) {
              const kt = (jt + he) % ht.length;
              ca.push(ht[kt])
            }
            De.value = ca;
            const be = {
              id: Date.now(),
              title: Ae.value,
              cover: ca[0],
              images: ca,
              content: Ae.value,
              tags: F.value ? [F.value] : [],
              createdAt: new Date().toISOString()
            };
            de.value.unshift(be), localStorage.setItem("my_cover_works", JSON.stringify(de.value)), A.success("封面生成成功！（使用模拟数据）")
          } finally {
            ne.value = !1
          }
        }, je = async () => {
          if (!te.value || te.value.length === 0) {
            A.warning("没有图片可下载");
            return
          }
          try {
            await La.confirm(`确定要批量下载所有书单图片吗？共${te.value.length}张图片。`, "批量下载确认", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "info"
            }), Q.value = !0, A.info("正在下载图片，请稍候...");
            const j = new Mr,
              Ee = te.value.map(async (Ze, Wt) => {
                try {
                  const aa = await fetch(Ze, {
                    method: "GET",
                    mode: "cors",
                    credentials: "omit",
                    cache: "no-cache"
                  });
                  if (!aa.ok) throw new Error(`HTTP error! status: ${aa.status}`);
                  const xa = await aa.blob(),
                    Kt = `书单图片${Wt+1}.jpg`;
                  j.file(Kt, xa)
                } catch (aa) {
                  console.error(`下载图片${Wt+1}失败:`, aa);
                  try {
                    const xa = await new Promise((at, Fe) => {
                        const Ke = new XMLHttpRequest;
                        Ke.open("GET", Ze, !0), Ke.responseType = "blob", Ke.onload = () => {
                          Ke.status === 200 ? at(Ke.response) : Fe(new Error(`XMLHttpRequest failed with status: ${Ke.status}`))
                        }, Ke.onerror = () => Fe(new Error("XMLHttpRequest failed")), Ke.send()
                      }),
                      Kt = `书单图片${Wt+1}.jpg`;
                    j.file(Kt, xa)
                  } catch (xa) {
                    throw console.error(`使用 XMLHttpRequest 下载图片${Wt+1}也失败:`, xa), new Error(`下载图片${Wt+1}失败: ${aa.message||aa}`)
                  }
                }
              }),
              ht = await Promise.allSettled(Ee),
              jt = ht.filter(Ze => Ze.status === "rejected");
            if (jt.length > 0) {
              if (console.warn(`有 ${jt.length} 张图片下载失败:`, jt), jt.length === ht.length) throw new Error("所有图片下载失败，请检查网络连接或图片链接");
              A.warning(`有 ${jt.length} 张图片下载失败，将继续下载其他图片`)
            }
            const ca = await j.generateAsync({
                type: "blob"
              }),
              be = document.createElement("a"),
              he = new Date,
              Bt = `书单图片_${`${he.getFullYear()}${String(he.getMonth()+1).padStart(2,"0")}${String(he.getDate()).padStart(2,"0")}${String(he.getHours()).padStart(2,"0")}${String(he.getMinutes()).padStart(2,"0")}${String(he.getSeconds()).padStart(2,"0")}`}.zip`;
            be.href = window.URL.createObjectURL(ca), be.download = Bt, document.body.appendChild(be), be.click(), document.body.removeChild(be), window.URL.revokeObjectURL(be.href), A.success("批量下载完成！")
          } catch (j) {
            console.error("批量下载失败:", j), A.error("批量下载失败，请重试")
          } finally {
            Q.value = !1
          }
        }, K = (j, Ee) => {
          d.value === "booklist" && y.value === "mine" ? Ce.value = te.value : Ce.value = De.value, Re.value = Ee, xe.value = !0
        }, B = () => {
          Re.value > 0 && Re.value--
        }, W = () => {
          Re.value < Ce.value.length - 1 && Re.value++
        }, Te = async () => {
          if (!De.value || De.value.length === 0) {
            A.warning("没有图片可下载");
            return
          }
          try {
            await La.confirm(`确定要批量下载所有封面图片吗？共${De.value.length}张图片。`, "批量下载确认", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "info"
            }), Q.value = !0, A.info("正在下载图片，请稍候...");
            const j = new Mr,
              Ee = De.value.map(async (Ze, Wt) => {
                try {
                  const aa = await fetch(Ze, {
                    method: "GET",
                    mode: "cors",
                    credentials: "omit",
                    cache: "no-cache"
                  });
                  if (!aa.ok) throw new Error(`HTTP error! status: ${aa.status}`);
                  const xa = await aa.blob(),
                    Kt = `封面图片${Wt+1}.jpg`;
                  j.file(Kt, xa)
                } catch (aa) {
                  console.error(`下载图片${Wt+1}失败:`, aa);
                  try {
                    const xa = await new Promise((at, Fe) => {
                        const Ke = new XMLHttpRequest;
                        Ke.open("GET", Ze, !0), Ke.responseType = "blob", Ke.onload = () => {
                          Ke.status === 200 ? at(Ke.response) : Fe(new Error(`XMLHttpRequest failed with status: ${Ke.status}`))
                        }, Ke.onerror = () => Fe(new Error("XMLHttpRequest failed")), Ke.send()
                      }),
                      Kt = `封面图片${Wt+1}.jpg`;
                    j.file(Kt, xa)
                  } catch (xa) {
                    throw console.error(`使用 XMLHttpRequest 下载图片${Wt+1}也失败:`, xa), new Error(`下载图片${Wt+1}失败: ${aa.message||aa}`)
                  }
                }
              }),
              ht = await Promise.allSettled(Ee),
              jt = ht.filter(Ze => Ze.status === "rejected");
            if (jt.length > 0) {
              if (console.warn(`有 ${jt.length} 张图片下载失败:`, jt), jt.length === ht.length) throw new Error("所有图片下载失败，请检查网络连接或图片链接");
              A.warning(`有 ${jt.length} 张图片下载失败，将继续下载其他图片`)
            }
            const ca = await j.generateAsync({
                type: "blob"
              }),
              be = document.createElement("a"),
              he = new Date,
              Bt = `封面图片_${`${he.getFullYear()}${String(he.getMonth()+1).padStart(2,"0")}${String(he.getDate()).padStart(2,"0")}${String(he.getHours()).padStart(2,"0")}${String(he.getMinutes()).padStart(2,"0")}${String(he.getSeconds()).padStart(2,"0")}`}.zip`;
            be.href = window.URL.createObjectURL(ca), be.download = Bt, be.style.display = "none", document.body.appendChild(be), be.click(), setTimeout(() => {
              document.body.contains(be) && document.body.removeChild(be), window.URL.revokeObjectURL(be.href)
            }, 100), A.success(`批量下载完成！共${De.value.length-jt.length}张图片`)
          } catch (j) {
            j !== "cancel" && (console.error("批量下载失败:", j), A.error(j.message || "批量下载失败，请稍后重试"))
          } finally {
            Q.value = !1
          }
        }, it = async (j, Ee) => {
          try {
            let ht;
            try {
              const he = await fetch(j, {
                method: "GET",
                mode: "cors",
                credentials: "omit",
                cache: "no-cache"
              });
              if (!he.ok) throw new Error(`HTTP error! status: ${he.status}`);
              ht = await he.blob()
            } catch (he) {
              console.error("Fetch 图片失败:", he), A.warning("无法直接下载，正在尝试其他方式...");
              try {
                const kt = await fetch(j, {
                    method: "GET",
                    mode: "no-cors"
                  }),
                  Bt = document.createElement("a");
                Bt.href = j, Bt.download = `封面图片_${Ee+1}_${Date.now()}.jpg`, Bt.style.display = "none", document.body.appendChild(Bt), Bt.click(), setTimeout(() => {
                  document.body.removeChild(Bt)
                }, 200), A.success("下载已开始");
                return
              } catch (kt) {
                console.error("代理下载失败:", kt), window.open(j, "_blank") ? A.info("已在新窗口打开图片，请在新窗口中右键保存图片") : A.error("下载失败，请检查浏览器弹窗设置");
                return
              }
            }
            const jt = window.URL.createObjectURL(ht),
              ca = `封面图片_${Ee+1}_${Date.now()}.jpg`,
              be = document.createElement("a");
            be.style.display = "none", be.href = jt, be.download = ca, document.body.appendChild(be), be.click(), setTimeout(() => {
              document.body.contains(be) && document.body.removeChild(be), window.URL.revokeObjectURL(jt)
            }, 100), A.success("下载已开始")
          } catch (ht) {
            console.error("下载失败:", ht), A.error("下载失败，请稍后重试")
          }
        }, yt = j => {
          const Ee = j.images && j.images.length > 0 ? j.images : j.cover ? [j.cover] : [];
          S.value = {
            title: j.title || "",
            content: j.content || j.title || "",
            tags: j.tags || [],
            images: Ee,
            editTime: new Date().toLocaleDateString("zh-CN"),
            comments: [{
              user: "夏日清风",
              text: "写的不错，太有用了！",
              date: new Date().toLocaleDateString("zh-CN"),
              replies: "10+",
              avatar: "https://picsum.photos/seed/user-9-1765787564645/40/40",
              pinned: !0
            }, {
              user: "秋日私语",
              text: "太有用了，按照这个方法试了试，确实有效",
              date: new Date().toLocaleDateString("zh-CN"),
              replies: "11+",
              avatar: "https://picsum.photos/seed/user-10-1765787564645/40/40"
            }, {
              user: "秋天的叶",
              text: "太棒了，正好需要这个，已经实践了效果很好",
              date: new Date().toLocaleDateString("zh-CN"),
              replies: "12+",
              avatar: "https://picsum.photos/seed/user-14-1765787564645/40/40"
            }],
            user: {
              name: "Super凡",
              avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/XwtLNH83BWbGpFLg23j7KGic8a913phn0ibQM13AWYfXmx2Uviassp9H016JZaZpHd70PLTnX5SOXdS7LBv05jQl4Z4vckrMMc5pWCt3WSVvHo/132"
            }
          }
        }, st = j => {
          if (!C.value || C.value.length === 0) return;
          const Ee = x.value + j;
          if (Ee < 1 || Ee > C.value.length) return;
          x.value = Ee;
          const ht = C.value[Ee - 1];
          ht && yt({
            id: ht.id,
            title: ht.title,
            content: ht.desc || ht.title,
            images: Array.isArray(ht.images) ? ht.images : [],
            tags: []
          })
        }, Ie = j => {
          if ($.value = !1, i.value) {
            const ht = new URLSearchParams;
            j.title && ht.append("title", encodeURIComponent(j.title)), j.content && ht.append("content", encodeURIComponent(j.content));
            const jt = j.images && j.images.length > 0 ? j.images : j.cover ? [j.cover] : [];
            jt.length > 0 && ht.append("images", encodeURIComponent(JSON.stringify(jt))), j.tags && j.tags.length > 0 && ht.append("tags", encodeURIComponent(JSON.stringify(j.tags))), ht.append("from", "pics"), o.push(`/yulanm2?${ht.toString()}`);
            return
          }
          if (V.value = j, z.value = j.id, x.value = 1, j.createdAt !== void 0) {
            const ht = j.images && j.images.length > 0 ? j.images : j.cover ? [j.cover] : [];
            S.value = {
              title: j.title || "",
              content: j.content || j.title || "",
              tags: j.tags || [],
              images: ht,
              editTime: j.createdAt ? new Date(j.createdAt).toLocaleDateString("zh-CN") : new Date().toLocaleDateString("zh-CN"),
              comments: [{
                user: "夏日清风",
                text: "写的不错，太有用了！",
                date: new Date().toLocaleDateString("zh-CN"),
                replies: "10+",
                avatar: "https://picsum.photos/seed/user-9-1765787564645/40/40",
                pinned: !0
              }, {
                user: "秋日私语",
                text: "太有用了，按照这个方法试了试，确实有效",
                date: new Date().toLocaleDateString("zh-CN"),
                replies: "11+",
                avatar: "https://picsum.photos/seed/user-10-1765787564645/40/40"
              }, {
                user: "秋天的叶",
                text: "太棒了，正好需要这个，已经实践了效果很好",
                date: new Date().toLocaleDateString("zh-CN"),
                replies: "12+",
                avatar: "https://picsum.photos/seed/user-14-1765787564645/40/40"
              }],
              user: {
                name: "Super凡",
                avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/XwtLNH83BWbGpFLg23j7KGic8a913phn0ibQM13AWYfXmx2Uviassp9H016JZaZpHd70PLTnX5SOXdS7LBv05jQl4Z4vckrMMc5pWCt3WSVvHo/132"
              }
            }
          } else C.value = [], x.value = 1, bg(j.id).then(ht => {
            if (Array.isArray(ht) && ht.length > 0) {
              C.value = ht;
              const jt = ht[0];
              yt({
                id: jt.id,
                title: jt.title,
                content: jt.desc || jt.title,
                images: Array.isArray(jt.images) ? jt.images : [],
                tags: []
              })
            } else {
              const jt = j.images && j.images.length > 0 ? j.images : j.cover ? [j.cover] : [];
              yt({
                id: j.id,
                title: j.title || "",
                content: j.content || j.title || "",
                images: jt,
                tags: j.tags || []
              })
            }
          }).catch(ht => {
            console.error("获取批量做图模板详情失败:", ht);
            const jt = j.images && j.images.length > 0 ? j.images : j.cover ? [j.cover] : [];
            yt({
              id: j.id,
              title: j.title || "",
              content: j.content || j.title || "",
              images: jt,
              tags: j.tags || []
            })
          });
          w.value = !0
        }, pe = j => {
          if ($.value = !0, i.value) {
            const jt = new URLSearchParams;
            j.title && jt.append("title", encodeURIComponent(j.title)), j.content && jt.append("content", encodeURIComponent(j.content));
            const ca = j.cover || (j.images && j.images.length > 0 ? j.images[0] : "");
            ca && jt.append("images", encodeURIComponent(JSON.stringify([ca]))), j.tags && j.tags.length > 0 && jt.append("tags", encodeURIComponent(JSON.stringify(j.tags))), jt.append("from", "pics"), o.push(`/yulanm2?${jt.toString()}`);
            return
          }
          V.value = j, z.value = j.id, x.value = 1;
          const Ee = j.cover || (j.images && j.images.length > 0 ? j.images[0] : "");
          j.createdAt !== void 0 ? S.value = {
            title: j.title || "",
            content: j.content || j.title || "",
            tags: j.tags || [],
            images: Ee ? [Ee] : [],
            editTime: j.createdAt ? new Date(j.createdAt).toLocaleDateString("zh-CN") : new Date().toLocaleDateString("zh-CN"),
            comments: [{
              user: "夏日清风",
              text: "写的不错，太有用了！",
              date: new Date().toLocaleDateString("zh-CN"),
              replies: "10+",
              avatar: "https://picsum.photos/seed/user-9-1765787564645/40/40",
              pinned: !0
            }, {
              user: "秋日私语",
              text: "太有用了，按照这个方法试了试，确实有效",
              date: new Date().toLocaleDateString("zh-CN"),
              replies: "11+",
              avatar: "https://picsum.photos/seed/user-10-1765787564645/40/40"
            }, {
              user: "秋天的叶",
              text: "太棒了，正好需要这个，已经实践了效果很好",
              date: new Date().toLocaleDateString("zh-CN"),
              replies: "12+",
              avatar: "https://picsum.photos/seed/user-14-1765787564645/40/40"
            }],
            user: {
              name: "Super凡",
              avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/XwtLNH83BWbGpFLg23j7KGic8a913phn0ibQM13AWYfXmx2Uviassp9H016JZaZpHd70PLTnX5SOXdS7LBv05jQl4Z4vckrMMc5pWCt3WSVvHo/132"
            }
          } : (C.value = [], x.value = 1, bg(j.id).then(jt => {
            if (Array.isArray(jt) && jt.length > 0) {
              C.value = jt;
              const ca = jt[0],
                be = ca.cover || (Array.isArray(ca.images) && ca.images.length > 0 ? ca.images[0] : "");
              yt({
                id: ca.id,
                title: ca.title,
                content: ca.desc || ca.title,
                images: be ? [be] : [],
                tags: []
              })
            } else yt({
              id: j.id,
              title: j.title || "",
              content: j.content || j.title || "",
              images: Ee ? [Ee] : [],
              tags: j.tags || []
            })
          }).catch(jt => {
            console.error("获取书单图模板详情失败:", jt), yt({
              id: j.id,
              title: j.title || "",
              content: j.content || j.title || "",
              images: Ee ? [Ee] : [],
              tags: j.tags || []
            })
          })), w.value = !0
        }, Be = async j => {
          y.value = "mine", ce.value = j.id, ue.value = j, A.success("模板已选择")
        }, xt = j => {
          const Ee = _e.value.find(ht => ht.id === j);
          Ee ? ue.value = Ee : ue.value = null
        }, Yt = async () => {
          try {
            if (navigator.clipboard) try {
              const ht = await navigator.clipboard.readText();
              if (ht) {
                we.value = ht.trim(), A.success("粘贴成功");
                return
              } else {
                A.warning("剪贴板为空");
                return
              }
            } catch (ht) {
              console.log("Clipboard API 失败，尝试 execCommand:", ht)
            }
            const j = document.createElement("textarea");
            if (document.body.appendChild(j), j.focus(), j.select(), document.execCommand("paste") && j.value) we.value = j.value.trim(), A.success("粘贴成功");
            else {
              A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
              const ht = document.querySelector(".cover-text-input textarea");
              ht && (ht.focus(), ht.select())
            }
            document.body.removeChild(j)
          } catch (j) {
            console.error("粘贴失败:", j), A.warning("粘贴失败，请手动粘贴"), await Da();
            const Ee = document.querySelector(".cover-text-input textarea");
            if (Ee) {
              Ee.focus();
              try {
                Ee.select()
              } catch (ht) {
                console.log("select 失败:", ht)
              }
            }
          }
        }, Ye = () => {
          we.value = ""
        }, va = j => {
          ue.value = j, U.value = !0
        }, Ea = j => {
          d.value === "poster" ? (f.value = "mine", A.success("已选择我的制作")) : d.value === "booklist" && (y.value = "mine", ce.value = j.id, ue.value = {
            id: j.id,
            cover: j.cover,
            images: j.images || [j.cover],
            title: j.title,
            content: j.content
          }, A.success("模板已选择"))
        }, ft = () => {
          const j = localStorage.getItem("authToken");
          return n.value = !!j, !!j
        }, Z = async j => {
          ft(), n.value = !0, u.value = !1, A.success("登录成功");
          try {
            const Ee = await zl();
            Ee && (s.value = {
              ...Ee,
              nickname: Ee.nickname || Ee.nickName || "用户",
              avatar: Ee.avatar || Ee.avatarUrl || ""
            })
          } catch (Ee) {
            console.error("获取用户信息失败:", Ee)
          }
          i.value && setTimeout(() => {
            window.location.reload()
          }, 500)
        }, pt = j => {
          j === "logout" && (ui(), ft(), s.value = {}, i.value && setTimeout(() => {
            window.location.reload()
          }, 500))
        }, Et = () => {
          i.value = window.innerWidth <= 768
        }, Mt = () => {
          ft(), ft() && zl().then(j => {
            j && (s.value = {
              ...j,
              nickname: j.nickname || j.nickName || "用户",
              avatar: j.avatar || j.avatarUrl || ""
            })
          }).catch(j => {
            console.error("获取用户信息失败:", j)
          })
        };
      return Ll(async () => {
        if (document.title = "火兔工具箱_批量做图", window.addEventListener("resize", Et), ft(), ft()) try {
          const j = await zl();
          j && (s.value = {
            ...j,
            nickname: j.nickname || j.nickName || "用户",
            avatar: j.avatar || j.avatarUrl || ""
          })
        } catch (j) {
          console.error("获取用户信息失败:", j)
        }
        window.addEventListener("user-login", Mt), window.addEventListener("user-login-success", Mt), await Me(), ct()
      }), ki(() => {
        window.removeEventListener("user-login", Mt), window.removeEventListener("user-login-success", Mt), window.removeEventListener("resize", Et)
      }), (j, Ee) => {
        const ht = xl,
          jt = Ii,
          ca = xi,
          be = Ur,
          he = Oo,
          kt = Bo,
          Bt = cn,
          Ze = $l,
          Wt = bo,
          aa = Kn,
          xa = Rl;
        return c(), v("div", z0e, [a(ei, {
          title: "批量做图",
          "is-logged-in": n.value,
          "user-info": s.value,
          "show-mobile-menu": P(Sa),
          onMenuClick: Ee[0] || (Ee[0] = Kt => Sa.value = !0),
          onLoginClick: Ee[1] || (Ee[1] = Kt => u.value = !0),
          onCommand: pt
        }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), i.value && P(Sa) ? (c(), v("div", {
          key: 0,
          class: "mobile-overlay show",
          onClick: Ee[2] || (Ee[2] = Kt => Sa.value = !1)
        })) : M("", !0), e("main", {
          class: Pe(["main-content", {
            "mobile-content": i.value
          }])
        }, [i.value ? M("", !0) : (c(), v("div", L0e, [...Ee[22] || (Ee[22] = [e("div", {
          class: "page-title"
        }, "批量做图", -1)])])), i.value ? (c(), v("div", D0e, [...Ee[23] || (Ee[23] = [e("div", {
          class: "mobile-title-row"
        }, [e("span", null, "批量做图")], -1)])])) : M("", !0), e("div", M0e, [e("div", O0e, [a(ht, {
          type: d.value === "poster" ? "primary" : "",
          class: Pe([{
            active: d.value === "poster"
          }, "category-btn"]),
          onClick: Ee[3] || (Ee[3] = Kt => nt("poster"))
        }, {
          default: l(() => [...Ee[24] || (Ee[24] = [g(" 大字报图 ", -1)])]),
          _: 1
        }, 8, ["type", "class"]), a(ht, {
          type: d.value === "booklist" ? "primary" : "",
          class: Pe([{
            active: d.value === "booklist"
          }, "category-btn"]),
          onClick: Ee[4] || (Ee[4] = Kt => nt("booklist"))
        }, {
          default: l(() => [...Ee[25] || (Ee[25] = [g(" 书单风格图 ", -1)])]),
          _: 1
        }, 8, ["type", "class"])])]), d.value === "poster" ? (c(), v("div", B0e, [e("div", N0e, [a(ca, {
          modelValue: f.value,
          "onUpdate:modelValue": Ee[5] || (Ee[5] = Kt => f.value = Kt),
          onTabChange: tt
        }, {
          default: l(() => [a(jt, {
            label: "大字报模板图展示",
            name: "official"
          }), a(jt, {
            label: "我要制作",
            name: "mine"
          }), a(jt, {
            label: "我的制作",
            name: "myworks"
          })]),
          _: 1
        }, 8, ["modelValue"])])])) : M("", !0), d.value === "booklist" ? (c(), v("div", U0e, [e("div", R0e, [a(ca, {
          modelValue: y.value,
          "onUpdate:modelValue": Ee[6] || (Ee[6] = Kt => y.value = Kt),
          onTabChange: qe
        }, {
          default: l(() => [a(jt, {
            label: "书单模板图展示",
            name: "official"
          }), a(jt, {
            label: "我要制作",
            name: "mine"
          }), a(jt, {
            label: "我的制作",
            name: "myworks"
          })]),
          _: 1
        }, 8, ["modelValue"])])])) : M("", !0), d.value === "poster" && f.value === "official" ? (c(), v("div", j0e, [e("div", q0e, [(c(!0), v(Ue, null, gt(_e.value, Kt => (c(), v("div", {
          key: Kt.id,
          class: "template-card"
        }, [e("div", F0e, [e("img", {
          src: Kt.cover,
          class: "cover-img",
          onClick: at => Ie(Kt)
        }, null, 8, W0e), e("div", {
          class: "cover-overlay",
          onClick: at => Ie(Kt)
        }, [...Ee[26] || (Ee[26] = [e("span", {
          class: "preview-text"
        }, "点击预览图片效果", -1)])], 8, G0e)]), e("div", J0e, "id: " + h(Kt.id), 1)]))), 128))]), J.value > O.value ? (c(), v("div", H0e, [a(be, {
          "current-page": R.value,
          "page-size": O.value,
          total: J.value,
          layout: "prev, pager, next",
          onCurrentChange: rt
        }, null, 8, ["current-page", "page-size", "total"])])) : M("", !0), _e.value.length === 0 ? (c(), v("div", Q0e, [...Ee[27] || (Ee[27] = [e("p", null, "暂无模板", -1)])])) : M("", !0)])) : M("", !0), d.value === "poster" && f.value === "mine" ? (c(), v("div", K0e, [e("div", Y0e, [Ee[30] || (Ee[30] = e("h1", {
          class: "generator-title"
        }, "大字报封面图", -1)), e("p", X0e, [Ee[28] || (Ee[28] = g(" 一次性让 AI 生成 ", -1)), a(kt, {
          modelValue: Y.value,
          "onUpdate:modelValue": Ee[7] || (Ee[7] = Kt => Y.value = Kt),
          class: "count-select",
          size: "small"
        }, {
          default: l(() => [(c(), v(Ue, null, gt(20, Kt => a(he, {
            key: Kt,
            label: Kt,
            value: Kt
          }, null, 8, ["label", "value"])), 64))]),
          _: 1
        }, 8, ["modelValue"]), Ee[29] || (Ee[29] = g(" 张封面图片 ", -1))])]), e("div", Z0e, [e("div", ebe, [a(Bt, {
          modelValue: Ae.value,
          "onUpdate:modelValue": Ee[8] || (Ee[8] = Kt => Ae.value = Kt),
          type: "textarea",
          rows: 4,
          placeholder: ie,
          class: "cover-text-input"
        }, null, 8, ["modelValue"])]), e("div", tbe, [e("div", abe, [Ee[31] || (Ee[31] = e("label", {
          class: "keyword-label"
        }, "关键词", -1)), a(Bt, {
          modelValue: F.value,
          "onUpdate:modelValue": Ee[9] || (Ee[9] = Kt => F.value = Kt),
          placeholder: "免费",
          class: "keyword-input"
        }, null, 8, ["modelValue"])]), e("div", lbe, [a(ht, {
          class: "api-btn",
          onClick: E
        }, {
          default: l(() => [a(Ze, null, {
            default: l(() => [a(P(Ci))]),
            _: 1
          }), Ee[32] || (Ee[32] = g(" API ", -1))]),
          _: 1
        }), a(ht, {
          type: "primary",
          class: "generate-btn",
          loading: ne.value,
          onClick: _
        }, {
          default: l(() => [...Ee[33] || (Ee[33] = [g(" 生成 ", -1)])]),
          _: 1
        }, 8, ["loading"])])])]), e("div", nbe, [e("div", obe, [Ee[35] || (Ee[35] = e("h3", {
          class: "results-title"
        }, "生成的封面图片", -1)), De.value.length > 0 ? (c(), ye(ht, {
          key: 0,
          type: "primary",
          class: "batch-download-btn",
          onClick: Te,
          loading: Q.value
        }, {
          default: l(() => [a(Ze, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), Ee[34] || (Ee[34] = g(" 批量下载 ", -1))]),
          _: 1
        }, 8, ["loading"])) : M("", !0)]), De.value.length === 0 ? (c(), v("div", ibe, [e("div", sbe, [a(Ze, null, {
          default: l(() => [a(P(to))]),
          _: 1
        })]), Ee[36] || (Ee[36] = e("p", {
          class: "empty-text"
        }, "还没有生成封面图片", -1)), Ee[37] || (Ee[37] = e("p", {
          class: "empty-hint"
        }, "输入一句话描述,点击生成按钮开始创建封面图片", -1))])) : (c(), v("div", rbe, [(c(!0), v(Ue, null, gt(De.value, (Kt, at) => (c(), v("div", {
          key: at,
          class: "generated-image-card"
        }, [e("div", {
          class: "image-wrapper",
          onClick: Fe => K(Kt, at)
        }, [e("img", {
          src: Kt,
          alt: `生成的封面 ${at+1}`,
          class: "generated-image"
        }, null, 8, cbe), e("div", dbe, [a(Ze, {
          class: "preview-icon"
        }, {
          default: l(() => [a(P(Uu))]),
          _: 1
        })])], 8, ube), a(ht, {
          class: "download-btn-small",
          onClick: lt(Fe => it(Kt, at), ["stop"])
        }, {
          default: l(() => [a(Ze, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), Ee[38] || (Ee[38] = g(" 下载 ", -1))]),
          _: 1
        }, 8, ["onClick"])]))), 128))]))])])) : M("", !0), d.value === "booklist" && y.value === "official" ? (c(), v("div", vbe, [e("div", mbe, [(c(!0), v(Ue, null, gt(_e.value, Kt => (c(), v("div", {
          key: Kt.id,
          class: "template-card"
        }, [e("div", gbe, [e("img", {
          src: Kt.cover,
          class: "cover-img",
          onClick: at => pe(Kt)
        }, null, 8, fbe), e("div", {
          class: "cover-overlay",
          onClick: at => pe(Kt)
        }, [...Ee[39] || (Ee[39] = [e("span", {
          class: "preview-text"
        }, "点击预览图片效果", -1)])], 8, pbe)]), e("div", ybe, "id: " + h(Kt.id), 1), a(ht, {
          type: "primary",
          class: "use-template-btn",
          onClick: lt(at => Be(Kt), ["stop"])
        }, {
          default: l(() => [...Ee[40] || (Ee[40] = [g(" 使用 ", -1)])]),
          _: 1
        }, 8, ["onClick"])]))), 128))]), J.value > O.value ? (c(), v("div", hbe, [a(be, {
          "current-page": R.value,
          "page-size": O.value,
          total: J.value,
          layout: "prev, pager, next",
          onCurrentChange: rt
        }, null, 8, ["current-page", "page-size", "total"])])) : M("", !0), _e.value.length === 0 ? (c(), v("div", bbe, [...Ee[41] || (Ee[41] = [e("p", null, "暂无模板", -1)])])) : M("", !0)])) : M("", !0), d.value === "booklist" && y.value === "mine" ? (c(), v("div", wbe, [Ee[58] || (Ee[58] = e("div", {
          class: "generator-header"
        }, [e("h1", {
          class: "generator-title"
        }, "书单内容图")], -1)), e("div", _be, [e("div", kbe, [Ee[42] || (Ee[42] = e("label", {
          class: "section-label"
        }, "选择模板", -1)), a(kt, {
          modelValue: ce.value,
          "onUpdate:modelValue": Ee[10] || (Ee[10] = Kt => ce.value = Kt),
          placeholder: "请选择模板ID",
          class: "template-id-select",
          filterable: "",
          onChange: xt
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(_e.value, Kt => (c(), ye(he, {
            key: Kt.id,
            label: `模板 ID: ${Kt.id}`,
            value: Kt.id
          }, {
            default: l(() => [e("div", Cbe, [e("img", {
              src: Kt.cover,
              style: {
                width: "40px",
                height: "53px",
                "object-fit": "cover",
                "border-radius": "4px"
              }
            }, null, 8, Abe), e("span", null, "模板 ID: " + h(Kt.id), 1)])]),
            _: 2
          }, 1032, ["label", "value"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])]), ue.value ? (c(), v("div", Ibe, [e("div", xbe, [e("img", {
          src: ue.value.cover,
          class: "template-preview-img",
          onClick: Ee[11] || (Ee[11] = Kt => va(ue.value))
        }, null, 8, Sbe), e("div", {
          class: "template-preview-overlay",
          onClick: Ee[12] || (Ee[12] = Kt => va(ue.value))
        }, [...Ee[43] || (Ee[43] = [e("span", null, "点击放大预览", -1)])]), e("div", Ebe, "ID: " + h(ue.value.id), 1)])])) : M("", !0)]), e("div", Tbe, [e("div", $be, [e("div", Pbe, [Ee[46] || (Ee[46] = e("label", {
          class: "section-label"
        }, "选择内容", -1)), a(aa, {
          modelValue: ae.value,
          "onUpdate:modelValue": Ee[13] || (Ee[13] = Kt => ae.value = Kt),
          class: "ai-mode-radio"
        }, {
          default: l(() => [a(Wt, {
            value: "generate"
          }, {
            default: l(() => [...Ee[44] || (Ee[44] = [g("AI一键生成", -1)])]),
            _: 1
          }), a(Wt, {
            value: "rewrite"
          }, {
            default: l(() => [...Ee[45] || (Ee[45] = [g("AI仿写同款", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]), e("div", Vbe, [a(Bt, {
          modelValue: we.value,
          "onUpdate:modelValue": Ee[14] || (Ee[14] = Kt => we.value = Kt),
          type: "textarea",
          rows: 4,
          placeholder: ae.value === "generate" ? "输入你要生成的书单主题，以及其他要求" : "请输入需要仿写的内容",
          class: "cover-text-input"
        }, null, 8, ["modelValue", "placeholder"]), we.value.trim() ? (c(), v("div", {
          key: 1,
          class: "pro-input-action-btn clear-btn",
          onClick: Ye
        }, [...Ee[48] || (Ee[48] = [e("span", {
          class: "action-text"
        }, "清除", -1)])])) : (c(), v("div", {
          key: 0,
          class: "pro-input-action-btn",
          onClick: Yt
        }, [...Ee[47] || (Ee[47] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])]))]), e("div", zbe, [a(ht, {
          type: ae.value === "generate" ? "danger" : "",
          class: Pe(["ai-generate-btn", ae.value === "generate" ? "btn-red" : "btn-purple"]),
          loading: me.value,
          onClick: j.handleBooklistConfirmGenerate
        }, {
          default: l(() => [...Ee[49] || (Ee[49] = [g(" 确认生成 ", -1)])]),
          _: 1
        }, 8, ["type", "class", "loading", "onClick"])])]), re.value || b.value ? (c(), v("div", Lbe, [Ee[52] || (Ee[52] = e("label", {
          class: "input-label"
        }, "生成的标题和内容", -1)), e("div", Dbe, [re.value ? (c(), v("div", Mbe, [Ee[50] || (Ee[50] = e("strong", null, "标题：", -1)), g(h(re.value), 1)])) : M("", !0), b.value ? (c(), v("div", Obe, [Ee[51] || (Ee[51] = e("strong", null, "内容：", -1)), g(h(b.value), 1)])) : M("", !0)])])) : M("", !0)]), e("div", Bbe, [e("div", Nbe, [Ee[54] || (Ee[54] = e("h3", {
          class: "results-title"
        }, "生成的书单图如下：", -1)), te.value.length > 0 ? (c(), ye(ht, {
          key: 0,
          type: "primary",
          class: "batch-download-btn",
          onClick: je,
          loading: Q.value
        }, {
          default: l(() => [a(Ze, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), Ee[53] || (Ee[53] = g(" 批量下载 ", -1))]),
          _: 1
        }, 8, ["loading"])) : M("", !0)]), te.value.length === 0 ? (c(), v("div", Ube, [e("div", Rbe, [a(Ze, null, {
          default: l(() => [a(P(to))]),
          _: 1
        })]), Ee[55] || (Ee[55] = e("p", {
          class: "empty-text"
        }, "还没有生成书单图片", -1)), Ee[56] || (Ee[56] = e("p", {
          class: "empty-hint"
        }, "输入标题内容,点击生成按钮开始创建书单图片", -1))])) : (c(), v("div", jbe, [(c(!0), v(Ue, null, gt(te.value, (Kt, at) => (c(), v("div", {
          key: at,
          class: "generated-image-card"
        }, [e("div", {
          class: "image-wrapper",
          onClick: Fe => K(Kt, at)
        }, [e("img", {
          src: Kt,
          alt: `生成的书单图 ${at+1}`,
          class: "generated-image"
        }, null, 8, Fbe), e("div", Wbe, [a(Ze, {
          class: "preview-icon"
        }, {
          default: l(() => [a(P(Uu))]),
          _: 1
        })])], 8, qbe), a(ht, {
          class: "download-btn-small",
          onClick: lt(Fe => it(Kt, at), ["stop"])
        }, {
          default: l(() => [a(Ze, null, {
            default: l(() => [a(P(To))]),
            _: 1
          }), Ee[57] || (Ee[57] = g(" 下载 ", -1))]),
          _: 1
        }, 8, ["onClick"])]))), 128))]))])])) : M("", !0), d.value === "poster" && f.value === "myworks" || d.value === "booklist" && y.value === "myworks" ? (c(), v("div", Gbe, [e("div", Jbe, [(c(!0), v(Ue, null, gt(de.value, (Kt, at) => (c(), v("div", {
          key: at,
          class: "template-card"
        }, [e("div", Hbe, [e("img", {
          src: Kt.cover,
          class: "cover-img",
          onClick: Fe => Ie(Kt)
        }, null, 8, Qbe), e("div", {
          class: "cover-overlay",
          onClick: Fe => Ie(Kt)
        }, [...Ee[59] || (Ee[59] = [e("span", {
          class: "preview-text"
        }, "点击预览图片效果", -1)])], 8, Kbe)]), e("div", Ybe, "id: " + h(Kt.id), 1), a(ht, {
          type: "primary",
          class: "use-template-btn",
          onClick: lt(Fe => Ea(Kt), ["stop"])
        }, {
          default: l(() => [...Ee[60] || (Ee[60] = [g(" 使用 ", -1)])]),
          _: 1
        }, 8, ["onClick"])]))), 128))]), de.value.length === 0 ? (c(), v("div", Xbe, [...Ee[61] || (Ee[61] = [e("p", null, "暂无制作记录", -1)])])) : M("", !0)])) : M("", !0)], 2), a(xa, {
          modelValue: xe.value,
          "onUpdate:modelValue": Ee[15] || (Ee[15] = Kt => xe.value = Kt),
          width: i.value ? "90%" : "800px",
          "close-on-click-modal": !0,
          "align-center": "",
          "append-to-body": "",
          class: "cover-image-preview-dialog",
          onClose: Ee[16] || (Ee[16] = Kt => Re.value = 0)
        }, {
          default: l(() => [Ce.value.length > 0 ? (c(), v("div", Zbe, [Ce.value.length > 1 && Re.value > 0 ? (c(), ye(Ze, {
            key: 0,
            class: "preview-arrow preview-arrow-left",
            onClick: B
          }, {
            default: l(() => [a(P(an))]),
            _: 1
          })) : M("", !0), Ce.value.length > 1 && Re.value < Ce.value.length - 1 ? (c(), ye(Ze, {
            key: 1,
            class: "preview-arrow preview-arrow-right",
            onClick: W
          }, {
            default: l(() => [a(P(Wl))]),
            _: 1
          })) : M("", !0), e("div", ewe, [e("img", {
            src: Ce.value[Re.value],
            alt: `预览图片${Re.value+1}`,
            class: "preview-large-image"
          }, null, 8, twe)]), Ce.value.length > 1 ? (c(), v("div", awe, [e("div", lwe, h(Re.value + 1) + " / " + h(Ce.value.length), 1)])) : M("", !0)])) : M("", !0)]),
          _: 1
        }, 8, ["modelValue", "width"]), a(Hr, {
          modelValue: w.value,
          "onUpdate:modelValue": Ee[19] || (Ee[19] = Kt => w.value = Kt),
          "is-mobile": i.value,
          data: S.value,
          title: "模板图文预览"
        }, {
          header: l(() => [e("div", nwe, [Ee[62] || (Ee[62] = e("span", {
            class: "preview-title-text"
          }, "模板图预览：", -1)), z.value && !$.value && C.value.length > 1 ? (c(), v("div", owe, [a(ht, {
            size: "small",
            disabled: x.value <= 1,
            onClick: Ee[17] || (Ee[17] = Kt => st(-1))
          }, {
            default: l(() => [a(Ze, null, {
              default: l(() => [a(P(an))]),
              _: 1
            })]),
            _: 1
          }, 8, ["disabled"]), e("span", iwe, "模板 " + h(x.value), 1), a(ht, {
            size: "small",
            onClick: Ee[18] || (Ee[18] = Kt => st(1))
          }, {
            default: l(() => [a(Ze, null, {
              default: l(() => [a(P(Wl))]),
              _: 1
            })]),
            _: 1
          })])) : M("", !0)])]),
          _: 1
        }, 8, ["modelValue", "is-mobile", "data"]), a(xa, {
          modelValue: U.value,
          "onUpdate:modelValue": Ee[20] || (Ee[20] = Kt => U.value = Kt),
          title: "模板预览",
          width: "90%",
          "close-on-click-modal": !0,
          class: "template-preview-dialog"
        }, {
          default: l(() => [ue.value ? (c(), v("div", swe, [e("img", {
            src: ue.value.cover,
            class: "template-dialog-img"
          }, null, 8, rwe), e("div", uwe, [e("p", null, [Ee[63] || (Ee[63] = e("strong", null, "模板 ID：", -1)), g(h(ue.value.id), 1)])])])) : M("", !0)]),
          _: 1
        }, 8, ["modelValue"]), a(no, {
          modelValue: u.value,
          "onUpdate:modelValue": Ee[21] || (Ee[21] = Kt => u.value = Kt),
          onLoginSuccess: Z
        }, null, 8, ["modelValue"])])
      }
    }
  },
  dwe = al(cwe, [
    ["__scopeId", "data-v-fe8e5b34"]
  ]);
const vwe = {
    class: "payment-container"
  },
  mwe = {
    class: "top-bar top-bar--team"
  },
  gwe = {
    key: 0,
    class: "bar-back-text"
  },
  fwe = {
    class: "payment-content"
  },
  pwe = {
    class: "user-info-card user-info-card--team"
  },
  ywe = {
    class: "user-avatar-box"
  },
  hwe = ["src"],
  bwe = {
    class: "user-details"
  },
  wwe = {
    class: "user-nickname"
  },
  _we = {
    class: "user-status"
  },
  kwe = {
    class: "vip-packages-scroll-wrap"
  },
  Cwe = {
    key: 0,
    class: "loading-packages"
  },
  Awe = {
    key: 1,
    class: "vip-packages"
  },
  Iwe = ["onClick"],
  xwe = {
    class: "package-item-top"
  },
  Swe = {
    class: "package-name"
  },
  Ewe = {
    class: "discount-price"
  },
  Twe = {
    class: "package-price-box"
  },
  $we = {
    class: "package-original-price"
  },
  Pwe = {
    key: 0,
    class: "item-spec-compact"
  },
  Vwe = ["disabled"],
  zwe = {
    class: "vip-rights"
  },
  Lwe = {
    class: "rights-header"
  },
  Dwe = {
    class: "rights-list"
  },
  Mwe = ["data-team"],
  Owe = ["innerHTML"],
  Bwe = {
    class: "right-name"
  },
  Nwe = {
    key: 3,
    class: "right-tag"
  },
  Uwe = {
    class: "purchase-notes"
  },
  Rwe = {
    class: "notes-content"
  },
  jwe = {
    class: "note-item"
  },
  qwe = {
    class: "bottom-pay"
  },
  Fwe = {
    key: 0,
    class: "wappay-coupon-wrap"
  },
  Wwe = {
    class: "wappay-coupon-head"
  },
  Gwe = {
    key: 0,
    class: "wappay-coupon-tip"
  },
  Jwe = {
    key: 1,
    class: "wappay-coupon-login-tip"
  },
  Hwe = {
    key: 2,
    class: "wappay-pay-breakdown"
  },
  Qwe = {
    class: "wappay-pay-breakdown-price"
  },
  Kwe = {
    class: "wappay-pay-breakdown-deduct"
  },
  Ywe = {
    class: "pay-info"
  },
  Xwe = {
    class: "expire-time"
  },
  Zwe = {
    class: "expire-date"
  },
  e_e = {
    class: "wappay-agree-row"
  },
  t_e = {
    class: "wappay-agree-text"
  },
  a_e = {
    class: "pay-btn-inner"
  },
  l_e = {
    class: "pay-btn-main"
  },
  n_e = {
    class: "pay-price"
  },
  o_e = {
    class: "qr-content"
  },
  i_e = ["src"],
  s_e = {
    class: "qr-time"
  },
  r_e = {
    class: "pay-qrcode-content"
  },
  u_e = {
    class: "qrcode-header"
  },
  c_e = {
    class: "qrcode-content"
  },
  d_e = {
    class: "qrcode-image-wrapper"
  },
  v_e = ["src"],
  m_e = {
    key: 0,
    class: "checking-status"
  },
  g_e = {
    class: "qrcode-actions"
  },
  f_e = {
    __name: "wappay",
    setup(t) {
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
  },
  p_e = al(f_e, [
    ["__scopeId", "data-v-3894ae84"]
  ]),
  Pb = [{
    key: "pet",
    label: "宠物类",
    emoji: "🐾",
    color: "#f59e0b",
    titles: ["“全网都在疯抢的猫抓板🛒让主子爱不释手！”", "“我不会下蛊，喵喵我啊 就是蛊。”", "所以这是触碰到他哪里的开关了", "我是不想玩猫，但是架不住猫自己想玩", "这招给猫剪指甲绝了", "“✨打造宠物角，这些小物件必不可少！”", "“让宠物健康成长的秘密🌿这些食品你选对了吗？”", "狸花猫妈妈好有礼貌，跟爷爷要鱼吃！", "“宠物日常用品推荐📦方便又好用，养宠必备！”", "妈妈酱～尿不出来一点", "“🐾定制宠物项圈，让你的宠物与众不同！”", "猫：颜色正确，有点瘦😂", "嘬嘬嘬狗狗真的会过来哈哈哈", "“宠物洗澡不再难🛁这些神器让洗澡变成享受！”", "“超萌狗狗穿搭🧥让你的爱犬成为街拍焦点！”", "“🐕遛狗新装备，这些绳子实在太好用了！”", "狸花猫驯养日记14", "狗子:它攮俺腚，你还在笑！！！", "小狗硬控上班族30秒实录", "偶遇一只主动的大橘", "完美适配猫碗👌", "要先给小狗闻手然后才可以摸知道不", "差一秒就饿趴的猫咪", "“猫奴必看🐱这几款猫砂盆简直完美！”", "小猫尺子^›⩊‹^ ੭", "“毛茸茸的温暖抱枕🐾这个冬天和你的宠物一起取暖！”", "“宠物也有好品味🛋️这些家具让家更有爱！”", "“🐱猫咪的天堂！这些小屋简直可爱爆棚！”", "朋友们，这谁忍得住啊！", "可能这就是瞬间的意义🌧️🐈", "这猫死了！！😨懒死的～", "“狗狗专用洗护产品🧴这些品牌效果超赞！”", "地上怎么有一摊松软委屈的小面包啊", "“毛孩子的美食盛宴🍖这些主粮太好吃了！”", "派个小猫看看你在干嘛", "我们家大橘肌肉都已经练出来了每天自律得很", "车下窜出来一只猫，跳上了我的车", "“让宠物享受高级生活🌟这些用品超有质感！”", "猫咪的倒霉瞬间", "🐱：在我律师来之前我不想说一句话", "这跟小宝宝有什么区别", "在广东，小猫咪也很讨厌下雨吧", "谁懂 当儿子养了一周 去医院体检发现是女儿", "耳朵立起来那一刻 便签订了终身契约", "这只猫的三花尾巴是后面定制加装的吧😂", "早晨的小狗是不是都是这样 嗷呜！", "“狗狗也能当模特📸时尚宠物服装秀！”", "“🐱猫咪美容神器，主子们的美貌维护全靠它们！”", "狗狗教新到家的流浪小狗玩玩具", "有些狗的智商是写在脸上的", "从未见过如此标准的反犬旁", "很喜欢碰瓷的撒娇小猫", "“让家里充满爱🐶这些宠物装饰品太温馨！”", "“宠物节快乐🎉这些惊喜礼物让你的宠物超开心！”", "狸花猫都是这么会照顾人的嘛？", "早说不让你养这吗大狗啦", "“🐶这些宠物零食太美味，看它们吃到停不下来！”", "捡到一只猫 下一步怎么办啊", "半夜醒来看到这一幕", "“超萌宠物玩具大集合🐶每一个都让它玩到停不下来！”", "狗！！！不能要了", "“主子最爱！这些逗猫棒🐾简直好玩到停不下来！”", "“🐱这几款猫窝太舒适，主子躺上去就不愿下来！”", "兔兔到家第一天给我的惊喜🥰", "一摸就装死的小猫咪", "“🐾新款宠物服装上市！你的毛孩子也能当潮宠！”", "给猫剪指甲小技巧", "“新款猫爬架🐾你的主子一定爱不释爪！”", "这下再也不担心他会热到自己啦", "这小狗怎么一秒钟八百个假动作", "骗猫喝水，易如反掌", "“宠物生活品质升级🆙这些小物件绝对少不了！”", "“主人们的福音📦这些宠物收纳好物不可错过！”", "“💡聪明宠物的必备玩具，让它们动脑又开心！”", "猫身上扣下来的虫子困在指甲盖里了", "第一次收到流浪猫的礼物", "“🐕这些狗狗必备单品，让它生活更舒适！”"]
  }, {
    key: "emotion-vibe",
    label: "情绪化",
    emoji: "💭",
    color: "#8b5cf6",
    titles: ["“我终于明白了，为什么自己一直不成功…”", "敢不敢狠下心来死磕一个技能", "想想都可怕，这真的是给打工人吃的东西吗", "后悔没早点发现，这些年的生活费白花了", "“爆火全网！原来大家都靠这招逆袭！”", "救命！我好爱她身上的这种松弛感", "听劝！没钱请停止做这100 件事", "妈耶！被夸爆的xx在这里", "不懂就问，这样的房子真的没人租吗", "想想都可怕，我居然真的瘦了 20 斤", "“看完我真的心服口服…”", "后悔没有早点刷到这篇笔记", "不懂就问，这种身材怎么做到的", "“气炸了！这样做真的是在坑自己！”", "通勤本命，我真得爱了", "太爱这种女生了，2024 请逼自己成为这种人", "“全网都在疯抢！难道只有你还不知道？”", "真的有被这个便宜的小玩意惊艳到", "后悔没早知道这个课程|轻松月入过万", "真的有被这个来面试的毕业生惊艳到", "xx 才是是真正的 xx 天花板！", "“这一点改变，竟然让我泪流满面…”", "“这件事让我后悔了一辈子！”", "“看到这里我忍不住哭了…”", "敢不敢坚持 30 天脱胎换骨", "有了 xx，没人能比你早下班", "去年姐就是这样逼着自己考上研究生的", "后悔没有早点刷到这篇笔记", "xx 超酷的好吗？", "“再不改变，你真的完了！”", "“震惊！原来我们一直都做错了！”"]
  }, {
    key: "growth",
    label: "成长类",
    emoji: "🌱",
    color: "#10b981",
    titles: ["对抗抑郁反内耗必看", '"打造更好的自己📈这些提升技巧改变人生！"', '"让自己更强大💪这些自我提升方法超有效！"', "我向往中的生活是什么样子", '"不再害怕失败🙅‍♂️这些心态调整方法帮助你！"', "敢不敢用一个月彻底改变自己", "当把自律培养成习惯", '"掌握这些沟通技巧🗣️让你的人际关系更顺畅"', "拒绝摆烂！一个月自学就业技能", '"今天的努力，为了未来的美好🌱"', '"学会管理时间🕰️这5个方法让你每天都充实"', '"改变思维方式🧠从此过上不一样的生活"', '"时间管理秘籍⏳让你每天都更高效！"', "15 部女生必看纪录片让你自律成瘾", "女孩，请大胆一点", "做一个清醒通透的女孩真的很爽", '"拒绝拖延症🕒这些方法帮你克服懒惰"', '"如何在逆境中成长🌧️这些方法值得一试！"', "100 部纪录片，狠狠提升认知", '"如何在短时间内提升自己的竞争力💪"', '"摆脱负面情绪🌈积极心态让你更快乐！"', "致我热烈又勇敢的 xx 岁", "要么天赋异票，要么天道酬勤", "10 个思维特质成功逆袭宝藏女孩", '"走出低谷，重拾自信💪这些策略帮你渡过难关！"', "自律打卡｜30 天彻底改变自己", '"找到真正的自己💡探索内心的力量"', "连续一个月早起我收获了什么", '"掌握这5个技巧📚让你更自信！"', '"从迷茫到清晰🔍这些方法帮你找到方向"', '"自律是最强的自我投资💪学会这些小技巧"', "长期摆烂后！如何恢复学习力", "会说话的女生真的 yyds", '"梦想不会主动找到你🌟采取行动是关键！"', '"改变生活从改变思维开始🧠这些技巧让你大开眼界"', '"寻找内心的宁静🧘‍♂️这些冥想技巧帮到你"', '"心态决定一切💭学会用积极的态度面对生活"', '"如何在忙碌中找到平衡⚖️这些技巧很实用"', '"从平凡到卓越，这些方法值得尝试！"', "生活经济独立的女生小日子有多爽", "被穷养长大的女孩！如何改变现状", '"如何在职场中脱颖而出？👔掌握这些秘诀！"', "独处时可以干的 100 件小事", "独居女孩自律的一天", "高敏感人群是与生俱来的天赋", '"迈出舒适圈🔥你离梦想只有一步之遥！"', "社恐体验社牛的一天", '"自我提升的黄金法则✨成为更好的自己！"', "学习一门新语言到底难不难", '"从今天起，做更好的自己🌿开始行动！"', "当你又忙又美，何惧患得患失", "上一节花艺课是什么体验", '"放下过去，迎接全新的自己✨"', "社恐体验社牛的一天", "早起的一年给我带来什么改变", '"成功的人生从这些小习惯开始📈"', '"如何培养长期坚持的习惯📅这些方法你值得尝试"']
  }, {
    key: "relationship",
    label: "情感类",
    emoji: "💗",
    color: "#ec4899",
    titles: ["你知道什么是爱吗？小女孩回答亮了", "人贩子偷走他 25 年人生，却把父母逼成了富翁", "她先是自己，然后才是妈妈", '"🎬 回忆如电影，却再也演不出结局"', "我的眼泪跟着迪丽热巴啪啪掉…", '"🌧️ 爱情里最难熬的，是等待的滋味"', "我把你当闺蜜，你居然想抢我男人！？", "跟纪律委员做闺蜜是种什么体验？", '"🍁 你走后，连风都变得冰冷"', "收到一封迟到 6 年的情书", "爱情需要经营，友情又何尝不是呢", '"🎵 那首歌，至今依然触动心弦"', '"✨ 那个让你笑的人，后来呢？"', '"🌟 那一瞬间，仿佛全世界只剩下我们"', "暧昧期如何有效打直球❓ (含话术~）", "如果你幸福，我会比你先掉眼泪", "原来爱真的能够创造奇迹", '"🚶‍♀️ 离开的背影，成了我最深的记忆"', "原来这就是传说中的正常男人吗？", '"🍓 你是甜蜜的回忆，也是苦涩的伤痕"', '"🌸 再见了，我曾深爱的自己"', "如果你男友有以下四点，坚决不建议结婚！", "少年，你的剑呢", '"🧩 失去你，我的世界少了一个拼图"', "为什么现在的学生不活泼了呢？今日话题情感", '"🎈 越想忘记，越是无法放下"', '"💔 那一刻，我知道心真的碎了"', '"🍂 放手，是我给你最后的温柔"', '"💧 泪水悄悄滑落，是因为还爱着你"', '"🔥 为你燃烧的心，终究被风吹散"', "才 20+，怎么会想着结婚生子呢，自由才应该是向往的", '"🌿 离开你，是我最勇敢的一次"', '"🌙 深夜的思念，总是最无法掩饰"', '"☔ 雨后的彩虹，像极了我们的曾经"', '"🍂 秋天的落叶，藏着我对你的思念"', "偏我来时不逢春，偏我去时花满楼", "孩子的世界很小，小到你就是他的全部。", "总有一个人会让你明白，漂亮不是被爱的前提", "拒绝恋爱脑❌女生要自爱才是顶级魅力", '"🍃 遗憾，是一场无法追回的错过"', "别拿“为你好”，绑架孩子一生！", "意外成女流氓？Crush 被我当街吃豆腐", '"🕰️ 在错的时间遇见对的人，是一生的遗憾"', '"🌺 你不懂，我的世界因为你而绽放"', "搞怪的不是时机，是我数不清的犹豫", "前夫哥一开口，真上头啊", '"🔮 我曾以为，命运会把你留给我"', '"🌹 我用尽了力气，还是留不住你"', '"🌈 我以为你是彩虹，结果却是场暴雨"', '"🔒 锁住的，不只是回忆，还有心里的伤"', '"🌀 那一刻，我才明白什么叫爱而不得"', "戒掉恋爱脑之后，我谈了一场九年的恋爱。", "没必要把怀念弄得比经过还长", '"🌊 眼泪流干后，才发现心依然在痛"', "让男生上瘾的五个小心机！拿捏爱情主动权！", '"🌌 爱你的那段日子，像极了一场梦"', '"💫 原来，最遥远的距离是心的距离"']
  }, {
    key: "jewelry",
    label: "饰品类",
    emoji: "💎",
    color: "#06b6d4",
    titles: ["“今年流行的饰品款式，你都知道吗？”💗", "高糊图防爆？我火眼金睛👀", "没有蝴蝶的夏天是不完美的夏天", "“用这几款饰品，让你的穿搭更出彩！”🎉", "“女生必备的10件饰品，看看你有没有？”🥳", "99r四件套！🍣🍞🥟🍙", "突然发现XX手链这么叠戴直接封神了就是说", "25款平价又精致饰品分享！⚗️这么漂亮服了！！", "“如何挑选适合自己的饰品？干货分享！”🎉", "“这个项链，不仅好看，还能提升气质！”🎁", "omom！小蜻蜓直接piu亮我心里去了", "“饰品搭配的终极指南，让你不再犯愁！”✨", "“我最近入手的5款饰品，强烈推荐！”🎁", "晒黑了才发现青金石多么显白", "(^з^)-☆夏日限定！漂亮的烟花耳夹！！🎆", "看到了 说明你要转运啦🍀", "就问谁不爱【洛可可】上世纪的甜腻风格🍰", "“这个平价耳环，效果堪比大牌！”🌿", "“时尚博主们都在戴的饰品，你也要有！”🎊", "避坑天价手串 别被骗了", "方圆脸贴面耳天菜就是它！", "救命..我好像买到了我的人生手链！！😭", "七彩戒指 谁会喜欢", "光遇小发夹🔹🔸", "攒了3个盲盒开箱 真爽", "“用这几款饰品，轻松打造明星同款！”🌿", "小狐狸耳夹上线喽", "女生们注意了，鲨鱼夹的安全隐患！！！", "“饰品的正确保养方法，让它们更持久！”", "在济州岛！买到了人生戒指！！", "听说你们在找它🤔", "当我妈问我钱花在哪了？", "可爱小章鱼刘海抓夹", "这个项链绝美", "“搭配小技巧，让你的饰品更有魅力！”🎁", "“我最喜欢的10款饰品推荐！”🌿", "今天入手了一个超级可爱的苹果抓夹", "时尚仙气手链", "方圆脸真的适合戴夸张一点的耳饰！！！！！！", "白鹿这什么耳饰？比黄金还贵", "出门被问800遍的choker 手环", "“今年最火的饰品，你戴了吗？”🧐", "“这款耳环，修饰脸型效果超赞！”🧐", "你的项链有银河么？✨", "你没见过但辨识度过高的复古文艺感饰品", "“这个饰品搭配技巧，瞬间提升时尚感！”🌸", "kt蝴蝶结 特别萌的一只…..", "“学会这几种搭配，让你的饰品更出彩！”✨", "“平价饰品也能很时尚？你需要知道这些！”🍡", "“小饰品，大变化！让你变得与众不同！”🤩", "“这款项链，搭配任何衣服都超美！”✨", "“这款手链，低调又不失奢华！”✨", "“我每天都在戴的5件饰品推荐给你！”🤩", "姐妹们一定要记住玉不过手！", "超可爱包挂", "“如何用饰品打造不同风格？全攻略！”🌿", "饰品分享🌲可新中式可日常的百搭设计感单品", "“用这几款饰品，轻松打造高级感！”🥳", "本人真的好爱这种长长的链条⛓️‍💥", "“用了这个搭配技巧，饰品立马显高级！”🍡", "“这几款小众饰品，绝对不撞款！”🎊", "拯救黄铜音符发夹夹不住的问题！", "我的天..谁发明的！限时限定❗独一无二🤩", "这么精致适合夏天的项链我第一次见！！！", "普通人还配戴天然钻石吗❓❓", "“饰品也能玩出新花样？看看我的推荐！”", "我的少女心手链😍", "当我拥有一颗能切鱼的珠子…", "oc人狂喜系列|小众设计配饰、复古领针合集2", "“这个小众品牌的饰品，时尚达人都在戴！”💗", "几十块的快乐，夏天必备", "“只需一个小饰品，提升整体气质！”🎈", "花花发饰合集！！夏日必备（氛围感拉满💕", "高级感拿捏！项链万能搭配口诀✅变身时髦精✨", "小鱼发簪的正确使用方法", "挑战把女同事拍成品牌代言人", "长胖了手镯取不下来？教你几个小技巧", "“饰品也能改变气质？我来告诉你！”🌸", "美到失语的项链｜快去叫闺蜜安排上！"]
  }, {
    key: "outfit",
    label: "穿搭类",
    emoji: "👗",
    color: "#f43f5e",
    titles: ["一样的效果立省100", "📢懒人神技｜不试穿选对裤子❗️太会了", "永远不要对便宜的东西有偏见！", "五颜六色就对了！！", "本小🐻的救命胸贴！真的可以有大雷！", "和我的老婆们变个装", "130斤年度穿搭|不管几斤穿自己想穿的", "160/116斤 期待冬天", "姊妹们见家长穿哪套比较合适呀❓", "不会穿搭配色，就去抄他的电影", "第一次这么穿适合我吗？", "痛衣买错尺码", "实用干货|基础白t秒变时髦的6个搭配技巧", "想穿什么就去穿没什么大不了的", "会有人想要这个 xx 吗！", "这件小白裙承包我一整个夏天", "完全可以当韩货卖的好牌子", "鲨疯啦韩国街头最时尚的小孩原来是我女儿", "什么叫老天奶赏饭吃", "跟着 celine秀场学秋冬高级感搭配戴", "如何摆脱正装羞耻！", "方圆脸变美思路！增高露肤度真的会变大气", "这条裙子太太太好看了!", "女生要知道的买衣服定律", "女儿三十岁了还喜欢打扮成这样 怎么办！？", "奶呼呼的蓝色搭配绑带花苞裙太适合夏天啦！！", "拒绝吊带羞耻❌突破穿搭舒适圈", "又甜又辣！20来块的红格子露背内衣 爱惨了", "夏季不撞衫漂亮防晒衫穿搭", "谁懂以前那种长长的很修身的衣服🥹", "美神降临!简直梨型的封神战裙~", "外企打工人·一周穿搭不重样", "第一次直观感受到身材比长相更有杀伤力", "高考生爆改，秒了", "孙子的衣服全靠爷爷的美貌", "不敢想象下雨天这么拍会有多出片！！", "救命!在大理买到了我的梦中情裙!", "关于我淘的裙子穿着真的很御姐很显身材！", "良心推荐一家我从 18 年买到现在的睡衣店", "这套我可以穿一整个夏天", "天底下最适合zara 小黑裙的女人出现了😻", "这种设计师就该被……", "这些配饰出门会被追着问了5条街", "地铁上被自己美到", "多巴胺甜妹穿搭好爱！这套香芋奶油好甜啊", "我重生了之挑战测评 100 条辣妹裙", "社死😅还好没有一冲动就把这个发给商家了", "30+ 姐姐真金白银砸出来的私藏店铺！", "我愿称之为最强平替!只买对的不买贵的", '被称为"腰臀比之神" 连衣裙的白色款来袭', "搬砖人这样穿!职场通勤穿搭合集来啦!", "肩带外露影响美观？来看这些小妙招", "我太会买了，我妈都夸好看", "属于女生自己的侧开口牛仔裤", "梨型身材一定要试试长裙，超级遮肉显瘦", '"穿衣自由"真的可以这样用吗？', "微胖女生尝试多巴胺穿搭，万万没想到", "女孩子要尝试不同风格，不要局限自己", "我愿称之为人生打底衫，贼显瘦啊啊啊!", "拉高颅顶显脸小，辣妹必备", "7w人看过的视频", "时尚女孩必备的西装搭配技巧", "大学生面试通勤🌟正装分享！！！", "锐评一下这套", "胖 mm 也可以拥有多巴胺穿搭！", "小胸的救命胸贴！真的可以有聚拢饱满的🐻型！", "171多重才算瘦", "快醒醒，你缺的不是衣服，是穿搭思路", "50+ 拿下一套 | 穷鬼女大学生版 | 不看后悔！！"]
  }, {
    key: "travel",
    label: "旅行类",
    emoji: "✈️",
    color: "#3b82f6",
    titles: ['"自驾游爱好者的天堂！最佳路线推荐！"', "再穷也要带孩子去这几个城市", '"一生一定要去的10个梦幻旅行地！"', "10 个均温 20 度的避暑胜地🍃行走的空调", '"惊艳的自然风光，这里是摄影师的天堂！"', "不必出国🗺我去过最异域风情的9个地方", "这个夏天一起去看海吗｜xx 两天一晚攻略", '"亲子旅行首选，这里的乐趣超乎想象！"', '"网红打卡地推荐，让你的旅行更有范儿！"', "我摊牌了！国内最爱的度假村，没有之一…", "xx 开车一小时可以到的小马尔代夫！！", "在 xx 和父母住了五天，不想退房😭", "去不了瑞士，但总得和朋友来 xx 吧⛰", '"穷游也能玩出高级感，这些地方了解一下！"', '"徒步天堂，这条线路让你迷失在美景中！"', "反向旅游！国庆适合去的十大小众城市！", '"快来探索这些充满神秘色彩的旅行地！"', "高铁直达！不想工作就来这个避世童话森林屋", '"这个城市的阳光和美食让你流连忘返！"', '"这些旅行地让你一秒心动，准备好你的行李！"', '"这些地方去过一次就会爱上，别再犹豫了！"', '"深度游推荐，让你彻底爱上旅行！"', '"这里的每一处风景都能治愈你的心灵！"', '"亲测超美！这个地方真的被低估了！"', '"自驾游必去的风景线路，体验大自然的壮美！"', '"探索国内最美的冷门旅行地，你去过几个？"', '"神秘的古镇旅行，让你体验不一样的风情！"', '"省钱又好玩的旅行地推荐，快来抄作业！"', "XX 地两天一夜人均 300 旅游攻略", '"你不能错过的世界绝美旅行地盘点！"', '"超适合拍照的旅行地，随手一拍都是大片！"', "《国家地理》没有骗我、被严重低估的 xx", "江浙沪丨被人民日报表扬的 xx 有多绝❗", '"旅游达人都推荐的隐藏旅行地，速来打卡！"', "xx 旅游后劲太大了😭听听我的真实感受！", "第一次来 xx 旅游不要慌‼来看旅游攻略", "去过那么多海边城市，顶顶怀念的还是 xx", "接下来的 xx，堪称国内浪漫旅行天花板！", '"这些地方旅游，不仅美还省钱！"', '"适合一个人旅行的目的地，享受片刻宁静！"', "在xx被问爆的9⃣个地方，拜托一定要去！！！！", '"情侣必去！浪漫旅行地大揭秘！"', '"这个地方四季如春，适合长期度假！"', "盘点我去过的 9 个绝美地，比国外还美啊！", '"去过一次就不想回来的绝美小镇！"', '"私藏的绝美旅行地，现在告诉你！"', '"一个星期就能玩遍的旅行地，安排上了！"', "人回来了，心还留在 xx⛰", '"环游世界的最佳路线，你计划好了吗？"', "这才是 LIVE 图的意义吧！美到失语", "朋友圈被问疯了🤣🤣都以为我出国了‼", '"一天就能打卡的绝美小众景点！"', '"不用出国也能看见这样的美景！"', '"这个小众旅行地，美到让人窒息！"', '"打卡这些地方，让你的旅行更加丰富多彩！"', '"环游世界的梦想，这些地方一定要在清单里！"', "低预算没有人 | 5 个冷门出片旅游地，人均几百", '"必去的旅行拍照圣地，不去真的亏大了！"', "听劝去了 xx！真的美哭我了😭", '"最美旅行地TOP10，每个都让你舍不得离开！"', "求了！来 xx 旅游要提前预约！不然进不去！", "2024 年，一定要去的 8 个冷门又有趣的城市", '"不去这儿看看，你的旅行清单不完整！"', "City Walk 我的徒步日记", '"轻松出行！旅行必备神器大盘点！"', "总要跟好朋友去一次海边吧", "远离人群，国内这个小城太适合躺平发呆了！", "本以为xx已经够美了，直到我去了 xx…", "拜托了🙏想去 xx 旅游的存下吧，很难找全", "朋友说我在发一种很新的朋友圈哈哈哈"]
  }, {
    key: "beauty",
    label: "美妆类",
    emoji: "💄",
    color: "#d946ef",
    titles: ['"换季护肤必备！这款面霜太好用了！🌿💧"', "新手化妆首先搞清楚 xxx", '"只需5分钟！懒人必备的速成妆容秘籍！⏰💋"', '"素颜零负担！这款气垫让肌肤透亮水润！💧✨"', '"美妆新手必学！一学就会的化妆小技巧！📚💄"', "5 分钟搞定早八妆", '"这款万能粉底谁用谁夸！性价比超高！💯💄"', '"平价也能买到大牌感！用了就回不去了！💰💄"', "笨蛋美女的底妆分享", "（高清版）画了一个很上镜的妆", '"神仙高光，一抹即闪，妆感直接飞升！✨👸"', "来交代我的活动妆造了", "不愧是 xxx 推荐的！", "为什么化完妆有一种精致的丑陋感", '"谁说平价无好物？这些美妆好物效果惊艳！💸💄"', '"裸妆秘籍！轻松打造完美素颜妆！👀💋"', '"零瑕疵妆容教程！学会这些技巧变女神！👑✨"', '"这款眼影盘太美了，妆容直接提升两档！🌟👁️"', "新手不会出错的 xxx 顺序！", "试过了！xxx 真的 xxx ！", '"素颜变精致！用了这款粉底，肤感无敌！👑"', "男朋友妈妈要看！选哪张", '"懒人救星！用了这款口红，瞬间提升气质！💋🌟"', '"这支睫毛膏太逆天了，根根分明不结块！👁️✨"', "爷青回！！飞机沉浸式画一个烟熏妆！", '"画眉不求人！这款眉笔太好用了！🖊️✨"', '"新手化妆必备！这套彩妆工具让你轻松上手！🛠️💄"', '"一秒显气质！这款眼线笔真的太好用了！👁️🎯"', "普通人用眼影贴我想说…", '"显白神器！这款口红绝对让你白到发光！💄✨"', '"这款遮瑕膏太牛了！一抹就隐形！🎯🌟"', '"光泽感爆棚！这款高光谁用谁发光！🌟💖"', '"这款口红绝了！谁涂谁惊艳！💄✨"', '"谁用谁称赞！这款底妆遮瑕效果太强了！🎯"', '"美白精华中的战斗机！谁用谁变白！❄️✨"', "化完妆再看素颜真的离谱", "方圆脸请把 xxx 焊脸上", '"皮肤太干？这款保湿精华拯救你的肌肤！💧🌸"', '"平价好物！学生党必入的化妆品清单！💸💄"', "一人说一个好用的 xxx", "说说自己踩雷的 xxx", "我妈让我别化丑妆….", '"想要高级感？这款唇膏绝对不踩雷！👄💎"', '"这款修容盘堪比整容级别！谁用谁惊艳！🔥"', '"平价好物大公开！谁用谁种草！🌿💖"', "一眼入魂！第一眼美女妆！", "新手日常通勤必备 5 分钟搞定", '"用了这款隔离霜，妆感超自然，像天生好皮肤！🌿💫"', '"神仙定妆喷雾！妆容持久一整天！⏳🌸"', "坚持化妆 n 个月的变化⋯"]
  }, {
    key: "career",
    label: "职场类",
    emoji: "💼",
    color: "#6366f1",
    titles: ["未来最吃香的 10 种工作能力", "打工而已不要太上头了！", "向内成长如何成长为职场大女主？", "全英会议主持模板，职场小白背", "搞懂职场的“潜规则”", "自我提升 | 什么样的员工老板抢着要", "职场最忌讳 12 个学生思维！！", "第一次当领导，要练的9样东西", "发现一个职场中改掉学生气的妙招", "5招高情商搞定老板", "工作能力差有什么表现？", "工作十年后，悟出什么职场道理？", "职场搞钱工具！狠狠逆袭", "千万别把工作看太重，但不是摆烂！", "工作 11 年整，35 岁的我明白了这些", "真心建议你用这样的心态去工作！", "大家都是打工人，凭什么我要惯着你啊！！！", "抵抗职场焦虑的终极法门", "后悔没有掌握好的9个职场技能", "10 条职场潜规则，收藏下来细品", "在搞事业方面，我真的对自己蛮狠", "领导眼中，工作能力强的必备6点", "劝大家！用离职的心态去打工", "那些越早明白越好的职场真相！！", "公司新来的 00 后给我狠狠上了一课"]
  }, {
    key: "fitness",
    label: "健身减肥类",
    emoji: "🏋️",
    color: "#22c55e",
    titles: ["居家燃脂组合拳。。。", "练上臀才是王炸！梨形身材翘臀绝了", "看我肌肉这么小一定以为我很弱吧", "帕梅拉：瘦很快，但对体能要求较高", "“如何在30天内实现健康减脂？”💗", "一遍肩背就酸炸🔥一周见效‼️巨瘦背✅", "164-116｜原来瘦了手指会变细", "四个容易发胖的时间点！你中了几个？", "小骨架好难", "练完直接穿吊带！", "“零器械，全身塑形，居家也能练出好身材！”💗", "看到对比真的有被吓到🐣", "3步瘦大腿根（最后一期且看且珍惜", "好练到尖叫🫨瘦手操动作详解✅️真有效", "“不去健身房也能练出好身材，试试这个！”💗", "这下谁还分得清我妈和爱因斯坦啊！！？", "瑜伽老师：我相当能屈能伸", "当我训练带耳机时", "“居家健身全攻略：省时又高效！”💗", "夏天了赶紧瘦下来！全身燃脂训练分享给你！", "“减脂增肌必备，这套训练效果超强！”💗", "最快最有效的收胯动作", "适合中国女性的减肥操~~中医“帕梅拉”", "“用对这几个动作，减脂增肌两不误！”💗", "真有用！不用器械！一学就会！（纯干货）", "小白健身，家里的破烂就够用了🫠", "“30天减脂计划，亲测有效，赶紧收藏！”💗", "“别再踩雷！这才是正确的减脂方式！”💗", "如何不经意露出肌肉（交通工具篇）", "100w人看过的 直腿视频…", "这个夏天一定瘦下来❗️找到更好的自己❗️", "瘦手臂成功！！跟练版➡️", "腿不直去练", "骨盆前倾矫正动作，经典永远出自教科书", "改善髋内旋✅", "天！滚透了这个点 我的背这辈子没这么薄过！", "“不用器械，这套训练让你练出完美身材！”💗", "帕梅拉真的巨巨巨瘦腿啊！大腿瘦了10cm了", "“健身小白也能练出人鱼线，这些动作必须试！”💗", "每天早起练背！背薄了好显腰细！！", "大腿前侧突出/小腿肌肉发达/练这个 超有用", "成年后蹿高不是梦❗️", "睡前躺着瘦全身", "“每天坚持10分钟，瘦身效果堪比健身房！”", "“每天5分钟，瘦腿效果堪比跑步！”💗", "谁说女生在健身房只拍照不训练的？", "想改善大腿前侧突出！先矫正骨盆是关键！", "“不去健身房也能瘦，居家训练全指南！”💗", "屈髋的重要性！教练已经说了多少遍了？", "“你还在做无效运动吗？试试这几个”", "“燃脂效果最好的运动有哪些？收藏这篇！”💗", "“居家也能轻松瘦，全身燃脂训练推荐！”💗", "“这个健身方法，燃脂效果惊人，赶紧试试！”💗", "最被低估的减脂蔬菜就是它！！", "夏日低卡雪糕🍦狂炫都不胖⁉️", "“瘦身不反弹，关键在于这几个动作！”💗", "“如何利用碎片时间练出马甲线？”💗", "女生薄背不走弯路！", "潮流运动笔记 | 官健美臀大赛282号", "最后一次减脂", "不愧是女团！不管减脂还是练核心都嘎嘎好使", "“我每天做这5个动作，体型大变样！”💗", "就3步瘦大腿根（超强跟练版！！", "“练出翘臀的5个关键动作！”💗", "“我坚持了30天，这组训练效果惊人！”💗", "“这5个健身动作，每天10分钟让你快速瘦身！”💗", "身体喜欢的动作，建议你多做！", "居家这样练臀绝了‼️一张床练出蜜桃臀🔥", "易胖or易瘦体质？30s用一块饼干就能测出来❗️", "古法开龙脊❗️别笑😄真有用🔥一遍通透", "“每天10分钟，轻松甩掉小肚腩！”💗", "模特日常瘦小腿训练", "夏天穿吊带不好看，需要把背瘦下来", "小腹突出不是胖🙅🏻‍♀️瘦肚子就这一招👊", "巨有效‼️睡前4min纠正骨盆🔥搞定下腹突出", "天生梨形星人，瘦腿30天的变化！", "吃垃圾食品后…别忘了吃“后悔药”‼️极速撤回", "“燃脂最强动作合集，瘦到停不下来！”💗", "“不想去健身房？在家也能练出好身材！”💗", "7月去阿勒泰前没瘦20斤❗在座的每人v50❗❗", "睡前趴着瘦大腿跟练！匀称细直腿型！！", "“7天练出马甲线，这套动作太有效！”💗", "“打造完美身材，这些健身动作一定要做！”💗", "简单的动作重复做，重复的动作认真做", "“如何科学健身，让减脂效果最大化？”💗", "“这5个动作让你1个月内减脂10斤！”💗", "直腿训练拉伸版～", "胸椎曲度恢复了，体态才能好！这不是驼背🔥", "健身半年后脸被刀削了一圈…", "千万别吃😅不然我怕你瘦成闪电❗️白到被骂❗️"]
  }, {
    key: "mom-baby",
    label: "母婴类",
    emoji: "🍼",
    color: "#fb7185",
    titles: ["大数据!请把这锅宝宝版串串香推给所有麻麻", "宝宝轻松睡出小圆头", "婴儿出生爸妈必须知道的事", "有娃 的姐 妹们买这个!墙裂推 荐", "你会孕检一路绿灯！孕妈孕爸请签收", "20岁生娃和30岁生娃，真正的区别吓你一跳", "所以当父母真的不需要考试是吗？？😬", "孕妈这样吃让宝宝赢在起跑线上", "不花钱在家就可以拍的孕妇照", "😏超好使!!专治坐姿歪歪扭扭屡教不改的宝", "夏日宝宝出行好物!一个小包就搞定!", "x个母婴平价好物!好用靠谱还不贵", "这就是孕激素的威力吗？", "劝劝未生的姐妹，坐月子请自私一点", "生孩子不就是用来玩的吗哈哈哈", "从女孩到妈妈孕期全纪录", "立规矩、执行规矩有窍门]!这样做孩子可听话了", "解放双手母婴神器!躺平带娃", "小宝宝胖嘟嘟的是这么来的，新手爸妈看过来", "早生孩子和晚生孩子的区别👶🏻你知道吗？", "女儿2岁，当她开始看纪录片知识暴涨格局炸裂", "婴儿哄睡神曲，妈妈肚子里的声音", "如何教孩子骑自行车?不费爸妈最快学会攻略", "对不起!钱钱线我娃真的很需要这个", "三岁前的宝宝，这样带才省心！", "哺乳期堵奶百试百通自救方法", "第1次母乳喂养!经历过才知道颠覆想象", "‼️5个顺产之光，🤦‍♀️能救一个是一个", "7个喂辅食错误做法❎新手、老人带娃自查！", "少喂宝宝吃这几种食物，脾胃慢慢养好啦❗", "备孕应该怎么备", "去别人家的十条规矩，还是尽早让孩子知道!", "怀孕🤰没人告诉你的4件事❗️", "家里有娃的都去买!好用!肯定用得上", "大家孕期都有多敏感哈哈哈笑不活了", "初次怀孕不知道的20件事", "夫妻备孕超全攻略🌈分享超快怀上的方法！", "产后康复看这里❗️万元💰换来的信息差", "家里有娃的都去买!好用!肯定用得", "宝藏书单0-6岁闭眼买绝不踩坑精华绘本", "现在知道还来得及！大数据还你生娃领💰啦", "当妈妈后掌握的最重要的技能", "早教看似是教宝宝!但其实更多是教父母", "拒绝无效备孕🔥强精强卵，24种食物照着吃", "不愧是央视！专为低幼儿童力荐的顶级纪录片", "孕早期到底有多难受", "每个月给宝宝选一个玩具❗", "新生儿出生后不能做21件事!!新手爸必知", "新生儿证件办理指南，码住备用!", "引导宝翻身的练习方法，新手宝妈们学起来吧", "孕妈进产房，可以带哪些饮料？", "当妈前信誓旦旦，当妈后我是啪啪打脸…", "宝宝用品这样买至少省1万", "一岁以上宝宝辅食串串香", "细节决定正确与否!新生儿抱姿", "女生怀孕后才知道的那些事!太尴尬", "为什么生娃一年了才让我发现介个玩意!", "二娃娘依然是辣妹~生完立马变瘦!!不惧三十胎", "97年孕期上班的一天vlog", "⚠️新生儿物品囤货避坑指南‼️新手妈妈进🤰", "如何教孩子骑自行车?不费爸妈攻略", "原来这么多人都不知道孩子为什么生病"]
  }, {
    key: "home",
    label: "家居类",
    emoji: "🏠",
    color: "#0ea5e9",
    titles: ["“今年最火的家居搭配方案，不试你就落伍了！”", "听说被抢疯了的 xxx", "啊看我又挖到了什么宝", "“房间太小？这招直接扩容20平米！”", "如何把 xxx 空间利用的明明白白", "“不花大钱也能拥有梦幻家居！”", "“家装这几点做好了，品味瞬间提升十倍！”", "“只有内行人才知道的家居布置大招！”", "建议 xx 的姐妹人手一个", "“超低预算也能打造明星同款家居风格！”", "“每天早上看到这个，幸福指数狂飙！”", "“花一半的钱，享受双倍的舒适感！”", "“别装了，家里这样布置才叫真懂生活！”", "“有了这件单品，瞬间变成INS风家居！”", "“聪明人都这么布置家，简单又惊艳！”", "“谁家还没试过这样布置客厅？”", "装修中最不值得多花钱的7样东西", "用了 n 年的 xxx 的真实反馈", "用了以后不想送给我姐妹了", "承认吧！这是不是你的梦中情房", "“这几个细节一改，家里瞬间大变样！”", "“让家瞬间提升质感的5个小技巧！”", "我的 n 件租房好物", "带我妈见识我的智能家居", "“这样装饰，让家瞬间提升温暖感！”", "听说你们喜欢我家卫生间的洗手池", "不买一定会后悔的 xxx", "“每天盯着这面墙，幸福感直接拉满！”", "“家居界的隐藏王炸！难怪这么多人模仿！”", "“看完你就懂，家居设计也能这么有趣！”", "“家居布置的黄金比例，99%的人都没用对！”", "“最火的家居设计趋势，大家都在抢！”", "“小空间大改造，家里瞬间多出一间房！”", "找装修工人这么说，他心里肯定佩服你", "内行人告诉你，选推拉门怎么避坑", "60 m²的小家｜40s 沉浸式回家", "“生活品质提升300%的家居秘密，学会秒变达人！”", "无成本 xxx 的收纳神器", "来看看我 23 岁时装修的房子", "虽然被推到烂，还是想夸一夸", "“把家装成这样，朋友来了都不想走！”", "“家里这样设计，瞬间变成度假村！”", "没有父母参与的装修！很爽！", "10 件提升幸福感的家居神器", "“家装必看！这几种配色方案直接惊艳全场！”", "入户鞋柜上做的展示柜，谁能不爱", "“这个家居设计，火爆全网，人人都在抄！”", "“不花钱也能让家高级感翻倍！”", "“这个小改动，竟然能让你家秒变豪宅！”", "“家居届的爆款神器，买到就是赚到！”", "果然，越穷家越大", "“你家看起来‘贵’的秘密全在这里！”"]
  }, {
    key: "food",
    label: "美食类",
    emoji: "🍜",
    color: "#f97316",
    titles: ["🍞 这份软糯，能融化所有坚硬的心！", "🍱 用味道说话，今天依然被它感动了！", "求求你们一定要尝尝 xxx"]
  }, {
    key: "wedding",
    label: "婚嫁类",
    emoji: "💍",
    color: "#e11d48",
    titles: ["婚礼上吃到的！！被惊艳住了😅……", "满脸幸福诠释了爱情最美好的模样", "穿上婚鞋，这辈子就是你了", "我们终于站在幸福的顶端", "这就是我们想要的婚礼！", "婚样拍摄—俏皮可爱表情如何做？", "下次换我们请你们吃喜糖吧", "婚礼权杖！自己做的！好仙呀✨", "为什么结完婚才发现这个婚车装饰！！", "我其实想象过这个画面你穿着婚纱…", "用武林外传做婚礼开场，好有创意", "全是珍珠也太好看了吧！！", "重生之我在婚礼开演唱会～", "看到别人幸福真的会忍不住流泪💒", "青春嫁给自己", "亲手为我的公主做个独一无二的皇冠", "永远为你们感情里的真挚热烈而感动", "不是酒店太贵了 而是这一刻太珍贵了", "“你看 我说过我穿婚纱会很漂亮的”", "生涯第一次 婚礼视频素材丢失...", "爱是一切的答案，也是唯一的理由", "“如果你幸福的话 我会比你先落泪”", "为期两个月的特种兵备婚终于交卷啦~", "结婚为了省点钱，买金条去打手镯了！", "合照不是最重要的 帮她收礼金才是", "前几天当伴郎 今天当新郎❤️", "办完婚礼会有戒断反应！泪目了！", "啊啊啊为什么结完婚才发现这个！！", "我们 天生一对", "记录下绝美婚礼现场", "婚礼上给爸爸妈妈的first look", "终于娶到了做梦都想娶的女孩！", "今天的新娘好甜美可爱呀", "有福之女不进无福之门", "怎么可以这样？到底是谁订婚！", "全网最牛中式接亲婚礼八抬大轿接亲"]
  }],
  sAe = Pb.reduce((t, o) => t + o.titles.length, 0);
const y_e = {
    class: "aiwenan-root"
  },
  h_e = {
    class: "mode-tabs-row"
  },
  b_e = {
    class: "mode-tabs"
  },
  w_e = {
    class: "workbench"
  },
  __e = {
    class: "left-card"
  },
  k_e = {
    class: "card-header"
  },
  C_e = {
    class: "card-title"
  },
  A_e = {
    key: 0,
    class: "mode-body mode-body--quick"
  },
  I_e = {
    class: "keyword-input-row"
  },
  x_e = {
    class: "input-with-count"
  },
  S_e = {
    class: "word-count"
  },
  E_e = {
    class: "keyword-actions"
  },
  T_e = {
    class: "quick-tips"
  },
  $_e = ["title", "onClick"],
  P_e = {
    key: 1,
    class: "mode-body"
  },
  V_e = {
    class: "input-box"
  },
  z_e = {
    class: "imitative-input-wrapper"
  },
  L_e = {
    key: 0,
    class: "pro-input-actions-column"
  },
  D_e = {
    class: "one-line-tips"
  },
  M_e = {
    class: "tip-grid"
  },
  O_e = {
    key: 2,
    class: "mode-body"
  },
  B_e = {
    key: 0,
    class: "link-parse-card"
  },
  N_e = {
    class: "input-wrapper"
  },
  U_e = {
    class: "actions"
  },
  R_e = {
    key: 0,
    class: "error-msg"
  },
  j_e = {
    class: "rewrite-form"
  },
  q_e = {
    class: "form-block reference-block"
  },
  F_e = {
    class: "rewrite-req-trigger-head"
  },
  W_e = {
    class: "block-title rewrite-req-trigger-title"
  },
  G_e = {
    class: "rewrite-req-degree-tag"
  },
  J_e = {
    class: "rewrite-req-summary"
  },
  H_e = {
    key: 1,
    class: "summary-empty"
  },
  Q_e = {
    key: 3,
    class: "bottom-bar bottom-bar--stacked"
  },
  K_e = {
    class: "bottom-left"
  },
  Y_e = {
    class: "one-line-controls one-line-controls--inline"
  },
  X_e = {
    class: "control-inline-item"
  },
  Z_e = {
    class: "control-inline-item"
  },
  e2e = {
    class: "extra-pill-row"
  },
  t2e = {
    class: "pill-btn-label-with-corner-tip"
  },
  a2e = {
    class: "pill-btn-label-with-corner-tip"
  },
  l2e = {
    class: "bottom-right"
  },
  n2e = {
    class: "batch-count-wrapper"
  },
  o2e = {
    class: "right-card"
  },
  i2e = {
    class: "result-header"
  },
  s2e = {
    class: "result-title"
  },
  r2e = {
    key: 0,
    class: "result-count-badge"
  },
  u2e = {
    class: "result-actions"
  },
  c2e = {
    key: 0,
    class: "retry-banner"
  },
  d2e = {
    class: "retry-banner-icon"
  },
  v2e = {
    key: 1,
    class: "empty-state"
  },
  m2e = {
    key: 0,
    class: "generate-progress-wrap"
  },
  g2e = {
    class: "generate-progress-text"
  },
  f2e = {
    class: "generate-progress-percent"
  },
  p2e = {
    key: 2,
    class: "result-body"
  },
  y2e = {
    key: 0,
    class: "batch-progress-banner"
  },
  h2e = {
    class: "field"
  },
  b2e = {
    class: "field"
  },
  w2e = {
    class: "result-item-header"
  },
  _2e = {
    class: "result-item-index"
  },
  k2e = {
    class: "result-item-actions"
  },
  C2e = {
    class: "field"
  },
  A2e = {
    class: "field"
  },
  I2e = {
    key: 0,
    class: "mobile-fab-bar"
  },
  x2e = {
    class: "mobile-fab-left"
  },
  S2e = {
    key: 0,
    class: "extra-pill-row extra-pill-row--fab"
  },
  E2e = {
    class: "pill-btn-label-with-corner-tip"
  },
  T2e = {
    class: "btn-label"
  },
  $2e = {
    class: "mobile-fab-right"
  },
  P2e = {
    class: "batch-count-wrapper batch-count-wrapper--mobile"
  },
  V2e = {
    key: 0,
    class: "import-tishici-loading"
  },
  z2e = {
    key: 0,
    class: "import-tishici-empty"
  },
  L2e = {
    key: 1
  },
  D2e = {
    class: "article-import-filters"
  },
  M2e = {
    key: 0,
    class: "import-tishici-empty"
  },
  O2e = {
    key: 1,
    class: "article-import-list"
  },
  B2e = {
    class: "article-import-title"
  },
  N2e = {
    class: "article-import-title-text"
  },
  U2e = {
    class: "article-import-preview"
  },
  R2e = {
    class: "article-import-meta"
  },
  j2e = {
    class: "article-import-actions"
  },
  q2e = {
    class: "rewrite-req-dialog-body"
  },
  F2e = {
    class: "req-section"
  },
  W2e = {
    class: "degree-options"
  },
  G2e = ["onClick"],
  J2e = {
    class: "degree-card-main"
  },
  H2e = {
    class: "degree-card-label"
  },
  Q2e = {
    key: 0,
    class: "degree-tag"
  },
  K2e = {
    class: "degree-card-desc"
  },
  Y2e = {
    class: "req-section"
  },
  X2e = {
    class: "chip-row"
  },
  Z2e = ["onClick"],
  eke = {
    class: "req-section"
  },
  tke = {
    class: "req-section-title"
  },
  ake = {
    class: "req-section"
  },
  lke = {
    class: "chip-row"
  },
  nke = ["onClick"],
  oke = {
    class: "req-section"
  },
  ike = {
    class: "chip-row"
  },
  ske = ["onClick"],
  rke = {
    class: "req-section"
  },
  Sy = 3,
  uke = {
    __name: "aiwenan",
    setup(t) {
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
  }
