# React API

ED Icon 为 React 提供了独立的图标组件，使用方式类似 Ant Design Icons。

## 安装

```bash
npm install @ed-ui/icons-react
```

## 基本使用

### 导入图标组件

```jsx
import { Home, Add, Delete, Search, User } from "@ed-ui/icons-react";

function App() {
  return (
    <div>
      <Home />
      <Add />
      <Delete />
      <Search />
      <User />
    </div>
  );
}
```

### 设置图标属性

```jsx
import { Heart, Star } from "@ed-ui/icons-react";

function IconExample() {
  return (
    <div>
      {/* 设置大小 */}
      <Heart size={24} />
      <Heart size="32px" />

      {/* 设置颜色 */}
      <Star color="#ff4d4f" />
      <Star style={{ color: "#1890ff" }} />

      {/* 添加点击事件 */}
      <Heart
        size={28}
        color="#f5222d"
        onClick={() => console.log("Heart clicked!")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
```

## 图标容器组件

为了更好地控制图标样式，我们提供了 `IconWrapper` 容器组件：

```jsx
import { IconWrapper, Home, Loading } from "@ed-ui/icons-react";

function ContainerExample() {
  return (
    <div>
      {/* 基础用法 */}
      <IconWrapper>
        <Home />
      </IconWrapper>

      {/* 设置大小和颜色 */}
      <IconWrapper size="24px" color="#1890ff">
        <Home />
      </IconWrapper>

      {/* 旋转动画 */}
      <IconWrapper spin>
        <Loading />
      </IconWrapper>
    </div>
  );
}
```

## API 参考

### 图标组件 Props

所有图标组件都支持以下 props：

| 属性        | 类型                          | 默认值           | 描述                              |
| ----------- | ----------------------------- | ---------------- | --------------------------------- |
| `size`      | `string \| number`            | `'1em'`          | 图标大小，可以是像素值或 CSS 单位 |
| `color`     | `string`                      | `'currentColor'` | 图标颜色                          |
| `style`     | `CSSProperties`               | -                | 自定义样式                        |
| `className` | `string`                      | -                | CSS 类名                          |
| `onClick`   | `(event: MouseEvent) => void` | -                | 点击事件处理器                    |

### IconWrapper Props

| 属性        | 类型               | 默认值           | 描述               |
| ----------- | ------------------ | ---------------- | ------------------ |
| `size`      | `string \| number` | `'1em'`          | 容器大小           |
| `color`     | `string`           | `'currentColor'` | 图标颜色           |
| `spin`      | `boolean`          | `false`          | 是否旋转动画       |
| `style`     | `CSSProperties`    | -                | 自定义样式         |
| `className` | `string`           | -                | CSS 类名           |
| `children`  | `ReactNode`        | -                | 子元素（图标组件） |

## 使用示例

### 按钮中的图标

```jsx
import { Add, Delete, Edit } from "@ed-ui/icons-react";

function ButtonExample() {
  return (
    <div>
      <button className="btn-primary">
        <Add size={16} />
        添加
      </button>

      <button className="btn-danger">
        <Delete size={16} />
        删除
      </button>

      <button className="btn-default">
        <Edit size={16} />
        编辑
      </button>
    </div>
  );
}
```

### 导航菜单

```jsx
import { Home, User, Settings, Help } from "@ed-ui/icons-react";

function Navigation() {
  const menuItems = [
    { icon: Home, label: "首页", path: "/" },
    { icon: User, label: "用户", path: "/user" },
    { icon: Settings, label: "设置", path: "/settings" },
    { icon: Help, label: "帮助", path: "/help" },
  ];

  return (
    <nav>
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <a key={item.path} href={item.path}>
            <IconComponent size={20} />
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
```

### 状态指示器

```jsx
import { Check, Close, Warning, Info } from "@ed-ui/icons-react";

function StatusIndicator({ status, message }) {
  const statusConfig = {
    success: { icon: Check, color: "#52c41a" },
    error: { icon: Close, color: "#ff4d4f" },
    warning: { icon: Warning, color: "#faad14" },
    info: { icon: Info, color: "#1890ff" },
  };

  const config = statusConfig[status];
  const IconComponent = config.icon;

  return (
    <div className="status-indicator">
      <IconComponent size={16} color={config.color} />
      <span>{message}</span>
    </div>
  );
}
```

## TypeScript 支持

ED Icon 完全支持 TypeScript，提供完整的类型定义：

```tsx
import { FC, MouseEvent } from "react";
import { Home, Add } from "@ed-ui/icons-react";

interface IconButtonProps {
  icon: FC<any>;
  size?: string | number;
  onClick?: (event: MouseEvent) => void;
}

const IconButton: FC<IconButtonProps> = ({
  icon: IconComponent,
  size = 20,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <IconComponent size={size} />
    </button>
  );
};

// 使用
function App() {
  return (
    <div>
      <IconButton
        icon={Home}
        size={24}
        onClick={() => console.log("Home clicked")}
      />
      <IconButton icon={Add} onClick={() => console.log("Add clicked")} />
    </div>
  );
}
```

## 最佳实践

### 1. 按需导入

只导入您需要的图标，减小包体积：

```jsx
// 推荐：按需导入
import { Home, Add, Delete } from "@ed-ui/icons-react";

// 避免：全量导入
// import * as Icons from '@ed-ui/icons-react'
```

### 2. 统一图标大小

在应用中保持一致的图标大小：

```jsx
// 定义统一的图标大小
const ICON_SIZES = {
  small: 16,
  medium: 20,
  large: 24,
};

function ConsistentIcons() {
  return (
    <div>
      <Home size={ICON_SIZES.medium} />
      <Add size={ICON_SIZES.medium} />
      <Delete size={ICON_SIZES.medium} />
    </div>
  );
}
```

### 3. 创建图标字典

对于动态图标，可以创建图标字典：

```jsx
import { Home, User, Settings, Help } from '@ed-ui/icons-react'

const ICON_MAP = {
  home: Home,
  user: User,
  settings: Settings,
  help: Help,
} as const

function DynamicIcon({ name, ...props }) {
  const IconComponent = ICON_MAP[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent {...props} />
}

// 使用
<DynamicIcon name="home" size={20} />
```

## 常见问题

### Q: 如何自定义图标样式？

A: 可以通过 `style` 或 `className` prop 来自定义样式：

```jsx
<Home
  style={{
    color: '#1890ff',
    fontSize: '24px',
    cursor: 'pointer'
  }}
/>

<Add className="my-custom-icon" />
```

### Q: 图标在某些浏览器中显示异常？

A: 确保您的项目支持 SVG，对于老版本 IE，可能需要添加 polyfill。

### Q: 如何处理图标的无障碍访问？

A: 可以添加 `role` 和 `aria-label` 属性：

```jsx
<Home
  role="img"
  aria-label="首页图标"
  style={{ cursor: "pointer" }}
  onClick={goToHome}
/>
```
