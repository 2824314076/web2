<template>
  <div class="main">
    <div>
      <div class="body">
        <div>
          <div style="display:flex;justify-content: space-between;">
            <div class="supervise-breadcrumb">
            </div>
            <div class="supervise-login">
              <el-button @click="open">登录</el-button>
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
                “宁东基地物流公共信息管理平台心”是依托宁东能源化工基地整体业态的基础硬件资源优势，充分应用大数据、物联网、云计算等新兴信息技术，建设的一整套...
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
        <!--        <div class="supervise supervise-flex">-->
        <!--          <div class="work" v-for="(item, index) in work" :key="index">-->
        <!--            <div class="supervise-text">-->
        <!--              <div class="supervise-text-font">{{ item.title }}</div>-->
        <!--              <div class="supervise-tips">{{ item.tips }}</div>-->
        <!--              <div class="supervise-flex subtitle">-->
        <!--                <div v-for="(ite, ind) in item.power" :key="ind" @click="routers(ite.url)" class="pointer">{{-->
        <!--                    ite.title-->
        <!--                  }}-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="img">-->
        <!--              <img src="@/assets/index/entertab6.png" style="width: 359px;height: 210px;" alt="">-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="query">-->
        <!--            <h1>我要找政策</h1>-->
        <!--&lt;!&ndash;            <div class="query-list">&ndash;&gt;-->
        <!--&lt;!&ndash;              <a style="background:url('http://www.hbzwfw.gov.cn/picture/0/1859bafc7c974d8cad0c021484dc902c.png') top center no-repeat;" href="" target="_blank">个人办事</a>&ndash;&gt;-->
        <!--&lt;!&ndash;              <a style="background:url('http://www.hbzwfw.gov.cn/picture/0/a27533b2a5714b90bd954d60936d8660.png') top center no-repeat;" href="" target="_blank">个人办事</a>&ndash;&gt;-->
        <!--&lt;!&ndash;              <a style="background:url('http://www.hbzwfw.gov.cn/picture/0/d2762ea19be546f18b547b6aedc26916.png') top center no-repeat;" href="" target="_blank">个人办事</a>&ndash;&gt;-->
        <!--&lt;!&ndash;              <a style="background:url('http://www.hbzwfw.gov.cn/picture/0/bdbb92294ce547298b8a020c77d72456.png') top center no-repeat;" href="" target="_blank">个人办事</a>&ndash;&gt;-->
        <!--&lt;!&ndash;            </div>&ndash;&gt;-->

        <!--          </div>-->
        <!--        </div>-->
        <div class="nxzw-cm-hd clearfix">
          <a id="geren" class="nxzw-cm-tt current" @mouseover="service('geren')">个人服务</a>
          <a id="faren" class="nxzw-cm-tt" @mouseover="service('faren')">法人服务</a>
        </div>
        <div id="gerenservice" class="nxzw-service-wrap nxzw-tab-person block">
          <div class="nxzw-per-bd clearfix">
            <ul class="nxzw-list-01 clearfix" style="display: flex;flex-wrap: wrap;justify-content: space-between;">
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2c90b3e039f&typePeoOrInc=peoservice&type=1&ptypeCode=ZY" target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-08.png">
                  </div>
                  <h4 class="name">准营准办</h4>
                  <p>设备进关&nbsp;&nbsp;|&nbsp;&nbsp;许可证</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2c65b060390&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=SL" target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-07.png">
                  </div>
                  <h4 class="name">设立变更</h4>
                  <p>设立学校&nbsp;&nbsp;|&nbsp;&nbsp;业务咨询</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2d3f3bb03c3&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=GH" target="_blank">
                  <div class="img iconimg09"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-07.png">
                  </div>
                  <h4 class="name">规划建设</h4>
                  <p>用地审批&nbsp;&nbsp;|&nbsp;&nbsp;社会团体</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2d4215b03c8&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=ZF" target="_blank">
                  <div class="img iconimg10"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-07.png">
                  </div>
                  <h4 class="name">住房保障</h4>
                  <p>住房公积金&nbsp;&nbsp;|&nbsp;&nbsp;贷款审核</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2c552c30377&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=HJ" target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-02.png">
                  </div>
                  <h4 class="name">户籍办理</h4>
                  <p>流动人员&nbsp;&nbsp;|&nbsp;&nbsp;就业报到证</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2d4dfa903dc&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=ZL" target="_blank">
                  <div class="img iconimg11"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-01.png">
                  </div>
                  <h4 class="name">证件办理</h4>
                  <p>证书核发&nbsp;&nbsp;|&nbsp;&nbsp;许可证补办</p>
                </a>
              </li>

              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2c975a803a9&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=ZZ" target="_blank">
                  <div class="img iconimg12"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-03.png">
                  </div>
                  <h4 class="name">职业资格</h4>
                  <p>证书申请&nbsp;&nbsp;|&nbsp;&nbsp;成绩查询</p>
                </a>
              </li>

              <li class="nxzw-service-node">
                <a class="nxzw-service-name" href="https://zwfw.nx.gov.cn/nxzw/grbs.jsp?urltype=tree.TreeTempUrl&wbtreeid=4348"
                   target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-06.png">
                  </div>
                  <h4 class="name">综合其他</h4>
                  <p>社会救助&nbsp;&nbsp;|&nbsp;&nbsp;交通出行</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="farenservice" class="nxzw-service-wrap nxzw-tab-person none">
          <div class="nxzw-per-bd clearfix">
            <ul class="nxzw-list-01 clearfix" style="display: flex;flex-wrap: wrap;justify-content: space-between;">
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&wbtreeid=4371&ptypeId=2c9c80875cc848aa015cd2c90b3e039f&typePeoOrInc=peoservice&type=1&ptypeCode=ZY" target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-08.png">
                  </div>
                  <h4 class="name">设立变更</h4>
                  <p>学校审批 | 法人变更</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2c65b060390&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=SL" target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-07.png">
                  </div>
                  <h4 class="name">准营准办</h4>
                  <p>机构审批&nbsp;&nbsp;|&nbsp;&nbsp;经营许可</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2d3f3bb03c3&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=GH" target="_blank">
                  <div class="img iconimg09"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-07.png">
                  </div>
                  <h4 class="name">资产认证</h4>
                  <p>生产许可&nbsp;&nbsp;|&nbsp;&nbsp;资产认定</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2d4215b03c8&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=ZF" target="_blank">
                  <div class="img iconimg10"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-07.png">
                  </div>
                  <h4 class="name">年检年审</h4>
                  <p>机构年检&nbsp;&nbsp;|&nbsp;&nbsp;企业认定</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2c552c30377&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=HJ" target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-02.png">
                  </div>
                  <h4 class="name">税收财务</h4>
                  <p>税收准核&nbsp;&nbsp;|&nbsp;&nbsp;立项确认</p>
                </a>
              </li>
              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2d4dfa903dc&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=ZL" target="_blank">
                  <div class="img iconimg11"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-01.png">
                  </div>
                  <h4 class="name">人力资源</h4>
                  <p>任职资格&nbsp;&nbsp;|&nbsp;&nbsp;养老保险</p>
                </a>
              </li>

              <li class="nxzw-service-node">
                <a class="nxzw-service-name"
                   href="https://zwfw.nx.gov.cn/nxzw/grbsztsx.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=4371&amp;ptypeId=2c9c80875cc848aa015cd2c975a803a9&amp;typePeoOrInc=peoservice&amp;type=1&amp;ptypeCode=ZZ" target="_blank">
                  <div class="img iconimg12"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-03.png">
                  </div>
                  <h4 class="name">社会保障</h4>
                  <p>方案备案&nbsp;&nbsp;|&nbsp;&nbsp;社会保险</p>
                </a>
              </li>

              <li class="nxzw-service-node">
                <a class="nxzw-service-name" href="https://zwfw.nx.gov.cn/nxzw/frbs.jsp?urltype=tree.TreeTempUrl&wbtreeid=4350"
                   target="_blank">
                  <div class="img iconimg01"><img alt="" src="https://zwfw.nx.gov.cn/nxzw/img/zwimg/icon-gr-06.png">
                  </div>
                  <h4 class="name">综合其他</h4>
                  <p>海关口岸&nbsp;&nbsp;|&nbsp;&nbsp;涉外服务</p>
                </a>
              </li>
            </ul>
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
      elinput:'',
      //以下为后端内容
      jianguan: [
        {src: '/img/anli/jianguan1.png', id: 0},
        {src: '/img/anli/jianguan2.png', id: 0},
        {src: '/img/anli/jianguan3.png', id: 0},
        {src: '/img/anli/jianguan2.png', id: 0},
        {src: '/img/anli/jianguan3.png', id: 0},
        {src: '/img/anli/jianguan1.png', id: 0},
      ],
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
      brief: {
        title: '平台简介',
        content: '  2022年2月21日，宁夏宁东科创创业投资有限公司、天翼云科技有限公司宁夏分公司、宁夏惠浩供应链管理有限公司三方本着诚意合作、互利共赢的原则，共同在宁东建设“宁东基地物流公共信息管理平台”项目。“宁东基地物流公共信息管理平台”是依托宁东能源化工基地整体业态的基础硬件资源优势，充分应用大数据、物联网、云计算等新兴信息技术，建设的一整套现代物流信息基础设施和高效的物流运营信息化支撑体系。通过打造跨行业和区域、供需对接、产业联动的公共信息管理平台，满足宁东区域社会经济发展对物流的多样化需求。通过发挥平台的枢纽作用，整合社会物流资源，促进区域物流资源设施的共享，促进各种运输方式的互联协作，提高物流效率效益，降低物流成本，为宁东区域建设现代物流集聚区的战略目标提供基础支撑。建立规范、科学、有效、可持续的物流产业新业态，形成商流、资金流、物流和信息流互动的良性机制，最终形成以物流大数据资源为支撑的智慧物流产业全新局面。'
      },
      noticlists: [{
        enterprise:"enterprise",
        name:"企业"
      },{
        enterprise:"individual",
        name:"个人"
      }],
      value: '',
      Enterprise:''
    }
  },
  props: ['num'],
  mounted() {
    this.details()
  },
  methods: {
    service(id) {
      if (id === 'geren') {
        document.getElementById('geren').className = 'nxzw-cm-tt current'
        document.getElementById('faren').className = 'nxzw-cm-tt'
        document.getElementById('gerenservice').className = 'nxzw-service-wrap nxzw-tab-person block'
        document.getElementById('farenservice').className = 'nxzw-service-wrap nxzw-tab-person none'
      } else {
        // console.log(document.getElementById(id))
        document.getElementById('faren').className = 'nxzw-cm-tt current'
        document.getElementById('geren').className = 'nxzw-cm-tt'
        document.getElementById('gerenservice').className = 'nxzw-service-wrap nxzw-tab-person none'
        document.getElementById('farenservice').className = 'nxzw-service-wrap nxzw-tab-person block'
      }
    },
    details() {
      for (let i = 151; i < 154; i++) {
        axios.post("http://43.142.179.198:8081/noticeList/get", null, {
          params: {
            type: i.toString(),
            ftype: '1002'
          }
          //foahs
        }).then(res => {
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
    open() {
      window.open('http://43.142.179.198/transportation/index.html#/', '_blank');
    },
    /*routers(url) {
      window.open(url, '_bank');
    }*/
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

.supervise {
  width: 100%;
  color: white;

    .supervise-tips {
      color: #999;
    }

  div {
    margin-top: 10px;
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

fieldset, img {
  border: 0;
}

img {
  overflow: clip;
}


ol, ul {
  list-style: none;

  li {
    text-align: -webkit-match-parent;
    margin-top: 2%;

    a {
      cursor: pointer !important;
      text-decoration: none !important;
      color: #222;
    }

    a:-webkit-any-link {
      color: -webkit-link;
      cursor: pointer;
    }

    .nxzw-service-name {
      display: block;
      width: 280px;
      height: 208px;
      line-height: 30px;
      text-align: center;
      border: 1px solid rgba(29, 107, 204, 0.15);
      border-radius: 3px;
      font-size: 16px;
      color: #666;
      box-shadow: 0 1px 8px 1px rgb(29 107 204 / 30%);
      transition: all 0.4s ease;

      .img {
        width: 94px;
        height: 94px;
        border-radius: 47px;
        text-align: center;
        margin: 20px auto;
        background: white;
      }
    }

    .name {
      color: black;
    }

    p {
      color: #4d4d4d;
    }
  }

  li:hover {
    transition: all 0.4s ease-in;
    background: #3877bd;

    .name, p {
      color: white;
    }
  }
}

.nxzw-cm-hd {
  width: 100%;
  height: 40px;
  line-height: 40px;

  .nxzw-cm-tt {
    margin-right: 45px;
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }

  .nxzw-cm-tt.current {
    color: #1d6bcc;
  }
}

.none {
  display: none;
}

.block {
  display: block;
}
</style>