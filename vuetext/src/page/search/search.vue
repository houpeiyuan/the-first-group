<template>
    <!--搜索页-->
  <section>
   <div class="sum">
     <input v-model="inputval" class="cityinput" required placeholder="输入商务楼，学校，地址">
     <button class="submit" @click="getS">提交</button>
     <div class="main">
         <div class='maintop fs0-8 padlr10'>搜索历史</div>
           <div v-for="" class="pad10 after"@click="">
             <div class="nowarp"></div>
           </div>
           <div @click='' class="clearall ih30 pad10 col9f">
             清空所有
           </div>
         <div v-for="item in list" @click="" class="pad10 after">
           <img :src="'https://elm.cangdu.org/img/'+ item.image_path" alt="" class="picture">
           <div class="frist">
             <p class="nowarp">{{item.name}}</p>
             <p class="nowarp">月销售:{{item.recent_order_num}}</p>
             <div>{{item.float_minimum_order_amount}}元起送/距离{{item.distance}}</div>
             <p class="box"></p>
           </div>
           <hr>
       </div>
       </div>
   </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  import { Toast } from 'mint-ui';
    export default {
      name: "search",
      data() {
        return {
          inputval:'',//输入框的值
          list:[]//搜索返回的结果
        }
      },
      mounted() {
        //生命函数
      },
      computed: {
        //计算属性
      },
      methods: {
        getS() {
          if (this.inputval == '') {
            Toast('请输入内容');
          } else {
            Vue.axios.get('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=' + this.inputval).then((res) => {
               this.list=res.data;
              console.log(res)
            });
          }
        },
      }
  }


</script>

<style scoped>
  .sum{
    width: 100%;
    height: .8rem;
    background-color: ghostwhite;
    padding-top: 0.2rem;
  }
  .cityinput{
    width:70%;
    height:40px;
    margin-left:10px;
    border: 1px solid black;
  }
  .submit{
    color:white;
    border-radius:3px;
    width:20%;
    height: 0.4rem;
    margin-left:10px;
    background-color: blue;
    border: 1px solid black;
  }
  .main{
    border-top:2px solid #E4E4E4;
  }
  .picture{
    width: 0.4rem;
    height: 0.5rem;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
  }
  .box{
    width: 100%;
   border-bottom: 1px solid lightgrey;
  }
  .frist{
    margin-top: -0.4rem;
    margin-left: 0.8rem;
  }
</style>
