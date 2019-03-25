<template>
  <section>

    <swiper  v-if="swiperSlides" :options="swiperOption">
      <swiper-slide v-for="swiper in swiperSlides":key="swiper[0].id">
          <div v-for="item in swiper">
            <img :src=" http+item.image_url" alt="">
            <p>{{item.title}}</p>
          </div>
      </swiper-slide>
    </swiper>
    <div>
      <div class="shop">
        <div class="shopRoot" v-for="item in shoplist">
          <div class="shopL"><img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" alt=""></div>
          <div class="shopC">
            <div class="top1"><span>品牌</span><span>{{item.name}}</span></div>
            <div>月售100单</div>
            <p>20起送/{{item.piecewise_agent_fee.tips}}</p>
          </div>
          <div class="shopR">
            <p>保准票</p>
            <div><span>{{item.delivery_mode.text}}</span><span>{{item.supports[1].name}}</span></div>
            <p>1447.2公里/{{item.order_lead_time}}</p>
          </div>
        </div>
        </div>
    </div>
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
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762',null).then(reponse => {
          that.shoplist = reponse.data;
        })
      }
    }

</script>

<style scoped>
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
  .shop{
    width: 100%;
    margin-top: 0.2rem;
  }
  .shopL{
    width: 20%;
    height: 100%;
  }
  .shopL img{
    width: 100%;
  }
  .shopC{
    width: 40%;
    height: 100%;
  }
  .shopR{
    width: 40%;
    height: 100%;
  }
  .top1 span:nth-child(1){
    background-color: yellow;
    padding-right:0.1rem;
  }
.top1 span:nth-child(2){
  padding-left:0.1rem ;
  font-size: 0.2rem;
}
  .shopR p:nth-child(1){
    text-align: right;
  }
  .shopR div{
    text-align: right;
  }
  .shopR div span:nth-child(1){
    background-color: deepskyblue;
  }
.shopR div span:nth-child(2){
  border: 1px solid blue;
  margin-left: 0.1rem;
}
  .shopRoot{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem solid gray;
  }
</style>
