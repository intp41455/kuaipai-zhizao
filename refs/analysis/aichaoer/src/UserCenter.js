// module: UserCenter
// extracted from 02-index-8bb27f01.js.js @ 805755
{
  const o = ln(),
    i = fn(),
    {
      openGuide: n
    } = eb(),
    s = m => {
      const r = oi(m);
      return r ? o.resolve({
        path: r
      }).href : "#"
    },
    u = m => {
      const r = oi(m);
      if (!r) return;
      const {
        href: L
      } = o.resolve({
        path: r
      });
      window.open(L, "_blank", "noopener,noreferrer")
    },
    d = p(!1),
    f = p(!1),
    y = m => {
      if (!m) return "";
      const r = Number(m);
      if (!r || Number.isNaN(r)) return "";
      const L = r < 1e12 ? r * 1e3 : r,
        D = new Date(L);
      if (Number.isNaN(D.getTime())) return "";
      const ge = ke => String(ke).padStart(2, "0");
      return `${D.getFullYear()}-${ge(D.getMonth()+1)}-${ge(D.getDate())} ${ge(D.getHours())}:${ge(D.getMinutes())}:${ge(D.getSeconds())}`
    },
    w = m => {
      if (m == null) return "";
      if (typeof m == "string") {
        const r = m.trim();
        if (!r) return "";
        if (r.includes("T")) return r.replace("T", " ").replace(/Z$/i, "").slice(0, 19);
        if (r.includes("-")) return r;
        if (r.includes("/")) return r.replace(/\//g, "-");
        const L = Number(r);
        return !Number.isNaN(L) && L > 0 ? y(L) : r
      }
      return typeof m == "number" && m ? y(m) : ""
    },
    S = () => {
      d.value || (f.value = !0)
    },
    z = () => {
      d.value || (f.value = !1)
    },
    x = () => {
      d.value && (f.value = !f.value)
    },
    C = () => ({
      avatar: Xl,
      nickname: "",
      userId: "",
      phone: "",
      email: "",
      wechat: "",
      registerTime: "",
      hasPassword: !1,
      createPoints: 0,
      includePoints: 0,
      vipName: "",
      vipExpireTime: null,
      aiModel: [],
      isVip: 0
    }),
    V = m => {
      const r = C();
      if (!m || typeof m != "object") return r;
      const L = m.userId ?? m.userid ?? m.id ?? m.email ?? m.phone ?? r.userId;
      let D = "";
      L != null && (D = String(L));
      let ge = D.includes("@") ? D.split("@")[0] : D;
      (!ge || ge === "undefined" || ge === "null") && (ge = r.userId);
      const ke = m.nickname || r.nickname || (ge ? `用户${ge}` : r.nickname),
        Vt = m.registerTime ?? m.register_time ?? m.jointime_text ?? m.jointime ?? m.joinTime ?? m.join_time ?? m.createTime ?? m.create_time ?? m.createtime ?? r.registerTime,
        _a = w(Vt),
        Zt = Array.isArray(m.aiModel) ? m.aiModel : Array.isArray(m.ai_model) ? m.ai_model : r.aiModel;
      return {
        ...r,
        avatar: m.avatar || r.avatar,
        nickname: ke,
        userId: ge,
        phone: m.phone ?? r.phone,
        email: m.email ?? r.email,
        wechat: m.wechat ?? m.openid ?? r.wechat,
        registerTime: _a,
        hasPassword: m.hasPassword !== void 0 ? m.hasPassword : r.hasPassword,
        createPoints: m.createPoints ?? m.create_points ?? r.createPoints,
        includePoints: m.includePoints ?? m.include_points ?? r.includePoints,
        vipName: m.vipName ?? m.vip_name ?? r.vipName,
        vipExpireTime: m.vipExpireTime ?? m.vip_expiretime ?? r.vipExpireTime,
        aiModel: Zt,
        isVip: m.isVip ?? m.isvip ?? r.isVip
      }
    },
    $ = async (m = {}) => {
      var L;
      const r = localStorage.getItem("authToken");
      if (!r || !r.trim()) {
        N.value = C(), Ae.value = ie(), Xe();
        return
      }
      try {
        await new Promise(ge => setTimeout(ge, 200));
        const D = await zl(m);
        if (D) {
          const ge = V(D);
          N.value = ge, Ae.value = ie(), Xe(), tw(D), Wa.value.isDistributor = !0, Wa.value.auditStatus = "approved", window.dispatchEvent(new CustomEvent("localStorage-change", {
            detail: {
              key: "userInfo"
            }
          }));
          return
        }
      } catch (D) {
        if ((D == null ? void 0 : D.code) === 999 || ((L = D == null ? void 0 : D.response) == null ? void 0 : L.code) === 999) {
          console.warn("Token已过期，已清除登录状态"), N.value = C(), Ae.value = ie(), Xe();
          return
        }
        console.warn("获取用户信息失败:", D)
      }
      N.value = C(), Ae.value = ie(), Xe()
    }, N = p(C()), T = Le(() => {
      if (!N.value.userId) return "";
      const m = String(N.value.userId);
      return m.includes("@") ? m.split("@")[0] : m
    }), R = Le(() => $o(i.query.invite, N.value)), O = Le(() => {
      var m;
      return ((m = R.value) == null ? void 0 : m.name) || Mo
    }), J = Le(() => {
      var m;
      return ((m = R.value) == null ? void 0 : m.logo) || "https://www.aichaoer.cn/logo.png"
    }), ee = Le(() => yp(i.query.invite, N.value)), ie = () => {
      var r, L;
      const m = Number(((r = N.value) == null ? void 0 : r.createPoints) ?? ((L = N.value) == null ? void 0 : L.create_points));
      return !Number.isNaN(m) && m >= 0 ? m : 0
    }, Ae = p(ie()), F = i.query.tab === "generate_record" ? "task_record" : i.query.tab === "download_record" || i.query.tab === "ai_model" ? "wallet" : i.query.tab || "wallet", Y = p(F), ne = {
      wallet: "我的会员",
      distribution2: "代理中心",
      ai_model: "AI模型设置",
      creation_template: "我的创作信息模板",
      my_persona: "我的人设",
      title_library: "我的标题库",
      material_library: "我的素材库",
      task_record: "任务记录",
      publish_record: "发布记录",
      my_live_code: "我的活码",
      distribution: "分销推广",
      recharge_record: "充值记录",
      download_record: "下载记录",
      my_coupons: "我的优惠券",
      password: "密码管理"
    }, De = m => {
      const L = ne[m || "wallet"] || "用户中心";
      document.title = `火兔工具箱_${L}`
    }, Q = p([]), re = p(1), b = p(20), te = p(0), we = p(0), ae = p(!1), me = p(!1), ce = p(!1), ue = p(null), U = p(!1), de = p(!1), _e = p(!1), xe = p(!1), Ce = p("all"), Re = p("all"), nt = p(null), tt = p([]), qe = p(!1), Me = p(""), rt = p([]), ct = m => {
      if (m == null || m === "") return null;
      if (typeof m == "number") {
        const L = m < 1e12 ? m * 1e3 : m;
        return new Date(L)
      }
      const r = new Date(m);
      return isNaN(r.getTime()) ? null : r
    }, E = m => {
      const r = Re.value;
      if (r === "all") return !0;
      const L = ct(m.createTime);
      if (!L) return !1;
      const D = new Date,
        ge = new Date(D.getFullYear(), D.getMonth(), D.getDate(), 0, 0, 0, 0),
        ke = new Date(D.getFullYear(), D.getMonth(), D.getDate(), 23, 59, 59, 999);
      if (r === "today") return L >= ge && L <= ke;
      const Vt = new Date(D.getFullYear(), D.getMonth(), D.getDate() - 1, 0, 0, 0, 0),
        _a = new Date(D.getFullYear(), D.getMonth(), D.getDate() - 1, 23, 59, 59, 999);
      if (r === "yesterday") return L >= Vt && L <= _a;
      if (r === "week") {
        const Zt = new Date(D.getFullYear(), D.getMonth(), D.getDate() - 6, 0, 0, 0, 0);
        return L >= Zt && L <= ke
      }
      if (r === "custom" && nt.value) {
        const [Zt, Xa, nl] = nt.value.split("-").map(Number), Ya = new Date(Zt, Xa - 1, nl, 0, 0, 0, 0), wl = new Date(Zt, Xa - 1, nl, 23, 59, 59, 999);
        return L >= Ya && L <= wl
      }
      return !0
    }, _ = Le(() => {
      let m = tt.value;
      const r = Ce.value;
      if (m = m.filter(L => E(L)), r && r.startsWith("cg:")) {
        const L = r.slice(3);
        return m.filter(D => D.customGroupId === L)
      }
      return m
    }), je = p(1), K = p(0), B = Le(() => _.value), W = m => {
      je.value = m, pe(m)
    }, Te = Le(() => {
      const m = B.value.map(r => r.id);
      return m.length > 0 && m.every(r => rt.value.includes(r))
    }), it = Le(() => {
      const m = B.value.map(L => L.id),
        r = m.filter(L => rt.value.includes(L));
      return r.length > 0 && r.length < m.length
    }), yt = () => {
      const m = B.value.map(r => r.id);
      if (Te.value) rt.value = rt.value.filter(r => !m.includes(r));
      else {
        const r = m.filter(L => !rt.value.includes(L));
        rt.value = [...rt.value, ...r]
      }
    }, st = m => {
      const r = rt.value.indexOf(m);
      r > -1 ? rt.value.splice(r, 1) : rt.value.push(m)
    }, Ie = m => rt.value.includes(m);
  oa(Ce, () => {
    rt.value = [], je.value = 1, pe(1)
  }), oa([Re, nt], () => {
    je.value = 1, pe(1)
  });
  const pe = async (m = je.value) => {
    var r;
    try {
      const L = Ce.value,
        D = L && L.startsWith("cg:") ? L.slice(3) : void 0,
        ge = await kv({
          page: m,
          size: Vu,
          groupid: D
        }),
        ke = Array.isArray(ge == null ? void 0 : ge.rows) ? ge.rows : [];
      K.value = Number(((r = ge == null ? void 0 : ge.pages) == null ? void 0 : r.total) ?? 0) || 0, tt.value = ke.map(Vt => {
        const _a = Vt.groupid ?? Vt.group_id,
          Xa = (_a === "" || _a === null || _a === void 0 ? 0 : Number(_a)) === 0 ? "" : String(_a);
        return {
          id: Vt.id,
          name: Vt.name || `素材${Vt.id}`,
          url: Vt.url,
          customGroupId: Xa,
          canReference: Vt.is_use === 0,
          createTime: Vt.createtime || Vt.createTime || ""
        }
      })
    } catch (L) {
      console.error("加载素材库失败:", L), tt.value = [], K.value = 0, A.error((L == null ? void 0 : L.message) || "加载素材库失败，请稍后重试")
    }
  }, Be = p([]), xt = async () => {
    try {
      const m = await dc();
      Be.value = Array.isArray(m) ? m.map(r => ({
        id: String(r.id),
        name: r.name || ""
      })) : []
    } catch (m) {
      console.warn("加载素材分组失败:", m), Be.value = []
    }
  }, Yt = m => {
    const r = String(m ?? "");
    if (!r) return "";
    const L = tt.value.find(ke => String(ke.id) === r),
      D = (L == null ? void 0 : L.customGroupId) || "";
    if (!D) return "";
    const ge = Be.value.find(ke => ke.id === D);
    return (ge == null ? void 0 : ge.name) || ""
  }, Ye = async m => {
    if (!m || !m.id && m.id !== 0) return;
    const r = m.customGroupId || "",
      L = 0,
      D = m.canReference ? 0 : 1;
    try {
      await yg({
        id: m.id,
        type: L,
        is_use: D,
        groupid: r || 0
      }), A.success("已更新分组"), await pe()
    } catch (ge) {
      console.error("更新素材分组失败:", ge), A.error((ge == null ? void 0 : ge.message) || "更新分组失败，请稍后重试")
    }
  }, va = async () => {
    try {
      const {
        value: m
      } = await La.prompt("请输入分组名称", "新建分组", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPlaceholder: "场景图、产品图、品牌图",
        inputValidator: L => {
          const D = (L || "").trim();
          return D ? D.length > 12 ? "最多 12 个字" : Be.value.some(ke => (ke.name || "").trim() === D) ? "分组名称已存在" : !0 : "分组名称不能为空"
        }
      }), r = (m || "").trim();
      if (!r) return;
      await hg({
        name: r
      }), await xt(), A.success("分组已创建")
    } catch (m) {
      m !== "cancel" && m !== "close" && console.warn("创建分组失败:", m)
    }
  }, Ea = async m => {
    if (!(!m || m.id == null)) try {
      const {
        value: r
      } = await La.prompt("请输入新的分组名称", "编辑分组", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: m.name,
        inputPlaceholder: "请输入分组名称",
        inputValidator: D => {
          const ge = (D || "").trim();
          return ge ? ge.length > 12 ? "最多 12 个字" : Be.value.some(Vt => String(Vt.id) !== String(m.id) && (Vt.name || "").trim() === ge) ? "分组名称已存在" : !0 : "分组名称不能为空"
        }
      }), L = (r || "").trim();
      if (!L) return;
      await hg({
        id: m.id,
        name: L
      }), await xt(), A.success("分组名称已更新")
    } catch (r) {
      r !== "cancel" && r !== "close" && (console.error("编辑分组失败:", r), A.error((r == null ? void 0 : r.message) || "编辑分组失败，请稍后重试"))
    }
  }, ft = async m => {
    if (!(m == null || m === "")) try {
      await La.confirm("确定要删除该分组吗？该分组内的素材仍会保留，但可能会变更为未分组。", "确认删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }), Ce.value === `cg:${m}` && (Ce.value = "all"), await o0(m), await xt(), await pe(), A.success("分组已删除")
    } catch (r) {
      r !== "cancel" && r !== "close" && (console.error("删除分组失败:", r), A.error((r == null ? void 0 : r.message) || "删除分组失败，请稍后重试"))
    }
  };
  xt();
  const Z = p(!1),
    pt = p(!1),
    Et = p(0),
    Mt = () => {
      pt.value || (Z.value = !0)
    },
    Qe = async m => {
      if (!Array.isArray(m) || m.length === 0) return;
      pt.value = !0, Et.value = 0;
      let r = 0;
      try {
        for (const L of m) {
          try {
            await j(L, {
              silent: !0
            }) && r++
          } catch {}
          Et.value++
        }
        r > 0 ? A.success(`成功上传 ${r} / ${m.length} 张`) : A.error("上传失败")
      } finally {
        pt.value = !1, Et.value = 0, Z.value = !1
      }
    }, j = async (m, r = {}) => {
      var D;
      const L = !!r.silent;
      try {
        if (!(m != null && m.raw)) return L || A.error("无效的文件"), !1;
        if (!m.raw.type || !m.raw.type.startsWith("image/")) return L || A.error("请上传图片文件"), !1;
        let ge = m.raw;
        if (Yo(m.raw)) try {
          ge = await _i(m.raw), L || A.info("HEIC 格式已转换为 JPEG")
        } catch (Ya) {
          return console.error("HEIC 处理失败:", Ya), L || A.error(Ya.message || "HEIC 格式暂不支持，请先将图片转换为 JPEG 或 PNG 格式"), !1
        }
        const ke = await ao(ge);
        let Vt = null;
        if (ke != null && ke.data ? Vt = Array.isArray(ke.data) ? ke.data[0] : ke.data : ke && typeof ke == "string" ? Vt = ke : ke != null && ke.url && (Vt = ke.url), !Vt) throw new Error("上传返回结果中未找到图片地址");
        const _a = 0,
          Zt = m.name || ((D = m.raw) == null ? void 0 : D.name) || "",
          Xa = Ce.value,
          nl = Xa && Xa.startsWith("cg:") ? Xa.slice(3) : void 0;
        try {
          const Ya = {
            type: _a,
            url: Vt,
            name: Zt
          };
          nl !== void 0 && nl !== "" && (Ya.groupid = nl), await n0(Ya)
        } catch (Ya) {
          return console.error("调用 /yz/source/add 失败:", Ya), L || A.warning((Ya == null ? void 0 : Ya.message) || "素材已上传，但同步到服务器失败"), !1
        }
        return await pe(), L || A.success("上传成功"), !0
      } catch (ge) {
        return console.error("上传素材失败:", ge), L || A.error((ge == null ? void 0 : ge.message) || "上传失败"), !1
      }
    }, Ee = m => {
      Me.value = m, qe.value = !0
    }, ht = async m => {
      if (!m || !m.id && m.id !== 0) {
        A.error("缺少素材ID");
        return
      }
      const r = 0,
        L = m.canReference ? 0 : 1;
      try {
        await yg({
          id: m.id,
          type: r,
          is_use: L
        }), A.success("已更新引用设置")
      } catch (D) {
        console.error("更新素材引用设置失败:", D), A.error((D == null ? void 0 : D.message) || "更新引用设置失败，请稍后重试")
      }
    }, jt = m => {
      if (!m && m !== 0) {
        A.error("缺少素材ID");
        return
      }
      La.confirm("确定要删除这个素材吗？", "确认删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        try {
          await pg(m), tt.value = tt.value.filter(L => L.id !== m);
          const r = rt.value.indexOf(m);
          r > -1 && rt.value.splice(r, 1), A.success("删除成功")
        } catch (r) {
          console.error("删除素材失败:", r), A.error((r == null ? void 0 : r.message) || "删除失败，请稍后重试")
        }
      }).catch(() => {})
    }, ca = async () => {
      if (rt.value.length === 0) {
        A.warning("请先选择要删除的素材");
        return
      }
      const m = rt.value.length,
        r = [...rt.value];
      try {
        await La.confirm(`确定要删除选中的 ${m} 个素材吗？此操作不可恢复！`, "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        const L = r.map(D => pg(D));
        await Promise.all(L), tt.value = tt.value.filter(D => !r.includes(D.id)), rt.value = [], A.success(`成功删除 ${m} 个素材`)
      } catch (L) {
        L !== "cancel" && (console.error("批量删除素材失败:", L), A.error((L == null ? void 0 : L.message) || "删除失败，请稍后重试"))
      }
    }, be = p(!1), he = p(!1), kt = p(null), Bt = p(null), Ze = p(null), Wt = p(null), aa = p(null), xa = p(!1), Kt = p([]), at = p(1), Fe = p("all"), Ke = p({
      libraryId: null,
      text: ""
    }), et = p("all"), Nt = p([]), Ut = p(1), Ge = p(0), dt = p(!1), qt = p(!1), ka = p(null), Ne = p({
      name: "",
      data: {
        industry: "",
        ageMode: "any",
        ageRange: [18, 30],
        targetGroup: "",
        painPoints: "",
        solution: "",
        notes: ""
      }
    }), ga = p({
      name: "",
      data: {
        industry: "",
        ageMode: "any",
        ageRange: [18, 30],
        targetGroup: "",
        painPoints: "",
        solution: "",
        notes: ""
      }
    }), St = async (m = Ut.value) => {
      var r;
      try {
        Ut.value = m;
        const L = await Av({
            page: m,
            size: jm
          }),
          D = Array.isArray(L == null ? void 0 : L.rows) ? L.rows : [];
        Ge.value = Number(((r = L == null ? void 0 : L.pages) == null ? void 0 : r.total) ?? 0) || 0, Nt.value = D.map(ge => ({
          id: ge.id,
          name: ge.name,
          data: {
            industry: ge.industry || "",
            ageMode: ge.age_mode || "any",
            ageRange: Array.isArray(ge.age_range) ? ge.age_range : [18, 30],
            targetGroup: ge.target_group || "",
            painPoints: ge.pain_points || "",
            solution: ge.solution || "",
            notes: ge.notes || ""
          },
          createTime: ge.createtime ? new Date(ge.createtime * 1e3).toISOString() : "",
          updateTime: ge.updatetime ? new Date(ge.updatetime * 1e3).toISOString() : ""
        }))
      } catch (L) {
        console.error("加载创作模板失败:", L), Nt.value = [], Ge.value = 0, L.code !== 999 && A.error(L.message || "加载模板列表失败")
      }
    }, Oe = m => {
      St(m)
    }, Ve = m => {
      if (!m) return "";
      let r;
      if (typeof m == "number" ? r = new Date(m * 1e3) : r = new Date(m), isNaN(r.getTime())) return "";
      const D = new Date - r,
        ge = Math.floor(D / (1e3 * 60 * 60 * 24));
      if (ge === 0) {
        const ke = Math.floor(D / 36e5);
        if (ke === 0) {
          const Vt = Math.floor(D / 6e4);
          return Vt <= 0 ? "刚刚" : `${Vt}分钟前`
        }
        return `${ke}小时前`
      } else return ge < 7 ? `${ge}天前` : r.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      })
    }, Ma = async () => {
      if (!Ne.value.name.trim()) {
        A.warning("请输入模板名称");
        return
      }
      try {
        const m = Ne.value.data,
          r = {
            name: Ne.value.name.trim(),
            industry: m.industry || "",
            age_mode: m.ageMode || "any",
            age_range: Array.isArray(m.ageRange) ? m.ageRange : [18, 30],
            target_group: m.targetGroup || "",
            pain_points: m.painPoints || "",
            solution: m.solution || "",
            notes: m.notes || ""
          };
        await zr(r), await St(1), A.success("模板创建成功"), dt.value = !1, ta()
      } catch (m) {
        console.error("创建模板失败:", m), A.error(m.message || "创建模板失败")
      }
    }, Je = m => {
      ka.value = m, ga.value = {
        name: m.name,
        data: {
          ...m.data
        }
      }, qt.value = !0
    }, ve = async () => {
      if (!ga.value.name.trim()) {
        A.warning("请输入模板名称");
        return
      }
      if (ka.value) try {
        const m = ga.value.data,
          r = {
            id: ka.value.id,
            name: ga.value.name.trim(),
            industry: m.industry || "",
            age_mode: m.ageMode || "any",
            age_range: Array.isArray(m.ageRange) ? m.ageRange : [18, 30],
            target_group: m.targetGroup || "",
            pain_points: m.painPoints || "",
            solution: m.solution || "",
            notes: m.notes || ""
          };
        await zr(r), await St(1), A.success("模板已更新"), qt.value = !1, ka.value = null
      } catch (m) {
        console.error("保存模板失败:", m), A.error(m.message || "保存模板失败")
      }
    }, $t = async m => {
      try {
        await La.confirm("确定要删除这个模板吗？", "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }), await Iv(m), await St(1), A.success("模板已删除")
      } catch (r) {
        r.message && r.message !== "取消" && (console.error("删除模板失败:", r), A.error(r.message || "删除模板失败"))
      }
    }, ta = () => {
      Ne.value = {
        name: "",
        data: {
          industry: "",
          ageMode: "any",
          ageRange: [18, 30],
          targetGroup: "",
          painPoints: "",
          solution: "",
          notes: ""
        }
      }
    }, ha = () => {
      ga.value = {
        name: "",
        data: {
          industry: "",
          ageMode: "any",
          ageRange: [18, 30],
          targetGroup: "",
          painPoints: "",
          solution: "",
          notes: ""
        }
      }, ka.value = null
    }, Qt = p({
      libraryId: null,
      keyword: "",
      requirement: "",
      count: 20,
      isNewLibrary: !1,
      libraryName: ""
    }), ba = p(!1), Ja = () => {
      Qt.value = {
        libraryId: null,
        keyword: "",
        count: 10,
        isNewLibrary: !1,
        libraryName: ""
      }
    }, ml = m => {
      const r = String(m || ""),
        L = Array.from(r),
        D = L.length;
      if (D <= 5) return [r];
      if (D === 8) return [L.slice(0, 4).join(""), L.slice(4).join("")];
      const ge = [];
      for (let ke = 0; ke < D; ke += 5) ge.push(L.slice(ke, ke + 5).join(""));
      return ge
    }, $e = async () => {
      try {
        Q.value.length || await loadTitleLibraries()
      } catch {}
      ba.value = !0
    }, We = p({
      name: ""
    }), ze = p({
      name: ""
    }), H = p({
      content: ""
    }), Lt = () => {
      const m = new Date;
      return `${`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`}-${at.value}`
    }, Ft = () => {
      const m = new Date().toISOString().split("T")[0];
      return Q.value.filter(L => (L.createTime ? L.createTime.split("T")[0] : "") === m).length + 1
    }, Rt = m => {
      if (!m) return new Date().toISOString();
      const r = m < 1e12 ? m * 1e3 : m;
      return new Date(r).toISOString()
    }, Ot = async () => {
      if (!localStorage.getItem("authToken")) {
        Q.value = [];
        return
      }
      try {
        const r = await Cv({
          page: re.value,
          size: b.value
        });
        r.pages && (te.value = r.pages.total || 0, we.value = r.pages.total_page || 0, re.value = r.pages.current || 1), r.rows && Array.isArray(r.rows) ? (Q.value = r.rows.map(L => {
          const D = Rt(L.createtime),
            ge = Rt(L.updatetime);
          let ke = [];
          return L.titles && Array.isArray(L.titles) && (ke = L.titles.map((Vt, _a) => ({
            id: Date.now() + _a + Math.random(),
            text: Vt,
            createTime: D
          }))), {
            id: L.id,
            name: L.name,
            createTime: D,
            updateTime: ge || D,
            titles: ke
          }
        }), at.value = Ft()) : (console.warn("⚠️ API返回的数据格式不正确"), Q.value = [])
      } catch (r) {
        console.error("加载标题库失败:", r), A.error(r.message || "加载标题库失败，请稍后重试"), Q.value = [], at.value = 1
      }
    }, Xt = async () => {
      const m = We.value.name.trim() || Lt();
      try {
        const r = await Fd({
            name: m
          }),
          L = new Date().toISOString(),
          D = {
            id: r.id || r.group_id || Date.now(),
            name: r.name || m,
            createTime: r.createTime || r.create_time || L,
            updateTime: r.updateTime || r.update_time || L,
            titles: r.titles || []
          };
        await Ot();
        const ge = D.id,
          ke = Q.value.find(Vt => Vt.id === ge || String(Vt.id) === String(ge) || Number(Vt.id) === Number(ge));
        ke ? aa.value = ke : (aa.value = D, console.warn("未在列表中找到新创建的标题组，使用API返回的数据，ID:", ge)), U.value = !1, de.value = !0, At(), A.success("标题组创建成功")
      } catch (r) {
        console.error("创建标题组失败:", r), A.error(r.message || "创建标题组失败，请稍后重试")
      }
    }, At = () => {
      We.value = {
        name: ""
      }
    }, pa = async () => {
      if (!Ke.value.text.trim()) {
        A.warning("请输入标题内容");
        return
      }
      if (!aa.value) {
        A.error("标题组不存在，请重新创建"), console.error("newlyCreatedLibrary.value 为空");
        return
      }
      if (!aa.value.id) {
        A.error("标题组ID不存在，请重新创建"), console.error("newlyCreatedLibrary.value.id 为空，newlyCreatedLibrary.value:", aa.value);
        return
      }
      const m = aa.value.id;
      console.log("保存标题到标题组，ID:", m, "标题组名称:", aa.value.name);
      const r = Ke.value.text.split(`
`).filter(D => D.trim().length > 0);
      if (r.length === 0) {
        A.warning("请输入标题内容");
        return
      }
      const L = r.map(D => D.trim());
      try {
        console.log("调用 saveTitleAPI，参数:", {
          id: m,
          titles: L,
          titlesCount: L.length
        });
        const D = await Es({
          id: m,
          titles: L
        });
        console.log("saveTitleAPI 返回结果:", D), await Ot(), console.log("重新加载后的标题库列表，数量:", Q.value.length);
        const ge = Q.value.find(ke => {
          const Vt = ke.id === m || String(ke.id) === String(m) || Number(ke.id) === Number(m);
          return Vt && console.log("找到匹配的标题组:", {
            id: ke.id,
            name: ke.name
          }), Vt
        });
        ge ? (aa.value = ge, console.log("已更新标题组引用:", ge)) : (console.warn("未找到更新后的标题组，ID:", m), console.warn("当前标题库列表ID:", Q.value.map(ke => ({
          id: ke.id,
          idType: typeof ke.id,
          name: ke.name
        }))), console.warn("保留原有的标题组引用:", aa.value)), A.success(`已添加${L.length}个标题`), de.value = !1, en()
      } catch (D) {
        console.error("保存标题失败:", D), console.error("错误详情:", {
          message: D.message,
          response: D.response,
          libraryId: m,
          newlyCreatedLibrary: aa.value
        }), A.error(D.message || "保存标题失败，请稍后重试")
      }
    }, Oa = m => {
      if (!m || !m.titles || m.titles.length === 0) return 0;
      let r = 0;
      return m.titles.forEach(L => {
        if (L.text) {
          const D = L.text.split(`
`).filter(ge => ge.trim().length > 0);
          r += D.length
        }
      }), r
    }, Fa = m => {
      Wt.value = m;
      const r = m.titles.map(L => L.text).join(`
`);
      H.value = {
        content: r
      }, he.value = !0
    }, gl = async () => {
      if (!Wt.value) return;
      const m = H.value.content.trim();
      if (!m) {
        A.warning("请输入标题内容");
        return
      }
      const L = m.split(`
`).filter(D => D.trim().length > 0).map(D => D.trim());
      try {
        await Es({
          id: Wt.value.id,
          titles: L
        }), await Ot();
        const D = Wt.value.id;
        if (kt.value && kt.value.id === D) {
          const ge = Q.value.find(ke => ke.id === D);
          ge && (kt.value = {
            ...ge
          })
        }
        A.success("标题已保存"), he.value = !1
      } catch (D) {
        console.error("保存标题失败:", D), A.error(D.message || "保存标题失败，请稍后重试")
      }
    }, jl = m => {
      if (!m || !m.titles || m.titles.length === 0) {
        A.warning("该标题组暂无标题");
        return
      }
      const r = m.titles.map(ke => ke.text).join(`
`),
        L = new Blob([r], {
          type: "text/plain;charset=utf-8"
        }),
        D = URL.createObjectURL(L),
        ge = document.createElement("a");
      ge.href = D, ge.download = `${m.name}.txt`, document.body.appendChild(ge), ge.click(), document.body.removeChild(ge), URL.revokeObjectURL(D), A.success("下载成功")
    }, en = () => {
      Ke.value = {
        libraryId: null,
        text: ""
      }, Bt.value = null
    }, fa = () => {
      en()
    }, Ka = async () => {
      if (!Ke.value.text.trim()) {
        A.warning("请输入标题内容");
        return
      }
      if (!Ke.value.libraryId) {
        A.warning("请选择标题组");
        return
      }
      const m = Q.value.find(r => r.id === Ke.value.libraryId);
      if (!m) {
        A.error("标题组不存在");
        return
      }
      try {
        const r = Ke.value.libraryId;
        if (Bt.value) {
          const L = m.titles.findIndex(D => D.id === Bt.value.id);
          if (L !== -1) {
            const D = m.titles.map((ge, ke) => ke === L ? Ke.value.text.trim() : ge.text || ge);
            if (await Es({
                id: m.id,
                titles: D
              }), await Ot(), kt.value && kt.value.id === r) {
              const ge = Q.value.find(ke => ke.id === r);
              ge && (kt.value = {
                ...ge
              })
            }
            A.success("标题已更新")
          }
        } else {
          const L = Ke.value.text.split(`
`).filter(Vt => Vt.trim().length > 0);
          if (L.length === 0) {
            A.warning("请输入标题内容");
            return
          }
          const D = L.map(Vt => Vt.trim()),
            ge = m.titles.map(Vt => Vt.text || Vt),
            ke = [...D, ...ge];
          if (await Es({
              id: m.id,
              titles: ke
            }), await Ot(), kt.value && kt.value.id === r) {
            const Vt = Q.value.find(_a => _a.id === r);
            Vt && (kt.value = {
              ...Vt
            })
          }
          A.success(`已添加${D.length}个标题`)
        }
        ae.value = !1
      } catch (r) {
        console.error("保存标题失败:", r), A.error(r.message || "保存标题失败，请稍后重试")
      }
    }, Dl = m => {
      kt.value = m, be.value = !0
    }, tn = (m, r) => {
      Bt.value = r, Ke.value = {
        libraryId: m.id,
        text: r.text
      }, ae.value = !0
    }, zt = async (m, r) => {
      try {
        await La.confirm("确定要删除这个标题吗？", "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        const L = Q.value.find(D => D.id === m);
        if (L) {
          const D = L.titles.findIndex(ge => ge.id === r);
          if (D !== -1) {
            if (L.titles.splice(D, 1), L.updateTime = new Date().toISOString(), L.titles.length === 0) try {
              await La.confirm("标题库已为空，是否删除该标题库？", "确认删除", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
              });
              const ge = Q.value.findIndex(ke => ke.id === m);
              ge !== -1 && Q.value.splice(ge, 1)
            } catch {}
            if (A.success("标题已删除"), kt.value && kt.value.id === m) {
              const ge = Q.value.find(ke => ke.id === m);
              ge && (kt.value = {
                ...ge
              })
            }
          }
        }
      } catch {}
    }, dl = m => {
      Ze.value = m, ze.value = {
        name: m.name
      }, kt.value && kt.value.id === m.id && (be.value = !1), _e.value = !0
    }, Nl = async () => {
      if (!ze.value.name.trim()) {
        A.warning("请输入标题组名称");
        return
      }
      if (Ze.value) try {
        await jf({
          id: Ze.value.id,
          name: ze.value.name.trim()
        }), await Ot();
        const m = Ze.value.id;
        if (kt.value && kt.value.id === m) {
          const r = Q.value.find(L => L.id === m);
          r && (kt.value = {
            ...r
          })
        }
        A.success("标题组已更新"), _e.value = !1
      } catch (m) {
        console.error("修改标题组失败:", m), A.error(m.message || "修改标题组失败，请稍后重试")
      }
    }, kn = async m => {
      try {
        await La.confirm("确定要删除这个标题库吗？将同时删除其中的所有标题", "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }), await qf({
          id: m
        }), await Ot(), kt.value && kt.value.id === m && (be.value = !1, kt.value = null), A.success("标题库已删除")
      } catch (r) {
        r !== "cancel" && r !== "close" && (console.error("删除标题组失败:", r), A.error(r.message || "删除标题组失败，请稍后重试"))
      }
    }, Cn = async m => {
      try {
        await navigator.clipboard.writeText(m), A.success("标题已复制到剪贴板")
      } catch {
        A.error("复制失败")
      }
    }, ll = m => {
      if (!m) return "";
      const r = new Date(m),
        D = new Date - r,
        ge = Math.floor(D / (1e3 * 60 * 60 * 24));
      if (ge === 0) {
        const ke = Math.floor(D / 36e5);
        if (ke === 0) {
          const Vt = Math.floor(D / 6e4);
          return Vt <= 0 ? "刚刚" : `${Vt}分钟前`
        }
        return `${ke}小时前`
      } else return ge < 7 ? `${ge}天前` : r.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      })
    }, Ul = async () => {
      if (!Qt.value.libraryId) {
        A.warning("请选择标题组");
        return
      }
      if (!Qt.value.keyword.trim()) {
        A.warning("请输入关键词");
        return
      }
      if (!_d.includes(Number(Qt.value.count))) {
        A.warning(`生成数量必须为 ${_d.join("/")} 之一`);
        return
      }
      const m = kd(Qt.value.count);
      if (ie() < m) {
        La.confirm("创作点数余额不足，请先充值", "余额不足", {
          confirmButtonText: "去充值",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          gu.value = !0
        }).catch(() => {});
        return
      }
      const L = Q.value.find(D => D.id === Qt.value.libraryId);
      if (!L) {
        A.error("标题组不存在");
        return
      }
      xa.value = !0;
      try {
        const D = Qt.value.keyword.trim(),
          ge = (Qt.value.requirement || "").trim(),
          ke = ge ? `${D}
标题要求：${ge}` : D;
        await Vf({
          id: Qt.value.libraryId,
          prompt: ke,
          count: Qt.value.count
        }), await Ot(), A.success(`已生成${Qt.value.count}个标题并保存到"${L.name}"，已扣除${m}点数`), Qt.value.keyword = "", Qt.value.requirement = "", Qt.value.count = 20
      } catch (D) {
        console.error("生成标题失败:", D), A.error((D == null ? void 0 : D.message) || "生成失败，请稍后重试")
      } finally {
        xa.value = !1
      }
    }, _l = async m => {
      let r = null,
        L = Qt.value.libraryId;
      try {
        if (Qt.value.isNewLibrary || !L) {
          const ke = Qt.value.libraryName.trim() || Lt(),
            Vt = await Fd({
              name: ke
            }),
            _a = new Date().toISOString(),
            Zt = {
              id: Vt.id || Vt.group_id || Date.now(),
              name: Vt.name || ke,
              category: "",
              createTime: Vt.createTime || Vt.create_time || _a,
              updateTime: Vt.updateTime || Vt.update_time || _a,
              titles: []
            };
          Q.value.unshift(Zt), r = Zt
        } else r = Q.value.find(ke => ke.id === L);
        if (!r) {
          A.error("标题库不存在");
          return
        }
        const D = r.titles.map(ke => ke.text || ke),
          ge = [m.trim(), ...D];
        await Es({
          id: r.id,
          titles: ge
        }), await Ot(), A.success("标题已保存到标题库")
      } catch (D) {
        console.error("保存标题失败:", D), A.error(D.message || "保存标题失败，请稍后重试")
      }
    }, Tn = () => {
      let m = null,
        r = Qt.value.libraryId;
      if (Qt.value.isNewLibrary || !r) {
        const L = Qt.value.libraryName.trim() || Lt(),
          D = {
            id: Date.now(),
            name: L,
            category: "",
            createTime: new Date().toISOString(),
            titles: []
          };
        Q.value.unshift(D), m = D
      } else m = Q.value.find(L => L.id === r);
      if (!m) {
        A.error("标题库不存在");
        return
      }
      Kt.value.forEach((L, D) => {
        const ge = {
          id: Date.now() + D,
          text: L.trim(),
          createTime: new Date().toISOString()
        };
        m.titles.unshift(ge)
      }), A.success(`已保存${Kt.value.length}个标题到标题库`), me.value = !1
    }, Dn = () => {
      const m = Kt.value.join(`
`),
        r = new Blob([m], {
          type: "text/plain;charset=utf-8"
        }),
        L = URL.createObjectURL(r),
        D = document.createElement("a");
      D.href = L, D.download = `标题库_${new Date().toISOString().split("T")[0]}.txt`, D.click(), URL.revokeObjectURL(L), A.success("下载成功")
    }, An = p([{
      id: "deepseek_r1",
      name: "Deepseek R1",
      description: "高性能推理模型，适合复杂内容生成"
    }, {
      id: "doubao",
      name: "豆包大模型",
      description: "字节跳动大模型，擅长创意写作"
    }, {
      id: "yuanbao",
      name: "腾讯元宝",
      description: "腾讯自研大模型，平衡性能与速度"
    }, {
      id: "tongyi",
      name: "通义千问",
      description: "阿里云大模型，专业内容生成"
    }, {
      id: "wenxiaoyan",
      name: "百度文小言",
      description: "百度智能创作模型，快速响应"
    }]), dn = p([]), $n = () => [], Xe = () => {
      var D;
      const m = Array.isArray((D = N.value) == null ? void 0 : D.aiModel) ? N.value.aiModel : [],
        r = new Set(An.value.map(ge => ge.id)),
        L = m.map(ge => String(ge || "").trim()).filter(ge => ge && r.has(ge));
      dn.value = L
    };
  dn.value = $n(), oa(() => {
    var m;
    return (m = N.value) == null ? void 0 : m.aiModel
  }, m => {
    Array.isArray(m) && m.length > 0 && Xe()
  }, {
    deep: !0
  });
  const se = async () => {
    var m;
    if (dn.value.length === 0) {
      A.warning("请至少选择一个AI模型");
      return
    }
    try {
      await fr({
        ai_model: dn.value
      }), N.value.aiModel = [...dn.value];
      try {
        window.dispatchEvent(new CustomEvent("localStorage-change", {
          detail: {
            key: "userInfo"
          }
        }))
      } catch (r) {
        console.error("触发更新事件失败:", r)
      }
      A.success("AI模型设置已保存")
    } catch (r) {
      console.error("Failed to save AI model settings:", r);
      const L = (r == null ? void 0 : r.message) || ((m = r == null ? void 0 : r.response) == null ? void 0 : m.msg) || "保存失败，请重试";
      A.error(L)
    }
  }, Tt = p({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  }), Ht = p(null), Pa = Le(() => !!N.value.hasPassword);
  oa(() => i.query.tab, m => {
    if (m === "ai_model") {
      Y.value = "wallet", De("wallet");
      return
    }
    if (m === "download_record") {
      Y.value = "wallet", De("wallet");
      return
    }
    m && Y.value !== m ? Y.value = m : !m && Y.value !== "wallet" && (Y.value = "wallet"), De(m || Y.value), m === "title_library" && (console.log("路由切换到标题库，立即加载数据"), Da(() => {
      Ot()
    })), m === "material_library" && Da(() => {
      pe()
    })
  }, {
    immediate: !0
  });
  let Va = !1,
    X = !1;
  oa(Y, m => {
    De(m), m === "distribution2" && mn() && ou(), d.value && Gv(), m === "title_library" && (console.log("切换到标题库标签页，重新加载数据"), Ot()), m === "material_library" && pe(), !Va && i.query.tab !== m && (m === "distribution2" && (X = !0), o.replace({
      path: "/user",
      query: m === "wallet" ? {} : {
        tab: m
      }
    })), Va = !1, m === "recharge_record" && Fi(), m === "wallet" && on()
  });
  const le = p(!1),
    ot = p(!1),
    vt = p(!1),
    bt = p(!1);
  oa(() => i.query.bind, m => {
    String(m || "") === "wechat" && mn() && (bt.value = !0)
  }, {
    immediate: !0
  });
  const Jt = p(""),
    Ra = p(!1),
    Ca = p(!1),
    Ba = p(null),
    Qa = [{
      label: "我的会员",
      name: "wallet",
      icon: M_
    }, {
      label: "我的素材库",
      name: "material_library",
      icon: to
    }, {
      label: "密码管理",
      name: "password",
      icon: Em
    }, {
      label: "代理中心",
      name: "distribution2",
      icon: Ko
    }, {
      label: "我的优惠券",
      name: "my_coupons",
      icon: $1
    }, {
      label: "AI模型设置",
      name: "ai_model",
      icon: Xy
    }, {
      label: "我的创作信息模板",
      name: "creation_template",
      icon: Ci
    }, {
      label: "我的人设",
      name: "my_persona",
      icon: _n
    }, {
      label: "我的标题库",
      name: "title_library",
      icon: Cr
    }, {
      label: "任务记录",
      name: "task_record",
      icon: O_
    }, {
      label: "发布记录",
      name: "publish_record",
      icon: Ko
    }, {
      label: "我的活码",
      name: "my_live_code",
      icon: ng
    }, {
      label: "分销推广",
      name: "distribution",
      icon: Ko
    }, {
      label: "充值记录",
      name: "recharge_record",
      icon: Tm
    }, {
      label: "下载记录",
      name: "download_record",
      icon: pr
    }],
    rl = p(null),
    sa = p({
      email: "",
      code: ""
    }),
    Ga = p(!1),
    ol = p(0),
    Sl = p(!1);
  let In = null;
  const wo = p(null),
    nn = p({
      phone: "",
      code: ""
    }),
    Pn = p(!1),
    Gn = p(0),
    co = p(!1);
  let Pt = null;
  const yl = p(null),
    Mn = p(!1),
    vn = p("idle"),
    Nn = p(""),
    zo = p(null),
    On = Le(() => {
      switch (vn.value) {
        case "loading":
          return "二维码加载中...";
        case "scanned":
          return "扫码成功，请在微信中确认";
        case "success":
          return "绑定成功";
        case "expired":
          return "二维码已失效，点击刷新";
        case "error":
          return "二维码获取失败，请点击刷新";
        default:
          return "请使用微信扫描二维码进行绑定"
      }
    });
  oa(vt, m => {
    m || cm()
  }), oa(ot, m => {
    m || dm()
  });
  const ti = {
      ai: "批量大字报图文",
      import: "批量大字报图文"
    },
    _o = {
      original: "AI灵感参考",
      ai: "AI灵感参考"
    },
    ci = m => {
      if (m == null) return null;
      const r = String(m).toLowerCase();
      return r ? r.includes("import") || r.includes("导入") || r.includes("plb") ? "import" : r.includes("single") || r.includes("ai") || r.includes("title") || r.includes("pla") ? "ai" : null : null
    },
    fe = m => {
      if (!m) return "ai";
      const r = ci(m.batchMode) || ci(m.mode);
      if (r) return r;
      const L = m.orderNo ? String(m.orderNo).toLowerCase() : "";
      if (L.startsWith("plb")) return "import";
      if (L.startsWith("pla")) return "ai";
      const D = m.taskId ? String(m.taskId).toLowerCase() : "";
      if (D.startsWith("task2")) return "import";
      if (D.startsWith("task1")) return "ai";
      const ge = m.title ? String(m.title) : "",
        ke = ge.toLowerCase();
      return ge.includes("批量导入") || ke.includes("批量导入") ? "import" : (ge.includes("AI批量") || ke.includes("ai批量"), "ai")
    },
    q = m => {
      const r = fe(m);
      return ti[r] || ti.ai
    },
    wt = m => {
      if (m == null) return null;
      const r = String(m).toLowerCase();
      return r ? r.includes("ai") || r.includes("generate") || r.includes("new") ? "ai" : r.includes("original") || r.includes("keyword") || r.includes("usekeyword") || r.includes("原标题") ? "original" : r.includes("创作新标题") ? "ai" : null : null
    },
    Gt = m => {
      if (!m) return "original";
      const r = wt(m.copyMode) || wt(m.titleMode) || wt(m.modeDetail) || wt(m.modeExtra);
      if (r) return r;
      if ((m.taskId ? String(m.taskId).toLowerCase() : "").includes("ai") || (m.title ? String(m.title) : "").includes("全新视角")) return "ai";
      const ge = m.stage ? String(m.stage).toLowerCase() : "";
      return ge.includes("titles") || ge.includes("title") ? "ai" : "original"
    },
    za = m => {
      const r = Gt(m);
      return _o[r] || _o.original
    },
    Ua = p([]),
    Ta = p(1),
    ja = p(20),
    sl = p(0),
    Gl = p(!1),
    fl = m => {
      const r = D => !D || D <= 0 ? "-" : new Date(D * 1e3).toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).replace(/\//g, "-"),
        L = m.type === 0 ? m.points : -m.points;
      return {
        id: m.id,
        orderNo: String(m.id),
        type: m.event || (m.type === 0 ? "充值" : "消耗"),
        time: r(m.createtime),
        amount: L,
        remainingPoints: m.left_points || 0
      }
    },
    Pl = m => {
      const r = String(m ?? "").trim();
      if (!r) return {};
      if (r.includes("充值")) return {
        "--btc-bg": "#ECFDF5",
        "--btc-bd": "#BBF7D0",
        "--btc-fg": "#166534"
      };
      if (r.includes("消耗")) return {
        "--btc-bg": "#e6f4ff",
        "--btc-bd": "#ede9fe",
        "--btc-fg": "#9F1239"
      };
      const L = Number(r);
      if (!Number.isNaN(L)) try {
        const ke = _m(L);
        return {
          "--btc-bg": ke["--wt-bg"],
          "--btc-bd": ke["--wt-bd"],
          "--btc-fg": ke["--wt-fg"]
        }
      } catch {}
      const ge = {
        一句话图文: 0,
        一键生成图文: 1,
        批量大字报图文: 2,
        AI灵感参考: 3,
        一句话图文Pro: 4,
        一句话图文Max: 5,
        自定义图文: 6,
        指定文案Pro: 7,
        指定文案Max: 8,
        传图生成图文: 9,
        产品图Pro: 10,
        产品图Max: 11
      } [r];
      if (ge !== void 0) {
        const ke = _m(ge);
        return {
          "--btc-bg": ke["--wt-bg"],
          "--btc-bd": ke["--wt-bd"],
          "--btc-fg": ke["--wt-fg"]
        }
      }
      return {
        "--btc-bg": "rgba(99, 102, 241, 0.08)",
        "--btc-bd": "rgba(99, 102, 241, 0.14)",
        "--btc-fg": "#3730a3"
      }
    },
    on = async () => {
      if (!mn()) {
        Ua.value = [];
        return
      }
      if (!Gl.value) {
        Gl.value = !0;
        try {
          const m = await $f({
            page: Ta.value,
            size: ja.value
          });
          m && m.rows ? (Ua.value = m.rows.map(fl), m.pages && (sl.value = m.pages.total || 0)) : (Ua.value = [], sl.value = 0)
        } catch (m) {
          console.error("加载点数明细失败:", m), A.error("加载点数明细失败：" + ((m == null ? void 0 : m.message) || "请稍后重试")), Ua.value = [], sl.value = 0
        } finally {
          Gl.value = !1
        }
      }
    }, vo = async () => {
      var m;
      if (!pu.value.trim()) {
        A.warning("请输入卡密兑换码");
        return
      }
      om.value = !0;
      try {
        const r = await Pf(pu.value.trim());
        if ((r == null ? void 0 : r.code) === 200) {
          A.success(r.msg || "卡密兑换成功");
          try {
            await zl({
              force: !0
            }) && (window.dispatchEvent(new CustomEvent("localStorage-change", {
              detail: {
                key: "userInfo"
              }
            })), window.dispatchEvent(new CustomEvent("payment-success")), Ae.value = ie(), Y.value === "wallet" && on())
          } catch (L) {
            console.warn("刷新用户信息失败:", L)
          }
          fu.value = !1, pu.value = ""
        } else A.error((r == null ? void 0 : r.msg) || "卡密兑换失败")
      } catch (r) {
        const L = ((m = r == null ? void 0 : r.response) == null ? void 0 : m.msg) || (r == null ? void 0 : r.message) || "卡密兑换失败，请稍后重试";
        A.error(L)
      } finally {
        om.value = !1
      }
    }, hn = p(!1), oo = p(""), ko = p(!1), Un = p(""), Rn = p(!1), ia = p(!1);
  let kl = null;

  function sn() {
    const m = navigator.userAgent.toLowerCase(),
      r = m.includes("micromessenger"),
      L = m.includes("android") || m.includes("iphone") || m.includes("ipad"),
      D = typeof window < "u" && window.__wxjs_environment === "miniprogram";
    return r && L && !D
  }
  const Co = () => hp({
      user: N.value,
      fetchLatest: async () => {
        const m = await zl({
          force: !0
        });
        return m && (N.value = {
          ...N.value,
          ...m
        }), N.value
      },
      onNeedBind: () => vm()
    }),
    Us = async () => {
      var r;
      if (Di.value < 1) {
        A.warning("请选择购买数量");
        return
      }
      const m = Mi.value.find(L => L.id === ys.value);
      if (!m) {
        A.warning("请选择套餐");
        return
      }
      sm.value = !0;
      try {
        if (nr.value === "wallet") {
          await Rs(m);
          return
        }
        if (!await Co()) return;
        const L = navigator.userAgent.toLowerCase(),
          D = L.includes("android") || L.includes("iphone") || L.includes("ipad");
        sn() ? await qs(m, "mppay") : L.includes("micromessenger") && !D ? await js(m) : D || d.value ? await qs(m, "h5pay") : await js(m)
      } catch (L) {
        const D = ((r = L == null ? void 0 : L.response) == null ? void 0 : r.msg) || (L == null ? void 0 : L.message) || "创建订单失败，请稍后重试";
        A.error(D)
      } finally {
        sm.value = !1
      }
    }, Rs = async m => {
      const r = Number(yu.value || 0),
        L = Number(Jc.value || 0);
      if (L < r) {
        A.warning(`余额不足，当前可提现 ${L.toFixed(2)}，需支付 ${r.toFixed(2)}`);
        return
      }
      let D = "";
      try {
        const {
          value: ke
        } = await La.prompt(`本次将从余额扣除 ¥${r.toFixed(2)}，支付成功后立即发放卡密、不可撤销。`, "余额支付确认", {
          confirmButtonText: "确认支付",
          cancelButtonText: "取消",
          inputType: "password",
          inputPlaceholder: "请输入支付密码",
          inputValidator: Vt => Vt && String(Vt).trim() ? !0 : "请输入支付密码",
          closeOnClickModal: !1
        });
        D = String(ke || "").trim()
      } catch {
        return
      }
      const ge = await Ui({
        pay_type: "wallet",
        good_id: m.id,
        pay_count: Di.value,
        pay_password: D
      });
      ge != null && ge.order_no && (Un.value = ge.order_no), await $().catch(() => {}), Aa()
    }, js = async m => {
      ai.value = !1, hn.value = !0, ko.value = !0, oo.value = "";
      try {
        const r = await Ui({
          pay_type: "wxpay",
          good_id: m.id,
          pay_count: Di.value
        });
        if (!r || !r.order_no) throw new Error((r == null ? void 0 : r.msg) || "创建订单失败，请重试");
        if (Un.value = r.order_no, r.code_url) oo.value = await Ln.toDataURL(r.code_url, {
          width: 200,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        }), It();
        else throw new Error("未获取到支付二维码")
      } catch (r) {
        A.error((r == null ? void 0 : r.message) || "获取支付二维码失败，请重试"), hn.value = !1, ai.value = !0
      } finally {
        ko.value = !1
      }
    }, qs = async (m, r) => {
      try {
        const L = sn(),
          D = await Ui({
            pay_type: r,
            good_id: m.id,
            pay_count: Di.value
          });
        if (!D || !D.order_no) throw new Error((D == null ? void 0 : D.msg) || "创建订单失败，请重试");
        if (Un.value = D.order_no, L && D.code_url && typeof D.code_url == "object") await He(D.code_url), Aa();
        else if (typeof D.code_url == "string") window.location.href = D.code_url;
        else throw new Error("支付参数异常，请重试")
      } catch (L) {
        const D = (L == null ? void 0 : L.message) || (L == null ? void 0 : L.msg) || "发起支付失败，请重试";
        !D.includes("cancel") && !D.includes("取消") && A.error(D)
      }
    }, He = m => new Promise((r, L) => {
      typeof window.WeixinJSBridge > "u" ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", () => G(m, r, L), !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", () => G(m, r, L)), document.attachEvent("onWeixinJSBridgeReady", () => G(m, r, L))) : G(m, r, L)
    }), G = (m, r, L) => {
      window.WeixinJSBridge.invoke("getBrandWCPayRequest", {
        appId: m.appId,
        timeStamp: m.timeStamp,
        nonceStr: m.nonceStr,
        package: m.package,
        signType: m.signType,
        paySign: m.paySign
      }, function(D) {
        D.err_msg === "get_brand_wcpay_request:ok" ? r(D) : D.err_msg === "get_brand_wcpay_request:cancel" ? L(new Error("用户取消支付")) : L(new Error("支付失败：" + D.err_msg))
      })
    }, It = () => {
      Rn.value = !0, kl && clearInterval(kl), kl = setInterval(async () => {
        try {
          if (!Un.value) return;
          const m = await Ds({
            order_no: Un.value
          });
          m && (m.status === 1 || m.pay_status === 1 || m.is_paid) && Aa()
        } catch (m) {
          console.error("查询支付状态失败:", m)
        }
      }, 3e3)
    }, da = () => {
      Rn.value = !1, kl && (clearInterval(kl), kl = null)
    }, na = () => {
      da(), hn.value = !1, ai.value = !0, A.info("已取消支付")
    }, la = async () => {
      if (!Un.value) {
        A.warning("订单号为空");
        return
      }
      ia.value = !0;
      try {
        const m = await Ds({
          order_no: Un.value
        });
        m && (m.status === 1 || m.pay_status === 1 || m.is_paid) ? Aa() : A.warning("暂未收到支付结果，请稍后再试")
      } catch {
        A.error("查询支付状态失败，请稍后重试")
      } finally {
        ia.value = !1
      }
    }, Aa = () => {
      da(), hn.value = !1;
      const m = Mi.value.find(r => r.id === ys.value);
      A.success(`支付成功！${Di.value} 张${(m==null?void 0:m.name)||""}卡密已存入您的卡密列表`), iu.value = !0, cu(1), Di.value = 1, ys.value = Mi.value.length > 0 ? Mi.value[0].id : 1, Un.value = "", oo.value = ""
    }, Kl = m => {
      ja.value = m, Ta.value = 1, on()
    }, ql = m => {
      Ta.value = m, on()
    }, il = async () => {
      await on()
    }, Za = p([]), hl = p(1), Yl = p(20), Cl = p(0), mo = p(!1), Jl = () => {
      try {
        const m = "downloadRecords.v1",
          r = localStorage.getItem(m);
        if (r) {
          const L = JSON.parse(r),
            D = [],
            ge = new Map,
            ke = L.sort((Vt, _a) => {
              const Zt = new Date(Vt.payTime.replace(/-/g, "/")).getTime();
              return new Date(_a.payTime.replace(/-/g, "/")).getTime() - Zt
            });
          for (const Vt of ke) {
            const _a = `${Vt.productName}_${Vt.productCategory}`;
            ge.has(_a) || (ge.set(_a, !0), D.push(Vt))
          }
          D.length < L.length && (localStorage.setItem(m, JSON.stringify(D)), window.dispatchEvent(new Event("storage")), window.dispatchEvent(new CustomEvent("localStorage-change", {
            detail: {
              key: m
            }
          })))
        }
      } catch (m) {
        console.error("清理重复下载记录失败:", m)
      }
    }, Pi = async () => {
      try {
        await La.confirm("确定要清空所有下载记录吗？此操作不可恢复！", "确认清空", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        const m = "downloadRecords.v1";
        localStorage.removeItem(m), window.dispatchEvent(new CustomEvent("localStorage-change", {
          detail: {
            key: m
          }
        })), A.success("下载记录已清空")
      } catch {}
    }, io = Le(() => {
      try {
        const m = "downloadRecords.v1",
          r = localStorage.getItem(m);
        if (r) {
          const L = JSON.parse(r),
            D = [],
            ge = new Map,
            ke = L.sort((Vt, _a) => {
              const Zt = new Date(Vt.payTime.replace(/-/g, "/")).getTime();
              return new Date(_a.payTime.replace(/-/g, "/")).getTime() - Zt
            });
          for (const Vt of ke) {
            const _a = `${Vt.productName}_${Vt.productCategory}`;
            ge.has(_a) || (ge.set(_a, !0), D.push(Vt))
          }
          return D
        }
        return []
      } catch (m) {
        return console.error("读取下载记录失败:", m), []
      }
    }), di = Le(() => {
      var r, L, D, ge;
      const m = ((r = N.value) == null ? void 0 : r.vipName) || ((L = N.value) == null ? void 0 : L.vip_name);
      return m || ((D = N.value) != null && D.isVip || (ge = N.value) != null && ge.isvip ? "会员用户" : "普通用户")
    });
  Le(() => {
    var L, D;
    const m = ((L = N.value) == null ? void 0 : L.vipExpireTime) ?? ((D = N.value) == null ? void 0 : D.vip_expiretime);
    return m ? typeof m == "string" && m.includes("-") ? m : y(m) || null : null
  });
  const Dt = Le(() => {
      var ke, Vt;
      const m = ((ke = N.value) == null ? void 0 : ke.vipExpireTime) ?? ((Vt = N.value) == null ? void 0 : Vt.vip_expiretime);
      if (!m) return "";
      let r;
      if (typeof m == "string" && m.includes("-")) r = new Date(m);
      else {
        const _a = Number(m);
        if (!_a || Number.isNaN(_a)) return "";
        r = new Date(_a < 1e12 ? _a * 1e3 : _a)
      }
      if (Number.isNaN(r.getTime())) return "";
      const L = r.getFullYear(),
        D = r.getMonth() + 1,
        ge = r.getDate();
      return `${L}年${D}月${ge}号到期`
    }),
    El = Le(() => {
      var ke, Vt;
      const m = ((ke = N.value) == null ? void 0 : ke.vipExpireTime) ?? ((Vt = N.value) == null ? void 0 : Vt.vip_expiretime);
      if (!m) return null;
      let r;
      if (typeof m == "string" && m.includes("-")) r = new Date(m);
      else {
        const _a = Number(m);
        if (!_a || Number.isNaN(_a)) return null;
        r = new Date(_a < 1e12 ? _a * 1e3 : _a)
      }
      if (Number.isNaN(r.getTime())) return null;
      const L = new Date,
        D = r.getTime() - L.getTime(),
        ge = Math.ceil(D / (1e3 * 60 * 60 * 24));
      return ge < 0 ? 0 : ge
    }),
    xn = Le(() => {
      const m = N.value;
      return m ? !!(m.vipName || m.vip_name || m.isVip || m.isvip) : !1
    }),
    Xn = Le(() => {
      const m = di.value;
      return !m || m === "普通用户" ? "badge-default" : m.includes("三") || m.includes("至尊") || m.includes("尊享") ? "badge-purple" : m.includes("年") ? "badge-red" : "badge-default"
    }),
    vi = p({}),
    Vi = async () => {
      if (mn()) try {
        const m = await Ls();
        m && Array.isArray(m) && m.forEach(r => {
          vi.value[r.id] = r
        })
      } catch (m) {
        console.warn("加载商品信息失败:", m)
      }
    }, zv = m => {
      const r = vi.value[m];
      return r && r.points ? r.points : null
    }, Lv = m => ({
      0: "pending",
      1: "success",
      2: "failed",
      3: "cancelled"
    })[m] || "pending", Fs = m => ({
      wxpay: "wechat",
      alipay: "alipay"
    })[m] || m, Ws = m => {
      const r = m.good_id,
        L = zv(r),
        D = ge => !ge || ge <= 0 ? "-" : new Date(ge * 1e3).toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).replace(/\//g, "-");
      return {
        id: m.id,
        orderNo: m.order_no,
        paymentMethod: Fs(m.pay_type),
        amount: m.pay_price || m.order_price || "0.00",
        orderPrice: m.order_price || "0.00",
        points: L,
        status: Lv(m.order_status),
        createTime: D(m.createtime),
        payTime: m.pay_time_text || D(m.pay_time),
        orderDesc: m.order_desc || "",
        goodId: r
      }
    }, Fi = async () => {
      if (!mn()) {
        Za.value = [];
        return
      }
      if (!mo.value) {
        mo.value = !0;
        try {
          const m = await Tf({
            page: hl.value,
            size: Yl.value
          });
          m && m.rows ? (Za.value = m.rows.map(Ws), m.pages && (Cl.value = m.pages.total || 0)) : (Za.value = [], Cl.value = 0)
        } catch (m) {
          console.error("加载充值记录失败:", m), A.error("加载充值记录失败：" + ((m == null ? void 0 : m.message) || "请稍后重试")), Za.value = [], Cl.value = 0
        } finally {
          mo.value = !1
        }
      }
    }, wc = async () => {
      await Vi(), await Fi()
    }, Dv = m => {
      Yl.value = m, hl.value = 1, Fi()
    }, Mv = m => {
      hl.value = m, Fi()
    }, Yr = p(0), Ro = p([]), cs = p(!1), Ov = p(1), Ao = p(10), Gs = p(0), Js = async () => {
      if (!mn()) {
        taskList.value = [], Gs.value = 0;
        return
      }
      if (!cs.value) {
        cs.value = !0;
        try {
          const m = go.value === "ongoing" ? "running" : "finish",
            r = await xf({
              type: m,
              page: Ov.value,
              size: Ao.value
            });
          if (r) {
            let L = [],
              D = 0;
            r.rows && Array.isArray(r.rows) ? (L = r.rows, r.pages && r.pages.total !== void 0 ? D = r.pages.total : r.total !== void 0 && (D = r.total)) : r.data ? (r.data.rows && Array.isArray(r.data.rows) && (L = r.data.rows), r.data.pages && r.data.pages.total !== void 0 ? D = r.data.pages.total : r.data.total !== void 0 && (D = r.data.total)) : Array.isArray(r) && (L = r, D = r.length);
            const ge = L.map(ke => {
              let Vt = [];
              if (ke.titles) try {
                typeof ke.titles == "string" ? Vt = JSON.parse(ke.titles) : Array.isArray(ke.titles) && (Vt = ke.titles)
              } catch (gi) {
                console.error("解析 titles 失败:", gi, ke.titles), Vt = []
              }
              let _a = {};
              if (ke.param) try {
                typeof ke.param == "string" ? _a = JSON.parse(ke.param) : typeof ke.param == "object" && (_a = ke.param)
              } catch (gi) {
                console.error("解析 param 失败:", gi, ke.param), _a = {}
              }
              let Zt = "";
              if (ke.createtime) {
                const gi = typeof ke.createtime == "number" ? ke.createtime : parseInt(ke.createtime);
                if (!isNaN(gi)) {
                  const Zn = new Date(gi * 1e3),
                    fi = ud => String(ud).padStart(2, "0");
                  Zt = `${Zn.getFullYear()}-${fi(Zn.getMonth()+1)}-${fi(Zn.getDate())} ${fi(Zn.getHours())}:${fi(Zn.getMinutes())}:${fi(Zn.getSeconds())}`
                }
              }
              let Xa = 0,
                nl = "generating_titles";
              ke.status === 0 ? (ke.count > 0 && (Xa = Math.round(ke.succ / ke.count * 100)), nl = "generating_notes") : ke.status === 1 ? (Xa = 50, nl = "title_confirm") : ke.status === 2 && (Xa = 100, nl = "completed");
              let Ya = "single";
              ke.type === 0 ? Ya = "batch" : ke.type === 1 ? Ya = "copy" : ke.type === 2 ? Ya = "batch" : ke.type === 3 && (Ya = "copy");
              let wl = "";
              ke.status === 2 ? wl = ke.name || (Vt && Vt.length > 0 ? Vt[0] : "") || _a.title || _a.desc || "未命名任务" : wl = (Vt && Vt.length > 0 ? Vt[0] : "") || ke.name || _a.title || _a.desc || "未命名任务";
              let Wo = "single";
              return Ya === "copy" ? Wo = "copy" : Ya === "batch" && ((_a.mode || _a.batchMode) === "import" ? Wo = "import" : Wo = "single"), {
                taskId: String(ke.id),
                id: ke.id,
                type: Ya,
                mode: Wo,
                title: wl,
                desc: ke.name || _a.desc || _a.title || wl,
                titles: Vt,
                count: ke.count || 0,
                progress: Xa,
                stage: nl,
                createTime: Zt || new Date().toLocaleString("zh-CN"),
                status: ke.status === 0 ? "ongoing" : ke.status === 1 ? "title_confirm" : "completed",
                rawStatus: ke.status,
                items: Vt && Vt.length > 0 ? Vt.map((gi, Zn) => ({
                  id: Zn,
                  title: gi,
                  status: ke.status === 1 ? "pending" : Zn < ke.succ ? "completed" : "generating"
                })) : [],
                rawData: ke,
                param: _a,
                succ: ke.succ || 0,
                fail: ke.fail || 0
              }
            });
            Ro.value = ge, Gs.value = D
          }
        } catch (m) {
          console.error("加载任务列表失败:", m), A.error((m == null ? void 0 : m.message) || "加载任务列表失败，请稍后重试"), Ro.value = []
        } finally {
          cs.value = !1
        }
      }
    }, Wi = Le(() => {
      Yr.value;
      try {
        const m = [];
        return Ro.value.forEach(r => {
          var ge, ke;
          const L = r.rawStatus !== void 0 ? r.rawStatus : (ge = r.rawData) == null ? void 0 : ge.status,
            D = r.status || ((ke = r.rawData) == null ? void 0 : ke.status);
          (L === 0 || L === 1 || D === "ongoing" || D === "title_confirm") && m.push(r)
        }), m.sort((r, L) => {
          const D = new Date(r.createTime).getTime();
          return new Date(L.createTime).getTime() - D
        }), m
      } catch (m) {
        return console.error("Failed to load ongoing tasks:", m), []
      }
    }), Bv = i.query.subtab === "ongoing" ? "ongoing" : "completed", go = p(Bv);
  oa(go, m => {
    (m === "ongoing" || m === "completed") && Js()
  }, {
    immediate: !0
  }), oa(() => Wi.value.length, m => {
    i.query.subtab !== "completed" && m === 0 && go.value === "ongoing" && (go.value = "completed")
  }, {
    immediate: !0
  });
  const Nv = i.query.subtab === "pending" ? "pending" : i.query.subtab === "published" ? "published" : "pending",
    Io = p(Nv),
    Vn = p(null),
    Hs = p(!1),
    Xr = p(null),
    oe = p(""),
    I = p(null),
    Se = p(!1),
    Ct = p("groups"),
    ua = p([]),
    ra = p([]),
    wa = p({
      googleId: "",
      nickname: "",
      platform: "xhs"
    }),
    tl = p(null),
    pl = p(!1),
    cl = p(null),
    bl = p(!1),
    bn = p([]),
    jo = p(!1),
    Hl = p(null),
    rn = p(new Map),
    Al = {
      nickname: [{
        required: !0,
        message: "请输入账号昵称",
        trigger: "blur"
      }, {
        min: 1,
        max: 50,
        message: "昵称长度在1到50个字符之间",
        trigger: "blur"
      }],
      platform: [{
        required: !0,
        message: "请选择发布平台",
        trigger: "change"
      }]
    },
    Ml = Le(() => {
      const m = [];
      return ua.value.forEach(r => {
        r.accounts.forEach(L => {
          m.push({
            ...L,
            groupId: r.id,
            groupName: r.name
          })
        })
      }), ra.value.forEach(r => {
        m.find(L => L.id === r.id) || m.push(r)
      }), m.sort((r, L) => {
        const D = parseInt(r.googleId) || 0,
          ge = parseInt(L.googleId) || 0;
        return D - ge
      })
    }),
    Tl = Le(() => {
      let m = 0;
      return Ml.value.forEach(r => {
        const L = parseInt(r.googleId) || 0;
        L > m && (m = L)
      }), m + 1
    });
  oa(Ct, m => {
    m === "add" && (wa.value.googleId = String(Tl.value))
  });
  const Bn = () => {
      wa.value = {
        googleId: String(Tl.value),
        nickname: "",
        platform: "xhs"
      }, cl.value = null, tl.value && tl.value.clearValidate()
    },
    fo = async () => {
      if (tl.value) try {
        if (await tl.value.validate(), pl.value = !0, cl.value) try {
          await D0(cl.value.id, wa.value.platform, wa.value.nickname), await Gi(), await mi(), A.success("账号更新成功")
        } catch (m) {
          throw console.error("更新账号失败:", m), A.error("账号更新失败：" + (m.message || "未知错误")), m
        } else try {
          const m = await L0(wa.value.platform, wa.value.nickname);
          await Gi(), await mi(), A.success("账号创建成功")
        } catch (m) {
          throw console.error("创建账号失败:", m), m
        }
        Bn()
      } catch (m) {
        m !== !1 && (!m.message || m.message === "未知错误") && (console.error(cl.value ? "更新账号失败:" : "创建账号失败:", m), A.error(cl.value ? "更新账号失败，请重试" : "创建账号失败，请重试"))
      } finally {
        pl.value = !1
      }
    }, Ol = m => {
      cl.value = m, wa.value = {
        googleId: m.googleId,
        nickname: m.nickname,
        platform: m.platform || "xhs"
      }, Ct.value = "add"
    }, Sn = async m => {
      try {
        await La.confirm("确定要删除该账号吗？此操作不可恢复。", "确认删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        try {
          await M0(m), await Gi(), await mi(), A.success("账号已删除")
        } catch (r) {
          throw console.error("删除账号失败:", r), A.error("删除账号失败：" + (r.message || "未知错误")), r
        }
      } catch (r) {
        r !== "cancel" && console.error("删除账号失败:", r)
      }
    }, xo = async () => {
      try {
        await La.confirm("确定要清空所有账号吗？此操作不可恢复，所有账号数据将被删除。", "确认清空", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        });
        try {
          await B0(), ra.value = [], ua.value = [], A.success("所有账号已清空")
        } catch (m) {
          throw console.error("清空账号失败:", m), A.error("清空账号失败：" + (m.message || "未知错误")), m
        }
      } catch (m) {
        m !== "cancel" && console.error("清空账号失败:", m)
      }
    }, Gi = async () => {
      try {
        const m = await O0();
        let r = [];
        Array.isArray(m) ? r = m : m != null && m.data && Array.isArray(m.data) ? r = m.data : m != null && m.rows && Array.isArray(m.rows) ? r = m.rows : m != null && m.list && Array.isArray(m.list) && (r = m.list), r.length > 0 ? (ra.value = r.map(L => ({
          ...L,
          id: L.id,
          googleId: L.googleId || L.googleid || L.google_id,
          nickname: L.nickname || "",
          platform: L.platform || "xhs",
          note_count: L.note_count || L.noteCount || 0,
          createdAt: L.createdAt || L.created_at || (L.createtime ? new Date(L.createtime * 1e3).toISOString() : new Date().toISOString())
        })), ua.value.length === 0 ? ua.value.push({
          id: Date.now(),
          name: "默认分组",
          accounts: [...ra.value]
        }) : ua.value[0].accounts = [...ra.value]) : (ra.value = [], ua.value = [])
      } catch (m) {
        console.error("从接口加载账号列表失败:", m), ra.value = [], ua.value = []
      }
    }, _c = () => {
      Ct.value = "groups", Bn()
    }, mi = async () => {}, Ji = () => {
      rn.value = new Map
    }, Zr = () => {}, Lo = () => {
      bl.value = !1, bn.value = [], Hl.value = null, jo.value = !1
    }, kc = m => {
      bn.value = m.map(r => String(r.id || r.globalId || r.workId || r.work_id)).filter(r => r && r !== "undefined" && r !== "null")
    }, Uv = async () => {
      if (!Hl.value) {
        A.warning("请选择要分配的账号");
        return
      }
      if (bn.value.length === 0) {
        A.warning("请先选择要分配的作品");
        return
      }
      try {
        const m = Ml.value.find(r => String(r.id) === String(Hl.value) || String(r.googleId) === String(Hl.value));
        if (!m) {
          A.error("找不到选中的账号");
          return
        }
        try {
          const r = bn.value.map(L => String(L)).filter(L => L && L !== "undefined" && L !== "null").join(",");
          await N0(r, m.id), bn.value.forEach(L => {
            rn.value.set(String(L), String(m.googleId))
          }), Zr(), await mi(), A.success(`成功将 ${bn.value.length} 个作品分配给账号"${m.nickname}"`), jo.value = !1, Lo()
        } catch (r) {
          throw console.error("批量分配作品失败:", r), A.error("分配失败：" + (r.message || "未知错误")), r
        }
      } catch (m) {
        console.error("批量分配作品失败:", m), m.message && m.message !== "未知错误" || A.error("分配失败，请重试")
      }
    }, Cc = async () => {
      try {
        await La.confirm('确定要清除所有作品的账号归属吗？此操作会将所有作品的归属发布账号设置为"无"。', "确认清除", {
          confirmButtonText: "确定清除",
          cancelButtonText: "取消",
          type: "warning"
        });
        try {
          const m = await U0(),
            r = rn.value.size;
          rn.value.clear(), Zr(), await mi(), A.success("已清除所有账号归属")
        } catch (m) {
          throw console.error("清除所有账号归属失败:", m), A.error("清除失败：" + (m.message || "未知错误")), m
        }
      } catch (m) {
        m !== "cancel" && console.error("清除所有账号归属失败:", m)
      }
    }, ds = () => {
      if (!Vn.value) {
        setTimeout(() => ds(), 100);
        return
      }
      const m = Vn.value.$el || Vn.value;
      if (!m) {
        setTimeout(() => ds(), 100);
        return
      }
      const r = m.querySelector(".el-tabs__nav");
      if (!r) {
        setTimeout(() => ds(), 100);
        return
      }
      if (r.querySelector(".tab-action-buttons-inline")) return;
      const L = document.createElement("div");
      L.className = "tab-action-buttons-inline tab-action-buttons-right";
      const D = document.createElement("button");
      D.textContent = "去下载助手多账户发布", D.style.background = "linear-gradient(135deg, #67c23a 0%, #85ce61 100%)", D.style.backgroundColor = "#67c23a", D.style.backgroundImage = "linear-gradient(135deg, #67c23a 0%, #85ce61 100%)", D.style.color = "#ffffff", D.style.border = "1px solid #67c23a", D.style.borderRadius = "4px", D.style.padding = "0 10px", D.style.height = "28px", D.style.fontSize = "12px", D.style.lineHeight = "1", D.style.display = "inline-flex", D.style.alignItems = "center", D.style.justifyContent = "center", D.style.whiteSpace = "nowrap", D.style.boxSizing = "border-box", D.style.cursor = "pointer", D.addEventListener("mouseenter", () => {
        D.style.background = "linear-gradient(135deg, #85ce61 0%, #67c23a 100%)", D.style.backgroundColor = "#85ce61", D.style.backgroundImage = "linear-gradient(135deg, #85ce61 0%, #67c23a 100%)", D.style.borderColor = "#85ce61"
      }), D.addEventListener("mouseleave", () => {
        D.style.background = "linear-gradient(135deg, #67c23a 0%, #85ce61 100%)", D.style.backgroundColor = "#67c23a", D.style.backgroundImage = "linear-gradient(135deg, #67c23a 0%, #85ce61 100%)", D.style.borderColor = "#67c23a"
      }), D.onclick = () => {
        const {
          href: ge
        } = o.resolve({
          path: "/fabu"
        });
        window.open(ge, "_blank", "noopener,noreferrer")
      }, L.appendChild(D), r.appendChild(L)
    }, zi = p(1), mt = p(10), Na = p(1), ul = p(10), so = p([]), vs = p([]), Hi = p(!1), ms = p(!1), Li = p(0), eu = p(0), {
      liveCodes: Mp,
      loaded: Db,
      total: Mb,
      ensureLiveCodes: Ob,
      assignWorksToLiveCode: Bb,
      removeWorksFromLiveCode: Nb,
      rememberWorkLiveCode: Op,
      rememberWorkLiveCodeFromRows: Ub,
      workLiveCodeOf: Rb,
      liveCodeName: jb
    } = yc(), tu = p(new Set), au = m => tu.value.has(Dr(m)), Rv = m => Rb(m), qb = Le(() => Db.value ? Mb.value : "—"), Fb = (m = []) => Ub(m), Bp = async (m, r) => {
      const L = Dr(m);
      if (!L || au(m)) return;
      const D = Rv(m),
        ge = r == null ? "" : String(r);
      if (String(D) !== ge) {
        Op({
          [L]: ge
        }), tu.value = new Set([...tu.value, L]);
        try {
          ge ? await Bb([L], ge) : await Nb([L]), A.success(ge ? `已并入「${jb(ge)}」` : "已移出活码")
        } catch (ke) {
          Op({
            [L]: D
          }), A.error((ke == null ? void 0 : ke.message) || "设置活码归属失败，请重试")
        } finally {
          const ke = new Set(tu.value);
          ke.delete(L), tu.value = ke
        }
      }
    }, jv = p(!1), Wb = () => {
      if (!Li.value) {
        A.info("暂无待发布作品");
        return
      }
      jv.value = !0
    }, Gb = async () => {
      await Qs()
    }, Jb = () => {
      Y.value = "my_live_code"
    };
  oa(Se, async m => {
    m && (await Gi(), Ji(), await mi(), Ct.value === "add" && (wa.value.googleId = String(Tl.value)))
  }), oa(() => so.value.length, async () => {
    Ml.value.length > 0 && rn.value.size > 0 && await mi()
  }, {
    deep: !0
  });
  const Qs = async (m = !1) => {
    if (!mn()) {
      Ac.value = [], Li.value = 0;
      return
    }
    if (!Hi.value) {
      Hi.value = !0;
      try {
        m && (zi.value = 1);
        const r = await Vr({
          is_release: 0,
          page: zi.value,
          size: mt.value
        });
        if (r) {
          let L = [],
            D = 0;
          r.rows && Array.isArray(r.rows) ? (L = r.rows, r.pages && r.pages.total !== void 0 ? D = r.pages.total : r.total !== void 0 && (D = r.total)) : r.data ? (r.data.rows && Array.isArray(r.data.rows) && (L = r.data.rows), r.data.pages && r.data.pages.total !== void 0 ? D = r.data.pages.total : r.data.total !== void 0 && (D = r.data.total)) : Array.isArray(r) && (L = r, D = r.length);
          const ge = L.map(ke => {
            let Vt = [];
            if (ke.images) try {
              typeof ke.images == "string" ? Vt = JSON.parse(ke.images) : Array.isArray(ke.images) && (Vt = ke.images)
            } catch (Xa) {
              console.error("解析 images 失败:", Xa, ke.images), Vt = []
            }
            let _a = null;
            if (ke.createtime) {
              if (typeof ke.createtime == "number") _a = new Date(ke.createtime * 1e3).toISOString();
              else if (typeof ke.createtime == "string") {
                const Xa = parseInt(ke.createtime);
                isNaN(Xa) ? _a = ke.createtime : _a = new Date(Xa * 1e3).toISOString()
              }
            }
            let Zt = "yijuhua";
            return ke.type === 0 ? Zt = "yijuhua" : ke.type === 1 ? Zt = "single" : ke.type === 2 ? Zt = "batch" : ke.type === 3 && (Zt = "copy"), {
              id: ke.id,
              title: ke.title || "",
              content: ke.desc || ke.content || "",
              desc: ke.desc || ke.content || "",
              images: Vt,
              cover: Vt && Vt.length > 0 ? Vt[0] : "",
              createdAt: _a || ke.createdAt,
              createdTimestamp: ke.createtime ? typeof ke.createtime == "number" ? ke.createtime * 1e3 : parseInt(ke.createtime) * 1e3 : ke.createdTimestamp,
              taskId: ke.taskid || ke.taskId,
              source: Zt,
              type: ke.type,
              model: ke.model,
              isRelease: ke.is_release,
              published: ke.is_release === 1,
              ...ke
            }
          });
          so.value = ge, Li.value = D, Fb(ge), Ob()
        }
      } catch (r) {
        console.error("加载待发布作品列表失败:", r), A.error((r == null ? void 0 : r.message) || "加载待发布作品列表失败，请稍后重试"), so.value = []
      } finally {
        Hi.value = !1
      }
    }
  }, lu = async (m = !1) => {
    if (!mn()) {
      Ic.value = [], eu.value = 0;
      return
    }
    if (!ms.value) {
      ms.value = !0;
      try {
        m && (Na.value = 1);
        const r = await Vr({
          is_release: 1,
          page: Na.value,
          size: ul.value
        });
        if (r) {
          let L = [],
            D = 0;
          r.rows && Array.isArray(r.rows) ? (L = r.rows, r.pages && r.pages.total !== void 0 ? D = r.pages.total : r.total !== void 0 && (D = r.total)) : r.data ? (r.data.rows && Array.isArray(r.data.rows) && (L = r.data.rows), r.data.pages && r.data.pages.total !== void 0 ? D = r.data.pages.total : r.data.total !== void 0 && (D = r.data.total)) : Array.isArray(r) && (L = r, D = r.length);
          const ge = L.map(ke => {
            let Vt = [];
            if (ke.images) try {
              typeof ke.images == "string" ? Vt = JSON.parse(ke.images) : Array.isArray(ke.images) && (Vt = ke.images)
            } catch (Xa) {
              console.error("解析 images 失败:", Xa, ke.images), Vt = []
            }
            let _a = null;
            if (ke.createtime) {
              if (typeof ke.createtime == "number") _a = new Date(ke.createtime * 1e3).toISOString();
              else if (typeof ke.createtime == "string") {
                const Xa = parseInt(ke.createtime);
                isNaN(Xa) ? _a = ke.createtime : _a = new Date(Xa * 1e3).toISOString()
              }
            }
            let Zt = "yijuhua";
            return ke.type === 0 ? Zt = "yijuhua" : ke.type === 1 ? Zt = "single" : ke.type === 2 ? Zt = "batch" : ke.type === 3 && (Zt = "copy"), {
              id: ke.id,
              title: ke.title || "",
              content: ke.desc || ke.content || "",
              desc: ke.desc || ke.content || "",
              images: Vt,
              cover: Vt && Vt.length > 0 ? Vt[0] : "",
              createdAt: _a || ke.createdAt,
              createdTimestamp: ke.createtime ? typeof ke.createtime == "number" ? ke.createtime * 1e3 : parseInt(ke.createtime) * 1e3 : ke.createdTimestamp,
              taskId: ke.taskid || ke.taskId,
              source: Zt,
              type: ke.type,
              model: ke.model,
              isRelease: ke.is_release,
              published: ke.is_release === 1,
              ...ke
            }
          });
          vs.value = ge, eu.value = D
        }
      } catch (r) {
        console.error("加载已发布作品列表失败:", r), A.error((r == null ? void 0 : r.message) || "加载已发布作品列表失败，请稍后重试"), vs.value = []
      } finally {
        ms.value = !1
      }
    }
  };
  let qv = !1,
    Fv = !1;
  oa(() => i.query.subtab, m => {
    (m === "pending" || m === "published") && (Io.value = m)
  }, {
    immediate: !0
  }), oa(Io, m => {
    m === "pending" ? (qv = !0, Qs(!0).finally(() => {
      qv = !1
    })) : m === "published" && (Fv = !0, lu(!0).finally(() => {
      Fv = !1
    }))
  }, {
    immediate: !0
  }), oa([zi, mt], () => {
    Io.value === "pending" && !qv && Qs(!1)
  }), oa([Na, ul], () => {
    Io.value === "published" && !Fv && lu(!1)
  });
  const Hb = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  let qo = null;
  const Wv = () => {
      var m;
      try {
        const r = (m = Ba.value) == null ? void 0 : m.$el;
        if (!r) return;
        const L = r.querySelector(".el-tabs__nav-next");
        if (!L || L.dataset.expandAllIconApplied === "1") return;
        const D = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 10l4 4 4-4"></path>
      </svg>
    `.trim(),
          ge = L.querySelector("svg");
        ge ? ge.outerHTML = D : L.innerHTML = D, L.dataset.expandAllIconApplied = "1"
      } catch (r) {
        console.warn("updateTabsNavNextIcon failed:", r)
      }
    },
    Gv = () => {
      if (!d.value) {
        if (qo && Ba.value) {
          const m = Ba.value.$el;
          if (m) {
            const r = m.querySelector(".el-tabs__nav-next");
            r && qo && r.removeEventListener("click", qo)
          }
        }
        qo = null, Da(() => {
          Wv()
        });
        return
      }
      Da(() => {
        setTimeout(() => {
          if (Ba.value) {
            const m = Ba.value.$el;
            if (m) {
              const r = m.querySelector(".el-tabs__nav-next");
              if (r) Wv(), qo && r.removeEventListener("click", qo), qo = L => {
                L.preventDefault(), L.stopPropagation(), Ca.value = !0
              }, r.addEventListener("click", qo);
              else {
                let L = 0;
                const D = 3,
                  ge = () => {
                    L < D && (L++, setTimeout(() => {
                      if (Ba.value) {
                        const ke = Ba.value.$el;
                        if (ke) {
                          const Vt = ke.querySelector(".el-tabs__nav-next");
                          Vt ? (qo && Vt.removeEventListener("click", qo), qo = _a => {
                            _a.preventDefault(), _a.stopPropagation(), Ca.value = !0
                          }, Vt.addEventListener("click", qo)) : ge()
                        }
                      }
                    }, 200))
                  };
                ge()
              }
            }
          }
        }, 150)
      })
    },
    Jv = () => {
      d.value, d.value = window.innerWidth <= 768, Gv()
    },
    nu = p(!1),
    gs = p(""),
    Hv = p(""),
    Np = p(""),
    Up = async m => {
      const r = (m == null ? void 0 : m.id) || (m == null ? void 0 : m.globalId);
      if (!r) {
        A.error("作品ID不存在");
        return
      }
      Hv.value = (m == null ? void 0 : m.title) || "作品二维码", Np.value = `${window.location.origin}/tiaozhuan?workId=${encodeURIComponent(r)}`, nu.value = !0, gs.value = "";
      try {
        gs.value = await Ln.toDataURL(Np.value, {
          width: 260,
          margin: 1,
          color: {
            dark: "#1f2330",
            light: "#FFFFFF"
          }
        })
      } catch {
        A.error("二维码生成失败"), nu.value = !1
      }
    }, Qb = () => {
      if (!gs.value) return;
      const m = document.createElement("a");
      m.href = gs.value, m.download = `${(Hv.value||"作品").slice(0,20)}-二维码.png`, m.click()
    }, Kb = m => {
      const r = "https://xiaohongshu.com/publish",
        L = new URLSearchParams({
          workId: m.id,
          title: encodeURIComponent(m.title),
          cover: encodeURIComponent(m.cover)
        });
      return `${r}?${L.toString()}`
    };
  Le(() => so.value), Le(() => vs.value);
  const Ac = Le(() => so.value),
    Ic = Le(() => vs.value),
    Yb = m => {},
    Xb = async () => {
      Io.value === "pending" ? await Qs(!0) : Io.value === "published" && await lu(!0)
    }, Zb = () => {
      Hs.value = !1
    }, ew = async () => {
      I.value = null, await Xb()
    }, xc = async m => {
      try {
        m.published ? await La.confirm(`作品"${m.title}"已标记发布，是否重新跳转发布？`, "重新发布", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "info"
        }) : await Tp();
        const r = m.id || m.globalId;
        if (!r) {
          A.error("作品ID不存在，无法发布");
          return
        }
        try {
          if (await wv(r), !m.published) {
            const D = so.value.findIndex(ge => (ge.id || ge.globalId) === r);
            D !== -1 && (so.value.splice(D, 1), Li.value = Math.max(0, Li.value - 1)), m.published = !0, m.isRelease = 1
          }
          const L = Kb(m);
          if (Hb()) {
            Yb(m);
            const D = `/tiaozhuan?workId=${r}`;
            window.location.href = D
          } else {
            I.value = m;
            const D = `${window.location.origin}/tiaozhuan?workId=${r}`;
            if (oe.value = D, Hs.value = !0, await Da(), Xr.value) try {
              await Ln.toCanvas(Xr.value, D, {
                width: 300,
                margin: 2,
                color: {
                  dark: "#000000",
                  light: "#FFFFFF"
                }
              })
            } catch (ge) {
              console.error("Failed to generate QR code:", ge), A.error("生成二维码失败")
            }
          }
        } catch (L) {
          console.error("发布失败:", L), A.error((L == null ? void 0 : L.message) || "发布失败，请稍后重试")
        }
      } catch {}
    }, Qv = m => {
      const r = [];
      return Number((m == null ? void 0 : m.xhs_flag) || 0) === 1 && r.push("小红书"), Number((m == null ? void 0 : m.dy_flag) || 0) === 1 && r.push("抖音"), r.join("、") || "—"
    }, Sc = m => ({
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
    })[m] || m || "未知", Ec = m => {
      if (!m) return "";
      try {
        const r = new Date(m),
          D = new Date - r,
          ge = Math.floor(D / 6e4),
          ke = Math.floor(D / 36e5),
          Vt = Math.floor(D / 864e5);
        if (ge < 1) return "刚刚";
        if (ge < 60) return `${ge}分钟前`;
        if (ke < 24) return `${ke}小时前`;
        if (Vt < 7) return `${Vt}天前`;
        const _a = r.getFullYear(),
          Zt = String(r.getMonth() + 1).padStart(2, "0"),
          Xa = String(r.getDate()).padStart(2, "0"),
          nl = String(r.getHours()).padStart(2, "0"),
          Ya = String(r.getMinutes()).padStart(2, "0");
        return `${_a}-${Zt}-${Xa} ${nl}:${Ya}`
      } catch {
        return ""
      }
    }, Tc = Le(() => {
      try {
        const m = [];
        return Ro.value.forEach(r => {
          var ge, ke;
          const L = r.rawStatus !== void 0 ? r.rawStatus : ((ge = r.rawData) == null ? void 0 : ge.status) !== void 0 ? r.rawData.status : null,
            D = r.status || ((ke = r.rawData) == null ? void 0 : ke.status);
          (go.value === "completed" || L === 2 || D === "completed") && m.push(r)
        }), m.sort((r, L) => {
          const D = new Date(r.createTime).getTime();
          return new Date(L.createTime).getTime() - D
        }), m
      } catch (m) {
        return console.error("Failed to load completed tasks:", m), []
      }
    });
  Le(() => {
    const m = new Map;
    Tc.value.forEach(L => {
      const D = L.taskId || L.id,
        ge = L.createTime || new Date().toLocaleString("zh-CN"),
        ke = `${D}_${ge}`;
      m.has(ke) || m.set(ke, {
        ...L,
        status: "completed",
        createTime: ge,
        taskId: D,
        id: D,
        _key: ke
      })
    }), Wi.value.forEach(L => {
      const D = L.taskId || L.id,
        ge = L.createTime || new Date().toLocaleString("zh-CN"),
        ke = `${D}_${ge}`;
      m.has(ke) || m.set(ke, {
        ...L,
        status: "ongoing",
        createTime: ge,
        taskId: D,
        id: D,
        _key: ke
      })
    });
    const r = Array.from(m.values());
    return r.sort((L, D) => {
      const ge = new Date(L.createTime || 0).getTime(),
        ke = new Date(D.createTime || 0).getTime();
      return ge - ke
    }), r.forEach((L, D) => {
      L.globalTaskId = D + 1
    }), r
  });
  const Fo = p([]),
    Wa = p({
      ...(() => ({
        isDistributor: !1,
        auditStatus: "pending",
        totalIncome: "0.00",
        availableIncome: "0.00",
        todayIncome: 0,
        withdrawnIncome: "0.00",
        promoteCount: 0
      }))(),
      totalFans: 0,
      totalOrders: 0,
      paidFans: 0,
      lastMonthIncome: "0.00",
      thisMonthIncome: "0.00",
      todayPromote: 0,
      todayPromotePercent: 0,
      totalPromote: 0,
      paidMembers: 0,
      noteCount: 0,
      referrer: "平台",
      agentLevel: "未升级",
      commissionRatio: "0",
      pendingWithdraw: "0.00",
      is_daili: 0,
      todayUsers: 0,
      todayOrders: 0,
      todaySales: "0.00",
      todayCommission: "0.00",
      yesterdayUsers: 0,
      yesterdayOrders: 0,
      yesterdaySales: "0.00",
      yesterdayCommission: "0.00",
      cdk: ""
    }),
    tw = m => {
      if (!m || typeof m != "object") return;
      const r = L => L == null || L === "" ? "0.00" : String(Number(L));
      if (m.is_daili !== void 0) {
        Wa.value.is_daili = Number(m.is_daili) || 0;
        try {
          localStorage.setItem("is_daili", String(Wa.value.is_daili))
        } catch {}
      }
      m.commission_rate !== void 0 && (Wa.value.commissionRatio = String(m.commission_rate ?? 0)), m.available_amount !== void 0 && (Wa.value.availableIncome = r(m.available_amount)), m.pending_amount !== void 0 && (Wa.value.pendingWithdraw = r(m.pending_amount)), m.withdrawn_amount !== void 0 && (Wa.value.withdrawnIncome = r(m.withdrawn_amount)), Wa.value.agentLevel = Wa.value.is_daili === 1 ? "高级" : "未升级"
    },
    $c = m => m == null || m === "" ? "0.00" : String(Number(m)),
    Kv = p(!1),
    aw = async () => {
      const m = (r, L) => La.prompt(r, "修改支付密码", {
        confirmButtonText: "下一步",
        cancelButtonText: "取消",
        inputType: "password",
        inputPlaceholder: L,
        inputValidator: D => D && String(D).trim() ? !0 : "不能为空",
        closeOnClickModal: !1
      }).then(D => String(D.value || "").trim());
      try {
        const r = await m("请输入原支付密码", "原支付密码"),
          L = await m("请输入新支付密码（6-20 位）", "新支付密码");
        if (L.length < 6 || L.length > 20) {
          A.warning("新支付密码长度需为 6-20 位");
          return
        }
        if (await m("请再次输入新支付密码", "确认新支付密码") !== L) {
          A.warning("两次输入的新支付密码不一致");
          return
        }
        await xh(r, L), Kv.value = !1, A.success("支付密码修改成功")
      } catch (r) {
        r && r.message && r !== "cancel" && A.error(r.message)
      }
    }, lw = m => {
      if (!m || typeof m != "object") return;
      const r = m;
      Kv.value = !!r.pay_password_is_default, Wa.value.is_daili = Number(r.is_daili) || 0;
      try {
        localStorage.setItem("is_daili", String(Wa.value.is_daili))
      } catch {}
      Wa.value.commissionRatio = String(r.commission_rate ?? 0), Wa.value.availableIncome = $c(r.available_amount), Wa.value.pendingWithdraw = $c(r.pending_amount), Wa.value.withdrawnIncome = $c(r.withdrawn_amount), Wa.value.agentLevel = Wa.value.is_daili === 1 ? "高级" : "未升级", Wa.value.referrer = r.parent_name != null ? String(r.parent_name) : Wa.value.referrer || "平台";
      const L = (ge, ke) => {
          Wa.value[ge] = ke != null && Number(ke) || 0
        },
        D = (ge, ke) => {
          Wa.value[ge] = ke != null ? $c(ke) : "0.00"
        };
      L("todayUsers", r.user_count_today), L("yesterdayUsers", r.user_count_yesterday), L("weekUsers", r.user_count_7days), L("monthUsers", r.user_count_30days), L("todayOrders", r.order_count_today), L("yesterdayOrders", r.order_count_yesterday), L("weekOrders", r.order_count_7days), L("monthOrders", r.order_count_30days), D("todaySales", r.order_price_today), D("yesterdaySales", r.order_price_yesterday), D("weekSales", r.order_price_7days), D("monthSales", r.order_price_30days), D("todayCommission", r.order_commission_today), D("yesterdayCommission", r.order_commission_yesterday), D("weekCommission", r.order_commission_7days), D("monthCommission", r.order_commission_30days), Wa.value.isDistributor = Wa.value.is_daili === 1, Wa.value.auditStatus = "approved", Wa.value.cdk = r.cdk != null && String(r.cdk).trim() !== "" ? String(r.cdk).trim() : ""
    }, ou = async () => {
      try {
        const m = await dv();
        lw(m)
      } catch (m) {
        console.warn("获取代理中心数据失败:", m)
      }
    }, nw = Le(() => {
      var r;
      const m = new Set(["ai_model", "download_record"]);
      return (((r = Wa.value) == null ? void 0 : r.is_daili) === 1 || ee.value) && m.add("distribution"), ee.value && m.add("distribution2"), Qa.filter(L => !m.has(L.name))
    });
  oa([() => {
    var m;
    return (m = Wa.value) == null ? void 0 : m.is_daili
  }, Y, ee], ([m, r, L]) => {
    if (!(L && !T.value && mn())) {
      if (L && (r === "distribution" || r === "distribution2")) {
        Va = !0, Y.value = "wallet", o.replace({
          path: "/user",
          query: {
            ...i.query,
            tab: "wallet"
          }
        });
        return
      }
      m === 1 && r === "distribution" && (Va = !0, Y.value = "distribution2", o.replace({
        path: "/user",
        query: {
          tab: "distribution2"
        }
      }))
    }
  });
  const Pc = Le(() => {
      var L;
      const m = window.location.origin,
        r = String(((L = Wa.value) == null ? void 0 : L.cdk) ?? "").trim();
      return r ? `${m}/reg?cdk=${encodeURIComponent(r)}` : `${m}/reg`
    }),
    Rp = Le(() => {
      var ge;
      const m = window.location.origin,
        r = String(T.value || "").trim(),
        L = String(((ge = Wa.value) == null ? void 0 : ge.cdk) ?? "").trim(),
        D = [];
      return r && D.push(`invite=${encodeURIComponent(r)}`), L && D.push(`cdk=${encodeURIComponent(L)}`), D.length ? `${m}/reg?${D.join("&")}` : `${m}/reg`
    }),
    jp = Le(() => "http://agent.chaoerkeji.cn"),
    ow = p(1),
    qp = p(15),
    Fp = p([{
      id: 1,
      userName: "用户***001",
      avatar: Xl,
      orderCount: 5,
      totalSpend: "500.00",
      inviteCount: 2,
      distributorStatus: "是",
      registerTime: "2025-01-10 14:30:22",
      type: "direct"
    }, {
      id: 2,
      userName: "用户***002",
      avatar: Xl,
      orderCount: 3,
      totalSpend: "300.00",
      inviteCount: 0,
      distributorStatus: "否",
      registerTime: "2025-01-09 10:15:33",
      type: "direct"
    }, {
      id: 3,
      userName: "用户***003",
      avatar: Xl,
      orderCount: 8,
      totalSpend: "800.00",
      inviteCount: 1,
      distributorStatus: "是",
      registerTime: "2025-01-08 16:45:10",
      type: "direct"
    }]),
    Wp = Le(() => Fp.value);
  Le(() => {
    const m = (ow.value - 1) * qp.value,
      r = m + qp.value;
    return Wp.value.slice(m, r)
  }), Le(() => Wp.value.length), Le(() => Fp.value.length);
  let Vc = null,
    zc = null;
  Ll(() => {
    De(Y.value), $(), i.query.tab === "distribution2" && mn() && ou(), Gi(), Ji(), mn() && St(1), mn() || Hc(), Da(() => {
      ds(), Wv()
    }), Jv(), window.addEventListener("resize", Jv), window.addEventListener("user-logout", $), window.addEventListener("user-login-success", async () => {
      await $(), St(1), Y.value === "distribution2" && ou(), A.success("登录成功"), d.value && setTimeout(() => {
        window.location.reload()
      }, 500)
    }), mn() && (Vi(), Y.value === "wallet" && il(), Y.value === "recharge_record" && wc(), Ot(), (i.query.tab === "task_record" || Y.value === "task_record") && ((!go.value || go.value !== "ongoing" && go.value !== "completed") && (go.value = "completed"), Js()), i.query.tab === "publish_record" && (Io.value === "pending" || Io.value === "published") && (Io.value === "pending" ? Qs(!0) : Io.value === "published" && lu(!0))), Gv(), Jl(), Ae.value = ie(), Vc = setInterval(() => {
      mn() && (Ae.value = ie())
    }, 2e3), zc = setInterval(() => {
      mn() && (Yr.value++, i.query.tab === "task_record" && (go.value === "ongoing" || go.value === "completed") && Js())
    }, 5e3)
  }), ki(() => {
    window.removeEventListener("resize", Jv), window.removeEventListener("user-logout", $), window.removeEventListener("user-login-success", $), Vc && (clearInterval(Vc), Vc = null), zc && (clearInterval(zc), zc = null), Oi(), rr(), In && (clearInterval(In), In = null), Pt && (clearInterval(Pt), Pt = null)
  }), window.addEventListener("storage", m => {
    (m.key === "rechargeRecords" || m.key === "downloadRecords.v1") && (Ae.value = ie(), Y.value === "recharge_record" && Fi())
  }), window.addEventListener("localStorage-change", m => {
    m.detail && m.detail.key && ((m.detail.key === "rechargeRecords" || m.detail.key === "downloadRecords.v1") && Y.value === "recharge_record" && Fi(), m.detail.key === "rechargeRecords" && (Ae.value = ie()))
  });
  const Gp = p(!1),
    Yv = p(!1),
    Xv = p(!1),
    iu = p(!1),
    Ks = p(!1),
    Ys = p(""),
    Jp = p(!0),
    Lc = p(Date.now()),
    Qi = p([]);
  let Zv = null;
  const Xs = Le(() => {
      var m;
      return String(T.value || ((m = N.value) == null ? void 0 : m.userId) || "")
    }),
    Hp = Le(() => {
      var r;
      const m = String(((r = Wa.value) == null ? void 0 : r.cdk) ?? "").trim();
      return m || (Xs.value ? fO(Xs.value) : "")
    }),
    iw = m => {
      if (m == null || m === "") return 0;
      if (typeof m == "number") return m < 1e12 ? m * 1e3 : m;
      const r = String(m).trim();
      if (!r) return 0;
      if (/^\d+$/.test(r)) {
        const D = Number(r);
        return D < 1e12 ? D * 1e3 : D
      }
      const L = new Date(r.replace(/-/g, "/")).getTime();
      return Number.isFinite(L) ? L : 0
    },
    sw = (m, r) => {
      const L = Number((m == null ? void 0 : m.discount_amount) ?? (m == null ? void 0 : m.value) ?? (m == null ? void 0 : m.amount) ?? (m == null ? void 0 : m.money) ?? 0) || 0,
        D = Number((m == null ? void 0 : m.threshold_amount) ?? (m == null ? void 0 : m.minSpend) ?? (m == null ? void 0 : m.min_spend) ?? (m == null ? void 0 : m.condition_amount) ?? (m == null ? void 0 : m.full_amount) ?? 0) || 0,
        ge = iw((m == null ? void 0 : m.expiretime) ?? (m == null ? void 0 : m.expireAt) ?? (m == null ? void 0 : m.expire_at) ?? (m == null ? void 0 : m.end_time) ?? (m == null ? void 0 : m.expired_at)),
        ke = Number((m == null ? void 0 : m.status) ?? (m == null ? void 0 : m.used) ?? (m == null ? void 0 : m.is_use) ?? 0) === 1,
        Vt = Number((m == null ? void 0 : m.is_expire) ?? 0) === 1 || ge > 0 && ge <= Lc.value;
      return {
        id: String((m == null ? void 0 : m.id) ?? (m == null ? void 0 : m.coupon_id) ?? `${Date.now()}_${r}`),
        value: L,
        minSpend: D,
        agentCode: String((m == null ? void 0 : m.agentCode) ?? (m == null ? void 0 : m.agent_code) ?? (m == null ? void 0 : m.cdk) ?? "-"),
        expireAt: ge,
        used: ke,
        isExpire: Vt
      }
    };
  async function Dc() {
    var m;
    if (!Xs.value) {
      Qi.value = [];
      return
    }
    try {
      const r = await _v(),
        L = Array.isArray(r) ? r : Array.isArray(r == null ? void 0 : r.list) ? r.list : Array.isArray(r == null ? void 0 : r.lists) ? r.lists : Array.isArray(r == null ? void 0 : r.rows) ? r.rows : [];
      Qi.value = L.map((D, ge) => sw(D, ge)).filter(D => !D.used && !D.isExpire)
    } catch (r) {
      Qi.value = [], A.error((r == null ? void 0 : r.message) || ((m = r == null ? void 0 : r.response) == null ? void 0 : m.msg) || "获取优惠券列表失败")
    }
  }

  function rw() {
    navigator.clipboard.writeText(Hp.value), A.success("优惠口令已复制")
  }
  async function Qp(m, {
    silent: r = !1
  } = {}) {
    var D;
    const L = String(m || "").trim();
    if (!L) return r || A.warning("请输入口令"), {
      ok: !1,
      message: "请输入口令"
    };
    try {
      const ge = await l0(L);
      return {
        ok: !0,
        message: (ge == null ? void 0 : ge.msg) || "领取成功"
      }
    } catch (ge) {
      const ke = (ge == null ? void 0 : ge.message) || ((D = ge == null ? void 0 : ge.response) == null ? void 0 : D.msg) || "口令兑换失败，请稍后重试";
      return r || A.error(ke), {
        ok: !1,
        message: ke
      }
    }
  }
  async function uw() {
    const m = await Qp(Ys.value);
    m.ok && (La.alert(m.message, "领取成功", {
      confirmButtonText: "查看我的优惠券"
    }).then(() => {}), Ys.value = "", Ks.value = !1, Dc())
  }
  async function Kp() {
    const m = String(i.query.cdk || i.query.coupon || "").trim();
    if (!m || !Xs.value) return;
    const r = `coupon_autoclaim_${Xs.value}_${m}`;
    if (sessionStorage.getItem(r)) return;
    sessionStorage.setItem(r, "1"), (await Qp(m, {
      silent: !0
    })).ok && (La.alert("优惠券领取成功！可至「个人中心-我的优惠券」查看", "领取成功", {
      confirmButtonText: "我知道了"
    }), Dc())
  }
  oa(Xs, () => {
    Dc(), Kp()
  }, {
    immediate: !1
  }), Ll(() => {
    Dc(), Kp(), Zv = setInterval(() => {
      Lc.value = Date.now(), Qi.value = Qi.value.filter(m => !m.used && m.expireAt > Lc.value)
    }, 1e3)
  }), ki(() => {
    Zv && clearInterval(Zv)
  });
  const Zs = p([]),
    Mc = p(1),
    su = p(0),
    em = p(!1),
    ru = p(""),
    uu = p(""),
    cw = p(!1),
    Oc = p(""),
    Bc = p(""),
    dw = m => {
      const r = L => {
        if (!L) return "-";
        if (typeof L == "number" || typeof L == "string" && /^\d+$/.test(L)) {
          const D = String(L).length === 10 ? Number(L) * 1e3 : Number(L),
            ge = new Date(D);
          if (!isNaN(ge.getTime())) {
            const ke = Vt => String(Vt).padStart(2, "0");
            return `${ge.getFullYear()}-${ke(ge.getMonth()+1)}-${ke(ge.getDate())} ${ke(ge.getHours())}:${ke(ge.getMinutes())}:${ke(ge.getSeconds())}`
          }
        }
        return L
      };
      return {
        orderNo: m.id ?? m.order_no ?? m.orderNo ?? "-",
        productName: m.good_name ?? m.product_name ?? m.productName ?? m.name ?? "-",
        payTime: r(m.createtime ?? m.pay_time ?? m.payTime ?? m.create_time ?? "-"),
        usedTime: r(m.updatetime ?? m.update_time ?? m.usedTime ?? "-"),
        cardNo: m.cdk ?? m.card_no ?? m.cardNo ?? "-",
        status: m.status === "used" || m.status === 1 ? "used" : "unused",
        usedByNickname: m.nickname ?? m.used_by_nickname ?? m.usedByNickname ?? m.used_by ?? ""
      }
    },
    cu = async (m = 1, r, L) => {
      var D;
      em.value = !0;
      try {
        const ge = {
          page: m,
          size: Cd
        };
        r != null && String(r).trim() !== "" && (ge.cdk = String(r).trim()), L !== "" && L !== null && L !== void 0 && (ge.status = L);
        const ke = await sf(ge),
          Vt = (ke == null ? void 0 : ke.rows) ?? (ke == null ? void 0 : ke.list) ?? (ke == null ? void 0 : ke.data) ?? [],
          _a = ((D = ke == null ? void 0 : ke.pages) == null ? void 0 : D.total) ?? (ke == null ? void 0 : ke.total) ?? Vt.length;
        Zs.value = Vt.map(dw), Mc.value = m, su.value = Number(_a) ?? 0
      } catch (ge) {
        console.error("加载卡密列表失败:", ge), Zs.value = [], su.value = 0
      } finally {
        em.value = !1
      }
    }, Yp = Le(() => Zs.value), vw = Le(() => Math.ceil(su.value / Cd) || 1), Xp = () => {
      const m = (Oc.value || "").trim(),
        r = Bc.value;
      ru.value = m, uu.value = r, cw.value = !1, cu(1, m, r)
    }, mw = () => {
      Oc.value = "", Bc.value = "", ru.value = "", uu.value = "", cu(1)
    }, gw = p(0);
  Le(() => (Wa.value.totalFans || 0) + gw.value);
  const Nc = p(!1),
    Uc = p(!1),
    Rc = p(""),
    Zp = p(null),
    er = p(!1),
    jc = p(!1),
    fw = Le(() => new Date().getFullYear()),
    pw = Le(() => new Date().getMonth() + 1),
    du = p(!1),
    tm = p("day"),
    vu = p(""),
    am = p(!1),
    lm = p(!1),
    nm = p(!1),
    fs = p(!1),
    mu = p(!1),
    e1 = p(""),
    qc = p(!1),
    ps = p([]),
    tr = p(null),
    Fc = p(!1),
    ar = p(!1),
    lr = p(""),
    Wc = p("");
  let Gc = null;
  const t1 = p(!1),
    gu = p(!1),
    fu = p(!1),
    pu = p(""),
    om = p(!1),
    ai = p(!1),
    ys = p(1),
    Di = p(1),
    nr = p("wxpay"),
    im = p(!1),
    sm = p(!1),
    Mi = p([]),
    a1 = async () => {
      try {
        const m = await Ls(),
          L = (Array.isArray(m) ? m : m != null && m.rows && Array.isArray(m.rows) ? m.rows : []).filter(ge => Number(ge.type) === 0).map(ge => {
            let ke = "";
            ge.points ? ke += `可生成 ${ge.points}篇` : ge.days && (ke += `有效期${ge.days}天 `);
            const Vt = parseFloat(ge.price) || 0,
              Zt = (parseFloat(ge.original_price) || Vt * 2) + 100,
              Xa = ge.tag1 || ge.tag2 || "",
              nl = Xa === "超划算推荐" ? "买2年送1年" : Xa;
            return {
              id: ge.id,
              name: ge.name || "套餐",
              price: Number(Vt.toFixed(2)),
              originalPrice: Number(Zt.toFixed(2)),
              spec: ke.trim() || "暂无说明",
              badge: nl,
              sort: ge.sort || 0,
              days: ge.days || 0,
              curr: Number(ge.curr) || 0
            }
          });
        L.sort((ge, ke) => (Number(ge.days) || 0) - (Number(ke.days) || 0) || (Number(ge.sort) || 0) - (Number(ke.sort) || 0)), Mi.value = L;
        const D = L.find(ge => ge.curr === 1) || L[0];
        D && (ys.value = D.id)
      } catch (m) {
        console.error("获取卡密套餐失败:", m), A.error("获取卡密套餐失败")
      }
    };
  oa(() => [i.query.tab, i.query.openCardPurchase], async ([m, r]) => {
    if (m !== "distribution2" || !mn()) return;
    const L = async () => {
      ai.value = !0, Mi.value.length === 0 && await a1()
    };
    if (String(r) === "1") {
      await L(), X = !0;
      try {
        const D = {
          ...i.query
        };
        delete D.openCardPurchase, o.replace({
          path: "/user",
          query: D
        }).catch(() => {})
      } catch {}
      return
    }
    if (X) {
      X = !1;
      return
    }
  }, {
    immediate: !0
  });
  const yu = Le(() => {
      const m = Mi.value.find(r => r.id === ys.value);
      return m ? (m.price * Di.value).toFixed(2) : 0
    }),
    Jc = Le(() => {
      var L;
      const m = (L = Wa.value) == null ? void 0 : L.availableIncome,
        r = Number(m);
      return Number.isFinite(r) && r >= 0 ? r : 0
    }),
    l1 = () => {
      const m = Number(yu.value || 0),
        r = Number(Jc.value || 0);
      nr.value = r >= m && m > 0 ? "wallet" : "wxpay"
    },
    yw = () => {
      im.value = !0
    };
  oa(ai, m => {
    m && (im.value = !1, l1())
  }), oa([yu, Jc], () => {
    !ai.value || im.value || l1()
  });
  const hu = p(!1),
    n1 = Le(() => Wr(Fr, {
      userId: T.value
    })),
    hw = p([{
      id: 1,
      orderNo: "DD20250115001",
      userName: "用户***123",
      amount: "100.00",
      commission: "50.00",
      status: "settled",
      createTime: "2025-01-15 14:30:22"
    }, {
      id: 2,
      orderNo: "DD20250114002",
      userName: "用户***456",
      amount: "200.00",
      commission: "100.00",
      status: "settled",
      createTime: "2025-01-14 10:15:33"
    }, {
      id: 3,
      orderNo: "DD20250113003",
      userName: "用户***789",
      amount: "150.00",
      commission: "75.00",
      status: "pending",
      createTime: "2025-01-13 16:45:10"
    }]);

  function mn() {
    return !!localStorage.getItem("authToken")
  }
  const Hc = () => {
      window.dispatchEvent(new CustomEvent("open-login-dialog"))
    },
    bw = Le(() => mn()),
    Qc = () => {
      Hc()
    },
    o1 = () => La.confirm('<div class="abc-card"><div class="abc-emoji">🎫</div><p class="abc-msg">您已是代理，无法直接在线开通会员；购买卡密后即可给自己激活使用。</p><div class="abc-path"><span class="abc-path-label">卡密查看路径</span><span class="abc-path-val">个人中心 → 代理中心 → <b>我的卡密</b></span></div></div>', "提示", {
      confirmButtonText: "购买卡密",
      cancelButtonText: "取消",
      closeOnClickModal: !1,
      dangerouslyUseHTMLString: !0,
      customClass: "agent-buy-card-msgbox"
    }).then(() => {
      o.push({
        path: "/user",
        query: {
          tab: "distribution2",
          openCardPurchase: "1"
        }
      })
    }),
    rm = () => {
      if (!mn()) {
        Qc();
        return
      }
      if (Wa.value.is_daili === 1) {
        o1().catch(() => {});
        return
      }
      d.value ? o.push("/wappay") : gu.value = !0
    },
    ww = () => {
      rm()
    },
    _w = m => {
      if (m === "profile") o.push("/user"), Sa.value = !1;
      else if (m === "wallet") o.push("/user?tab=wallet"), Sa.value = !1;
      else if (m === "recharge") {
        if (!mn()) {
          Qc(), Sa.value = !1;
          return
        }
        if (Sa.value = !1, Wa.value.is_daili === 1) {
          o1().catch(() => {});
          return
        }
        d.value ? o.push("/wappay") : gu.value = !0
      } else m === "logout" && (um(), Sa.value = !1)
    },
    um = async () => {
      await ui() && d.value && setTimeout(() => {
        window.location.reload()
      }, 500)
    }, i1 = async m => {
      if (!(!m || !m.raw)) {
        if (!m.raw.type.startsWith("image/")) {
          A.warning("请上传图片文件");
          return
        }
        try {
          A.info("正在上传头像...");
          const r = await ao(m.raw),
            L = typeof r == "string" ? r : (r == null ? void 0 : r.url) || (r == null ? void 0 : r.data) || "";
          if (!L) throw new Error("上传失败，未返回图片地址");
          await fr({
            avatar: L
          }), N.value.avatar = L;
          try {
            window.dispatchEvent(new CustomEvent("localStorage-change", {
              detail: {
                key: "userInfo"
              }
            }))
          } catch (D) {
            console.error("保存用户信息失败:", D)
          }
          try {
            await $({
              force: !0
            })
          } catch (D) {
            console.warn("重新获取用户信息失败:", D)
          }
          A.success("头像修改成功")
        } catch (r) {
          console.error("修改头像失败:", r), A.error((r == null ? void 0 : r.message) || "修改头像失败")
        }
      }
    }, s1 = () => {
      navigator.clipboard.writeText(T.value), A.success("用户ID已复制")
    }, r1 = () => {
      if (!N.value.wechat) {
        A.warning("当前未绑定微信");
        return
      }
      navigator.clipboard.writeText(N.value.wechat), A.success("微信账号已复制")
    }, kw = async () => {
      const m = Jt.value.trim();
      if (!m) {
        A.warning("请输入昵称");
        return
      }
      try {
        await fr({
          nickname: m
        }), N.value.nickname = m
      } catch (r) {
        console.error("修改昵称失败:", r), A.error((r == null ? void 0 : r.message) || "昵称修改失败");
        return
      }
      try {
        window.dispatchEvent(new CustomEvent("localStorage-change", {
          detail: {
            key: "userInfo"
          }
        }))
      } catch (r) {
        console.error("触发更新事件失败:", r)
      }
      le.value = !1, A.success("昵称修改成功")
    }, u1 = async () => {
      if (!N.value.wechat) {
        A.warning("当前未绑定微信");
        return
      }
      try {
        await La.confirm("确定要解绑微信吗？解绑后将无法使用微信登录", "确认解绑", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }), await ff(), N.value.wechat = "";
        try {
          window.dispatchEvent(new CustomEvent("localStorage-change", {
            detail: {
              key: "userInfo"
            }
          }))
        } catch (m) {
          console.error("触发更新事件失败:", m)
        }
        try {
          await $({
            force: !0
          })
        } catch (m) {
          console.warn("重新获取用户信息失败:", m)
        }
        bt.value = !1, A.success("解绑微信成功")
      } catch (m) {
        m !== "cancel" && (console.error("解绑微信失败:", m), A.error((m == null ? void 0 : m.message) || "解绑微信失败"))
      }
    }, cm = (m = !1) => {
      In && (clearInterval(In), In = null), ol.value = 0, Ga.value = !1, Sl.value = !1, m || (sa.value.email = ""), sa.value.code = ""
    }, c1 = () => {
      cm(!0), sa.value.email = N.value.email || "", sa.value.code = "", vt.value = !0
    }, Cw = () => {
      ol.value = 60, In && clearInterval(In), In = setInterval(() => {
        ol.value--, ol.value <= 0 && (In && (clearInterval(In), In = null), ol.value = 0)
      }, 1e3)
    }, Aw = async () => {
      var r;
      const m = sa.value.email.trim();
      if (!m) {
        A.warning("请输入邮箱地址");
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) {
        A.warning("请输入正确的邮箱地址");
        return
      }
      try {
        Ga.value = !0, await uv(m), A.success("验证码已发送"), Cw()
      } catch (L) {
        const D = (L == null ? void 0 : L.message) || ((r = L == null ? void 0 : L.response) == null ? void 0 : r.msg) || "验证码发送失败，请稍后重试";
        A.error(D)
      } finally {
        Ga.value = !1
      }
    }, Iw = async () => {
      var L;
      const m = sa.value.email.trim(),
        r = sa.value.code.trim();
      if (!m) {
        A.warning("请输入邮箱地址");
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) {
        A.warning("请输入正确的邮箱地址");
        return
      }
      if (!r) {
        A.warning("请输入验证码");
        return
      }
      try {
        Sl.value = !0;
        const D = await Ku({
            email: m,
            code: r
          }),
          ge = (D == null ? void 0 : D.data) || {},
          ke = ge.token || (D == null ? void 0 : D.token) || "",
          Vt = ge.userid || ge.userId || "";
        N.value.email = m;
        try {
          window.dispatchEvent(new CustomEvent("localStorage-change", {
            detail: {
              key: "userInfo"
            }
          }))
        } catch (_a) {
          console.error("触发更新事件失败:", _a)
        }
        ke && localStorage.setItem("authToken", ke), A.success("邮箱绑定成功"), vt.value = !1
      } catch (D) {
        const ge = (D == null ? void 0 : D.message) || ((L = D == null ? void 0 : D.response) == null ? void 0 : L.msg) || "邮箱绑定失败，请稍后重试";
        A.error(ge)
      } finally {
        Sl.value = !1
      }
    }, dm = (m = !1) => {
      m || (nn.value.phone = "", nn.value.code = ""), Pn.value = !1, co.value = !1, Gn.value = 0, Pt && (clearInterval(Pt), Pt = null), wo.value && wo.value.clearValidate()
    }, vm = () => {
      dm(!0), nn.value.phone = N.value.phone || "", nn.value.code = "", ot.value = !0
    }, xw = () => {
      Gn.value = 60, Pt && clearInterval(Pt), Pt = setInterval(() => {
        Gn.value--, Gn.value <= 0 && (Pt && (clearInterval(Pt), Pt = null), Gn.value = 0)
      }, 1e3)
    }, Sw = async () => {
      var r;
      const m = nn.value.phone.trim();
      if (!m) {
        A.warning("请输入手机号");
        return
      }
      if (!/^1[3-9]\d{9}$/.test(m)) {
        A.warning("请输入正确的手机号");
        return
      }
      try {
        Pn.value = !0, await uc(m), A.success("验证码已发送"), xw()
      } catch (L) {
        const D = (L == null ? void 0 : L.message) || ((r = L == null ? void 0 : L.response) == null ? void 0 : r.msg) || "验证码发送失败，请稍后重试";
        A.error(D)
      } finally {
        Pn.value = !1
      }
    }, Ew = async () => {
      var L;
      const m = nn.value.phone.trim(),
        r = nn.value.code.trim();
      if (!m) {
        A.warning("请输入手机号");
        return
      }
      if (!/^1[3-9]\d{9}$/.test(m)) {
        A.warning("请输入正确的手机号");
        return
      }
      if (!r) {
        A.warning("请输入验证码");
        return
      }
      try {
        co.value = !0;
        const D = await Tr({
            phone: m,
            code: r
          }),
          ge = (D == null ? void 0 : D.data) || {},
          ke = ge.token || (D == null ? void 0 : D.token) || "",
          Vt = ge.userid || ge.userId || "";
        N.value.phone = m;
        try {
          window.dispatchEvent(new CustomEvent("localStorage-change", {
            detail: {
              key: "userInfo"
            }
          }))
        } catch (_a) {
          console.error("触发更新事件失败:", _a)
        }
        ke && localStorage.setItem("authToken", ke), A.success("手机号绑定成功"), ot.value = !1
      } catch (D) {
        const ge = (D == null ? void 0 : D.message) || ((L = D == null ? void 0 : D.response) == null ? void 0 : L.msg) || "手机号绑定失败，请稍后重试";
        A.error(ge)
      } finally {
        co.value = !1
      }
    }, Tw = async () => {
      var r, L, D;
      const m = ((r = yl.value) == null ? void 0 : r.qrcode_url) || ((L = yl.value) == null ? void 0 : L.url) || ((D = yl.value) == null ? void 0 : D.qrcodeUrl) || "";
      if (!m) {
        Nn.value = "";
        return
      }
      try {
        const ge = m.replace(/\\\//g, "/"),
          ke = await Ln.toDataURL(ge, {
            width: 200,
            margin: 2,
            color: {
              dark: "#000000",
              light: "#FFFFFF"
            }
          });
        Nn.value = ke
      } catch (ge) {
        console.error("生成二维码图片失败:", ge), Nn.value = ""
      }
    }, d1 = async () => {
      Mn.value = !0, vn.value = "loading", Oi();
      try {
        const m = await sv();
        (m == null ? void 0 : m.code) === 200 && m.data ? (yl.value = m.data, vn.value = "waiting", await Tw(), zw()) : (yl.value = null, Nn.value = "", vn.value = "error", A.error((m == null ? void 0 : m.msg) || "获取二维码失败"))
      } catch (m) {
        yl.value = null, Nn.value = "", vn.value = "error", A.error(m.message || "获取二维码失败")
      } finally {
        Mn.value = !1
      }
    }, $w = () => {
      Nn.value = "", d1()
    }, Oi = () => {
      zo.value && (clearInterval(zo.value), zo.value = null)
    }, Pw = async m => {
      Oi(), vn.value = "success";
      const r = (m == null ? void 0 : m.userInfo) || (m == null ? void 0 : m.user) || m || {},
        L = r.openid || (m == null ? void 0 : m.openid) || "",
        D = r.token || (m == null ? void 0 : m.token) || "";
      D && localStorage.setItem("authToken", D), L && (N.value.wechat = L);
      try {
        window.dispatchEvent(new CustomEvent("localStorage-change", {
          detail: {
            key: "userInfo"
          }
        }))
      } catch (ge) {
        console.error("触发更新事件失败:", ge)
      }
      try {
        for (let ke = 0; ke < 3 && (await $({
            force: !0
          }), !N.value.wechat); ke++) ke < 3 - 1 && await new Promise(Vt => setTimeout(Vt, 800))
      } catch (ge) {
        console.warn("重新获取用户信息失败:", ge)
      }
      A.success("绑定微信成功"), setTimeout(() => {
        bt.value = !1
      }, 1e3)
    }, Vw = m => {
      if (!m) return;
      const {
        code: r,
        msg: L,
        data: D
      } = m, ke = (Vt => typeof Vt > "u" || Vt === null ? "" : String(Vt).toLowerCase())(D == null ? void 0 : D.status);
      if (r === 200) {
        if (!D) {
          Oi(), vn.value = "error", A.error(L || "绑定失败，请重试");
          return
        }
        if (D.userInfo || D.user || D.openid || D.profile || D.userid || D.token || D.is_login === !0 || ["success", "confirmed", "done", "ok", "1", "true"].includes(ke)) {
          Pw(D);
          return
        }
      }
      if (["scanned", "scan", "confirming", "2"].includes(ke) || [201, 202].includes(r)) {
        vn.value = "scanned";
        return
      }
      if (["expired", "timeout", "invalid"].includes(ke) || [400, 410, 41001].includes(r) || (D == null ? void 0 : D.expired) === !0) {
        vn.value = "expired", Oi();
        return
      }
      if (ke === "error") {
        vn.value = "error", Oi(), L && A.error(L);
        return
      }
      vn.value = "waiting"
    }, zw = () => {
      var m;
      Oi(), (m = yl.value) != null && m.scene_id && (zo.value = setInterval(async () => {
        try {
          const r = await rv(yl.value.scene_id);
          Vw(r)
        } catch (r) {
          console.error("轮询二维码状态失败:", r), vn.value = "error", Oi()
        }
      }, 2e3))
    }, Kc = (m, r) => {
      const L = {
        single: "一键生成图文",
        yijuhua: "一句话图文"
      };
      return m ? m === "batch" ? q(r) : m === "copy" ? za(r) : L[m] || m : "-"
    }, Yc = m => ({
      single: "primary",
      batch: "success",
      copy: "warning",
      yijuhua: "info"
    })[m] || "info", Xc = m => {
      const r = m.id || m.taskId,
        L = Fo.value.indexOf(r);
      L > -1 ? Fo.value.splice(L, 1) : Fo.value.push(r)
    }, v1 = (m, r) => {
      Fo.value = r.map(L => L.id || L.taskId)
    }, m1 = m => {
      const r = m.taskId || m.id;
      if (!r) {
        A.error("任务ID不存在，无法继续任务");
        return
      }
      let L = m.mode;
      if (L === "batch" && m.param && ((m.param.mode || m.param.batchMode) === "import" ? L = "import" : L = "single"), L === "single") {
        try {
          const D = JSON.parse(sessionStorage.getItem("generateParams") || "{}");
          D.taskId = r, D.mode = "single", sessionStorage.setItem("generateParams", JSON.stringify(D))
        } catch (D) {
          console.error("Failed to update generateParams:", D)
        }
        o.push(`/generating1?id=${r}`)
      } else if (L === "import") {
        try {
          const D = JSON.parse(sessionStorage.getItem("generateParams") || "{}");
          D.taskId = r, D.mode = "import", sessionStorage.setItem("generateParams", JSON.stringify(D))
        } catch (D) {
          console.error("Failed to update generateParams:", D)
        }
        o.push(`/generating1?id=${r}`)
      } else if (L === "copy") {
        try {
          const D = JSON.parse(sessionStorage.getItem("copyGenerateParams") || "{}");
          D.taskId = r, D.mode = "copy", sessionStorage.setItem("copyGenerateParams", JSON.stringify(D))
        } catch (D) {
          console.error("Failed to update copyGenerateParams:", D)
        }
        o.push(`/generating1?id=${r}`)
      } else console.warn("无法确定任务模式，跳转到批量生成页面", m), o.push("/generates")
    }, Zc = m => m === 0 ? "进行中" : m === 1 ? "标题待确定" : m === 2 ? "已完成" : "进行中", ed = m => m === 0 ? "info" : m === 1 ? "warning" : m === 2 ? "success" : "info", g1 = m => {
      const r = (m == null ? void 0 : m.taskId) || (m == null ? void 0 : m.id);
      if (m && r) {
        const L = String(r);
        let D = "";
        const ge = m.type || m.mode;
        ge === "batch" || ge === 0 || ge === 2 ? D = "batch" : (ge === "copy" || ge === 1 || ge === 3) && (D = "copy");
        const ke = new URLSearchParams;
        ke.set("filter", "task"), ke.set("taskId", L), D && ke.set("type", D);
        const Vt = `/works?${ke.toString()}`;
        console.log("跳转到我的作品页面:", Vt, "任务记录:", m, "taskId:", L, "type:", D), o.push(Vt).then(() => {
          console.log("路由跳转成功")
        }).catch(_a => {
          console.error("路由跳转失败:", _a), o.replace(Vt)
        })
      } else console.log("跳转到我的作品页面（无任务ID）", m), o.push("/works?filter=task").catch(L => {
        console.error("路由跳转失败:", L), o.replace("/works?filter=task")
      })
    }, f1 = m => ({
      wechat: "微信支付",
      wxpay: "微信支付",
      mppay: "公众号支付",
      scanpay: "扫码支付",
      wallet: "余额支付",
      alipay: "支付宝",
      bank: "银行卡"
    })[m] || m, Lw = m => ({
      success: "支付成功",
      pending: "待支付",
      failed: "支付失败",
      cancelled: "已取消"
    })[m] || m, Dw = m => {
      navigator.clipboard.writeText(m).then(() => {
        A.success("下载地址已复制到剪贴板")
      }).catch(() => {
        A.error("复制失败")
      })
    }, Mw = m => {
      window.open(m, "_blank")
    }, Ow = Le(() => N.value.phone || N.value.email || "未绑定"), Bw = async () => {
      Ht.value && Ht.value.validate(async m => {
        var r, L, D, ge, ke, Vt;
        if (m) {
          const _a = ((r = Tt.value.oldPassword) == null ? void 0 : r.trim()) || "",
            Zt = ((L = Tt.value.newPassword) == null ? void 0 : L.trim()) || "",
            Xa = ((D = Tt.value.confirmNewPassword) == null ? void 0 : D.trim()) || "";
          if (Zt !== Xa) {
            A.warning("两次输入的新密码不一致");
            return
          }
          if (_a && Zt === _a) {
            A.warning("新密码不能与旧密码相同");
            return
          }
          try {
            await fr({
              password: _a,
              new_password: Zt
            });
            const nl = await zl({
              force: !0
            });
            if (nl) {
              const Ya = V(nl);
              Ya && (N.value = {
                ...N.value,
                ...Ya,
                hasPassword: !0
              })
            } else N.value.hasPassword = !0;
            window.dispatchEvent(new CustomEvent("localStorage-change", {
              detail: {
                key: "userInfo",
                data: nl || N.value
              }
            })), A.success(Pa.value ? "密码修改成功" : "密码设置成功"), Tt.value = {
              oldPassword: "",
              newPassword: "",
              confirmNewPassword: ""
            }, Ht.value.clearValidate()
          } catch (nl) {
            console.error("设置密码失败:", nl);
            const Ya = (nl == null ? void 0 : nl.message) || (nl == null ? void 0 : nl.msg) || ((ke = (ge = nl == null ? void 0 : nl.response) == null ? void 0 : ge.data) == null ? void 0 : ke.msg) || ((Vt = nl == null ? void 0 : nl.response) == null ? void 0 : Vt.msg) || "设置密码失败，请重试";
            La.alert(Ya, "修改密码失败", {
              type: "error",
              confirmButtonText: "知道了"
            })
          }
        } else A.warning("请完善表单信息")
      })
    }, or = p(!1), td = p(null), So = p("wxpay"), wn = p({
      amount: "",
      account: "",
      realName: "",
      qrCode: ""
    });
  So.value;
  const mm = p(!1),
    bu = p([]),
    gm = p(1),
    ad = p(15),
    ld = p(0),
    nd = p(!1),
    li = p("all"),
    p1 = p("0.00"),
    hs = async (m = 1) => {
      nd.value = !0;
      try {
        const r = {
          page: m,
          size: ad.value
        };
        li.value !== "all" && (r.type = li.value);
        const L = await rf(r),
          D = (L == null ? void 0 : L.rows) ?? (L == null ? void 0 : L.list) ?? [];
        bu.value = D.map(ge => {
          const ke = Number(ge.amount ?? 0);
          return {
            type: ge.type ?? "",
            typeLabel: ge.type_label ?? "余额变动",
            amount: ke,
            amountText: `${ke>=0?"+":"-"}¥${Math.abs(ke).toFixed(2)}`,
            isIncome: ke >= 0,
            title: ge.title ?? "",
            desc: ge.desc ?? "",
            orderNo: ge.order_no ?? "",
            createTime: ge.createtime_text ?? "-"
          }
        }), ld.value = Number((L == null ? void 0 : L.total) ?? bu.value.length) || 0, (L == null ? void 0 : L.available_amount) !== void 0 && (L == null ? void 0 : L.available_amount) !== null && (p1.value = Number(L.available_amount).toFixed(2)), gm.value = m
      } catch (r) {
        console.error("加载余额明细失败:", r), bu.value = [], ld.value = 0
      } finally {
        nd.value = !1
      }
    }, wu = p([]), fm = p(1), od = p(0), pm = p(!1), Nw = m => {
      let r = m.createtime ?? m.create_time ?? m.createTime ?? "-";
      if (typeof r == "number" || typeof r == "string" && /^\d+$/.test(r)) {
        const Zt = String(r).length === 10 ? Number(r) * 1e3 : Number(r),
          Xa = new Date(Zt);
        if (!isNaN(Xa.getTime())) {
          const nl = Ya => String(Ya).padStart(2, "0");
          r = `${Xa.getFullYear()}-${nl(Xa.getMonth()+1)}-${nl(Xa.getDate())} ${nl(Xa.getHours())}:${nl(Xa.getMinutes())}:${nl(Xa.getSeconds())}`
        }
      }
      const L = parseFloat(m.refund_rate ?? 0) || 0,
        D = parseFloat(m.refund_commission ?? 0) || 0;
      let ge = "settled";
      Number(m.order_status) === 4 || L >= 100 ? ge = "refunded" : L > 0 ? ge = "partial_refund" : m.order_status !== void 0 ? ge = Number(m.order_status) === 1 ? "settled" : "pending" : m.status !== void 0 && (ge = m.status);
      const ke = parseFloat(m.commission_price ?? m.commission ?? 0) || 0,
        Vt = ge === "refunded" && D > 0 ? -D : ke,
        _a = String(m.refund_reason ?? "").replace(/^0\s*[;；]\s*/, "").trim();
      return {
        orderNo: m.order_no ?? m.orderNo ?? "-",
        userName: m.nickname ?? m.user_name ?? m.userName ?? "-",
        userAvatar: m.avatar ?? m.user_avatar ?? m.userAvatar ?? "",
        packageType: m.order_desc ?? m.package_type ?? m.packageType ?? "-",
        orderAmount: String(m.pay_price ?? m.order_price ?? m.order_amount ?? m.orderAmount ?? m.amount ?? "0.00"),
        commission: String(Vt.toFixed(2)),
        commissionRatio: String(m.commission_rate ?? m.commissionRatio ?? "0"),
        buyerIsAgent: Number(m.is_daili ?? 0) === 1,
        status: ge,
        refundRate: L,
        refundCommission: D,
        refundReason: _a === "0" ? "" : _a,
        createTime: r
      }
    }, y1 = async (m = 1) => {
      var r;
      pm.value = !0;
      try {
        const L = await nf({
            page: m,
            size: qm
          }),
          D = (L == null ? void 0 : L.rows) ?? (L == null ? void 0 : L.list) ?? (L == null ? void 0 : L.data) ?? [],
          ge = ((r = L == null ? void 0 : L.pages) == null ? void 0 : r.total) ?? (L == null ? void 0 : L.total) ?? D.length;
        wu.value = D.map(Nw), fm.value = m, od.value = Number(ge) ?? 0
      } catch (L) {
        console.error("加载分销订单失败:", L), wu.value = [], od.value = 0
      } finally {
        pm.value = !1
      }
    }, ir = p([]), _u = p(1), ku = p(0), ym = p(!1), Cu = p(""), id = p(!1), Au = p(null), sd = p([]), hm = p(!1), Iu = p(1), xu = p(0), Su = p(""), sr = p([]), Uw = m => {
      const r = ge => String(ge).padStart(2, "0");
      let L = m.createtime ?? m.register_time ?? m.registerTime ?? m.create_time ?? "-";
      if (typeof L == "number" || typeof L == "string" && /^\d+$/.test(L)) {
        const ge = String(L).length === 10 ? Number(L) * 1e3 : Number(L),
          ke = new Date(ge);
        isNaN(ke.getTime()) || (L = `${ke.getFullYear()}-${r(ke.getMonth()+1)}-${r(ke.getDate())} ${r(ke.getHours())}:${r(ke.getMinutes())}:${r(ke.getSeconds())}`)
      }
      let D = m.vip_expiretime ?? m.vipExpiretime ?? "-";
      if (typeof D == "number" || typeof D == "string" && /^\d+$/.test(D)) {
        const ge = String(D).length === 10 ? Number(D) * 1e3 : Number(D),
          ke = new Date(ge);
        isNaN(ke.getTime()) || (D = `${ke.getFullYear()}-${r(ke.getMonth()+1)}-${r(ke.getDate())} ${r(ke.getHours())}:${r(ke.getMinutes())}:${r(ke.getSeconds())}`)
      }
      return {
        userId: m.id ?? m.user_id ?? m.userId ?? "-",
        nickname: m.nickname ?? m.nick_name ?? "-",
        registerTime: L,
        orderCount: Number(m.order_count ?? m.orderCount ?? 0) || 0,
        totalAmount: String(m.order_price ?? m.total_amount ?? m.totalAmount ?? m.amount ?? "0.00"),
        commission: String(m.order_commission_price ?? m.commission ?? "0.00"),
        vipName: m.vip_name ?? m.vipName ?? "-",
        vipExpireTime: D,
        remainingPoints: Number(m.create_points ?? m.createPoints ?? 0)
      }
    }, bm = async (m = 1) => {
      var r;
      ym.value = !0;
      try {
        const L = {
          page: m,
          size: Fm
        };
        Cu.value.trim() && (L.search = Cu.value.trim());
        const D = await of(L),
          ge = (D == null ? void 0 : D.rows) ?? (D == null ? void 0 : D.list) ?? (D == null ? void 0 : D.data) ?? [],
          ke = ((r = D == null ? void 0 : D.pages) == null ? void 0 : r.total) ?? (D == null ? void 0 : D.total) ?? ge.length;
        ir.value = ge.map(Uw), _u.value = m, ku.value = Number(ke) ?? 0
      } catch (L) {
        console.error("加载我的用户失败:", L), ir.value = [], ku.value = 0
      } finally {
        ym.value = !1
      }
    }, Rw = Le(() => ir.value), wm = () => {
      _u.value = 1, bm(1)
    }, jw = Le(() => {
      const m = Au.value;
      return `作品记录${m!=null&&m.nickname?`（${m.nickname}）`:""}`
    }), qw = m => {
      const r = D => String(D).padStart(2, "0");
      let L = m.updatetime ?? m.update_time ?? m.updateTime ?? "-";
      if (typeof L == "number" || typeof L == "string" && /^\d+$/.test(L)) {
        const D = String(L).length === 10 ? Number(L) * 1e3 : Number(L),
          ge = new Date(D);
        isNaN(ge.getTime()) || (L = `${ge.getFullYear()}-${r(ge.getMonth()+1)}-${r(ge.getDate())} ${r(ge.getHours())}:${r(ge.getMinutes())}:${r(ge.getSeconds())}`)
      }
      return {
        id: m.id ?? m.record_id ?? "-",
        title: m.title ?? m.name ?? "-",
        type: m.type ?? m.record_type ?? "-",
        is_release: Number(m.is_release ?? m.isRelease ?? 0),
        use_points: Number(m.use_points ?? m.usePoints ?? 0) || 0,
        updatetime: L
      }
    }, Fw = m => {
      const r = Number(m);
      return {
        0: "一句话图文",
        1: "一键生成图文",
        2: "批量大字报图文",
        3: "AI灵感参考",
        4: "一句话图文Pro",
        5: "一句话图文Max",
        6: "自定义图文",
        7: "指定文案Pro",
        8: "指定文案Max",
        9: "传图生成图文",
        10: "产品图Pro",
        11: "产品图Max"
      } [r] || String(m ?? "-")
    }, _m = m => {
      const r = Number(m),
        D = {
          0: {
            bg: "#EEF2FF",
            bd: "#C7D2FE",
            fg: "#3730A3"
          },
          1: {
            bg: "#ECFEFF",
            bd: "#A5F3FC",
            fg: "#155E75"
          },
          2: {
            bg: "#F0FDF4",
            bd: "#BBF7D0",
            fg: "#166534"
          },
          3: {
            bg: "#e6f4ff",
            bd: "#ede9fe",
            fg: "#9F1239"
          },
          4: {
            bg: "#F5F3FF",
            bd: "#DDD6FE",
            fg: "#5B21B6"
          },
          5: {
            bg: "#FFFBEB",
            bd: "#FDE68A",
            fg: "#92400E"
          },
          6: {
            bg: "#F3F4F6",
            bd: "#E5E7EB",
            fg: "#374151"
          },
          7: {
            bg: "#EFF6FF",
            bd: "#BFDBFE",
            fg: "#1D4ED8"
          },
          8: {
            bg: "#e6f4ff",
            bd: "#ede9fe",
            fg: "#002c8c"
          },
          9: {
            bg: "#F0FDFA",
            bd: "#99F6E4",
            fg: "#115E59"
          },
          10: {
            bg: "#FAF5FF",
            bd: "#E9D5FF",
            fg: "#6B21A8"
          },
          11: {
            bg: "#FFF7ED",
            bd: "#FED7AA",
            fg: "#9A3412"
          }
        } [r] || {
          bg: "#F3F4F6",
          bd: "#E5E7EB",
          fg: "#374151"
        };
      return {
        "--wt-bg": D.bg,
        "--wt-bd": D.bd,
        "--wt-fg": D.fg
      }
    }, km = async (m = 1) => {
      var L, D;
      const r = (L = Au.value) == null ? void 0 : L.userId;
      if (r) {
        hm.value = !0;
        try {
          const [ge, ke] = Array.isArray(sr.value) ? sr.value : [], Vt = await Sh({
            userid: r,
            page: m,
            size: Wm,
            keyword: Su.value,
            startDate: ge,
            endDate: ke
          }), _a = (Vt == null ? void 0 : Vt.rows) ?? (Vt == null ? void 0 : Vt.list) ?? (Vt == null ? void 0 : Vt.data) ?? [], Zt = ((D = Vt == null ? void 0 : Vt.pages) == null ? void 0 : D.total) ?? (Vt == null ? void 0 : Vt.total) ?? _a.length;
          sd.value = _a.map(qw), Iu.value = m, xu.value = Number(Zt) ?? 0
        } catch (ge) {
          console.error("加载作品记录失败:", ge), sd.value = [], xu.value = 0, A.error((ge == null ? void 0 : ge.message) || "加载作品记录失败，请稍后重试")
        } finally {
          hm.value = !1
        }
      }
    }, Eu = () => {
      Iu.value = 1, km(1)
    }, Ww = () => {
      Su.value = "", sr.value = [], Eu()
    }, Gw = m => {
      Au.value = m || null, sd.value = [], xu.value = 0, Iu.value = 1, Su.value = "", sr.value = [], id.value = !0, km(1)
    }, Jw = Le(() => ir.value.reduce((m, r) => m + (r.orderCount || 0), 0)), h1 = Le(() => ir.value.reduce((m, r) => m + parseFloat(r.commission || 0), 0).toFixed(2)), Hw = Le(() => {
      const m = ir.value.length;
      return m === 0 ? "0.00" : ((parseFloat(h1.value) || 0) / m).toFixed(2)
    }), Cm = p({
      day: [],
      week: [],
      month: [],
      year: []
    }), Am = p(!1), Qw = async () => {
      Am.value = !0;
      try {
        const m = await uf();
        if (m) return Cm.value = {
          day: m.day || [],
          week: m.week || [],
          month: m.month || [],
          year: m.year || []
        }, !0
      } catch (m) {
        console.error("获取排行榜失败:", m);
        const r = (m == null ? void 0 : m.message) || (m == null ? void 0 : m.msg) || "";
        return /累计佣金不足|2000|无法查看排行榜/.test(r) ? (er.value = !1, du.value = !0) : (A.error(r || "获取排行榜失败"), er.value = !1), !1
      } finally {
        Am.value = !1
      }
      return !1
    }, Kw = Le(() => {
      const m = tm.value;
      return (Cm.value[m] || []).map((L, D) => ({
        ...L,
        rank: D + 1,
        nickname: L.nickname || "匿名用户",
        avatar: L.avatar || "",
        sales: parseFloat(L.order_price || 0).toFixed(2)
      }))
    }), Bi = m => {
      if (!Wa.value.agentLevel || Wa.value.agentLevel === "未升级") {
        const r = {
          balanceLog: "余额明细",
          orders: "分销订单",
          team: "我的用户",
          myCards: "我的卡密",
          promoteLink: "推广链接",
          promoteMaterials: "推广素材",
          promoteQr: "推广二维码",
          agentRanking: "代理排行榜",
          purchaseCards: "购买卡密"
        };
        e1.value = r[m] || "该", mu.value = !0;
        return
      }
      switch (m) {
        case "balanceLog":
          li.value = "all", mm.value = !0, hs(1);
          break;
        case "orders":
          lm.value = !0, y1(1);
          break;
        case "team":
          _u.value = 1, Cu.value = "", nm.value = !0, bm(1);
          break;
        case "myCards":
          iu.value = !0;
          break;
        case "purchaseCards":
          ai.value = !0, Mi.value.length === 0 && a1();
          break;
        case "promoteLink":
          Xv.value = !0, mn() && ou();
          break;
        case "promoteMaterials":
          Yv.value = !0;
          break;
        case "promoteQr":
          Nc.value = !0;
          break;
        case "promotePoster":
          Uc.value = !0, mn() && ou();
          break;
        case "agentRanking":
          Cm.value.day.length === 0 ? Qw().then(r => {
            r && (er.value = !0)
          }) : er.value = !0;
          break;
        case "purchaseCards":
          ai.value = !0;
          break
      }
    }, Yw = m => {
      var r;
      if ((r = m == null ? void 0 : m.stopPropagation) == null || r.call(m), !mn()) {
        Hc();
        return
      }
      Da(() => {
        fs.value = !0
      })
    }, Im = () => {
      if (mu.value = !1, !mn()) {
        Hc();
        return
      }
      Da(() => {
        fs.value = !0
      })
    }, Xw = async () => {
      if (!mn()) {
        Fc.value = !1, ps.value = [], tr.value = null;
        return
      }
      Fc.value = !0, ps.value = [], tr.value = null;
      try {
        const m = await Ls(),
          L = (Array.isArray(m) ? m : m != null && m.rows && Array.isArray(m.rows) ? m.rows : []).filter(D => Number(D.type) === 2);
        ps.value = L, L.length > 0 && (tr.value = L[0].id)
      } catch (m) {
        console.warn("获取代理价格失败:", m), A.error("获取代理价格失败，请稍后重试")
      } finally {
        Fc.value = !1
      }
    }, xm = Le(() => {
      const m = tr.value;
      return m && (ps.value.find(r => r.id === m) || ps.value[0]) || null
    }), b1 = Le(() => {
      const m = xm.value;
      if (!m) return "1299";
      const r = parseFloat(m.price);
      return Number.isFinite(r) ? String(r) : "1299"
    }), Zw = new Date(2026, 5, 1, 0, 0, 0), rd = p(""), Sm = p(!0), w1 = () => {
      const m = Date.now(),
        r = Zw.getTime();
      if (r <= m) {
        rd.value = "", Sm.value = !1;
        return
      }
      const L = Math.floor((r - m) / 864e5),
        D = Math.floor((r - m) % 864e5 / 36e5),
        ge = Math.floor((r - m) % 36e5 / 6e4),
        ke = Math.floor((r - m) % 6e4 / 1e3);
      rd.value = `${L}天${D}时${ge}分${ke}秒`
    };
  let bs = null;
  oa(fs, m => {
    m ? (mn() && Xw(), w1(), Sm.value && !bs && (bs = setInterval(w1, 1e3))) : bs && (clearInterval(bs), bs = null)
  }), ki(() => {
    bs && clearInterval(bs)
  });
  const e_ = m => new Promise((r, L) => {
      if (!m || !m.appId || !m.timeStamp || !m.nonceStr || !m.package || !m.signType || !m.paySign) {
        L(new Error("支付参数不完整"));
        return
      }
      const D = () => {
        try {
          WeixinJSBridge.invoke("getBrandWCPayRequest", {
            appId: m.appId,
            timeStamp: m.timeStamp,
            nonceStr: m.nonceStr,
            package: m.package,
            signType: m.signType,
            paySign: m.paySign
          }, ge => {
            ge.err_msg === "get_brand_wcpay_request:ok" ? r(ge) : ge.err_msg === "get_brand_wcpay_request:cancel" ? L(new Error("用户取消支付")) : L(new Error(ge.err_msg || "支付失败"))
          })
        } catch (ge) {
          L(new Error("调用微信支付失败：" + (ge && ge.message) || "未知错误"))
        }
      };
      if (typeof WeixinJSBridge > "u") {
        const ge = () => {
          D()
        };
        document.addEventListener("WeixinJSBridgeReady", ge, !1), setTimeout(() => {
          document.removeEventListener("WeixinJSBridgeReady", ge, !1), L(new Error("微信支付环境加载超时，请刷新页面重试"))
        }, 5e3)
      } else D()
    }),
    rr = () => {
      Gc && (clearInterval(Gc), Gc = null)
    },
    t_ = () => {
      rr(), Gc = setInterval(async () => {
        if (lr.value) try {
          const m = await Ds({
              order_no: lr.value
            }),
            r = m == null ? void 0 : m.status;
          r === 1 ? (rr(), ar.value = !1, lr.value = "", fs.value = !1, A.success("支付成功！您已享受代理权益"), await $(), k1()) : (r === 2 || r === 3) && (rr(), ar.value = !1, lr.value = "", A.error(r === 2 ? "支付失败，请重试" : "已取消支付"))
        } catch (m) {
          console.warn("轮询订单状态失败:", m)
        }
      }, 2500), setTimeout(rr, 30 * 60 * 1e3)
    },
    a_ = async () => {
      if (qc.value) return;
      const m = xm.value;
      if (!m) {
        A.warning("暂无代理套餐，请稍后再试");
        return
      }
      if (!await Co()) return;
      const r = parseFloat(m.price) || 0,
        L = sn(),
        D = L ? "mppay" : "wxpay";
      try {
        await La.confirm(`确认支付 ¥${r} 升级代理吗？`, "确认升级", {
          confirmButtonText: "确认支付",
          cancelButtonText: "取消",
          type: "warning"
        })
      } catch (ge) {
        ge !== "cancel" && A.error((ge == null ? void 0 : ge.message) || "操作失败");
        return
      }
      qc.value = !0;
      try {
        const ge = await Ui({
          pay_type: D,
          good_id: m.id
        });
        if (!ge || !ge.order_no) throw new Error((ge == null ? void 0 : ge.msg) || "创建订单失败，请重试");
        const ke = ge.code_url;
        if (lr.value = ge.order_no, L && ke && typeof ke == "object" && ke.appId) await e_(ke), fs.value = !1, A.success("支付成功！您已享受代理权益"), await $(), k1();
        else if (typeof ke == "string") Wc.value = await Ln.toDataURL(ke, {
          width: 260,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#FFFFFF"
          }
        }), ar.value = !0, t_();
        else throw new Error("支付参数异常，请重试")
      } catch (ge) {
        const ke = (ge == null ? void 0 : ge.message) || (ge == null ? void 0 : ge.msg) || "创建订单失败，请稍后重试";
        ke.includes("取消") || A.error(ke)
      } finally {
        qc.value = !1
      }
    }, l_ = () => {
      rr(), ar.value = !1, lr.value = "", Wc.value = ""
    }, n_ = () => {
      or.value = !0, wn.value = {
        amount: "",
        account: "",
        realName: "",
        qrCode: ""
      }
    }, o_ = () => {
      const m = Wa.value.availableIncome;
      wn.value.amount = m != null && m !== "" ? String(m) : "0"
    }, _1 = () => {
      wn.value.account = "", wn.value.qrCode = "", td.value && td.value.clearValidate()
    }, i_ = async m => {
      if (!m.raw) return !1;
      try {
        const r = await ao(m.raw, {
            skipImageGuard: !0
          }),
          L = (ge, ke = 0) => {
            if (!ge || ke > 6) return "";
            if (typeof ge == "string") return ge.trim();
            if (Array.isArray(ge)) {
              for (const Vt of ge) {
                const _a = L(Vt, ke + 1);
                if (_a) return _a
              }
              return ""
            }
            if (typeof ge == "object") {
              const Vt = ge.url || ge.fileUrl || ge.file_url || ge.path || ge.src || ge.href || "";
              if (typeof Vt == "string" && Vt.trim()) return Vt.trim();
              const _a = ["data", "list", "result", "rows", "files", "items"];
              for (const Zt of _a)
                if (Zt in ge) {
                  const Xa = L(ge[Zt], ke + 1);
                  if (Xa) return Xa
                } for (const Zt of Object.values(ge)) {
                const Xa = L(Zt, ke + 1);
                if (Xa) return Xa
              }
            }
            return ""
          },
          D = L(r);
        if (!D) throw new Error("未获取到上传后的图片地址");
        wn.value.qrCode = D, td.value && td.value.validateField("qrCode"), A.success("收款码上传成功")
      } catch (r) {
        console.error("收款码上传失败", r), A.error((r == null ? void 0 : r.message) || "收款码上传失败")
      }
      return !1
    }, s_ = async () => {
      if (!wn.value.amount || parseFloat(wn.value.amount) <= 0) {
        A.warning("请输入提现金额");
        return
      }
      const m = parseFloat(wn.value.amount),
        r = parseFloat(Wa.value.availableIncome || 0);
      if (m > r) {
        A.warning("提现金额不能超过可提现余额");
        return
      }
      if (!wn.value.realName) {
        A.warning("请输入真实姓名");
        return
      }
      if (!wn.value.account) {
        A.warning(So.value === "wxpay" ? "请输入微信账号" : "请输入支付宝账号");
        return
      }
      if (!wn.value.qrCode) {
        A.warning(So.value === "wxpay" ? "请上传微信收款码" : "请上传支付宝收款码");
        return
      }
      try {
        await cf({
          amount: m,
          type: So.value,
          name: wn.value.realName,
          account: wn.value.account,
          qrcode: wn.value.qrCode
        }), A.success("提现申请已提交"), or.value = !1;
        const L = parseFloat(Wa.value.availableIncome);
        Wa.value.availableIncome = (L - m).toFixed(2), wn.value = {
          amount: "",
          account: "",
          realName: "",
          qrCode: ""
        }
      } catch (L) {
        A.error((L == null ? void 0 : L.message) || "提现申请失败，请重试")
      }
    }, r_ = m => {
      navigator.clipboard.writeText(m).then(() => {
        A.success("卡密已复制到剪贴板")
      }).catch(() => {
        A.error("复制失败")
      })
    }, u_ = () => {
      const m = Zs.value;
      if (!m.length) {
        A.warning("暂无卡密可导出");
        return
      }
      const r = ["ID", "名称", "卡密", "状态", "使用人", "创建时间", "使用时间"],
        L = m.map(Vt => [Vt.orderNo || "", Vt.productName || "", Vt.cardNo || "", Vt.status === "used" ? "已使用" : "未使用", Vt.status === "used" && Vt.usedByNickname ? Vt.usedByNickname : "", Vt.payTime || "", Vt.status === "used" && Vt.usedTime && Vt.usedTime !== "-" ? Vt.usedTime : ""]),
        D = "\uFEFF" + [r.join(","), ...L.map(Vt => Vt.map(_a => `"${String(_a).replace(/"/g,'""')}"`).join(","))].join(`
`),
        ge = new Blob([D], {
          type: "text/csv;charset=utf-8"
        }),
        ke = document.createElement("a");
      ke.href = URL.createObjectURL(ge), ke.download = `卡密列表_${new Date().toISOString().slice(0,10)}.csv`, ke.click(), URL.revokeObjectURL(ke.href), A.success("导出成功")
    }, c_ = () => {
      navigator.clipboard.writeText(Pc.value), A.success("推广链接已复制到剪贴板")
    }, d_ = () => {
      navigator.clipboard.writeText(Rp.value), A.success("无口令邀请链接已复制到剪贴板")
    }, v_ = async () => {
      const m = Pc.value;
      if (!m) {
        vu.value = "";
        return
      }
      am.value = !0, vu.value = "";
      try {
        const r = await Ln.toDataURL(m, {
          width: 240,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff"
          }
        });
        vu.value = r
      } catch (r) {
        console.error("生成推广二维码失败:", r), A.error("二维码生成失败")
      } finally {
        am.value = !1
      }
    };
  oa(Nc, m => {
    m && v_()
  });
  const m_ = async () => {
    const m = Pc.value;
    if (!m) {
      Rc.value = "";
      return
    }
    try {
      Rc.value = await Ln.toDataURL(m, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff"
        }
      })
    } catch (r) {
      console.error("海报二维码生成失败:", r)
    }
  };
  oa(Uc, m => {
    m && m_()
  });
  const g_ = async () => {
    const m = Zp.value;
    if (m) try {
      const {
        default: r
      } = await ya(() => import("./html2canvas.esm-e0a7d97b.js"), []), L = await r(m, {
        scale: 2,
        useCORS: !0,
        backgroundColor: null
      }), D = document.createElement("a");
      D.download = `${O.value}推广海报_${Date.now()}.png`, D.href = L.toDataURL("image/png"), D.click(), A.success("海报已保存")
    } catch (r) {
      console.error("海报保存失败:", r), A.error("海报保存失败，请截图保存")
    }
  };
  oa(iu, m => {
    m && cu(1, ru.value || void 0)
  });
  const f_ = () => {
      navigator.clipboard.writeText(jp.value), A.success("推广素材链接已复制到剪贴板")
    },
    k1 = () => {
      A.success("数据已刷新")
    };
  return (m, r) => {
    var I1, x1, S1;
    const L = $l,
      D = xl,
      ge = nc,
      ke = oc,
      Vt = B_,
      _a = Fn("Monitor"),
      Zt = Jg,
      Xa = Hg,
      nl = Ur,
      Ya = Ii,
      wl = Zd,
      Wo = ho,
      gi = rs,
      Zn = jr,
      fi = Kn,
      ud = Qg,
      Jn = Oo,
      ni = Bo,
      ws = xi,
      C1 = sc,
      p_ = No,
      y_ = N_,
      vl = Rl,
      Vl = cn,
      Bl = yo,
      Go = Vo,
      cd = bo,
      A1 = Yy,
      h_ = Wg,
      b_ = U_,
      Ki = Rr;
    return c(), v("div", _O, [a(ei, {
      title: "个人中心",
      "is-logged-in": bw.value,
      "user-info": N.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: r[0] || (r[0] = k => Sa.value = !0),
      onLoginClick: Qc,
      onCommand: _w
    }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), d.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: r[1] || (r[1] = k => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": d.value
      }])
    }, [M("", !0), a(ji, {
      name: "fade"
    }, {
      default: l(() => [d.value && Ra.value ? (c(), v("div", {
        key: 0,
        class: "profile-panel-overlay",
        onClick: r[3] || (r[3] = k => Ra.value = !1)
      })) : M("", !0)]),
      _: 1
    }), a(ji, {
      name: "slide-left"
    }, {
      default: l(() => [d.value && Ra.value ? (c(), v("div", kO, [e("div", CO, [r[216] || (r[216] = e("span", {
        class: "profile-panel-title"
      }, "个人信息", -1)), a(D, {
        type: "danger",
        link: "",
        class: "logout-btn",
        onClick: um
      }, {
        default: l(() => [...r[215] || (r[215] = [g("退出登录", -1)])]),
        _: 1
      })]), e("div", AO, [e("div", IO, [a(ge, {
        size: 80,
        src: N.value.avatar
      }, null, 8, ["src"]), e("div", xO, [a(ke, {
        "auto-upload": !1,
        "show-file-list": !1,
        "on-change": i1
      }, {
        default: l(() => [...r[217] || (r[217] = [e("span", {
          class: "text-xs text-white"
        }, "修改", -1)])]),
        _: 1
      })])]), e("div", SO, [r[218] || (r[218] = e("div", {
        class: "profile-info-label"
      }, "用户昵称", -1)), e("div", EO, [e("span", null, h(N.value.nickname), 1), a(D, {
        link: "",
        class: "inline-block",
        onClick: r[4] || (r[4] = k => le.value = !0)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(qn))]),
          _: 1
        })]),
        _: 1
      })])]), e("div", TO, [r[219] || (r[219] = e("div", {
        class: "profile-info-label"
      }, "用户ID", -1)), e("div", $O, [e("span", null, h(T.value), 1), a(D, {
        link: "",
        onClick: s1
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Eo))]),
          _: 1
        })]),
        _: 1
      })])]), e("div", PO, [r[220] || (r[220] = e("div", {
        class: "profile-info-label"
      }, "手机号码", -1)), e("div", VO, [e("span", null, h(N.value.phone || "-"), 1), a(D, {
        type: "primary",
        link: "",
        class: "ml-2",
        onClick: vm
      }, {
        default: l(() => [g(h(N.value.phone ? "更换手机号" : "绑定手机号"), 1)]),
        _: 1
      })])]), e("div", zO, [r[221] || (r[221] = e("div", {
        class: "profile-info-label"
      }, "邮箱账号", -1)), e("div", LO, [e("span", null, h(N.value.email || "-"), 1), a(D, {
        type: "primary",
        link: "",
        class: "ml-2",
        onClick: c1
      }, {
        default: l(() => [g(h(N.value.email ? "更换邮箱" : "绑定邮箱"), 1)]),
        _: 1
      })])]), e("div", DO, [r[222] || (r[222] = e("div", {
        class: "profile-info-label"
      }, "微信OpenID", -1)), e("div", MO, [e("span", null, h(N.value.wechat || "-"), 1), N.value.wechat ? (c(), ye(D, {
        key: 0,
        link: "",
        onClick: r1
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Eo))]),
          _: 1
        })]),
        _: 1
      })) : M("", !0), a(D, {
        type: "primary",
        link: "",
        class: "ml-2",
        onClick: r[5] || (r[5] = k => N.value.wechat ? u1() : bt.value = !0)
      }, {
        default: l(() => [g(h(N.value.wechat ? "解绑" : "绑定"), 1)]),
        _: 1
      })])]), e("div", OO, [r[223] || (r[223] = e("div", {
        class: "profile-info-label"
      }, "注册时间", -1)), e("div", BO, [e("span", null, h(N.value.registerTime || "-"), 1)])])])])) : M("", !0)]),
      _: 1
    }), a(Vt, {
      class: Pe(["info-card", {
        "hidden-mobile": d.value
      }]),
      shadow: "always"
    }, {
      default: l(() => [e("div", NO, [r[225] || (r[225] = e("span", {
        class: "ml-[10px] font-bold"
      }, "个人信息", -1)), e("div", UO, [a(L, {
        class: "w-[10px] h-[10px]"
      }, {
        default: l(() => [a(P(zs))]),
        _: 1
      }), a(D, {
        type: "danger",
        link: "",
        class: "ml-1",
        onClick: um
      }, {
        default: l(() => [...r[224] || (r[224] = [g("退出登录", -1)])]),
        _: 1
      })])]), e("div", RO, [e("div", jO, [a(ge, {
        size: 80,
        src: N.value.avatar
      }, null, 8, ["src"]), e("div", qO, [a(ke, {
        "auto-upload": !1,
        "show-file-list": !1,
        "on-change": i1
      }, {
        default: l(() => [...r[226] || (r[226] = [e("span", {
          class: "text-xs text-white"
        }, "修改", -1)])]),
        _: 1
      })])]), e("div", FO, [e("div", WO, [e("div", GO, [r[227] || (r[227] = e("div", {
        class: "text-[#666666] flex-none user-info-label"
      }, "用户昵称", -1)), r[228] || (r[228] = e("span", {
        class: "mx-2"
      }, ":", -1)), e("div", JO, h(N.value.nickname), 1), a(D, {
        link: "",
        class: "inline-block",
        onClick: r[6] || (r[6] = k => le.value = !0)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(qn))]),
          _: 1
        })]),
        _: 1
      })]), e("div", HO, [r[229] || (r[229] = e("div", {
        class: "text-[#666666] flex-none user-info-label"
      }, " 用户ID ", -1)), r[230] || (r[230] = e("span", {
        class: "mx-2"
      }, ":", -1)), e("div", QO, h(T.value), 1), a(D, {
        link: "",
        onClick: s1
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Eo))]),
          _: 1
        })]),
        _: 1
      })])]), e("div", KO, [e("div", YO, [r[231] || (r[231] = e("div", {
        class: "user-info-label text-[#666666] flex-none"
      }, " 手机号码 ", -1)), r[232] || (r[232] = e("span", {
        class: "mx-2"
      }, ":", -1)), e("div", XO, h(N.value.phone || "-"), 1), a(D, {
        type: "primary",
        link: "",
        class: "ml-2",
        onClick: vm
      }, {
        default: l(() => [g(h(N.value.phone ? "更换手机号" : "绑定手机号"), 1)]),
        _: 1
      })]), e("div", ZO, [r[233] || (r[233] = e("div", {
        class: "user-info-label text-[#666666] flex-none"
      }, " 邮箱账号 ", -1)), r[234] || (r[234] = e("span", {
        class: "mx-2"
      }, ":", -1)), e("div", eB, h(N.value.email || "-"), 1), a(D, {
        type: "primary",
        link: "",
        class: "ml-2",
        onClick: c1
      }, {
        default: l(() => [g(h(N.value.email ? "更换邮箱" : "绑定邮箱"), 1)]),
        _: 1
      })])]), e("div", tB, [e("div", aB, [r[235] || (r[235] = e("div", {
        class: "user-info-label user-info-label-nowrap text-[#666666] flex-none"
      }, " 微信OpenID ", -1)), r[236] || (r[236] = e("span", {
        class: "mx-2"
      }, ":", -1)), e("div", lB, h(N.value.wechat || "-"), 1), N.value.wechat ? (c(), ye(D, {
        key: 0,
        link: "",
        onClick: r1
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Eo))]),
          _: 1
        })]),
        _: 1
      })) : M("", !0), a(D, {
        type: "primary",
        link: "",
        class: "ml-2",
        onClick: r[7] || (r[7] = k => N.value.wechat ? u1() : bt.value = !0)
      }, {
        default: l(() => [g(h(N.value.wechat ? "解绑" : "绑定"), 1)]),
        _: 1
      })]), e("div", nB, [r[237] || (r[237] = e("div", {
        class: "user-info-label text-[#666666] flex-none"
      }, " 注册时间 ", -1)), r[238] || (r[238] = e("span", {
        class: "mx-2"
      }, ":", -1)), e("div", oB, h(N.value.registerTime || "-"), 1)])])])])]),
      _: 1
    }, 8, ["class"]), a(Vt, {
      class: "tabs-card",
      shadow: "always"
    }, {
      default: l(() => [a(ws, {
        modelValue: Y.value,
        "onUpdate:modelValue": r[111] || (r[111] = k => Y.value = k),
        ref_key: "tabsRef",
        ref: Ba,
        class: "main-tabs"
      }, {
        default: l(() => [a(Ya, {
          label: "我的会员",
          name: "wallet"
        }, {
          default: l(() => [e("div", iB, [e("div", sB, [e("div", rB, [e("div", uB, [e("div", cB, [e("div", dB, [a(L, {
            class: "membership-user-icon"
          }, {
            default: l(() => [a(P(_n))]),
            _: 1
          }), r[244] || (r[244] = g(" 会员等级： ", -1)), e("span", {
            class: Pe(["membership-badge", Xn.value])
          }, h(di.value), 3), d.value && T.value ? (c(), v("span", vB, [r[239] || (r[239] = e("span", {
            class: "duration-label"
          }, "用户ID：", -1)), e("span", mB, h(T.value), 1), r[240] || (r[240] = e("span", {
            class: "duration-separator"
          }, "|", -1))])) : M("", !0), d.value ? M("", !0) : (c(), v("span", gB, [r[242] || (r[242] = e("span", {
            class: "duration-label"
          }, "会员剩余天数：", -1)), e("span", fB, [El.value !== null ? (c(), v("span", pB, [g(h(El.value) + "天 ", 1), Dt.value ? (c(), v("span", {
            key: 0,
            class: "expire-label",
            onMouseenter: S,
            onMouseleave: z
          }, [g(" （" + h(Dt.value) + "） ", 1), e("button", {
            type: "button",
            class: "expire-help",
            onClick: lt(x, ["stop"])
          }, "?"), f.value ? (c(), v("div", yB, [d.value ? (c(), v("button", {
            key: 0,
            type: "button",
            class: "expire-tip-close",
            "aria-label": "关闭",
            onClick: r[8] || (r[8] = lt(k => f.value = !1, ["stop"]))
          }, " × ")) : M("", !0), e("div", hB, [e("div", bB, h(O.value) + "会员使用说明", 1), r[241] || (r[241] = e("div", {
            class: "expire-usage-tip-list"
          }, [e("div", {
            class: "expire-usage-tip-row"
          }, [e("span", {
            class: "expire-usage-tip-num"
          }, "1"), e("span", {
            class: "expire-usage-tip-text"
          }, "如果到期后“创作点数”没有使用完，系统会保留不清空，但无法继续使用权限；下次续费会自动叠加进去。")]), e("div", {
            class: "expire-usage-tip-row"
          }, [e("span", {
            class: "expire-usage-tip-num"
          }, "2"), e("span", {
            class: "expire-usage-tip-text"
          }, "如果未到期但是“创作点数”使用完了，那么则无法继续生成；需要继续购买套餐，到期时间会继续延长，点数会增加。")])], -1))])])) : M("", !0)], 32)) : M("", !0)])) : xn.value ? (c(), v("span", wB, "—")) : (c(), v("span", _B, "未开通会员"))])])), d.value ? (c(), v("div", {
            key: 2,
            class: Pe(["profile-float-btn-inline", {
              active: Ra.value
            }]),
            onClick: r[9] || (r[9] = k => Ra.value = !Ra.value)
          }, [Ra.value ? (c(), ye(L, {
            key: 1
          }, {
            default: l(() => [a(P(un))]),
            _: 1
          })) : (c(), ye(L, {
            key: 0
          }, {
            default: l(() => [a(P(_n))]),
            _: 1
          }))], 2)) : M("", !0), d.value ? M("", !0) : (c(), v("button", {
            key: 3,
            type: "button",
            class: "add-desktop-btn",
            onClick: r[10] || (r[10] = (...k) => P(n) && P(n)(...k))
          }, [a(L, null, {
            default: l(() => [a(_a)]),
            _: 1
          }), r[243] || (r[243] = e("span", null, "添加到桌面", -1))]))]), d.value ? (c(), v("div", kB, [e("span", CB, [r[246] || (r[246] = e("span", {
            class: "duration-label"
          }, "会员剩余天数：", -1)), e("span", AB, [El.value !== null ? (c(), v("span", IB, [g(h(El.value) + "天 ", 1), Dt.value ? (c(), v("span", {
            key: 0,
            class: "expire-label",
            onMouseenter: S,
            onMouseleave: z
          }, [g(" （" + h(Dt.value) + "） ", 1), e("button", {
            type: "button",
            class: "expire-help",
            onClick: lt(x, ["stop"])
          }, "?"), f.value ? (c(), v("div", xB, [d.value ? (c(), v("button", {
            key: 0,
            type: "button",
            class: "expire-tip-close",
            "aria-label": "关闭",
            onClick: r[11] || (r[11] = lt(k => f.value = !1, ["stop"]))
          }, " × ")) : M("", !0), e("div", SB, [e("div", EB, h(O.value) + "会员使用说明", 1), r[245] || (r[245] = e("div", {
            class: "expire-usage-tip-list"
          }, [e("div", {
            class: "expire-usage-tip-row"
          }, [e("span", {
            class: "expire-usage-tip-num"
          }, "1"), e("span", {
            class: "expire-usage-tip-text"
          }, "如果到期后“创作点数”没有使用完，系统会保留不清空，但无法继续使用权限；下次续费会自动叠加进去。")]), e("div", {
            class: "expire-usage-tip-row"
          }, [e("span", {
            class: "expire-usage-tip-num"
          }, "2"), e("span", {
            class: "expire-usage-tip-text"
          }, "如果未到期但是“创作点数”使用完了，那么则无法继续生成；需要继续购买套餐，到期时间会继续延长，点数会增加。")])], -1))])])) : M("", !0)], 32)) : M("", !0)])) : xn.value ? (c(), v("span", TB, "—")) : (c(), v("span", $B, "未开通会员"))])])])) : M("", !0)])]), e("div", PB, [r[249] || (r[249] = e("div", {
            class: "balance-label"
          }, "剩余创作点数：", -1)), e("div", VB, h(Ae.value) + "点数", 1), e("div", zB, [a(D, {
            type: "primary",
            class: "recharge-btn",
            onClick: rm
          }, {
            default: l(() => [...r[247] || (r[247] = [g("增加点数", -1)])]),
            _: 1
          }), a(D, {
            class: "redeem-btn",
            onClick: r[12] || (r[12] = k => fu.value = !0)
          }, {
            default: l(() => [...r[248] || (r[248] = [g("卡密兑换", -1)])]),
            _: 1
          })])])])]), e("div", LB, [r[253] || (r[253] = e("div", {
            class: "secondTitle relative"
          }, [e("span", {
            class: "ml-[10px] font-bold"
          }, "我的点数明细变化：")], -1)), e("div", DB, [el((c(), ye(Xa, {
            data: Ua.value,
            style: {
              width: "100%",
              "margin-top": "16px"
            },
            "empty-text": "暂无数据",
            class: "balance-table-desktop",
            "table-layout": "auto"
          }, {
            default: l(() => [a(Zt, {
              prop: "orderNo",
              label: "明细ID",
              "min-width": "96",
              "show-overflow-tooltip": ""
            }), a(Zt, {
              prop: "type",
              label: "变动类型",
              "min-width": "128"
            }, {
              default: l(({
                row: k
              }) => [e("span", {
                class: "balance-type-tag",
                style: Il(Pl(k.type))
              }, h(k.type), 5)]),
              _: 1
            }), a(Zt, {
              prop: "time",
              label: "记录时间",
              "min-width": "156",
              "show-overflow-tooltip": ""
            }), a(Zt, {
              prop: "amount",
              label: "点数变动（剩余创作点数）",
              "min-width": "200"
            }, {
              default: l(({
                row: k
              }) => [e("span", MB, [e("span", {
                style: Il({
                  color: k.amount > 0 ? "#67c23a" : "#f56c6c"
                })
              }, h(k.amount > 0 ? "+" : "") + h(parseInt(k.amount)), 5), e("span", OB, "（剩：" + h(k.remainingPoints) + "）", 1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["data"])), [
            [Ki, Gl.value]
          ])]), e("div", BB, [(c(!0), v(Ue, null, gt(Ua.value, (k, ea) => (c(), v("div", {
            key: ea,
            class: "balance-card-item"
          }, [e("div", NB, [e("div", {
            class: "balance-card-type",
            style: Il(Pl(k.type))
          }, h(k.type), 5), e("div", {
            class: "balance-card-amount",
            style: Il({
              color: k.amount > 0 ? "#67c23a" : "#f56c6c"
            })
          }, h(k.amount > 0 ? "+" : "") + h(parseInt(k.amount)) + "点数 ", 5)]), e("div", UB, [e("div", RB, [r[250] || (r[250] = e("span", {
            class: "balance-card-label"
          }, "明细ID：", -1)), e("span", jB, h(k.orderNo), 1)]), e("div", qB, [r[251] || (r[251] = e("span", {
            class: "balance-card-label"
          }, "记录时间：", -1)), e("span", FB, h(k.time), 1)]), e("div", WB, [r[252] || (r[252] = e("span", {
            class: "balance-card-label"
          }, "剩余创作点数：", -1)), e("span", GB, h(k.remainingPoints), 1)])])]))), 128)), Ua.value.length === 0 ? (c(), v("div", JB, " 暂无数据 ")) : M("", !0)]), sl.value > 0 ? (c(), v("div", HB, [a(nl, {
            "current-page": Ta.value,
            "onUpdate:currentPage": r[13] || (r[13] = k => Ta.value = k),
            "page-size": ja.value,
            "onUpdate:pageSize": r[14] || (r[14] = k => ja.value = k),
            "page-sizes": [10, 20, 50, 100],
            total: sl.value,
            layout: "total, sizes, prev, pager, next, jumper",
            onSizeChange: Kl,
            onCurrentChange: ql
          }, null, 8, ["current-page", "page-size", "total"])])) : M("", !0)])])]),
          _: 1
        }), M("", !0), a(Ya, {
          label: "我的素材库",
          name: "material_library"
        }, {
          default: l(() => [e("div", QB, [e("div", KB, [r[262] || (r[262] = e("span", {
            class: "material-library-date-filter-label"
          }, "日期：", -1)), a(fi, {
            modelValue: Re.value,
            "onUpdate:modelValue": r[16] || (r[16] = k => Re.value = k),
            size: "small",
            class: "material-library-date-options"
          }, {
            default: l(() => [a(Zn, {
              value: "all"
            }, {
              default: l(() => [...r[257] || (r[257] = [g("全部", -1)])]),
              _: 1
            }), a(Zn, {
              value: "today"
            }, {
              default: l(() => [...r[258] || (r[258] = [g("今日", -1)])]),
              _: 1
            }), a(Zn, {
              value: "yesterday"
            }, {
              default: l(() => [...r[259] || (r[259] = [g("昨天", -1)])]),
              _: 1
            }), a(Zn, {
              value: "week"
            }, {
              default: l(() => [...r[260] || (r[260] = [g("最近一周", -1)])]),
              _: 1
            }), a(Zn, {
              value: "custom"
            }, {
              default: l(() => [...r[261] || (r[261] = [g("指定日期", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"]), Re.value === "custom" ? (c(), ye(ud, {
            key: 0,
            modelValue: nt.value,
            "onUpdate:modelValue": r[17] || (r[17] = k => nt.value = k),
            type: "date",
            placeholder: "选择日期",
            "value-format": "YYYY-MM-DD",
            size: "small",
            class: "material-library-custom-date-picker"
          }, null, 8, ["modelValue"])) : M("", !0)]), e("div", YB, [a(ws, {
            modelValue: Ce.value,
            "onUpdate:modelValue": r[23] || (r[23] = k => Ce.value = k),
            class: "material-library-tabs"
          }, {
            default: l(() => [a(Ya, {
              label: "全部",
              name: "all"
            }, {
              default: l(() => [e("div", XB, [e("div", ZB, [e("div", eN, [a(D, {
                class: "material-upload-inline",
                type: "primary",
                icon: P(Ql),
                onClick: Mt
              }, {
                default: l(() => [...r[263] || (r[263] = [g("上传图片", -1)])]),
                _: 1
              }, 8, ["icon"])]), _.value.length > 0 ? (c(), v("div", tN, [a(Wo, {
                "model-value": Te.value,
                indeterminate: it.value,
                onChange: yt,
                class: "select-all-checkbox"
              }, {
                default: l(() => [...r[264] || (r[264] = [g(" 全选 ", -1)])]),
                _: 1
              }, 8, ["model-value", "indeterminate"]), a(D, {
                type: "danger",
                icon: P(zn),
                disabled: rt.value.length === 0,
                onClick: ca
              }, {
                default: l(() => [g(" 批量删除 (" + h(rt.value.length) + ") ", 1)]),
                _: 1
              }, 8, ["icon", "disabled"])])) : M("", !0)]), _.value.length === 0 ? (c(), v("div", aN, [...r[265] || (r[265] = [e("p", null, "暂无素材，请上传图片", -1)])])) : (c(), v("div", lN, [(c(!0), v(Ue, null, gt(B.value, k => (c(), v("div", {
                key: k.id,
                class: Pe(["material-item", {
                  "can-reference": k.canReference,
                  selected: Ie(k.id)
                }])
              }, [e("div", {
                class: "material-image-wrapper",
                onClick: ea => Ee(k.url)
              }, [e("img", {
                src: k.url,
                alt: k.name
              }, null, 8, oN), Yt(k.id) ? (c(), v("div", iN, h(Yt(k.id)), 1)) : M("", !0)], 8, nN), e("div", sN, [e("div", rN, h(k.name), 1), e("div", uN, [a(Wo, {
                modelValue: k.canReference,
                "onUpdate:modelValue": ea => k.canReference = ea,
                onChange: ea => ht(k),
                class: "reference-checkbox"
              }, {
                default: l(() => [...r[266] || (r[266] = [g(" 允许作品图结尾随机引用 ", -1)])]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), e("div", cN, [e("div", dN, [a(Wo, {
                "model-value": Ie(k.id),
                onChange: ea => st(k.id),
                class: "material-select-checkbox-inline"
              }, null, 8, ["model-value", "onChange"]), a(D, {
                size: "small",
                link: "",
                onClick: ea => jt(k.id)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(zn))]),
                  _: 1
                }), r[267] || (r[267] = g(" 删除 ", -1))]),
                _: 1
              }, 8, ["onClick"])]), a(ni, {
                modelValue: k.customGroupId,
                "onUpdate:modelValue": ea => k.customGroupId = ea,
                size: "small",
                style: {
                  width: "120px",
                  "margin-left": "8px"
                },
                placeholder: "自定义分组",
                clearable: "",
                onChange: ea => Ye(k)
              }, {
                default: l(() => [a(Jn, {
                  label: "（未分组）",
                  value: ""
                }), (c(!0), v(Ue, null, gt(Be.value, ea => (c(), ye(Jn, {
                  key: ea.id,
                  label: ea.name,
                  value: ea.id
                }, null, 8, ["label", "value"]))), 128))]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])])])], 2))), 128))])), K.value > Vu ? (c(), v("div", vN, [a(nl, {
                "current-page": je.value,
                "onUpdate:currentPage": r[18] || (r[18] = k => je.value = k),
                "page-size": Vu,
                total: K.value,
                layout: "prev, pager, next",
                small: "",
                onCurrentChange: W
              }, null, 8, ["current-page", "total"])])) : M("", !0)])]),
              _: 1
            }), (c(!0), v(Ue, null, gt(Be.value, k => (c(), ye(Ya, {
              key: k.id,
              name: `cg:${k.id}`
            }, {
              label: l(() => [e("span", mN, [e("span", gN, h(k.name), 1)])]),
              default: l(() => [e("div", fN, [e("div", pN, [e("div", yN, [a(D, {
                class: "material-upload-inline",
                type: "primary",
                icon: P(Ql),
                onClick: Mt
              }, {
                default: l(() => [...r[268] || (r[268] = [g("上传图片", -1)])]),
                _: 1
              }, 8, ["icon"])]), _.value.length > 0 ? (c(), v("div", hN, [a(Wo, {
                "model-value": Te.value,
                indeterminate: it.value,
                onChange: yt,
                class: "select-all-checkbox"
              }, {
                default: l(() => [...r[269] || (r[269] = [g(" 全选 ", -1)])]),
                _: 1
              }, 8, ["model-value", "indeterminate"]), a(D, {
                type: "danger",
                icon: P(zn),
                disabled: rt.value.length === 0,
                onClick: ca
              }, {
                default: l(() => [g(" 批量删除 (" + h(rt.value.length) + ") ", 1)]),
                _: 1
              }, 8, ["icon", "disabled"])])) : M("", !0)]), _.value.length === 0 ? (c(), v("div", bN, [...r[270] || (r[270] = [e("p", null, "暂无素材，请上传图片", -1)])])) : (c(), v("div", wN, [(c(!0), v(Ue, null, gt(B.value, ea => (c(), v("div", {
                key: ea.id,
                class: Pe(["material-item", {
                  "can-reference": ea.canReference,
                  selected: Ie(ea.id)
                }])
              }, [e("div", {
                class: "material-image-wrapper",
                onClick: $a => Ee(ea.url)
              }, [e("img", {
                src: ea.url,
                alt: ea.name
              }, null, 8, kN), Yt(ea.id) ? (c(), v("div", CN, h(Yt(ea.id)), 1)) : M("", !0)], 8, _N), e("div", AN, [e("div", IN, h(ea.name), 1), e("div", xN, [a(Wo, {
                modelValue: ea.canReference,
                "onUpdate:modelValue": $a => ea.canReference = $a,
                onChange: $a => ht(ea),
                class: "reference-checkbox"
              }, {
                default: l(() => [...r[271] || (r[271] = [g(" 允许作品图结尾随机引用 ", -1)])]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), e("div", SN, [e("div", EN, [a(Wo, {
                "model-value": Ie(ea.id),
                onChange: $a => st(ea.id),
                class: "material-select-checkbox-inline"
              }, null, 8, ["model-value", "onChange"]), a(D, {
                size: "small",
                link: "",
                onClick: $a => jt(ea.id)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(zn))]),
                  _: 1
                }), r[272] || (r[272] = g(" 删除 ", -1))]),
                _: 1
              }, 8, ["onClick"])]), a(ni, {
                modelValue: ea.customGroupId,
                "onUpdate:modelValue": $a => ea.customGroupId = $a,
                size: "small",
                style: {
                  width: "120px",
                  "margin-left": "8px"
                },
                placeholder: "自定义分组",
                clearable: "",
                onChange: $a => Ye(ea)
              }, {
                default: l(() => [a(Jn, {
                  label: "（未分组）",
                  value: ""
                }), (c(!0), v(Ue, null, gt(Be.value, $a => (c(), ye(Jn, {
                  key: $a.id,
                  label: $a.name,
                  value: $a.id
                }, null, 8, ["label", "value"]))), 128))]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])])])], 2))), 128))])), K.value > Vu ? (c(), v("div", TN, [a(nl, {
                "current-page": je.value,
                "onUpdate:currentPage": r[19] || (r[19] = ea => je.value = ea),
                "page-size": Vu,
                total: K.value,
                layout: "prev, pager, next",
                small: "",
                onCurrentChange: W
              }, null, 8, ["current-page", "total"])])) : M("", !0)])]),
              _: 2
            }, 1032, ["name"]))), 128)), a(Ya, {
              name: "__create_group__",
              disabled: ""
            }, {
              label: l(() => [a(D, {
                class: "material-create-group-btn",
                size: "small",
                type: "primary",
                onClick: lt(va, ["stop"])
              }, {
                default: l(() => [...r[273] || (r[273] = [g(" 新建分组 ", -1)])]),
                _: 1
              })]),
              _: 1
            }), a(Ya, {
              name: "__manage_group__",
              disabled: ""
            }, {
              label: l(() => [a(D, {
                class: "material-create-group-btn material-manage-group-btn",
                size: "small",
                type: "primary",
                onClick: r[20] || (r[20] = lt(k => xe.value = !0, ["stop"]))
              }, {
                default: l(() => [...r[274] || (r[274] = [g(" 管理分组 ", -1)])]),
                _: 1
              })]),
              _: 1
            }), a(Ya, {
              name: "__upload_header__",
              disabled: ""
            }, {
              label: l(() => [a(D, {
                class: "material-upload-header-btn",
                size: "small",
                type: "primary",
                icon: P(Ql),
                onClick: lt(Mt, ["stop"])
              }, {
                default: l(() => [...r[275] || (r[275] = [g(" 上传图片 ", -1)])]),
                _: 1
              }, 8, ["icon"])]),
              _: 1
            }), a(Ya, {
              name: "__batch_actions_header__",
              disabled: ""
            }, {
              label: l(() => [e("div", {
                class: "material-batch-actions-header",
                onClick: r[22] || (r[22] = lt(() => {}, ["stop"]))
              }, [a(Wo, {
                "model-value": Te.value,
                indeterminate: it.value,
                onChange: yt,
                onClick: r[21] || (r[21] = lt(() => {}, ["stop"])),
                class: "select-all-checkbox material-batch-select"
              }, {
                default: l(() => [...r[276] || (r[276] = [g(" 全选 ", -1)])]),
                _: 1
              }, 8, ["model-value", "indeterminate"]), a(D, {
                type: "danger",
                icon: P(zn),
                disabled: rt.value.length === 0,
                onClick: lt(ca, ["stop"]),
                size: "small",
                class: "material-batch-delete-btn"
              }, {
                default: l(() => [g(" 批量删除 (" + h(rt.value.length) + ") ", 1)]),
                _: 1
              }, 8, ["icon", "disabled"])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])])])]),
          _: 1
        }), a(Ya, {
          label: "我的创作信息模板",
          name: "creation_template"
        }, {
          default: l(() => [e("div", $N, [a(ws, {
            modelValue: et.value,
            "onUpdate:modelValue": r[27] || (r[27] = k => et.value = k),
            class: "template-tabs"
          }, {
            default: l(() => [a(Ya, {
              label: "全部模板",
              name: "all"
            }, {
              default: l(() => [e("div", PN, [Nt.value.length === 0 ? (c(), v("div", VN, [...r[277] || (r[277] = [e("p", null, "暂无创作模板，请创建模板方便后续使用", -1)])])) : (c(), v("div", zN, [(c(!0), v(Ue, null, gt(Nt.value, k => (c(), v("div", {
                key: k.id,
                class: "template-item"
              }, [e("div", LN, [e("h4", DN, h(k.name), 1), e("div", MN, [e("span", ON, "创建：" + h(Ve(k.createTime)), 1), e("span", BN, "最后修改：" + h(Ve(k.updateTime || k.createTime)), 1)])]), e("div", {
                class: "template-item-actions",
                onClick: r[24] || (r[24] = lt(() => {}, ["stop"]))
              }, [a(D, {
                size: "small",
                link: "",
                onClick: ea => Je(k)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(qn))]),
                  _: 1
                }), r[278] || (r[278] = g(" 修改 ", -1))]),
                _: 1
              }, 8, ["onClick"]), a(D, {
                size: "small",
                link: "",
                type: "danger",
                onClick: ea => $t(k.id)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(zn))]),
                  _: 1
                }), r[279] || (r[279] = g(" 删除 ", -1))]),
                _: 1
              }, 8, ["onClick"])])]))), 128))])), Ge.value > jm ? (c(), v("div", NN, [a(nl, {
                "current-page": Ut.value,
                "onUpdate:currentPage": r[25] || (r[25] = k => Ut.value = k),
                "page-size": jm,
                total: Ge.value,
                layout: "prev, pager, next",
                small: "",
                onCurrentChange: Oe
              }, null, 8, ["current-page", "total"])])) : M("", !0)])]),
              _: 1
            }), a(Ya, {
              label: "创建模板+",
              name: "create"
            }, {
              default: l(() => [e("div", UN, [e("div", RN, [e("div", jN, [a(L, {
                class: "create-icon"
              }, {
                default: l(() => [a(P(Ql))]),
                _: 1
              })]), r[281] || (r[281] = e("h3", {
                class: "create-title"
              }, "创建新创作模板", -1)), r[282] || (r[282] = e("p", {
                class: "create-desc"
              }, "创建一个新的创作模板，保存常用的补充创作信息，方便后续快速导入使用", -1)), a(D, {
                type: "primary",
                size: "large",
                onClick: r[26] || (r[26] = k => dt.value = !0),
                class: "create-button"
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(Ql))]),
                  _: 1
                }), r[280] || (r[280] = g(" 立即创建 ", -1))]),
                _: 1
              })])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])])]),
          _: 1
        }), a(Ya, {
          label: "我的人设",
          name: "my_persona"
        }, {
          default: l(() => [e("div", qN, [a(gD)])]),
          _: 1
        }), a(Ya, {
          label: "我的标题库",
          name: "title_library"
        }, {
          default: l(() => [e("div", FN, [e("div", WN, [r[287] || (r[287] = e("div", {
            class: "hero-bg"
          }, [e("div", {
            class: "gradient-circle circle-1"
          }), e("div", {
            class: "gradient-circle circle-2"
          }), e("div", {
            class: "gradient-circle circle-3"
          })], -1)), e("div", GN, [r[286] || (r[286] = e("h2", {
            class: "hero-title"
          }, "我的标题库", -1)), e("div", JN, [r[285] || (r[285] = e("p", {
            class: "hero-sub"
          }, "所有 AI 生成或手动创建的标题统一管理 · 与 AI 选题助手实时同步", -1)), e("div", HN, [a(D, {
            class: "hero-link-btn",
            onClick: r[28] || (r[28] = k => m.$router.push("/xuanti"))
          }, {
            default: l(() => [...r[283] || (r[283] = [g(" 前往 AI 选题助手 → ", -1)])]),
            _: 1
          }), a(D, {
            class: "hero-link-btn hero-link-btn--secondary",
            onClick: $e
          }, {
            default: l(() => [...r[284] || (r[284] = [g(" 简易标题生成 ", -1)])]),
            _: 1
          })])])])]), a(ws, {
            modelValue: Fe.value,
            "onUpdate:modelValue": r[31] || (r[31] = k => Fe.value = k),
            class: "title-library-tabs"
          }, {
            default: l(() => [a(Ya, {
              label: "全部分组",
              name: "all"
            }, {
              default: l(() => [e("div", QN, [Q.value.length === 0 ? (c(), v("div", KN, [...r[288] || (r[288] = [e("p", null, "暂无分组，请创建分组或点击「简易标题生成」", -1)])])) : (c(), v("div", YN, [(c(!0), v(Ue, null, gt(Q.value, k => (c(), v("div", {
                key: k.id,
                class: "title-group-item",
                onClick: ea => Dl(k),
                onDblclick: ea => Dl(k)
              }, [e("div", ZN, [e("h4", eU, h(k.name), 1), e("div", tU, [e("span", aU, "共 " + h(Oa(k)) + " 个标题", 1), e("div", lU, [e("span", nU, "创建：" + h(ll(k.createTime)), 1), e("span", oU, "最后修改时间：" + h(ll(k.updateTime || k.createTime)), 1)])])]), e("div", {
                class: "group-item-actions",
                onClick: r[29] || (r[29] = lt(() => {}, ["stop"]))
              }, [a(D, {
                size: "small",
                link: "",
                onClick: ea => dl(k)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(qn))]),
                  _: 1
                }), r[289] || (r[289] = g(" 修改组名 ", -1))]),
                _: 1
              }, 8, ["onClick"]), a(D, {
                size: "small",
                link: "",
                onClick: ea => Fa(k)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(qn))]),
                  _: 1
                }), r[290] || (r[290] = g(" 编辑全部标题 ", -1))]),
                _: 1
              }, 8, ["onClick"]), a(D, {
                size: "small",
                link: "",
                onClick: ea => jl(k)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(To))]),
                  _: 1
                }), r[291] || (r[291] = g(" 下载 ", -1))]),
                _: 1
              }, 8, ["onClick"]), a(D, {
                size: "small",
                link: "",
                type: "danger",
                onClick: ea => kn(k.id)
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(zn))]),
                  _: 1
                }), r[292] || (r[292] = g(" 删除 ", -1))]),
                _: 1
              }, 8, ["onClick"])])], 40, XN))), 128))]))])]),
              _: 1
            }), a(Ya, {
              label: "创建分组+",
              name: "create"
            }, {
              default: l(() => [e("div", iU, [e("div", sU, [e("div", rU, [a(L, {
                class: "create-icon"
              }, {
                default: l(() => [a(P(Ql))]),
                _: 1
              })]), r[294] || (r[294] = e("h3", {
                class: "create-title"
              }, "创建新分组", -1)), r[295] || (r[295] = e("p", {
                class: "create-desc"
              }, "创建一个新的分组来组织和管理您的标题", -1)), a(D, {
                type: "primary",
                size: "large",
                onClick: r[30] || (r[30] = k => U.value = !0),
                class: "create-button"
              }, {
                default: l(() => [a(L, null, {
                  default: l(() => [a(P(Ql))]),
                  _: 1
                }), r[293] || (r[293] = g(" 立即创建 ", -1))]),
                _: 1
              })])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])])]),
          _: 1
        }), a(Ya, {
          label: "任务记录",
          name: "task_record"
        }, {
          default: l(() => [e("div", uU, [a(ws, {
            modelValue: go.value,
            "onUpdate:modelValue": r[32] || (r[32] = k => go.value = k),
            class: "task-record-tabs"
          }, {
            default: l(() => [a(Ya, {
              label: "进行中",
              name: "ongoing"
            }, {
              default: l(() => [e("div", cU, [r[306] || (r[306] = e("div", {
                class: "secondTitle relative"
              }, [e("span", {
                class: "ml-[10px] font-bold"
              }, "进行中的任务")], -1)), a(Xa, {
                data: Wi.value,
                style: {
                  width: "100%",
                  "margin-top": "16px"
                },
                "empty-text": "暂无进行中的任务",
                "row-key": "taskId",
                "expand-row-keys": Fo.value,
                onExpandChange: v1,
                class: "task-table-desktop"
              }, {
                default: l(() => [a(Zt, {
                  type: "expand"
                }, {
                  default: l(({
                    row: k
                  }) => {
                    var ea, $a;
                    return [k.type === "batch" || k.rawStatus === 1 || k.rawData && k.rawData.status === 1 ? (c(), v("div", dU, [e("div", vU, h(k.rawStatus === 1 || k.rawData && k.rawData.status === 1 ? "待确认标题（共" + (((ea = k.items) == null ? void 0 : ea.length) || 0) + "条）" : "批量生成详情（共" + ((($a = k.items) == null ? void 0 : $a.length) || 0) + "条）"), 1), a(Xa, {
                      data: k.items || k.titles || [],
                      border: "",
                      size: "small"
                    }, {
                      default: l(() => [a(Zt, {
                        type: "index",
                        label: "序号",
                        width: "80",
                        align: "center"
                      }, {
                        default: l(({
                          $index: pn
                        }) => [e("span", null, h(pn + 1), 1)]),
                        _: 1
                      }), a(Zt, {
                        prop: "title",
                        label: "标题",
                        "min-width": "200"
                      }, {
                        default: l(({
                          row: pn
                        }) => [e("span", null, h(typeof pn == "string" ? pn : pn.title || pn), 1)]),
                        _: 1
                      }), a(Zt, {
                        prop: "status",
                        label: "状态",
                        width: "100"
                      }, {
                        default: l(({
                          row: pn
                        }) => [pn && typeof pn == "object" && pn.status === "pending" ? (c(), ye(wl, {
                          key: 0,
                          type: "warning"
                        }, {
                          default: l(() => [...r[296] || (r[296] = [g("待确认", -1)])]),
                          _: 1
                        })) : pn && typeof pn == "object" && pn.status ? (c(), ye(wl, {
                          key: 1,
                          type: pn.status === "completed" ? "success" : "info"
                        }, {
                          default: l(() => [g(h(pn.status === "completed" ? "完成" : "生成中"), 1)]),
                          _: 2
                        }, 1032, ["type"])) : (c(), ye(wl, {
                          key: 2,
                          type: "warning"
                        }, {
                          default: l(() => [...r[297] || (r[297] = [g("待确认", -1)])]),
                          _: 1
                        }))]),
                        _: 1
                      })]),
                      _: 1
                    }, 8, ["data"])])) : M("", !0)]
                  }),
                  _: 1
                }), a(Zt, {
                  type: "index",
                  label: "任务ID",
                  width: "80",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [e("span", null, h(k.id || k.taskId || "-"), 1)]),
                  _: 1
                }), a(Zt, {
                  prop: "type",
                  label: "生成类型",
                  "min-width": "220"
                }, {
                  default: l(({
                    row: k
                  }) => [a(wl, {
                    class: "type-tag",
                    type: Yc(k.type || k.mode)
                  }, {
                    default: l(() => [g(h(Kc(k.type || k.mode, k)), 1)]),
                    _: 2
                  }, 1032, ["type"])]),
                  _: 1
                }), a(Zt, {
                  prop: "title",
                  label: "标题/描述",
                  "min-width": "250"
                }), a(Zt, {
                  prop: "count",
                  label: "数量（消耗）",
                  width: "140",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [g(h(k.count || 1) + "篇（" + h(k.count || 1) + "点数） ", 1)]),
                  _: 1
                }), a(Zt, {
                  prop: "progress",
                  label: "任务进度",
                  width: "150",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [a(C1, {
                    percentage: k.progress || 0,
                    "stroke-width": 8
                  }, null, 8, ["percentage"])]),
                  _: 1
                }), a(Zt, {
                  prop: "stage",
                  label: "当前阶段",
                  width: "160"
                }, {
                  default: l(({
                    row: k
                  }) => {
                    var ea;
                    return [a(wl, {
                      type: ed(k.rawStatus !== void 0 ? k.rawStatus : (ea = k.rawData) == null ? void 0 : ea.status),
                      size: "small"
                    }, {
                      default: l(() => {
                        var $a;
                        return [g(h(Zc(k.rawStatus !== void 0 ? k.rawStatus : ($a = k.rawData) == null ? void 0 : $a.status)), 1)]
                      }),
                      _: 2
                    }, 1032, ["type"])]
                  }),
                  _: 1
                }), a(Zt, {
                  prop: "createTime",
                  label: "创建时间",
                  width: "200"
                }, {
                  default: l(({
                    row: k
                  }) => [e("span", mU, h(k.createTime), 1)]),
                  _: 1
                }), a(Zt, {
                  label: "操作",
                  width: "150",
                  fixed: "right"
                }, {
                  default: l(({
                    row: k
                  }) => [a(D, {
                    size: "small",
                    type: "primary",
                    onClick: ea => m1(k)
                  }, {
                    default: l(() => [...r[298] || (r[298] = [g(" 继续任务 ", -1)])]),
                    _: 1
                  }, 8, ["onClick"]), k.type === "batch" && k.items && k.items.length > 0 || (k.rawStatus === 1 || k.rawData && k.rawData.status === 1) && (k.items || k.titles) ? (c(), ye(D, {
                    key: 0,
                    size: "small",
                    link: "",
                    onClick: ea => Xc(k)
                  }, {
                    default: l(() => [g(h(Fo.value.includes(k.taskId || k.id) ? "收起" : "展开"), 1)]),
                    _: 2
                  }, 1032, ["onClick"])) : M("", !0)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["data", "expand-row-keys"]), e("div", gU, [(c(!0), v(Ue, null, gt(Wi.value, k => {
                var ea;
                return c(), v("div", {
                  key: k.taskId || k.id,
                  class: "task-card-item"
                }, [e("div", fU, [e("div", pU, "任务ID: " + h(k.id || k.taskId || "-"), 1), a(wl, {
                  class: "type-tag",
                  type: Yc(k.type || k.mode),
                  size: "small"
                }, {
                  default: l(() => [g(h(Kc(k.type || k.mode, k)), 1)]),
                  _: 2
                }, 1032, ["type"])]), e("div", yU, h(k.title || "无标题"), 1), e("div", hU, [e("div", bU, [r[299] || (r[299] = e("span", {
                  class: "task-card-label"
                }, "数量：", -1)), e("span", wU, h(k.count || 1) + "篇（" + h(k.count || 1) + "点数）", 1)]), e("div", _U, [r[300] || (r[300] = e("span", {
                  class: "task-card-label"
                }, "当前阶段：", -1)), a(wl, {
                  type: ed(k.rawStatus !== void 0 ? k.rawStatus : (ea = k.rawData) == null ? void 0 : ea.status),
                  size: "small"
                }, {
                  default: l(() => {
                    var $a;
                    return [g(h(Zc(k.rawStatus !== void 0 ? k.rawStatus : ($a = k.rawData) == null ? void 0 : $a.status)), 1)]
                  }),
                  _: 2
                }, 1032, ["type"])]), e("div", kU, [r[301] || (r[301] = e("span", {
                  class: "task-card-label"
                }, "任务进度：", -1)), a(C1, {
                  percentage: k.progress || 0,
                  "stroke-width": 6
                }, null, 8, ["percentage"])]), e("div", CU, [r[302] || (r[302] = e("span", {
                  class: "task-card-label"
                }, "创建时间：", -1)), e("span", AU, h(k.createTime), 1)])]), e("div", IU, [a(D, {
                  size: "small",
                  type: "primary",
                  onClick: $a => m1(k)
                }, {
                  default: l(() => [...r[303] || (r[303] = [g(" 继续任务 ", -1)])]),
                  _: 1
                }, 8, ["onClick"]), k.type === "batch" && k.items && k.items.length > 0 || (k.rawStatus === 1 || k.rawData && k.rawData.status === 1) && (k.items || k.titles) ? (c(), ye(D, {
                  key: 0,
                  size: "small",
                  link: "",
                  onClick: $a => Xc(k)
                }, {
                  default: l(() => [g(h(Fo.value.includes(k.taskId || k.id) ? "收起详情" : "展开详情"), 1)]),
                  _: 2
                }, 1032, ["onClick"])) : M("", !0)]), (k.type === "batch" && k.items && k.items.length > 0 || (k.rawStatus === 1 || k.rawData && k.rawData.status === 1) && (k.items || k.titles)) && Fo.value.includes(k.taskId || k.id) ? (c(), v("div", xU, [e("div", SU, h(k.rawStatus === 1 || k.rawData && k.rawData.status === 1 ? "待确认标题（共" + (k.items || k.titles || []).length + "条）" : "批量生成详情（共" + k.items.length + "条）"), 1), (c(!0), v(Ue, null, gt(k.items || k.titles || [], ($a, pn) => (c(), v("div", {
                  key: pn,
                  class: "expand-item"
                }, [e("span", EU, h(pn + 1) + ".", 1), e("span", TU, h(typeof $a == "string" ? $a : $a.title || $a), 1), $a && typeof $a == "object" && $a.status === "pending" ? (c(), ye(wl, {
                  key: 0,
                  type: "warning",
                  size: "small"
                }, {
                  default: l(() => [...r[304] || (r[304] = [g("待确认", -1)])]),
                  _: 1
                })) : $a && typeof $a == "object" && $a.status ? (c(), ye(wl, {
                  key: 1,
                  type: $a.status === "completed" ? "success" : "info",
                  size: "small"
                }, {
                  default: l(() => [g(h($a.status === "completed" ? "完成" : "生成中"), 1)]),
                  _: 2
                }, 1032, ["type"])) : (c(), ye(wl, {
                  key: 2,
                  type: "warning",
                  size: "small"
                }, {
                  default: l(() => [...r[305] || (r[305] = [g("待确认", -1)])]),
                  _: 1
                }))]))), 128))])) : M("", !0)])
              }), 128)), Wi.value.length === 0 ? (c(), v("div", $U, " 暂无进行中的任务 ")) : M("", !0)])])]),
              _: 1
            }), a(Ya, {
              label: "已完成",
              name: "completed"
            }, {
              default: l(() => [e("div", PU, [r[317] || (r[317] = e("div", {
                class: "secondTitle relative"
              }, [e("span", {
                class: "ml-[10px] font-bold"
              }, "已完成的任务")], -1)), a(Xa, {
                data: Tc.value,
                style: {
                  width: "100%",
                  "margin-top": "16px"
                },
                "empty-text": "暂无已完成的任务",
                "row-key": "id",
                "expand-row-keys": Fo.value,
                onExpandChange: v1,
                class: "task-table-desktop"
              }, {
                default: l(() => [a(Zt, {
                  type: "expand"
                }, {
                  default: l(({
                    row: k
                  }) => [(k.type === "batch" || k.type === "copy") && k.items && k.items.length > 0 || k.titles && k.titles.length > 0 ? (c(), v("div", VU, [e("div", zU, h(k.type === "copy" ? "AI灵感参考详情" : "批量生成详情") + "（共" + h((k.items || k.titles || []).length) + "条） ", 1), a(Xa, {
                    data: k.items || k.titles || [],
                    border: "",
                    size: "small"
                  }, {
                    default: l(() => [a(Zt, {
                      type: "index",
                      label: "序号",
                      width: "80",
                      align: "center"
                    }, {
                      default: l(({
                        $index: ea
                      }) => [e("span", null, h(ea + 1), 1)]),
                      _: 1
                    }), a(Zt, {
                      prop: "title",
                      label: "标题",
                      "min-width": "200"
                    }, {
                      default: l(({
                        row: ea
                      }) => [e("span", null, h(typeof ea == "string" ? ea : ea.title || ea), 1)]),
                      _: 1
                    }), a(Zt, {
                      prop: "status",
                      label: "状态",
                      width: "100"
                    }, {
                      default: l(({
                        row: ea
                      }) => [typeof ea == "string" ? (c(), ye(wl, {
                        key: 0,
                        type: "success"
                      }, {
                        default: l(() => [...r[307] || (r[307] = [g("完成", -1)])]),
                        _: 1
                      })) : ea && typeof ea == "object" && ea.status ? (c(), ye(wl, {
                        key: 1,
                        type: ea.status === "completed" ? "success" : "info"
                      }, {
                        default: l(() => [g(h(ea.status === "completed" ? "完成" : "生成中"), 1)]),
                        _: 2
                      }, 1032, ["type"])) : (c(), ye(wl, {
                        key: 2,
                        type: "success"
                      }, {
                        default: l(() => [...r[308] || (r[308] = [g("完成", -1)])]),
                        _: 1
                      }))]),
                      _: 1
                    })]),
                    _: 1
                  }, 8, ["data"])])) : M("", !0)]),
                  _: 1
                }), a(Zt, {
                  type: "index",
                  label: "任务ID",
                  width: "80",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [e("span", null, h(k.id || k.taskId || "-"), 1)]),
                  _: 1
                }), a(Zt, {
                  prop: "type",
                  label: "生成类型",
                  "min-width": "220"
                }, {
                  default: l(({
                    row: k
                  }) => [a(wl, {
                    class: "type-tag",
                    type: Yc(k.type || k.mode)
                  }, {
                    default: l(() => [g(h(Kc(k.type || k.mode, k)), 1)]),
                    _: 2
                  }, 1032, ["type"])]),
                  _: 1
                }), a(Zt, {
                  prop: "title",
                  label: "标题/描述",
                  "min-width": "250"
                }), a(Zt, {
                  prop: "count",
                  label: "数量（消耗点数）",
                  width: "140",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [g(h(k.count || 1) + "篇（" + h(k.count || 1) + "点数） ", 1)]),
                  _: 1
                }), a(Zt, {
                  prop: "status",
                  label: "状态",
                  width: "100"
                }, {
                  default: l(({
                    row: k
                  }) => [a(wl, {
                    type: k.status === "completed" ? "success" : "info"
                  }, {
                    default: l(() => [g(h(k.status === "completed" ? "完成" : "生成中"), 1)]),
                    _: 2
                  }, 1032, ["type"])]),
                  _: 1
                }), a(Zt, {
                  prop: "stage",
                  label: "当前阶段",
                  width: "160"
                }, {
                  default: l(({
                    row: k
                  }) => {
                    var ea;
                    return [a(wl, {
                      type: ed(k.rawStatus !== void 0 ? k.rawStatus : (ea = k.rawData) == null ? void 0 : ea.status),
                      size: "small"
                    }, {
                      default: l(() => {
                        var $a;
                        return [g(h(Zc(k.rawStatus !== void 0 ? k.rawStatus : ($a = k.rawData) == null ? void 0 : $a.status)), 1)]
                      }),
                      _: 2
                    }, 1032, ["type"])]
                  }),
                  _: 1
                }), a(Zt, {
                  prop: "createTime",
                  label: "生成时间",
                  width: "200"
                }, {
                  default: l(({
                    row: k
                  }) => [e("span", LU, h(k.createTime), 1)]),
                  _: 1
                }), a(Zt, {
                  label: "操作",
                  width: "180",
                  fixed: "right"
                }, {
                  default: l(({
                    row: k
                  }) => [e("div", DU, [a(D, {
                    size: "small",
                    type: "primary",
                    link: "",
                    onClick: ea => g1(k)
                  }, {
                    default: l(() => [...r[309] || (r[309] = [g(" 进入 ", -1)])]),
                    _: 1
                  }, 8, ["onClick"]), (k.type === "batch" || k.type === "copy") && k.items && k.items.length > 0 ? (c(), ye(D, {
                    key: 0,
                    size: "small",
                    link: "",
                    onClick: ea => Xc(k)
                  }, {
                    default: l(() => [g(h(Fo.value.includes(k.id) ? "收起" : "展开"), 1)]),
                    _: 2
                  }, 1032, ["onClick"])) : M("", !0)])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["data", "expand-row-keys"]), e("div", MU, [(c(!0), v(Ue, null, gt(Tc.value, k => {
                var ea;
                return c(), v("div", {
                  key: k.id || k.taskId,
                  class: "task-card-item completed"
                }, [e("div", OU, [e("div", BU, "任务ID: " + h(k.id || k.taskId || "-"), 1), a(wl, {
                  class: "type-tag",
                  type: Yc(k.type || k.mode),
                  size: "small"
                }, {
                  default: l(() => [g(h(Kc(k.type || k.mode, k)), 1)]),
                  _: 2
                }, 1032, ["type"])]), e("div", NU, h(k.title || "无标题"), 1), e("div", UU, [e("div", RU, [r[310] || (r[310] = e("span", {
                  class: "task-card-label"
                }, "数量：", -1)), e("span", jU, h(k.count || 1) + "篇（" + h(k.count || 1) + "点数）", 1)]), e("div", qU, [r[311] || (r[311] = e("span", {
                  class: "task-card-label"
                }, "状态：", -1)), a(wl, {
                  type: k.status === "completed" ? "success" : "info",
                  size: "small"
                }, {
                  default: l(() => [g(h(k.status === "completed" ? "完成" : "生成中"), 1)]),
                  _: 2
                }, 1032, ["type"])]), e("div", FU, [r[312] || (r[312] = e("span", {
                  class: "task-card-label"
                }, "当前阶段：", -1)), a(wl, {
                  type: ed(k.rawStatus !== void 0 ? k.rawStatus : (ea = k.rawData) == null ? void 0 : ea.status),
                  size: "small"
                }, {
                  default: l(() => {
                    var $a;
                    return [g(h(Zc(k.rawStatus !== void 0 ? k.rawStatus : ($a = k.rawData) == null ? void 0 : $a.status)), 1)]
                  }),
                  _: 2
                }, 1032, ["type"])]), e("div", WU, [r[313] || (r[313] = e("span", {
                  class: "task-card-label"
                }, "生成时间：", -1)), e("span", GU, h(k.createTime), 1)])]), e("div", JU, [a(D, {
                  size: "small",
                  type: "primary",
                  link: "",
                  onClick: $a => g1(k)
                }, {
                  default: l(() => [...r[314] || (r[314] = [g(" 进入查看 ", -1)])]),
                  _: 1
                }, 8, ["onClick"]), (k.type === "batch" || k.type === "copy") && k.items && k.items.length > 0 || k.titles && k.titles.length > 0 ? (c(), ye(D, {
                  key: 0,
                  size: "small",
                  link: "",
                  onClick: $a => Xc(k)
                }, {
                  default: l(() => [g(h(Fo.value.includes(k.id) ? "收起详情" : "展开详情"), 1)]),
                  _: 2
                }, 1032, ["onClick"])) : M("", !0)]), ((k.type === "batch" || k.type === "copy") && k.items && k.items.length > 0 || k.titles && k.titles.length > 0) && Fo.value.includes(k.id) ? (c(), v("div", HU, [e("div", QU, h(k.type === "copy" ? "AI灵感参考详情" : "批量生成详情") + "（共" + h((k.items || k.titles || []).length) + "条） ", 1), (c(!0), v(Ue, null, gt(k.items || k.titles || [], ($a, pn) => (c(), v("div", {
                  key: pn,
                  class: "expand-item"
                }, [e("span", KU, h(pn + 1) + ".", 1), e("span", YU, h(typeof $a == "string" ? $a : $a.title || $a), 1), typeof $a == "string" ? (c(), ye(wl, {
                  key: 0,
                  type: "success",
                  size: "small"
                }, {
                  default: l(() => [...r[315] || (r[315] = [g("完成", -1)])]),
                  _: 1
                })) : $a && typeof $a == "object" && $a.status ? (c(), ye(wl, {
                  key: 1,
                  type: $a.status === "completed" ? "success" : "info",
                  size: "small"
                }, {
                  default: l(() => [g(h($a.status === "completed" ? "完成" : "生成中"), 1)]),
                  _: 2
                }, 1032, ["type"])) : (c(), ye(wl, {
                  key: 2,
                  type: "success",
                  size: "small"
                }, {
                  default: l(() => [...r[316] || (r[316] = [g("完成", -1)])]),
                  _: 1
                }))]))), 128))])) : M("", !0)])
              }), 128)), Tc.value.length === 0 ? (c(), v("div", XU, " 暂无已完成的任务 ")) : M("", !0)])])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])])]),
          _: 1
        }), a(Ya, {
          label: "发布记录",
          name: "publish_record"
        }, {
          default: l(() => [e("div", ZU, [a(ws, {
            modelValue: Io.value,
            "onUpdate:modelValue": r[40] || (r[40] = k => Io.value = k),
            class: "publish-record-tabs",
            ref_key: "publishRecordTabsRef",
            ref: Vn
          }, {
            default: l(() => [a(Ya, {
              label: "待发布",
              name: "pending"
            }, {
              default: l(() => [e("div", eR, [e("div", tR, [e("span", aR, "待发布作品（" + h(Li.value) + "）", 1), bl.value ? M("", !0) : (c(), v("span", lR, [r[319] || (r[319] = g(" 已并入活码 ", -1)), e("b", null, h(qb.value), 1), r[320] || (r[320] = g(" 篇 ", -1)), a(p_, {
                placement: "top",
                content: "作品默认不在任何活码里。给每篇选一个「所属活码」，手机扫对应活码就能按顺序发这批图文；一个作品只能属于一个活码。"
              }, {
                default: l(() => [...r[318] || (r[318] = [e("span", {
                  class: "live-mark-summary-help"
                }, "?", -1)])]),
                _: 1
              })])), bl.value ? M("", !0) : (c(), ye(D, {
                key: 1,
                size: "small",
                class: "live-mark-btn-header",
                onClick: Wb
              }, {
                default: l(() => [...r[321] || (r[321] = [g(" 批量并入活码 ", -1)])]),
                _: 1
              })), bl.value ? M("", !0) : (c(), ye(D, {
                key: 2,
                type: "success",
                size: "small",
                class: "live-code-btn-header",
                onClick: Jb
              }, {
                default: l(() => [...r[322] || (r[322] = [g(" 我的活码 ", -1)])]),
                _: 1
              })), bl.value && bn.value.length > 0 ? (c(), ye(D, {
                key: 3,
                type: "primary",
                size: "small",
                class: "batch-assign-btn-header",
                onClick: r[33] || (r[33] = k => jo.value = !0)
              }, {
                default: l(() => [...r[323] || (r[323] = [g(" 批量分配到 ", -1)])]),
                _: 1
              })) : M("", !0), bl.value ? (c(), ye(D, {
                key: 4,
                type: "warning",
                size: "small",
                class: "clear-all-assign-btn-header",
                onClick: Cc
              }, {
                default: l(() => [...r[324] || (r[324] = [g(" 一键清除所有账号归属 ", -1)])]),
                _: 1
              })) : M("", !0), bl.value ? (c(), ye(D, {
                key: 5,
                type: "default",
                size: "small",
                class: "cancel-assign-btn-header",
                onClick: Lo
              }, {
                default: l(() => [...r[325] || (r[325] = [g(" 取消 ", -1)])]),
                _: 1
              })) : M("", !0)]), e("div", nR, [el((c(), ye(Xa, {
                data: Ac.value,
                style: {
                  width: "100%",
                  "margin-top": "0"
                },
                "empty-text": "暂无待发布的作品",
                "row-key": "id",
                class: "work-table-desktop publish-record-el-table",
                onSelectionChange: kc
              }, {
                default: l(() => [bl.value ? (c(), ye(Zt, {
                  key: 0,
                  type: "selection",
                  width: "55",
                  align: "center"
                })) : M("", !0), a(Zt, {
                  label: "所属活码",
                  width: "168",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [a(ni, {
                    "model-value": Rv(k),
                    size: "small",
                    class: "live-code-select",
                    placeholder: "未加入活码",
                    disabled: bl.value || au(k),
                    loading: au(k),
                    onChange: ea => Bp(k, ea)
                  }, {
                    default: l(() => [a(Jn, {
                      label: "未加入活码",
                      value: ""
                    }), (c(!0), v(Ue, null, gt(P(Mp), ea => (c(), ye(Jn, {
                      key: ea.id,
                      label: ea.name,
                      value: ea.id
                    }, null, 8, ["label", "value"]))), 128))]),
                    _: 1
                  }, 8, ["model-value", "disabled", "loading", "onChange"])]),
                  _: 1
                }), a(Zt, {
                  label: "作品ID",
                  width: "120",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [e("span", oR, h(k.id || k.globalId || "-"), 1)]),
                  _: 1
                }), a(Zt, {
                  label: "封面",
                  width: "120",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [e("div", iR, [e("img", {
                    src: k.cover,
                    alt: k.title,
                    class: "cover-img-small"
                  }, null, 8, sR)])]),
                  _: 1
                }), a(Zt, {
                  label: "标题",
                  "min-width": "200",
                  "show-overflow-tooltip": ""
                }, {
                  default: l(({
                    row: k
                  }) => [P(oi)(k) ? (c(), v("a", {
                    key: 0,
                    href: s(k),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "publish-record-title-link"
                  }, h(k.title), 9, rR)) : (c(), v("span", uR, h(k.title), 1))]),
                  _: 1
                }), a(Zt, {
                  prop: "source",
                  label: "来源",
                  width: "120",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [a(wl, {
                    size: "small"
                  }, {
                    default: l(() => [g(h(Sc(k.source)), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 1
                }), a(Zt, {
                  label: "发布渠道",
                  width: "110",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [Qv(k) !== "—" ? (c(), ye(wl, {
                    key: 0,
                    size: "small",
                    type: "success"
                  }, {
                    default: l(() => [g(h(Qv(k)), 1)]),
                    _: 2
                  }, 1024)) : (c(), v("span", cR, "—"))]),
                  _: 1
                }), a(Zt, {
                  prop: "createdAt",
                  label: "创建时间",
                  width: "200"
                }, {
                  default: l(({
                    row: k
                  }) => [g(h(Ec(k.createdAt)), 1)]),
                  _: 1
                }), a(Zt, {
                  label: "电脑导出发布",
                  width: "148",
                  align: "center",
                  fixed: "right"
                }, {
                  default: l(({
                    row: k
                  }) => [P(oi)(k) ? (c(), ye(D, {
                    key: 0,
                    type: "default",
                    size: "small",
                    class: "publish-record-pc-btn",
                    onClick: ea => u(k)
                  }, {
                    default: l(() => [...r[326] || (r[326] = [g(" 电脑导出发布 ", -1)])]),
                    _: 1
                  }, 8, ["onClick"])) : (c(), v("span", dR, "—"))]),
                  _: 1
                }), a(Zt, {
                  label: "手机扫码跳转发布",
                  width: "238",
                  fixed: "right"
                }, {
                  default: l(({
                    row: k
                  }) => [bl.value ? M("", !0) : (c(), ye(D, {
                    key: 0,
                    size: "small",
                    type: "primary",
                    onClick: ea => xc(k)
                  }, {
                    default: l(() => [...r[327] || (r[327] = [g(" 手机发布 ", -1)])]),
                    _: 1
                  }, 8, ["onClick"])), bl.value ? M("", !0) : (c(), ye(D, {
                    key: 1,
                    size: "small",
                    onClick: ea => Up(k)
                  }, {
                    default: l(() => [...r[328] || (r[328] = [g(" 二维码 ", -1)])]),
                    _: 1
                  }, 8, ["onClick"]))]),
                  _: 1
                })]),
                _: 1
              }, 8, ["data"])), [
                [Ki, Hi.value]
              ])]), e("div", vR, [(c(!0), v(Ue, null, gt(Ac.value, k => (c(), v("div", {
                key: k.id,
                class: "work-card-item"
              }, [e("div", mR, [e("img", {
                src: k.cover,
                alt: k.title
              }, null, 8, gR)]), e("div", fR, [e("div", pR, [e("div", yR, "作品ID: " + h(k.id || k.globalId || "-"), 1), a(wl, {
                size: "small"
              }, {
                default: l(() => [g(h(Sc(k.source)), 1)]),
                _: 2
              }, 1024)]), e("div", hR, [P(oi)(k) ? (c(), v("a", {
                key: 0,
                href: s(k),
                target: "_blank",
                rel: "noopener noreferrer",
                class: "publish-record-title-link"
              }, h(k.title), 9, bR)) : (c(), v("span", wR, h(k.title), 1))]), e("div", _R, [e("div", kR, [r[329] || (r[329] = e("span", {
                class: "work-card-label"
              }, "发布渠道：", -1)), e("span", CR, h(Qv(k)), 1)]), e("div", AR, [r[330] || (r[330] = e("span", {
                class: "work-card-label"
              }, "创建时间：", -1)), e("span", IR, h(Ec(k.createdAt)), 1)])]), e("div", xR, [r[331] || (r[331] = e("span", {
                class: "work-card-live-label"
              }, "所属活码", -1)), a(ni, {
                "model-value": Rv(k),
                size: "small",
                class: "live-code-select live-code-select--mobile",
                placeholder: "未加入活码",
                disabled: bl.value || au(k),
                loading: au(k),
                onChange: ea => Bp(k, ea)
              }, {
                default: l(() => [a(Jn, {
                  label: "未加入活码",
                  value: ""
                }), (c(!0), v(Ue, null, gt(P(Mp), ea => (c(), ye(Jn, {
                  key: ea.id,
                  label: ea.name,
                  value: ea.id
                }, null, 8, ["label", "value"]))), 128))]),
                _: 1
              }, 8, ["model-value", "disabled", "loading", "onChange"])]), e("div", SR, [bl.value ? M("", !0) : (c(), ye(D, {
                key: 0,
                size: "small",
                type: "primary",
                onClick: ea => xc(k)
              }, {
                default: l(() => [...r[332] || (r[332] = [g(" 导出图文 ", -1)])]),
                _: 1
              }, 8, ["onClick"])), bl.value ? M("", !0) : (c(), ye(D, {
                key: 1,
                size: "small",
                onClick: ea => Up(k)
              }, {
                default: l(() => [...r[333] || (r[333] = [g(" 二维码 ", -1)])]),
                _: 1
              }, 8, ["onClick"]))])])]))), 128)), Ac.value.length === 0 ? (c(), v("div", ER, " 暂无待发布的作品 ")) : M("", !0)]), Li.value > 0 ? (c(), v("div", TR, [a(nl, {
                "current-page": zi.value,
                "onUpdate:currentPage": r[34] || (r[34] = k => zi.value = k),
                "page-size": mt.value,
                "onUpdate:pageSize": r[35] || (r[35] = k => mt.value = k),
                "page-sizes": [10, 20, 50, 100],
                total: Li.value,
                layout: "total, sizes, prev, pager, next, jumper",
                onSizeChange: r[36] || (r[36] = k => {
                  zi.value = 1, Qs(!0)
                }),
                loading: Hi.value
              }, null, 8, ["current-page", "page-size", "total", "loading"])])) : M("", !0)])]),
              _: 1
            }), a(Ya, {
              label: "已发布",
              name: "published"
            }, {
              default: l(() => [e("div", $R, [e("div", PR, [e("span", VR, "已发布作品（" + h(eu.value) + "）", 1)]), e("div", zR, [el((c(), ye(Xa, {
                data: Ic.value,
                style: {
                  width: "100%",
                  "margin-top": "0"
                },
                "empty-text": "暂无已发布的作品",
                "row-key": "id",
                class: "work-table-desktop publish-record-el-table"
              }, {
                default: l(() => [a(Zt, {
                  label: "作品ID",
                  width: "120",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [e("span", LR, h(k.id || k.globalId || "-"), 1)]),
                  _: 1
                }), a(Zt, {
                  label: "封面",
                  width: "120",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [e("div", DR, [e("img", {
                    src: k.cover,
                    alt: k.title,
                    class: "cover-img-small"
                  }, null, 8, MR)])]),
                  _: 1
                }), a(Zt, {
                  label: "标题",
                  "min-width": "200",
                  "show-overflow-tooltip": ""
                }, {
                  default: l(({
                    row: k
                  }) => [P(oi)(k) ? (c(), v("a", {
                    key: 0,
                    href: s(k),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "publish-record-title-link"
                  }, h(k.title), 9, OR)) : (c(), v("span", BR, h(k.title), 1))]),
                  _: 1
                }), a(Zt, {
                  prop: "source",
                  label: "来源",
                  width: "120",
                  align: "center"
                }, {
                  default: l(({
                    row: k
                  }) => [a(wl, {
                    size: "small"
                  }, {
                    default: l(() => [g(h(Sc(k.source)), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 1
                }), a(Zt, {
                  prop: "publishedAt",
                  label: "发布时间",
                  width: "200"
                }, {
                  default: l(({
                    row: k
                  }) => [g(h(Ec(k.publishedAt || k.createdAt)), 1)]),
                  _: 1
                }), a(Zt, {
                  label: "电脑导出发布",
                  width: "148",
                  align: "center",
                  fixed: "right"
                }, {
                  default: l(({
                    row: k
                  }) => [P(oi)(k) ? (c(), ye(D, {
                    key: 0,
                    type: "default",
                    size: "small",
                    class: "publish-record-pc-btn",
                    onClick: ea => u(k)
                  }, {
                    default: l(() => [...r[334] || (r[334] = [g(" 电脑导出发布 ", -1)])]),
                    _: 1
                  }, 8, ["onClick"])) : (c(), v("span", NR, "—"))]),
                  _: 1
                }), a(Zt, {
                  label: "手机扫码跳转发布",
                  width: "168",
                  fixed: "right"
                }, {
                  default: l(({
                    row: k
                  }) => [a(D, {
                    size: "small",
                    type: "success",
                    onClick: ea => xc(k)
                  }, {
                    default: l(() => [...r[335] || (r[335] = [g(" 重新发布 ", -1)])]),
                    _: 1
                  }, 8, ["onClick"])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["data"])), [
                [Ki, ms.value]
              ])]), e("div", UR, [(c(!0), v(Ue, null, gt(Ic.value, k => (c(), v("div", {
                key: k.id,
                class: "work-card-item published"
              }, [e("div", RR, [e("img", {
                src: k.cover,
                alt: k.title
              }, null, 8, jR)]), e("div", qR, [e("div", FR, [e("div", WR, "作品ID: " + h(k.id || k.globalId || "-"), 1), a(wl, {
                size: "small",
                type: "success"
              }, {
                default: l(() => [g(h(Sc(k.source)), 1)]),
                _: 2
              }, 1024)]), e("div", GR, [P(oi)(k) ? (c(), v("a", {
                key: 0,
                href: s(k),
                target: "_blank",
                rel: "noopener noreferrer",
                class: "publish-record-title-link"
              }, h(k.title), 9, JR)) : (c(), v("span", HR, h(k.title), 1))]), e("div", QR, [e("div", KR, [r[336] || (r[336] = e("span", {
                class: "work-card-label"
              }, "发布时间：", -1)), e("span", YR, h(Ec(k.publishedAt || k.createdAt)), 1)])]), e("div", XR, [a(D, {
                size: "small",
                type: "success",
                onClick: ea => xc(k)
              }, {
                default: l(() => [...r[337] || (r[337] = [g(" 重新发布 ", -1)])]),
                _: 1
              }, 8, ["onClick"])])])]))), 128)), Ic.value.length === 0 ? (c(), v("div", ZR, " 暂无已发布的作品 ")) : M("", !0)]), eu.value > 0 ? (c(), v("div", ej, [a(nl, {
                "current-page": Na.value,
                "onUpdate:currentPage": r[37] || (r[37] = k => Na.value = k),
                "page-size": ul.value,
                "onUpdate:pageSize": r[38] || (r[38] = k => ul.value = k),
                "page-sizes": [10, 20, 50, 100],
                total: eu.value,
                layout: "total, sizes, prev, pager, next, jumper",
                onSizeChange: r[39] || (r[39] = k => {
                  Na.value = 1, lu(!0)
                }),
                loading: ms.value
              }, null, 8, ["current-page", "page-size", "total", "loading"])])) : M("", !0)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])])]),
          _: 1
        }), a(Ya, {
          label: "我的活码",
          name: "my_live_code"
        }, {
          default: l(() => [e("div", tj, [a(dO, {
            active: Y.value === "my_live_code"
          }, null, 8, ["active"])])]),
          _: 1
        }), a(Ya, {
          label: "充值记录",
          name: "recharge_record"
        }, {
          default: l(() => [e("div", aj, [e("div", lj, [r[338] || (r[338] = e("div", {
            class: "secondTitle relative"
          }, [e("span", {
            class: "ml-[10px] font-bold"
          }, "充值历史")], -1)), el((c(), ye(Xa, {
            data: Za.value,
            style: {
              width: "100%",
              "margin-top": "16px"
            },
            "empty-text": "暂无数据"
          }, {
            default: l(() => [a(Zt, {
              prop: "orderNo",
              label: "订单编号",
              width: "180"
            }), a(Zt, {
              prop: "orderDesc",
              label: "产品/项目",
              width: "200"
            }, {
              default: l(({
                row: k
              }) => [e("span", null, h(k.orderDesc || "-"), 1)]),
              _: 1
            }), a(Zt, {
              prop: "paymentMethod",
              label: "支付方式",
              width: "120"
            }, {
              default: l(({
                row: k
              }) => [e("span", null, h(f1(k.paymentMethod)), 1)]),
              _: 1
            }), a(Zt, {
              prop: "orderPrice",
              label: "订单金额",
              width: "120"
            }, {
              default: l(({
                row: k
              }) => [e("span", nj, "￥" + h(k.orderPrice), 1)]),
              _: 1
            }), a(Zt, {
              prop: "amount",
              label: "实付金额",
              width: "120"
            }, {
              default: l(({
                row: k
              }) => [e("span", oj, "￥" + h(k.amount), 1)]),
              _: 1
            }), a(Zt, {
              prop: "status",
              label: "状态",
              width: "100"
            }, {
              default: l(({
                row: k
              }) => [a(wl, {
                type: k.status === "success" ? "success" : k.status === "pending" ? "warning" : k.status === "cancelled" ? "info" : "danger"
              }, {
                default: l(() => [g(h(Lw(k.status)), 1)]),
                _: 2
              }, 1032, ["type"])]),
              _: 1
            }), a(Zt, {
              prop: "createTime",
              label: "创建时间",
              width: "180"
            }), a(Zt, {
              prop: "payTime",
              label: "支付时间",
              width: "180"
            })]),
            _: 1
          }, 8, ["data"])), [
            [Ki, mo.value]
          ]), Cl.value > 0 ? (c(), v("div", ij, [a(nl, {
            "current-page": hl.value,
            "onUpdate:currentPage": r[41] || (r[41] = k => hl.value = k),
            "page-size": Yl.value,
            "onUpdate:pageSize": r[42] || (r[42] = k => Yl.value = k),
            "page-sizes": [10, 20, 50, 100],
            total: Cl.value,
            layout: "total, sizes, prev, pager, next, jumper",
            onSizeChange: Dv,
            onCurrentChange: Mv
          }, null, 8, ["current-page", "page-size", "total"])])) : M("", !0)])])]),
          _: 1
        }), M("", !0), !ee.value && Wa.value.is_daili !== 1 ? (c(), ye(Ya, {
          key: 2,
          label: "分销推广",
          name: "distribution"
        }, {
          default: l(() => [e("div", sj, [r[351] || (r[351] = e("div", {
            class: "secondBg rounded-lg p-[20px]"
          }, [e("div", {
            class: "secondTitle relative"
          }, [e("span", {
            class: "ml-[10px] font-bold"
          }, "分销规则")]), e("div", {
            class: "mt-4 flex distribution-rules"
          }, [e("div", {
            class: "distribution-card"
          }, [e("div", {
            class: "distribution-title"
          }, "代理商"), e("div", {
            class: "distribution-desc"
          }, "成为代理商，下级消费您获得50%奖励"), e("div", {
            class: "commission-badge"
          }, " 分佣50% ")])])], -1)), e("div", rj, [e("div", uj, [a(y_, {
            icon: "success",
            title: "限时招募100名，进入查看"
          }, {
            extra: l(() => [a(D, {
              type: "primary",
              onClick: r[43] || (r[43] = k => Y.value = "distribution2")
            }, {
              default: l(() => [...r[350] || (r[350] = [g(" 进入查看 ", -1)])]),
              _: 1
            })]),
            _: 1
          })])])]), a(vl, {
            modelValue: t1.value,
            "onUpdate:modelValue": r[44] || (r[44] = k => t1.value = k),
            title: "用户分销协议",
            width: "600px"
          }, {
            default: l(() => [...r[352] || (r[352] = [e("div", {
              class: "agreement-content"
            }, [e("p", null, "这里是用户分销协议的内容..."), e("p", null, "具体协议条款将在这里展示。")], -1)])]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        })) : M("", !0), ee.value ? M("", !0) : (c(), ye(Ya, {
          key: 3,
          label: "代理中心",
          name: "distribution2"
        }, {
          default: l(() => [e("div", cj, [e("div", dj, [e("div", vj, [e("div", mj, [e("div", gj, [a(ge, {
            size: 50,
            src: N.value.avatar || ""
          }, {
            default: l(() => [a(L, null, {
              default: l(() => [a(P(_n))]),
              _: 1
            })]),
            _: 1
          }, 8, ["src"])]), e("div", fj, [e("div", pj, [e("div", yj, [r[353] || (r[353] = e("span", {
            class: "agent-detail-label"
          }, "代理ID：", -1)), e("span", hj, h(T.value || "-"), 1)]), e("div", bj, [e("div", wj, [e("span", null, [r[354] || (r[354] = e("span", {
            class: "agent-detail-label"
          }, "代理级别：", -1)), e("span", {
            class: Pe(["agent-level-badge", Wa.value.is_daili === 1 ? "agent-level-upgraded" : "agent-level-default"])
          }, h(Wa.value.agentLevel || (Wa.value.is_daili === 1 ? "高级" : "未升级")), 3)]), e("div", _j, [Wa.value.is_daili !== 1 ? (c(), ye(D, {
            key: 0,
            type: "primary",
            size: "small",
            class: "upgrade-agent-btn",
            "native-type": "button",
            onClick: lt(Yw, ["stop"])
          }, {
            default: l(() => [...r[355] || (r[355] = [g(" 升级代理 ", -1)])]),
            _: 1
          })) : (c(), v("span", kj)), a(D, {
            type: "default",
            size: "small",
            class: "contact-service-btn",
            onClick: r[45] || (r[45] = k => hu.value = !0)
          }, {
            default: l(() => [a(L, {
              class: "contact-service-icon"
            }, {
              default: l(() => [a(P(Nu))]),
              _: 1
            }), r[356] || (r[356] = g(" 联系客服 ", -1))]),
            _: 1
          })])]), r[357] || (r[357] = e("div", {
            class: "detail-item"
          }, [e("span", {
            class: "agent-detail-label"
          }, "享佣金比例："), e("span", {
            class: "commission-ratio"
          }, "50%")], -1)), r[358] || (r[358] = e("div", {
            class: "detail-item"
          }, [e("span", {
            class: "agent-detail-label"
          }, "到期时间："), e("span", {
            class: "commission-ratio"
          }, "永久使用")], -1))])])])])]), e("div", Cj, [e("div", Aj, [e("div", Ij, [e("div", xj, [r[359] || (r[359] = e("span", null, "可提现:", -1)), e("span", Sj, h(Wa.value.availableIncome ?? "0.00") + " 元", 1)]), e("div", Ej, [r[360] || (r[360] = e("span", null, "待提现:", -1)), e("span", null, h(Wa.value.pendingWithdraw ?? "0.00") + " 元", 1)]), e("div", Tj, [r[361] || (r[361] = e("span", null, "已提现金额:", -1)), e("span", null, h(Wa.value.withdrawnIncome ?? "0.00") + " (元)", 1)])])]), e("div", $j, [a(D, {
            type: "primary",
            class: "agent-notice-btn",
            onClick: r[46] || (r[46] = k => jc.value = !0)
          }, {
            default: l(() => [a(L, {
              class: "agent-notice-btn-icon"
            }, {
              default: l(() => [a(P(zs))]),
              _: 1
            }), r[362] || (r[362] = e("span", null, "售卖须知", -1))]),
            _: 1
          }), a(D, {
            type: "primary",
            class: "agent-notice-btn paypwd-btn",
            onClick: aw
          }, {
            default: l(() => [a(L, {
              class: "agent-notice-btn-icon"
            }, {
              default: l(() => [a(P(Em))]),
              _: 1
            }), r[363] || (r[363] = e("span", null, "支付密码", -1)), Kv.value ? (c(), v("i", Pj)) : M("", !0)]),
            _: 1
          }), a(D, {
            type: "primary",
            class: "withdraw-btn",
            onClick: n_
          }, {
            default: l(() => [a(L, {
              class: "withdraw-btn-money-icon"
            }, {
              default: l(() => [a(P($1))]),
              _: 1
            }), r[364] || (r[364] = e("span", null, "我要提现", -1))]),
            _: 1
          })])]), e("div", Vj, [e("div", zj, [r[366] || (r[366] = e("div", {
            class: "nav-icons-header-left"
          }, [e("div", {
            class: "nav-icons-title"
          }, "代理功能"), e("div", {
            class: "nav-icons-subtitle"
          }, "提现 · 订单 · 团队 · 推广，一站式管理")], -1)), e("div", {
            class: "nav-header-ranking-btn",
            onClick: r[47] || (r[47] = k => Bi("agentRanking"))
          }, [e("span", Lj, [a(L, null, {
            default: l(() => [a(P(P1))]),
            _: 1
          })]), r[365] || (r[365] = e("span", {
            class: "nav-header-ranking-text"
          }, "代理排行榜", -1))])]), e("div", Dj, [e("div", {
            class: "nav-icon-item",
            onClick: r[48] || (r[48] = k => Bi("balanceLog"))
          }, [...r[367] || (r[367] = [e("div", {
            class: "nav-icon-circle balance-log-icon"
          }, [e("span", {
            class: "icon-symbol"
          }, "¥")], -1), e("div", {
            class: "nav-icon-label"
          }, "余额明细", -1)])]), e("div", {
            class: "nav-icon-item",
            onClick: r[49] || (r[49] = k => Bi("orders"))
          }, [e("div", Mj, [a(L, null, {
            default: l(() => [a(P(Xo))]),
            _: 1
          })]), r[368] || (r[368] = e("div", {
            class: "nav-icon-label"
          }, "分销订单", -1))]), e("div", {
            class: "nav-icon-item",
            onClick: r[50] || (r[50] = k => Bi("team"))
          }, [e("div", Oj, [a(L, null, {
            default: l(() => [a(P(L_))]),
            _: 1
          })]), r[369] || (r[369] = e("div", {
            class: "nav-icon-label"
          }, "我的用户", -1))]), e("div", {
            class: "nav-icon-item",
            onClick: r[51] || (r[51] = k => Bi("myCards"))
          }, [e("div", Bj, [a(L, null, {
            default: l(() => [a(P(Tm))]),
            _: 1
          })]), r[370] || (r[370] = e("div", {
            class: "nav-icon-label nav-icon-label-my-cards"
          }, "我的卡密", -1))])]), e("div", Nj, [e("div", {
            class: "nav-icon-item",
            onClick: r[52] || (r[52] = k => Bi("promoteLink"))
          }, [e("div", Uj, [a(L, null, {
            default: l(() => [a(P(Ko))]),
            _: 1
          })]), r[371] || (r[371] = e("div", {
            class: "nav-icon-label"
          }, "我要推广", -1))]), e("div", {
            class: "nav-icon-item",
            onClick: r[53] || (r[53] = k => Bi("promotePoster"))
          }, [e("div", Rj, [a(L, null, {
            default: l(() => [a(P(ng))]),
            _: 1
          })]), r[372] || (r[372] = e("div", {
            class: "nav-icon-label"
          }, "推广海报", -1))]), e("div", {
            class: "nav-icon-item",
            onClick: r[54] || (r[54] = k => Bi("promoteMaterials"))
          }, [e("div", jj, [a(L, null, {
            default: l(() => [a(P(to))]),
            _: 1
          })]), r[373] || (r[373] = e("div", {
            class: "nav-icon-label"
          }, "推广素材", -1))]), e("div", {
            class: "nav-icon-item",
            onClick: r[55] || (r[55] = k => Bi("purchaseCards"))
          }, [e("div", qj, [a(L, null, {
            default: l(() => [a(P(D_))]),
            _: 1
          })]), r[374] || (r[374] = e("div", {
            class: "nav-icon-label"
          }, "购买卡密", -1))])])]), e("div", Fj, [r[379] || (r[379] = e("div", {
            class: "stats-label-column"
          }, [e("div", {
            class: "stats-label-header"
          }), e("div", {
            class: "stats-item-label"
          }, "用户数:"), e("div", {
            class: "stats-item-label"
          }, "订单数:"), e("div", {
            class: "stats-item-label"
          }, "销售额:"), e("div", {
            class: "stats-item-label"
          }, "佣金数:")], -1)), e("div", Wj, [r[375] || (r[375] = e("div", {
            class: "stats-title"
          }, "今日", -1)), e("div", Gj, [e("span", Jj, h(Wa.value.todayUsers ?? 0), 1)]), e("div", Hj, [e("span", Qj, h(Wa.value.todayOrders ?? 0), 1)]), e("div", Kj, [e("span", Yj, "￥" + h(Wa.value.todaySales ?? "0.00"), 1)]), e("div", Xj, [e("span", Zj, "￥" + h(Wa.value.todayCommission ?? "0.00"), 1)])]), e("div", eq, [r[376] || (r[376] = e("div", {
            class: "stats-title"
          }, "昨日", -1)), e("div", tq, [e("span", aq, h(Wa.value.yesterdayUsers ?? 0), 1)]), e("div", lq, [e("span", nq, h(Wa.value.yesterdayOrders ?? 0), 1)]), e("div", oq, [e("span", iq, "￥" + h(Wa.value.yesterdaySales ?? "0.00"), 1)]), e("div", sq, [e("span", rq, "￥" + h(Wa.value.yesterdayCommission ?? "0.00"), 1)])]), e("div", uq, [r[377] || (r[377] = e("div", {
            class: "stats-title"
          }, "近1周", -1)), e("div", cq, [e("span", dq, h(Wa.value.weekUsers ?? 0), 1)]), e("div", vq, [e("span", mq, h(Wa.value.weekOrders ?? 0), 1)]), e("div", gq, [e("span", fq, "￥" + h(Wa.value.weekSales ?? "0.00"), 1)]), e("div", pq, [e("span", yq, "￥" + h(Wa.value.weekCommission ?? "0.00"), 1)])]), e("div", hq, [r[378] || (r[378] = e("div", {
            class: "stats-title"
          }, "近1月", -1)), e("div", bq, [e("span", wq, h(Wa.value.monthUsers ?? 0), 1)]), e("div", _q, [e("span", kq, h(Wa.value.monthOrders ?? 0), 1)]), e("div", Cq, [e("span", Aq, "￥" + h(Wa.value.monthSales ?? "0.00"), 1)]), e("div", Iq, [e("span", xq, "￥" + h(Wa.value.monthCommission ?? "0.00"), 1)])])])])]), a(vl, {
            modelValue: Nc.value,
            "onUpdate:modelValue": r[56] || (r[56] = k => Nc.value = k),
            title: "推广二维码",
            width: d.value ? "90%" : "400px",
            "align-center": "",
            class: "qr-code-dialog"
          }, {
            default: l(() => [e("div", Sq, [e("div", Eq, [am.value ? (c(), v("div", Tq, [a(L, {
              class: "qr-icon"
            }, {
              default: l(() => [a(P(Fl))]),
              _: 1
            }), r[380] || (r[380] = e("p", null, "二维码生成中...", -1))])) : vu.value ? (c(), v("img", {
              key: 1,
              src: vu.value,
              alt: "推广链接二维码",
              class: "qr-code-image"
            }, null, 8, $q)) : (c(), v("div", Pq, [a(L, {
              class: "qr-icon"
            }, {
              default: l(() => [a(P(Ri))]),
              _: 1
            }), r[381] || (r[381] = e("p", null, "暂无推广链接", -1))]))]), r[382] || (r[382] = e("div", {
              class: "qr-code-tips"
            }, [e("p", null, "扫描二维码即可访问推广链接")], -1))])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: Uc.value,
            "onUpdate:modelValue": r[57] || (r[57] = k => Uc.value = k),
            "show-close": !0,
            width: d.value ? "95%" : "460px",
            "align-center": "",
            class: "promote-poster-dialog"
          }, {
            header: l(() => [...r[383] || (r[383] = [e("span", {
              class: "poster-dialog-title"
            }, "推广海报", -1)])]),
            default: l(() => [e("div", Vq, [e("div", {
              ref_key: "posterRef",
              ref: Zp,
              class: "poster-card"
            }, [r[385] || (r[385] = e("div", {
              class: "poster-bubble"
            }, [e("div", {
              class: "poster-bubble-text"
            }, "AI 写作神器，一键生成优质图文"), e("div", {
              class: "poster-bubble-arrow"
            })], -1)), e("div", zq, [e("div", Lq, [e("img", {
              src: J.value,
              alt: O.value,
              class: "poster-brand-logo"
            }, null, 8, Dq), e("span", Mq, h(O.value), 1)]), r[384] || (r[384] = e("div", {
              class: "poster-slogan"
            }, "图文 / 短视频内容运营获客必备", -1))]), r[386] || (r[386] = e("div", {
              class: "poster-features"
            }, [e("div", {
              class: "poster-feature-item"
            }, [e("span", {
              class: "poster-feature-icon"
            }, "✍️"), e("div", {
              class: "poster-feature-info"
            }, [e("div", {
              class: "poster-feature-name"
            }, "一句话生成图文"), e("div", {
              class: "poster-feature-desc"
            }, "AI 自动生成标题 + 文案 + 配图")])]), e("div", {
              class: "poster-feature-item"
            }, [e("span", {
              class: "poster-feature-icon"
            }, "🔥"), e("div", {
              class: "poster-feature-info"
            }, [e("div", {
              class: "poster-feature-name"
            }, "优质灵感参考"), e("div", {
              class: "poster-feature-desc"
            }, "一键复刻对标账号优质内容")])]), e("div", {
              class: "poster-feature-item"
            }, [e("span", {
              class: "poster-feature-icon"
            }, "📦"), e("div", {
              class: "poster-feature-info"
            }, [e("div", {
              class: "poster-feature-name"
            }, "批量生成发布"), e("div", {
              class: "poster-feature-desc"
            }, "多账号协作，高效批量导出图文")])]), e("div", {
              class: "poster-feature-item"
            }, [e("span", {
              class: "poster-feature-icon"
            }, "📹"), e("div", {
              class: "poster-feature-info"
            }, [e("div", {
              class: "poster-feature-name"
            }, "短视频参考创作工"), e("div", {
              class: "poster-feature-desc"
            }, "短视频与图文视频一键参考创作")])])], -1)), e("div", Oq, [e("div", Bq, [Rc.value ? (c(), v("img", {
              key: 0,
              src: Rc.value,
              alt: "推广二维码",
              class: "poster-qr-img"
            }, null, 8, Nq)) : (c(), v("div", Uq, [a(L, {
              class: "is-loading"
            }, {
              default: l(() => [a(P(Fl))]),
              _: 1
            })]))])]), r[387] || (r[387] = e("div", {
              class: "poster-footer"
            }, [e("div", {
              class: "poster-footer-steps"
            }, [e("span", null, "扫码注册"), e("span", {
              class: "poster-footer-arrow"
            }, "→"), e("span", null, "立即体验"), e("span", {
              class: "poster-footer-arrow"
            }, "→"), e("span", null, "高效创作")])], -1))], 512)]), e("div", Rq, [a(D, {
              type: "primary",
              class: "poster-save-btn",
              onClick: g_
            }, {
              default: l(() => [g(h(d.value ? "保存（或截图）海报图片" : "保存海报图片"), 1)]),
              _: 1
            })])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: er.value,
            "onUpdate:modelValue": r[59] || (r[59] = k => er.value = k),
            title: "代理排行榜",
            width: d.value ? "90%" : "560px",
            "align-center": "",
            class: "agent-ranking-dialog"
          }, {
            default: l(() => [a(ws, {
              modelValue: tm.value,
              "onUpdate:modelValue": r[58] || (r[58] = k => tm.value = k),
              class: "agent-ranking-tabs"
            }, {
              default: l(() => [a(Ya, {
                label: "日榜",
                name: "day"
              }), a(Ya, {
                label: "周榜",
                name: "week"
              }), a(Ya, {
                label: "月榜",
                name: "month"
              }), a(Ya, {
                label: "年榜",
                name: "year"
              })]),
              _: 1
            }, 8, ["modelValue"]), el((c(), v("div", jq, [a(Xa, {
              data: Kw.value,
              style: {
                width: "100%"
              },
              "empty-text": "暂无排行数据",
              size: "default"
            }, {
              default: l(() => [a(Zt, {
                label: "排名",
                width: "70",
                align: "center"
              }, {
                default: l(({
                  $index: k
                }) => [e("span", {
                  class: Pe(["rank-badge", {
                    "rank-top3": k < 3
                  }])
                }, h(k + 1), 3)]),
                _: 1
              }), a(Zt, {
                label: "头像",
                width: "70",
                align: "center"
              }, {
                default: l(({
                  row: k
                }) => [a(ge, {
                  size: 36,
                  src: k.avatar
                }, {
                  default: l(() => [a(L, null, {
                    default: l(() => [a(P(_n))]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["src"])]),
                _: 1
              }), a(Zt, {
                prop: "nickname",
                label: "昵称",
                "min-width": "100"
              }), a(Zt, {
                prop: "sales",
                label: "销售额",
                "min-width": "120",
                align: "right"
              }, {
                default: l(({
                  row: k
                }) => [e("span", qq, "￥" + h(k.sales), 1)]),
                _: 1
              })]),
              _: 1
            }, 8, ["data"])])), [
              [Ki, Am.value]
            ])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: du.value,
            "onUpdate:modelValue": r[61] || (r[61] = k => du.value = k),
            width: d.value ? "90%" : "400px",
            "align-center": "",
            class: "ranking-commission-tip-dialog",
            "show-close": !0,
            onClose: r[62] || (r[62] = k => du.value = !1)
          }, {
            header: l(() => [e("div", Fq, [e("div", Wq, [a(L, {
              class: "ranking-tip-icon"
            }, {
              default: l(() => [a(P(P1))]),
              _: 1
            })]), r[388] || (r[388] = e("span", {
              class: "ranking-tip-title"
            }, "即将解锁排行榜", -1))])]),
            footer: l(() => [e("div", Gq, [a(D, {
              type: "primary",
              class: "ranking-tip-btn",
              onClick: r[60] || (r[60] = k => du.value = !1)
            }, {
              default: l(() => [...r[389] || (r[389] = [g(" 知道了，继续努力 ", -1)])]),
              _: 1
            })])]),
            default: l(() => [r[390] || (r[390] = e("div", {
              class: "ranking-tip-dialog-body"
            }, [e("p", {
              class: "ranking-tip-desc"
            }, [g("累计佣金达到 "), e("strong", null, "2000 元"), g(" 即可查看代理排行榜，与更多优秀代理同台竞技。")]), e("p", {
              class: "ranking-tip-encourage"
            }, "多推广、多出单，早日突破门槛，一起冲榜～")], -1))]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: Gp.value,
            "onUpdate:modelValue": r[63] || (r[63] = k => Gp.value = k),
            title: "收益明细",
            width: "800px",
            class: "income-detail-dialog"
          }, {
            default: l(() => [a(Xa, {
              data: hw.value,
              style: {
                width: "100%"
              },
              class: "income-detail-table",
              size: "default"
            }, {
              default: l(() => [a(Zt, {
                prop: "orderNo",
                label: "订单编号",
                "min-width": "140"
              }), a(Zt, {
                prop: "userName",
                label: "下级用户",
                "min-width": "100"
              }), a(Zt, {
                prop: "amount",
                label: "消费金额",
                "min-width": "100"
              }, {
                default: l(({
                  row: k
                }) => [g(" ￥" + h(k.amount), 1)]),
                _: 1
              }), a(Zt, {
                prop: "commission",
                label: "佣金",
                "min-width": "100"
              }, {
                default: l(({
                  row: k
                }) => [e("span", Jq, "￥" + h(k.commission), 1)]),
                _: 1
              }), a(Zt, {
                prop: "status",
                label: "状态",
                "min-width": "80"
              }, {
                default: l(({
                  row: k
                }) => [a(wl, {
                  type: k.status === "settled" ? "success" : "warning",
                  size: "small"
                }, {
                  default: l(() => [g(h(k.status === "settled" ? "已结算" : "待结算"), 1)]),
                  _: 2
                }, 1032, ["type"])]),
                _: 1
              }), a(Zt, {
                prop: "createTime",
                label: "时间",
                "min-width": "140"
              })]),
              _: 1
            }, 8, ["data"])]),
            _: 1
          }, 8, ["modelValue"]), a(vl, {
            modelValue: or.value,
            "onUpdate:modelValue": r[71] || (r[71] = k => or.value = k),
            width: d.value ? "90%" : "520px",
            fullscreen: !1,
            "show-close": !1,
            "align-center": "",
            class: "withdraw-dialog-new"
          }, {
            header: l(() => [e("div", Hq, [e("div", Qq, [e("button", {
              class: "withdraw-back-btn",
              onClick: r[64] || (r[64] = k => or.value = !1)
            }, [a(L, null, {
              default: l(() => [a(P(an))]),
              _: 1
            })]), r[391] || (r[391] = e("span", {
              class: "withdraw-header-title"
            }, "提现申请", -1)), e("button", {
              class: "withdraw-close-btn",
              onClick: r[65] || (r[65] = k => or.value = !1),
              "aria-label": "关闭"
            }, [a(L, null, {
              default: l(() => [a(P(un))]),
              _: 1
            })])]), e("div", Kq, [e("div", Yq, "¥" + h(Wa.value.availableIncome ?? "0.00"), 1), r[392] || (r[392] = e("div", {
              class: "withdraw-amount-label"
            }, "可提现金额(元)", -1))])])]),
            default: l(() => [e("div", Xq, [e("div", Zq, [r[394] || (r[394] = e("div", {
              class: "withdraw-form-title"
            }, "提现金额", -1)), e("div", eF, [e("div", tF, [r[393] || (r[393] = e("span", {
              class: "withdraw-currency"
            }, "¥", -1)), el(e("input", {
              "onUpdate:modelValue": r[66] || (r[66] = k => wn.value.amount = k),
              type: "number",
              placeholder: "0",
              class: "withdraw-amount-input"
            }, null, 512), [
              [En, wn.value.amount]
            ])]), e("button", {
              type: "button",
              class: "withdraw-all-btn",
              onClick: o_
            }, "全部")]), r[395] || (r[395] = e("div", {
              class: "withdraw-min-tip"
            }, "最低提现金额：100元", -1))]), e("div", aF, [e("div", lF, [r[400] || (r[400] = e("span", {
              class: "withdraw-to-label"
            }, "提现至", -1)), e("div", nF, [e("label", {
              class: Pe(["withdraw-method-radio", {
                active: So.value === "wxpay"
              }])
            }, [el(e("input", {
              type: "radio",
              "onUpdate:modelValue": r[67] || (r[67] = k => So.value = k),
              value: "wxpay",
              onChange: _1
            }, null, 544), [
              [Nd, So.value]
            ]), r[396] || (r[396] = e("span", {
              class: "radio-circle"
            }, null, -1)), r[397] || (r[397] = e("span", null, "微信", -1))], 2), e("label", {
              class: Pe(["withdraw-method-radio", {
                active: So.value === "alipay"
              }])
            }, [el(e("input", {
              type: "radio",
              "onUpdate:modelValue": r[68] || (r[68] = k => So.value = k),
              value: "alipay",
              onChange: _1
            }, null, 544), [
              [Nd, So.value]
            ]), r[398] || (r[398] = e("span", {
              class: "radio-circle"
            }, null, -1)), r[399] || (r[399] = e("span", null, "支付宝", -1))], 2)])])]), e("div", oF, [el(e("input", {
              "onUpdate:modelValue": r[69] || (r[69] = k => wn.value.realName = k),
              type: "text",
              placeholder: "请输入真实姓名",
              class: "withdraw-text-input"
            }, null, 512), [
              [En, wn.value.realName]
            ])]), e("div", iF, [el(e("input", {
              "onUpdate:modelValue": r[70] || (r[70] = k => wn.value.account = k),
              type: "text",
              placeholder: So.value === "wxpay" ? "请输入微信账号" : "请输入支付宝账号",
              class: "withdraw-text-input"
            }, null, 8, sF), [
              [En, wn.value.account]
            ])]), e("div", rF, [e("div", uF, [g(h(So.value === "wxpay" ? "微信收款码" : "支付宝收款码") + " ", 1), r[401] || (r[401] = e("span", {
              class: "withdraw-qr-required"
            }, "*", -1))]), e("div", cF, [a(ke, {
              "auto-upload": !1,
              "on-change": i_,
              "show-file-list": !1,
              accept: "image/*",
              class: "withdraw-qr-upload"
            }, {
              default: l(() => [e("div", dF, [wn.value.qrCode ? (c(), v(Ue, {
                key: 1
              }, [e("img", {
                src: wn.value.qrCode,
                class: "withdraw-qr-preview"
              }, null, 8, vF), r[403] || (r[403] = e("div", {
                class: "withdraw-qr-reupload"
              }, "点击更换", -1))], 64)) : (c(), v(Ue, {
                key: 0
              }, [a(L, {
                class: "withdraw-upload-icon"
              }, {
                default: l(() => [a(P(Ql))]),
                _: 1
              }), r[402] || (r[402] = e("div", {
                class: "withdraw-upload-text"
              }, "点击上传", -1))], 64))])]),
              _: 1
            }), e("div", mF, [g(" 上传" + h(So.value === "wxpay" ? "微信" : "支付宝") + "收款二维码，", 1), r[404] || (r[404] = e("br", null, null, -1)), r[405] || (r[405] = g("方便管理员扫码快速打款 ", -1))])])]), e("button", {
              class: "withdraw-submit-btn",
              onClick: s_
            }, "提现")])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: mu.value,
            "onUpdate:modelValue": r[73] || (r[73] = k => mu.value = k),
            title: "功能已锁定",
            width: d.value ? "90%" : "440px",
            "align-center": "",
            class: "feature-locked-dialog",
            "show-close": !0
          }, {
            default: l(() => [e("div", gF, [e("div", fF, [e("span", pF, [a(L, null, {
              default: l(() => [a(P(Em))]),
              _: 1
            })])]), e("h3", yF, h(e1.value) + "功能仅代理可使用", 1), r[408] || (r[408] = e("p", {
              class: "locked-feature-desc"
            }, [g(" 升级成为代理后，即可解锁 "), e("span", {
              class: "locked-highlight"
            }, "提现、订单、素材、推广"), g(" 等全部代理功能。 ")], -1)), e("div", hF, [a(D, {
              size: "large",
              onClick: r[72] || (r[72] = k => mu.value = !1),
              class: "locked-btn-secondary"
            }, {
              default: l(() => [...r[406] || (r[406] = [g("暂不升级", -1)])]),
              _: 1
            }), a(D, {
              type: "primary",
              size: "large",
              onClick: Im,
              class: "locked-btn-primary"
            }, {
              default: l(() => [...r[407] || (r[407] = [g("去升级代理", -1)])]),
              _: 1
            })])])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: Xv.value,
            "onUpdate:modelValue": r[75] || (r[75] = k => Xv.value = k),
            "show-close": !0,
            width: d.value ? "92%" : "640px",
            "align-center": "",
            class: "promote-link-dialog"
          }, {
            header: l(() => [...r[409] || (r[409] = [e("div", {
              class: "promote-link-header"
            }, [e("div", {
              class: "promote-link-header-badge"
            }, "代理专属"), e("div", {
              class: "promote-link-header-title"
            }, "💰 我的赚钱工具箱"), e("div", {
              class: "promote-link-header-sub"
            }, "分享链接 · 发送口令 · 躺赚佣金")], -1)])]),
            default: l(() => [e("div", bF, [e("div", wF, [r[412] || (r[412] = e("div", {
              class: "promote-section-title"
            }, [e("span", {
              class: "section-icon"
            }, "🔗"), g("我的专属推广链接")], -1)), e("div", _F, [a(Vl, {
              value: Pc.value,
              disabled: "",
              class: "promote-link-input"
            }, null, 8, ["value"]), a(D, {
              type: "primary",
              class: "copy-link-btn promote-gold-btn coupon-link-btn",
              onClick: c_
            }, {
              default: l(() => [...r[410] || (r[410] = [g("复制优惠券链接", -1)])]),
              _: 1
            })]), e("div", kF, [a(Vl, {
              value: Rp.value,
              disabled: "",
              class: "promote-link-input"
            }, null, 8, ["value"]), a(D, {
              type: "primary",
              class: "copy-link-btn promote-gold-btn no-coupon-link-btn",
              onClick: d_
            }, {
              default: l(() => [...r[411] || (r[411] = [g("复制无优惠链接", -1)])]),
              _: 1
            })])]), e("div", CF, [r[419] || (r[419] = e("div", {
              class: "promote-section-title"
            }, [e("span", {
              class: "section-icon"
            }, "🎫"), g("我的专属优惠口令")], -1)), e("div", AF, [Jp.value ? (c(), v("div", xF, [e("div", SF, h(Hp.value), 1), a(D, {
              class: "promote-gold-btn copy-coupon-code-btn",
              onClick: rw
            }, {
              default: l(() => [...r[415] || (r[415] = [g("复制优惠口令", -1)])]),
              _: 1
            })])) : (c(), v("div", IF, [r[414] || (r[414] = e("div", {
              class: "locked-mask"
            }, [e("div", {
              class: "locked-stars"
            }, "★ ★ ★ ★ ★"), e("div", {
              class: "locked-text"
            }, "点击下方按钮查看您的专属口令")], -1)), a(D, {
              type: "primary",
              class: "promote-gold-btn",
              onClick: r[74] || (r[74] = k => Jp.value = !0)
            }, {
              default: l(() => [...r[413] || (r[413] = [g("点击查看口令", -1)])]),
              _: 1
            })])), e("div", EF, [r[416] || (r[416] = e("p", null, "① 用户输入此口令至「我的优惠券」即可领取代金券", -1)), e("p", null, "② 或向「" + h(O.value) + "长图文」发送此口令获取您的专属注册链接", 1), r[417] || (r[417] = e("p", null, "③ 用户通过该链接注册消费，您可获得分销佣金", -1)), r[418] || (r[418] = e("p", {
              class: "tip-warn"
            }, [g("⚠ 口令与您的推广链接绑定，"), e("b", null, "如需修改请联系客服")], -1))])])]), r[420] || (r[420] = e("div", {
              class: "promote-link-tips"
            }, [e("p", null, "💎 分享此链接给好友，好友通过此链接注册并消费，您将获得佣金"), e("p", null, "💎 佣金将在订单完成后自动结算到您的账户")], -1))])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: Yv.value,
            "onUpdate:modelValue": r[76] || (r[76] = k => Yv.value = k),
            title: "推广素材",
            width: d.value ? "90%" : "480px",
            "align-center": "",
            class: "promote-materials-dialog"
          }, {
            default: l(() => [e("div", TF, [e("div", $F, [a(L, {
              class: "guide-icon"
            }, {
              default: l(() => [a(P(si))]),
              _: 1
            }), r[421] || (r[421] = e("span", null, "请复制下方素材网址登录后获取素材", -1))]), e("div", PF, [e("input", {
              value: jp.value,
              readonly: "",
              class: "material-url-input"
            }, null, 8, VF), a(D, {
              type: "primary",
              class: "material-copy-btn copy-link-btn",
              onClick: f_
            }, {
              default: l(() => [a(L, null, {
                default: l(() => [a(P(Eo))]),
                _: 1
              }), r[422] || (r[422] = e("span", null, "复制链接", -1))]),
              _: 1
            })]), r[423] || (r[423] = e("div", {
              class: "material-tip"
            }, "代理在浏览器打开链接，使用手机号和密码登录即可获取每日10条素材", -1))])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: iu.value,
            "onUpdate:modelValue": r[81] || (r[81] = k => iu.value = k),
            title: "我的卡密",
            width: d.value ? "95%" : "500px",
            "align-center": "",
            class: "my-cards-dialog"
          }, {
            default: l(() => [e("div", zF, [e("div", LF, [a(Vl, {
              modelValue: Oc.value,
              "onUpdate:modelValue": r[77] || (r[77] = k => Oc.value = k),
              placeholder: "搜索卡密",
              clearable: "",
              size: "small",
              class: "card-search-input-inline",
              onKeyup: gn(Xp, ["enter"])
            }, null, 8, ["modelValue"]), a(ni, {
              modelValue: Bc.value,
              "onUpdate:modelValue": r[78] || (r[78] = k => Bc.value = k),
              placeholder: "状态",
              clearable: "",
              size: "small",
              class: "card-search-status-select-inline"
            }, {
              default: l(() => [a(Jn, {
                label: "全部",
                value: ""
              }), a(Jn, {
                label: "未使用",
                value: 0
              }), a(Jn, {
                label: "已使用",
                value: 1
              })]),
              _: 1
            }, 8, ["modelValue"]), a(D, {
              type: "primary",
              size: "small",
              onClick: Xp
            }, {
              default: l(() => [a(L, null, {
                default: l(() => [a(P(Ai))]),
                _: 1
              })]),
              _: 1
            }), ru.value || uu.value !== "" ? (c(), ye(D, {
              key: 0,
              type: "info",
              size: "small",
              text: "",
              onClick: mw
            }, {
              default: l(() => [...r[424] || (r[424] = [g("清空", -1)])]),
              _: 1
            })) : M("", !0), a(D, {
              type: "primary",
              size: "small",
              class: "cards-export-btn",
              onClick: u_,
              disabled: Zs.value.length === 0
            }, {
              default: l(() => [a(L, null, {
                default: l(() => [a(P(To))]),
                _: 1
              }), r[425] || (r[425] = e("span", null, "导出", -1))]),
              _: 1
            }, 8, ["disabled"])]), e("div", DF, [em.value ? (c(), v("div", MF, "加载中...")) : (c(), v(Ue, {
              key: 1
            }, [(c(!0), v(Ue, null, gt(Yp.value, k => (c(), v("div", {
              key: k.orderNo,
              class: "card-item"
            }, [e("div", OF, [e("div", BF, "ID: " + h(k.orderNo), 1), a(D, {
              type: "danger",
              size: "small",
              round: "",
              class: "copy-card-btn",
              onClick: ea => r_(k.cardNo)
            }, {
              default: l(() => [...r[426] || (r[426] = [g(" 复制卡密 ", -1)])]),
              _: 1
            }, 8, ["onClick"])]), e("div", NF, [e("div", UF, [r[427] || (r[427] = e("span", {
              class: "info-label"
            }, "名称:", -1)), e("span", RF, h(k.productName), 1)]), e("div", jF, [r[428] || (r[428] = e("span", {
              class: "info-label"
            }, "卡密:", -1)), e("span", qF, h(k.cardNo), 1)]), e("div", FF, [r[429] || (r[429] = e("span", {
              class: "info-label"
            }, "状态:", -1)), e("span", {
              class: Pe(["info-value", {
                "status-unused": k.status === "unused",
                "status-used": k.status === "used"
              }])
            }, h(k.status === "used" ? "已使用" : "未使用"), 3)]), k.status === "used" && k.usedByNickname ? (c(), v("div", WF, [r[430] || (r[430] = e("span", {
              class: "info-label"
            }, "使用人:", -1)), e("span", GF, h(k.usedByNickname), 1)])) : M("", !0), e("div", JF, [r[431] || (r[431] = e("span", {
              class: "info-label"
            }, "创建时间:", -1)), e("span", HF, h(k.payTime), 1)]), k.status === "used" && k.usedTime && k.usedTime !== "-" ? (c(), v("div", QF, [r[432] || (r[432] = e("span", {
              class: "info-label"
            }, "使用时间:", -1)), e("span", KF, h(k.usedTime), 1)])) : M("", !0)])]))), 128)), Zs.value.length === 0 ? (c(), v("div", YF, " 暂无卡密 ")) : M("", !0), Yp.value.length > 0 && Mc.value >= vw.value ? (c(), v("div", XF, " 没有更多数据了 ")) : M("", !0), su.value > Cd ? (c(), v("div", ZF, [a(nl, {
              "current-page": Mc.value,
              "onUpdate:currentPage": r[79] || (r[79] = k => Mc.value = k),
              "page-size": Cd,
              total: su.value,
              layout: "prev, pager, next",
              small: "",
              background: "",
              onCurrentChange: r[80] || (r[80] = k => cu(k, ru.value || void 0, uu.value !== "" ? uu.value : void 0))
            }, null, 8, ["current-page", "total"])])) : M("", !0)], 64))])])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: mm.value,
            "onUpdate:modelValue": r[90] || (r[90] = k => mm.value = k),
            title: "余额明细",
            width: d.value ? "95%" : "520px",
            "align-center": "",
            class: "balance-log-dialog"
          }, {
            default: l(() => [el((c(), v("div", eW, [e("div", tW, [r[433] || (r[433] = e("span", {
              class: "balance-log-summary-label"
            }, "当前可用余额", -1)), e("span", aW, "¥ " + h(p1.value), 1)]), e("div", lW, [e("div", {
              class: Pe(["filter-tab", {
                active: li.value === "all"
              }]),
              onClick: r[82] || (r[82] = k => {
                li.value = "all", hs(1)
              })
            }, "全部", 2), e("div", {
              class: Pe(["filter-tab", {
                active: li.value === "income"
              }]),
              onClick: r[83] || (r[83] = k => {
                li.value = "income", hs(1)
              })
            }, "佣金收入", 2), e("div", {
              class: Pe(["filter-tab", {
                active: li.value === "expense"
              }]),
              onClick: r[84] || (r[84] = k => {
                li.value = "expense", hs(1)
              })
            }, "余额消费", 2), e("div", {
              class: Pe(["filter-tab", {
                active: li.value === "withdraw"
              }]),
              onClick: r[85] || (r[85] = k => {
                li.value = "withdraw", hs(1)
              })
            }, "提现", 2)]), e("div", nW, [(c(!0), v(Ue, null, gt(bu.value, (k, ea) => (c(), v("div", {
              key: ea,
              class: "withdraw-record-item"
            }, [e("div", oW, [e("div", iW, [e("span", {
              class: Pe(["balance-log-tag", "tag-" + k.type])
            }, h(k.typeLabel), 3), e("span", sW, h(k.title), 1)]), e("div", rW, [g(h(k.createTime), 1), k.desc ? (c(), v("span", uW, " · " + h(k.desc), 1)) : M("", !0)])]), e("div", cW, [e("div", {
              class: Pe(["record-amount", k.isIncome ? "amount-income" : "amount-expense"])
            }, h(k.amountText), 3)])]))), 128)), !nd.value && bu.value.length === 0 ? (c(), v("div", dW, " 暂无余额变动记录 ")) : M("", !0), ld.value > 0 ? (c(), v("div", vW, [a(nl, {
              "current-page": gm.value,
              "onUpdate:currentPage": r[86] || (r[86] = k => gm.value = k),
              "page-size": ad.value,
              "onUpdate:pageSize": r[87] || (r[87] = k => ad.value = k),
              total: ld.value,
              "page-sizes": [15, 30, 50, 100],
              layout: "total, sizes, prev, pager, next",
              background: "",
              small: "",
              onCurrentChange: r[88] || (r[88] = k => hs(k)),
              onSizeChange: r[89] || (r[89] = k => {
                ad.value = k, hs(1)
              })
            }, null, 8, ["current-page", "page-size", "total"])])) : M("", !0)])])), [
              [Ki, nd.value]
            ])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: lm.value,
            "onUpdate:modelValue": r[93] || (r[93] = k => lm.value = k),
            title: "订单记录",
            width: d.value ? "95%" : "500px",
            "align-center": "",
            class: "distribution-orders-dialog"
          }, {
            default: l(() => [e("div", mW, [pm.value ? (c(), v("div", gW, "加载中...")) : (c(), v("div", fW, [(c(!0), v(Ue, null, gt(wu.value, k => (c(), v("div", {
              key: k.orderNo,
              class: "order-record-card"
            }, [e("div", pW, [e("div", yW, [a(ge, {
              size: 40,
              src: k.userAvatar || ""
            }, {
              default: l(() => [a(L, null, {
                default: l(() => [a(P(_n))]),
                _: 1
              })]),
              _: 1
            }, 8, ["src"]), e("span", hW, h(k.userName), 1)])]), r[442] || (r[442] = e("div", {
              class: "order-card-divider"
            }, null, -1)), e("div", bW, [e("div", wW, [r[434] || (r[434] = e("span", {
              class: "detail-label"
            }, "订单编号:", -1)), e("span", _W, h(k.orderNo), 1)]), e("div", kW, [r[435] || (r[435] = e("span", {
              class: "detail-label"
            }, "套餐类型:", -1)), e("span", CW, h(k.packageType), 1)]), e("div", AW, [r[436] || (r[436] = e("span", {
              class: "detail-label"
            }, "订单金额:", -1)), e("span", IW, "¥ " + h(k.orderAmount), 1)]), e("div", xW, [r[437] || (r[437] = e("span", {
              class: "detail-label"
            }, "分销佣金:", -1)), e("span", {
              class: Pe(["detail-value commission", {
                "commission-neg": Number(k.commission) < 0
              }])
            }, [g("¥ " + h(k.commission) + " (" + h(k.commissionRatio) + "%)", 1), k.buyerIsAgent && Number(k.commission) === 0 ? (c(), v("span", SW, "（已成为代理）")) : M("", !0)], 2)]), k.refundCommission > 0 && k.status !== "refunded" ? (c(), v("div", EW, [r[438] || (r[438] = e("span", {
              class: "detail-label"
            }, "已追回:", -1)), e("span", TW, "¥ " + h(Number(k.refundCommission).toFixed(2)), 1)])) : M("", !0), e("div", $W, [r[439] || (r[439] = e("span", {
              class: "detail-label"
            }, "订单时间:", -1)), e("span", PW, h(k.createTime), 1)]), e("div", VW, [r[440] || (r[440] = e("span", {
              class: "detail-label"
            }, "状态:", -1)), e("span", {
              class: Pe(["detail-value", {
                "status-settled": k.status === "settled",
                "status-pending": k.status === "pending",
                "status-partial": k.status === "partial_refund",
                "status-refunded": k.status === "refunded"
              }])
            }, h(k.status === "refunded" ? "已扣除" : k.status === "partial_refund" ? "部分扣除" : k.status === "settled" ? "已支付" : "未支付"), 3)]), k.refundRate > 0 ? (c(), v("div", zW, [r[441] || (r[441] = e("span", {
              class: "detail-label"
            }, "退款:", -1)), e("span", LW, h(Number(k.refundRate).toFixed(2)) + "%" + h(k.refundReason ? " · " + k.refundReason : ""), 1)])) : M("", !0)])]))), 128)), wu.value.length === 0 ? (c(), v("div", DW, " 暂无订单记录 ")) : M("", !0), od.value > qm ? (c(), v("div", MW, [a(nl, {
              "current-page": fm.value,
              "onUpdate:currentPage": r[91] || (r[91] = k => fm.value = k),
              "page-size": qm,
              total: od.value,
              layout: "prev, pager, next",
              onCurrentChange: r[92] || (r[92] = k => y1(k))
            }, null, 8, ["current-page", "total"])])) : wu.value.length > 0 ? (c(), v("div", OW, " 没有更多数据了 ")) : M("", !0)]))])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: nm.value,
            "onUpdate:modelValue": r[103] || (r[103] = k => nm.value = k),
            title: "我的用户",
            width: d.value ? "95%" : "1200px",
            "align-center": "",
            class: "my-team-dialog"
          }, {
            default: l(() => [e("div", BW, [ym.value ? (c(), v("div", NW, "加载中...")) : (c(), v(Ue, {
              key: 1
            }, [e("div", UW, [e("div", RW, [e("div", jW, h(ku.value), 1), r[443] || (r[443] = e("div", {
              class: "stat-label"
            }, "用户总数", -1))]), e("div", qW, [e("div", FW, h(Jw.value), 1), r[444] || (r[444] = e("div", {
              class: "stat-label"
            }, "用户总订单", -1))]), e("div", WW, [e("div", GW, "￥" + h(h1.value), 1), r[445] || (r[445] = e("div", {
              class: "stat-label"
            }, "累计总佣金", -1))]), e("div", JW, [e("div", HW, "￥" + h(Hw.value), 1), r[446] || (r[446] = e("div", {
              class: "stat-label"
            }, "UV价值", -1))])]), e("div", QW, [a(Vl, {
              modelValue: Cu.value,
              "onUpdate:modelValue": r[94] || (r[94] = k => Cu.value = k),
              placeholder: "搜索用户ID或昵称",
              clearable: "",
              class: "team-search-input",
              onKeyup: gn(wm, ["enter"]),
              onClear: wm
            }, null, 8, ["modelValue"]), a(D, {
              type: "primary",
              onClick: wm
            }, {
              default: l(() => [...r[447] || (r[447] = [g("搜索", -1)])]),
              _: 1
            })]), e("div", KW, [a(Xa, {
              data: Rw.value,
              class: "my-team-table",
              style: {
                width: "100%"
              },
              "empty-text": "暂无用户",
              height: d.value ? 360 : 420,
              "table-layout": "fixed"
            }, {
              default: l(() => [a(Zt, {
                prop: "userId",
                label: "用户ID",
                "min-width": "120"
              }), a(Zt, {
                prop: "nickname",
                label: "昵称",
                "min-width": "120",
                "show-overflow-tooltip": ""
              }), a(Zt, {
                prop: "orderCount",
                label: "订单",
                width: "72",
                align: "center"
              }, {
                default: l(({
                  row: k
                }) => [e("span", YW, h(k.orderCount || 0), 1)]),
                _: 1
              }), a(Zt, {
                prop: "totalAmount",
                label: "消费金额",
                width: "110",
                align: "right"
              }, {
                default: l(({
                  row: k
                }) => [g(" ￥" + h(k.totalAmount || "0.00"), 1)]),
                _: 1
              }), a(Zt, {
                prop: "commission",
                label: "贡献佣金",
                width: "110",
                align: "right"
              }, {
                default: l(({
                  row: k
                }) => [e("span", XW, "￥" + h(k.commission || "0.00"), 1)]),
                _: 1
              }), a(Zt, {
                prop: "remainingPoints",
                label: "剩余点数",
                width: "96",
                align: "center"
              }, {
                default: l(({
                  row: k
                }) => [e("span", ZW, h(k.remainingPoints ?? 0), 1)]),
                _: 1
              }), a(Zt, {
                prop: "vipName",
                label: "会员等级",
                width: "110",
                align: "center",
                "show-overflow-tooltip": ""
              }), a(Zt, {
                prop: "vipExpireTime",
                label: "会员到期",
                width: "160",
                "show-overflow-tooltip": ""
              }), a(Zt, {
                prop: "registerTime",
                label: "注册时间",
                width: "160",
                "show-overflow-tooltip": ""
              }), a(Zt, {
                label: "操作",
                width: "110",
                fixed: "right",
                align: "center"
              }, {
                default: l(({
                  row: k
                }) => [a(D, {
                  type: "primary",
                  link: "",
                  onClick: ea => Gw(k)
                }, {
                  default: l(() => [...r[448] || (r[448] = [g("作品记录", -1)])]),
                  _: 1
                }, 8, ["onClick"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["data", "height"])]), a(vl, {
              modelValue: id.value,
              "onUpdate:modelValue": r[100] || (r[100] = k => id.value = k),
              title: jw.value,
              width: d.value ? "95%" : "1100px",
              "align-center": "",
              class: "team-member-works-dialog"
            }, {
              footer: l(() => [a(D, {
                onClick: r[99] || (r[99] = k => id.value = !1)
              }, {
                default: l(() => [...r[453] || (r[453] = [g("关闭", -1)])]),
                _: 1
              })]),
              default: l(() => {
                var k, ea;
                return [e("div", eG, [e("div", tG, [e("span", aG, [r[449] || (r[449] = e("span", {
                  class: "meta-label"
                }, "用户ID", -1)), g(h((k = Au.value) == null ? void 0 : k.userId), 1)]), e("span", lG, [r[450] || (r[450] = e("span", {
                  class: "meta-label"
                }, "昵称", -1)), g(h((ea = Au.value) == null ? void 0 : ea.nickname), 1)])])]), e("div", nG, [e("div", oG, [a(Vl, {
                  modelValue: Su.value,
                  "onUpdate:modelValue": r[95] || (r[95] = $a => Su.value = $a),
                  placeholder: "搜索作品ID/标题",
                  clearable: "",
                  class: "team-member-works-keyword",
                  onKeyup: gn(Eu, ["enter"]),
                  onClear: Eu
                }, null, 8, ["modelValue"]), a(ud, {
                  modelValue: sr.value,
                  "onUpdate:modelValue": r[96] || (r[96] = $a => sr.value = $a),
                  type: "daterange",
                  "range-separator": "至",
                  "start-placeholder": "开始日期",
                  "end-placeholder": "结束日期",
                  "value-format": "YYYY-MM-DD",
                  "unlink-panels": !0,
                  class: "team-member-works-daterange",
                  onChange: Eu
                }, null, 8, ["modelValue"]), a(D, {
                  type: "primary",
                  onClick: Eu
                }, {
                  default: l(() => [...r[451] || (r[451] = [g("搜索", -1)])]),
                  _: 1
                }), a(D, {
                  onClick: Ww
                }, {
                  default: l(() => [...r[452] || (r[452] = [g("重置", -1)])]),
                  _: 1
                })]), el((c(), ye(Xa, {
                  data: sd.value,
                  style: {
                    width: "100%"
                  },
                  "empty-text": "暂无作品",
                  height: d.value ? 360 : 460,
                  "table-layout": "fixed"
                }, {
                  default: l(() => [a(Zt, {
                    prop: "id",
                    label: "作品ID",
                    width: "110"
                  }), a(Zt, {
                    prop: "title",
                    label: "标题(点击查看详情)",
                    "min-width": "220",
                    "show-overflow-tooltip": ""
                  }, {
                    default: l(({
                      row: $a
                    }) => [e("a", {
                      class: "work-title-link",
                      href: `https://www.aichaoer.cn/tiaozhuan?workId=${$a.id}&syncMode=all-images-full`,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }, h($a.title || "-"), 9, iG)]),
                    _: 1
                  }), a(Zt, {
                    prop: "type",
                    label: "类型",
                    width: "140",
                    align: "center",
                    "show-overflow-tooltip": ""
                  }, {
                    default: l(({
                      row: $a
                    }) => [a(wl, {
                      class: "work-type-tag",
                      size: "small",
                      style: Il(_m($a.type))
                    }, {
                      default: l(() => [g(h(Fw($a.type)), 1)]),
                      _: 2
                    }, 1032, ["style"])]),
                    _: 1
                  }), a(Zt, {
                    prop: "use_points",
                    label: "使用点数",
                    width: "100",
                    align: "right"
                  }, {
                    default: l(({
                      row: $a
                    }) => [e("span", sG, h($a.use_points ?? 0), 1)]),
                    _: 1
                  }), a(Zt, {
                    prop: "is_release",
                    label: "发布",
                    width: "80",
                    align: "center"
                  }, {
                    default: l(({
                      row: $a
                    }) => [a(wl, {
                      type: $a.is_release === 1 ? "success" : "info",
                      size: "small"
                    }, {
                      default: l(() => [g(h($a.is_release === 1 ? "已发布" : "待发布"), 1)]),
                      _: 2
                    }, 1032, ["type"])]),
                    _: 1
                  }), a(Zt, {
                    prop: "updatetime",
                    label: "更新时间",
                    width: "170",
                    "show-overflow-tooltip": ""
                  })]),
                  _: 1
                }, 8, ["data", "height"])), [
                  [Ki, hm.value]
                ]), xu.value > Wm ? (c(), v("div", rG, [a(nl, {
                  "current-page": Iu.value,
                  "onUpdate:currentPage": r[97] || (r[97] = $a => Iu.value = $a),
                  "page-size": Wm,
                  total: xu.value,
                  layout: "prev, pager, next",
                  onCurrentChange: r[98] || (r[98] = $a => km($a))
                }, null, 8, ["current-page", "total"])])) : M("", !0)])]
              }),
              _: 1
            }, 8, ["modelValue", "title", "width"]), ku.value > Fm ? (c(), v("div", uG, [a(nl, {
              "current-page": _u.value,
              "onUpdate:currentPage": r[101] || (r[101] = k => _u.value = k),
              "page-size": Fm,
              total: ku.value,
              layout: "prev, pager, next",
              onCurrentChange: r[102] || (r[102] = k => bm(k))
            }, null, 8, ["current-page", "total"])])) : M("", !0)], 64))])]),
            _: 1
          }, 8, ["modelValue", "width"]), a(vl, {
            modelValue: jc.value,
            "onUpdate:modelValue": r[105] || (r[105] = k => jc.value = k),
            "show-close": !0,
            width: d.value ? "92%" : "500px",
            "align-center": "",
            class: "agent-notice-dialog"
          }, {
            header: l(() => [...r[454] || (r[454] = [e("div", {
              class: "agent-notice-header"
            }, [e("div", {
              class: "agent-notice-header-icon"
            }, "📋"), e("div", {
              class: "agent-notice-header-title"
            }, "代理须知"), e("div", {
              class: "agent-notice-header-sub"
            }, "通过经营 共建良性合作生态")], -1)])]),
            default: l(() => [Wa.value.is_daili !== 1 ? (c(), v("div", cG, [r[456] || (r[456] = e("div", {
              class: "locked-icon"
            }, "🔒", -1)), r[457] || (r[457] = e("div", {
              class: "locked-title"
            }, "代理专享内容", -1)), r[458] || (r[458] = e("div", {
              class: "locked-desc"
            }, [g("本须知仅对已升级的代理伙伴可见"), e("br"), g("成为代理后即可解锁查看详细价格策略")], -1)), a(D, {
              type: "primary",
              class: "locked-upgrade-btn",
              onClick: r[104] || (r[104] = k => {
                jc.value = !1, Im && Im()
              })
            }, {
              default: l(() => [...r[455] || (r[455] = [g("立即升级代理", -1)])]),
              _: 1
            })])) : (c(), v("div", dG, [e("p", vG, [r[459] || (r[459] = g(" 为避免不正当价格竞争，", -1)), e("span", mG, h(fw.value) + "年" + h(pw.value) + "月", 1), r[460] || (r[460] = g("代理合作伙伴零售价不得低于以下标准： ", -1))]), r[461] || (r[461] = e("ul", {
              class: "agent-notice-price-list"
            }, [e("li", null, [e("span", {
              class: "price-label"
            }, "季卡"), e("span", {
              class: "price-value"
            }, "¥ 278"), e("span", {
              class: "price-tip"
            }, "起")]), e("li", null, [e("span", {
              class: "price-label"
            }, "年卡"), e("span", {
              class: "price-value"
            }, "¥ 650"), e("span", {
              class: "price-tip"
            }, "起")]), e("li", null, [e("span", {
              class: "price-label"
            }, "三年卡"), e("span", {
              class: "price-value"
            }, "¥ 1350"), e("span", {
              class: "price-tip"
            }, "起")]), e("li", null, [e("span", {
              class: "price-label"
            }, "代理权限"), e("span", {
              class: "price-value"
            }, "¥ 1399"), e("span", {
              class: "price-tip"
            }, "每月上浮")])], -1)), r[462] || (r[462] = e("div", {
              class: "agent-notice-warning"
            }, [e("span", {
              class: "warning-icon"
            }, "⚠"), e("span", null, [g("如违反规定低价售卖，"), e("b", null, "第一次警告，第二次取消代理权限"), g("。")])], -1))]))]),
            _: 1
          }, 8, ["modelValue", "width"])]),
          _: 1
        })), a(Ya, {
          label: "我的优惠券",
          name: "my_coupons"
        }, {
          default: l(() => [e("div", gG, [e("div", fG, [r[464] || (r[464] = e("span", {
            class: "my-coupons-title"
          }, "我的优惠券", -1)), a(D, {
            type: "primary",
            size: "small",
            class: "my-coupons-redeem-btn",
            onClick: r[106] || (r[106] = k => Ks.value = !0)
          }, {
            default: l(() => [...r[463] || (r[463] = [g("优惠口令兑换", -1)])]),
            _: 1
          })]), Qi.value.length === 0 ? (c(), v("div", pG, [r[466] || (r[466] = e("div", {
            class: "my-coupons-empty-icon"
          }, "🎟️", -1)), r[467] || (r[467] = e("div", {
            class: "my-coupons-empty-title"
          }, "暂无可用优惠券", -1)), r[468] || (r[468] = e("div", {
            class: "my-coupons-empty-desc"
          }, "输入优惠口令即可领取代金券", -1)), a(D, {
            type: "primary",
            size: "small",
            plain: "",
            class: "my-coupons-empty-action",
            onClick: r[107] || (r[107] = k => Ks.value = !0)
          }, {
            default: l(() => [...r[465] || (r[465] = [g(" 立即兑换口令 ", -1)])]),
            _: 1
          })])) : (c(), v("div", yG, [(c(!0), v(Ue, null, gt(Qi.value, k => (c(), v("div", {
            key: k.id,
            class: Pe(["coupon-card", {
              "coupon-50": k.value === 50,
              "coupon-40": k.value === 40,
              "coupon-60": k.value === 60
            }])
          }, [e("div", hG, [e("div", bG, [r[469] || (r[469] = e("span", {
            class: "coupon-currency"
          }, "¥", -1)), g(h(k.value), 1)]), e("div", wG, "满" + h(k.minSpend) + "可用", 1)]), e("div", _G, [r[471] || (r[471] = e("div", {
            class: "coupon-name"
          }, "在线支付抵扣券", -1)), e("div", kG, "来源口令：" + h(k.agentCode), 1), e("div", CG, [r[470] || (r[470] = g("有效期剩余：", -1)), e("span", AG, h(P(pO)(k.expireAt - Lc.value)), 1)])])], 2))), 128))])), Qi.value.length > 0 ? (c(), v("div", IG, [r[473] || (r[473] = e("div", {
            class: "coupon-claim-tip-text"
          }, " 本优惠券现时发售，30天内只发售一次，请您珍惜名额！ ", -1)), a(D, {
            type: "primary",
            size: "small",
            class: "coupon-buy-btn",
            onClick: ww
          }, {
            default: l(() => [...r[472] || (r[472] = [g(" 使用优惠券去购买 ", -1)])]),
            _: 1
          })])) : M("", !0)])]),
          _: 1
        }), a(Ya, {
          label: "密码管理",
          name: "password"
        }, {
          default: l(() => [e("div", xG, [e("div", SG, [r[475] || (r[475] = e("div", {
            class: "password-title"
          }, "设置密码", -1)), e("div", EG, [a(Go, {
            ref_key: "passwordFormRef",
            ref: Ht,
            model: Tt.value,
            "label-position": "right",
            "label-width": "0"
          }, {
            default: l(() => [a(Bl, null, {
              default: l(() => [a(Vl, {
                value: Ow.value,
                disabled: "",
                class: "password-input"
              }, null, 8, ["value"])]),
              _: 1
            }), a(Bl, {
              prop: "oldPassword",
              rules: [{
                validator: (k, ea, $a) => {
                  if (ea && ea.trim()) {
                    const pn = ea.trim();
                    pn.length < 6 || pn.length > 30 ? $a(new Error("密码长度为6-30位")) : $a()
                  } else $a()
                },
                trigger: "blur"
              }]
            }, {
              default: l(() => [a(Vl, {
                modelValue: Tt.value.oldPassword,
                "onUpdate:modelValue": r[108] || (r[108] = k => Tt.value.oldPassword = k),
                type: "password",
                placeholder: "请输入旧密码（首次设置可不填）",
                "show-password": "",
                clearable: "",
                class: "password-input"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["rules"]), a(Bl, {
              prop: "newPassword",
              rules: [{
                required: !0,
                message: "请输入新密码",
                trigger: "blur"
              }, {
                min: 6,
                max: 30,
                message: "密码长度为6-30位",
                trigger: "blur"
              }]
            }, {
              default: l(() => [a(Vl, {
                modelValue: Tt.value.newPassword,
                "onUpdate:modelValue": r[109] || (r[109] = k => Tt.value.newPassword = k),
                type: "password",
                placeholder: "请输入6-30位新密码",
                "show-password": "",
                clearable: "",
                class: "password-input"
              }, null, 8, ["modelValue"])]),
              _: 1
            }), a(Bl, {
              prop: "confirmNewPassword",
              rules: [{
                required: !0,
                message: "请再次输入新密码",
                trigger: "blur"
              }, {
                min: 6,
                max: 30,
                message: "密码长度为6-30位",
                trigger: "blur"
              }, {
                validator: (k, ea, $a) => {
                  ea && Tt.value.newPassword !== ea ? $a(new Error("两次输入的新密码不一致")) : $a()
                },
                trigger: "blur"
              }]
            }, {
              default: l(() => [a(Vl, {
                modelValue: Tt.value.confirmNewPassword,
                "onUpdate:modelValue": r[110] || (r[110] = k => Tt.value.confirmNewPassword = k),
                type: "password",
                placeholder: "请再次输入6-30位新密码",
                "show-password": "",
                clearable: "",
                class: "password-input"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["rules"])]),
            _: 1
          }, 8, ["model"])]), e("div", TG, [a(D, {
            type: "primary",
            class: "password-submit-btn",
            onClick: Bw
          }, {
            default: l(() => [...r[474] || (r[474] = [g(" 确认 ", -1)])]),
            _: 1
          })])])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"])]),
      _: 1
    })], 2), a(vl, {
      modelValue: fs.value,
      "onUpdate:modelValue": r[113] || (r[113] = k => fs.value = k),
      title: "",
      width: d.value ? "90%" : "720px",
      "align-center": "",
      "show-close": !0,
      "append-to-body": !0,
      class: "upgrade-agent-dialog"
    }, {
      default: l(() => [e("div", $G, [r[491] || (r[491] = e("div", {
        class: "upgrade-header"
      }, [e("div", {
        class: "upgrade-title-row"
      }, [e("div", {
        class: "upgrade-title"
      }, "升级代理五折卡"), e("span", {
        class: "upgrade-title-hot",
        "aria-label": "火爆"
      }, [e("span", {
        class: "upgrade-title-hot-glow",
        "aria-hidden": "true"
      }), e("span", {
        class: "upgrade-title-hot-text"
      }, "HOT")])]), e("div", {
        class: "upgrade-subtitle"
      }, [e("span", {
        class: "upgrade-subtitle-pill"
      }, "自用省钱、分享赚钱")])], -1)), el((c(), v("div", PG, [r[480] || (r[480] = e("div", {
        class: "price-label"
      }, "升级价格", -1)), ps.value.length > 1 ? (c(), ye(ni, {
        key: 0,
        modelValue: tr.value,
        "onUpdate:modelValue": r[112] || (r[112] = k => tr.value = k),
        class: "upgrade-good-select",
        placeholder: "选择套餐"
      }, {
        default: l(() => [(c(!0), v(Ue, null, gt(ps.value, k => (c(), ye(Jn, {
          key: k.id,
          label: (k.name || "代理套餐") + " ¥" + (parseFloat(k.price) || 0),
          value: k.id
        }, null, 8, ["label", "value"]))), 128))]),
        _: 1
      }, 8, ["modelValue"])) : M("", !0), e("div", VG, [r[476] || (r[476] = e("span", {
        class: "price-symbol"
      }, "¥", -1)), e("span", zG, h(b1.value), 1)]), Sm.value && rd.value ? (c(), v("div", LG, [r[478] || (r[478] = e("span", {
        class: "upgrade-countdown-label"
      }, [g("距下一期涨价至 "), e("strong", {
        class: "upgrade-countdown-price"
      }, "¥1799"), g(" 还剩")], -1)), e("span", DG, h(rd.value), 1), r[479] || (r[479] = e("span", {
        class: "upgrade-countdown-tip"
      }, "2026.6.1起生效", -1)), e("span", MG, [a(L, {
        class: "upgrade-countdown-reason-icon"
      }, {
        default: l(() => [a(P(si))]),
        _: 1
      }), r[477] || (r[477] = g("功能增强后门槛费将逐步上调，早加入早受益。", -1))])])) : M("", !0)])), [
        [Ki, Fc.value]
      ]), e("div", OG, [r[489] || (r[489] = e("div", {
        class: "benefits-title"
      }, "升级后享受全部权益", -1)), e("div", BG, [e("div", NG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[481] || (r[481] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "五折提卡"), e("div", {
        class: "benefit-desc"
      }, "购买卡密享受全部套餐5折优惠价格")], -1))]), e("div", UG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[482] || (r[482] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "佣金收益"), e("div", {
        class: "benefit-desc"
      }, "自己长期用省一半，推广用户消费可获得佣金50%返利")], -1))]), e("div", RG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[483] || (r[483] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "团队管理"), e("div", {
        class: "benefit-desc"
      }, "查看和管理您的推广团队")], -1))]), e("div", jG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[484] || (r[484] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "数据统计"), e("div", {
        class: "benefit-desc"
      }, "详细的收益和推广数据报表")], -1))]), e("div", qG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[485] || (r[485] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "推广素材"), e("div", {
        class: "benefit-desc"
      }, "官方素材物料扶持，降低代理宣传门槛")], -1))]), e("div", FG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[486] || (r[486] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "终身绑定"), e("div", {
        class: "benefit-desc"
      }, "只要您第一次邀请的用户注册终身绑定，续费同享分佣")], -1))]), e("div", WG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[487] || (r[487] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "多权益同享"), e("div", {
        class: "benefit-desc"
      }, "更多代理权限持续赠送（如 GEO 代理、批量导出软件代理等），开通一项，后续新增权益同享")], -1))]), e("div", GG, [a(L, {
        class: "benefit-icon"
      }, {
        default: l(() => [a(P(Yi))]),
        _: 1
      }), r[488] || (r[488] = e("div", {
        class: "benefit-content"
      }, [e("div", {
        class: "benefit-name"
      }, "名额增值"), e("div", {
        class: "benefit-desc"
      }, "门槛费随功能与市场逐步升值，占位即投资；把握 AI 内容风口，早占名额早受益")], -1))])])]), e("div", JG, [a(D, {
        type: "primary",
        class: "upgrade-pay-btn",
        size: "large",
        onClick: a_,
        loading: qc.value,
        disabled: !xm.value
      }, {
        default: l(() => [g(" 立即升级 ¥" + h(b1.value), 1)]),
        _: 1
      }, 8, ["loading", "disabled"]), e("div", HG, [a(L, null, {
        default: l(() => [a(P(zs))]),
        _: 1
      }), r[490] || (r[490] = e("span", null, "升级后立即生效，永久享受代理权益", -1))])])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: ar.value,
      "onUpdate:modelValue": r[114] || (r[114] = k => ar.value = k),
      title: "扫码支付",
      width: d.value ? "90%" : "360px",
      "align-center": "",
      "append-to-body": !0,
      "close-on-click-modal": !1,
      onClose: l_
    }, {
      default: l(() => [e("div", QG, [r[492] || (r[492] = e("p", {
        class: "upgrade-qr-tip"
      }, "请使用微信扫描二维码完成支付", -1)), Wc.value ? (c(), v("div", KG, [e("img", {
        src: Wc.value,
        alt: "支付二维码",
        class: "upgrade-qr-img"
      }, null, 8, YG)])) : M("", !0)])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: le.value,
      "onUpdate:modelValue": r[117] || (r[117] = k => le.value = k),
      title: "修改昵称",
      width: "400px",
      onOpen: r[118] || (r[118] = k => Jt.value = N.value.nickname)
    }, {
      footer: l(() => [a(D, {
        onClick: r[116] || (r[116] = k => le.value = !1)
      }, {
        default: l(() => [...r[493] || (r[493] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: kw
      }, {
        default: l(() => [...r[494] || (r[494] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [a(Vl, {
        modelValue: Jt.value,
        "onUpdate:modelValue": r[115] || (r[115] = k => Jt.value = k),
        placeholder: "请输入新昵称"
      }, null, 8, ["modelValue"])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: U.value,
      "onUpdate:modelValue": r[121] || (r[121] = k => U.value = k),
      title: "创建分组",
      width: "500px",
      onClose: At
    }, {
      footer: l(() => [a(D, {
        onClick: r[120] || (r[120] = k => U.value = !1)
      }, {
        default: l(() => [...r[495] || (r[495] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: Xt
      }, {
        default: l(() => [...r[496] || (r[496] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [a(Go, {
        model: We.value,
        "label-width": "100px"
      }, {
        default: l(() => [a(Bl, {
          label: "分组名称",
          required: ""
        }, {
          default: l(() => [a(Vl, {
            modelValue: We.value.name,
            "onUpdate:modelValue": r[119] || (r[119] = k => We.value.name = k),
            placeholder: "不填写则默认：当前日期+序号",
            maxlength: "50"
          }, null, 8, ["modelValue"]), e("div", XG, "不填写将自动生成：" + h(Lt()), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: dt.value,
      "onUpdate:modelValue": r[131] || (r[131] = k => dt.value = k),
      title: "创建创作模板",
      width: d.value ? "90%" : "800px",
      onClose: ta
    }, {
      footer: l(() => [a(D, {
        onClick: r[130] || (r[130] = k => dt.value = !1)
      }, {
        default: l(() => [...r[499] || (r[499] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: Ma
      }, {
        default: l(() => [...r[500] || (r[500] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [a(Go, {
        model: Ne.value,
        "label-width": d.value ? "100px" : "120px"
      }, {
        default: l(() => [a(Bl, {
          label: "模板名称",
          required: ""
        }, {
          default: l(() => [a(Vl, {
            modelValue: Ne.value.name,
            "onUpdate:modelValue": r[122] || (r[122] = k => Ne.value.name = k),
            placeholder: "请输入模板名称",
            maxlength: "50"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "产品简介"
        }, {
          default: l(() => [a(Vl, {
            modelValue: Ne.value.data.industry,
            "onUpdate:modelValue": r[123] || (r[123] = k => Ne.value.data.industry = k),
            type: "textarea",
            rows: 3,
            placeholder: "例如：提供不同风格的大学生求职简历模板，满足各类行业需求。"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "用户年龄"
        }, {
          default: l(() => [a(fi, {
            modelValue: Ne.value.data.ageMode,
            "onUpdate:modelValue": r[124] || (r[124] = k => Ne.value.data.ageMode = k)
          }, {
            default: l(() => [a(cd, {
              value: "any"
            }, {
              default: l(() => [...r[497] || (r[497] = [g("不限", -1)])]),
              _: 1
            }), a(cd, {
              value: "range"
            }, {
              default: l(() => [...r[498] || (r[498] = [g("筛选范围", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"]), Ne.value.data.ageMode === "range" ? (c(), v("div", ZG, [a(A1, {
            modelValue: Ne.value.data.ageRange,
            "onUpdate:modelValue": r[125] || (r[125] = k => Ne.value.data.ageRange = k),
            range: "",
            min: 10,
            max: 70,
            step: 5,
            "show-stops": !0
          }, null, 8, ["modelValue"]), e("div", eJ, h(Ne.value.data.ageRange[0]) + " - " + h(Ne.value.data.ageRange[1]) + " 岁", 1)])) : M("", !0)]),
          _: 1
        }), a(Bl, {
          label: "目标群体"
        }, {
          default: l(() => [a(Vl, {
            modelValue: Ne.value.data.targetGroup,
            "onUpdate:modelValue": r[126] || (r[126] = k => Ne.value.data.targetGroup = k),
            placeholder: "例如：应届毕业生、职场新人"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "用户痛点"
        }, {
          default: l(() => [a(Vl, {
            modelValue: Ne.value.data.painPoints,
            "onUpdate:modelValue": r[127] || (r[127] = k => Ne.value.data.painPoints = k),
            type: "textarea",
            rows: 3,
            placeholder: "例如：不会制作、自己制作的不好看、不专业不全面"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "解决方案"
        }, {
          default: l(() => [a(Vl, {
            modelValue: Ne.value.data.solution,
            "onUpdate:modelValue": r[128] || (r[128] = k => Ne.value.data.solution = k),
            type: "textarea",
            rows: 3,
            placeholder: "例如：提供专业的模板和指导"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "备注"
        }, {
          default: l(() => [a(Vl, {
            modelValue: Ne.value.data.notes,
            "onUpdate:modelValue": r[129] || (r[129] = k => Ne.value.data.notes = k),
            type: "textarea",
            rows: 2,
            placeholder: "其他需要说明的信息"
          }, null, 8, ["modelValue"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "label-width"])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: qt.value,
      "onUpdate:modelValue": r[141] || (r[141] = k => qt.value = k),
      title: "编辑创作模板",
      width: d.value ? "90%" : "800px",
      onClose: ha
    }, {
      footer: l(() => [a(D, {
        onClick: r[140] || (r[140] = k => qt.value = !1)
      }, {
        default: l(() => [...r[503] || (r[503] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: ve
      }, {
        default: l(() => [...r[504] || (r[504] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [a(Go, {
        model: ga.value,
        "label-width": d.value ? "100px" : "120px"
      }, {
        default: l(() => [a(Bl, {
          label: "模板名称",
          required: ""
        }, {
          default: l(() => [a(Vl, {
            modelValue: ga.value.name,
            "onUpdate:modelValue": r[132] || (r[132] = k => ga.value.name = k),
            placeholder: "请输入模板名称",
            maxlength: "50"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "产品简介"
        }, {
          default: l(() => [a(Vl, {
            modelValue: ga.value.data.industry,
            "onUpdate:modelValue": r[133] || (r[133] = k => ga.value.data.industry = k),
            type: "textarea",
            rows: 3,
            placeholder: "例如：提供不同风格的大学生求职简历模板，满足各类行业需求。"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "用户年龄"
        }, {
          default: l(() => [a(fi, {
            modelValue: ga.value.data.ageMode,
            "onUpdate:modelValue": r[134] || (r[134] = k => ga.value.data.ageMode = k)
          }, {
            default: l(() => [a(cd, {
              value: "any"
            }, {
              default: l(() => [...r[501] || (r[501] = [g("不限", -1)])]),
              _: 1
            }), a(cd, {
              value: "range"
            }, {
              default: l(() => [...r[502] || (r[502] = [g("筛选范围", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"]), ga.value.data.ageMode === "range" ? (c(), v("div", tJ, [a(A1, {
            modelValue: ga.value.data.ageRange,
            "onUpdate:modelValue": r[135] || (r[135] = k => ga.value.data.ageRange = k),
            range: "",
            min: 10,
            max: 70,
            step: 5,
            "show-stops": !0
          }, null, 8, ["modelValue"]), e("div", aJ, h(ga.value.data.ageRange[0]) + " - " + h(ga.value.data.ageRange[1]) + " 岁", 1)])) : M("", !0)]),
          _: 1
        }), a(Bl, {
          label: "目标群体"
        }, {
          default: l(() => [a(Vl, {
            modelValue: ga.value.data.targetGroup,
            "onUpdate:modelValue": r[136] || (r[136] = k => ga.value.data.targetGroup = k),
            placeholder: "例如：应届毕业生、职场新人"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "用户痛点"
        }, {
          default: l(() => [a(Vl, {
            modelValue: ga.value.data.painPoints,
            "onUpdate:modelValue": r[137] || (r[137] = k => ga.value.data.painPoints = k),
            type: "textarea",
            rows: 3,
            placeholder: "例如：不会制作、自己制作的不好看、不专业不全面"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "解决方案"
        }, {
          default: l(() => [a(Vl, {
            modelValue: ga.value.data.solution,
            "onUpdate:modelValue": r[138] || (r[138] = k => ga.value.data.solution = k),
            type: "textarea",
            rows: 3,
            placeholder: "例如：提供专业的模板和指导"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "备注"
        }, {
          default: l(() => [a(Vl, {
            modelValue: ga.value.data.notes,
            "onUpdate:modelValue": r[139] || (r[139] = k => ga.value.data.notes = k),
            type: "textarea",
            rows: 2,
            placeholder: "其他需要说明的信息"
          }, null, 8, ["modelValue"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "label-width"])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: de.value,
      "onUpdate:modelValue": r[144] || (r[144] = k => de.value = k),
      title: "添加标题到分组",
      width: "600px",
      onClose: fa
    }, {
      footer: l(() => [a(D, {
        onClick: r[143] || (r[143] = k => de.value = !1)
      }, {
        default: l(() => [...r[505] || (r[505] = [g("稍后添加", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: pa
      }, {
        default: l(() => [...r[506] || (r[506] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => {
        var k;
        return [e("div", lJ, [a(L, {
          class: "success-icon"
        }, {
          default: l(() => [a(P(ts))]),
          _: 1
        }), e("p", null, '分组"' + h((k = aa.value) == null ? void 0 : k.name) + '"创建成功！', 1)]), a(Go, {
          model: Ke.value,
          "label-width": "100px",
          style: {
            "margin-top": "20px"
          }
        }, {
          default: l(() => [a(Bl, {
            label: "标题内容",
            required: ""
          }, {
            default: l(() => [a(Vl, {
              modelValue: Ke.value.text,
              "onUpdate:modelValue": r[142] || (r[142] = ea => Ke.value.text = ea),
              type: "textarea",
              autosize: {
                minRows: 10,
                maxRows: 20
              },
              placeholder: "请输入标题内容，一行一个标题",
              style: {
                resize: "vertical",
                "overflow-y": "auto"
              }
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]
      }),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: ae.value,
      "onUpdate:modelValue": r[148] || (r[148] = k => ae.value = k),
      title: Bt.value ? "编辑标题" : "添加标题",
      width: "600px",
      onClose: en
    }, {
      footer: l(() => [a(D, {
        onClick: r[147] || (r[147] = k => ae.value = !1)
      }, {
        default: l(() => [...r[507] || (r[507] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: Ka
      }, {
        default: l(() => [...r[508] || (r[508] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [a(Go, {
        model: Ke.value,
        "label-width": "100px"
      }, {
        default: l(() => [a(Bl, {
          label: "选择分组",
          required: ""
        }, {
          default: l(() => [a(ni, {
            modelValue: Ke.value.libraryId,
            "onUpdate:modelValue": r[145] || (r[145] = k => Ke.value.libraryId = k),
            placeholder: "请选择分组",
            filterable: "",
            style: {
              width: "100%"
            }
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(Q.value, k => (c(), ye(Jn, {
              key: k.id,
              label: k.name,
              value: k.id
            }, null, 8, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "标题内容",
          required: ""
        }, {
          default: l(() => [a(Vl, {
            modelValue: Ke.value.text,
            "onUpdate:modelValue": r[146] || (r[146] = k => Ke.value.text = k),
            type: "textarea",
            autosize: {
              minRows: 10,
              maxRows: 20
            },
            placeholder: "请输入标题内容，一行一个标题",
            style: {
              resize: "vertical",
              "overflow-y": "auto"
            }
          }, null, 8, ["modelValue"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue", "title"]), a(vl, {
      modelValue: be.value,
      "onUpdate:modelValue": r[152] || (r[152] = k => be.value = k),
      title: ((I1 = kt.value) == null ? void 0 : I1.name) || "分组",
      width: "900px"
    }, {
      footer: l(() => [a(D, {
        onClick: r[150] || (r[150] = k => be.value = !1)
      }, {
        default: l(() => [...r[516] || (r[516] = [g("关闭", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: r[151] || (r[151] = k => {
          var ea;
          ae.value = !0, Ke.value.libraryId = (ea = kt.value) == null ? void 0 : ea.id
        })
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Ql))]),
          _: 1
        }), r[517] || (r[517] = g(" 增加标题 ", -1))]),
        _: 1
      })]),
      default: l(() => [kt.value ? (c(), v("div", nJ, [e("div", oJ, [e("div", iJ, [r[510] || (r[510] = e("span", {
        class: "info-label"
      }, "分组名称：", -1)), e("span", sJ, h(kt.value.name), 1), a(D, {
        size: "small",
        link: "",
        onClick: r[149] || (r[149] = k => dl(kt.value)),
        style: {
          "margin-left": "12px"
        }
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(qn))]),
          _: 1
        }), r[509] || (r[509] = g(" 编辑名称 ", -1))]),
        _: 1
      })]), e("div", rJ, [r[511] || (r[511] = e("span", {
        class: "info-label"
      }, "标题数量：", -1)), e("span", uJ, h(kt.value.titles.length) + " 个", 1)])]), e("div", cJ, [kt.value.titles.length === 0 ? (c(), v("div", dJ, [...r[512] || (r[512] = [e("p", null, "该组暂无标题", -1)])])) : (c(), v("div", vJ, [(c(!0), v(Ue, null, gt(kt.value.titles, k => (c(), v("div", {
        key: k.id,
        class: "view-title-row"
      }, [e("div", mJ, [e("span", gJ, h(k.text), 1)]), e("div", fJ, [a(D, {
        size: "small",
        link: "",
        onClick: ea => tn(kt.value, k)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(qn))]),
          _: 1
        }), r[513] || (r[513] = g(" 编辑 ", -1))]),
        _: 1
      }, 8, ["onClick"]), a(D, {
        size: "small",
        link: "",
        type: "danger",
        onClick: ea => zt(kt.value.id, k.id)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(zn))]),
          _: 1
        }), r[514] || (r[514] = g(" 删除 ", -1))]),
        _: 1
      }, 8, ["onClick"]), a(D, {
        size: "small",
        link: "",
        onClick: ea => Cn(k.text)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Eo))]),
          _: 1
        }), r[515] || (r[515] = g(" 复制 ", -1))]),
        _: 1
      }, 8, ["onClick"])])]))), 128))]))])])) : M("", !0)]),
      _: 1
    }, 8, ["modelValue", "title"]), a(vl, {
      modelValue: he.value,
      "onUpdate:modelValue": r[155] || (r[155] = k => he.value = k),
      title: ((x1 = Wt.value) == null ? void 0 : x1.name) || "编辑标题",
      width: "900px"
    }, {
      footer: l(() => [a(D, {
        onClick: r[154] || (r[154] = k => he.value = !1)
      }, {
        default: l(() => [...r[518] || (r[518] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: gl
      }, {
        default: l(() => [...r[519] || (r[519] = [g("保存", -1)])]),
        _: 1
      })]),
      default: l(() => [Wt.value ? (c(), v("div", pJ, [e("div", yJ, [e("span", hJ, "分组：" + h(Wt.value.name), 1), e("span", bJ, "共 " + h(Oa(Wt.value)) + " 个标题（一行一个）", 1)]), a(Go, {
        model: H.value,
        "label-width": "0"
      }, {
        default: l(() => [a(Bl, null, {
          default: l(() => [a(Vl, {
            modelValue: H.value.content,
            "onUpdate:modelValue": r[153] || (r[153] = k => H.value.content = k),
            type: "textarea",
            autosize: {
              minRows: 10,
              maxRows: 20
            },
            placeholder: "每行输入一个标题，支持多行",
            style: {
              resize: "vertical",
              "overflow-y": "auto"
            }
          }, null, 8, ["modelValue"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])])) : M("", !0)]),
      _: 1
    }, 8, ["modelValue", "title"]), a(vl, {
      modelValue: _e.value,
      "onUpdate:modelValue": r[158] || (r[158] = k => _e.value = k),
      title: "修改组名",
      width: "500px"
    }, {
      footer: l(() => [a(D, {
        onClick: r[157] || (r[157] = k => _e.value = !1)
      }, {
        default: l(() => [...r[520] || (r[520] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: Nl
      }, {
        default: l(() => [...r[521] || (r[521] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [a(Go, {
        model: ze.value,
        "label-width": "100px"
      }, {
        default: l(() => [a(Bl, {
          label: "分组名称",
          required: ""
        }, {
          default: l(() => [a(Vl, {
            modelValue: ze.value.name,
            "onUpdate:modelValue": r[156] || (r[156] = k => ze.value.name = k),
            placeholder: "请输入分组名称",
            maxlength: "50"
          }, null, 8, ["modelValue"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: ba.value,
      "onUpdate:modelValue": r[166] || (r[166] = k => ba.value = k),
      title: "简易标题生成",
      width: "700px",
      onClose: Ja
    }, {
      footer: l(() => [a(D, {
        onClick: r[165] || (r[165] = k => ba.value = !1)
      }, {
        default: l(() => [...r[523] || (r[523] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        loading: xa.value,
        onClick: Ul
      }, {
        default: l(() => [g(" 生成标题（消耗 " + h(P(kd)(Qt.value.count)) + " 点） ", 1)]),
        _: 1
      }, 8, ["loading"])]),
      default: l(() => [a(Go, {
        model: Qt.value,
        "label-width": "100px"
      }, {
        default: l(() => [a(Bl, {
          label: "标题库",
          required: ""
        }, {
          default: l(() => [e("div", wJ, [a(ni, {
            modelValue: Qt.value.libraryId,
            "onUpdate:modelValue": r[159] || (r[159] = k => Qt.value.libraryId = k),
            placeholder: "选择标题库",
            filterable: "",
            style: {
              flex: "1"
            },
            onChange: m.handleGenerateLibrarySelectChange
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(Q.value, k => (c(), ye(Jn, {
              key: k.id,
              label: k.name,
              value: k.id
            }, null, 8, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue", "onChange"]), a(D, {
            onClick: r[160] || (r[160] = k => {
              Qt.value.isNewLibrary = !0, Qt.value.libraryId = null
            })
          }, {
            default: l(() => [...r[522] || (r[522] = [g(" 新建 ", -1)])]),
            _: 1
          })])]),
          _: 1
        }), Qt.value.isNewLibrary ? (c(), ye(Bl, {
          key: 0,
          label: "标题库名称"
        }, {
          default: l(() => [a(Vl, {
            modelValue: Qt.value.libraryName,
            "onUpdate:modelValue": r[161] || (r[161] = k => Qt.value.libraryName = k),
            placeholder: "不填写则默认：当前日期+序号",
            maxlength: "50"
          }, null, 8, ["modelValue"]), e("div", _J, "不填写将自动生成：" + h(Lt()), 1)]),
          _: 1
        })) : M("", !0), a(Bl, {
          label: "关键词",
          required: ""
        }, {
          default: l(() => [a(Vl, {
            modelValue: Qt.value.keyword,
            "onUpdate:modelValue": r[162] || (r[162] = k => Qt.value.keyword = k),
            placeholder: "请输入关键词，AI将基于此生成标题",
            maxlength: "100"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "标题要求描述"
        }, {
          default: l(() => [a(Vl, {
            modelValue: Qt.value.requirement,
            "onUpdate:modelValue": r[163] || (r[163] = k => Qt.value.requirement = k),
            type: "textarea",
            autosize: {
              minRows: 3,
              maxRows: 6
            },
            placeholder: "补充对标题的具体要求，如目标受众、卖点、语气、需要避开的敏感词等",
            maxlength: "500",
            "show-word-limit": ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "生成数量"
        }, {
          default: l(() => [a(ni, {
            modelValue: Qt.value.count,
            "onUpdate:modelValue": r[164] || (r[164] = k => Qt.value.count = k),
            style: {
              width: "100%"
            }
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(P(_d), k => (c(), ye(Jn, {
              key: k,
              label: `${k} 个（消耗 ${P(kd)(k)} 点）`,
              value: k
            }, null, 8, ["label", "value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"]), e("div", kJ, "不同数量消耗的创作点数：" + h(P(_d).map(k => `${k}个=${P(kd)(k)}点`).join("，")), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: me.value,
      "onUpdate:modelValue": r[168] || (r[168] = k => me.value = k),
      title: "生成结果",
      width: "800px"
    }, {
      footer: l(() => [a(D, {
        onClick: r[167] || (r[167] = k => me.value = !1)
      }, {
        default: l(() => [...r[527] || (r[527] = [g("关闭", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", CJ, [e("div", AJ, [e("span", null, "共生成 " + h(Kt.value.length) + " 个标题", 1), e("div", IJ, [a(D, {
        size: "small",
        onClick: Dn
      }, {
        default: l(() => [...r[524] || (r[524] = [g("下载全部", -1)])]),
        _: 1
      }), a(D, {
        size: "small",
        type: "primary",
        onClick: Tn
      }, {
        default: l(() => [...r[525] || (r[525] = [g("保存到标题库", -1)])]),
        _: 1
      })])]), e("div", xJ, [(c(!0), v(Ue, null, gt(Kt.value, (k, ea) => (c(), v("div", {
        key: ea,
        class: "result-item"
      }, [e("div", SJ, h(k), 1), e("div", EJ, [a(D, {
        size: "small",
        link: "",
        onClick: $a => Cn(k)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Eo))]),
          _: 1
        })]),
        _: 1
      }, 8, ["onClick"]), a(D, {
        size: "small",
        link: "",
        type: "primary",
        onClick: $a => _l(k)
      }, {
        default: l(() => [...r[526] || (r[526] = [g(" 保存 ", -1)])]),
        _: 1
      }, 8, ["onClick"])])]))), 128))])])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: ce.value,
      "onUpdate:modelValue": r[171] || (r[171] = k => ce.value = k),
      title: ((S1 = ue.value) == null ? void 0 : S1.productName) || "套餐权益",
      width: d.value ? "95%" : "900px",
      class: "product-benefits-dialog"
    }, {
      default: l(() => [ue.value ? (c(), v("div", TJ, [e("div", $J, [e("div", PJ, [e("h3", VJ, h(ue.value.productName), 1), e("div", zJ, [e("span", LJ, h(ue.value.categoryName), 1), e("span", DJ, "￥" + h(ue.value.price), 1)])])]), e("div", MJ, [e("div", OJ, [e("h4", BJ, [a(L, {
        class: "benefits-icon"
      }, {
        default: l(() => [a(P(Xo))]),
        _: 1
      }), r[528] || (r[528] = g(" 套餐权益 ", -1))]), e("div", NJ, [e("div", UJ, [a(L, {
        class: "benefit-check"
      }, {
        default: l(() => [a(P(ts))]),
        _: 1
      }), r[529] || (r[529] = e("span", null, "永久使用权限，无时间限制", -1))]), e("div", RJ, [a(L, {
        class: "benefit-check"
      }, {
        default: l(() => [a(P(ts))]),
        _: 1
      }), r[530] || (r[530] = e("span", null, "免费更新，持续获得最新版本", -1))]), e("div", jJ, [a(L, {
        class: "benefit-check"
      }, {
        default: l(() => [a(P(ts))]),
        _: 1
      }), r[531] || (r[531] = e("span", null, "专业技术支持，7×24小时在线服务", -1))]), e("div", qJ, [a(L, {
        class: "benefit-check"
      }, {
        default: l(() => [a(P(ts))]),
        _: 1
      }), r[532] || (r[532] = e("span", null, "专属客服通道，优先处理问题", -1))]), e("div", FJ, [a(L, {
        class: "benefit-check"
      }, {
        default: l(() => [a(P(ts))]),
        _: 1
      }), r[533] || (r[533] = e("span", null, "完整资料包，包含所有相关资源", -1))])])]), e("div", WJ, [e("h4", GJ, [a(L, {
        class: "benefits-icon"
      }, {
        default: l(() => [a(P(To))]),
        _: 1
      }), r[534] || (r[534] = g(" 下载信息 ", -1))]), e("div", JJ, [e("div", HJ, [r[535] || (r[535] = e("span", {
        class: "info-label"
      }, "订单编号：", -1)), e("span", QJ, h(ue.value.orderNo), 1)]), e("div", KJ, [r[536] || (r[536] = e("span", {
        class: "info-label"
      }, "支付时间：", -1)), e("span", YJ, h(ue.value.payTime), 1)]), e("div", XJ, [r[537] || (r[537] = e("span", {
        class: "info-label"
      }, "支付方式：", -1)), e("span", ZJ, h(f1(ue.value.paymentMethod)), 1)])])]), e("div", eH, [e("h4", tH, [a(L, {
        class: "benefits-icon"
      }, {
        default: l(() => [a(P(Vs))]),
        _: 1
      }), r[538] || (r[538] = g(" 使用说明 ", -1))]), r[539] || (r[539] = e("div", {
        class: "usage-content"
      }, [e("p", null, '1. 您可以通过"复制下载地址"或"直接下载"按钮获取资料包'), e("p", null, "2. 下载后请妥善保管，建议备份到云端"), e("p", null, "3. 如有任何问题，可随时联系客服获取帮助"), e("p", null, "4. 资料包会持续更新，请关注最新版本")], -1))])]), e("div", aH, [a(D, {
        type: "primary",
        size: "large",
        onClick: r[169] || (r[169] = k => Dw(ue.value.downloadUrl))
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Eo))]),
          _: 1
        }), r[540] || (r[540] = g(" 复制下载地址 ", -1))]),
        _: 1
      }), a(D, {
        type: "primary",
        size: "large",
        onClick: r[170] || (r[170] = k => Mw(ue.value.downloadUrl))
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(To))]),
          _: 1
        }), r[541] || (r[541] = g(" 直接下载 ", -1))]),
        _: 1
      })])])) : M("", !0)]),
      _: 1
    }, 8, ["modelValue", "title", "width"]), a(h_, {
      modelValue: Ca.value,
      "onUpdate:modelValue": r[172] || (r[172] = k => Ca.value = k),
      title: "选择标签页",
      direction: "btt",
      size: "auto",
      "with-header": !0
    }, {
      default: l(() => [e("div", lH, [(c(!0), v(Ue, null, gt(nw.value, k => (c(), v("div", {
        key: k.name,
        class: Pe(["tab-drawer-item", {
          active: Y.value === k.name
        }]),
        onClick: ea => {
          Y.value = k.name, Ca.value = !1
        }
      }, [a(L, {
        class: "tab-drawer-icon"
      }, {
        default: l(() => [(c(), ye(Jo(k.icon)))]),
        _: 2
      }, 1024), e("span", oH, [(c(!0), v(Ue, null, gt(ml(k.label), (ea, $a) => (c(), v("span", {
        key: $a,
        class: "tab-drawer-label-line"
      }, h(ea), 1))), 128))]), Y.value === k.name ? (c(), ye(L, {
        key: 0,
        class: "tab-drawer-check"
      }, {
        default: l(() => [a(P(Zo))]),
        _: 1
      })) : M("", !0)], 10, nH))), 128))])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: qe.value,
      "onUpdate:modelValue": r[173] || (r[173] = k => qe.value = k),
      width: d.value ? "90%" : "600px",
      "align-center": "",
      "append-to-body": "",
      class: "material-preview-dialog"
    }, {
      default: l(() => [e("div", iH, [Me.value ? (c(), v("img", {
        key: 0,
        src: Me.value,
        alt: "素材预览",
        class: "material-preview-image"
      }, null, 8, sH)) : M("", !0)])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: xe.value,
      "onUpdate:modelValue": r[175] || (r[175] = k => xe.value = k),
      title: "管理分组",
      width: d.value ? "94%" : "520px",
      "align-center": "",
      "append-to-body": "",
      "destroy-on-close": "",
      class: "material-group-manage-dialog"
    }, {
      footer: l(() => [a(D, {
        onClick: r[174] || (r[174] = k => xe.value = !1)
      }, {
        default: l(() => [...r[544] || (r[544] = [g("关闭", -1)])]),
        _: 1
      })]),
      default: l(() => [(Be.value || []).length === 0 ? (c(), v("div", rH, " 暂无分组 ")) : (c(), v("div", uH, [(c(!0), v(Ue, null, gt(Be.value, k => (c(), v("div", {
        key: k.id,
        class: "material-group-manage-item"
      }, [e("div", cH, h(k.name), 1), e("div", dH, [a(D, {
        size: "small",
        type: "primary",
        link: "",
        onClick: ea => Ea(k)
      }, {
        default: l(() => [...r[542] || (r[542] = [g(" 改名 ", -1)])]),
        _: 1
      }, 8, ["onClick"]), a(D, {
        size: "small",
        type: "danger",
        link: "",
        onClick: ea => ft(k.id)
      }, {
        default: l(() => [...r[543] || (r[543] = [g(" 删除 ", -1)])]),
        _: 1
      }, 8, ["onClick"])])]))), 128))]))]),
      _: 1
    }, 8, ["modelValue", "width"]), a(ri, {
      "recharge-type": "dialog",
      "distribution-link": Wa.value.is_daili === 1 ? "/user?tab=distribution2" : "/user?tab=distribution",
      onOpenRecharge: rm,
      onOpenLogin: Qc,
      class: "user-center-floating-buttons"
    }, null, 8, ["distribution-link"]), a(Wn, {
      modelValue: gu.value,
      "onUpdate:modelValue": r[176] || (r[176] = k => gu.value = k)
    }, null, 8, ["modelValue"]), a(ED, {
      visible: Z.value,
      "onUpdate:visible": r[177] || (r[177] = k => Z.value = k),
      "max-files": 10,
      uploading: pt.value,
      "uploaded-count": Et.value,
      onConfirm: Qe
    }, null, 8, ["visible", "uploading", "uploaded-count"]), a(vl, {
      modelValue: ai.value,
      "onUpdate:modelValue": r[182] || (r[182] = k => ai.value = k),
      title: "卡密购买",
      width: d.value ? "90%" : zQ,
      "align-center": "",
      class: "card-purchase-dialog"
    }, {
      footer: l(() => [e("div", EH, [a(D, {
        onClick: r[181] || (r[181] = k => ai.value = !1)
      }, {
        default: l(() => [...r[554] || (r[554] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: nr.value === "wxpay" ? "success" : "danger",
        loading: sm.value,
        onClick: Us
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(Tm))]),
          _: 1
        }), g(" " + h(nr.value === "wxpay" ? "立即微信支付" : "立即余额支付"), 1)]),
        _: 1
      }, 8, ["type", "loading"])])]),
      default: l(() => [e("div", vH, [r[553] || (r[553] = e("div", {
        class: "purchase-info mb-4"
      }, [e("p", {
        class: "text-gray-600 mb-2"
      }, "代理专享：购买卡密用于推广和销售，享受代理5折专属价格")], -1)), e("div", mH, [(c(!0), v(Ue, null, gt(Mi.value, k => (c(), v("div", {
        key: k.id,
        class: Pe(["card-package-item", {
          "card-package-active": ys.value === k.id
        }]),
        onClick: ea => ys.value = k.id
      }, [e("div", fH, [e("div", pH, h(k.name), 1), k.badge ? (c(), v("div", yH, h(k.badge), 1)) : M("", !0)]), e("div", hH, [e("div", bH, [r[545] || (r[545] = g("￥", -1)), e("span", wH, h(k.price), 1)]), e("div", _H, "¥" + h(k.originalPrice), 1), e("div", kH, h(k.spec), 1)])], 10, gH))), 128))]), e("div", CH, [r[546] || (r[546] = e("label", {
        class: "block mb-2"
      }, "购买数量：", -1)), a(b_, {
        modelValue: Di.value,
        "onUpdate:modelValue": r[178] || (r[178] = k => Di.value = k),
        min: 1,
        max: 100,
        precision: 0,
        size: "large",
        class: "w-full"
      }, null, 8, ["modelValue"])]), e("div", AH, [r[548] || (r[548] = e("label", {
        class: "block mb-2"
      }, "支付方式：", -1)), a(fi, {
        modelValue: nr.value,
        "onUpdate:modelValue": r[179] || (r[179] = k => nr.value = k),
        class: "card-pay-type-group",
        onChange: yw
      }, {
        default: l(() => [a(Zn, {
          value: "wxpay"
        }, {
          default: l(() => [...r[547] || (r[547] = [g("微信支付", -1)])]),
          _: 1
        }), a(Zn, {
          value: "wallet"
        }, {
          default: l(() => [g("余额支付（可提现：" + h(Jc.value.toFixed(2)) + "）", 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["modelValue"])]), e("div", IH, [r[549] || (r[549] = e("div", {
        class: "total-label"
      }, "合计：", -1)), e("div", xH, "￥" + h(yu.value), 1)]), e("div", SH, [r[551] || (r[551] = e("p", null, "• 支付成功后，卡密将发送到您的账户", -1)), r[552] || (r[552] = e("p", null, "• 卡密可用于推广和销售", -1)), e("p", null, [r[550] || (r[550] = g("• 如有问题请联系客服 ", -1)), a(L, {
        class: "service-icon",
        onClick: r[180] || (r[180] = lt(k => hu.value = !0, ["stop"]))
      }, {
        default: l(() => [a(P(Nu))]),
        _: 1
      })])])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: hn.value,
      "onUpdate:modelValue": r[183] || (r[183] = k => hn.value = k),
      title: "微信支付",
      width: d.value ? "90%" : "400px",
      "align-center": "",
      class: "pay-qrcode-dialog",
      "close-on-click-modal": !1
    }, {
      footer: l(() => [e("div", UH, [a(D, {
        onClick: na
      }, {
        default: l(() => [...r[560] || (r[560] = [g("取消支付", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: la,
        loading: ia.value
      }, {
        default: l(() => [...r[561] || (r[561] = [g(" 我已支付 ", -1)])]),
        _: 1
      }, 8, ["loading"])])]),
      default: l(() => [e("div", TH, [e("div", $H, [r[555] || (r[555] = e("span", {
        class: "pay-amount-label"
      }, "支付金额", -1)), e("span", PH, "￥" + h(yu.value), 1)]), e("div", VH, [ko.value ? (c(), v("div", zH, [a(L, {
        class: "loading-icon"
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      }), r[556] || (r[556] = e("span", null, "正在生成支付二维码...", -1))])) : oo.value ? (c(), v("div", LH, [e("img", {
        src: oo.value,
        alt: "微信支付二维码"
      }, null, 8, DH)])) : (c(), v("div", MH, [a(L, null, {
        default: l(() => [a(P(Ri))]),
        _: 1
      }), r[557] || (r[557] = e("span", null, "二维码生成失败，请重试", -1))]))]), e("div", OH, [r[558] || (r[558] = e("p", null, "请使用微信扫描二维码完成支付", -1)), e("p", BH, "订单号：" + h(Un.value), 1)]), Rn.value ? (c(), v("div", NH, [a(L, {
        class: "loading-icon"
      }, {
        default: l(() => [a(P(Fl))]),
        _: 1
      }), r[559] || (r[559] = e("span", null, "等待支付中...", -1))])) : M("", !0)])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: Ks.value,
      "onUpdate:modelValue": r[187] || (r[187] = k => Ks.value = k),
      "show-close": !0,
      width: d.value ? "92%" : "560px",
      "align-center": "",
      class: "coupon-redeem-dialog"
    }, {
      header: l(() => [...r[562] || (r[562] = [e("div", {
        class: "coupon-redeem-header"
      }, [e("div", {
        class: "coupon-redeem-header-badge"
      }, "官方福利"), e("div", {
        class: "coupon-redeem-header-title"
      }, "🎁 优惠口令兑换"), e("div", {
        class: "coupon-redeem-header-sub"
      }, "输入专属口令 立享代金券大礼")], -1)])]),
      footer: l(() => [e("div", FH, [a(D, {
        class: "coupon-redeem-cancel",
        onClick: r[186] || (r[186] = k => Ks.value = !1)
      }, {
        default: l(() => [...r[569] || (r[569] = [g("再想想", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        class: "coupon-redeem-submit",
        onClick: uw
      }, {
        default: l(() => [...r[570] || (r[570] = [g("立即领取", -1)])]),
        _: 1
      })])]),
      default: l(() => [e("div", RH, [r[567] || (r[567] = e("div", {
        class: "coupon-redeem-prize mystery"
      }, [e("div", {
        class: "coupon-redeem-prize-item mystery-box"
      }, [e("div", {
        class: "prize-amount mystery-icon"
      }, "🎁"), e("div", {
        class: "prize-cond"
      }, "神秘代金券")]), e("div", {
        class: "coupon-redeem-prize-divider"
      }, "+"), e("div", {
        class: "coupon-redeem-prize-item mystery-box gold"
      }, [e("div", {
        class: "prize-amount mystery-icon"
      }, "🎁"), e("div", {
        class: "prize-cond"
      }, "神秘代金券")]), e("div", {
        class: "coupon-redeem-prize-divider"
      }, "+"), e("div", {
        class: "coupon-redeem-prize-item mystery-box purple"
      }, [e("div", {
        class: "prize-amount mystery-icon"
      }, "🎁"), e("div", {
        class: "prize-cond"
      }, "神秘代金券")])], -1)), r[568] || (r[568] = e("div", {
        class: "coupon-redeem-mystery-tip"
      }, "输入正确口令解锁多重大额代金券，惊喜面额领取后揭晓！", -1)), e("div", jH, [a(Vl, {
        modelValue: Ys.value,
        "onUpdate:modelValue": r[184] || (r[184] = k => Ys.value = k),
        placeholder: "请输入 5 位优惠口令（如 AB232）",
        size: "large",
        maxlength: "5",
        clearable: "",
        class: "coupon-redeem-input-el",
        onInput: r[185] || (r[185] = k => Ys.value = String(Ys.value || "").toUpperCase())
      }, null, 8, ["modelValue"])]), e("div", qH, [r[564] || (r[564] = e("p", null, [e("span", {
        class: "dot"
      }, "✦"), g(" 多档代金券随机发放，面额惊喜揭晓")], -1)), r[565] || (r[565] = e("p", null, [e("span", {
        class: "dot"
      }, "✦"), g(" 有效期：领取后 24 小时内有效")], -1)), r[566] || (r[566] = e("p", null, [e("span", {
        class: "dot"
      }, "✦"), g(" 每个用户每 30 天仅可领取 1 次")], -1)), e("p", null, [r[563] || (r[563] = e("span", {
        class: "dot"
      }, "✦", -1)), g(" 本优惠券解释权归" + h(O.value) + "平台所有", 1)])])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: fu.value,
      "onUpdate:modelValue": r[191] || (r[191] = k => fu.value = k),
      title: "卡密兑换",
      width: d.value ? "90%" : "500px",
      "align-center": "",
      class: "redeem-dialog"
    }, {
      footer: l(() => [a(D, {
        onClick: r[190] || (r[190] = k => fu.value = !1)
      }, {
        default: l(() => [...r[574] || (r[574] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        loading: om.value,
        onClick: vo
      }, {
        default: l(() => [...r[575] || (r[575] = [g("立即兑换", -1)])]),
        _: 1
      }, 8, ["loading"])]),
      default: l(() => [e("div", WH, [a(Vl, {
        modelValue: pu.value,
        "onUpdate:modelValue": r[188] || (r[188] = k => pu.value = k),
        placeholder: "请输入卡密兑换码",
        size: "large",
        class: "redeem-input",
        clearable: ""
      }, null, 8, ["modelValue"]), e("div", GH, [r[572] || (r[572] = e("p", null, "• 请输入正确的卡密兑换码", -1)), r[573] || (r[573] = e("p", null, "• 兑换后立即生效", -1)), e("p", null, [r[571] || (r[571] = g("• 如有问题请联系客服 ", -1)), a(L, {
        class: "service-icon",
        onClick: r[189] || (r[189] = lt(k => hu.value = !0, ["stop"]))
      }, {
        default: l(() => [a(P(Nu))]),
        _: 1
      })])])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: nu.value,
      "onUpdate:modelValue": r[193] || (r[193] = k => nu.value = k),
      title: "作品二维码",
      width: "340px",
      center: "",
      class: "live-code-dialog"
    }, {
      footer: l(() => [a(D, {
        onClick: r[192] || (r[192] = k => nu.value = !1)
      }, {
        default: l(() => [...r[577] || (r[577] = [g("关闭", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        disabled: !gs.value,
        onClick: Qb
      }, {
        default: l(() => [...r[578] || (r[578] = [g("下载二维码", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      default: l(() => [e("div", JH, [gs.value ? (c(), v("img", {
        key: 0,
        src: gs.value,
        alt: "作品二维码",
        class: "live-code-img"
      }, null, 8, HH)) : M("", !0), e("div", QH, [e("p", KH, h(Hv.value), 1), r[576] || (r[576] = e("p", {
        class: "live-code-tip-sub"
      }, "手机扫码即可打开该作品，跳转到对应平台发布。", -1))])])]),
      _: 1
    }, 8, ["modelValue"]), a(Lp, {
      modelValue: jv.value,
      "onUpdate:modelValue": r[194] || (r[194] = k => jv.value = k),
      "all-pending": "",
      "all-pending-count": Li.value,
      onDone: Gb
    }, null, 8, ["modelValue", "all-pending-count"]), a(vl, {
      modelValue: Hs.value,
      "onUpdate:modelValue": r[195] || (r[195] = k => Hs.value = k),
      title: "",
      width: "360px",
      center: "",
      onClose: ew
    }, {
      footer: l(() => [e("div", XH, [a(D, {
        onClick: Zb
      }, {
        default: l(() => [...r[581] || (r[581] = [g("确定", -1)])]),
        _: 1
      })])]),
      default: l(() => [e("div", YH, [e("canvas", {
        ref_key: "qrCanvas",
        ref: Xr
      }, null, 512), r[579] || (r[579] = e("div", {
        class: "qr-title-with-icon"
      }, [e("span", null, [g("可用微信"), e("i", {
        class: "fa-brands fa-weixin",
        style: {
          "font-size": "18px",
          color: "#07c160",
          "margin-left": "4px"
        }
      }), g("扫码来发布")])], -1)), r[580] || (r[580] = e("p", {
        class: "qr-tip"
      }, "已标记发布，请用手机扫描此二维码发布", -1))])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: Se.value,
      "onUpdate:modelValue": r[201] || (r[201] = k => Se.value = k),
      title: "发布助手账号配置",
      width: d.value ? "90%" : "800px",
      center: "",
      class: "publish-config-dialog",
      onClose: _c
    }, {
      default: l(() => [e("div", ZH, [e("div", eQ, [e("div", tQ, [a(D, {
        type: Ct.value === "groups" ? "primary" : "default",
        onClick: r[196] || (r[196] = k => Ct.value = "groups"),
        size: "small",
        class: "config-tab-btn"
      }, {
        default: l(() => [...r[582] || (r[582] = [g(" 账号列表 ", -1)])]),
        _: 1
      }, 8, ["type"]), a(D, {
        type: Ct.value === "add" ? "primary" : "default",
        onClick: r[197] || (r[197] = k => Ct.value = "add"),
        size: "small",
        class: "config-tab-btn"
      }, {
        default: l(() => [...r[583] || (r[583] = [g(" 增加账号 ", -1)])]),
        _: 1
      }, 8, ["type"])]), Ct.value === "groups" && Ml.value.length > 0 ? (c(), ye(D, {
        key: 0,
        type: "danger",
        size: "small",
        onClick: xo,
        disabled: Ml.value.length === 0,
        class: "clear-all-accounts-btn"
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(zn))]),
          _: 1
        }), r[584] || (r[584] = g(" 清空所有账号 ", -1))]),
        _: 1
      }, 8, ["disabled"])) : M("", !0)]), Ct.value === "groups" ? (c(), v("div", aQ, [e("div", lQ, [a(Xa, {
        data: Ml.value,
        style: {
          width: "100%"
        },
        "empty-text": "暂无账号",
        "row-key": "id",
        class: "account-table-desktop"
      }, {
        default: l(() => [a(Zt, {
          label: "谷歌ID",
          width: "120",
          align: "center"
        }, {
          default: l(({
            row: k
          }) => [e("span", nQ, h(k.googleId), 1)]),
          _: 1
        }), a(Zt, {
          prop: "nickname",
          label: "账号昵称",
          "min-width": "200"
        }), a(Zt, {
          label: "可发作品数量",
          width: "130",
          align: "center"
        }, {
          default: l(({
            row: k
          }) => [e("span", null, h(k.note_count !== void 0 ? k.note_count : 0), 1)]),
          _: 1
        }), a(Zt, {
          label: "发布平台",
          width: "120",
          align: "center"
        }, {
          default: l(({
            row: k
          }) => [a(wl, {
            type: k.platform === "xhs" ? "danger" : "primary"
          }, {
            default: l(() => [g(h(k.platform === "xhs" ? "图文" : "短视频"), 1)]),
            _: 2
          }, 1032, ["type"])]),
          _: 1
        }), a(Zt, {
          label: "操作",
          width: "150",
          fixed: "right"
        }, {
          default: l(({
            row: k
          }) => [a(D, {
            size: "small",
            link: "",
            onClick: ea => Ol(k)
          }, {
            default: l(() => [a(L, null, {
              default: l(() => [a(P(qn))]),
              _: 1
            }), r[585] || (r[585] = g(" 编辑 ", -1))]),
            _: 1
          }, 8, ["onClick"]), a(D, {
            size: "small",
            link: "",
            type: "danger",
            onClick: ea => Sn(k.id)
          }, {
            default: l(() => [a(L, null, {
              default: l(() => [a(P(zn))]),
              _: 1
            }), r[586] || (r[586] = g(" 删除 ", -1))]),
            _: 1
          }, 8, ["onClick"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["data"]), e("div", oQ, [(c(!0), v(Ue, null, gt(Ml.value, k => (c(), v("div", {
        key: k.id,
        class: "account-card-item"
      }, [e("div", iQ, [e("div", sQ, [e("div", rQ, "谷歌ID: " + h(k.googleId), 1), a(wl, {
        type: k.platform === "xhs" ? "danger" : "primary",
        size: "small"
      }, {
        default: l(() => [g(h(k.platform === "xhs" ? "图文" : "短视频"), 1)]),
        _: 2
      }, 1032, ["type"])]), e("div", uQ, h(k.nickname), 1), e("div", cQ, [r[587] || (r[587] = g(" 可发作品数量：", -1)), e("span", null, h(k.note_count !== void 0 ? k.note_count : 0), 1)]), e("div", dQ, [a(D, {
        size: "small",
        link: "",
        onClick: ea => Ol(k)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(qn))]),
          _: 1
        }), r[588] || (r[588] = g(" 编辑 ", -1))]),
        _: 1
      }, 8, ["onClick"]), a(D, {
        size: "small",
        link: "",
        type: "danger",
        onClick: ea => Sn(k.id)
      }, {
        default: l(() => [a(L, null, {
          default: l(() => [a(P(zn))]),
          _: 1
        }), r[589] || (r[589] = g(" 删除 ", -1))]),
        _: 1
      }, 8, ["onClick"])])])]))), 128)), Ml.value.length === 0 ? (c(), v("div", vQ, " 暂无账号 ")) : M("", !0)])])])) : M("", !0), Ct.value === "add" ? (c(), v("div", mQ, [a(Go, {
        model: wa.value,
        rules: Al,
        ref_key: "accountFormRef",
        ref: tl,
        "label-position": "top",
        class: "add-account-form"
      }, {
        default: l(() => [a(Bl, {
          label: "账号谷歌ID",
          prop: "googleId"
        }, {
          default: l(() => [a(Vl, {
            modelValue: wa.value.googleId,
            "onUpdate:modelValue": r[198] || (r[198] = k => wa.value.googleId = k),
            placeholder: "自动递增，从1开始",
            disabled: "",
            class: "google-id-input"
          }, {
            prefix: l(() => [...r[590] || (r[590] = [e("span", {
              class: "input-prefix-text"
            }, "ID:", -1)])]),
            _: 1
          }, 8, ["modelValue"]), e("div", gQ, "谷歌ID将自动从 " + h(Tl.value) + " 开始递增", 1)]),
          _: 1
        }), a(Bl, {
          label: "账号昵称",
          prop: "nickname"
        }, {
          default: l(() => [a(Vl, {
            modelValue: wa.value.nickname,
            "onUpdate:modelValue": r[199] || (r[199] = k => wa.value.nickname = k),
            placeholder: "请输入账号昵称",
            maxlength: "50",
            "show-word-limit": ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "发布平台",
          prop: "platform"
        }, {
          default: l(() => [a(ni, {
            modelValue: wa.value.platform,
            "onUpdate:modelValue": r[200] || (r[200] = k => wa.value.platform = k),
            placeholder: "请选择发布平台",
            style: {
              width: "100%"
            }
          }, {
            default: l(() => [a(Jn, {
              label: "DY",
              value: "douyin"
            }), a(Jn, {
              label: "XH",
              value: "xhs"
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, null, {
          default: l(() => [a(D, {
            type: "primary",
            onClick: fo,
            loading: pl.value
          }, {
            default: l(() => [g(h(cl.value ? "更新账号" : "创建账号"), 1)]),
            _: 1
          }, 8, ["loading"]), a(D, {
            onClick: Bn
          }, {
            default: l(() => [...r[591] || (r[591] = [g("重置", -1)])]),
            _: 1
          }), cl.value ? (c(), ye(D, {
            key: 0,
            onClick: Bn
          }, {
            default: l(() => [...r[592] || (r[592] = [g("取消编辑", -1)])]),
            _: 1
          })) : M("", !0)]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])])) : M("", !0)])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: jo.value,
      "onUpdate:modelValue": r[204] || (r[204] = k => jo.value = k),
      title: "批量分配作品",
      width: d.value ? "90%" : "500px",
      center: "",
      class: "batch-assign-dialog"
    }, {
      footer: l(() => [a(D, {
        onClick: r[203] || (r[203] = k => jo.value = !1)
      }, {
        default: l(() => [...r[596] || (r[596] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        onClick: Uv,
        disabled: !Hl.value || bn.value.length === 0
      }, {
        default: l(() => [...r[597] || (r[597] = [g(" 确定分配 ", -1)])]),
        _: 1
      }, 8, ["disabled"])]),
      default: l(() => [e("div", fQ, [e("div", pQ, [e("p", null, [r[593] || (r[593] = g("已选择 ", -1)), e("span", yQ, h(bn.value.length), 1), r[594] || (r[594] = g(" 个作品", -1))]), r[595] || (r[595] = e("p", {
        class: "assign-tip"
      }, "请选择要将这些作品分配到的账号", -1))]), e("div", hQ, [a(ni, {
        modelValue: Hl.value,
        "onUpdate:modelValue": r[202] || (r[202] = k => Hl.value = k),
        placeholder: "请选择账号",
        style: {
          width: "100%"
        },
        clearable: ""
      }, {
        default: l(() => [(c(!0), v(Ue, null, gt(Ml.value, k => (c(), ye(Jn, {
          key: k.id,
          label: `${k.nickname} (${k.platform==="xhs"?"图文":"短视频"})`,
          value: k.googleId
        }, {
          default: l(() => [e("div", bQ, [e("span", wQ, h(k.nickname), 1), a(wl, {
            type: k.platform === "xhs" ? "danger" : "primary",
            size: "small"
          }, {
            default: l(() => [g(h(k.platform === "xhs" ? "图文" : "短视频"), 1)]),
            _: 2
          }, 1032, ["type"])])]),
          _: 2
        }, 1032, ["label", "value"]))), 128))]),
        _: 1
      }, 8, ["modelValue"])])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(vl, {
      modelValue: vt.value,
      "onUpdate:modelValue": r[208] || (r[208] = k => vt.value = k),
      title: "绑定邮箱",
      width: "400px",
      onClose: cm
    }, {
      footer: l(() => [a(D, {
        onClick: r[207] || (r[207] = k => vt.value = !1)
      }, {
        default: l(() => [...r[598] || (r[598] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        loading: Sl.value,
        onClick: Iw
      }, {
        default: l(() => [...r[599] || (r[599] = [g("确定", -1)])]),
        _: 1
      }, 8, ["loading"])]),
      default: l(() => [a(Go, {
        model: sa.value,
        ref_key: "bindEmailFormRef",
        ref: rl,
        "label-position": "top"
      }, {
        default: l(() => [a(Bl, {
          label: "邮箱"
        }, {
          default: l(() => [a(Vl, {
            modelValue: sa.value.email,
            "onUpdate:modelValue": r[205] || (r[205] = k => sa.value.email = k),
            placeholder: "请输入邮箱地址"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "验证码"
        }, {
          default: l(() => [e("div", _Q, [a(Vl, {
            modelValue: sa.value.code,
            "onUpdate:modelValue": r[206] || (r[206] = k => sa.value.code = k),
            placeholder: "请输入验证码",
            maxlength: "6"
          }, null, 8, ["modelValue"]), a(D, {
            type: "primary",
            class: "send-code-btn",
            disabled: Ga.value || ol.value > 0,
            loading: Ga.value,
            onClick: Aw
          }, {
            default: l(() => [g(h(ol.value > 0 ? `${ol.value}s` : "发送验证码"), 1)]),
            _: 1
          }, 8, ["disabled", "loading"])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: ot.value,
      "onUpdate:modelValue": r[212] || (r[212] = k => ot.value = k),
      title: "绑定手机号",
      width: "400px",
      onClose: dm
    }, {
      footer: l(() => [a(D, {
        onClick: r[211] || (r[211] = k => ot.value = !1)
      }, {
        default: l(() => [...r[600] || (r[600] = [g("取消", -1)])]),
        _: 1
      }), a(D, {
        type: "primary",
        loading: co.value,
        onClick: Ew
      }, {
        default: l(() => [...r[601] || (r[601] = [g("确定", -1)])]),
        _: 1
      }, 8, ["loading"])]),
      default: l(() => [a(Go, {
        model: nn.value,
        ref_key: "bindPhoneFormRef",
        ref: wo,
        "label-position": "top"
      }, {
        default: l(() => [a(Bl, {
          label: "手机号"
        }, {
          default: l(() => [a(Vl, {
            modelValue: nn.value.phone,
            "onUpdate:modelValue": r[209] || (r[209] = k => nn.value.phone = k),
            placeholder: "请输入手机号",
            maxlength: "11"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(Bl, {
          label: "验证码"
        }, {
          default: l(() => [e("div", kQ, [a(Vl, {
            modelValue: nn.value.code,
            "onUpdate:modelValue": r[210] || (r[210] = k => nn.value.code = k),
            placeholder: "请输入验证码",
            maxlength: "6"
          }, null, 8, ["modelValue"]), a(D, {
            type: "primary",
            class: "send-code-btn",
            disabled: Pn.value || Gn.value > 0,
            loading: Pn.value,
            onClick: Sw
          }, {
            default: l(() => [g(h(Gn.value > 0 ? `${Gn.value}s` : "发送验证码"), 1)]),
            _: 1
          }, 8, ["disabled", "loading"])])]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: bt.value,
      "onUpdate:modelValue": r[213] || (r[213] = k => bt.value = k),
      title: "绑定微信",
      width: "380px",
      "close-on-click-modal": !1,
      onOpen: d1,
      onClose: Oi
    }, {
      default: l(() => [e("div", CQ, [e("div", {
        class: "qr-code-wrapper",
        onClick: $w
      }, [Nn.value && !Mn.value ? (c(), v("img", {
        key: 0,
        src: Nn.value,
        alt: "微信绑定二维码",
        class: "qr-image"
      }, null, 8, AQ)) : (c(), v("div", IQ, [e("span", null, h(Mn.value ? "加载中..." : "点击刷新"), 1)])), vn.value === "expired" ? (c(), v("div", xQ, " 已失效，点击刷新 ")) : M("", !0)]), e("p", SQ, h(On.value), 1)])]),
      _: 1
    }, 8, ["modelValue"]), a(vl, {
      modelValue: hu.value,
      "onUpdate:modelValue": r[214] || (r[214] = k => hu.value = k),
      title: "客服二维码",
      width: "380px",
      center: ""
    }, {
      default: l(() => [e("div", EQ, [e("div", TQ, [n1.value ? (c(), v("img", {
        key: 0,
        src: n1.value,
        alt: "客服二维码",
        class: "qr-image"
      }, null, 8, $Q)) : (c(), v("div", PQ, [...r[602] || (r[602] = [e("span", null, "加载中...", -1)])]))]), r[603] || (r[603] = e("p", {
        class: "qr-tip"
      }, "请使用微信扫描二维码联系客服", -1)), e("p", VQ, h(P(Gr)), 1)])]),
      _: 1
    }, 8, ["modelValue"])])
  }
}
