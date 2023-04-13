<template>
  <div class="main">
    <div>
      <div class="supervise-flex">
        <div class="supervise-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider content-position="right">
        <slot></slot>
      </el-divider>
    </div>
    <el-menu default-active="title" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="title">
        {{ this.title }}
      </el-menu-item>
    </el-menu>
    <div>
      <video controls v-for="(item,index) in this.type" :key="index">
        <source :src="item.video">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GongLue',
  components: {},
  data() {
    return {
      pageNumber: 0,
      currentPage: 1,
      type: [],
      list: [],
      title: '',
      paging: {
        page: 2,
        pageSize: 10,
        total: 0,
        page_sizes: [5, 10, 15, 20]
      },
      tableData: []
    }
  },
  mounted() {
    this.mount()
  },
  methods: {
    mount() {
      this.title = this.$route.params.title
      if (this.title == '信息管理平台视频') {
        this.type = this.$route.params.type
        window.sessionStorage.setItem("title", JSON.stringify(this.title));
        window.sessionStorage.setItem("type", JSON.stringify(this.type));
      } else {
        this.title = JSON.parse(window.sessionStorage.getItem("title"))
        this.type = JSON.parse(window.sessionStorage.getItem("type"))
      }
    }
  },
  filters: {}
}
</script>

<style scoped lang="scss">
.title {
  /*display: inline-block;*/
  /*width: 400px;*/
  width: 40%;
  float: left;
  font-size: 18px;
  margin-left: 50px
}

.main {
  width: 1200px;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 50px;
  border: 1px solid #e5e5e5;
  padding: 1%;
}

a {
  text-decoration: none
}

.firstTitle {
  font-size: 30px;
}

.secondTitle {
  font-size: 15px;
  color: grey;
  margin-left: 10%;
}

.el-menu-demo {
  .el-menu-item {
    font-size: 20px;
  }
}

::v-deep .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #409EFF;
}

::v-deep .el-pager li:hover {
  color: #409EFF;
}

video {
  width: 30%;
  height: 30vh;
  margin-right: 3%;
  box-shadow: 5px 5px 5px 5px #268cd0;

  source {
    width: 100%;
    height: 100%;
  }
}
</style>