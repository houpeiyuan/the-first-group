<template>
<div class="box">
  <div class="head">
    <p>有3个红包即将过期</p>
    <p>红包说明</p>
  </div>
  <div v-for="item in money" class="center">
  <div class="centerL">
    <p>{{item.amount}}</p>
    <p>{{item.description_map.sum_condition}}</p>
  </div>
  <div class="centerC">
    <p>{{item.name}}</p>
    <p>{{item.description_map.validity_periods}}</p>
    <p>{{item.description_map.phone}}</p>
  </div>
  <div class="centerR">
    <span>{{item.description_map.validity_delta}}</span>
  </div>
</div>
  <div class="foot">
    <router-link :to="{path:'/hbHistory'}">历史红包</router-link>
  </div>
  <section>
    <div><router-link :to="{path: '/exchange'}">兑换红包</router-link></div>
    <div><router-link :to="{path:'/hbDseription'}">推荐有奖</router-link></div>
  </section>
</div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "commend",
      data(){
          return {
         money: []
          }
      },
      mounted() {
          var that=this
          Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=3&offset=0',null).then((response)=>{that.money=response.data})
      }
    }
</script>

<style scoped>
.box{
  padding-top: 0.2rem;
  width: 200% !important;
}
  .head{
    width: 100%;
    height: 0.5rem;
    display: flex;
    font-size: 0.2rem;
  }
  .head p:nth-child(1){
    width: 50%;
    height: 100%;
    text-align: left;
  }
.head p:nth-child(2){
  width: 50%;
  height: 100%;
  text-align: right;
}
  .center{
    width: 100%;
    padding:0.05rem 0 ;
    margin: 0.05rem 0;
    border: 0.01rem solid gray;
    display: flex;
  }
  .centerL{
    width: 30%;
    height: 100%;
    border-right: 0.01rem solid gray ;
  }
.centerL>p:nth-child(1){
  font-size: 0.3rem;
  color: red;
}
  .centerC{
    width: 50%;
    height: 100%;
  }
.centerC>p:nth-child(1){
  font-size: 0.2rem;
}
  .centerR{
    width: 29%;
    height: 100%;
    font-size: 0.3rem;
    color: red;
  }
  .foot{
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    padding-top: 0.3rem;
  }
  section{
    width: 100%;
    height: 0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  section>div{
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 0.2rem;
    padding-top: 1rem;
  }
</style>
