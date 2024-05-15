// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 渲染模式：nuxt支持多种渲染模式：csr\ssr\ssg\swr
  // 1. ssr开启全局的渲染模式
  // ssr: true,
  // 2. 通过routeRules配置路由的渲染模式
  routeRules: {
    '/': {
      ssr: true, // ssr
      prerender: true, // 预渲染
    },
    '/about': { ssr: false }, // spa客户端渲染
    '/detail': { swr: true } // 先生成静态资源，每隔一段时间再次生成静态资源去渲染
  },
})
