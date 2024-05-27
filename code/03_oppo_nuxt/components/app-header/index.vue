<script setup lang="ts"></script>

<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="left">
        <NuxtLink to="" class="link">
          <span> OPPO官网 </span>
        </NuxtLink>
        <NuxtLink to="" class="link">
          <span>一加官网</span>
        </NuxtLink>
      </div>
      <div class="right">
        <NuxtLink to="" class="link">
          <span>下载OPPO商城App</span>
          <div class="download">
            <img src="@/assets/images/ecode.png" alt="">
            <span class="name">扫码下载OPPO商城App</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/login" class="link">
          <i class="iconfont icon-user"></i>
          <span>登录</span>
        </NuxtLink>
        <NuxtLink to="/registry" class="link">
          <span>注册</span>
        </NuxtLink>
        <NuxtLink to="/cart" class="link">
          <i class="iconfont icon-shoppingcart"></i>
          <span>购物车（0）</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  height: $appHeaderHeight;

  color: #fff;
  background-color: #000;

  .content{
    @include normalFlex();
    height: 100%;

    .left{
      @include normalFlex();
      height: 100%;
      align-items: center;

      .link{
        margin-right: 24px;
        color: #fff;
        font-size: 12px;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .right{
      display: flex;
      align-items: center;

      .link{
        padding: 0 14px;
        border-right: 1px solid #fff;

        color: #fff;
        font-size: 12px;
        text-decoration: none;
        cursor: pointer;

        &:last-of-type{
          border-right: none;
        }
        &:first-of-type{
          position: relative;
        }
        &:first-of-type:hover > .download{
          display: block;
        }

        .download{
          display: none;
          position: absolute;
          top: 25px;
          left: -10px;
          z-index: 10000;
          padding: 8px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

          img {
            width: 140px;
            height: 140px;
          }

          .name{
            color: #333;
            margin-top: 3px;
          }
        }

        i{
          margin-right: 6px;
        }
        .icon-user {
          font-size: 12px;
          opacity: 1;
        }
        .icon-shoppingcart {
          font-size: 15px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
