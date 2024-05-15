<template>
  <div>
    <!-- 样式 -->
    <h2 class="global-style">index page</h2>
    <h3 class="primary-color">你好啊，李银河</h3>
    <h3 class="global-style2">哼</h3>

    <!-- public资源的访问：public目录下的资源不会被打包,直接通过/访问就到了public目录下的资源 -->
    <img src="/user.png" alt="" />
    <div class="bg-style"></div>

    <!-- assets资源的访问：assets目录下的资源会被打包,直接通过~或者@等访问assets目录即可 -->
    <img src="~/assets/images/bym.png" alt="">
    <div class="bg-style2"></div>

    <!-- 字体图标的使用 -->
    <i class="iconfont icon-cart"></i>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.bg-style{
  width: 200px;
  height: 200px;
  /* 访问public目录下的资源 */
  background-image: url('/user.png');
}
.bg-style2{
  width: 200px;
  height: 200px;
  /* 访问assets目录下的资源 */
  background-image: url('~/assets/images/avatar.png');
}
</style>
