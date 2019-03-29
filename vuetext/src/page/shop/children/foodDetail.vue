<template>
  <div class="wrap">
 <div class="box">
   <ul class="left" ref="l_list">
     <li @click="change(index)" ref="l_item" :class="{'act':index === actli}"
          v-for="(item,index) in arr" :key="index">
       <p>
         {{item.name}}
       </p>
     </li>
   </ul>
   <section class="r_list" ref="r_list">
     <div class="new">
       <div v-for="(it,index) in arr" :key="index" ref="product">
         <p class="title">{{it.name}}</p>
         <ul>
           <li v-for="(item,index) in it.foods" :key="index" class="list ">
             <div class="list_item flex" :class="index===it.foods.length-1?'last':''">
               <p class="picture"><img :src="http+item.image_path" alt=""></p>
               <div class="show">
                 <p class="name">{{item.name}}</p>
                 <p class="des">{{item.description}}</p>
                 <p class="sale">月售{{item.sellCount}}份<span>好评率{{item.rating}}%</span></p>
                 <p class="price">￥5</p>
               </div>
             </div>
           </li>
         </ul>
       </div>
     </div>
   </section>
 </div>
  </div>
</template>

<script>
  /*
  https://blog.csdn.net/weixin_42852657/article/details/84400324
  better scroll
   */
  import Better from 'better-scroll'
  import Vue from 'vue'
    export default {
        name: "foodDetail",
      data(){
        return {
          arr:[],
          actli:0,
          http:'http://elm.cangdu.org/img/',
          set:[0],
          left:'',
          rgt:'',
          flag:true,
          scrollY: 0
        }
      },
       created(){
          var that=this
         Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+that.$store.state.zhang.id,null).then((response)=>{that.arr=response.data
           this.$nextTick(()=>{
             that.left = new Better(that.$refs.l_list,{click:true})
             that.rgt = new Better(that.$refs.r_list,{click: true, probeType: 3})
               that.$refs.product.forEach((el, index)=>{
                 that.set.push(el.offsetHeight+that.set[index])
               })
             that.rgt.on('scroll',(res)=>{

               if(that.flag){
                 that.scrollY = Math.abs(res.y)
               }
               for(let i = 0; i < that.set.length; i++){
                 if(that.scrollY > that.set[i] && that.scrollY < that.set[i + 1]){
                   that.actli = i
                   if(i === that.$refs.l_item.length - 2){
                     that.left.scrollToElement(that.$refs.l_item[1], 100, 0, 0)
                   }
                   if(i===2){
                     that.left.scrollToElement(that.$refs.l_item[0], 100, 0, 0)
                   }
                 }
               }
             })
           })
         })
       },
      methods:{
        change(index){
          this.actli=index;
          this.flag = false;
          this.rgt.scrollToElement(this.$refs.product[index], 100, 0, 0)
          setTimeout(()=>{
            this.flag = true
          },100)
        }
      }
    }
</script>

<style scoped>
  .wrap{
    width: 200% !important;
    padding-top: 0.2rem;
  }
  .box{
    width: 100%;
    display: flex;
  }
  .left{
    width: 30%;
    overflow: auto;
    height: 4.5rem;
  }
  .left::-webkit-scrollbar{
    display: none;
  }
  .left>li>p{
    width: 100%;
    height: 0.3rem;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.3rem;
    border-bottom: 0.01rem solid gray;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
  }
  .r_list{
    width: 70%;
    overflow: auto;
    height: 4.5rem;
    position: relative;
    right: 0;
  }
  .new>div,.new{
    width: 100%;
  }
  .title{
    width: 100%;
    height: 0.3rem;
    font-size: 0.2rem;
    text-align: left;
    background-color: #90B4FC;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
  }
  ul,li{
    width: 100%;
  }
  .flex{
    width: 100%;
    display: flex;
  }
  .picture{
    width: 30%;
    height: 0.4rem;
  }
  .picture>img{
    width: 100%;
    height: 100%;
  }
  .show{
    width: 70%;
  }
  .show>p{
    width: 100%;
    height: 0.15rem;
    font-size: 0.12rem;
  }
  .show>p:nth-child(1){
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
  }
.act{
  background-color: deepskyblue;
}
.last{
  border-bottom: none;
}
</style>
