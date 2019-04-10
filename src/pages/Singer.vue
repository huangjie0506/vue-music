<template>
  <div class="singer">
    <scroll class="singer-list">
      <div class="singer-wrapper">
        <div class="list-group" v-for="item in singerList" :key="item.title">
          <div class="list-title">{{item.title}}</div>
          <div class="list-singer">
            <div class="singer-item" @click="selectItem(singerItem)" v-for="singerItem in item.singers"
              :key="singerItem.id">
              <div class="singer-img">
                <img v-lazy="singerItem.avatar" alt="">
              </div>
              <div class="singer-name">{{singerItem.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="shortcut">
        <ul>
          <li v-for="item in singerList" :key="item.title">{{item.title}}</li>
        </ul>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from '../common/scroll'
import {getSingerList} from '../api/singer'
import Signer from '../assets/js/singer'
import { mapMutations } from 'vuex'
const HOT_NAME = '热门'
const HOT_NAME_LEN = 10
export default {
  data () {
    return {
      singerList: []
    }
  },
  mounted () {
    getSingerList().then((res) => {
      this.singerList = this._normalize(res.data.list)
    })
  },
  methods: {
    selectItem(item) {
      this.$router.push({
        path: `/singer/${item.id}`
      })
      this.setSinger(item)
    },
    _normalize (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          singers: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_NAME_LEN) {
          map.hot.singers.push(new Signer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            singers: []
          }
        }
        map[key].singers.push(new Signer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })
      // 对map对象key值按字母顺序进行排序
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort(function (a, b) {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    Scroll
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/index.styl';
.singer-list
  position absolute
  top 88px
  bottom 0
  width 100%
  overflow hidden
  .singer-wrapper
    .list-group
      padding-bottom 20px
      .list-title
        height 30px
        color $nameColor
        font-size 12px
        line-height 30px
        padding-left 20px
        background #333
      .list-singer
        padding 20px 0 0 30px
        .singer-item
          display flex
          align-items center
          padding 0 20px 20px 0
          .singer-img
            width 40px
            height 40px
            border-radius 50%
            overflow hidden
            img
              width 100%
          .singer-name
            flex 1
            color $nameColor
            font-size 14px
            margin-left 20px
          &:last-child
            padding-bottom 0
  .shortcut
    position absolute
    top 60px
    right 0
    padding 20px 0
    background #333
    border-radius 12px
    ul
      display flex
      flex-direction column
      justify-content center
      li
        width 24px
        height 24px
        color #fff
        text-align center
        line-height 20px
        white-space nowrap
        overflow hidden
</style>
