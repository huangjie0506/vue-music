<template>
  <div class='tab-nav'>
    <router-link to="/recommend" tag="div">推荐</router-link>
    <router-link to="/singer" tag="div">歌手</router-link>
    <router-link to="/rank" tag="div">排行</router-link>
    <router-link to="/search" tag="div">搜索</router-link>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/index.styl';
.tab-nav
  display flex
  height 44px
  line-height 44px
  font-size 14px
  div
    flex 1
    color $nameColor
    text-align center
    cursor pointer
    &.router-link-active
      color $titleColor
</style>
