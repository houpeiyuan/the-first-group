<template>
  <div id="app">
    <head1></head1>
    <div class="totalBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {} from './config/rem'
import Head1 from "./components/header/head";
export default {
  name: 'App',
  components: {Head1}
}
</script>

<style>
<<<<<<< HEAD
  .totalBox{
    margin-top: 0.5rem;
  }
=======
>>>>>>> f24262b4549dec2c601d13f3c5b760032099c35b
</style>
