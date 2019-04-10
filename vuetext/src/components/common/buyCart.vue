<template>
  <div class="wrap2">
    <transition name="upCar">
      <div class="list"  v-if="bul">
        <div class="listS" v-if="$store.state.zhang.num.length" v-for=" item in $store.state.zhang.num">
          <div class="jia" @click="add(item)"><span>{{item.count}}</span> +</div>
          <div class="jian" @click="del(item)">-</div>
        </div>
      </div>
    </transition>
  <div class="box">
    <div class="left">
      <div class="car" @click="showCar"><i class="iconfont">&#xe6e6;</i></div>
      <input type="text"  v-if="$store.state.zhang.money" v-model="$store.state.zhang.money" disabled>
      <input type="text" v-else v-model="st" disabled>
      <p>配送费￥5</p>
    </div>
    <div class="right"><router-link :to="{name:'confirmOrder'}">去结算</router-link></div>
  </div>
  </div>
</template>
<script>
  export default {
    name:'buyCart',
    data(){
      return{
       st:0,
        bul:false,
        h:0,
        t:0
      }
    },
    methods:{
      showCar(){
        if(this.$store.state.zhang.num.length){
          this.bul=!this.bul;
        }else {
          this.bul=false
        }
      },
      add(item){
        item.count++
        this.$store.commit('addMoney',item.price)
      },
      del(item){
        var index=this.$store.state.zhang.idArr.indexOf(item._id)
        if(item.count>=1){
          item.count--
          this.$store.commit('delMoney',item.price)
        }
        if(item.count<1){
          this.$store.state.zhang.idArr.splice(index,1)
          this.$store.state.zhang.num.splice(index,1)
        }
      }
    }
  }
</script>

<style scoped>
.wrap2{
  width: 100%!important;
  position: fixed;
  height:0.5rem ;
  bottom: 0;
}
*{
  line-height: 0;
}
.upCar-enter,.upCar-leave-to{
  transform: translateY(2rem);
}
.upCar-enter-active,.upCar-leave-active{
  transition: all 2s ease;
}
.upCar-leave,.upCar-enter-to{
  transform: translateY(0rem);
}
.list{
  width: 100%;
  position: absolute;
  left: 0;
  bottom:0.5rem;
  max-height: 2rem;
  overflow: auto;
}
.listS{
  width: 100%;
  height: 0.3rem;
  display: flex;
}
.listS>div{
  width: 50%;
  height: 100%;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.2rem;
}
.jia{
  background-color: darksalmon;
}
.jian{
  background-color: yellow;
}
  .box{
    width: 100%;
    display: flex;
    font-size: 0.2rem;
    color: white;
  }
  .left{
    width: 60%;
    height: 0.5rem;
    position: relative;
    background-color: black;
  }
  .right{
    width: 40%;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: green;
  }
  .left>input{
    width:100% ;
    height: 0.25rem;
    background-color: black;
    padding-left: 0.6rem;
  }
  .left>p{
    width:100%;
    height: 0.25rem;
    font-size: 0.16rem;
    line-height: 0.2rem;
  }
.iconfont{
  font-family:"iconfont" !important;
  font-size:0.25rem;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.002rem;
  -moz-osx-font-smoothing: grayscale;
}
  .car{
    position: absolute;
    left: 0.1rem;
    top: -0.1rem;
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    border-radius: 100%;
    background-color: #3190e8;
  }
</style>

