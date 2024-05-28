<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDetailStore } from '~/store/detail';
import { type ProductDetailQueryType } from '@/services/detail'

const { query } = useRoute()
const { type } = query
const detailStore = useDetailStore()
const { detailInfo } = storeToRefs(detailStore)
detailStore.fetchDetailInfo(type as ProductDetailQueryType)

const activeName = ref<number>(0)
onMounted(() => {
  activeName.value = detailInfo.value[0]?.id
})
</script>

<template>
  <div class="oppo-detail">
    <div class="wrapper wrap">
      <el-tabs v-model="activeName" class="oppo-tabs">
        <template v-for="item in detailInfo" :key="item.id">
          <el-tab-pane :label="item.title" :name="item.id">
            <GridView :product-detail="item.productDetailss" />
          </el-tab-pane>
        </template>
      </el-tabs>

      <NoMore />
    </div>
  </div>
</template>

<style scoped lang="scss">
.oppo-detail {
  padding-top: 6px;
  padding-bottom: 60px;
  background-color: $bgGrayColor;

  .wrap {
    .oppo-tabs {

      /* 背景 */
      :deep(.el-tabs__header) {
        background-color: white;
      }

      :deep(.el-tabs__nav-wrap) {
        height: 48px;
        padding: 0 52px;

        /* 底部线 */
        &::after {
          background-color: white;
        }

        /* 按钮 */
        .el-tabs__nav-prev,
        .el-tabs__nav-next {
          width: 48px;

          .el-icon,
          svg {
            width: 25px;
            height: 25px;
          }

          svg {
            position: relative;
            top: 10px;
          }
        }

        .el-tabs__active-bar {
          background-color: $priceColor;
        }
      }

      :deep(.el-tabs__item) {
        position: relative;
        height: 48px;
        opacity: 0.6;
        font-weight: 400;
        padding-top: 5px;

        &:hover,
        &.is-active {
          color: $priceColor;
        }
      }
    }
  }
}
</style>
