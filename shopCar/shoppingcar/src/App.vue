<template>
  <div id="app">
    <Myheader ref="child"></Myheader>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Myheader from "./components/Myheader";
  import Myproduct from "./components/Myproduct";
  import Mycart from "./components/Mycart";
export default {
  name: 'App',
  components: {Mycart, Myproduct, Myheader},
  data() {
   return {
     addcar:[]
   }
  },
  computed:{
    com(){
      let p = 0
      let c = 0
      for(let item of this.addcar){
        c+= item.count
        p+= item.count*item.product.price
      }
      return [c,p]
    }
  },
  methods:{
    sendPro(p) {
      this.$refs.child.totalC++
      this.$refs.child.totalP+=p.price-0
    },
    delete2(p){
      this.$refs.child.totalC--
      let price1 = p.product.price-0
      this.$refs.child.totalP-=price1
    },
    getPro(){
      return this.addcar
    },
    dele(p,i) {
      if(p.count>1){
        p.count--
      }else {
        this.addcar.splice(i,1)
      }
    }
}
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
.goods{
  margin-top: 113px;
}
</style>
