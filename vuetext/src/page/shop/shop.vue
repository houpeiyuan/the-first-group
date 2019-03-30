<template>
<div id="shop">
  <span class="restreat" @click="$router.go(-1)"><</span>
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
    <p>{{shop.activities[0].description}}(APP专享)</p>
    <p>1个活动</p>
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
            bul:''
          }
      },
      created(){
          this.$store.commit('ishead', false)
          this.$store.commit('isfood', false)
          var that=this
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/'+that.$store.state.zhang.id,null).then((response)=>{that.shop=response.data
          if (response.data.activities.length==0){
            that.bul=false
          } else {
            that.bul=true
          }
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
