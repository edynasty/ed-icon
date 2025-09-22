# @ed-ui/icons-svg

ED Icons SVG 核心包 - 包含所有 SVG 图标的原始数据和类型定义。

## 简介

这是 ED Icon 图标库的核心包，包含：

- 266+ 个 SVG 图标的原始数据
- TypeScript 类型定义
- 图标解析和渲染工具函数
- 模板生成系统

## 特性

- 🎯 **完整的图标集**: 包含 AI、DevOps、语言、品牌等多个分类的图标
- 📦 **TypeScript 支持**: 完整的类型定义和 IntelliSense 支持
- 🔧 **渲染工具**: 提供 SVG 渲染和操作的辅助函数
- 🎨 **模板系统**: 使用 EJS 模板自动生成图标定义

## 安装

```bash
npm install @ed-ui/icons-svg
```

## 使用

### 基础用法

```typescript
import { Add, Delete, Search } from "@ed-ui/icons-svg";
import { renderIconDefinitionToSVGElement } from "@ed-ui/icons-svg";

// 使用图标定义
console.log(Add); // 输出图标的 SVG 定义

// 渲染为 SVG 元素
const svgElement = renderIconDefinitionToSVGElement(Add);
document.body.appendChild(svgElement);
```

### 获取所有图标

```typescript
import { IconMap, IconNames } from "@ed-ui/icons-svg";

// 图标映射对象
console.log(IconMap.Add); // 获取 Add 图标定义

// 图标名称列表
console.log(IconNames); // ['Add', 'Delete', 'Search', ...]
```

### 类型定义

```typescript
import type { IconDefinition, AbstractNode } from "@ed-ui/icons-svg";

// IconDefinition 是图标定义的类型
const myIcon: IconDefinition = {
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

## 图标分类

### AI 相关

- `Ai`, `Jupyter`, `Numpy`, `Ollama`, `Openai`, `Pandas`, `Pytorch`, `Robot`, `Tensorflow`

### DevOps 工具

- `Docker`, `Kubernetes`, `Git`, `Github`, `Gitlab`, `Jenkins`, `Nginx`, `Apache` 等

### 编程语言

- `Javascript`, `Typescript`, `Python`, `Java`, `React`, `Vue`, `Angular`, `Nodejs` 等

### 品牌图标

- `Google`, `Microsoft`, `Apple`, `Amazon`, `Facebook`, `Netflix`, `Spotify` 等

### 通用图标

- `Add`, `Delete`, `Search`, `Edit`, `Settings`, `Home`, `User`, `Heart` 等

## API 参考

### 类型定义

#### `IconDefinition`

```typescript
interface IconDefinition {
  tag: string;
  attrs: Record<string, string>;
  children: AbstractNode[];
}
```

#### `AbstractNode`

```typescript
interface AbstractNode {
  tag: string;
  attrs: Record<string, string>;
  children?: AbstractNode[];
}
```

### 工具函数

#### `renderIconDefinitionToSVGElement(icon, options?)`

将图标定义渲染为 SVG 元素。

参数：

- `icon: IconDefinition` - 图标定义
- `options?: { extraAttrs?: Record<string, string> }` - 额外的 SVG 属性

返回：

- `SVGElement` - 渲染后的 SVG 元素

#### `parseSVG(svgString)`

解析 SVG 字符串为图标定义。

参数：

- `svgString: string` - SVG 字符串

返回：

- `IconDefinition` - 解析后的图标定义

## 开发

### 生成图标定义

```bash
npm run generate
```

### 构建

```bash
npm run build
```

### 清理

```bash
npm run clean
```

## 许可证

MIT License

## 相关包

- [`@ed-ui/icons-vue`](../icons-vue) - Vue 3 组件
- [`@ed-ui/icons-react`](../icons-react) - React 组件
- [`@ed-ui/icons`](../icons) - 完整图标库
