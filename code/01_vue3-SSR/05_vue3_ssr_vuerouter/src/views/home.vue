<template>
  <div>
    <h2>Home Page</h2>
    <h2>{{ count }}</h2>
    <button @click="count++">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
