<template>
  <div class="no-more">
    <span class="line"></span>
    <span class="name">没有更多了</span>
    <span class="line"></span>
  </div>
</template>

<style scoped lang="scss">
.no-more{
  @include normalFlex();
  align-items: center;
  padding: 32px 0;

  .line {
    flex: 1;
    height: 1px;
    background-color: rgba(0, 0, 0, .1);
  }

  .name {
    margin: 0 24px;
    font-size: 18px;
    color: #343a40;
    opacity: 0.6;
  }
}
</style>
