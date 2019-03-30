<template>
  <!-- 服务中心-->
  <section>
    <div class="frist">
      <router-link :to="{}">
         <span>
         <i class="iconfont">&#xe60e;</i>
         <p>在线客服</p>
       </span>
      </router-link>
      <span>
        <i class="iconfont1">&#xe600;</i>
        <p>在线客服</p>
      </span>
    </div>
    <p class="mide">热门问题</p>
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
  }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1112552 */
    src: url('//at.alicdn.com/t/font_1112552_lcv30si1gge.eot');
    src: url('//at.alicdn.com/t/font_1112552_lcv30si1gge.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1112552_lcv30si1gge.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1112552_lcv30si1gge.woff') format('woff'),
    url('//at.alicdn.com/t/font_1112552_lcv30si1gge.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1112552_lcv30si1gge.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:20px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
    color: firebrick;
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:20px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
    color: firebrick;
  }
  .frist{
    width: 100%;
    height: 40px;
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
    margin-top:.5rem;
    padding-left: 25px;
    border-bottom: 1px solid lightgray;
    font-size: 20px;
  }
  .pull-right{
    float: right;
  }
</style>
