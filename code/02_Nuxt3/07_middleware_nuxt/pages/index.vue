<script setup>
definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware((to, from) => {
      // to 当前路由 from 上一个路由 注意：没有next参数
      // console.log(to)
      // console.log(from)
      console.log('路由中间件1')

      // ?中间件的返回值：如果为null\undefined\true 继续执行下一个中间件
      // ?如果为false,navigateTo abortNavigation则不执行下一个中间件
    }),
    // 多个中间件，按照定义的顺序依次执行
    defineNuxtRouteMiddleware((to, from) => {
      console.log('路由中间件2')
    }),
    // ?使用命名中间件
    'auth'
  ],
})
</script>

<template>
  <div>
    <h2>index page</h2>
    <NuxtLink to="/about">
      <button>about</button>
    </NuxtLink>
    <NuxtLink to="/profile">
      <button>profile</button>
    </NuxtLink>
    <NuxtLink to="/login">
      <button>login</button>
    </NuxtLink>
    <NuxtLink to="/detail/123">
      <button>detail</button>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
