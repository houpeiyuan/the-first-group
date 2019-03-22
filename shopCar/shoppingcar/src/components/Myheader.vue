<template>
    <section>
      <nav class="nav navbar navbar-inverse navbar-fixed-top">
        <a href="###" class="navbar-brand">ZZ181110班的购物车</a>
        <p class="navbar-text pull-right">您的购物车一共有{{totalC}}件商品,总价格为{{totalP}}元<button class="btn btn-danger" @click="toCar">购物车</button></p>

      </nav>
    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Myheader",
      data(){
          return {
            totalC:0,
            totalP:0
          }
      },
        methods: {
        toCar() {
          this.$router.push({path:'/cart'})
        },
          //   let n = 0
          //   let obj = {count: 1, product: p}
          //   if (this.addcar.length === 0) {
          //     this.addcar.push(obj)
          //     return
          //   }
          //   let goods2Arr = []
          //   for (let item of this.addcar) {
          //     goods2Arr.push(item.product._id)
          //   }
          //   n = goods2Arr.indexOf(p._id)
          //   console.log(p._id,goods2Arr,n)
          //   if (n === -1) {
          //     this.addcar.push(obj)
          //   } else {
          //     this.addcar[n].count++
          //     console.log(this.addcar[n].count++)
          //   }
          // },
      },
      created(){
        Vue.axios.get('/api/get2',null).then(res=>{
            for(let item of res.data){
              this.totalC += item.count
              this.totalP += item.product.price-0
            }
          }).catch(err=>{
            console.log(err)
          })
      },

      // props:{
      //     totalC:{
      //       type:Number
      //     },
      //   totalP:{
      //       type:Number
      //   }
      // }
    }
</script>

<style scoped>

</style>
