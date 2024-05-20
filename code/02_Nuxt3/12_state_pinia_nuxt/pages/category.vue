<script setup lang="ts">
const counter = useCounter()

const increment = () => {
  counter.value++
}
</script>

<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped></style>
