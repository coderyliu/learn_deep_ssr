import React, { memo } from 'react'
import Head from 'next/head'

// eslint-disable-next-line react/display-name
const Index: React.FC = memo(() => {
  // next中的内置组件 Head Link Image Script
  return (
    <div>
      Index Page
      <h2>hello coder</h2>
      {/*
        1. 这样编写的头部元信息，只对当前页面生效，是局部的
        2. 如果想全局生效，需要在_document.tsx中配置
      */}
      <Head>
        <title>你好啊，李银河</title>
        <meta name="description" content="我是coder" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
    </div>
  )
})

export default Index