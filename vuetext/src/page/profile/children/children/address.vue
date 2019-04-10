<template>
<div class="wrap">
  <div class="box">
    <p>新增地址</p>
    <p><router-link :to="{path:'/add'}">></router-link> </p>
  </div>
  <div v-for="(item,index) in addressList">
    <p class="pull-right p" @click="date(index)">编辑</p>
      <div class="top">
        <p>{{item.address}}</p>
        <span>{{item.phone}}</span>
      </div>
  </div>
  <div class="animated flash bon" v-if="isT">
    <p>确定要删除吗</p>
    <p class="left" @click="cancel">取消</p>
    <p class="right" @click="delte(app)">确定</p>
  </div>
</div>
</template>
<script>
  import Vue from 'vue'
    export default {
        name: "address",
      data(){
          return{
            addressList: [], //地址列表
            isT:false,
            app:'',
          }
      },
      // beforeRouteEnter(a,b,next){
      //   next();
      // },
      created(){
        this.$store.commit('changecity1',{name1:'编辑地址',bull:false}),
        Vue.axios.get('https://elm.cangdu.org/v1/users/'+this.$store.state.zhang.userId+'/addresses').then(res=>{
          this.addressList=res.data
        })

      },
      methods:{
       date(i){
         this.isT=true
         this.app=i
         },
        cancel(){
         this.isT=false
        },
        delte(i){
          Vue.axios.delete('https://elm.cangdu.org/v1/users/'+this.$store.state.zhang.userId+'/addresses/'+this.addressList[i].id).then(res=>{
            console.log(res.data)
              this.addressList.splice(i,1)
          })
          this.isT=false
        }
      }
    }
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  background-color:whitesmoke;
}
  .box{
    width: 100%;
    height: 0.4rem;
    display: flex;
  }
  .box>p:nth-child(1){
    width: 50%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.3rem;
  }
.box>p:nth-child(2){
  width: 50%;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.3rem;
  text-align: right;
}
  .top{
    padding-top: 0.1rem;
    width: 100%;
    height: 0.5rem;
    padding-left: 0.1rem;
    background-color:white;
    border-bottom: 0.01rem solid lightgray;
  }
  .p{
    margin:0.2rem 0.03rem 0 0;
  }
.bon{
  width: 2rem;
  height: 1.5rem;
  border-radius: 0.05rem;
  background-color:white;
  text-align: center;
  padding-top: 0.3rem;
  position: fixed;
  top: 2rem;
  left: 0.9rem;
}
  .bon>p{
    margin-bottom: 0.4rem;
  }
  .left{
    width: 0.7rem;
    height: 0.3rem;
    background-color: blue;
    margin-top:0.33rem;
    border-radius: 0.05rem;
    padding:0.08rem 0 0 0;
    color: white;
  }
  .right{
    width: 0.7rem;
    height: 0.3rem;
    background-color: blue;
    margin-top:0.33rem;
    border-radius: 0.05rem;
    padding:0.08rem 0 0 0;
    color: white;
  }
</style>
