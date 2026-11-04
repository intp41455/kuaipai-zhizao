// 火兔工具箱 API 层（自 02-index-8bb27f01.js 反混淆提取）
      z.width = w, z.height = S, z.getContext("2d").drawImage(u, 0, 0, w, S);
      const C = t.type === "image/png" ? "image/png" : "image/jpeg";
      z.toBlob(V => {
        if (!V) {
          n(new Error("图片压缩失败，请重试"));
          return
        }
        i(new File([V], t.name, {
          type: C,
          lastModified: Date.now()
        }))
      }, C, .92)
    }, u.onerror = () => {
      URL.revokeObjectURL(s), n(new Error("图片读取失败，请更换图片后重试"))
    }, u.src = s
  }) : Promise.resolve(t)
}
async function dk(t) {
  if (!tf(t)) {
    if (!mg(t)) throw yi("图片格式不支持，仅支持 JPG / PNG / WebP 格式");
    return
  }
  if (!mg(t)) throw yi("图片格式不支持，仅支持 JPG / PNG / WebP 格式");
  const o = Number(t.size || 0);
  if (o > tk) throw yi(`图片体积约 ${(o/1024/1024).toFixed(1)}MB，超过单张 10MB 上限`);
  let i = 0,
    n = 0;
  try {
    const d = await sk(t);
    i = d.width, n = d.height
  } catch {
    throw yi("图片读取失败，请更换图片后重试")
  }
  if (!i || !n) throw yi("无法识别图片分辨率，请更换图片后重试");
  if (i * n > ak) {
    const d = Math.round(i * n / 1e4);
    throw yi(`图片总像素约 ${d} 万（${i}×${n}），超过 3600 万像素上限`)
  }
  const s = Math.max(i, n),
    u = Math.min(i, n);
  if (u > 0 && s / u > lk) throw yi(`图片宽高比约 ${Math.round(s/u)}:1 过于悬殊（${i}×${n}），需在 1:100 ~ 100:1 之间`)
}
async function Qu(t) {
  if (!t) return t;
  if (!mg(t)) throw yi("图片格式不支持，仅支持 JPG / PNG / WebP 格式");
  if (!tf(t)) return t;
  let o;
  try {
    o = await ck(t)
  } catch {
    throw yi("图片读取失败，请更换图片后重试")
  }
  return await dk(o), o
}
const iv = /token为空|未登录|请先登录|登录失效|token无效|token已过期|请先登录后|请重新登录|Token已过期|重新登录/i,
  vk = /(会员|VIP).{0,4}(已过期|已到期|过期了|到期了)|您的会员已过期|会员已过期/i,
  af = "https://api.aichaoer.cn",
  Ih = "https://cos.aichaoer.cn/web/images/mbpic",
  mk = t => `${Ih}/${t}`,
  _t = () => {
    var t;
    if (typeof window > "u") return "";
    try {
      const o = ((t = window.localStorage) == null ? void 0 : t.getItem("authToken")) || "";
      return o ? o.trim() : ""
    } catch (o) {
      return console.warn("无法访问本地存储:", o), ""
    }
  },
  N1 = t => {
    try {
      if (!t) return;
      const o = _t();
      if (o && o !== t) return;
      $r(), localStorage.removeItem("authToken"), window.dispatchEvent(new CustomEvent("user-logout"))
    } catch (o) {
      console.error("清除认证数据失败:", o)
    }
  };

function U1(t) {
  if (!t || typeof t != "object") return !1;
  const o = t.code;
  if (o === 401 || o === 403) return !0;
  const i = String(t.msg ?? "");
  return !!(i && iv.test(i))
}

function gk() {
  typeof window < "u" && window.dispatchEvent(new CustomEvent("open-login-dialog"))
}

function Ni(t) {
  return !!(t && t.isAuthPrompt)
}

function gd(t, o = {}) {
  gk();
  const i = new Error("请先登录");
  throw i.isAuthPrompt = !0, i.response = t, t && typeof t.code == "number" && (i.code = t.code), Object.assign(i, o), i
}
const fk = async (t, o = "") => {
  if (!t.ok) {
    let n = "",
      s = null;
    try {
      (t.headers.get("content-type") || "").includes("application/json") ? s = await t.json() : n = await t.text()
    } catch {
      n = `服务器错误 (${t.status} ${t.statusText})`
    }(s == null ? void 0 : s.code) === 999 && o && (N1(o), gd(s, {
      code: 999
    })), s && U1(s) && o && gd(s);
    let u = "请求失败";
    s != null && s.msg ? u = s.msg : n ? n.includes("Internal Server Error") ? u = "服务器内部错误，请稍后重试" : n.length < 200 ? u = n : u = `服务器错误 (${t.status})` : u = `请求失败 (${t.status} ${t.statusText})`;
    const d = new Error(u);
    throw d.response = s || {
      error: n
    }, d.status = t.status, d
  }
  let i;
  try {
    if ((t.headers.get("content-type") || "").includes("application/json")) i = await t.json();
    else {
      const s = await t.text();
      try {
        i = JSON.parse(s)
      } catch {
        throw new Error("服务器返回了非 JSON 格式的数据")
      }
    }
  } catch (n) {
    throw n.message === "服务器返回了非 JSON 格式的数据" ? n : new Error("无法解析服务器返回的数据")
  }
  return (i == null ? void 0 : i.code) === 999 && o && (N1(o), gd(i, {
    code: 999
  })), i && typeof i.code == "number" && i.code !== 200 && o && U1(i) && gd(i), i
}, ut = async (t, o = {}) => {
  const {
    headers: i,
    method: n = "GET",
    skipAuth: s = !1,
    ...u
  } = o, d = {
    ...i || {}
  };
  u.body && (u.body instanceof FormData || "Content-Type" in d || (d["Content-Type"] = "application/json"));
  const f = {
    method: n,
    ...u,
    headers: d,
    mode: "cors",
    credentials: "omit"
  };
  let y = "";
  if (s) delete f.headers.Authorization;
  else {
    const S = _t();
    S && !("Authorization" in f.headers) && (f.headers.Authorization = S), y = f.headers.Authorization || ""
  }
  const w = t.startsWith("http") ? t : `${af}${t}`;
  try {
    const S = await fetch(w, f);
    return await fk(S, y)
  } catch (S) {
    throw (S == null ? void 0 : S.name) !== "AbortError" && console.error("API 请求异常:", S), S
  }
}, sv = (t = {}) => ut("/yz/user/getQrcode", {
  method: "GET",
  skipAuth: !0,
  ...t
}), rv = (t, o, i, n = {}) => {
  if (!t) return Promise.reject(new Error("缺少 scene_id 参数"));
  const s = {
    scene_id: t
  };
  return o && (s.inivite = o), i && (s.cdk = i), ut("/yz/user/checkQrcode", {
    method: "POST",
    skipAuth: !0,
    body: JSON.stringify(s),
    ...n
  })
}, lf = () => ut("/yz/user/captcha", {
  method: "POST",
  skipAuth: !_t(),
  body: JSON.stringify({})
}).then(t => {
  if ((t == null ? void 0 : t.code) !== 200) {
    const o = new Error("图形验证码加载失败");
    throw o.response = t, o
  }
  return t.data || {}
}), uv = (t, o = "", i = "") => t ? ut("/yz/user/sendEmail", {
  method: "POST",
  skipAuth: !_t(),
  body: JSON.stringify({
    email: t,
    captcha_key: o,
    captcha: i
  })
}).then(n => {
  if ((n == null ? void 0 : n.code) !== 200) {
    const s = (n == null ? void 0 : n.msg) || "验证码发送失败",
      u = iv.test(s) ? "验证码发送失败" : s,
      d = new Error(u);
    throw d.response = n, d
  }
  return n
}) : Promise.reject(new Error("缺少邮箱地址")), Ku = t => !(t != null && t.email) || !(t != null && t.code) ? Promise.reject(new Error("缺少必要的登录参数")) : ut("/yz/user/loginByEmail", {
  method: "POST",
  skipAuth: !_t(),
  body: JSON.stringify(t)
}).then(o => {
  if ((o == null ? void 0 : o.code) !== 200) {
    const i = (o == null ? void 0 : o.msg) || "登录失败",
      n = new Error(i);
    throw n.response = o, n
  }
  return o
}), uc = (t, o = "", i = "") => t ? ut("/yz/user/sendPhone", {
  method: "POST",
  skipAuth: !_t(),
  body: JSON.stringify({
    phone: t,
    captcha_key: o,
    captcha: i
  })
}).then(n => {
  if ((n == null ? void 0 : n.code) !== 200) {
    const s = (n == null ? void 0 : n.msg) || "验证码发送失败",
      u = iv.test(s) ? "验证码发送失败" : s,
      d = new Error(u);
    throw d.response = n, d
  }
  return n
}) : Promise.reject(new Error("缺少手机号")), Tr = t => !(t != null && t.phone) || !(t != null && t.code) ? Promise.reject(new Error("缺少必要的登录参数")) : ut("/yz/user/loginByPhone", {
  method: "POST",
  skipAuth: !_t(),
  body: JSON.stringify(t)
}).then(o => {
  if ((o == null ? void 0 : o.code) !== 200) {
    const i = (o == null ? void 0 : o.msg) || "登录失败",
      n = new Error(i);
    throw n.response = o, n
  }
  return o
}), gr = t => !(t != null && t.username) || !(t != null && t.password) ? Promise.reject(new Error("缺少必要的登录参数")) : ut("/yz/user/loginByPwd", {
  method: "POST",
  skipAuth: !0,
  body: JSON.stringify(t)
}).then(o => {
  if ((o == null ? void 0 : o.code) !== 200) {
    const i = (o == null ? void 0 : o.msg) || "登录失败",
      n = new Error(i);
    throw n.response = o, n
  }
  return o
}), cv = () => ($r(), ut("/yz/user/logout", {
  method: "POST"
})), pk = 1200;
let dr = null,
  Mu = "",
  vr = {
    token: "",
    data: null,
    time: 0
  };
