<template>
  <section>
    <div class="head">
      <i class="iconfont" @click="get">&#xe64b;</i>
      <span>{{project1}}</span>
    </div>
    <div class="content">
      <p>{{project}}</p >
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "n8",
    data(){
      return {
        project:{},
        project1:{}
      }
    },
    created(){
      Vue.axios.get('https://elm.cangdu.org/v3/profile/explain',null).then((e,q)=>{
        this.project=e.data.activityContent
        console.log(e)
        this.project1=e.data.activityCaption
      })
    },
    methods:{
      get(){
        window.history.go(-1)
      }
    }
  }
</script>

<style scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.26rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float:left;
    color: white;
  }
  .head{
    width: 100%;
    height: 0.5rem;
    background-color: blue;
    line-height:0.5rem ;
    font-size: 0.2rem;
    position: fixed;
    top: 0;
    z-index: 2;
  }
  .head span{
    color: white;
  }
  .content{
    font-size: 0.25rem;
    text-indent: 0.3rem;
    margin-top: 0.5rem;
  }
</style>
