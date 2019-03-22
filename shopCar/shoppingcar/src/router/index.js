import Vue from 'vue'
import Router from 'vue-router'
import Vueaxios from 'vue-axios'
import axios from 'axios'
import product from '../components/Myproduct'
import cart from '../components/Mycart'
Vue.use(Router)
Vue.use(Vueaxios, axios)
export default new Router({
  routes: [
    {
      path:'/',redirect:'/product'
    },
    {
      path:'/product',name:'product',component:product
    },
    {
      path:'/cart',name:'cart',component: cart
    }
  ]
})
