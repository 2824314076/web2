<!--suppress CssUnknownTarget -->
<template>
  <div class="all">
    <div class="box">
      <div class="navigation-bar">
          <ul>
            <li v-for="(item,index) in list" :key="index" :class="item.class" @click="increase(index,item.name)">
              {{ item.name }}
            </li>
          </ul>
        </div>
      <div class="information">
        <div class="title">宁东{{ name }}企业</div>
        <div class="table">
<!--          <assembly-index></assembly-index>-->
          <el-table
              :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              stripe>
            <el-table-column
                label="序号"
                align="center"
                header-align="center"
                type="index"
                width="200">
            </el-table-column>
            <el-table-column
                align="center"
                header-align="center"
                label="企业logo">
              <template slot-scope="scope">
                <img :src="scope.row.img">
              </template>
            </el-table-column>
            <el-table-column
                label="企业名称"
                align="center"
                header-align="center"
                prop="title">
            </el-table-column>
            <el-table-column
                label="所属区域"
                align="center"
                header-align="center"
                prop="region">
            </el-table-column>
            <!--      <el-table-column-->
            <!--          label="地址"-->
            <!--          prop="address">-->
            <!--      </el-table-column>-->
          </el-table>
          <div class="block">
            <el-pagination
                background
                :current-page="currentPage"
                :page-size="pagesize"
                :page-sizes="[5, 10, 15, 20]"
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
    return {
      name: '',
      list: [
        {
          name: '危货运输',
          class: "on"
        }, {
          name: '普货运输',
          class: ""
        }, {
          name: '公铁联运',
          class: ""
        }, {
          name: '客运运输',
          class: ""
        },
      ],
      tableData: [],
      puhuo: [
        {
          img: "http://43.142.179.198/img/1670298383696weihua.png",
          title: '惠浩运网络货运平台',
          url: 'https://pc.huihaoyun.cn/login.html?v=1324',
          region: '宁夏回族自治区'
        },
        {
          img: require('@/assets/home_img/xinhua.png'),
          title: '新华智慧物流平台',
          url: 'http://www.xinhuawuliugroup.com/',
          region: '宁夏回族自治区'
        },
        {
          img: require('@/assets/home_img/jingying.png'),
          title: '宁夏世纪金鹰物流有限公司',
          url: 'http://www.nxjywl.com/',
          region: '宁夏回族自治区'
        }, {
          img: require('@/assets/home_img/mengtuoling.png'),
          title: '宁夏梦驼铃科技有限责任公司',
          url: '',
          region: '宁夏回族自治区'
        },{
          img: '',
          title: '暂无数据',
          url: '',
          region: '暂无数据'
        }
      ],
      weihua: [
        {
          img: require('@/assets/home_img/weihua.png'),
          title: '宁东危化品运输管理平台',
          url: 'http://aimonitoring.rybsj.cn/webgis/login.jsp',
          region: '宁夏回族自治区'
        },
        {
          img: require('@/assets/weihuo/antai.png'),
          title: '宁夏安泰物流有限公司',
          url: 'http://www.wxbkdz.com/wxp.asp',
          region: '宁夏回族自治区'
        },
        {
          img: require('@/assets/weihuo/baojiang.png'),
          title: '宁夏宝江危货运输有限公司',
          url: 'http://www.nxbjys.com/',
          region: '宁夏回族自治区'
        },
        {
          img: require('@/assets/weihuo/dalian.png'),
          title: '辽宁大连化学危险品物流运输公司',
          url: 'http://lanchuguoji56.com/',
          region: '辽宁省'
        },
        {
          img: '',
          title: '暂无数据',
          url: '',
          region: '暂无数据'
        },
        {
          img: '',
          title: '暂无数据',
          url: '',
          region: '暂无数据'
        },

      ],
      currentPage: 1,
      pagesize: 10
    }
  },
  mounted() {
    this.tableData = this.weihua
    this.name = "危货运输"
  },
  methods: {
    increase(index, name) {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].class = ""
      }
      this.list[index].class = "on"
      if (index == 0) {
        this.tableData = this.weihua
      } else if (index == 1) {
        this.tableData = this.puhuo
      }
      this.name = name
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

      .el-table__cell {
        background: transparent;
      }
    }

  }
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active:hover{
  background: transparent;
  border: 1px solid #409EFF;
  color: black;
  font-weight: 100;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active{
  background: #409EFF;
}
::v-deep .el-pagination__sizes .el-input .el-input__inner:hover{
  border-color:#409EFF;
}
::v-deep .el-select .el-input.is-focus .el-input__inner {
  border-color: #409EFF;
}
::v-deep .pageN .selected{
 border-color:#409EFF;
}
::v-deep .el-pagination__jump .el-input__inner{
  width: 3vh;
  height: 3vh;
}
</style>