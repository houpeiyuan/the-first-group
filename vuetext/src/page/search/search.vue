<template xmlns="http://www.w3.org/1999/html">
    <!--搜索页-->
  <section>
   <div class="sum">
     <input v-model="inputval" class="cityinput" required placeholder="输入商务楼，学校，地址">
     <button class="submit" @click="getS">提交</button>
     <div class="main">
         <div class='maintop fs0-8 padlr10' v-if="getHistory[0]" v-show="isshow1">
           <h4 style="margin-bottom: 0.3rem">搜索历史</h4>
           <h4 v-for="(item,index) in getHistory" @click="searchMsg(index)"  class="pad10 after nowarp">{{item}} <hr/></h4>
         </div>
           <p @click='deleteH' v-show="isshow" class="clearall ih30 pad10 col9f">
             清空搜索历史
           </p>
         <div v-for="item in list" @click="pushLocation(item.id)" class="pad10 after">
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
          list:[],
          isshow:false,
          isshow1:false//搜索返回的结果,
        }
      },
      created(){
        if(this.$store.state.zhang.history[0]){
          this.isshow1 = true
          this.isshow = true
        }
      },
      mounted() {
        //生命函数
      },
      computed: {
        //计算属性
        getHistory(){
          return this.$store.state.zhang.history
        }
      },
      beforeRouteEnter(to,from,next){
        next(
          vm=>{
            vm.$store.commit('isfoot',true)
            vm.$store.commit('changecity1', {name1:'搜索',bull:""})
            vm.isshow1 = true
          }
        )
      },
      beforeRouteLeave(to,from,next){
        this.$store.commit('isfoot',false)
        this.$store.commit('changecity1', {name1:'',bull:""})
        next()
      },
      methods: {
        pushLocation(id){
          this.$store.commit('changeId',id)
          this.$router.push({name:'shop'})
        },
        searchMsg(i){
          this.inputval = this.$store.state.zhang.history[i]
          setTimeout(this.getS,500)
        },
        deleteH(){
          this.$store.state.zhang.history = []
          this.isshow1 = false
          this.isshow = false
        },
        getS() {
          if (this.inputval == '') {
            Toast('请输入内容');
          } else {
            Vue.axios.get('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=' + this.inputval).then((res) => {
               this.list=res.data;
              console.log(res)
            });
           this.$store.state.zhang.history.push(this.inputval)
            this.isshow1 = false
            this.isshow = false
          }
        },
      }
  }


</script>

<style scoped>
  .clearall{
    text-align: center;
  }
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
