<template>
  <!-- 服务中心-->
  <section class="container-fluid">
    <div class="frist">
      <div class="befor">
      <a href="###" >
        <img src="../../../src/image/1.png" alt="" class="img1">
        <p>在线服务</p>
      </a>
      </div>
      <div class="pull-right after">
        <a href="tel:10105757">
            <img src="../../../src/image/2.jpg" alt="" class="img2">
            <p>在线客服</p>
        </a>
      </div>
    </div>
    <p class="mide">热门问题</p>
    <hr>
    <div>
      <router-link :to="{name:'n1'}">超级会员权益说明</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n2'}">签到规则</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n3'}">用户等级说明</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n4'}">积分说明</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n5'}">教我拍大片</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n6'}">支付问题</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n7'}">其他问题</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n8'}">准时达问题</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n9'}">会员说明</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n10'}">会员问题</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'n11'}">红包问题</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn1'}">活动细则</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn2'}">补签规则</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn3'}">优惠说明</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn4'}">免责声明</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn5'}">代金券说明</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn6'}">商务合作</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn7'}">余额问题</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn8'}">超赞商家</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn9'}">匿名购买</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
    <div>
      <router-link :to="{name:'nn10'}">活动细则</router-link>
      <span class="pull-right">></span>
    </div>
    <br>
    <hr>
  </section>
</template>

<script>
  export default {
    name: "service",
    data() {
      return {
      }
    },
    created(){
      this.$store.commit('changecity1',{name1:'服务中心',bull:false})
    }
  }
</script>

<style scoped>
  .frist{
    width: 100%;
    height: 0.4rem;
  }
  span{
    float: left;
    margin-left: 1rem;
  }
  p{
    margin-left: -19px;
  }
  div{
    padding-top: .2rem;
    padding-left: .1rem;
  }
  div>*{
    color: black;
  }
  .mide{
    width: 100%;
    margin-top:.6rem;
    padding-left: 0.25rem;
    font-size: 0.2rem;
  }
  .img1{
    width: 0.3rem;
    margin-left: -0.1rem;
  }
  .img2{
    width: 0.3rem;
  }
  .befor{
    margin-left: 0.5rem;
    margin-top: -0.2rem;
  }
  .after{
    margin-right: 0.7rem;
    margin-top: -0.65rem;
  }
</style>
