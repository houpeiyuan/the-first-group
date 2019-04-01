<template>
<!--推荐有奖-->
  <section>
    <div>
      <img src="../../../../src/image/activity.png" alt="" class="img1">
    </div>
    <div class="after">
      <div @click="hits">
      <img src="../../../../src/image/weixin.png" alt="">
        <p>邀请微信好友</p>
      </div>
      <div @click="hits">
        <img src="../../../../src/image/qq.png" alt="">
        <p>邀请QQ好友</p>
      </div>
        <div @click="hits">
          <img src="../../../../src/image/fenxiang.png" alt="">
          <p>面对面邀请</p>
        </div>
    </div>
    <div class="end">
      <div class="pull-left left">
        <span>累计收益</span>
        <p>0元</p>
      </div>
      <div class="pull-left right">
        <span>成功邀请</span>
        <p>0人</p>
      </div>
    </div>
    <div class="last">
      <p>-收益明细-</p>
      <img src="../../../../src/image/qianbao.png" alt="" class="image">
      <p>还不赶紧去邀请好友</p>
    </div>
    <div class="finally animated heartBeat" v-if="isT">
      <img src="https://ss0.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=905010147,1377287211&fm=200&gp=0.jpg" alt="">
      <p>请在饿了么APP中打开</p>
      <div class="confirm"  v-if="isM" @click="propre">确定</div>
    </div>
  </section>
</template>
<script>
    export default {
        name: "hbDsecription",
      data(){
          return{
            isT:false,
            isM:true
          }
      },
      methods:{
        hits(){
          this.isT=true
        },
        propre(){
          this.isT=false
        }
      }
    }
</script>

<style scoped>
.img1{
  width: 100%;
}
.after{
  width: 100%;
  height: 1.5rem;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
}
.after img {
  margin-top: 0.2rem;
  height: 0.6rem;
}
.after p{
  margin-left: -0.1rem;
  margin-top: 0.1rem;
}
  .left{
    width: 50%;
    text-align: center;
    margin-top: 0.3rem;
    border-right: 1px solid lightgray;
  }
  .right{
    width: 50%;
    text-align: center;
    margin-top: 0.3rem;
  }
  .last{
    text-align: center;
    margin-top: 1rem;
  }
  .image{
    width: 0.5rem;
  }
.finally{
  width: 2rem;
  height: 1.5rem;
  background-color: white;
  position:fixed;
  top: 2rem;
  left: 0.9rem;
  text-align:center;
}
.finally>img{
  width: 1rem;
}
.confirm{
  width: 2rem;
  height: 0.2rem;
  background-color: blue;
  margin-top: 0.2rem;
  color: white;
}
</style>
