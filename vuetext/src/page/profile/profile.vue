<template>
<!--个人中心-->
  <section>
    <div class="header">
      <router-link :to="{name:'login'}">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553596796415&di=7918ff2398947d38ae63ce05feacd827&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D662f3ce0c295d143da76e42b43f18296%2Fd96f0823dd54564eb6d034dab9de9c82d0584f53.jpg" alt="">
        <div class="pull-right frist">></div>
          <div class="log">
         <p>登陆|注册</p>
          <p class="phone"><i class="iconfont1">&#xe608;</i>暂无绑定手机</p>
        </div>
      </router-link>
      </div>
    <router-link :to="{}" class="pull-left">
      <span class="left">0</span><span class="a">元</span>
      <br>
      <span>我的余额</span>
    </router-link>
    <router-link :to="{name:'benefit'}" class="pull-left">
      <span class="content">1</span><span class="a">个</span>
      <br>
      <span>优惠券</span>
    </router-link>
    <router-link :to="{}" class="pull-left">
      <span class="right">560</span><span class="a">分</span>
      <br>
      <span>我的积分</span>
    </router-link>
    <div class="myequity">
      <ul class="ul">
        <router-link :to="{name:'order'}"><i class="iconfont2">&#xe667;</i>我的订单<span class="pull-right">></span></router-link>
      </ul>
      <div class="clearfix"></div>
      <div class="list"><router-link :to="{}"><i class="iconfont3">&#xe680;</i>积分商城<span class="pull-right">></span></router-link></div>
      <div class="list"><router-link :to="{}"><i class="iconfont4">&#xe610;</i>饿了么会员<span class="pull-right">></span></router-link></div>
      <div class="list"><router-link :to="{}"><i class="iconfont5">&#xe60c;</i>服务中心<span class="pull-right">></span></router-link></div>
      <div class="list"><router-link :to="{}"><i class="iconfont6">&#xe722;</i>下载饿了么APP<span class="pull-right">></span></router-link></div>
    </div>
  </section>
</template>
<script>
    export default {
        name: "profile",
      created(){
          this.$store.commit('changeCity',{name:'我的',bul:''})
      }
    }
</script>
<style scoped>
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: white;
  }
  .iconfont2{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color:black
  }
  .iconfont3{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color:red;
  }
  .iconfont4{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: gold;
  }
  .iconfont5{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: blue;
  }
  .iconfont6{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: blue;
  }
  img{
    width: 0.8rem;
    border-radius: 50%;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
  }
  .phone{
    padding-top: 0.05rem;
  }
  .header{
    height: 1.2rem;
    background-color: blue;
  }
.log{
    position:absolute;
    top: 0.9rem;
    left: 1rem;
    color:white;
  }
  p{
    font-size: 0.2rem;
  }
 .frist{
    color: white;
    font-size: 0.3rem;
    position: relative;
    top: 0.45rem;
  }
  .pull-left {
    width: 33.3%;
    height: 0.7rem;
    border-left: 1px solid lightgray;
    text-align: center;
    padding-top:5%;
  }
  .left{
    font-size: 30px;
    color: darkorange;
     position: absolute;
    margin-top: -13px;
  }
  .a{
    margin-left: 30px;
  }
 .content{
   font-size: 30px;
   color: darkorange;
   position: absolute;
   margin-top: -13px;
 }
  .right{
    font-size: 25px;
    color: darkorange;
    position: absolute;
    margin-left: -17px;
    margin-top: -13px;
  }
  .list{
    height: 0.5rem;
    border-bottom: 0.01rem solid #e4e4e4;
    line-height: 0.5rem;
  }
  .myequity{
    height: 3rem;
    position: relative;
    top: 0.2rem;
  }
  .ul{
    border-bottom: 0.01rem solid #e4e4e4;
    height: 1rem;
  }
</style>
