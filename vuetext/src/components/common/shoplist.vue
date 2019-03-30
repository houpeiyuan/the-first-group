<template>
<!--msite和shop页面的餐馆列表公共组件-->
  <div class="rootShop">
    <div class="shop">
      <router-link :to="{path:'/shop'}">
        <div class="shopRoot" v-for="item in shoplist" @click="$store.commit('changeId',item.id)">
          <div class="shopL"><img :src="'https://elm.cangdu.org/img/'+item.image_path" alt=""></div>
          <div class="shopC">
            <div class="top1"><span>品牌</span><span>{{item.name}}</span></div>
            <div><el-rate
              v-model="item.rating"
              disabled
              show-score
              text-color="#000"
              score-template="{value}">{{item.rating}}
            </el-rate><span class="mouseSale">月售{{item.rating_count}}单</span></div>
            <p>{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</p>
          </div>
          <div class="shopR">
            <p class="borderF">
              <span class="border" v-for="sup in item.supports">{{sup.icon_name}}</span>
            </p>

            <div><span>蜂鸟快递</span><span>准时达</span></div>
            <p class="kmRight">{{item.distance}}  {{item.order_lead_time}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
    export default {
        name: "shoplist",
        data() {
          return {
            value5: 3.7,
            shoplist: [],
            latitude: '31.22967',
            longitude: '121.4762'
          }
        },
      created() {
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude='+this.latitude+'&longitude='+this.longitude+'&order_by=4',null).then(res => {
          console.log(res.data)
          this.shoplist = res.data
          console.log(this.$store.state.zhang.id)
        })
      }
    }
</script>

<style scoped>
  .rootShop{
    width:100%;
    overflow: auto;
  }
  .shop{
    width: 100%;
    margin-top: 0.2rem;
  }
  .shopL{
    width: 15%;
    height: 100%;
  }
  .shopL img{
    width: 100%;
    margin: 0.1rem 0rem 0 0;
  }
  .shopC{
    width: 40%;
    height: 100%;
    margin: 0.1rem 0 0 0.1rem;
  }
  .shopR{
    width: 40%;
    height: 100%;
  }
  .top1{
    width: 2rem;
  }
  .top1 span:nth-child(1){
    background-color: gold;
    text-align: center;
    display: inline-block;
    border-radius: 0.01rem;
    color: black;
    width: 0.4rem;
    height: 0.2rem;
    line-height: 0.2rem;
  }
  .top1 span:nth-child(2){
    padding-left:0.1rem ;
    font-size: 0.2rem;
    color: black;
    font-weight: 900;
    width:1.2rem;
  }
  .top1>div>p{
    color: black;
    font-size: 0.10rem;
  }
  .shopR p:nth-child(1){
    text-align: right;
  }
  .shopR div{
    text-align: right;
    margin: 0rem 0.05rem 0.1rem 0;
  }
  .shopR div span:nth-child(1){
    background-color: blue;
    color: white;
    font-size: 0.1rem;
    padding: 0.02rem;
    margin-right: -0.05rem;
  }
  .shopR div span:nth-child(2){
    border: 1px solid blue;
    margin-left: 0.1rem;
    font-size: 0.1rem;
    padding: 0.02rem;
    color: green;
  }
  .shopRoot{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid gray;
    vertical-align: middle;
  }
  .mouseSale{
    font-size: 0.10rem;
    color: black;
  }
  .border{
    font-size: 0.12rem;
    text-align: center;
    display: inline-block;
    border: 0.01rem solid #e4e4e4;
    color: black;
    margin: 0.025rem;
  }
  .borderF{
    height: 0.25rem;
  }
  .kmRight{
    height: 0.2rem;
    text-align: right;
    margin-right: 0.2rem;
  }
</style>
<style>
  .el-rate{
    margin-right: 0.1rem;
    display: inline-block;
  }
  .el-rate__icon, .el-icon-star-on{
    font-size: 0.10rem;
  }
  .el-rate__item{
    width: 0.10rem;
  }
  .el-rate__text{
    font-size: 0.10rem;
    margin-left: 0.1rem;
  }
</style>
