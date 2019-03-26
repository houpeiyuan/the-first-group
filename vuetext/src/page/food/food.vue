<template>
<!--食品筛选排序页-->
  <div>
   <!--分类列表-->
   <mt-navbar v-model="selected" class="selectFood">
     <mt-tab-item id="1" class="goodFood">
       <span @click="changeStyle1" :class="{span:isTrue1}">{{goodFood}}
   <span :class="{reverse:isTrue1}">▼</span>
   </span></mt-tab-item>
     <mt-tab-item id="2" class="rank">
       <span :class="{span:isTrue2}" @click="changeStyle2">排序
   <span :class="{reverse:isTrue2}">▼</span>
   </span></mt-tab-item>
     <mt-tab-item id="3" class="sizer">
       <span :class="{span:isTrue3}" @click="changeStyle3">筛选
   <span :class="{reverse:isTrue3}">▼</span>
   </span></mt-tab-item>
   </mt-navbar>

   <!-- tab-container -->
   <mt-tab-container v-model="selected" >
     <mt-tab-container-item class="listClass" id="1">
       <ul class="shopList">
         <li class="shopListLeft">
           <div v-for="(item,index) in listClass">
             <p @click="changePColor(index)" :style="{backgroundColor:index===isblue?'lightblue':'lightgreen'}">
               <img :src="item.image_url.slice(-4).endsWith('png')===true?http+item.image_url+'.png':http+item.image_url+'.jpeg'" alt="">
               <span class="shopName">{{item.name}}</span>
               <span class="count">{{item.count}}</span>
               <span> ></span>
             </p>
           </div>
         </li>

         <li class="listShopRight">
           <p v-for="item in snackArr">
             <span>{{item.name}}</span>
             <span>{{item.count}}</span>
           </p>
         </li>
       </ul>
     </mt-tab-container-item>
     <mt-tab-container-item id="2">
       <mt-cell v-for="n in 4" :title="'content ' + n" />
     </mt-tab-container-item>
     <mt-tab-container-item id="3">
       <mt-cell v-for="n in 6" :title="'content ' + n" />
     </mt-tab-container-item>
   </mt-tab-container>
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
          isTrue2: false,
          isTrue3: false,
          selected: '',
          listClass: [],
          http:'https://fuss10.elemecdn.com/',
          isblue:-1,
          snackArr: []
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
          this.isTrue1 = !this.isTrue1
          this.isTrue2 = false
          this.isTrue3 = false
        },
        changeStyle2() {
          this.isTrue1 = false
          this.isTrue3 = false
          this.isTrue2 = !this.isTrue2
        },
        changeStyle3() {
          this.isTrue1 = false
          this.isTrue2 = false
          this.isTrue3 = !this.isTrue3
        },
        changePColor(index){
          this.isblue = index
          if(index===7){
            this.isblue = -1
          }
     this.snackArr = this.listClass[index].sub_categories
        }
      }
    }
</script>

<style scoped>

  .selectFood{
    margin-top: 0.5rem;
    background-color: lightgrey;
    height: 0.5rem;
    line-height: 0.5rem;
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
  }
  .span{
    color: blue;
  }
  .sizer{
    border: none;
  }
  .reverse{
    display: inline-block;
    transform: rotateZ(180deg);
  }
  .mint-tab-item{
    border-bottom: none !important;
  }
  span{
    font-size: larger;
    display: inline-block;
  }
  .shopName{
    padding: 0.2rem 0.1rem 0.2rem 0rem;
  }
  .listClass{
    display: flex;
    background-color: lightblue;
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
  .shopListLeft{
    width:70%;
    background-color: lightgreen;
    float: left;
  }
  .listShopRight{
    background-color: lightblue;
    width: 30%;
    float: left;
  }
</style>
