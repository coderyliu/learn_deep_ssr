// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/global.css",
    "~/assets/css/common.less",
    // 使用字体图标
    "~/assets/fonts/iconfont.css"
  ],
  // 配置样式全局变量
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
});
