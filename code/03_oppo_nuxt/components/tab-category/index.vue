<script setup lang="ts">
import type { CategoryItemType } from '~/store/home';

type ComponentPropType = {
  categoryList: CategoryItemType[]
}
defineProps<ComponentPropType>()
const emits = defineEmits(['clickItem'])

const handleItemClick = (item: CategoryItemType) => {
  emits('clickItem', item)
}
</script>

<template>
  <div class="tab-category">
    <div v-for="item in categoryList" :key="item.id" class="category-item" @click="handleItemClick(item)">
      <img :src="item.picStr" alt="" class="pic">
      <span class="title">{{ item.title }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab-category {
  @include normalFlex();
  width: 100%;
  margin-top: 40px;
  align-items: center;
  justify-content: space-between;

  .category-item {
    @include normalFlex(column);
    align-items: center;
    cursor: pointer;

    .pic {
      width: 80px;
      height: 80px;
    }
    .title {
      margin-top: 16px;
      font-size: 16px;
    }
  }
}
</style>
