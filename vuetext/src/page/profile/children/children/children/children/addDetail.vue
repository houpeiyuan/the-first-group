<template>
<div class="wrap">
  <div class="box">
    <input type="text" placeholder="账号" v-model="username">
    <input type="text" placeholder="旧密码" v-model="oldpassWord">
    <input type="text" placeholder="请输入新密码" v-model="newpassword">
    <input type="text" placeholder="请确认密码" v-model="confirmpassword">
    <div class="yzm">
      <input type="text" placeholder="请输入验证码" v-model="captcha_code">
      <div class="picture">
        <img :src="code" alt="">
        <div class="change">
          <p>看不清</p>
          <p @click="changeCode">换一张</p>
        </div>
      </div>
    </div>
  </div>
  <button @click="change">确认修改</button>
</div>
</template>

<script>
    export default {
        name: "addDetail",
      data(){
        return{
          oldpassWord:'',
          username:'',
          newpassword:'',
          confirmpassword:'',
          captcha_code:'',
          code:''
        }
      },
      created(){
        this.changeCode()
      },
      methods:{
        changeCode() {
          const url='https://elm.cangdu.org/v1/captchas'
          this.$http({method:'post',url:url,withCredentials: true}).then((response)=>{this.code=response.data.code})
        },
          change(){
            this.$http({method:'post',url:'https://elm.cangdu.org/v2/changepassword',withCredentials: true,data:{
                username:this.username,
                oldpassWord:this.oldpassWord,
                newpassword:this.newpassword,
                confirmpassword:this.confirmpassword,
                captcha_code:this.captcha_code
              }}).then((response)=>{
              this.username='',
                this.oldpassWord='',
                this.newpassword='',
                this.confirmpassword='',
                this.captcha_code=''
            })
          }
      }
    }
</script>

<style scoped>
.wrap{
  width: 100%;
}
  .box{
    width: 100%;
    height: 2.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .box>input{
    width: 100%;
    height: 0.4rem;
  }
  .yzm{
    width: 100%;
    height: 0.4rem;
    display: flex;
  }
  .yzm>input{
    width: 50%;
    height: 0.4rem;
  }
  .picture{
    width: 50%;
    height: 0.4rem;
    display: flex;
  }
  .picture>img{
    width: 50%;
    height: 0.4rem;
  }
  .change{
    width: 50%;
    height: 0.4rem;
    display: flex;
    flex-wrap: wrap;
  }
  .change>p{
    width: 100%;
    height: 50%;
    font-size: 0.15rem;
  }
  button{
    width: 100%;
    height: 0.3rem;
    margin-top: 0.3rem;
    background-color: darkcyan;
    color: white;
    text-align: center;
    font-size: 0.25rem;
  }
</style>
