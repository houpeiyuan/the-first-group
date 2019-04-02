<template>
<!--当前城市页-->
  <section>
  <div class='padtop50'>
    <div class="padlr10 bgfff padbot10">
      <form v-on:submit.prevent>
        <input v-model="inputval" class="cityinput" required placeholder="输入商务楼，学校，地址"></input>
        <input type='submit' name='submit' value='提交' @click="searchcity" class="submit bgcol ih40"></input>
      </form>
    </div>
  </div>
  <div class="main">
    <div v-if="list==''" class="his after">
      <div class='maintop fs0-8 padlr10'>搜索历史</div>
      <div v-if="his!=''" class="mainbody bgfff ">
        <div v-for="item in his" class="pad10 after"@click="skip">
          <div class="nowarp " @click="$store.commit('changeCity',{name:item.name,bul:true})">{{item.name}}</div>
          <div class="nowarp ">{{item.address}}</div>
        </div>
        <div @click='removeall' class="clearall ih30 pad10 col9f">
          清空所有
        </div>
      </div>
    </div>
    <div v-if="list[0]" class='search bgfff'>
      <div v-for="item in list" @click="goaddress(item)" class="pad10 after">
        <div class="nowarp" @click="$store.commit('changeCity',{name:item.address,bul:true})">{{item.name}}</div>
        <div class="nowarp">{{item.address}}</div>
      </div>
    </div>

  </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'mint-ui';
  export default {
    data () {
      return {
        inputval:"",
        list:[],
        his:""
      }
    },
    created(){
       this.$store.commit('isEle','')
       this.$store.commit('isCut', true)
       this.$store.commit('isfoot',false)
    },
    mounted:function(){
      //生命周期
      if(localStorage.getItem("his")){
        this.his=JSON.parse(localStorage.getItem("his"));
      }
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit('isCut', false)
      next()
    },
    methods:{
      //函数
      searchcity(){
        if (this.inputval == '') {
          Toast('请输入内容');
        } else{
          Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id='+ this.$store.state.zhang.cityid/*home传来的城市值*/+ '&keyword=' + this.inputval, null).then((res) => {
            this.list = res.data;
          });
        }

      },
      goaddress(e){
        var arr=[];
        this.$router.push({name:'msite'});
        if(localStorage.getItem("his")){
          arr=JSON.parse(localStorage.getItem("his"));
          for(var i=0;i<arr.length;i++){
            if(arr[i].geohash==e.geohash){
              var isok=true;
            }
          }
          if(!isok){
            arr.unshift(e);
          }
        }else{
          arr.unshift(e);
        }
        localStorage.setItem("his",JSON.stringify(arr));
        this.his=JSON.parse(localStorage.getItem("his"));
        this.list='';
      },
      removeall(){
        localStorage.clear();
        this.his="";
      },
       skip(){
         this.$router.push({name:'msite'})
       }
    }
  }
</script>

<style scoped>
  .cityinput{
    width:80%;
    height:40px;
    margin:10px 0px;
    outline:0px;
    padding:0px 5px;
    box-sizing:border-box;
    margin-left: 10%;
    border: 1px solid black;
  }
  .submit{
    text-align:center;
    color:white;
    border-radius:3px;
    width:80%;
    height: 0.4rem;
    border:0px;
    outline:0px;
    margin-left: 10%;
    background-color: blue;
  }
  .fs0-8{
    font-size:0.16rem !important;
  }

  .main{
    border-top:2px solid #E4E4E4;
  }
  .maintop{
    border-bottom:2px solid #E4E4E4;
  }
  .clearall{
    text-align:center;
    background-color:aliceblue;
  }
span{
  font-size: 0.12rem;
}
  .nowarp{
    width: 100%;
    height: 0.4rem;
    padding-top: 0.1rem;
  }
  .after{
    border-bottom: 0.01rem solid lightgray;
  }

</style>
