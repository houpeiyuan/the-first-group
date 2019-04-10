<template>
<!--添加地址页-->
  <section>
    <span>联系人</span>
  <input type="text" placeholder="你的名字" class="put" v-model="name">
    <hr>
    <div class="bon">
      <p class="sp pull-left" @click="chooseSex(1)" :class="{choosed:sex==1}">✔</p>
      <span class="pull-left">先生</span>
      <p class="sp pull-left" @click="chooseSex(2)" :class="{choosed:sex==2}">✔</p>
      <span class="pull-left">女士</span>
    </div>
    <div>
      <span>联系电话</span>
      <input type="text" name="phone" placeholder="你的手机号" class="put" v-model="phone">
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
    <div class="btn" @click="addAddress">确定</div>
  </section>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "addAddress",
      data(){
          return{
            name:'',// 名字
            phone:'',// 电话
             sex:1, //性别
            address_detail:'',// 详细地址
             tag:'',//备注
            tag_type: 1, //备注类型
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
      created(){
        this.$store.commit('changecity1',{name1:'添加地址',bull:false})
      },
      methods:{
        chooseSex(sex){
          this.sex=sex
        },
        addAddress(){
          if (this.name===''){
            Toast('请输入姓名')
          }else if (this.phone===''){
            Toast('请输入电话')
          }else if (this.address_detail===''){
            Toast('请输入详细地址')
          }
          if (this.tag == '家') {
            this.tag_type = 2;
          }else if(this.tag == '学校'){
            this.tag_type = 3;
          }else if(this.tag == '公司'){
            this.tag_type = 4;
          }
        const api='https://elm.cangdu.org/v1/users/'+this.$store.state.zhang.userId+'/addresses'
          this.$http({method:'post',url:api,data:{
              address:this.$store.state.zhang.site,
              name:this.name,
              phone:this.phone,
              sex:this.sex,
              address_detail:this. address_detail,
              tag:this.tag,
              tag_type:this.tag_type,
              geohash:this.$store.state.zhang.geohash,
            }}).then((response)=>{
              console.log(response.data)
            this.$router.push({name:'chooseAddress'})
            })
        }
      },
    }
</script>

<style scoped>
.put{
  height: 0.2rem;
  margin-top: 0.2rem;
}
  .sp{
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    margin-left: .25rem;
    padding-left: 0.05rem;
    padding-top: 0.02rem;
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
  .bon{
    width: 100%;
    height: 0.4rem;
    border-bottom: 0.01rem solid lightgrey;
  }
</style>
