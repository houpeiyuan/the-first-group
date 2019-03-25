<template>
<div class="loginBox">
  <input type="text" class="user" placeholder="账号">
  <br>
  <input :type="isEncryption" class="password" placeholder="密码">
  <div class="but" @click="but" :style="{backgroundColor:ischangeColor?'red':'green'}" >
    <span class="circle" :style="{left:ischangeColor?'2px':'24px'}"></span>
  </div>
  <input type="text" class="loginCode" placeholder="验证码">
  <img :src="code" alt="" @click="changeCode">
  <p class="p1" @click="changeCode">
    <span>看不清</span>
    <br>
    <span class="span1">换一张</span>
  </p>
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
           code: ''
         }
        },
        created() {
         this.changeCode();
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
          }
        }
    }
</script>

<style scoped>
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
    width: 20px;
    height: 20px;
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
  }
  .span1{
    color: blue;
  }
</style>
