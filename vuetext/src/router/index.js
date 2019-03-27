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
import forget from '../page/forget/forget'
import food from '../page/food/food'
import benefit from '../page/benefit/benefit'
import commend from '../page/benefit/children/commend'
import coupon from '../page/benefit/children/coupon'
import exchange from '../page/benefit/children/exchange'
import hbDseription from '../page/benefit/children/hbDsecription'
import hbHistory from '../page/benefit/children/hbHistory'
import shop from '../page/shop/shop'
import shopDetail from  '../page/shop/children/shopDetail'
import foodDetail from '../page/shop/children/foodDetail'
import shopSafe from '../page/shop/children/children/shopSafe'
import good from '../page/shop/good'
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
    },
    {
      path:'/forget',
      name:'forget',
      component: forget
    },
    {
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path:'/benefit',
      name: 'benefit',
      component: benefit,
      children: [
        {
          path:'commend',
          name:'commend',
          component: commend
        },
        {
          path:'coupon',
          name:'coupon',
          component: coupon
        },
        {
          path:'exchange',
          name:'exchange',
          component: exchange
        },
        {
          path:'hbDseription',
          name:'hbDseription',
          component: hbDseription
        },
        {
          path:'hbHistory',
          name:'hbHistory',
          component: hbHistory
        }
      ]
    },
    {
      path: 'shop',
      name: 'shop',
      component: shop,
      children: [
        {
          path:'foodDetail',
          name:'foodDetail',
          component: foodDetail
        },
        {
          path:'shopDetail',
          name:'shopDetail',
          component: shopDetail
        }
      ]
    },
    {
      path:'shopSafe',
      name:'shopSafe',
      component: shopSafe
    },
    {
      path: 'good',
      name: 'good',
      component: good
    }
  ],

})
