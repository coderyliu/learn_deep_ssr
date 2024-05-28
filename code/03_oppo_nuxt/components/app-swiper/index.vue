<script setup lang="ts">
import { type BannerItemType } from '@/store/home'

type ComponentPropType = {
  bannerList: BannerItemType[]
}

defineProps<ComponentPropType>()

const currentIndex: Ref<number> = ref(0)
const handleBannerChange = (idx: number) => {
  currentIndex.value = idx
}
</script>

<template>
  <div class="app-swiper">
    <el-carousel height="480px" indicator-position="none" @change="handleBannerChange">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.picStr" alt="" class="pic">
      </el-carousel-item>
    </el-carousel>

    <!-- 指示器 -->
    <div class="indictor-wrapper">
      <ul class="indictor-wrap">
        <li v-for="(item, idx) in bannerList" :key="item.id" :class="[currentIndex === idx ? 'item active' : 'item']">
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-swiper {
  position: relative;
  padding-top: 36px;

  .pic {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .indictor-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;

    .indictor-wrap {
      display: inline-flex;
      align-items: center;

      .item {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
        background-color: #fff;

        &.active {
          width: 12px;
          height: 12px;
          background-color: #000;
        }
      }
    }
  }
}
</style>
