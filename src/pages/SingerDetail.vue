<template>
  <transition name="slide">
    <div class="singer-detail">
      <div class="detail-content">
        <div class="back"></div>
        <h4>{{singer.name}}</h4>
        <button>播放全部</button>
        <div class="singer-img">
          <img :src="singer.avatar" alt="">
        </div>
      </div>
      <div class="song-list">
        <ul>
          <li>播放全部</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import { getSingerDetail } from '../api/singer'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  mounted() {
    getSingerDetail(this.singer.id).then((res) => {
      data_callback(res)
    })
  },
  methods: {   
    data_callback(data){
      console.log(data)
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
.slide-enter-active,.slide-leave-active
  transition all 0.3s
.slide-enter,.slide-leave-to
  transform translate3d(100%, 0, 0)
</style>
