import type { AppProps } from "next/app";
import '@/styles/global.css'
import '@/assets/css/common.css'

import '@/assets/cus-font/iconfont.css';

// ?此文件用来自定义app应用程序 可以覆盖默认配置
// 通常用来：
// 1. 全局样式
// 2. redux
// 3. 路由监听等

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
