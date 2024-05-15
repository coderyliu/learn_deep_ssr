<script setup lang="ts">
// 插件的注册方式一：在app中注册
// 注册：
const nuxtApp = useNuxtApp()
nuxtApp.provide('version', '1.0.0')
// nuxtApp.provide('formatPrice', (price: number) => price.toFixed(2))

// 使用
// console.log(nuxtApp.$formatPrice(100.123))
console.log(nuxtApp.$version)

// 插件的注册方式二：在plugins目录中注册,在Vue创建的时候注册
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
