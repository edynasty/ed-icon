# API 参考

## 图标组件属性

每个图标组件都支持以下通用属性：

### Props

| 属性名  | 类型               | 默认值         | 说明                 |
| ------- | ------------------ | -------------- | -------------------- |
| `size`  | `number \| string` | `16`           | 图标大小（宽高相等） |
| `color` | `string`           | `currentColor` | 图标颜色             |
| `spin`  | `boolean`          | `false`        | 是否旋转动画         |

### 详细说明

#### size

- **类型**: `number | string`
- **默认值**: `16`
- **说明**: 设置图标的大小，单位为像素

```vue
<template>
  <div>
    <!-- 数字类型 -->
    <Home :size="24" />

    <!-- 字符串类型 -->
    <Home size="2rem" />
    <Home size="24px" />
  </div>
</template>
```

```typescript
function renderIconDefinitionToSVGElement(
  icon: IconDefinition,
  options?: {
    extraAttrs?: Record<string, string>;
  }
): SVGElement;
```

**参数：**

- `icon`: 图标定义对象
- `options`: 可选的配置项
  - `extraAttrs`: 额外的 SVG 属性

**返回值：**

- `SVGElement`: 渲染后的 SVG 元素

**示例：**

```javascript
import { Add, renderIconDefinitionToSVGElement } from "@ed-ui/icons-svg";

const svgElement = renderIconDefinitionToSVGElement(Add, {
  extraAttrs: {
    width: "24",
    height: "24",
    fill: "#1890ff",
  },
});

document.body.appendChild(svgElement);
```

### parseSVG

解析 SVG 字符串为图标定义。

```typescript
function parseSVG(svgString: string): IconDefinition;
```

**参数：**

- `svgString`: SVG 字符串

**返回值：**

- `IconDefinition`: 解析后的图标定义

**示例：**

```javascript
import { parseSVG } from "@ed-ui/icons-svg";

const svgString =
  '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
const iconDefinition = parseSVG(svgString);
```

## Vue 组件 API

### EdIcon

Vue 3 图标组件。

```vue
<EdIcon name="add" :size="24" color="#1890ff" />
```

**Props：**

| 属性  | 类型               | 默认值           | 必填 | 说明             |
| ----- | ------------------ | ---------------- | ---- | ---------------- |
| name  | `string`           | -                | ✓    | 图标名称         |
| size  | `number \| string` | `16`             | -    | 图标大小（像素） |
| color | `string`           | `'currentColor'` | -    | 图标颜色         |
| class | `string`           | -                | -    | 自定义 CSS 类名  |

**事件：**

| 事件名 | 参数    | 说明           |
| ------ | ------- | -------------- |
| click  | `Event` | 点击图标时触发 |

**示例：**

```vue
<template>
  <EdIcon
    name="heart"
    :size="32"
    color="#ff6b6b"
    class="my-icon"
    @click="handleClick"
  />
</template>

<script setup>
import { EdIcon } from "@ed-ui/icons-vue";

function handleClick(event) {
  console.log("图标被点击了", event);
}
</script>
```

## React 组件 API

### EdIcon

React 图标组件。

```jsx
<EdIcon name="add" size={24} color="#1890ff" />
```

**Props：**

| 属性      | 类型                          | 默认值           | 必填 | 说明             |
| --------- | ----------------------------- | ---------------- | ---- | ---------------- |
| name      | `string`                      | -                | ✓    | 图标名称         |
| size      | `number \| string`            | `16`             | -    | 图标大小（像素） |
| color     | `string`                      | `'currentColor'` | -    | 图标颜色         |
| className | `string`                      | -                | -    | 自定义 CSS 类名  |
| onClick   | `(event: MouseEvent) => void` | -                | -    | 点击事件处理器   |

**示例：**

```jsx
import { EdIcon } from "@ed-ui/icons-react";

function App() {
  const handleClick = (event) => {
    console.log("图标被点击了", event);
  };

  return (
    <EdIcon
      name="heart"
      size={32}
      color="#ff6b6b"
      className="my-icon"
      onClick={handleClick}
    />
  );
}
```

## 常量和映射

### IconMap

所有图标的映射对象。

```typescript
const IconMap: Record<string, IconDefinition>;
```

**示例：**

```javascript
import { IconMap } from "@ed-ui/icons-svg";

// 获取特定图标
const addIcon = IconMap.Add;
const deleteIcon = IconMap.Delete;

// 动态获取图标
const iconName = "Search";
const searchIcon = IconMap[iconName];
```

### IconNames

所有图标名称的数组。

```typescript
const IconNames: readonly string[];
```

**示例：**

```javascript
import { IconNames } from "@ed-ui/icons-svg";

console.log(IconNames.length); // 266
console.log(IconNames.includes("Add")); // true

// 遍历所有图标名称
IconNames.forEach((name) => {
  console.log(name);
});
```

## 错误处理

### 图标不存在

当使用不存在的图标名称时：

```javascript
// Vue
<EdIcon name="non-existent-icon" />
// 会显示一个占位符图标

// React
<EdIcon name="non-existent-icon" />
// 会显示一个占位符图标

// 核心包
import { NonExistentIcon } from '@ed-ui/icons-svg'
// 编译时错误
```

### 类型安全

使用 TypeScript 时，图标名称会有类型检查：

```typescript
import type { IconName } from "@ed-ui/icons-svg";

// 正确
const validIcon: IconName = "Add";

// 错误：类型检查会报错
const invalidIcon: IconName = "NonExistentIcon";
```

## 高级用法

### 自定义图标

扩展图标库：

```typescript
import type { IconDefinition } from "@ed-ui/icons-svg";

const CustomIcon: IconDefinition = {
  tag: "svg",
  attrs: { viewBox: "0 0 24 24" },
  children: [
    {
      tag: "path",
      attrs: {
        d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      },
    },
  ],
};
```

### 批量导入

```javascript
// 导入所有图标
import * as AllIcons from "@ed-ui/icons-svg";

// 过滤特定图标
const arrowIcons = Object.entries(AllIcons)
  .filter(([name]) => name.toLowerCase().includes("arrow"))
  .reduce((acc, [name, icon]) => {
    acc[name] = icon;
    return acc;
  }, {});
```

### 动态加载

```javascript
// 异步加载图标
async function loadIcon(iconName) {
  try {
    const iconModule = await import(`@ed-ui/icons-svg`);
    return iconModule[iconName];
  } catch (error) {
    console.error(`Failed to load icon: ${iconName}`, error);
    return null;
  }
}
```
