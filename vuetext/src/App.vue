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


  .totalBox{
    margin-top: 0.5rem;
  }
</style>
