<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in imgData" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="">
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'carrousel',
  props: {
    imgData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted() {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
  .swiper-container
    width 100%
    height 150px
    .swiper-slide
      overflow hidden
      img
        width 100%
</style>