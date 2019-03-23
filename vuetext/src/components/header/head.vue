<template>
  <nav class="nav navbar navbar-fixed-top">
    <a href="###" class="pull-left">ele.me</a>
    <div class="pull-right">
      <router-link :to="{}">登录 |</router-link>
      <router-link :to="{}">注册</router-link>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "head1"
    }
</script>

<style scoped>
  .nav{
     background-color: blue;
     width: 100%;
   }
  .nav>a,div{
    color: white;
    padding: 0.1rem;
  }
  .pull-right>a{
    color: white;
  }
</style>
