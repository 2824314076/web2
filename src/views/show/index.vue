<template>
  <div class="all">
    <div class="banner">
      <div class="bd">
        <img alt="" src="https://www.ndkjcx.com/ndkjcxfwpt/template/images/banner.jpg" style="display: none;">
        <img alt="" src="https://www.ndkjcx.com/ndkjcxfwpt/template/images/banner2.jpg" style="display: none;">
        <img alt="" src="https://www.ndkjcx.com/ndkjcxfwpt/template/images/banner3.jpg">
      </div>
      <div class="hd">
        <ul>
          <li class="on"></li>
          <li class=""></li>
          <li class=""></li>
        </ul>
      </div>
    </div>
    <div class="block">
      <div class="sec_1" style="margin-bottom: 2vh">
        <div class="wrap">
          <div class="b_list">
            <div class="hd">
              <div class="col"></div>
              <ul>
                <li ref="Council" class="on" @click="routerto(1,'国务院公告')" @mouseenter="stateCouncil(0)">
                  <a>物流新闻</a></li>
                <li ref="region" class="" @click="routerto(2,'自治区公告')" @mouseenter="stateCouncil(1)">
                  <a>企业新闻</a></li>
              </ul>
            </div>
            <div class="bd">
              <!-- 工作动态 -->
              <div class="tab_con">
                <div class="focus">
                  <div class="f_bd">
                    <el-carousel indicator-position="outside">
                      <el-carousel-item v-for="item in banner" :key="item.id">
                        <img :src="item.img" style="width:100%;height: 100%;">
                        <span>{{ item.title }}</span>
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </div>

                <div class="msg_list">
                  <ul>
                    <li v-for="(item,index) in information[0].content" :key="index">
                      <div class="date">
                        <p>{{ item.date.substring(5, 10) }}</p>
                        <h2>{{ item.date.substring(0, 4) }}</h2>
                      </div>
                      <a href="https://www.ndkjcx.com/detail.thtml?id=8421" target="_blank">
                        <div class="info">
                          <h1 class="text-overflow">{{ item.title }}</h1>
                          <p class="text-overflow"></p>
                        </div>
                      </a>
                    </li>
                  </ul>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="side_tool_bar">
        <div class="top_tt"><a>快速人口</a></div>
        <ul>
          <li>
            <a href="http://www.ndkjcx.com/information.thtml?cid=10941">
              <div class="pp">
                <i class="iconfont icon-xinxihuaxiangmu"></i>
                <p>信息化项目<br>管理</p>
              </div>
            </a>
          </li>
          <li>
            <a href="http://www.ndkjcx.com/information.thtml?cid=10941&amp;index=1">
              <div class="pp">
                <i class="iconfont icon-zijinzhangbian"></i>
                <p class="sm">资金申报</p>
              </div>
            </a>
          </li>
          <li>
            <a href="http://www.ndkjcx.com/talent.thtml?cid=10934#talent_1">
              <div class="pp">
                <i class="iconfont icon-rencaifuwu"></i>
                <p class="sm">人才申报</p>
              </div>
            </a>
          </li>
          <li>
            <a href="http://www.ndkjcx.com/require.thtml?cid=10973">
              <div class="pp">
                <i class="iconfont icon-minyizhengji"></i>
                <p>技术创新<br>需求征集</p>
              </div>
            </a>
          </li>
          <li>
            <a href="http://www.ndkjcx.com/achievement.thtml?cid=10974">
              <div class="pp">
                <i class="iconfont icon-fabu"></i>
                <p>科技成果<br>发布</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div class="pp">
                <i class="iconfont icon-weixin"></i>
                <p>微信公众号</p>
              </div>
            </a>
            <div class="ewm">
              <img alt="" src="https://www.ndkjcx.com/ndkjcxfwpt/template/images/side_tool_bar_ewm.png">
            </div>
          </li>
        </ul>
      </div>
      <div id="notice">
        <div class="notic-container">
          <div>
            <div class="sec_3">
              <div class="wrap">
                <div class="news_plat">
                  <div class="col_title">
                    <div class="title">新闻公告</div>
                    <div class="col bgfff"><a href="https://www.ndkjcx.com/sub_list_main.thtml?cid=10929">更多..</a>
                    </div>
                  </div>
                  <div class="list">
                    <div class="con_tabs">
                      <div class="hd">
                        <ul>
                          <li ref="Notice" class="on" @mouseenter="stateNotice(3)">公示公告</li>
                          <li ref="medium" class="" @mouseenter="stateNotice(5)">媒体聚焦</li>
                        </ul>
                      </div>
                      <div class="bd">
                        <!-- 国家级政策 -->
                        <ul class="news_list_st2">
                          <li v-for="(item,index) in announcement" :key="index">
                            <a :href="item.content" target="_blank">
                              {{ item.title }} </a>
                            <div style="text-align: end;">
                              <div><span>{{ item.date.slice(0, 4) }}</span></div>
                              <div><span>{{ item.date.slice(5, 10) }}</span></div>
                            </div>
                            <!--                          {{item}}-->
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="backcolor">
            <div class="video_title">
              <div class="wrap">
                <div class="col_title">
                  <div class="title">综合监管简介</div>
                  <div class="col">
                  </div>
                </div>
              </div>
              <!--              <notic-table :type="this.viodes" class="notic-item" title="信息管理平台视频"/>-->
            </div>
            <div class="notic-padding">
              <video controls>
                <source :src="this.viodes[0].video">
              </video>
            </div>
          </div>
        </div>
        <div class="sec_2">
          <div class="wrap">
            <div class="col_title">
              <div class="title">平台简介</div>
              <div class="col">
              </div>
            </div>

            <div class="yw_tab">
              <div class="bd">
                <div class="con">
                  <img src="https://www.ndkjcx.com/ndkjcxfwpt/template/images/pic1.jpg">
                  <div class="info">
                    <div class="msg msg1">
                      宁东能源化工基地（以下简称宁东基地）是国务院批准的国家重点开发区，是国家重要的大型煤炭生产基地、“西电东送”火电基地、煤化工产业基地和循环经济示范区，是国家产业转型升级示范区、现代煤化工产业示范区、新型工业化产业示范基地和外贸转型升级基地...
                    </div>
                    <a class="btn" target="_blank" @click="details()">查看详情</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="goto-net">
        <div id="net-container">
          <div class="wrap">
            <div class="col_title">
              <div class="title">办事直通</div>
              <div class="col">
              </div>
            </div>
          </div>
          <div class="nxzw-guess">
            <ul class="nxzw-guess-list">
              <li class="item-li">
                <a href="https://zwfw.nx.gov.cn/ndq/index.htm" target="_blank">宁夏政务服务网</a>
              </li>
              <li class="item-li">
                <a href="https://zwfw.nx.gov.cn/zwfw/weblink.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=5886&amp;weblink=etax"
                   target="_blank">我要办税</a>
              </li>
              <li class="item-li">
                <a href="http://www.smend.cn/index.shtml" target="_blank">宁东中小企业创新服务平台</a>
              </li>
              <li class="item-li">
                <a href="http://ningdong.nx.gov.cn/" target="_blank">宁夏宁东能源化工基地</a>
              </li>
              <li class="item-li">
                <a href="https://zwfw.nx.gov.cn/nxzw/zt_rsfw.jsp?urltype=tree.TreeTempUrl&wbtreeid=4438"
                   target="_blank">我要办社保</a>
              </li>
              <li class="item-li">
                <a href="https://zwfw.nx.gov.cn/nxzw/zt_sffw.jsp?urltype=tree.TreeTempUrl&wbtreeid=4439"
                   target="_blank">我要找律师</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--<GoodDesigner></GoodDesigner>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import NoticTable from '@/views/components/NoticTable.vue'
