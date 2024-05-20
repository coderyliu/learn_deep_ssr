// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 只通过这一行代码，就可以实现element-plus的自动引入：全局样式引入、全局组件注册
  modules: ['@element-plus/nuxt']
})
