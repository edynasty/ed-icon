# 所有图标

这里展示了 ED Icon 图标库中的所有 265+ 个图标。点击任意图标可以复制其组件名称。

<AllIconsShowcase />

## 使用方法

### 1. 基础使用

```vue
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

### 2. 属性配置

```vue
<template>
  <div>
    <!-- 自定义大小 -->
    <Home :size="24" />

    <!-- 自定义颜色 -->
    <Heart color="#ff4757" />

    <!-- 旋转动画 -->
    <Loading spin />

    <!-- 组合使用 -->
    <Settings :size="32" color="#1890ff" spin />
  </div>
</template>
```

### 3. CSS 样式

```vue
<template>
  <Home class="custom-icon" />
</template>

<style>
.custom-icon {
  color: #1890ff;
  font-size: 24px;
  transition: all 0.3s;
}

.custom-icon:hover {
  color: #40a9ff;
  transform: scale(1.1);
}
</style>
```

## 图标分类

我们的图标按照使用场景进行了分类：

### 🏠 常用图标

适用于导航、用户界面等基础场景

### ⚡ 操作图标

用于表示各种用户操作，如添加、删除、编辑等

### 📊 状态图标

表示不同的状态，如成功、错误、警告、加载等

### 🎵 媒体图标

用于音视频控制，如播放、暂停、音量等

### 🧭 导航图标

各种方向指示和导航相关的图标

### 🎨 界面图标

用于界面布局和视图控制的图标

### 📈 数据图标

与数据可视化和分析相关的图标

### 📱 设备图标

表示各种设备和硬件的图标

---

## 💡 提示

- **搜索功能**：使用上方的搜索框快速找到你需要的图标
- **分类筛选**：点击分类按钮查看特定类别的图标
- **大小调整**：拖动滑块调整图标显示大小
- **一键复制**：点击图标即可复制组件代码

如果你没有找到需要的图标，欢迎在 [GitHub](https://github.com/edynasty/ed-icon/issues) 上提出建议！
