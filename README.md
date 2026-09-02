# 烘豆师 · 产品介绍站

这是「烘豆师」App 的官方产品介绍站，**纯静态、无构建工具链**。正式站点由腾讯云轻量应用服务器托管，源码仍可通过 GitHub 仓库协作。

## 站点结构

```
site/
├── index.html              # 单页落地（Hero / 特性 / 截图 / 安全 / 平台 / 下载）
├── 404.html                # Pages 兜底
├── .nojekyll               # 关闭 Jekyll 处理
├── README.md               # ← 你正在看的部署指南
├── .github/workflows/pages.yml   # 部署到 Pages 的 Actions
└── assets/
    ├── css/style.css       # 视觉令牌 + 排版
    ├── js/main.js          # 主题、语言、复制与反馈表单交互
    └── img/
        ├── logo.svg        # 咖啡豆图标
        ├── favicon.svg
        └── screenshots/    # 4 张真实模拟器截图
```

## 部署到腾讯云轻量应用服务器

将 `site/` 静态文件部署到 Nginx 或同等 Web 服务，启用 HTTPS。访问日志仅用于安全、防攻击和故障排查，按 `docs/privacy/tencent-cloud-log-rotation.md` 使用 `logrotate` 配置 7 天轮转删除，并保留配置与巡检证据。

正式域名按已完成备案的站点提供服务。访问日志仅用于安全、防攻击和故障排查，按 `../docs/privacy/tencent-cloud-log-rotation.md` 配置 7 天轮转删除，并保留部署与巡检记录。

## GitHub Pages 预览

如需公开预览，可继续使用下方 GitHub Actions 流程；预览地址不改变正式站点的腾讯云托管事实。

### 一次性操作

1. **新建公开仓**（Private 仓无法走免费 GitHub Pages）：
   - 在 GitHub 手动创建 `bean-roaster-site`，可见性选 **Public**，不要初始化任何文件
2. **推送站点文件**：
   ```bash
   cd site
   git init
   git checkout -b main
   git add .
   git commit -m "feat(site): 初始化烘豆师产品介绍站"
   git remote add origin git@github.com:wuyi-levard/bean-roaster-site.git
   git push -u origin main
   ```
3. **开启 Pages**：
   - GitHub → 仓库 → **Settings** → **Pages** → **Source** 选 **GitHub Actions**
   - 第一次推送后 Actions 会自动运行（见 `.github/workflows/pages.yml`）
   - 部署完成后地址：`https://wuyi-levard.github.io/bean-roaster-site/`

### 后续更新

```bash
cd site
# 编辑 HTML / CSS / JS 后：
git add .
git commit -m "update(site): 调整文案"
git push
# Actions 自动重新部署，约 30-60 秒生效
```

## 自定义

### 修改下载链接
- 下载入口已指向公开站仓 `https://github.com/wuyi-levard/bean-roaster-site/releases`
- 当前 APK 不在仓内（258MB 超 GitHub 单文件限制），通过手动 `gh release create` 上传到该公开仓即可启用下载

### 主题色
- 编辑 `assets/css/style.css` 顶部 `:root` 的 CSS 变量
- 亮 / 暗主题分别通过 `:root` 与 `@media (prefers-color-scheme: dark)` 维护

### 替换截图
- 把新图片放进 `assets/img/screenshots/`
- 在 `index.html` 的 `<section id="screenshots">` 替换 `<img src="...">`
- 建议图片宽度 ≤ 800px，体积 ≤ 300KB

## 本地预览

```bash
# Python 3
cd site
python -m http.server 8000
# 访问 http://localhost:8000
```

或直接双击 `site/index.html` 在浏览器打开（无外网依赖，图片、CSS、JS 全部相对路径）。

## 设计参考

- **设计系统**：`../ui-design/02-设计系统.md`
- **设计稿**：`../ui-design/03-视觉稿.html`（单文件交互视觉稿，可作配色与版式参照）
- **事实来源**：
  - 当前版本号：`../lib/constants.dart` 的 `kAppVersion`
  - 完整功能介绍：`../README.md`
  - 版本演进记录：`../overview.md`

## 不要做

- ❌ 引入 Tailwind / Bootstrap / jQuery 等外部依赖
- ❌ 提交真实 APK 二进制到本仓（超过 GitHub 单文件 100MB 硬限）
- ❌ 在 Pages 站点内放置 Google Analytics / 百度统计 / 任何第三方追踪脚本
- ❌ 直接拷贝截图到 `test-artifacts/` —— 那是 gitignored 的临时测试产物

## 许可

站点文案与设计令牌沿用项目仓库授权约定；截图来自内部模拟器测试，仅用于产品展示。
