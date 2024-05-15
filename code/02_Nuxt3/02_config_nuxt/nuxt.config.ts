// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 1.这里定义的运行时配置不会打入到 process.env -- 定义环境变量
  // ? 通过.env文件中定义环境变量，优先级 .env > runtimeConfig (相同的会覆盖)
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000' // server和client都可以访问
    }
  },
  // 2.定义在构建时的公共变量,也可以将此配置抽离成app.config.ts文件  app.config.ts的优先级大于appConfig（相同的覆盖）
  appConfig: {
    title: 'Nuxt3-Vue3-TS-Vite',
    description: 'Nuxt3-Vue3-TS-Vite'
  },
  app: {
    // 3.为每个页面上的head设置默认配置方式1      方式2:useHead  方式3:Head组件
    // ? 有利于搜素引擎优化SEO
    head: {
      title: '你好啊，李银河',
      meta: [
        { name: 'keywords', content: 'Nuxt3-Vue3-TS-Vite' },
        { name: 'description', content: 'Nuxt3-Vue3-TS-Vite' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  // 4. 是否使用服务顿渲染，为false使用spa(csr)
  ssr: false,
  // 5. 配置路由
  router: {
    options: {
      // 5.1 配置路由模式 仅在ssr为false下生效
      hashMode: true
    }
  }
})
