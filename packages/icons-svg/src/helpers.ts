import { IconDefinition, AbstractNode } from "./types";

const defaultColors = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
};

export interface HelperRenderOptions {
  placeholders?: {
    primaryColor: string;
    secondaryColor: string;
  };
  extraSVGAttrs?: {
    [key: string]: string;
  };
}

export function renderIconDefinitionToSVGElement(
  icond: IconDefinition,
  options: HelperRenderOptions = {}
): string {
  // 现在 IconDefinition 就是 AbstractNode，直接渲染
  return renderAbstractNodeToSVGElement(icond, options);
}

function renderAbstractNodeToSVGElement(
  node: AbstractNode,
  options: HelperRenderOptions
): string {
  const targetAttrs =
    node.tag === "svg"
      ? {
          ...node.attrs,
          ...(options.extraSVGAttrs || {}),
        }
      : node.attrs;
  const attrs = Object.keys(targetAttrs).reduce((acc: string[], nextKey) => {
    const key = nextKey;
    const value = targetAttrs[key];
    const token = `${key}="${value}"`;
    acc.push(token);
    return acc;
  }, []);
  const attrsToken = attrs.length ? " " + attrs.join(" ") : "";
  const children = (node.children || [])
    .map((child) => renderAbstractNodeToSVGElement(child, options))
    .join("");

  if (children && children.length) {
    return `<${node.tag}${attrsToken}>${children}</${node.tag}>`;
  }
  return `<${node.tag}${attrsToken} />`;
}
