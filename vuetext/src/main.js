import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

