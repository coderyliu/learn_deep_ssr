<script setup lang="ts">
import { fetchHomeInfoData } from '@/services/home'

fetchHomeInfoData().then(({ data }) => {
  // const { data } = data.value
  console.log(data)
})
</script>

<template>
  <div>
    <h2>useFetch page</h2>
  </div>
</template>

<style scoped></style>
