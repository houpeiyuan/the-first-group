<template>
  <div>
    <router-link :to="{path:'/commend'}">红包</router-link>
    <router-link :to="{path:'/coupon'}">商家代金卷</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "benefit"
    }
</script>

<style scoped>

</style>
