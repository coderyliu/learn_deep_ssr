import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import "@/styles/global.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // 导航方式二：useRouter Hook
  const router = useRouter();
  // 方法：push,replace,back   路由监听：router.events.on(name, func)
  const handleNavigate = () => {
    // router.push('/find')
    router.push({
      pathname: "/find",
      query: {
        name: "coder",
        age: 18
      }
    });
  };

  // 路由监听
  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      console.log("routeChangeStart", url);
    });
    router.events.on("routeChangeComplete", (url) => {
      console.log("routeChangeComplete", url);
    });
    router.events.on("routeChangeError", (url) => {
      console.log("routeChangeError", url);
    });

    return () => {
      router.events.off("routeChangeStart", (url) => {
        console.log("routeChangeStart", url);
      });
      router.events.off("routeChangeComplete", (url) => {
        console.log("routeChangeComplete", url);
      });
      router.events.off("routeChangeError", (url) => {
        console.log("routeChangeError", url);
      });
    };
  });

  return (
    <>
      {/* 导航方式一：组件Link */}
      {/* 属性:href 跳转的路径 as: 别名，要显示在浏览器上的路径，会替换href replace: 是否替换历史记录 target: 是否新开一个标签页 */}
      <div>
        <Link href="/">首页</Link>
        <Link href="/find">发现</Link>
        <Link href="/cart" as={"/carts"}>
          购物车
        </Link>
        <Link href="http://www.baidu.com" target="_blank">
          百度
        </Link>
        {/* href除了可以是一个字符串，还可以是一个对象 */}
        <Link href={{ pathname: "/find", query: { id: 1 } }}>发现</Link>

        {/* 导航方式二: useRouter Hook */}
        <button onClick={() => router.push("/cart")}>购物车</button>
        <button onClick={() => handleNavigate()}>发现</button>
      </div>
      {/* 页面内容：相当于router-view */}
      <Component {...pageProps} />
    </>
  );
}
