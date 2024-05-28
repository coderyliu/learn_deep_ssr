<script setup lang="ts">
const searchContent = ref<string>('')
</script>

<template>
  <div class="search">
    <el-input
      v-model="searchContent"
      maxlength="50"
      placeholder="Reno9 系列"
      type="text"
    >
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
  </div>
</template>

<style scoped lang="scss">
.el-input {
  width: 160px;
  border-radius: 36px;
  background-color: #f6f6f6;
}
</style>
