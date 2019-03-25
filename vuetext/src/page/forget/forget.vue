<template>
    <!--忘记密码，修改密码页-->
  <div class="passwordResetBox">
    <input type="text" class="passwordReset" placeholder="账号">
    <input type="text" class="passwordReset" placeholder="旧密码">
    <input type="text" class="passwordReset" placeholder="请输入新密码">
    <input type="text" class="passwordReset" placeholder="请确认密码">
    <input type="text" class="loginCode" placeholder="验证码">
    <img :src="code" alt="" @click="changeCode">
    <p class="p1" @click="changeCode">
      <span>看不清</span>
      <br>
      <br>
      <span class="span1">换一张</span>
    </p>
    <button class="login">确认修改</button>
  </div>
</template>

<script>
    export default {
        name: "forget",
        data() {},
        methods: {
          changeCode() {
            Vue.axios.post('https://elm.cangdu.org/v1/captchas',null).then(res=> {
              this.code = res.data.code
            })
          }
        }
    }
</script>

<style scoped>
  .passwordReset{
    width: 100%;
    height: 0.8rem;
    border: none;
    padding: 2% 0 0 2%;
    border-bottom: 0.01rem solid #e4e4e4;
    outline: medium
  }
  .p1{
    display: inline-block;
    padding-left: 0.5rem;
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
</style>
