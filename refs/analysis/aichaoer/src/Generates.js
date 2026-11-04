// module: Generates
// extracted from 02-index-8bb27f01.js.js @ 632425
{
  const o = ln(),
    i = fn(),
    n = p({
      noteType: "分享",
      wordCount: "800",
      imageMode: "multi",
      contentOptions: ["addEmoji", "addHashtag", "filterBannedWords", "filterMarketingWords"]
    }),
    s = p(!1),
    u = p(!1),
    d = p(!1),
    f = p(null),
    y = Je => {
      f.value = Je
    },
    w = () => {
      f.value = null
    },
    S = p({
      industry: "",
      ageMode: "any",
      ageRange: [18, 30],
      targetGroup: "",
      painPoints: "",
      solution: "",
      notes: ""
    }),
    z = p(!1),
    x = p("single"),
    C = p(""),
    V = p(""),
    $ = p(""),
    N = p([]),
    T = [{
      id: "demo-1",
      title: "秋季穿搭灵感速览",
      image: "https://picsum.photos/seed/generates-demo-1/600/800",
      category: "穿搭"
    }, {
      id: "demo-2",
      title: "早餐搭配一周不重样",
      image: "https://picsum.photos/seed/generates-demo-2/600/800",
      category: "美食"
    }, {
      id: "demo-3",
      title: "高效健身塑形计划",
      image: "https://picsum.photos/seed/generates-demo-3/600/800",
      category: "健身"
    }, {
      id: "demo-4",
      title: "职场通勤妆容教程",
      image: "https://picsum.photos/seed/generates-demo-4/600/800",
      category: "美妆"
    }, {
      id: "demo-5",
      title: "旅行摄影构图技巧",
      image: "https://picsum.photos/seed/generates-demo-5/600/800",
      category: "摄影"
    }, {
      id: "demo-6",
      title: "效率工作台布置灵感",
      image: "https://picsum.photos/seed/generates-demo-6/600/800",
      category: "生活"
    }],
    R = ["小雨的日常", "阳光宝贝", "小猫咪爱吃鱼", "咖啡不加糖", "午后时光", "星星点灯", "月亮不睡", "爱吃甜食的猫", "周末宅家", "夏日清风", "秋日私语", "冬日暖阳", "春天的风", "夏天的雨", "秋天的叶", "追风少年", "青春无敌", "时光荏苒", "岁月如歌", "梦想家"],
    O = p(!1),
    J = p({
      title: "",
      content: "",
      tags: [],
      images: [],
      editTime: "",
      comments: []
    }),
    ee = p({
      name: "",
      avatar: ""
    }),
    ie = p(!1),
    Ae = Le(() => ({
      ...J.value,
      user: ee.value
    })),
    F = () => {
      const Je = Math.floor(Math.random() * R.length);
      return {
        name: R[Je],
        avatar: `https://picsum.photos/seed/generates-user-${Je}-${Date.now()}/40/40`
      }
    },
    Y = () => {
      let Je = F();
      return kt.value && (kt.value.nickname || kt.value.avatar) && (Je = {
        name: kt.value.nickname || Je.name,
        avatar: kt.value.avatar || Xl || Je.avatar
      }), Je.avatar || (Je.avatar = Xl), Je
    },
    ne = Je => {
      const ve = Je ? new Date(Je) : new Date;
      if (Number.isNaN(ve.getTime())) return ne(Date.now());
      const $t = ve.getFullYear(),
        ta = String(ve.getMonth() + 1).padStart(2, "0"),
        ha = String(ve.getDate()).padStart(2, "0");
      return `${$t}-${ta}-${ha}`
    },
    De = Je => {
      const ve = [`最近很多人都在问${Je}，这里整理了一份实用清单。

01 基础准备
- 明确核心目标
- 列出关键步骤
- 准备所需素材

02 实操要点
- 从易到难逐步推进
- 及时记录心得
- 避免常见踩坑

03 复盘提升
- 梳理可复制的方法
- 优化执行流程
- 持续跟进更新

欢迎收藏点赞支持～`, `如果你正在关注${Je}，可以参考以下思路：

第一部分：核心逻辑
- 直接解决哪些痛点
- 最重要的价值点
- 为什么值得投入时间

第二部分：实现路径
- 详细的操作步骤
- 辅助工具推荐
- 关键提醒与注意事项

第三部分：延伸建议
- 如何进一步放大效果
- 可以拓展的方向
- 常见问题答疑

有任何想法欢迎评论交流！`, `${Je}这个主题我实践过不少次，给大家分享些干货：

✔ 核心步骤
1. 前期资料搜集
2. 执行落地
3. 数据复盘

✔ 实用窍门
- 建议提前规划节奏
- 善用工具提升效率
- 保留过程中的灵感

✔ 我的感悟
坚持输出才是关键，多总结多记录才是持续成长的秘诀。

觉得有帮助的话点个赞吧～`];
      return ve[Math.floor(Math.random() * ve.length)]
    },
    Q = (Je = []) => {
      const ve = Je.map(ha => String(ha || "").replace(/^#/, "").trim()).filter(Boolean),
        $t = Array.from(new Set(ve)),
        ta = ["干货分享", "实用技巧", "效率提升", "场景描述", "避坑指南", "收藏推荐", "灵感库", "新手必看", "生活记录", "经验总结"].filter(ha => !$t.includes(ha));
      for (; $t.length < 6 && ta.length > 0;) $t.push(ta.shift());
      return $t.slice(0, 8)
    },
    re = Je => {
      var $t;
      if (!Je) return "";
      const ve = [];
      return Je.originalData && typeof Je.originalData.desc == "string" && ve.push(Je.originalData.desc), typeof Je.content == "string" && ve.push(Je.content), typeof Je.note == "string" && ve.push(Je.note), typeof Je.description == "string" && ve.push(Je.description), typeof Je.desc == "string" && ve.push(Je.desc), Array.isArray(Je.paragraphs) && ve.push(Je.paragraphs.join(`

`)), Array.isArray(Je.sections) && ve.push(Je.sections.map(ta => typeof ta == "string" ? ta : ta && typeof ta.text == "string" ? ta.text : "").filter(Boolean).join(`

`)), Array.isArray(Je.contents) && ve.push(Je.contents.join(`

`)), (($t = ve.find(ta => ta && ta.trim())) == null ? void 0 : $t.trim()) || ""
    },
    b = Je => {
      if (!Je) return [];
      const ve = [];
      return ["tags", "hashtags", "topics", "tagList"].forEach($t => {
        const ta = Je[$t];
        Array.isArray(ta) && ve.push(...ta)
      }), typeof Je.category == "string" && ve.push(Je.category), typeof Je.subCategory == "string" && ve.push(Je.subCategory), ve
    },
    te = Je => {
      const ve = [];
      if (Je != null && Je.originalData && Array.isArray(Je.originalData.images) && Je.originalData.images.length > 0 && Je.originalData.images.forEach(ta => {
          if (ta) {
            const ha = ta.startsWith("//") ? "https:" + ta : ta;
            ve.push(ha)
          }
        }), Je != null && Je.image && ve.push(Je.image), Array.isArray(Je == null ? void 0 : Je.images) && Je.images.forEach(ta => {
          if (ta) {
            const ha = ta.startsWith("//") ? "https:" + ta : ta;
            ve.push(ha)
          }
        }), Je != null && Je.cover) {
        const ta = Je.cover.startsWith("//") ? "https:" + Je.cover : Je.cover;
        ve.unshift(ta)
      }
      const $t = Array.from(new Set(ve.filter(Boolean)));
      if (!$t.length) {
        const ta = encodeURIComponent((Je == null ? void 0 : Je.title) || (Je == null ? void 0 : Je.id) || "example");
        for (let ha = 0; ha < 3; ha++) $t.push(`https://picsum.photos/seed/generates-${ta}-${ha}/600/800`)
      }
      return $t.slice(0, 3)
    },
    we = Je => te(Je)[0],
    ae = Je => Array.isArray(Je) ? Je.slice(0, 3).map((ve, $t) => {
      const ta = (ve == null ? void 0 : ve.text) || (ve == null ? void 0 : ve.content) || "";
      return ta ? {
        user: (ve == null ? void 0 : ve.user) || (ve == null ? void 0 : ve.nickname) || `用户${$t+1}`,
        avatar: (ve == null ? void 0 : ve.avatar) || Xl,
        text: ta,
        date: ne((ve == null ? void 0 : ve.date) || (ve == null ? void 0 : ve.createdAt) || Date.now()),
        replies: ve == null ? void 0 : ve.replies,
        pinned: !!(ve != null && ve.pinned)
      } : null
    }).filter(Boolean) : [],
    me = Je => {
      const ve = (Je == null ? void 0 : Je.title) || "精选案例",
        $t = re(Je) || De(ve),
        ta = Q(b(Je)),
        ha = te(Je),
        Qt = ne((Je == null ? void 0 : Je.updatedAt) || (Je == null ? void 0 : Je.createdAt) || Date.now());
      return {
        title: ve,
        content: $t,
        tags: ta,
        images: ha,
        editTime: Qt,
        comments: ae(Je == null ? void 0 : Je.comments)
      }
    },
    ce = Je => {
      ee.value = Y(), J.value = me(Je), O.value = !0
    },
    ue = Je => {
      const ve = Je.slice();
      for (let $t = ve.length - 1; $t > 0; $t--) {
        const ta = Math.floor(Math.random() * ($t + 1));
        [ve[$t], ve[ta]] = [ve[ta], ve[$t]]
      }
      return ve
    },
    U = async () => {
      var Je;
      try {
        const ve = await np({
          page: 1,
          size: 60,
          type_id: 0
        });
        let $t = [];
        ve && typeof ve == "object" && (Array.isArray(ve.rows) ? $t = ve.rows : Array.isArray((Je = ve.data) == null ? void 0 : Je.rows) ? $t = ve.data.rows : Array.isArray(ve.data) ? $t = ve.data : Array.isArray(ve) && ($t = ve)), $t = $t.filter(Qt => !!((Array.isArray(Qt.images) ? Qt.images : [])[0] || Qt.cover || Qt.image || Qt.img));
        const ta = ue($t).slice(0, oL);
        if (ta.length > 0) {
          N.value = ta.map(Qt => {
            let ba = "";
            Qt.images && Array.isArray(Qt.images) && Qt.images.length > 0 && (ba = Qt.images[0], ba && ba.startsWith("//") && (ba = "https:" + ba)), ba || (ba = Qt.cover || Qt.image || Qt.img || ""), ba && ba.startsWith("//") && (ba = "https:" + ba), ba || (ba = `https://picsum.photos/seed/${Qt.id||Date.now()}/600/800`);
            const Ja = Qt.first_name || Qt.second_name || Qt.type_name || "默认",
              ml = [];
            if (Qt.desc) {
              const $e = Qt.desc.match(/#[^#\s\n\r]+/g);
              $e && ml.push(...$e.map(We => We.replace("#", "")))
            }
            return {
              id: Qt.id,
              title: Qt.title || "",
              image: ba,
              cover: ba,
              images: Array.isArray(Qt.images) ? Qt.images.map($e => $e && $e.startsWith("//") ? "https:" + $e : $e) : [ba],
              category: Ja,
              desc: Qt.desc || Qt.content || "",
              content: Qt.desc || Qt.content || "",
              note: Qt.desc || Qt.content || "",
              description: Qt.desc || Qt.content || "",
              tags: ml.length > 0 ? ml : ["案例展示", "热门推荐"],
              originalData: Qt
            }
          });
          return
        }
        const ha = await xv();
        Array.isArray(ha) && ha.length > 0 ? N.value = ha.map(Qt => {
          let ba = "";
          Qt.images && Array.isArray(Qt.images) && Qt.images.length > 0 && (ba = Qt.images[0], ba && ba.startsWith("//") && (ba = "https:" + ba)), ba || (ba = `https://picsum.photos/seed/${Qt.id||Date.now()}/600/800`);
          const Ja = Qt.first_name || Qt.second_name || "默认",
            ml = [];
          if (Qt.desc) {
            const $e = Qt.desc.match(/#[^#\s\n\r]+/g);
            $e && ml.push(...$e.map(We => We.replace("#", "")))
          }
          return {
            id: Qt.id,
            title: Qt.title || "",
            image: ba,
            cover: ba,
            images: Qt.images ? Qt.images.map($e => $e && $e.startsWith("//") ? "https:" + $e : $e) : [ba],
            category: Ja,
            desc: Qt.desc || "",
            content: Qt.desc || "",
            note: Qt.desc || "",
            description: Qt.desc || "",
            tags: ml.length > 0 ? ml : ["案例展示", "热门推荐"],
            originalData: Qt
          }
        }) : N.value = T
      } catch (ve) {
        console.error("加载热门模板失败:", ve), N.value = T
      }
    }, de = p(!1), _e = p([]), xe = p(!0), Ce = p(!1), Re = p(""), nt = p(!1), tt = p(!1), qe = p(!1), Me = p(""), rt = Je => {
      if (!Je) return 0;
      let ve = 0,
        $t = 0;
      const ta = Array.from(Je);
      for (; $t < ta.length;) {
        const Qt = ta[$t].charCodeAt(0);
        if (Qt >= 19968 && Qt <= 40959) ve += 1, $t += 1;
        else if (Qt >= 48 && Qt <= 57) {
          let ba = 0;
          for (; $t < ta.length && ta[$t].charCodeAt(0) >= 48 && ta[$t].charCodeAt(0) <= 57;) ba++, $t++;
          ve += Math.ceil(ba / 2)
        } else if (Qt >= 55296 && Qt <= 56319 && $t + 1 < ta.length) {
          const ba = ta[$t + 1].charCodeAt(0);
          if (ba >= 56320 && ba <= 57343) {
            const Ja = (Qt - 55296) * 1024 + (ba - 56320) + 65536;
            (Ja >= 127744 && Ja <= 129535 || Ja >= 128512 && Ja <= 128591 || Ja >= 128640 && Ja <= 128767 || Ja >= 9728 && Ja <= 9983 || Ja >= 9984 && Ja <= 10175 || Ja >= 127456 && Ja <= 127487) && (ve += 1), $t += 2
          } else $t += 1
        } else(Qt >= 127744 && Qt <= 129535 || Qt >= 9728 && Qt <= 9983 || Qt >= 9984 && Qt <= 10175) && (ve += 1), $t += 1
      }
      return Math.ceil(ve)
    }, ct = Je => {
      const ve = Je.target.value;
      if (rt(ve) > 20) {
        let ta = ve.length;
        for (let ha = ve.length; ha >= 0; ha--) {
          const Qt = ve.substring(0, ha);
          if (rt(Qt) <= 20) {
            ta = ha;
            break
          }
        }
        V.value = ve.substring(0, ta), Je.target.value = V.value
      }
    }, E = () => {
      const Je = Me.value;
      if (rt(Je) > 20) {
        let $t = Je.length;
        for (let ta = Je.length; ta >= 0; ta--) {
          const ha = Je.substring(0, ta);
          if (rt(ha) <= 20) {
            $t = ta;
            break
          }
        }
        Me.value = Je.substring(0, $t)
      }
    }, _ = ["不限风格", "提问式", "反差式", "数字式", "话题式", "悬念式", "盘点式"], je = p(!0), K = p(!1), B = p([]), W = () => {
      it(), K.value = !0
    }, Te = Je => {
      if (!Je) return new Date().toISOString();
      const ve = Je < 1e12 ? Je * 1e3 : Je;
      return new Date(ve).toISOString()
    }, it = async () => {
      if (!localStorage.getItem("authToken")) {
        B.value = [];
        return
      }
      try {
        console.log("Generates页面：从API加载标题库数据");
        const ve = await Cv({
          page: 1,
          size: 100
        });
        ve.rows && Array.isArray(ve.rows) ? B.value = ve.rows.map($t => {
          const ta = Te($t.createtime),
            ha = Te($t.updatetime);
          let Qt = [];
          return $t.titles && Array.isArray($t.titles) && (Qt = $t.titles.map((ba, Ja) => ({
            id: Date.now() + Ja + Math.random(),
            text: ba,
            createTime: ta
          }))), {
            id: $t.id,
            name: $t.name,
            createTime: ta,
            updateTime: ha || ta,
            titles: Qt
          }
        }) : (console.warn("⚠️ API返回的数据格式不正确"), B.value = [])
      } catch (ve) {
        console.error("加载标题库失败:", ve), B.value = []
      }
    }, yt = Je => {
      if (!Je || !Je.titles || !Array.isArray(Je.titles)) return 0;
      let ve = 0;
      return Je.titles.forEach($t => {
        if ($t && $t.text) {
          const ta = $t.text.split(/\r?\n/).filter(ha => ha.trim());
          ve += ta.length
        }
      }), ve
    }, st = Je => {
      if (!Je) return "-";
      try {
        const ve = new Date(Je),
          $t = ve.getFullYear(),
          ta = String(ve.getMonth() + 1).padStart(2, "0"),
          ha = String(ve.getDate()).padStart(2, "0");
        return `${$t}-${ta}-${ha}`
      } catch {
        return "-"
      }
    }, Ie = () => {
      K.value = !1, o.push("/user?tab=title_library")
    }, pe = Je => {
      if (!Je || !Je.titles || !Array.isArray(Je.titles)) {
        A.warning("该标题组没有标题");
        return
      }
      const ve = [];
      if (Je.titles.forEach($t => {
          if ($t && $t.text) {
            const ta = $t.text.split(/\r?\n/).map(ha => ha.trim()).filter(ha => ha);
            ve.push(...ta)
          }
        }), ve.length === 0) {
        A.warning("该标题组没有有效标题");
        return
      }
      C.value.trim() ? La.confirm(`当前已有 ${xt.value} 个标题，是否追加导入 ${ve.length} 个标题？`, "确认导入", {
        confirmButtonText: "追加",
        cancelButtonText: "替换",
        type: "info"
      }).then(() => {
        C.value = C.value.trim() + `
` + ve.join(`
`), K.value = !1, A.success(`已追加导入 ${ve.length} 个标题`)
      }).catch(() => {
        C.value = ve.join(`
`), K.value = !1, A.success(`已导入 ${ve.length} 个标题`)
      }) : (C.value = ve.join(`
`), K.value = !1, A.success(`已导入 ${ve.length} 个标题`))
    }, Be = Le(() => C.value.split(/\r?\n/).map(Je => Je.trim()).filter(Boolean)), xt = Le(() => Be.value.length), Yt = Le(() => x.value === "single" ? Number($.value) || 0 : xt.value), Ye = () => {
      if (i.query) {
        if (i.query.title && (x.value = "single", V.value = String(i.query.title)), i.query.noteType && (n.value.noteType = String(i.query.noteType)), i.query.wordCount && (n.value.wordCount = String(i.query.wordCount)), i.query.titleMode, i.query.contentOptions) try {
          const Je = JSON.parse(String(i.query.contentOptions));
          if (Array.isArray(Je) && (n.value.contentOptions = Je, Je.includes("customExtra") && i.query.customExtra)) try {
            const ve = JSON.parse(String(i.query.customExtra));
            ve && typeof ve == "object" && (S.value = {
              industry: ve.industry || "",
              ageMode: ve.ageMode || "any",
              ageRange: Array.isArray(ve.ageRange) ? ve.ageRange : [18, 30],
              targetGroup: ve.targetGroup || "",
              painPoints: ve.painPoints || "",
              solution: ve.solution || "",
              notes: ve.notes || ""
            }, Wt())
          } catch (ve) {
            console.error("解析customExtra失败:", ve)
          }
        } catch (Je) {
          console.error("解析contentOptions失败:", Je)
        }
        if (i.query.customExtra && !n.value.contentOptions.includes("customExtra")) try {
          const Je = JSON.parse(String(i.query.customExtra));
          Je && typeof Je == "object" && (S.value = {
            industry: Je.industry || "",
            ageMode: Je.ageMode || "any",
            ageRange: Array.isArray(Je.ageRange) ? Je.ageRange : [18, 30],
            targetGroup: Je.targetGroup || "",
            painPoints: Je.painPoints || "",
            solution: Je.solution || "",
            notes: Je.notes || ""
          }, Wt())
        } catch (Je) {
          console.error("解析customExtra失败:", Je)
        }
      }
    };
  Ye(), Ye();
  const va = async Je => {
    try {
      const ve = await Je.raw.text();
      C.value = ve
    } catch (ve) {
      console.error(ve)
    }
  }, Ea = () => {
    const Je = `教你制作简历模板
秋季穿搭指南
学生党高效图文术
`,
      ve = new Blob([Je], {
        type: "text/plain;charset=utf-8"
      }),
      $t = URL.createObjectURL(ve),
      ta = document.createElement("a");
    ta.href = $t, ta.download = "批量标题模板.txt", ta.click(), URL.revokeObjectURL($t)
  }, ft = async () => {
    try {
      const Je = await navigator.clipboard.readText();
      V.value = Je ?? ""
    } catch (Je) {
      console.error(Je)
    }
  }, Z = () => {
    V.value = ""
  }, pt = async () => {
    try {
      const Je = await navigator.clipboard.readText();
      Me.value = Je ?? ""
    } catch (Je) {
      console.error(Je)
    }
  }, Et = () => {
    V.value = Me.value, qe.value = !1
  };
  oa(qe, Je => {
    Je && (Me.value = V.value || "")
  });
  const Mt = async () => {
    try {
      if (navigator.clipboard) try {
        const $t = await navigator.clipboard.readText();
        if ($t) {
          C.value = $t, A.success("粘贴成功");
          return
        } else {
          A.warning("剪贴板为空");
          return
        }
      } catch ($t) {
        console.log("Clipboard API 失败，尝试 execCommand:", $t)
      }
      const Je = document.createElement("textarea");
      if (document.body.appendChild(Je), Je.focus(), Je.select(), document.execCommand("paste") && Je.value) C.value = Je.value, A.success("粘贴成功");
      else {
        A.warning("当前环境不支持自动粘贴，请手动复制内容"), await Da();
        const $t = document.querySelector(".textarea-container textarea");
        $t && ($t.focus(), $t.select())
      }
      document.body.removeChild(Je)
    } catch (Je) {
      console.error("粘贴失败:", Je), A.warning("粘贴失败，请手动粘贴"), await Da();
      const ve = document.querySelector(".textarea-container textarea");
      if (ve) {
        ve.focus();
        try {
          ve.select()
        } catch ($t) {
          console.log("select 失败:", $t)
        }
      }
    }
  }, Qe = () => {
    C.value = ""
  }, j = async () => {
    var Je, ve, $t;
    if (!ie.value) {
      ie.value = !0;
      try {
        if (!Ne())
          if (be.value) {
            ht.value = !0;
            return
          } else {
            ht.value = !0;
            return
          } if ((Je = n.value.contentOptions) != null && Je.includes("customExtra")) try {
          await $v(((ve = S.value) == null ? void 0 : ve.industry) || "", {
            onEdit: () => {
              s.value = !0
            }
          })
        } catch {
          return
        }
        const ta = Number(Yt.value) || 0;
        if (ta > 0) {
          const $e = ta * 1;
          if (Number((($t = kt.value) == null ? void 0 : $t.create_points) ?? 0) < $e) {
            ca.value = $e, jt.value = !0;
            return
          }
        }
        try {
          const $e = Number(Yt.value) || 0;
          await rb({
            modeName: "批量大字报图文",
            count: $e,
            perCost: 1,
            unit: "篇",
            countLabel: "生成篇数"
          })
        } catch {
          return
        }
        const ha = Yt.value;
        if (!ha || ha <= 0) {
          A.warning("请输入有效的生成数量");
          return
        }
        await dt();
        const Qt = (_e.value || []).filter($e => $e !== "不限风格"),
          ba = {
            mode: x.value,
            type: 2,
            count: Yt.value,
            singleTitle: x.value === "single" ? V.value : "",
            titles: x.value === "import" ? Be.value : [],
            noteType: n.value.noteType,
            wordCount: n.value.wordCount,
            imageMode: n.value.imageMode,
            contentOptions: n.value.contentOptions || [],
            titleStyles: Qt,
            titleWithEmoji: de.value,
            skipTitleConfirm: xe.value
          },
          Ja = u.value || n.value.contentOptions.includes("customExtra"),
          ml = Th(Ja, S.value);
        ba.customExtra = ml ? qi(ml) : null, f.value && (ba.persona = $i(f.value));
        try {
          const $e = await _f(ba),
            We = String($e || "");
          if (!We) throw new Error("创建任务失败：未返回任务ID");
          const ze = {
            mode: x.value,
            count: Yt.value,
            singleTitle: V.value,
            titles: x.value === "import" ? Be.value : [],
            titleWithEmoji: de.value,
            useAsTitle: je.value,
            skipTitleConfirm: xe.value,
            taskId: We,
            templateId: i.query.templateId || null,
            noteType: n.value.noteType,
            wordCount: n.value.wordCount,
            imageMode: n.value.imageMode,
            contentOptions: n.value.contentOptions
          };
          sessionStorage.setItem("generateParams", JSON.stringify(ze)), A.success("任务创建成功"), o.push(`/generating1?id=${We}`)
        } catch ($e) {
          console.error("创建任务失败:", $e);
          const We = ($e == null ? void 0 : $e.message) || ($e == null ? void 0 : $e.msg) || "创建任务失败，请稍后重试";
          We.includes("点数不足") || We.includes("余额不足") || We.includes("创作点数不足") ? jt.value = !0 : A.error(We)
        }
      } finally {
        ie.value = !1
      }
    }
  }, Ee = p(!1), ht = p(!1), jt = p(!1), ca = p(0), be = p(window.innerWidth <= 768), he = p(!!localStorage.getItem("authToken")), kt = p({}), Bt = p(window.innerWidth > 768), Ze = () => {
    try {
      const Je = localStorage.getItem(ry);
      if (Je) {
        const ve = JSON.parse(Je);
        S.value = {
          industry: ve.industry || "",
          ageMode: ve.ageMode || "any",
          ageRange: Array.isArray(ve.ageRange) ? ve.ageRange : [18, 30],
          targetGroup: ve.targetGroup || "",
          painPoints: ve.painPoints || "",
          solution: ve.solution || "",
          notes: ve.notes || ""
        }, z.value = !0
      } else z.value = !1
    } catch {
      z.value = !1
    }
  }, Wt = () => {
    try {
      localStorage.setItem(ry, JSON.stringify(S.value)), z.value = !0
    } catch (Je) {
      console.error("保存失败:", Je)
    }
  }, aa = () => {
    !S.value.industry && !S.value.targetGroup && !S.value.painPoints && Ze(), s.value = !0
  };
  oa(() => n.value.contentOptions.slice(), (Je, ve) => {
    const $t = Je.includes("customExtra"),
      ta = Array.isArray(ve) ? ve.includes("customExtra") : !1;
    $t ? localStorage.setItem("generates_useCustomExtra", "true") : localStorage.setItem("generates_useCustomExtra", "false"), $t && !ta && !S.value.industry && !S.value.targetGroup && !S.value.painPoints && Ze();
    const Qt = ["filterBannedWords", "filterMarketingWords"].filter(ba => !Je.includes(ba));
    Qt.length > 0 && (n.value.contentOptions = [...Je, ...Qt])
  });
  const xa = p(null),
    Kt = Je => {
      S.value = {
        ...Je
      }, Wt(), z.value = !0, u.value = !0, n.value.contentOptions && !n.value.contentOptions.includes("customExtra") && n.value.contentOptions.push("customExtra"), s.value = !1
    },
    at = () => {
      u.value = !1, z.value = !1, n.value.contentOptions && (n.value.contentOptions = n.value.contentOptions.filter(Je => Je !== "customExtra"))
    },
    Fe = () => {
      s.value = !1
    },
    Ke = () => {
      nt.value = !1
    },
    et = () => {
      ie.value || (x.value === "single" ? (tt.value = !0, Re.value = $.value || "", Ce.value = !0) : j())
    },
    Nt = Je => {
      Re.value = String(Je)
    },
    Ut = () => {
      Re.value = ""
    },
    Ge = () => {
      ie.value || (Re.value && Number(Re.value) > 0 ? ($.value = Re.value, Ce.value = !1, tt.value && (tt.value = !1, setTimeout(() => {
        j()
      }, 100))) : A.warning("请输入有效的数量"))
    };
  oa(Ce, Je => {
    Je && (Re.value = $.value || "")
  });
  const dt = async () => {
    var Je;
    try {
      const ve = localStorage.getItem("authToken");
      if (ve && ve.trim()) {
        await new Promise($t => setTimeout($t, 200));
        try {
          const $t = await zl();
          $t ? (kt.value = {
            ...$t,
            nickname: $t.nickname || $t.nickName || "用户",
            avatar: $t.avatar || $t.avatarUrl || ""
          }, he.value = !0) : (kt.value = {}, he.value = !1)
        } catch ($t) {
          if (($t == null ? void 0 : $t.code) === 999 || ((Je = $t == null ? void 0 : $t.response) == null ? void 0 : Je.code) === 999) {
            console.warn("Token已过期，清除登录状态"), localStorage.removeItem("authToken"), kt.value = {}, he.value = !1;
            return
          }
          console.error("获取用户信息失败:", $t), kt.value = {}, he.value = !1
        }
      } else kt.value = {}, he.value = !1
    } catch (ve) {
      console.error("检查登录状态失败:", ve), he.value = !1, kt.value = {}
    }
  }, qt = () => {
    const Je = be.value;
    be.value = window.innerWidth <= 768, Je !== be.value && (Bt.value = !be.value)
  }, ka = Je => {
    Je === "profile" ? (o.push("/user"), Sa.value = !1) : Je === "wallet" ? (o.push("/user?tab=wallet"), Sa.value = !1) : Je === "recharge" ? (Ee.value = !0, Sa.value = !1) : Je === "logout" && (ui(), dt(), Sa.value = !1)
  }, Ne = () => !!localStorage.getItem("authToken"), ga = () => {
    if (!Ne()) {
      ht.value = !0;
      return
    }
    Ee.value = !0
  }, St = Je => {
    kt.value = Je, he.value = !0, ht.value = !1, A.success("登录成功"), dt()
  }, Oe = () => {
    Ee.value = !0, setTimeout(() => {
      window.dispatchEvent(new CustomEvent("switch-to-personal"))
    }, 100)
  }, Ve = () => {}, Ma = (Je = 0) => {
    if (!be.value) return;
    const ve = Je > 0 ? 100 : 0;
    setTimeout(() => {
      Da(() => {
        const $t = document.querySelector(".generates-page-floating-buttons .floating-buttons");
        $t ? ($t.style.setProperty("bottom", "10px", "important"), $t.style.setProperty("top", "auto", "important"), $t.style.setProperty("right", "10px", "important"), $t.style.setProperty("transform", "none", "important"), $t.style.setProperty("position", "fixed", "important"), $t.style.setProperty("z-index", "50", "important")) : Je < 5 && setTimeout(() => Ma(Je + 1), 200)
      })
    }, ve)
  };
  return Ll(async () => {
    Ze(), document.title = "火兔工具箱_批量大字报图文", localStorage.getItem("generates_useCustomExtra") === "true" && !n.value.contentOptions.includes("customExtra") && n.value.contentOptions.push("customExtra"), Ye(), it(), await U(), qt(), await dt(), window.addEventListener("resize", qt), window.addEventListener("resize", Ma), window.addEventListener("scroll", Ma), window.addEventListener("user-logout", dt), window.addEventListener("user-login-success", dt);
    const ve = () => {
      Ma(), setTimeout(() => Ma(), 200), setTimeout(() => Ma(), 500), setTimeout(() => Ma(), 1e3)
    };
    setTimeout(ve, 100), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
      setTimeout(ve, 100)
    }) : setTimeout(ve, 100), setTimeout(() => {
      Da(() => {
        const $t = document.querySelector(".generates-page-floating-buttons .floating-buttons");
        if ($t) {
          const ta = new MutationObserver(() => {
            Ma()
          });
          ta.observe($t, {
            attributes: !0,
            attributeFilter: ["class"]
          }), window.generatesPageFloatingButtonObserver = ta
        }
      })
    }, 200)
  }), oa(() => i.query, () => {
    Ye()
  }, {
    deep: !0
  }), Zl(() => {
    window.removeEventListener("resize", qt), window.removeEventListener("resize", Ma), window.removeEventListener("scroll", Ma), window.removeEventListener("user-logout", dt), window.removeEventListener("user-login-success", dt), window.generatesPageFloatingButtonObserver && (window.generatesPageFloatingButtonObserver.disconnect(), window.generatesPageFloatingButtonObserver = null)
  }), (Je, ve) => {
    var Xt;
    const $t = $l,
      ta = No,
      ha = bo,
      Qt = Kn,
      ba = yo,
      Ja = xl,
      ml = oc,
      $e = cn,
      We = ho,
      ze = rs,
      H = Vo,
      Lt = ri,
      Ft = Oo,
      Rt = Bo,
      Ot = Rl;
    return c(), v("div", fz, [a(ei, {
      title: "批量大字报图文",
      "is-logged-in": he.value,
      "user-info": kt.value,
      "show-mobile-menu": P(Sa),
      onMenuClick: ve[0] || (ve[0] = At => Sa.value = !0),
      onLoginClick: ve[1] || (ve[1] = At => ht.value = !0),
      onCommand: ka
    }, null, 8, ["is-logged-in", "user-info", "show-mobile-menu"]), be.value && P(Sa) ? (c(), v("div", {
      key: 0,
      class: "mobile-overlay show",
      onClick: ve[2] || (ve[2] = At => Sa.value = !1)
    })) : M("", !0), e("main", {
      class: Pe(["main-content", {
        "mobile-content": be.value
      }])
    }, [M("", !0), ve[77] || (ve[77] = e("div", {
      class: "page-title"
    }, [g("批量大字报"), e("span", {
      class: "highlight-red"
    }, "图文")], -1)), e("div", pz, [a(os)]), a(H, {
      model: n.value,
      size: "large",
      class: "form-block",
      "label-width": be.value ? "80px" : void 0
    }, {
      default: l(() => [a(ba, {
        label: "模式:",
        required: ""
      }, {
        default: l(() => [a(Qt, {
          modelValue: x.value,
          "onUpdate:modelValue": ve[3] || (ve[3] = At => x.value = At),
          class: "title-mode-radio-group"
        }, {
          default: l(() => [a(ha, {
            value: "single"
          }, {
            default: l(() => [ve[37] || (ve[37] = e("span", {
              class: "radio-text-full"
            }, "AI批量创作", -1)), ve[38] || (ve[38] = e("span", {
              class: "radio-text-mobile"
            }, "AI批量创作", -1)), a(ta, {
              content: "输入一个核心关键词标题，ai帮你创作更多数量的相似原创图文标题",
              placement: "top"
            }, {
              default: l(() => [a($t, {
                class: "help-icon help-icon-top-right"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(ha, {
            value: "import"
          }, {
            default: l(() => [ve[39] || (ve[39] = e("span", {
              class: "radio-text-full"
            }, "指定标题填写/批量导入", -1)), ve[40] || (ve[40] = e("span", {
              class: "radio-text-mobile"
            }, "标题批量导入", -1)), a(ta, {
              content: "支持批量填写或者导入成品标题，系统直接基于你提供的标题创作图文内容和图",
              placement: "top"
            }, {
              default: l(() => [a($t, {
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
      }), a(ba, {
        label: "配图:",
        required: ""
      }, {
        default: l(() => [e("div", yz, [a(Qt, {
          modelValue: n.value.imageMode,
          "onUpdate:modelValue": ve[4] || (ve[4] = At => n.value.imageMode = At),
          class: "image-mode-radio-group"
        }, {
          default: l(() => [a(ha, {
            value: "multi"
          }, {
            default: l(() => [...ve[41] || (ve[41] = [g("多封面", -1)])]),
            _: 1
          }), a(ha, {
            value: "single"
          }, {
            default: l(() => [...ve[42] || (ve[42] = [g("单封面", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), e("span", hz, h(n.value.imageMode === "single" ? "仅根据标题生成 1 张封面，正文不配图" : "根据标题和正文内容生成多张配图"), 1)])]),
        _: 1
      }), x.value === "import" ? (c(), ye(ba, {
        key: 0,
        label: "批量标题:",
        required: "",
        class: "batch-title-form-item"
      }, {
        default: l(() => [e("div", bz, [e("div", wz, [a(Ja, {
          type: "primary",
          size: "small",
          onClick: W
        }, {
          default: l(() => [...ve[43] || (ve[43] = [g("从标题库导入", -1)])]),
          _: 1
        }), a(ml, {
          class: "upload",
          "auto-upload": !1,
          accept: ".txt,.csv",
          "on-change": va,
          "show-file-list": !1
        }, {
          default: l(() => [a(Ja, {
            type: "primary",
            size: "small"
          }, {
            default: l(() => [...ve[44] || (ve[44] = [g("从本地导入txt/csv", -1)])]),
            _: 1
          })]),
          _: 1
        })]), a(Ja, {
          link: "",
          type: "primary",
          class: "download-template-btn",
          onClick: Ea
        }, {
          default: l(() => [...ve[45] || (ve[45] = [g("下载模板", -1)])]),
          _: 1
        })]), e("div", _z, [a($e, {
          modelValue: C.value,
          "onUpdate:modelValue": ve[5] || (ve[5] = At => C.value = At),
          type: "textarea",
          rows: be.value ? 3 : 6,
          placeholder: "每行一个标题，例：\\n教你制作简历模板\\n秋季穿搭指南\\n学生党高效图文术"
        }, null, 8, ["modelValue", "rows"]), e("div", kz, [C.value ? (c(), v("div", {
          key: 1,
          class: "input-action-btn clear-action-btn",
          onClick: Qe
        }, [...ve[47] || (ve[47] = [e("span", {
          class: "action-text"
        }, "清空", -1)])])) : (c(), v("div", {
          key: 0,
          class: "input-action-btn paste-action-btn",
          onClick: Mt
        }, [...ve[46] || (ve[46] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])]))])]), e("div", Cz, [e("span", Az, "已输入 " + h(xt.value) + " 个标题", 1), ve[49] || (ve[49] = e("span", {
          class: "helper-sep"
        }, null, -1)), e("div", Iz, [a(We, {
          modelValue: je.value,
          "onUpdate:modelValue": ve[6] || (ve[6] = At => je.value = At),
          disabled: ""
        }, {
          default: l(() => [ve[48] || (ve[48] = e("span", {
            class: "checkbox-text"
          }, "以上输入标题为最终图文的实际标题", -1)), a(ta, {
            content: "批量导入模式下，系统将直接使用导入的标题，无需再生成新标题",
            placement: "top"
          }, {
            default: l(() => [a($t, {
              class: "help-icon help-icon-top-right"
            }, {
              default: l(() => [a(P(Ha))]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])])])]),
        _: 1
      })) : M("", !0), x.value === "single" ? (c(), ye(ba, {
        key: 1,
        label: "标题:",
        required: "",
        class: "title-form-item"
      }, {
        default: l(() => [e("div", xz, [e("div", Sz, [e("div", Ez, [el(e("input", {
          "onUpdate:modelValue": ve[7] || (ve[7] = At => V.value = At),
          placeholder: "请输入一个标题，如：教你制作简历模板",
          class: "simple-input",
          type: "text",
          onInput: ct
        }, null, 544), [
          [En, V.value]
        ]), e("div", Tz, h(rt(V.value)) + "/20", 1)]), e("div", $z, [be.value ? M("", !0) : (c(), v("div", {
          key: 0,
          class: "input-action-btn advanced-setting-btn",
          onClick: ve[8] || (ve[8] = At => nt.value = !0)
        }, [...ve[50] || (ve[50] = [e("span", {
          class: "action-text"
        }, "高级设置", -1)])])), V.value ? (c(), v("div", {
          key: 2,
          class: "input-action-btn clear-action-btn",
          onClick: Z
        }, [...ve[52] || (ve[52] = [e("span", {
          class: "action-text"
        }, "清空", -1)])])) : (c(), v("div", {
          key: 1,
          class: "input-action-btn paste-action-btn",
          onClick: ft
        }, [...ve[51] || (ve[51] = [e("span", {
          class: "action-text"
        }, "粘贴", -1)])]))])])])]),
        _: 1
      })) : M("", !0), a(ba, {
        label: "类型:",
        required: "",
        class: "note-type-form-item"
      }, {
        default: l(() => [a(Qt, {
          modelValue: n.value.noteType,
          "onUpdate:modelValue": ve[9] || (ve[9] = At => n.value.noteType = At),
          class: "note-type-radio-group"
        }, {
          default: l(() => [a(ha, {
            value: "分享"
          }, {
            default: l(() => [...ve[53] || (ve[53] = [g("分享", -1)])]),
            _: 1
          }), a(ha, {
            value: "攻略"
          }, {
            default: l(() => [...ve[54] || (ve[54] = [g("攻略", -1)])]),
            _: 1
          }), a(ha, {
            value: "教程"
          }, {
            default: l(() => [...ve[55] || (ve[55] = [g("教程", -1)])]),
            _: 1
          }), a(ha, {
            value: "电商"
          }, {
            default: l(() => [...ve[56] || (ve[56] = [g("电商", -1)])]),
            _: 1
          }), a(ha, {
            value: "测评"
          }, {
            default: l(() => [...ve[57] || (ve[57] = [g("测评", -1)])]),
            _: 1
          }), a(ha, {
            value: "干货"
          }, {
            default: l(() => [...ve[58] || (ve[58] = [g("干货", -1)])]),
            _: 1
          }), a(ha, {
            value: "任意"
          }, {
            default: l(() => [...ve[59] || (ve[59] = [g("任意", -1)])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), a(ba, {
        label: "字数:",
        required: "",
        class: "word-count-form-item"
      }, {
        default: l(() => [e("div", Pz, [a(Qt, {
          modelValue: n.value.wordCount,
          "onUpdate:modelValue": ve[10] || (ve[10] = At => n.value.wordCount = At),
          class: "word-count-radio-group"
        }, {
          default: l(() => [a(ha, {
            value: "200"
          }, {
            default: l(() => [...ve[60] || (ve[60] = [g("200字左右", -1)])]),
            _: 1
          }), a(ha, {
            value: "300"
          }, {
            default: l(() => [...ve[61] || (ve[61] = [g("300字左右", -1)])]),
            _: 1
          }), a(ha, {
            value: "500"
          }, {
            default: l(() => [...ve[62] || (ve[62] = [g("500字左右", -1)])]),
            _: 1
          }), a(ha, {
            value: "800"
          }, {
            default: l(() => [...ve[63] || (ve[63] = [g("800字左右", -1)])]),
            _: 1
          }), a(ha, {
            value: "random"
          }, {
            default: l(() => [ve[64] || (ve[64] = e("span", {
              class: "radio-text"
            }, "前四种随机", -1)), a(ta, {
              content: "前面4种字数方案每次随机选择一个，保证内容文字数量的多样性",
              placement: "top"
            }, {
              default: l(() => [a($t, {
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
        }, 8, ["modelValue"])])]),
        _: 1
      }), a(ba, {
        label: "内容:",
        required: "",
        class: "content-options-form-item"
      }, {
        default: l(() => [a(ze, {
          modelValue: n.value.contentOptions,
          "onUpdate:modelValue": ve[11] || (ve[11] = At => n.value.contentOptions = At),
          class: "content-options-checkbox-group"
        }, {
          default: l(() => [a(We, {
            value: "addTags"
          }, {
            default: l(() => [...ve[65] || (ve[65] = [g("引用标题", -1)])]),
            _: 1
          }), a(We, {
            value: "addEmoji"
          }, {
            default: l(() => [...ve[66] || (ve[66] = [g("添加表情", -1)])]),
            _: 1
          }), a(We, {
            value: "addHashtag"
          }, {
            default: l(() => [...ve[67] || (ve[67] = [g("添加话题", -1)])]),
            _: 1
          }), a(We, {
            value: "filterBannedWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [ve[68] || (ve[68] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤敏感词", -1)), a(ta, {
              content: "说明：本系统会自动检测常见的写作问题，帮你提升内容表达。",
              placement: "top"
            }, {
              default: l(() => [a($t, {
                class: "filter-help-icon"
              }, {
                default: l(() => [a(P(Ha))]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), a(We, {
            value: "filterMarketingWords",
            class: "filter-checkbox"
          }, {
            default: l(() => [ve[69] || (ve[69] = e("span", {
              class: "filter-checkbox-text"
            }, "过滤营销词", -1)), a(ta, {
              content: "说明：本系统会识别口水句与冗余表达，帮你让内容更精炼。",
              placement: "top"
            }, {
              default: l(() => [a($t, {
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
            active: u.value
          }]),
          onClick: aa
        }, [a($t, null, {
          default: l(() => [a(Ho)]),
          _: 1
        }), e("span", Vz, [g(h(u.value ? "已关联创作信息" : "关联创作信息"), 1), a(ta, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...ve[70] || (ve[70] = [e("div", null, "填写本次创作的行业、目标人群、年龄段", -1), e("div", null, "核心卖点、解决方案与备注等关键信息", -1), e("div", null, "AI 据此精准匹配内容方向、文案与画面表达", -1)])]),
          default: l(() => [a($t, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: ve[12] || (ve[12] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), ve[71] || (ve[71] = e("span", {
          class: "suggest-hint"
        }, "（建议填）", -1))], 2), e("span", {
          class: Pe(["pill-btn", {
            active: !!f.value
          }]),
          onClick: ve[14] || (ve[14] = At => d.value = !0)
        }, [a($t, null, {
          default: l(() => [a(P(_n))]),
          _: 1
        }), e("span", zz, [g(h(f.value ? f.value.name : "绑定人设"), 1), a(ta, {
          placement: "top",
          effect: "dark"
        }, {
          content: l(() => [...ve[72] || (ve[72] = [e("div", null, "选择一个博主或商家人设进行绑定", -1), e("div", null, "AI 会沿用其身份背景、写作风格与视觉偏好", -1), e("div", null, "让生成的作品更贴合你的个人定位与一致性", -1)])]),
          default: l(() => [a($t, {
            class: "pill-btn-tip pill-btn-tip-corner",
            onClick: ve[13] || (ve[13] = lt(() => {}, ["stop"]))
          }, {
            default: l(() => [a(P(Ha))]),
            _: 1
          })]),
          _: 1
        })]), ve[73] || (ve[73] = e("span", {
          class: "suggest-hint"
        }, "（建议填）", -1))], 2)]),
        _: 1
      }), e("div", Lz, [e("div", Dz, [e("div", Mz, [a(ta, {
        content: x.value === "single" && (!V.value || !V.value.trim()) || x.value === "import" && xt.value === 0 ? "请您先输入内容，再点击按钮执行" : "",
        placement: "top",
        disabled: !(x.value === "single" && (!V.value || !V.value.trim()) || x.value === "import" && xt.value === 0)
      }, {
        default: l(() => [a(Ja, {
          type: "primary",
          size: "large",
          class: "generate-btn",
          loading: ie.value,
          disabled: x.value === "single" && (!V.value || !V.value.trim()) || x.value === "import" && xt.value === 0 || ie.value,
          onClick: et
        }, {
          default: l(() => [...ve[74] || (ve[74] = [g(" 批量大字报图文（消耗1/篇） ", -1)])]),
          _: 1
        }, 8, ["loading", "disabled"])]),
        _: 1
      }, 8, ["content", "disabled"]), a(ta, {
        content: "说明：每生成1篇图文需要消耗1次生成，本次消耗的生成次数与您填写的创作数量一致。",
        placement: "top"
      }, {
        default: l(() => [a($t, {
          class: "help-icon help-icon-close action-help-icon"
        }, {
          default: l(() => [a(P(Ha))]),
          _: 1
        })]),
        _: 1
      })])]), ve[75] || (ve[75] = e("div", {
        class: "case-display-tip"
      }, "成品图文案例展示区", -1))]), N.value.length > 0 ? (c(), v("div", Oz, [e("div", Bz, [(c(!0), v(Ue, null, gt(N.value, At => (c(), v("div", {
        key: At.id || At.title,
        class: "example-card",
        onClick: pa => ce(At)
      }, [e("div", Uz, [e("img", {
        src: we(At),
        alt: At.title || "案例预览",
        class: "card-image"
      }, null, 8, Rz), ve[76] || (ve[76] = e("div", {
        class: "card-hover-overlay"
      }, [e("div", {
        class: "hover-text-line2"
      }, "点击预览")], -1))])], 8, Nz))), 128))])])) : M("", !0)]),
      _: 1
    }, 8, ["model", "label-width"])], 2), a(Hr, {
      modelValue: O.value,
      "onUpdate:modelValue": ve[15] || (ve[15] = At => O.value = At),
      "is-mobile": be.value,
      data: Ae.value,
      title: "案例图文预览"
    }, null, 8, ["modelValue", "is-mobile", "data"]), a(Lt, {
      "recharge-type": "dialog",
      "distribution-link": "/user?tab=distribution",
      onOpenRecharge: ga,
      onOpenLogin: ve[16] || (ve[16] = At => ht.value = !0),
      class: "generates-page-floating-buttons"
    }), a(Os, {
      modelValue: S.value,
      "onUpdate:modelValue": ve[17] || (ve[17] = At => S.value = At),
      visible: s.value,
      "onUpdate:visible": ve[18] || (ve[18] = At => s.value = At),
      mode: "dialog",
      "is-mobile": be.value,
      "show-history-tip": !0,
      onConfirm: Kt,
      onCancel: Fe,
      onClearHistory: at,
      ref_key: "customExtraFormRef",
      ref: xa
    }, null, 8, ["modelValue", "visible", "is-mobile"]), a(gc, {
      modelValue: d.value,
      "onUpdate:modelValue": ve[19] || (ve[19] = At => d.value = At),
      "bound-persona": f.value,
      onBind: y,
      onUnbind: w
    }, null, 8, ["modelValue", "bound-persona"]), a(Ot, {
      modelValue: nt.value,
      "onUpdate:modelValue": ve[24] || (ve[24] = At => nt.value = At),
      title: "高级设置",
      width: be.value ? "90%" : "500px",
      center: ""
    }, {
      footer: l(() => [a(Ja, {
        onClick: ve[23] || (ve[23] = At => nt.value = !1)
      }, {
        default: l(() => [...ve[82] || (ve[82] = [g("取消", -1)])]),
        _: 1
      }), a(Ja, {
        type: "primary",
        onClick: Ke
      }, {
        default: l(() => [...ve[83] || (ve[83] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [a(H, {
        "label-width": "140px",
        "label-position": "right",
        class: "advanced-settings-form"
      }, {
        default: l(() => [a(ba, {
          label: "多标题风格指定："
        }, {
          default: l(() => [a(Rt, {
            modelValue: _e.value,
            "onUpdate:modelValue": ve[20] || (ve[20] = At => _e.value = At),
            multiple: "",
            "collapse-tags": "",
            placeholder: "请选择标题风格",
            style: {
              width: "200px"
            }
          }, {
            default: l(() => [(c(), v(Ue, null, gt(_, At => a(Ft, {
              key: At,
              label: At,
              value: At
            }, null, 8, ["label", "value"])), 64))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(ba, {
          label: "标题带emo表情："
        }, {
          default: l(() => [a(Qt, {
            modelValue: de.value,
            "onUpdate:modelValue": ve[21] || (ve[21] = At => de.value = At),
            class: "radio-group-inline"
          }, {
            default: l(() => [a(ha, {
              value: !0,
              class: "radio-inline"
            }, {
              default: l(() => [...ve[78] || (ve[78] = [g("是", -1)])]),
              _: 1
            }), a(ha, {
              value: !1,
              class: "radio-inline"
            }, {
              default: l(() => [...ve[79] || (ve[79] = [g("否", -1)])]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }), a(ba, {
          label: "是否审核AI标题："
        }, {
          default: l(() => [a(Qt, {
            modelValue: xe.value,
            "onUpdate:modelValue": ve[22] || (ve[22] = At => xe.value = At),
            class: "radio-group-inline"
          }, {
            default: l(() => [a(ha, {
              value: !1,
              class: "radio-inline"
            }, {
              default: l(() => [ve[80] || (ve[80] = e("span", {
                class: "radio-label-text"
              }, "是", -1)), a(ta, {
                content: "勾选是，代表需要先生成标题进行确认后才能生成图文",
                placement: "top-end"
              }, {
                default: l(() => [a($t, {
                  class: "help-icon-inline"
                }, {
                  default: l(() => [a(P(Ha))]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), a(ha, {
              value: !0,
              class: "radio-inline"
            }, {
              default: l(() => [ve[81] || (ve[81] = e("span", {
                class: "radio-label-text"
              }, "否", -1)), a(ta, {
                content: "勾选否，则一步到位生成图文",
                placement: "top-end"
              }, {
                default: l(() => [a($t, {
                  class: "help-icon-inline"
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
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Ot, {
      modelValue: qe.value,
      "onUpdate:modelValue": ve[28] || (ve[28] = At => qe.value = At),
      title: "输入标题",
      width: be.value ? "90%" : "500px",
      center: "",
      class: "title-input-dialog"
    }, {
      footer: l(() => [a(Ja, {
        onClick: ve[27] || (ve[27] = At => qe.value = !1)
      }, {
        default: l(() => [...ve[86] || (ve[86] = [g("取消", -1)])]),
        _: 1
      }), a(Ja, {
        type: "primary",
        onClick: Et
      }, {
        default: l(() => [...ve[87] || (ve[87] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", jz, [e("div", qz, [a($e, {
        modelValue: Me.value,
        "onUpdate:modelValue": ve[25] || (ve[25] = At => Me.value = At),
        placeholder: "请输入一个标题，如：教你制作简历模板",
        type: "text",
        size: "large",
        class: "dialog-title-input",
        onKeyup: gn(Et, ["enter"]),
        onInput: E
      }, null, 8, ["modelValue"]), e("div", Fz, h(rt(Me.value)) + "/20", 1)]), e("div", Wz, [Me.value ? (c(), v("div", {
        key: 1,
        class: "dialog-action-btn clear-action-btn",
        onClick: ve[26] || (ve[26] = At => Me.value = "")
      }, [...ve[85] || (ve[85] = [e("span", {
        class: "action-text"
      }, "清空", -1)])])) : (c(), v("div", {
        key: 0,
        class: "dialog-action-btn paste-action-btn",
        onClick: pt
      }, [...ve[84] || (ve[84] = [e("span", {
        class: "action-text"
      }, "粘贴", -1)])]))])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Ot, {
      modelValue: Ce.value,
      "onUpdate:modelValue": ve[31] || (ve[31] = At => Ce.value = At),
      title: "创作数量",
      width: be.value ? "90%" : "400px",
      center: "",
      class: "count-dialog"
    }, {
      footer: l(() => [a(Ja, {
        onClick: ve[30] || (ve[30] = At => Ce.value = !1)
      }, {
        default: l(() => [...ve[90] || (ve[90] = [g("取消", -1)])]),
        _: 1
      }), a(Ja, {
        type: "primary",
        onClick: Ge
      }, {
        default: l(() => [...ve[91] || (ve[91] = [g("确定", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", Gz, [e("div", Jz, [ve[88] || (ve[88] = e("div", {
        class: "recommended-label"
      }, "推荐数量：", -1)), e("div", Hz, [(c(), v(Ue, null, gt([10, 20, 50, 100], At => a(Ja, {
        key: At,
        size: "small",
        type: Re.value === String(At) ? "primary" : "default",
        class: "recommended-count-btn",
        onClick: pa => Nt(At)
      }, {
        default: l(() => [g(h(At), 1)]),
        _: 2
      }, 1032, ["type", "onClick"])), 64))])]), e("div", Qz, [ve[89] || (ve[89] = e("div", {
        class: "custom-label"
      }, "自定义数量：", -1)), a($e, {
        modelValue: Re.value,
        "onUpdate:modelValue": ve[29] || (ve[29] = At => Re.value = At),
        placeholder: "请输入数量",
        inputmode: "numeric",
        maxlength: "4",
        type: "number",
        class: "custom-count-input",
        onKeyup: gn(Ge, ["enter"])
      }, {
        suffix: l(() => [Re.value ? (c(), ye($t, {
          key: 0,
          class: "clear-icon",
          onClick: Ut
        }, {
          default: l(() => [a(P(un))]),
          _: 1
        })) : M("", !0)]),
        _: 1
      }, 8, ["modelValue"])])])]),
      _: 1
    }, 8, ["modelValue", "width"]), a(Wn, {
      modelValue: Ee.value,
      "onUpdate:modelValue": ve[32] || (ve[32] = At => Ee.value = At)
    }, null, 8, ["modelValue"]), a(no, {
      modelValue: ht.value,
      "onUpdate:modelValue": ve[33] || (ve[33] = At => ht.value = At),
      onLoginSuccess: St
    }, null, 8, ["modelValue"]), a(mc, {
      modelValue: jt.value,
      "onUpdate:modelValue": ve[34] || (ve[34] = At => jt.value = At),
      "current-points": (Xt = kt.value) == null ? void 0 : Xt.create_points,
      "required-points": ca.value,
      onRecharge: Oe,
      onCancel: Ve
    }, null, 8, ["modelValue", "current-points", "required-points"]), a(Ot, {
      modelValue: K.value,
      "onUpdate:modelValue": ve[36] || (ve[36] = At => K.value = At),
      width: be.value ? "90%" : "600px",
      center: ""
    }, {
      header: l(() => [e("div", Kz, [ve[93] || (ve[93] = e("span", {
        class: "dialog-title"
      }, "全部标题组", -1)), a(Ja, {
        type: "primary",
        size: "small",
        onClick: Ie
      }, {
        default: l(() => [...ve[92] || (ve[92] = [g("创建标题", -1)])]),
        _: 1
      })])]),
      footer: l(() => [a(Ja, {
        onClick: ve[35] || (ve[35] = At => K.value = !1)
      }, {
        default: l(() => [...ve[94] || (ve[94] = [g("取消", -1)])]),
        _: 1
      })]),
      default: l(() => [e("div", Yz, [B.value.length === 0 ? (c(), v("div", Xz, " 暂无标题组，请先在个人中心创建标题组 ")) : (c(), v("div", Zz, [(c(!0), v(Ue, null, gt(B.value, At => (c(), v("div", {
        key: At.id,
        class: "library-item",
        onClick: pa => pe(At)
      }, [e("div", tL, [e("div", aL, h(At.name), 1), e("div", lL, [e("span", null, "共 " + h(yt(At)) + " 个标题", 1), e("span", nL, "创建：" + h(st(At.createTime)), 1)])]), a($t, {
        class: "library-arrow"
      }, {
        default: l(() => [a(P(Wl))]),
        _: 1
      })], 8, eL))), 128))]))])]),
      _: 1
    }, 8, ["modelValue", "width"])])
  }
}
