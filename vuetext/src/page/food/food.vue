<template>
<!--食品筛选排序页-->
<div class="root">
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
     <div class="shop2">
     <!-- 食品列表左 -->
     <div v-show="isTrue1_1">
       <transition name="shopAll">
         <div class="listClass" v-show="isTrue1" >
           <transition name="shopTransite">
             <div v-if="isTrue1">
               <li class="shopListLeft">
                 <div v-for="(item,index) in listClass" :key="index">
                   <p @click="changePColor(index)" :style="{backgroundColor:index===isbule?'lightblue':'lightgreen'}" class="shopLeftP">
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
       </transition>
     </div>
     <!--排序-->
     <div v-show="isTrue2_1" class="shop1">
       <transition name="shopAll">
         <div class="listClass" v-show="isTrue2" >
           <transition name="shopTransite">
             <div v-if="isTrue2">
               <div class="sort">
                 <div @click="changeStyle2" class="shopList">
                   <div @click="chooseFocus(1)">
                     <i class="iconfont iconfont1">&#xe621;</i>
                     <p>
                       <span>智能排序</span>
                       <span v-show="index==1">✔</span>
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
                       <span id="sp" v-show="index===4">✔</span>
                     </p>
                   </div>
                   <div @click="chooseFocus(5)">
                     <i class="iconfont iconfont1">&#xe66b;</i>
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
             </div>
           </transition>
         </div>
       </transition>
     </div>
      <div v-show="isTrue3_1" class="delivery shop1">
        <transition name="shopAll">
          <div class="listClass" v-show="isTrue3" >
            <transition name="shopTransite">
              <div v-if="isTrue3" >
                <div class="sort">
                  <div class="distribution shopList">
                    <p>配送方式</p>
                    <div class="bird" @click="sign7=!sign7; sign7?count++:count--;sendSizer(sizerP7)">
                      <i v-if="!sign7" class="iconfont iconfontbird">&#xe631;</i>
                      <span v-if="sign7" class="duihao">✔</span>
                      <span>蜂鸟专送</span>
                    </div>
                    <p>商家属性 (可以多选)</p>
                    <ul>
                      <li class="bird" @click="sign1=!sign1; sign1?count++:count--">
                        <span v-if="sign1" class="duihao">✔</span>
                        <span v-if="!sign1" class="sign">品</span>
                        <span>品牌商家</span>
                      </li>
                      <li class="bird" @click="sign2=!sign2; sign2?count++:count--;sendSizer(sizerP2)">
                        <span v-if="sign2" class="duihao">✔</span>
                        <span v-if="!sign2" class="sign">保</span>
                        <span>外卖保</span>
                      </li>
                      <li class="bird" @click="sign3=!sign3; sign3?count++:count--;sendSizer(sizerP3)">
                        <span v-if="sign3" class="duihao">✔</span>
                        <span class="sign" v-if="!sign3">准</span>
                        <span>准时达</span>
                      </li>
                      <li class="bird" @click="sign4=!sign4; sign4?count++:count--;sendSizer(sizerP4)">
                        <span v-if="sign4" class="duihao">✔</span>
                        <span v-if="!sign4" class="sign">新</span>
                        <span>新店</span>
                      </li>
                      <li class="bird" @click="sign5=!sign5; sign5?count++:count--;sendSizer(sizerP5)">
                        <span v-if="sign5" class="duihao">✔</span>
                        <span v-if="!sign5" class="sign">付</span>
                        <span>在线支付</span>
                      </li>
                      <li class="bird" @click="sign6=!sign6; sign6?count++:count--;sendSizer(sizerP6)">
                        <span v-if="sign6" class="duihao">✔</span>
                        <span v-if="!sign6" class="sign">票</span>
                        <span>开发票</span>
                      </li>
                    </ul>
                    <button class="btn-default" @click="clearArr">清空</button>
                    <button class="btn-success" @click="ensure">确认 <span v-if="count!==0">({{count}})</span> </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </transition>
      </div>
   </div>
  <shoplist class="shoplist1"></shoplist>
 </div>
