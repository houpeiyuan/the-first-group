<template>
    <div class="container-fluid goods">
      <h2>您的购物车</h2>
      <div class="alert alert-warning">
        <router-link :to="{path:'/product'}">返回</router-link>
      </div>
      <table class="table table-striped">
        <thead>
        <tr>
          <td>商品名称</td>
          <td>单价</td>
          <td>数量</td>
          <td>小计</td>
          <td>删除</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(pro,index) in childArr">
          <td>{{pro.product.name}}</td>
          <td>{{pro.product.price}}</td>
          <td>{{pro.count}}</td>
          <td>{{pro.product.price*pro.count}}</td>
          <td><button class="btn btn-danger" @click="delete1(pro,index)">删除</button></td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Mycart",
      data(){
          return {
            childArr: []
          }
      },
      beforeRouteEnter (to, from, next) {
        Vue.axios.post('/api/post2',null).then(res=>{
          next(vm=>{
            vm.childArr=res.data
          })
        }).catch(err=>{
          console.log(err)
        })
      },
        created(){
     this.childArr = this.$parent.getPro();
      },
      methods:{
        delete1(p,i){
          console.log(p)
          Vue.axios.post('/api/get3',{value:p.value}).then(res=>{
            if(res.data){
              this.$parent.delete2(p)
              if(p.count>1){
                this.childArr[i].count--
              }else{
                this.childArr.splice(i, 1)
              }
            }
          }).catch(err=>{
            console.log(err)
          })

        }
      },
      computed:{

      }
    }
</script>

<style scoped>
td{
  text-align: start;
}
</style>
