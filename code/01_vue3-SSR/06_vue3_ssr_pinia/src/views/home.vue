<template>
  <div>
    <h2>Home Page</h2>
    <h2>{{ count }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../store/index'
const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const increment = () => {
  counterStore.increment()
}
</script>
