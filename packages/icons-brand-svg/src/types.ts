// 品牌图标定义类型
export interface IconDefinition {
  tag: string;
  attrs: {
    viewBox: string;
    [key: string]: any;
  };
  children: Array<{
    tag: string;
    attrs: {
      [key: string]: any;
    };
  }>;
}

export interface IconProps {
  size?: string | number;
  color?: string;
  className?: string;
  style?: Record<string, any>;
}
