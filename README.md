# 陈艺 JC · 个人品牌页

一个零依赖的静态单页，可直接部署到 GitHub Pages。不需要安装任何开发环境。

---

## 一、在电脑上预览（三选一）

**方法 1：双击打开（最快）**
直接双击 `index.html`，浏览器即可打开。所有功能可用。

**方法 2：本地服务器（推荐，图片加载更稳）**

Mac 自带 Python，打开「终端」，执行：

```bash
cd 这个文件夹的路径
python3 -m http.server 8080
```

然后浏览器打开 `http://localhost:8080`。按 `Ctrl + C` 停止。

**方法 3：VS Code**
装 VS Code 的「Live Server」插件，右键 `index.html` → Open with Live Server。

**用手机预览**：方法 2 启动后，手机连同一 Wi-Fi，浏览器输入 `http://你电脑的IP:8080`（IP 在终端执行 `ipconfig getifaddr en0` 可查）。

---

## 二、发布到 GitHub Pages（全程网页操作，不用命令行）

1. 注册 / 登录 [github.com](https://github.com)
2. 右上角 `+` → **New repository**，仓库名填 `jc-page`（或任意名），选 **Public**，点创建
3. 在新仓库页面点 **uploading an existing file** 链接
4. 把以下文件**拖进网页**（保持目录结构）：
   - `index.html`
   - `assets/` 整个文件夹（css、js、img）
   - 本文件 `README.md`（可选）
5. 页面下方点 **Commit changes**
6. 仓库顶部 **Settings** → 左侧 **Pages** → Source 选 `main` 分支、目录选 `/ (root)` → **Save**
7. 等 1–3 分钟，访问 `https://你的用户名.github.io/jc-page/`

**不需要上传的文件**：`大图1x/2x/3x/4xx.jpg`（原始照片）、`网站定位卡.md`、`参考站版式笔记.md`。

---

## 三、发布后要做的一件事

`index.html` 里的微信分享缩略图（`og:image`）现在是相对路径，部署后要改成完整网址才能显示：

```html
<!-- 把这行 -->
<meta property="og:image" content="assets/img/og-1200.jpg">
<!-- 改成 -->
<meta property="og:image" content="https://你的用户名.github.io/jc-page/assets/img/og-1200.jpg">
```

改完微信里转发链接时才会显示照片卡片。

---

## 四、发布前请确认（内容合规）

| 项 | 状态 |
|---|---|
| 微信二维码图片（拿到后放入 `assets/img/wechat-qr.png`，解开 `index.html` 联系区的注释） | ⬜ |
| 团队规模写「10 人以上」还是「20 人」 | ⬜ |
| 2023 年矩阵流水 / 曝光 / 增长数据，对外披露需公司同意 | ⬜ |
| 邮箱 `550137273@qq.com` 是否公开（会暴露 QQ 号，目前未放） | ⬜ |
| 合作品牌与名人姓名目前均未点名，如需点名需取得对方同意 | ⬜ |

---

## 文件清单

```
├── index.html          页面
├── assets/
│   ├── css/style.css   样式
│   ├── js/main.js      复制微信号 / 滚动淡入
│   └── img/            图片（webp 优先，jpg 兜底；og-1200 是分享卡片图）
└── README.md           本文件
```
