<template>
  <!--底部公共组件-->
  <section v-show="isfoot">
  <div class="foot navbar-fixed-bottom">
    <div @click="istrue=1" class="div1">
      <router-link :to="{name:'msite'}"><i class="iconfont i1">&#xe722;</i> </router-link>
      <p :style="{color:istrue===1?'blue':'black'}" class="p1">外卖</p>
    </div>
    <div @click="istrue=2">
      <router-link :to="{name:'search'}"><i class="iconfont">&#xe711;</i></router-link>
      <p :style="{color:istrue===2?'blue':'black'}">搜索</p>
    </div>
    <div @click="istrue=3">
      <router-link :to="{name:'order'}"><i class="iconfont ">&#xe667;</i></router-link>
      <p :style="{color:istrue===3?'blue':'black'}">订单</p>
    </div>
    <div @click="istrue=4">
      <router-link :to="{name:'profile'}"><i class="iconfont">&#xe607;</i></router-link>
      <p :style="{color:istrue===4?'blue':'black'}">我的</p>
    </div>

  </div>
  </section>
</template>
<script>
    export default {
        name: "footGuide",
      data(){
       return {
         istrue: 0
       }
      },
      computed:{
          isfoot(){
            return this.$store.state.zhang.isfoot
          }
      },
      methods:{
      },
    }
</script>

<style scoped>
  .div1{
    position: relative;
    bottom: -0.1rem;
  }
  .i1{
    font-size: 0.4rem !important;
    display: inline-block;
    margin-left: -0.05rem;
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.002rem;
    -moz-osx-font-smoothing: grayscale;
    color: black;
      }
  .foot{
    display: flex;
    z-index: 222;
    justify-content: space-around;
    bottom: -0.2rem;
    background-color: white;
    border-top:0.02rem solid #e4e4e4 ;
  }
  p{
    font-size: 0.12rem;
    position: absolute;
    margin-top: -0.3rem;
    margin-bottom: 0.1rem;
  }
  .p1{
    position: absolute;
    margin-top: -0.55rem;
  }

  a{
    display: inline-block;
    line-height: 0.3rem;
  }
  a:active{
    text-decoration: none !important;
  }
  a:focus{
    color: #23527c;
    text-decoration: none !important;
  }
  .router-link-active>i{
    color: #008de1 !important;
  }
  section::-webkit-scrollbar{
    display: none;
  }
</style>
