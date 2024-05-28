<script setup lang="ts">
import { type NavBarItemType } from '@/store/home'

type ComponentPropType = {
  navBarList: NavBarItemType[]
}

defineProps<ComponentPropType>()
const currentIndex: Ref<number> = ref(0)

const getPagePath = computed(() => {
  return (item: NavBarItemType) => {
    let path = '/'
    if (item.type !== 'oppo') {
      path += item.type
    }
    return path
  }
})

const handleItemClick = (idx: number) => {
  currentIndex.value = idx
}
</script>

<template>
  <div class="nav-bar">
    <div class="wrapper wrap">
      <div class="left">
        <img src="~/assets/images/logo.png" alt="">
        <h1 class="title">OPPO手机商城</h1>
      </div>
      <ul class="center">
        <li v-for="(item, idx) in navBarList" :key="item.id" :class="[currentIndex === idx ? 'active' : '']"
          @click="handleItemClick(idx)">
          <NuxtLink :to="getPagePath(item)" class="link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <NavSearch class="right" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  @include elementSticky(36px);
  z-index: 99;
  height: $navBarHeight;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background-color: #fff;

  .wrap {
    @include normalFlex();
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    .left {
      width: $logoWidth;
      height: $logoHeight;

      img {
        height: 100%;
      }

      .title {
        text-indent: -9999px;
      }
    }

    .center {
      @include normalFlex();
      width: 530px;
      margin-left: 60px;

      .link {
        font-size: 14px;
        color: #333;
        opacity: 0.55;
      }

      .link:hover {
        opacity: 1;
      }

      .active .link {
        opacity: 1;
      }
    }

    .right {
      margin-left: 150px;
    }
  }
}
</style>
