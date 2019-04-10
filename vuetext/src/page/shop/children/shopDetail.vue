<template>
 <div class="box">
   <div class="top">
       <div class="left" >
         <div class="grade"v-if="shopinfo">{{shopinfo.rating}}</div>
         <div>综合评价</div>
         <div class="size">高于周边商家{{parseInt(scorerating.compare_rating*100)}}%</div>
       </div>
      <div class="right"  v-if="scorerating">
        <div class="i"><span>服务态度</span><span>
          <el-rate
            v-model="fiex"
            disabled
            show-score
            text-color="#000"
            score-template="{value}">{{fiex}}
          </el-rate>
        </span></div>
        <div class="i"><span>菜品评价
        <span>
           <el-rate
             v-model="evaluate"
             disabled
             show-score
             text-color="#000"
             score-template="{value}">{{evaluate}}
          </el-rate>
        </span>
        </span></div>
        <div><span>送达时间:{{scorerating.deliver_time}}分钟</span></div>
      </div>
   </div>
   <div class="content">
       <div class="scoremaintop after">
         <div v-for="(item,index) in scoretags" class="time pull-left" @click="chang(index)" :class="{shel: scoreindex==index}">{{item.name}}({{item.count}})</div>
       </div>
     <div class="scoremaininfo" ref="abc">
     <div>
       <div class="scoreitem after" v-for="(item,index) in score" :key="index">
         <div class="scoreitemleft">
           <img :src="item.avatar.endsWith('jpeg')===true?imgpath+item.avatar+'.jpeg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553869734396&di=ff7895187b0dcb832fafcadd88cb4521&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201607%2F25%2F20160725185442_K2ScQ.jpeg'
" class="pull-left cirle">
         </div>
         <div class="scoreitemright fs12 col9f">
           <div>
               <span class="big">
                 {{item.username}}
               </span>
             <span class="right1 pull-right">{{item.rated_at}}</span>
           </div>
           <div class="pull-left stars">
             <el-rate
               v-model="item.rating_star"
               disabled
               show-score
               text-color="#000"
               score-template=""></el-rate>
           </div>
           <div class='punctual'>
             {{item.time_spent_desc}}
           </div>
           <div class="scoreimgbox">
             <img v-for="itema in item.item_ratings" :src="itema.image_hash.endsWith('jpeg')===true?imgpath+itema.image_hash+'.jpeg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553869734396&di=ff7895187b0dcb832fafcadd88cb4521&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201607%2F25%2F20160725185442_K2ScQ.jpeg'">
           </div>
           <div class="namebox">
             <div v-for="itemb in item.item_ratings">{{itemb.food_name}}</div>
           </div>
         </div>
       </div>
     </div>
     </div>
   </div>
 </div>
</template>
<script>
  import Vue from 'vue'
  import stars from '../../../components/common/ratingStar'
  import BScroll from 'better-scroll'
    export default {
        name: "shopDetail",
      data(){
       return{
         isImg: false,
         shopinfo:[],//商家信息
         score:[], //评价信息
         scorerating:'',//评价分数
         scoretags:"",//评价分类
         scoreindex:0, //选中第几个评价分类
         fiex:'',
         evaluate:'',
         imgpath:'https://fuss10.elemecdn.com/',//商家头像的路径地址path
         offset:10,
         root:''
       }
      },
      components:{
          stars
  },
  methods:{
          chang(i){
                  this.scoreindex=i
                    // console.log(i)
          },
           imgaddpath:function(e){
               return "https://fuss10.elemecdn.com/"+e+".jpeg"
               // console.log(e);
    }
  },
      created(){
          //评论详情
          // Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.zhang.id+'/ratings?offset=0&limit=10').then((res)=>{
          //   this.score=res.data
          // })
        //评论分类
        Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.zhang.id+'/ratings/tags').then(response=>{
          // console.log(response)
          this.scoretags=response.data
        })
        // 评论分数
        Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.zhang.id+'/ratings/scores').then(response=>{
          this.scorerating=response.data
          this.fiex=Math.round(this.scorerating.service_score*10)/10
          this.evaluate=Math.round(this.scorerating.food_score*10)/10
        })
        // 商家信息
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/'+this.$store.state.zhang.id).then(response=>{
          console.log(this.$store.state.zhang.id)
          this.shopinfo=response.data
        })
      },
      watch:{
          offset:{
            handler(){
              Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.zhang.id+'/ratings?offset='+this.offset+'&limit=10').then(res =>{
                this.score=[...this.score,...res.data]
                this.$nextTick(()=>{
                  if (!this.root) {
                    this.root=new BScroll(this.$refs.abc,{click:true,probeType:1})
                  }else {
                    this.root.refresh();
                  }
                  this.root.on('scroll',(res)=>{
                    if(this.root.maxScrollY>=res.y-5){
                      this.offset+=10;
                      this.root.refresh()
                    }
                  })
                  this.root.on('touchEnd',(pos)=>{
                    if(this.root.maxScrollY >= pos.y-5){
                      // console.log(this.offset)
                      console.log('刷新2')
                      this.root.refresh();
                    }
                  })
                })
              })
            },
            immediate: true,
            deep: true
          }
      }
    }
