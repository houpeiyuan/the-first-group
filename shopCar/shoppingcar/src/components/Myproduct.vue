<template>
   <section class="goods">
     <div class="container-fluid">
       <!--行-->
       <div class="row">
         <!--左边的按钮组-->
         <div class="col-md-3 col-sm-3">
           <button class="btn btn-default btn-block" :class="{'btn-danger':ispro==='全部'?true:false}" @click="getpro('全部')">全部</button>
           <!--以下按钮需要根据数据动态生成,不能自己创建-->
           <button v-for="(good,index) in categoryArr" class="btn btn-default btn-block" :class="good===ispro?btn1:btn" @click="getpro(good,index)">{{good}}</button>
         </div>
         <!--右边的商品列表-->
         <div class="col-md-9 col-sm-9">
           <!--一件商品-->
           <div v-for="pro in pagepro">
             <h3>
               {{pro.name}}
               <span class="label label-primary pull-right">{{pro.price}}</span>
             </h3>
             <button @click="addPro($event,pro)" :disabled="disableBtn" class="label btn-success pull-right">加入购物车</button>
             <div class="clearfix"></div>
             <p class="lead">{{pro.desc}}</p>
           </div>
           <!--按钮组-->
           <div class="pull-right">
             <button class="btn btn-default" :class="{'btn-danger':item===isbtn?true:false}" v-for="item in pages"  @click="paging(item)">{{item}}</button>
           </div>
           </div>
       </div>
     </div>
   </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Myproduct",
        data(){
          return {
            btn1:'btn btn-danger',
            btn:'btn-default',
            isbtn:"",
            ispro:"",
            disableBtn: false,
            //所有数据的数组
            goodsArr: [],
            //分类按钮的数组
            categoryArr: [],
            //分类商品的数组
            cateArr: [],
            //储存按钮的页数
            pages: [],
            //储存每一页的商品的数据
            pagepro: [],
            //储存往后台传递的数据
            goods2Arr:[]
      }
      },
      methods:{
        addPro(even,p){
          let obj = {value:p._id,count:1,product:p}
          this.disableBtn = true
          Vue.axios.post('/api/post1',obj).then(res=>{
               if(res.data){
                 this.disableBtn = false
                 console.log(this.$parent)
                 this.$parent.sendPro(p)
               }
          }).catch(err=>{
            console.log(err)
          })
          return
        },

        //处理分类按钮的点击事件
        getpro(c,n) {
          if(c === '全部'){
            this.cateArr = this.goodsArr
            this.ispro =c
          }else{
            this.cateArr = this.goodsArr.filter((v)=>{
              return v.category === c
            })
            this.ispro =c
            console.log(this.cateArr)
          }
          this.getPageCount()
          this.paging(1)
        },
        // 分页符
        getPageCount() {
          const count = Math.ceil(this.cateArr.length/3)
          let pagearr = []
          for(let i = 1;i<count+1;i++){
            pagearr.push(i)
          }
          this.pages = pagearr
        },
        //分页器按钮的点击事件
        paging(n){
     this.pagepro = this.cateArr.slice((n-1)*3,3*n)
          this.isbtn=n
        }
    },

        mounted () {
          //当组件挂载完毕之后,发起网路请求请求数据
          Vue.axios.post('/api/post',null).then((res)=>{
           this.goodsArr = res.data
           for(let item of this.goodsArr){
             //也可以用对象的唯一性,for循环
           this.categoryArr =[...new Set([...this.categoryArr,item.category])]
             this.getpro('全部')
             this.paging(1)
           }

          }).catch(err=>{
            console.log(err)
          })
        }
    }
</script>

<style scoped>

</style>
