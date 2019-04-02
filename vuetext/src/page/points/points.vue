<template>
  <section>
    <div class="frist">
      <div class="two">
        <span>当前积分</span>
        <router-link :to="{name:'detaile'}"><p class="pull-right"><img src="../../../src/image/description.png" alt="" class="img1">积分说明</p></router-link>
        <div>
          <button class="one" @click="Tg">提交</button>
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
        <img src="../../../src/image/no-log.png" alt="" class="img2">
        <p>最近30天无积分记录</p>
        <p>快去下单赚取大量积分吧</p>
      </div>
    </div>
    <div class="finally animated heartBeat" v-if="isT">
      <img src="https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=905010147,1377287211&fm=200&gp=0.jpg" alt="" class="img3">
      <p>快去下单赚取大量积分吧</p>
      <div class="confirm"  v-if="isM" @click="propre">确定</div>
    </div>
  </section>

</template>

<script>
    export default {
        name: "points",
      data(){
          return{
            isT:false,
            isM:true
          }
      },
      methods:{
          Tg(){
            this.isT=true
          },
          propre(){
            this.isT=false
          }
      }
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
    width: 2rem;
    height: 1.5rem;
    background-color: white;
    position:fixed;
    top: 2rem;
    left: 0.9rem;
    text-align:center;
  }
  .img1{
    width: 0.15rem;
  }
  .confirm{
    width: 2rem;
    height: 0.2rem;
    background-color: blue;
    margin-top: 0.2rem;
    color: white;
  }
  .img2{
    margin-left: -0.9rem;
  }
  .img3{
    width: 1rem;
    border-radius: 50%;
  }
</style>
