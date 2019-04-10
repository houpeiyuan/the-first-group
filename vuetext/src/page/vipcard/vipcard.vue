<template>
<!-- 会员卡办理页-->
  <div>
    <div class="top">
      <span>为账户账号名购买会员</span>
    </div>
    <div class="box">
      <div class="member">
       <span>会员特权</span>
        <router-link :to="{name:'vipDescription'}" class="pull-right">会员说明<span>></span></router-link>
      </div>
      <div>
            <div class="pull-left befor">
              <img src="../../../src/image/sheng.jpeg.png" alt="" class="img1">
              <div class="pull-right after">
               <span>减免配送费</span>
                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                <p>蜂鸟配送</p>
              </div>
            </div>
        <div class="pull-left befor">
          <img src="../../../src/image/jifen.jpeg.png" alt="" class="img1">
          <div class="pull-right after">
            <span>减免配送费</span>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟配送</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <p>
           开通会员
      </p>
      <div class="p">
        <p>1个月￥20元</p>
        <div>
          <router-link :to="{name:'invoiceRecord'}"><div class="bord pull-right">购买</div> </router-link>
        </div>
      </div>
    </div>
    <div class="botton">
      <span>兑换会员</span>
      <router-link :to="{name:'useCart'}" class="pull-right">使用卡号密码》</router-link>
    </div>
    <div class="botton">
      <span>购买记录</span>
      <router-link :to="{name:'invoice'}" class="pull-right">开发票》</router-link>
    </div>
  </div>
</template>
<script>
    export default {
        name: "vipcard",
      created(){
        this.$store.commit('changecity1',{name1:'会员',bull:false})
      }
    }
</script>

<style scoped>
.top{
  width:100%;
  height: 0.3rem;
  background-color: lavender;
  padding-top: 0.06rem;
}
.box{
  overflow: hidden;
}
  .member{
    height: 0.3rem;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    border-bottom: 1px solid lavender;
  }
  .member>span{
    font-size: 16px;
  }
  .befor{
    border-bottom: 1px solid lavender;
    margin-left: .03rem;
    margin-top: 0.05rem;
  }
  .after{
    height: .6rem;
     margin-left: 0.1rem;
  }
  .after>span{
     font-size: 20px;
  }
.content{
  margin-top: 0.2rem;
  height: .7rem;
  margin-left: 0.06rem;
}
  .bord{
    width: .5rem;
    height: 0.3rem;
    border: 1px solid orangered;
    border-radius: 10%;
    padding-top: 0.08rem;
    padding-left: 0.09rem;
    overflow: hidden;
    margin-top: -0.2rem
  }
  .p{
    height: 0.6rem;
    margin-top: 0.2rem;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;

  }
  .p>p{
    margin-top: 0.2rem;
    font-size: 15px;
  }
  .botton{
    height: 0.6rem;
    margin-top: .2rem;
    padding-top: 0.4rem;
    border-bottom: 1px solid lightgray;
  }
  .botton>span{
    font-size: 16px;
  }
  .img1{
    width: 0.4rem;
  }
</style>
