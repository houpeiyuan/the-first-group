<template>
<div id="shop">
  <div v-if="isbull" class="black">
    <h2 class="title">{{shop.name}}</h2>
    <div>

    </div>
    <p>优惠信息</p>
    <div v-for="item in shop.activities">
      <p class="left1">
        <span :style="{backgroundColor:'#'+item.icon_color}">{{item.icon_name}}</span>
        <span>{{item.description}}(App专享)</span>
      </p>
    </div>
    <p>商家公告</p>
    <p class="left1">{{shop.promotion_info}}</p>
    <div @click="isbull = !isbull" class="cical">x</div>
  </div>
  <span class="restreat" @click="$router.go(-2)"><</span>
  <section>
    <div class="left">
      <img :src="http+shop.image_path" alt="">
    </div>
    <div class="right">
      <p>{{shop.name}}</p>
      <p>商家配送/分钟送达</p>
      <p>公告:{{shop.promotion_info}}</p>
    </div>
    <div class="btm" v-if="bul">
    <p v-if="0!==shop.activities.length">{{shop.activities[0].description}}(APP专享)</p>
    <p v-show="0!==shop.activities.length" @click="isbull=!isbull">{{shop.activities.length}}个活动</p>
  </div>

  </section>
  <div class="rout">
    <div>
      <router-link :to="{path:'/shop/foodDetail'}">商品</router-link>
    </div>
    <div>
      <router-link :to="{path: '/shop/shopDetail'}">评价</router-link>
    </div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "shop",
      data(){
          return{
           http:'https://elm.cangdu.org/img/',
            shop:[],
            bul:'',
            isbull:false
          }
      },
      methods:{
        goods(){
          this.$router.push({name:'foodDetail'})
        }
      },
      beforeRouteEnter(to,from,next){
          next(
            vm=>{
              vm.$store.commit('ishead', false)
              vm.$store.commit('isfoot', false)
            }
          )
      },
      created(){
        this.$store.commit('ishead', false)
        this.$store.commit('isfoot', false)
          var that=this
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/'+that.$store.state.zhang.id,null).then((response)=>{
            that.shop=response.data
            console.log(response.data)
          if (response.data.activities.length==0){
            that.bul=false
          } else {
            that.bul=true
          }
            this.goods();
          })
      },
      beforeRouteLeave(to,from,next){
        this.$store.commit('ishead', true)
        this.$store.commit('isfoot',true)
        next()
      }
    }
</script>

<style scoped>
  .title{
    margin-top: 0.3rem;
  }
  .black{
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    top: 0;
    z-index: 222;
    text-align: center;
  }
  .black>p{
    margin-top: 0.2rem;
  }
  .left1{
    margin-left: 0.3rem;
    margin-top: 0.1rem;
    text-align: left;
    color: white;
  }
  .cical{
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0.2rem;
    border: 0.01rem solid white;
    left:1.745rem;
    font-size: 0.25rem;
    color: white;
    font-weight: 300;
  }
  .restreat{
    font-size: 0.3rem;
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
    color: white;
    z-index: 999;
  }
  #shop{
    margin-top: -0.49rem;
    width: 100%;
    height: 100%;
  }
section{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color:darksalmon;
}
  .left{
    width: 30%;
    height: 0.8rem;
  }
  .left>img{
    width: 100%;
    height: 100%;
  }
  .right{
    width: 70%;
    height: 0.8rem;
  }
  .right>p:nth-child(1){
    width: 100%;
    height: 0.3rem;
    font-size: 0.18rem;
  }
.right>p:nth-child(2){
  width: 100%;
  height: 0.2rem;
}
.right>p:nth-child(3){
  width: 100%;
  height: 0.3rem;
  font-size: 0.12rem;
}
section>p{
  width: 100%;
  height: 0.3rem;
}
  .btm{
    width: 100%;
    display: flex;
  }
  .btm>p:nth-child(1){
    width: 70%;
    height: 0.3rem;
    font-size: 0.12rem;
  }
  .btm>p:nth-child(2){
    width: 30%;
    font-size: 0.12rem;
    height: 0.3rem;
  }
  .rout{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .rout>div{
    width: 50%;
    font-size: 0.3rem;
    text-align: center;
  }
</style>
