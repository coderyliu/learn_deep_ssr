<script setup lang="ts">
// import axios from 'axios'
const BASE_URL = 'http://codercba.com:9060/juanpi/api'
// !需要注意的：ssr服务端渲染
// 我们可以理解为：当我们刷新浏览器时，是会向服务器发起请求，这个时候会通过http://localhost:3000的路径请求服务器，服务器把渲染好的html字符串返回给客户端
// 请求的过程中会触发服务端和客户端的生命周期函数：vue:setup app:created app:error app:mounted等
// 这样有利于SEO、首屏的渲染等
// !但是，当我们在浏览器中，通过NuxtLink或者navigateTo或者router的方式去路由导航的时候，是客户端渲染，而不是服务端渲染,执行的js代码去渲染页面

// !发情网络请求一样，只会在服务端生命周期触发时去执行逻辑，在客户端切换路由时，不会触发服务端，而是会触发客户端

// ?1. nuxt中发起网络请求方式一：$fetch(url, options) => promise
// 直接使用$fetch在setup中使用会有缺陷：在server端和client端都会执行，也就是会发起两次网络请求
// 原因： vue:setup生命周期在client和server都会执行
// $fetch(BASE_URL + '/homeInfo', {
//   method: 'GET'
// }).then(res => {
//   console.log(res)
// })
// const fetchFn = () => {
//   $fetch(BASE_URL + '/homeInfo', {
//     method: 'GET'
//   }).then(res => {
//     console.log(res)
//   })
// }
// *如果我们通过组件的生命周期去调用，就会只在客户端发起网络请求
// onMounted(() => {
//   fetchFn()
// })

// ?2. nuxt中发起网络请求方式二：useAsyncData(key, () => $fetch(url, options))
// !key必须是唯一的，否则会出现返回的数据重复
// 可以利用useAsyncData结合$fetch或者axios去发起网络请求，这样能避免在setup中发起网络请求的时候，客户端不会发起请求
// 返回的是一个对象：包括 { data, pending, error, refresh } 等 并且是ref响应式对象
// const { data, refresh, pending } = await useAsyncData('homeInfo', () => $fetch(BASE_URL + '/homeInfo', {
//   method: 'GET'
// }))
// console.log(data)

// 利用axios会报错，建议结合$fetch
// const ret = await useAsyncData('homeInfoTwo', () => axios.get(BASE_URL + '/homeInfo'))
// console.log(ret)

// ?3. nuxt中发起网络请求方式三：useFetch(url, options)
// useFetch是useAsyncData的简写 省略key
// const { data: dataTwo, refresh: refreshTwo, pending: pendingTwo } = await useFetch(BASE_URL + '/homeInfo', {
//   method: 'GET'
// })
// console.log(dataTwo.value)

// useFetch的options
const { data: dataThree, refresh: refreshThree, pending: pendingThree } = await useFetch('/homeInfo', {
  method: 'GET',
  baseURL: BASE_URL,
  // get请求传递参数：query或者params
  query: {
    name: 'coder',
    age: 18,
    height: 1.88
  },
  // post请求传递参数：body
  // 请求头: headers
  // headers: {
  //   token: 'xxx'
  // }
})

// post请求
const { data: dataFour, refresh: refreshFour, pending: pendingFour } = await useFetch('/goods', {
  method: 'POST',
  baseURL: BASE_URL,
  body: {
    count: 6
  },
  // 拦截器
  onRequest({ options }) {
    console.log(options)
    // options.headers.token = 'xxx'
  },
  onRequestError({ options, error }) {
    // console.log(options)
    // console.log(error)
  },
  onResponse({ options, response }) {
    // console.log(options)
    console.log(response)
  },
  onResponseError({ options, response }) {
    // console.log(options)
    // console.log(response)
  }
})
</script>

<template>
  <div>
    <h2>哈哈哈</h2>
  </div>
</template>

<style scoped></style>