const $r = () => {
    dr = null, Mu = "", vr = {
      token: "",
      data: null,
      time: 0
    }
  },
  zl = (t = {}) => {
    const o = _t(),
      i = !!(t != null && t.force),
      n = Date.now();
    if (!i && vr.data && vr.token === o && n - vr.time < pk) return Promise.resolve(vr.data);
    if (!i && dr && Mu === o) return dr;
    const s = o ? {
        Authorization: o
      } : {},
      u = o;
    return Mu = u, dr = ut("/yz/user/getInfo", {
      method: "GET",
      headers: s
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const y = (d == null ? void 0 : d.msg) || "获取用户信息失败",
          w = new Error(y);
        throw w.response = d, w
      }
      const f = (d == null ? void 0 : d.data) || d;
      _t() === u && (vr = {
        token: u,
        data: f,
        time: Date.now()
      });
      try {
        typeof window < "u" && f && typeof f == "object" && window.dispatchEvent(new CustomEvent("user-info-updated", {
          detail: f
        }))
      } catch {}
      return f
    }).finally(() => {
      Mu === u && (dr = null, Mu = "")
    }), dr
  },
  dv = () => {
    const t = _t();
    return ut("/yz/daili/info", {
      method: "GET",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取代理信息失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || i
    })
  },
  xh = (t, o) => {
    const i = _t();
    return ut("/yz/daili/set_pay_password", {
      method: "POST",
      headers: i ? {
        Authorization: i
      } : {},
      body: JSON.stringify({
        old_password: t,
        new_password: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "修改支付密码失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  },
  nf = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {
        page: t.page ?? 1,
        size: t.size ?? 10
      };
    return ut("/yz/daili/order_list", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取分销订单失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  },
  of = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {
        page: t.page ?? 1,
        size: t.size ?? 10
      };
    return ut("/yz/daili/user_list", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取我的用户失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  },
  Sh = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {
        page: t.page ?? 1,
        size: t.size ?? 10
      };
    return t.userid == null || t.userid === "" ? Promise.reject(new Error("缺少用户ID")) : (n.userid = t.userid, t.keyword != null && String(t.keyword).trim() !== "" && (n.keyword = String(t.keyword).trim()), t.startDate != null && String(t.startDate).trim() !== "" && (n.startDate = String(t.startDate).trim()), t.endDate != null && String(t.endDate).trim() !== "" && (n.endDate = String(t.endDate).trim()), ut("/yz/daili/user_record_list", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取作品明细失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    }))
  },
  sf = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {
        page: t.page ?? 1,
        size: t.size ?? 10
      };
    return t.cdk != null && String(t.cdk).trim() !== "" && (n.cdk = String(t.cdk).trim()), t.status !== void 0 && t.status !== "" && (n.status = t.status), ut("/yz/daili/card_list", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取卡密列表失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  },
  rf = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {
        page: t.page ?? 1,
        size: t.size ?? 15
      };
    return t.type !== void 0 && t.type !== "" && (n.type = t.type), ut("/yz/daili/balance_log", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取余额明细失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  },
  uf = () => {
    const t = _t();
    return ut("/yz/daili/top_list", {
      method: "GET",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取代理排行榜失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || i
    })
  },
  cf = (t = {}) => {
    const o = _t();
    return ut("/yz/daili/apply_withdraw", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "申请提现失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  },
  fr = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少更新内容"));
    const o = _t();
    return ut("/yz/user/editInfo", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "更新用户信息失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  },
  vv = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少人设数据"));
    const o = _t();
    return ut("/yz/persona/save", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "保存人设失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  },
  qd = t => {
    if (!t) return null;
    let o = !1;
    try {
      o = localStorage.getItem("userCenter_usePersonaImage") === "1"
    } catch {}
    return {
      id: t.id,
      type: t.type === "merchant" || t.type === 1 ? 1 : 0,
      name: t.name || "",
      data: t.data || {},
      useImage: o
    }
  },
  yn = t => Array.isArray(t) ? t.filter(Boolean).join("、") : t || "",
  $i = t => {
    if (!t) return "";
    const o = t.type === "merchant" || t.type === 1,
      i = t.data || {},
      n = [];
    return n.push("【绑定人设】"), t.name && n.push(`- 人设名称：${t.name}`), n.push(`- 人设类型：${o?"商家":"博主"}`), o ? (i.brandName && n.push(`- 商家/品牌名称：${i.brandName}`), i.address && n.push(`- 经营地址：${i.address}`), i.merchantType && n.push(`- 商家类型：${i.merchantType}`), yn(i.industry) && n.push(`- 所属行业：${yn(i.industry)}`), yn(i.brandTone) && n.push(`- 品牌调性：${yn(i.brandTone)}`), yn(i.sellingPoints) && n.push(`- 核心卖点：${yn(i.sellingPoints)}`), yn(i.targetCustomer) && n.push(`- 目标客户：${yn(i.targetCustomer)}`), yn(i.writingStyle) && n.push(`- 写作风格：${yn(i.writingStyle)}`), yn(i.tone) && n.push(`- 语气语调：${yn(i.tone)}`), yn(i.imageStyle) && n.push(`- 图片风格：${yn(i.imageStyle)}`), yn(i.marketingGoal) && n.push(`- 营销目标：${yn(i.marketingGoal)}`), yn(i.signaturePhrase) && n.push(`- 标志性用语：${yn(i.signaturePhrase)}`)) : (yn(i.baseIdentity) && n.push(`- 基础身份：${yn(i.baseIdentity)}`), yn(i.realIdentity) && n.push(`- 现实身份：${yn(i.realIdentity)}`), yn(i.coreTags) && n.push(`- 核心人设标签：${yn(i.coreTags)}`), i.story && n.push(`- 背景故事：${i.story}`)), n.length > 1 ? n.join(`
`) : ""
  },
  yk = t => {
    if (!t || !t.name) return "";
    const o = t.type === "merchant" || t.type === 1,
      i = t.data || {},
      n = d => Array.isArray(d) ? d.filter(Boolean).join("、") : d || "",
      s = [];
    o ? (i.brandName && s.push(`品牌名称：${i.brandName}`), i.merchantType && s.push(`商家类型：${i.merchantType}`), n(i.industry) && s.push(`所属行业：${n(i.industry)}`), n(i.brandTone) && s.push(`品牌调性：${n(i.brandTone)}`), n(i.sellingPoints) && s.push(`核心卖点：${n(i.sellingPoints)}`), n(i.targetCustomer) && s.push(`目标客户：${n(i.targetCustomer)}`)) : (n(i.baseIdentity) && s.push(`基础身份：${n(i.baseIdentity)}`), n(i.realIdentity) && s.push(`现实身份：${n(i.realIdentity)}`), n(i.coreTags) && s.push(`核心标签：${n(i.coreTags)}`), i.story && s.push(`背景故事：${i.story}`));
    const u = [`本次创作身份的人设定位是：${t.name}`, "请全程以该人设的身份背景、语气和表达方式来创作内容。"];
    return s.length && u.push(s.map(d => `- ${d}`).join(`
`)), u.join(`
`)
  },
  hk = t => (Array.isArray(t) ? t : []).map(o => typeof o == "string" ? o : (o == null ? void 0 : o.url) || (o == null ? void 0 : o.image) || (o == null ? void 0 : o.src) || "").map(o => String(o || "").trim()).filter(Boolean).slice(0, 2),
  bk = "userCenter_usePersonaImage",
  wk = t => {
    if (t && Object.prototype.hasOwnProperty.call(t, "useImage")) return !!t.useImage;
    try {
      return localStorage.getItem(bk) === "1"
    } catch {
      return !1
    }
  },
  Eh = ({
    styleRefCount: t = 0,
    personaImgCount: o = 0,
    styleRefRole: i = "风格参考图"
  } = {}) => {
    const n = Math.max(0, Number(t) || 0),
      s = Math.max(0, Number(o) || 0);
    if (n === 0 && s === 0) return "";
    const u = ["【配图建议（必须照做）】"];
    u.push("本次随 prompt 一同附上的图片按顺序代表不同角色，请按下面的说明使用：");
    let d = 0;
    for (let y = 0; y < n; y++) {
      d += 1;
      const w = s > 0 ? `${i}：只借画风（版式、配色、字体、装饰、整体调性、画风媒介），不借里面的人。图里如果有人，那是别人，不算本次主角。` : `${i}：参考其版式、配色、字体风格、装饰元素与整体调性，不要照抄其文字内容、主题或案例。`;
      u.push(`- 图${d}是${w}`)
    }
    const f = s === 0 ? "" : n === 0 ? s === 1 ? "这张图" : `这 ${s} 张图` : s === 1 ? "最后一张图" : `最后 ${s} 张图`;
    if (s === 1 ? u.push(`- ${f}是人设图：本次内容的【主角 IP】，是一个固定角色。`) : s > 1 && u.push(`- ${f}都是人设图（同一个 IP 的不同角度，请综合识别）：本次内容的【主角 IP】，是一个固定角色。`), s > 0) {
      const y = ["【人设图使用要求（必须严格执行）】", `1. 主角 = ${f}（人设图）上的这个人，所有出现人物的画面都必须是【完全一致的同一个 IP】——脸型、五官、发型、身形、气质、标志性服饰与配件，跟${f}完全相同。不是"像"，不是"差不多"，是"同一个角色"。`];
      let w = 2;
      if (n > 0) {
        const S = n === 1 ? "前面那张风格参考图" : `前面那 ${n} 张风格参考图`;
        y.push(`${w++}. ${S}里如果有人，必须无视/替换成${f}这个 IP；不能继承那个人的脸/发型/服饰，也不能让两个人同时出现。`), y.push(`${w++}. 仅可调整：动作、表情、镜头角度、场景背景、画风媒介（按风格参考图，见下方）。`)
      } else y.push(`${w++}. 仅可调整：动作、表情、镜头角度、场景背景。`);
      y.push(`${w++}. 严禁：换脸 / 换发型 / 改性别 / 改年龄段；模板化 / 网红化；凭空加入第二个主角抢戏。`), y.push(`${w++}. 不需要人物的画面 → 整张图不出现人物（用产品 / 场景 / 文字 / 插画顶上），绝不硬塞陌生人。`), u.push(y.join(`
`)), u.push(["【自检（出图前必做，不达标必须重画）】", `把成品里的人物和${f}（人设图）并排比对——必须像"同一个 IP 的另一张周边图"，而不是"另一个长得差不多的人"。`, "判断标准（任一不满足 = 不合格，重画）：", "① 把脸单独裁出来对比，五官比例和神态能一眼对上；", "② 发型、身形、标志性服饰与配件，跟人设图一致；", '③ 整张图里没有出现"另一个看起来像但不是这个 IP"的人物。'].join(`
`))
    }
    return n > 0 && s > 0 && u.push(["【风格参考图 × 人设图 的结合方式】", '画风、版式、配色、装饰 → 跟风格参考图；画里的"人" → 跟人设图（同一个 IP）。', '即"用风格参考图的画风，重新画人设图里这个 IP"。画风媒介可以从 3D 黏土切到 2D 插画等，但 IP 不能变。'].join(`
`)), u.join(`
`)
  },
  qr = async (t, o) => {
    if (!t || !o || !wk(o)) return t;
    let i = [];
    try {
      i = hk(await fv())
    } catch (f) {
      console.warn("获取启用人设图失败，跳过人设图拼接", f)
    }
    if (!i.length) return t;
    const n = Array.isArray(t.images) ? t.images.filter(Boolean) : t.images ? [t.images] : [],
      s = n.length;
    t.images = [...n, ...i];
    const u = t.persona || $i(o),
      d = Eh({
        styleRefCount: s,
        personaImgCount: i.length
      });
    return t.persona = [u, d].filter(Boolean).join(`

`), t
  }, qi = t => {
    if (!t || typeof t != "object") return "";
    const o = t.industry ? `- 产品简介：${t.industry}` : "",
      i = t.ageMode === "range" && Array.isArray(t.ageRange) && t.ageRange.length === 2 ? `- 年龄段：${t.ageRange[0]} - ${t.ageRange[1]} 岁` : "- 年龄段：不限",
      n = t.targetGroup ? `- 目标群体：${t.targetGroup}` : "",
      s = t.painPoints ? `- 用户痛点：${t.painPoints}` : "",
      u = t.solution ? `- 解决痛点：${t.solution}` : "",
      d = t.notes ? `- 其他补充：${t.notes}` : "",
      f = ["【补充创作信息】", o, i, n, s, u, d].filter(Boolean);
    return f.length > 1 ? f.join(`
`) : ""
  }, Th = (t, o) => {
    let i = null;
    return t && o && typeof o == "object" && (o.industry || o.targetGroup || o.painPoints || o.solution || o.notes) && (i = {
      industry: o.industry || "",
      ageMode: o.ageMode || "any",
      targetGroup: o.targetGroup || "",
      painPoints: o.painPoints || "",
      solution: o.solution || "",
      notes: o.notes || ""
    }, o.ageMode === "range" && Array.isArray(o.ageRange) && o.ageRange.length === 2 && (i.ageRange = o.ageRange)), i
  }, mv = (t = {}) => {
    const o = _t();
    return ut("/yz/persona/lists", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        type: t.type ?? 0,
        page: t.page ?? 1,
        size: t.size ?? 100
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = new Error((n == null ? void 0 : n.msg) || "获取人设列表失败");
        throw s.response = n, s
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, gv = t => {
    const o = Array.isArray(t) ? t.join(",") : String(t || "");
    if (!o) return Promise.reject(new Error("缺少ids"));
    const i = _t();
    return ut("/yz/persona/del", {
      method: "POST",
      headers: i ? {
        Authorization: i
      } : {},
      body: JSON.stringify({
        ids: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = new Error((s == null ? void 0 : s.msg) || "删除人设失败");
        throw u.response = s, u
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, df = t => {
    const o = String(t || "").trim();
    if (!o) return Promise.reject(new Error("缺少图片地址"));
    const i = _t();
    return ut("/yz/persona/add_pic", {
      method: "POST",
      headers: i ? {
        Authorization: i
      } : {},
      body: JSON.stringify({
        url: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = new Error((s == null ? void 0 : s.msg) || "添加人设图失败");
        throw u.response = s, u
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, vf = () => {
    const t = _t();
    return ut("/yz/persona/get_pic", {
      method: "POST",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = new Error((i == null ? void 0 : i.msg) || "获取人设图失败");
        throw n.response = i, n
      }
      return (i == null ? void 0 : i.data) ?? i
    })
  }, fv = () => {
    const t = _t();
    return ut("/yz/persona/use_pic", {
      method: "POST",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = new Error((i == null ? void 0 : i.msg) || "获取启用人设图失败");
        throw n.response = i, n
      }
      return (i == null ? void 0 : i.data) ?? i
    })
  }, mf = (t, o) => {
    if (t == null || t === "") return Promise.reject(new Error("缺少图片ID"));
    const i = _t();
    return ut("/yz/persona/edit_pic", {
      method: "POST",
      headers: i ? {
        Authorization: i
      } : {},
      body: JSON.stringify({
        id: t,
        is_use: o ? 1 : 0
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = new Error((s == null ? void 0 : s.msg) || "更新人设图失败");
        throw u.response = s, u
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, gf = t => {
    if (t == null || t === "") return Promise.reject(new Error("缺少图片ID"));
    const o = _t();
    return ut("/yz/persona/del_pic", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = new Error((n == null ? void 0 : n.msg) || "删除人设图失败");
        throw s.response = n, s
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, ff = () => {
    const t = _t();
    return ut("/yz/user/unbindWechat", {
      method: "GET",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "解绑微信失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || i
    })
  }, ao = (t, o = {}) => {
    if (!t) return Promise.reject(new Error("缺少上传文件"));
    const {
      skipImageGuard: i = !1
    } = o || {};
    return (i ? Promise.resolve(t) : Qu(t)).then(s => {
      const u = new FormData;
      return u.append("files", s), ut("/yz/file/upload", {
        method: "POST",
        body: u
      }).then(d => {
        if ((d == null ? void 0 : d.code) !== 200) {
          const f = (d == null ? void 0 : d.msg) || "文件上传失败",
            y = new Error(f);
          throw y.response = d, y
        }
        return (d == null ? void 0 : d.data) ?? d
      })
    })
  }, Pr = t => ao(t), $h = (t, o = {}) => {
    if (!t) return Promise.reject(new Error("缺少上传文件"));
    const {
      skipImageGuard: i = !1,
      onProgress: n
    } = o || {};
    return (i ? Promise.resolve(t) : Qu(t)).then(u => new Promise((d, f) => {
      const y = new FormData;
      y.append("files", u);
      const w = new XMLHttpRequest;
      w.open("POST", `${af}/yz/file/upload`, !0);
      const S = _t();
      S && w.setRequestHeader("Authorization", S), w.upload && typeof n == "function" && w.upload.addEventListener("progress", z => {
        if (z.lengthComputable) {
          const x = Math.min(99, Math.round(z.loaded / z.total * 100));
          try {
            n(x)
          } catch {}
        }
      }), w.onload = () => {
        let z;
        try {
          z = JSON.parse(w.responseText)
        } catch {}
        if (!z || z.code !== 200) {
          const x = new Error((z == null ? void 0 : z.msg) || "文件上传失败");
          x.response = z, f(x);
          return
        }
        if (typeof n == "function") try {
          n(100)
        } catch {}
        d((z == null ? void 0 : z.data) ?? z)
      }, w.onerror = () => f(new Error("网络请求失败")), w.onabort = () => f(new Error("上传已取消")), w.send(y)
    }))
  }, gg = t => t ? Qu(t).then(o => {
    const i = new FormData;
    return i.append("files", o), ut("/yz/file/temp", {
      method: "POST",
      body: i
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "文件上传失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }) : Promise.reject(new Error("缺少上传文件")), pf = ["yijuhua", "zhiding", "chanpin", "renshe", "beiwanglu", "duogongge", "pengyouquan", "zhishikepu", "cepingduibilei", "wanggandazi"], Ph = t => !t || typeof t != "object" ? !1 : pf.some(o => !!t[o]), yf = (t, o = "", i = null, n = "", s = null, u = "normal", d = "", f = {}) => {
    var $, N;
    if (!t) return Promise.reject(new Error("缺少 prompt 参数"));
    const y = Array.isArray(o) ? o : o ? [o] : [],
      w = {
        prompt: t,
        images: y
      };
    u !== "max" && (w.version = u || "normal"), w.tone = n || "常规语气", d && String(d).trim() && (w.title = String(d).trim()), f && typeof f == "object" && pf.forEach(T => {
      f[T] && (w[T] = 1)
    }), f && f.aifengmian && (w.aifengmian = 1), f && f.imagePurpose && (w.image_purpose = String(f.imagePurpose).trim()), f && typeof f.count == "number" && f.count > 1 && (w.count = Math.min(20, Math.floor(f.count))), f && f.supply && String(f.supply).trim() && (w.supply = String(f.supply).trim()), f && f.cover_ref && (w.cover_ref = String(f.cover_ref).trim()), f && f.content_ref && (w.content_ref = String(f.content_ref).trim());
    const S = f && f.persona ? f.persona : null;
    S && (w.persona = $i(S)), i && (w.survey_step1 = i.step1 || (($ = i.answers) == null ? void 0 : $[0]) || "", w.survey_step2 = i.step2 || ((N = i.answers) == null ? void 0 : N[1]) || ""), s && typeof s == "object" && (w.customExtra = {
      industry: s.industry || "",
      ageMode: s.ageMode || "any",
      targetGroup: s.targetGroup || "",
      painPoints: s.painPoints || "",
      solution: s.solution || "",
      notes: s.notes || ""
    }, s.ageMode === "range" && s.ageRange && Array.isArray(s.ageRange) && s.ageRange.length === 2 && (w.customExtra.ageRange = s.ageRange), w.customExtra = qi(w.customExtra));
    const z = _t(),
      x = z ? {
        Authorization: z,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      C = u === "pro" && Ph(f),
      V = u === "max" ? "/yz/ai/yijuhuamax" : C ? "/yz/ai/yijuhua_ex" : "/yz/ai/yijuhua";
    return qr(w, S).then(T => ut(V, {
      method: "POST",
      headers: x,
      body: JSON.stringify(T)
    })).then(T => {
      if ((T == null ? void 0 : T.code) !== 200) {
        const R = (T == null ? void 0 : T.msg) || "生成失败",
          O = new Error(R);
        throw O.response = T, O
      }
      return T
    })
  }, hf = (t, o = "", i = null, n = "", s = null, ...u) => {
    var J, ee;
    let d = 2,
      f = !1,
      y = null,
      w = 5,
      S = "",
      z = {};
    typeof u[1] == "boolean" || Array.isArray(u[2]) ? (d = u[0] ?? 2, f = !!u[1], y = u[2] ?? null, w = u[3] ?? 5, S = u[4] ?? "", z = u[5] ?? {}) : (w = u[0] ?? 5, S = u[1] ?? "", z = u[2] ?? {});
    const C = Array.isArray(y) && y.length >= 0;
    if (!t && !C) return Promise.reject(new Error("缺少 prompt 或 outline_list 参数"));
    const V = Array.isArray(o) ? o : o ? [o] : [],
      $ = {
        prompt: t || "",
        images: V
      };
    if (C && ($.step = d === 1 ? 1 : 2, $.outline_list = y), f && ($.show_outline = 1), typeof w == "number" && !Number.isNaN(w)) {
      const ie = Math.min(12, Math.max(3, w));
      $.page_count = ie
    }
    $.tone = n || "常规语气", S && String(S).trim() && ($.title = String(S).trim()), z && typeof z == "object" && pf.forEach(ie => {
      z[ie] && ($[ie] = 1)
    });
    const N = z && z.persona ? z.persona : null;
    N && ($.persona = $i(N)), z && typeof z.count == "number" && z.count > 1 && ($.count = Math.min(20, Math.floor(z.count))), z && z.supply && String(z.supply).trim() && ($.supply = String(z.supply).trim()), z && z.cover_ref && ($.cover_ref = String(z.cover_ref).trim()), z && z.content_ref && ($.content_ref = String(z.content_ref).trim()), i && ($.survey_step1 = i.step1 || ((J = i.answers) == null ? void 0 : J[0]) || "", $.survey_step2 = i.step2 || ((ee = i.answers) == null ? void 0 : ee[1]) || ""), s && typeof s == "object" && ($.customExtra = {
      industry: s.industry || "",
      ageMode: s.ageMode || "any",
      targetGroup: s.targetGroup || "",
      painPoints: s.painPoints || "",
      solution: s.solution || "",
      notes: s.notes || ""
    }, s.ageMode === "range" && s.ageRange && Array.isArray(s.ageRange) && s.ageRange.length === 2 && ($.customExtra.ageRange = s.ageRange), $.customExtra = qi($.customExtra));
    const T = _t(),
      R = T ? {
        Authorization: T,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      O = Ph(z) ? "/yz/ai/yijuhuamax_ex" : "/yz/ai/yijuhuamax";
    return qr($, N).then(ie => ut(O, {
      method: "POST",
      headers: R,
      body: JSON.stringify(ie)
    })).then(ie => {
      if ((ie == null ? void 0 : ie.code) !== 200) {
        const Ae = (ie == null ? void 0 : ie.msg) || "生成失败",
          F = new Error(Ae);
        throw F.response = ie, F
      }
      return ie
    })
  }, pv = ({
    id: t,
    image_prompt: o,
    image_index: i,
    image_url: n,
    mark_url: s = "",
    ref_images: u = []
  }) => {
    if (!t) return Promise.reject(new Error("缺少作品ID"));
    const d = Number(i);
    if (Number.isNaN(d) || d < 0) return Promise.reject(new Error("图片索引不合法"));
    if (!n) return Promise.reject(new Error("缺少图片地址"));
    const f = (o ?? "").toString().trim();
    if (!f) return Promise.reject(new Error("请先填写修改后的图片提示词"));
    const y = {
      id: t,
      image_prompt: f,
      image_index: d,
      image_url: n
    };
    s && (y.mark_url = s);
    const w = Array.isArray(u) ? u.filter(Boolean).slice(0, 3) : [];
    w.length && (y.ref_images = w);
    const S = _t();
    return ut("/yz/ai/imageedit", {
      method: "POST",
      headers: S ? {
        Authorization: S,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(y)
    }).then(x => {
      if ((x == null ? void 0 : x.code) !== 200) {
        const C = (x == null ? void 0 : x.msg) || "修改图片失败",
          V = new Error(C);
        throw V.response = x, V
      }
      return (x == null ? void 0 : x.data) ?? x
    })
  }, _k = ({
    id: t,
    image_prompt: o,
    image_index: i,
    image_url: n,
    mark_url: s = "",
    ref_images: u = []
  }) => {
    if (!t) return Promise.reject(new Error("缺少作品ID"));
    const d = Number(i);
    if (Number.isNaN(d) || d < 0) return Promise.reject(new Error("图片索引不合法"));
    if (!n) return Promise.reject(new Error("缺少图片地址"));
    const f = (o ?? "").toString().trim();
    if (!f) return Promise.reject(new Error("请先填写修改后的图片提示词"));
    const y = {
      id: t,
      image_prompt: f,
      image_index: d,
      image_url: n
    };
    s && (y.mark_url = s);
    const w = Array.isArray(u) ? u.filter(Boolean).slice(0, 3) : [];
    w.length && (y.ref_images = w);
    const S = _t();
    return ut("/yz/aipic/imageedit", {
      method: "POST",
      headers: S ? {
        Authorization: S,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(y)
    }).then(x => {
      if ((x == null ? void 0 : x.code) !== 200) {
        const C = (x == null ? void 0 : x.msg) || "修改图片失败",
          V = new Error(C);
        throw V.response = x, V
      }
      return (x == null ? void 0 : x.data) ?? x
    })
  }, kk = ({
    id: t,
    image_prompt: o,
    image_index: i,
    image_url: n,
    mark_url: s = "",
    ref_images: u = []
  }) => {
    if (!t) return Promise.reject(new Error("缺少作品ID"));
    const d = Number(i);
    if (Number.isNaN(d) || d < 0) return Promise.reject(new Error("图片索引不合法"));
    if (!n) return Promise.reject(new Error("缺少图片地址"));
    const f = (o ?? "").toString().trim();
    if (!f) return Promise.reject(new Error("请先填写修改后的图片提示词"));
    const y = {
      id: t,
      image_prompt: f,
      image_index: d,
      image_url: n
    };
    s && (y.mark_url = s);
    const w = Array.isArray(u) ? u.filter(Boolean).slice(0, 3) : [];
    w.length && (y.ref_images = w);
    const S = _t();
    return ut("/yz/shangpin/imageedit", {
      method: "POST",
      headers: S ? {
        Authorization: S,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(y)
    }).then(x => {
      if ((x == null ? void 0 : x.code) !== 200) {
        const C = (x == null ? void 0 : x.msg) || "修改图片失败",
          V = new Error(C);
        throw V.response = x, V
      }
      return (x == null ? void 0 : x.data) ?? x
    })
  }, bf = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少生成参数"));
    const o = _t();
    return ut("/yz/ai/generate", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "生成失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Vh = (t, o = {}) => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少生成参数"));
    const i = t.mode === "mote" && !!String(t.scene || "").trim();
    if (!t.prompt && !i) return Promise.reject(new Error("缺少提示词（prompt）参数"));
    const n = _t(),
      s = n ? {
        Authorization: n,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      {
        signal: u,
        ...d
      } = o;
    return ut("/yz/aipic/make", {
      method: "POST",
      headers: s,
      body: JSON.stringify(t),
      ...u ? {
        signal: u
      } : {},
      ...d
    }).then(f => {
      if ((f == null ? void 0 : f.code) !== 200) {
        const y = (f == null ? void 0 : f.msg) || "图片生成失败",
          w = new Error(y);
        throw w.response = f, w
      }
      return (f == null ? void 0 : f.data) ?? f
    })
  }, zh = (t = 5) => ut("/yz/handoff/create", {
    method: "POST",
    body: JSON.stringify({
      max: Number(t) || 5
    })
  }).then(o => {
    if ((o == null ? void 0 : o.code) !== 200) {
      const i = new Error((o == null ? void 0 : o.msg) || "创建手机上传会话失败");
      throw i.response = o, i
    }
    return o.data || {}
  }), Lh = t => ut("/yz/handoff/status", {
    method: "POST",
    body: JSON.stringify({
      token: String(t || "")
    })
  }).then(o => {
    if ((o == null ? void 0 : o.code) !== 200) {
      const i = new Error((o == null ? void 0 : o.msg) || "获取上传状态失败");
      throw i.response = o, i
    }
    return o.data || {}
  }), Dh = (t = 1, o = 30) => ut("/yz/handoff/history", {
    method: "POST",
    body: JSON.stringify({
      page: t,
      size: o
    })
  }).then(i => {
    if ((i == null ? void 0 : i.code) !== 200) throw new Error((i == null ? void 0 : i.msg) || "获取手机上传历史失败");
    return i.data || {
      total: 0,
      rows: []
    }
  }), Mh = (t = []) => ut("/yz/handoff/delete_history", {
    method: "POST",
    body: JSON.stringify({
      ids: t
    })
  }).then(o => {
    if ((o == null ? void 0 : o.code) !== 200) throw new Error((o == null ? void 0 : o.msg) || "删除手机上传历史失败");
    return o.data || {}
  }), Ck = (t = {}) => {
    const o = String(t.prompt ?? "").trim();
    if (!o) return Promise.reject(new Error("缺少提示词"));
    const i = _t(),
      n = i ? {
        Authorization: i,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      s = {
        prompt: o,
        count: Number(t.count) || 1,
        mode: t.mode === "aifengmian" ? "aifengmian" : "gallery"
      };
    return Array.isArray(t.images) && t.images.length && (s.images = t.images.filter(Boolean)), ut("/yz/aipic/gallery_outline", {
      method: "POST",
      headers: n,
      body: JSON.stringify(s)
    }).then(u => {
      var f;
      if ((u == null ? void 0 : u.code) !== 200) {
        const y = new Error((u == null ? void 0 : u.msg) || "大纲生成失败");
        throw y.response = u, y
      }
      const d = (f = u == null ? void 0 : u.data) == null ? void 0 : f.outline;
      return Array.isArray(d) ? d : []
    })
  }, Oh = (t, o = {}) => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少生成参数"));
    if (!t.prompt) return Promise.reject(new Error("缺少提示词（prompt）参数"));
    const i = _t(),
      n = i ? {
        Authorization: i,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      {
        signal: s,
        ...u
      } = o;
    return ut("/yz/aipic/aplus", {
      method: "POST",
      headers: n,
      body: JSON.stringify(t),
      ...s ? {
        signal: s
      } : {},
      ...u
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "专业详情页生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, Bh = (t, o = {}) => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少生成参数"));
    if (!t.prompt) return Promise.reject(new Error("缺少提示词（prompt）参数"));
    const i = _t(),
      n = i ? {
        Authorization: i,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      {
        signal: s,
        ...u
      } = o;
    return ut("/yz/aipic/suite", {
      method: "POST",
      headers: n,
      body: JSON.stringify(t),
      ...s ? {
        signal: s
      } : {},
      ...u
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "主图套图生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, Ak = (t = {}) => {
    const o = Array.isArray(t.list) ? t.list.map(s => ({
      prompt: String((s == null ? void 0 : s.prompt) ?? "").trim(),
      images: Array.isArray(s == null ? void 0 : s.images) ? s.images.filter(Boolean) : s != null && s.images ? [s.images] : []
    })).filter(s => s.prompt) : [];
    if (!o.length) return Promise.reject(new Error("缺少生成列表（list）参数"));
    const i = _t();
    return ut("/yz/ai/ziyoutuwen", {
      method: "POST",
      headers: i ? {
        Authorization: i,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        list: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "生成失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, Ik = () => ut("/yz/video/conf", {
    method: "GET",
    skipAuth: !0
  }).then(t => (t == null ? void 0 : t.data) ?? t), Nh = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少生成参数"));
    const o = (t.prompt ?? "").toString().trim();
    if (!o) return Promise.reject(new Error("缺少视频描述（prompt）参数"));
    if (o.length > 3e3) return Promise.reject(new Error("提示词长度需为 1 至 3000 个字符"));
    const i = (t.ratio ?? "").toString().trim();
    if (!i) return Promise.reject(new Error("缺少视频比例 ratio"));
    const n = Number(t.type);
    if (![0, 1, 2, 3].includes(n)) return Promise.reject(new Error("缺少或无效的视频类型 type"));
    const s = (t.resolution ?? "").toString().trim();
    if (!s) return Promise.reject(new Error("缺少分辨率 resolution"));
    const u = Number(t.duration);
    if (!Number.isFinite(u) || u <= 0) return Promise.reject(new Error("缺少或无效的视频时长 duration"));
    const d = Array.isArray(t.references) ? t.references : [],
      f = Number(t.model),
      y = [2, 3].includes(f) ? f : 1;
    if (y !== 1 && ![5, 10, 15].includes(u)) return Promise.reject(new Error("时长需为 5、10 或 15 秒"));
    const w = {
        type: n,
        prompt: o,
        ratio: i,
        resolution: s,
        duration: u,
        references: d,
        model: y
      },
      S = _t();
    return ut("/yz/video/make", {
      method: "POST",
      headers: S ? {
        Authorization: S,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(w)
    }).then(x => {
      if ((x == null ? void 0 : x.code) !== 200) {
        const C = (x == null ? void 0 : x.msg) || "视频生成失败",
          V = new Error(C);
        throw V.response = x, V
      }
      return (x == null ? void 0 : x.data) ?? x
    })
  }, Uh = t => {
    if (t == null || t === "") return Promise.reject(new Error("缺少视频记录 id"));
    const o = _t();
    return ut("/yz/video/get", {
      method: "POST",
      headers: o ? {
        Authorization: o,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: String(t)
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取视频详情失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, Rh = (t = {}) => {
    const o = Number(t.page) > 0 ? Number(t.page) : 1;
    let i = Number(t.size);
    if (!Number.isFinite(i) || i <= 0) {
      const d = Number(t.limit);
      i = Number.isFinite(d) && d > 0 ? d : 10
    }
    const n = {
      page: o,
      size: i
    };
    t.type !== void 0 && t.type !== null && t.type !== "" && (n.type = Number(t.type));
    const s = _t();
    return ut("/yz/video/lists", {
      method: "POST",
      headers: s ? {
        Authorization: s,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(n)
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const w = (d == null ? void 0 : d.msg) || "获取视频列表失败",
          S = new Error(w);
        throw S.response = d, S
      }
      const f = (d == null ? void 0 : d.data) || {};
      return {
        list: Array.isArray(f.rows) ? f.rows : Array.isArray(f.list) ? f.list : [],
        pages: f.pages || {}
      }
    })
  }, jh = t => {
    if (!t) return Promise.reject(new Error("缺少记录ID"));
    const o = _t();
    return ut("/yz/aipic/get", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取记录详情失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, qh = (t = "", o = "智能识别", i = "默认", n = 100, s = "", u = !1, d = {}) => {
    if (!t) return Promise.reject(new Error("缺少图片参数"));
    const y = {
        images: Array.isArray(t) ? t : [t],
        style: o,
        scene: i,
        wordCount: n,
        supplement: s || "",
        noNeedImage: !!u
      },
      w = (d == null ? void 0 : d.persona) || null;
    w && (y.persona = $i(w));
    const S = _t(),
      z = S ? {
        Authorization: S,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      };
    return qr(y, w).then(x => ut("/yz/ai/photo", {
      method: "POST",
      headers: z,
      body: JSON.stringify(x)
    })).then(x => {
      if ((x == null ? void 0 : x.code) !== 200) {
        const C = (x == null ? void 0 : x.msg) || "生成失败",
          V = new Error(C);
        throw V.response = x, V
      }
      return (x == null ? void 0 : x.data) || x
    })
  }, br = (t, o = {}) => {
    const i = o && o.chazhao ? String(o.chazhao) : "",
      n = o && o.search ? String(o.search) : "";
    if (!t && !i && !n) return Promise.reject(new Error("缺少链接地址"));
    const s = _t();
    return ut("/yz/ai/parse", {
      method: "POST",
      headers: s ? {
        Authorization: s
      } : {},
      body: JSON.stringify(n ? {
        search: n
      } : i ? {
        chazhao: i
      } : {
        url: t
      })
    }).then(f => {
      if ((f == null ? void 0 : f.code) !== 200) {
        const y = (f == null ? void 0 : f.msg) || "解析失败",
          w = new Error(y);
        throw w.response = f, w
      }
      return (f == null ? void 0 : f.data) || f
    })
  }, xk = t => {
    if (!t) return Promise.reject(new Error("缺少链接地址"));
    const o = _t();
    return ut("/yz/banyun/parse", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        url: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "解析失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Fh = t => {
    if (!t) return Promise.reject(new Error("缺少链接地址"));
    const o = _t();
    return ut("/yz/ai/goods_detail", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        url: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "商品解析失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Sk = (t = {}) => {
    const o = String(t.prompt ?? "").trim(),
      i = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!i.length) return Promise.reject(new Error("请先上传商品图"));
    const n = _t(),
      s = n ? {
        Authorization: n
      } : {},
      u = {
        prompt: o,
        images: i
      };
    return t.step !== void 0 && t.step !== null && t.step !== "" && (u.step = t.step), Array.isArray(t.outline_list) && (u.outline_list = t.outline_list), t.platform && (u.platform = String(t.platform)), t.platformLabel && (u.platformLabel = String(t.platformLabel)), t.region && (u.region = String(t.region)), t.lang && (u.lang = String(t.lang)), t.ratio && (u.ratio = String(t.ratio)), t.resolution && (u.resolution = String(t.resolution)), ut("/yz/shangpin/suite", {
      method: "POST",
      headers: s,
      body: JSON.stringify(u)
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "商品套图生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, Ek = (t = {}) => {
    const o = String(t.prompt ?? "").trim(),
      i = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!i.length) return Promise.reject(new Error("请先上传商品图"));
    const n = _t(),
      s = n ? {
        Authorization: n
      } : {},
      u = {
        prompt: o,
        images: i
      };
    return t.step !== void 0 && t.step !== null && t.step !== "" && (u.step = t.step), Array.isArray(t.outline_list) && (u.outline_list = t.outline_list), t.lang && (u.lang = String(t.lang)), t.resolution && (u.resolution = String(t.resolution)), ut("/yz/shangpin/aplus", {
      method: "POST",
      headers: s,
      body: JSON.stringify(u)
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "A+详情生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, Tk = (t = {}) => {
    const o = String(t.prompt ?? "").trim(),
      i = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!i.length) return Promise.reject(new Error("请先上传商品图"));
    const n = _t(),
      s = n ? {
        Authorization: n
      } : {},
      u = {
        prompt: o,
        images: i
      };
    return t.step !== void 0 && t.step !== null && t.step !== "" && (u.step = t.step), Array.isArray(t.outline_list) && (u.outline_list = t.outline_list), t.platform && (u.platform = t.platform), t.region && (u.region = t.region), t.lang && (u.lang = t.lang), t.ratio && (u.ratio = t.ratio), t.count && (u.count = t.count), t.resolution && (u.resolution = String(t.resolution)), ut("/yz/shangpin/suite_smart", {
      method: "POST",
      headers: s,
      body: JSON.stringify(u)
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "智能套图生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, $k = (t = {}) => {
    const o = String(t.prompt ?? "").trim(),
      i = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!i.length) return Promise.reject(new Error("请先上传商品图"));
    const n = _t(),
      s = n ? {
        Authorization: n
      } : {},
      u = {
        prompt: o,
        images: i
      };
    return t.step !== void 0 && t.step !== null && t.step !== "" && (u.step = t.step), Array.isArray(t.outline_list) && (u.outline_list = t.outline_list), t.platform && (u.platform = t.platform), t.region && (u.region = t.region), t.lang && (u.lang = t.lang), t.ratio && (u.ratio = t.ratio), t.count && (u.count = t.count), t.resolution && (u.resolution = String(t.resolution)), ut("/yz/shangpin/aplus_smart", {
      method: "POST",
      headers: s,
      body: JSON.stringify(u)
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "智能 A+ 生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, Pk = (t = {}) => {
    const o = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!o.length) return Promise.reject(new Error("请先上传产品基准图"));
    const i = _t(),
      n = i ? {
        Authorization: i
      } : {},
      s = Array.isArray(t.pages) ? t.pages : [],
      u = String(t.prompt ?? "").trim(),
      d = String(t.template_image ?? "").trim(),
      f = {
        prompt: u,
        images: o,
        pages: s,
        template_image: d
      };
    return t.dimension_kind && (f.dimension_kind = String(t.dimension_kind), t.size_unit && (f.size_unit = String(t.size_unit)), t.size_style && (f.size_style = String(t.size_style)), t.size_anchor && (f.size_anchor = String(t.size_anchor)), Array.isArray(t.size_specs) && (f.size_specs = t.size_specs)), t.ratio && (f.ratio = String(t.ratio)), ut("/yz/shangpin/sku", {
      method: "POST",
      headers: n,
      body: JSON.stringify(f)
    }).then(y => {
      if ((y == null ? void 0 : y.code) !== 200) {
        const w = (y == null ? void 0 : y.msg) || "SKU 图生成失败",
          S = new Error(w);
        throw S.response = y, S
      }
      return (y == null ? void 0 : y.data) ?? y
    })
  }, Vk = (t = {}) => {
    const o = String(t.prompt ?? "").trim(),
      i = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!i.length) return Promise.reject(new Error("请先上传服饰图片"));
    const n = _t(),
      s = n ? {
        Authorization: n
      } : {},
      u = {
        prompt: o,
        images: i
      };
    return Array.isArray(t.outline_list) && (u.outline_list = t.outline_list), ut("/yz/shangpin/wear", {
      method: "POST",
      headers: s,
      body: JSON.stringify(u)
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "服饰穿戴生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, zk = (t = {}) => {
    const o = String(t.prompt ?? "").trim(),
      i = Array.isArray(t.images) ? t.images.filter(Boolean) : [],
      n = Array.isArray(t.references) ? t.references.filter(Boolean) : [];
    if (!i.length) return Promise.reject(new Error("请先上传商品图"));
    if (!n.length) return Promise.reject(new Error("请先上传参考图"));
    const s = _t(),
      u = s ? {
        Authorization: s
      } : {},
      d = {
        prompt: o,
        images: i,
        references: n
      };
    return t.ratio && (d.ratio = String(t.ratio)), ut("/yz/shangpin/replica", {
      method: "POST",
      headers: u,
      body: JSON.stringify(d)
    }).then(f => {
      if (!((f == null ? void 0 : f.code) === 200 || (f == null ? void 0 : f.code) === 1 || (f == null ? void 0 : f.msg) === "提交成功")) {
        const w = (f == null ? void 0 : f.msg) || "参考图创作失败",
          S = new Error(w);
        throw S.response = f, S
      }
      return (f == null ? void 0 : f.data) ?? f
    })
  }, wf = (t, o = {}, i, n) => {
    const s = String(o.prompt ?? "").trim(),
      u = Array.isArray(o.images) ? o.images.filter(Boolean) : [],
      d = Math.max(1, Number(o.count) || 1);
    if (!u.length) return Promise.reject(new Error(i));
    const f = _t(),
      y = f ? {
        Authorization: f
      } : {},
      w = {
        prompt: s,
        count: d,
        images: u
      };
    return o.ratio && (w.ratio = String(o.ratio)), ut(t, {
      method: "POST",
      headers: y,
      body: JSON.stringify(w)
    }).then(S => {
      if (!((S == null ? void 0 : S.code) === 200 || (S == null ? void 0 : S.code) === 1 || (S == null ? void 0 : S.msg) === "提交成功")) {
        const x = (S == null ? void 0 : S.msg) || n,
          C = new Error(x);
        throw C.response = S, C
      }
      return (S == null ? void 0 : S.data) ?? S
    })
  }, Lk = (t = {}) => wf("/yz/shangpin/fission", t, "请先上传商品场景参考图", "场景裂变生成失败"), Dk = (t = {}) => wf("/yz/shangpin/replace", t, "请先上传商品图与场景参考图", "商品替换生成失败"), Mk = (t = {}) => wf("/yz/shangpin/handheld", t, "请先上传手持商品并选择手持姿势", "手持商品生成失败"), Ok = (t = {}) => {
    const o = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (o.length < 2) return Promise.reject(new Error("请上传目标产品图与目标场景图"));
    const i = _t();
    return ut("/yz/shangpin/materialapply", {
      method: "POST",
      headers: i ? {
        Authorization: i
      } : {},
      body: JSON.stringify({
        prompt: String(t.prompt ?? "").trim(),
        count: Math.max(1, Number(t.count) || 1),
        images: o,
        guidance: t.guidance || "",
        aspects: Array.isArray(t.aspects) ? t.aspects : [],
        replace_info: t.replace_info || "",
        keep_structure: t.keep_structure !== !1,
        base_index: Number.isInteger(t.base_index) ? t.base_index : 0,
        keep_base: t.keep_base !== !1,
        ...t.ratio ? {
          ratio: t.ratio
        } : {}
      })
    }).then(s => {
      if (!((s == null ? void 0 : s.code) === 200 || (s == null ? void 0 : s.code) === 1 || (s == null ? void 0 : s.msg) === "提交成功")) {
        const d = new Error((s == null ? void 0 : s.msg) || "产品替换生成失败");
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, Bk = (t = {}) => {
    const o = Array.isArray(t.images) ? t.images.filter(Boolean) : [],
      i = Array.isArray(t.items) ? t.items : [];
    if (!o.length) return Promise.reject(new Error("请先上传穿搭实拍图"));
    if (!i.length) return Promise.reject(new Error("请先勾选至少一件要提取的单品"));
    const n = _t();
    return ut("/yz/shangpin/outfitsplit", {
      method: "POST",
      headers: n ? {
        Authorization: n
      } : {},
      body: JSON.stringify({
        count: Math.max(1, Number(t.count) || 1),
        images: o,
        items: i,
        guidance: t.guidance || "",
        prompt: t.prompt || t.guidance || "",
        item_labels: Array.isArray(t.item_labels) ? t.item_labels : [],
        custom_item: t.custom_item || "",
        display_label: t.display_label || "",
        output_label: t.output_label || "",
        repair_label: t.repair_label || "",
        bgcolor_label: t.bgcolor_label || "",
        keep_labels: Array.isArray(t.keep_labels) ? t.keep_labels : [],
        board_title: t.board_title || "",
        extra: t.extra || "",
        ...t.ratio ? {
          ratio: t.ratio
        } : {}
      })
    }).then(u => {
      if (!((u == null ? void 0 : u.code) === 200 || (u == null ? void 0 : u.code) === 1 || (u == null ? void 0 : u.msg) === "提交成功")) {
        const f = new Error((u == null ? void 0 : u.msg) || "实拍转平铺生成失败");
        throw f.response = u, f
      }
      return (u == null ? void 0 : u.data) ?? u
    })
  }, Nk = "/yz/shangpin/suite_write", Uk = "/yz/shangpin/make_write", Rk = "/yz/shangpin/aplus_write", jk = "/yz/shangpin/suite_style", qk = "/yz/shangpin/styledescribe", Fk = "/yz/shangpin/reverse_prompt", Wk = "/yz/shangpin/fantui", Gk = "/yz/video/write", Ns = (t, o = {}, i = "接口调用失败") => {
    const n = String(o.prompt ?? "").trim(),
      s = Array.isArray(o.images) ? o.images.filter(Boolean) : [];
    if (!n) return Promise.reject(new Error("缺少提示词"));
    if (!s.length) return Promise.reject(new Error("请先上传商品图"));
    const u = _t();
    return ut(t, {
      method: "POST",
      headers: u ? {
        Authorization: u
      } : {},
      body: JSON.stringify({
        prompt: n,
        images: s
      })
    }).then(f => {
      if ((f == null ? void 0 : f.code) !== 200) {
        const y = (f == null ? void 0 : f.msg) || i,
          w = new Error(y);
        throw w.response = f, w
      }
      return (f == null ? void 0 : f.data) ?? f
    })
  }, Jk = (t, o = {}, i = "接口调用失败") => {
    const n = String(o.prompt ?? "").trim(),
      s = Array.isArray(o.images) ? o.images.filter(Boolean) : [];
    if (!s.length) return Promise.reject(new Error("请先上传商品图"));
    const u = _t();
    return ut(t, {
      method: "POST",
      headers: u ? {
        Authorization: u
      } : {},
      body: JSON.stringify({
        prompt: n,
        images: s
      })
    }).then(f => {
      if ((f == null ? void 0 : f.code) !== 200) {
        const y = (f == null ? void 0 : f.msg) || i,
          w = new Error(y);
        throw w.response = f, w
      }
      return (f == null ? void 0 : f.data) ?? f
    })
  }, Hk = "/yz/aipic/write", Qk = (t = {}) => Ns(Hk, t, "AI帮写失败"), Kk = (t = {}) => Ns(Gk, t, "智能分析失败"), Yk = (t = {}) => Ns(Nk, t, "AI帮写失败"), Xk = (t = {}) => Ns(Uk, t, "AI帮写失败"), Zk = (t = {}) => Ns(Rk, t, "AI帮写失败"), eC = (t = {}) => Jk(jk, t, "优质风格分析失败"), tC = (t = {}) => Ns(qk, t, "风格识别失败"), Wh = (t = {}) => Ns(Wk, t, "商品图反推失败"), aC = (t = {}) => {
    const o = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!o.length) return Promise.reject(new Error("请先上传图片"));
    const i = ["zh", "en", "both"].includes(t.lang) ? t.lang : "zh",
      n = String(t.prompt ?? "").trim(),
      s = _t();
    return ut(Fk, {
      method: "POST",
      headers: s ? {
        Authorization: s
      } : {},
      body: JSON.stringify({
        images: o,
        lang: i,
        prompt: n
      })
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "反推提示词失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, lC = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {};
    return t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), t.type !== void 0 && t.type !== null && t.type !== "" && (n.type = t.type), ut("/yz/shangpin/lists", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取商品图历史记录失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, nC = t => {
    if (t == null || t === "") return Promise.reject(new Error("缺少记录ID"));
    const o = _t();
    return ut("/yz/shangpin/get", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取商品图详情失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, oC = t => {
    const i = (Array.isArray(t) ? t : String(t ?? "").split(",")).map(u => String(u ?? "").trim()).filter(Boolean).join(",");
    if (!i) return Promise.reject(new Error("缺少要删除的记录ID"));
    const n = _t();
    return ut("/yz/shangpin/del", {
      method: "POST",
      headers: n ? {
        Authorization: n
      } : {},
      body: JSON.stringify({
        ids: i
      })
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = (u == null ? void 0 : u.msg) || "删除商品图历史记录失败",
          f = new Error(d);
        throw f.response = u, f
      }
      return (u == null ? void 0 : u.data) ?? u
    })
  }, iC = {
    record: "/yz/record/remark",
    aipic: "/yz/aipic/remark",
    shangpin: "/yz/shangpin/remark",
    video: "/yz/video/remark"
  }, Gh = (t, o, i = "") => {
    const n = iC[t];
    if (!n) return Promise.reject(new Error("未知的作品类型"));
    if (o == null || o === "") return Promise.reject(new Error("缺少记录ID"));
    const s = _t();
    return ut(n, {
      method: "POST",
      headers: s ? {
        Authorization: s
      } : {},
      body: JSON.stringify({
        id: o,
        remark: i == null ? "" : String(i)
      })
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "保存备注失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) ?? d
    })
  }, sC = () => {
    const t = _t();
    return ut("/yz/shangpin/get_modern", {
      method: "POST",
      headers: t ? {
        Authorization: t
      } : {},
      body: JSON.stringify({})
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取我的模特失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) ?? []
    })
  }, rC = t => {
    const o = String(t ?? "").trim();
    if (!o) return Promise.reject(new Error("缺少模特图片地址"));
    const i = _t();
    return ut("/yz/shangpin/add_modern", {
      method: "POST",
      headers: i ? {
        Authorization: i
      } : {},
      body: JSON.stringify({
        url: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "添加我的模特失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, uC = t => {
    const i = (Array.isArray(t) ? t : String(t ?? "").split(",")).map(u => String(u ?? "").trim()).filter(Boolean).join(",");
    if (!i) return Promise.reject(new Error("缺少要删除的模特ID"));
    const n = _t();
    return ut("/yz/shangpin/del_modern", {
      method: "POST",
      headers: n ? {
        Authorization: n
      } : {},
      body: JSON.stringify({
        ids: i
      })
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = (u == null ? void 0 : u.msg) || "删除我的模特失败",
          f = new Error(d);
        throw f.response = u, f
      }
      return (u == null ? void 0 : u.data) ?? u
    })
  }, Ms = t => {
    if (!t) return Promise.reject(new Error("缺少作品ID"));
    const o = _t();
    return ut("/yz/record/get", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取作品详情失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Jh = t => {
    if (!t) return Promise.reject(new Error("缺少案例ID"));
    const o = _t();
    return ut("/yz/anli/get", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取案例详情失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, yv = (t, o, i) => {
    if (!t && !o) return Promise.reject(new Error("缺少标题或内容"));
    const n = _t();
    return ut("/yz/ai/title", {
      method: "POST",
      headers: n ? {
        Authorization: n
      } : {},
      body: JSON.stringify({
        title: t || "",
        desc: o || "",
        id: i || ""
      })
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = (u == null ? void 0 : u.msg) || "生成标题失败",
          f = new Error(d);
        throw f.response = u, f
      }
      return (u == null ? void 0 : u.data) || u
    })
  }, hv = (t, o, i = "", n) => {
    if (!t && !o) return Promise.reject(new Error("缺少标题或内容"));
    const s = _t();
    return ut("/yz/ai/desc", {
      method: "POST",
      headers: s ? {
        Authorization: s
      } : {},
      body: JSON.stringify({
        title: t || "",
        desc: o || "",
        prompt: i || "",
        id: n || ""
      })
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "生成内容失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) || d
    })
  }, bv = t => {
    if (!t) return Promise.reject(new Error("缺少标题"));
    const o = _t();
    return ut("/yz/ai/cover", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        title: t || ""
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "生成封面失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, cC = t => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {
        title: t.title || "",
        desc: t.desc || "",
        images: t.images || [],
        type: t.type || 6
      };
    return t.diy !== void 0 && t.diy !== null && (n.diy = t.diy), ut("/yz/record/add", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "保存图文失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, Yu = (t, o, i, n = [], s = null) => {
    if (!t) return Promise.reject(new Error("缺少作品ID"));
    const u = _t(),
      d = u ? {
        Authorization: u
      } : {},
      f = {
        id: t,
        title: o || "",
        desc: i || "",
        images: Array.isArray(n) ? n : []
      };
    return s != null && (f.diy = s), ut("/yz/record/save", {
      method: "POST",
      headers: d,
      body: JSON.stringify(f)
    }).then(y => {
      if ((y == null ? void 0 : y.code) !== 200) {
        const w = (y == null ? void 0 : y.msg) || "保存失败",
          S = new Error(w);
        throw S.response = y, S
      }
      return (y == null ? void 0 : y.data) || y
    })
  }, _f = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少创建任务参数"));
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {};
    return qr(t, t.persona).then(n => ut("/yz/task/create", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    })).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "创建任务失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Xu = t => {
    if (!t) return Promise.reject(new Error("缺少任务ID"));
    const o = _t();
    return ut("/yz/task/get", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "查询任务失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, dC = (t = 1, o = 12, i = "") => {
    const n = _t();
    return ut("/yz/ai/editlist", {
      method: "POST",
      headers: n ? {
        Authorization: n
      } : {},
      body: JSON.stringify({
        page: t,
        limit: o,
        cat: i
      })
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) throw new Error((u == null ? void 0 : u.msg) || "获取改图记录失败");
      return (u == null ? void 0 : u.data) || {
        list: [],
        total: 0
      }
    })
  }, kf = (t, o) => {
    if (!t) return Promise.reject(new Error("缺少任务ID"));
    const i = _t();
    return ut("/yz/task/save", {
      method: "POST",
      headers: i ? {
        Authorization: i
      } : {},
      body: JSON.stringify({
        id: t,
        titles: Array.isArray(o) ? o : []
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "保存任务失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, Hh = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少创建任务参数"));
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {};
    return qr(t, t.persona).then(n => ut("/yz/task/createCopy", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    })).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "创建任务失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, vC = "", mC = t => {
    if (!t || typeof t != "object" || !t.text) return Promise.reject(new Error("缺少待处理文本"));
    {
      const o = new Error("AI 行内文案接口未配置");
      return o.code = "NOT_CONFIGURED", Promise.reject(o)
    }
  }, Cf = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少创建任务参数"));
    const o = _t();
    return ut("/yz/ai/copy", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "生成失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Af = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少创建任务参数"));
    const o = _t();
    return ut("/yz/ai/copy_ex", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "生成失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Qh = (t = {}) => {
    const o = t.page || 1,
      i = t.size || 10,
      n = _t();
    return ut("/yz/ai/get_ref_history", {
      method: "POST",
      headers: n ? {
        Authorization: n
      } : {},
      body: JSON.stringify({
        page: o,
        size: i
      })
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = (u == null ? void 0 : u.msg) || "获取历史风格图失败",
          f = new Error(d);
        throw f.response = u, f
      }
      return (u == null ? void 0 : u.data) ?? u
    })
  }, Zu = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {};
    return t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), t.keyword && (n.keyword = t.keyword), t.taskId !== void 0 && t.taskId !== null && (n.taskId = t.taskId), t.taskType !== void 0 && t.taskType !== null && (n.taskType = t.taskType), t.from && (n.from = t.from), t.startDate && (n.startDate = t.startDate), t.endDate && (n.endDate = t.endDate), t.accountId !== void 0 && t.accountId !== null && (n.accountId = t.accountId), ut("/yz/record/lists", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取作品列表失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, If = t => {
    if (!t || Array.isArray(t) && t.length === 0 || typeof t == "string" && t.trim() === "") return Promise.reject(new Error("缺少要删除的作品ID"));
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {};
    let n = "";
    return Array.isArray(t) ? n = t.map(s => String(s)).join(",") : typeof t == "string" ? n = t.trim() : n = String(t), n ? ut("/yz/record/del", {
      method: "POST",
      headers: i,
      body: JSON.stringify({
        ids: n
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "删除作品失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    }) : Promise.reject(new Error("缺少要删除的作品ID"))
  }, Kh = t => {
    if (!t && t !== 0) return Promise.reject(new Error("缺少图片ID"));
    let o = "";
    if (Array.isArray(t) ? o = t.map(s => String(s)).join(",") : typeof t == "string" ? o = t.trim() : o = String(t), !o) return Promise.reject(new Error("缺少图片ID"));
    const i = _t();
    return ut("/yz/aipic/del", {
      method: "POST",
      headers: i ? {
        Authorization: i,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ids: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "删除图片失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, xf = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {};
    return t.type && (n.type = t.type), t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), ut("/yz/task/lists", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取任务列表失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, Vr = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {};
    return t.is_release !== void 0 && t.is_release !== null && (n.is_release = t.is_release), t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), t.keyword && (n.keyword = String(t.keyword).trim()), ut("/yz/release/lists", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取发布记录失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, wv = t => {
    if (!t) return Promise.reject(new Error("缺少作品ID"));
    const o = _t();
    return ut("/yz/release/confirm", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: String(t)
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "确认发布失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, fg = (t = "") => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = t === "" || t === null || t === void 0 ? "" : `?c=${encodeURIComponent(t)}`;
    return ut(`/yz/release/liveCode${n}`, {
      method: "GET",
      headers: i
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = new Error((s == null ? void 0 : s.msg) || "获取活码失败");
        throw u.response = s, u
      }
      return (s == null ? void 0 : s.data) || {}
    })
  }, Yh = (t, o = 1, i = 20, n = "") => {
    if (!t) return Promise.reject(new Error("缺少用户ID"));
    let s = `userid=${encodeURIComponent(t)}&page=${encodeURIComponent(o)}&size=${encodeURIComponent(i)}`;
    return n !== "" && n !== null && n !== void 0 && (s += `&c=${encodeURIComponent(n)}`), ut(`/yz/release/liveList?${s}`, {
      method: "GET"
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = new Error((u == null ? void 0 : u.msg) || "获取待发布作品失败");
        throw d.response = u, d
      }
      return (u == null ? void 0 : u.data) || []
    })
  }, Xh = (t, o, i) => {
    if (!t || !o) return Promise.reject(new Error("参数错误"));
    const n = String(i || "").trim().toLowerCase(),
      s = `userid=${encodeURIComponent(t)}&noteid=${encodeURIComponent(o)}&platform=${encodeURIComponent(n)}`;
    return ut(`/yz/release/liveMark?${s}`, {
      method: "GET"
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = new Error((u == null ? void 0 : u.msg) || "标记失败");
        throw d.response = u, d
      }
      return (u == null ? void 0 : u.data) || u
    })
  }, cc = ({
    ids: t = "",
    all: o = 0,
    live: i = 1,
    codeId: n = "",
    code_id: s = ""
  } = {}) => {
    const u = Array.isArray(t) ? t.filter(Boolean).join(",") : String(t || ""),
      d = Number(o) ? 1 : 0;
    if (!d && !u) return Promise.reject(new Error("缺少作品ID"));
    const f = n !== "" && n !== null && n !== void 0 ? n : s,
      y = _t(),
      w = y ? {
        Authorization: y
      } : {},
      S = {
        ids: u,
        all: d,
        live: Number(i) ? 1 : 0
      };
    return f !== "" && f !== null && f !== void 0 && (S.code_id = String(f)), ut("/yz/release/liveSet", {
      method: "POST",
      headers: w,
      body: JSON.stringify(S)
    }).then(z => {
      if ((z == null ? void 0 : z.code) !== 200) {
        const x = new Error((z == null ? void 0 : z.msg) || "活码操作失败");
        throw x.response = z, x
      }
      return (z == null ? void 0 : z.data) || {}
    })
  }, Zh = () => {
    const t = _t();
    return ut("/yz/release/liveCodeList", {
      method: "GET",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = new Error((i == null ? void 0 : i.msg) || "获取活码列表失败");
        throw n.response = i, n
      }
      return (i == null ? void 0 : i.data) || {}
    })
  }, e0 = t => {
    const o = Array.isArray(t) ? t.filter(Boolean).join(",") : String(t || "");
    if (!o) return Promise.reject(new Error("缺少作品ID"));
    const i = _t(),
      n = i ? {
        Authorization: i
      } : {};
    return ut(`/yz/release/liveOf?ids=${encodeURIComponent(o)}`, {
      method: "GET",
      headers: n
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = new Error((s == null ? void 0 : s.msg) || "获取作品活码归属失败");
        throw u.response = s, u
      }
      return (s == null ? void 0 : s.data) || {}
    })
  }, Sf = ({
    id: t = "",
    name: o = "",
    remark: i = ""
  } = {}) => {
    const n = String(o || "").trim();
    if (!n) return Promise.reject(new Error("请填写活码名称"));
    const s = _t(),
      u = s ? {
        Authorization: s
      } : {},
      d = {
        name: n,
        remark: String(i || "")
      };
    return t !== "" && t !== null && t !== void 0 && (d.id = String(t)), ut("/yz/release/liveCodeSave", {
      method: "POST",
      headers: u,
      body: JSON.stringify(d)
    }).then(f => {
      if ((f == null ? void 0 : f.code) !== 200) {
        const y = new Error((f == null ? void 0 : f.msg) || "保存活码失败");
        throw y.response = f, y
      }
      return (f == null ? void 0 : f.data) || {}
    })
  }, t0 = ({
    id: t = "",
    moveTo: o = ""
  } = {}) => {
    if (t === "" || t === null || t === void 0) return Promise.reject(new Error("缺少活码ID"));
    const i = _t(),
      n = i ? {
        Authorization: i
      } : {},
      s = {
        id: String(t)
      };
    return o !== "" && o !== null && o !== void 0 && (s.move_to = String(o)), ut("/yz/release/liveCodeDel", {
      method: "POST",
      headers: n,
      body: JSON.stringify(s)
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = new Error((u == null ? void 0 : u.msg) || "删除活码失败");
        throw d.response = u, d
      }
      return (u == null ? void 0 : u.data) || {}
    })
  }, gC = () => Yn("/yz/geo/points", {}, "获取点数失败"), fC = (t, o = {}) => Yn("/yz/geo/list", {
    entity: t,
    ...o
  }, "获取列表失败"), pC = (t, o = {}) => Yn("/yz/geo/save", {
    entity: t,
    row: o
  }, "保存失败"), yC = (t, o) => Yn("/yz/geo/del", {
    entity: t,
    ids: Array.isArray(o) ? o : [o]
  }, "删除失败"), hC = t => Yn("/yz/geo/counts", {
    entity: t
  }, "获取分组计数失败"), bC = (t, o, i) => Yn("/yz/geo/regroup", {
    entity: t,
    from: o,
    to: i
  }, "分组处理失败"), wC = (t, o) => Yn("/yz/geo/titleSetStatus", {
    texts: t,
    status: o
  }, "更新标题状态失败"), _C = () => {
    const t = _t();
    return t ? {
      Authorization: t
    } : {}
  }, Yn = (t, o, i) => ut(t, {
    method: "POST",
    headers: _C(),
    body: JSON.stringify(o || {})
  }).then(n => {
    if ((n == null ? void 0 : n.code) !== 200) {
      const s = new Error((n == null ? void 0 : n.msg) || i);
      throw s.response = n, s
    }
    return (n == null ? void 0 : n.data) || n
  }), kC = (t = {}) => Yn("/yz/geo/article", t, "GEO文章提交失败"), CC = (t = []) => Yn("/yz/geo/articleStatus", {
    ids: t
  }, "获取文章状态失败"), AC = (t = {}) => Yn("/yz/geo/articleList", t, "获取文章列表失败"), IC = () => Yn("/yz/geo/articleUsedCounts", {}, "获取计数失败"), xC = (t = {}) => Yn("/yz/geo/articleUpdate", t, "保存失败"), SC = t => Yn("/yz/geo/articleDel", Array.isArray(t) ? {
    ids: t
  } : {
    id: t
  }, "删除失败"), EC = (t = {}) => Yn("/yz/geo/liuliang", t, "GEO流量复刻失败"), TC = (t = {}) => Yn("/yz/geo/genTagImages", t, "AI配图生成失败"), $C = (t = {}) => Yn("/yz/geo/genTitles", t, "AI选题生成失败"), PC = (t = {}) => Yn("/yz/geo/aiTemplate", t, "AI生成模板失败"), VC = (t = {}) => Yn("/yz/geo/aiAssist", t, "AI生成失败"), Ls = () => ut("/yz/good/lists", {
    method: "GET"
  }).then(t => {
    if ((t == null ? void 0 : t.code) !== 200) {
      const o = (t == null ? void 0 : t.msg) || "获取商品列表失败",
        i = new Error(o);
      throw i.response = t, i
    }
    return (t == null ? void 0 : t.data) || []
  }), Ef = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少分享参数"));
    const o = _t();
    return ut("/yz/release/share", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取分享配置失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return n
    })
  }, a0 = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少分享参数"));
    const o = t.media_type || t.mediaType || "image",
      i = t.media_url ?? t.mediaUrl ?? t.cover,
      n = Array.isArray(i) ? i : i ? [i] : [],
      s = {
        title: t.title || "",
        content: t.desc || "",
        media_type: o,
        media_url: n
      };
    return fetch("https://share.haiyantiku.cn/dy/share.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(s)
    }).then(async u => {
      if (!u.ok) throw new Error(`HTTP error! status: ${u.status}`);
      const d = await u.json();
      if ((d == null ? void 0 : d.success) !== !0 && (d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "获取短视频导出配置失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return d
    })
  }, zC = async ({
    title: t,
    content: o,
    media_type: i = "image",
    media_url: n = []
  }) => {
    const s = String(t || "").trim(),
      u = String(o || "").trim();
    if (!s || !u) throw new Error("标题和内容不能为空");
    try {
      const y = await (await fetch("https://share.haiyantiku.cn/dy/share.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: s,
          content: u,
          media_type: i,
          media_url: n
        })
      })).json();
      if (y && (y.success || y.code === 200)) return {
        success: !0,
        data: y.data || y,
        message: y.message || y.msg || "调用成功"
      };
      throw new Error(y.message || y.msg || "短视频导出接口调用失败")
    } catch (d) {
      throw console.error("短视频导出接口调用失败:", d), d
    }
  }, Ui = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少订单参数"));
    if (!t.pay_type || !t.good_id) return Promise.reject(new Error("缺少支付类型或商品ID"));
    const o = _t();
    return ut("/yz/order/makeOrder", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "创建订单失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Ds = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少订单参数"));
    if (!t.order_no) return Promise.reject(new Error("缺少订单号"));
    const o = _t();
    return ut("/yz/order/getOrderStatus", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "查询订单状态失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Tf = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少查询参数"));
    const o = _t();
    return ut("/yz/order/lists", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取订单列表失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, $f = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少查询参数"));
    const o = _t();
    return ut("/yz/pointslog/lists", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "获取点数明细失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Pf = async t => {
    const o = _t();
    return ut("/yz/card/use", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        cdk: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "卡密激活失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return n
    })
  }, l0 = async t => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = String(t || "").trim();
    return n ? ut("/yz/coupon/useCdk", {
      method: "POST",
      headers: i,
      body: JSON.stringify({
        cdk: n
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "口令兑换失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return s
    }) : Promise.reject(new Error("请输入口令"))
  }, _v = async () => {
    const t = _t();
    return ut("/yz/coupon/lists", {
      method: "POST",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取优惠券列表失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || i
    })
  }, Fd = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少创建标题组参数"));
    if (!t.name) return Promise.reject(new Error("缺少标题组名称"));
    const o = _t();
    return ut("/yz/title/addGroup", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        name: t.name
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "创建标题组失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Es = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少保存标题参数"));
    if (!t.id) return Promise.reject(new Error("缺少标题组ID"));
    if (!Array.isArray(t.titles)) return Promise.reject(new Error("标题列表必须是数组"));
    const o = _t();
    return ut("/yz/title/saveTitle", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t.id,
        titles: t.titles
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "保存标题失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Vf = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少生成参数"));
    if (!t.id) return Promise.reject(new Error("缺少标题组ID"));
    if (!t.prompt) return Promise.reject(new Error("缺少生成要求"));
    const o = _t();
    return ut("/yz/title/aiTitle", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t.id,
        prompt: t.prompt,
        count: t.count || 10
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "AI生成标题失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, LC = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少生成参数"));
    const o = t.id !== void 0 && t.id !== null && String(t.id).trim() !== "",
      i = typeof t.name == "string" && t.name.trim() !== "";
    if (!o && !i) return Promise.reject(new Error("缺少标题组ID或默认分组名称"));
    if (!t.prompt) return Promise.reject(new Error("缺少提示词 prompt"));
    const n = _t(),
      s = n ? {
        Authorization: n
      } : {},
      u = {
        prompt: t.prompt,
        count: t.count || 20
      };
    return o ? u.id = t.id : u.name = t.name.trim(), ut("/yz/title/aiXuanti", {
      method: "POST",
      headers: s,
      body: JSON.stringify(u)
    }).then(d => {
      if ((d == null ? void 0 : d.code) !== 200) {
        const f = (d == null ? void 0 : d.msg) || "AI 选题生成失败",
          y = new Error(f);
        throw y.response = d, y
      }
      return (d == null ? void 0 : d.data) || d
    })
  }, zf = () => ut("/yz/tool/types", {
    method: "GET"
  }).then(t => {
    if ((t == null ? void 0 : t.code) !== 200) {
      const o = (t == null ? void 0 : t.msg) || "获取工具分类失败",
        i = new Error(o);
      throw i.response = t, i
    }
    return (t == null ? void 0 : t.data) || []
  }), Lf = (t = {}) => {
    const o = {};
    return t.page !== void 0 && t.page !== null && (o.page = t.page), t.size !== void 0 && t.size !== null && (o.size = t.size), t.type_id !== void 0 && t.type_id !== null && (o.type_id = t.type_id), t.title !== void 0 && t.title !== null && t.title !== "" && (o.title = t.title), ut("/yz/tool/lists", {
      method: "POST",
      body: JSON.stringify(o)
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取工具列表失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || {
        pages: {},
        rows: []
      }
    })
  }, Df = t => t ? ut("/yz/tool/get", {
    method: "POST",
    body: JSON.stringify({
      id: t
    })
  }).then(o => {
    if ((o == null ? void 0 : o.code) !== 200) {
      const i = (o == null ? void 0 : o.msg) || "获取工具详情失败",
        n = new Error(i);
      throw n.response = o, n
    }
    return (o == null ? void 0 : o.data) || null
  }) : Promise.reject(new Error("缺少工具ID")), Mf = () => ut("/yz/ops/types", {
    method: "GET"
  }).then(t => {
    if ((t == null ? void 0 : t.code) !== 200) {
      const o = (t == null ? void 0 : t.msg) || "获取运营资料包分类失败",
        i = new Error(o);
      throw i.response = t, i
    }
    return (t == null ? void 0 : t.data) || []
  }), Of = (t = {}) => {
    const o = {};
    return t.page !== void 0 && t.page !== null && (o.page = t.page), t.size !== void 0 && t.size !== null && (o.size = t.size), t.type_id !== void 0 && t.type_id !== null && (o.type_id = t.type_id), t.title !== void 0 && t.title !== null && t.title !== "" && (o.title = t.title), ut("/yz/ops/lists", {
      method: "POST",
      body: JSON.stringify(o)
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取运营资料包列表失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || {
        pages: {},
        rows: []
      }
    })
  }, Bf = t => t ? ut("/yz/ops/get", {
    method: "POST",
    body: JSON.stringify({
      id: t
    })
  }).then(o => {
    if ((o == null ? void 0 : o.code) !== 200) {
      const i = (o == null ? void 0 : o.msg) || "获取运营资料包详情失败",
        n = new Error(i);
      throw n.response = o, n
    }
    return (o == null ? void 0 : o.data) || null
  }) : Promise.reject(new Error("缺少运营资料包ID")), Nf = () => ut("/yz/material/types", {
    method: "GET"
  }).then(t => {
    if ((t == null ? void 0 : t.code) !== 200) {
      const o = (t == null ? void 0 : t.msg) || "获取素材资料包分类失败",
        i = new Error(o);
      throw i.response = t, i
    }
    return (t == null ? void 0 : t.data) || []
  }), Uf = (t = {}) => {
    const o = {};
    return t.page !== void 0 && t.page !== null && (o.page = t.page), t.size !== void 0 && t.size !== null && (o.size = t.size), t.type_id !== void 0 && t.type_id !== null && (o.type_id = t.type_id), t.title !== void 0 && t.title !== null && t.title !== "" && (o.title = t.title), ut("/yz/material/lists", {
      method: "POST",
      body: JSON.stringify(o)
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取素材资料包列表失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || {
        pages: {},
        rows: []
      }
    })
  }, Rf = t => t ? ut("/yz/material/get", {
    method: "POST",
    body: JSON.stringify({
      id: t
    })
  }).then(o => {
    if ((o == null ? void 0 : o.code) !== 200) {
      const i = (o == null ? void 0 : o.msg) || "获取素材资料包详情失败",
        n = new Error(i);
      throw n.response = o, n
    }
    return (o == null ? void 0 : o.data) || null
  }) : Promise.reject(new Error("缺少素材资料包ID")), n0 = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少素材参数"));
    const {
      type: o,
      url: i,
      name: n,
      groupid: s
    } = t;
    if (o == null) return Promise.reject(new Error("缺少素材分类 type"));
    if (!i || typeof i != "string") return Promise.reject(new Error("缺少素材地址 url"));
    const u = n && typeof n == "string" ? n : "",
      d = _t(),
      f = d ? {
        Authorization: d,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      y = {
        type: o,
        url: i,
        name: u
      };
    return s != null && String(s) !== "" && (y.groupid = s), ut("/yz/source/add_source", {
      method: "POST",
      headers: f,
      body: JSON.stringify(y)
    }).then(w => {
      if ((w == null ? void 0 : w.code) !== 200) {
        const S = (w == null ? void 0 : w.msg) || "保存素材失败",
          z = new Error(S);
        throw z.response = w, z
      }
      return (w == null ? void 0 : w.data) ?? w
    })
  }, pg = t => {
    if (!t && t !== 0) return Promise.reject(new Error("缺少素材ID"));
    const o = _t();
    return ut("/yz/source/del_source", {
      method: "POST",
      headers: o ? {
        Authorization: o,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "删除素材失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, yg = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少素材参数"));
    const {
      id: o,
      type: i,
      is_use: n,
      groupid: s
    } = t;
    if (!o && o !== 0) return Promise.reject(new Error("缺少素材ID"));
    if (i == null) return Promise.reject(new Error("缺少素材分类 type"));
    if (n == null) return Promise.reject(new Error("缺少是否允许引用标志 is_use"));
    const u = _t(),
      d = u ? {
        Authorization: u,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      f = {
        id: o,
        type: i,
        is_use: n
      };
    return s !== void 0 && (f.groupid = s), ut("/yz/source/edit_source", {
      method: "POST",
      headers: d,
      body: JSON.stringify(f)
    }).then(y => {
      if ((y == null ? void 0 : y.code) !== 200) {
        const w = (y == null ? void 0 : y.msg) || "修改素材失败",
          S = new Error(w);
        throw S.response = y, S
      }
      return (y == null ? void 0 : y.data) ?? y
    })
  }, kv = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      n = {};
    return t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), t.type !== void 0 && t.type !== null && (n.type = t.type), t.groupid !== void 0 && t.groupid !== null && String(t.groupid) !== "" && (n.groupid = t.groupid), t.keyword != null && String(t.keyword).trim() !== "" && (n.keyword = String(t.keyword).trim()), ut("/yz/source/get_source", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取素材列表失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return s != null && s.data && typeof s.data == "object" ? s.data : {
        pages: {},
        rows: []
      }
    })
  }, dc = () => {
    const t = _t();
    return ut("/yz/source/get_group", {
      method: "GET",
      headers: t ? {
        Authorization: t
      } : {}
    }).then(i => {
      if ((i == null ? void 0 : i.code) !== 200) {
        const n = (i == null ? void 0 : i.msg) || "获取分组失败",
          s = new Error(n);
        throw s.response = i, s
      }
      return (i == null ? void 0 : i.data) || []
    })
  }, hg = (t = {}) => {
    const o = (t.name ?? "").toString().trim();
    if (!o) return Promise.reject(new Error("分组名称不能为空"));
    const i = {
      name: o
    };
    t.id != null && t.id !== "" && (i.id = t.id);
    const n = _t();
    return ut("/yz/source/save_group", {
      method: "POST",
      headers: n ? {
        Authorization: n,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(i)
    }).then(u => {
      if ((u == null ? void 0 : u.code) !== 200) {
        const d = (u == null ? void 0 : u.msg) || "保存分组失败",
          f = new Error(d);
        throw f.response = u, f
      }
      return (u == null ? void 0 : u.data) ?? u
    })
  }, o0 = t => {
    if (t == null || t === "") return Promise.reject(new Error("缺少分组ID"));
    const o = _t();
    return ut("/yz/source/del_group", {
      method: "POST",
      headers: o ? {
        Authorization: o,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "删除分组失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, i0 = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      n = {};
    return t.groupid !== void 0 && t.groupid !== null && String(t.groupid) !== "" && (n.groupid = t.groupid), ut("/yz/source/random", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取随机素材失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || null
    })
  }, Cv = (t = {}) => {
    const o = _t();
    if (!o) return Promise.reject(new Error("用户未登录"));
    const i = {
        Authorization: o
      },
      n = {};
    return t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), ut("/yz/title/lists", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取标题组列表失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, jf = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少修改标题组参数"));
    if (!t.id) return Promise.reject(new Error("缺少标题组ID"));
    if (!t.name) return Promise.reject(new Error("缺少标题组名称"));
    const o = _t();
    return ut("/yz/title/editGroup", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t.id,
        name: t.name
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "修改标题组失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, qf = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少删除标题组参数"));
    if (!t.id) return Promise.reject(new Error("缺少标题组ID"));
    const o = _t();
    return ut("/yz/title/delGroup", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t.id
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "删除标题组失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, s0 = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少模板数据"));
    const o = _t();
    return ut("/yz/template/save", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "保存模板失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, r0 = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {};
    return t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), ut("/yz/template/lists", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取模板列表失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, u0 = t => {
    if (!t) return Promise.reject(new Error("缺少模板ID"));
    const o = _t();
    return ut("/yz/template/del", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: String(t)
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "删除模板失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Wd = t => {
    if (!t) return Promise.reject(new Error("缺少模板ID"));
    const o = _t();
    return ut("/yz/tpl/add", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "添加到我的模板失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, Ff = t => {
    if (!t) return Promise.reject(new Error("缺少模板ID"));
    const o = _t();
    return ut("/yz/goodtpl/add", {
      method: "POST",
      headers: o ? {
        Authorization: o
      } : {},
      body: JSON.stringify({
        id: t
      })
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "添加到我的模板失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) || n
    })
  }, zr = t => {
    if (!t || typeof t != "object") return Promise.reject(new Error("缺少模板数据"));
    if (!t.name) return Promise.reject(new Error("缺少模板名称"));
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {
        name: t.name,
        industry: t.industry || "",
        age_mode: t.age_mode || "any",
        age_range: t.age_range || [],
        target_group: t.target_group || "",
        pain_points: t.pain_points || "",
        solution: t.solution || "",
        notes: t.notes || ""
      };
    return t.id && (n.id = t.id), ut("/yz/createtpl/save", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "保存模板失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || s
    })
  }, Av = (t = {}) => {
    const o = _t(),
      i = o ? {
        Authorization: o
      } : {},
      n = {};
    return t.page !== void 0 && t.page !== null && (n.page = t.page), t.size !== void 0 && t.size !== null && (n.size = t.size), ut("/yz/createtpl/lists", {
      method: "POST",
      headers: i,
      body: JSON.stringify(n)
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "获取模板列表失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) || {
        pages: {},
        rows: []
      }
    })
  }, Wf = t => {
    const o = ((t == null ? void 0 : t.prompt) ?? "").toString().trim();
    if (!o) return Promise.reject(new Error("请输入业务/品牌/产品介绍"));
    const i = _t();
    return ut("/yz/ai/autofill", {
      method: "POST",
      headers: i ? {
        Authorization: i,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = (s == null ? void 0 : s.msg) || "AI填充失败",
          d = new Error(u);
        throw d.response = s, d
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, DC = (t = {}) => {
    const o = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (!o.length) return Promise.reject(new Error("请先上传人物图"));
    const i = {
        images: o,
        mode: t.mode === "lingxi_gallery" ? "lingxi_gallery" : "lingxi"
      },
      n = String(t.styleImage ?? t.style_image ?? "").trim();
    n && (i.style_image = n);
    const s = String(t.hint ?? "").trim();
    s && (i.hint = s.slice(0, 200));
    const u = String(t.draft ?? "").trim();
    u && (i.draft = u.slice(0, 2e3));
    const d = String(t.tone ?? "").trim();
    d && (i.tone = d), t.persona && (i.persona = t.persona);
    const f = _t(),
      y = f ? {
        Authorization: f,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      w = typeof AbortSignal < "u" && typeof AbortSignal.timeout == "function" ? AbortSignal.timeout(6e4) : void 0;
    return ut("/yz/ai/renshe_write", {
      method: "POST",
      headers: y,
      body: JSON.stringify(i),
      signal: w
    }).then(S => {
      if ((S == null ? void 0 : S.code) !== 200) {
        const z = new Error((S == null ? void 0 : S.msg) || "AI帮写失败");
        throw z.response = S, z
      }
      return (S == null ? void 0 : S.data) ?? S
    }).catch(S => {
      throw (S == null ? void 0 : S.name) === "AbortError" ? new Error("AI帮写失败") : S
    })
  }, Gf = (t = {}) => {
    const o = String(t.prompt ?? "").trim();
    if (!o) return Promise.reject(new Error("请输入提示词"));
    const i = _t();
    return ut("/yz/ai/zhiding_write", {
      method: "POST",
      headers: i ? {
        Authorization: i,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: o
      })
    }).then(s => {
      if ((s == null ? void 0 : s.code) !== 200) {
        const u = new Error((s == null ? void 0 : s.msg) || "AI帮写失败");
        throw u.response = s, u
      }
      return (s == null ? void 0 : s.data) ?? s
    })
  }, Jf = (t = {}) => {
    const o = t.mode === "images" ? "images" : "text",
      i = String(t.content ?? "").trim(),
      n = Array.isArray(t.images) ? t.images.filter(Boolean) : [];
    if (o === "text") {
      if (!i) return Promise.reject(new Error("请输入要仿写的文章"))
    } else if (!n.length) return Promise.reject(new Error("请上传要提取文案的图片"));
    const s = _t(),
      u = s ? {
        Authorization: s,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      d = String(t.requirement ?? "").trim(),
      f = o === "images" ? {
        mode: "images",
        images: n
      } : {
        mode: "text",
        content: i
      };
    return d && (f.requirement = d.slice(0, 300)), ut("/yz/ai/zhiding_imitate", {
      method: "POST",
      headers: u,
      body: JSON.stringify(f)
    }).then(y => {
      if ((y == null ? void 0 : y.code) !== 200) {
        const w = new Error((y == null ? void 0 : y.msg) || "AI仿写失败");
        throw w.response = y, w
      }
      return (y == null ? void 0 : y.data) ?? y
    })
  }, MC = (t = {}) => {
    const o = _t();
    return ut("/yz/ai/super_mc_write", {
      method: "POST",
      headers: o ? {
        Authorization: o,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "AI帮写失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, OC = (t = {}) => {
    const o = _t();
    return ut("/yz/ai/super_ckt_write", {
      method: "POST",
      headers: o ? {
        Authorization: o,
        "Content-Type": "application/json"
      } : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    }).then(n => {
      if ((n == null ? void 0 : n.code) !== 200) {
        const s = (n == null ? void 0 : n.msg) || "AI帮写失败",
          u = new Error(s);
        throw u.response = n, u
      }
      return (n == null ? void 0 : n.data) ?? n
    })
  }, BC = (t = {}) => {
    const o = String(t.prompt ?? "").trim(),
      i = Array.isArray(t.images) ? t.images.filter(Boolean) : t.images ? [t.images] : [],
      n = Array.isArray(t.references) ? t.references.filter(Boolean) : t.references ? [t.references] : [];
    if (!o && !i.length && !n.length) return Promise.reject(new Error("缺少 prompt、images 或 references 参数"));
    const s = {
      prompt: o,
      images: i,
      references: n,
      mode: t.mode || "free"
    };
    typeof t.pageCount == "number" && !Number.isNaN(t.pageCount) && (s.page_count = Math.min(12, Math.max(1, Math.floor(t.pageCount)))), t.referenceLink && String(t.referenceLink).trim() && (s.reference_link = String(t.referenceLink).trim());
    const u = t.persona || null;
    u && (s.persona = $i(u));
    const d = t.customExtra;
    if (d && typeof d == "object") {
      const w = {
