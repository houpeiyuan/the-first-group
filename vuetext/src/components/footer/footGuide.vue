<template>
  <!--底部公共组件-->
  <section v-show="isfoot">
  <div class="foot navbar-fixed-bottom">
    <div @click="istrue=1" class="div2">
      <router-link :to="{name:'msite'}"><i class="iconfont i1">&#xe722;</i>
        <div :style="{color:istrue===1?'blue':'black'}" class="p1">外卖</div>
      </router-link>

    </div>
    <div @click="istrue=2" class="div1">
      <router-link :to="{name:'search'}"><i class="iconfont">&#xe711;</i>
        <div :style="{color:istrue===2?'blue':'black' }" class="p2">搜索</div>
      </router-link>
    </div>
    <div @click="istrue=3" class="div1">
      <router-link :to="{name:'order'}"><i class="iconfont ">&#xe667;</i>
        <div :style="{color:istrue===3?'blue':'black'}" class="p2">订单</div>
      </router-link>
    </div>
    <div @click="istrue=4" class="div1">
      <router-link :to="{name:'profile'}"><i class="iconfont">&#xe607;</i>
        <div :style="{color:istrue===4?'blue':'black'}" class="p2">我的</div>
      </router-link>
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
  /*.div1{*/
    /*margin-top: 0.04rem;*/
    /*padding-top: 0.1rem;*/
  /*}*/
  /*.div2{*/
    /*margin-top: 0.15rem;*/
  /*}*/
  .i1{
    font-size: 0.45rem !important;
    display: inline-block;
    margin-left: -0.05rem;
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.002rem;
    -moz-osx-font-smoothing: grayscale;
      }
  .foot{
    height: 0.6rem;
    display: flex;
    justify-content: space-around;
    background-color: white;
    border-top:0.02rem solid #e4e4e4 ;
    overflow: hidden;
  }
  .p2{
    font-size: 0.12rem;
    /*margin-top: -0.4rem;*/
    /*margin-bottom: 0.1rem;*/
  }
  .p1{
    font-size: 0.12rem;
    margin-top: -0.07rem;
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
