---
name: meta-skill-discoverer
description: Agent 智能体技能主动检索与自发现元能力。根据用户输入、任务场景与上下文意图，自动在技能库与全网检索、筛选并智能推荐装配最契合的专业技能包。
triggers:
  - 检索技能
  - 匹配技能
  - 推荐技能
  - 智能装配
  - 元能力发现
version: 1.0.0
author: agent-meta-system
tags: [meta-skill, skill-discovery, auto-mount, agent-evolution]
---

# 智能体技能主动检索与推荐 (meta-skill-discoverer)

## 技能定位与核心职责
本技能是 AI Agent 智能体系统的“主动感知与能力外挂中枢”。当用户提出任何任务需求（如短视频拉片、团购算账、探店调研）时，Agent 不再局限于固定固化的能力，而是主动分析任务的输入输出特征与行业领域，从本地技能库和网络技能市场中快速检索、契合度打分，并无感自动装配对应的专业技能。

---

## 核心工作流程
1. **意图特征向量化与关键词提取**：分析用户提示词中的核心业务动词（如“测款”、“分镜”、“保本点”、“投流”）；
2. **多源技能库倒排检索**：对比本地 `.trae/skills/`、系统注册表与预装技能的 triggers 与 description；
3. **加权推荐与动态挂载**：输出 Top 3 推荐技能及匹配理由，并在 Agent 执行上下文中自动激活对应的 SOP 规范指令。
