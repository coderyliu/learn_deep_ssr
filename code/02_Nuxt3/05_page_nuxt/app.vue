<script setup lang="ts">
const router = useRouter()

// navigateTo方法支持实现导航 参数navigate(to, options)
const navigateToProfile = () => {
  // to 支持字符串、对象
  // navigateTo('/profile')
  navigateTo({
    path: '/profile',
    query: {
      name: 'coder',
      age: 18
    }
  })
  // options支持external、replace
  navigateTo('https://www.baidu.com', {
    external: true // 是否允许跳转至外部链接
  })
}

const useRouterHook = () => {
  router.push('/detail')
  // 支持history API
  // router.go(-1)
  // router.replace('/detail')
  // router.back()
}
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtPage />

    <!-- 1. 导航方式一：内置组件、有利于SEO -->
    <!-- NuxtLink是Nuxt的内置组件，是对router-link组件的封装 -->
    <!-- NuxtLink底层是a标签，因此使用a标签+href也能实现跳转 -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/category">Category</NuxtLink>
    <!-- a标签实现导航 -->
    <a href="/login">login</a>

    <!-- NuxtLink属性 to：跳转的路径，href属性：路径别名 target: 跳转方式 -->
    <NuxtLink to="http://www.baidu.com" target="_blank">百度</NuxtLink>

    <!-- to 属性：支持对象、字符串 -->
    <NuxtLink :to="{ path: '/registry', query: { name: 'coder' }}" target="_blank">Registry</NuxtLink>

    <!-- 2. 导航方式二：使用js代码实现导航 -->
    <div @click="navigateToProfile">Profile</div>

    <!-- 3. 导航方式三：使用router对象实现导航 -->
    <div @click="useRouterHook">detail</div>
  </div>
</template>
