<template>
  <section>
    <div class="frist">
      <div class="two">
        <span>当前积分</span>
        <router-link :to="{name:'detaile'}"><p class="pull-right"><i class="iconfont">&#xe655;</i>积分说明</p></router-link>
        <div>
          <button class="one">提交</button>
        </div>
      </div>
      <div class="a">
        <span class="p">0.00</span>
        <span>分</span>
      </div>
    </div>
    <br>
    <div>
      <p>最近30天积分记录</p>
      <div class="end">
        <i class="iconfont1">&#xe600;</i>
        <p>最近30天无积分记录</p>
        <p>快去下单赚取大量积分吧</p>
      </div>
    </div>
    <div class="finally">
      <img src="https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=905010147,1377287211&fm=200&gp=0.jpg" alt="">
    </div>
  </section>

</template>

<script>
    export default {
        name: "points"
    }
</script>

<style scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:100px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
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
    height: 0.4rem;
    margin-top: 0.5rem;
    margin-left: 5%;
    background-color:orangered;
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
.end>*+*+*{
  font-size: 10px;
  margin-top: .1rem;
}
  .finally{
  }
  img{
    width: 0.7rem;
  }
</style>
