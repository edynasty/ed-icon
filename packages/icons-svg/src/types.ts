export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

// 简化的图标定义，直接使用 AbstractNode 结构
export type IconDefinition = AbstractNode;

// 完整的图标定义（如果需要更复杂的结构）
export interface FullIconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon:
    | ((primaryColor: string, secondaryColor: string) => AbstractNode)
    | AbstractNode;
}

export type ThemeType = "filled" | "outlined" | "twotone";
export type ThemeTypeUpperCase = "Filled" | "Outlined" | "TwoTone";

export interface IconManifest {
  [key: string]: {
    name: string;
    category?: string;
  };
}

export default IconDefinition;
