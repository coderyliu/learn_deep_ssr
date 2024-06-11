import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

// 注意点：next中的中间件，必须在项目的根目录下新建middleware.ts文件，并且必须导出一个名为middleware的函数
// ? 中间件可以对API请求、路由切换、资源加载、静态资源加载等进行拦截，并做相应的处理
// ? 中间件的使用需要配合matcher，可以对某些特定的请求拦截

// example: 只对/api/:path进行拦截  可以拦截/api/a /api/b 但是不能拦截/api/a/b
// *要拦截/api/a/b 需要添加/api/:path*
// export const config = {
//   matcher: "/api/:path"
// };

// example: 排除对静态资源的拦截 下面这个只拦截了API请求、路由切换
export const config = {
  // !matcher的匹配必须以/开头
  matcher: ["/((?!_next/static|favicon.ico).*)"]
};

export function middleware(req: NextRequest) {
  // 1. req的常用参数：req.url req.nextUrl req.cookies req.headers req.method req.nextUrl.searchParams
  console.log(req.url);
  console.log(req.nextUrl);

  // 2. 可以做的常见操作：返回、重定向、设置cookie、设置header等
  // 2.1 next方法或者返回为空 则对拦截处理正常返回
  // return NextResponse.next();

  // 2.2 对路径重写
  // if (req.nextUrl.pathname.startsWith("/juanpi/api")) {
  //   return NextResponse.rewrite(
  //     new URL(req.nextUrl.pathname, "http://codercba.com:9060")
  //   );
  // }

  // 2.3 重定向
  const cookies = req.cookies;
  const token = cookies.get("token");

  if (!token && !req.nextUrl.pathname.includes("login")) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  // 3. 设置header
  // 4. 设置cookie
}
