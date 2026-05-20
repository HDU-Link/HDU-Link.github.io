# 个人主页

基于 **React 19** + **Vite** 的单页个人作品集网站。

## 功能

- 固定顶栏导航与滚动高亮
- 首页、关于、技能、项目、联系等区块
- 响应式布局与移动端菜单
- 个人信息集中在 `src/data/profile.js`，便于修改

## 快速开始

```bash
cd personal-homepage
npm install
npm run dev
```

浏览器打开终端显示的本地地址（一般为 `http://localhost:5173`）。

## 自定义

编辑 `src/data/profile.js` 中的姓名、简介、技能、项目与社交链接即可。

## 部署到 GitHub Pages（HDU-Link.github.io）

本仓库为用户站点，上线地址：**https://hdu-link.github.io/**（GitHub 用户名不区分大小写）。

### 推荐：推送源码，由 Actions 自动构建

1. 在 GitHub 新建仓库 **`HDU-Link.github.io`**（名称需与用户名一致）。
2. 将本项目**全部源码** push 到 `main` 分支（不要只上传 `dist`，也不要提交 `node_modules`）。
3. 打开仓库 **Settings → Pages → Build and deployment**，**Source** 选 **GitHub Actions**。
4. push 后等待 `.github/workflows/deploy.yml` 跑完，绿色勾即部署成功。

之后每次 push 到 `main`，网站会自动更新。

### 本地预览构建结果

```bash
npm run build
npm run preview
```

### 注意

- **不要**把未构建的 `src` 当 Pages 根目录用；Pages 需要的是 `npm run build` 后的静态文件（本仓库由 Action 自动完成）。
- 用户站点 `base` 为 `/`，无需像子目录仓库那样写 `/仓库名/`。
