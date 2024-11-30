import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "CHEN的博客测试",
  description: "测试&学习",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
