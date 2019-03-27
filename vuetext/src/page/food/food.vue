<template>
<!--食品筛选排序页-->
<div>
   <!--分类列表-->
   <div class="selectFood">
     <div class="goodFood">
       <span @click="changeStyle1" :class="{span:isTrue1}">{{goodFood}}
   <span class="span1" :class="{reverse:isTrue1}">▼</span>
   </span></div>
     <div  class="rank">
       <span :class="{span:isTrue2}" @click="changeStyle2">排序
   <span :class="{reverse:isTrue2}">▼</span>
   </span></div>
     <div  class="sizer">
       <span :class="{span:isTrue3}" @click="changeStyle3">筛选
   <span :class="{reverse:isTrue3}">▼</span>
   </span></div>
   </div>


   <div >
     <!-- 食品列表左 -->
     <div v-show="isTrue1_1" class="shop1">
       <transition name="shopTransite">
         <div class="listClass" v-if="isTrue1">

           <li class="shopListLeft">
             <div v-for="(item,index) in listClass" :key="index">
               <p @click="changePColor(index)" :style="{backgroundColor:index===isblue?'lightblue':'lightgreen'}">
                 <img :src="item.image_url.slice(-4).endsWith('png')===true?http+item.image_url+'.png':http+item.image_url+'.jpeg'" alt="">
                 <span class="shopName">{{item.name}}</span>
                 <span class="count">{{item.count}}</span>
                 <span> ></span>
               </p>
             </div>
           </li>
           <!--食品列表-->
           <li class="listShopRight">
             <p v-for="(item,index) in snackArr" v-if="index===0?false:true" class="rightList" @click="getShopName(item)" :key="index">
               <span>{{item.name}}</span>
               <span>{{item.count}}</span>
             </p>
           </li>
         </div>
       </transition>
     </div>



     <!--排序-->
     <div v-show="isTrue2_1">
       <transition name="shopTransite">
         <div class="sort" v-if="isTrue2">
           <div @click="changeStyle2" class="shopList">
             <div @click="chooseFocus(1)">
               <i class="iconfont iconfont1">&#xe621;</i>
               <p>
                 <span>智能排序</span>
                 <span v-show="index===1">✔</span>
               </p>
             </div>
             <div @click="chooseFocus(2)">
               <i class="iconfont iconfont1">&#xe696;</i>
               <p>
                 <span>距离最近</span>
                 <span v-show="index===2">✔</span>
               </p>
             </div>
             <div @click="chooseFocus(3)">
               <i class="iconfont iconfont2" >&#xe602;</i>
               <p>
                 <span>销量最高</span>
                 <span v-show="index===3">✔</span>
               </p>
             </div>
             <div @click="chooseFocus(4)">
               <i class="iconfont iconfont3">&#xe60f;</i>
               <p>
                 <span>起送价最低</span>
                 <span v-show="index===4">✔</span>
               </p>
             </div>
             <div @click="chooseFocus(5)">
               <i class="iconfont iconfont1">&#xe601;</i>
               <p>
                 <span>配送速度最快</span>
                 <span v-show="index===5">✔</span>
               </p>
             </div>
             <div @click="chooseFocus(6)">
               <i class="iconfont iconfont3">&#xe63b;</i>
               <p>
                 <span>评分最高</span>
                 <span v-show="index===6">✔</span>
               </p>
             </div>
           </div>
         </div>
       </transition>
     </div>
      <div v-show="isTrue3_1" class="delivery">
        <transition name="shopTransite">
          <div v-if="isTrue3">
            <div class="distribution shopList">
              <p>配送方式</p>
              <div class="bird">
                <i class="iconfont iconfontbird">&#xe631;</i>
                <span>蜂鸟专送</span>
              </div>
              <p>商家属性 (可以多选)</p>
                <ul>
                  <li class="bird" @click="sign1=!sign1">
                    <span v-if="sign1" class="duihao">✔</span>
                    <span v-if="!sign1" class="sign">品</span>
                    <span>品牌商家</span>
                  </li>
                  <li class="bird" @click="sign2=!sign2">
                    <span v-if="sign2" class="duihao">✔</span>
                    <span v-if="!sign2" class="sign">保</span>
                    <span>外卖保</span>
                  </li>
                  <li class="bird" @click="sign3=!sign3">
                    <span v-if="sign3" class="duihao">✔</span>
                    <span class="sign" v-if="!sign3" @click="sign3">准</span>
                    <span>准时达</span>
                  </li>
                  <li class="bird" @click="sign4=!sign4">
                    <span v-if="sign4" class="duihao">✔</span>
                    <span v-if="!sign4" class="sign">新</span>
                    <span>新店</span>
                  </li>
                  <li class="bird" @click="sign5=!sign5">
                    <span v-if="sign5" class="duihao">✔</span>
                    <span v-if="!sign5" class="sign">付</span>
                    <span>在线支付</span>
                  </li>
                  <li class="bird" @click="sign6=!sign6">
                    <span v-if="sign6" class="duihao">✔</span>
                    <span v-if="!sign6" class="sign">开</span>
                    <span>开发票</span>
                  </li>
                </ul>
              <button class="btn-default">清空</button>
              <button class="btn-success">确认 <span v-if="count!==0">({{count}})</span> </button>
            </div>

          </div>
        </transition>
      </div>
   </div>
 </div>