// import NoticList from '@/views/components/NoticList.vue'
import IntroDuce from '@/views/show/IntroduceMe'
import router from "@/router";

export default {
  name: 'FirstPage',
  components: {
    // NoticTable,
    // NoticList,
    // eslint-disable-next-line vue/no-unused-components
    IntroDuce
  },
  data() {
    return {
      viodes: [
        {
          video: 'http://43.142.179.198/video/OpenEmpowerment.mp4'
        }
      ],
      activeIndex: '1',
      information: [
        {
          title: '国务院信息',
          content: []
        },
        {
          title: '自治区信息',
          content: []
        },
        {
          title: '宁东动态',
          content: []
        }
      ],
      announcement: [],
      recruit: [
        {
          title: '招贤纳士',
          content: []
        },
        {
          title: '校企合作',
          content: []
        }
      ],
      platform: [
        {
          title: '合作方向',
          img: require('@/assets/index/img1.png'),
          content: []
        },
        {
          title: '投资咨询',
          img: require('@/assets/index/img2.png'),
          content: []
        },
      ],
      entertab: [
        {
          labels: '简介',
          img: require('@/assets/index/entertab1.png'),
          texts: "宁东能源化工基地（以下简称宁东基地）是国务院批准的国家重点开发区，是国家重要的大型煤炭生产基地、“西电东送”火电基地、煤化工产业基地和循环经济示范区，是国家产业转型升级示范区、现代煤化工产业示范区、新型工业化产业示范基地和外贸转型升级基地，也是宁夏高质量发展示范区、高新技术产业开发区和化工园区。 宁夏宁夏回族自治区人民政府《关于宁东能源化工基地现代煤化工产业示范区总体规划的批复》（宁政函〔2019〕49号）中提出：建成以煤制烯烃",
        },
      ],
      brief: {
        title: '宁东基地物流公共信息管理平台平台简介',
        content: '宁东能源化工基地（以下简称宁东基地）是国务院批准的国家重点开发区，是国家重要的大型煤炭生产基地、“西电东送”火电基地、煤化工产业基地和循环经济示范区，是国家产业转型升级示范区、现代煤化工产业示范区、新型工业化产业示范基地和外贸转型升级基地，也是宁夏高质量发展示范区、高新技术产业开发区和化工园区。宁夏宁夏回族自治区人民政府《关于宁东能源化工基地现代煤化工产业示范区总体规划的批复》（宁政函〔2019〕49号）中提出：建成以煤制烯烃、乙二醇项目为龙头，发展通用树脂、合成橡胶、工程塑料及专用化学品等下游特色产业，形成具有较强竞争力的产业链和产业集群，着力推动现代煤化工产业创新发展，构建现代煤化工产业体系，打造技术领先、行业领军、世界一流的国家级现代煤化工产业示范区，为推进全区高质量发展和国家能源战略安全作出新的更大贡献。《宁东能源化工基地“十四五”发展规划》提出：加快建设数字化产业服务平台，实施宁东基地工业互联网发展和工业大脑建设项目，完成企业数字化转型和园区产业数字化，构建全要素、全产业链、全价值链全面连接的新型工业生产制造和服务体系，实现智能化生产、网络化协同、个性化定制、服务化延伸，支持第三方服务机构建立集营商服务、金融服务、科技服务、研发服务、商务服务、公共服务等为一体的开放性数字化公共服务平台，形成上下游产业链数字化、网络化、智能化协同创新的产业级工业互联网平台。强化危化品全链条管理，建立健全危化品安全生产责任链条，实施全链条、全流程、全风险安全监管，坚决防范较大及以上事故发生，有力防范化解危险化学品系统性安全风险。宁东基地物流公共信息管理平台定位：建设宁东煤化工产业互联网服务平台，运用先进的信息技术，构建全要素、全产业链、全价值链的产业级工业互联网平台，推动宁东煤化工产业的数智化转型。利用区块链、物联网、北斗定位、移动互联网等先进技术，依托宁东煤化工产业链优势，打造宁东基地物流公共信息管理平台，实现一下目标：（1）构建支持危化品货物运输的核心业务流程，支持多级调度、线上竞价、双重运输、客户互动、安全监控以及应急管理的危化品运输管理平台；（2）构建对危化品货物运输全流程监管的政府监管大数据平台；（3）对危化品的端到端物流管理，实现危化品运输全过程的可溯源管理；（4）构建平台-车队、车队-车辆两级托单调度体系；（5）支持双重、多级调度、线上竞价等业务模式，降低运输成本。'
      },
      temporary: '',
      title: '',
      dynamic: [],
      homecarousel: [
        {
          img: 'http://ningdong.nx.gov.cn/ztxc/202210/W020221028853120264965.jpg',
          url: 'http://ningdong.nx.gov.cn/xwdt_277/nddt/202210/t20221016_3806562.html'
        }, {
          img: 'http://ningdong.nx.gov.cn/ztxc/202209/W020220924752473138821.png',
          url: 'http://www.gov.cn/zhuanti/zswzjjylzzccs/index.htm'
        }, {
          img: 'http://ningdong.nx.gov.cn/ztxc/202012/W020220727393152960199.jpg',
          url: 'http://ningdong.nx.gov.cn/xwdt_277/nddt/202206/t20220616_3573596.html'
        }, {
          img: 'http://ningdong.nx.gov.cn/ztxc/202204/W020220415575678592857.jpg',
          url: ''
        }, {
          img: 'http://ningdong.nx.gov.cn/ztxc/202112/W020211208409361479182.png',
          url: 'https://zljdj.ndkcpip.cn:8010/ServicePlatform/homePage.do'
        },
        // {
        //   img: 'http://ningdong.nx.gov.cn/ztxc/202104/W020210402430433032301.jpg',
        //   url: 'http://ningdong.nx.gov.cn/ztzl/dsxxjy/'
        // },
        {
          img: 'http://ningdong.nx.gov.cn/ztxc/202012/W020210118552774863590.jpg',
          url: 'http://zwfw.nx.gov.cn/ndq/'
        },
        {
          img: 'http://ningdong.nx.gov.cn/ztxc/202011/W020210118563445892057.jpg',
          url: ''
        },
      ],
      bannerPictures: [
        {
          img: 'http://ningdong.nx.gov.cn/xwdt_277/202302/W020230216774336196336.jpg',
          title: '科创宁东',
          content: 'http://ningdong.nx.gov.cn/ztzl/kcnd/',
        },
        {
          img: "http://ningdong.nx.gov.cn/xwdt_277/202303/W020230306365515915162.jpg",
          title: '最全！一图读懂2023年《政府工作报告》',
          content: 'http://www.gov.cn/xinwen/2023-03/05/content_5744713.htm',
        },
        {
          img: 'http://ningdong.nx.gov.cn/xwdt_277/nddt/202303/W020230311609479015319.png',
          title: '一图读懂国务院机构改革方案',
          content: 'https://www.nx.gov.cn/zwxx_11337/wzttx/202303/t20230309_3988843.html',
        }
      ],
      zzq: [
        {
          img: 'https://www.ndkjcx.com/ndkjcxfwpt/upload/2023-01-19/1674111141373ff80808185b86f6b1980185c8ccc5fd263e.jpg',
          title: '自治区科技厅宁东管委会“揭榜挂帅”项目榜单',
          content: 'https://www.ndkjcx.com/detail.thtml?id=7870',
        },
      ],
      banner: []
    }
  },
  //components:{AnLi, GoodDesigner,},
  mounted() {
    this.banner = this.bannerPictures
    this.detailed()
  },
  methods: {
    script() {

    },
    stateCouncil(i) {
      this.dynamic = []
      axios.post("http://43.142.179.198:8081/noticeList/get", null, {
        params: {
          type: (i + 1).toString(),
          ftype: "1001"
        }
      }).then(res => {
        this.information[0].content = res.data.slice(0, 5)
      })
      if (i == 0) {
        this.banner = this.bannerPictures
        this.$refs.Council.className = "on"
        this.$refs.region.classList = ""
      } else {
        this.banner = this.zzq
        this.$refs.Council.className = ""
        this.$refs.region.classList = "on"
      }
      console.log(this.$refs.tab_focus.className)
    },
    stateNotice(i) {
      axios.post("http://43.142.179.198:8081/noticeList/get", null, {
        params: {
          type: (i + 1).toString(),
          ftype: "1001"
        }
      }).then(res => {
        this.announcement = res.data.slice(0, 4)
      })
      if (i == 3) {
        this.$refs.Notice.className = "on"
        this.$refs.medium.className = ""
      } else {
        this.$refs.Notice.className = ""
        this.$refs.medium.className = "on"
      }
      console.log(i)
    },
    detailed() {
      for (let i = 0; i < 15; i++) {
        if (i <= 2) {
          axios.post("http://43.142.179.198:8081/noticeList/get", null, {
            params: {
              type: (i + 1).toString(),
              ftype: "1001"
            }
          }).then(res => {
            this.information[i].content = res.data.slice(0, 5)
          })
        } else if (i == 3) {
          axios.post("http://43.142.179.198:8081/noticeList/get", null, {
            params: {
              type: (i + 1).toString(),
              ftype: '1001'
            }
          }).then(res => {
            this.announcement = res.data.slice(0, 4)
            console.log(this.announcement)
          })
        } else if (i == 5 || i == 6) {
          axios.post("http://43.142.179.198:8081/noticeList/get", null, {
            params: {
              type: (i + 1).toString(),
              ftype: '1001'
            }
          }).then(res => {
            if (i == 5) {
              if (res.data.length >= 5) {
                for (let index = 0; index <= 5; index++) {
                  this.recruit[0].content.push(res.data[index])
                }
              } else {
                this.recruit[0].content = res.data
              }
            } else {
              if (res.data.length >= 5) {
                for (let index = 0; index <= 5; index++) {
                  this.recruit[1].content.push(res.data[index])
                }
              } else {
                this.recruit[1].content = res.data
              }
            }
          })
        }else if (i == 12 || i == 13) {
          axios.post("http://43.142.179.198:8081/noticeList/get",null,{
            params:{
              type:(i + 1).toString(),
              ftype: '1001'
            }
          }).then(res => {
            if (i == 12) {
              this.platform[0].content = res.data
            } else {
              this.platform[1].content = res.data
            }
          })
        }
      }
    },
    details() {
      this.$router
          .push({
            name: "introduce",
            params: {
              list: this.brief,
              empty: 2
            }
          })
    },
    to(url) {
      if (url !== '') {
        window.open(url, '_blank')
      }
    },
    routers(list) {
      this.str = list.content;
      this.str = this.str.match(/^http[s]?:\/\/.*/);
      if (list.content == '') {
        this.$router.push({
          name: 'introduce',
          params: {
            list: "暂无内容",
            empty: 1
          }
        })
      } else if (this.str !== null) {
        window.open(list.content, '_blank')
      } else {
        this.$router.push({
          name: 'introduce',
          params: {
            list: list,
            empty: 2
          }
        })
      }
      // console.log(list)
    },
    routerto(i, title) {
      // console.log(i,title)
      router.push({
        name: "gonglue",
        params: {type: i, title: title}
      })
    }
  },
  filters: {
    limit: function (value, num) {
      const nums = num || '150';
      if (value.length > nums) {
        return value.slice(0, nums) + '...';
      }
    }
  },
}
</script>

