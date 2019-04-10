<template>
  <section>
    <div class="box">
      <div class="head">
        <span>{{project1}}</span>
      </div>
      <div class="content">
        <p>{{project}}</p >
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "n5",
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
  }
</script>

<style scoped>
  .box{
    width: 90%;
    margin-left: 5%;
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
