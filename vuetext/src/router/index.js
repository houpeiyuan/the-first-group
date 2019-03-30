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
import balance from '../page/balance/balance'
import detaile from  '../page/points/children/detaile'
import points from '../page/points/points'
import detail from '../page/balance/children/detail'
import vipcard from '../page/vipcard/vipcard'
import service from  '../page/service/service'
import download from '../page/download/download'
import questionDetail from '../page/service/children/questionDtail'
import n1 from '../page/service/n1'
import n2 from '../page/service/n2'
import n3 from '../page/service/n3'
import n4 from '../page/service/n4'
import n5 from '../page/service/n5'
import n6 from '../page/service/n6'
import n7 from '../page/service/n7'
import n8 from '../page/service/n8'
import n9 from '../page/service/n9'
import n10 from '../page/service/n10'
import n11 from '../page/service/n11'
import nn1 from '../page/service/nn1'
import nn2 from '../page/service/nn2'
import nn3 from '../page/service/nn3'
import nn4 from '../page/service/nn4'
import nn5 from '../page/service/nn5'
import nn6 from '../page/service/nn6'
import nn7 from '../page/service/nn7'
import nn8 from '../page/service/nn8'
import nn9 from '../page/service/nn9'
import nn10 from '../page/service/nn10'
import retingStar from '../components/common/ratingStar'
import useCart from '../page/vipcard/children/useCart'
import vipDescription from '../page/vipcard/children/vipDescription'
import invoiceRecord from '../page/vipcard/children/invoiceRecord'
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
        }
      ]
    },
    //历史红包
    {
      path:'/hbHistory',
      name:'hbHistory',
      component: hbHistory
    },
    //兑换红包
    {
      path:'/exchange',
      name:'exchange',
      component: exchange
    },
    //推荐有奖
    {
      path:'/hbDseription',
      name:'hbDseription',
      component: hbDseription
    },
    //代金券
    {
      path:'coupon',
      name:'coupon',
      component: coupon
    },
    {
      path: '/shop',
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
      // 余额
      path:'/balance',
      name:'balance',
      component:balance
    },
    {
      //余额说明
      path:'/detail',
      name:'detail',
      component:detail
    },
    {
      //积分页
      path:'/points',
      name:'points',
      component:points
    },
    {
      //积分说明
     path:'/detaile',
      name:'detaile',
      component:detaile
    },
    {
      // 饿了么会员卡
      path:'/vipcard',
      name:'vipcard',
      component:vipcard
    },
    {
      // 服务中心
      path:'/service',
      name:'service',
      component:service
    },
    {
      path:'/download',
      name:'download',
      component:download
    },
    {
      // 问题
      path:'/questionDetail',
      name:'questionDetail',
      component:questionDetail
    },
    {
      path:'/n1',
      name:'n1',
      component:n1
    },
    {
      path:'/n2',
      name:'n2',
      component:n2
    },
    {
      path:'/n3',
      name:'n3',
      component:n3
    },
    {
      path:'/n4',
      name:'n4',
      component:n4
    },
    {
      path:'/n5',
      name:'n5',
      component:n5
    },
    {
      path:'/n6',
      name:'n6',
      component:n6
    },
    {
      path:'/n7',
      name:'n7',
      component:n7
    },
    {
      path:'/n8',
      name:'n8',
      component:n8
    },
    {
      path:'/n9',
      name:'n9',
      component:n9
    },
    {
      path:'/n10',
      name:'n10',
      component:n10
    },
    {
      path:'/n11',
      name:'n11',
      component:n11
    },
    {
      path:'/nn1',
      name:'nn1',
      component:nn1
    },
    {
      path:'/nn2',
      name:'nn2',
      component:nn2
    },
    {
      path:'/nn3',
      name:'nn3',
      component:nn3
    },
    {
      path:'/nn4',
      name:'nn4',
      component:nn4
    },
    {
      path:'/nn5',
      name:'nn5',
      component:nn5
    },
    {
      path:'/nn6',
      name:'nn6',
      component:nn6
    },
    {
      path:'/nn7',
      name:'nn7',
      component:nn7
    },
    {
      path:'/nn8',
      name:'nn8',
      component:nn8
    },
    {
     path:'/nn9',
       name:'nn9',
      component:nn9
    },
    {
      path:'/nn10',
      name:'nn10',
      component:nn10
    },
    {
      //星星
      path:'/retingStar',
      name:'retingStar',
      component:retingStar
    },
    {
      //会员卡购买
      path:'/useCart',
      name:'useCart',
      component:useCart
    },
    {
      //购买记录
      path:'/invoiceRecord',
      name:'invoiceRecord',
      component:invoiceRecord
    },
    {
      // 会员说明
      path:'/vipDescription',
      name:'vipDescription',
      component:vipDescription
    }
  ],

})
