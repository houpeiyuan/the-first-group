<template>
<div class="wrap">
  <div class="box">
    <div class="left">
      <p v-for="(item,index) in arr" @click="list(item.id,index)" :style="{backgroundColor:id==item.id?'yellow':'green'}">{{item.name}}</p>
    </div>
    <div class="right">
      <p><span>{{arr[index].name}}</span>{{arr[index].description}}</p>
      <div class="new" v-for="food in arr[index].foods">
        <img :src="http+food.image_path" alt="">
        <div class="goShop">
          <p>{{food.name}}</p>
          <p>{{food.description}}</p>
          <p>{{food.tips}}</p>
          <div class="choose">
            <div>￥{{food.specfoods[0].price}}起</div>
            <div v-if="food.specifications.length?true:false">4 <button>{{food.specifications[0].name}}</button></div>
            <div v-else>4 加减</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  /*
  https://blog.csdn.net/weixin_42852657/article/details/84400324
   */
  import Vue from 'vue'
    export default {
        name: "foodDetail",
      data(){
          return {
            arr:[],
            id:'',
            index:'',
            http:'http://elm.cangdu.org/img/'
          }
      },
       created(){
          var that=this
          Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+that.$store.state.zhang.id,null).then((response)=>{console.log(response.data);that.arr=response.data; that.list(response.data[0].id,0)})
       },
      methods:{
        list(id,index){
          this.id=id
          this.index=index
        }
      }
    }
</script>

<style scoped>
.wrap{
  width: 200% !important;
  padding-top: 0.2rem;
}
  .box{
    width: 100%;
    display: flex;
  }
  .left{
    width: 30%;
    overflow: auto;
    height: 4.5rem;
  }
  /*隐藏滚动条*/
  .left::-webkit-scrollbar{
    display: none;
  }
  .right{
    width: 70%;
    overflow: auto;
    height: 4.5rem;
  }
  .right>p:nth-child(1){
    font-size: 0.16rem;
    text-align: left;
    overflow: hidden;
    padding: 0.1rem;
    box-sizing: border-box;
    background-color: #90B4FC;
  }
  .right span{
    font-size: 0.2rem;
    padding-right:0.2rem ;
  }
  .left>p{
    width: 100%;
    height: 0.3rem;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.3rem;
    border-bottom: 0.01rem solid gray;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
  }
  .new{
    width: 100%;
    height: 1rem;
    display: flex;
    font-size: 0.16rem;
    text-align: left;
    padding-top:0.1rem ;
  }
  .new>img{
    width: 20%;
    height: 100%;
  }
  .goShop{
    width: 80%;
    height: 100%;
  }
  .goShop>p{
    width: 100%;
    height:25% ;
  }
  .goShop>p:nth-child(1){
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
  }
  .choose{
    width: 100%;
    height: 25%;
    display: flex;
  }
  .choose>div:nth-child(1){
    width: 40%;
  }
  .choose>div:nth-child(2){
    width: 60%;
  }
</style>
