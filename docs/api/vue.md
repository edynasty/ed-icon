# Vue API

ED Icon 为 Vue 3 提供了独立的图标组件，使用方式类似 Ant Design Icons。

## 安装

```bash
npm install @ed-ui/icons-vue
```

## 基本使用

### 导入图标组件

```vue
<template>
  <div>
    <Home />
    <Add />
    <Delete />
    <Search />
    <User />
  </div>
</template>

<script setup>
import { Home, Add, Delete, Search, User } from "@ed-ui/icons-vue";
</script>
```

### 设置图标属性

```vue
<template>
  <div>
    <!-- 设置大小 -->
    <Heart size="24px" />
    <Heart :size="32" />

    <!-- 设置颜色 -->
    <Star color="#ff4d4f" />
    <Star :style="{ color: '#1890ff' }" />

    <!-- 添加点击事件 -->
    <Heart
      size="28px"
      color="#f5222d"
      @click="handleHeartClick"
      style="cursor: pointer"
    />
  </div>
</template>

<script setup>
import { Heart, Star } from "@ed-ui/icons-vue";

const handleHeartClick = () => {
  console.log("Heart clicked!");
};
</script>
```

## 图标容器组件

使用 `EdIcon` 容器组件可以更好地控制图标样式：

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <EdIcon>
      <Home />
    </EdIcon>

    <!-- 设置大小和颜色 -->
    <EdIcon size="24px" color="#1890ff">
      <Home />
    </EdIcon>

    <!-- 旋转动画 -->
    <EdIcon spin>
      <Loading />
    </EdIcon>

    <!-- 组合使用 -->
    <EdIcon
      size="32px"
      color="#52c41a"
      @click="handleClick"
      style="cursor: pointer"
    >
      <Check />
    </EdIcon>
  </div>
</template>

<script setup>
import { EdIcon, Home, Loading, Check } from "@ed-ui/icons-vue";

const handleClick = () => {
  console.log("Icon clicked!");
};
</script>
```

## API 参考

### 图标组件 Props

所有图标组件都支持以下 props：

| 属性    | 类型               | 默认值           | 描述                              |
| ------- | ------------------ | ---------------- | --------------------------------- |
| `size`  | `string \| number` | `'1em'`          | 图标大小，可以是像素值或 CSS 单位 |
| `color` | `string`           | `'currentColor'` | 图标颜色                          |

### 图标组件事件

| 事件         | 类型 | 描述                                                 |
| ------------ | ---- | ---------------------------------------------------- |
| 所有原生事件 | -    | 支持所有原生 DOM 事件，如 `@click`、`@mouseenter` 等 |

### EdIcon Props

| 属性    | 类型               | 默认值           | 描述         |
| ------- | ------------------ | ---------------- | ------------ |
| `size`  | `string \| number` | `'1em'`          | 容器大小     |
| `color` | `string`           | `'currentColor'` | 图标颜色     |
| `spin`  | `boolean`          | `false`          | 是否旋转动画 |

### EdIcon 插槽

| 插槽      | 描述                   |
| --------- | ---------------------- |
| `default` | 默认插槽，放置图标组件 |

## 使用示例

### 按钮中的图标

```vue
<template>
  <div>
    <button class="btn-primary">
      <Add :size="16" />
      添加
    </button>

    <button class="btn-danger">
      <Delete :size="16" />
      删除
    </button>

    <button class="btn-default">
      <Edit :size="16" />
      编辑
    </button>
  </div>
</template>

<script setup>
import { Add, Delete, Edit } from "@ed-ui/icons-vue";
</script>

<style scoped>
.btn-primary,
.btn-danger,
.btn-default {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
}

.btn-primary {
  background: #1890ff;
  color: white;
}

.btn-danger {
  background: #ff4d4f;
  color: white;
}

.btn-default {
  background: #f5f5f5;
  color: #333;
}
</style>
```

### 导航菜单

```vue
<template>
  <nav class="navigation">
    <a
      v-for="item in menuItems"
      :key="item.path"
      :href="item.path"
      class="nav-item"
    >
      <component :is="item.icon" :size="20" />
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup>
import { Home, User, Settings, Help } from "@ed-ui/icons-vue";

const menuItems = [
  { icon: Home, label: "首页", path: "/" },
  { icon: User, label: "用户", path: "/user" },
  { icon: Settings, label: "设置", path: "/settings" },
  { icon: Help, label: "帮助", path: "/help" },
];
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background-color: #f5f5f5;
}
</style>
```

### 状态指示器

```vue
<template>
  <div class="status-indicator">
    <component
      :is="statusConfig[status].icon"
      :size="16"
      :color="statusConfig[status].color"
    />
    <span>{{ message }}</span>
  </div>
</template>

<script setup>
import { Check, Close, Warning, Info } from '@ed-ui/icons-vue'

interface Props {
  status: 'success' | 'error' | 'warning' | 'info'
  message: string
}

defineProps<Props>()

const statusConfig = {
  success: { icon: Check, color: '#52c41a' },
  error: { icon: Close, color: '#ff4d4f' },
  warning: { icon: Warning, color: '#faad14' },
  info: { icon: Info, color: '#1890ff' }
}
</script>

