<template>
<!--搜索地址页-->
  <section>
  <input type="search" name="search" placeholder="请输入小区/写字楼/学校等" v-model="searchValue" class="put">
    <div class="pull-right sou" @click="choooedAddress">搜索</div>
    <div class="address_list" v-if="searchData">
      <div class="site" v-for="(item, index) in searchData" :key="index" @click="choooedAddress">
        <p @click="man(index)">{{item.name}}<br>
          <span>{{item.address}}</span></p>
      </div>

    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "searchAddress",
      data(){
          return{
            searchValue:'',// 输入的搜索内容
            searchData: '', //搜索的结果
            amb:'',
            geohas:''// 经纬度
          }
      },
      created(){
        this.$store.commit('changecity1',{name1:'搜索地址',bull:false})
      },
      methods: {
        choooedAddress(){
          Vue.axios.get('https://elm.cangdu.org/v1/pois?'+'&keyword='+this.searchValue).then(res=>{
            // console.log(res.data)
            this.searchData=res.data
            this.geohas=res.data
            // this.geohash=res.data.geohash
            // console.log(this.geohash)
          })
        },
        man(index){
           this.$store.commit("site",this.searchData[index].name)
          console.log(this.searchData[index].name)
          console.log(this.geohas[index].geohash)
          this.$store.commit('geohash',this.geohas[index].geohash)
         this.$router.push({path:'/addAddress'})
        }
      }
    }
</script>

<style scoped>
  section{
    overflow: auto;
  }
.put{
  height: 0.2rem;
  margin-top: 0.2rem;
  width: 1.8rem;
  margin-left: 0.1rem;
}
  .sou{
    width: 0.6rem;
    height: 0.2rem;
    background-color: forestgreen;
    text-align: center;
    margin-top: .2rem;
   margin-right: 1.2rem;
    padding-top: 0.05rem;
    color:snow;
  }
  .site{
    width: 100%;
    height: 0.7rem;
    background-color: white;
    padding-top: 0.1rem;
    margin-left: 0.2rem;
    border-bottom: 0.01rem solid lightgrey;
  }
</style>
