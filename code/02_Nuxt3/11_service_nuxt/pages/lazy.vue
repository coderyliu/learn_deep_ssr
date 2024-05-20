<script setup lang="ts">
const BASE_URL = 'http://codercba.com:9060/juanpi/api'

// ?需要注意的一点是：直接在setup中使用$fetch或者useFetch发起网络请求，会阻塞页面导航
// 下面这个demo切换网络至低速3g就能明显感受到：必须在网络请求完成之后才会执行onMounted和页面的切换
// 你可以理解为必须在await之后才会执行后面的代码,如果我们把await 去掉之后，发现不会阻塞页面导航
const { data: dataTwo, refresh: refreshTwo, pending: pendingTwo } = await useFetch(BASE_URL + '/homeInfo', {
  method: 'GET'
})
console.log(2)

onMounted(() => {
  console.log('onMounted')
})

// ?解决这个问题,使用lazy选项
// const { data: dataOne, refresh: refreshOne, pending: pendingOne } = await useFetch(BASE_URL + '/homeInfo', {
//   method: 'GET',
//   lazy: true // ?lazy选项默认为false，设置为true时，不会阻塞页面导航
// })
// console.log('first')

// onMounted(() => {
//   console.log('onMounted')
// })

// ?还可以使用useLazyFetch去简写
// const { data: dataTwo, refresh: refreshTwo, pending: pendingTwo } = await useLazyFetch(BASE_URL + '/homeInfo', {
//   method: 'GET'
// })
// console.log('two')

// onMounted(() => {
//   console.log('onMounted')
// })
</script>

<template>
  <div>
    <h2>lazy page</h2>
  </div>
</template>

<style scoped></style>
