<template>
<!-- 商铺认证信息页-->
  <div>
    <h3>活动与属性</h3>
    <hr>
    <div>
      <p v-for="item in this.$store.state.zhang.active" class="merchant">
        <span :style="{backgroundColor:'#'+item.icon_color}">{{item.icon_name}}</span>
        <span>{{item.description}}(App专享)</span>
      </p>
      <p v-for="item in evaluation.supports" class="merchant">
        <span :style="{backgroundColor:'#'+item.icon_color}">{{item.icon_name}} </span><span>{{item.description}}(App专享)</span>

      </p>
    </div>
    <div class="shopSafe" @click="$router.push({name:'good'})">
      <span>食品监督安全公示</span>
      <router-link :to="{name:'good'}" >企业认证详情 ></router-link>
    </div>
    <hr>
    <div class="supervision">
      <i class="iconfont">&#xe62b;</i>
      <div>
        <p>监督检查结果: 差</p>
        <p>检查日期:</p>
      </div>
    </div>

   <div class="msg">
    <h3>商家信息</h3>
     <hr>
     <p>{{evaluation.name}}</p>
     <hr>
     <p>地址:{{evaluation.address}}</p>
     <hr>
     <p>营业时间:{{evaluation.opening_hours+''}}</p>
     <hr>
     <p>营业执照</p>
     <hr>
     <p>餐饮服务许可证</p>
   </div>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "shopSafe",
        data(){
          return {
            evaluation: {}
          }
        },
        created(){
          Vue.axios.get(`https://elm.cangdu.org/shopping/restaurant/${this.$store.state.zhang.id}`).then(res=>{
            this.evaluation = res.data
          })
        },
      beforeRouteEnter(to,from,next){
        next(
          vm=>{
            vm.$store.commit('changecity1',{name1:'商家详情',bull:false})
            vm.$store.commit('isfoot', false)
          }
        )
      },
      beforeRouteLeave(to,from,next){
        this.$store.commit('changecity1','')
         next()
      }
    }
</script>

<style scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.5rem  !important;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: red;
  }
  .shopSafe, .merchant{
    display: flex;
  }
  .merchant>span{
  display: inline-block;
  margin:0.05rem;
}
  .merchant>span:nth-child(1){
    height: 0.16rem;
  }
  .shopSafe{
    margin-top: 0.2rem;
  }
  .shopSafe>a{
    font-size: 0.2rem;
    display: inline-block;
    margin-left: 0.6rem;
    color: #e4e4e4;
  }
  .shopSafe>span{
    font-size: 0.2rem;
  }
  .supervision{
    display: flex;
  }
  .supervision>i{
    position: relative;
    top: 0.5rem;
  }
  .supervision>div{
    margin-left: 0.2rem;
  }
  .msg{
    margin-left: 0.2rem;
  }
</style>
