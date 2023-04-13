<!--suppress CssUnknownTarget -->
<template>
  <div class="all">
    <div class="box">
      <div class="navigation-bar">
          <ul>
            <li v-for="(item,index) in list" :key="index" @click="increase(index)" :class="item.class">{{item.name}}</li>
          </ul>
        </div>
      <div class="information">
        <div class="title">科技和信息化资源</div>
        <div class="table">
<!--          <assembly-index></assembly-index>-->
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
      </div>
    </div>
  </div>
</template>

<script>
// import assemblyIndex from "@/views/enterprise/assembly/index"
export default {
  name: "enterPrises",
  components:{
    // assemblyIndex
  },
  data(){
    return{
      list:[
        {
          name:'危货运输',
          class:"on"
        },{
          name:'普货运输',
          class:""
        },{
          name:'公铁联运',
          class:""
        },{
          name:'客运运输',
          class:""
        },
      ],
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
  methods:{
    increase(index){
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].class = ""
      }
      this.list[index].class = "on"
    },
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
.all {
  background: url("https://www.ndkjcx.com/ndkjcxfwpt/template/images/comp_list_bg.png");
}

.box {
  width: 65%;
  margin: auto;
  padding: 2% 0 0 0;
  display: flex;

  .navigation-bar {
    width: 17%;
    height: 100%;
    background: url("https://www.ndkjcx.com/ndkjcxfwpt/template/images/comp_list_select_leftbg.jpg") no-repeat center;
    background-size: 88% 100%;

    ul {
      width: 100%;
      list-style: none;
      padding: 10% 0;

      li {
        width: 100%;
        height: 6vh;
        text-align: center;
        line-height: 6vh;
        color: white;
        cursor: pointer;
      }

      .on {
        background: url("https://www.ndkjcx.com/ndkjcxfwpt/template/images/comp_list_select.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .information{
    width: 80%;
    height: 75vh;
    margin-left: 2%;
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid white;
    margin-bottom: 5vh;
    .title{
      text-align: center;
      font-size: 4vh;
      font-weight: 900;
      font-style: italic;
      color: #0067b7;
      line-height: 10vh;
    }
  }
}
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