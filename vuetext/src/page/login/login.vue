<template>
  <div class="wrap">
    <div class="loginBox">
      <input type="text" class="user" placeholder="账号" v-model="username">
      <br>
      <input :type="isEncryption" class="password" placeholder="密码" v-model="password">
      <div class="but" @click="but" :style="{backgroundColor:ischangeColor?'red':'green'}" >
        <span class="circle" :style="{left:ischangeColor?'2px':'24px'}"></span>
      </div>
      <input v-model="msg" type="text" class="loginCode" placeholder="验证码">
      <img :src="code" alt="" @click="changeCode">
      <p class="p1" @click="changeCode">
        <span>看不清</span>
        <br>
        <br>
        <span class="span1">换一张</span>
      </p>
      <p>温馨提示 : 未注册过的账号 , 登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <button class="login" @click="log">登录</button>
      <p class="resetPassword" @click="jumpPassword">重置密码?</p>
    </div>
    <div class="box" v-if="bul">
      <p>警告</p>
      <p>{{message}}</p>
      <button v-if="bul2" @click="sure">确认</button>
    </div>
      </div>

</template>
<script>
  import Vue from 'vue'
    export default {
        name: "login",
        data() {
         return {
           isEncryption: 'password',
           ischangeColor: false,
           code: '',
           isupdata: true,
           username:'',
           password:'',
           msg:'',
           bul:'',
           bul2:"",
           message:""
         }
        },
        created() {
         this.changeCode()
        },
        methods: {
          but() {
            if (this.ischangeColor) {
              this.isEncryption = 'password'
              this.ischangeColor = false
            }else{
              this.isEncryption= 'text'
              this.ischangeColor = true
            }

          },
          changeCode() {
            Vue.axios.post('https://elm.cangdu.org/v1/captchas',null).then(res=> {
              this.code = res.data.code
            })
          },
          jumpPassword() {
            this.$router.push({path:'/forget'})
          },
          log (){
            Vue.axios.post("https://elm.cangdu.org/v2/login",{username:this.username,password:this.password,captcha_code:this.msg,withCredentials: true}).then((response)=>{
              this.message=response.data.message
              if (response.data.message=='验证码失效'&this.password!="") {
                this.bul=true
                this.bul2=true
              }
            })
          },
          sure(){
            this.bul2=false
            this.bul=false
            this.username=""
            this.password=""
            this.msg=""
          }
        }
    }
</script>

<style scoped>
  .wrap{
    position: relative;
  }
  .loginBox{
    position: relative;
  }
  .user,.password{
    width: 100%;
    height: 0.8rem;
    border: none;
    padding: 2% 0 0 2%;
    border-bottom: 0.01rem solid #e4e4e4;
    outline: medium
  }
  .loginCode{
    width: 50%;
    height: 0.8rem;
    border: none;
    padding: 2% 0 0 2%;
    border-bottom: 0.01rem solid #e4e4e4;
    outline: medium
  }
  .but{
    display: inline-block;
    width: 0.50rem;
    height: 0.26rem;
    background-color: #749832;
    border-radius: 0.26rem;
    line-height: 0.26rem;
    position: absolute;
    left: 3rem;
    top: 1rem;
    background-color: #ff1100;
    transition: all 0.3s linear;
  }
  .circle{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: white;
    margin: 3px;
    position: absolute;
    left:0px;
    transition: all 0.3s linear;
    top: 0;
  }
  .p1{
    display: inline-block;
    padding-left: 0.2rem;
  }
  .span1{
    color: blue;
    margin-top: 0.3rem;
  }
  p{
    color: red;
    padding: 2% 0 0 2%;
  }
 .login{
   width: 96%;
   height: 0.5rem;
   background-color: green;
   border-radius: 0.1rem;
   margin: 1% 1%;
   border: none;
   color: white;
 }
  .resetPassword{
   color: blue;
   float: right;
  }
  span{
    color: black;
  }
  .box{
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2rem;
    margin: 0 auto;
    width: 3rem;
    height: 2rem;
    border: 0.01rem solid darkgreen;
    text-align: center;
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
    text-align: center!important;
    line-height: 0.6rem;
    font-size: 0.2rem;
  }
  .box>button{
    width: 50%;
  }
</style>
