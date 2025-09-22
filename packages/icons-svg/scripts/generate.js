const fs = require("fs");
const path = require("path");

// 路径配置
const svgDir = path.resolve(__dirname, "../svg");
const iconsDir = path.resolve(__dirname, "../src/icons");

// 确保输出目录存在
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 辅助函数：将文件名转换为 PascalCase
function toPascalCase(str) {
  const pascalCase = str
    .replace(/[-_]/g, " ")
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
    .replace(/\s/g, "");

  // 处理与 TypeScript 内置类型冲突的名称
  const conflictingNames = {
    Record: "RecordIcon",
    Required: "RequiredIcon",
  };

  return conflictingNames[pascalCase] || pascalCase;
}

// 简单的 SVG 解析函数
function parseSVG(svgContent) {
  // 提取 viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  // 移除外层 svg 标签，获取内容
  const innerContent = svgContent
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "");

  const children = [];

  // 解析 path 元素
  const pathMatches = innerContent.match(/<path[^>]*\/?>(?:<\/path>)?/g) || [];
  pathMatches.forEach((pathStr) => {
    const dMatch = pathStr.match(/d="([^"]*)"/);
    const fillMatch = pathStr.match(/fill="([^"]*)"/);
    const strokeMatch = pathStr.match(/stroke="([^"]*)"/);
    const strokeWidthMatch = pathStr.match(/stroke-width="([^"]*)"/);

    const attrs = {};
    if (dMatch) attrs.d = dMatch[1];
    if (fillMatch && fillMatch[1] !== "none") attrs.fill = fillMatch[1];
    if (strokeMatch && strokeMatch[1] !== "none") attrs.stroke = strokeMatch[1];
    if (strokeWidthMatch) attrs["stroke-width"] = strokeWidthMatch[1];

    if (Object.keys(attrs).length > 0) {
      children.push({
        tag: "path",
        attrs: attrs,
      });
    }
  });

  // 解析 line 元素
  const lineMatches = innerContent.match(/<line[^>]*\/?>(?:<\/line>)?/g) || [];
  lineMatches.forEach((lineStr) => {
    const x1Match = lineStr.match(/x1="([^"]*)"/);
    const y1Match = lineStr.match(/y1="([^"]*)"/);
    const x2Match = lineStr.match(/x2="([^"]*)"/);
    const y2Match = lineStr.match(/y2="([^"]*)"/);
    const strokeMatch = lineStr.match(/stroke="([^"]*)"/);
    const strokeWidthMatch = lineStr.match(/stroke-width="([^"]*)"/);

    const attrs = {};
    if (x1Match) attrs.x1 = x1Match[1];
    if (y1Match) attrs.y1 = y1Match[1];
    if (x2Match) attrs.x2 = x2Match[1];
    if (y2Match) attrs.y2 = y2Match[1];
    if (strokeMatch && strokeMatch[1] !== "none") attrs.stroke = strokeMatch[1];
    if (strokeWidthMatch) attrs["stroke-width"] = strokeWidthMatch[1];

    if (Object.keys(attrs).length > 0) {
      children.push({
        tag: "line",
        attrs: attrs,
      });
    }
  });

  // 解析 circle 元素
  const circleMatches =
    innerContent.match(/<circle[^>]*\/?>(?:<\/circle>)?/g) || [];
  circleMatches.forEach((circleStr) => {
    const cxMatch = circleStr.match(/cx="([^"]*)"/);
    const cyMatch = circleStr.match(/cy="([^"]*)"/);
    const rMatch = circleStr.match(/r="([^"]*)"/);
    const fillMatch = circleStr.match(/fill="([^"]*)"/);
    const strokeMatch = circleStr.match(/stroke="([^"]*)"/);
    const strokeWidthMatch = circleStr.match(/stroke-width="([^"]*)"/);

    const attrs = {};
    if (cxMatch) attrs.cx = cxMatch[1];
    if (cyMatch) attrs.cy = cyMatch[1];
    if (rMatch) attrs.r = rMatch[1];
    if (fillMatch && fillMatch[1] !== "none") attrs.fill = fillMatch[1];
    if (strokeMatch && strokeMatch[1] !== "none") attrs.stroke = strokeMatch[1];
    if (strokeWidthMatch) attrs["stroke-width"] = strokeWidthMatch[1];

    if (Object.keys(attrs).length > 0) {
      children.push({
        tag: "circle",
        attrs: attrs,
      });
    }
  });

  // 解析 rect 元素
  const rectMatches = innerContent.match(/<rect[^>]*\/?>(?:<\/rect>)?/g) || [];
  rectMatches.forEach((rectStr) => {
    const xMatch = rectStr.match(/x="([^"]*)"/);
    const yMatch = rectStr.match(/y="([^"]*)"/);
    const widthMatch = rectStr.match(/width="([^"]*)"/);
    const heightMatch = rectStr.match(/height="([^"]*)"/);
    const fillMatch = rectStr.match(/fill="([^"]*)"/);
    const strokeMatch = rectStr.match(/stroke="([^"]*)"/);
    const strokeWidthMatch = rectStr.match(/stroke-width="([^"]*)"/);
    const rxMatch = rectStr.match(/rx="([^"]*)"/);
    const ryMatch = rectStr.match(/ry="([^"]*)"/);

    const attrs = {};
    if (xMatch) attrs.x = xMatch[1];
    if (yMatch) attrs.y = yMatch[1];
    if (widthMatch) attrs.width = widthMatch[1];
    if (heightMatch) attrs.height = heightMatch[1];
    if (fillMatch && fillMatch[1] !== "none") attrs.fill = fillMatch[1];
    if (strokeMatch && strokeMatch[1] !== "none") attrs.stroke = strokeMatch[1];
    if (strokeWidthMatch) attrs["stroke-width"] = strokeWidthMatch[1];
    if (rxMatch) attrs.rx = rxMatch[1];
    if (ryMatch) attrs.ry = ryMatch[1];

    if (Object.keys(attrs).length > 0) {
      children.push({
        tag: "rect",
        attrs: attrs,
      });
    }
  });

  return {
    tag: "svg",
    attrs: { viewBox },
    children: children,
  };
}

