<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~/store/home';

const homeStore = useHomeStore()
const { bannerList, categoryList } = storeToRefs(homeStore)
homeStore.fetchHomeData('intelligent')
</script>

<template>
  <div class="wrapper">
    <AppSwiper :banner-list="bannerList" />
    <TabCategory :category-list="categoryList" />
    <template v-for="item in categoryList">
      <SectionCategory :category-info="item" :ke="item.id" />
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