</template>
▼
<script>
  import Vue from  'vue'
  import Shoplist from "../../components/common/shoplist";
    export default {
      name: "food",
      components: {Shoplist},
      data() {
        return {
          sizerP1: {},
          sizerP2: {type:'supports',value:{icon_name:'保'} },
          sizerP3: {type:'supports',value:{icon_name:'准'} },
          sizerP5: {type:'is_premium',value:true},
          sizerP6: {type:'supports',value: {icon_name:'票'}},
          sizerP4:{type:'is_new',value: true},
          sizerP7:{type:'delivery_mode',value:{is_solid:true}},
          goodFood: '美食',
          isTrue1: false,
          isTrue1_1:true,
          isTrue2: false,
          isTrue2_1:true,
          isTrue3: false,
          isTrue3_1:true,
          selected: '',
          listClass: [],
          isbule: 0,
          http:'https://fuss10.elemecdn.com/',
          snackArr: [],
          bull: true,
          bull1: true,
          isShopList: false,
          isSortList: true,
          index: 0,
          sign1:false,
          sign2:false,
          sign3:false,
          sign4:false,
          sign5:false,
          sign6:false,
          sign7:false,
          count:0,
          latitude: '31.22967',
          longitude: '121.4762',
          sizerArr: []
        }
      },
      created(){
        //隐藏尾部
        this.$store.commit('isfoot',false)
        let this1 = this
        this.isbule = (function(){
          switch (this1.$store.state.zhang.kind) {
            case 0: {
              this1.goodFood = '甜品饮食'
              this1.$store.commit('changeCity',{name:'甜品饮食',bul:''})
              return 8};
            case 1: {
              this1.goodFood = '商超便利'
              this1.$store.commit('changeCity',{name:'商超便利',bul:''})
              return 5};
            case 2: {
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
            case 3: {
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
            case 4: {
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
            case 5: {
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
            case 6: {
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
            case 7: {
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
            case 8: {
              this1.goodFood = '小吃夜宵'
              this1.$store.commit('changeCity',{name:'小吃夜宵',bul:''})
              return 2};
            case 9: {
              this1.goodFood = '特色菜系'
              this1.$store.commit('changeCity',{name:'特色菜系',bul:''})
              return 4};
            case 10:{
              this1.goodFood = '小吃夜宵'
              this1.$store.commit('changeCity',{name:'小吃夜宵',bul:''})
              return 2};
            case 11:{
              this1.goodFood = '鲜花蛋糕'
              this1.$store.commit('changeCity',{name:'鲜花蛋糕',bul:''})
              return 6};
            case 12:{
              this1.goodFood = '异国料理'
              this1.$store.commit('changeCity',{name:'异国料理',bul:''})
              return 0};
            case 13:{
              this1.goodFood = '果蔬生鲜'
              this1.$store.commit('changeCity',{name:'果蔬生鲜',bul:''})
              return 3};
            case 14:{
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
            case 15:{
              this1.goodFood = '美食'
              this1.$store.commit('changeCity',{name:'美食',bul:''})
              return 1};
          }
        })()
        console.log(this.isbule)
      },
      computed: {

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
          Vue.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category",null).then(res=>{
            this.listClass = res.data
          })
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
          this.isbule = index
     this.snackArr = this.listClass[index].sub_categories
        },
        getShopName(item){
          this.goodFood = item.name
          this.isTrue1_1 = false
          this.isTrue1 = !this.isTrue1
          this.$store.commit('getskip',item.id)
          this.$store.commit('changeFood',item.name)
        },
        chooseFocus(i){
          this.index = i
         this.$store.commit('getcount', i)
        },
        sendSizer(i) {
          if(!this.sizerArr.includes(i)){
            this.sizerArr.push(i)
          }else{
            this.sizerArr.splice(this.sizerArr.indexOf(i),1)
          }
        },
        clearArr() {
          this.sizerArr = []
          this.sign1 = false
          this.sign2 = false
          this.sign3 = false
          this.sign4 = false
          this.sign5 = false
          this.sign6 = false
          this.sign7 = false
          this.count = 0
        },
        ensure() {
          this.$store.commit('sizerFood', this.sizerArr)
          this.isTrue3_1 = true
          this.isTrue3 = !this.isTrue3
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
    position: fixed;
    top: 0rem;
    z-index: 33;
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
  .shopAll-enter-active{
    transition: opacity 0.1s linear;
  }
  .shopAll-leave-active{
    transition: opacity 0.3s 0.2s linear;
  }
  .shopTransite-enter-active{
    transition: all .3s linear;
  }
  .shopAll-enter-to,.shopAll-leave{
    opacity: 0.3;
  }
  .shopAll-enter,.shopAll-leave-to{
    opacity: 0;
  }
  .shopTransite-leave-active{
    transition: all .3s linear;
  }
  .shopTransite-enter-to,.shopTransite-leave{
    position: absolute;
    top:0rem;
    width: 100%;
    z-index: 22;
  }
  .shopTransite-enter,.shopTransite-leave-to{
    position: absolute;
    top:-6rem;
    width: 100%;
    z-index: 22;
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
    font-size: small;
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
    height: 120%;
    background-color: rgba(0,0,0,0.1);
    position: fixed;
    z-index: 22;
  }
  .count{
    background-color: #90B4FC;
    width: 0.3rem;
    height: 0.13rem;
    font-size:small;
    border-radius: 0.13rem;
    text-align: center;
    margin-right: 0.1rem;
  }
  img{
    width: 0.2rem;
    margin: 0 0.1rem;
  }
  .shopList{
    margin-top: 0.12rem;
    width: 100%;
  }
  .shopLeftP{
    height: 0.4rem !important;
    vertical-align: middle;
  }
  .shopListLeft{
    width:50%;
    background-color: lightgreen;
    float: left;
    height:3.6rem;
    margin-top: 0.5rem;
  }
  .listShopRight{
    background-color: lightblue;
    width: 50%;
    float: left;
    height:3.6rem;
    overflow: auto;
    margin-top: 0.5rem;
  }
  .listShopRight::-webkit-scrollbar{
    display: none;
  }
  .rightList{
    display: flex;
    justify-content: space-between;
    border-bottom: 0.02rem solid grey;
    height: 0.4rem;
    line-height:0rem;
  }
  .rightList>span{
    font-size: small;
    margin: 0.2rem 0.05rem 0.2rem 0.05rem;
  }
  .sort p>span+span{
    color: blue;
    display: inline-block;
    padding-left: 3rem;
    margin: -0.6rem;
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
     position: relative;
     top: 0.4rem;
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
    width: 100%;
    background-color: white;
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
    padding: 0;
  }
  .bird{
    width: 31% !important;
    border: 0.02rem solid #e4e4e4;
    border-radius: 0.05rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin:-0.1rem 0 0.2rem 0rem;
    display: inline-block;
    font-size: 0.10rem;
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
  .shop1{
    position: relative;
    width: 100%;
    height: 5rem;
    top:0.4rem
  }
.root{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  .shop2{
    height: 100%;
  }
  .food{
    position: absolute;
    top:0rem;
    height: 100%;
    width: 100%;
    background-color: lawngreen;
  }
  .shoplist1{
    position: absolute;
    z-index: 2;
    top: 0.3rem;
    overflow: auto;
  }
  .shoplist1::-webkit-scrollbar{
    display: none;
  }
</style>
