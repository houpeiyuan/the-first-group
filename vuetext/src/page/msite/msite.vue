<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <div v-for="item in arr1">
        <img :src="item.image_url" alt="">
        <p>{{item.title}}</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div v-for="item in arr2">
        <img :src="item.image_url" alt="">
        <p>{{item.title}}</p>
      </div>
    </swiper-slide>
  </swiper>

</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Vue from 'vue'
    export default {
      name: "msite",
      components: {
        swiper,
        swiperSlide
      },
      data() {
        return {
          arr: '',
          arr1: '',
          arr2: '',
          swiperOption: {
            notNextTick: true,
            loop: true,
            direction: 'horizontal',
            speed: 800,
            initialSlide: 0,
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: true
            }
          }
        }
      },
      created () {
      Vue.axios.get('https://elm.cangdu.org/v2/index_entry',null).then((response) => {
        for (let i=0;i<response.data.length/2;i++) {
          this.arr1.push(response.data[i])
        }
        for (let i=4;i<response.data.length/2;i++) {
          this.arr2.push(response.data[i])
        }
      }),
        Vue.axios.get('',null).then((response) =>{})
      }
    }
</script>

<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.min.css";
  .swiper-container{
    width: 100%;
    height: 2rem;
    border: 1px solid gray;
  }
.swiper-slide{
  display: flex;
  flex-wrap: wrap;
}
.swiper-slide div{
  width: 25%;
  height: 1rem;
}
 .swiper-slide img{
   width: 100%;
   height: 0.8rem;
 }
  .swiper-slide p{
    width: 100%;
    height: 0.2rem;
    text-align: center;
  }
</style>
