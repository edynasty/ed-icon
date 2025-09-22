import { defineConfig } from "vitepress";
import path from "path";

export default defineConfig({
  title: "ED Icon",
  description: "现代化的 SVG 图标库 - 类似 Ant Design Icons 的独立组件",
  lang: "zh-CN",

  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, ".."),
        "@packages": path.resolve(__dirname, "../../packages"),
      },
    },
  },

  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "icons, svg, vue, react, ui, components, ant design",
      },
    ],
  ],

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "图标展示", link: "/icons/" },
      { text: "使用指南", link: "/guide/" },
      { text: "Vue 组件", link: "/guide/vue-components" },
      { text: "API", link: "/api/" },
      { text: "GitHub", link: "https://github.com/edynasty/ed-icon" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "开始使用",
          items: [
            { text: "快速开始", link: "/guide/" },
            { text: "详细指南", link: "/guide/getting-started" },
          ],
        },
        {
          text: "框架集成",
          items: [
            { text: "Vue 3", link: "/guide/vue" },
            { text: "React", link: "/guide/react" },
            { text: "核心 SVG", link: "/guide/svg" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API 参考",
          items: [
            { text: "概述", link: "/api/" },
            { text: "Vue API", link: "/api/vue" },
            { text: "React API", link: "/api/react" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/edynasty/ed-icon" },
    ],

    footer: {
      message: "基于 Apache 2.0 许可发布",
      copyright: "版权所有 © 2025 edynasty",
    },
  },
});
