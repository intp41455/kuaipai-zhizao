// module: pics
// extracted from 02-index-8bb27f01.js.js @ 1747058
{
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
