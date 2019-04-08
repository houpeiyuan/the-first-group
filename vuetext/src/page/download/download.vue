<template>
<!--下载App-->
<section>
  <div class="top">
    <img src="http://img.25pp.com/uploadfile/app/icon/20180612/1528809203496035.jpg" alt="">
    <p>下载饿了么APP</p>
  </div>
  <button>下载</button>
  <router-link :to="{name:'confirmOrder'}">2222222222</router-link>
</section>
</template>

<script>
    export default {
        name: "download"
    }
</script>

<style scoped>
  .top{
    height: 1.2rem;
    text-align: center;
  }
  img{
    width: 2rem;
    border-radius: 20%;
          margin-top: 10%;
  }
  button{

    width:80%;
    height: .3rem;
    margin-left: 10%;
    background-color: blue;
    margin-top: 40%;

  }
</style>
