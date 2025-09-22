# ED Icon

<p align="center">
  <img src="https://img.shields.io/npm/v/@ed-ui/icons" alt="npm version">
  <img src="https://img.shields.io/npm/dm/@ed-ui/icons" alt="npm downloads">
  <img src="https://img.shields.io/github/license/edynasty/ed-icon" alt="license">
</p>

一个现代化的 SVG 图标库，为 Web 应用程序提供丰富的图标资源。

## 🎯 特性

- 📦 **多包架构**: 核心 SVG 包 + 框架特定包（Vue、React）
- 🎨 **丰富图标集**: 266+ 个精心设计的图标，涵盖 AI、DevOps、编程语言、品牌等多个分类
- 💻 **TypeScript**: 完整的类型定义和 IntelliSense 支持
- � **开箱即用**: 提供 Vue 和 React 组件，即插即用
- � **灵活定制**: 支持颜色、大小、样式的完全自定义
- 📱 **响应式**: 支持不同屏幕尺寸和设备
- ⚡ **高性能**: 基于 SVG，支持按需导入和 Tree Shaking

## 📦 包结构

| 包名                 | 描述                        | 版本                                                    |
| -------------------- | --------------------------- | ------------------------------------------------------- |
| `@ed-ui/icons-svg`   | 核心 SVG 图标数据和类型定义 | ![npm](https://img.shields.io/npm/v/@ed-ui/icons-svg)   |
| `@ed-ui/icons-vue`   | Vue 3 图标组件              | ![npm](https://img.shields.io/npm/v/@ed-ui/icons-vue)   |
| `@ed-ui/icons-react` | React 图标组件              | ![npm](https://img.shields.io/npm/v/@ed-ui/icons-react) |
| `@ed-ui/icons`       | 完整图标库（包含所有包）    | ![npm](https://img.shields.io/npm/v/@ed-ui/icons)       |

## � 快速开始

### Vue 3

```bash
npm install @ed-ui/icons-vue
```

```vue
<template>
  <div>
    <EdIcon name="add" size="24" color="#1890ff" />
    <EdIcon name="delete" size="20" />
    <EdIcon name="search" />
  </div>
</template>

<script setup>
import { EdIcon } from "@ed-ui/icons-vue";
</script>
```

### React

```bash
npm install @ed-ui/icons-react
```

```jsx
import { EdIcon } from "@ed-ui/icons-react";

function App() {
  return (
    <div>
      <EdIcon name="add" size={24} color="#1890ff" />
      <EdIcon name="delete" size={20} />
      <EdIcon name="search" />
    </div>
  );
}
```

### 核心 SVG 包

```bash
npm install @ed-ui/icons-svg
```

```javascript
import { Add, Delete, Search } from "@ed-ui/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ed-ui/icons-svg";

// 渲染为 SVG 元素
const svgElement = renderIconDefinitionToSVGElement(Add);
document.body.appendChild(svgElement);
```

## 🎨 图标分类

### AI & 机器学习 (9 个)

`ai` `jupyter` `numpy` `ollama` `openai` `pandas` `pytorch` `robot` `tensorflow`

### 品牌 (21 个)

`airbnb` `amd` `apple` `aws` `facebook` `google` `instagram` `intel` `linkedin` `mastercard` `meta` `microsoft` `netflix` `nvidia` `paypal` `spotify` `tesla` `tiktok` `uber` `visa` `youtube`

### DevOps & 工具 (42 个)

`alicloud` `android` `apache` `chrome` `cloudcomputer` `clouddatabase` `cloudstorage` `debian` `dns` `docker` `dropbox` `ec2` `edge` `firefox` `firewall` `gcp` `git` `github` `gitlab` `ios` `jenkins` `kubernetes` `linux` `loadbalancer` `macos` `mongodb` `mysql` `nginx` `postgresql` `postman` `redhat` `redis` `restapi` `safari` `server` `ubuntu` `vpn` `vscode` `webpack` `windows`

### 编程语言 (36 个)

`angular` `class` `code` `console` `cpplanguage` `cprogram` `csharplanguage` `css` `golanguage` `graphql` `html` `html5` `java` `javascript` `json` `kotlin` `matlab` `nodejs` `npm` `php` `python` `react` `rubylanguage` `runtime` `rust` `scala` `sdk` `sql` `swiftlanguage` `terminal` `typescript` `variable` `vue` `xml`

### 通用图标 (158+ 个)

包含各种常用的界面图标，如：
`add` `delete` `search` `edit` `settings` `home` `user` `heart` `star` `bell` `calendar` `clock` `email` `phone` `lock` `eye` `download` `upload` `share` `copy` `paste` `save` `refresh` `arrow-*` `play` `pause` `stop` 等

## ⚡ 按需导入

所有包都支持按需导入，减少打包体积：

```javascript
// 仅导入需要的图标
import { Add, Delete } from "@ed-ui/icons-vue";

// 或者使用动态导入
const { Search } = await import("@ed-ui/icons-vue");
```

## 🎨 自定义样式

### 颜色

```vue
<EdIcon name="heart" color="#ff6b6b" />
<EdIcon name="star" color="var(--primary-color)" />
```

### 大小

```vue
<EdIcon name="add" size="16" />
<EdIcon name="add" size="24" />
<EdIcon name="add" size="32" />
```

### CSS 类

```vue
<EdIcon name="search" class="my-icon" />
```

```css
.my-icon {
  transition: transform 0.2s;
}
.my-icon:hover {
  transform: scale(1.1);
}
```

## 🛠️ 开发

### 环境要求

- Node.js 16+
- npm 7+

### 安装依赖

```bash
npm install
```

### 生成图标

```bash
npm run generate
```

### 构建所有包

```bash
npm run build
```

### 清理构建产物

```bash
npm run clean
```

## 📖 文档

- [核心 SVG 包文档](./packages/icons-svg/README.md)
- [Vue 组件文档](./packages/icons-vue/README.md)
- [React 组件文档](./packages/icons-react/README.md)

## 🤝 贡献

欢迎贡献代码！请阅读 [贡献指南](./CONTRIBUTING.md)。

### 开发流程

1. Fork 项目
2. 创建特性分支: `git checkout -b my-new-feature`
3. 提交更改: `git commit -am 'Add some feature'`
4. 推送分支: `git push origin my-new-feature`
5. 提交 Pull Request

## 📄 许可证

MIT License - 查看 [LICENSE](./LICENSE) 了解详情。

## 🙏 致谢

感谢所有贡献者和开源社区的支持！

---

<div align="center">
  <p>由 ❤️ 制作</p>
  <p>
    <a href="https://github.com/edynasty/ed-icon">GitHub</a> ·
    <a href="https://npmjs.com/org/ed-ui">NPM</a> ·
    <a href="https://github.com/edynasty/ed-icon/issues">报告问题</a>
  </p>
</div>

## 🚀 快速开始

### Vue 3

```vue
<template>
  <div>
    <!-- 直接使用 SVG -->
    <img src="@ed-ui/icons/svgs/home.svg" alt="home" />

    <!-- 作为组件使用 -->
    <Icon name="home" />
  </div>
</template>

<script setup>
import Icon from "@ed-ui/icons/vue";
</script>
```

### React

```jsx
import React from "react";
import { Home, User, Settings } from "@ed-ui/icons/react";

function App() {
  return (
    <div>
      <Home size={24} color="#1890ff" />
      <User size={24} />
      <Settings size={24} />
    </div>
  );
}
```

### 原生 HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="node_modules/@ed-ui/icons/style.css" />
  </head>
  <body>
    <!-- 使用 CSS 类 -->
    <i class="ed-icon-home"></i>

    <!-- 直接引用 SVG -->
    <img src="node_modules/@ed-ui/icons/svgs/home.svg" alt="home" />
  </body>
</html>
```

## 📚 图标分类

### 🎯 基础图标 (@ed-ui/icons-core)

包含 267+ 常用的 UI 图标，涵盖：

- 导航图标：home、menu、back、forward
- 操作图标：add、delete、edit、save
- 状态图标：success、error、warning、info
- 媒体图标：play、pause、stop、volume
- 文件图标：file、folder、download、upload

### 🛠️ 技术图标 (@ed-ui/icons-tech)

包含 84+ 技术相关图标，涵盖：

- **开发运维** (40+ 图标): Docker、Kubernetes、AWS、GCP、Azure
- **编程语言** (35+ 图标): JavaScript、TypeScript、Python、Java、Go
- **AI/ML** (9+ 图标): TensorFlow、PyTorch、Jupyter、OpenAI、Robot

### 🏢 品牌图标 (@ed-ui/icons-brand)

包含 21+ 知名品牌图标：

- 科技公司：Apple、Google、Microsoft、Meta、Tesla
- 社交平台：Facebook、Instagram、LinkedIn、TikTok、YouTube
- 服务平台：Netflix、Spotify、Uber、Airbnb
- 金融支付：Visa、Mastercard、PayPal

## 🎨 自定义样式

### CSS 变量

```css
.ed-icon {
  --icon-size: 24px;
  --icon-color: #1890ff;
}
```

### 内联样式

```html
<img
  src="@ed-ui/icons/svgs/home.svg"
  style="width: 32px; height: 32px; color: #ff4757;"
/>
```

## 📖 API 参考

### 通用属性

| 属性      | 类型             | 默认值         | 描述            |
| --------- | ---------------- | -------------- | --------------- |
| size      | number \| string | 24             | 图标大小        |
| color     | string           | 'currentColor' | 图标颜色        |
| className | string           | -              | 自定义 CSS 类名 |

### Vue 组件

```vue
<Icon name="home" :size="24" color="#1890ff" class="custom-icon" />
```

### React 组件

```jsx
<Home size={24} color="#1890ff" className="custom-icon" />
```

## 🔧 构建工具支持

### Vite

```js
// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["@ed-ui/icons"],
  },
});
```

### Webpack

```js
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      "@ed-ui/icons": path.resolve(__dirname, "node_modules/@ed-ui/icons"),
    },
  },
};
```

## 🌟 在线预览

访问 [图标预览页面](./docs/icon-show.html) 查看所有可用图标。

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件。

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](./CONTRIBUTING.md) 了解详情。

### 开发环境

```bash
# 克隆项目
git clone https://github.com/edynasty/ed-icon.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
```

## 📞 支持

- 🐛 [报告问题](https://github.com/edynasty/ed-icon/issues)
- 💡 [功能建议](https://github.com/edynasty/ed-icon/discussions)
- 📧 [联系我们](mailto:support@ed-ui.com)

---

<p align="center">
  如果这个项目对您有帮助，请给我们一个 ⭐️
</p>
