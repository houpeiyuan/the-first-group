<template>
<div class="wrap">
  <input @input="change" :style="{borderColor:bul?'red':'black'}" type="text" placeholder="请输入用户名" v-model="num">
  <p :style="{color:bul?'red':'black'}">用户名长度在5到24位之间</p>
  <button @click="frist">确认修改</button>
</div>
</template>
<script>
    export default {
        name: "setusername",
      data(){
          return{
            num:'',
            bul:false
          }
      },
      methods:{
          change(){
            if(this.num.length<=5&&this.num.length>0){
              this.bul=true;
            }else {
              this.bul=false;

            }
          },
        frist(){
            this.$router.push({name:'info'})
        }
      }
    }
</script>

<style scoped>
.wrap{
  width: 100%;
}
  input{
    width: 100%;
    height: 0.4rem;
  }
  p{
    width: 100%;
    line-height: 0.4rem;
    font-size: 0.3rem;
  }
  button{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background-color: red;
    color: white;
  }
</style>