<style scoped>
.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
```

### 动态图标

```vue
<template>
  <div>
    <!-- 基于图标名称动态渲染 -->
    <DynamicIcon name="home" :size="20" />
    <DynamicIcon name="user" :size="24" color="#1890ff" />
  </div>
</template>

<script setup>
import { Home, User, Settings, Help } from "@ed-ui/icons-vue";
import { defineComponent, h } from "vue";

const iconMap = {
  home: Home,
  user: User,
  settings: Settings,
  help: Help,
};

const DynamicIcon = defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: "1em",
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
  setup(props) {
    return () => {
      const IconComponent = iconMap[props.name];

      if (!IconComponent) {
        console.warn(`Icon "${props.name}" not found`);
        return null;
      }

      return h(IconComponent, {
        size: props.size,
        color: props.color,
      });
    };
  },
});
</script>
```

## 组合式 API

### 图标状态管理

```vue
<template>
  <div>
    <button @click="toggleFavorite">
      <Heart :color="isFavorite ? '#ff4d4f' : '#d9d9d9'" :size="24" />
    </button>

    <button @click="toggleLike">
      <component
        :is="likeIcon"
        :color="isLiked ? '#1890ff' : '#d9d9d9'"
        :size="24"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Heart, Like, Likefill } from "@ed-ui/icons-vue";

const isFavorite = ref(false);
const isLiked = ref(false);

const likeIcon = computed(() => (isLiked.value ? Likefill : Like));

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};
</script>
```

### 图标动画

```vue
<template>
  <div>
    <!-- 旋转动画 -->
    <EdIcon :spin="loading">
      <Loading />
    </EdIcon>

    <!-- 自定义动画 -->
    <Heart
      :class="{ beating: isBeating }"
      @click="startBeating"
      size="32px"
      color="#ff4d4f"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { EdIcon, Loading, Heart } from "@ed-ui/icons-vue";

const loading = ref(true);
const isBeating = ref(false);

const startBeating = () => {
  isBeating.value = true;
  setTimeout(() => {
    isBeating.value = false;
  }, 600);
};

// 模拟异步操作
setTimeout(() => {
  loading.value = false;
}, 3000);
</script>

<style scoped>
.beating {
  animation: heartbeat 0.6s ease-in-out;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
```

## TypeScript 支持

ED Icon 完全支持 TypeScript，提供完整的类型定义：

```vue
<template>
  <button @click="handleClick">
    <component :is="icon" :size="size" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import type { Component } from "vue";

interface Props {
  icon: Component;
  label: string;
  size?: string | number;
}

interface Emits {
  click: [event: MouseEvent];
}

const props = withDefaults(defineProps<Props>(), {
  size: 20,
});

const emit = defineEmits<Emits>();

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
```

## 最佳实践

### 1. 按需导入

只导入您需要的图标，减小包体积：

```typescript
// 推荐：按需导入
import { Home, Add, Delete } from "@ed-ui/icons-vue";

// 避免：全量导入
// import * as Icons from '@ed-ui/icons-vue'
```

### 2. 统一图标大小

在应用中保持一致的图标大小：

```vue
<script setup>
// 定义统一的图标大小
const ICON_SIZES = {
  small: '16px',
  medium: '20px',
  large: '24px',
  xlarge: '32px'
} as const

type IconSize = keyof typeof ICON_SIZES
</script>

<template>
  <div>
    <Home :size="ICON_SIZES.medium" />
    <Add :size="ICON_SIZES.medium" />
    <Delete :size="ICON_SIZES.medium" />
  </div>
</template>
```

### 3. 创建图标组件库

创建可复用的图标组件：

```vue
<!-- IconButton.vue -->
<template>
  <button
    :class="['icon-button', `icon-button--${variant}`]"
    @click="$emit('click', $event)"
  >
    <EdIcon :size="size">
      <component :is="icon" />
    </EdIcon>
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import { EdIcon } from "@ed-ui/icons-vue";

interface Props {
  icon: Component;
  label?: string;
  size?: string | number;
  variant?: "primary" | "danger" | "default";
}

withDefaults(defineProps<Props>(), {
  size: "16px",
  variant: "default",
});

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>
```

## 常见问题

### Q: 如何自定义图标样式？

A: 可以通过 `style` 或 `class` 来自定义样式：

```vue
<template>
  <Home
    :style="{
      color: '#1890ff',
      fontSize: '24px',
      cursor: 'pointer',
    }"
  />

  <Add class="my-custom-icon" />
</template>
```

### Q: 如何处理图标的响应式大小？

A: 可以使用计算属性或响应式变量：

```vue
<script setup>
import { computed } from "vue";

const iconSize = computed(() => {
  // 基于屏幕尺寸返回不同大小
  return window.innerWidth < 768 ? "16px" : "20px";
});
</script>

<template>
  <Home :size="iconSize" />
</template>
```

### Q: 如何添加无障碍访问支持？

A: 可以添加相关的无障碍属性：

```vue
<template>
  <button role="button" :aria-label="buttonLabel" @click="handleClick">
    <Home />
  </button>
</template>
```
