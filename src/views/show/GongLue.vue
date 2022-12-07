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
    <notic-list :list='this.tableData'/>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                   :page-sizes="paging.page_sizes" :page-size="paging.pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="paging.total">
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios"
import NoticList from '@/views/components/NoticList.vue'

export default {
  name: 'GongLue',
  components: {
    NoticList
  },
  data() {
    return {
      pageNumber: 0,
      currentPage: 1,
      type: '',
      list: [],
      title: '',
      paging: {
        page: 1,
        pageSize: 10,
        total: 0,
        page_sizes: [5, 10, 15, 20]
      },
      tableData: []
    }
  },
  mounted() {
    //  this.upload(1)
    this.type = this.$route.params.type
    this.title = this.$route.params.title
    this.handlefilter(this.$route.params.list)
    this.paging.total = this.list.length
    this.detailed()
    this.handleSizeChange(this.paging.page_sizes[0])
  },
  methods: {
    detailed() {
      if (this.type !== '') {
        axios.get(`http://43.142.179.198:8081/noticeList/get?type=${this.type}`).then(res => {
          this.list = res.data
          this.paging.total = this.list.length
          this.handlefilter(this.list)
        })
      } else {
        this.list = []
      }
    },
    handlefilter(val) {
      if (val) {
        this.list = val
      } else {
        return;
      }
      this.tableData = val.filter((item, index) => {
        return index < this.paging.pageSize;
      })
    },
    handleSizeChange(val) {
      this.paging.pageSize = val
      this.tableData = this.list.filter((item, index) => {
        return index < val;
      })
    },
    handleCurrentChange(val) {
      this.paging.page = val
      let index = this.paging.pageSize * (val - 1)
      let allData = this.paging.pageSize * val
      let tablist = []
      for (let i = index; i < allData; i++) {
        if (this.list[i]) {
          tablist.push(this.list[i])
        }
        this.tableData = tablist
      }
    }
  },
  filters: {
    statusFilter(value) {
      switch (value) {
        case 0:
          return '已删除'
        case 1:
          return '通知'
        case 2:
          return '重要'
        case 3:
          return '置顶'
        default:
          return '未知'
      }
    },
    statusTag(value) {
      switch (value) {
        case 0:
          return 'danger'
        case 1:
          return 'success'
        case 2:
          return 'info'
        case 3:
          return 'warning'
        default:
          return 'danger'
      }
    }
  }
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
</style>