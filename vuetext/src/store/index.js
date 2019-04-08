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
    city:'',
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
    foods:'',
    bull2:false,
    history: [],
    cityid:0,
    userId:'',
    active: [],
    isshow3:false
  },
  getters: {
  },
  mutations: {
    //是否结束过渡动画
    transitionend(state, isshow3){
      state.isshow3 = isshow3
    },
    //活动属性
    getActive(state, active){
      state.active = active
    },
    getHistory(state,history){
      state.history = history
    },
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
    changecity1(state,pl1){
      state.foods= pl1.name1;
      state.bull2 = pl1.bull
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
    getcityid(state,cityid){
      state.cityid = cityid
    },
    userId(state,id){
      state.userId=id
    }
  },
  actions: {}
}
const moudleC = {
  state: {
      longitude: 0,
      latitude: 0
  },
  getters: {
  },
  mutations: {
    getLocation(state, location){
      state.longitude= location.longitude
      state.latitude = location.latitude
    }
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
