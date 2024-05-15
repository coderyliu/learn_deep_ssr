<script setup lang="ts">
// 路由中间件监听：分为两种：全局监听和局部监听
// 局部监听的实现方式：在页面中通过definePageMeta({ middleware: [] })实现
// 全局监听：在middleware中创建.global.ts文件,通过defineNuxtRouteMiddleware()实现

// 类似公用的可以提取到middleware中: 不要以.global.ts结尾，在页面中使用以中间件名称直接使用，采用kobe-case命名
// !局部监听的必须要用在页面中，排除app.vue

// 也可以使用router.beforeEach()  router.afterEach()来监听
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
