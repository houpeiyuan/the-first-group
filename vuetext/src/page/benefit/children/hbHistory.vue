<template>
<div class="box">
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
      <span>已过期</span>
    </div>
  </div>
</div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "hbHistory",
      data(){
        return {
          money: []
        }
      },
      mounted() {
        var that=this
        Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0',null).then((response)=>{that.money=response.data; console.log(response.data)})
      }
    }
</script>

<style scoped>
.box{
  width: 200% !important;
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
</style>
