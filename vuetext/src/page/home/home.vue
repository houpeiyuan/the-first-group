<template>
  <div class="box">
    <!--显示定位城市-->
    <table class="table city">
      <thead>
      <tr>
        <td>当前定位城市:</td>
        <td class="two_td">定位不准时,请在城市列表中选择</td>
      </tr>
      </thead>
      <tbody class="table">
      <tr>
        <td @click="$store.commit('changeCity',{name:local_city,bul:false});$store.commit('getLocation',{latitude:local_cityL.latitude,longitude:local_cityL.longitude});$store.commit('ispron',false);$store.commit('getcityid',cityid)"><router-link :to="{name: 'city'}">{{local_city}}</router-link></td>
        <td class="two_td"><router-link :to="{}">> </router-link></td>
      </tr>
      </tbody>
    </table>
    <div class="city_Local">

    </div>
    <!--显示热门城市-->
    <div class="city_Hot border_top">
      <p>热门城市</p>
      <div class="container">
        <ul class="row cityTotal">
          <li class="col-xs-3 col-sm-3" v-for="item in cityHotArr" @click="$store.commit('changeCity',{name:item.name,bul:false});$store.commit('getLocation',{latitude:item.latitude,longitude:item.longitude});$store.commit('ispron',false);$store.commit('getcityid',item.id)"><router-link :to="{name:'city'}" id="a1">{{item.name}}</router-link></li>
        </ul>

      </div>
    </div>
    <!--显示所有城市-->
    <div class="city_list border_top container" v-for="(value, key, index) in cityObj">
      <p><span>{{keyArr[index]}} </span><span class="font1">{{index===0?'(按字母排序)':''}}</span></p>
      <ul class="row cityTotal">
        <li v-for="item in cityObj[keyArr[index]]" class="col-xs-3 col-sm-3" @click="$store.commit('changeCity',{name:item.name,bul:false});$store.commit('getLocation',{latitude:item.latitude,longitude:item.longitude});$store.commit('ispron',false);$store.commit('getcityid',item.id)"><router-link :to="{name:'city'}">{{item.name}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "home",
    data () {
      return {
        cityid:0,
        cityHotArr: [],
        local_city: '',
        local_cityL:{
          latitude:0,
          longitude:0
        },
        countArr1:[],
        keyArr:[],
        cityObj: {}
      }
    },
    beforeRouteEnter(to,from,next){
      next(vm=>{
        vm.$store.commit('isEle','ele.me')
        vm.$store.commit('changeCity',{name:'',bul:''})
        vm.$store.commit('ispron',true)
      })
    },
    created() {
      this.$store.commit('isfoot',false)
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess',null).then(res=>{
        this.local_city = res.data.name
        this.cityid = res.data.id
      }).catch(err => {

      })
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot',null).then(res => {
        this.cityHotArr = res.data
        this.local_cityL = {
          latitude:res.data.latitude,
          longitude:res.data.longitude
        }
      }).catch(err => {

      })
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then(res => {
        this.keyArr = Object.keys(res.data).sort()
        this.cityObj = res.data
      })
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('isEle','')
      next()
    }
  }
</script>

<style scoped>
  *{
    padding: 0rem;
    margin: 0rem;
    text-decoration: none;
  }
  #a1{
    color: blue;
  }
  .box{
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;
  }
  .city{
    background-color: white;
  }
  .two_td>a{
    font-size: 0.16rem;
    color: grey;
    float: right;
  }
  table{
    border-bottom:0.02rem solid #e4e4e4;
    color: black;
  }
  .container{
    padding: 0;
    background-color: white;
  }
  .two_td{
    color: #e4e4e4;
    padding-left: 0.6rem;
  }
  .border_top{
    border-top: 0.02rem solid #e4e4e4;
    margin-top: -0.1rem;
    margin-bottom: 0.2rem;
    padding: 0;
    width: 100%;
  }
  p{
    color: black;
  }
  td{
    text-align: center;
  }
  .cityTotal>li{
    list-style: none;
    text-align: center;
    border-bottom: 0.01rem solid #e4e4e4;
    border-left: 0.01rem solid #e4e4e4;
    border-right: 0.01rem solid #e4e4e4;
    font-size: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  .cityTotal>li>a{
    color: black;
  }
  .cityTotal{
    border-top:0.01rem solid #e4e4e4;
    border-bottom:0.005rem solid #e4e4e4;
    width: 100%;
  }
  .font1{
    color: lightgrey;
    font-size: 0.2rem;
  }
</style>
