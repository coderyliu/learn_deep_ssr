import type { AppProps } from "next/app";
import Link from "next/link";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        {/* 动态路由格式1: 目录/[id].tsx */}
        <Link href="/detail/123">
          <button>详情01</button>
        </Link>
        <Link href="/detail">
          <button>详情01-主页</button>
        </Link>
        {/* 动态路由的格式二：目录-[role]/[id].tsx ==> 这种是不合法的，动态路由的括号[]前后不能有字符*/}
        {/* 错误会跳转到404 */}
        <Link href="/detail03/role-123">
          <button>详情02</button>
        </Link>
        {/* 动态路由的格式三：目录/[role]/[id].tsx */}
        <Link href="/detail02/abc/123">
          <button>详情03</button>
        </Link>

        {/* 动态路由的格式四：目录/[...slug].tsx 会覆盖detail04下的所有路由 */}
        <Link href="/detail04/abc/123">
          <button>详情04</button>
        </Link>
        <Link href="/detail04/abc/123/def">
          <button>详情04-子路由</button>
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}
