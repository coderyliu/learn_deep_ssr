<script setup lang="ts">
// 组件的生命周期
// ?直接调用vue中的监听生命周期的函数即可：onMounted\onUnmounted等
// ?需要注意的是，只有beforeCreate\created会在服务端调用、所有都会在客户端触发
// ?另外要注意直接在setup内调用会产生副作用的API，例如：定时器、事件监听、事件中心、IO操作等,因为这些会在服务端触发、但是无法在服务端调用beforeUnMount清楚副作用
onBeforeMount(() => console.log('before mount'))
onMounted(() => console.log('mounted'))
onBeforeUnmount(() => console.log('before unmount'))
onUnmounted(() => console.log('unmounted'))
</script>

<template>
  <div>
    <h2>哈哈哈</h2>
  </div>
</template>

<style scoped></style>
