// module: Works
// extracted from 02-index-8bb27f01.js.js @ 1354324
{
  const o = ln(),
    i = fn(),
    n = p(""),
    s = p(!1),
    u = p(!1),
    d = p(!1),
    f = p(!1),
    y = p(!1),
    w = p({}),
    S = p({}),
    z = i.query.filter === "task" || i.query.taskId ? "task" : "time",
    x = p(z),
    C = p("all"),
    V = p(""),
    $ = p(null),
    N = p("all"),
    T = {
      yijuhua: 0,
      single: 1,
      batch: 2,
      copy: 3,
      "yijuhua-pro": 4,
      "yijuhua-max": 5,
      custom: 6,
      "zhiding-pro": 7,
      "zhiding-max": 8,
      photo: 9,
      "chanpin-pro": 10,
      "chanpin-max": 11,
      "renshe-pro": 12,
      "renshe-max": 13,
      "beiwanglu-pro": 14,
      "beiwanglu-max": 15,
      "duogongge-pro": 16,
      "duogongge-max": 17,
      "pengyouquan-pro": 18,
      "pengyouquan-max": 19,
      "zhishikepu-pro": 20,
      "zhishikepu-max": 21,
      "cepingduibilei-pro": 22,
      "cepingduibilei-max": 23,
      "wanggandazi-pro": 24,
      "wanggandazi-max": 25,
      "ainotes-free": 26,
      "ainotes-product": 27,
      "ainotes-copy": 28,
      ziyoutuwen: 29
    },
    R = Object.fromEntries(Object.entries(T).map(([$e, We]) => [We, $e]));
  ({
    ...R
  });
  const O = [{
      key: "yijuhua",
      label: "一句话笔记"
    }, {
      key: "single",
      label: "一键生成笔记"
    }, {
      key: "batch",
      label: "批量生成笔记"
    }, {
      key: "copy",
      label: "AI复刻同款"
    }, {
      key: "yijuhua-pro",
      label: "一句话笔记Pro"
    }, {
      key: "yijuhua-max",
      label: "一句话笔记Max"
    }, {
      key: "custom",
      label: "自定义笔记"
    }, {
      key: "zhiding-pro",
      label: "指定文案Pro"
    }, {
      key: "zhiding-max",
      label: "指定文案Max"
    }, {
      key: "photo",
      label: "传图生成笔记"
    }, {
      key: "chanpin-pro",
      label: "产品图Pro"
    }, {
      key: "chanpin-max",
      label: "产品图Max"
    }, {
      key: "renshe-pro",
      label: "人设创作Pro"
    }, {
      key: "renshe-max",
      label: "人设创作Max"
    }, {
      key: "beiwanglu-pro",
      label: "备忘录Pro"
    }, {
      key: "beiwanglu-max",
      label: "备忘录Max"
    }, {
      key: "duogongge-pro",
      label: "多宫格Pro"
    }, {
      key: "duogongge-max",
      label: "多宫格Max"
    }, {
      key: "pengyouquan-pro",
      label: "朋友圈Pro"
    }, {
      key: "pengyouquan-max",
      label: "朋友圈Max"
    }, {
      key: "zhishikepu-pro",
      label: "知识科普Pro"
    }, {
      key: "zhishikepu-max",
      label: "知识科普Max"
    }, {
      key: "cepingduibilei-pro",
      label: "测评对比类Pro"
    }, {
      key: "cepingduibilei-max",
      label: "测评对比类Max"
    }, {
      key: "wanggandazi-pro",
      label: "网感大字Pro"
    }, {
      key: "wanggandazi-max",
      label: "网感大字Max"
    }, {
      key: "ainotes-free",
      label: "超级图文自由创作"
    }, {
      key: "ainotes-product",
      label: "超级图文产品种草"
    }, {
      key: "ainotes-copy",
      label: "超级图文复刻同款"
    }, {
      key: "ziyoutuwen",
      label: "自由设计单图文"
    }],
    J = {
      yijuhua: "yijuhua",
      zhiding: "zhiding-pro",
      chanpin: "chanpin-pro",
      renshe: "renshe-pro",
      beiwanglu: "beiwanglu-pro",
      duogongge: "duogongge-pro",
      pengyouquan: "pengyouquan-pro",
      zhishikepu: "zhishikepu-pro",
      wanggandazi: "wanggandazi-pro",
      cepingduibilei: "cepingduibilei-pro"
    },
    ee = [{
      keyword: "测评对比类Max",
      source: "cepingduibilei-max"
    }, {
      keyword: "测评对比Max",
      source: "cepingduibilei-max"
    }, {
      keyword: "测评对比类Pro",
      source: "cepingduibilei-pro"
    }, {
      keyword: "测评对比Pro",
      source: "cepingduibilei-pro"
    }, {
      keyword: "测评对比",
      source: "cepingduibilei-pro"
    }, {
      keyword: "网感大字Max",
      source: "wanggandazi-max"
    }, {
      keyword: "网感大字Pro",
      source: "wanggandazi-pro"
    }, {
      keyword: "网感大字",
      source: "wanggandazi-pro"
    }, {
      keyword: "知识科普Max",
      source: "zhishikepu-max"
    }, {
      keyword: "知识科普Pro",
      source: "zhishikepu-pro"
    }, {
      keyword: "知识科普",
      source: "zhishikepu-pro"
    }, {
      keyword: "朋友圈Max",
      source: "pengyouquan-max"
    }, {
      keyword: "朋友圈Pro",
      source: "pengyouquan-pro"
    }, {
      keyword: "朋友圈",
      source: "pengyouquan-pro"
    }, {
      keyword: "社交分享",
      source: "pengyouquan-pro"
    }, {
      keyword: "多宫格Max",
      source: "duogongge-max"
    }, {
      keyword: "多宫格Pro",
      source: "duogongge-pro"
    }, {
      keyword: "多宫格",
      source: "duogongge-pro"
    }, {
      keyword: "备忘录Max",
      source: "beiwanglu-max"
    }, {
      keyword: "备忘录Pro",
      source: "beiwanglu-pro"
    }, {
      keyword: "备忘录",
      source: "beiwanglu-pro"
    }, {
      keyword: "人设创作Max",
      source: "renshe-max"
    }, {
      keyword: "人设创作Pro",
      source: "renshe-pro"
    }, {
      keyword: "人设",
      source: "renshe-pro"
    }, {
      keyword: "产品图Max",
      source: "chanpin-max"
    }, {
      keyword: "产品图Pro",
      source: "chanpin-pro"
    }, {
      keyword: "产品图",
      source: "chanpin-pro"
    }, {
      keyword: "指定文案Max",
      source: "zhiding-max"
    }, {
      keyword: "指定文案Pro",
      source: "zhiding-pro"
    }, {
      keyword: "指定文案",
      source: "zhiding-pro"
    }],
    ie = $e => {
      const We = typeof($e == null ? void 0 : $e.type_name) == "string" ? $e.type_name.trim() : "";
      if (!We) return "";
      const ze = ee.find(({
        keyword: H
      }) => We.includes(H));
      return ze ? ze.source : ""
    },
    Ae = ($e, We = null) => {
      const ze = Number($e);
      if (!Number.isNaN(ze) && R[ze]) return R[ze];
      if (typeof $e == "string" && T[$e] !== void 0) return $e;
      const H = ie(We);
      if (H && T[H] !== void 0) return H;
      if (We) {
        const Lt = We.from || We.zhiding && "zhiding" || We.chanpin && "chanpin" || We.renshe && "renshe" || We.beiwanglu && "beiwanglu" || We.duogongge && "duogongge" || We.pengyouquan && "pengyouquan" || We.cepingduibilei && "cepingduibilei" || We.wanggandazi && "wanggandazi" || We.zhishikepu && "zhishikepu";
        if (Lt && J[Lt]) return J[Lt]
      }
      return "yijuhua"
    },
    F = $e => Ae($e == null ? void 0 : $e.type, $e),
    Y = $e => {
      if (N.value === "all") return;
      const We = T[N.value];
      We !== void 0 && ($e.taskType = We)
    },
    ne = ($e, We = null) => {
      if ($e == null || $e === "") return "";
      if (typeof $e == "number") return Ae($e, We);
      if (typeof $e == "string") {
        const ze = $e.trim();
        if (ze === "") return "";
        if (!Number.isNaN(Number(ze))) return Ae(Number(ze), We);
        if (T[ze] !== void 0) return ze
      }
      return Ae($e, We)
    },
    De = ($e, We = null) => {
      const ze = ne($e, We);
      ze && (N.value = ze, console.log("从参数设置任务类型筛选为:", ze))
    },
    Q = p(!1),
    re = p([]),
    b = p(1),
    te = p(!1),
    we = p(0),
    ae = p(!1),
    me = p([]),
    ce = p({}),
    ue = $e => $e === 0 || $e === "0",
    U = $e => $e === -1 || $e === "-1",
    de = $e => !ue($e) && !U($e) && $e != null && $e !== "",
    _e = $e => de($e) ? String($e) : "",
    xe = $e => {
      if (!$e) return !1;
      const We = ($e.title == null ? "" : String($e.title)).trim(),
        ze = ($e.desc == null ? "" : String($e.desc)).trim(),
        H = ($e.content == null ? "" : String($e.content)).trim(),
        Ft = (Array.isArray($e.images) ? $e.images : []).some(Rt => Rt != null && Rt !== "");
      return !We && !ze && !H && !Ft
    },
    Ce = $e => {
      if (!$e || !Array.isArray($e)) return "";
      for (let We = 0; We < $e.length; We++) {
        const ze = $e[We];
        if (de(ze)) return typeof ze == "string" ? ze : String(ze)
      }
      return ""
    };
  let Re = null;
  const nt = () => Array.isArray(me.value) ? me.value.some($e => xe($e) ? !0 : (Array.isArray($e.images) ? $e.images : []).some(ze => ue(ze))) : !1,
    tt = () => {
      Re && (clearInterval(Re), Re = null)
    },
    qe = () => {
      if (!nt()) {
        tt();
        return
      }
      Re || (Re = setInterval(async () => {
        if (!nt()) {
          tt();
          return
        }
        if (!ae.value && b.value === 1 && !(typeof document < "u" && document.hidden)) try {
          await ct(!0)
        } catch ($e) {
          console.warn("自动刷新作品列表失败:", $e)
        }
      }, eoe))
    },
    Me = $e => {
      const We = $e.getFullYear(),
        ze = String($e.getMonth() + 1).padStart(2, "0"),
        H = String($e.getDate()).padStart(2, "0");
      return `${We}-${ze}-${H}`
    },
    rt = async ($e = !1) => {
      var We;
      if (!ae.value) {
        ae.value = !0;
        try {
          $e && (b.value = 1);
          const ze = {
            page: b.value,
            size: Qm
          };
          if (x.value === "keyword" && V.value.trim() && (ze.keyword = V.value.trim()), x.value === "task" && (N.value !== "all" && Y(ze), $.value && (ze.taskId = $.value)), x.value === "time") {
            let Lt = null,
              Ft = null;
            if (C.value === "today") {
              const Rt = new Date;
              Rt.setHours(0, 0, 0, 0), Lt = Me(Rt), Ft = Me(Rt)
            } else if (C.value === "yesterday") {
              const Rt = new Date;
              Rt.setDate(Rt.getDate() - 1), Rt.setHours(0, 0, 0, 0), Lt = Me(Rt), Ft = Me(Rt)
            } else if (C.value === "7d") {
              const Rt = new Date;
              Rt.setDate(Rt.getDate() - 7), Rt.setHours(0, 0, 0, 0), Lt = Me(Rt)
            } else if (C.value === "30d") {
              const Rt = new Date;
              Rt.setDate(Rt.getDate() - 30), Rt.setHours(0, 0, 0, 0), Lt = Me(Rt)
            } else if (C.value === "custom" && re.value && re.value.length === 2) {
              const Rt = new Date(re.value[0]);
              Rt.setHours(0, 0, 0, 0);
              const Ot = new Date(re.value[1]);
              Ot.setHours(23, 59, 59, 999), Lt = Me(Rt), Ft = Me(Ot)
            }
            Lt && (ze.startDate = Lt), Ft && (ze.endDate = Ft)
          }
          console.log("API 请求参数（任务选择）:", ze, "filterType:", x.value, "taskTypeFilter:", N.value);
          const H = await Zu(ze);
          if (H) {
            let Lt = [],
              Ft = 0;
            H.data ? (H.data.rows && Array.isArray(H.data.rows) ? Lt = H.data.rows : Array.isArray(H.data) && (Lt = H.data), H.data.pages && H.data.pages.total !== void 0 ? Ft = H.data.pages.total : H.data.total !== void 0 && (Ft = H.data.total)) : Array.isArray(H) ? (Lt = H, Ft = H.length) : H.rows && Array.isArray(H.rows) ? (Lt = H.rows, Ft = H.total || ((We = H.pages) == null ? void 0 : We.total) || Lt.length) : H.list && Array.isArray(H.list) && (Lt = H.list, Ft = H.total || Lt.length);
            const Rt = Lt.map(Ot => {
              let Xt = [];
              if (Ot.images) try {
                typeof Ot.images == "string" ? Xt = JSON.parse(Ot.images) : Array.isArray(Ot.images) && (Xt = Ot.images)
              } catch (Oa) {
                console.error("解析 images 失败:", Oa, Ot.images), Xt = []
              }
              let At = null;
              if (Ot.createtime) {
                if (typeof Ot.createtime == "number") At = new Date(Ot.createtime * 1e3).toISOString();
                else if (typeof Ot.createtime == "string") {
                  const Oa = parseInt(Ot.createtime);
                  isNaN(Oa) ? At = Ot.createtime : At = new Date(Oa * 1e3).toISOString()
                }
              }
              const pa = F(Ot);
              return {
                id: Ot.id,
                title: Ot.title || "",
                content: Ot.desc || Ot.content || "",
                desc: Ot.desc || Ot.content || "",
                images: Xt,
                cover: Ce(Xt),
                createdAt: At || Ot.createdAt,
                createdTimestamp: Ot.createtime ? typeof Ot.createtime == "number" ? Ot.createtime * 1e3 : parseInt(Ot.createtime) * 1e3 : Ot.createdTimestamp,
                taskId: Ot.taskid || Ot.taskId,
                source: pa,
                type: Ot.type,
                model: Ot.model,
                isRelease: Ot.is_release,
                imageMode: Ot.imageMode || Ot.image_mode || "aiNew",
                ...Ot
              }
            });
            $e || b.value === 1 ? me.value = Rt : me.value = [...me.value, ...Rt], we.value = Ft
          }
        } catch (ze) {
          console.error("加载作品列表失败:", ze), A.error((ze == null ? void 0 : ze.message) || "加载作品列表失败，请稍后重试")
        } finally {
          ae.value = !1, te.value = !1, qe()
        }
      }
    }, ct = async ($e = !1) => {
      var We;
      if (!ae.value) {
        ae.value = !0;
        try {
          $e && (b.value = 1);
          const ze = {
            page: b.value,
            size: Qm
          };
          if (x.value === "keyword" && V.value.trim() && (ze.keyword = V.value.trim()), x.value === "task" && (N.value !== "all" && Y(ze), $.value && (ze.taskId = $.value)), x.value === "time") {
            let Lt = null,
              Ft = null;
            if (C.value === "today") {
              const Rt = new Date;
              Rt.setHours(0, 0, 0, 0), Lt = Me(Rt), Ft = Me(Rt)
            } else if (C.value === "yesterday") {
              const Rt = new Date;
              Rt.setDate(Rt.getDate() - 1), Rt.setHours(0, 0, 0, 0), Lt = Me(Rt), Ft = Me(Rt)
            } else if (C.value === "7d") {
              const Rt = new Date;
              Rt.setDate(Rt.getDate() - 7), Rt.setHours(0, 0, 0, 0), Lt = Me(Rt)
            } else if (C.value === "30d") {
              const Rt = new Date;
              Rt.setDate(Rt.getDate() - 30), Rt.setHours(0, 0, 0, 0), Lt = Me(Rt)
            } else if (C.value === "custom" && re.value && re.value.length === 2) {
              const Rt = new Date(re.value[0]);
              Rt.setHours(0, 0, 0, 0);
              const Ot = new Date(re.value[1]);
              Ot.setHours(23, 59, 59, 999), Lt = Me(Rt), Ft = Me(Ot)
            }
            Lt && (ze.startDate = Lt), Ft && (ze.endDate = Ft)
          }
          console.log("API 请求参数:", ze, "filterType:", x.value, "taskTypeFilter:", N.value);
          const H = await Zu(ze);
          if (H) {
            let Lt = [],
              Ft = 0;
            H.data ? (H.data.rows && Array.isArray(H.data.rows) ? Lt = H.data.rows : Array.isArray(H.data) && (Lt = H.data), H.data.pages && H.data.pages.total !== void 0 ? Ft = H.data.pages.total : H.data.total !== void 0 && (Ft = H.data.total)) : Array.isArray(H) ? (Lt = H, Ft = H.length) : H.rows && Array.isArray(H.rows) ? (Lt = H.rows, Ft = H.total || ((We = H.pages) == null ? void 0 : We.total) || Lt.length) : H.list && Array.isArray(H.list) && (Lt = H.list, Ft = H.total || Lt.length);
            const Rt = Lt.map(At => {
              let pa = [];
              if (At.images) try {
                typeof At.images == "string" ? pa = JSON.parse(At.images) : Array.isArray(At.images) && (pa = At.images)
              } catch (gl) {
                console.error("解析 images 失败:", gl, At.images), pa = []
              }
              let Oa = null;
              if (At.createtime) {
                if (typeof At.createtime == "number") Oa = new Date(At.createtime * 1e3).toISOString();
                else if (typeof At.createtime == "string") {
                  const gl = parseInt(At.createtime);
                  isNaN(gl) ? Oa = At.createtime : Oa = new Date(gl * 1e3).toISOString()
                }
              }
              const Fa = F(At);
              return {
                id: At.id,
                title: At.title || "",
                content: At.desc || At.content || "",
                desc: At.desc || At.content || "",
                images: pa,
                cover: Ce(pa),
                createdAt: Oa || At.createdAt,
                createdTimestamp: At.createtime ? typeof At.createtime == "number" ? At.createtime * 1e3 : parseInt(At.createtime) * 1e3 : At.createdTimestamp,
                taskId: At.taskid || At.taskId,
                source: Fa,
                type: At.type,
                model: At.model,
                isRelease: At.is_release,
                imageMode: At.imageMode || At.image_mode || "aiNew",
                ...At
              }
            });
            $e || b.value === 1 ? me.value = Rt : me.value = [...me.value, ...Rt], we.value = Ft;
            let Ot = null,
              Xt = null;
            if (H.data && H.data.history && Array.isArray(H.data.history) ? (Ot = H.data.history, Xt = H.data.rows) : H.history && Array.isArray(H.history) && (Ot = H.history, Xt = H.rows), Ot && Array.isArray(Ot)) {
              const At = new Map;
              if (E.value.forEach(pa => {
                  pa && pa.id && At.set(String(pa.id), pa)
                }), Ot.forEach(pa => {
                  if (pa && pa.id) {
                    const Oa = String(pa.id),
                      Fa = At.get(Oa);
                    Fa ? pa.title && (!Fa.title || pa.title.length > Fa.title.length) && (Fa.title = pa.title) : At.set(Oa, {
                      id: pa.id,
                      title: pa.title || "",
                      count: 0,
                      type: void 0
                    })
                  }
                }), E.value = Array.from(At.values()), Xt && Array.isArray(Xt)) {
                const pa = new Map,
                  Oa = new Map;
                Xt.forEach(Fa => {
                  const gl = Fa.taskid || Fa.taskId;
                  if (gl) {
                    const jl = String(gl);
                    pa.set(jl, (pa.get(jl) || 0) + 1), Fa.type !== void 0 && Fa.type !== null && !Oa.has(jl) && Oa.set(jl, Fa.type)
                  }
                }), E.value = E.value.map(Fa => {
                  const gl = String(Fa.id),
                    jl = pa.get(gl) || 0,
                    en = Fa.count || 0,
                    fa = Oa.get(gl);
                  return {
                    ...Fa,
                    count: en > 0 ? en : jl > 0 ? jl : 1,
                    type: fa ?? Fa.type
                  }
                })
              }
              console.log("处理后的 apiTasks（累积）:", E.value)
            } else $e || b.value
          }
        } catch (ze) {
          console.error("加载作品列表失败:", ze), A.error((ze == null ? void 0 : ze.message) || "加载作品列表失败，请稍后重试")
        } finally {
          ae.value = !1, te.value = !1, qe()
        }
      }
    }, E = p([]), _ = Le(() => {
      const $e = new Map;
      return E.value.forEach(We => {
        if (!We || !We.id) return;
        const ze = String(We.id);
        $e.has(ze) || $e.set(ze, {
          id: We.id,
          title: We.title,
          count: We.count || 1,
          type: We.type
        })
      }), Array.from($e.values()).sort((We, ze) => typeof We.id == "number" && typeof ze.id == "number" ? ze.id - We.id : String(ze.id).localeCompare(String(We.id)))
    }), je = Le(() => O), K = Le(() => {
      if (console.log("filteredTasks 计算:", {
          taskTypeFilter: N.value,
          allTasksCount: _.value.length,
          allTasks: _.value
        }), N.value === "all") return _.value.slice(0, 10);
      {
        const $e = T[N.value];
        if ($e === void 0) return [];
        const We = _.value.filter(ze => typeof ze.type == "number" ? ze.type === $e : ze.type === R[$e] || ze.type === N.value).slice(0, 10);
        return console.log("筛选后的任务:", We), We
      }
    }), B = Le(() => K.value.slice(0, 5)), W = Le(() => Q.value && K.value.length > 5 ? K.value.slice(5, 10) : []), Te = $e => {
      $.value = $.value === $e ? null : $e, b.value = 1
    }, it = Le(() => me.value), yt = Le(() => me.value), st = Le(() => we.value > 0 ? me.value.length < we.value : me.value.length >= b.value * Qm), Ie = async () => {
      !st.value || te.value || ae.value || (te.value = !0, b.value += 1, await ct(!1))
    }, pe = () => {
      ct(!0)
    }, Be = () => {
      V.value = "", pe()
    }, xt = () => {
      re.value && re.value.length === 2 ? pe() : A.warning("请选择开始和结束日期")
    }, Yt = () => {
      re.value = [], C.value = "all"
    };
  let Ye = !1;
  oa(x, () => {
    Ye || (x.value === "time" ? ($.value = null, N.value = "all", re.value = [], Q.value = !1, V.value = "") : x.value === "task" ? (C.value = "all", re.value = [], V.value = "") : x.value === "keyword" && ($.value = null, Q.value = !1, N.value = "all", C.value = "all", re.value = []), ct(!0))
  });
  let va = !1;
  const Ea = $e => {
    console.log("任务类型筛选变化:", $e, "isSettingTaskFromUrl:", va), va || ($.value = null, Q.value = !1, ct(!0), va = !1)
  };
  oa(N, $e => {
    va || ($.value = null, Q.value = !1, ct(!0), va = !1)
  }), oa($, () => {
    x.value === "task" && rt(!0)
  }), oa([C, re], () => {
    x.value === "time" && (C.value !== "custom" || re.value && re.value.length === 2) && ct(!0)
  });
  const ft = () => {
    d.value = window.innerWidth <= 768
  };
  Ll(async () => {
    if (document.title = "火兔工具箱_我的图文作品", ft(), window.addEventListener("resize", ft), Nt(), Nt()) try {
      const $e = await zl();
      $e && (S.value = {
        ...$e,
        nickname: $e.nickname || $e.nickName || "用户",
        avatar: $e.avatar || $e.avatarUrl || ""
      })
    } catch ($e) {
      console.error("获取用户信息失败:", $e)
    }
    if (Nt() || (u.value = !0), console.log("Works页面加载，当前路由:", i.path, "查询参数:", i.query), console.log("初始筛选类型:", x.value), (i.query.filter === "task" || i.query.taskId) && (Ye = !0, console.log("切换到按类型筛选（来自URL参数）")), i.query.taskId || i.query.type) {
      const $e = i.query.taskId,
        We = i.query.type;
      if (console.log("检测到URL参数:", {
          taskId: $e,
          type: We
        }), va = !0, We && De(We), $e) {
        const ze = typeof $e == "number" || !isNaN(Number($e)) ? Number($e) : String($e);
        $.value = ze;
        const H = oa(E, Lt => {
          if (Lt.length === 0) return;
          const Ft = Lt.find(Rt => typeof Rt.id == "number" && !isNaN(Number($e)) ? Rt.id === Number($e) : String(Rt.id) === String($e));
          if (Ft) {
            if (console.log("从 API 找到任务记录:", {
                taskId: Ft.id,
                taskTitle: Ft.title,
                taskType: Ft.type
              }), !We) {
              let Rt = ne(Ft.type, Ft);
              if (!Rt) {
                console.warn("任务类型未定义，尝试从标题推断:", Ft.title);
                const Ot = String(Ft.title || "").toLowerCase();
                Ot.includes("批量") || Ot.includes("batch") ? Rt = "batch" : Ot.includes("复刻") || Ot.includes("copy") ? Rt = "copy" : Ot.includes("一句话") || Ot.includes("yijuhua") ? Rt = "yijuhua" : Rt = "single"
              }
              De(Rt, Ft), console.log("从任务记录推断并设置任务类型筛选为:", N.value)
            }
            H()
          } else console.warn("未在 API 返回的 history 中找到任务ID:", $e, "可用任务:", Lt.map(Rt => ({
            id: Rt.id,
            title: Rt.title
          }))), H()
        }, {
          immediate: !0
        });
        console.log("已设置 selectedTaskId，等待 API 加载任务信息:", ze)
      }
      setTimeout(() => {
        va = !1, Ye = !1
      }, 100)
    } else $.value = null, Ye = !1;
    await ct(!0), oa(() => i.query, ($e, We) => {
      We != null && We.taskId && !$e.taskId && ($.value = null, x.value = "time", N.value = "all"), (We == null ? void 0 : We.filter) === "task" && !$e.filter && !$e.taskId && (x.value = "time")
    }, {
      deep: !0
    })
  }), ki(() => {
    tt(), window.removeEventListener("resize", ft)
  });
  const Z = p(!1),
    pt = p([]),
    Et = p(!1),
    Mt = p([]),
    Qe = $e => pt.value.includes($e),
    j = $e => Mt.value.includes($e),
    Ee = $e => {
      Et.value ? jt($e) : Z.value && ht($e)
    },
    ht = $e => {
      if (!Z.value) return;
      const We = pt.value.indexOf($e);
      We > -1 ? pt.value.splice(We, 1) : pt.value.push($e)
    },
    jt = $e => {
      if (!Et.value) return;
      const We = Mt.value.indexOf($e);
      We > -1 ? Mt.value.splice(We, 1) : Mt.value.push($e)
    },
    ca = Le(() => Z.value && it.value.length > 0 && pt.value.length === it.value.length),
    be = Le(() => Et.value && it.value.length > 0 && Mt.value.length === it.value.length),
    he = () => {
      Z.value && (ca.value ? pt.value = [] : pt.value = it.value.map($e => $e.id))
    },
    kt = () => {
      Et.value && (be.value ? Mt.value = [] : Mt.value = it.value.map($e => $e.id))
    },
    Bt = () => {
      Z.value = !Z.value, Z.value || (pt.value = []), Z.value && Et.value && (Et.value = !1, Mt.value = [])
    },
    Ze = () => {
      Et.value = !Et.value, Et.value || (Mt.value = []), Et.value && Z.value && (Z.value = !1, pt.value = [])
    },
    Wt = async () => {
      if (Mt.value.length === 0) {
        A.warning("请先选择要下载的作品");
        return
      }
      const $e = Mt.value.length,
        We = [...Mt.value];
      try {
        await La.confirm(`确定要下载选中的 ${$e} 个作品吗？`, "下载确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "info"
        }), A.info("正在准备下载，请稍候...");
        const ze = me.value.filter(H => We.includes(H.id));
        for (let H = 0; H < ze.length; H++) {
          const Lt = ze[H];
          await aa(Lt, H + 1, ze.length)
        }
        Mt.value = [], Et.value = !1, A.success(`已成功下载 ${$e} 个作品`)
      } catch (ze) {
        if (ze === "cancel") return;
        console.error("下载作品失败:", ze), A.error((ze == null ? void 0 : ze.message) || "下载作品失败，请重试")
      }
    }, aa = async ($e, We, ze) => {
      try {
        const H = new Mr,
          Lt = $e.content || $e.desc || "";
        Lt && H.file("文案.txt", Lt);
        const Ft = Fe($e);
        if (Ft.length === 0) {
          A.warning(`作品"${$e.title}"没有图片，跳过下载`);
          return
        }
        const Rt = Ft.map(async (Dl, tn) => {
            try {
              const zt = await fetch(Dl, {
                method: "GET",
                mode: "cors",
                cache: "no-cache"
              });
              if (!zt.ok) throw new Error(`HTTP error! status: ${zt.status}`);
              const dl = await zt.blob(),
                Nl = tn === 0 ? "封面图1.jpg" : `内容图${tn}.jpg`;
              H.file(Nl, dl)
            } catch (zt) {
              console.error(`下载图片${tn}失败:`, zt);
              try {
                const dl = await new Promise((kn, Cn) => {
                    const ll = new XMLHttpRequest;
                    ll.open("GET", Dl, !0), ll.responseType = "blob", ll.onload = () => {
                      ll.status === 200 ? kn(ll.response) : Cn(new Error(`XMLHttpRequest failed with status: ${ll.status}`))
                    }, ll.onerror = () => Cn(new Error("XMLHttpRequest failed")), ll.send()
                  }),
                  Nl = tn === 0 ? "封面图1.jpg" : `内容图${tn}.jpg`;
                H.file(Nl, dl)
              } catch (dl) {
                throw console.error(`使用 XMLHttpRequest 下载图片${tn}也失败:`, dl), new Error(`下载图片${tn}失败: ${zt.message||zt}`)
              }
            }
          }),
          Ot = await Promise.allSettled(Rt),
          Xt = Ot.filter(Dl => Dl.status === "rejected");
        if (Xt.length > 0 && (console.warn(`作品"${$e.title}"有 ${Xt.length} 张图片下载失败:`, Xt), Xt.length === Ot.length)) throw new Error(`作品"${$e.title}"所有图片下载失败`);
        const At = await H.generateAsync({
            type: "blob"
          }),
          pa = document.createElement("a"),
          Oa = new Date,
          Fa = $e.createdAt ? new Date($e.createdAt) : Oa,
          gl = Number.isNaN(Fa.getTime()) ? Oa : Fa,
          jl = `${gl.getFullYear()}-${String(gl.getMonth()+1).padStart(2,"0")}-${String(gl.getDate()).padStart(2,"0")}`,
          en = (ba($e) || "作品").replace(/[<>:"/\\|?*\r\n\t]/g, "_").replace(/\s+/g, " ").trim().substring(0, 40),
          fa = String($e.id ?? "").replace(/[^\w-]/g, ""),
          Ka = [en, jl, fa].filter(Boolean).join("_") + ".zip";
        pa.href = URL.createObjectURL(At), pa.download = Ka, document.body.appendChild(pa), pa.click(), document.body.removeChild(pa), URL.revokeObjectURL(pa.href), ze > 1 && We < ze && await new Promise(Dl => setTimeout(Dl, 500))
      } catch (H) {
        console.error(`下载作品"${$e.title}"失败:`, H), A.error(`下载作品"${$e.title}"失败: ${H.message||H}`)
      }
    }, xa = async () => {
      if (pt.value.length === 0) {
        A.warning("请先选择要删除的作品");
        return
      }
      const $e = pt.value.length,
        We = [...pt.value];
      try {
        await La.confirm(`确定要删除选中的 ${$e} 个作品吗？此操作不可恢复！`, "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }), await If(We);
        const ze = me.value.filter(H => !We.includes(H.id));
        me.value = ze, pt.value = [], Z.value = !1, x.value === "task" ? await rt(!0) : await ct(!0), A.success(`已删除 ${$e} 个作品`)
      } catch (ze) {
        if (ze === "cancel") return;
        console.error("删除作品失败:", ze), A.error((ze == null ? void 0 : ze.message) || "删除作品失败，请重试")
      }
    }, Kt = () => {
      o.push("/user?tab=publish_record&subtab=pending")
    }, at = () => {
      o.push("/user?tab=my_live_code")
    }, Fe = $e => {
      if (!$e.images || !Array.isArray($e.images)) return $e.cover ? [$e.cover] : [];
      const We = $e.images.filter(ze => de(ze)).map(ze => String(ze));
      return We.length > 0 ? We : $e.cover ? [$e.cover] : []
    }, Ke = $e => $e.images && Array.isArray($e.images) ? $e.images.length : 0, et = ($e, We) => {
      ce.value[$e] = We
    }, Nt = () => {
      const $e = localStorage.getItem("authToken");
      return f.value = !!$e, !!$e
    }, Ut = () => {
      u.value = !0
    }, Ge = $e => {
      Nt(), f.value = !0, u.value = !1, A.success("登录成功"), d.value ? setTimeout(() => {
        window.location.reload()
      }, 500) : ct()
    }, dt = () => {
      if (!Nt()) {
        Ut();
        return
      }
      s.value = !0
    }, qt = $e => {
      const We = oi($e);
      We && (o.push(We), console.log("查看作品详情:", $e.id))
    }, ka = $e => {
      const We = oi($e);
      if (!We) return;
      const ze = We.startsWith("http") ? We : `${window.location.origin}${We.startsWith("/")?"":"/"}${We}`;
      window.open(ze, "_blank", "noopener,noreferrer"), console.log("新窗口打开作品详情:", $e.id)
    }, Ne = $e => {
      o.push(`/notediy/${$e.id}`), console.log("打开DIY创作模式:", $e.id)
    }, ga = $e => {
      try {
        if (d.value && Z.value) {
          ht($e.id);
          return
        }!d.value && (Z.value || Et.value) ? Et.value ? jt($e.id) : Z.value && ht($e.id) : ka($e)
      } catch (We) {
        console.error("点击作品卡片时出错:", We), A.error("操作失败，请稍后重试")
      }
    }, St = $e => {
      if (!$e || typeof $e != "string") return [];
      const We = [],
        ze = /#([^\s#\n\r]+)/g;
      let H;
      for (;
        (H = ze.exec($e)) !== null;) {
        const Lt = H[1].trim();
        Lt && !We.includes(Lt) && We.push(Lt)
      }
      return We
    }, Oe = $e => !$e || typeof $e != "string" ? $e : $e.replace(/#[^\s#\n\r]+/g, "").trim(), Ve = () => [{
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
    }], Ma = $e => {
      if (d.value) {
        const Ot = new URLSearchParams;
        $e.title && Ot.append("title", encodeURIComponent($e.title)), ($e.content || $e.desc) && Ot.append("content", encodeURIComponent($e.content || $e.desc));
        const Xt = Fe($e);
        Xt && Xt.length > 0 && Ot.append("images", encodeURIComponent(JSON.stringify(Xt)));
        const At = $e.content || $e.desc || "",
          pa = St(At);
        pa && pa.length > 0 && Ot.append("tags", encodeURIComponent(JSON.stringify(pa))), o.push(`/yulanm2?${Ot.toString()}`);
        return
      }
      const We = Fe($e),
        ze = $e.content || $e.desc || "",
        H = St(ze),
        Lt = Oe(ze) || $e.title || "";
      let Ft = {
        name: "用户",
        avatar: Xl
      };
      if (S.value && (S.value.nickname || S.value.avatar)) Ft = {
        name: S.value.nickname || S.value.nickName || "用户",
        avatar: S.value.avatar || S.value.avatarUrl || Xl
      };
      else {
        const Ot = localStorage.getItem("userInfo");
        if (Ot) try {
          const Xt = JSON.parse(Ot);
          Ft = {
            name: Xt.nickname || Xt.nickName || "用户",
            avatar: Xt.avatar || Xt.avatarUrl || Xl
          }
        } catch (Xt) {
          console.error("解析用户信息失败:", Xt)
        }
      }
      const Rt = We.length > 0 ? We : $e.cover ? [$e.cover] : [];
      w.value = {
        title: $e.title || "",
        content: Lt,
        tags: H,
        images: Rt,
        editTime: $e.createdAt ? new Date($e.createdAt).toLocaleDateString("zh-CN") : new Date().toLocaleDateString("zh-CN"),
        comments: Ve(),
        user: Ft
      }, console.log("预览数据:", w.value), y.value = !0
    }, Je = Le(() => {
      const $e = S.value;
      if ($e != null && $e.avatar || $e != null && $e.avatarUrl) return $e.avatar || $e.avatarUrl || Xl;
      try {
        const We = localStorage.getItem("userInfo");
        if (We) {
          const ze = JSON.parse(We);
          return ze.avatar || ze.avatarUrl || Xl
        }
      } catch {}
      return Xl
    }), ve = Le(() => {
      const $e = S.value;
      if ($e != null && $e.nickname || $e != null && $e.nickName) return $e.nickname || $e.nickName;
      try {
        const We = localStorage.getItem("userInfo");
        if (We) {
          const ze = JSON.parse(We);
          return ze.nickname || ze.nickName || "用户"
        }
      } catch {}
      return n.value || "用户"
    }), $t = Le(() => yp(i.query.invite, S.value) ? !1 : Q0(S.value)), ta = $e => {
      $e === "logout" ? ui() : $e === "profile" ? o.push("/user") : $e === "recharge" ? dt() : $e === "agent_center" ? o.push("/user?tab=distribution2") : $e === "my_live_code" && at()
    }, ha = $e => ({
      single: "一键生成笔记",
      batch: "批量生成笔记",
      copy: "AI复刻同款",
      template: "模板生成",
      yijuhua: "一句话笔记",
      "yijuhua-pro": "一句话笔记Pro",
      "yijuhua-max": "一句话笔记Max",
      "zhiding-pro": "指定文案创作Pro",
      "zhiding-max": "指定文案创作Max",
      "chanpin-pro": "产品图生图文Pro",
      "chanpin-max": "产品图生图文Max",
      "renshe-pro": "人设创作Pro",
      "renshe-max": "人设创作Max",
      "beiwanglu-pro": "备忘录Pro",
      "beiwanglu-max": "备忘录Max",
      "duogongge-pro": "多宫格Pro",
      "duogongge-max": "多宫格Max",
      "pengyouquan-pro": "朋友圈Pro",
      "pengyouquan-max": "朋友圈Max",
      "zhishikepu-pro": "知识科普Pro",
      "zhishikepu-max": "知识科普Max",
      "wanggandazi-pro": "网感大字Pro",
      "wanggandazi-max": "网感大字Max",
      "cepingduibilei-pro": "测评对比类Pro",
      "cepingduibilei-max": "测评对比类Max",
      custom: "自定义笔记",
      photo: "传图生成笔记",
      gongge: "多宫格图文",
      "ainotes-free": "超级图文自由创作",
      "ainotes-product": "超级图文产品种草",
      "ainotes-copy": "超级图文复刻同款",
      ziyoutuwen: "自由设计单图文"
    })[$e] || $e, Qt = ($e, We = 10) => $e ? $e.length <= We ? $e : $e.substring(0, We) + "..." : "", ba = $e => String(($e == null ? void 0 : $e.remark) || "").trim() || ($e == null ? void 0 : $e.title) || "未命名作品", Ja = async $e => {
      if (!(!$e || $e.id == null)) try {
        const {
          value: We
        } = await La.prompt("备注会显示在标题位置，方便快速识别（留空则显示原标题）", "编辑备注", {
          confirmButtonText: "保存",
          cancelButtonText: "取消",
          inputType: "textarea",
          inputValue: $e.remark || "",
          inputValidator: H => H == null || Array.from(String(H)).length <= 100 ? !0 : "备注最多 100 个字"
        }), ze = String(We || "").trim();
        await Gh("record", $e.id, ze), $e.remark = ze, A.success(ze ? "备注已保存" : "已清空备注")
      } catch (We) {
        if (We === "cancel" || We === "close") return;
        A.error((We == null ? void 0 : We.message) || "保存备注失败")
      }
    }, ml = $e => {
      if (!$e) return "";
      try {
        const We = new Date($e);
        if (Number.isNaN(We.getTime())) return "";
        const ze = H => String(H).padStart(2, "0");
        return `${We.getFullYear()}-${ze(We.getMonth()+1)}-${ze(We.getDate())} ${ze(We.getHours())}:${ze(We.getMinutes())}`
      } catch {
        return ""
      }
    };
  return ($e, We) => {
    const ze = Fn("router-link"),
      H = xl,
      Lt = nc,
      Ft = $l,
      Rt = Or,
      Ot = Br,
      Xt = Nr,
      At = jr,
      pa = Kn,
      Oa = Qg,
      Fa = cn,
      gl = Si,
      jl = Ei,
      en = ho;
    return c(), v("div", dne, [a(ei, {
      title: "",
      "is-logged-in": f.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: We[0] || (We[0] = fa => Sa.value = !0),
      onLoginClick: Ut
    }, {
      center: l(() => [e("div", vne, [a(ze, {
        to: {
          name: "Works"
        },
        class: Pe(["works-portfolio-switch__segment", {
          "works-portfolio-switch__segment--active": P(i).name === "Works"
        }])
      }, {
        default: l(() => [...We[12] || (We[12] = [g(" 图文作品 ", -1)])]),
        _: 1
      }, 8, ["class"]), a(ze, {
        to: {
          name: "Mypic"
        },
        class: Pe(["works-portfolio-switch__segment", {
          "works-portfolio-switch__segment--active": P(i).name === "Mypic"
        }])
      }, {
        default: l(() => [...We[13] || (We[13] = [g(" 图片作品 ", -1)])]),
        _: 1
      }, 8, ["class"]), a(ze, {
        to: {
          name: "Myvideo"
        },
        class: Pe(["works-portfolio-switch__segment", {
          "works-portfolio-switch__segment--active": P(i).name === "Myvideo"
        }])
      }, {
        default: l(() => [...We[14] || (We[14] = [g(" 视频作品 ", -1)])]),
        _: 1
      }, 8, ["class"]), a(ze, {
        to: {
          name: "MyEdits"
        },
        class: Pe(["works-portfolio-switch__segment", {
          "works-portfolio-switch__segment--active": P(i).name === "MyEdits"
        }])
      }, {
        default: l(() => [...We[15] || (We[15] = [g(" 改图 ", -1)])]),
        _: 1
      }, 8, ["class"])])]),
      right: l(() => [a(H, {
        type: "primary",
        size: "small",
        onClick: Kt
      }, {
        default: l(() => [...We[16] || (We[16] = [g(" 发布记录 ", -1)])]),
        _: 1
      }), f.value ? (c(), ye(Xt, {
        key: 0,
        trigger: "click",
        onCommand: ta
      }, {
        dropdown: l(() => [a(Ot, null, {
          default: l(() => [a(Rt, {
            disabled: "",
            class: "user-info-item"
          }, {
            default: l(() => [e("div", gne, [a(Lt, {
              size: 32,
              src: Je.value
            }, null, 8, ["src"]), e("span", fne, h(ve.value), 1)])]),
            _: 1
          }), a(Rt, {
            command: "profile"
          }, {
            default: l(() => [...We[17] || (We[17] = [g("个人中心", -1)])]),
            _: 1
          }), a(Rt, {
            command: "my_live_code"
          }, {
            default: l(() => [...We[18] || (We[18] = [g("我的活码", -1)])]),
            _: 1
          }), a(Rt, {
            command: "recharge"
          }, {
            default: l(() => [...We[19] || (We[19] = [g("充值中心", -1)])]),
            _: 1
          }), $t.value ? (c(), ye(Rt, {
            key: 0,
            command: "agent_center"
          }, {
            default: l(() => [...We[20] || (We[20] = [g("代理中心", -1)])]),
            _: 1
          })) : M("", !0), a(Rt, {
            command: "logout",
            divided: ""
          }, {
            default: l(() => [...We[21] || (We[21] = [g("退出登录", -1)])]),
            _: 1
          })]),
          _: 1
        })]),
        default: l(() => [e("div", mne, [a(Lt, {
          size: 25,
          src: Je.value
        }, null, 8, ["src"]), a(Ft, {
          class: "mobile-dropdown-icon"
        }, {
          default: l(() => [a(P(jn))]),
          _: 1
        })])]),
        _: 1
      })) : (c(), ye(H, {
        key: 1,
        type: "primary",
        size: "small",
        onClick: Ut
      }, {
        default: l(() => [...We[22] || (We[22] = [g(" 登录/注册 ", -1)])]),
        _: 1
      }))]),
      _: 1
    }, 8, ["is-logged-in", "show-mobile-menu"]), d.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: We[1] || (We[1] = fa => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": d.value
      }])
    }, [d.value ? M("", !0) : (c(), v("div", pne, [e("div", yne, [e("div", hne, [a(ze, {
      to: {
        name: "Works"
      },
      class: Pe(["works-portfolio-switch__segment", {
        "works-portfolio-switch__segment--active": P(i).name === "Works"
      }])
    }, {
      default: l(() => [...We[23] || (We[23] = [g(" 我的图文作品 ", -1)])]),
      _: 1
    }, 8, ["class"]), a(ze, {
      to: {
        name: "Mypic"
      },
      class: Pe(["works-portfolio-switch__segment", {
        "works-portfolio-switch__segment--active": P(i).name === "Mypic"
      }])
    }, {
      default: l(() => [...We[24] || (We[24] = [g(" 我的图片作品 ", -1)])]),
      _: 1
    }, 8, ["class"]), a(ze, {
      to: {
        name: "Myvideo"
      },
      class: Pe(["works-portfolio-switch__segment", {
        "works-portfolio-switch__segment--active": P(i).name === "Myvideo"
      }])
    }, {
      default: l(() => [...We[25] || (We[25] = [g(" 我的视频作品 ", -1)])]),
      _: 1
    }, 8, ["class"]), a(ze, {
      to: {
        name: "MyEdits"
      },
      class: Pe(["works-portfolio-switch__segment", {
        "works-portfolio-switch__segment--active": P(i).name === "MyEdits"
      }])
    }, {
      default: l(() => [...We[26] || (We[26] = [g(" 改图记录 ", -1)])]),
      _: 1
    }, 8, ["class"])])]), e("div", bne, [Z.value ? M("", !0) : (c(), ye(H, {
      key: 0,
      type: "default",
      size: "small",
      class: "download-delete-btn",
      onClick: Ze
    }, {
      default: l(() => [a(Ft, null, {
        default: l(() => [a(P(To))]),
        _: 1
      }), g(" " + h(Et.value ? "取消下载" : "我要下载"), 1)]),
      _: 1
    })), Et.value ? M("", !0) : (c(), ye(H, {
      key: 1,
      type: "default",
      size: "small",
      class: "download-delete-btn",
      onClick: Bt
    }, {
      default: l(() => [a(Ft, null, {
        default: l(() => [a(P(zn))]),
        _: 1
      }), g(" " + h(Z.value ? "取消删除" : "我要删除"), 1)]),
      _: 1
    })), !Et.value && !Z.value ? (c(), ye(H, {
      key: 2,
      type: "primary",
      size: "small",
      onClick: Kt
    }, {
      default: l(() => [...We[27] || (We[27] = [g(" 发布记录 ", -1)])]),
      _: 1
    })) : M("", !0), !Et.value && !Z.value ? (c(), ye(H, {
      key: 3,
      type: "success",
      size: "small",
      onClick: at
    }, {
      default: l(() => [...We[28] || (We[28] = [g(" 我的活码 ", -1)])]),
      _: 1
    })) : M("", !0), Et.value ? (c(), v(Ue, {
      key: 4
    }, [a(H, {
      size: "small",
      onClick: kt
    }, {
      default: l(() => [g(h(be.value ? "取消选中" : "选择全部"), 1)]),
      _: 1
    }), a(H, {
      type: "primary",
      size: "small",
      disabled: Mt.value.length === 0,
      onClick: Wt
    }, {
      default: l(() => [g(" 批量下载（" + h(Mt.value.length) + "） ", 1)]),
      _: 1
    }, 8, ["disabled"])], 64)) : M("", !0), Z.value ? (c(), v(Ue, {
      key: 5
    }, [a(H, {
      size: "small",
      onClick: he
    }, {
      default: l(() => [g(h(ca.value ? "取消选中" : "选择全部"), 1)]),
      _: 1
    }), a(H, {
      type: "danger",
      size: "small",
      disabled: pt.value.length === 0,
      onClick: xa
    }, {
      default: l(() => [g(" 批量删除（" + h(pt.value.length) + "） ", 1)]),
      _: 1
    }, 8, ["disabled"])], 64)) : M("", !0)])])), d.value && Z.value ? (c(), v("div", wne, [a(H, {
      size: "small",
      onClick: he
    }, {
      default: l(() => [g(h(ca.value ? "取消选中" : "选择全部"), 1)]),
      _: 1
    }), a(H, {
      type: "danger",
      size: "small",
      disabled: pt.value.length === 0,
      onClick: xa
    }, {
      default: l(() => [g(" 批量删除（" + h(pt.value.length) + "） ", 1)]),
      _: 1
    }, 8, ["disabled"])])) : M("", !0), e("div", _ne, [e("div", {
      class: Pe(["filter-type-tabs", {
        "filter-type-tabs--mobile-with-actions": d.value
      }])
    }, [a(pa, {
      modelValue: x.value,
      "onUpdate:modelValue": We[2] || (We[2] = fa => x.value = fa),
      size: "small",
      class: "filter-type-group"
    }, {
      default: l(() => [a(At, {
        value: "time"
      }, {
        default: l(() => [...We[29] || (We[29] = [g("按时间", -1)])]),
        _: 1
      }), a(At, {
        value: "task"
      }, {
        default: l(() => [...We[30] || (We[30] = [g("按类型", -1)])]),
        _: 1
      }), a(At, {
        value: "keyword"
      }, {
        default: l(() => [...We[31] || (We[31] = [g("按关键词", -1)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), d.value && !Et.value ? (c(), ye(H, {
      key: 0,
      type: "default",
      size: "small",
      class: "filter-type-delete-btn download-delete-btn",
      onClick: Bt
    }, {
      default: l(() => [a(Ft, null, {
        default: l(() => [a(P(zn))]),
        _: 1
      }), g(" " + h(Z.value ? "取消删除" : "我要删除"), 1)]),
      _: 1
    })) : M("", !0)], 2), x.value === "time" ? (c(), v("div", kne, [e("div", Cne, [a(pa, {
      modelValue: C.value,
      "onUpdate:modelValue": We[3] || (We[3] = fa => C.value = fa),
      size: "small",
      class: "time-radio-group"
    }, {
      default: l(() => [a(At, {
        value: "all"
      }, {
        default: l(() => [...We[32] || (We[32] = [g("全部时间", -1)])]),
        _: 1
      }), a(At, {
        value: "today"
      }, {
        default: l(() => [...We[33] || (We[33] = [g("今天", -1)])]),
        _: 1
      }), a(At, {
        value: "yesterday"
      }, {
        default: l(() => [...We[34] || (We[34] = [g("昨天", -1)])]),
        _: 1
      }), a(At, {
        value: "7d"
      }, {
        default: l(() => [...We[35] || (We[35] = [g("最近一周", -1)])]),
        _: 1
      }), a(At, {
        value: "30d"
      }, {
        default: l(() => [...We[36] || (We[36] = [g("最近一个月", -1)])]),
        _: 1
      }), a(At, {
        value: "custom"
      }, {
        default: l(() => [...We[37] || (We[37] = [g("按时间筛选", -1)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), C.value === "custom" ? (c(), v("div", Ane, [a(Oa, {
      modelValue: re.value,
      "onUpdate:modelValue": We[4] || (We[4] = fa => re.value = fa),
      type: "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      size: "small",
      class: "date-range-picker"
    }, null, 8, ["modelValue"]), a(H, {
      type: "primary",
      size: "small",
      onClick: xt
    }, {
      default: l(() => [...We[38] || (We[38] = [g("确定", -1)])]),
      _: 1
    }), a(H, {
      size: "small",
      onClick: Yt
    }, {
      default: l(() => [...We[39] || (We[39] = [g("取消", -1)])]),
      _: 1
    })])) : M("", !0)])])) : M("", !0), x.value === "task" ? (c(), v("div", Ine, [e("div", xne, [a(pa, {
      modelValue: N.value,
      "onUpdate:modelValue": We[5] || (We[5] = fa => N.value = fa),
      size: "small",
      onChange: Ea
    }, {
      default: l(() => [a(At, {
        value: "all"
      }, {
        default: l(() => [...We[40] || (We[40] = [g("全部类型", -1)])]),
        _: 1
      }), (c(!0), v(Ue, null, gt(je.value, fa => (c(), ye(At, {
        key: fa.key,
        value: fa.key
      }, {
        default: l(() => [g(h(fa.label), 1)]),
        _: 2
      }, 1032, ["value"]))), 128))]),
      _: 1
    }, 8, ["modelValue"])]), N.value !== "all" && K.value.length > 0 ? (c(), v("div", Sne, [e("div", Ene, [e("div", Tne, [(c(!0), v(Ue, null, gt(B.value, (fa, Ka) => (c(), ye(H, {
      key: fa.id,
      type: $.value === fa.id ? "primary" : "default",
      size: "small",
      class: "task-button",
      onClick: Dl => Te(fa.id)
    }, {
      default: l(() => [g(h(Qt(fa.title, 10)) + "（" + h(fa.count) + "） ", 1)]),
      _: 2
    }, 1032, ["type", "onClick"]))), 128)), K.value.length > 5 && !Q.value ? (c(), ye(H, {
      key: 0,
      size: "small",
      class: "task-button task-more-inline",
      onClick: We[6] || (We[6] = fa => Q.value = !0)
    }, {
      default: l(() => [...We[41] || (We[41] = [g(" 查看更多 ", -1)])]),
      _: 1
    })) : M("", !0)])]), Q.value && W.value.length > 0 ? (c(), v("div", $ne, [(c(!0), v(Ue, null, gt(W.value, (fa, Ka) => (c(), ye(H, {
      key: fa.id,
      type: $.value === fa.id ? "primary" : "default",
      size: "small",
      class: "task-button",
      onClick: Dl => Te(fa.id)
    }, {
      default: l(() => [g(h(Qt(fa.title, 10)) + "（" + h(fa.count) + "） ", 1)]),
      _: 2
    }, 1032, ["type", "onClick"]))), 128)), K.value.length > 5 ? (c(), ye(H, {
      key: 0,
      size: "small",
      class: "task-button task-more-inline",
      onClick: We[7] || (We[7] = fa => Q.value = !1)
    }, {
      default: l(() => [...We[42] || (We[42] = [g(" 收起 ", -1)])]),
      _: 1
    })) : M("", !0)])) : M("", !0)])) : M("", !0)])) : M("", !0), x.value === "keyword" ? (c(), v("div", Pne, [e("div", Vne, [a(Fa, {
      modelValue: V.value,
      "onUpdate:modelValue": We[8] || (We[8] = fa => V.value = fa),
      placeholder: "请输入作品标题关键词（2-20 个字符）",
      size: "small",
      class: "search-input",
      onKeyup: gn(pe, ["enter"])
    }, {
      append: l(() => [a(H, {
        type: "primary",
        size: "small",
        class: "search-btn",
        onClick: pe
      }, {
        default: l(() => [...We[43] || (We[43] = [g("搜索", -1)])]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), V.value ? (c(), ye(H, {
      key: 0,
      class: "reset-btn",
      size: "small",
      type: "default",
      onClick: Be
    }, {
      default: l(() => [...We[44] || (We[44] = [g(" 清空 ", -1)])]),
      _: 1
    })) : M("", !0)])])) : M("", !0)]), e("div", zne, [yt.value.length === 0 && !ae.value ? (c(), v("div", Lne, [e("div", Dne, [e("div", Mne, h(x.value === "keyword" && V.value ? "未找到匹配的作品" : "暂无作品"), 1), x.value === "keyword" && V.value ? (c(), v("div", One, " 请尝试其他关键词或清空搜索条件 ")) : M("", !0)])])) : M("", !0), (c(!0), v(Ue, null, gt(yt.value, fa => (c(), v("div", {
      key: fa.id,
      class: Pe(["work-card", {
        selected: !d.value && (Qe(fa.id) || j(fa.id)) || d.value && Z.value && Qe(fa.id)
      }]),
      onClick: lt(Ka => ga(fa), ["stop"])
    }, [e("div", Nne, [e("div", {
      class: "work-images-container",
      onClick: lt(Ka => ga(fa), ["stop"]),
      onDblclick: lt(Ka => Et.value || Z.value ? null : qt(fa), ["stop"])
    }, [xe(fa) ? (c(), v("div", Rne, [...We[45] || (We[45] = [e("span", {
      class: "cover-placeholder-icon"
    }, "⏳", -1), e("span", {
      class: "cover-placeholder-text"
    }, "文案创作中", -1)])])) : fa.images && fa.images.length > 0 ? (c(), ye(jl, {
      key: 1,
      height: "100%",
      autoplay: !1,
      interval: 0,
      "indicator-position": "none",
      "initial-index": 0,
      onChange: Ka => et(fa.id, Ka),
      class: "work-carousel"
    }, {
      default: l(() => [(c(!0), v(Ue, null, gt(fa.images || [], (Ka, Dl) => (c(), ye(gl, {
        key: Dl
      }, {
        default: l(() => [ue(Ka) ? (c(), v("div", jne, [...We[46] || (We[46] = [e("span", {
          class: "cover-placeholder-icon"
        }, "⏳", -1), e("span", {
          class: "cover-placeholder-text"
        }, "图片设计生成中", -1)])])) : U(Ka) ? (c(), v("div", qne, [...We[47] || (We[47] = [e("span", {
          class: "cover-placeholder-text"
        }, "生成失败", -1)])])) : (c(), v("img", {
          key: 2,
          src: _e(Ka),
          class: "cover-img"
        }, null, 8, Fne))]),
        _: 2
      }, 1024))), 128))]),
      _: 2
    }, 1032, ["onChange"])) : M("", !0)], 40, Une), !d.value && !Et.value && !Z.value ? (c(), v("div", Wne, [e("button", {
      type: "button",
      class: "enter-view-btn",
      onClick: lt(Ka => ka(fa), ["stop"])
    }, "进入查看", 8, Gne), fa.type !== 6 ? (c(), ye(H, {
      key: 0,
      type: "primary",
      size: "small",
      class: "diy-btn",
      onClick: lt(Ka => Ne(fa), ["stop"])
    }, {
      default: l(() => [...We[48] || (We[48] = [g(" DIY创作模式 ", -1)])]),
      _: 1
    }, 8, ["onClick"])) : M("", !0)])) : M("", !0), !d.value && !Et.value && !Z.value ? (c(), v("div", {
      key: 1,
      class: "preview-btn-wrapper",
      onClick: lt(Ka => Ma(fa), ["stop"])
    }, [a(H, {
      size: "small",
      type: "primary",
      circle: "",
      class: "preview-btn",
      title: "预览作品",
      onClick: lt(Ka => Ma(fa), ["stop"])
    }, {
      default: l(() => [a(Ft, null, {
        default: l(() => [a(P(Do))]),
        _: 1
      })]),
      _: 1
    }, 8, ["onClick"])], 8, Jne)) : M("", !0), !d.value || d.value && Z.value ? (c(), v("div", {
      key: 2,
      class: Pe(["checkbox-wrapper", {
        visible: Z.value || Et.value || Qe(fa.id) || j(fa.id)
      }]),
      onClick: lt(Ka => Ee(fa.id), ["stop"])
    }, [a(en, {
      "model-value": Qe(fa.id) || j(fa.id),
      onClick: lt(Ka => Ee(fa.id), ["stop"])
    }, null, 8, ["model-value", "onClick"])], 10, Hne)) : M("", !0), fa.source && ha(fa.source) ? (c(), v("div", {
      key: 3,
      class: Pe(["source-badge", `source-${fa.source}`])
    }, h(ha(fa.source)), 3)) : M("", !0), Ke(fa) > 0 ? (c(), v("div", Qne, " (" + h((ce.value[fa.id] || 0) + 1) + "/" + h(Ke(fa)) + ") ", 1)) : M("", !0)]), e("div", Kne, [e("div", {
      class: Pe(["work-title", {
        "work-title-generating": xe(fa)
      }]),
      title: xe(fa) ? "文案创作中..." : ba(fa),
      onClick: lt(Ka => ga(fa), ["stop"])
    }, h(xe(fa) ? "文案创作中..." : ba(fa)), 11, Yne), xe(fa) ? M("", !0) : (c(), ye(Ft, {
      key: 0,
      class: "remark-edit-icon",
      title: "编辑备注",
      onClick: lt(Ka => Ja(fa), ["stop"])
    }, {
      default: l(() => [a(P(hr))]),
      _: 1
    }, 8, ["onClick"]))]), fa.createdAt ? (c(), v("div", Xne, h(ml(fa.createdAt)), 1)) : M("", !0)], 10, Bne))), 128))]), st.value ? (c(), v("div", Zne, [a(H, {
      class: "load-more-btn",
      onClick: Ie,
      loading: te.value
    }, {
      default: l(() => [...We[49] || (We[49] = [g("加载更多", -1)])]),
      _: 1
    }, 8, ["loading"])])) : M("", !0)], 2), a(Hr, {
      modelValue: y.value,
      "onUpdate:modelValue": We[9] || (We[9] = fa => y.value = fa),
      "is-mobile": d.value,
      data: w.value,
      title: "作品预览"
    }, {
      header: l(() => [...We[50] || (We[50] = [e("span", null, "作品预览", -1)])]),
      _: 1
    }, 8, ["modelValue", "is-mobile", "data"]), a(Wn, {
      modelValue: s.value,
      "onUpdate:modelValue": We[10] || (We[10] = fa => s.value = fa)
    }, null, 8, ["modelValue"]), a(no, {
      modelValue: u.value,
      "onUpdate:modelValue": We[11] || (We[11] = fa => u.value = fa),
      onLoginSuccess: Ge
    }, null, 8, ["modelValue"])])
  }
}
}, aoe = al(toe, [
  ["__scopeId", "data-v-8bb54c32"]
]);
const loe = {
    class: "page-root"
  },
  noe = {
    key: 0,
    class: "top-nav-bar"
  },
  ooe = {
    class: "page-title"
  },
  ioe = {
    class: "top-nav-right"
  },
  soe = {
    key: 1,
    class: "page-title"
  },
  roe = {
    class: "filter-bar"
  },
  uoe = {
    key: 2,
    class: "mobile-actions"
  },
  coe = {
    class: "yy-ebook-cover"
  },
  doe = {
    class: "yy-ebook-cover-inner"
  },
  voe = {
    class: "yy-ebook-body"
  },
  moe = {
    class: "yy-ebook-badges"
  },
  goe = {
    class: "yy-ebook-title"
  },
  foe = {
    class: "yy-ebook-subtitle"
  },
  poe = {
    class: "yy-ebook-progress"
  },
  yoe = {
    class: "yy-ebook-progress-bar"
  },
  hoe = {
    class: "yy-ebook-progress-label"
  },
  boe = {
    class: "yy-ebook-cta"
  },
  woe = {
    key: 4,
    class: "yy-grid"
  },
  _oe = ["onClick"],
  koe = {
    class: "yy-card-name"
  },
  Coe = {
    class: "yy-card-desc"
  },
  Aoe = {
    class: "yy-card-tags"
  },
  Ioe = {
    class: "yy-card-cta"
  },
  xoe = {
    key: 0,
    class: "empty-tools"
  },
  Soe = {
    class: "tools-grid"
  },
  Eoe = {
    key: 0,
    class: "empty-tools"
  },
  Toe = {
    class: "empty-tools-content"
  },
  $oe = {
    class: "empty-tools-text"
  },
  Poe = {
    key: 0,
    class: "empty-tools-hint"
  },
  Voe = ["onClick", "data-category"],
  zoe = {
    class: "cover-1-1"
  },
  Loe = ["src"],
  Doe = ["title"],
  Moe = {
    class: "tool-desc"
  },
  Ooe = {
    key: 0,
    class: "load-more"
  },
  Boe = {
    key: 0,
    class: "yy-dlg-body"
  },
  Noe = {
    class: "yy-dlg-meta"
  },
  Uoe = {
    class: "yy-dlg-desc"
  },
  Roe = {
    class: "yy-dlg-field"
  },
  joe = {
    key: 0,
    class: "yy-dlg-field"
  },
  qoe = {
    class: "yy-dlg-tip"
  },
  Foe = {
    class: "yy-ebook-dlg-head"
  },
  Woe = {
    class: "yy-ebook-dlg-cover-mini"
  },
  Goe = {
    class: "yy-ebook-dlg-titles"
  },
  Joe = {
    class: "yy-ebook-dlg-title"
  },
  Hoe = {
    class: "yy-ebook-dlg-subtitle"
  },
  Qoe = {
    class: "yy-ebook-dlg-body"
  },
  Koe = {
    class: "yy-ebook-dlg-intro"
  },
  Yoe = {
    class: "yy-ebook-toc"
  },
  Xoe = ["onClick"],
  Zoe = {
    class: "yy-ebook-toc-num"
  },
  eie = {
    key: 1
  },
  tie = {
    class: "yy-ebook-toc-main"
  },
  aie = {
    class: "yy-ebook-toc-title"
  },
  lie = {
    class: "yy-ebook-toc-desc"
  },
  nie = {
    class: "yy-ebook-toc-go"
  },
  oie = {
    class: "yy-ebook-dlg-tip"
  },
  iie = {
    class: "contact-inputs-container"
  },
  sie = {
    class: "contact-input-row"
  },
  rie = {
    class: "contact-label"
  },
  uie = {
    class: "contact-input-row"
  },
  cie = {
    class: "contact-label"
  },
  die = {
    class: "contact-input-row"
  },
  vie = {
    class: "contact-label"
  },
  Is = 10,
  mie = {
    __name: "Tools",
    setup(t) {
      const o = ln(),
        i = fn(),
        n = p(!1),
        s = p(window.innerWidth <= 768),
        u = p(!1),
        d = p(!!localStorage.getItem("authToken")),
        f = p({}),
        y = p(!1),
        w = p(!1),
        S = p(null),
        z = p({
          description: "",
          contactName: "",
          wechat: "",
          email: ""
        }),
        x = {
          description: [{
            required: !0,
            message: "请输入需求描述",
            trigger: "blur"
          }, {
            min: 10,
            message: "需求描述至少需要10个字符",
            trigger: "blur"
          }],
          contactName: [],
          wechat: [{
            validator: (ft, Z, pt) => {
              const Et = (Z || "").trim();
              Et && Et.length < 2 ? pt(new Error("微信号至少需要2个字符")) : pt()
            },
            trigger: "blur"
          }],
          email: [{
            validator: (ft, Z, pt) => {
              const Et = (Z || "").trim();
              Et && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Et) ? pt(new Error("请输入有效的邮箱地址")) : pt()
            },
            trigger: "blur"
          }]
        },
        C = Le(() => {
          const ft = i.path;
          return ft.startsWith("/yunying") ? "yunying" : ft.startsWith("/sucai") ? "sucai" : "tools"
        }),
        V = p(15),
        $ = () => {
          const ft = {
            tools: 15,
            yunying: 16,
            sucai: 17
          };
          V.value = ft[C.value] || 15
        },
        N = Le(() => ({
          tools: "超级工具箱",
          yunying: "运营资料包",
          sucai: "素材资料包"
        })[C.value] || "超级工具箱"),
        T = Le(() => ({
          tools: "搜索工具关键词",
          yunying: "搜索资料关键词",
          sucai: "搜索素材关键词"
        })[C.value] || "搜索关键词"),
        R = p("all"),
        O = p(""),
        J = p(1),
        ee = p(!1),
        ie = p([]),
        Ae = p([]),
        F = p([]),
        Y = async () => {
          try {
            const ft = await zf();
            ie.value = ft.map(Z => ({
              value: Z.id,
              label: Z.name
            }))
          } catch (ft) {
            console.error("加载工具分类失败:", ft), A.error("加载工具分类失败，请稍后重试"), ie.value = []
          }
        }, ne = async () => {
          try {
            const ft = await Mf();
            Ae.value = ft.map(Z => ({
              value: Z.id,
              label: Z.name
            }))
          } catch (ft) {
            console.error("加载运营资料包分类失败:", ft), A.error("加载运营资料包分类失败，请稍后重试"), Ae.value = []
          }
        }, De = async () => {
          try {
            const ft = await Nf();
            F.value = ft.map(Z => ({
              value: Z.id,
              label: Z.name
            }))
          } catch (ft) {
            console.error("加载素材资料包分类失败:", ft), A.error("加载素材资料包分类失败，请稍后重试"), F.value = []
          }
        }, Q = Le(() => C.value === "tools" ? [{
          value: "all",
          label: "全部"
        }, ...ie.value] : C.value === "yunying" ? [{
          value: "all",
          label: "全部"
        }, ...Ae.value] : C.value === "sucai" ? [{
          value: "all",
          label: "全部"
        }, ...F.value] : []), re = Le(() => C.value === "tools" ? b.value : C.value === "yunying" ? rt.value : je.value), b = p([]), te = p(!1), we = p({
          current: 1,
          total: 0,
          total_page: 1,
          page_size: 10
        }), ae = async (ft = 1, Z = !1) => {
          if (!te.value) {
            te.value = !0;
            try {
              const pt = {
                page: ft,
                size: Is
              };
              if (R.value !== "all" && C.value === "tools") {
                const Mt = R.value;
                Mt && Mt !== "all" && (pt.type_id = Mt)
              }
              O.value && O.value.trim() && (pt.title = O.value.trim());
              const Et = await Lf(pt);
              if (Et && Et.rows && Array.isArray(Et.rows)) {
                const Mt = Et.rows.map(Qe => {
                  let j = [];
                  if (Qe.images) try {
                    j = typeof Qe.images == "string" ? JSON.parse(Qe.images) : Qe.images
                  } catch (Ee) {
                    console.warn("解析 images 失败:", Ee), j = []
                  }
                  return {
                    id: Qe.id,
                    category: Qe.type_id || 0,
                    cover: j && j.length > 0 ? j[0] : "",
                    title: Qe.title || "",
                    desc: Qe.desc || "",
                    images: j,
                    intro: Qe.intro || "",
                    feature: Qe.feature || "",
                    worth: Qe.worth || "",
                    details: Qe.details || "",
                    explain: Qe.explain || "",
                    problem: Qe.problem || "",
                    down_url: Qe.down_url || "",
                    status: Qe.status || 0
                  }
                });
                Z && ft > 1 ? b.value = [...b.value, ...Mt] : b.value = Mt, Et.pages && (we.value = {
                  current: Et.pages.current || ft,
                  total: Et.pages.total || 0,
                  total_page: Et.pages.total_page || 1,
                  page_size: Et.pages.page_size || Is
                })
              } else Z || (b.value = [])
            } catch (pt) {
              console.error("加载工具列表失败:", pt), A.error("加载工具列表失败，请稍后重试"), Z || (b.value = [])
            } finally {
              te.value = !1
            }
          }
        }, me = p({
          id: "yy-ebook-content",
          title: "内容运营手册 · 全流程",
          subtitle: "从 0 到 1 系统化学习内容运营，7 大模块覆盖账号定位、内容结构分析、内容打造、封面标题、文案人设、数据复盘与避坑指南。",
          tags: ["0 基础友好", "全流程 SOP", "7 大模块"],
          chapters: [{
            idx: 1,
            title: "内容 0-1 账号定位与包装全流程学习手册",
            desc: "系统搭建账号基础：行业定位、头像昵称、简介关键词、人设包装。",
            link: "https://my.feishu.cn/wiki/JXgywKsE4i9Jagks5B3cGBIAngb?from=from_copylink"
          }, {
            idx: 2,
            title: "对标账号筛选与内容结构分析方法学习手册",
            desc: "找到对的同行：对标筛选标准、内容结构分析模板、差异化突破。",
            link: "https://my.feishu.cn/wiki/DemcwPYXyiz7tykSXfUcEyaCndh?from=from_copylink"
          }, {
            idx: 3,
            title: "优质内容打造全流程学习手册（选题 + 规划 + 稀缺性）",
            desc: "三大核心：选题挖掘、内容规划、稀缺性打造，让图文更易爆。",
            link: "https://my.feishu.cn/wiki/HJCQwzws3irNZ9kfU83cpkrjnlb?from=from_copylink"
          }, {
            idx: 4,
            title: "封面 + 标题高点击率创作手册",
            desc: "点击率是命门：封面设计公式、标题模板、高转化文字排版。",
            link: "https://my.feishu.cn/wiki/ZCcswhcoaisyupkNnK6cABybngd?from=from_copylink"
          }, {
            idx: 5,
            title: "文案写作与人设打造指南",
            desc: "文字功夫：钩子开头、结构化正文、情感共鸣、鲜活人设。",
            link: "https://my.feishu.cn/wiki/SXGqwTZggiC8MFkobzycIja1nW8?from=from_copylink"
          }, {
            idx: 6,
            title: "账号维护与数据复盘全流程 SOP",
            desc: "日常精细化：账号维护节奏、发布时间、数据指标与复盘动作。",
            link: "https://my.feishu.cn/wiki/PKsXw3WXViqG3pkT1P2cFIe3nlh?from=from_copylink"
          }, {
            idx: 7,
            title: "新手常见问题与避坑指南",
            desc: "少走弯路：写作问题识别、表达优化、冷启动常见误区整理。",
            link: "https://my.feishu.cn/wiki/Pj8IwibQ7iiOPukNc0zcCuvynAe?from=from_copylink"
          }]
        }), ce = p(!1), ue = p(new Set), U = () => {
          try {
            const ft = localStorage.getItem("yunying:ebook:visited");
            ft && (ue.value = new Set(JSON.parse(ft)))
          } catch {}
          ce.value = !0
        }, de = ft => {
          window.open(ft.link, "_blank", "noopener,noreferrer"), ue.value.add(ft.idx);
          try {
            localStorage.setItem("yunying:ebook:visited", JSON.stringify([...ue.value]))
          } catch {}
        }, _e = Le(() => {
          const ft = me.value.chapters.length,
            Z = [...ue.value].filter(pt => pt >= 1 && pt <= ft).length;
          return {
            done: Z,
            total: ft,
            percent: Math.round(Z / ft * 100)
          }
        });
      try {
        const ft = localStorage.getItem("yunying:ebook:visited");
        ft && (ue.value = new Set(JSON.parse(ft)))
      } catch {}
      const xe = p([{
          id: "yy-content-ops",
          title: "内容运营资料",
          desc: "账号运营完整资料包，涵盖账号定位、内容结构分析、内容传播技巧、数据分析与流量机制。",
          iconComp: as,
          iconBg: "linear-gradient(135deg, #ff7a9a, #8b5cf6)",
          badge: "夸克网盘",
          provider: "quark",
          tags: ["账号运营", "内容传播", "优质"],
          link: "https://pan.quark.cn/s/a332d23ff40b",
          password: ""
        }, {
          id: "yy-ai-prompt",
          title: "全行业 AI 提示词大全",
          desc: "覆盖文案、营销、电商、教育、设计等几十个行业的高质量 AI 提示词合集，开箱即用。",
          iconComp: Qo,
          iconBg: "linear-gradient(135deg, #818cf8, #6366f1)",
          badge: "百度网盘",
          provider: "baidu",
          tags: ["AI 提示词", "全行业", "模板"],
          link: "https://pan.baidu.com/s/13ohf9E8PF1nwgc8L9OsTBw",
          password: "5us4"
        }, {
          id: "yy-content-ecom",
          title: "电商运营资料",
          desc: "电商从 0 到 1 开店手册：选品、挂车、图文分享、ROI 优化与直播商品推荐全流程。",
          iconComp: H_,
          iconBg: "linear-gradient(135deg, #f59e0b, #f97316)",
          badge: "夸克网盘",
          provider: "quark",
          tags: ["电商", "选品", "商品推荐"],
          link: "https://pan.quark.cn/s/d9f51736383c",
          password: ""
        }]),
        Ce = Le(() => {
          const ft = O.value.trim().toLowerCase();
          return ft ? xe.value.filter(Z => Z.title.toLowerCase().includes(ft) || Z.desc.toLowerCase().includes(ft) || Z.tags.some(pt => pt.toLowerCase().includes(ft))) : xe.value
        }),
        Re = p(!1),
        nt = p(null),
        tt = ft => {
          nt.value = ft, Re.value = !0
        },
        qe = async (ft, Z = "内容") => {
          try {
            await navigator.clipboard.writeText(ft), A.success(`${Z}已复制`)
          } catch {
            A.warning("复制失败，请手动复制")
          }
        }, Me = () => {
          nt.value && window.open(nt.value.link, "_blank", "noopener,noreferrer")
        }, rt = p([]), ct = p(!1), E = p({
          current: 1,
          total: 0,
          total_page: 1,
          page_size: 10
        }), _ = async (ft = 1, Z = !1) => {
          if (!ct.value) {
            ct.value = !0;
            try {
              const pt = {
                page: ft,
                size: Is
              };
              if (R.value !== "all" && C.value === "yunying") {
                const Mt = R.value;
                Mt && Mt !== "all" && (pt.type_id = Mt)
              }
              O.value && O.value.trim() && (pt.title = O.value.trim());
              const Et = await Of(pt);
              if (Et && Et.rows && Array.isArray(Et.rows)) {
                const Mt = Et.rows.map(Qe => {
                  let j = [];
                  if (Qe.images) try {
                    j = typeof Qe.images == "string" ? JSON.parse(Qe.images) : Qe.images
                  } catch (Ee) {
                    console.warn("解析 images 失败:", Ee), j = []
                  }
                  return {
                    id: Qe.id,
                    category: Qe.type_id || 0,
                    cover: j && j.length > 0 ? j[0] : "",
                    title: Qe.title || "",
                    desc: Qe.desc || "",
                    images: j
                  }
                });
                Z && ft > 1 ? rt.value = [...rt.value, ...Mt] : rt.value = Mt, Et.pages && (E.value = {
                  current: Et.pages.current || ft,
                  total: Et.pages.total || 0,
                  total_page: Et.pages.total_page || 1,
                  page_size: Et.pages.page_size || Is
                })
              } else Z || (rt.value = [])
            } catch (pt) {
              console.error("加载运营资料包列表失败:", pt), A.error("加载运营资料包列表失败，请稍后重试"), Z || (rt.value = [])
            } finally {
              ct.value = !1
            }
          }
        }, je = p([]), K = p(!1), B = p({
          current: 1,
          total: 0,
          total_page: 1,
          page_size: 10
        }), W = async (ft = 1, Z = !1) => {
          if (!K.value) {
            K.value = !0;
            try {
              const pt = {
                page: ft,
                size: Is
              };
              if (R.value !== "all" && C.value === "sucai") {
                const Mt = R.value;
                Mt && Mt !== "all" && (pt.type_id = Mt)
              }
              O.value && O.value.trim() && (pt.title = O.value.trim());
              const Et = await Uf(pt);
              if (Et && Et.rows && Array.isArray(Et.rows)) {
                const Mt = Et.rows.map(Qe => {
                  let j = [];
                  if (Qe.images) try {
                    j = typeof Qe.images == "string" ? JSON.parse(Qe.images) : Qe.images
                  } catch (Ee) {
                    console.warn("解析 images 失败:", Ee), j = []
                  }
                  return {
                    id: Qe.id,
                    category: Qe.type_id || 0,
                    cover: j && j.length > 0 ? j[0] : "",
                    title: Qe.title || "",
                    desc: Qe.desc || "",
                    images: j
                  }
                });
                Z && ft > 1 ? je.value = [...je.value, ...Mt] : je.value = Mt, Et.pages && (B.value = {
                  current: Et.pages.current || ft,
                  total: Et.pages.total || 0,
                  total_page: Et.pages.total_page || 1,
                  page_size: Et.pages.page_size || Is
                })
              } else Z || (je.value = [])
            } catch (pt) {
              console.error("加载素材资料包列表失败:", pt), A.error("加载素材资料包列表失败，请稍后重试"), Z || (je.value = [])
            } finally {
              K.value = !1
            }
          }
        }, Te = Le(() => {
          if (C.value === "tools") return b.value;
          if (C.value === "yunying") return rt.value;
          if (C.value === "sucai") return je.value;
          const ft = O.value.trim().toLowerCase();
          return re.value.filter(Z => {
            const pt = R.value === "all" || Z.category === R.value,
              Et = ft === "" || Z.title.toLowerCase().includes(ft) || Z.desc.toLowerCase().includes(ft);
            return pt && Et
          })
        }), it = Le(() => C.value === "tools" ? b.value : C.value === "yunying" ? rt.value : C.value === "sucai" ? je.value : Te.value.slice(0, J.value * Is)), yt = Le(() => C.value === "tools" ? we.value.current < we.value.total_page : C.value === "yunying" ? E.value.current < E.value.total_page : C.value === "sucai" ? B.value.current < B.value.total_page : Te.value.length > it.value.length), st = async () => {
          if (yt.value)
            if (C.value === "tools") {
              ee.value = !0;
              try {
                await ae(we.value.current + 1, !0)
              } finally {
                ee.value = !1
              }
            } else if (C.value === "yunying") {
            ee.value = !0;
            try {
              await _(E.value.current + 1, !0)
            } finally {
              ee.value = !1
            }
          } else if (C.value === "sucai") {
            ee.value = !0;
            try {
              await W(B.value.current + 1, !0)
            } finally {
              ee.value = !1
            }
          } else ee.value = !0, await new Promise(ft => setTimeout(ft, 300)), J.value += 1, ee.value = !1
        }, Ie = () => {
          C.value === "tools" ? ae(1) : C.value === "yunying" ? _(1) : C.value === "sucai" ? W(1) : J.value = 1
        }, pe = ft => {
          C.value === "tools" ? ae(1) : C.value === "yunying" ? _(1) : C.value === "sucai" ? W(1) : Ie()
        }, Be = () => {
          s.value = window.innerWidth <= 768
        }, xt = async () => {
          var ft;
          try {
            const Z = localStorage.getItem("authToken");
            if (Z && Z.trim()) {
              await new Promise(pt => setTimeout(pt, 200));
              try {
                const pt = await zl();
                pt ? (f.value = {
                  ...pt,
                  nickname: pt.nickname || pt.nickName || "用户",
                  avatar: pt.avatar || pt.avatarUrl || ""
                }, d.value = !0) : (f.value = {}, d.value = !1)
              } catch (pt) {
                if ((pt == null ? void 0 : pt.code) === 999 || ((ft = pt == null ? void 0 : pt.response) == null ? void 0 : ft.code) === 999) {
                  console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), f.value = {}, d.value = !1;
                  return
                }
                console.error("获取用户信息失败:", pt), f.value = {}, d.value = !1
              }
            } else f.value = {}, d.value = !1
          } catch (Z) {
            console.error("检查登录状态失败:", Z), d.value = !1, f.value = {}
          }
        }, Yt = ft => {
          f.value = ft, d.value = !0, u.value = !1, A.success("登录成功"), xt()
        }, Ye = ft => {
          ft === "profile" ? (o.push("/user"), Sa.value = !1) : ft === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : ft === "recharge" ? (n.value = !0, Sa.value = !1) : ft === "logout" && (ui(), xt(), Sa.value = !1)
        }, va = ft => {
          try {
            if (ft.category === "custom" || ft.id === "custom") {
              y.value = !0;
              return
            }
            C.value === "yunying" || C.value === "sucai" ? o.push(`/product2/${C.value}/${ft.id}`) : o.push(`/product/${C.value}/${ft.id}`)
          } catch (Z) {
            console.error(Z)
          }
        };
      Ll(async () => {
        i.path === "/tools" ? (document.title = "火兔工具箱_超级工具箱", await Promise.all([Y(), ae(1)])) : i.path === "/yunying" ? (document.title = "火兔工具箱_运营资料包", await Promise.all([ne(), _(1)])) : i.path === "/sucai" && (document.title = "火兔工具箱_素材资料包", await Promise.all([De(), W(1)])), $(), R.value = "all", O.value = "", J.value = 1, Be(), await xt(), window.addEventListener("resize", Be), window.addEventListener("user-logout", xt), window.addEventListener("user-login-success", xt)
      }), Zl(() => {
        window.removeEventListener("resize", Be), window.removeEventListener("user-logout", xt), window.removeEventListener("user-login-success", xt)
      }), oa(() => i.path, async () => {
        i.path === "/tools" ? await Promise.all([Y(), ae(1)]) : i.path === "/yunying" ? await Promise.all([ne(), _(1)]) : i.path === "/sucai" && await Promise.all([De(), W(1)]), i.path === "/tools" ? document.title = "火兔工具箱_超级工具箱" : i.path === "/yunying" ? document.title = "火兔工具箱_运营资料包" : i.path === "/sucai" && (document.title = "火兔工具箱_素材资料包"), $(), R.value = "all", O.value = "", J.value = 1
      });
      const Ea = async () => {
        if (S.value) try {
          await S.value.validate(), w.value = !0, await new Promise(Et => setTimeout(Et, 1e3));
          const ft = "customDevRecords.v1";
          let Z = [];
          try {
            const Et = localStorage.getItem(ft);
            Et && (Z = JSON.parse(Et))
          } catch (Et) {
            console.error("读取定制开发记录失败:", Et)
          }
          const pt = {
            id: Date.now(),
            description: z.value.description,
            contactName: z.value.contactName || "",
            wechat: z.value.wechat || "",
            email: z.value.email || "",
            submitTime: new Date().toLocaleString("zh-CN"),
            status: "pending"
          };
          Z.unshift(pt), localStorage.setItem(ft, JSON.stringify(Z)), A.success("需求提交成功！我们将在1-3个工作日内与您联系"), z.value = {
            description: "",
            contactName: "",
            wechat: "",
            email: ""
          }, S.value.resetFields(), y.value = !1
        } catch (ft) {
          ft !== !1 && (console.error("提交定制开发需求失败:", ft), A.error("提交失败，请稍后重试"))
        } finally {
          w.value = !1
        }
      };
      return (ft, Z) => {
        var ca;
        const pt = xl,
          Et = cn,
          Mt = jr,
          Qe = Kn,
          j = $l,
          Ee = Rl,
          ht = yo,
          jt = Vo;
        return c(), v("div", loe, [a(ei, {
          title: N.value,
          "is-logged-in": d.value,
          "user-info": f.value,
          "show-mobile-menu": P(Sa),
          onMenuClick: Z[0] || (Z[0] = be => Sa.value = !0),
          onLoginClick: Z[1] || (Z[1] = be => u.value = !0),
          onCommand: Ye
        }, null, 8, ["title", "is-logged-in", "user-info", "show-mobile-menu"]), s.value && P(Sa) ? (c(), v("div", {
          key: 0,
          class: "mobile-overlay show",
          onClick: Z[2] || (Z[2] = be => Sa.value = !1)
        })) : M("", !0), e("main", {
          class: Pe(["main-content", {
            "mobile-content": s.value
          }])
        }, [s.value ? M("", !0) : (c(), v("div", noe, [e("div", ooe, h(N.value), 1), e("div", ioe, [C.value === "tools" ? (c(), ye(pt, {
          key: 0,
          type: "primary",
          size: "small",
          class: "custom-dev-btn",
          onClick: Z[3] || (Z[3] = be => y.value = !0)
        }, {
          default: l(() => [...Z[23] || (Z[23] = [g(" 我要定制开发 ", -1)])]),
          _: 1
        })) : M("", !0), a(Et, {
          modelValue: O.value,
          "onUpdate:modelValue": Z[4] || (Z[4] = be => O.value = be),
          placeholder: T.value,
          clearable: "",
          size: "small",
          class: "search-inline",
          onKeyup: gn(Ie, ["enter"])
        }, {
          append: l(() => [a(pt, {
            onClick: Ie
          }, {
            default: l(() => [...Z[24] || (Z[24] = [g("搜索", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "placeholder"])])])), s.value ? (c(), v("div", soe, h(N.value), 1)) : M("", !0), e("div", roe, [a(Qe, {
          modelValue: R.value,
          "onUpdate:modelValue": Z[5] || (Z[5] = be => R.value = be),
          size: "small",
          class: "category-group",
          onChange: pe
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(Q.value, be => (c(), ye(Mt, {
            key: be.value,
            value: be.value
          }, {
            default: l(() => [g(h(be.label), 1)]),
            _: 2
          }, 1032, ["value"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])]), s.value ? (c(), v("div", uoe, [C.value === "tools" ? (c(), ye(pt, {
          key: 0,
          type: "primary",
          size: "small",
          class: "custom-dev-btn",
          onClick: Z[6] || (Z[6] = be => y.value = !0)
        }, {
          default: l(() => [...Z[25] || (Z[25] = [g(" 我要定制开发 ", -1)])]),
          _: 1
        })) : M("", !0), a(Et, {
          modelValue: O.value,
          "onUpdate:modelValue": Z[7] || (Z[7] = be => O.value = be),
          placeholder: T.value,
          clearable: "",
          size: "small",
          class: "search-inline",
          onKeyup: gn(Ie, ["enter"])
        }, {
          append: l(() => [a(pt, {
            onClick: Ie
          }, {
            default: l(() => [...Z[26] || (Z[26] = [g("搜索", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "placeholder"])])) : M("", !0), C.value === "yunying" ? (c(), v("div", {
          key: 3,
          class: "yy-ebook-hero",
          onClick: U
        }, [e("div", coe, [Z[30] || (Z[30] = e("div", {
          class: "yy-ebook-cover-tag"
        }, "学习电子书", -1)), e("div", doe, [a(j, {
          size: 40
        }, {
          default: l(() => [a(P(Ju))]),
          _: 1
        }), Z[27] || (Z[27] = e("div", {
          class: "yy-ebook-cover-title"
        }, "内容运营", -1)), Z[28] || (Z[28] = e("div", {
          class: "yy-ebook-cover-subtitle"
        }, "全流程手册", -1)), Z[29] || (Z[29] = e("div", {
          class: "yy-ebook-cover-chapters"
        }, "7 章节", -1))])]), e("div", voe, [e("div", moe, [Z[31] || (Z[31] = e("span", {
          class: "yy-ebook-badge yy-ebook-badge--hot"
        }, "🔥 NEW", -1)), Z[32] || (Z[32] = e("span", {
          class: "yy-ebook-badge"
        }, "系统化学习", -1)), (c(!0), v(Ue, null, gt(me.value.tags, be => (c(), v("span", {
          class: "yy-ebook-badge",
          key: be
        }, h(be), 1))), 128))]), e("div", goe, h(me.value.title), 1), e("div", foe, h(me.value.subtitle), 1), e("div", poe, [e("div", yoe, [e("div", {
          class: "yy-ebook-progress-fill",
          style: Il({
            width: _e.value.percent + "%"
          })
        }, null, 4)]), e("span", hoe, " 已学 " + h(_e.value.done) + " / " + h(_e.value.total) + " 章 ", 1)]), e("div", boe, [Z[33] || (Z[33] = e("span", null, "点击卡片查看目录", -1)), a(j, null, {
          default: l(() => [a(P(Wl))]),
          _: 1
        })])])])) : M("", !0), C.value === "yunying" ? (c(), v("div", woe, [(c(!0), v(Ue, null, gt(Ce.value, be => (c(), v("div", {
          key: be.id,
          class: "yy-card",
          onClick: he => tt(be)
        }, [e("div", {
          class: Pe(["yy-card-badge", "yy-card-badge--" + be.provider])
        }, h(be.badge), 3), e("div", {
          class: "yy-card-icon",
          style: Il({
            background: be.iconBg
          })
        }, [a(j, {
          size: 32
        }, {
          default: l(() => [(c(), ye(Jo(be.iconComp)))]),
          _: 2
        }, 1024)], 4), e("div", koe, h(be.title), 1), e("div", Coe, h(be.desc), 1), e("div", Aoe, [(c(!0), v(Ue, null, gt(be.tags, he => (c(), v("span", {
          key: he,
          class: "yy-card-tag"
        }, h(he), 1))), 128))]), e("div", Ioe, [a(j, null, {
          default: l(() => [a(P(ig))]),
          _: 1
        }), Z[34] || (Z[34] = e("span", null, "查看资料", -1))])], 8, _oe))), 128)), Ce.value.length ? M("", !0) : (c(), v("div", xoe, [...Z[35] || (Z[35] = [e("div", {
          class: "empty-tools-content"
        }, [e("div", {
          class: "empty-tools-text"
        }, "未找到匹配的资料"), e("div", {
          class: "empty-tools-hint"
        }, "请尝试其他关键词或清空搜索条件")], -1)])]))])) : (c(), v(Ue, {
          key: 5
        }, [e("div", Soe, [it.value.length === 0 ? (c(), v("div", Eoe, [e("div", Toe, [e("div", $oe, h(O.value ? "未找到匹配的工具" : "工具开发中"), 1), O.value ? (c(), v("div", Poe, " 请尝试其他关键词或清空搜索条件 ")) : M("", !0)])])) : M("", !0), (c(!0), v(Ue, null, gt(it.value, be => (c(), v("div", {
          key: be.id,
          class: "tool-card",
          onClick: he => va(be),
          "data-category": be.category
        }, [e("div", zoe, [e("img", {
          src: be.cover,
          class: "cover-img"
        }, null, 8, Loe)]), e("div", {
          class: "tool-title",
          title: be.title
        }, h(be.title), 9, Doe), e("div", Moe, h(be.desc), 1)], 8, Voe))), 128))]), yt.value ? (c(), v("div", Ooe, [a(pt, {
          class: "load-more-btn",
          onClick: st,
          loading: ee.value
        }, {
          default: l(() => [...Z[36] || (Z[36] = [g("加载更多", -1)])]),
          _: 1
        }, 8, ["loading"])])) : M("", !0)], 64))], 2), a(Ee, {
          modelValue: Re.value,
          "onUpdate:modelValue": Z[11] || (Z[11] = be => Re.value = be),
          title: ((ca = nt.value) == null ? void 0 : ca.title) || "资料详情",
          width: s.value ? "92%" : "480px",
          "align-center": "",
          class: "yy-dialog",
          "append-to-body": ""
        }, {
          footer: l(() => [a(pt, {
            onClick: Z[10] || (Z[10] = be => Re.value = !1)
          }, {
            default: l(() => [...Z[42] || (Z[42] = [g("取消", -1)])]),
            _: 1
          }), a(pt, {
            type: "primary",
            onClick: Me
          }, {
            default: l(() => [a(j, null, {
              default: l(() => [a(P(ig))]),
              _: 1
            }), Z[43] || (Z[43] = e("span", null, "打开网盘", -1))]),
            _: 1
          })]),
          default: l(() => [nt.value ? (c(), v("div", Boe, [e("div", Noe, [e("span", {
            class: Pe(["yy-dlg-chip", "yy-dlg-chip--" + nt.value.provider])
          }, h(nt.value.badge), 3), (c(!0), v(Ue, null, gt(nt.value.tags, be => (c(), v("span", {
            key: be,
            class: "yy-dlg-tag"
          }, h(be), 1))), 128))]), e("div", Uoe, h(nt.value.desc), 1), e("div", Roe, [Z[38] || (Z[38] = e("div", {
            class: "yy-dlg-field-label"
          }, "网盘链接", -1)), a(Et, {
            "model-value": nt.value.link,
            readonly: ""
          }, {
            append: l(() => [a(pt, {
              onClick: Z[8] || (Z[8] = be => qe(nt.value.link, "链接"))
            }, {
              default: l(() => [...Z[37] || (Z[37] = [g("复制", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["model-value"])]), nt.value.password ? (c(), v("div", joe, [Z[40] || (Z[40] = e("div", {
            class: "yy-dlg-field-label"
          }, "提取码", -1)), a(Et, {
            "model-value": nt.value.password,
            readonly: "",
            class: "yy-dlg-pwd"
          }, {
            append: l(() => [a(pt, {
              onClick: Z[9] || (Z[9] = be => qe(nt.value.password, "提取码"))
            }, {
              default: l(() => [...Z[39] || (Z[39] = [g("复制", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["model-value"])])) : M("", !0), e("div", qoe, [a(j, null, {
            default: l(() => [a(P(si))]),
            _: 1
          }), Z[41] || (Z[41] = e("span", null, "点击「打开网盘」将在新标签打开，请先登录对应网盘账号", -1))])])) : M("", !0)]),
          _: 1
        }, 8, ["modelValue", "title", "width"]), a(Ee, {
          modelValue: ce.value,
          "onUpdate:modelValue": Z[12] || (Z[12] = be => ce.value = be),
          width: s.value ? "95%" : "720px",
          "align-center": "",
          "append-to-body": "",
          class: "yy-ebook-dialog"
        }, {
          header: l(() => [e("div", Foe, [e("div", Woe, [a(j, {
            size: 22
          }, {
            default: l(() => [a(P(Ju))]),
            _: 1
          })]), e("div", Goe, [e("div", Joe, h(me.value.title), 1), e("div", Hoe, "全 " + h(me.value.chapters.length) + " 章 · 已学 " + h(_e.value.done) + " / " + h(_e.value.total), 1)])])]),
          default: l(() => [e("div", Qoe, [e("div", Koe, h(me.value.subtitle), 1), e("ol", Yoe, [(c(!0), v(Ue, null, gt(me.value.chapters, be => (c(), v("li", {
            key: be.idx,
            class: Pe(["yy-ebook-toc-item", {
              "is-done": ue.value.has(be.idx)
            }]),
            onClick: he => de(be)
          }, [e("div", Zoe, [ue.value.has(be.idx) ? (c(), ye(j, {
            key: 0,
            class: "yy-ebook-toc-check"
          }, {
            default: l(() => [a(P(ts))]),
            _: 1
          })) : (c(), v("span", eie, h(String(be.idx).padStart(2, "0")), 1))]), e("div", tie, [e("div", aie, h(be.title), 1), e("div", lie, h(be.desc), 1)]), e("div", nie, [a(j, null, {
            default: l(() => [a(P(qg))]),
            _: 1
          }), e("span", null, h(ue.value.has(be.idx) ? "再次学习" : "开始学习"), 1)])], 10, Xoe))), 128))]), e("div", oie, [a(j, null, {
            default: l(() => [a(P(si))]),
            _: 1
          }), Z[44] || (Z[44] = e("span", null, "点击章节在飞书新标签页打开对应学习文档。学习进度会保存在本地。", -1))])])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(Wn, {
          modelValue: n.value,
          "onUpdate:modelValue": Z[13] || (Z[13] = be => n.value = be)
        }, null, 8, ["modelValue"]), a(no, {
          modelValue: u.value,
          "onUpdate:modelValue": Z[14] || (Z[14] = be => u.value = be),
          onLoginSuccess: Yt
        }, null, 8, ["modelValue"]), a(ri, {
          onOpenRecharge: Z[15] || (Z[15] = be => n.value = !0),
          onOpenLogin: Z[16] || (Z[16] = be => u.value = !0)
        }), a(Ee, {
          modelValue: y.value,
          "onUpdate:modelValue": Z[22] || (Z[22] = be => y.value = be),
          title: "软件定制开发",
          width: s.value ? "90%" : "600px",
          center: "",
          class: "custom-dev-dialog"
        }, {
          footer: l(() => [a(pt, {
            onClick: Z[21] || (Z[21] = be => y.value = !1)
          }, {
            default: l(() => [...Z[48] || (Z[48] = [g("取消", -1)])]),
            _: 1
          }), a(pt, {
            type: "primary",
            onClick: Ea,
            loading: w.value
          }, {
            default: l(() => [...Z[49] || (Z[49] = [g("提交需求", -1)])]),
            _: 1
          }, 8, ["loading"])]),
          default: l(() => [a(jt, {
            model: z.value,
            "label-width": "100px",
            rules: x,
            ref_key: "customDevFormRef",
            ref: S
          }, {
            default: l(() => [a(ht, {
              label: "需求描述",
              prop: "description"
            }, {
              default: l(() => [a(Et, {
                modelValue: z.value.description,
                "onUpdate:modelValue": Z[17] || (Z[17] = be => z.value.description = be),
                type: "textarea",
                rows: 6,
                placeholder: "请详细描述您的定制开发需求，包括功能要求、使用场景、预期效果等",
                maxlength: "1000",
                "show-word-limit": ""
              }, null, 8, ["modelValue"])]),
              _: 1
            }), a(ht, {
              class: "contact-info-form-item"
            }, {
              default: l(() => [e("div", iie, [e("div", sie, [a(ht, {
                prop: "contactName",
                class: "contact-form-item"
              }, {
                label: l(() => [e("span", rie, [a(j, {
                  class: "contact-icon"
                }, {
                  default: l(() => [a(P(_n))]),
                  _: 1
                }), Z[45] || (Z[45] = g(" 联系人： ", -1))])]),
                default: l(() => [a(Et, {
                  modelValue: z.value.contactName,
                  "onUpdate:modelValue": Z[18] || (Z[18] = be => z.value.contactName = be),
                  placeholder: "请输入联系人姓名（选填）",
                  maxlength: "50",
                  class: "contact-input"
                }, null, 8, ["modelValue"])]),
                _: 1
              })]), e("div", uie, [a(ht, {
                prop: "wechat",
                class: "contact-form-item"
              }, {
                label: l(() => [e("span", cie, [a(j, {
                  class: "contact-icon"
                }, {
                  default: l(() => [a(P(Po))]),
                  _: 1
                }), Z[46] || (Z[46] = g(" 微信号： ", -1))])]),
                default: l(() => [a(Et, {
                  modelValue: z.value.wechat,
                  "onUpdate:modelValue": Z[19] || (Z[19] = be => z.value.wechat = be),
                  placeholder: "请输入微信号（选填）",
                  maxlength: "50",
                  class: "contact-input"
                }, null, 8, ["modelValue"])]),
                _: 1
              })]), e("div", die, [a(ht, {
                prop: "email",
                class: "contact-form-item"
              }, {
                label: l(() => [e("span", vie, [a(j, {
                  class: "contact-icon"
                }, {
                  default: l(() => [a(P(J_))]),
                  _: 1
                }), Z[47] || (Z[47] = g(" 邮箱： ", -1))])]),
                default: l(() => [a(Et, {
                  modelValue: z.value.email,
                  "onUpdate:modelValue": Z[20] || (Z[20] = be => z.value.email = be),
                  placeholder: "请输入邮箱地址（选填）",
                  maxlength: "100",
                  class: "contact-input"
                }, null, 8, ["modelValue"])]),
                _: 1
              })])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["model"])]),
          _: 1
        }, 8, ["modelValue", "width"])])
      }
    }
  },
  fy = al(mie, [
    ["__scopeId", "data-v-4af9b4cd"]
  ]),
  gie = {
    key: 0,
    class: "article-import-loading"
  },
  fie = {
    class: "article-import-filters"
  },
  pie = {
    class: "tishici-import-filters-left"
  },
  yie = {
    key: 0,
    class: "article-import-list"
  },
  hie = {
    class: "article-import-title"
  },
  bie = {
    class: "article-import-preview"
  },
  wie = {
    class: "article-import-meta-row"
  },
  _ie = {
    class: "article-import-meta"
  },
  kie = {
    class: "article-import-actions"
  },
  Cie = {
    __name: "ImportTishiciDialog",
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      isMobile: {
        type: Boolean,
        default: !1
      },
      dialogClass: {
        type: String,
        default: ""
      },
      maxContentLength: {
        type: Number,
        default: 2e3
      }
    },
    emits: ["update:modelValue", "apply"],
    setup(t, {
      emit: o
    }) {
      const i = t,
        n = o,
        s = ln(),
        u = p([]),
        d = p(!1),
        f = p([]),
        y = p(""),
        w = p(""),
        S = p(""),
        z = Le(() => {
          const ee = (w.value || "").toLowerCase().trim(),
            ie = S.value === "" || S.value == null ? "" : String(S.value);
          return u.value.filter(Ae => {
            const F = String(Ae.title || "").toLowerCase(),
              Y = !ee || F.includes(ee),
              ne = Ae.groupId == null || Ae.groupId === 0 ? "" : String(Ae.groupId);
            return Y && (!ie || ne === ie)
          })
        });

      function x() {
        w.value = (y.value || "").trim()
      }

      function C(ee) {
        var Ae;
        if (ee == null || ee === "" || ee === 0) return "未分组";
        const ie = String(ee);
        return ((Ae = f.value.find(F => F.id != null && String(F.id) === ie)) == null ? void 0 : Ae.name) || "未分组"
      }

      function V(ee) {
        const ie = String(ee || "").trim();
        if (!ie) return "暂无预览";
        const Ae = 120;
        return ie.length > Ae ? ie.slice(0, Ae) + "..." : ie
      }

      function $(ee) {
        const ie = ee.groupid ?? ee.groupId;
        return {
          id: ee.id,
          title: ee.title || "未命名",
          content: ee.desc ?? ee.content ?? "",
          groupId: ie != null && ie !== 0 ? ie : null,
          createdAt: ee.createtime ?? ee.createdAt ?? 0,
          updatedAt: ee.updatetime ?? ee.updatedAt ?? ee.createtime ?? ee.createdAt ?? 0
        }
      }
      async function N() {
        d.value = !0;
        try {
          const ee = await Hf({
              page: 1,
              size: 100
            }),
            ie = (ee == null ? void 0 : ee.rows) ?? (ee == null ? void 0 : ee.data) ?? (Array.isArray(ee) ? ee : []);
          u.value = ie.map($)
        } catch (ee) {
          console.error(ee), u.value = [], A.error((ee == null ? void 0 : ee.message) || "加载提示词列表失败")
        } finally {
          d.value = !1
        }
      }
      async function T() {
        if (!(f.value && f.value.length > 0)) try {
          const ee = await Qf();
          f.value = Array.isArray(ee) ? ee : []
        } catch (ee) {
          console.error(ee), f.value = []
        }
      }

      function R(ee) {
        if (ee == null || ee === "") return "";
        const ie = Number(ee),
          Ae = ie > 1e12 ? ie : ie * 1e3,
          F = new Date(Ae);
        return Number.isNaN(F.getTime()) ? "" : `${F.getFullYear()}/${String(F.getMonth()+1).padStart(2,"0")}/${String(F.getDate()).padStart(2,"0")}`
      }

      function O(ee) {
        const ie = (ee.content || "").trim();
        if (!ie) {
          A.warning("该条内容为空");
          return
        }
        const Ae = Math.max(1, Number(i.maxContentLength) || 2e3),
          F = ie.slice(0, Ae),
          Y = (ee.title || "未命名").slice(0, 24);
        n("apply", {
          content: F,
          title: ee.title || "未命名"
        }), n("update:modelValue", !1), A.success(`已导入「${Y}」`)
      }

      function J() {
        n("update:modelValue", !1), s.push("/tishici")
      }
      return oa(() => i.modelValue, ee => {
        ee && (y.value = "", w.value = "", S.value = "", N(), T())
      }), (ee, ie) => {
        const Ae = $l,
          F = Zy,
          Y = cn,
          ne = xl,
          De = Oo,
          Q = Bo,
          re = Rl;
        return c(), ye(re, {
          "model-value": t.modelValue,
          title: "导入我的提示词",
          width: t.isMobile ? "95%" : "560px",
          class: Pe(["article-import-dialog", t.dialogClass].filter(Boolean)),
          "append-to-body": "",
          "onUpdate:modelValue": ie[3] || (ie[3] = b => ee.$emit("update:modelValue", b))
        }, {
          footer: l(() => [a(ne, {
            onClick: ie[2] || (ie[2] = b => ee.$emit("update:modelValue", !1))
          }, {
            default: l(() => [...ie[8] || (ie[8] = [g("关闭", -1)])]),
            _: 1
          }), a(ne, {
            type: "primary",
            onClick: J
          }, {
            default: l(() => [a(Ae, null, {
              default: l(() => [a(P(Ci))]),
              _: 1
            }), ie[9] || (ie[9] = g(" 进入提示词库 ", -1))]),
            _: 1
          })]),
          default: l(() => [d.value ? (c(), v("div", gie, [a(Ae, {
            class: "is-loading"
          }, {
            default: l(() => [a(P(Fl))]),
            _: 1
          }), ie[4] || (ie[4] = g(" 加载中... ", -1))])) : (c(), v(Ue, {
            key: 1
          }, [u.value.length === 0 ? (c(), ye(F, {
            key: 0,
            description: "暂无提示词"
          })) : (c(), v(Ue, {
            key: 1
          }, [e("div", fie, [e("div", pie, [a(Y, {
            modelValue: y.value,
            "onUpdate:modelValue": ie[0] || (ie[0] = b => y.value = b),
            placeholder: "搜索标题",
            clearable: "",
            size: "small",
            class: "tishici-import-search",
            onKeyup: gn(x, ["enter"])
          }, null, 8, ["modelValue"]), a(ne, {
            type: "primary",
            size: "small",
            onClick: x
          }, {
            default: l(() => [a(Ae, null, {
              default: l(() => [a(P(Ai))]),
              _: 1
            }), ie[5] || (ie[5] = g(" 搜索 ", -1))]),
            _: 1
          })]), a(Q, {
            modelValue: S.value,
            "onUpdate:modelValue": ie[1] || (ie[1] = b => S.value = b),
            placeholder: "全部分组",
            clearable: "",
            size: "small",
            class: "tishici-import-group"
          }, {
            default: l(() => [a(De, {
              label: "全部分组",
              value: ""
            }), (c(!0), v(Ue, null, gt(f.value, b => (c(), ye(De, {
              key: b.id,
              label: b.name || "未命名",
              value: b.id
            }, null, 8, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]), z.value.length > 0 ? (c(), v("div", yie, [(c(!0), v(Ue, null, gt(z.value, b => (c(), v("div", {
            key: b.id,
            class: "article-import-item"
          }, [e("div", hie, h(b.title || "未命名"), 1), e("div", bie, h(V(b.content)), 1), e("div", wie, [e("div", _ie, h(C(b.groupId)) + " · " + h(R(b.createdAt)), 1), e("div", kie, [a(ne, {
            type: "primary",
            size: "small",
            onClick: te => O(b)
          }, {
            default: l(() => [...ie[6] || (ie[6] = [g("导入", -1)])]),
            _: 1
          }, 8, ["onClick"]), a(ne, {
            size: "small",
            link: "",
            onClick: J
          }, {
            default: l(() => [...ie[7] || (ie[7] = [g("进入查看", -1)])]),
            _: 1
          })])])]))), 128))])) : (c(), ye(F, {
            key: 1,
            description: "没有匹配的提示词"
          }))], 64))], 64))]),
          _: 1
        }, 8, ["model-value", "width", "class"])
      }
    }
  };
const Aie = {
    class: "btn-label"
  },
  Iie = {
    class: "tone-popover-list"
  },
  xie = ["onClick"],
  Ld = {
    __name: "TonePicker",
    props: {
      modelValue: {
        type: String,
        default: "常规语气"
      },
      tones: {
        type: Array,
        default: () => [{
          label: "常规语气",
          value: "常规语气"
        }, {
          label: "正式语气",
          value: "正式语气"
        }, {
          label: "幽默语气",
          value: "幽默语气"
        }, {
          label: "夸张语气",
          value: "夸张语气"
        }, {
          label: "友好语气",
          value: "友好语气"
        }, {
          label: "推销语气",
          value: "推销语气"
        }, {
          label: "讽刺语气",
          value: "讽刺语气"
        }, {
          label: "诗歌语气",
          value: "诗歌语气"
        }]
      }
    },
    emits: ["update:modelValue"],
    setup(t, {
      emit: o
    }) {
      const i = o,
        n = p(!1),
        s = u => {
          i("update:modelValue", u), n.value = !1
        };
      return (u, d) => {
        const f = $l,
          y = Q_;
        return c(), ye(y, {
          visible: n.value,
          "onUpdate:visible": d[0] || (d[0] = w => n.value = w),
          trigger: "click",
          placement: "top-start",
          width: 148,
          "popper-class": "tone-popover-pop"
        }, {
          reference: l(() => [e("span", {
            class: Pe(["pill-btn tone-pill", {
              active: t.modelValue && t.modelValue !== "常规语气"
            }])
          }, [a(f, null, {
            default: l(() => [a(P(Po))]),
            _: 1
          }), e("span", Aie, h(t.modelValue || "常规语气"), 1)], 2)]),
          default: l(() => [e("div", Iie, [(c(!0), v(Ue, null, gt(t.tones, w => (c(), v("div", {
            key: w.value,
            class: Pe(["tone-popover-item", {
              "is-active": t.modelValue === w.value
            }]),
            onClick: lt(S => s(w.value), ["stop"])
          }, [e("span", null, h(w.label), 1), t.modelValue === w.value ? (c(), ye(f, {
            key: 0,
            class: "tone-popover-check"
          }, {
            default: l(() => [a(P(Zo))]),
            _: 1
          })) : M("", !0)], 10, xie))), 128))])]),
          _: 1
        }, 8, ["visible"])
      }
    }
  };
const Sie = {
    class: "zac-body"
  },
  Eie = {
    key: 0,
    class: "zac-flow"
  },
  Tie = {
    class: "zac-flow-cards"
  },
  $ie = ["disabled"],
  Pie = ["disabled"],
  Vie = {
    key: 1,
    class: "zac-hint"
  },
  zie = {
    key: 2,
    class: "zac-hint"
  },
  Lie = {
    key: 3,
    class: "zac-field"
  },
  Die = {
    key: 4,
    class: "zac-field"
  },
  Mie = {
    key: 5,
    class: "zac-loading"
  },
  Oie = {
    class: "zac-footer"
  },
  Bie = {
    class: "zac-body"
  },
  Nie = {
    class: "zac-flow"
  },
  Uie = {
    class: "zac-flow-cards"
  },
  Rie = ["disabled"],
  jie = ["disabled"],
  qie = {
    class: "zac-hint"
  },
  Fie = {
    class: "zac-tabs"
  },
  Wie = {
    key: 0,
    class: "zac-field"
  },
  Gie = {
    key: 1,
    class: "zac-upload-wrap"
  },
  Jie = {
    class: "zac-upload-grid"
  },
  Hie = ["src"],
  Qie = ["onClick"],
  Kie = ["disabled"],
  Yie = {
    class: "zac-field zac-req-field"
  },
  Xie = {
    class: "zac-hint"
  },
  Zie = {
    class: "zac-field"
  },
  ese = {
    key: 2,
    class: "zac-loading"
  },
  tse = {
    class: "zac-loading-card"
  },
  ase = {
    class: "zac-loading-text"
  },
  lse = {
    class: "zac-footer"
  },
  Sd = 9,
  Ed = 0,
  py = 0,
  yy = 1,
  Zi = 2e3,
  hy = 50,
  nse = 300,
  by = "zhiding_ai_copy_flow",
  ose = {
    __name: "ZhidingAiCopyAssist",
    props: {
      isMobile: {
        type: Boolean,
        default: !1
      },
      currentPoints: {
        type: [Number, String],
        default: 0
      },
      hasExistingContent: {
        type: Boolean,
        default: !1
      },
      flowMode: {
        type: String,
        default: ""
      }
    },
    emits: ["apply", "need-login", "insufficient", "refresh-user", "update:flowMode", "auto-pipeline"],
    setup(t, {
      expose: o,
      emit: i
    }) {
      const n = () => {
          try {
            return localStorage.getItem(by) === "manual" ? "manual" : "auto"
          } catch {
            return "auto"
          }
        },
        s = t,
        u = i,
        d = p(s.flowMode === "manual" || s.flowMode === "auto" ? s.flowMode : n()),
        f = Le(() => s.flowMode === "manual" || s.flowMode === "auto" ? s.flowMode : d.value),
        y = Le(() => f.value !== "manual"),
        w = E => {
          try {
            localStorage.setItem(by, E)
          } catch {}
        },
        S = E => {
          const _ = E === "manual" ? "manual" : "auto";
          d.value = _, w(_), u("update:flowMode", _)
        };
      oa(() => s.flowMode, E => {
        (E === "manual" || E === "auto") && (d.value = E, w(E))
      });
      const z = p(!1),
        x = p("input"),
        C = p(""),
        V = p(""),
        $ = p(""),
        N = p(!1),
        T = p(!1),
        R = p("input"),
        O = p("text"),
        J = p(""),
        ee = p(""),
        ie = p([]),
        Ae = p(""),
        F = p(""),
        Y = p(!1),
        ne = p(!1),
        De = p(null),
        Q = Le(() => O.value === "images" ? yy : py),
        re = Le(() => O.value === "images" ? ie.value.length > 0 : !!J.value.trim()),
        b = () => {
          const E = ee.value.trim().slice(0, nse),
            _ = O.value === "images" ? {
              mode: "images",
              images: ie.value.map(je => je.url).filter(Boolean)
            } : {
              mode: "text",
              content: J.value.trim()
            };
          return E && (_.requirement = E), _
        },
        te = Le(() => O.value === "images" ? "AI 正在识别图片文案并仿写..." : "AI 正在仿写文案..."),
        we = (E, _ = 0) => {
          if (!E || _ > 6) return {
            title: "",
            content: ""
          };
          if (typeof E == "string") return {
            title: "",
            content: E.trim()
          };
          if (Array.isArray(E)) return {
            title: "",
            content: E.map(je => we(je, _ + 1).content).filter(Boolean).join(`
`)
          };
          if (typeof E == "object") {
            const je = String(E.title ?? E.headline ?? "").trim(),
              K = ["content", "text", "article", "copy", "result", "output", "desc", "description"];
            for (const B of K)
              if (typeof E[B] == "string" && E[B].trim()) return {
                title: je,
                content: E[B].trim()
              };
            for (const B of ["data", "message", "row", "detail"]) {
              const W = we(E[B], _ + 1);
              if (W.content) return {
                title: W.title || je,
                content: W.content
              }
            }
          }
          return {
            title: "",
            content: ""
          }
        },
        ae = E => {
          if (!localStorage.getItem("authToken")) return u("need-login"), !1;
          const _ = Number(E) || 0;
          return _ > 0 && Number(s.currentPoints ?? 0) < _ ? (u("insufficient", _), !1) : !0
        },
        me = async (E, _, je) => {
          if (!Number(_)) return !0;
          try {
            return await La.confirm(`${je}本次将扣除 <b>${_}</b> 个点数，确认继续？`, E, {
              confirmButtonText: `确定（-${_} 点）`,
              cancelButtonText: "取消",
              type: "info",
              dangerouslyUseHTMLString: !0
            }), !0
          } catch {
            return !1
          }
        }, ce = async ({
          title: E,
          content: _,
          silent: je = !1
        }) => {
          const K = String(_ || "").trim();
          if (!K) return A.warning("请先生成或填写文案"), !1;
          if (!je && s.hasExistingContent) try {
            await La.confirm("将覆盖当前文案输入框中的内容，是否继续？", "确认填入", {
              confirmButtonText: "覆盖并填入",
              cancelButtonText: "取消",
              type: "warning"
            })
          } catch {
            return !1
          }
          const B = K.length > Zi ? K.slice(0, Zi) : K,
            W = String(E || "").trim();
          return u("apply", {
            content: B,
            title: W ? W.length > hy ? W.slice(0, hy) : W : ""
          }), K.length > Zi ? A.warning(`文案已截取前 ${Zi} 字填入`) : A.success(je ? "已自动填入文案输入框" : "已填入文案输入框"), !0
        }, ue = async ({
          title: E,
          content: _,
          cost: je,
          isRegen: K,
          autoFill: B
        }) => (u("refresh-user"), B ? await ce({
          title: E,
          content: _,
          silent: !0
        }) : (A.success(K ? je > 0 ? `已重新生成 · 已扣 ${je} 点` : "已重新生成" : je > 0 ? `生成成功 · 已扣 ${je} 点` : "生成成功"), !1)), U = async E => {
          const _ = C.value.trim();
          if (!_) {
            A.warning("请输入提示词");
            return
          }
          if (y.value && !E) {
            if (!localStorage.getItem("authToken")) {
              u("need-login");
              return
            }
            u("auto-pipeline", {
              kind: "write",
              prompt: _,
              copyCost: Ed
            });
            return
          }
          if (!(!ae(Ed) || !await me(E ? "重新生成" : "AI帮写文案", Ed, E ? "将按原提示词重新撰写文案，" : "AI 将根据提示词撰写一篇文案，"))) {
            N.value = !0;
            try {
              const K = await Gf({
                  prompt: _
                }),
                B = we(K);
              if (!B.content) throw new Error("接口未返回文案内容");
              const W = B.content.length > Zi ? B.content.slice(0, Zi) : B.content;
              V.value = W, $.value = B.title, await ue({
                title: B.title,
                content: W,
                cost: Ed,
                isRegen: E,
                autoFill: !1
              }), x.value = "result"
            } catch (K) {
              Ni(K) || A.error((K == null ? void 0 : K.message) || "AI帮写失败")
            } finally {
              N.value = !1
            }
          }
        }, de = async () => {
          await ce({
            title: $.value,
            content: V.value
          }) && (z.value = !1)
        }, _e = () => {
          x.value = "input", N.value = !1
        }, xe = async E => {
          const _ = O.value === "images" ? "images" : "text",
            je = _ === "images" ? yy : py;
          if (_ === "text" && !J.value.trim()) {
            A.warning("请输入要仿写的文章");
            return
          }
          if (_ === "images" && !ie.value.length) {
            A.warning("请上传要提取文案的图片");
            return
          }
          if (y.value && !E) {
            if (!localStorage.getItem("authToken")) {
              u("need-login");
              return
            }
            u("auto-pipeline", {
              kind: "imitate",
              ...b(),
              copyCost: je
            });
            return
          }
          if (!(!ae(je) || !await me(E ? "重新生成" : "AI仿写文案", je, _ === "images" ? E ? "将重新识别图片文案并仿写，" : "AI 将提取图片文案并仿写成新文章，" : E ? "将按原文重新仿写，" : "AI 将仿写这篇文章，"))) {
            Y.value = !0;
            try {
              const W = await Jf(b()),
                Te = we(W);
              if (!Te.content) throw new Error("接口未返回仿写内容");
              const it = Te.content.length > Zi ? Te.content.slice(0, Zi) : Te.content;
              Ae.value = it, F.value = Te.title, await ue({
                title: Te.title,
                content: it,
                cost: je,
                isRegen: E,
                autoFill: !1
              }), R.value = "result"
            } catch (W) {
              Ni(W) || A.error((W == null ? void 0 : W.message) || "AI仿写失败")
            } finally {
              Y.value = !1
            }
          }
        }, Ce = async () => {
          await ce({
            title: F.value,
            content: Ae.value
          }) && (T.value = !1)
        }, Re = () => {
          R.value = "input", Y.value = !1
        }, nt = E => typeof E == "string" ? E : (E == null ? void 0 : E.url) || (E == null ? void 0 : E.data) || "", tt = async E => {
          const _ = Array.from(E.target.files || []);
          if (De.value && (De.value.value = ""), !_.length) return;
          const je = Sd - ie.value.length;
          if (je <= 0) {
            A.warning(`最多上传 ${Sd} 张图片`);
            return
          }
          const K = _.slice(0, je);
          _.length > je && A.warning(`最多再上传 ${je} 张，已为你截取`), ne.value = !0;
          try {
            for (const B of K) {
              if (!B.type.startsWith("image/") && !Yo(B)) {
                A.warning(`${B.name} 不是图片文件`);
                continue
              }
              let W = B;
              if (Yo(B)) try {
                W = await _i(B)
              } catch (yt) {
                A.error((yt == null ? void 0 : yt.message) || "HEIC 格式暂不支持");
                continue
              }
              const Te = await ao(W),
                it = nt(Te);
              if (!it) throw new Error("上传失败，未返回图片地址");
              ie.value = [...ie.value, {
                url: it,
                preview: it
              }]
            }
          } catch (B) {
            A.error((B == null ? void 0 : B.message) || "图片上传失败")
          } finally {
            ne.value = !1
          }
        }, qe = E => {
          ie.value = ie.value.filter((_, je) => je !== E)
        };
      return o({
        openWrite: () => {
          if (!localStorage.getItem("authToken")) {
            u("need-login");
            return
          }
          z.value = !0
        },
        openImitate: () => {
          if (!localStorage.getItem("authToken")) {
            u("need-login");
            return
          }
          T.value = !0
        },
        closeAll: () => {
          z.value = !1, T.value = !1
        }
      }), (E, _) => {
        const je = xl,
          K = Rl,
          B = $l;
        return c(), v(Ue, null, [a(K, {
          modelValue: z.value,
          "onUpdate:modelValue": _[8] || (_[8] = W => z.value = W),
          title: x.value === "result" ? "AI帮写结果" : "AI帮写文案",
          width: t.isMobile ? "95%" : "640px",
          class: "zac-dialog",
          "align-center": "",
          "append-to-body": "",
          "destroy-on-close": "",
          "close-on-click-modal": !N.value,
          onClosed: _e
        }, {
          footer: l(() => [e("div", Oie, [x.value === "result" ? (c(), ye(je, {
            key: 0,
            disabled: N.value,
            onClick: _[4] || (_[4] = W => x.value = "input")
          }, {
            default: l(() => [..._[27] || (_[27] = [g("返回修改", -1)])]),
            _: 1
          }, 8, ["disabled"])) : (c(), ye(je, {
            key: 1,
            onClick: _[5] || (_[5] = W => z.value = !1)
          }, {
            default: l(() => [..._[28] || (_[28] = [g("取消", -1)])]),
            _: 1
          })), x.value === "result" ? (c(), ye(je, {
            key: 2,
            disabled: N.value,
            onClick: _[6] || (_[6] = W => U(!0))
          }, {
            default: l(() => [..._[29] || (_[29] = [g(" 重新生成 ", -1)])]),
            _: 1
          }, 8, ["disabled"])) : M("", !0), x.value === "input" ? (c(), ye(je, {
            key: 3,
            type: "primary",
            loading: N.value,
            disabled: !C.value.trim() || N.value,
            onClick: _[7] || (_[7] = W => U(!1))
          }, {
            default: l(() => [g(h(y.value ? "帮写并填入" : "开始生成"), 1)]),
            _: 1
          }, 8, ["loading", "disabled"])) : (c(), ye(je, {
            key: 4,
            type: "primary",
            disabled: N.value || !V.value.trim(),
            onClick: de
          }, {
            default: l(() => [..._[30] || (_[30] = [g(" 确定填入 ", -1)])]),
            _: 1
          }, 8, ["disabled"]))])]),
          default: l(() => [e("div", Sie, [x.value === "input" ? (c(), v("div", Eie, [_[24] || (_[24] = e("div", {
            class: "zac-flow-label"
          }, "处理方式", -1)), e("div", Tie, [e("button", {
            type: "button",
            class: Pe(["zac-flow-card", {
              active: f.value === "manual"
            }]),
            disabled: N.value,
            onClick: _[0] || (_[0] = W => S("manual"))
          }, [..._[22] || (_[22] = [e("span", {
            class: "zac-flow-radio"
          }, null, -1), e("span", {
            class: "zac-flow-copy"
          }, [e("span", {
            class: "zac-flow-title"
          }, "半自动"), e("span", {
            class: "zac-flow-desc"
          }, "生成后可编辑、确认再填入，更稳妥")], -1)])], 10, $ie), e("button", {
            type: "button",
            class: Pe(["zac-flow-card", {
              active: f.value === "auto"
            }]),
            disabled: N.value,
            onClick: _[1] || (_[1] = W => S("auto"))
          }, [..._[23] || (_[23] = [e("span", {
            class: "zac-flow-radio"
          }, null, -1), e("span", {
            class: "zac-flow-copy"
          }, [e("span", {
            class: "zac-flow-title"
          }, [g("全自动"), e("span", {
            class: "zac-flow-badge"
          }, "默认")]), e("span", {
            class: "zac-flow-desc"
          }, "确认后先填入待生成，可取消重选；点击一键生成才撰写新文案并配图")], -1)])], 10, Pie)])])) : M("", !0), x.value === "input" ? (c(), v("p", Vie, [_[25] || (_[25] = g(" 输入一段提示词，AI 将帮你写一篇可直接用于配图的图文正文。帮写文案不扣点。 ", -1)), y.value ? (c(), v(Ue, {
            key: 0
          }, [g("确认后先进入待生成状态，不会立即撰写；点击一键生成时才撰写新文案并配图。")], 64)) : M("", !0)])) : (c(), v("p", zie, " 生成结果可直接修改。确定后会填入下方文案输入框；重新生成也不扣点。 ")), x.value === "input" ? (c(), v("div", Lie, [el(e("textarea", {
            "onUpdate:modelValue": _[2] || (_[2] = W => C.value = W),
            class: "zac-textarea",
            rows: "8",
            maxlength: "1000",
            placeholder: "例：帮我写一篇机械键盘开箱种草文，突出复古绿配色、段落感手感和桌面仪式感，语气轻松真实，适合图文社区。"
          }, null, 512), [
            [En, C.value]
          ]), e("div", {
            class: Pe(["zac-count", {
              warning: C.value.length > 800
            }])
          }, h(C.value.length) + "/1000", 3)])) : (c(), v("div", Die, [el(e("textarea", {
            "onUpdate:modelValue": _[3] || (_[3] = W => V.value = W),
            class: "zac-textarea zac-textarea--result",
            rows: "12",
            maxlength: "2000",
            placeholder: "生成的文案将显示在这里，可直接编辑修改"
          }, null, 512), [
            [En, V.value]
          ]), e("div", {
            class: Pe(["zac-count", {
              warning: V.value.length > 1600,
              error: V.value.length >= 2e3
            }])
          }, h(V.value.length) + "/2000", 3)])), N.value ? (c(), v("div", Mie, [..._[26] || (_[26] = [e("div", {
            class: "zac-loading-card"
          }, [e("div", {
            class: "zac-dots"
          }, [e("span"), e("span"), e("span")]), e("div", {
            class: "zac-loading-text"
          }, "AI 正在根据提示词撰写文案...")], -1)])])) : M("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title", "width", "close-on-click-modal"]), a(K, {
          modelValue: T.value,
          "onUpdate:modelValue": _[21] || (_[21] = W => T.value = W),
          title: R.value === "result" ? "AI仿写结果" : "AI仿写文案",
          width: t.isMobile ? "95%" : "680px",
          class: "zac-dialog",
          "align-center": "",
          "append-to-body": "",
          "destroy-on-close": "",
          "close-on-click-modal": !Y.value,
          onClosed: Re
        }, {
          footer: l(() => [e("div", lse, [R.value === "result" ? (c(), ye(je, {
            key: 0,
            disabled: Y.value,
            onClick: _[17] || (_[17] = W => R.value = "input")
          }, {
            default: l(() => [..._[46] || (_[46] = [g("返回修改", -1)])]),
            _: 1
          }, 8, ["disabled"])) : (c(), ye(je, {
            key: 1,
            onClick: _[18] || (_[18] = W => T.value = !1)
          }, {
            default: l(() => [..._[47] || (_[47] = [g("取消", -1)])]),
            _: 1
          })), R.value === "result" ? (c(), ye(je, {
            key: 2,
            disabled: Y.value,
            onClick: _[19] || (_[19] = W => xe(!0))
          }, {
            default: l(() => [g(h(Q.value > 0 ? `重新生成（扣 ${Q.value} 点）` : "重新生成"), 1)]),
            _: 1
          }, 8, ["disabled"])) : M("", !0), R.value === "input" ? (c(), ye(je, {
            key: 3,
            type: "primary",
            loading: Y.value,
            disabled: !re.value || Y.value,
            onClick: _[20] || (_[20] = W => xe(!1))
          }, {
            default: l(() => [g(h(y.value ? "仿写并填入" : Q.value > 0 ? `开始仿写（扣 ${Q.value} 点）` : "开始仿写"), 1)]),
            _: 1
          }, 8, ["loading", "disabled"])) : (c(), ye(je, {
            key: 4,
            type: "primary",
            disabled: Y.value || !Ae.value.trim(),
            onClick: Ce
          }, {
            default: l(() => [..._[48] || (_[48] = [g(" 确定填入 ", -1)])]),
            _: 1
          }, 8, ["disabled"]))])]),
          default: l(() => [e("div", Bie, [R.value === "input" ? (c(), v(Ue, {
            key: 0
          }, [e("div", Nie, [_[33] || (_[33] = e("div", {
            class: "zac-flow-label"
          }, "处理方式", -1)), e("div", Uie, [e("button", {
            type: "button",
            class: Pe(["zac-flow-card", {
              active: f.value === "manual"
            }]),
            disabled: Y.value,
            onClick: _[9] || (_[9] = W => S("manual"))
          }, [..._[31] || (_[31] = [e("span", {
            class: "zac-flow-radio"
          }, null, -1), e("span", {
            class: "zac-flow-copy"
          }, [e("span", {
            class: "zac-flow-title"
          }, "半自动"), e("span", {
            class: "zac-flow-desc"
          }, "生成后可编辑、确认再填入，更稳妥")], -1)])], 10, Rie), e("button", {
            type: "button",
            class: Pe(["zac-flow-card", {
              active: f.value === "auto"
            }]),
            disabled: Y.value,
            onClick: _[10] || (_[10] = W => S("auto"))
          }, [..._[32] || (_[32] = [e("span", {
            class: "zac-flow-radio"
          }, null, -1), e("span", {
            class: "zac-flow-copy"
          }, [e("span", {
            class: "zac-flow-title"
          }, [g("全自动"), e("span", {
            class: "zac-flow-badge"
          }, "默认")]), e("span", {
            class: "zac-flow-desc"
          }, "确认后先填入待生成，可取消重选；点击一键生成才仿写新文案并配图")], -1)])], 10, jie)])]), e("p", qie, [_[34] || (_[34] = g(" 输入文章 与 上传多图 ", -1)), _[35] || (_[35] = e("b", null, "二选一", -1)), _[36] || (_[36] = g("，不能同时使用。输入文章仿写不扣点；上传多图会先提取图片文案再仿写，扣 ", -1)), _[37] || (_[37] = e("b", null, "1", -1)), _[38] || (_[38] = g(" 点。 ", -1)), y.value ? (c(), v(Ue, {
            key: 0
          }, [g("确认后先进入待生成状态，不会立即仿写；点击一键生成时才仿写新文案并配图（仅上传多图扣 1 点）。")], 64)) : M("", !0)]), e("div", Fie, [e("button", {
            type: "button",
            class: Pe(["zac-tab", {
              active: O.value === "text"
            }]),
            onClick: _[11] || (_[11] = W => O.value = "text")
          }, [..._[39] || (_[39] = [g(" 输入文章", -1), e("span", {
            class: "zac-tab-cost"
          }, "免费", -1)])], 2), e("button", {
            type: "button",
            class: Pe(["zac-tab", {
              active: O.value === "images"
            }]),
            onClick: _[12] || (_[12] = W => O.value = "images")
          }, [..._[40] || (_[40] = [g(" 上传多图", -1), e("span", {
            class: "zac-tab-cost"
          }, "扣 1 点", -1)])], 2)]), O.value === "text" ? (c(), v("div", Wie, [el(e("textarea", {
            "onUpdate:modelValue": _[13] || (_[13] = W => J.value = W),
            class: "zac-textarea",
            rows: "10",
            maxlength: "2000",
            placeholder: "粘贴要仿写的原文。AI 会保留核心信息与卖点，改写成适合图文配图的新文案。"
          }, null, 512), [
            [En, J.value]
          ]), e("div", {
            class: Pe(["zac-count", {
              warning: J.value.length > 1600,
              error: J.value.length >= 2e3
            }])
          }, h(J.value.length) + "/2000", 3)])) : (c(), v("div", Gie, [e("p", {
            class: "zac-upload-tip"
          }, "最多上传 " + h(Sd) + " 张。AI 会提取图中文字与画面信息后再仿写成文案。"), e("input", {
            ref_key: "imitateFileInput",
            ref: De,
            type: "file",
            accept: "image/*",
            multiple: "",
            class: "zac-file-input",
            onChange: tt
          }, null, 544), e("div", Jie, [(c(!0), v(Ue, null, gt(ie.value, (W, Te) => (c(), v("div", {
            key: W.url + Te,
            class: "zac-thumb"
          }, [e("img", {
            src: W.preview || W.url,
            alt: "仿写参考图"
          }, null, 8, Hie), e("span", {
            class: "zac-thumb-remove",
            title: "移除",
            onClick: it => qe(Te)
          }, [a(B, null, {
            default: l(() => [a(P(un))]),
            _: 1
          })], 8, Qie)]))), 128)), ie.value.length < Sd ? (c(), v("button", {
            key: 0,
            type: "button",
            class: Pe(["zac-upload-add", {
              "is-uploading": ne.value
            }]),
            disabled: ne.value,
            onClick: _[14] || (_[14] = W => {
              var Te;
              return (Te = De.value) == null ? void 0 : Te.click()
            })
          }, [ne.value ? (c(), v(Ue, {
            key: 0
          }, [_[41] || (_[41] = e("span", {
            class: "zac-mini-spin"
          }, null, -1)), _[42] || (_[42] = e("span", null, "上传中", -1))], 64)) : (c(), v(Ue, {
            key: 1
          }, [a(B, null, {
            default: l(() => [a(P(Ql))]),
            _: 1
          }), _[43] || (_[43] = e("span", null, "上传图片", -1))], 64))], 10, Kie)) : M("", !0)])])), e("div", Yie, [_[44] || (_[44] = e("div", {
            class: "zac-sub-label"
          }, [g("仿写要求"), e("span", {
            class: "zac-optional"
          }, "（选填）")], -1)), el(e("textarea", {
            "onUpdate:modelValue": _[15] || (_[15] = W => ee.value = W),
            class: "zac-textarea zac-textarea--req",
            rows: "3",
            maxlength: "300",
            placeholder: "有具体仿写要求可填写，例如：语气更口语、突出性价比、控制在 600 字内、不要出现竞品名。不填则按原文信息正常仿写。"
          }, null, 512), [
            [En, ee.value]
          ]), e("div", {
            class: Pe(["zac-count", {
              warning: ee.value.length > 240
            }])
          }, h(ee.value.length) + "/300", 3)])], 64)) : (c(), v(Ue, {
            key: 1
          }, [e("p", Xie, " 仿写结果可直接修改。确定后会填入下方文案输入框；重新生成" + h(Q.value > 0 ? `再扣 ${Q.value} 点` : "也不扣点") + "。 ", 1), e("div", Zie, [el(e("textarea", {
            "onUpdate:modelValue": _[16] || (_[16] = W => Ae.value = W),
            class: "zac-textarea zac-textarea--result",
            rows: "12",
            maxlength: "2000",
            placeholder: "仿写后的文案将显示在这里，可直接编辑修改"
          }, null, 512), [
            [En, Ae.value]
          ]), e("div", {
            class: Pe(["zac-count", {
              warning: Ae.value.length > 1600,
              error: Ae.value.length >= 2e3
            }])
          }, h(Ae.value.length) + "/2000", 3)])], 64)), Y.value ? (c(), v("div", ese, [e("div", tse, [_[45] || (_[45] = e("div", {
            class: "zac-dots"
          }, [e("span"), e("span"), e("span")], -1)), e("div", ase, h(te.value), 1)])])) : M("", !0)])]),
          _: 1
        }, 8, ["modelValue", "title", "width", "close-on-click-modal"])], 64)
      }
    }
  },
  ise = al(ose, [
    ["__scopeId", "data-v-7b3807d8"]
  ]);
const sse = {
    class: "yijuhua-page"
  },
  rse = {
    class: "input-container"
  },
  use = {
    class: "mode-tabs-wrapper"
  },
  cse = {
    class: "mode-tabs"
  },
  dse = {
    class: "tabs-right-buttons"
  },
  vse = {
    key: 0,
    class: "yijuhua-ai-copy-mobile-row"
  },
  mse = {
    key: 1,
    class: "input-box imitative-writing-box imitative-writing-box-shunan"
  },
  gse = {
    key: 0,
    class: "ai-copy-lock-bar"
  },
  fse = {
    class: "ai-copy-lock-copy"
  },
  pse = {
    key: 0,
    class: "pro-input-actions-column"
  },
  yse = {
    key: 0,
    class: "imitative-writing-actions"
  },
  hse = {
    class: "shunan-mobile-actions shunan-mobile-actions-outside"
  },
  bse = {
    class: "mobile-actions-inline"
  },
  wse = {
    class: "pill-btn-label-with-corner-tip"
  },
  _se = {
    class: "pill-btn-label-with-corner-tip"
  },
  kse = {
    key: 0,
    class: "suggest-hint"
  },
  Cse = {
    key: 1,
    class: "imitative-writing-actions"
  },
  Ase = {
    class: "actions-left"
  },
  Ise = {
    class: "pill-btn-label-with-corner-tip"
  },
  xse = {
    key: 0,
    class: "suggest-hint"
  },
  Sse = {
    class: "pill-btn-label-with-corner-tip"
  },
  Ese = {
    key: 0,
    class: "suggest-hint"
  },
  Tse = {
    key: 2,
    class: "input-box imitative-writing-box"
  },
  $se = {
    key: 0,
    class: "ai-copy-lock-bar"
  },
  Pse = {
    class: "ai-copy-lock-copy"
  },
  Vse = {
    key: 0,
    class: "pro-input-actions-column"
  },
  zse = {
    key: 0,
    class: "pro-pc-actions-wrapper"
  },
  Lse = {
    class: "pro-reference-image-section pro-reference-image-inline"
  },
  Dse = {
    key: 0,
    class: "pro-ref-drop-overlay"
  },
  Mse = {
    class: "reference-tag"
  },
  Ose = {
    key: 1,
    class: "upload-loading"
  },
  Bse = {
    key: 2,
    class: "upload-placeholder"
  },
  Nse = ["src"],
  Use = {
    key: 0,
    class: "template-selected-hint"
  },
  Rse = {
    key: 1,
    class: "user-uploaded-hint"
  },
  jse = {
    class: "actions-left actions-left-pro-inline"
  },
  qse = {
    class: "pill-btn-label-with-corner-tip"
  },
  Fse = {
    key: 0,
    class: "suggest-hint"
  },
  Wse = {
    class: "pill-btn-label-with-corner-tip"
  },
  Gse = {
    key: 0,
    class: "suggest-hint"
  },
  Jse = {
    class: "page-count-select-wrapper article-count-wrapper article-count-wrapper-pro"
  },
  Hse = {
    class: "page-count-label page-count-label-with-tip"
  },
  Qse = {
    class: "imitative-writing-actions imitative-writing-actions-pro-generate"
  },
  Kse = {
    key: 1,
    class: "imitative-writing-actions"
  },
  Yse = {
    key: 0,
    class: "mobile-upload-loading"
  },
  Xse = ["src"],
  Zse = {
    class: "mobile-template-select-wrapper"
  },
  ere = {
    class: "mobile-actions-inline"
  },
  tre = {
    class: "pill-btn-label-with-corner-tip"
  },
  are = {
    class: "pill-btn-label-with-corner-tip"
  },
  lre = {
    key: 0,
    class: "suggest-hint"
  },
  nre = {
    key: 0,
    class: "mobile-template-selected-text"
  },
  ore = {
    key: 3,
    class: "input-box imitative-writing-box imitative-writing-box-gallery"
  },
  ire = {
    key: 0,
    class: "ai-copy-lock-bar"
  },
  sre = {
    class: "ai-copy-lock-copy"
  },
  rre = {
    key: 0,
    class: "pro-input-actions-column"
  },
  ure = {
    key: 0,
    class: "pro-reference-image-section pro-reference-image-inline max-two-refs"
  },
  cre = {
    class: "max-refs-row"
  },
  dre = {
    class: "max-ref-slot"
  },
  vre = {
    key: 0,
    class: "upload-loading"
  },
  mre = {
    key: 1,
    class: "upload-placeholder"
  },
  gre = ["src"],
  fre = {
    class: "max-ref-slot"
  },
  pre = {
    key: 0,
    class: "upload-loading"
  },
  yre = {
    key: 1,
    class: "upload-placeholder"
  },
  hre = ["src"],
  bre = {
    class: "page-count-select-wrapper"
  },
  wre = {
    class: "page-count-label page-count-label-with-tip"
  },
  _re = {
    key: 0,
    class: "user-uploaded-hint"
  },
  kre = {
    key: 1,
    class: "user-uploaded-hint"
  },
  Cre = {
    class: "imitative-writing-actions"
  },
  Are = {
    key: 0,
    class: "mobile-upload-loading"
  },
  Ire = ["src"],
  xre = {
    class: "mobile-template-select-wrapper"
  },
  Sre = {
    class: "mobile-actions-inline"
  },
  Ere = {
    class: "pill-btn-label-with-corner-tip"
  },
  Tre = {
    class: "pill-btn-label-with-corner-tip"
  },
  $re = {
    key: 0,
    class: "suggest-hint"
  },
  Pre = {
    key: 0,
    class: "mobile-template-selected-text"
  },
  Vre = {
    class: "actions-left-group"
  },
  zre = {
    class: "actions-left"
  },
  Lre = {
    class: "pill-btn-label-with-corner-tip"
  },
  Dre = {
    key: 0,
    class: "suggest-hint"
  },
  Mre = {
    class: "pill-btn-label-with-corner-tip"
  },
  Ore = {
    key: 0,
    class: "suggest-hint"
  },
  Bre = {
    class: "page-count-select-wrapper article-count-wrapper article-count-wrapper-max"
  },
  Nre = {
    class: "page-count-label page-count-label-with-tip"
  },
  Ure = {
    class: "suggestions-section"
  },
  Rre = {
    class: "text-prompts"
  },
  jre = ["onClick"],
  qre = ["onClick"],
  Fre = ["onClick"],
  Wre = {
    class: "template-grid-showcase"
  },
  Gre = {
    class: "card-cover-showcase"
  },
  Jre = ["src", "alt"],
  Hre = {
    class: "hover-overlay-showcase"
  },
  Qre = {
    class: "hover-overlay-content-showcase"
  },
  Kre = ["onClick"],
  Yre = ["onClick"],
  Xre = {
    class: "card-content-showcase"
  },
  Zre = {
    class: "card-badges-showcase"
  },
  eue = {
    key: 0,
    class: "badge badge-new"
  },
  tue = {
    key: 1,
    class: "badge badge-hot"
  },
  aue = {
    class: "card-title-showcase"
  },
  lue = {
    class: "card-footer-showcase"
  },
  nue = {
    class: "category-tag-showcase"
  },
  oue = {
    key: 0,
    class: "usage-info-showcase"
  },
  iue = {
    key: 0,
    class: "more-templates-btn-wrapper"
  },
  sue = {
    key: 0,
    class: "task-dialog-header success-header"
  },
  rue = {
    class: "success-check"
  },
  uue = {
    key: 1,
    class: "task-dialog-header"
  },
  cue = {
    key: 2,
    class: "task-progress-section"
  },
  due = {
    class: "dual-engine-container"
  },
  vue = {
    class: "circular-progress engine-primary"
  },
  mue = ["width", "height", "viewBox"],
  gue = ["stroke-width", "r", "cx", "cy"],
  fue = ["stroke-width", "r", "cx", "cy"],
  pue = {
    class: "progress-text"
  },
  yue = {
    class: "progress-message"
  },
  hue = {
    class: "task-progress-dialog-content"
  },
  bue = {
    key: 0,
    class: "success-desc"
  },
  wue = {
    key: 1,
    class: "linear-progress-container"
  },
  _ue = {
    class: "linear-progress-bar"
  },
  kue = {
    class: "linear-progress-text"
  },
  Cue = {
    key: 2,
    class: "task-message"
  },
  Aue = {
    class: "template-preview-header"
  },
  Iue = {
    class: "template-preview-header-icon"
  },
  xue = {
    class: "template-preview-content"
  },
  Sue = ["src"],
  Eue = {
    class: "work-complete-header"
  },
  Tue = {
    class: "work-complete-footer"
  },
  $ue = {
    key: 0,
    class: "ai-copy-preview-body"
  },
  Pue = {
    class: "ai-copy-preview-text"
  },
  Vue = {
    key: 0,
    class: "ai-copy-preview-body"
  },
  zue = {
    class: "ai-copy-preview-label"
  },
  Lue = {
    class: "ai-copy-preview-images"
  },
  Due = ["src"],
  Mue = {
    key: 1,
    class: "ai-copy-preview-body"
  },
  Oue = {
    class: "ai-copy-preview-text"
  },
  Bue = {
    key: 2,
    class: "ai-copy-preview-body",
    style: {
      "margin-top": "14px"
    }
  },
  Nue = {
    class: "ai-copy-preview-text"
  },
  Uue = {
    class: "dialog-input-wrapper"
  },
  Rue = {
    class: "dialog-textarea-wrapper"
  },
  jue = {
    class: "dialog-actions"
  },
  que = {
    key: 0,
    class: "material-library-loading"
  },
  Fue = {
    key: 1,
    class: "material-library-empty"
  },
  Wue = {
    key: 2
  },
  Gue = {
    class: "material-library-toolbar"
  },
  Jue = {
    class: "material-custom-group-tab-label"
  },
  Hue = {
    class: "material-custom-group-tab-name"
  },
  Que = {
    class: "material-library-date-row"
  },
  Kue = {
    class: "material-library-grid-wrap"
  },
  Yue = {
    class: "material-library-grid"
  },
  Xue = ["onClick"],
  Zue = ["src", "alt"],
  ece = {
    key: 0,
    class: "material-library-check"
  },
  tce = {
    key: 0,
    class: "material-library-pagination"
  },
  ace = {
    class: "material-library-selected-tip"
  },
  wy = "customExtraData",
  _y = "zhiding_ai_copy_flow",
  Td = 8,
  lce = {
    __name: "Yijuhua",
    setup(t) {
      const o = ln(),
        i = fn(),
        n = p(!1),
        s = p(!1),
        u = p(!1),
        d = p(0),
        f = p(!1),
        y = p(!1),
        w = p(!1),
        S = p(null),
        z = He => {
          S.value = He
        },
        x = () => {
          S.value = null
        },
        C = p({
          industry: "",
          ageMode: "any",
          ageRange: [18, 30],
          targetGroup: "",
          painPoints: "",
          solution: "",
          notes: ""
        }),
        V = () => {
          try {
            const He = localStorage.getItem(wy);
            if (He) {
              const G = JSON.parse(He);
              G && typeof G == "object" && (C.value = {
                industry: G.industry || "",
                ageMode: G.ageMode || "any",
                ageRange: Array.isArray(G.ageRange) ? G.ageRange : [18, 30],
                targetGroup: G.targetGroup || "",
                painPoints: G.painPoints || "",
                solution: G.solution || "",
                notes: G.notes || ""
              })
            }
          } catch (He) {
            console.error("加载补充创作信息缓存失败:", He)
          }
        },
        $ = () => {
          try {
            localStorage.setItem(wy, JSON.stringify(C.value))
          } catch (He) {
            console.error("保存补充创作信息缓存失败:", He)
          }
        },
        N = p(window.innerWidth <= 768),
        T = p(!!localStorage.getItem("authToken")),
        R = p({}),
        O = p(""),
        J = p(!1),
        ee = p(""),
        ie = p("auto");
      try {
        const He = localStorage.getItem(_y);
        (He === "manual" || He === "auto") && (ie.value = He)
      } catch {}
      oa(ie, He => {
        try {
          localStorage.setItem(_y, He === "manual" ? "manual" : "auto")
        } catch {}
      });
      const Ae = p(null),
        F = p(!1),
        Y = p("imitate"),
        ne = p(null),
        De = p({
          content: ""
        }),
        Q = p(!1),
        re = Le(() => !!O.value.trim() || !!ne.value),
        b = Le(() => Y.value === "write" ? "已选择 AI帮写文案，待一键生成时撰写新文案并配图" : "已选择 AI仿写文案，待一键生成时仿写新文案并配图"),
        te = Le(() => Y.value === "write" ? "预览 AI帮写文案" : "预览 AI仿写文案"),
        we = () => {
          var He;
          if (!Co()) {
            s.value = !0;
            return
          }(He = Ae.value) == null || He.openWrite()
        },
        ae = () => {
          var He;
          if (!Co()) {
            s.value = !0;
            return
          }(He = Ae.value) == null || He.openImitate()
        },
        me = He => {
          d.value = Number(He) || 1, u.value = !0
        },
        ce = ({
          content: He,
          title: G
        } = {}) => {
          let It = String(He || "");
          const da = String(G || "").trim();
          da && (It = `${da}

${It}`.trim()), O.value = It.length > 2e3 ? It.slice(0, 2e3) : It
        },
        ue = (He = {}) => {
          ce(He), ne.value = null, F.value = !1
        },
        U = () => {
          Q.value = !1, O.value = De.value.content || "", ne.value = null, F.value = !1
        },
        de = () => {
          Q.value = !1, Y.value === "write" ? we() : ae()
        },
        _e = () => {
          ne.value && (Q.value = !0)
        },
        xe = (He, G = 0) => {
          if (!He || G > 6) return {
            title: "",
            content: ""
          };
          if (typeof He == "string") return {
            title: "",
            content: He.trim()
          };
          if (Array.isArray(He)) return {
            title: "",
            content: He.map(It => xe(It, G + 1).content).filter(Boolean).join(`
`)
          };
          if (typeof He == "object") {
            const It = String(He.title ?? He.headline ?? "").trim();
            for (const da of ["content", "text", "article", "copy", "result", "output", "desc", "description"])
              if (typeof He[da] == "string" && He[da].trim()) return {
                title: It,
                content: He[da].trim()
              };
            for (const da of ["data", "message", "row", "detail"]) {
              const na = xe(He[da], G + 1);
              if (na.content) return {
                title: na.title || It,
                content: na.content
              }
            }
          }
          return {
            title: "",
            content: ""
          }
        },
        Ce = async (He = {}) => {
          let G;
          He.kind === "write" ? G = await Gf({
            prompt: He.prompt
          }) : G = await Jf(He.mode === "images" ? {
            mode: "images",
            images: He.images || [],
            requirement: He.requirement || ""
          } : {
            mode: "text",
            content: He.content || "",
            requirement: He.requirement || ""
          });
          const It = xe(G);
          if (!It.content) throw new Error(He.kind === "write" ? "接口未返回文案内容" : "接口未返回仿写内容");
          return It
        }, Re = (He = {}) => {
          var G;
          Oe.value || ((G = Ae.value) == null || G.closeAll(), ne.value || (De.value = {
            content: O.value || ""
          }), ne.value = He, Y.value = He.kind === "write" ? "write" : "imitate", F.value = !0, A.success("已选择全自动，可取消重选；点击一键生成后才会撰写新文案并配图"))
        }, nt = p("shunan"), tt = p(3), qe = Array.from({
          length: 10
        }, (He, G) => ({
          label: `${G+1} 个`,
          value: G + 1
        })), Me = p(1), rt = Array.from({
          length: 10
        }, (He, G) => ({
          label: `${G+1} 套`,
          value: G + 1
        }));
      oa(nt, (He, G) => {
        ka.value = He, Ea.value && He === "shunan" && (G === "lingxi" || G === "lingxi_gallery") && (A.warning("普通模式不支持模板参考图，已切换回 Pro 模式"), nt.value = "lingxi", ka.value = "lingxi")
      }), oa(f, He => {
        He && !C.value.industry && !C.value.targetGroup && !C.value.painPoints && V()
      });
      const ct = p("常规语气"),
        E = p([{
          label: "常规语气",
          value: "常规语气"
        }, {
          label: "正式语气",
          value: "正式语气"
        }, {
          label: "幽默语气",
          value: "幽默语气"
        }, {
          label: "夸张语气",
          value: "夸张语气"
        }, {
          label: "友好语气",
          value: "友好语气"
        }, {
          label: "推销语气",
          value: "推销语气"
        }, {
          label: "讽刺语气",
          value: "讽刺语气"
        }, {
          label: "诗歌语气",
          value: "诗歌语气"
        }]),
        _ = () => nt.value === "lingxi_gallery" ? !!(Ie.value || pe.value) : !!(nt.value === "lingxi" ? B.value : K.value),
        je = He => {
          const G = nt.value,
            It = G === "lingxi_gallery";
          let da = "一句话图文";
          G === "shunan" ? da = "一句话图文 - 普通版(大字报)" : G === "lingxi" ? da = "一句话图文 - 高级版(单封面)" : G === "lingxi_gallery" && (da = "一句话图文 - 高级版(多图集)");
          const na = [];
          na.push(`创作类型：${da}`), na.push(`【核心主题】：${He}`), ct.value && na.push(`语气：${ct.value}`);
          const la = y.value && C.value ? qi(C.value) : "";
          la && na.push(la.replace("【补充创作信息】", "【需要在本次内容中植入/种草的信息】（请把以下信息自然地融入正文、案例或卖点中）"));
          const Aa = S.value;
          if (Aa && Aa.name) {
            const ql = Aa.type === "merchant" || Aa.type === 1,
              il = Aa.data || {},
              Za = Cl => Array.isArray(Cl) ? Cl.filter(Boolean).join("、") : Cl || "",
              hl = [];
            ql ? (il.brandName && hl.push(`品牌名称：${il.brandName}`), il.merchantType && hl.push(`商家类型：${il.merchantType}`), Za(il.industry) && hl.push(`所属行业：${Za(il.industry)}`), Za(il.brandTone) && hl.push(`品牌调性：${Za(il.brandTone)}`), Za(il.sellingPoints) && hl.push(`核心卖点：${Za(il.sellingPoints)}`), Za(il.targetCustomer) && hl.push(`目标客户：${Za(il.targetCustomer)}`)) : (Za(il.baseIdentity) && hl.push(`基础身份：${Za(il.baseIdentity)}`), Za(il.realIdentity) && hl.push(`现实身份：${Za(il.realIdentity)}`), Za(il.coreTags) && hl.push(`核心标签：${Za(il.coreTags)}`), il.story && hl.push(`背景故事：${il.story}`));
            const Yl = [`本次创作身份的人设定位是：${Aa.name}`, "请全程以该人设的身份背景、语气和表达方式来创作内容。"];
            hl.length && Yl.push(hl.map(Cl => `- ${Cl}`).join(`
`)), na.push(Yl.join(`
`))
          }
          const Kl = It ? Math.max(1, Number(tt.value) || 1) : 1;
          return It && na.push(`本配图总数量：${Kl} 张`), na.push("配图比例：竖版 3:4（宽:高 = 3:4）"), _() ? na.push("【参考图】已作为配图模板。大纲只写要上图的文字，不要写实拍、换色、换版式等配图建议。") : It && Kl >= 2 && na.push(`【整套图】共 ${Kl} 张，配色/字体/版式统一，每张内容不同。`), na.join(`

`)
        },
        K = p(""),
        B = p(""),
        W = p(null),
        Te = p(null),
        it = p(!1),
        yt = p(!1),
        st = p(0),
        Ie = p(""),
        pe = p(""),
        Be = p(!1),
        xt = p(!1),
        Yt = p(""),
        Ye = p(!1),
        va = p(!1),
        Ea = p(!1),
        ft = () => {
          B.value = Ie.value || pe.value || ""
        },
        Z = p(!1),
        pt = p(0),
        Et = p([]),
        Mt = p(!1),
        Qe = p([]),
        j = p("all"),
        Ee = p("all"),
        ht = p(null),
        jt = p([]),
        ca = He => He === 1 ? "product" : He === 2 ? "scene" : He === 3 ? "display" : "other",
        be = He => {
          if (He == null || He === "") return null;
          if (typeof He == "number") {
            const It = He < 1e12 ? He * 1e3 : He;
            return new Date(It)
          }
          const G = new Date(He);
          return isNaN(G.getTime()) ? null : G
        },
        he = He => {
          const G = Ee.value;
          if (G === "all") return !0;
          const It = be(He.createTime);
          if (!It) return !1;
          const da = new Date,
            na = new Date(da.getFullYear(), da.getMonth(), da.getDate(), 0, 0, 0, 0),
            la = new Date(da.getFullYear(), da.getMonth(), da.getDate(), 23, 59, 59, 999);
          if (G === "today") return It >= na && It <= la;
          const Aa = new Date(da.getFullYear(), da.getMonth(), da.getDate() - 1, 0, 0, 0, 0),
            Kl = new Date(da.getFullYear(), da.getMonth(), da.getDate() - 1, 23, 59, 59, 999);
          if (G === "yesterday") return It >= Aa && It <= Kl;
          if (G === "week") {
            const ql = new Date(da.getFullYear(), da.getMonth(), da.getDate() - 6, 0, 0, 0, 0);
            return It >= ql && It <= la
          }
          if (G === "custom" && ht.value) {
            const [ql, il, Za] = ht.value.split("-").map(Number), hl = new Date(ql, il - 1, Za, 0, 0, 0, 0), Yl = new Date(ql, il - 1, Za, 23, 59, 59, 999);
            return It >= hl && It <= Yl
          }
          return !0
        },
        kt = Le(() => {
          let He = Et.value;
          const G = j.value;
          if (G === "cg:none") He = He.filter(It => !It.customGroupId);
          else if (G && G.startsWith("cg:")) {
            const It = G.slice(3);
            He = He.filter(da => da.customGroupId === It)
          }
          return He.filter(It => he(It))
        }),
        Bt = p(1),
        Ze = Le(() => kt.value.length),
        Wt = Le(() => {
          const He = kt.value,
            G = (Bt.value - 1) * Td;
          return He.slice(G, G + Td)
        }),
        aa = He => {
          Bt.value = He
        };
      oa([j, Ee, ht], () => {
        Bt.value = 1
      });
      const xa = async () => {
        try {
          const He = await dc();
          jt.value = Array.isArray(He) ? He.map(G => ({
            id: String(G.id),
            name: G.name || ""
          })) : []
        } catch (He) {
          console.warn("加载素材分组失败:", He), jt.value = []
        }
      }, Kt = async () => {
        Mt.value = !0, Qe.value = [], j.value = "all", Ee.value = "all", ht.value = null, Bt.value = 1;
        try {
          await xa();
          const He = await kv({
              page: 1,
              size: 200
            }),
            G = Array.isArray(He == null ? void 0 : He.rows) ? He.rows : [];
          Et.value = G.map(It => {
            const da = ca(It.type),
              na = It.groupid ?? It.group_id ?? It.groupId ?? It.customGroupId,
              Aa = (na === "" || na === null || na === void 0 ? 0 : Number(na)) === 0 ? "" : String(na);
            return {
              id: It.id,
              name: It.name || `素材${It.id}`,
              url: It.url,
              group: da,
              customGroupId: Aa,
              createTime: It.createtime || It.createTime || ""
            }
          })
        } catch (He) {
          console.error("加载素材库失败:", He), Et.value = [], A.error((He == null ? void 0 : He.message) || "加载素材库失败，请先登录或稍后重试")
        } finally {
          Mt.value = !1
        }
      }, at = He => Qe.value.includes(He), Fe = He => {
        const G = He == null ? void 0 : He.url;
        if (!G) return;
        Qe.value.indexOf(G) !== -1 ? Qe.value = [] : Qe.value = [G]
      }, Ke = () => {
        const He = Qe.value[0];
        if (He) {
          if (nt.value !== "lingxi_gallery") B.value = He, Ea.value = !1, A.success("已从素材库选择参考图");
          else {
            const G = pt.value;
            G === 1 ? pe.value = He : Ie.value = He, ft(), Ea.value = !1, A.success(G === 1 ? "已选择内容参考图" : "已选择封面参考图")
          }
          Z.value = !1, Qe.value = []
        }
      }, et = () => {
        Z.value = !1, o.push("/user?tab=material_library")
      }, Nt = He => {
        if (!localStorage.getItem("authToken")) {
          s.value = !0;
          return
        }
        nt.value === "lingxi_gallery" && (pt.value = typeof He == "number" ? He : st.value), yt.value = !1, Z.value = !0
      }, Ut = He => {
        const G = He.previewImage || He.cover;
        B.value = G, Ie.value = G, Ea.value = !0, W.value && (W.value.value = ""), Te.value && (Te.value.value = ""), A.success("已选择模板")
      }, Ge = () => {
        Ye.value = !0
      }, dt = () => {
        yt.value = !1, Ge()
      }, qt = p([{
        id: "shunan",
        name: "普通大字报",
        consumption: "1"
      }, {
        id: "lingxi",
        name: "高级设计师",
        consumption: "5"
      }, {
        id: "lingxi_gallery",
        name: "高级图集",
        consumption: "4/图"
      }]), ka = p("shunan");
      Le(() => qt.value.find(He => He.id === ka.value) || qt.value[0]);
      const Ne = p(!1),
        ga = p(!1),
        St = p(!1),
        Oe = p(!1),
        Ve = p(!1),
        Ma = p(!1),
        Je = p(0),
        ve = p(""),
        $t = p(!1),
        ta = p(!1),
        ha = p(""),
        Qt = p(!1),
        ba = p(!1),
        Ja = p(30);
      let ml = null,
        $e = null;
      const We = () => {
          ml && (clearTimeout(ml), ml = null), $e && (clearInterval($e), $e = null)
        },
        ze = () => {
          We(), Ja.value = 30, $e = setInterval(() => {
            Ja.value > 0 && (Ja.value -= 1), Ja.value <= 0 && $e && (clearInterval($e), $e = null)
          }, 1e3), ml = setTimeout(() => {
            We(), Qt.value = !0, $t.value = !1, ba.value = !1, o.push("/works").catch(() => {})
          }, 3e4)
        },
        H = (He = 60) => new Promise(G => {
          const It = () => {
            Je.value < 100 ? (Je.value = Math.min(100, Je.value + 1), setTimeout(It, He)) : G()
          };
          It()
        }),
        Lt = p(0),
        Ft = p(["联网搜索中", "七大AI模型匹配中", "设计师正在思考", "多模态合并中"]),
        Rt = p(0);
      Le(() => Ft.value[Rt.value]);
      const Ot = p(["分析优质潜质", "生成标题内容", "生成配图"]),
        Xt = p(0);
      Le(() => Ot.value[Xt.value]);
      const At = p(["高级制作，让图文内容更具优质潜力", "一键生成，省时省力，为高效而生", "AI智能创作，让每一篇图文都成为优质", "专业设计，让内容更有吸引力", "快速生成，释放你的创作灵感", "高效率制作，几分钟完成专业级图文", "一键导出，轻松分享到各大平台", "优质潜质，AI算法助力内容脱颖而出", "灵感参考，学习热门图文的成功秘诀"]),
        pa = p(0);
      let Oa = null,
        Fa = null;
      const gl = () => {
          Oa && clearInterval(Oa), pa.value = Math.floor(Math.random() * At.value.length), Oa = setInterval(() => {
            let He;
            do He = Math.floor(Math.random() * At.value.length); while (He === pa.value && At.value.length > 1);
            pa.value = He
          }, 3e3)
        },
        jl = () => {
          Oa && (clearInterval(Oa), Oa = null)
        },
        en = Le(() => typeof window < "u" && window.innerWidth <= 768 ? 62 : 65),
        fa = Le(() => 2 * Math.PI * en.value),
        Ka = Le(() => fa.value - Je.value / 100 * fa.value);
      Le(() => fa.value - Lt.value / 100 * fa.value);
      const Dl = () => {
          Fa && clearInterval(Fa), Rt.value = 0, Fa = setInterval(() => {
            Rt.value = (Rt.value + 1) % Ft.value.length, Lt.value < Je.value && (Lt.value = Math.min(Lt.value + Math.random() * 3, Je.value))
          }, 2500)
        },
        tn = () => {
          Fa && (clearInterval(Fa), Fa = null)
        };
      oa($t, He => {
        He ? (pa.value = 0, Lt.value = 0, Rt.value = 0, gl(), Dl()) : (jl(), tn())
      }), oa(Je, He => {
        He > Lt.value && (Lt.value = Math.min(He + Math.random() * 2, He))
      });
      const zt = ["给美妆护肤写一篇分享图文", "给穿搭时尚写一篇入门图文", "给美食探店写一篇推荐图文", "给旅游攻略写一篇使用指南", "给家居好物写一篇推荐图文", "给数码产品写一篇测评图文", "给健身教程写一篇学习图文", "给职场技能写一篇干货分享", "给考研资料包写一篇介绍图文", "给公考资料写一篇使用指南", "给AI工具写一篇推荐图文", "给设计素材写一篇推荐图文", "给办公教程写一篇学习图文", "给编程教程写一篇入门图文", "给脚本工具写一篇推荐图文", "给考研专项资料包写一篇介绍", "给公考省考资料写一篇使用指南", "给教资备考资料写一篇推荐", "给职业资格证资料写一篇学习", "给语言学习资料写一篇入门", "给中小学教辅资料写一篇推荐", "给课件教案模板写一篇使用技巧", "给手抄报模板写一篇制作教程", "给设计素材包写一篇使用指南", "给PS预设插件写一篇安装教程", "给手账素材包写一篇使用技巧", "给设计源文件写一篇使用指南", "给AI设计工具写一篇推荐图文", "给办公效率脚本写一篇使用指南", "给编程实用脚本写一篇使用技巧", "给AI工具合集写一篇推荐图文", "给批量处理工具写一篇使用指南", "给自动化脚本写一篇使用技巧", "给绘本电子版写一篇介绍图文", "给考研专项资料包写一篇介绍图文", "给公考省考资料写一篇使用指南图文", "给教资备考资料写一篇推荐图文", "给职业资格证资料写一篇学习图文", "给语言学习资料写一篇入门图文", "给中小学教辅资料写一篇推荐图文", "给办公软件教程写一篇学习图文", "给公文写作模板写一篇使用图文", "给行业报告模板写一篇介绍图文", "给数据分析模板写一篇使用图文", "给设计模板素材写一篇推荐图文", "给壁纸图标素材写一篇推荐图文", "给字体样机资源写一篇推荐图文", "给设计教程资料写一篇学习图文", "给视频剪辑资源写一篇推荐图文", "给副业指南网创课程写一篇介绍", "给电商运营教程写一篇学习图文", "给编程开发教程写一篇推荐图文", "给手机摄影修图教程写一篇技巧", "给兴趣技能教程写一篇推荐图文", "给设计辅助工具写一篇推荐图文", "给视频剪辑插件写一篇安装教程", "给无版权软件安装包写一篇推荐", "给行业专用插件写一篇介绍图文", "给数据采集工具写一篇推荐图文", "给少儿教辅资料写一篇推荐图文", "给早教教案资料写一篇推荐图文", "给家长辅导话术写一篇推荐图文", "给儿童兴趣培养资料写一篇介绍", "给考研专项资料包写一篇详细介绍图文", "给大厂面试真题集写一篇推荐图文", "给新媒体运营教程写一篇入门图文", "给编程源文件项目源码写一篇介绍", "给可打印学习资料写一篇使用指南", "给乐高搭建图纸库写一篇使用技巧", "给考研专项资料包写一篇详细介绍图文内容", "给公考省考资料写一篇完整使用指南图文", "给教资备考资料写一篇详细推荐图文内容", "给职业资格证资料写一篇完整学习图文", "给语言学习资料写一篇详细介绍图文内容", "给中小学教辅资料写一篇完整推荐图文", "给课件教案模板写一篇详细使用技巧图文", "给手抄报模板写一篇完整制作教程图文", "给简历模板写一篇详细使用指南图文内容", "给PPT模板写一篇完整设计技巧图文内容", "给设计素材包写一篇详细使用指南图文", "给PS预设插件写一篇完整安装教程图文", "给办公软件教程写一篇详细学习图文内容", "给编程开发教程写一篇完整推荐图文内容", "给AI工具合集写一篇详细推荐图文内容", "给视频剪辑插件写一篇完整安装教程图文", "给设计教程资料写一篇详细学习图文内容", "给新媒体运营教程写一篇完整入门图文", "给电商运营教程写一篇详细学习图文内容", "给手机摄影修图教程写一篇完整技巧图文", "给考研资料包写一篇分享推荐图文", "给PPT模板写一篇干货分享图文", "给设计素材写一篇分享推荐图文", "给办公教程写一篇干货分享图文", "给编程教程写一篇分享推荐图文", "给AI工具写一篇干货分享图文", "给学习资料写一篇分享推荐图文", "给教辅资料写一篇干货分享图文", "给考研专项资料包写一篇分享推荐", "给公考省考资料写一篇干货分享图文", "给教资备考资料写一篇分享推荐图文", "给职业资格证资料写一篇干货分享", "给语言学习资料写一篇分享推荐图文", "给中小学教辅资料写一篇干货分享图文", "给课件教案模板写一篇分享推荐图文", "给简历模板写一篇干货分享图文", "给PPT模板写一篇分享推荐图文", "给设计素材包写一篇干货分享图文", "给PS预设插件写一篇分享推荐图文", "给办公软件教程写一篇干货分享图文", "给编程开发教程写一篇分享推荐图文", "给AI工具合集写一篇干货分享图文", "给视频剪辑插件写一篇分享推荐图文", "给设计教程资料写一篇干货分享图文", "给新媒体运营教程写一篇分享推荐", "给电商运营教程写一篇干货分享图文", "给手机摄影修图教程写一篇分享推荐", "给兴趣技能教程写一篇干货分享图文", "给办公效率脚本写一篇分享推荐图文", "给设计辅助工具写一篇干货分享图文", "给编程实用脚本写一篇分享推荐图文", "给批量处理工具写一篇干货分享图文", "给数据采集工具写一篇分享推荐图文", "给少儿教辅资料写一篇干货分享图文", "给早教教案资料写一篇分享推荐图文", "给家长辅导话术写一篇干货分享图文", "给考研专项资料包写一篇详细分享推荐", "给公考省考资料写一篇完整干货分享图文", "给教资备考资料写一篇详细分享推荐图文", "给职业资格证资料写一篇完整干货分享", "给语言学习资料写一篇详细分享推荐图文", "给中小学教辅资料写一篇完整干货分享图文", "给课件教案模板写一篇详细分享推荐图文", "给简历模板写一篇完整干货分享图文内容", "给PPT模板写一篇详细分享推荐图文内容", "给设计素材包写一篇完整干货分享图文", "给PS预设插件写一篇详细分享推荐图文", "给办公软件教程写一篇完整干货分享图文内容", "给编程开发教程写一篇详细分享推荐图文内容", "给AI工具合集写一篇完整干货分享图文内容", "给视频剪辑插件写一篇详细分享推荐图文", "给设计教程资料写一篇完整干货分享图文内容", "给新媒体运营教程写一篇详细分享推荐图文", "给电商运营教程写一篇完整干货分享图文内容", "给手机摄影修图教程写一篇详细分享推荐图文"],
        dl = ["给美妆护肤写一篇分享推荐图文", "给穿搭时尚写一篇入门图文", "给美食探店写一篇推荐图文", "给旅游攻略写一篇使用指南", "给家居好物写一篇推荐图文", "给数码产品写一篇测评图文", "给健身教程写一篇学习图文", "给职场技能写一篇干货分享"],
        Nl = () => {
          const He = N.value ? 4 : 8;
          if (dl.length >= He) return dl.slice(0, He);
          {
            const It = (da => [...da].sort(() => Math.random() - .5))(zt).filter(da => !dl.includes(da)).slice(0, He - dl.length);
            return [...dl, ...It]
          }
        },
        kn = () => {
          const He = zt.filter(da => da.length === 15 || da.length === 16);
          return (da => [...da].sort(() => Math.random() - .5))(He)[0] || "给考研专项资料包写一篇详细介绍图文内容"
        },
        Cn = p(kn()),
        ll = p(Nl()),
        Ul = Le(() => ll.value),
        _l = p([]),
        Tn = p(["全部"]),
        Dn = p("全部"),
        An = p(!1),
        dn = p(new Map),
        $n = Le(() => N.value ? 5 : 9),
        Xe = async () => {
          try {
            const G = await lp(1);
            let It = [];
            if (G && typeof G == "object" ? Array.isArray(G) ? It = G : G.data && Array.isArray(G.data) ? It = G.data : G.rows && Array.isArray(G.rows) ? It = G.rows : G.list && Array.isArray(G.list) && (It = G.list) : Array.isArray(G) && (It = G), Array.isArray(It) && It.length > 0) {
              const la = It.filter(Aa => typeof Aa == "object" && Aa !== null && "status" in Aa ? Aa.status === 0 : !0).sort((Aa, Kl) => {
                if (typeof Aa == "object" && typeof Kl == "object") {
                  const ql = Aa.sort !== void 0 ? Aa.sort : 0,
                    il = Kl.sort !== void 0 ? Kl.sort : 0;
                  return ql - il
                }
                return 0
              }).map(Aa => typeof Aa == "string" ? Aa : Aa && typeof Aa == "object" && Aa.name ? (Aa.id !== void 0 && dn.value.set(Aa.name, Aa.id), Aa.name) : Aa && typeof Aa == "object" && Aa.title ? (Aa.id !== void 0 && dn.value.set(Aa.title, Aa.id), Aa.title) : String(Aa));
              Tn.value = ["全部", ...la.filter(Aa => Aa !== "全部")]
            } else Tn.value = ["全部"]
          } catch (He) {
            console.error("加载精选案例分类失败:", He), Tn.value = ["全部"]
          }
        }, se = He => {
          Dn.value = He, Tt()
        }, Tt = async () => {
          try {
            const He = {
                type: 1,
                type_id: Dn.value === "全部" ? 0 : dn.value.get(Dn.value) || 0,
                title: "",
                page: 1,
                size: 6
              },
              G = await op(He);
            let It = [];
            if (G && typeof G == "object" && (G.rows && Array.isArray(G.rows) ? It = G.rows : G.data && typeof G.data == "object" ? G.data.rows && Array.isArray(G.data.rows) ? It = G.data.rows : Array.isArray(G.data) && (It = G.data) : Array.isArray(G) && (It = G)), It && It.length > 0) {
              const da = It.slice(0, 6);
              _l.value = da.map(na => {
                let la = "";
                if (na.images) {
                  if (Array.isArray(na.images) && na.images.length > 0) la = na.images[0];
                  else if (typeof na.images == "string") {
                    const Za = na.images.trim();
                    if (Za.startsWith("[") && Za.endsWith("]")) try {
                      const hl = JSON.parse(Za);
                      Array.isArray(hl) && hl.length > 0 && (la = hl[0])
                    } catch {
                      la = Za
                    } else la = Za
                  }
                }
                if ((!la || la.trim() === "") && (la = na.cover || na.image || na.img || ""), la && typeof la == "string" && la.startsWith("//") && (la = "https:" + la), la && typeof la == "string" && la.startsWith("/") && !la.startsWith("http://") && !la.startsWith("https://") && (la.includes("://") || (la = "https://api.aichaoer.cn" + la)), !la || la.trim() === "") return null;
                const Aa = na.first_name || na.second_name || na.category || na.category_name || na.type_name || "默认",
                  Kl = [];
                if (na.desc) {
                  const Za = na.desc.match(/#[^#\s\n\r]+/g);
                  Za && Kl.push(...Za.map(hl => hl.replace("#", "")))
                }
                let ql = [];
                if (na.images) {
                  if (Array.isArray(na.images)) ql = na.images.map(Za => typeof Za == "string" ? Za.startsWith("//") ? "https:" + Za : Za.startsWith("/") && !Za.includes("://") ? "https://api.aichaoer.cn" + Za : Za : Za).filter(Boolean);
                  else if (typeof na.images == "string") {
                    const Za = na.images.trim();
                    if (Za.startsWith("[") && Za.endsWith("]")) try {
                      const hl = JSON.parse(Za);
                      Array.isArray(hl) && (ql = hl.map(Yl => typeof Yl == "string" ? Yl.startsWith("//") ? "https:" + Yl : Yl.startsWith("/") && !Yl.includes("://") ? "https://api.aichaoer.cn" + Yl : Yl : Yl).filter(Boolean))
                    } catch {
                      ql = [Za]
                    } else ql = [Za]
                  }
                }
                ql.length === 0 && la && (ql = [la]);
                let il = na.usage || na.use_count || na.count || 0;
                return (!il || il === 0) && (il = Math.floor(Math.random() * 1001) + 1e3), {
                  id: na.id,
                  title: na.title || na.name || "",
                  image: la,
                  cover: la,
                  images: ql,
                  category: Aa,
                  tags: Kl.length > 0 ? Kl : ["案例展示", "热门推荐"],
                  usage: il,
                  isNew: na.is_new || na.isNew || !1,
                  isHot: na.is_hot || na.isHot || !1,
                  originalData: na
                }
              }).filter(Boolean), _l.value.length === 0 ? _l.value = Ht() : _l.value.length < 6
            } else _l.value = Ht()
          } catch (He) {
            console.error("加载热门模板失败:", He), _l.value = Ht()
          }
        }, Ht = () => [{
          id: "placeholder-1",
          title: "如何快速拉近与他人的距离？",
          image: "https://picsum.photos/seed/yijuhua1/600/800",
          cover: "https://picsum.photos/seed/yijuhua1/600/800",
          images: ["https://picsum.photos/seed/yijuhua1/600/800"],
          category: "精选案例",
          tags: ["案例展示", "热门推荐"],
          originalData: {}
        }, {
          id: "placeholder-2",
          title: "让人惊艳的AI产品",
          image: "https://picsum.photos/seed/zhiding/600/800",
          cover: "https://picsum.photos/seed/zhiding/600/800",
          images: ["https://picsum.photos/seed/zhiding/600/800"],
          category: "精选案例",
          tags: ["案例展示", "热门推荐"],
          originalData: {}
        }, {
          id: "placeholder-3",
          title: "高级感封面设计！",
          image: "https://picsum.photos/seed/yijuhua3/600/800",
          cover: "https://picsum.photos/seed/yijuhua3/600/800",
          images: ["https://picsum.photos/seed/yijuhua3/600/800"],
          category: "精选案例",
          tags: ["案例展示", "热门推荐"],
          originalData: {}
        }, {
          id: "placeholder-4",
          title: "优质封面设计指南",
          image: "https://picsum.photos/seed/yijuhua4/600/800",
          cover: "https://picsum.photos/seed/yijuhua4/600/800",
          images: ["https://picsum.photos/seed/yijuhua4/600/800"],
          category: "精选案例",
          tags: ["案例展示", "热门推荐"],
          originalData: {}
        }, {
          id: "placeholder-5",
          title: "做内容运营必备的10个工具",
          image: "https://picsum.photos/seed/yijuhua5/600/800",
          cover: "https://picsum.photos/seed/yijuhua5/600/800",
          images: ["https://picsum.photos/seed/yijuhua5/600/800"],
          category: "精选案例",
          tags: ["案例展示", "热门推荐"],
          originalData: {}
        }, {
          id: "placeholder-6",
          title: "如何做好一款产品？",
          image: "https://picsum.photos/seed/yijuhua6/600/800",
          cover: "https://picsum.photos/seed/yijuhua6/600/800",
          images: ["https://picsum.photos/seed/yijuhua6/600/800"],
          category: "精选案例",
          tags: ["案例展示", "热门推荐"],
          originalData: {}
        }], Pa = p(2), Va = Le(() => {
          if (!Array.isArray(_l.value)) return [];
          const He = N.value ? Pa.value : 6;
          return _l.value.slice(0, He)
        }), X = () => {
          const He = Math.min(_l.value.length, 6);
          Pa.value = Math.min(Pa.value + 4, He)
        }, le = He => He >= 1e3 ? (He / 1e3).toFixed(1) + "k" : He.toString(), ot = p(-1), vt = He => {
          if (!N.value) return;
          const G = He.target;
          !G.closest(".card-image-wrapper") && !G.closest(".card-image-buttons-mobile") && (ot.value = -1)
        }, bt = p(!1), Jt = p({
          title: "",
          content: "",
          tags: [],
          images: [],
          editTime: "",
          comments: []
        }), Ra = p({
          name: "",
          avatar: ""
        }), Ca = Le(() => ({
          ...Jt.value,
          user: Ra.value
        })), Ba = p(null), Qa = ["小雨的日常", "阳光宝贝", "小猫咪爱吃鱼", "咖啡不加糖", "午后时光", "星星点灯", "月亮不睡", "爱吃甜食的猫", "周末宅家", "夏日清风", "秋日私语", "冬日暖阳", "春天的风", "夏天的雨", "秋天的叶", "追风少年", "青春无敌", "时光荏苒", "岁月如歌", "梦想家"], rl = {
          默认: ["生活好物", "效率提升", "干货分享", "实用技巧", "场景描述", "必看攻略", "收藏推荐"],
          设计: ["设计灵感", "配色参考", "排版技巧", "封面设计", "设计教程", "创意设计", "设计干货"],
          运营: ["运营技巧", "内容创作", "账号运营", "数据分析", "内容传播秘籍", "热门话题", "优质打造"],
          成长: ["自我提升", "成长记录", "学习图文", "日常分享", "心态管理", "坚持打卡", "生活记录"]
        }, sa = () => {
          const He = Math.floor(Math.random() * Qa.length);
          return {
            name: Qa[He],
            avatar: `https://picsum.photos/seed/user-${He}-${Date.now()}/40/40`
          }
        }, Ga = He => {
          const G = [`关于 ${He}，下面整理一份实用要点参考。

01 基础准备
- 明确目标
- 列出关键步骤
- 准备好所需工具

02 实操流程
- 按顺序逐步完成
- 及时记录遇到的问题
- 参考案例不断优化

03 经验总结
- 复盘关键环节
- 梳理改进思路
- 输出可复制的方法

以上为内容创作参考，可在此基础上进一步加工。`, `${He} 主题内容框架参考：

第一部分：基础逻辑
- 为什么要做这件事？
- 可以解决哪些痛点？
- 核心价值是什么？

第二部分：实操方法
- 步骤拆解
- 使用工具
- 注意事项

第三部分：延伸建议
- 如何复用这个思路
- 可以探索的新方向
- 避坑提醒

以上为通用结构示例，可结合具体方向继续补充。`, `围绕 ${He}，整理如下要点：

✔ 关键步骤：
1. 做好前期准备
2. 按阶段推进
3. 及时复盘总结

✔ 注意事项：
- 保持耐心，持续优化
- 多参考对标案例
- 善用工具提高效率

✔ 总结：
持续输出与方法论沉淀，是这一话题中最值得关注的点。

以上内容仅供创作参考，欢迎在此基础上进一步加工。`];
          return G[Math.floor(Math.random() * G.length)]
        }, ol = (He = []) => {
          const G = ["干货满满", "原创分享", "经验总结", "避坑指南", "小白必看", "实用技巧", "效率提升", "收藏推荐", "必读", "高效生活"],
            It = [...He],
            da = 8 - It.length;
          if (da > 0) {
            const na = G.sort(() => .5 - Math.random());
            It.push(...na.slice(0, da))
          }
          return It.slice(0, Math.min(10, Math.max(5, It.length)))
        }, Sl = He => {
          const G = He.getFullYear(),
            It = String(He.getMonth() + 1).padStart(2, "0"),
            da = String(He.getDate()).padStart(2, "0");
          return `${G}-${It}-${da}`
        }, In = He => {
          const It = Sl(new Date);
          let da = [],
            na = "";
          if (He.originalData) {
            const il = He.originalData;
            il.images && Array.isArray(il.images) && il.images.length > 0 ? da = il.images.map(Za => Za && Za.startsWith("//") ? "https:" + Za : Za) : da = [He.image], na = il.desc || Ga(He.title)
          } else da = [He.image, `https://picsum.photos/seed/${encodeURIComponent(He.title)}-1/600/800`, `https://picsum.photos/seed/${encodeURIComponent(He.title)}-2/600/800`], na = Ga(He.title);
          let la = sa();
          R.value && (R.value.nickname || R.value.avatar) && (la = {
            name: R.value.nickname || la.name,
            avatar: R.value.avatar || Xl || la.avatar
          });
          const Aa = Array.isArray(He.tags) ? He.tags : [],
            Kl = rl[He.category || "默认"] || rl.默认,
            ql = ol([...new Set([...Aa, ...Kl])]);
          Ra.value = la, Jt.value = {
            title: He.title,
            content: na,
            tags: ql,
            images: da,
            editTime: It,
            comments: []
          }, Ba.value = He, bt.value = !0
        }, wo = He => {
          if (bt.value = !1, Ba.value) sl(Ba.value);
          else if (He) {
            const G = {
              title: He.title || "",
              image: He.images && He.images.length > 0 ? He.images[0] : "",
              cover: He.images && He.images.length > 0 ? He.images[0] : "",
              images: He.images || [],
              originalData: He
            };
            sl(G)
          }
        }, nn = p(!1);
      let Pn = 0;
      const Gn = He => {
          var It;
          const G = (It = He == null ? void 0 : He.dataTransfer) == null ? void 0 : It.types;
          return G ? Array.from(G).includes("Files") : !1
        },
        co = He => {
          it.value || B.value || Gn(He) && (Pn += 1, nn.value = !0)
        },
        Pt = He => {
          it.value || B.value || Gn(He) && He.dataTransfer && (He.dataTransfer.dropEffect = "copy")
        },
        yl = () => {
          Pn = Math.max(0, Pn - 1), Pn === 0 && (nn.value = !1)
        },
        Mn = async He => {
          var da;
          if (Pn = 0, nn.value = !1, it.value || B.value) return;
          const It = Array.from(((da = He.dataTransfer) == null ? void 0 : da.files) || []).find(na => na.type && na.type.startsWith("image/"));
          if (!It) {
            A.warning("请拖入图片文件");
            return
          }
          await vn({
            target: {
              files: [It]
            }
          })
        }, vn = async He => {
          var na;
          const G = (na = He.target.files) == null ? void 0 : na[0];
          if (!G) return;
          if (!G.type.startsWith("image/")) {
            A.warning("请上传图片文件");
            return
          }
          let It = G;
          if (Yo(G)) try {
            It = await _i(G), A.info("HEIC 格式已转换为 JPEG")
          } catch (la) {
            console.error("HEIC 处理失败:", la), A.error(la.message || "HEIC 格式暂不支持，请先将图片转换为 JPEG 或 PNG 格式"), W.value && (W.value.value = "");
            return
          }
          const da = new FileReader;
          da.onload = la => {
            var Aa;
            B.value = ((Aa = la.target) == null ? void 0 : Aa.result) || ""
          }, da.readAsDataURL(It), it.value = !0;
          try {
            const la = await ao(It),
              Aa = typeof la == "string" ? la : (la == null ? void 0 : la.url) || (la == null ? void 0 : la.data) || la;
            if (!Aa) throw new Error("上传失败，未返回图片地址");
            B.value = Aa, Ea.value = !1, A.success("参考图上传成功")
          } catch (la) {
            console.error("参考图上传失败:", la), A.error((la == null ? void 0 : la.message) || "参考图上传失败，请重试"), B.value = "", W.value && (W.value.value = "")
          } finally {
            it.value = !1
          }
        }, Nn = () => {
          B.value = "", Ea.value = !1, W.value && (W.value.value = ""), Te.value && (Te.value.value = "")
        }, zo = () => {
          var He;
          (He = Te.value) == null || He.click()
        }, On = () => {
          B.value && (va.value = !0)
        }, ti = He => {
          He && He.cover && (B.value = He.cover, va.value = !0)
        }, _o = He => {
          const G = (He || []).filter(Boolean);
          G.length && (nt.value === "lingxi_gallery" ? (G.length >= 2 ? (Ie.value = G[0], pe.value = G[1]) : st.value === 0 ? Ie.value = G[0] : pe.value = G[0], ft()) : B.value = G[0], Ea.value = !1)
        }, ci = async He => {
          if (!He || He.length === 0) return;
          const G = He[0];
          if (!G.type.startsWith("image/")) {
            A.warning("请上传图片文件");
            return
          }
          let It = G;
          if (Yo(G)) try {
            It = await _i(G), A.info("HEIC 格式已转换为 JPEG")
          } catch (na) {
            console.error("HEIC 处理失败:", na), A.error((na == null ? void 0 : na.message) || "HEIC 格式暂不支持，请先将图片转换为 JPEG 或 PNG 格式");
            return
          }
          if (nt.value !== "lingxi_gallery") {
            it.value = !0;
            try {
              const na = await ao(It),
                la = typeof na == "string" ? na : (na == null ? void 0 : na.url) || (na == null ? void 0 : na.data) || na;
              if (!la) throw new Error("上传失败，未返回图片地址");
              B.value = la, Ea.value = !1, A.success("参考图上传成功")
            } catch (na) {
              console.error("参考图上传失败:", na), A.error((na == null ? void 0 : na.message) || "参考图上传失败，请重试")
            } finally {
              it.value = !1
            }
            return
          }
          const da = st.value;
          da === 0 ? Be.value = !0 : xt.value = !0;
          try {
            const na = await ao(It),
              la = typeof na == "string" ? na : (na == null ? void 0 : na.url) || (na == null ? void 0 : na.data) || na;
            if (!la) throw new Error("上传失败，未返回图片地址");
            da === 0 ? Ie.value = la : pe.value = la, ft(), Ea.value = !1, A.success(da === 0 ? "封面参考图上传成功" : "内容参考图上传成功")
          } catch (na) {
            console.error("参考图上传失败:", na), A.error((na == null ? void 0 : na.message) || "参考图上传失败，请重试")
          } finally {
            da === 0 ? Be.value = !1 : xt.value = !1
          }
        }, fe = async () => {
          if (!F.value) try {
            if (navigator.clipboard) try {
              const It = await navigator.clipboard.readText();
              if (It) {
                O.value = It.trim(), A.success("粘贴成功");
                return
              } else {
                A.warning("剪贴板为空");
                return
              }
            } catch (It) {
              console.log("Clipboard API 失败，尝试 execCommand:", It)
            }
            const He = document.createElement("textarea");
            if (document.body.appendChild(He), He.focus(), He.select(), document.execCommand("paste") && He.value) O.value = He.value.trim(), A.success("粘贴成功");
            else {
              A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
              const It = document.querySelector(".theme-input");
              It && (It.focus(), It.select())
            }
            document.body.removeChild(He)
          } catch (He) {
            console.error("粘贴失败:", He), A.warning("粘贴失败，请手动粘贴"), await Da();
            const G = document.querySelector(".theme-input");
            if (G) {
              G.focus();
              try {
                G.select()
              } catch (It) {
                console.log("select 失败:", It)
              }
            }
          }
        }, q = () => {
          F.value || (O.value = "", A.success("已清空"))
        }, wt = p(!1);

      function Gt() {
        F.value || (wt.value = !0)
      }

      function za({
        content: He
      }) {
        F.value || (O.value = (He || "").trim().slice(0, 2e3))
      }
      const Ua = async () => {
        try {
          const He = await navigator.clipboard.readText();
          He && (ee.value = He)
        } catch (He) {
          console.error("粘贴失败:", He), A.error("粘贴失败，请检查剪贴板权限")
        }
      }, Ta = () => {
        if (F.value) {
          J.value = !1;
          return
        }
        O.value = ee.value, J.value = !1
      };
      oa(J, He => {
        He && (ee.value = O.value || "")
      });
      const ja = He => {
          F.value || (O.value = He)
        },
        sl = He => {
          let G = "";
          He.cover ? G = He.cover : He.images && Array.isArray(He.images) && He.images.length > 0 ? (G = He.images[0], G && G.startsWith("//") && (G = "https:" + G)) : He.image && (G = He.image), G ? (B.value = G, Ie.value = G, Ea.value = !0, y.value = !1, nt.value !== "lingxi_gallery" && (nt.value = "lingxi", ka.value = "lingxi"), A.success("已加载模板图片")) : A.warning("模板图片加载失败")
        },
        Gl = () => {
          o.push({
            path: "/make",
            query: {
              id: "2"
            }
          })
        },
        fl = () => {
          o.push("/aicopy")
        },
        Pl = He => {
          C.value = {
            ...He
          }, $(), y.value = !0, f.value = !1
        },
        on = () => {
          f.value = !1
        },
        vo = () => {
          y.value = !1
        },
        hn = async () => {
          var G, It;
          if (Ve.value || Ne.value || Oe.value || ga.value) return;
          if (!Co()) {
            s.value = !0;
            return
          }
          const He = ne.value;
          if (!He && !O.value.trim()) {
            A.warning("请输入内容主题");
            return
          }
          Ve.value = !0;
          try {
            if (y.value) try {
              await $v(((G = C.value) == null ? void 0 : G.industry) || "", {
                onEdit: () => {
                  f.value = !0
                }
              })
            } catch {
              return
            }
            const da = Math.max(1, Number(Me.value) || 1),
              na = {
                shunan: {
                  name: "一句话图文 · 普通版（大字报）",
                  per: 1,
                  count: 1
                },
                lingxi: {
                  name: "一句话图文 · 高级版（单封面）",
                  per: 5,
                  count: da
                },
                lingxi_gallery: {
                  name: "一句话图文 · 高级版（多图集）",
                  per: 4,
                  count: (Number(tt.value) || 0) * da
                }
              },
              la = na[nt.value] || na.shunan,
              Aa = Number((He == null ? void 0 : He.copyCost) || 0),
              Kl = He ? He.kind === "write" ? "AI帮写文案" : "AI仿写文案" : "";
            {
              const ql = (Number(la.count) || 0) * (Number(la.per) || 0) + Aa,
                il = Number(((It = R.value) == null ? void 0 : It.create_points) ?? 0);
              if (ql > 0 && il < ql) {
                d.value = ql, u.value = !0, Ve.value = !1;
                return
              }
            }
            try {
              await rb({
                modeName: la.name,
                count: la.count,
                perCost: la.per,
                unit: "张",
                countLabel: "配图数量",
                extraCost: Aa,
                extraLabel: Kl
              })
            } catch {
              Ve.value = !1;
              return
            }
            Ve.value = !1, await Rn();
            return
          } finally {
            Ve.value = !1
          }
        }, oo = () => {
          ta.value = !1, ha.value && o.push(ha.value).catch(He => {
            console.error("跳转失败:", He)
          })
        }, ko = () => {
          if (ba.value) {
            We(), Qt.value = !0, $t.value = !1, ba.value = !1, o.push("/works").catch(() => {});
            return
          }
          if ($t.value = !1, Ma.value) {
            Ma.value = !1;
            return
          }
          if (Qt.value) {
            Qt.value = !1;
            return
          }
          A.success("任务正在后台处理，稍后请到「我的作品」中查看"), Da(() => {
            window.location.reload()
          })
        }, Un = () => {
          We(), $t.value = !1, ba.value = !1, Da(() => {
            window.location.reload()
          })
        }, Rn = async () => {
          if (!Oe.value) {
            Oe.value = !0;
            try {
              if (!Co()) {
                s.value = !0;
                return
              }
              const He = ne.value;
              if (!He && !O.value.trim()) {
                A.warning("请输入内容主题");
                return
              }
              let G = null;
              const It = sessionStorage.getItem("pending_survey_data");
              if (It) {
                try {
                  G = JSON.parse(It)
                } catch {
                  G = null
                }
                sessionStorage.removeItem("pending_survey_data")
              }
              Ma.value = !1, $t.value = !0, Je.value = 0, ve.value = He ? He.kind === "write" ? "AI 正在撰写文案..." : "AI 正在仿写文案..." : "正在准备...", Lt.value = 0;
              let da = !1,
                na = !1;
              if (He) {
                try {
                  const la = await Ce(He);
                  ce(la), ne.value = null, F.value = !1, await Rs()
                } catch (la) {
                  $t.value = !1, Ni(la) || A.error((la == null ? void 0 : la.message) || "文案生成失败，请稍后重试");
                  return
                }
                if (!O.value.trim()) {
                  $t.value = !1, A.warning("请输入内容主题");
                  return
                }
                ve.value = "正在准备..."
              }
              try {
                const la = nt.value === "lingxi_gallery" ? Ie.value || "" : nt.value === "lingxi" ? B.value || "" : K.value || "",
                  Aa = nt.value === "lingxi_gallery" && pe.value || "",
                  Kl = 909,
                  ql = 454;
                (() => {
                  ve.value = "正在生成标题...", Xt.value = 0;
                  const El = () => {
                    if (Je.value < 33 && !da) Je.value += 1, setTimeout(El, na ? ql : Kl);
                    else if (Je.value >= 33 && !da) {
                      Je.value = 33, ve.value = "正在生成内容...", Xt.value = 1;
                      const xn = () => {
                        if (Je.value < 66 && !da) Je.value += 1, setTimeout(xn, na ? ql : Kl);
                        else if (Je.value >= 66 && !da) {
                          Je.value = 66, ve.value = "正在生成配图...", Xt.value = 2;
                          const Xn = () => {
                            Je.value < 99 && !da ? (Je.value += 1, setTimeout(Xn, na ? ql : Kl)) : Je.value >= 99 && !da && (Je.value = 99, da = !0)
                          };
                          Xn()
                        }
                      };
                      xn()
                    }
                  };
                  El()
                })();
                const Za = nt.value === "lingxi" || nt.value === "lingxi_gallery" ? ct.value : "常规语气";
                let hl = "normal";
                nt.value === "lingxi" && (hl = "pro");
                let Yl = null;
                if (y.value && C.value && (C.value.industry || C.value.targetGroup || C.value.painPoints || C.value.solution || C.value.notes || C.value.ageMode && C.value.ageMode !== "any")) {
                  const xn = {
                    industry: C.value.industry || "",
                    ageMode: C.value.ageMode || "any",
                    targetGroup: C.value.targetGroup || "",
                    painPoints: C.value.painPoints || "",
                    solution: C.value.solution || "",
                    notes: C.value.notes || ""
                  };
                  xn.ageMode === "range" && (xn.ageRange = Array.isArray(C.value.ageRange) && C.value.ageRange.length === 2 ? C.value.ageRange : [18, 30]), Yl = xn
                }
                let Cl;
                const mo = [la, Aa].filter(Boolean),
                  Jl = Math.max(1, Number(Me.value) || 1),
                  Pi = je(O.value.trim()),
                  io = nt.value === "lingxi" || nt.value === "lingxi_gallery",
                  di = () => nt.value === "lingxi_gallery" ? hf(Pi, mo, G, Za, Yl, tt.value === 0 ? void 0 : tt.value, "", {
                    yijuhua: 1,
                    persona: qd(S.value),
                    count: Jl,
                    cover_ref: la,
                    content_ref: Aa
                  }) : yf(Pi, mo, G, Za, Yl, hl, "", {
                    ...io ? {
                      yijuhua: 1
                    } : {},
                    persona: qd(S.value),
                    count: io ? Jl : 1,
                    cover_ref: la,
                    content_ref: Aa
                  });
                if (!io && Jl > 1) {
                  const El = await Promise.allSettled(Array.from({
                      length: Jl
                    }, () => di())),
                    xn = El.find(Xn => Xn.status === "fulfilled");
                  if (!xn) {
                    const Xn = El.find(vi => vi.status === "rejected");
                    throw (Xn == null ? void 0 : Xn.reason) || new Error("生成失败")
                  }
                  Cl = xn.value
                } else Cl = await di();
                if (na = !0, !Cl) throw new Error("生成失败，未返回数据");
                if (io) {
                  da = !0, await H(60), ve.value = "任务创建成功", St.value = !1, A.success("任务已创建，将自动跳转到【我的作品】"), ba.value = !0, ze();
                  return
                }
                if (Jl > 1) {
                  na = !0, da = !0, await H(60), ve.value = "任务创建成功", St.value = !1, A.success("任务已创建，30 秒后将自动跳转到【我的作品】"), ba.value = !0, ze();
                  return
                }
                let Dt = null;
                if (typeof Cl == "string") Dt = Cl;
                else if ((Cl == null ? void 0 : Cl.data) !== void 0) {
                  const El = Cl.data;
                  Dt = typeof El == "string" ? El : (El == null ? void 0 : El.id) ?? (El == null ? void 0 : El.workId) ?? (El == null ? void 0 : El.work_id) ?? (typeof El == "object" ? null : El)
                } else(Cl == null ? void 0 : Cl.id) !== void 0 ? Dt = Cl.id : (Cl == null ? void 0 : Cl.workId) !== void 0 && (Dt = Cl.workId);
                if (Dt != null && (Dt = String(Dt)), !Dt) throw new Error("生成失败，未返回作品ID");
                na = !0, da = !0, await H(60), ve.value = "生成完成！", await new Promise(El => setTimeout(El, 500)), St.value = !1, nt.value === "lingxi_gallery" && G ? sessionStorage.setItem(`survey_data_${Dt}`, JSON.stringify(G)) : hl === "pro" && G && sessionStorage.setItem(`survey_data_${Dt}`, JSON.stringify(G)), A.success("生成成功！30 秒后将自动跳转到【我的作品】"), ba.value = !0, ze()
              } catch (la) {
                console.error("生成失败:", la), $t.value = !1, St.value = !1, Ma.value = !0;
                const Aa = (la == null ? void 0 : la.message) || (la == null ? void 0 : la.msg) || "";
                Ni(la) || (Aa.includes("点数不足") || Aa.includes("余额不足") || Aa.includes("创作点数不足") ? u.value = !0 : A.error(Aa || "生成失败，请稍后重试"))
              }
            } finally {
              Oe.value = !1
            }
          }
        }, ia = async () => {
          var He;
          try {
            const G = localStorage.getItem("authToken");
            if (G && G.trim()) {
              await new Promise(It => setTimeout(It, 200));
              try {
                const It = await zl();
                It ? (R.value = {
                  ...It,
                  nickname: It.nickname || It.nickName || "用户",
                  avatar: It.avatar || It.avatarUrl || ""
                }, T.value = !0) : (R.value = {}, T.value = !1)
              } catch (It) {
                if ((It == null ? void 0 : It.code) === 999 || ((He = It == null ? void 0 : It.response) == null ? void 0 : He.code) === 999) {
                  console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), R.value = {}, T.value = !1;
                  return
                }
                console.error("获取用户信息失败:", It), R.value = {}, T.value = !1
              }
            } else R.value = {}, T.value = !1
          } catch (G) {
            console.error("检查登录状态失败:", G), T.value = !1, R.value = {}
          }
        }, kl = () => {
          const He = N.value;
          N.value = window.innerWidth <= 768, He !== N.value && (Cn.value = kn(), ll.value = Nl())
        }, sn = He => {
          He === "profile" ? (o.push("/user"), Sa.value = !1) : He === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : He === "recharge" ? (n.value = !0, Sa.value = !1) : He === "logout" && (ui(), ia(), Sa.value = !1)
        }, Co = () => !!localStorage.getItem("authToken"), Us = He => {
          R.value = He, T.value = !0, s.value = !1, A.success("登录成功"), ia()
        }, Rs = async () => {
          var He, G;
          try {
            const It = await zl();
            It && (R.value = {
              ...It,
              nickname: It.nickname || It.nickName || ((He = R.value) == null ? void 0 : He.nickname) || "用户",
              avatar: It.avatar || It.avatarUrl || ((G = R.value) == null ? void 0 : G.avatar) || ""
            })
          } catch {}
        }, js = () => {
          n.value = !0, setTimeout(() => {
            window.dispatchEvent(new CustomEvent("switch-to-personal"))
          }, 100)
        }, qs = () => {};
      return Ll(async () => {
        document.title = "火兔工具箱_一句话图文_优质图文生成", kl(), V(), Cn.value = kn(), ll.value = Nl(), await Xe(), await Tt(), await ia();
        const He = i.query.quickCopy;
        if (He) try {
          const It = `${He}_expires`,
            da = sessionStorage.getItem(It);
          if (da && Date.now() > parseInt(da)) sessionStorage.removeItem(He), sessionStorage.removeItem(It);
          else {
            const na = sessionStorage.getItem(He);
            if (na) {
              const la = JSON.parse(na);
              la.title && (O.value = la.title), la.image && (la.mode === "pro" ? (B.value = la.image, Ie.value = la.image, Ea.value = !0, nt.value = "lingxi", ka.value = "lingxi", y.value = !1) : (K.value = la.image, y.value = !1)), sessionStorage.removeItem(He), sessionStorage.removeItem(It), o.replace({
                path: "/yijuhua"
              })
            }
          }
        } catch (It) {
          console.error("读取一键同款数据失败:", It)
        }
        const G = sessionStorage.getItem("yijuhua_prefill_theme");
        G && (O.value = String(G).slice(0, 2e3), sessionStorage.removeItem("yijuhua_prefill_theme"), A.success("已从「我的提示词库」填入主题")), window.addEventListener("resize", kl), window.addEventListener("user-logout", ia), window.addEventListener("user-login-success", ia), N.value && document.addEventListener("click", vt)
      }), oa(N, He => {
        He ? document.addEventListener("click", vt) : (document.removeEventListener("click", vt), ot.value = -1)
      }), Zl(() => {
        We(), window.removeEventListener("resize", kl), window.removeEventListener("user-logout", ia), window.removeEventListener("user-login-success", ia), document.removeEventListener("click", vt)
      }), (He, G) => {
        var io, di;
        const It = $l,
          da = xl,
          na = Fn("CopyDocument"),
          la = Fn("QuestionFilled"),
          Aa = No,
          Kl = Oo,
          ql = Bo,
          il = Rl,
          Za = cn,
          hl = Ii,
          Yl = xi,
          Cl = jr,
          mo = Kn,
          Jl = Qg,
          Pi = Ur;
        return c(), v("div", sse, [a(ei, {
          title: "一句话图文",
          "is-logged-in": T.value,
          "user-info": R.value,
          "show-mobile-menu": P(Sa),
          onMenuClick: G[0] || (G[0] = Dt => Sa.value = !0),
          onLoginClick: G[1] || (G[1] = Dt => s.value = !0),
          onCommand: sn
        }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), N.value && P(Sa) ? (c(), v("div", {
          key: 0,
          class: "mobile-overlay show",
          onClick: G[2] || (G[2] = Dt => Sa.value = !1)
        })) : M("", !0), e("main", {
          class: Pe(["main-content", {
            "mobile-content": N.value
          }])
        }, [G[140] || (G[140] = ii('<div class="page-title-wrapper" data-v-815aa850><div class="main-title-row" data-v-815aa850><h1 class="main-title" data-v-815aa850> 输入你的<span class="highlight-red" data-v-815aa850>创意主题</span>或<span class="highlight-red" data-v-815aa850>提示词</span></h1></div><p class="subtitle" data-v-815aa850><span class="subtitle-line2" data-v-815aa850>一键生成优质标题、正文和配图</span></p></div>', 1)), e("div", rse, [e("div", use, [e("div", cse, [e("div", {
          class: Pe(["mode-tab", {
            active: nt.value === "shunan"
          }]),
          onClick: G[3] || (G[3] = Dt => {
            nt.value = "shunan", ka.value = "shunan"
          })
        }, " 普通版(大字报) ", 2), e("div", {
          class: Pe(["mode-tab mode-tab-pro", {
            active: nt.value === "lingxi"
          }]),
          onClick: G[4] || (G[4] = Dt => {
            nt.value = "lingxi", ka.value = "lingxi"
          })
        }, [...G[85] || (G[85] = [g(" 高级版（单封面） ", -1), e("span", {
          class: "pro-badge"
        }, "Pro", -1)])], 2), e("div", {
          class: Pe(["mode-tab mode-tab-pro mode-tab-pro-gallery", {
            active: nt.value === "lingxi_gallery"
          }]),
          onClick: G[5] || (G[5] = Dt => {
            nt.value = "lingxi_gallery", ka.value = "lingxi_gallery"
          })
        }, [...G[86] || (G[86] = [g(" 高级版（多图集） ", -1), e("span", {
          class: "pro-badge"
        }, "Max", -1)])], 2)]), e("div", dse, [a(da, {
          class: "popular-rewrite-btn",
          onClick: we
        }, {
          default: l(() => [a(It, null, {
            default: l(() => [a(P(Qo))]),
            _: 1
          }), G[87] || (G[87] = e("span", null, "AI帮写文案", -1))]),
          _: 1
        }), a(da, {
          class: "popular-rewrite-btn",
          onClick: ae
        }, {
          default: l(() => [a(It, null, {
            default: l(() => [a(na)]),
            _: 1
          }), G[88] || (G[88] = e("span", null, "AI仿写文案", -1))]),
          _: 1
        }), a(da, {
          class: "popular-rewrite-btn",
          onClick: fl
        }, {
          default: l(() => [...G[89] || (G[89] = [e("span", null, "🔥", -1), e("span", null, "AI复刻同款", -1)])]),
          _: 1
        })])]), N.value ? (c(), v("div", vse, [e("button", {
          type: "button",
          class: "yijuhua-ai-copy-mobile-btn",
          onClick: we
        }, [a(It, null, {
          default: l(() => [a(P(Qo))]),
          _: 1
        }), G[90] || (G[90] = e("span", null, "AI帮写文案", -1))]), e("button", {
          type: "button",
          class: "yijuhua-ai-copy-mobile-btn",
          onClick: ae
        }, [a(It, null, {
          default: l(() => [a(na)]),
          _: 1
        }), G[91] || (G[91] = e("span", null, "AI仿写文案", -1))])])) : M("", !0), nt.value === "shunan" ? (c(), v("div", mse, [a(os), e("div", {
          class: Pe(["imitative-input-wrapper", {
            "is-ai-copy-locked": F.value
          }])
        }, [F.value ? (c(), v("div", gse, [e("span", fse, [e("span", null, h(b.value), 1), e("button", {
          type: "button",
          class: "ai-copy-lock-eye",
          title: "预览已填信息",
          onClick: _e
        }, [a(It, null, {
          default: l(() => [a(P(Do))]),
          _: 1
        })])]), e("span", {
          class: "ai-copy-lock-actions"
        }, [e("button", {
          type: "button",
          class: "ai-copy-lock-cancel",
          onClick: U
        }, "取消"), e("button", {
          type: "button",
          class: "ai-copy-lock-cancel",
          onClick: de
        }, "重选")])])) : M("", !0), F.value ? M("", !0) : (c(), v(Ue, {
          key: 1
        }, [el(e("textarea", {
          "onUpdate:modelValue": G[6] || (G[6] = Dt => O.value = Dt),
          class: "imitative-input",
          placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
          rows: "10",
          maxlength: "2000"
        }, null, 512), [
          [En, O.value]
        ]), N.value ? M("", !0) : (c(), v("div", pse, [O.value.trim() ? (c(), v("div", {
          key: 1,
          class: "pro-input-action-btn clear-btn",
          onClick: q
        }, [...G[93] || (G[93] = [e("span", {
          class: "action-text"
        }, "清空", -1)])])) : (c(), v("div", {
          key: 0,
          class: "pro-input-action-btn",
          onClick: fe
        }, [...G[92] || (G[92] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])])), e("div", {
          class: "pro-input-action-btn import-tishici-btn",
          onClick: Gt
        }, [...G[94] || (G[94] = [e("span", {
          class: "action-text"
        }, "导入", -1)])])]))], 64)), F.value ? M("", !0) : (c(), v("div", {
          key: 2,
          class: Pe(["char-count", {
            warning: O.value.length > 1600,
            error: O.value.length >= 2e3
          }])
        }, h(O.value.length) + "/2000", 3))], 2), N.value ? (c(), v("div", yse, [e("div", hse, [e("div", bse, [e("span", {
          class: Pe(["pill-btn", {
            active: y.value
          }]),
          onClick: G[8] || (G[8] = Dt => f.value = !0)
        }, [a(It, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", wse, [g(h(y.value ? "已关联" : "关联创作"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[95] || (G[95] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[7] || (G[7] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })])], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!S.value
          }]),
          onClick: G[10] || (G[10] = Dt => w.value = !0)
        }, [a(It, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", _se, [g(h(S.value ? S.value.name : "绑定人设"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[96] || (G[96] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[9] || (G[9] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), S.value ? M("", !0) : (c(), v("span", kse, "（建议填）"))], 2)]), a(Aa, {
          disabled: re.value,
          content: "请先输入内容再点击生成",
          placement: "top"
        }, {
          default: l(() => [a(da, {
            type: "primary",
            class: "generate-button",
            onClick: hn,
            disabled: !re.value || Oe.value || ga.value || Ve.value
          }, {
            default: l(() => [...G[97] || (G[97] = [g(" 一键生成(消耗1) ", -1)])]),
            _: 1
          }, 8, ["disabled"])]),
          _: 1
        }, 8, ["disabled"])])])) : M("", !0), N.value ? M("", !0) : (c(), v("div", Cse, [e("div", Ase, [e("span", {
          class: Pe(["pill-btn", {
            active: y.value
          }]),
          onClick: G[12] || (G[12] = Dt => f.value = !0)
        }, [a(It, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", Ise, [g(h(y.value ? "已关联创作信息" : "关联创作信息"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[98] || (G[98] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[11] || (G[11] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), y.value ? M("", !0) : (c(), v("span", xse, "（建议填）"))], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!S.value
          }]),
          onClick: G[14] || (G[14] = Dt => w.value = !0)
        }, [a(It, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", Sse, [g(h(S.value ? S.value.name : "绑定人设信息"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[99] || (G[99] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[13] || (G[13] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), S.value ? M("", !0) : (c(), v("span", Ese, "（建议填）"))], 2), a(Ld, {
          modelValue: ct.value,
          "onUpdate:modelValue": G[15] || (G[15] = Dt => ct.value = Dt),
          tones: E.value
        }, null, 8, ["modelValue", "tones"])]), a(Aa, {
          disabled: re.value,
          content: "请先输入内容再点击生成",
          placement: "top"
        }, {
          default: l(() => [a(da, {
            type: "primary",
            class: "generate-button",
            onClick: hn,
            disabled: !re.value || Oe.value || ga.value || Ve.value
          }, {
            default: l(() => [...G[100] || (G[100] = [g(" 一键生成(消耗1) ", -1)])]),
            _: 1
          }, 8, ["disabled"])]),
          _: 1
        }, 8, ["disabled"])]))])) : M("", !0), nt.value === "lingxi" ? (c(), v("div", Tse, [a(os), e("div", {
          class: Pe(["imitative-input-wrapper", {
            "is-ai-copy-locked": F.value
          }])
        }, [F.value ? (c(), v("div", $se, [e("span", Pse, [e("span", null, h(b.value), 1), e("button", {
          type: "button",
          class: "ai-copy-lock-eye",
          title: "预览已填信息",
          onClick: _e
        }, [a(It, null, {
          default: l(() => [a(P(Do))]),
          _: 1
        })])]), e("span", {
          class: "ai-copy-lock-actions"
        }, [e("button", {
          type: "button",
          class: "ai-copy-lock-cancel",
          onClick: U
        }, "取消"), e("button", {
          type: "button",
          class: "ai-copy-lock-cancel",
          onClick: de
        }, "重选")])])) : M("", !0), F.value ? M("", !0) : (c(), v(Ue, {
          key: 1
        }, [el(e("textarea", {
          "onUpdate:modelValue": G[16] || (G[16] = Dt => O.value = Dt),
          class: "imitative-input",
          placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
          rows: "10",
          maxlength: "2000"
        }, null, 512), [
          [En, O.value]
        ]), N.value ? M("", !0) : (c(), v("div", Vse, [O.value.trim() ? (c(), v("div", {
          key: 1,
          class: "pro-input-action-btn clear-btn",
          onClick: q
        }, [...G[102] || (G[102] = [e("span", {
          class: "action-text"
        }, "清空", -1)])])) : (c(), v("div", {
          key: 0,
          class: "pro-input-action-btn",
          onClick: fe
        }, [...G[101] || (G[101] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])])), e("div", {
          class: "pro-input-action-btn import-tishici-btn",
          onClick: Gt
        }, [...G[103] || (G[103] = [e("span", {
          class: "action-text"
        }, "导入", -1)])])]))], 64)), F.value ? M("", !0) : (c(), v("div", {
          key: 2,
          class: Pe(["char-count", {
            warning: O.value.length > 1600,
            error: O.value.length >= 2e3
          }])
        }, h(O.value.length) + "/2000", 3))], 2), N.value ? M("", !0) : (c(), v("div", zse, [e("div", Lse, [e("input", {
          ref_key: "proFileInput",
          ref: W,
          type: "file",
          accept: "image/*",
          class: "file-input",
          onChange: vn
        }, null, 544), e("div", {
          class: Pe(["pro-reference-image-upload", {
            "has-image": B.value,
            uploading: it.value,
            "is-dragover": nn.value
          }]),
          onClick: G[17] || (G[17] = Dt => !it.value && !B.value && (yt.value = !0)),
          onDragenter: lt(co, ["prevent"]),
          onDragover: lt(Pt, ["prevent"]),
          onDragleave: lt(yl, ["prevent"]),
          onDrop: lt(Mn, ["prevent"]),
          title: "支持：从本地 / 从素材库 / 从模板库 三种方式导入封面参考图，也可以直接拖拽图片到此处"
        }, [nn.value ? (c(), v("div", Dse, "松开即可上传参考图")) : M("", !0), e("div", Mse, h(Ea.value ? "模板" : "封面"), 1), it.value ? (c(), v("div", Ose, [...G[104] || (G[104] = [e("div", {
          class: "loading-spinner"
        }, null, -1), e("div", {
          class: "loading-text"
        }, "上传中...", -1)])])) : B.value ? (c(), v("img", {
          key: 3,
          src: B.value,
          alt: "参考图",
          class: "uploaded-image"
        }, null, 8, Nse)) : (c(), v("div", Bse, [...G[105] || (G[105] = [ii('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-815aa850><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-815aa850></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-815aa850></circle><polyline points="21 15 16 10 5 21" data-v-815aa850></polyline></svg><span class="upload-placeholder-text" data-v-815aa850>上传封面参考图</span>', 2)])])), B.value && !it.value ? (c(), v("div", {
          key: 4,
          class: "remove-image",
          onClick: lt(Nn, ["stop"])
        }, [a(It, null, {
          default: l(() => [a(P(un))]),
          _: 1
        })])) : M("", !0), B.value && !it.value ? (c(), v("div", {
          key: 5,
          class: "preview-image-btn",
          onClick: lt(On, ["stop"])
        }, [a(It, null, {
          default: l(() => [a(P(Do))]),
          _: 1
        }), G[106] || (G[106] = e("span", {
          class: "preview-text"
        }, "查看", -1))])) : M("", !0)], 34), B.value && Ea.value ? (c(), v("span", Use, "已选择模板风格")) : M("", !0), B.value && !Ea.value ? (c(), v("span", Rse, "已上传封面参考图")) : M("", !0)]), e("div", jse, [e("span", {
          class: Pe(["pill-btn", {
            active: y.value
          }]),
          onClick: G[19] || (G[19] = Dt => f.value = !0)
        }, [a(It, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", qse, [g(h(y.value ? "已关联创作信息" : "关联创作信息"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[107] || (G[107] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[18] || (G[18] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), y.value ? M("", !0) : (c(), v("span", Fse, "（建议填）"))], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!S.value
          }]),
          onClick: G[21] || (G[21] = Dt => w.value = !0)
        }, [a(It, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", Wse, [g(h(S.value ? S.value.name : "绑定人设信息"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[108] || (G[108] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[20] || (G[20] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), S.value ? M("", !0) : (c(), v("span", Gse, "（建议填）"))], 2), a(Ld, {
          modelValue: ct.value,
          "onUpdate:modelValue": G[22] || (G[22] = Dt => ct.value = Dt),
          tones: E.value
        }, null, 8, ["modelValue", "tones"]), e("div", Jse, [e("span", Hse, [G[110] || (G[110] = g("创作数量", -1)), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[109] || (G[109] = [e("div", null, "创作数量代表一次生成的图文作品套数", -1), e("div", null, "1 套代表生成 1 套图文", -1), e("div", null, "2 套代表生成 2 套图文，以此类推", -1)])]),
          default: l(() => [a(It, {
            class: "page-count-label-tip",
            onClick: G[23] || (G[23] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), a(ql, {
          modelValue: Me.value,
          "onUpdate:modelValue": G[24] || (G[24] = Dt => Me.value = Dt),
          size: "small",
          class: "page-count-select article-count-select"
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(P(rt), Dt => (c(), ye(Kl, {
            key: Dt.value,
            label: Dt.label,
            value: Dt.value
          }, null, 8, ["label", "value"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])])]), e("div", Qse, [a(Aa, {
          disabled: re.value,
          content: "请先输入内容再点击生成",
          placement: "top"
        }, {
          default: l(() => [a(da, {
            type: "primary",
            class: "generate-button",
            onClick: hn,
            disabled: !re.value || Oe.value || ga.value || Ve.value
          }, {
            default: l(() => [g(" 一键生成(消耗" + h(5 * (Number(Me.value) || 1)) + ") ", 1)]),
            _: 1
          }, 8, ["disabled"])]),
          _: 1
        }, 8, ["disabled"])])])), N.value ? (c(), v("div", Kse, [e("div", {
          class: Pe(["mobile-image-upload-btn gallery-mobile-upload-row", {
            "has-image": B.value,
            uploading: it.value
          }])
        }, [e("input", {
          ref_key: "mobileProFileInput",
          ref: Te,
          type: "file",
          accept: "image/*",
          class: "mobile-file-input",
          onChange: vn
        }, null, 544), it.value ? (c(), v("div", Yse, [...G[111] || (G[111] = [e("div", {
          class: "loading-spinner"
        }, null, -1)])])) : B.value ? (c(), v("div", {
          key: 2,
          class: "mobile-uploaded-image-wrapper",
          onClick: lt(zo, ["stop"])
        }, [e("img", {
          src: B.value,
          alt: "参考图",
          class: "mobile-uploaded-image"
        }, null, 8, Xse), e("div", {
          class: "mobile-remove-image",
          onClick: lt(Nn, ["stop"])
        }, [a(It, null, {
          default: l(() => [a(P(un))]),
          _: 1
        })])])) : (c(), v("div", {
          key: 1,
          class: "mobile-upload-placeholder",
          onClick: G[25] || (G[25] = lt(Dt => yt.value = !0, ["stop"]))
        }, [...G[112] || (G[112] = [e("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [e("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2"
        }), e("circle", {
          cx: "8.5",
          cy: "8.5",
          r: "1.5"
        }), e("polyline", {
          points: "21 15 16 10 5 21"
        })], -1)])])), e("div", Zse, [e("div", ere, [e("span", {
          class: Pe(["pill-btn", {
            active: y.value
          }]),
          onClick: G[27] || (G[27] = Dt => f.value = !0)
        }, [a(It, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", tre, [g(h(y.value ? "已关联" : "关联创作"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[113] || (G[113] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[26] || (G[26] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })])], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!S.value
          }]),
          onClick: G[29] || (G[29] = Dt => w.value = !0)
        }, [a(It, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", are, [g(h(S.value ? S.value.name : "绑定人设"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[114] || (G[114] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[28] || (G[28] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), S.value ? M("", !0) : (c(), v("span", lre, "（建议填）"))], 2)]), B.value ? (c(), v("span", nre, h(Ea.value ? "模板已选择" : "已上传"), 1)) : M("", !0), B.value ? (c(), ye(It, {
          key: 1,
          class: "mobile-template-preview-icon",
          onClick: lt(On, ["stop"])
        }, {
          default: l(() => [a(P(Do))]),
          _: 1
        })) : M("", !0)])], 2), a(Aa, {
          disabled: re.value,
          content: "请先输入内容再点击生成",
          placement: "top"
        }, {
          default: l(() => [a(da, {
            type: "primary",
            class: "generate-button",
            onClick: hn,
            disabled: !re.value || Oe.value || ga.value || Ve.value
          }, {
            default: l(() => [...G[115] || (G[115] = [g(" 一键生成(消耗5) ", -1)])]),
            _: 1
          }, 8, ["disabled"])]),
          _: 1
        }, 8, ["disabled"])])) : M("", !0)])) : M("", !0), nt.value === "lingxi_gallery" ? (c(), v("div", ore, [a(os), e("div", {
          class: Pe(["imitative-input-wrapper", {
            "is-ai-copy-locked": F.value
          }])
        }, [F.value ? (c(), v("div", ire, [e("span", sre, [e("span", null, h(b.value), 1), e("button", {
          type: "button",
          class: "ai-copy-lock-eye",
          title: "预览已填信息",
          onClick: _e
        }, [a(It, null, {
          default: l(() => [a(P(Do))]),
          _: 1
        })])]), e("span", {
          class: "ai-copy-lock-actions"
        }, [e("button", {
          type: "button",
          class: "ai-copy-lock-cancel",
          onClick: U
        }, "取消"), e("button", {
          type: "button",
          class: "ai-copy-lock-cancel",
          onClick: de
        }, "重选")])])) : M("", !0), F.value ? M("", !0) : (c(), v(Ue, {
          key: 1
        }, [el(e("textarea", {
          "onUpdate:modelValue": G[30] || (G[30] = Dt => O.value = Dt),
          class: "imitative-input",
          placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
          rows: "10",
          maxlength: "2000"
        }, null, 512), [
          [En, O.value]
        ]), N.value ? M("", !0) : (c(), v("div", rre, [O.value.trim() ? (c(), v("div", {
          key: 1,
          class: "pro-input-action-btn clear-btn",
          onClick: q
        }, [...G[117] || (G[117] = [e("span", {
          class: "action-text"
        }, "清空", -1)])])) : (c(), v("div", {
          key: 0,
          class: "pro-input-action-btn",
          onClick: fe
        }, [...G[116] || (G[116] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])])), e("div", {
          class: "pro-input-action-btn import-tishici-btn",
          onClick: Gt
        }, [...G[118] || (G[118] = [e("span", {
          class: "action-text"
        }, "导入", -1)])])]))], 64)), F.value ? M("", !0) : (c(), v("div", {
          key: 2,
          class: Pe(["char-count", {
            warning: O.value.length > 1600,
            error: O.value.length >= 2e3
          }])
        }, h(O.value.length) + "/2000", 3))], 2), N.value ? M("", !0) : (c(), v("div", ure, [e("div", cre, [e("div", dre, [e("div", {
          class: Pe(["pro-reference-image-upload", {
            "has-image": Ie.value,
            uploading: Be.value
          }]),
          onClick: G[33] || (G[33] = Dt => !Be.value && (st.value = 0, yt.value = !0))
        }, [Be.value ? (c(), v("div", vre, [...G[119] || (G[119] = [e("div", {
          class: "loading-spinner"
        }, null, -1), e("div", {
          class: "loading-text"
        }, "上传中...", -1)])])) : Ie.value ? (c(), v(Ue, {
          key: 2
        }, [e("img", {
          src: Ie.value,
          alt: "封面参考图",
          class: "uploaded-image"
        }, null, 8, gre), e("div", {
          class: "remove-image",
          onClick: G[31] || (G[31] = lt(Dt => {
            Ie.value = "", ft()
          }, ["stop"]))
        }, [a(It, null, {
          default: l(() => [a(P(un))]),
          _: 1
        })]), e("div", {
          class: "preview-image-btn",
          onClick: G[32] || (G[32] = lt(Dt => (Yt.value = Ie.value) && (va.value = !0), ["stop"]))
        }, [a(It, null, {
          default: l(() => [a(P(Do))]),
          _: 1
        }), G[121] || (G[121] = e("span", {
          class: "preview-text"
        }, "查看", -1))])], 64)) : (c(), v("div", mre, [...G[120] || (G[120] = [ii('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-815aa850><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-815aa850></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-815aa850></circle><polyline points="21 15 16 10 5 21" data-v-815aa850></polyline></svg><span class="upload-placeholder-text" data-v-815aa850>上传封面参考图</span>', 2)])]))], 2)]), e("div", fre, [e("div", {
          class: Pe(["pro-reference-image-upload", {
            "has-image": pe.value,
            uploading: xt.value
          }]),
          onClick: G[36] || (G[36] = Dt => !xt.value && (st.value = 1, yt.value = !0))
        }, [xt.value ? (c(), v("div", pre, [...G[122] || (G[122] = [e("div", {
          class: "loading-spinner"
        }, null, -1), e("div", {
          class: "loading-text"
        }, "上传中...", -1)])])) : pe.value ? (c(), v(Ue, {
          key: 2
        }, [e("img", {
          src: pe.value,
          alt: "内容参考图",
          class: "uploaded-image"
        }, null, 8, hre), e("div", {
          class: "remove-image",
          onClick: G[34] || (G[34] = lt(Dt => {
            pe.value = "", ft()
          }, ["stop"]))
        }, [a(It, null, {
          default: l(() => [a(P(un))]),
          _: 1
        })]), e("div", {
          class: "preview-image-btn",
          onClick: G[35] || (G[35] = lt(Dt => (Yt.value = pe.value) && (va.value = !0), ["stop"]))
        }, [a(It, null, {
          default: l(() => [a(P(Do))]),
          _: 1
        }), G[124] || (G[124] = e("span", {
          class: "preview-text"
        }, "查看", -1))])], 64)) : (c(), v("div", yre, [...G[123] || (G[123] = [ii('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-815aa850><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-815aa850></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-815aa850></circle><polyline points="21 15 16 10 5 21" data-v-815aa850></polyline></svg><span class="upload-placeholder-text" data-v-815aa850>上传内容参考图</span>', 2)])]))], 2)])]), e("div", bre, [e("span", wre, [G[126] || (G[126] = g("配图页数", -1)), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[125] || (G[125] = [e("div", null, "配图页数代表生成作品配图的数量", -1), e("div", null, "1 则代表作品配图 1 张图", -1), e("div", null, "2 则代表作品配图 2 张图，以此类推", -1)])]),
          default: l(() => [a(It, {
            class: "page-count-label-tip",
            onClick: G[37] || (G[37] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), a(ql, {
          modelValue: tt.value,
          "onUpdate:modelValue": G[38] || (G[38] = Dt => tt.value = Dt),
          size: "small",
          class: "page-count-select"
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(P(qe), Dt => (c(), ye(Kl, {
            key: Dt.value,
            label: Dt.label,
            value: Dt.value
          }, null, 8, ["label", "value"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])]), Ie.value && pe.value ? (c(), v("span", _re, "已上传封面参考图与内容参考图")) : Ie.value ? (c(), v("span", kre, "已上传封面参考图（内容参考图可选）")) : M("", !0)])), e("div", Cre, [N.value ? (c(), v("div", {
          key: 0,
          class: Pe(["mobile-image-upload-btn gallery-mobile-upload-row", {
            "has-image": B.value,
            uploading: it.value
          }])
        }, [e("input", {
          ref_key: "mobileProFileInput",
          ref: Te,
          type: "file",
          accept: "image/*",
          class: "mobile-file-input",
          onChange: vn
        }, null, 544), it.value ? (c(), v("div", Are, [...G[127] || (G[127] = [e("div", {
          class: "loading-spinner"
        }, null, -1)])])) : B.value ? (c(), v("div", {
          key: 2,
          class: "mobile-uploaded-image-wrapper",
          onClick: lt(zo, ["stop"])
        }, [e("img", {
          src: B.value,
          alt: "参考图",
          class: "mobile-uploaded-image"
        }, null, 8, Ire), e("div", {
          class: "mobile-remove-image",
          onClick: lt(Nn, ["stop"])
        }, [a(It, null, {
          default: l(() => [a(P(un))]),
          _: 1
        })])])) : (c(), v("div", {
          key: 1,
          class: "mobile-upload-placeholder",
          onClick: G[39] || (G[39] = lt(Dt => yt.value = !0, ["stop"]))
        }, [...G[128] || (G[128] = [e("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [e("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2"
        }), e("circle", {
          cx: "8.5",
          cy: "8.5",
          r: "1.5"
        }), e("polyline", {
          points: "21 15 16 10 5 21"
        })], -1)])])), e("div", xre, [e("div", Sre, [e("span", {
          class: Pe(["pill-btn", {
            active: y.value
          }]),
          onClick: G[41] || (G[41] = Dt => f.value = !0)
        }, [a(It, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", Ere, [g(h(y.value ? "已关联" : "关联创作"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[129] || (G[129] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[40] || (G[40] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })])], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!S.value
          }]),
          onClick: G[43] || (G[43] = Dt => w.value = !0)
        }, [a(It, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", Tre, [g(h(S.value ? S.value.name : "绑定人设"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[130] || (G[130] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[42] || (G[42] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), S.value ? M("", !0) : (c(), v("span", $re, "（建议填）"))], 2)]), B.value ? (c(), v("span", Pre, h(Ea.value ? "模板已选择" : "已上传"), 1)) : M("", !0), B.value ? (c(), ye(It, {
          key: 1,
          class: "mobile-template-preview-icon",
          onClick: lt(On, ["stop"])
        }, {
          default: l(() => [a(P(Do))]),
          _: 1
        })) : M("", !0)])], 2)) : M("", !0), e("div", Vre, [e("div", zre, [N.value ? M("", !0) : (c(), v(Ue, {
          key: 0
        }, [e("span", {
          class: Pe(["pill-btn", {
            active: y.value
          }]),
          onClick: G[45] || (G[45] = Dt => f.value = !0)
        }, [a(It, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", Lre, [g(h(y.value ? "已关联创作信息" : "关联创作信息"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[131] || (G[131] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[44] || (G[44] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), y.value ? M("", !0) : (c(), v("span", Dre, "（建议填）"))], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!S.value
          }]),
          onClick: G[47] || (G[47] = Dt => w.value = !0)
        }, [a(It, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", Mre, [g(h(S.value ? S.value.name : "绑定人设信息"), 1), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[132] || (G[132] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a(It, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: G[46] || (G[46] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), S.value ? M("", !0) : (c(), v("span", Ore, "（建议填）"))], 2), a(Ld, {
          modelValue: ct.value,
          "onUpdate:modelValue": G[48] || (G[48] = Dt => ct.value = Dt),
          tones: E.value
        }, null, 8, ["modelValue", "tones"]), e("div", Bre, [e("span", Nre, [G[134] || (G[134] = g("创作数量", -1)), a(Aa, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...G[133] || (G[133] = [e("div", null, "创作数量代表一次生成的图文作品套数", -1), e("div", null, "1 套代表生成 1 套图文", -1), e("div", null, "2 套代表生成 2 套图文，以此类推", -1)])]),
          default: l(() => [a(It, {
            class: "page-count-label-tip",
            onClick: G[49] || (G[49] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(la)]),
            _: 1
          })]),
          _: 1
        })]), a(ql, {
          modelValue: Me.value,
          "onUpdate:modelValue": G[50] || (G[50] = Dt => Me.value = Dt),
          size: "small",
          class: "page-count-select article-count-select"
        }, {
          default: l(() => [(c(!0), v(Ue, null, gt(P(rt), Dt => (c(), ye(Kl, {
            key: Dt.value,
            label: Dt.label,
            value: Dt.value
          }, null, 8, ["label", "value"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])])], 64))])]), a(Aa, {
          disabled: re.value,
          content: "请先输入内容再点击生成",
          placement: "top"
        }, {
          default: l(() => [a(da, {
            type: "primary",
            class: "generate-button",
            onClick: hn,
            disabled: !re.value || Oe.value || ga.value || Ve.value
          }, {
            default: l(() => [g(" 一键生成(消耗4/图 × " + h(Number(Me.value) || 1) + "套) ", 1)]),
            _: 1
          }, 8, ["disabled"])]),
          _: 1
        }, 8, ["disabled"])])])) : M("", !0)]), e("div", Ure, [e("div", Rre, [(c(!0), v(Ue, null, gt(Ul.value, (Dt, El) => (c(), v("div", {
          key: El,
          class: "prompt-item",
          onClick: xn => ja(Dt)
        }, h(Dt), 9, jre))), 128))]), e("div", {
          class: "showcase-header"
        }, [G[136] || (G[136] = e("div", null, [e("h2", {
          class: "showcase-title"
        }, "海量模板"), e("p", {
          class: "showcase-subtitle"
        }, "探索热门创作灵感")], -1)), e("button", {
          class: "more-case-link",
          type: "button",
          onClick: Gl
        }, [...G[135] || (G[135] = [g(" 进入模板库 ", -1), e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [e("polyline", {
          points: "9 18 15 12 9 6"
        })], -1)])])]), e("div", {
          class: Pe(["category-tabs-showcase", {
            expanded: An.value
          }])
        }, [An.value ? (c(), v(Ue, {
          key: 1
        }, [(c(!0), v(Ue, null, gt(Tn.value, Dt => (c(), v("button", {
          key: Dt,
          class: Pe(["category-tab-showcase", {
            active: Dn.value === Dt
          }]),
          onClick: El => se(Dt)
        }, h(Dt), 11, Fre))), 128)), e("button", {
          class: "category-expand-btn-showcase",
          onClick: G[52] || (G[52] = Dt => An.value = !An.value),
          type: "button"
        }, [...G[138] || (G[138] = [e("span", null, "收起", -1), e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "expanded"
        }, [e("circle", {
          cx: "12",
          cy: "12",
          r: "9"
        }), e("path", {
          d: "M8 12h8"
        })], -1)])])], 64)) : (c(), v(Ue, {
          key: 0
        }, [(c(!0), v(Ue, null, gt(Tn.value.slice(0, $n.value), (Dt, El) => (c(), v("button", {
          key: Dt,
          class: Pe(["category-tab-showcase", {
            active: Dn.value === Dt
          }]),
          onClick: xn => se(Dt)
        }, h(Dt), 11, qre))), 128)), Tn.value.length > $n.value ? (c(), v("button", {
          key: 0,
          class: "category-expand-btn-showcase",
          onClick: G[51] || (G[51] = Dt => An.value = !An.value),
          type: "button"
        }, [...G[137] || (G[137] = [e("span", null, "展开", -1), e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [e("circle", {
          cx: "12",
          cy: "12",
          r: "9"
        }), e("path", {
          d: "M12 8v8"
        }), e("path", {
          d: "M8 12h8"
        })], -1)])])) : M("", !0)], 64))], 2), e("div", Wre, [(c(!0), v(Ue, null, gt(Va.value, (Dt, El) => (c(), v("div", {
          key: Dt.id || El,
          class: "template-card-showcase"
        }, [e("div", Gre, [e("img", {
          src: Dt.image,
          alt: Dt.title,
          loading: "lazy"
        }, null, 8, Jre), e("div", Hre, [e("div", Qre, [e("button", {
          class: "preview-btn-showcase",
          onClick: lt(xn => In(Dt), ["stop"])
        }, " 查看模板 ", 8, Kre), e("button", {
          class: "use-template-btn-showcase",
          onClick: lt(xn => sl(Dt), ["stop"])
        }, " 一键同款 ", 8, Yre)])])]), e("div", Xre, [e("div", Zre, [Dt.isNew ? (c(), v("span", eue, "NEW")) : M("", !0), Dt.isHot ? (c(), v("span", tue, "HOT")) : M("", !0)]), e("h3", aue, h(Dt.title), 1), e("div", lue, [e("div", nue, h(Dt.category), 1), Dt.usage ? (c(), v("div", oue, [G[139] || (G[139] = e("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2"
        }, [e("path", {
          d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        })], -1)), g(" " + h(le(Dt.usage)), 1)])) : M("", !0)])])]))), 128))]), N.value && _l.value.length > Pa.value ? (c(), v("div", iue, [e("button", {
          class: "more-templates-btn",
          onClick: X
        }, " 更多 ")])) : M("", !0)])], 2), a(Hr, {
          modelValue: bt.value,
          "onUpdate:modelValue": G[53] || (G[53] = Dt => bt.value = Dt),
          "is-mobile": N.value,
          data: Ca.value,
          title: "案例图文预览",
          onUseTemplate: wo
        }, null, 8, ["modelValue", "is-mobile", "data"]), a(il, {
          modelValue: $t.value,
          "onUpdate:modelValue": G[54] || (G[54] = Dt => $t.value = Dt),
          width: N.value ? "90vw" : "600px",
          center: "",
          "show-close": !0,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          class: "task-progress-dialog",
          onClose: ko
        }, {
          header: l(() => [ba.value ? (c(), v("div", sue, [e("div", rue, [a(It, null, {
            default: l(() => [a(P(Zo))]),
            _: 1
          })]), G[141] || (G[141] = e("span", {
            class: "task-title"
          }, "任务创建成功", -1))])) : (c(), v("div", uue, [a(It, {
            class: "task-icon"
          }, {
            default: l(() => [a(P(ev))]),
            _: 1
          }), G[142] || (G[142] = e("span", {
            class: "task-title"
          }, "任务进行中", -1))])), ba.value ? M("", !0) : (c(), v("div", cue, [e("div", due, [e("div", vue, [(c(), v("svg", {
            class: "progress-ring",
            width: N.value ? 140 : 150,
            height: N.value ? 140 : 150,
            viewBox: N.value ? "0 0 140 140" : "0 0 150 150"
          }, [G[143] || (G[143] = e("defs", null, [e("linearGradient", {
            id: "progressGradient",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%"
          }, [e("stop", {
            offset: "0%",
            style: {
              "stop-color": "#6366f1",
              "stop-opacity": "1"
            }
          }), e("stop", {
            offset: "50%",
            style: {
              "stop-color": "#8b5cf6",
              "stop-opacity": "1"
            }
          }), e("stop", {
            offset: "100%",
            style: {
              "stop-color": "#8b5cf6",
              "stop-opacity": "1"
            }
          })])], -1)), e("circle", {
            class: "progress-ring-bg",
            stroke: "rgba(99, 102, 241, 0.1)",
            "stroke-width": N.value ? 8 : 10,
            fill: "transparent",
            r: en.value,
            cx: N.value ? 70 : 75,
            cy: N.value ? 70 : 75
          }, null, 8, gue), e("circle", {
            class: "progress-ring-circle",
            stroke: "url(#progressGradient)",
            "stroke-width": N.value ? 8 : 10,
            "stroke-linecap": "round",
            fill: "transparent",
            r: en.value,
            cx: N.value ? 70 : 75,
            cy: N.value ? 70 : 75,
            style: Il({
              strokeDasharray: fa.value,
              strokeDashoffset: Ka.value
            })
          }, null, 12, fue)], 8, mue)), e("div", pue, h(Math.round(Je.value)) + "%", 1)])]), e("div", yue, h(ve.value), 1)]))]),
          footer: l(() => [ba.value ? (c(), v(Ue, {
            key: 0
          }, [a(da, {
            type: "primary",
            onClick: ko,
            class: "task-confirm-btn"
          }, {
            default: l(() => [g(h(Ja.value > 0 ? `跳转到【我的作品】（${Ja.value}s）` : "跳转到【我的作品】"), 1)]),
            _: 1
          }), a(da, {
            class: "task-confirm-btn task-secondary-btn",
            onClick: Un
          }, {
            default: l(() => [...G[146] || (G[146] = [g("继续创作", -1)])]),
            _: 1
          })], 64)) : (c(), ye(da, {
            key: 1,
            type: "primary",
            onClick: ko,
            class: "task-confirm-btn"
          }, {
            default: l(() => [...G[147] || (G[147] = [g("确定并关闭", -1)])]),
            _: 1
          }))]),
          default: l(() => [e("div", hue, [ba.value ? (c(), v("div", bue, "系统正在后台为您生成，请稍后查看，大概需要40秒-2分钟")) : M("", !0), ba.value ? M("", !0) : (c(), v("div", wue, [e("div", _ue, [e("div", {
            class: "linear-progress-fill",
            style: Il({
              width: Je.value + "%"
            })
          }, null, 4)]), e("div", kue, h(Math.round(Je.value)) + "%", 1)])), ba.value ? M("", !0) : (c(), v("div", Cue, [...G[144] || (G[144] = [e("p", null, "您的任务正在进行中，稍后在【我的作品】查看：", -1)])])), G[145] || (G[145] = e("div", {
            class: "task-links"
          }, null, -1))])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(il, {
          modelValue: va.value,
          "onUpdate:modelValue": G[55] || (G[55] = Dt => va.value = Dt),
          width: N.value ? "90vw" : "500px",
          center: "",
          "show-close": !0,
          class: "template-preview-dialog"
        }, {
          header: l(() => [e("div", Aue, [e("div", Iue, [a(It, null, {
            default: l(() => [a(P(to))]),
            _: 1
          })]), G[148] || (G[148] = e("div", {
            class: "template-preview-header-text"
          }, [e("div", {
            class: "template-preview-title"
          }, "我们将参考此模板的风格和结构设计配图"), e("div", {
            class: "template-preview-subtitle"
          }, "基于多模态AI技术为您制作")], -1))])]),
          default: l(() => [e("div", xue, [Yt.value || B.value ? (c(), v("img", {
            key: 0,
            src: Yt.value || B.value,
            alt: "模板预览",
            class: "template-preview-image"
          }, null, 8, Sue)) : M("", !0)])]),
          _: 1
        }, 8, ["modelValue", "width"]), a(il, {
          modelValue: ta.value,
          "onUpdate:modelValue": G[57] || (G[57] = Dt => ta.value = Dt),
          width: N.value ? "90vw" : "400px",
          center: "",
          "show-close": !0,
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          class: "work-complete-dialog",
          "z-index": 3e3
        }, {
          header: l(() => [e("div", Eue, [a(It, {
            class: "success-icon"
          }, {
            default: l(() => [a(P(Fg))]),
            _: 1
          }), G[149] || (G[149] = e("span", {
            class: "work-complete-title"
          }, "作品制作完毕", -1))])]),
          footer: l(() => [e("div", Tue, [a(da, {
            onClick: G[56] || (G[56] = Dt => ta.value = !1)
          }, {
            default: l(() => [...G[150] || (G[150] = [g("关闭", -1)])]),
            _: 1
          }), a(da, {
            type: "primary",
            onClick: oo
          }, {
            default: l(() => [...G[151] || (G[151] = [g("查看作品", -1)])]),
            _: 1
          })])]),
          default: l(() => [G[152] || (G[152] = e("div", {
            class: "work-complete-content"
          }, [e("p", {
            class: "work-complete-message"
          }, "您的作品已生成完成，可以前往查看")], -1))]),
          _: 1
        }, 8, ["modelValue", "width"]), a(Wn, {
          modelValue: n.value,
          "onUpdate:modelValue": G[58] || (G[58] = Dt => n.value = Dt)
        }, null, 8, ["modelValue"]), a(xb, {
          modelValue: Ye.value,
          "onUpdate:modelValue": G[59] || (G[59] = Dt => Ye.value = Dt),
          "is-mobile": N.value,
          onSelect: Ut,
          onPreview: ti
        }, null, 8, ["modelValue", "is-mobile"]), a(Cie, {
          modelValue: wt.value,
          "onUpdate:modelValue": G[60] || (G[60] = Dt => wt.value = Dt),
          "is-mobile": N.value,
          onApply: za
        }, null, 8, ["modelValue", "is-mobile"]), a(ise, {
          ref_key: "aiCopyAssistRef",
          ref: Ae,
          "flow-mode": ie.value,
          "onUpdate:flowMode": G[61] || (G[61] = Dt => ie.value = Dt),
          "is-mobile": N.value,
          "current-points": (io = R.value) == null ? void 0 : io.create_points,
          "has-existing-content": !!O.value.trim(),
          onApply: ue,
          onAutoPipeline: Re,
          onNeedLogin: G[62] || (G[62] = Dt => s.value = !0),
          onInsufficient: me,
          onRefreshUser: Rs
        }, null, 8, ["flow-mode", "is-mobile", "current-points", "has-existing-content"]), a(il, {
          modelValue: Q.value,
          "onUpdate:modelValue": G[64] || (G[64] = Dt => Q.value = Dt),
          title: te.value,
          width: N.value ? "95%" : "560px",
          class: "ai-copy-preview-dialog",
          "align-center": "",
          "append-to-body": ""
        }, {
          footer: l(() => [a(da, {
            onClick: G[63] || (G[63] = Dt => Q.value = !1)
          }, {
            default: l(() => [...G[156] || (G[156] = [g("关闭", -1)])]),
            _: 1
          })]),
          default: l(() => {
            var Dt, El, xn, Xn;
            return [((Dt = ne.value) == null ? void 0 : Dt.kind) === "write" ? (c(), v("div", $ue, [G[153] || (G[153] = e("div", {
              class: "ai-copy-preview-label"
            }, "提示词", -1)), e("div", Pue, h(ne.value.prompt || "暂无内容"), 1)])) : (c(), v(Ue, {
              key: 1
            }, [((El = ne.value) == null ? void 0 : El.mode) === "images" ? (c(), v("div", Vue, [e("div", zue, "已上传图片（" + h((ne.value.images || []).length) + " 张）", 1), e("div", Lue, [(c(!0), v(Ue, null, gt(ne.value.images || [], (vi, Vi) => (c(), v("img", {
              key: `${vi}-${Vi}`,
              src: vi,
              alt: "仿写图片"
            }, null, 8, Due))), 128))])])) : (c(), v("div", Mue, [G[154] || (G[154] = e("div", {
              class: "ai-copy-preview-label"
            }, "仿写原文", -1)), e("div", Oue, h(((xn = ne.value) == null ? void 0 : xn.content) || "暂无内容"), 1)])), (Xn = ne.value) != null && Xn.requirement ? (c(), v("div", Bue, [G[155] || (G[155] = e("div", {
              class: "ai-copy-preview-label"
            }, "仿写要求", -1)), e("div", Nue, h(ne.value.requirement), 1)])) : M("", !0)], 64))]
          }),
          _: 1
        }, 8, ["modelValue", "title", "width"]), a(no, {
          modelValue: s.value,
          "onUpdate:modelValue": G[65] || (G[65] = Dt => s.value = Dt),
          onLoginSuccess: Us
        }, null, 8, ["modelValue"]), a(mc, {
          modelValue: u.value,
          "onUpdate:modelValue": G[66] || (G[66] = Dt => u.value = Dt),
          "current-points": (di = R.value) == null ? void 0 : di.create_points,
          "required-points": d.value,
          onRecharge: js,
          onCancel: qs
        }, null, 8, ["modelValue", "current-points", "required-points"]), a(gc, {
          modelValue: w.value,
          "onUpdate:modelValue": G[67] || (G[67] = Dt => w.value = Dt),
          "bound-persona": S.value,
          onBind: z,
          onUnbind: x
        }, null, 8, ["modelValue", "bound-persona"]), a(Os, {
          modelValue: C.value,
          "onUpdate:modelValue": G[68] || (G[68] = Dt => C.value = Dt),
          visible: f.value,
          "onUpdate:visible": G[69] || (G[69] = Dt => f.value = Dt),
          mode: "dialog",
          "is-mobile": N.value,
          onConfirm: Pl,
          onCancel: on,
          onClearHistory: vo
        }, null, 8, ["modelValue", "visible", "is-mobile"]), a(ri, {
          onOpenRecharge: G[70] || (G[70] = Dt => n.value = !0),
          onOpenLogin: G[71] || (G[71] = Dt => s.value = !0)
        }), a(il, {
          modelValue: J.value,
          "onUpdate:modelValue": G[75] || (G[75] = Dt => J.value = Dt),
          title: "输入内容主题",
          width: N.value ? "90%" : "500px",
          center: "",
          class: "content-input-dialog"
        }, {
          footer: l(() => [a(da, {
            onClick: G[74] || (G[74] = Dt => J.value = !1)
          }, {
            default: l(() => [...G[159] || (G[159] = [g("取消", -1)])]),
            _: 1
          }), a(da, {
            type: "primary",
            onClick: Ta
          }, {
            default: l(() => [...G[160] || (G[160] = [g("确定", -1)])]),
            _: 1
          })]),
          default: l(() => [e("div", Uue, [a(os, {
            compact: ""
          }), e("div", Rue, [a(Za, {
            modelValue: ee.value,
            "onUpdate:modelValue": G[72] || (G[72] = Dt => ee.value = Dt),
            type: "textarea",
            placeholder: `输入主题即可生成完整图文（标题·正文·配图），适合种草、攻略、日常分享等各种内容。
例：为宝妈群体种草一款婴儿洗护套装，主打成分天然温和，育儿分享风格，画面温暖干净。
可写明：内容类型（种草/攻略/分享/科普）、目标受众、文案风格、配图氛围、要突出的卖点或故事场景。`,
            rows: 6,
            class: "dialog-content-input",
            onKeyup: gn(lt(Ta, ["ctrl"]), ["enter"])
          }, null, 8, ["modelValue", "onKeyup"])]), e("div", jue, [ee.value.trim() ? (c(), v("div", {
            key: 1,
            class: "dialog-action-btn clear-action-btn",
            onClick: G[73] || (G[73] = Dt => ee.value = "")
          }, [...G[158] || (G[158] = [e("span", {
            class: "action-text"
          }, "清空", -1)])])) : (c(), v("div", {
            key: 0,
            class: "dialog-action-btn paste-action-btn",
            onClick: Ua
          }, [...G[157] || (G[157] = [e("span", {
            class: "action-text"
          }, "粘贴", -1)])]))])])]),
          _: 1
        }, 8, ["modelValue", "width"]), M("", !0), a(Ib, {
          visible: yt.value,
          "onUpdate:visible": G[78] || (G[78] = Dt => yt.value = Dt),
          "max-files": nt.value === "lingxi_gallery" ? 2 : 1,
          "slot-labels": nt.value === "lingxi_gallery" ? ["封面参考图", "内容参考图"] : [],
          "max-slot-index": nt.value === "lingxi_gallery" ? st.value : null,
          "show-material-library-entry": "",
          "material-library-entry-text": "从素材库选择1张参考图",
          "show-template-library-entry": "",
          "template-library-entry-text": "从模板库选择封面参考图",
          onConfirm: ci,
          onOpenMaterialLibrary: Nt,
          onOpenTemplateLibrary: dt,
          onReceiveMobile: _o
        }, null, 8, ["visible", "max-files", "slot-labels", "max-slot-index"]), a(il, {
          modelValue: Z.value,
          "onUpdate:modelValue": G[84] || (G[84] = Dt => Z.value = Dt),
          title: "从我的素材库选择图片",
          width: N.value ? "96%" : "960px",
          class: "material-library-dialog yijuhua-material-library-dialog",
          "destroy-on-close": "",
          "append-to-body": "",
          onOpened: Kt
        }, {
          footer: l(() => [e("span", ace, "已选 " + h(Qe.value.length) + "/1 张", 1), a(da, {
            onClick: G[83] || (G[83] = Dt => Z.value = !1)
          }, {
            default: l(() => [...G[175] || (G[175] = [g("取消", -1)])]),
            _: 1
          }), a(da, {
            type: "primary",
            disabled: Qe.value.length === 0,
            onClick: Ke
          }, {
            default: l(() => [...G[176] || (G[176] = [g("确定", -1)])]),
            _: 1
          }, 8, ["disabled"])]),
          default: l(() => [Mt.value ? (c(), v("div", que, [a(It, {
            class: "is-loading"
          }, {
            default: l(() => [a(P(Fl))]),
            _: 1
          }), G[164] || (G[164] = e("span", null, "加载中...", -1))])) : Et.value.length === 0 ? (c(), v("div", Fue, [G[166] || (G[166] = e("p", null, "暂无素材，请先上传图片到素材库", -1)), a(da, {
            type: "primary",
            onClick: et
          }, {
            default: l(() => [...G[165] || (G[165] = [g("去素材库管理", -1)])]),
            _: 1
          })])) : (c(), v("div", Wue, [e("div", Gue, [a(da, {
            type: "primary",
            link: "",
            onClick: et
          }, {
            default: l(() => [a(It, null, {
              default: l(() => [a(P(Ps))]),
              _: 1
            }), G[167] || (G[167] = g(" 进入素材库 ", -1))]),
            _: 1
          }), G[168] || (G[168] = e("span", {
            class: "material-library-toolbar-tip"
          }, "可前往素材库添加更多图片后返回此处选择", -1))]), a(Yl, {
            modelValue: j.value,
            "onUpdate:modelValue": G[79] || (G[79] = Dt => j.value = Dt),
            class: "material-library-tabs"
          }, {
            default: l(() => [a(hl, {
              label: "全部",
              name: "all"
            }), a(hl, {
              label: "未分组",
              name: "cg:none"
            }), (c(!0), v(Ue, null, gt(jt.value, Dt => (c(), ye(hl, {
              key: Dt.id,
              name: `cg:${Dt.id}`
            }, {
              label: l(() => [e("span", Jue, [e("span", Hue, h(Dt.name), 1)])]),
              _: 2
            }, 1032, ["name"]))), 128))]),
            _: 1
          }, 8, ["modelValue"]), e("div", Que, [G[174] || (G[174] = e("span", {
            class: "material-library-filter-label"
          }, "日期：", -1)), a(mo, {
            modelValue: Ee.value,
            "onUpdate:modelValue": G[80] || (G[80] = Dt => Ee.value = Dt),
            size: "small",
            class: "material-library-filter-group"
          }, {
            default: l(() => [a(Cl, {
              value: "all"
            }, {
              default: l(() => [...G[169] || (G[169] = [g("全部", -1)])]),
              _: 1
            }), a(Cl, {
              value: "today"
            }, {
              default: l(() => [...G[170] || (G[170] = [g("今日", -1)])]),
              _: 1
            }), a(Cl, {
              value: "yesterday"
            }, {
              default: l(() => [...G[171] || (G[171] = [g("昨天", -1)])]),
              _: 1
            }), a(Cl, {
              value: "week"
            }, {
              default: l(() => [...G[172] || (G[172] = [g("最近一周", -1)])]),
              _: 1
            }), a(Cl, {
              value: "custom"
            }, {
              default: l(() => [...G[173] || (G[173] = [g("指定日期", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"]), Ee.value === "custom" ? (c(), ye(Jl, {
            key: 0,
            modelValue: ht.value,
            "onUpdate:modelValue": G[81] || (G[81] = Dt => ht.value = Dt),
            type: "date",
            placeholder: "选择日期",
            "value-format": "YYYY-MM-DD",
            size: "small",
            class: "material-library-custom-date"
          }, null, 8, ["modelValue"])) : M("", !0)]), e("div", Kue, [e("div", Yue, [(c(!0), v(Ue, null, gt(Wt.value, Dt => (c(), v("div", {
            key: Dt.id,
            class: Pe(["material-library-item", {
              selected: at(Dt.url)
            }]),
            onClick: El => Fe(Dt)
          }, [e("img", {
            src: Dt.url,
            alt: Dt.name
          }, null, 8, Zue), at(Dt.url) ? (c(), v("div", ece, [a(It, null, {
            default: l(() => [a(P(Zo))]),
            _: 1
          })])) : M("", !0)], 10, Xue))), 128))])]), Ze.value > Td ? (c(), v("div", tce, [a(Pi, {
            "current-page": Bt.value,
            "onUpdate:currentPage": G[82] || (G[82] = Dt => Bt.value = Dt),
            "page-size": Td,
            total: Ze.value,
            layout: "prev, pager, next",
            small: "",
            onCurrentChange: aa
          }, null, 8, ["current-page", "total"])])) : M("", !0)]))]),
          _: 1
        }, 8, ["modelValue", "width"])])
      }
    }
  },
  nce = al(lce, [
    ["__scopeId", "data-v-815aa850"]
  ]);
const oce = {
    class: "iem-dialog"
  },
  ice = {
    class: "iem-body"
  },
  sce = {
    class: "iem-left"
  },
  rce = {
    class: "iem-canvas-scroll"
  },
  uce = ["src"],
  cce = {
    class: "iem-tools"
  },
  dce = {
    class: "iem-zoom"
  },
  vce = ["disabled"],
  mce = ["disabled"],
  gce = {
    class: "iem-right"
  },
  fce = {
    class: "iem-card"
  },
  pce = {
    class: "iem-card-head"
  },
  yce = {
    class: "iem-refbtn"
  },
  hce = {
    key: 0,
    class: "iem-refs"
  },
  bce = ["src"],
  wce = ["onClick"],
  _ce = {
    class: "iem-card"
  },
  kce = {
    class: "iem-row"
  },
  Cce = {
    class: "iem-val"
  },
  Ace = {
    class: "iem-row"
  },
  Ice = ["onClick"],
  xce = {
    class: "iem-hint"
  },
  Sce = {
    class: "iem-cost"
  },
  Ece = {
    class: "iem-actions"
  },
  Tce = ["disabled"],
  $ce = ["disabled"],
  Pce = {
    __name: "ImageEditModal",
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      recordId: {
        type: [Number, String],
        default: ""
      },
      imageIndex: {
        type: [Number, String],
        default: 0
      },
      imageUrl: {
        type: String,
        default: ""
      },
      initPrompt: {
        type: String,
        default: ""
      },
      pointCost: {
        type: [Number, String],
        default: 3
      },
      resolutionLabel: {
        type: String,
        default: "1K"
      },
      editApi: {
        type: Function,
        default: null
      }
    },
    emits: ["update:modelValue", "success"],
    setup(t, {
      emit: o
    }) {
      const i = t,
        n = o,
        s = p(null),
        u = p(null),
        d = p(""),
        f = p([]),
        y = p(20),
        w = p("#22d3ee"),
        S = ["#22d3ee", "#f43f5e", "#84cc16"],
        z = p(1),
        x = p(!1),
        C = p(!1);
      let V = null,
        $ = !1,
        N = null;
      const T = Ry([]);
      oa(() => i.modelValue, _e => {
        _e && (d.value = i.initPrompt || "", f.value = [], z.value = 1, x.value = !1, T.length = 0, Da(() => {
          var xe;
          (xe = s.value) != null && xe.complete && R()
        }))
      });

      function R() {
        const _e = s.value,
          xe = u.value;
        !_e || !xe || (xe.width = _e.naturalWidth || _e.width, xe.height = _e.naturalHeight || _e.height, V = xe.getContext("2d"), V.clearRect(0, 0, xe.width, xe.height), x.value = !1, T.length = 0)
      }

      function O(_e) {
        const xe = u.value,
          Ce = xe.getBoundingClientRect(),
          Re = (_e.clientX - Ce.left) / Ce.width * xe.width,
          nt = (_e.clientY - Ce.top) / Ce.height * xe.height;
        return {
          x: Re,
          y: nt
        }
      }

      function J() {
        if (V) try {
          T.push(V.getImageData(0, 0, u.value.width, u.value.height)), T.length > 30 && T.shift()
        } catch {}
      }

      function ee(_e) {
        var xe, Ce;
        V && ((Ce = (xe = u.value).setPointerCapture) == null || Ce.call(xe, _e.pointerId), J(), $ = !0, N = O(_e), ne(N))
      }

      function ie(_e) {
        if (!$ || !V) return;
        const xe = O(_e);
        De(N, xe), N = xe
      }

      function Ae() {
        $ = !1, N = null
      }

      function F() {
        const _e = u.value,
          xe = _e.getBoundingClientRect(),
          Ce = xe.width ? _e.width / xe.width : 1;
        return Math.max(1, y.value * Ce)
      }

      function Y() {
        V.strokeStyle = w.value, V.fillStyle = w.value, V.globalAlpha = .45, V.lineCap = "round", V.lineJoin = "round", V.lineWidth = F()
      }

      function ne(_e) {
        Y(), V.beginPath(), V.arc(_e.x, _e.y, F() / 2, 0, Math.PI * 2), V.fill(), V.globalAlpha = 1, x.value = !0
      }

      function De(_e, xe) {
        Y(), V.beginPath(), V.moveTo(_e.x, _e.y), V.lineTo(xe.x, xe.y), V.stroke(), V.globalAlpha = 1, x.value = !0
      }

      function Q() {
        if (!T.length || !V) return;
        const _e = T.pop();
        V.putImageData(_e, 0, 0), x.value = T.length > 0 || !b()
      }

      function re() {
        V && (J(), V.clearRect(0, 0, u.value.width, u.value.height), x.value = !1)
      }

      function b() {
        try {
          const _e = V.getImageData(0, 0, u.value.width, u.value.height).data;
          for (let xe = 3; xe < _e.length; xe += 4)
            if (_e[xe] !== 0) return !1;
          return !0
        } catch {
          return !1
        }
      }

      function te(_e) {
        y.value = Math.min(60, Math.max(4, y.value + (_e.deltaY < 0 ? 2 : -2)))
      }

      function we(_e) {
        z.value = Math.min(3, Math.max(.3, +(z.value + _e).toFixed(2)))
      }

      function ae(_e) {
        i.modelValue && (_e.ctrlKey || _e.metaKey) && (_e.key === "z" || _e.key === "Z") && (_e.preventDefault(), Q())
      }
      Ll(() => window.addEventListener("keydown", ae)), Zl(() => window.removeEventListener("keydown", ae));

      function me(_e) {
        return _e ? typeof _e == "string" ? _e : Array.isArray(_e) ? _e[0] || "" : _e.data ? Array.isArray(_e.data) ? _e.data[0] || "" : _e.data : _e.url ? _e.url : "" : ""
      }
      async function ce(_e) {
        const xe = Array.from(_e.target.files || []);
        _e.target.value = "";
        for (const Ce of xe) {
          if (f.value.length >= 3) {
            A.warning("参考图最多 3 张");
            break
          }
          try {
            const Re = me(await Pr(Ce));
            Re && f.value.push(Re)
          } catch {
            A.error("参考图上传失败")
          }
        }
      }

      function ue() {
        return new Promise(_e => {
          if (!x.value || b()) return _e("");
          u.value.toBlob(xe => {
            if (!xe) return _e("");
            const Ce = new File([xe], "mark.png", {
              type: "image/png"
            });
            Pr(Ce).then(Re => _e(me(Re))).catch(() => _e(""))
          }, "image/png")
        })
      }
      async function U() {
        const _e = d.value.trim();
        if (!_e) {
          A.warning("请填写修改描述");
          return
        }
        if (!i.recordId || !i.imageUrl) {
          A.error("缺少作品信息");
          return
        }
        C.value = !0;
        try {
          const xe = await ue();
          await (i.editApi || pv)({
            id: i.recordId,
            image_index: i.imageIndex,
            image_url: i.imageUrl,
            image_prompt: _e,
            mark_url: xe,
            ref_images: f.value.slice(0, 3)
          }), A.success("已提交，稍后在作品中查看修改结果"), n("success"), de(!0)
        } catch (xe) {
          A.error((xe == null ? void 0 : xe.message) || "提交失败")
        } finally {
          C.value = !1
        }
      }

      function de(_e = !1) {
        C.value && _e !== !0 || n("update:modelValue", !1)
      }
      return (_e, xe) => t.modelValue ? (c(), v("div", {
        key: 0,
        class: "iem-mask",
        onMousedown: lt(de, ["self"])
      }, [e("div", oce, [e("div", {
        class: "iem-head"
      }, [xe[5] || (xe[5] = e("div", {
        class: "iem-title-wrap"
      }, [e("span", {
        class: "iem-ico"
      }, "✎"), e("div", null, [e("div", {
        class: "iem-title"
      }, "图片编辑"), e("div", {
        class: "iem-sub"
      }, "在左侧图片上涂抹标记需要修改的区域 · 滚轮调节画笔大小 · Ctrl+Z 撤销")])], -1)), e("button", {
        class: "iem-x",
        onClick: de
      }, "✕")]), e("div", ice, [e("div", sce, [e("div", rce, [e("div", {
        class: "iem-canvas-wrap",
        style: Il({
          transform: `scale(${z.value})`
        }),
        onWheel: lt(te, ["prevent"])
      }, [e("img", {
        ref_key: "baseImg",
        ref: s,
        src: t.imageUrl,
        class: "iem-base",
        crossorigin: "anonymous",
        onLoad: R,
        alt: ""
      }, null, 40, uce), e("canvas", {
        ref_key: "maskCanvas",
        ref: u,
        class: "iem-mask-canvas",
        onPointerdown: ee,
        onPointermove: ie,
        onPointerup: Ae,
        onPointerleave: Ae
      }, null, 544)], 36)]), e("div", cce, [e("button", {
        class: "iem-tbtn",
        onClick: xe[0] || (xe[0] = Ce => we(-.1)),
        title: "缩小"
      }, "－"), e("span", dce, h(Math.round(z.value * 100)) + "%", 1), e("button", {
        class: "iem-tbtn",
        onClick: xe[1] || (xe[1] = Ce => we(.1)),
        title: "放大"
      }, "＋"), e("button", {
        class: "iem-tbtn",
        onClick: xe[2] || (xe[2] = Ce => z.value = 1),
        title: "复位"
      }, "⟳"), xe[6] || (xe[6] = e("span", {
        class: "iem-divider"
      }, null, -1)), e("button", {
        class: "iem-tbtn",
        disabled: !T.length,
        onClick: Q,
        title: "撤销 Ctrl+Z"
      }, "↶", 8, vce), e("button", {
        class: "iem-tbtn",
        disabled: !x.value,
        onClick: re,
        title: "清空标记"
      }, "🗑", 8, mce)])]), e("div", gce, [e("div", fce, [e("div", pce, [xe[7] || (xe[7] = e("span", {
        class: "iem-card-title"
      }, "✎ 修改描述", -1)), e("label", yce, [g(" 🖼 参考图 (" + h(f.value.length) + "/3) ", 1), e("input", {
        type: "file",
        accept: "image/*",
        multiple: "",
        hidden: "",
        onChange: ce
      }, null, 32)])]), el(e("textarea", {
        "onUpdate:modelValue": xe[3] || (xe[3] = Ce => d.value = Ce),
        class: "iem-desc",
        maxlength: "500",
        placeholder: `描述你想要的修改效果…

例如：
• 把衣服熨平摊在台面上，去掉乱皱和压痕，只留设计褶
• 袖子左右伸直、边缘整齐，不要波浪边
• 把标记区域换成蓝天白云`
      }, null, 512), [
        [En, d.value]
      ]), f.value.length ? (c(), v("div", hce, [(c(!0), v(Ue, null, gt(f.value, (Ce, Re) => (c(), v("div", {
        key: Re,
        class: "iem-ref"
      }, [e("img", {
        src: Ce,
        alt: ""
      }, null, 8, bce), e("span", {
        class: "iem-ref-del",
        onClick: nt => f.value.splice(Re, 1)
      }, "✕", 8, wce)]))), 128))])) : M("", !0)]), e("div", _ce, [xe[10] || (xe[10] = e("div", {
        class: "iem-card-title"
      }, "🖌 画笔设置", -1)), e("div", kce, [xe[8] || (xe[8] = e("span", {
        class: "iem-lab"
      }, "大小", -1)), el(e("input", {
        type: "range",
        min: "4",
        max: "60",
        "onUpdate:modelValue": xe[4] || (xe[4] = Ce => y.value = Ce),
        class: "iem-range"
      }, null, 512), [
        [En, y.value, void 0, {
          number: !0
        }]
      ]), e("span", Cce, h(y.value) + "px", 1)]), e("div", Ace, [xe[9] || (xe[9] = e("span", {
        class: "iem-lab"
      }, "颜色", -1)), (c(), v(Ue, null, gt(S, Ce => e("span", {
        key: Ce,
        class: Pe(["iem-swatch", {
          on: w.value === Ce
        }]),
        style: Il({
          background: Ce
        }),
        onClick: Re => w.value = Ce
      }, null, 14, Ice)), 64)), e("span", xce, h(x.value ? "已标记（局部修改）" : "未标记（改整图）"), 1)])]), e("div", Sce, [xe[11] || (xe[11] = g("🕐 消耗 ", -1)), e("b", null, h(t.pointCost), 1), g(" 点（" + h(t.resolutionLabel) + "）", 1)]), e("div", Ece, [e("button", {
        class: "iem-cancel",
        disabled: C.value,
        onClick: de
      }, "取消", 8, Tce), e("button", {
        class: "iem-ok",
        disabled: C.value,
        onClick: U
      }, h(C.value ? "提交中…" : "⚡ 立即编辑"), 9, $ce)])])])])], 32)) : M("", !0)
    }
  },
  Tb = al(Pce, [
    ["__scopeId", "data-v-8e22f61d"]
  ]),
  $b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAC8hJREFUWEe9WAlYVOUa/s42ZxZgFBSM1XBBUcQFVCw1s9xR3C1Ny+uSZd2eW9c261J6y57QSp+rPmaaWvkkanXLFJeSRTQVBwVBQLZhWIRhGGafOXPOuc9/zpxhQHChngvMw5mz/P973u/73u/9fwz+zz9JSeGKxFVTVpn9qKddFgflbLIU2m/WnT1x6OJpAOA7wsH+LL7w8HDFrPemvN8swwbXnrn5Yxhz6VB6OrBdjEstTVuyp9esIc+bjRbAeAAcA+CsDrb1j+rj13fnvlWmbazwffZPA5z/0aI9PZPjVltbrcCa7WC6ov1Bn1Wy6erZIk1HkOMmDZ05ZkvKLybGhUABjmOA4RiQNAmEggBtRvG1nE9Pz21pcWilZ/8UwJmvTH390XUT0ppq9IAxLBByCnCaAEet4U7TmeI0c37lzry8Ops02YQpwz6Ne3vqGwzBATAsYBgAhmGAAQ+kjARchsHFbb8duHw4byUAcOi5bgN8fPrI5OGbZ39vtNgUAhsELoRMYERJAed2gylf95s+u2Jr1rGrJ1F+jRg38PXHNiWncQocwOkWZkcgcQCBTcpPBtXZZdbs1IzRDQZLUbcBJo2PHT06bf4vZuB6O5vNQJA4IB4wjBf/AwBB4UAoKGBabW5Luf6022jVqCODEwP6BU1hXC4BFLoP5SB6KYokgCcBqrNKoWB77pTiysYz3QLYr19I8JTPnjmNRQfGW2oNYh6hSdCEiA3pWPiOASkjgKBJICkCgOeBMds992KAo9BSBBAyAlwuBlq0emg8UWotOlM2sqJWX9odgNiSzfO3P/JMwvrm6iYgAQNCKEMhXURw7cCK+SWyi16CF0Cj+4QPgYPT5oCm0jtg1bYAUWuD2msNWy/dKP+nJDkPlYMDIoOjx/39qQJzT0JpbzIBrZKDf0QgqAJVgHNIwnhAwUZ/XiY9hYBjbdcQWPRiiLmSjJtcxeEbzYQLKiiS+qnW5P6sqqrK0a0qDgig+8fGROQo/OkQl41hGJ6j5JE9IGzqYAgaFAI4KhIh6cUDgSVPnMTwo7CKyYcAknISys4VW85/cG6hzmA61Zl2PhSDaGi1Ujmql1rei6AIi93KBLEuZnZUYtTy4a9OJP3CewDrYsSq9MS6I0hCIFgMOSoujmO5q4ev7td8V/aKTqez/+WdBA0YrFK8MeejlC2hU2MIh9EqzCEAESoHHYuVLR57zntylhL0D4eKrPLs/AOaN3Mzb138SzsJGiwEQJWybbGm77y4AeZGk7eapXAKoe1Y6T7fKYoAmUoGLVqDofD4za01v+h2XCgpMXenijttsaGhocql22ZdCkqKjLM2moAQRA7zsiXqnRhWgUUfSRJAeHKSVsmA5zmovFB1vjC96MMTx/N+7zIH33ln3iPQJ2DZyf2Zf2g0lVn3MhUJCf1HLPhqSTZL4yq3zSEUAPqVZKcNlEibmIdtsiQUlACUB8Qm7U+DuaHVculA3rZOASbFh4ct2Pe3I9Zg2bizG37Mzjp8ZWJnVkgC/cLH83aMXDl6fWt9i1ipXj1sO24fYpFN6ZyUp6hXikAx8OupAGNj6929uD8APfPb1UdDnuw/y1jfAuW/FpjObj43otXhaGeDJHApL06aP3HDpENuhlG4HYzAXnvmfFhDoITrPsLtGUgqHjHcuNCB6isa7ga4+pMFWwavHPtmk1YvhMJlcUDu5+d35RzPf8k3zKmpqbi7T/kL4cmD0+wuVw+X2QEEIU7uSUGvYCPAaFIEjuM5YFlW6L0onBgSeB51G6lVYiCjCTCbrJB/pLA9wNnLxy97Om3OQX2jEWPtLiAJHAg5CazVCY2/Vx40FzQeUCppU2h8aFzvxLD5VF/1TKvFDm6L0wPO0+o8YZbaH0niAlhjswn0Fc1grTMDThAQGhsMof17e9olDxgOAnA354Zb529D5g7Nz94cHDNm0Kgl3yzLcBBckN1gEcBJ6k/KKaBkBGBOlqVlpEOmplWMmwWH0Qa8m/UyJ1knqdUh5kiSAJbjoLqgBrRZWjAUt7gNdaYqi9VJ94gIiBi/YgQMndwfSI/pQC6oqlAHuTvzazJPlU4SAMbGhgcu3r4oQz0sJMFYYwD0xm0aJskALjhf9JaciwVgOUFO2oqiLfF9meMwHsouVsCt9BKXvtT4rdFs+85mZW8YXK1y3sLPi4kPS12+dYb60YQw4Bg3NNY3w+WvC/iMA5rFlQ2GdAHg6ndnfpD45uT3m7TNgHGcd1JJHkRGxG7grT6pt/qYTkn7pKokaQKqC3Xwx848vVZzZ52msvZoR7lSEdSKtanTv5qzcQJxp8EAmuNFcHZX/hdXCqte8wr17BWPZY98aezjfkF+gLlZ4Fm+TSq8Dd/HJnm7gHiuvbaJF1EB2Gx2yPnyMpP9dcGy2w1NR7rS0lnJIy4v+vCJRG1xPeR8VXjx8rnCaQYAkxdgLz/l2mFTY3bHLxkOEfFhICMJ4BhxYSZ5N7G/tlkpSUokeyXJhHheNKrVBTr44V+Zxy5klyy4l9BHhQW+N278gA95J9zKvVi2QNtguHmX3eqlVL4YHhOcGr9waMiQ6YOgR29/Mdc4rp3JlJyIxJzoVnyE19O2UD/L+/kmpKeeX3xb2zV7CIgKIKRPWO/pajWdc61Id7tLs6CmlCODgpWbB02Onp747HCIHBoGOM8D50YrsLYQ+2qWb0cQQWNCVfMYB1kHr9mPfpIzRnenpeBeDN7rWmetTh6kkr8WHR/21oQ1o9VxTw0UQsuzIpO+ii/1245s4ri4aMr7tci5fd1PSU1G211r5AcF3KVZkAP5RER04BcpG58cNmpmLABSfA6tKTquPdqY9c1ZAhWJ2QZfv52x86eDeS8/KKCO993PUYcPGR55cMORZZN6hPgBY3d5C0cIubCelVZ0viZBlCNaQYLD5IArx0r2V1zQ7esT5FeO4XLSYLRQu/adqwbocovEi/N+ACHl2bHPP/fJ9P1UAAms0+11IF5L30EbxW7SthSlVRTIcAJcRpeTsOL1KhlN1rY0kR+8cOTj3Nzy7fdjtlOAS6ePCUiaF780MC5oQs9o9Wie5qMZp8u7BhYq1+NK0ErOI4U+2ukRdcmMEhjIaQooIAXWC29UwJ5XT+85l1m69qEBjhoY2mvD3hXf9BsfNdXMWcFhdwKyUV6LhESYJIQikJaSHMsDj+TIs1uA2qHkaMS9FzHkMhkBTY0tcHJHHndsz7Vp2kaDsHvwUFX8xqY5m5dunPFunblJ0EGh1yK2PJOgPm2z2KE0rwYsBjtExgRD3yEhoFBQwLo4r26KG0NtzpmiSLA57JB7vAjSt+Z9eela+Zr7gfN2EunG2NhY2Zp/P5abmBI7qtVgbhdSxAMyozIlCZdPFUP6puyapjpzY1CEf2xS8kDFxIVDISK6l+DtWDdis21HgSJxcHMsXM++DT9/pik8fe72ZIvF0vjQAJGbTt6SnDt3w/iRjI0BjhWNg7B+QGHDMZArKMg4dJXZ/Y9Tc116U6aDJEeo/JUvjZgYtSR5TQIkPN0PlCQteDqe50V3jGFQUlQDJ7fn2389VjhDpzeefxBwdzGITowc3Xf3hn3z10YMCQG3jRE2ZaVQoQ5B0ySc/+E6n/byiSfq643exVSATL40ol/g+zNWxA+ctnw4hD0SKGAgAIO6Zj2c2qWBH/deX19c3fCfBwXXKUAKqISFqxIyF2+coAyO7AkY8gwekChUDsYJGXuvwsHNF+ZU1un/6zuZWi6P9lPIU8dMi35u7roEGDYuEmx2B1w8dguOfq7Zm5tfvvphwHUKEJ3sqVCsn7Jo2I7JK4ZB3yHB4KdWAEnh4LC7oOxqDZzeeaM252z52FqDQdfZhP6UfFVMXMjG8ckDogL85JCXUZ2ddbk6xWQyGf4SgGiQQKVyZf/Y4HeGJEX0Cx8YCEp/mVC1umvN1kvZVWtLquu/vddk/jQdo/aTP98nJFBWece0rbm5ufZhwXXJoDRQD7k8Sq6QzVIHKMYqVXQIBXiF08l8f7289vfuTNadZ/4HUPdcfV/Ew2QAAAAASUVORK5CYII=",
  iAe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAACMFJREFUWEftWHtwVFcZ/75z924em4s8Ko9KaBXBmsZkuXeXTEgZo0XbjtOHD8oAorVSpa2tZWSoOtaiU9SKpa2VKRTakacC7aitFjsFulpSTPbem8DQx9THYNCxTBWbR5PN3XvP536Zs3GTbHY3AZ1xxvPf3j3nO7/zPX/fh/A/svB8cVqWpYdCoakDAwMVmqaVI2JISpkKgqC/srKyf/bs2V0HDx4MzveeCQFtbm6uSqVSl3uedyUAvB8RLwaAKURUhYhlANBDRF1CiC4p5d+klC8CQIumaX91HKdvIqDHBXThwoXTpJQ3AMDVRLQAACrHcenfAaBdCLErEom0JBKJ1DjOQklAa2pqwuFw+BpN0z4HAHGA4ecQ0SeitxCRNZgSQkSklFMQ0QAAMQJQHyImEPGJZDJ5HACoFMBFgTY0NExKp9PrEXE5AFTkCH0TAF4WQvwuFAq94Hlen5SyPxKJ9Hd3d0eEEBW6rk+WUl4FACYAXA4ADDy7zkopH5k5c+beQ4cODRQDWxBofX39u3Rd30lENVlBRPQPADgEAI/NmDHjTCmXNDU1Gb7vzw+C4DYias55MJt/j2EY308kEr2FwI4JtK6ubrau65sB4IockIfD4fBD1dXVJyYSyc3NzeW9vb2LiegrAFCn5LLpf2MYxs2F/DYv0MWLF7+zr6/vB5lI/YgS5iHiXk3T7m9tbe0uZqZi/9fV1b07FAptQsRFam9ARD9ExIccx0nnOz8KaHNzc6i7u5t98nYVNBwo28rKyjYfP368vxiIUv9ftGjR9FQq9W1EvE6d6UHEDbZt/6QkoPF4fEkQBPy6yerAPsMwNhTzoVIB5u6Lx+MziegRImri74j4eiqVWnXq1KkzI+UN02hdXV1E1/VtAPBhtbHFMIxbEonEW2MBqa+vny+EuEwI8ZcgCM51dHScHg/oaDQ6TwixExEv5XNEtMV13e+MTFvDgJqmeTUAPKqqS58QYk0ymTyc72IuneweRLQMAC4BAPatPwohnkTE/W1tbZwdSlqWZX0ZAO5WWj2TTqdXnThx4vXcw0NA1cVbiegateGXhmHcOVYkxmKxm4noawAQGYGGozhJRDvKysqOlOLXDQ0NM4Ig+DER1SutPui67qa8QKPR6KWapu0HgGoA8AFgheM4x8ZSiWmarLls1L5GRExIBs2nVgoRj2qa9uicOXM6iqUzy7LuBICvqrN87025vGBIo/F4fJmU8kH1opd1Xf90a2vr2bGAWpb1AgC8j00uhFju+/5pTdNul1Jei4gXZc8REVewZ6SUO+bNm3dmLMCxWKyWiJ4EgEkAcM73/U/kmn8IaCwW20hEXMvZofe7rru2kINZlvXbTFV5LwD0EdG1ruu+unTpUq2zszMqpVxDRFeylnMA/14IsU/X9V353EEF8p5M1WtQGNa7rsu/B1cu0N0sXDn0t2zb5ugfc2WBEhHTtkGg2c2NjY0Vnudx5lgNAAtz7uGA224YxvcSiQS717BlWdYWAPg4f8yQmofb29vvHwXUNM2nETGmgK6xbfvpiQLNATzV87wbiWgFIrL2eTHYdY7jHBwp3zTNDYj4BfV9n+M46/IBfRYRo2x5TdOub2trs88XaPb8ggULLtE0bQcRMYPixL7Htu31I+XH4/FbpZT3qO/POY4z6IrDTG9Z1q8VUfhPAK0RQmzIEhxE3GLb9sY8pr8tk3G+ob4/7zjOZ/Np9BeIyKSY/WNNe3v7eZueOwIiulFKuQIA5iptpnzf/1JHR8ezhUyPiE/Ztn3HKKCxWOyCBtPAwMASRPx8bkdARBIRt06fPn1TPh4bi8W47n9SgXvccZysG/w76k3TZNq1kjdliPIB13XvGq+PZtNTEAS3EhFH/VB6QsQ/BUFwRAhxXz4qx52E7/u7VJZgDGtd1+UCNNxHo9Ho9VxFFNBXdF1fWSjhm6bJfc98juJQKLTM87xORGQfuy434QPAm0T0DBFtb29v//NYj1cJ/ynVrjDnvcFxnNdGAWUyq+s6p4yLuVmTUq50XZfb3LzLsqyfZ1+PiKfZrADwniHBiFxCj/DjS+kILMtif2TuwNpMVlZW3nTs2LF/jgLKnWYkEtkipfwY/ymE+FUkErmjAClZm+mfWPiQeZVQyshICiG2h8Pho6WQEualUsqdAPABJeMBx3EeyNXQMJqnSPPjiKhnaFc/InLifz6fSpltCSFuIaLPEFE1EfmI+KoQgrPHgfHQPNM070LEbF5lfrE81+zD8ij/UK3xNkT8oDLBS5MmTVo9FnHmtqWnp4e56JxwOPy27/udyWTyjUJBOPI/y7Iu4x6fiLLE+Ym5c+feO5K8jOqZLMu6gnskRJyi8t5PPc+75+TJk2+PB0Ape7liIeJmRGxU+/8gpVyVL+jyAdWJ6OuI+EUFlANrq+oQJzQ3ygeamzvP87YT0WCRYRamado329ra9uXbn7ddbmxsnJpOpzdl2X4GuAcABzK+u9FxnK5StFVoT21t7dxwOHwvIi7JBiAAMFv7bsntcvYCLn9BEPxMcc7Bz0R0WNf1hysqKk7ko2nFHsD0z/f9JiK6O0tQWKyUMlFeXr66UIYoONKpra2tLisruy9nEMFYuGl7TtO0xyorKztLmcqpIGViwhSuOYdQ89x0b3l5+caWlpaeQg8tOiRTml1HRJ9CxNxGjivOK0KIVk3TjmYGaX08vI1EIune3t4wD8nC4fBFvu9/VNFHpnhVOWDOqly7uxjIUelprBepmdGHAIBr+CC5HrFYM108vFU9VFhKOTkT0dz/DBs7ZjpXnty9KIT4kW3byQs2dswFxJHa399/FRNrKWUMEcPF/DL7PyKe40EuEe02DOOl8U5eipo+HxD2uUwWqEmn04vZrIg4IzPkmkpEPLzlvp77IZ4lvUFEPGluBYCjAND5XxmN5wPNHGHatGnv6Onp4XFQJAgCKYSQvu8PVFVVdc2aNau7WE9filUmpNFSBF/oPf8HeqE1+i94u0ZnJK2/SQAAAABJRU5ErkJggg==";
const Vce = {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      "margin-right": "5px",
      color: "#2563eb"
    }
  },
  zce = {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    style: {
      "margin-right": "5px",
      color: "#ef4444"
    }
  },
  Lce = {
    key: 1,
    class: "wqr-stack"
  },
  Dce = {
    class: "wqr-content"
  },
  Mce = ["src"],
  Oce = {
    class: "wqr-tip"
  },
  Bce = {
    class: "wqr-tip__main"
  },
  Nce = {
    class: "wqr-content"
  },
  Uce = {
    key: 0,
    class: "wqr-tip__err"
  },
  Rce = ["src"],
  jce = {
    class: "wqr-tip"
  },
  qce = {
    class: "wqr-tip__main"
  },
  Fce = {
    class: "wqr-summary"
  },
  Wce = {
    key: 0,
    class: "wqr-tip__state wqr-tip__state--in"
  },
  Gce = {
    key: 1,
    class: "wqr-tip__state"
  },
  Jce = {
    __name: "WorkQrButton",
    props: {
      workId: {
        type: [String, Number],
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      inline: {
        type: Boolean,
        default: !1
      },
      tight: {
        type: Boolean,
        default: !1
      }
    },
    setup(t) {
      const o = t,
        i = gb(),
        {
          liveCodes: n,
          pendingTotal: s,
          liveCodeUserId: u,
          ensureLiveCodes: d,
          loadLiveCodes: f,
          liveCodeUrl: y,
          removeWorksFromLiveCode: w
        } = yc(),
        S = p(!1),
        z = p(""),
        x = async () => {
          const we = o.workId;
          if (!we && we !== 0) {
            A.error("作品ID不存在");
            return
          }
          const ae = `${window.location.origin}/tiaozhuan?workId=${encodeURIComponent(we)}`;
          S.value = !0, z.value = "";
          try {
            z.value = await Ln.toDataURL(ae, {
              width: 260,
              margin: 1,
              color: {
                dark: "#1f2330",
                light: "#FFFFFF"
              }
            })
          } catch {
            A.error("二维码生成失败"), S.value = !1
          }
        }, C = () => {
          if (!z.value) return;
          const we = document.createElement("a");
          we.href = z.value, we.download = `${(o.title||"作品").slice(0,20)}-二维码.png`, we.click()
        }, V = p(!1), $ = p(!1), N = p(""), T = p(""), R = p(!1), O = p(!1), J = Le(() => o.workId || o.workId === 0), ee = Le(() => J.value ? Vp({
          id: o.workId
        }) : ""), ie = Le(() => n.value.find(we => String(we.id) === String(ee.value)) || null), Ae = Le(() => J.value ? bb(o.workId) : !0), F = Le(() => {
          var we;
          return ie.value ? ie.value.id : ((we = n.value[0]) == null ? void 0 : we.id) ?? ""
        }), Y = Le(() => n.value.find(we => String(we.id) === String(F.value)) || null), ne = async () => {
          N.value = "";
          const we = y(F.value);
          if (!we) {
            T.value = "未获取到活码链接，请重新登录后再试";
            return
          }
          N.value = await Ln.toDataURL(we, {
            width: 260,
            margin: 1,
            color: {
              dark: "#1f2330",
              light: "#FFFFFF"
            }
          })
        }, De = async () => {
          if (!i.isLoggedIn) {
            A.info("登录后即可使用作品库活码"), window.dispatchEvent(new CustomEvent("open-login-dialog"));
            return
          }
          V.value = !0, $.value = !0, T.value = "";
          try {
            if (await d(), !u.value) throw new Error("未获取到用户标识，请重新登录后再试");
            J.value && !Ae.value && await wb([o.workId]), await ne()
          } catch (we) {
            T.value = (we == null ? void 0 : we.message) || "活码生成失败"
          } finally {
            $.value = !1
          }
        };
      oa([F, u], () => {
        V.value && !T.value && ne()
      });
      const Q = async () => {
        await f({
          force: !0
        }), V.value && ne()
      }, re = async () => {
        if (!(!ee.value || R.value)) {
          R.value = !0;
          try {
            await w([o.workId]), A.success("已移出活码")
          } catch (we) {
            A.error((we == null ? void 0 : we.message) || "移出失败")
          } finally {
            R.value = !1
          }
        }
      }, b = () => {
        var ae;
        if (!N.value) return;
        const we = document.createElement("a");
        we.href = N.value, we.download = `${(((ae=Y.value)==null?void 0:ae.name)||"活码").slice(0,20)}-活码.png`, we.click()
      }, te = () => {
        window.open(`${window.location.origin}/user?tab=my_live_code`, "_blank", "noopener,noreferrer")
      };
      return (we, ae) => {
        const me = xl,
          ce = Rl,
          ue = Rr;
        return c(), v(Ue, null, [t.inline ? (c(), v("span", {
          key: 0,
          class: Pe(["wqr-inline-group", {
            "wqr-inline-group--tight": t.tight
          }])
        }, [t.workId || t.workId === 0 ? (c(), ye(me, {
          key: 0,
          class: "wqr-inline-btn",
          onClick: x
        }, {
          default: l(() => [(c(), v("svg", Vce, [...ae[6] || (ae[6] = [e("rect", {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            rx: "1.2"
          }, null, -1), e("rect", {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            rx: "1.2"
          }, null, -1), e("rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1.2"
          }, null, -1), e("rect", {
            x: "14",
            y: "14",
            width: "3",
            height: "3"
          }, null, -1), e("rect", {
            x: "18",
            y: "14",
            width: "3",
            height: "3"
          }, null, -1), e("rect", {
            x: "14",
            y: "18",
            width: "3",
            height: "3"
          }, null, -1), e("rect", {
            x: "18",
            y: "18",
            width: "3",
            height: "3"
          }, null, -1)])])), ae[7] || (ae[7] = g(" 作品二维码 ", -1))]),
          _: 1
        })) : M("", !0), a(me, {
          class: "wqr-inline-btn",
          onClick: De
        }, {
          default: l(() => [(c(), v("svg", zce, [...ae[8] || (ae[8] = [e("rect", {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            rx: "1.2"
          }, null, -1), e("rect", {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            rx: "1.2"
          }, null, -1), e("rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1.2"
          }, null, -1), e("rect", {
            x: "14",
            y: "14",
            width: "3",
            height: "3"
          }, null, -1), e("rect", {
            x: "18",
            y: "14",
            width: "3",
            height: "3"
          }, null, -1), e("rect", {
            x: "14",
            y: "18",
            width: "3",
            height: "3"
          }, null, -1), e("rect", {
            x: "18",
            y: "18",
            width: "3",
            height: "3"
          }, null, -1)])])), ae[9] || (ae[9] = g(" 作品库活码 ", -1))]),
          _: 1
        })], 2)) : (c(), v("div", Lce, [t.workId || t.workId === 0 ? (c(), v("div", {
          key: 0,
          class: "wqr-fab wqr-fab--blue",
          title: "作品二维码",
          role: "button",
          onClick: x
        }, [...ae[10] || (ae[10] = [ii('<svg class="wqr-fab__icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-f313a0da><rect x="3" y="3" width="7" height="7" rx="1.2" data-v-f313a0da></rect><rect x="14" y="3" width="7" height="7" rx="1.2" data-v-f313a0da></rect><rect x="3" y="14" width="7" height="7" rx="1.2" data-v-f313a0da></rect><rect x="14" y="14" width="3" height="3" rx="0.6" data-v-f313a0da></rect><rect x="18" y="14" width="3" height="3" rx="0.6" data-v-f313a0da></rect><rect x="14" y="18" width="3" height="3" rx="0.6" data-v-f313a0da></rect><rect x="18" y="18" width="3" height="3" rx="0.6" data-v-f313a0da></rect></svg><span class="wqr-fab__label" data-v-f313a0da>二维码</span>', 2)])])) : M("", !0), e("div", {
          class: "wqr-fab wqr-fab--red",
          title: "作品库活码",
          role: "button",
          onClick: De
        }, [...ae[11] || (ae[11] = [ii('<svg class="wqr-fab__icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-f313a0da><rect x="3" y="3" width="7" height="7" rx="1.2" data-v-f313a0da></rect><rect x="14" y="3" width="7" height="7" rx="1.2" data-v-f313a0da></rect><rect x="3" y="14" width="7" height="7" rx="1.2" data-v-f313a0da></rect><rect x="14" y="14" width="3" height="3" rx="0.6" data-v-f313a0da></rect><rect x="18" y="14" width="3" height="3" rx="0.6" data-v-f313a0da></rect><rect x="14" y="18" width="3" height="3" rx="0.6" data-v-f313a0da></rect><rect x="18" y="18" width="3" height="3" rx="0.6" data-v-f313a0da></rect></svg><span class="wqr-fab__label" data-v-f313a0da>活码</span>', 2)])])])), a(ce, {
          modelValue: S.value,
          "onUpdate:modelValue": ae[1] || (ae[1] = U => S.value = U),
          title: "作品二维码",
          width: "340px",
          center: "",
          "append-to-body": "",
          class: "wqr-dialog"
        }, {
          footer: l(() => [a(me, {
            onClick: ae[0] || (ae[0] = U => S.value = !1)
          }, {
            default: l(() => [...ae[13] || (ae[13] = [g("关闭", -1)])]),
            _: 1
          }), a(me, {
            type: "primary",
            disabled: !z.value,
            onClick: C
          }, {
            default: l(() => [...ae[14] || (ae[14] = [g("下载二维码", -1)])]),
            _: 1
          }, 8, ["disabled"])]),
          default: l(() => [e("div", Dce, [z.value ? (c(), v("img", {
            key: 0,
            src: z.value,
            alt: "作品二维码",
            class: "wqr-img"
          }, null, 8, Mce)) : M("", !0), e("div", Oce, [e("p", Bce, h(t.title || "作品二维码"), 1), ae[12] || (ae[12] = e("p", {
            class: "wqr-tip__sub"
          }, "手机扫码即可打开该作品，跳转到对应平台发布。", -1))])])]),
          _: 1
        }, 8, ["modelValue"]), a(ce, {
          modelValue: V.value,
          "onUpdate:modelValue": ae[4] || (ae[4] = U => V.value = U),
          title: "作品库活码",
          width: "420px",
          center: "",
          "append-to-body": "",
          class: "wqr-dialog"
        }, {
          footer: l(() => [a(me, {
            onClick: ae[2] || (ae[2] = U => V.value = !1)
          }, {
            default: l(() => [...ae[21] || (ae[21] = [g("关闭", -1)])]),
            _: 1
          }), J.value && ie.value ? (c(), ye(me, {
            key: 0,
            loading: R.value,
            onClick: re
          }, {
            default: l(() => [...ae[22] || (ae[22] = [g("移出活码", -1)])]),
            _: 1
          }, 8, ["loading"])) : M("", !0), J.value ? (c(), ye(me, {
            key: 1,
            type: "primary",
            plain: "",
            onClick: ae[3] || (ae[3] = U => O.value = !0)
          }, {
            default: l(() => [g(h(ie.value ? "换活码" : "加入活码"), 1)]),
            _: 1
          })) : M("", !0), a(me, {
            type: "primary",
            disabled: !N.value,
            onClick: b
          }, {
            default: l(() => [...ae[23] || (ae[23] = [g("下载活码", -1)])]),
            _: 1
          }, 8, ["disabled"])]),
          default: l(() => {
            var U, de;
            return [el((c(), v("div", Nce, [T.value ? (c(), v("p", Uce, h(T.value), 1)) : (c(), v(Ue, {
              key: 1
            }, [N.value ? (c(), v("img", {
              key: 0,
              src: N.value,
              alt: "作品库活码",
              class: "wqr-img"
            }, null, 8, Rce)) : M("", !0), e("div", jce, [e("p", qce, h(((U = Y.value) == null ? void 0 : U.name) || "活码"), 1), e("div", Fce, [e("span", null, [ae[15] || (ae[15] = g("活码内待发布 ", -1)), e("b", null, h(((de = Y.value) == null ? void 0 : de.count) ?? 0), 1), ae[16] || (ae[16] = g(" 篇", -1))]), e("span", null, [ae[17] || (ae[17] = g("全站待发布 ", -1)), e("b", null, h(P(s)), 1), ae[18] || (ae[18] = g(" 篇", -1))])]), ae[19] || (ae[19] = e("div", {
              class: "wqr-flow"
            }, [e("span", null, "① 手机扫码"), e("i", null, "→"), e("span", null, "② 选择渠道"), e("i", null, "→"), e("span", null, "③ 发布后自动移出")], -1)), J.value && ie.value ? (c(), v("p", Wce, " 本篇已在「" + h(ie.value.name) + "」里 ", 1)) : J.value && Ae.value ? (c(), v("p", Gce, " 本篇还没加入任何活码，扫码时不会出现 ")) : M("", !0), ae[20] || (ae[20] = e("p", {
              class: "wqr-tip__sub wqr-tip__sub--rule"
            }, "一篇作品只能属于一个活码，换码时自动迁移。", -1)), e("a", {
              class: "wqr-tip__link",
              onClick: te
            }, "管理我的活码")])], 64))])), [
              [ue, $.value]
            ])]
          }),
          _: 1
        }, 8, ["modelValue"]), a(Lp, {
          modelValue: O.value,
          "onUpdate:modelValue": ae[5] || (ae[5] = U => O.value = U),
          "work-ids": J.value ? [t.workId] : [],
          "current-code-id": ee.value,
          "work-title": t.title,
          onDone: Q
        }, null, 8, ["modelValue", "work-ids", "current-code-id", "work-title"])], 64)
      }
    }
  },
  Wu = al(Jce, [
    ["__scopeId", "data-v-f313a0da"]
  ]);
const Hce = {
    key: 1,
    class: "mobile-header"
  },
  Qce = {
    class: "header-left"
  },
  Kce = {
    class: "header-center"
  },
  Yce = {
    class: "header-right"
  },
  Xce = {
    key: 0,
    class: "content-scroll-area"
  },
  Zce = {
    class: "title-card"
  },
  ede = {
    class: "title-editor"
  },
  tde = {
    class: "title-counter"
  },
  ade = {
    class: "title-actions"
  },
  lde = {
    class: "images-section"
  },
  nde = {
    class: "images-container"
  },
  ode = {
    class: "images-scroll-container"
  },
  ide = {
    class: "images-grid"
  },
  sde = ["onDragstart", "onDrop"],
  rde = ["onClick"],
  ude = ["onClick"],
  cde = {
    class: "image-failed-text"
  },
  dde = ["src", "onClick"],
  vde = {
    class: "image-index"
  },
  mde = {
    class: "add-text"
  },
  gde = {
    class: "material-reference-option-mobile"
  },
  fde = {
    class: "material-scope-row"
  },
  pde = {
    class: "content-section"
  },
  yde = {
    class: "content-wrapper-mobile"
  },
  hde = {
    class: "content-actions-mobile"
  },
  bde = {
    key: 0,
    class: "ai-detection-report"
  },
  wde = {
    class: "report-content"
  },
  _de = {
    class: "report-chart"
  },
  kde = {
    class: "donut-chart",
    width: "200",
    height: "200",
    viewBox: "0 0 200 200"
  },
  Cde = ["stroke-dasharray"],
  Ade = ["stroke-dasharray", "stroke-dashoffset"],
  Ide = {
    class: "chart-center"
  },
  xde = {
    class: "chart-percentage"
  },
  Sde = {
    class: "report-categories"
  },
  Ede = {
    class: "category-item"
  },
  Tde = {
    class: "category-percent"
  },
  $de = {
    class: "category-item"
  },
  Pde = {
    class: "category-percent"
  },
  Vde = {
    key: 2,
    class: "mobile-footer"
  },
  zde = {
    key: 3,
    class: "result-container"
  },
  Lde = {
    class: "h-14 bg-white/80 backdrop-blur-md border-b flex items-center justify-between px-6 shrink-0 z-10 sticky top-0"
  },
  Dde = {
    class: "flex items-center gap-3"
  },
  Mde = {
    class: "flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
  },
  Ode = {
    class: "notice-text"
  },
  Bde = {
    class: "content-count-blue"
  },
  Nde = {
    class: "content-count-blue"
  },
  Ude = {
    style: {
      "margin-left": "auto",
      display: "flex",
      gap: "12px",
      "align-items": "center"
    }
  },
  Rde = {
    class: "result-layout"
  },
  jde = {
    class: "edit-section"
  },
  qde = {
    class: "images-section-pc"
  },
  Fde = {
    class: "images-container-pc"
  },
  Wde = {
    class: "images-grid-pc"
  },
  Gde = ["onDragstart", "onDrop"],
  Jde = {
    class: "image-wrapper-pc"
  },
  Hde = {
    class: "image-container-pc"
  },
  Qde = {
    key: 0,
    class: "image-preview-pc image-preview-loading"
  },
  Kde = {
    key: 1,
    class: "image-preview-pc image-preview-failed"
  },
  Yde = {
    class: "image-failed-text"
  },
  Xde = ["src", "alt"],
  Zde = {
    class: "image-index-badge"
  },
  eve = {
    key: 1,
    class: "image-overlay-pc"
  },
  tve = {
    class: "overlay-buttons"
  },
  ave = {
    key: 2,
    class: "image-loading-overlay"
  },
  lve = {
    class: "loading-progress"
  },
  nve = {
    class: "progress-ring",
    width: "60",
    height: "60"
  },
  ove = {
    class: "loading-percent"
  },
  ive = {
    class: "add-text-pc"
  },
  sve = {
    class: "material-reference-option"
  },
  rve = {
    class: "material-scope-row"
  },
  uve = {
    class: "title-section-pc"
  },
  cve = {
    class: "input-actions"
  },
  dve = {
    class: "content-section-pc"
  },
  vve = {
    class: "content-title-row"
  },
  mve = {
    class: "content-actions"
  },
  gve = {
    class: "content-wrapper"
  },
  fve = {
    class: "download-content"
  },
  pve = {
    class: "action-buttons-row"
  },
  yve = {
    class: "publish-pc-with-tutorial"
  },
  hve = {
    class: "preview-section"
  },
  bve = {
    class: "phone-preview"
  },
  wve = {
    class: "phone-frame"
  },
  _ve = ["src"],
  kve = {
    class: "phone-screen"
  },
  Cve = {
    class: "phone-content"
  },
  Ave = {
    key: 0,
    class: "preview-carousel"
  },
  Ive = {
    key: 0,
    class: "preview-image preview-image-loading"
  },
  xve = {
    key: 1,
    class: "preview-image preview-image-failed"
  },
  Sve = {
    class: "image-failed-text"
  },
  Eve = {
    key: 2,
    class: "carousel-card-wrapper"
  },
  Tve = ["src", "alt"],
  $ve = {
    class: "preview-article"
  },
  Pve = {
    class: "article-title"
  },
  Vve = ["innerHTML"],
  zve = {
    class: "article-footer"
  },
  Lve = {
    class: "article-date"
  },
  Dve = {
    class: "preview-interactions"
  },
  Mve = {
    class: "interaction-bar"
  },
  Ove = {
    class: "interaction-stats"
  },
  Bve = {
    class: "stat-item"
  },
  Nve = {
    class: "stat-item"
  },
  Uve = {
    class: "stat-item"
  },
  Rve = {
    key: 0,
    class: "ai-detection-report-pc"
  },
  jve = {
    class: "report-content"
  },
  qve = {
    class: "report-chart"
  },
  Fve = {
    class: "donut-chart",
    width: "200",
    height: "200",
    viewBox: "0 0 200 200"
  },
  Wve = ["stroke-dasharray"],
  Gve = ["stroke-dasharray", "stroke-dashoffset"],
  Jve = {
    class: "chart-center"
  },
  Hve = {
    class: "chart-percentage"
  },
  Qve = {
    class: "report-categories"
  },
  Kve = {
    class: "category-item"
  },
  Yve = {
    class: "category-percent"
  },
  Xve = {
    class: "category-item"
  },
  Zve = {
    class: "category-percent"
  },
  eme = {
    class: "note-preview-wrap"
  },
  tme = {
    key: 0,
    class: "note-mobile-user-header"
  },
  ame = {
    class: "note-user-info"
  },
  lme = {
    class: "note-user-avatar"
  },
  nme = ["src"],
  ome = {
    class: "note-user-name"
  },
  ime = {
    class: "note-gallery-item"
  },
  sme = {
    key: 0,
    class: "note-gallery-placeholder loading"
  },
  rme = {
    key: 1,
    class: "note-gallery-placeholder failed"
  },
  ume = {
    class: "image-failed-text"
  },
  cme = ["src"],
  dme = {
    key: 1,
    class: "note-gallery-placeholder"
  },
  vme = {
    class: "note-preview-content"
  },
  mme = {
    key: 0,
    class: "note-content-header"
  },
  gme = {
    class: "note-user-info"
  },
  fme = {
    class: "note-user-avatar"
  },
  pme = ["src"],
  yme = {
    class: "note-user-name"
  },
  hme = {
    key: 1,
    class: "note-content-header-spacer"
  },
  bme = {
    class: "note-content-title"
  },
  wme = {
    class: "note-content-description"
  },
  _me = {
    key: 2,
    class: "note-content-tags"
  },
  kme = {
    class: "note-content-edit-time"
  },
  Cme = {
    class: "note-comment-input-area"
  },
  Ame = {
    class: "note-comment-actions"
  },
  Ime = {
    class: "rewrite-dialog-content"
  },
  xme = {
    key: 0,
    class: "custom-requirement-section"
  },
  Sme = {
    class: "rewrite-progress-window"
  },
  Eme = {
    class: "rewrite-progress-percent"
  },
  Tme = {
    key: 0,
    class: "preview-large-placeholder loading"
  },
  $me = {
    key: 1,
    class: "preview-large-placeholder failed"
  },
  Pme = {
    class: "image-failed-text"
  },
  Vme = ["src", "alt"],
  zme = {
    key: 2,
    class: "preview-bottom-actions"
  },
  Lme = {
    key: 0,
    class: "preview-action-left"
  },
  Dme = {
    key: 1,
    class: "preview-indicator"
  },
  Mme = {
    key: 2,
    class: "preview-action-right"
  },
  Ome = {
    key: 0,
    class: "edit-prompt-preview"
  },
  Bme = {
    class: "edit-prompt-preview-img-wrap"
  },
  Nme = {
    key: 0,
    class: "edit-prompt-preview-loading"
  },
  Ume = {
    key: 1,
    class: "edit-prompt-preview-failed"
  },
  Rme = ["src", "alt"],
  jme = {
    class: "retry-outline-form"
  },
  qme = {
    class: "retry-outline-tip"
  },
  Fme = {
    class: "publish-qr-content"
  },
  Wme = {
    class: "dialog-footer"
  },
  Gme = {
    class: "plugin-guide-content"
  },
  Jme = {
    class: "plugin-guide-content-box"
  },
  Hme = {
    class: "plugin-guide-actions"
  },
  Qme = {
    class: "browser-select-content"
  },
  Kme = {
    class: "browser-select-header"
  },
  Yme = {
    class: "browser-select-title-section"
  },
  Xme = ["src"],
  Zme = {
    class: "browser-select-section"
  },
  ege = {
    class: "browser-grid"
  },
  tge = {
    class: "browser-logo"
  },
  age = ["alt", "src"],
  lge = {
    class: "browser-name"
  },
  nge = {
    class: "install-options"
  };
const oge = {
    class: "browser-select-footer"
  },
  ige = 5e3,
  sge = 2e4,
  ky = "此功能方便为您推广您的产品图，您可以提前把图片上传我的素材库，勾选引用后即可在作品引用；可在下拉框选择「全部」或指定分组，在该范围内随机取图。",
  $d = "material_library_section_scope_generates",
  Km = "material_library_section_default_generates",
  Ym = "material-library-scope-changed",
  Cy = `应用范围（二选一，可全不选；该选项全局同步，所有作品页都会一起变化）：
· 板块下全部作品：将当前「最后一张图引用我的素材库」的开关与分组保存为「批量大字报图文」板块的默认，同板块其它作品自动套用。
· 当前作品：仅本作品按自身设置生效，并清除板块默认。`,
  Xm = "noteAIUsage.v1",
  rge = 50,
  uge = "https://api.aichaoer.cn/plug/%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.mp4",
  Ay = 2,
  Iy = "ai_cover_free_used_",
  cge = {
    __name: "NoteEditor",
    setup(t) {
      const o = ln(),
        i = fn(),
        n = p("用户12681635"),
        s = fe => fe === 0 || fe === "0",
        u = fe => fe === -1 || fe === "-1",
        d = fe => !s(fe) && !u(fe) && fe != null && fe !== "" ? String(fe) : "",
        f = p(!1),
        y = p(!1),
        w = p(!1),
        S = p(null),
        z = p(null),
        x = p(0),
        C = p(null),
        V = p(null),
        $ = fe => Array.isArray(fe) && fe.some(q => q === 0 || q === "0"),
        N = p(!1),
        T = p(0),
        R = p(0),
        O = p(!1),
        J = p("custom"),
        ee = p(""),
        ie = p(!1),
        Ae = p(!1),
        F = p(!1),
        Y = p(""),
        ne = p(0);
      let De = null;
      const Q = p(!1),
        re = p(0),
        b = p(-1),
        te = p(!1),
        we = p(-1),
        ae = p(""),
        me = p(!1),
        ce = p(""),
        ue = p(!1),
        U = p(0),
        de = p(2 * Math.PI * 26),
        _e = Le(() => de.value * (1 - U.value / 100)),
        xe = p(!1);

      function Ce() {
        var q;
        const fe = (q = i.params) == null ? void 0 : q.id;
        return fe != null && fe !== "" ? String(fe) : ""
      }

      function Re() {
        const fe = Ce();
        return fe ? `use_material_library_for_last_image_${fe}` : null
      }

      function nt() {
        const fe = Ce();
        return fe ? `material_library_random_group_id_${fe}` : null
      }

      function tt() {
        const fe = Re();
        if (!fe) return !1;
        try {
          const q = localStorage.getItem(fe);
          if (q === "true") return !0;
          if (q === "false") return !1;
          const wt = yt == null ? void 0 : yt();
          return wt ? !!wt.enabled : !1
        } catch {
          return !1
        }
      }

      function qe() {
        const fe = nt();
        if (!fe) return "";
        try {
          const q = localStorage.getItem(fe);
          if (q != null && q !== "") return String(q);
          const wt = yt == null ? void 0 : yt();
          return wt && wt.groupId ? String(wt.groupId) : ""
        } catch {
          return ""
        }
      }
      const Me = p(tt()),
        rt = p(qe());

      function ct() {
        const fe = rt.value;
        return fe != null && String(fe).trim() !== "" ? String(fe).trim() : qe()
      }
      oa(Me, fe => {
        fe || (rt.value = qe())
      });
      const E = p([]),
        _ = p(-1),
        je = p(null),
        K = p(!1);
      oa(() => i.params.id, (fe, q) => {
        String(fe ?? "") !== String(q ?? "") && (Me.value = tt(), rt.value = qe(), Ie.value = it(), _.value = -1, je.value = null)
      });

      function B(fe) {
        if (!Me.value) return !1;
        if (_.value === fe) return !0;
        const q = Ve.value.images || [],
          wt = q.length - 1;
        return fe === wt && wt >= 0 && !!je.value && q[wt] === je.value
      }
      let W = Promise.resolve();

      function Te(fe) {
        return W = W.then(() => fe()).catch(q => {
          console.error("素材库设置队列异常:", q)
        }), W
      }

      function it() {
        try {
          const fe = localStorage.getItem($d);
          return fe === "all" || fe === "current" ? fe : ""
        } catch {
          return ""
        }
      }

      function yt() {
        try {
          const fe = localStorage.getItem(Km);
          if (!fe) return null;
          const q = JSON.parse(fe);
          return !q || typeof q != "object" ? null : {
            enabled: !!q.enabled,
            groupId: q.groupId == null ? "" : String(q.groupId)
          }
        } catch {
          return null
        }
      }

      function st(fe) {
        try {
          fe ? localStorage.setItem(Km, JSON.stringify({
            enabled: !!fe.enabled,
            groupId: fe.groupId == null ? "" : String(fe.groupId)
          })) : localStorage.removeItem(Km)
        } catch {}
      }
      const Ie = p(it());

      function pe(fe) {
        try {
          fe ? localStorage.setItem($d, fe) : localStorage.removeItem($d)
        } catch {}
        try {
          window.dispatchEvent(new CustomEvent(Ym, {
            detail: fe || ""
          }))
        } catch {}
      }
      const Be = fe => {
        const q = fe === "all" || fe === "current" ? fe : "";
        Ie.value !== q && (Ie.value = q, q === "all" ? (st({
          enabled: !!Me.value,
          groupId: ct()
        }), A.success("已为「批量大字报图文」板块设置默认引用方式")) : q === "current" ? (st(null), A.success("已仅对当前作品生效")) : st(null), pe(q))
      };
      oa([Me, rt], () => {
        Ie.value === "all" && st({
          enabled: !!Me.value,
          groupId: ct()
        })
      });

      function xt(fe) {
        if (!fe || fe.key !== $d) return;
        const q = fe.newValue;
        Ie.value = q === "all" || q === "current" ? q : ""
      }

      function Yt(fe) {
        const q = fe == null ? void 0 : fe.detail;
        Ie.value = q === "all" || q === "current" ? q : ""
      }

      function Ye() {
        try {
          const fe = nt();
          if (!fe) return;
          const q = rt.value;
          localStorage.setItem(fe, q === "" || q == null ? "" : String(q))
        } catch (fe) {
          console.error("保存素材库分组偏好失败:", fe)
        }
      }

      function va(fe) {
        return fe == null || fe === "" ? null : `note_material_tail_url_${fe}`
      }

      function Ea(fe, q) {
        if (!q) return;
        const wt = va(fe);
        if (wt) try {
          localStorage.setItem(wt, q), pt(fe)
        } catch {}
      }

      function ft() {
        var Gt, za;
        const fe = ((Gt = Ve.value) == null ? void 0 : Gt.id) ?? ((za = i.params) == null ? void 0 : za.id),
          q = va(fe),
          wt = Z(fe);
        if (q) try {
          localStorage.removeItem(q), wt && localStorage.removeItem(wt)
        } catch {}
      }

      function Z(fe) {
        return fe == null || fe === "" ? null : `note_material_tail_group_${fe}`
      }

      function pt(fe) {
        const q = Z(fe);
        if (!q) return;
        const wt = ct();
        try {
          localStorage.setItem(q, wt === "" || wt == null ? "" : String(wt))
        } catch {}
      }

      function Et() {
        var Ua, Ta;
        if (!Me.value) return !1;
        const fe = Ve.value.images || [];
        if (!fe.length) return !1;
        const q = ((Ua = Ve.value) == null ? void 0 : Ua.id) ?? ((Ta = i.params) == null ? void 0 : Ta.id),
          wt = va(q);
        if (!wt) return !1;
        let Gt = "";
        try {
          Gt = localStorage.getItem(wt) || ""
        } catch {}
        if (!Gt) return !1;
        if (fe[fe.length - 1] === Gt) {
          const ja = ct();
          if (ja !== "" && String(ja).trim() !== "") {
            let sl = "";
            try {
              sl = localStorage.getItem(Z(q)) || ""
            } catch {}
            if (String(sl) !== String(ja)) return !1
          }
          return _.value = fe.length - 1, je.value = Gt, !0
        }
        return !1
      }
      async function Mt() {
        if (he.value) try {
          const fe = await dc();
          if (!Array.isArray(fe)) {
            E.value = [];
            return
          }
          E.value = fe.map(q => ({
            id: (q == null ? void 0 : q.id) ?? (q == null ? void 0 : q.group_id) ?? (q == null ? void 0 : q.groupid),
            name: (q == null ? void 0 : q.name) ?? (q == null ? void 0 : q.group_name) ?? ""
          })).filter(q => q.id != null && q.id !== "")
        } catch (fe) {
          console.warn("加载素材分组失败:", fe), E.value = []
        }
      }
      const Qe = () => Te(async () => {
          K.value = !0;
          try {
            await Da();
            const fe = Re();
            fe && localStorage.setItem(fe, String(Me.value)), await ht(), await Ee()
          } catch (fe) {
            console.error("保存素材库偏好设置失败:", fe), A.error("保存失败：" + ((fe == null ? void 0 : fe.message) || "未知错误"))
          } finally {
            K.value = !1
          }
        }),
        j = () => (rt.value == null && (rt.value = ""), Ye(), Te(async () => {
          K.value = !0;
          try {
            await Da(), Me.value && await ht(), await Ee()
          } catch (fe) {
            console.error("分组变更自动保存失败:", fe), A.error("自动保存失败：" + ((fe == null ? void 0 : fe.message) || "未知错误"))
          } finally {
            K.value = !1
          }
        }));
      async function Ee() {
        var q, wt;
        if (!((q = Ve.value) != null && q.id)) {
          A.warning("作品ID不存在，设置已记在本地");
          return
        }
        const fe = ca();
        await Yu(Ve.value.id, Ve.value.title, Ve.value.content, fe), Ve.value.updatedAt = new Date().toISOString(), A.success("已为您自动保存"), Me.value && ((wt = Ve.value.images) != null && wt.length) && Ea(Ve.value.id, Ve.value.images[Ve.value.images.length - 1])
      }
      const ht = async () => {
        var fe;
        if (Ve.value.images || (Ve.value.images = []), Me.value) {
          const q = await jt();
          if (!Me.value) return;
          if (q) {
            const wt = Ve.value.images,
              Gt = wt.length - 1,
              za = _.value,
              Ua = je.value,
              Ta = za >= 0 && za === Gt || Gt >= 0 && Ua && wt[Gt] === Ua;
            wt.length === 0 ? (wt.push(q), _.value = 0, je.value = q) : Ta ? (wt[Gt] = q, _.value = Gt, je.value = q) : za >= 0 && za <= Gt ? (wt.splice(za, 1), wt.push(q), _.value = wt.length - 1, je.value = q) : (wt.push(q), _.value = wt.length - 1, je.value = q), Ea((fe = Ve.value) == null ? void 0 : fe.id, je.value)
          } else {
            if (!Me.value) return;
            A.warning('素材库中没有可引用的图片，请先上传并勾选"允许作品图结尾引用"'), Me.value = !1;
            try {
              const wt = Re();
              wt && localStorage.setItem(wt, "false")
            } catch {}
            _.value >= 0 && _.value < Ve.value.images.length && Ve.value.images.splice(_.value, 1), _.value = -1, je.value = null, ft()
          }
        } else {
          ft();
          const q = Ve.value.images,
            wt = _.value,
            Gt = q.length - 1,
            za = je.value;
          je.value = null, wt >= 0 && wt < q.length ? q.splice(wt, 1) : Gt >= 0 && za && q[Gt] === za && q.splice(Gt, 1), _.value = -1
        }
      }, jt = async () => {
        try {
          const fe = ct(),
            q = {};
          if (fe !== "" && String(fe).trim() !== "") {
            const Gt = String(fe).trim(),
              za = Number(Gt);
            q.groupid = Number.isFinite(za) && String(za) === Gt ? za : Gt
          }
          const wt = await i0(q);
          return wt && wt.url && wt.is_use === 0 ? wt.url : null
        } catch (fe) {
          return console.error("获取随机素材失败:", fe), null
        }
      }, ca = () => Me.value ? !Ve.value.images || Ve.value.images.length === 0 ? [...Ve.value.images] : [...Ve.value.images] : [...Ve.value.images], be = p({}), he = p(!!localStorage.getItem("authToken")), kt = () => String(Ve.value.id || Ve.value.globalId || ""), Bt = {
        humanFeatures: 97,
        suspectedAI: 3
      }, Ze = fe => Bt, Wt = p({
        ...Bt
      }), aa = Le(() => Wt.value.humanFeatures), xa = Le(() => Wt.value.suspectedAI), Kt = fe => {
        const q = kt();
        if (!q) return !1;
        try {
          const Gt = JSON.parse(localStorage.getItem(Xm) || "{}")[q] || {};
          return fe === "title" ? (Gt.rewriteTitleCount || 0) < 1 : fe === "content" ? (Gt.rewriteContentCount || 0) < 1 : !1
        } catch (wt) {
          return console.error("检查限免使用失败:", wt), !1
        }
      }, at = fe => {
        const q = kt();
        if (q) try {
          const wt = JSON.parse(localStorage.getItem(Xm) || "{}");
          wt[q] || (wt[q] = {}), fe === "title" ? wt[q].rewriteTitleCount = (wt[q].rewriteTitleCount || 0) + 1 : fe === "content" && (wt[q].rewriteContentCount = (wt[q].rewriteContentCount || 0) + 1), localStorage.setItem(Xm, JSON.stringify(wt))
        } catch (wt) {
          console.error("记录使用次数失败:", wt)
        }
      }, Fe = p(0), Ke = p(0), et = p(!1), Nt = p(""), Ut = p(!1), Ge = p(!1), dt = p(!1), qt = p([{
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
      }]), ka = p(null), Ne = p("douyin"), ga = p(!1), St = () => {
        const fe = navigator.userAgent || navigator.vendor || window.opera || "",
          q = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|HarmonyOS|Mobile|mobile/i.test(fe),
          wt = window.innerWidth <= 768,
          Gt = "ontouchstart" in window || navigator.maxTouchPoints > 0,
          za = /Windows|Macintosh|Linux|X11/i.test(fe) && !q;
        w.value = q || wt && (Gt || !za)
      }, Oe = fe => {
        if (Ne.value === "douyin") {
          const q = "https://creator.douyin.com/publish",
            wt = new URLSearchParams({
              workId: String(fe.id || ""),
              title: encodeURIComponent(fe.title || ""),
              cover: encodeURIComponent(fe.images && fe.images[0] || fe.cover || "")
            });
          return `${q}?${wt.toString()}`
        } else {
          const q = "https://xiaohongshu.com/publish",
            wt = new URLSearchParams({
              workId: String(fe.id || ""),
              title: encodeURIComponent(fe.title || ""),
              cover: encodeURIComponent(fe.images && fe.images[0] || fe.cover || "")
            });
          return `${q}?${wt.toString()}`
        }
      }, Ve = p({
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
      });
      oa(() => Ve.value.id, fe => {
          fe && (String(fe || Ve.value.globalId || ""), Wt.value = Ze())
        }, {
          immediate: !0
        }), oa(() => Ve.value.images, (fe, q) => {
            Me.value
