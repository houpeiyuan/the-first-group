<template>
<!--当前城市页-->
  <div>
    <input type="text"placeholder="请输入学校,学校，地址">
    <button class="btn">提交</button>

    <div>
      <div class='contenttop'>搜索历史</div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "city",

    }
</script>

<style scoped>
input{
  width: 80%;
  height: 0.4rem;
  border: 0.02rem solid black;
  margin-top: 0.1rem;
  margin-left: 10%;
}
  .btn{
    width: 80%;
    background-color: blue;
    margin-left: 10%;
    margin-top: 0.06rem;
    color: white;
  }
  .contenttop{
   width: 100%;
    height: 0.16rem;
    background-color: darkgray;

  }
</style>
