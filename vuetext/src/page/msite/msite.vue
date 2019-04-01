<template>
  <section>
    <swiper  v-if="swiperSlides" :options="swiperOption">
      <swiper-slide v-for="swiper in swiperSlides":key="swiper[0].id">
          <router-link v-for="(item,index) in swiper" :to="{name:'food'}" :key="index">
            <div @click="$store.commit('getFoodKind',index)">
              <img :src=" http+item.image_url" alt="">
              <p>{{item.title}}</p>
            </div>
          </router-link>
      </swiper-slide>
    </swiper>
    <shoplist></shoplist>
    <div v-if="show" id="elmloading">
      <div class="imgbox">
        <div class="img">
        </div>
      </div>
      <div class="loadfoot">
        <span class="footspan"></span>
      </div>
    </div>
  </section>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Vue from 'vue'
  import Shoplist from "../../components/common/shoplist";
    export default {
      name: "msite",
      components: {
        Shoplist,
        swiper,
        swiperSlide
      },
      data() {
        return {
          show:true,
          arr1: [],
          arr2: [],
          shoplist: [],
          swiperSlides: null,
          http: 'https://fuss10.elemecdn.com',
          swiperOption: {
            // notNextTick: true,
            loop: true,
            // direction: 'horizontal',
            grabCursor: true,
            initialSlide: 0
          }
        }
      },
      mounted () {
        var that=this
      Vue.axios.get('https://elm.cangdu.org/v2/index_entry',null).then((response) => {
        this.show=false
        for (let i=0;i<response.data.length/2;i++) {
          that.arr1.push(response.data[i])
        }
        for (let j=8;j<response.data.length;j++) {
          that.arr2.push(response.data[j])
        }
        that.swiperSlides = [that.arr1,that.arr2];
      }),
        Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.hou.latitude}&longitude=${this.$store.state.hou.longitude}`,null).then(reponse => {
          that.shoplist = reponse.data;
        })
      },
      beforeRouteEnter(to,from,next){
        next(vm=>{
          vm.$store.commit('ispron',true)
          vm.$store.state.zhang.change1 = false
          vm.$store.commit('isretreat', false)
          vm.$store.commit('isfoot',true)
          vm.$store.commit('changecity1',{name1:'',bull:''})
          console.log('城市',vm.$store.state.zhang.city)
          vm.$store.commit('changeCity',{name:vm.$store.state.zhang.city,bull:''})
        })
        },

      created(){
        this.show=false
        //开启个人中心
        this.$store.commit('ispron',true)
        this.$store.state.zhang.change1 = false
        this.$store.commit('isretreat', false)
        this.$store.commit('isfoot',true)
      },
      beforeRouteLeave(to,from,next){
        this.$store.commit('ispron',false)
        next()
      }
    }

</script>

<style scoped>
  .swiper-container{
    width: 100%;
    height: 2rem;
    border: 1px solid gray;
  }
.swiper-slide{
  display: flex;
  flex-wrap: wrap;
}
.swiper-slide a{
  width: 25%;
  height: 1rem;
}
 .swiper-slide img{
   width: 100%;
   height: 0.8rem;
 }
  .swiper-slide p{
    width: 100%;
    height: 0.1rem;
    text-align: center;
  }
  #elmloading{
    width: 50px;
    height:130px;
    position:fixed;
    top: 50%;
    left: 50%;
    margin-top: -65px;
    margin-left: -25px;
    z-index:100;
  }
  .imgbox{
    width: 50px;
    height: 50px;
    animation: myfirst 0.8s infinite;
  }
  .img{
    height: 100%;
    width: 100%;
    background: url('https://raw.githubusercontent.com/bailicangdu/vue2-elm/master/src/images/icon_loading.png') no-repeat;
    background-size:100%;
    animation: myf 5.6s infinite;
  }
  .loadfoot{
    height: 20px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
  }
  .footspan{
    display: inline-block;
    height: 10px;
    width: 20px;
    margin: 5px 0px;
    border-radius: 50%;
    animation: foot 0.8s infinite;
    background: radial-gradient(#7E7E7E, #EDEDED);
  }

  @keyframes myfirst {
    0% {margin-top:0px;}
    50% {margin-top:50px;}
    100% {margin-top:0px;}
  }
  @keyframes myf {
    0% {background-position:0% 0%;}
    14.2% {background-position:0% 0%;}
    14.2001% {background-position:0% 16%;}
    28.4% {background-position:0% 16%;}
    28.4001% {background-position:0% 33%;}
    42.6% {background-position:0% 33%;}
    42.6001% {background-position:0% 50%;}
    56.8% {background-position:0% 50%;}
    56.8001% {background-position:0% 67%;}
    71% {background-position:0% 67%;}
    71.0001% {background-position:0% 84%;}
    85.2% {background-position:0% 84%;}
    85.2001% {background-position:0% 100%;}
    100% {background-position:0% 100%;}
  }
  @keyframes foot {
    0% {width:20px;}
    50% {width:100%;}
    100% {width:20px;}
  }
</style>
