export default defineNuxtPlugin({
  // 生命周期
  // ?分为三类：App hooks（runTime） Nuxt hooks(build time) Nitro App Hooks(runtime 服务器端)
  hooks: {
    // 应用程序：已创建(创建vueApp实例时调用)   server和client端都会调用
    "app:created"(vueApp) {
      // vueApp就是vue创建的实例
      console.log("app:created");
      console.log(vueApp)
    },
    // 应用程序：发生致命错误时调用  server和client端都会调用
    "app:error"(err) {
      console.log("app:error");
    },
    // 应用程序：初始化setup语法糖完成时调用 server和client端都会调用
    "vue:setup"() {
      console.log("vue:setup");
    },
    // SSR渲染完成时调用 仅server端触发
    "app:rendered"(renderContext) {
      console.log("app:rendered");
    },
    // 应用程序：已挂载 仅client端触发
    "app:mounted"() {
      console.log("app:mounted");
    }
  }
});
