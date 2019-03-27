<template>
<div class="wrap">
  <input type="text" placeholder="请输入兑换码" v-model="change1">
  <input type="text" placeholder="验证码" v-model="change2">
  <div class="yzm">
    <img :src="code" alt="">
    <div>
      <p>看不清</p>
      <p @click="changeCode">换一张</p>
    </div>
  </div>
  <button class="btn1" @click="login" :style='{backgroundColor:bul?"green":"gray"}'>兑换</button>
  <div class="box" v-if="bul">
    <p>警告</p>
    <p>{{msg}}</p>
    <button v-if="bul2" @click="sure">确认</button>
  </div>
</div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "exchange",
      data () {
          return {
            change1: '',
            change2: '',
            code: '',
            bul: "",
            bul2: '',
            msg:''
          }
      },
      mounted() {
          Vue.axios.post('https://elm.cangdu.org/v1/users/1/hongbao/exchange',null).then((response)=>{this.msg=response.data.message})
        this.changeCode()
      },
      methods: {
        changeCode(){
          Vue.axios.post('https://elm.cangdu.org/v1/captchas',null).then(res=> {
            this.code = res.data.code
          })
        },
        login () {
          Vue.axios.post('https://elm.cangdu.org/v2/login',{password: this.change1,captcha_code:this.change2}).then((response)=>{console.log(response.data)
            if (response.data.message=='验证码失效'){
              this.bul=true
              this.bul2=true
            }
          })
        },
        sure(){
          this.bul2=false
          this.bul=false
          this.change1=""
          this.change2=""
        }
      }
    }
</script>

<style scoped>
.wrap{
  width: 200% !important;
  position: relative;
}
.wrap>input{
  border: 0.01rem solid green;
  margin: 0.1rem 0;
}
  .wrap>input:nth-child(1){
    width: 100%;
    height: 0.5rem;
  }
.wrap>input:nth-child(2){
  width: 70%;
  height: 0.5rem;
}
.yzm{
  width: 25%;
  height: 0.5rem;
  margin:0.1rem 0 0.1rem 5%;
  border: 0.01rem solid green;
  display: flex;
  justify-content: space-around;
}
.yzm img{
  width: 50%;
  height: 100%;
}
.yzm>div{
  width: 50%;
  height: 100%;
}
.yzm p{
  width: 100%;
  height: 50%;
  font-size: 0.012rem;
}
  .btn1{
    width: 100%;
    height: 0.4rem;
    text-align: center;
  }
  .box{
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4rem;
    margin: 0 auto;
    width: 3rem;
    height: 2rem;
    border: 0.01rem solid darkgreen;
  }
  .box p:nth-child(1){
    width: 100%;
    height: 50%;
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
  }
.box p:nth-child(2){
  width: 100%;
  height: 30%;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.2rem;
}
  .box>button{
    width: 50%;
  }
</style>
