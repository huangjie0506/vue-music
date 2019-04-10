// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastClick'
import VueLazyLoad from 'vue-lazyload'
import './assets/css/reset.styl'
import 'swiper/dist/css/swiper.css'
Vue.use(VueLazyLoad, {
  error: require('./assets/img/logo.png'),
  loading: require('./assets/img/logo.png')
})
Vue.config.productionTip = false
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
