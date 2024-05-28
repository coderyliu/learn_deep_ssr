<script setup lang="ts">
type ComponentPropType = {
  title: string
}

defineProps<ComponentPropType>()
</script>

<template>
  <div class="section-title">{{ title }}</div>
</template>

<style scoped lang="scss">
.section-title {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 26px;
  font-weight: 500;
}
</style>
