<template>
  <div>
    <h2>哈哈哈</h2>
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup lang="ts">
// 1. 获取运行时配置
const runtimeConfig  = useRuntimeConfig()
console.log(runtimeConfig)
// .env定义的环境变量会通过dotenv这个第三方库读取到process.env中
console.log(process.env)

// 2. 获取构建时的公共变量
const appConfig = useAppConfig()
console.log(appConfig)

// 3. 设置全局head 这里的配置相同的变量会覆盖nuxt.config.ts中的配置
useHead({
  title: 'Nuxt 3 App',
  meta: [
    { name: 'description', content: 'Nuxt 3 app' },
  ],
})
</script>
