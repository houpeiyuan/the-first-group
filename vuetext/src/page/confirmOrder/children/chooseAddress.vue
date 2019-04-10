<template>
<!--选择地址页-->
  <section>
    <div class="conty">
    <div v-for="(item,index) in addressList" class="box" @click="general(item)">
      <div class="pull-left img1" :class="{img2:app==index}" @click="man(index)">
      </div >
      <div>
        <span class="a">{{item.name}}</span>
        <span>{{item.sex == 1? '先生' : '女士'}}</span>
        <span>{{item.phone}}</span>
      </div>
      <br>
      <div class="address_detail ellipsis">
        <span v-if="item.tag" :style="{backgroundColor: '#ccc', color: '#fff'}">{{item.tag}}</span>
        <span>{{item.address_detail}}</span>
      </div>
      <hr>
    </div>
    </div>
  <div class="navbar-fixed-bottom  bofer">
    <router-link :to="{name:'addAddress'}">
    <img src="../../../../src/image/add_address.png" alt="">
      <span>新增收货地址</span>
    </router-link>
  </div>
  </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "chooseAddress",
      data(){
          return{
            addressList: [], //地址列表
            app:''
          }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.zhang.userId+'/addresses').then(res=>{
            console.log(res.data)
            this.addressList=res.data
          })
      },
      methods:{
          man(i){
            this.app=i
          },
        general(i){
            this.$store.commit('item',i)
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .conty{
    width: 100%;
    height: 70%;
    overflow: auto;
  }
.bofer{
  text-align: center;
  margin-bottom: 0.2rem;
}
  img{
    width: 0.2rem;
  }
  .box{
    width: 100%;
    height: 0.7rem;
    margin-left: 0.3rem;
    padding: 0.02rem;
  }
  .a{
    font-size: 0.2rem;
  }
  .img1{
    margin-left: -0.3rem;
    margin-top: 0.17rem;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: lightgray;
  }
  .img2{
    background-color:blue;
  }
</style>
