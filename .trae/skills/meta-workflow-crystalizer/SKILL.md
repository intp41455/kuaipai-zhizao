---
name: meta-workflow-crystalizer
description: 智能体工作流自动沉淀与固化元能力。自动追踪统计系统与用户高频重复执行的操作工作流，达到预设频次阈值（默认3次）后，全自动将其提炼为可复用的标准化生产技能包。
triggers:
  - 工作流沉淀
  - 自动固化技能
  - 提取技能
  - 沉淀SOP
  - 工作流结晶
version: 1.0.0
author: agent-meta-system
tags: [meta-skill, workflow-crystalization, self-learning, automated-sop]
---

# 智能体工作流自动沉淀 (meta-workflow-crystalizer)

## 技能定位与核心职责
本技能是智能体系统的“经验自动沉淀器”。针对用户与 Agent 多次协同完成的复杂多步骤任务（例如：特定品类的批量脚本生成、特殊红线下的镜头替换流程等），无需工程师手动编写代码或文档，系统自动捕捉其成功执行序列、输入参数范式与输出交付物格式，在达到预设执行阈值（默认 3 次）时，全自动结构化生成标准的 `SKILL.md` 并注册为系统可用技能。

---

## 核心机制与触发阈值
- **工作流签名捕获**：提取调用链特征（如 `dissect -> adapt_script -> build_storyboard`）；
- **执行频次计数**：记录成功运行次数；
- **自动结晶触发**：当频次 $\ge 3$ 时，自动生成技能名称、触发词、SOP 步骤描述与结构化 Markdown，无缝注入技能库。
