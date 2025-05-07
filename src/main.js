import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VideoPlayer from 'vue-video-player'
import axios from 'axios'
import VueImg from 'v-img'
import Vuex from 'vuex'
import { store } from './store/store'
import animated from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('babel-polyfill')

// axios全局配置
axios.defaults.baseURL = 'https://www.codingswifter.com/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Vuex)
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueImg)
Vue.use(animated)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
