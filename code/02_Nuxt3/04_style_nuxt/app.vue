<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h2 class="global-style">嘻嘻嘻</h2>
    <h3 class="global-style2">哈哈哈哈</h3>
    <h3>hello world</h3>

    <NuxtPage />
  </div>
</template>

<style scoped lang="less">
/* 使用less预处理器 - 局部变量 */
.global-style2 {
  color: #999;
  font-weight: bold;
}
/* 手动使用全局样式变量 */
/* 注意：use和import都可以，只不过use的性能是高于import的, 目前只支持scss\sass, less还不可以 */
/* as vb: 给这个模块起一个命名空间 */
/* @use "~/assets/css/base.less" as vb; */
</style>

<style>
/* 全局样式编写方式二: 引入后直接使用 */
/* @import "~/assets/css/global.css"; */

/* 全局样式编写方式一: 最好由外部引入 */
/* .global-style {
  color: red;
} */

/* 除此之外，还可以直接在nuxt.config.ts中配置全局样式 */
</style>
