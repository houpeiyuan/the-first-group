<template>
<!-- 余额页-->
  <section>
    <div class="frist">
      <div class="two">
        <span>当前余额</span>
        <router-link :to="{name:'detail'}"><p class="pull-right"><img src="../../../src/image/description.png" alt="" class="img1">余额说明</p></router-link>
        <p class="one">提交</p>
      </div>
    <div class="a">
       <span class="p">0.00</span>
       <span>元</span>
    </div>
    </div>
    <br>
    <div>
      <p>交易明细</p>
      <div class="end">
        <img src="../../../src/image/no-log.png" alt="" class="img2">
        <p>暂无明细记录</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "balance"
    }
</script>

<style scoped>
  .frist{
    width: 100%;
    height: 1.7rem;
    background-color: blue;
    padding-top: 0.3rem;
  }
  .two{
    width:90%;
    height: 1.3rem;
    background-color: white;
    border-radius: 5%;
    margin-left:5%;
    padding-top: .1rem;
  }
  .one {
    width: 90%;
    height: 0.3rem;
    margin-top: 0.7rem;
    margin-left: 5%;
    background-color: lightgray;
    text-align: center;
    padding-top: 7px;
  }
  .p{
     font-size: 25px;
    color: brown;
  }
  .a{
    margin-top: -100px;
    margin-left: 30px;
  }
  .end{
    margin-left: 30%;
    margin-top: 30%;
  }
  .end>p{
    margin-left: .3rem;
  }
  .img1{
    width: 0.15rem;
  }
  .img2{
    margin-left: -0.8rem ;
  }
</style>
