import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/Recommend'
import Singer from '@/pages/Singer'
import Rank from '@/pages/Rank'
import Search from '@/pages/Search'
import SingerDetail from '@/pages/singerDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }, {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [
        {
          path: ':id',
          name: 'singerDetail',
          component: SingerDetail
        }
      ]
    }, {
      path: '/rank',
      name: 'rank',
      component: Rank
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