<!--suppress CssUnknownTarget -->
<style lang="scss" scoped>
.all {
  width: 100%;
  overflow: hidden;
}

.block {
  width: 63.9%;
  margin: auto;
  //padding: 0 23px;
  z-index: -1;
}

.block-content {
  display: flex;
  justify-content: center;
}

.index-carousel {
  width: 32vw;
  height: 42vh;


}

.index-table {
  width: 35vw;
  height: 20vh;
  margin-left: 2%;
}

.notic-container {
  width: 100%;
  height: 45vh;
  display: flex;
  background-color: #ebf0fc;

  video {
    width: 100%;
  }

  .font {
    width: 300px;
  }
}
.notic-contain {
  width: 100%;

  div {
    width: 100%;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.firstTitle {
  font-size: 30px;
}

.secondTitle {
  font-size: 15px;
  color: grey;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

#notice {
  min-height: calc(100vh - 381px);
  margin-top: 30px;
}

//#goto-net {
//  min-height: 10vw;
//}

#net-container {
  width: 100%;
  margin: 0 auto;

  .wrap {
    margin-bottom: 4vh;

    .col_title {
      position: relative;

      .title {
        height: 5vh;
        background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/title_bg.png') no-repeat !important;
        width: 20vw;
        z-index: 3;
        position: absolute;
        text-align: center;
        line-height: 5vh;
        color: #fff;
        font-size: 2vh;
        font-weight: bold;
        padding-left: 3.5vw;
      }

      .col {
        background-color: #eff1f6;
        height: 4vh;
        position: relative;
        width: 100%;
        top: 11px;
        z-index: 1;
        border-radius: 0 0 0 6px;
      }
    }
  }
}

.nxzw-title {
  font-size: 24px;
  color: #000;
  height: 28px;
  font-weight: bold;
  margin-bottom: 16px;
}

.nxzw-guess .nxzw-guess-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.nxzw-guess .nxzw-guess-list .item-li {
  //float: left;
  width: 15vw;
  height: 6vh;
  line-height: 60px;
  margin: 15px 30px;
  text-align: center;

  a {
    font-size: 2vh !important;
  }
}

.nxzw-guess {
  //height: 249px;
  background: url('~@/assets/cnxb-bg.png') no-repeat;
}

.nxzw-guess .nxzw-guess-list .item-li a:hover {
  color: #fff;
  background: #f0a70a;
}

.nxzw-guess .nxzw-guess-list .item-li a {
  display: block;
  line-height: 60px;
  color: #268cd0;
  font-size: 18px;
  transition: all 0.2s;
  background: #fff;
  box-shadow: 0 4px 8px 1px rgb(29 107 204 / 30%);
  border: 1px solid rgba(29, 107, 204, 0.15);
}

a {
  cursor: pointer !important;
  text-decoration: none !important;
  color: #222;
}

.notice-table {
  width: 49%;
  float: left;
  height: 360px;
  border: 1px solid #e5e5e5;
  position: relative;
}

.fenge {
  float: left;
  width: 1px;
  height: 450px;
  background-color: grey;
}

/*轮播图+信息*/
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
  line-height: 0;
}

