<template>
<!--订单备注页-->
  <section>
    <p class="p1">快速备注</p>
    <div class="a1">
<div v-for="(item,index) in taste[0]" class="pull-left">
  <p>{{item}}</p>
</div>
    </div>
    <div class="pull-right a2">
    <div v-for="item in taste[1]">
      <p>{{item}}</p>
    </div>
    </div>
    <div  class="pull-left a3">
    <div v-for="item in taste[2]">
      <p>{{item}}</p>
    </div>
    </div>
    <div class="pull-left a4">
    <div v-for="item in taste[3]">
      <p>{{item}}</p>
    </div>
    </div>
    <div class="pull-left a5">
    <div v-for="item in taste[4]">
      <p>{{item}}</p>
    </div>
    </div>
    <div class="a6">
    <div v-for="item in taste[5]" class="pull-left" >
      <p>{{item}}</p>
    </div>
    </div>
    <div class="end">
      <p>其他备注</p>
      <textarea class="input"v-model="input1" placeholder="请输入备注内容(可不填)"></textarea>
    </div>
    <div class="determine" @click="sure">确定</div>
  </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "remark",
      data(){
               return{
                 taste:[],
                 input1:''// 输入框的值
               }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/carts/1/remarks').then(res=>{
            console.log(res.data)
            this.taste=res.data.remarks
            this.input1=''
          })
      },
      methods:{
          sure(){
            this.$store.commit('input',this.input1)
            this.$router.push({name:'confirmOrder'})
          }
      }
    }
</script>

<style scoped>
.p1{
  margin-top: 0.7rem;
}
  .a1{
       width: 1.8rem;
       height: 0.3rem;
       border-radius: 0.08rem;
       margin-top: 0.1rem;
       padding-top: 0.1rem;
       padding-left: 0.1rem;
      border: 0.01rem solid blue;
    margin-left: 0.2rem;
    overflow: hidden;
  }.a1>div+div{
        margin-left: 0.1rem;
        border-left: 1px solid red;
         padding-left: 0.05rem;
     }
  .a2{
    width: 0.7rem;
    height: 0.3rem;
    border: 1px solid blue;
    padding-top: 0.1rem;
    border-radius: 0.07rem;
    margin-top: -0.3rem;
    margin-right: 0.6rem;
    padding-left: 0.05rem;
    border-radius: 0.08rem;
  }
  .a3{
    width: 0.7rem;
    height: 0.3rem;
    border: 1px solid blue;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    padding-left: 0.05rem;
    border-radius: 0.08rem;
  }
  .a4{
    width: 0.7rem;
     height: 0.3rem;
    border: 1px solid blue;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    border-radius: 0.08rem;
  }
  .a5{
    width: 0.7rem;
    height: 0.3rem;
    border: 1px solid blue;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    border-radius: 0.08rem;
  }
  .a6{
    width: 1rem;
    height: 0.3rem;
    margin-top: 0.5rem;
    border: 1px solid blue;
    margin-left: 0.2rem;
    padding-top: 0.1rem;
    padding-left: 0.1rem;
    border-radius: 0.08rem;
  }
  .a6>div+div{
   margin-left: 0.1rem;
    border-left:0.01rem solid blue;
    padding-left: 0.05rem;
  }
  .end{
    margin-top: 0.3rem;
  }
  .input{
    width: 100%;
    height: 1.5rem;
  }
.determine{
  width: 100%;
  background-color: #4cd964;
  text-align: center;
  line-height: 0.4rem;
  border-radius: 0.05rem;
}
</style>
