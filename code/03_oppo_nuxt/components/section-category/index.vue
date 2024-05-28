<script setup lang="ts">
import type { CategoryItemType } from '~/store/home';

type ComponentPropType = {
  categoryInfo: CategoryItemType
}

defineProps<ComponentPropType>()

</script>

<template>
  <div class="section-category">
    <SectionTitle :title="categoryInfo.title" />
    <GridView :product-detail="categoryInfo.productDetailss" :category-url="categoryInfo.url" />
  </div>
</template>

<style scoped></style>
