<script setup lang="ts">
const BASE_URL = 'http://codercba.com:9060/juanpi/api'

const count = ref(1)
// ?使用useFetch的返回结果的函数刷新请求
const { data, refresh, pending } = await useFetch(BASE_URL + '/homeInfo', {
  method: 'GET',
  // 这样写有效
  query: { count }
  // 这样写无效
  // query: {
  //   count: count.value
  // }
})
console.log(data.value)

// ?刷新的方式二：改变请求所依赖的响应式值
const refreshFn = () => {
  count.value++
}
</script>

<template>
  <div>
    <h2>refresh page</h2>
    <h2>{{ count }}</h2>
    <button @click="refresh">刷新1</button>
    <button @click="refreshFn">刷新2</button>
  </div>
</template>

<style scoped></style>
