<template>
  <div>
    <h2>嘿嘿嘿</h2>
    <h2>{{ count }}</h2>
    <button @click="count++">+1</button>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
