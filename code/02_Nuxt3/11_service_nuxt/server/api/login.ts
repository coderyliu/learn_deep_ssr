// 我们可以在server目录api目录下定义一个接口，并在客户端访问
// 文件名称不带.post/.get则get/post都可以访问
// 文件名称[params].ts则可以携带参数访问
export default defineEventHandler(() => {
  return {
    code: 0,
    msg: "登录成功",
    data: {
      token: "123456"
    }
  };
});
