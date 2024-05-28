<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~/store/home';

const homeStore = useHomeStore()
const { navbarList } = storeToRefs(homeStore)
homeStore.fetchHomeData()
</script>

<template>
  <div class="layout">
    <AppHeader />
    <NavBar :nav-bar-list="navbarList" />
    <slot></slot>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  background-color: $bgGrayColor;
}
</style>