.img {
  width: 100%;
  height: 100%;
}

.carousel {
  display: flex;
  justify-content: center;

  ::v-deep .el-carousel__indicators--outside {
    display: none;
  }
}


.notic-table {
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;

}

.font-color {
  width: 60px;
  height: 30px;
  text-align: center;
  background: #0068b7;
  color: white;
  margin-right: 10px;
  line-height: 30px;
}

.text {
  text-align: center;
}

.marin {
  margin-right: 3%;
}

.box {
  width: 95%;
}

.title-content {
  display: flex;
  justify-content: end;
}

.recruit {
  margin-top: 4%;
  margin-bottom: 8%;

  .enter {
    width: 100%;
    margin-left: 3%;
    //height: 60v;

    .enter-font {
      margin-right: 4vw;
    }

    .pane-notic {
      margin-left: 1%;
      width: 14vw;
      height: 20vh;
      font-size: 15px;
      font-family: 'Microsoft YaHei';
    }
  }

  .recruit-frist {
    width: 23vw;
    height: 32vw;
    border: solid 1px #e5e5e5;
    background-color: #f4f4f4;
    padding: 2%;
  }

  .recruit-box {
    width: 100%;
    margin: auto;
    background-color: #fff;
    padding: 10px;
    margin-top: 1vh;

    div {
      font-size: 14px;
      line-height: 26px;
      margin-left: 10px;

      h2 {
        color: #0068b7;
        margin-top: 10px;
      }
    }
  }
}

