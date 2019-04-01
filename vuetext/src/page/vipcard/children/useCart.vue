<template>
<!--使用卡号购买-->
  <section>


<div>
  成功兑换后将关联的账号：账号名
</div>
  <div>
    <input type="text"placeholder="输入10位卡号" name="cartNumber" class="ninput" v-model="cartNumber" maxlength="10">
    <input type="text" placeholder="输入6位卡密" class="ninput" name="passWord" v-model="passWord" maxlength="6">
  </div>
    <p class="determine" :class="{could_pay: couldPay}" @click="cartNumber.length===10?popupl():null">兑换</p>
    <div class="content animated heartBeat" v-if="frame">
      <img src="https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=905010147,1377287211&fm=200&gp=0.jpg" alt="">
      <p>无效的卡号</p>
      <button @click="confirm" v-if="fram">确定</button>
    </div>
  </section>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import alertTip from '../../../../src/components/common/alertTip'
    export default {
        name: "useCart",
      data(){
          return{
            cartNumber: '',
            passWord: '',
            alertText: null,
            frame:false,
            fram:true
          }
      },
      computed: {
        ...mapState([
          'userInfo',
        ]),
        couldPay: function (){
          return (/^\d{10}$/.test(this.cartNumber))&&(/^\d{6}$/.test(this.passWord)) ;
        },
      },
      components: {
        alertTip,
      },
      methods: {
        popupl(){
          this.frame = true;
        },
        confirm(){
          this.frame=false
        }
        },
  }



</script>

<style scoped>
 .ninput{
   width: 100%;
   height: 0.5rem;
   border-bottom: 1px solid aliceblue;
   margin-top: 0.05rem;
 }
 .could_pay{
   background-color: #4cd964;
 }
  .determine{
    height: .4rem;
    margin-top: 0.1rem;
    padding-top: 0.11rem;
    padding-left:1.7rem;
  }
  .content{
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }
  img{
    width:1.5rem;
    border-radius: 50%;
    margin-top: 0.5rem;
  }
 .content>p{
   margin-left: 0.1rem;
   margin-top: 0.03rem;
 }
 button{
     width: 1.5rem;
     height: 0.3rem;
     background-color: blueviolet;
  }
</style>
