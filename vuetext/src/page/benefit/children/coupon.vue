<template>
  <section>
<div class="box pull-right">
  <router-link :to="{name: 'explain'}">商家代金券说明</router-link>
</div>
    <div class="left">
      <img src="../../../../src/image/voucher.png" alt="">
      <div class="below">
      <p>无法使用代金券</p>
      <span>非客户端或客户端版本过低</span>
      </div>
   <div class="content">
     <router-link :to="{name:'download'}">下载或升级客户端</router-link>
   </div>
    </div>
  </section>
</template>
<script>
    export default {
        name: "coupon"
    }
</script>

<style scoped>
  .box{
    margin-top: 0.1rem;
    text-align: center;
    padding-top: 0.2rem;
  }
  img{
    width: 2rem;
    margin-top: 1.2rem;
    margin-left: 1rem;
    border-radius: 50%;
  }
  .left{
    text-align: center;
  }
  .content{
    width: 1.2rem;
    height: 0.3rem;
    margin-left: 1.3rem;
    margin-top: 0.1rem;
    background-color:dodgerblue;
    padding-top: 0.07rem;
  }
.below{
  margin-top: 0.1rem;
  margin-left: 1rem;
}
</style>
