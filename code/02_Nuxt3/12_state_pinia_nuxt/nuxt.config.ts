// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 只通过这一行代码就可以实现对pinia的支持，包括：把服务端的初始化数据同步到客户端，在客户端服务端都可以实现数据共享
  modules: ['@pinia/nuxt']
})
