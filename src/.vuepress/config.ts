import { defineUserConfig } from "vuepress"
import theme from "./theme.js"

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://www.unpkg.com/ame-grid@0.0.1/css/grid.css"
      }
    ]
  ],
  theme

  // Enable it with pwa
  // shouldPrefetch: false,
})
