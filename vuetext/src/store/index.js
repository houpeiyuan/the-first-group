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
    city:'郑州',
    change1: false,
    id:'',
    count1: 4,
    ids: 0,
    sizer: [],
    kind: 0,
    bull: false,
    navleft: 'ele.me',
    iscut: false,
    retreat: false,
    isfoot:true,
    ishead:true,
    userId:''
  },
  getters: {},
  mutations: {
    //是否显示头部
    ishead(state,ishead) {
      state.ishead = ishead
    },
    //是否显示尾部
    isfoot(state, isfoot){
      state.isfoot = isfoot
    },
    //是否显示个人中心图标
    ispron(state, bull){
      state.bull = bull
    },
    isretreat(state, retreat){
      state.retreat = retreat
    },
    sizerFood(state, sizer){
      state.sizer = [...sizer]
    },
    changeFood(state,payload){
      state.city = payload
    },
    //head中间的部分
    changeCity(state,pl) {
      state.city=pl.name;
      state.change1=pl.bul
    },
    changeId(state,id){
      state.id=id
    },
    getskip(state,ids){
      state.ids = ids
    },
    getcount(state,index){
     state.count1 =  index
    },
    getFoodKind(state,index){
      state.kind = index
    },
    isEle(state, navleft){
      state.navleft = navleft
    },
    isCut(state, iscut){
      state.iscut = iscut
    },
    userId(state,id){
      state.userId=id
    }
  },
  actions: {}
}
const moudleC = {
  state: {
    navleft: 'ele.me',
    iscut: false
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
