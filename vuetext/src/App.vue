<template>
  <div id="app">
    <head1></head1>
    <router-view></router-view>
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

</style>
