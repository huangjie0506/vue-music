<template>
  <div class="header">
    <div class="logo"></div>
    <h4 class="title">Chicken Music</h4>
    <div class="person-info">
       <i class="icon"></i>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/index.styl';
.header
  position relative
  width 100%
  height 44px
  font-size 0
  line-height 44px
  text-align center
  .logo
    display inline-block
    width 30px
    height 32px
    margin-top 6px
    margin-right 9px
    background-image url('~@/assets/img/logo.png')
    background-size: 30px 32px;
  .title
    display inline-block
    vertical-align top
    color $titleColor
    font-size 18px
  .person-info
    position absolute
    top 2px
    right 2px
</style>
