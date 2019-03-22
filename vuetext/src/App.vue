<template>
  <div id="app">
    <img src="./assets/logo.png">
    <middle></middle>
    <router-view/>
    <foot></foot>
    <mine></mine>
  </div>
</template>

<script>
  import Foot from './components/foot'
  import Middle from './components/middle'
  import Mine from "./components/mine";
export default {
  name: 'App',
  components: {Mine, Foot,Middle}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
