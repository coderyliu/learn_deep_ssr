<template>
  <div>
    <h2>哈哈哈</h2>
    <!--
      动态路由:
      1. 获取路由参数: route.params
      2. 获取路由参数: route.query
      实现方式：
      pages目录中创建对应的页面，动态路由参数使用[id]\[name]方式，nuxt会自动匹配
      routes = [
        {
          path: '/',
          component: () => import('@/pages/index.vue')
        },
        {
          path: '/detail02/:id',
          component: () => import('@/pages/detail02/[id].vue')
        }
      ]

      路由嵌套的实现方式：
      pages目录中创建对应的页面parent.vue, 在创建对应的目录parent parent.vue作为占位组件（NuxtPage）
     -->

     <!-- 1.detail02/[id] -->
     <NuxtLink to="/detail02/1">detail02</NuxtLink>
     <!-- 2.detail03-[role] -->
     <NuxtLink to="/detail03-user">detail03</NuxtLink>
     <!-- 3. detail03-[role]/[id] -->
     <NuxtLink to="/detail04-user/123">detail04</NuxtLink>
     <!-- 4. detail05 匹配不到的路由，同一跳转至404 -->
     <NuxtLink to="/detail05/123">detail05</NuxtLink>
     <!-- 5. 全局路由匹配不到的跳转到根级的[...slug].vue -->
     <NuxtLink to="/home">detail06</NuxtLink>

     <!-- 6. 路由嵌套 -->
     <NuxtLink to="/parent">parent</NuxtLink>
     <NuxtLink to="/parent/detail">parent detail</NuxtLink>
  </div>
</template>

<script setup></script>
