<template>
  <div class="table">
    <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe>
      <el-table-column
          label="序号"
          type="index">
      </el-table-column>
      <el-table-column
          label="企业名称"
          prop="date">
      </el-table-column>
      <el-table-column
          label="所属区域"
          prop="name">
      </el-table-column>
      <!--      <el-table-column-->
      <!--          label="地址"-->
      <!--          prop="address">-->
      <!--      </el-table-column>-->
    </el-table>
    <div class="block">
      <el-pagination
          :current-page="currentPage"
          :page-size="pagesize"
          :page-sizes="[10, 20, 30, 40]"
          :total="tableData.length"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "inDex",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentPage: 1,
      pagesize: 10
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 90%;
  margin: 0 auto;

  .block {
    margin-bottom: 3vh;
  }

  ::v-deep .el-table {
    border-radius: 10px 10px 0 0;
    .el-table__cell{
      background: #e6f2fe;
    }
    thead {
      color: #fff;
      font-weight: 500;
      border-radius: 10px !important;
      background: linear-gradient(to right, #0182fe, #00c8dc) !important;

      & th {
        width: 30%;
        background: transparent;
      }

      & tr {
        background: transparent;
      }
      .el-table__cell{
        background: transparent;
      }
    }

  }
}
</style>