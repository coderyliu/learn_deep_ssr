<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore, type CategoryItemType } from '~/store/home';

const homeStore = useHomeStore()
const { bannerList, categoryList } = storeToRefs(homeStore)
homeStore.fetchHomeData('oppo')

const handleItemClick = (item: CategoryItemType) => {
  return navigateTo({
    path: '/oppo-detail',
    query: {
      type: item.type
    }
  })
}
</script>

<template>
  <div class="wrapper home">
    <AppSwiper :banner-list="bannerList" />
    <TabCategory :category-list="categoryList" @clickItem="handleItemClick" />
    <template v-for="item in categoryList">
      <SectionCategory :category-info="item" :ke="item.id" />
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
