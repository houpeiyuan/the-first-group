import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'swiper/dist/css/swiper.css'
import './assets/reset.css'
Vue.config.productionTip = false
import mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(mint)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

