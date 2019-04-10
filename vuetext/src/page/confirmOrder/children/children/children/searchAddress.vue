<template>
<!--搜索地址页-->
  <section>
  <input type="search" name="search" placeholder="请输入小区/写字楼/学校等" v-model="searchValue" class="put">
    <div class="pull-right bac" @click="choooedAddress">搜索</div>
    <ul class="address_list" v-if="searchData">l
      <li v-for="(item, index) in searchData" :key="index" @click="choooedAddress">

        <p @click="man(index)">{{item.name}}<br>
          <span>{{item.address}}</span></p>

      </li>
    </ul>
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
.put{
  height: 0.2rem;
  margin-top: 0.2rem;
  width: 1.8rem;
}
  .bac{
    width: 0.6rem;
    height: 0.2rem;
    background-color: forestgreen;
    text-align: center;
    margin-top: .2rem;
   margin-right: 1rem;
    color:snow;
  }
  li>*{
    margin-top: 0.2rem;
  }
</style>
