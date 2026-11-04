// module: Product2
// extracted from 02-index-8bb27f01.js.js @ 1685508
{
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
