import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import home from '../page/home/home'
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
    }
  ]
})
