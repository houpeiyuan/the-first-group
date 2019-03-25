<template>
  <section>
    <swiper :options="swiperOption">
      <swiper-slide>
          <div v-for="item in arr1">
            <img :src=" http+item.image_url" alt="">
            <p>{{item.title}}</p>
          </div>
      </swiper-slide>
      <swiper-slide>
          <div v-for="item in arr2">
            <img :src='http+item.image_url' alt="">
            <p>{{item.title}}</p>
          </div>
      </swiper-slide>
    </swiper>
  </section>
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
          arr1: [],
          arr2: [],
          http: 'https://fuss10.elemecdn.com',
          swiperOption: {
            notNextTick: true,
            loop: false,
            direction: 'horizontal',
            grabCursor: true,
            initialSlide: 0
          }
        }
      },
      created () {
        var that=this
      Vue.axios.get('https://elm.cangdu.org/v2/index_entry',null).then((response) => {
        for (let i=0;i<response.data.length/2;i++) {
          that.arr1.push(response.data[i])
        }
        for (let i=0;i<response.data.length/2;i++) {
          that.arr2.push(response.data[i])
        }
      })
      }
    }

</script>

<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.min.css";
section{
  padding-top: 0.55rem;
}
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
    height: 0.1rem;
    text-align: center;
  }
</style>
