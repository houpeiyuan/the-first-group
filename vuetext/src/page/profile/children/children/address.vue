<template>
<div class="wrap">
  <div class="box">
    <p>新增地址</p>
    <p><router-link :to="{path:'/add'}">></router-link> </p>
  </div>
</div>
</template>

<script>
    export default {
        name: "address"
    }
</script>

<style scoped>
.wrap{
  width: 100%;
}
  .box{
    width: 100%;
    height: 0.4rem;
    display: flex;
  }
  .box>p:nth-child(1){
    width: 50%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.3rem;
  }
.box>p:nth-child(2){
  width: 50%;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.3rem;
  text-align: right;
}
</style>
