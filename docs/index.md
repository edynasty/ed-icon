---
layout: home

hero:
  name: "ED Icon"
  text: "精美的图标组件库"
  tagline: "🎨 265+ 个精心设计的图标，支持 Vue 3 & React"
  image:
    src: /logo.svg
    alt: ED Icon
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
    - theme: alt
      text: 查看所有图标
      link: /icons/

features:
  - icon: 🚀
    title: 开箱即用
    details: 简单易用的API设计，一行代码即可使用任何图标
  - icon: 🎨
    title: 精美设计
    details: 265+ 个精心设计的SVG图标，覆盖常用场景
  - icon: ⚡
    title: 高性能
    details: 基于SVG的矢量图标，支持任意尺寸缩放
  - icon: 🔧
    title: 可定制
    details: 支持颜色、尺寸、旋转等属性自定义
  - icon: �
    title: 响应式
    details: 适配各种屏幕尺寸，移动端友好
  - icon: 🌈
    title: 多框架支持
    details: 同时支持Vue 3和React，更多框架即将支持
---

# 🎯 快速开始

## 安装

::: code-group

```bash [npm]
npm install @ed-ui/icons-vue
```

```bash [yarn]
yarn add @ed-ui/icons-vue
```

```bash [pnpm]
pnpm add @ed-ui/icons-vue
```

:::

## 使用

```vue
<template>
  <div>
    <!-- 基础使用 -->
    <Home />

    <!-- 自定义大小和颜色 -->
    <Settings :size="24" color="#1890ff" />

    <!-- 旋转动画 -->
    <Loading spin />

    <!-- 组合使用 -->
    <div class="icon-group">
      <Add />
      <Edit />
      <Delete />
    </div>
  </div>
</template>

<script setup>
import { Home, Settings, Loading, Add, Edit, Delete } from "@ed-ui/icons-vue";
</script>
```

## 在线预览

查看所有可用图标：

<AllIconsShowcase />

---

<div style="text-align: center; margin: 3rem 0;">
  <h2>🌟 开源协议</h2>
  <p>本项目基于 <strong>Apache 2.0</strong> 开源协议，欢迎贡献代码！</p>
  <p>
    <a href="https://github.com/edynasty/ed-icon" target="_blank">
      GitHub 仓库
    </a>
  </p>
</div>

## 快速开始

### Vue

```bash
npm install @ed-ui/icons-vue
```

```vue
<template>
  <Home />
  <Add />
  <Settings />
</template>

<script setup>
import { Home, Add, Settings } from "@ed-ui/icons-vue";
</script>
```

### React

```bash
npm install @ed-ui/icons-react
```

```jsx
import { Home, Add, Settings } from "@ed-ui/icons-react";

function App() {
  return (
    <div>
      <Home />
      <Add />
      <Settings />
    </div>
  );
}
```