</template>
▼
<script>
  import Vue from  'vue'
    export default {
      name: "food",
      data() {
        return {
          goodFood: '美食',
          isTrue1: false,
          isTrue1_1:true,
          isTrue2: false,
          isTrue2_1:true,
          isTrue3: false,
          isTrue3_1:true,
          selected: '',
          listClass: [],
          http:'https://fuss10.elemecdn.com/',
          isblue:1,
          snackArr: [],
          bull: true,
          isShopList: false,
          isSortList: true,
          index: -1,
          sign1:false,
          sign2:false,
          sign3:false,
          sign4:false,
          sign5:false,
          sign6:false,
          count:0
        }
      },
      created() {
        Vue.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category",null).then(res=>{
          this.listClass = res.data
        })
      },
      methods: {
        changeStyle1() {
          this.goodFood = '分类'
          this.isTrue1_1 = true
          this.isTrue1 = !this.isTrue1
          this.isTrue2 = false
          this.isTrue2_1 = false
          this.isTrue3_1 = false
          this.isTrue3 = false
          this.changePColor(1)
        },
        changeStyle2() {
          this.isTrue1_1 = false
          this.isTrue1 = false
          this.isTrue3 = false
          this.isTrue3_1 = false
          this.isTrue2_1 = true
          this.isTrue2 = !this.isTrue2
        },
        changeStyle3() {
          this.isTrue1 = false
          this.isTrue1_1 = false
          this.isTrue2 = false
          this.isTrue2_1 = false
          this.isTrue3_1 = true
          this.isTrue3 = !this.isTrue3
        },
        changePColor(index){
          this.isblue = index
     this.snackArr = this.listClass[index].sub_categories
        },
        getShopName(item){
          this.goodFood = item.name
          this.isTrue1_1 = false
          this.isTrue1 = !this.isTrue1
        },
        chooseFocus(i){
          this.index = i
        },
      }
    }
</script>

