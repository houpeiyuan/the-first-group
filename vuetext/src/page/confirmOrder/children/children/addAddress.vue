<template>
<!--添加地址页-->
  <section>
    <span>联系人</span>
  <input type="text" placeholder="你的名字" class="put" v-model="name">
    <hr>
    <div>
      <span class="sp" @click="chooseSex(1)" :class="{choosed:sex==1}">✔</span><span>先生</span>
      <span class="sp" @click="chooseSex(2)" :class="{choosed:sex==2}">✔</span> <span>女士</span>
    </div>
    <hr>
    <div>
      <span>联系电话</span>
      <input type="text" name="phone" placeholder="你的手机号" class="put">
    </div>
   <div class="box">
     <span class="pull-left">送餐地址</span>
     <div class="pull-left box1">
     <router-link :to="{name:'searchAddress'}" tag="div" class="put">{{print}}</router-link>
     <input type="text" name="address_detail" placeholder="详细地址（如门牌号等）" v-model="address_detail" class="put">
     </div>
   </div>
    <div>
      <span>标签</span>
      <input type="text" name="tag" placeholder="无/家/学校/公司" v-model="tag" class="put">
    </div>
    <div class="btn">确定</div>
  </section>
</template>

<script>
    export default {
        name: "addAddress",
      data(){
          return{
            name:'',// 名字
            phone:'',// 电话
             sex:1, //性别
            address_detail:'',// 详细地址
            tag:''//备注
          }
      },
      computed:{
          print(){
            if (this.$store.state.zhang.site){
              return this.$store.state.zhang.site
            } else {
              return '小区/写字楼/学校等'
            }
          }
      },
      methods:{
        chooseSex(sex){
          this.sex=sex
        }
      }
    }
</script>

<style scoped>
.put{
  height: 0.2rem;
  margin-top: 0.2rem;
}
  .sp{
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-left: .2rem;
  }
.choosed{
  background-color:#4cd964 ;
}
  .box{
    margin-top: 0.3rem;
    height: 0.8rem;
  }
  .box1{
    margin-left: 0.2rem;
    margin-top: -0.2rem;
  }
  .btn{
    width: 80%;
    height: 0.3rem;
    margin-top: 0.1rem;
    background-color: greenyellow;
    margin-left: 10%;
  }
</style>
