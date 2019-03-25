<template>
  <!--头部公共组件-->
  <nav class="nav navbar navbar-fixed-top">
    <a href="###" class="pull-left" v-if="isShow">{{getLeaftNav}}</a>
    <span v-else="isShow1" class="selectedLocation">郑州(实验参数)</span>
    <div class="pull-right">
      <router-link :to="{path: '/login'}">登录 |</router-link>
      <router-link :to="{}">注册</router-link>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "head1",
        data() {
          return{
            isShow: true,
            isShow1: false
          }
        },
        computed:{
          //自己写方法,此方法用于接受created里面改变的变量
         getLeaftNav() {
           this.isShow = this.$store.state.isShow
           return this.$store.state.hou.navleft
         }
      },
      created(){
          //这是传参数的地方,通过该方法向action里面传值,第一个为action自己的声明函数名,第二个参数为需要传的参数
         this.$store.dispatch('changeNav1',false)
      }
    }
</script>

<style scoped>
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
</style>
