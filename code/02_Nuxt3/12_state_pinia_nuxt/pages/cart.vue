<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/home'

const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)

</script>

<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="homeStore.increment">+1</button>
  </div>
</template>

<style scoped></style>
