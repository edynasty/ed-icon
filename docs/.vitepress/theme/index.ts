import { h } from "vue";
import Theme from "vitepress/theme";
import AllIconsShowcase from "./components/AllIconsShowcase.vue";
import "./custom.css";

// 导入所有图标组件
import * as Icons from "../../../packages/icons-vue/src";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // 注册图标展示组件
    app.component("AllIconsShowcase", AllIconsShowcase);

    // 注册所有图标组件
    Object.keys(Icons).forEach((iconName) => {
      app.component(iconName, Icons[iconName]);
    });
  },
};
