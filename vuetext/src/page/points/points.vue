<template>
  <section>
    <div class="frist">
      <div class="two">
        <span>当前积分</span>
        <router-link :to="{name:'detaile'}"><p class="pull-right"><i class="iconfont">&#xe62b;</i>积分说明</p></router-link>
        <div>
          <button class="one" @click="Tg">提交</button>
        </div>
      </div>
      <div class="a">
        <span class="p">0.00</span>
        <span>分</span>
      </div>
    </div>
    <br>
    <div>
      <p>最近30天积分记录</p>
      <div class="end">
        <i class="iconfont1">&#xe610;</i>
        <p>最近30天无积分记录</p>
        <p>快去下单赚取大量积分吧</p>
      </div>
    </div>
    <div class="finally animated heartBeat" v-if="isT">
      <img src="https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=905010147,1377287211&fm=200&gp=0.jpg" alt="">
      <p>快去下单赚取大量积分吧</p>
      <div class="confirm"  v-if="isM" @click="propre">确定</div>
    </div>
  </section>

</template>

<script>
    export default {
        name: "points",
      data(){
          return{
            isT:false,
            isM:true
          }
      },
      methods:{
          Tg(){
            this.isT=true
          },
          propre(){
            this.isT=false
          }
      }
    }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 1113823 */
    src: url('//at.alicdn.com/t/font_1113823_gc9olc5clxv.eot');
    src: url('//at.alicdn.com/t/font_1113823_gc9olc5clxv.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1113823_gc9olc5clxv.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1113823_gc9olc5clxv.woff') format('woff'),
    url('//at.alicdn.com/t/font_1113823_gc9olc5clxv.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1113823_gc9olc5clxv.svg#iconfont') format('svg');
  }
  @font-face {
    font-family: 'iconfont';  /* project id 1114049 */
    src: url('//at.alicdn.com/t/font_1114049_gxc5ztsn5l.eot');
    src: url('//at.alicdn.com/t/font_1114049_gxc5ztsn5l.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1114049_gxc5ztsn5l.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1114049_gxc5ztsn5l.woff') format('woff'),
    url('//at.alicdn.com/t/font_1114049_gxc5ztsn5l.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1114049_gxc5ztsn5l.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:100px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .frist{
    width: 100%;
    height: 1.7rem;
    background-color: blue;
    padding-top: 0.3rem;
  }
  .two{
    width:90%;
    height: 1.3rem;
    background-color: white;
    border-radius: 5%;
    margin-left:5%;
    padding-top: .1rem;
  }
  .one {
    width: 90%;
    height: 0.4rem;
    margin-top: 0.5rem;
    margin-left: 5%;
    background-color:orangered;
    text-align: center;
    padding-top: 7px;
  }
  .p{
    font-size: 25px;
    color: brown;
  }
  .a{
    margin-top: -100px;
    margin-left: 30px;
  }
  .end{
    margin-left: 30%;
    margin-top: 30%;
  }
.end>*+*+*{
  font-size: 10px;
  margin-top: .1rem;
}
  .finally{
    width: 2rem;
    height: 1rem;
    background-color: white;
    position:fixed;
    top: 2rem;
    left: 0.9rem;
    text-align:center;
  }
  img{
    width: 1rem;
    border-radius: 50%;

  }
  .confirm{
    width: 2rem;
    height: 0.2rem;
    background-color: blue;
    margin-top: 0.2rem;
    color: white;
  }
</style>
