// module: Product
// extracted from 02-index-8bb27f01.js.js @ 1665766
{
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
