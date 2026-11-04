# 快拍智造 (AI 爆款视频工场) · Trae CN 专属接手与运维交接手册

> **文档定位**：供用户直接转交给 **Trae CN**（或任何 IDE/Agent）接盘继续开发、调试与 24 小时部署上线的完整权威指南。  
> **出桩日期**：2026-11-04  
> **当前版本**：`v1.2.0-flat-magpie`（UI 扁平化精简版 + 喜鹊网关原生驱动版）  
> **代码仓库**：https://github.com/intp41455/kuaipai-zhizao （Private 私有仓库，分支 `main`）  
> **本地根目录**：`C:\Users\intpj\Downloads\untitled (2)`

---

## ⚡ 0. 给 Trae CN 的一键开场指令（直接复制这段发给 Trae）

```text
你好 Trae，请接手协助我继续开发和运维「快拍智造 · AI 爆款视频工场」项目。
请先阅读根目录下的 TRAE_HANDOFF.md。

项目核心现状：
1. 本地目录：C:\Users\intpj\Downloads\untitled (2)
2. Git 仓库：已推送到 GitHub 私有仓 intp41455/kuaipai-zhizao (main 分支，注意 origin 使用 ssh://git@ssh.github.com:443 协议)。
3. 技术栈：React 19 + TypeScript + Tailwind CSS (Vite SPA) + Express 后端 (Node 24 直接运行 server.ts)。
4. AI 网关：已无缝对接本地「喜鹊网关 (Magpie)」http://127.0.0.1:3425，跑 gemini-3.8-flash 模型，无需官方 Gemini Key。
5. 数据库：Google Firebase Firestore 云端数据库，前端直连，无需迁移。
6. UI 与逻辑：UI 已完成全局扁平化和信息架构精简（商铺经营三合一、工作台胶囊收敛），生产启动和兜底路由 bug 已修复。

请基于当前架构，按我的下一步指令协助我完成后续开发或 24 小时在线部署。
```

---

## 🧭 1. 项目核心资产与环境基准表

| 维度 | 参数 / 路径 | 说明与规范 |
|---|---|---|
| **本地工作区** | `C:\Users\intpj\Downloads\untitled (2)` | 项目唯一物理代码工作区 |
| **Git 远端** | `ssh://git@ssh.github.com:443/intp41455/kuaipai-zhizao.git` | **必须走 SSH 443 端口**，本机直连 `github.com:443` 有间歇性重置 |
| **生效分支** | `main` | 提交包含扁平化、全量入库、生产 Bug 修复与网关支持 |
| **Node.js** | `v24.19.0` | 支持原生执行 TS，但必须遵守 CJS 类型拆分规范 |
| **本地 Web 端口** | `http://localhost:3000` | 前后端一体伺服（开发与生产均使用 3000） |
| **AI 喜鹊网关** | `http://127.0.0.1:3425` | 喜鹊 (Magpie) 原生兼容 Google Gemini v1beta 协议 |
| **网关模型** | `gemini-3.8-flash` / `antigravity/gemini-3.8-flash` | 网关已实测，0 延迟毫秒级流式响应 |
| **网关密钥** | `sk-magpie-key-e2f7ab7c70e50518940009c911e752f0c7ff930194b315cf` | 配在项目根目录 `.env`（已设 gitignore，防泄露） |
| **云端数据库** | `red-archive-507800-r0` | Google Cloud Firebase Firestore，实例 ID: `ai-studio-d3878c13-...` |

---

## 🏗️ 2. 两张系统架构图

### 架构图 A：【适合人类阅读】—— 业务流与 24 小时部署全景图

