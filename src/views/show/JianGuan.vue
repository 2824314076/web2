<template>
  <div class="main">
    <div>
      <div class="body">
        <div>
          <div style="display:flex;justify-content: space-between;">
            <div class="supervise-breadcrumb">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>监管平台</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="supervise-login">
              <el-button @click="open">登录</el-button>
              <!--              <el-dialog-->
              <!--                  title="提示"-->
              <!--                  :visible.sync="dialogVisible"-->
              <!--                  width="30%">-->
              <!--                <el-input placeholder="请输入账号" v-model="input.account" ></el-input>-->
              <!--                <el-input placeholder="请输入密码" v-model="input.password" show-password></el-input>-->
              <!--                <span slot="footer" class="dialog-footer">-->
              <!--              <el-button @click="dialogVisible = false">取 消</el-button>-->
              <!--              <el-button type="primary" @click="determine">确 定</el-button>-->
              <!--            </span>-->
              <!--              </el-dialog>-->
            </div>
          </div>
        </div>
        <div class="center">
          <div class="supervise-font">
            <img src="@/assets/log/supervise_font.png" alt="">
          </div>
          <div class="supervise-head">
            <img class="supervise_log" src="@/assets/log/supervise_log.png" alt="">
            <img class="img" src="@/assets/log/supervise_center.png" alt="">
            <div class="supervise-head-font">
              <div class="BriefIntroduction">
                “宁东物流大数据中心”是依托宁东能源化工基地整体业态的基础硬件资源优势，充分应用大数据、物联网、云计算等新兴信息技术，建设的一整套...
                <span @click="introdu()" class="pointer">[详情]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-border">
        <div class="notic-container">
          <div class="notic-show" v-for="item in notice" :key="item.id">
            <div class="title" style="display:flex;">
              <h3 class="font size">{{ item.title }}</h3>
              <notic-table class="notic-item" :title="item.title" :type='item.content[0].type'/>
              <!-- {{ item.content }} -->
            </div>
            <notic-list :list="item.content"/>
          </div>
        </div>
        <div class="supervise supervise-flex">
          <div class="work" v-for="(item, index) in work" :key="index">
            <div class="supervise-text">
              <div class="supervise-text-font">{{ item.title }}</div>
              <div class="supervise-tips">{{ item.tips }}</div>
              <div class="supervise-flex subtitle">
                <div v-for="(ite, ind) in item.power" :key="ind" @click="routers(ite.url)" class="pointer">{{
                    ite.title
                  }}
                </div>
              </div>
            </div>
            <div class="img">
              <img src="@/assets/index/entertab6.png" style="width: 359px;height: 210px;" alt="">
            </div>
          </div>
          <div class="query ">
            <h1>我要找政策</h1>
            <div>
              <div>
                <el-menu mode="horizontal">
                  <el-menu-item @click="StateCouncil(index)" v-for="(item, index) in noticlists" :key="index"
                                :index="(index + 1).toString()">
                    {{ item }}
                  </el-menu-item>
                </el-menu>
              </div>
              <div>
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <el-button>查找政策</el-button>
                <el-button>高级搜索</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import platform from '@/views/components/platform.vue'
import NoticTable from '@/views/components/NoticTable.vue'
import NoticList from '@/views/components/NoticList.vue'