<style scoped>

  .selectFood{
    margin-top: 0.5rem;
    background-color: lightgrey;
    height: 0.5rem;
    line-height: 0.5rem;
    position: relative;
    z-index: 2;
    width: 100%;
  }
  .goodFood,.rank,.sizer{
    width: 31%;
    height: 0.4rem;
    display: inline-block;
    text-align: center;
    margin-top: 0.05rem;
    border-right: 0.01rem solid #ddd;
    border-right-height:0.2rem ;
    color: black;
    position: relative;
  }
  .shopTransite-enter-active{
    transition: all .5s linear;
  }
  .shopTransite-leave-active{
    transition: all .3s linear;
  }
  .shopTransite-enter-to,.shopTransite-leave{
    position: absolute;
    top:1rem;
    opacity: 1;
    z-index: 0;
  }
  .shopTransite-enter,.shopTransite-leave-to{
    position: absolute;
    top:-6rem;
    opacity: 0;
    z-index: 0;
  }
  .span{
    color: blue;
  }
  .sizer{
    border: none;
  }
  .reverse{
    display: inline-block;
    transition: all .3s linear;
    transform: rotateZ(180deg);
  }
  span{
    font-size: larger;
    display: inline-block;
  }
  .span1{
    transition: all .3s linear;
  }
  .shopName{
    padding: 0.2rem 0.1rem 0.2rem 0rem;
  }
  .listClass{
    width: 100%;
  }
  .count{
    background-color: #90B4FC;
    width: 0.3rem;
    height: 0.13rem;
    font-size: 0.12rem;
    border-radius: 0.13rem;
    text-align: center;
    margin-right: 0.1rem;
  }
  img{
    width: 0.2rem;
    margin: 0 0.1rem;
  }
  .shopList{
    width: 100%;
  }
  .shopListLeft{
    width:50%;
    background-color: lightgreen;
    float: left;
    height:5.04rem;
  }
  .listShopRight{
    background-color: lightblue;
    width: 50%;
    float: left;
    height:5.0888rem;
    overflow: auto;
  }
  .listShopRight::-webkit-scrollbar{
    display: none;
  }
  .rightList{
    display: flex;
    justify-content: space-between;
    border-bottom: 0.02rem solid grey;
  }
  .rightList>span{
    font-size: 0.16rem;
    margin: 0.2rem 0.05rem 0.2rem 0.05rem;
  }
  .sort p>span+span{
    color: blue;
    display: inline-block;
    padding-left: 3rem;

  }
  @font-face {
    font-family: 'iconfont';  /* project id 1105957 */
    src: url('//at.alicdn.com/t/font_1105957_5bnd27vkirr.eot');
    src: url('//at.alicdn.com/t/font_1105957_5bnd27vkirr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1105957_5bnd27vkirr.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1105957_5bnd27vkirr.woff') format('woff'),
    url('//at.alicdn.com/t/font_1105957_5bnd27vkirr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1105957_5bnd27vkirr.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    padding: 0.2rem 0 0.2rem 0rem;
    font-size: 0.2rem;
  }
  .iconfont1{
    color: blue;
  }
  .iconfont2{
    color: red;
  }
  .iconfont3{
    color: gold
  }
  .sort{
    background-color: lightgrey;
    width: 100%;
  }
  .sort>div>div>p{
    border-bottom: 0.01rem solid #e4e4e4;
    height: 0.5rem ;
    width: 90%;
    margin: auto 0.1rem;
    line-height: 0.5rem ;
  }
  .sort>div>div{
    margin-left: 0.1rem;
    width: 90%;
    display: flex;
  }
  .iconfontbird{
    color: blue;
  }
  .bird{
    width: 31%;
    border: 0.02rem solid #e4e4e4;
    border-radius: 0.05rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin:-0.1rem 0 0.2rem 0.05rem;
    display: inline-block;
    font-size: 0.12rem;
  }
  .bird:nth-child(1)>.sign:nth-child(1){
    border:0.01rem solid blue;
    display: inline-block;
    padding: 0 0 0.25rem 0.03rem;
    width: 0.25rem;
    height: 0.25rem;
    color: green;
    line-height: 0.26rem;
    margin-left: 0.05rem;
    border-radius: 0.03rem;
  }
  .bird:nth-child(2)>.sign:nth-child(1){
    border:0.01rem solid grey;
    display: inline-block;
    padding: 0 0 0.25rem 0.03rem;
    width: 0.25rem;
    height: 0.25rem;
    color: grey;
    line-height: 0.26rem;
    margin-left: 0.05rem;
    border-radius: 0.03rem;
  }
  .bird:nth-child(3)>.sign:nth-child(1){
    border:0.01rem solid blue;
    display: inline-block;
    padding: 0 0 0.25rem 0.03rem;
    width: 0.25rem;
    height: 0.25rem;
    color: green;
    line-height: 0.26rem;
    margin-left: 0.05rem;
    border-radius: 0.03rem;
  }
  .bird:nth-child(4)>.sign:nth-child(1){
    border:0.01rem solid red;
    display: inline-block;
    padding: 0 0 0.25rem 0.03rem;
    width: 0.25rem;
    height: 0.25rem;
    color: green;
    line-height: 0.26rem;
    margin-left: 0.05rem;
    border-radius: 0.03rem;
  }
  .bird:nth-child(5)>.sign:nth-child(1){
    border:0.01rem solid red;
    display: inline-block;
    padding: 0 0 0.25rem 0.03rem;
    width: 0.25rem;
    height: 0.25rem;
    color: green;
    line-height: 0.26rem;
    margin-left: 0.05rem;
    border-radius: 0.03rem;
  }
  .bird:nth-child(6)>.sign:nth-child(1){
    border:0.01rem solid grey;
    display: inline-block;
    padding: 0 0 0.25rem 0.03rem;
    width: 0.25rem;
    height: 0.25rem;
    color: grey;
    line-height: 0.26rem;
    margin-left: 0.05rem;
    border-radius: 0.03rem;
  }
  .distribution{
    padding: 0 0.15rem;
  }
  .distribution p{
    padding:0.2rem 0;
  }
  .delivery{
    background-color: lightblue;
  }
  .duihao{
    padding: 0 0 0.25rem 0.03rem;
    margin-left: 0.05rem;
    display: inline-block;
    color: blue;
    width: 0.25rem;
    height: 0.25rem;
  }
  button{
    width: 46%;
    height: 0.5rem;
    margin: 0.2rem 1%;
    border-radius: 0.1rem;
  }
</style>
