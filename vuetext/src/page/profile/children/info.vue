<template>
<div class="wrap">
  <div class="head">账户信息</div>
  <div class="picture">
    <p>头像</p>
    <p>></p>
  </div>
  <div class="us">
    <p>用户名</p>
    <p>{{this.$store.state.zhang.username}} <router-link :to="{path:'/setusername'}">></router-link></p>
  </div>
  <div class="address">
    <p>收货地址</p>
    <p><router-link :to="{path:'/address'}">></router-link> </p>
  </div>
  <div class="number">账号绑定</div>
  <div class="phone">
    <p>手机</p>
    <p>></p>
  </div>
  <div class="set">安全设置</div>
  <div class="log">
    <p>登录密码</p>
    <p>修改 <router-link :to="{path:'/addDetail'}">></router-link></p>
  </div>
  <button class="back" @click="back">退出登录</button>
</div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "info",
     data(){
          return{

          }
     },
      created(){
        this.$store.commit('changecity1',{name1:'账户信息',bull:false})
      },
      methods:{
          back(){
            Vue.axios.get('https://elm.cangdu.org/admin/singout').then((response)=>{
              console.log(response.data.success)
              this.$store.commit('success',response.data.success)
              this.$router.push({name:'profile'})
            })
          }
      }
    }
</script>

<style scoped>
.wrap{
  width: 100%;
}
  .head{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.25rem;
    color: white;
    background-color: #3190e8;
    margin-bottom: 0.2rem;
  }
  .picture{
    width: 100%;
    height: 0.8rem;
    display: flex;
    border-top:0.01rem solid gray;
    border-bottom:0.01rem solid gray ;
  }
  .picture>p:nth-child(1){
    width: 50%;
    height: 100%;
    line-height: 0.8rem;
    font-size: 0.3rem;
  }
  .picture>p:nth-child(2){
    width: 50%;
    height: 100%;
    text-align: right;
    line-height: 0.8rem;
    font-size: 0.4rem;
  }
  .us{
    width: 100%;
    display: flex;
    height: 0.4rem;
    border-bottom:0.01rem solid gray ;
  }
  .us>p:nth-child(1){
    width: 50%;
    height: 100%;
    font-size: 0.3rem;
    line-height: 0.4rem;
  }
  .us>p:nth-child(2){
    width: 50%;
    height: 100%;
    text-align: right;
    line-height: 0.4rem;
    font-size: 0.3rem;
  }
  .address{
    width: 100%;
    display: flex;
    height: 0.4rem;
    border-bottom:0.01rem solid gray ;
  }
.address>p:nth-child(1){
  width: 50%;
  height: 100%;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.address>p:nth-child(2){
  width: 50%;
  height: 100%;
  text-align: right;
  line-height: 0.4rem;
  font-size: 0.3rem;
}
  .number,.set{
    width: 100%;
    height: 0.3rem;
    border-bottom:0.01rem solid gray ;
    line-height: 0.3rem;
    font-size: 0.2rem;
    background-color: gainsboro;
  }
.phone{
  width: 100%;
  height: 0.4rem;
  display: flex;
  border-bottom:0.01rem solid gray ;
}
.phone>p:nth-child(1){
  width: 50%;
  height: 100%;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.phone>p:nth-child(2){
  width: 50%;
  height: 100%;
  text-align: right;
  line-height: 0.4rem;
  font-size: 0.3rem;
}
.log{
  width: 100%;
  height: 0.4rem;
  display: flex;
  border-bottom:0.01rem solid gray ;
}
.log>p:nth-child(1){
  width: 50%;
  height: 100%;
  font-size: 0.3rem;
  line-height: 0.4rem;
}
.log>p:nth-child(2){
  width: 50%;
  height: 100%;
  text-align: right;
  line-height: 0.4rem;
  font-size: 0.3rem;
}
.back{
  width: 100%;
  border-radius: 0.05rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: red;
  text-align: center;
  margin-top: 0.3rem;
}
</style>
