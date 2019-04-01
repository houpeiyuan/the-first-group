<template>
<!--订单列表页-->
  <div>

  </div>
</template>

<script>
    export default {
        name: "order",
        beforeRouteEnter(to,form,next){
          next(
            vm=>{
              vm.$store.commit('isfoot',true)
              vm.$store.commit('changecity1',{name1:'我的订单',bull:''})
            }
          )
        },
      beforeRouteLeave(to,form,next){
          this.$store.commit('isfoot',false)
          this.$store.commit('changecity1',{name1:'',bull:''})
          next()
      }
    }

</script>

<style scoped>

</style>