// 生成单个图标文件
function generateIconFile(svgPath, iconName) {
  const svgContent = fs.readFileSync(svgPath, "utf8");
  const iconData = parseSVG(svgContent);

  const tsContent = `// 自动生成的图标定义文件
// @ts-ignore
import type { IconDefinition } from '../types'

const ${iconName}: IconDefinition = ${JSON.stringify(iconData, null, 2)}

export default ${iconName}
`;

  const outputPath = path.join(iconsDir, `${iconName}.ts`);
  fs.writeFileSync(outputPath, tsContent);
  console.log(`生成图标文件: ${iconName}.ts`);

  return iconName;
}

// 主函数
function generateAllIcons() {
  console.log("开始生成图标定义文件...");

  // 获取所有SVG文件
  const svgFiles = fs
    .readdirSync(svgDir)
    .filter((file) => file.endsWith(".svg"));
  const iconData = [];

  // 处理每个SVG文件
  for (const svgFile of svgFiles) {
    const baseName = path.basename(svgFile, ".svg");
    const originalName = toPascalCase(baseName);
    const svgPath = path.join(svgDir, svgFile);

    try {
      const generatedName = generateIconFile(svgPath, originalName);
      iconData.push({
        fileName: baseName,
        originalName: originalName,
        importName: generatedName,
      });
    } catch (error) {
      console.error(`处理 ${svgFile} 时出错:`, error);
    }
  }

  // 生成导出文件
  const exportContent = `// 自动生成的图标导出文件
${iconData
  .map((icon) => `import ${icon.importName} from './${icon.importName}'`)
  .join("\n")}

// 导出所有图标组件
${iconData
  .map(
    (icon) =>
      `export { default as ${icon.importName} } from './${icon.importName}'`
  )
  .join("\n")}

// 导出所有图标的映射
export const IconMap = {
${iconData
  .map((icon) => `  '${icon.fileName}': ${icon.importName},`)
  .join("\n")}
}

// 导出图标名称列表
export const IconNames = [
${iconData.map((icon) => `  '${icon.fileName}',`).join("\n")}
] as const

export type IconName = typeof IconNames[number]
`;

  const exportFilePath = path.join(iconsDir, "index.ts");
  fs.writeFileSync(exportFilePath, exportContent);

  console.log("生成导出文件: index.ts");
  console.log(`总共生成了 ${iconData.length} 个图标定义文件`);
}

// 运行生成
generateAllIcons();
