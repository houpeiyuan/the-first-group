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

</style>