.menu {
  width: 100%;

  .el-menu-item:not(.is-disabled):hover {
    color: #0068b7;
    border-bottom-color: #0068b7;
  }

  .el-menu-item {
    color: #000;
  }

  .el-menu-item.is-active {
    color: red !important;
    border-bottom: #0068b7;
  }
}

.information {
  width: 100%;
}

.switch {
  width: 900px;

  div:hover {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid #0068b7;
  }

  div {
    font-size: 20px;
    font-family: "微软雅黑";
  }
}

.switch-margin {
  margin-right: 5%;
}

.backcolor {
  width: 47%;
  margin-top: 1%;

  .video_title {
    margin-bottom: 5%;

    .wrap {
      margin: 0 auto;

      .col_title {
        position: relative;

        .title {
          height: 5vh;
          background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/title_bg.png') no-repeat !important;
          width: 20vw;
          z-index: 3;
          position: absolute;
          text-align: center;
          line-height: 5vh;
          color: #fff;
          font-size: 2vh;
          font-weight: bold;
          padding-left: 3.5vw;
        }

        .col {
          background-color: #ffffff;
          height: 4vh;
          position: relative;
          width: 100%;
          top: 11px;
          z-index: 1;
          border-radius: 0 0 0 6px;
        }
      }
    }

  }

  .font-color {
    width: 25vw;
    height: 4vh;
    text-align: center;
    background: #0068b7;
    color: white;
    margin-right: 1vw;
    line-height: 30px;
  }

  .fonts {
    //width: 100%;
    text-align: center;
  }
}

