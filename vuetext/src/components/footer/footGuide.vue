<template>
  <!--底部公共组件-->
  <section>
  <div class="foot navbar-fixed-bottom">
    <router-link :to="{name:'msite'}" ><i class="iconfont">&#xe61b;</i><p >外卖</p></router-link>
    <router-link :to="{name:'search'}"><i class="iconfont">&#xe683;</i><p>搜索</p></router-link>
    <router-link :to="{name:'order'}"><i class="iconfont ">&#xe601;</i><p>订单</p></router-link>
    <router-link :to="{name:'profile'}"><i class="iconfont">&#xe600;</i><p>我的</p></router-link>
  </div>
  </section>
</template>
<script>
    export default {
        name: "footGuide",
      data(){
       return {
       }
      },
      methods:{
      },
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1107252 */
    src: url('//at.alicdn.com/t/font_1107252_9vzkd2u4fr6.eot');
    src: url('//at.alicdn.com/t/font_1107252_9vzkd2u4fr6.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1107252_9vzkd2u4fr6.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1107252_9vzkd2u4fr6.woff') format('woff'),
    url('//at.alicdn.com/t/font_1107252_9vzkd2u4fr6.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1107252_9vzkd2u4fr6.svg#iconfont') format('svg');
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
    justify-content: space-around;
  }
  div{
    font-size: 0.12rem;
  }
  a:active{
    text-decoration: none !important;
  }
  a:focus, a:hover {
    color: #23527c;
    text-decoration: none !important;

  }
  .router-link-active>i{
    color: #008de1 !important;
  }
</style>
