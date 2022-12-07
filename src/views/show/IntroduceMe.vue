<template>
  <div class="introduc">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>简介</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="this.empty == 2">
      <div>
        <h1 class="font">{{ this.article.title }}</h1>
        <div class="time">
          <div>发布时间:{{ this.article.date }}</div>
          <div>来源：{{ this.article.source }}</div>
          <div>作者：小惠</div>
        </div>
        <hr style="border:none;border-top:1px dashed #ddd;margin-bottom: 3%;"/>
        <div class="introdic-hight">
          <div v-html="this.article.content"></div>
        </div>
      </div>
    </div>
    <div v-else>
      <el-empty :description="this.list"></el-empty>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroduceMe',
  data() {
    return {
      article: {},
      empty: 1
    }
  },
  mounted() {
    console.log(this.$route.params.list)
    this.article = this.$route.params.list
    this.empty = this.$route.params.empty
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.introduc {
  width: 1200px;
  padding: 1%;
  margin: auto;
  border: 1px solid #e5e5e5;

  .breadcrumb {
    height: 30px;
    background-color: rgb(226, 226, 226);

    .el-breadcrumb {
      padding-top: 8px;
      margin-left: 10px;

      ::v-deep .el-icon-arrow-right:before {
        color: black;
      }
    }
  }

  .font {
    text-align: center;
  }

  .time {
    display: flex;
    justify-content: center;
    margin: 2%;

    div {
      margin-left: 5%;
      color: #666;
    }
  }

  h1 {
    margin-top: 5%;
  }

  .introdic-hight {
    line-height: 35px;

    div {
      margin-bottom: 15px;
      text-indent: 2em;
    }
  }
}
</style>