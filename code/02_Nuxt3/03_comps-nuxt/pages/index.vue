<template>
  <div>
    <h2>嘻嘻嘻</h2>
    <!-- SEO组件,要大写 -->
    <HEAD>
      <Title>你好啊，李银河</Title>
      <Meta name="keywords" content="李银河,李银河的博客,李银河的博客网站">
      </Meta>
    </HEAD>

    <!-- 仅限客户端使用的组件,不在服务端渲染返回，是由js渲染的 -->
    <ClientOnly>
      <div>
        <div>
          <h2>嘿嘿嘿</h2>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup></script>
