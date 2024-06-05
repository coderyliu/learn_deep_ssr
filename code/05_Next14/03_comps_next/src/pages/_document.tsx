import React, { memo } from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

// 全局自定义文档 SEO优化 但是不会覆盖页面中的配置

// eslint-disable-next-line react/display-name
const Document = memo(() => {
  return (
    <Html lang="en">
      <Head>
        <title>hello coder</title>
        <meta name="keyword" content="京东、今晚618" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
})

export default Document