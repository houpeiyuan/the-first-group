<template>
<!--确认订单页-->
  <section>
    <div class="box">
      <router-link :to="{path:'/chooseAddress'}">
      <img src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1554944248&di=5c4af628624bca8b02de1a95f17e55f0&src=http://img.tuguaishou.com/ips_asset_588ku/element_origin_pic/17/02/27/433586bb6bdc470b140f1827d51dcd67.png!w300_w?auth_key=2184508800-0-0-f30ab837a66c1b968f5b3a75d4b91409' alt="图片" class="pull-left img1">
      <div class="p1">配送的地址
        <br>
        <div>
          <span class="a">{{last.name}}</span>
          <span>{{last.sex==1?'先生':'女士'}}</span>
          <span>{{last.phone}}</span>
        </div>
        <div class="address_detail ellipsis">
        <span v-if="last.tag" :style="{backgroundColor: '#ccc', color: '#fff'}">{{last.tag}}</span>
        <span>{{last.address_detail}}</span>
        </div>
      </div>
      <span class="pull-right p2">></span>
      </router-link>
    <div class="con">
      <p class="pull-left p3">送达时间</p>
      <p class="pull-right">尽快送达|预计到达的时间
      </p>
      <img src="../../../src/image/4.png" alt="" class='img2 pull-right'>
    </div>
    <div class="pay">
      <p class="pull-left">支付方式</p>
      <p class="pull-right">在先支付></p>
      <hr>
      <p class="pull-left">红包</p>
      <p class="pull-right">暂时只在饿了么APP支持</p>
    </div>
    <div class="pho">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554305383664&di=d256cb41b220339d6401bb1a4a27cc20&imgtype=0&src=http%3A%2F%2Fimg.wenjiwu.com%2F170621%2F1497133462.jpg" alt="" class="img3 pull-left">
    <p class="pull-left p5">店铺名称</p>
    </div>
    <div>
      购物车的东西
      <p>餐盒费</p>
      <p>配送费</p>
      <p>订单金额</p>
    </div>
    <div class="end">
      <router-link :to="{path:'/remark'}">
        <p class="pull-left">订单备注</p>
        <span class="pull-right">></span>
        <span class="pull-right" v-for="item in name1">{{item}}</span>
      </router-link>
      <br>
      <hr>
      <router-link :to="{path:'/invoic'}">
        <p class="pull-left">发票抬头</p>
        <p class="pull-right">不需要开发票></p>
      </router-link>
    </div>
      <div class="roof"><</div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "confirmOrder",
      data(){
          return{
            boot:'' , // 餐盒费
            last:this.$store.state.zhang.item,  //送货地址

          }
      },
      computed:{
         name1(){
           if (this.$store.state.zhang.input){
             return this.$store.state.zhang.input
           } else{
             return '口味,偏好等'
           }
         },
      },
      created(){
        this.$store.commit('changecity1',{name1:'确认订单',bull:false})
        this.$store.commit('isfoot',false)
        console.log(this.last)
      },
    }
</script>

<style scoped>
  .box{
    margin-left: 0.2rem;
  }
.img1{
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.2rem;
  margin-left:-.1rem;
}
  .p1{
    margin-left: 0.3rem;
    padding-top: 0.14rem;
  }
  .p2{
    margin-top: -0.3rem;
    font-size: 0.2rem;
  }
  .img2{
    width: 0.5rem;
    margin-top:0.4rem;
     margin-right: -1.4rem;
  }
  .con{
    width: 100%;
    height: 0.7rem;
    margin-top: 0.3rem;
    background-color: whitesmoke;
  }
.p3{
  margin-top: 0.3rem;
}
.pay{
  height: 0.8rem;
  background-color: whitesmoke;
  margin-top: 0.1rem;
  padding-top: 0.2rem;
}
  .img3{
    width: 0.5rem;
  }
  .p5{
    margin-top: 0.1rem;
  }
  .pho{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    height: 1rem;
    overflow: hidden;
  }
  .end{
    height: 0.5rem;
    margin-top: 0.3rem;
  }
  .a{
    font-size: 0.2rem;
  }
  .roof{
    z-index: 1000;
    margin-top: -5.5rem;
    font-size: 0.3rem;
    left: 0.3rem;
    color: red;
  }
</style>
