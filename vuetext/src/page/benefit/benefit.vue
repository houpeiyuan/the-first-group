<template>
  <div class="wrap">
    <div>
      <router-link :to="{path:'/benefit/commend'}">红包</router-link>
    </div>
   <div>
     <router-link :to="{path:'/benefit/coupon'}">商家代金卷</router-link>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "benefit"
    }
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 0.5rem;
  display: flex;
  padding-top: 0.1rem;
  flex-wrap: wrap;
}
 .wrap>div{
   width: 50%;
   height: 100%;
   text-align: center;
   font-size: 0.2rem;
 }
</style>
