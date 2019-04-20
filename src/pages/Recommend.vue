<template>
  <scroll class="recommend">
    <div class="recommend-wrapper">
      <m-slider :imgData="datalist"></m-slider>
      <div class="recommend-title">热门歌单推荐</div>
      <ul class="recommend-list">
        <li class="item" v-for="item in discList" :key="item.dissid">
          <div class="item-img">
            <img v-lazy="item.imgurl" alt="">
          </div>
          <div class="item-info">
            <h4 v-if="item.creator">{{item.creator.name}}</h4>
            <p>{{item.dissname}}</p>
          </div>
        </li>
      </ul>
    </div>
    <loading v-show="!discList.length"></loading>
  </scroll>
</template>

<script>
import MSlider from '../common/Swiper'
import Scroll from '../common/Scroll'
import Loading from '../common/Loading'
import { getRecommend, getDiscList } from '../api/recommend'
import { ERR_OK } from '../api/config'
export default {
  data () {
    return {
      datalist: [],
      discList: []
    }
  },
  components: {
    MSlider, Scroll, Loading
  },
  mounted() {
    getRecommend().then((res) => {
      if (res.code === ERR_OK) {
        this.datalist = res.data.slider
      }
    }).catch((err) => {
      console.log(err)
    })
    getDiscList().then((res) => {
      if (res.code === ERR_OK) {
        this.discList = res.data.list
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/index.styl'
.recommend
  position absolute
  top 88px
  bottom 0
  left 0
  right 0
  overflow hidden
  .recommend-title
    height 65px
    color $titleColor
    font-size 14px
    text-align center
    line-height 65px
  .recommend-list
    .item
      display flex
      align-items center
      padding 0 20px 20px
      .item-img
        width 60px
        margin-right 20px
        img
          width 100%
      .item-info
        flex 1
        font-size 14px
        overflow hidden
        line-height 20px
        h4
          color #fff
          margin-bottom 10px
        p
          color $descColor
</style>