export default {
  name: 'JianGuan',
  components: {
    // platform
    NoticTable,
    NoticList
  },
  data() {
    return {
      //以下为后端内容
      jianguan: [
        {src: '/img/anli/jianguan1.png', id: 0},
        {src: '/img/anli/jianguan2.png', id: 0},
        {src: '/img/anli/jianguan3.png', id: 0},
        {src: '/img/anli/jianguan2.png', id: 0},
        {src: '/img/anli/jianguan3.png', id: 0},
        {src: '/img/anli/jianguan1.png', id: 0},
      ],
      input: {
        account: '',
        password: ''
      },
      dialogVisible: false,
      notice: [
        {
          title: '规范性文件',
          content: []
        },
        {
          title: '部门文件',
          content: []
        },
        {
          title: '政策解读',
          content: []
        },
      ],
      work: [
        {
          title: '个人办事',
          tips: "关心您生活的每一个细节，倾力为您提供优质的个人办事管家式服务",
          power: [
            {
              title: '生育收养',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2c517570372&ptypeCode=SY'
            },
            {
              title: '户籍办理',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2c552c30377&ptypeCode=HJ'
            },
            {
              title: '住房保障',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2d4215b03c8&ptypeCode=ZF'
            },
            {
              title: '社会保障',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2d455d903cd&ptypeCode=SB'
            },
            {
              title: '交通出行',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2d5243303e1&ptypeCode=JT'
            },
            {
              title: '就业创业',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2c6283c038b&ptypeCode=YC'
            },
            {
              title: '证件办理',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2d4dfa903dc&ptypeCode=ZL'
            },
            {
              title: '综合其他',
              url: 'https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2da09530428&ptypeCode=QT'
            },
          ]

        },
        {
          title: '法人办事',
          tips: "陪伴企业成长的每一个环节，全力打造一网通办服务平台",
          power: [
            {
              title: '设立变更',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2da6608042f&typePeoOrInc=peoservice&type=1&ptypeCode=BG'
            },
            {
              title: '知识产权',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2ee371204e6&typePeoOrInc=peoservice&type=1&ptypeCode=CQ'
            },
            {
              title: '资质认证',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2dabf790439&typePeoOrInc=peoservice&type=1&ptypeCode=ZR'
            },
            {
              title: '税收财务',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2e43c890483&typePeoOrInc=peoservice&type=1&ptypeCode=CW'
            },
            {
              title: '交通运输',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2ed007c04c3&typePeoOrInc=peoservice&type=1&ptypeCode=JY'
            },
            {
              title: '投资审批',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2e4c7110492&typePeoOrInc=peoservice&type=1&ptypeCode=TZ'
            },
            {
              title: '准营准办',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2da97bf0434&typePeoOrInc=peoservice&type=1&ptypeCode=BB'
            },
            {
              title: '年检年审',
              url: 'https://zwfw.nx.gov.cn/nxzw/frbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4373&ptypeId=2c9c80875cc848aa015cd2e3ff2e047e&typePeoOrInc=peoservice&type=1&ptypeCode=NJ'
            },
          ]
        }
      ],
      brief: {
        title: '监管平台简介',
        content: '  2022年2月21日，宁夏宁东科创创业投资有限公司、天翼云科技有限公司宁夏分公司、宁夏惠浩供应链管理有限公司三方本着诚意合作、互利共赢的原则，共同在宁东建设“宁东物流大数据中心”项目。“宁东物流大数据中心”是依托宁东能源化工基地整体业态的基础硬件资源优势，充分应用大数据、物联网、云计算等新兴信息技术，建设的一整套现代物流信息基础设施和高效的物流运营信息化支撑体系。通过打造跨行业和区域、供需对接、产业联动的物流大数据平台，满足宁东区域社会经济发展对物流的多样化需求。通过发挥平台的枢纽作用，整合社会物流资源，促进区域物流资源设施的共享，促进各种运输方式的互联协作，提高物流效率效益，降低物流成本，为宁东区域建设现代物流集聚区的战略目标提供基础支撑。建立规范、科学、有效、可持续的物流产业新业态，形成商流、资金流、物流和信息流互动的良性机制，最终形成以物流大数据资源为支撑的智慧物流产业全新局面。'
      },
      noticlists: ['企业', '个人'],
      options: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '外资企业'
      }, {
        value: '选项3',
        label: '中小企业'
      }, {
        value: '选项4',
        label: '民营企业'
      }, {
        value: '选项5',
        label: '国有企业'
      }],
      value: ''
    }
  },
  props: ['num'],
  mounted() {
    this.details()
  },
  methods: {
    // a(){
    //   axios.get('http://43.142.179.198:8081/www/server/nginx/img').then(res => {
    //     console.log(res);
    //     })
    // },
    details() {
      for (let i = 151; i < 154; i++) {
        axios.get(`http://43.142.179.198:8081/noticeList/get?type=${i}`).then(res => {
          if (i == 151) {
            this.notice[0].content = res.data
          } else if (i == 152) {
            this.notice[1].content = res.data
          } else {
            this.notice[2].content = res.data
          }
        })
      }
    },
    look(id) {
      sessionStorage.setItem("anLiId", id)
      const routeData = this.$router.resolve({
        name: 'anlidetail'
      })
      window.open(routeData.href, '_bank')
    },
    introdu() {
      this.$router
          .push({
            name: "introduce",
            params: {
              list: this.brief,
              empty: 2
            }
          })
    },
    // gotoPlat() {
    //   // 监管平台
    //   window.open('https://pc.huihaoyun.cn/login.html?v=1324/', '_blank');
    // },
    open() {
      window.open('http://43.142.179.198/transportation/index.html#/', '_blank');
      // http://222.75.204.3:8081/#/login
      // this.dialogVisible = true
      // this.input = {}
    },
    // determine(){
    //   if (this.input.password == 'nxhhy'&& this.input.account == 'nxhhy'){
    //     window.open('http://43.142.179.198/transportation/index.html#/', '_blank');
    //   }
    //   this.input = {}
    // },
    routers(url) {
      window.open(url, '_bank');
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}

.anliP {
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  float: left;
  width: calc(33% - 20px);
  height: 250px;
  cursor: pointer;
}

.anliP > img {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none
}

.firstTitle {
  font-size: 30px;
}

.supervise-flex {
  display: flex;
  justify-content: space-between;
}

.supervise-breadcrumb {
  padding-top: 20px;
  padding-left: 20px;

  .el-breadcrumb {
    ::v-deep .el-breadcrumb__inner {
      color: #ffffff;
    }

    ::v-deep .el-breadcrumb__inner.is-link:hover {
      color: #0068b7;
    }
  }
}

.query {
  width: 30%;
  height: 435px;
  background-color: #dcdcdc;
  padding: 4%;
  box-shadow: 0 1px 8px 1px rgb(29 107 204 / 50%);

  .el-button {
    width: 110px;
    height: 50px;
    background: #0068b7;
    color: white;
    border: none;
    margin-top: 30px;
  }

  .el-menu {
    width: 260px;
    background: rgba($color: #ffffff, $alpha: 0.0);
    border-bottom: none;

    .el-menu-item {
      width: 130px;
      color: white;
      font-size: 20px;
      font-weight: 600;
    }

    // ::v-deep .el-menu--horizontal{
    //   border-bottom: none;
    // }
    ::v-deep .el-menu-item:not(.is-disabled):hover {
      background: rgba($color: #ffffff, $alpha: 0.0);
    }

    .is-active {
      background: rgba($color: #ffffff, $alpha: 0.0);
      color: #0068b7;
      border-bottom: #0068b7 2px solid;
    }
  }

  div {
    margin-top: 10px;
  }

  h1 {
    color: white;
  }

  .el-select {
    width: 260px;

    ::v-deep .el-input__inner {
      border-radius: 5px;
    }

    ::v-deep .selected {
      color: black;
    }
  }
}

.supervise {
  width: 100%;

  .supervise-tips {
    color: #999;
  }

  div {
    margin-top: 10px;
  }

  .work {
    width: 30%;
    box-shadow: 0 1px 8px 1px rgb(29 107 204 / 50%);


    .supervise-text {
      padding: 20px;
    }

    .supervise-text-font {
      width: 30%;
      font-size: 20px;
      // text-decoration: underline red 2px;
      border-bottom: 1px solid red;
    }

    .img {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .subtitle {
      width: 100%;

      div {
        width: 21%;
        color: #0068b7;
        margin-top: 10px;
        padding: 0;
      }
    }
  }
}

.supervise-flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.body {
  width: 100%;
  height: 840px;
  background: url('@/assets/log/supervise_background.png');

  .center {
    width: 1200px;
    margin: auto;
    margin-top: 5%;

    .supervise-font {
      height: 20vh;
      margin-bottom: 5%;

      img {
        margin-left: 3%;
      }
    }

    .supervise-head {
      width: 1200px;
      height: 250px;
      background: rgba($color: #ffffff, $alpha: 0.9);
      display: flex;


      .img {
        width: 300px;
        height: 200px;
        margin-top: 2%;
        margin-left: 1%;
      }

      span {
        color: red;
      }

      .supervise-head-font {
        margin-top: 2%;
        line-height: 50px;
        margin-left: 2%;
      }
    }
  }
}

.notic-container {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 1%;

  // .font-color {
  //   margin-left: 1%;
  // }
  .notic-show {
    padding: 2px;
  }

  div {
    width: 30%;
    margin-right: 2%;

    div {
      width: 100%;

      .font {
        width: 100%;
      }
    }
  }
}

.content-border {
  width: 1200px;
  border: 1px solid #e5e5e5;
  margin: auto;
  margin-bottom: 10px;
  padding-bottom: 2%;
}

.supervise-login {
  margin-top: 10px;
  margin-right: 10px;

  // background-color: ;
  ::v-deep .el-button {
    height: 30px;
    border-radius: 50px;
    font-size: 15px;
    line-height: 0;
  }

  ::v-deep .el-button:hover {
    color: #0068b7;
  }
}

.pointer {
  cursor: pointer;
}

.BriefIntroduction {
  margin-top: 5vh;
  padding: 1%;
}
</style>