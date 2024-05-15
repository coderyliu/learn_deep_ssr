// 全局监听
// ?全局路由中间件按照在目录定义的字母顺序执行
// ?如果想要调整顺序可以在命名时添加数字前缀 01_ 02_ ...
export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = false;

  if (isLogin && to.path !== "/login") {
    return navigateTo("/login");
  }
});
