<template>
<div class="wrap">
  <div class="head">
    <p>支付剩余时间</p>
    <p v-text="clock">
      {{time}}
    </p>
  </div>
  <p class="title">选择支付方式</p>
  <div class="pay">
    <div><div>支</div><div @click="changeColor(1)" :style="{color:num==1?'green':'gray'}">✔</div></div>
    <div><div>微</div><div @click="changeColor(2)" :style="{color:num==2?'green':'gray'}">✔</div></div>
  </div>
  <button @click="sure1" class="btn">确认支付</button>
  <div v-if="bul" class="alert animated bounce">
    <p>!</p>
    <p>暂不支持支付功能</p>
    <button @click="sure2">确认</button>
  </div>
</div>
</template>

<script>
    export default {
        name: "invoiceRecord",
      data(){
          return {
            clock:'',
            num:1,
            bul:false
          }
      },
      methods:{
        changeColor(i){
          this.num=i;
        },
        sure1(){
          this.bul=true
        },
        sure2(){
          this.bul=false
        }
      },
      computed:{
          time (){
          var shi=15;
          var fen=60;
          var s=setInterval(()=>{
            if(fen>=10){
              this.clock='00:'+shi+':'+fen
            }else{
              this.clock='00:'+shi+':'+'0'+fen
            }
            fen--;
            if(fen==0&&shi!=0){
              fen=60
              shi--
            }
            if (shi==0&&fen==0) {
              fen=0
              shi=0
              clearInterval(s)
            }
          },1000)
          }
      }
    }
</script>

<style scoped>
.wrap{
  width: 100%;
  position: relative;
}
.head{
  width: 100%;
  height: 1rem;
  text-align: center;
}
.head>p:nth-child(1){
  font-size: 0.3rem;
  height: 50%;
}
.head>p:nth-child(2){
  font-size: 0.2rem;
  height: 50%;
}
.title{
  width: 100%;
  height: 0.3rem;
  background-color: gainsboro;
  font-size: 0.18rem;
  line-height: 0.3rem;
}
  .pay{
    width: 100%;
    height: 1rem;
  }
  .pay>div{
    width: 100%;
    height: 50%;
    display: flex;
  }
  .pay>div>div{
    width: 50%;
    height: 100%;
    line-height: 0.5rem;
  }
  .pay>div>div:nth-child(1){
    text-align: left;
    font-size: 0.3rem;
    padding-left: 0.2rem;
  }
.pay>div>div:nth-child(2){
  text-align: right;
  font-size: 0.3rem;
  padding-right: 0.2rem;
}
.btn{
  width: 100%;
  height: 0.4rem;
  background-color: #90B4FC;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.3rem;
}
  .alert{
    width: 60%;
    height: 1.5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 3rem;
    margin: auto;
  }
  .alert>p:nth-child(1){
    width: 100%;
    height: 50%;
    text-align: center;
    font-size: 0.4rem;
  }
  .alert>p:nth-child(2){
    width: 100%;
    height: 30%;
    text-align: center;
    font-size: 0.2rem;
  }
  .alert>button{
    width: 100%;
    height: 20%;
    text-align: center;
    background-color: aquamarine;
  }
</style>
