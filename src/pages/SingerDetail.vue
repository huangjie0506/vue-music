<template>
  <transition name="slide">
    <detail :songList="songList" :title="title" :bgImg="bgImg"></detail>
  </transition>
</template>

<script>
import Detail from '../common/Detail'
import {mapGetters} from 'vuex'
import {ERR_OK} from '../api/config'
import { getSingerDetail } from '../api/singer'
export default {
  data () {
    return {
      songList: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ]),
    title() {
      return this.singer.name
    },
    bgImg() {
      return this.singer.avatar
    }
  },
  mounted() {
    getSingerDetail(this.singer.id).then((res) => {
      if (res.code === ERR_OK) {
        this.songList = this.data_callback(res.data.list)
      }
    })
  },
  components: {
    Detail
  },
  methods: {
    data_callback(list) {
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(musicData)
        }
      })
      return ret
    }
  }
}
</script>
<style lang="stylus" scoped>
.singer-detail
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
    overflow hidden
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
