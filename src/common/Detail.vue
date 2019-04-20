<template>
  <div class="detail">
    <div class="detail-content">
      <div class="back" @click="back"><i class="iconfont"></i>返回</div>
      <h4 class="title">{{title}}</h4>
      <div class="button-content"><button class="button">播放全部</button></div>
      <div class="bg-img" ref="bgImg">
        <img :src="bgImg" alt="">
      </div>
    </div>
    <scroll class="song-list" ref="list">
      <ul>
        <li v-for="item in songList" :key="item.songid">
          <div>{{item.albumname}}</div>
          <p v-if="item.albumdesc">{{item.albumdesc}}</p>
        </li>
      </ul>
    </scroll>
    <v-loading v-show="!songList.length"></v-loading>
  </div>
</template>

<script>
import Scroll from '../common/Scroll'
import VLoading from '../common/Loading'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    bgImg: {
      type: String,
      default: ''
    },
    songList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    Scroll, VLoading
  },
  mounted() {
    this.$refs.list.$el.style.top = `${this.$refs.bgImg.clientHeight}px`
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background #222
  z-index 99
  .detail-content
    position relative
    top 0
    left 0
    height 0
    padding-bottom 100%
    .back
      position absolute
      top 0px
      left 6px
      color #ffffff
      font-size 14px
      padding 10px
    .title
      position absolute
      top 0
      left 10%
      width 80%
      color #ffffff
      font-size 16px
      text-align center
      line-height 44px
    .bg-img
      width 100%
      img
        width 100%
    .button-content
      position absolute
      bottom 20px
      left 10%
      width 80%
      text-align center
      button
        color #ffffff
        font-size 14px
        padding 6px 28px
        background #333
        border: 1px solid #dddddd
        border-radius 16px
  .song-list
    position absolute
    top 44px
    bottom 0
    width 100%
    background #333
    ul
      padding 20px
      li
        line-height 32px
        padding 4px 20px
        margin-bottom 6px
        div
          font-size 16px
          color #ffffff
        p
          font-size 14px
          color #999
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
        &:last-child
          margin-bottom 0
.slide-enter-active,.slide-leave-active
  transition all 0.3s
.slide-enter,.slide-leave-to
  transform translate3d(100%, 0, 0)
</style>
