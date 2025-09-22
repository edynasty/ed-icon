const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

// 模板：独立的 Vue 图标组件
const vueComponentTemplate = `<template>
  <svg
    :width="size"
    :height="size"
    :style="{ color: color }"
    viewBox="<%= viewBox %>"
    fill="currentColor"
    v-bind="$attrs"
  ><%- children %>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number
  color?: string
}

withDefaults(defineProps<Props>(), {
  size: '1em',
  color: 'currentColor'
})
</script>
`;

// 模板：图标索引文件
const indexTemplate = `// 自动生成的技术 Vue 图标组件导出文件
<% icons.forEach(icon => { %>export { default as <%= icon.componentName %> } from './components/<%= icon.componentName %>.vue'
<% }) %>`;

function renderChildren(children) {
  return children
    .map((child) => {
      if (typeof child === "string") {
        return child;
      }

      const { tag, attrs, children: childChildren } = child;
      const attrsStr = Object.entries(attrs || {})
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");

      if (childChildren && childChildren.length > 0) {
        return `<${tag}${attrsStr ? " " + attrsStr : ""}>${renderChildren(
          childChildren
        )}</${tag}>`;
      } else {
        return `<${tag}${attrsStr ? " " + attrsStr : ""} />`;
      }
    })
    .join("");
}

function parseIconFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  // 使用正则表达式解析图标定义
  const match = content.match(
    /const\s+\w+:\s*IconDefinition\s*=\s*({[\s\S]*?})\s*export\s+default/m
  );
  if (!match) {
    throw new Error(`Could not parse icon definition in ${filePath}`);
  }

  try {
    // 清理并解析 JSON
    const jsonStr = match[1]
      .replace(/"/g, '"') // 规范化引号
      .replace(/'/g, '"') // 单引号替换为双引号
      .replace(/(\w+):/g, '"$1":'); // 给属性名添加引号

    return JSON.parse(jsonStr);
  } catch (e) {
    console.error(`Error parsing ${filePath}:`, e.message);
    return null;
  }
}

function generateVueComponents() {
  const iconsDir = path.resolve(__dirname, "../../icons-tech-svg/src/icons");
  const outputDir = path.resolve(__dirname, "../src");
  const componentsDir = path.resolve(outputDir, "components");

  // 确保输出目录存在
  fs.mkdirSync(componentsDir, { recursive: true });

  // 读取所有图标文件
  const iconFiles = fs
    .readdirSync(iconsDir)
    .filter((file) => file.endsWith(".ts") && file !== "index.ts");

  const icons = [];

  iconFiles.forEach((file) => {
    const iconName = path.basename(file, ".ts");
    const iconPath = path.join(iconsDir, file);

    try {
      const iconDef = parseIconFile(iconPath);
      if (!iconDef) {
        console.warn(`Warning: Could not parse ${file}`);
        return;
      }

      const { attrs, children } = iconDef;
      const viewBox = attrs?.viewBox || "0 0 1024 1024";
      const renderedChildren = renderChildren(children || []);

      // 生成 Vue 组件
      const componentContent = ejs.render(vueComponentTemplate, {
        viewBox,
        children: renderedChildren,
      });

      // 写入组件文件
      const componentPath = path.join(componentsDir, `${iconName}.vue`);
      fs.writeFileSync(componentPath, componentContent);

      icons.push({
        name: iconName,
        componentName: iconName,
      });

      console.log(`Generated tech icon: ${iconName}.vue`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  // 生成索引文件
  const indexContent = ejs.render(indexTemplate, { icons });
  fs.writeFileSync(path.join(outputDir, "index.ts"), indexContent);

  console.log(`\nGenerated ${icons.length} tech Vue icon components`);
  console.log("Tech icons index file updated");
}

// 运行生成器
try {
  generateVueComponents();
} catch (error) {
  console.error("Error generating tech Vue components:", error);
  process.exit(1);
}
