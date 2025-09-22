# 开始使用

ED Icon 是一个现代化的 SVG 图标库，提供了 265+ 个精美图标。每个图标都是独立的组件，可以直接使用。

## 特性

- 🎨 **丰富图标集** - 265+ 个精美图标，涵盖常用场景
- ⚡️ **独立组件** - 每个图标都是独立组件，如 `<Home />`、`<Add />`
- 🔧 **高度可定制** - 支持尺寸、颜色、旋转等属性
- 📦 **按需导入** - 支持 Tree Shaking，优化包体积
- 🌈 **TypeScript** - 完整的类型定义支持
- 📱 **响应式** - 适配各种屏幕尺寸

## 安装

::: code-group

```bash [Vue]
npm install @ed-ui/icons-vue
```

```bash [React]
npm install @ed-ui/icons-react
```

:::

## 基本使用

::: code-group

```vue [Vue]
<template>
  <div>
    <Home />
    <Add />
    <Settings />
  </div>
</template>

<script setup>
import { Home, Add, Settings } from "@ed-ui/icons-vue";
</script>
```

```jsx [React]
import React from "react";
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

:::

## 下一步

- [Vue 使用指南](./vue) - 详细的 Vue 使用说明
- [React 使用指南](./react) - 详细的 React 使用说明
- [查看所有图标](/icons/) - 浏览完整图标集
