<script setup lang="ts">
import { type ProductDetailType } from '~/store/home';

type ComponentPropType = {
  productDetail: ProductDetailType[]
  categoryUrl?: string
}
defineProps<ComponentPropType>()

</script>

<template>
  <div class="grid-view">
    <div class="category-logo view-item" v-if="categoryUrl">
      <img :src="categoryUrl" alt="">
    </div>
    <template v-for="item in productDetail" :key="item.id">
      <div class="view-item">
        <GridViewItem :product-info="item" />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.grid-view {
  @include normalFlex(row, flex-start);
  align-items: center;
  flex-wrap: wrap;
  width: $contentWidth + 18px;
  transition: all 0.2s linear;

  .view-item {
    box-sizing: border-box;
    width: 20%;
    height: $gridItemHeight;
    padding-right: 18px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .category-logo {
    width: 40%;

    img {
      width: 100%;
      height: 100%;

      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
