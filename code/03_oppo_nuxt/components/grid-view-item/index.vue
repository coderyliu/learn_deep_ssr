<script setup lang="ts">
import type { ProductDetailType } from '~/store/home';

type ComponentPropType = {
  productInfo: ProductDetailType
}
defineProps<ComponentPropType>()

</script>

<template>
  <div class="grid-view-item">
    <img :src="productInfo.url" alt="" class="pic">
    <div class="title" :title="productInfo.title">{{ productInfo.title }}</div>
    <div class="activity-info">
      <span v-for="(item, idx) in productInfo.activityList" :key="idx" class="item">
        {{ item.activityInfo }}
      </span>
    </div>
    <div class="price-info">
      <span class="prefix">{{ productInfo.priceInfo.prefix }}</span>
      <span class="tag">{{ productInfo.priceInfo.currencyTag }}</span>
      <span class="price">{{ productInfo.priceInfo.buyPrice }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-view-item {
  box-sizing: border-box;
  @include normalFlex(column, space-around);
  align-items: center;
  height: $gridItemHeight;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: $bgColor;
  transition: all 0.2s linear;

  .pic {
    width: $imgWidth;
    height: $imgHeight;
  }

  .title {
    width: 100%;
    color: $textTitleColor;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    @include textEllipsis();
  }

  .activity-info {
    @include normalFlex(row, center);
    flex-wrap: wrap;
    align-items: center;

    .item {
      padding: 1px 2px;
      margin-right: 5px;
      margin-bottom: 2px;
      border: 1px solid $priceColor;
      font-size: 13px;
      color: $priceColor;
    }
  }

  .price-info {
    color: $priceColor;
    font-size: 13px;

    .price {
      font-size: $fontSize16;
    }
  }

  &:hover {
    @include hoverEffect();
  }
}
</style>
