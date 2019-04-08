<template>
  <section>
<div class="box">
  <p>不需要开发票</p>
  <div class="i pull-right"@click="img1" :class="{choosed: invoice}"><p class="p">✔</p>
  </div>
</div>
    <p class="ensure" @click="btn">确定</p>
  </section>
</template>

<script>
    export default {
        name: "invoic",
      data(){
          return{
            invoice: false
          }
      },
      methods:{
          img1(){
             this.invoice=!this.invoice
          },
          btn(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped>
  .choosed{
    background-color:#4cd964 ;
  }
  .box{
    margin-top: 0.7rem;
  }
.i{
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  margin-top: -0.2rem;
}
  .p{
    margin-left: 0.03rem;
    padding-top: 0.03rem;
  }
  .ensure{
    width: 2.4rem;
    height: 0.3rem;
    background-color:lawngreen;
    color: white;
    text-align: center;
    padding-top: 0.1rem;
    border-radius: 0.05rem;
    margin-top: 0.2rem;
    margin-left: 0.65rem;
  }
</style>