```
                ┌──────────────────────────────────────────────┐
                │             用户 / 访客 / 手机浏览器          │
                └──────────────────────┬───────────────────────┘
                                       │ 访问你的公网域名 (HTTPS)
                                       ▼
     ┌─────────────────────────────────────────────────────────────────┐
     │           Cloudflare 全球边缘网络 (CDN + WAF + SSL)              │
     │   负责：公网 DNS 解析、SSL 证书自动下发、防 DDoS、24小时高可用   │
     └─────────────────────────────────┬───────────────────────────────┘
                                       │ Cloudflare Tunnel 加密内网穿透
                                       ▼
 ╔═════════════════════════════════════════════════════════════════════════╗
 ║                你的本地电脑 / 家用低功耗小主机 / 24小时服务器            ║
 ║                                                                         ║
 ║  ┌──────────────────────────────────────────────────────────────────┐  ║
 ║  │   [快拍智造全栈服务] (Node 24 + Express + Vite SPA) :3000         │  ║
 ║  │   • 前端页面：React 19 爆款工场、分镜设计台、商铺经营、视频混剪  │  ║
 ║  │   • 后端接口：/api/ai/* 系列路由，负责提示词封装、拉片拆解       │  ║
 ║  └─────────────────┬──────────────────────────────┬─────────────────┘  ║
 ║                    │ 本地高速内网请求             │                    ║
 ║                    ▼                              │                    ║
 ║  ┌─────────────────────────────────┐              │                    ║
 ║  │   [喜鹊网关 Magpie] :3425        │              │                    ║
 ║  │   • 协议：Gemini v1beta 原生兼容│              │                    ║
 ║  │   • 模型：gemini-3.8-flash      │              │                    ║
 ║  │   • 作用：0成本无限额AI大脑输出  │              │                    ║
 ║  └─────────────────────────────────┘              │                    ║
 ╚═══════════════════════════════════════════════════╪═════════════════════╝
                                                     │ 前端 SDK 直连云端
                                                     ▼
     ┌─────────────────────────────────────────────────────────────────┐
     │             Google Firebase Firestore 全球云端数据库            │
     │   负责：用户资产、店铺知识库、员工素材、爆款模板库永久保存      │
     │   状态：完全云端托管，换任何电脑或服务器部署【零迁移】！         │
     └─────────────────────────────────────────────────────────────────┘
```

---

### 架构图 B：【适合各种 Agent 阅读】—— 工业级技术契约与故障域规范

```
+--------------------------------------------------------------------------------------------------+
| LAYER 0: INGRESS & TUNNELING BOUNDARY                                                            |
| Public Ingress: https://<custom-domain> ---> Cloudflare Anycast CDN ---> [Cloudflare Tunnel]    |
| Protocol: QUIC / HTTP2 over TLS 1.3 ---> Local cloudflared daemon ---> Reverse Proxy to 127.0.0.1:3000 |
+-----------------------------------------------------------------+--------------------------------+
                                                                  |
                                                                  v
+--------------------------------------------------------------------------------------------------+
| LAYER 1: HOST RUNTIME & APPLICATION LAYER (Process: node server.ts, PID port 3000, 0.0.0.0)      |
| CWD: C:\Users\intpj\Downloads\untitled (2) | Node Engine: v24.19.0 (ESM Loader enabled)          |
| Entrypoint: server.ts                                                                            |
|                                                                                                  |
| [Static Asset Pipeline]                                                                          |
| - Production: express.static(path.join(__dirname, 'dist')) with Cache-Control                    |
| - Fallback Router: app.get('*', sendFile(dist/index.html)) [Fixed Express 4.22.3 wildcard bug]   |
|                                                                                                  |
| [Controller / API Endpoints Pipeline]                                                            |
| - POST /api/ai/agent-execute       : Autonomous Agent script planning loop                      |
| - POST /api/ai/generate-project    : Storyboard & video prompt generation                       |
| - POST /api/ai/smart-assist        : Real-time copy & hook booster                              |
| - POST /api/ai/dissect             : Video dissection & structural reverse engineering          |
| - GET  /api/health                 : Health check returning model & rbac status                 |
+--------------------------------+--------------------------------+--------------------------------+
                                 |                                |
  HTTP Client: @google/genai SDK |                                | Firebase Web SDK (v13.1.0)
  Transport: REST over HTTP/1.1  |                                | Transport: gRPC-web / HTTPS
  Config: {                      |                                | Source: firebase-applet-config.json
    baseUrl: GEMINI_BASE_URL,    |                                |
    apiKey: GEMINI_API_KEY       |                                |
  }                              |                                |
                                 v                                v
+----------------------------------------------------+  +------------------------------------------+
| LAYER 2: LOCAL AI INFERENCE GATEWAY                |  | LAYER 3: CLOUD DATA & STATE (PERSISTENT) |
| Daemon: Magpie (喜鹊网关)                          |  | Service: Google Cloud Firestore          |
| In-addr: http://127.0.0.1:3425                     |  | Project: red-archive-507800-r0           |
| Supported Wire Protocols:                          |  | Database ID: ai-studio-d3878c13-...      |
| 1. Google Gemini Native v1beta:                    |  | Security Rules: firestore.rules          |
|    POST /v1beta/models/<model>:generateContent     |  | Collections:                             |
| 2. OpenAI Compatible:                              |  | - /users/{userId}                        |
|    POST /v1/chat/completions                       |  | - /projects/{projectId}                  |
| Active Target Model: antigravity/gemini-3.8-flash  |  | - /templates/{templateId}                |
| Wire Status: Verified with 200 OK end-to-end       |  | State: External Cloud (No migration)     |
+----------------------------------------------------+  +------------------------------------------+
```

