<template>
  <div id="app">
    <head1></head1>
    <div class="totalBox">
      <router-view></router-view>
      <FootGuide></FootGuide>
    </div>
  </div>
</template>
<script>
import {} from './config/rem'
import Head1 from "./components/header/head";
import FootGuide from "./components/footer/footGuide";
export default {
  name: 'App',
  components: {FootGuide,Head1}
}
</script>

<style>
  /*去掉所有页面的滚动条*/
  @import 'style/icon.css';
  *::-webkit-scrollbar{
    display: none;
  }
  a{
    text-decoration: none !important;
  }
  .totalBox{
    margin-top: 0.5rem;
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height:100%;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
</style>