.size {
  font-size: 2vh;
  font-weight: 600;
}

.el-tabs {
  ::v-deep .el-tabs__item.is-active {
    color: #0068b7;
  }

;

  ::v-deep .el-tabs__item:hover {
    color: #0068b7;
    font-weight: 600;
  }

  ::v-deep .el-tabs__active-bar {
    background-color: #0068b7;
  }

  ::v-deep .el-tabs__item {
    font-size: 18px;
  }
}

.el-menu {
  width: 400px;
  height: 20px;
  border: 0;

  .el-menu-item {
    height: 30px;
    line-height: 30px;
    font-size: 20px;

  }

  .el-menu-item:hover {
    font-weight: 600;
  }

  ::v-deep .is-active {
    border-bottom: 2px solid #0068b7;
    font-weight: 600;
  }
}

.sec_1 {
  .wrap {
    //width: 1200px;
    margin: 10vh auto;

    .b_list {
      margin-top: 30px;

      .hd {
        height: 56px;
        position: relative;

        .col {
          background-color: #f0f2f7;
          height: 40px;
          position: absolute;
          width: 100%;
          top: 11px;
          z-index: 1;
        }

        ul {
          display: flex;

          li {
            width: 15vw;
            height: 6vh;
            text-indent: 3vw;
            line-height: 5vh;
            padding-top: 10px;
            position: relative;
            z-index: 2;

            a {
              color: #fff;
              font-size: 15px;
              font-weight: bold;
              display: block;
              font-size: 20px;
              color: #333;
            }
          }

          .on {
            background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/title_bg.png') no-repeat -30px 0;

            a {
              color: #fff;
              line-height: 33px;
            }
          }
        }
      }

      .bd {
        background-color: rgb(255, 255, 255, 0.8);
        margin-top: 20px;

        .tab_con {
          display: flex;
          justify-content: space-between;

          .focus {
            width: 654px;
            height: 391px;
            position: relative;

            .f_hd {
              height: 15px;
              overflow: hidden;
              position: absolute;
              right: 20px;
              bottom: 11px;
              z-index: 1;

              ul {
                overflow: hidden;
                zoom: 1;
                float: left;

                li {
                  float: left;
                  margin-right: 6px;
                  width: 31px;
                  height: 6px;
                  line-height: 14px;
                  text-align: center;
                  background: #fff;
                  cursor: pointer;
                  border-radius: 30px;
                }

              }
            }

            .f_bd {
              position: relative;
              height: 100%;
              z-index: 0;

              span {
                width: 100%;
                height: 10%;
                line-height: 30px;
                position: absolute;
                top: 90%;
                right: 0px;
                z-index: 1;
                background: rgba($color: #000, $alpha: 0.6);
                color: white;
              }
            }
          }

          .msg_list {
            width: 523px;

            li {
              min-height: 54px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 10px 0 13px;

              .date {
                width: 4vw;
                height: 6.7vh;
                float: left;
                text-align: center;
                flex-shrink: 0;
                border-radius: 6px;
                background-color: #f0f3fa;
                padding-top: .5vh;
                //dhajsfjadfhxuanflhxcwjf;xfiz,dwuualf
                //margin-top background padding flex-shrink text-align float height width border-radius
                p {
                  font-size: 18px;
                  font-weight: bold;
                  color: #333;
                  padding-top: 8px;
                }

                h2 {
                  color: #333;
                  font-size: 18px;
                  margin-top: -5px;
                }

              }

              a {
                display: block;
                width: calc(100% - 72px);
              }

              .info {
                padding-left: 10px;

                h1 {
                  font-size: 18px;
                  color: #333;
                  font-weight: normal;
                  padding-top: 2px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }

                p {
                  font-size: 14px;
                  color: #c0bfbf;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }
    }
  }
}

ul {
  list-style: none;
}

.sec_2 {
  width: 100%;
  padding-top: 40px;

  .wrap {
    margin: 0 auto;

    .col_title {
      height: 10vh;
      position: relative;

      .title {
        height: 5vh;
        background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/title_bg.png') no-repeat !important;
        width: 20vw;
        padding-right: 10px;
        z-index: 3;
        position: absolute;
        text-align: center;
        line-height: 5vh;
        color: #fff;
        font-size: 2vh;
        font-weight: bold;
        padding-left: 4vw;

      }

      //.title {
      //  background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/title_bg.png') no-repeat !important;
      //}

      .col {
        background-color: #f0f2f7;
        height: 4vh;
        position: relative;
        width: 100%;
        top: 11px;
        z-index: 1;
        border-radius: 0 0 0 6px;
      }
    }

    .yw_tab {
      position: relative;
      top: -44px;
      z-index: 3;

      .bd {
        margin-top: 20px;

        .con {
          display: flex;
          justify-content: space-between;

          img {
            border-radius: 5px;
            border: 5px solid #f0f2f7;
            width: 563px;
            height: 329px;
          }

          .info {
            margin-left: 25px;
            text-align: justify;
            font-size: 13px;
            color: #666;
            border-radius: 6px;
            position: relative;
            background-color: #f0f2f7;

            .btn {
              position: absolute;
              bottom: 25px;
              left: 25px;
              width: 170px;
              height: 38px;
              text-align: center;
              line-height: 38px;
              font-size: 14px;
              color: #fff;
              background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/btn_bg.png') no-repeat;
            }
          }

          .msg {
            line-height: 1.9;
            font-size: 15px;
            padding: 20px 25px;
            color: #666;
          }

          .msg.msg1 {
            line-height: 3.2;
            padding-top: 23px;
          }
        }

      }
    }
  }
}

::v-deep .el-carousel__container {
  position: relative;
  height: 40vh;
}

.sec_3 {
  width: 100%;
  //padding-bottom: 4vh;
  padding-top: 1vh;
  margin-right: 5vh;
  margin-bottom: 5vh;

  .wrap {
    display: flex;
    justify-content: space-between;

    .news_plat {
      width: 30vw;
      margin: 0 auto;

      .col_title {
        height: 56px;
        position: relative;

        .title {
          height: 50px;
          background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/title_bg.png') no-repeat;
          width: 15vw;
          padding-right: 10px;
          z-index: 3;
          position: absolute;
          //text-align: center;
          line-height: 51px;
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          padding-left: 15%;
          background-size: 100% 100%;
        }

        .col {
          background-color: #f0f2f7;
          height: 39px;
          position: relative;
          width: 100%;
          top: 11px;
          z-index: 1;
          border-radius: 0 0 0 6px;
        }

        .bgfff {
          background-color: #fff;
        }
      }

      .list {
        margin-top: 10px;
        height: 325px;
        box-shadow: 0px 4px 11px 0px rgba(180, 191, 212, 0.34);
        background-color: #fff;

        .con_tabs {
          .hd {
            box-shadow: 0px 4px 11px 0px rgba(180, 191, 212, 0.34);
            padding: 12px 0;

            ul {
              display: flex;
              justify-content: space-around;

              li {
                width: 170px;
                height: 38px;
                background-color: #f4f4f4;
                text-align: center;
                line-height: 38px;
                border-radius: 5px;
                border: 1px dashed #fff;
              }

              .on {
                background-color: #d9e8ff;
                border: 1px dashed #2e81fc;
              }
            }
          }
        }

        .news_list_st2 {
          padding: 10px 10px 0 10px;

          li {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 15px;
            justify-content: space-between;
            background: url('https://www.ndkjcx.com/ndkjcxfwpt/template/images/news_dot.png') no-repeat 0 center;
            margin: 4px 0 20px 0;

            a {
              width: 90%;
              background-color: transparent;
              font-size: 1.7vh !important;
              color: #333;
            }

            span {
              font-size: 16px;
              color: #999;
            }

            a:hover {
              color: #fd661d;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}

.banner {
  position: relative;
  height: 40vh;

  .hd {
    background: url("https://www.ndkjcx.com/ndkjcxfwpt/template/images/banner_hd_bg.png") no-repeat 0 0;
    width: 20vw;
    height: 60vh;
    position: absolute;
    z-index: 999;
    bottom: 10px;
    left: 50%;
    top: 100%;
    margin-left: -182px;
    margin-top: -13vh;

    ul {
      width: 55%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li {
        margin-top: 15px;
        border-radius: 15px;
        width: 50px;
        height: 10px;
        background-color: #0e92f7;
      }

      .on {
        background-color: #fff;
      }
    }
  }

  .bd {
    position: absolute;
    z-index: 0;
  }

}

#side_tool_bar {
  width: 100%;
  border: 1px solid #0075ed;
  background-color: rgba(57, 127, 255, 0.149);
  z-index: 999;
  /* top: 63px; */
  top: 570px;
  border-radius: 10px;

  .top_tt {
    text-align: center;
    background-color: #0075ed;
    border-radius: 9px 9px 0 0;
    height: 5vh;
    line-height: 5vh;
    //display: flex;
    //justify-content: space-around;

    a {
      font-size: 2.5vh;
      color: white;
      font-weight: 900;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    height: 15vh;


    li:hover {
      background: linear-gradient(to bottom right, #3badfe, #3a8efe);

      .ewm {
        display: initial;
      }

      .iconfont {
        color: white;
      }

      a {
        background-color: transparent;

        .pp {
          i {
          }

          .iconfont {
          }

          p {
            color: #fff;
          }
        }
      }
    }

    li {
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.302);
      width: 10vh;
      height: 10vh;
      border: 1px solid #fff;
      margin: 2.5vh auto;

      .ewm {
        display: none;
        position: relative;
        left: 4.5vw;
        top: -10vh;
      }

      a {
        background-color: transparent;

        .pp {
          text-align: center;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          i {
            font-size: 32px;
            color: #064a95;
          }

          .iconfont {
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          p {
            color: #064a95;
            font-size: 13px;
            line-height: 15px;
            width: 100%;
            margin-top: -7px;
            text-indent: 0;
          }
        }
      }

      a:hover {
        color: #1787e0;
        text-decoration: none;
      }
    }
  }
}

li {
  a {
    font-size: 2.5vh !important;
  }
}
</style>