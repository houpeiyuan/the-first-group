<template>
<div class="wrap">
  <div class="box">
    <input type="text" placeholder="请填写你的姓名" v-model="name">
    <input type="text" placeholder="小区/写字楼/学校等" v-model="school">
    <input type="text" placeholder="请填写详细送餐地址" v-model="address">
    <input type="text" placeholder="请填写能联系到您的手机号" v-model="phone1">
    <input type="text" placeholder="备用联系电话(选填)" v-model="phone2">
  </div>
  <button @click="add">新增地址</button>
</div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "add",
      data(){
        return {
          name:'',
          school:'',
          address:'',
          phone1:'',
          phone2:'',
        }
      },
      methods:{
          add(){
            const api='https://elm.cangdu.org/v1/users/'+this.$store.state.zhang.userId+'/addresses'
         this.$http({method:'post',url:api,data:{
             address:this.address,
             address_detail:'郑州市莲花街',
             name:this.name,
             phone:this.phone1,
             tag:'无',
             sex:1,
             phone_bk:this.phone2,
             tag_type:2,
             geohash:'31.22967,121.4762',
           }}).then((response)=>{ this.$router.push({name:'address'})})
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
    display: flex;
    height: 2.2rem;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #e4e4e4;
  }
  input{
    width: 100%;
    height: 0.4rem;
    background-color: white;
    font-size: 0.18rem;
  }
  button{
    width: 100%;
    height: 0.4rem;
    margin-top: 0.2rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.3rem;
    background-color: bisque;
    color: white;
  }
</style>
