<script setup lang="ts">
// const { data } = await useLazyFetch('/api/login', { method: 'POST' })
const { data: dataTwo } = await useLazyFetch('/api/home/2', { method: 'POST', body: { name: 'coder' } })
console.log(dataTwo.value)
</script>

<template>
  <div>
    <h2>login page</h2>
  </div>
</template>

<style scoped></style>
