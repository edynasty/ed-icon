# 快速开始

欢迎使用 ED Icon 图标库！这里将介绍如何在你的项目中使用这些精美的图标。

## 安装

你可以使用任何包管理器来安装 ED Icon：

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

## 基础用法

### 导入图标

你可以按需导入你需要的图标：

```vue
<template>
  <div>
    <Home />
    <Settings />
    <User />
  </div>
</template>

<script setup>
import { Home, Settings, User } from "@ed-ui/icons-vue";
</script>
```

### 全局注册

如果你想在全局使用图标，可以在你的应用入口文件中注册：

```js
import { createApp } from "vue";
import App from "./App.vue";
import * as Icons from "@ed-ui/icons-vue";

const app = createApp(App);

// 注册所有图标
Object.keys(Icons).forEach((iconName) => {
  app.component(iconName, Icons[iconName]);
});

app.mount("#app");
```

## 属性配置

每个图标组件都支持以下属性：

### size

设置图标的大小（宽度和高度）：

```vue
<template>
  <div>
    <!-- 默认大小 -->
    <Home />

    <!-- 自定义大小 -->
    <Home :size="24" />
    <Home :size="32" />
    <Home :size="48" />
  </div>
</template>
```

### color

设置图标的颜色：

```vue
<template>
  <div>
    <!-- 默认颜色 -->
    <Heart />

    <!-- 自定义颜色 -->
    <Heart color="#ff4757" />
    <Heart color="#2ed573" />
    <Heart color="#1e90ff" />
  </div>
</template>
```

### spin

让图标旋转（适用于加载状态）：

```vue
<template>
  <div>
    <!-- 旋转的加载图标 -->
    <Loading spin />

    <!-- 旋转的设置图标 -->
    <Settings spin />
  </div>
</template>
```

### 样式类

你也可以通过 CSS 类来自定义图标样式：

```vue
<template>
  <div>
    <Home class="my-icon" />
  </div>
</template>

<style>
.my-icon {
  color: #1890ff;
  font-size: 24px;
  transition: color 0.3s;
}

.my-icon:hover {
  color: #40a9ff;
}
</style>
```

## 图标列表

我们提供了 265+ 个精美的图标，涵盖了常用的使用场景：

### 常用图标

- **Home** - 首页
- **User** - 用户
- **Settings** - 设置
- **Search** - 搜索
- **Menu** - 菜单
- **Bell** - 通知

### 操作图标

- **Add** - 添加
- **Delete** - 删除
- **Edit** - 编辑
- **Save** - 保存
- **Copy** - 复制
- **Share** - 分享

### 状态图标

- **Check** - 选中
- **Close** - 关闭
- **Warning** - 警告
- **Error** - 错误
- **Success** - 成功
- **Loading** - 加载

### 导航图标

- **Arrowup** - 向上箭头
- **Arrowdown** - 向下箭头
- **Arrowleft** - 向左箭头
- **Arrowright** - 向右箭头

[查看所有图标 →](/icons/)

## 最佳实践

### 1. 按需导入

为了减少打包体积，建议按需导入你需要的图标：

```js
// ✅ 推荐：按需导入
import { Home, User, Settings } from "@ed-ui/icons-vue";

// ❌ 不推荐：全量导入
import * as Icons from "@ed-ui/icons-vue";
```

### 2. 统一尺寸

在同一个界面中，建议使用统一的图标尺寸：

```vue
<template>
  <div class="toolbar">
    <Home :size="20" />
    <User :size="20" />
    <Settings :size="20" />
  </div>
</template>
```

### 3. 语义化使用

选择合适的图标来表达你的意图：

```vue
<template>
  <div>
    <!-- 删除操作使用删除图标 -->
    <button @click="deleteItem">
      <Delete />
      删除
    </button>

    <!-- 保存操作使用保存图标 -->
    <button @click="saveData">
      <Save />
      保存
    </button>
  </div>
</template>
```

### 4. 无障碍访问

为图标添加适当的 aria 标签：

```vue
<template>
  <div>
    <Home aria-label="返回首页" />
    <Search aria-label="搜索" />
  </div>
</template>
```

## 下一步

- [查看所有图标](/icons/) - 浏览完整的图标集合
- [API 参考](/api/) - 详细的 API 文档
- [贡献指南](/guide/contributing) - 如何为项目做贡献

如果你有任何问题或建议，欢迎在 [GitHub](https://github.com/edynasty/ed-icon) 上提出 Issue。
