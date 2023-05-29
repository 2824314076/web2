<template>
  <div class="template">
    <el-page-header class="header" content="" @back="goBack"></el-page-header>
    <div class="title">{{list.title}}</div>
    <div class="author">
      <div>作者：{{}}</div>
      <div>时间：{{list.date}}</div>
<!--      <div style="font-weight:800;font-size: 2vh">原创作品</div>-->
    </div>
    <el-divider content-position="center" ><span style="color: red">宁东基地物流公共信息管理平台</span></el-divider>
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  name: "article-view",
  data(){
    return{
      list:null
    }
  },
  mounted() {
    this.list = this.$route.params.list
    console.log(this.list)
  },
  methods:{
    goBack() {
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="scss" scoped>
.template{
  width: 100%;
}
.title {
  text-align: center;
  font-size: 3vh;
  font-weight: 700;
}

.author {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.content{
  width: 95%;
  height: 81vh;
  background: #e5e5e5;
  //border: 1px solid darkgray;
  margin: 0 auto;
  overflow-y:scroll;

}
</style>