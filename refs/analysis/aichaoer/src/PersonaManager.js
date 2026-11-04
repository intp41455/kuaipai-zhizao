// module: PersonaManager
// extracted from 02-index-8bb27f01.js.js @ 686203
{
  const o = p([]),
    i = p(!1),
    n = p(null),
    s = Le(() => o.value.filter(b => b.selected).length),
    u = b => ({
      id: b.id || b.pic_id || b.picId || `${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
      serverId: b.id || b.pic_id || b.picId || "",
      url: b.url || b.image || b.src || "",
      name: b.name || b.title || "人设图",
      selected: Number(b.is_use ?? b.isUse ?? b.selected ?? 0) === 1
    }),
    d = async () => {
      try {
        const b = await vf(),
          te = (b == null ? void 0 : b.data) || (b == null ? void 0 : b.rows) || b || [];
        o.value = (Array.isArray(te) ? te : []).map(u).filter(we => we.url)
      } catch {
        o.value = []
      }
    }, f = () => {
      window.dispatchEvent(new CustomEvent("persona-images-changed"))
    }, y = async (b, te) => {
      if (te && s.value >= uy && !b.selected) {
        A.warning(`最多只能勾选 ${uy} 张人设图`);
        return
      }
      const we = !!b.selected;
      b.selected = !!te, f();
      try {
        await mf(b.serverId || b.id, b.selected ? 1 : 0)
      } catch (ae) {
        b.selected = we, f(), A.error((ae == null ? void 0 : ae.message) || "更新人设图失败")
      }
    }, w = b => {
      n.value = b, i.value = !0
    }, S = async b => {
      var te, we;
      if (b != null && b.raw) {
        if (!((te = b.raw.type) != null && te.startsWith("image/"))) {
          A.error("请上传图片文件");
          return
        }
        try {
          const ae = await ao(b.raw);
          let me = null;
          if (ae != null && ae.data ? me = Array.isArray(ae.data) ? ae.data[0] : ae.data : typeof ae == "string" ? me = ae : ae != null && ae.url && (me = ae.url), !me) throw new Error("上传返回结果中未找到图片地址");
          const ce = await df(me),
            ue = (ce == null ? void 0 : ce.data) || ce,
            U = (ue == null ? void 0 : ue.id) || (ue == null ? void 0 : ue.pic_id) || (ue == null ? void 0 : ue.picId) || ue;
          U && (typeof U == "string" || typeof U == "number") ? o.value.unshift({
            id: U,
            serverId: U,
            url: me,
            name: b.name || ((we = b.raw) == null ? void 0 : we.name) || "人设图",
            selected: !1
          }) : await d(), f(), A.success("上传成功")
        } catch (ae) {
          A.error((ae == null ? void 0 : ae.message) || "上传失败")
        }
      }
    }, z = b => {
      La.confirm("确定删除该人设图？", "提示", {
        type: "warning"
      }).then(async () => {
        try {
          await gf(b.serverId || b.id)
        } catch (te) {
          A.error((te == null ? void 0 : te.message) || "删除失败");
          return
        }
        o.value = o.value.filter(te => te.id !== b.id), f(), A.success("已删除")
      }).catch(() => {})
    }, x = {
      baseIdentity: ["旅行度假", "美食饮品", "穿搭时尚", "摄影修图", "家居生活", "探店打卡", "户外运动", "Vlog日常", "知识科普", "好物分享", "其他"],
      realIdentity: ["旅游博主", "导游", "旅行社从业者", "酒店/民宿主", "景区工作者", "自由职业者", "旅游媒体人", "律师", "医生", "学生", "其他"],
      coreTags: ["省钱向", "客观测评", "场景式介绍", "细节控", "避坑向", "慢生活", "脑洞大开", "治愈系", "手残党友好", "搞笑担当", "其他"]
    }, C = {
      merchantType: ["纯线上商家", "纯实体店", "线上线下结合", "其他"],
      industry: ["餐饮美食", "美业护理", "时尚穿搭", "家居生活", "健身运动", "教育培训", "摄影摄像", "宠物服务", "零售百货", "科技数码", "亲子母婴", "文旅体验", "婚庆服务", "医疗健康", "汽车服务", "其他"],
      brandTone: ["高端奢华", "亲民平价", "专业权威", "年轻潮流", "文艺小众", "温馨治愈", "科技感", "复古怀旧", "自然健康", "其他"],
      sellingPoints: ["产品特色", "价格优势", "服务体验", "环境体验", "技术/专业优势", "地理位置便利", "情感连接", "其他"],
      targetCustomer: ["学生党", "职场新人/白领", "宝妈/家庭客", "游客/过路客", "健身爱好者", "美妆护肤爱好者", "本地居民", "特定兴趣群体", "其他"],
      writingStyle: ["专业干货型", "内容推荐型", "故事讲述型", "幽默搞笑型", "文艺治愈型", "极简直接型", "探店打卡型", "其他"],
      tone: ["热情店主", "专业顾问", "知心朋友", "潮流玩咖", "邻家老板", "官方品牌", "其他"],
      imageStyle: ["明亮清新", "高级冷淡", "胶片复古", "极简留白", "真实生活感", "排版精致", "暗黑系", "奶油系", "产品特写", "场景氛围", "其他"],
      marketingGoal: ["品牌曝光", "内容传播到店", "线上销售", "粉丝互动", "口碑传播", "招募会员/私域流量", "其他"],
      signaturePhrase: ["欢迎来店里打卡呀~", "坐标：XX路/XX商圈", "新客有福利，私信领取", "欢迎留言交流", "只做XX", "评论区告诉我你的XX", "其他"]
    }, V = () => ({
      type: "blogger",
      name: "",
      blogger: {
        baseIdentity: [],
        realIdentity: [],
        coreTags: [],
        story: ""
      },
      merchant: {
        brandName: "",
        address: "",
        merchantType: "",
        industry: [],
        brandTone: [],
        sellingPoints: [],
        targetCustomer: [],
        writingStyle: [],
        tone: [],
        imageStyle: [],
        marketingGoal: [],
        signaturePhrase: []
      }
    }), $ = p("blogger"), N = p([]), T = p(!1), R = p(!1), O = p(null), J = p(V()), ee = Le(() => N.value), ie = b => {
      if (!b) return {};
      if (typeof b == "string") try {
        return JSON.parse(b)
      } catch {
        return {}
      }
      return b
    }, Ae = async () => {
      try {
        const b = await mv({
            type: $.value === "blogger" ? 0 : 1,
            page: 1,
            size: 200
          }),
          te = (b == null ? void 0 : b.data) || (b == null ? void 0 : b.rows) || b || [];
        N.value = (Array.isArray(te) ? te : []).map(we => ({
          id: we.id,
          type: Number(we.type) === 1 ? "merchant" : "blogger",
          name: we.name,
          data: ie(we.data),
          createTime: we.createtime ? we.createtime * 1e3 : Date.now(),
          updateTime: we.updatetime ? we.updatetime * 1e3 : Date.now()
        }))
      } catch {
        N.value = []
      }
    };
  oa($, () => Ae());
  const F = () => {
      J.value = V(), J.value.type = $.value, R.value = !1, O.value = null, T.value = !0
    },
    Y = b => {
      const te = V();
      J.value = {
        type: b.type,
        name: b.name,
        blogger: {
          ...te.blogger,
          ...b.type === "blogger" ? b.data : {}
        },
        merchant: {
          ...te.merchant,
          ...b.type === "merchant" ? b.data : {}
        }
      }, R.value = !0, O.value = b.id, T.value = !0
    },
    ne = p(!1),
    De = async () => {
      if (!J.value.name.trim()) {
        A.warning("请输入人设名称");
        return
      }
      if (ne.value) return;
      const b = J.value.type === "blogger" ? {
          ...J.value.blogger
        } : {
          ...J.value.merchant
        },
        te = {
          id: R.value ? O.value : void 0,
          type: J.value.type === "blogger" ? 0 : 1,
          name: J.value.name.trim(),
          data: b
        };
      ne.value = !0;
      try {
        await vv(te), T.value = !1, A.success(R.value ? "已更新" : "已创建"), await Ae()
      } catch (we) {
        A.error((we == null ? void 0 : we.message) || "保存失败")
      } finally {
        ne.value = !1
      }
    }, Q = b => {
      La.confirm(`确定删除人设「${b.name}」？`, "提示", {
        type: "warning"
      }).then(async () => {
        try {
          await gv([b.id]), A.success("已删除"), await Ae()
        } catch (te) {
          A.error((te == null ? void 0 : te.message) || "删除失败")
        }
      }).catch(() => {})
    }, re = b => {
      if (!b) return "";
      const te = new Date(b);
      return `${te.getMonth()+1}-${te.getDate()}`
    };
  return Ll(() => {
    Ae(), d()
  }), (b, te) => {
    var qe;
    const we = ho,
      ae = $l,
      me = xl,
      ce = oc,
      ue = Rl,
      U = Ii,
      de = xi,
      _e = cn,
      xe = yo,
      Ce = rs,
      Re = bo,
      nt = Kn,
      tt = Vo;
    return c(), v("div", OL, [e("div", BL, [e("div", NL, [te[23] || (te[23] = e("div", {
      class: "ppi-head-left"
    }, [e("span", {
      class: "ppi-title"
    }, "人设图"), e("span", {
      class: "ppi-desc"
    }, "上传你的人物头像，勾选后将作为生成时的人物形象（最多勾选 2 张）")], -1)), e("span", UL, "已勾选 " + h(s.value) + " / 2", 1)]), e("div", RL, [(c(!0), v(Ue, null, gt(o.value, Me => (c(), v("div", {
      key: Me.id,
      class: Pe(["ppi-card", {
        selected: Me.selected
      }])
    }, [e("div", {
      class: "ppi-card-img",
      onClick: rt => w(Me)
    }, [e("img", {
      src: Me.url,
      alt: Me.name || "人设图"
    }, null, 8, qL), Me.selected ? (c(), v("span", FL, "使用中")) : M("", !0)], 8, jL), e("div", WL, [a(we, {
      "model-value": Me.selected,
      onChange: rt => y(Me, rt)
    }, {
      default: l(() => [...te[24] || (te[24] = [g("使用", -1)])]),
      _: 1
    }, 8, ["model-value", "onChange"]), a(me, {
      link: "",
      type: "danger",
      size: "small",
      onClick: rt => z(Me)
    }, {
      default: l(() => [a(ae, null, {
        default: l(() => [a(P(zn))]),
        _: 1
      }), te[25] || (te[25] = g("删除 ", -1))]),
      _: 1
    }, 8, ["onClick"])])], 2))), 128)), a(ce, {
      class: "ppi-upload",
      "auto-upload": !1,
      "show-file-list": !1,
      accept: "image/*",
      "on-change": S
    }, {
      default: l(() => [e("div", GL, [a(ae, {
        class: "ppi-upload-icon"
      }, {
        default: l(() => [a(P(Ql))]),
        _: 1
      }), te[26] || (te[26] = e("span", {
        class: "ppi-upload-text"
      }, "上传人设图", -1)), te[27] || (te[27] = e("span", {
        class: "ppi-upload-hint"
      }, "建议清晰人像图", -1))])]),
      _: 1
    })])]), a(ue, {
      modelValue: i.value,
      "onUpdate:modelValue": te[0] || (te[0] = Me => i.value = Me),
      title: ((qe = n.value) == null ? void 0 : qe.name) || "人设图预览",
      width: "520px",
      "append-to-body": ""
    }, {
      default: l(() => [n.value ? (c(), v("div", JL, [e("img", {
        src: n.value.url,
        alt: n.value.name || "人设图"
      }, null, 8, HL)])) : M("", !0)]),
      _: 1
    }, 8, ["modelValue", "title"]), e("div", QL, [a(de, {
      modelValue: $.value,
      "onUpdate:modelValue": te[1] || (te[1] = Me => $.value = Me),
      class: "pm-type-tabs"
    }, {
      default: l(() => [a(U, {
        label: "博主",
        name: "blogger"
      }), a(U, {
        label: "商家",
        name: "merchant"
      })]),
      _: 1
    }, 8, ["modelValue"]), a(me, {
      type: "primary",
      icon: P(Ql),
      onClick: F
    }, {
      default: l(() => [...te[28] || (te[28] = [g("新建人设", -1)])]),
      _: 1
    }, 8, ["icon"])]), ee.value.length === 0 ? (c(), v("div", KL, " 暂无" + h($.value === "blogger" ? "博主" : "商家") + "人设，点击右上角「新建人设」创建 ", 1)) : (c(), v("div", YL, [(c(!0), v(Ue, null, gt(ee.value, Me => {
      var rt, ct, E, _, je;
      return c(), v("div", {
        key: Me.id,
        class: "pm-card"
      }, [e("div", XL, [e("div", ZL, [a(ae, null, {
        default: l(() => [a(P(_n))]),
        _: 1
      })]), e("span", eD, h($.value === "blogger" ? "博主" : "商家"), 1)]), e("div", tD, h(Me.name), 1), $.value === "blogger" ? (c(), v("div", aD, [(rt = Me.data.baseIdentity) != null && rt.length ? (c(), v("div", lD, [te[29] || (te[29] = e("span", {
        class: "pm-info-label"
      }, "基础身份：", -1)), g(h(Me.data.baseIdentity.join("、")), 1)])) : M("", !0), (ct = Me.data.realIdentity) != null && ct.length ? (c(), v("div", nD, [te[30] || (te[30] = e("span", {
        class: "pm-info-label"
      }, "现实身份：", -1)), g(h(Me.data.realIdentity.join("、")), 1)])) : M("", !0), (E = Me.data.coreTags) != null && E.length ? (c(), v("div", oD, [te[31] || (te[31] = e("span", {
        class: "pm-info-label"
      }, "核心人设标签：", -1)), g(h(Me.data.coreTags.join("、")), 1)])) : M("", !0)])) : (c(), v("div", iD, [(_ = Me.data.industry) != null && _.length ? (c(), v("div", sD, [te[32] || (te[32] = e("span", {
        class: "pm-info-label"
      }, "所属行业：", -1)), g(h(Me.data.industry.join("、")), 1)])) : M("", !0), Me.data.merchantType ? (c(), v("div", rD, [te[33] || (te[33] = e("span", {
        class: "pm-info-label"
      }, "商家类型：", -1)), g(h(Me.data.merchantType), 1)])) : M("", !0), (je = Me.data.brandTone) != null && je.length ? (c(), v("div", uD, [te[34] || (te[34] = e("span", {
        class: "pm-info-label"
      }, "品牌调性：", -1)), g(h(Me.data.brandTone.join("、")), 1)])) : M("", !0)])), e("div", cD, "创建于 " + h(re(Me.createTime)), 1), e("div", dD, [a(me, {
        link: "",
        onClick: K => Y(Me)
      }, {
        default: l(() => [...te[35] || (te[35] = [g("编辑", -1)])]),
        _: 1
      }, 8, ["onClick"]), a(me, {
        link: "",
        type: "danger",
        onClick: K => Q(Me)
      }, {
        default: l(() => [...te[36] || (te[36] = [g("删除", -1)])]),
        _: 1
      }, 8, ["onClick"])])])
    }), 128))])), a(ue, {
      modelValue: T.value,
      "onUpdate:modelValue": te[22] || (te[22] = Me => T.value = Me),
      title: R.value ? "编辑人设" : "新建人设",
      width: "620px",
      "append-to-body": "",
      "close-on-click-modal": !1
    }, {
      footer: l(() => [a(me, {
        onClick: te[21] || (te[21] = Me => T.value = !1)
      }, {
        default: l(() => [...te[44] || (te[44] = [g("取消", -1)])]),
        _: 1
      }), a(me, {
        type: "primary",
        loading: ne.value,
        onClick: De
      }, {
        default: l(() => [...te[45] || (te[45] = [g("确定", -1)])]),
        _: 1
      }, 8, ["loading"])]),
      default: l(() => [e("div", vD, [e("div", {
        class: Pe(["pm-dt-tab", {
          active: J.value.type === "blogger"
        }]),
        onClick: te[2] || (te[2] = Me => !R.value && (J.value.type = "blogger"))
      }, "博主", 2), e("div", {
        class: Pe(["pm-dt-tab", {
          active: J.value.type === "merchant"
        }]),
        onClick: te[3] || (te[3] = Me => !R.value && (J.value.type = "merchant"))
      }, "商家", 2)]), a(tt, {
        model: J.value,
        "label-position": "top",
        class: "pm-form"
      }, {
        default: l(() => [a(xe, {
          label: "人设名称",
          required: ""
        }, {
          default: l(() => [a(_e, {
            modelValue: J.value.name,
            "onUpdate:modelValue": te[4] || (te[4] = Me => J.value.name = Me),
            placeholder: "请输入人设名称"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), J.value.type === "blogger" ? (c(), v(Ue, {
          key: 0
        }, [te[37] || (te[37] = e("div", {
          class: "pm-group-title"
        }, "身份信息", -1)), a(xe, {
          label: "基础身份"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.blogger.baseIdentity,
            "onUpdate:modelValue": te[5] || (te[5] = Me => J.value.blogger.baseIdentity = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(x.baseIdentity, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "现实身份"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.blogger.realIdentity,
            "onUpdate:modelValue": te[6] || (te[6] = Me => J.value.blogger.realIdentity = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(x.realIdentity, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "核心人设标签"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.blogger.coreTags,
            "onUpdate:modelValue": te[7] || (te[7] = Me => J.value.blogger.coreTags = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(x.coreTags, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "背景故事/人设由来"
        }, {
          default: l(() => [a(_e, {
            modelValue: J.value.blogger.story,
            "onUpdate:modelValue": te[8] || (te[8] = Me => J.value.blogger.story = Me),
            type: "textarea",
            rows: 3,
            placeholder: "简单描述你的经历或故事，让人设更有风格统一"
          }, null, 8, ["modelValue"])]),
          _: 1
        })], 64)) : (c(), v(Ue, {
          key: 1
        }, [te[38] || (te[38] = e("div", {
          class: "pm-group-title"
        }, "基本信息", -1)), a(xe, {
          label: "商家/品牌名称"
        }, {
          default: l(() => [a(_e, {
            modelValue: J.value.merchant.brandName,
            "onUpdate:modelValue": te[9] || (te[9] = Me => J.value.merchant.brandName = Me),
            type: "textarea",
            rows: 2,
            placeholder: "请输入商家名称"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), te[39] || (te[39] = e("div", {
          class: "pm-group-title"
        }, "商家基本信息", -1)), a(xe, {
          label: "经营地址"
        }, {
          default: l(() => [a(_e, {
            modelValue: J.value.merchant.address,
            "onUpdate:modelValue": te[10] || (te[10] = Me => J.value.merchant.address = Me),
            type: "textarea",
            rows: 2,
            placeholder: "请输入品牌或店铺地址"
          }, null, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "商家类型"
        }, {
          default: l(() => [a(nt, {
            modelValue: J.value.merchant.merchantType,
            "onUpdate:modelValue": te[11] || (te[11] = Me => J.value.merchant.merchantType = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.merchantType, Me => (c(), ye(Re, {
              key: Me,
              value: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["value"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "所属行业"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.industry,
            "onUpdate:modelValue": te[12] || (te[12] = Me => J.value.merchant.industry = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.industry, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), te[40] || (te[40] = e("div", {
          class: "pm-group-title"
        }, "品牌定位与特色", -1)), a(xe, {
          label: "品牌调性"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.brandTone,
            "onUpdate:modelValue": te[13] || (te[13] = Me => J.value.merchant.brandTone = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.brandTone, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "核心卖点"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.sellingPoints,
            "onUpdate:modelValue": te[14] || (te[14] = Me => J.value.merchant.sellingPoints = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.sellingPoints, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "目标客户"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.targetCustomer,
            "onUpdate:modelValue": te[15] || (te[15] = Me => J.value.merchant.targetCustomer = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.targetCustomer, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), te[41] || (te[41] = e("div", {
          class: "pm-group-title"
        }, "内容风格", -1)), a(xe, {
          label: "写作风格"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.writingStyle,
            "onUpdate:modelValue": te[16] || (te[16] = Me => J.value.merchant.writingStyle = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.writingStyle, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "语气语调"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.tone,
            "onUpdate:modelValue": te[17] || (te[17] = Me => J.value.merchant.tone = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.tone, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), te[42] || (te[42] = e("div", {
          class: "pm-group-title"
        }, "视觉风格", -1)), a(xe, {
          label: "图片风格"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.imageStyle,
            "onUpdate:modelValue": te[18] || (te[18] = Me => J.value.merchant.imageStyle = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.imageStyle, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), te[43] || (te[43] = e("div", {
          class: "pm-group-title"
        }, "营销目标", -1)), a(xe, {
          label: "营销目标"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.marketingGoal,
            "onUpdate:modelValue": te[19] || (te[19] = Me => J.value.merchant.marketingGoal = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.marketingGoal, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(xe, {
          label: "标志性用语"
        }, {
          default: l(() => [a(Ce, {
            modelValue: J.value.merchant.signaturePhrase,
            "onUpdate:modelValue": te[20] || (te[20] = Me => J.value.merchant.signaturePhrase = Me)
          }, {
            default: l(() => [(c(!0), v(Ue, null, gt(C.signaturePhrase, Me => (c(), ye(we, {
              key: Me,
              label: Me
            }, {
              default: l(() => [g(h(Me), 1)]),
              _: 2
            }, 1032, ["label"]))), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        })], 64))]),
        _: 1
      }, 8, ["model"])]),
      _: 1
    }, 8, ["modelValue", "title"])])
  }
}
