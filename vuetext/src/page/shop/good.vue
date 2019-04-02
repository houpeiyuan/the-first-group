<template>
    <div class="rootgood">
      <h2>食品监督安全公示</h2>
      <hr>
      <div class="supervision">
        <i class="iconfont">&#xe62b;</i>
        <div>
          <p>监督检查结果: 差</p>
          <p>检查日期:</p>
        </div>
      </div>
      <h2>工商登记信息</h2>
      <hr>
      <p>企业名称</p>
      <p>工商执照注册号</p>
      <p>注册资本</p>
      <p>属地监管所</p>
      <p>法定代表人</p>
      <p>经营范围</p>
      <h3>餐饮许可证</h3>
      <p>营业范围</p>
      <p>许可证有效期</p>
      <p>许可证号</p>
      <p>发证时间</p>
    </div>
</template>

<script>
    export default {
        name: "good",
        beforeRouteEnter(to,from,next){
          next(
            vm=>{
              vm.$store.commit('changecity1',{name1:'食品监督安全公示',bull:''})
              vm.$store.commit('isfoot', false)
            }
          )
        },
       beforeRouteLeave(to,from,next){
           this.$store.commit('changecity1',{name1:'',bull:''})
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
  p{
    margin: 0.2rem;
  }
  .rootgood{
    margin-left: 0.1rem;
  }
</style>
