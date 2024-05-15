<script setup>
// ?路由验证
// 场景：需要对动态路由的参数进行校验等
definePageMeta({
  validate: (route) => {
    // ?校验参数 true 通过 false 拦截
    // false默认重定向到nuxt内置的404页面，也可以返回一个对象 { statusCode: 404 } 来重定向到我们自定义的error页面
    // ?项目根目录下新增 error.vue
    const id = route.params.id
    // return id && id > 0
    return {
      statusCode: 404
    }
  },
})
</script>

<template>
  <div>
    <h2>detail page</h2>
  </div>
</template>

<style scoped></style>
