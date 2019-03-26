<template>
<!--个人中心-->
  <section>
    <div class="header">
      <router-link :to="{name:'login'}">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553596796415&di=7918ff2398947d38ae63ce05feacd827&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D662f3ce0c295d143da76e42b43f18296%2Fd96f0823dd54564eb6d034dab9de9c82d0584f53.jpg" alt="">
        <div class="pull-right">></div>
          <div class="log">
         <p>登陆|注册</p>
          <span><i class="iconfont">&#xe607;</i>暂无绑定手机</span>
        </div>
      </router-link>
      </div>
    <router-link :to="{}" class="pull-left">
      <span class="left">0</span><span class="a">元</span>
      <br>
      <span>我的余额</span>
    </router-link>
    <router-link :to="{}" class="pull-left">
      <span class="content">1</span><span class="a">个</span>
      <br>
      <span>优惠券</span>
    </router-link>
    <router-link :to="{}" class="pull-left">
      <span class="right">560</span><span class="a">分</span>
      <br>
      <span>我的积分</span>
    </router-link>
    <div class="last">
    <div>
    <router-link :to="{}">我的订单</router-link></div><p class="pull-right b">></p>
      <hr>
    <div><router-link :to="{}">积分商城</router-link></div><p class="pull-right b">></p>
      <hr>
    <div><router-link :to="{}">饿了么会员</router-link></div><p class="pull-right b">></p>
    </div>

    <div class="below">
    <div><router-link :to="{}">服务中心</router-link></div><p class="pull-right b">></p>
      <hr>
    <div><router-link :to="{}">下载饿了么APP</router-link></div><p class="pull-right b">></p>
    </div>
  </section>
</template>
<script>
    export default {
        name: "profile"
    }
</script>
<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1109204 */
    src: url('//at.alicdn.com/t/font_1109204_jthwyvl6na.eot');
    src: url('//at.alicdn.com/t/font_1109204_jthwyvl6na.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1109204_jthwyvl6na.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1109204_jthwyvl6na.woff') format('woff'),
    url('//at.alicdn.com/t/font_1109204_jthwyvl6na.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1109204_jthwyvl6na.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  img{
    width: 0.8rem;
    border-radius: 50%;
    margin-top: 0.2rem;
    margin-left: 0.1rem;
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
  .pull-right{
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
    font-size: 30px;
    color: darkorange;
    position: absolute;
    margin-left: -17px;
    margin-top: -13px;
  }
  .last{
    width: 100%;
    font-size:20px;
    margin-top: 1rem;
    background-color: whitesmoke;
  }
  .last>div{
    padding-top: 0.1rem;
    padding-left: .2rem;
  }
.below{
  width: 100%;
  font-size: 20px;
  margin-top: 0.2rem;
  background-color: whitesmoke;
}
  .below>div{
    width: 95%;
    padding-top: 0.1rem;
    padding-left: .2rem;
  }
  .b{
    position: absolute;
    top: 300px;
  }
</style>
