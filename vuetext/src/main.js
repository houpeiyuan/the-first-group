import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'swiper/dist/css/swiper.css'
import './assets/reset.css'
Vue.config.productionTip = false
import mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css'
Vue.use(animated)
Vue.use(mint)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

