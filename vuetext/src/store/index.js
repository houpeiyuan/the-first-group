import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const moudleA = {
  state: {
  },
  getters: {},
  mutations: {},
  actions: {}
}
const moudleB = {
  state: {
    city:'city',
    change1: true
  },
  getters: {},
  mutations: {
    changeCity(state,pl) {
      state.city=pl.name;
      state.change1=pl.bul
      console.log(state.change1)
    }
  },
  actions: {}
}
const moudleC = {
  state: {
    navleft: 'ele.me'
  },
  getters: {
  },
  mutations: {
  },
  actions: {}
}
const store = new vuex.Store({
  modules: {
    wang : moudleA,
    zhang: moudleB,
    hou: moudleC,
    isShow: true,
    isShow1: true
  },
  mutations: {
    //自己写函数改变自己需要改变的变量,state固定写法,play代表需要改变的变量值
    changeNav(state, play){
      state.isShow = play
    }
  },
  actions: {
    //自己写函数,调用自己写的mutations里面的函数,掉哪个函数,写哪个函数名,第二个参数表示要传的数据
    changeNav1(content, play1){
      console.log(play1)
      content.commit('changeNav', play1)
    }
  }
})
export default store
