<template>
  <!--头部公共组件-->
  <div>
    <div v-if="ishead">
      <nav class="nav navbar navbar-fixed-top">
        <a href="###" class="pull-left" v-if="getLeaftNav">{{getLeaftNav}}</a>
        <span @click="$router.go(-1)" v-else="isretreat" class="pull-left retreat"><</span>
        <span v-if="getCity" class="selectedLocation city1">{{getCity}}</span>
        <div class="pull-right">
      <span v-if="isLogin" >
        <router-link :to="{name: 'login'}">登录 |</router-link>
        <router-link :to="{name: 'login'}">注册</router-link>
      </span>
          <router-link  :to="{name:'home'}" v-show="isCut">切换城市</router-link>
          <router-link  v-if="getpron" :to="{name:'profile'}" class="personal">☺</router-link>
        </div>
      </nav>
    </div>

  </div>

</template>

<script>
    export default {
        name: "head1",
        data() {
          return{
            isShow: true,
            isShow1: false,
            isShow2: true
          }
        },
        computed:{
          //自己写方法,此方法用于接受created里面改变的变量
         getLeaftNav() {
           return this.$store.state.zhang.navleft
         },
         getCity() {
           return this.$store.state.zhang.city
         },
         isLogin() {
           return this.$store.state.zhang.change1
         },
          getpron(){
           return this.$store.state.zhang.bull
          },
          isCut() {
           return this.$store.state.zhang.iscut
          },
          isretreat() {
           return this.$store.state.zhang.retreat
          },
          ishead(){
           console.log(this.$store.state.zhang.ishead)
           return this.$store.state.zhang.ishead
          }
      },
      created(){
          //这是传参数的地方,通过该方法向action里面传值,第一个为action自己的声明函数名,第二个参数为需要传的参数
         //this.$store.dispatch('changeNav1',false)
      }
    }
</script>

<style scoped>
  .retreat{
    font-size: 0.3rem;
    padding-left: 0.2rem;
  }
  .city1{
    color: white !important;
    display: inline-block;
    width: 1rem !important;
    height: 0.5rem;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .personal{
    font-size: 0.3rem;
  }
  .nav{
     background-color: blue;
     width: 100%;
     text-align: center;
     line-height: 0.5rem;
     height: 0.5rem;
   }
  .nav>a,div{
    color: white;
  }
  .pull-right>a{
    color: white;
  }
  .pull-right{
    height: 0.5rem;
    line-height: 0.5rem;
  }
  .selectedLocation{
    color: white;
  }
  .pull-left{
    color: white;
  }
</style>
