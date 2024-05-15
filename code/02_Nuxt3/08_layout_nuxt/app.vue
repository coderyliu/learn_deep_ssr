<script setup lang="ts">
// nuxt支持把一些公共组件抽离到layouts中，通过NuxtLayout内置组件来使用
// 默认是default.vue;我们也可以自定义layouts布局组件
// 也支持页面使用自定义的layout组件，在页面内部使用definePageMeta({ layout: 'layoutName' })来使用

// 除此之外呢，我们也可以通过自定义公共组件，放到app.vue中来使用
</script>

<template>
  <div>
    <!-- 在内置组件中生命name属性使用自定义layout，则将全局生效，即使在页面内部使用definePageMeta也会覆盖 -->
    <NuxtLayout name="custom-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