</script>

<style scoped>
  .content{
    width: 200%;
  }
  .cirle{
    width: 0.4rem;
    height: 0.4rem;
    background-color: #3190e8;
    border-radius: 50%;
    margin-top: 0.5rem;
  }
  .box{
    width: 100%;
  }
  .top{
    height:1.2rem;
  }
  .scoremaininfo{
    height: 2rem;
    overflow: hidden;
  }
.left{
  font-size: 16px;
  margin-top: .1rem;
  margin-left: 0.2rem;
  padding-top: 10px;
}
.right{
   position: relative;
  left: 120px;
  top: -50px;
  font-size: 12px;
}
  .size{
    font-size: 10px;
  }
  .grade{
    font-size: 30px;
    color:orangered;
  }
  .i{
    margin-left: 40px;
  }
  .time{
    width: 1rem;
    height: 0.25rem;
    font-size:16px;
    float: left;
    background-color: #3190e8;
    border-radius: 0.2rem;
    margin-top: 0.1rem;
    padding-top: 0.04rem;
   margin-left: 0.1rem;
  }
  .scoremaintop{
    overflow: hidden;
    height: 2rem;
  }
  .after{
    width: 100%;
    margin-top: -1rem;
  }
.shel{
  background-color: red;
}
  .scoreitemleft>img{
     width: 0.4rem;
     border-radius: 50%;
  }
  .scoreitemleft{
    margin-top: 1rem;
  }
  .big{
    font-size: 12px;
    margin-left: -1.7rem;
  }
  .right1{
    font-size: 12px;
    margin-top: 10px;
  }
  .scoreitemright{
    height: 1.5rem;
    padding-top: 0.4rem;
  }
  .punctual{
    font-size: 12px;
    margin-right: 1.5rem;
  }
  .stars{
    margin-top: -.1rem;
    margin-left: 0.1rem;
  }
  .scoreimgbox{
    margin-right: 1.4rem;
    margin-bottom: 0.1rem;
  }
  .scoreimgbox>img{
    width: .3rem;
    margin-top: .5rem;
  }
  .namebox{
    display:flex;
    flex-wrap: wrap;
  }
  .scoreitemright{
    flex:1;
  }
  .namebox>div{
    font-size: 12px;
    border:1px solid;
    padding:3px 3px;
    margin-right:5px;
    border-radius:3px;
    margin-bottom:5px;
  }
</style>
<style>
  .el-rate{
    margin-right: 0.1rem;
    display: inline-block;
  }
  .el-rate__icon, .el-icon-star-on{
    font-size: 0.10rem;
  }
  .el-rate__item{
    width: 0.10rem;
  }
  .el-rate__text{
    font-size: 0.10rem;
    margin-left: 0.1rem;
  }
</style>
