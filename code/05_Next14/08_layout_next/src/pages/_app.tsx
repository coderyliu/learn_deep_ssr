import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Link from "next/link";
import "@/styles/globals.css";
import Layout from "@/components/layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // 但是我们有的页面是不需要 layout的，所以需要判断，定制化展示,是根据组件的displayName来判断的
  // const cn = Component.displayName;
  // if (cn === "Profile") {
  //   return <Component {...pageProps} />;
  // } else {
  //   return (
  //     <Layout>
  //       <Link href="/cart">
  //         <button>cart</button>
  //       </Link>
  //       <Link href="/profile">
  //         <button>profile</button>
  //       </Link>
  //       <Link href="/">
  //         <button>home</button>
  //       </Link>
  //       <Component {...pageProps} />
  //     </Layout>
  //   );
  // }

  // ? 但是如果组件越来越多，这种方法是不灵活的，所以我们采用组件绑定Layout的函数的方式
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
