<template>
<!--选择地址页-->
  <section>
  <div>

  </div>
  <div class="navbar-fixed-bottom bofer">
    <router-link :to="{name:'addAddress'}">
    <img src="../../../../src/image/add_address.png" alt="">
      <span>新增收货地址</span>
    </router-link>
  </div>
  </section>
</template>

<script>
    export default {
        name: "chooseAddress"
    }
</script>

<style scoped>
.bofer{
  text-align: center;
  margin-bottom: 0.4rem;
}
  img{
    width: 0.2rem;
  }
</style>
