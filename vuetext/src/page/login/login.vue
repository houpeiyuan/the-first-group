<template>
<div class="loginBox">
  <input type="text">
  <br>
  <input :type="isEncryption">
  <div class="but" @click="but" :style="{backgroundColor:ischangeColor?'red':'green'}" >
    <span class="circle" :style="{left:ischangeColor?'2px':'24px'}"></span>
  </div>
</div>
</template>
<script>
    export default {
        name: "login",
        data() {
         return {
           isEncryption: 'text',
           ischangeColor: true
         }
        },
        methods: {
          but() {
            if (this.ischangeColor) {
              this.isEncryption = 'password'
              this.ischangeColor = false
            }else{
              this.isEncryption= 'text'
              this.ischangeColor = true
            }

          }
        }
    }
</script>

<style scoped>
  .but{
    display: inline-block;
    width: 50px;
    height: 26px;
    background-color: #749832;
    border-radius: 26px;
    line-height: 26px;
    position: relative;
    background-color: #ff1100;
    transition: all 0.3s linear;
  }
  .circle{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    margin: 3px;
    position: absolute;
    left:0px;
    transition: all 0.3s linear;
    top: 0;
  }
</style>
