<template>
  <!--底部公共组件-->
<<<<<<< HEAD
  <section>
  <div class="foot">
    <router-link :to="{name:'msite'}"><i class="iconfont">&#xe61b;</i><div>外卖</div></router-link>
    <router-link :to="{name:'search'}"><i class="iconfont">&#xe683;</i><div>搜索</div></router-link>
    <router-link :to="{name:'order'}"><i class="iconfont">&#xe601;</i><div>订单</div></router-link>
    <router-link :to="{name:'profile'}"><i class="iconfont">&#xe600;</i><div>我的</div></router-link>
  </div>
  </section>
=======
<<<<<<< HEAD
=======
  <div>
    
  </div>
>>>>>>> dc32439b531fdc31bb0ca02184bdfa8f604475e1
>>>>>>> e12080d3c03a3ec48420037b667c498e6e5d2517
</template>
<script>
    export default {
        name: "footGuide"
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
    font-size:25px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .foot{
    display: flex;
    justify-content: space-around;
  }
  div{
    font-size: 12px;
  }
</style>
