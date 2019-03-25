import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import home from '../page/home/home'
import city from '../page/city/city'
import login from '../page/login/login'
import msite from '../page/msite/msite'
import search from '../page/search/search'
import order from '../page/order/order'
import orderDetail from '../page/order/children/orderDetail'
import profile from '../page/profile/profile'
Vue.use(Router)
Vue.use(Vueaxios, axios)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      //城市列表页
      path:'/city',
      name:'city',
      component:city
    },
    {
      // 登录页
      path:'/login',
      name:'login',
      component:login
    },
    {
      //商铺列表页
      path:'/msite',
      name:'msite',
      component:msite
    },
    {
      //搜索页
      path:'/search',
      name:'search',
      component:search
    },
    {
      //订单列表页
      path:'/order',
      name:'order',
      component:order,
      children:[
        {
          //  订单详情页
          path:'children/orderDetail',
          name:'orderDetail',
          component:orderDetail
        }
      ]
    },
    {
      // 个人中心
      path:'/profile',
      name:'profile',
      component:profile
    }

  ]
})