---

## 🛠️ 3. 运维实操：如何 24 小时稳定运行

### 推荐方案：本地小主机 / 不关机电脑 + Cloudflare Tunnel（0成本、安全、无需公网IP）

1. **本地生产打包与运行**：
   在项目根目录下打开终端：
   ```bash
   cd "C:\Users\intpj\Downloads\untitled (2)"
   # 1. 构建前端生产包（生成 dist 目录）
   npm run build

   # 2. 启动生产模式服务（自动加载 .env 里的喜鹊网关）
   node server.ts
   ```
   *服务成功监听在 `http://0.0.0.0:3000`。*

2. **打通 Cloudflare Tunnel（24小时外网访问）**：
   ```bash
   # 快速临时穿透测试（无需域名，直接给一个公网 trycloudflare.com 链接）
   cloudflared tunnel --url http://localhost:3000

   # 正式绑定专属域名（永久 24 小时在线）
   cloudflared tunnel route dns <你的Tunnel名字> video.yourdomain.com
   cloudflared tunnel run --url http://localhost:3000 <你的Tunnel名字>
   ```

3. **让服务成为 Windows 后台守护进程（防崩溃、开机自启）**：
   建议使用 `pm2`：
   ```bash
   npm install -g pm2
   pm2 start server.ts --name "kuaipai-zhizao" --interpreter node
   pm2 save
   pm2 startup
   ```

---

## ⚠️ 4. Agent 避雷与安全铁律（所有接手 Agent 必须遵守）

1. **家目录 Git 隔离铁律（最高严重级）**：
   * 宿主机 `C:\Users\intpj` 家目录下存在一个历史零提交的 `.git` 仓库。
   * **严禁**在无上下文的情况下裸跑 `git add .`。每次操作 Git 前必须校验：
     `git rev-parse --show-toplevel`
     必须确认返回值严格为 `C:/Users/intpj/Downloads/untitled (2)`。
2. **GitHub 推送端口铁律**：
   * 本机网络访问 `github.com:443` 有概率出现 Connection reset。
   * 仓库 remote 已写死为 `ssh://git@ssh.github.com:443/intp41455/kuaipai-zhizao.git`。
   * **切勿**自行将其改回 `https://github.com/...`。
3. **竞品逆向资料 (`refs/`) 保密铁律**：
   * 项目中的 `refs/analysis` 为指向 `D:\rae\analysis` 的符号链接（包含 226 个竞品逆向契约与反编译 JS）。
   * 该仓库已推入 GitHub 私有库，**严禁将其修改为公开 (Public) 仓库，严禁挂载在公共开源页面**。
4. **Node 24 模块语法铁律**：
   * `server.ts` 在 Node 24 原生环境下执行。Express 作为 CommonJS 库，**不可**混用 `import express, { Request, Response } from 'express'`，必须保持拆解的 `import type { Request, Response } from 'express'`，否则会引发 `SyntaxError: Named export not found`。
5. **Firebase 登录域名白名单**：
   * 若绑定了新的公网域名（如 `video.yourdomain.com`），请提醒用户在 Firebase Console -> Authentication -> Authorized domains 中将该域名加白，以防 Google 登录被拒绝。
