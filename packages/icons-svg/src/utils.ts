import type { IconDefinition, AbstractNode } from "./types";

/**
 * 标准化图标名称
 */
export function normalizeIconName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^(.)/, (char) => char.toUpperCase());
}

/**
 * 创建图标定义（现在直接返回 AbstractNode）
 */
export function createIconDefinition(
  name: string,
  theme: "filled" | "outlined" | "twotone",
  icon: AbstractNode
): AbstractNode {
  // 由于 IconDefinition 现在就是 AbstractNode，直接返回 icon
  return icon;
}

/**
 * 解析 SVG 字符串为 AbstractNode 对象
 */
export function parseSVG(svgString: string): AbstractNode {
  // 简化的 SVG 解析器
  const viewBoxMatch = svgString.match(/viewBox="([^"]*)"/);
  const pathMatch = svgString.match(/<path[^>]*d="([^"]*)"[^>]*\/?>/g);

  const children: AbstractNode[] = [];

  if (pathMatch) {
    pathMatch.forEach((path) => {
      const dMatch = path.match(/d="([^"]*)"/);
      const fillMatch = path.match(/fill="([^"]*)"/);

      if (dMatch) {
        children.push({
          tag: "path",
          attrs: {
            d: dMatch[1],
            fill: fillMatch ? fillMatch[1] : "currentColor",
          },
        });
      }
    });
  }

  return {
    tag: "svg",
    attrs: {
      viewBox: viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24",
      fill: "currentColor",
    },
    children,
  };
}

/**
 * 将 AbstractNode 转换为 SVG 字符串
 */
export function renderSVG(node: AbstractNode): string {
  function renderNode(node: AbstractNode): string {
    const { tag, attrs, children = [] } = node;
    const attrsArray: string[] = [];

    for (const key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        attrsArray.push(`${key}="${attrs[key]}"`);
      }
    }
    const attrsString = attrsArray.join(" ");

    if (children.length === 0) {
      return `<${tag} ${attrsString} />`;
    }

    const childrenString = children.map(renderNode).join("");
    return `<${tag} ${attrsString}>${childrenString}</${tag}>`;
  }

  return renderNode(node);
}

export default {
  normalizeIconName,
  createIconDefinition,
  parseSVG,
  renderSVG,
};
