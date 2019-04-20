<template>
  <scroll class="rank" ref="rank">
    <ul class="rank-wrapper">
      <router-link to="/rank/${item.id}" tag="li" class="rank-item"
      v-for="item in rankData" :key="item.id" >
        <div class="item-img">
          <img v-lazy="item.picUrl" alt="">
        </div>
        <div class="item-list">
          <div class="music-item" v-for="(listItem, index) in item.songList" :key="index">
            {{index+1}}、{{listItem.songname}}---{{listItem.singername}}
          </div>
        </div>
      </router-link>
    </ul>
    <loading v-show="!rankData.length"></loading>
  </scroll>
</template>

<script>
import Scroll from '../common/Scroll'
import Loading from '../common/Loading'
import {ERR_OK} from '../api/config'
import {getTopList} from '../api/rank'
export default {
  data () {
    return {
      rankData: []
    }
  },
  mounted() {
    getTopList().then((res) => {
      if (res.code === ERR_OK) {
        this.rankData = res.data.topList
      }
    })
  },
  components: {
    Loading, Scroll
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/index.styl'
.rank
  position absolute
  top 88px
  bottom 0
  right 0
  left 0
  overflow hidden
  .rank-wrapper
    padding 20px
    .rank-item
      display flex
      margin-bottom 20px
      .item-img
        flex: 0 0 100px;
        width 100px
        height 100px
        overflow hidden
        img
          width 100%
      .item-list
        flex 1
        padding 0 20px
        line-height 28px
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow hidden
        background #333
        .music-item
          font-size 12px
          color $descColor
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
</style>
