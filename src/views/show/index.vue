<template>
  <div class="block">
    <div class="block-content">
      <el-carousel class="index-carousel">
        <el-carousel-item v-for="(item, index) in bannerPictures" :key="index">
          <!--<img :src="item.content" />-->
          <img class="img" :src="item.img" @click="routers(item)"/>
          <span>{{ item.title }}</span>
        </el-carousel-item>
      </el-carousel>
      <div class="index-table">
        <div class="flex">
<!-- div(){ -->

          <div class="switch title switch-margin">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
              <el-menu-item @click="stateCouncil(index)" v-for="(item, index) in information" :key="index"
                            :index="(index + 1).toString()">
                {{ item.title }}
              </el-menu-item>
            </el-menu>
          </div>
          <notic-table :type='dynamic[0].type' :title="title"/>
        </div>
        <div>
          <notic-list ref="child" class="flex-1" :list="dynamic"/>
        </div>
      </div>
    </div>
    <div class="carousel">
      <template>
        <el-carousel indicator-position="outside" style="width:100%;height:100px;" height="90px">
          <el-carousel-item v-for="(item, index) in homecarousel" :key="index">
            <img :src="item.img" style="height: 100px;width:100%;" @click="to(item.url)"/>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <!--    <AnLi :num="6"><router-link to="/anli">更多案例</router-link></AnLi>-->
    <div id="notice">
      <!--      <span class="firstTitle">通知公告/</span><span class="secondTitle">最新的通知，了解最新政策详情</span>-->
      <!--      <el-divider content-position="right"><router-link to="/gonglue">更多通知</router-link></el-divider>-->
      <div class="notic-container">
        <div v-for="(item, index) in announcement" :key="index.toString()">
          <div class="title">
            <div class="font size" @click="detailed">{{ item.title }}</div>
            <notic-table :type="item.content[0].type" :title="item.title" class="notic-item"/>
          </div>
          <notic-list :list="item.content" :id="item.content.id"/>
        </div>
        <div class="backcolor">
          <div class="title ">
            <div class="fonts font-color size">管理平台介绍</div>
            <notic-table :type="this.viodes" class="notic-item" title="信息管理平台视频"/>
          </div>
          <div class="notic-padding">
            <video controls>
              <source :src="this.viodes[0].video">
            </video>
          </div>
        </div>
      </div>
      <div class="article" style="display: flex;">
<!--        <img src="../../assets/wenzhang.png">-->
                <div style="width: 30%;">
          <div style="font-size: 2vh;font-weight: 900;text-align: center">文章标题</div>
          <img style="width: 100%;" src="http://ningdong.nx.gov.cn/xwdt_277/202303/W020230306365515915162.jpg">
          <div>文章内容</div>
        </div>
        <div style="width: 70%;">
          <div style="border: 1px solid darkgray;width: 100%;height: 20vh;display: flex">
            <img style="width: 30%;" src="http://ningdong.nx.gov.cn/xwdt_277/202303/W020230306365515915162.jpg">
            <div style="width: 100%;margin:10%;">
              <div style="font-size: 2vh;font-weight: 900;">文章标题</div>
              <div>文章内容</div>
            </div>
          </div>
          <div style="border: 1px solid darkgray;width: 100%;height: 20vh;display: flex;">
            <img style="width: 30%;"  src="http://ningdong.nx.gov.cn/xwdt_277/202303/W020230306365515915162.jpg">
            <div>
              <div style="font-size: 2vh;font-weight: 900;margin: 10%;">文章标题</div>
              <div>文章内容</div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="recruit ">-->
<!--        <div class="title">-->
<!--          <div class="recruit-frist">-->
<!--            <h2>公共招聘</h2>-->
<!--            <div class="title">-->
<!--              <el-tabs style="width:20vw;height: 17vw;" value="0">-->
<!--                <el-tab-pane v-for="(item, index) in recruit" :key="index.toString()" :label="item.title"-->
<!--                             :name="index.toString()">-->
<!--                  <notic-list :list="item.content" class="notic-item"/>-->
<!--                  &lt;!&ndash; {{ item.content }} &ndash;&gt;-->
<!--                </el-tab-pane>-->
<!--              </el-tabs>-->
<!--            </div>-->
<!--            <div>-    ->
<!--              <div class="recruit-box">-->
<!--                <div>-->
<!--                  <h2>联系我们</h2>-->
<!--                </div>-->
<!--                <div>便民服务热线：12345</div>-->
<!--                <div>宁东基地总值班室：0951-3093761</div>-->
<!--                <div>应急值班电话：0951-5918503</div>&lt;!&ndash; 18995098099 &ndash;&gt;-->
<!--                <div>电子邮箱：ndjdgwh@126.com</div>-->
<!--                &lt;!&ndash;                <div>联系地址：宁夏宁东镇长城路7号企业总部大楼</div>&ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="enter">-->
<!--            <div class="title">-->
<!--              <div class="title size" style="width:31vw;">-->
<!--                <div class="font-color">走进</div>-->
<!--                <div class="enter-font">公共信息管理平台</div>-->
<!--              </div>-->
<!--              <notic-table class="notic-item" title="最新通知" more-target="gonglue"/>-->
<!--            </div>-->
<!--            <div>-->
<!--              <el-tabs style="width:100%;height:25vh;" value="0">-->
<!--                <el-tab-pane v-for="(item, index) in entertab" :key="index.toString()" :label="item.labels"-->
<!--                             :name="index.toString()">-->
<!--                  <div class="flex">-->
<!--                    <img style="width:180px;height:106px;margin:3%;" :src="item.img">-->
<!--                    <div style="margin-top:3%;">-->
<!--                      {{ item.texts | limit }}-->
<!--                      <a @click="details()" style="color: red;">-->
<!--                        [详情]-->
<!--                      </a>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </el-tab-pane>-->
<!--              </el-tabs>-->
<!--            </div>-->
<!--            <el-tabs style="width:100%;height:30vh;margin-top: 4%" value="0">-->
<!--              <el-tab-pane v-for="(item, index) in platform" :key="index.toString()" :label="item.title"-->
<!--                           :name="index.toString()">-->
<!--                <div class="flex">-->
<!--                  <div>-->
<!--                    <img :src="item.img" style="width:20vw;height:188px;margin:3%;">-->
<!--                  </div>-->
<!--                  <div class="pane-notic">-->
<!--                    <notic-list :list="item.content" class="notic-item"/>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </el-tab-pane>-->
<!--            </el-tabs>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div id="goto-net">
      <div id="net-container">
        <h3 class="nxzw-title">办事直通</h3>
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
</template>

<script>
import axios from 'axios'
import NoticTable from '@/views/components/NoticTable.vue'
import NoticList from '@/views/components/NoticList.vue'
import IntroDuce from '@/views/show/IntroduceMe'

export default {
  name: 'FirstPage',
  components: {
    NoticTable,
    NoticList,
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
      announcement: [
        {
          title: '公示公告',
          content: []
        },
        {
          title: '媒体聚焦',
          content: []
        },
      ],
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
          date: ''
        },
        {
          img: "http://ningdong.nx.gov.cn/xwdt_277/202303/W020230306365515915162.jpg",
          title: '最全！一图读懂2023年《政府工作报告》',
          content: 'http://www.gov.cn/xinwen/2023-03/05/content_5744713.htm',
          date: ''
        },
        {
          img: 'http://ningdong.nx.gov.cn/xwdt_277/nddt/202303/W020230311609479015319.png',
          title: '一图读懂国务院机构改革方案',
          content: 'https://www.nx.gov.cn/zwxx_11337/wzttx/202303/t20230309_3988843.html',
          date: ''
        }
      ],
    }
  },
  //components:{AnLi, GoodDesigner,},
  mounted() {
    this.detailed()
  },
  methods: {
    stateCouncil(i) {
      this.dynamic = []
      for (let index = 0; index < 3; index++) {
        axios.post("http://43.142.179.198:8081/noticeList/get",null,{
          params:{
            type:(index+1).toString(),
            ftype:"1001"
          }
        }).then(res => {
          // this.announcement[i].content = res.data
          if (i == index) {
            if (res.data.length >= 8) {
              for (let ind = 0; ind <= 8; ind++) {
                this.title = this.information[index].title
                this.dynamic.push(res.data[ind])
              }
            } else {
              this.title = this.information[index].title
              this.dynamic = res.data
            }
          }
        })
      }
    },
    detailed() {
      for (let i = 0; i < 15; i++) {
        if (i <= 2) {
          axios.post("http://43.142.179.198:8081/noticeList/get",null,{
            params:{
              type:(i+1).toString(),
              ftype:"1001"
            }
          }).then(res => {
            this.information[i].content = res.data
            if (i == 0) {
              if (res.data.length >= 8) {
                for (let index = 0; index <= 8; index++) {
                  this.title = this.information[i].title
                  this.dynamic.push(res.data[index])
                }
              } else {
                this.dynamic = res.data
              }
            }
          })
        }else if (i == 3 || i == 4) {
          axios.post("http://43.142.179.198:8081/noticeList/get",null,{
            params:{
                type:(i + 1).toString(),
              ftype: '1001'
            }
          }).then(res => {
            // this.announcement[i].content = res.data
            if (i == 3) {
              if (res.data.length >= 8) {
                for (let index = 0; index <= 8; index++) {
                  this.announcement[0].content.push(res.data[index])
                }
              } else {
                this.announcement[0].content = res.data
              }
            } else {
              if (res.data.length >= 8) {
                for (let index = 0; index <= 8; index++) {
                  this.announcement[1].content.push(res.data[index])
                }
              } else {
                this.announcement[1].content = res.data
              }
            }
          })
        }else if (i == 5 || i == 6) {
          axios.post("http://43.142.179.198:8081/noticeList/get",null,{
            params:{
              type:(i + 1).toString(),
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

<style lang="scss" scoped>
.block {
  width: 65%;
  margin: auto;
  border: 1px solid #e5e5e5;
  padding: 25px 23px;
  z-index: -1;
}

.block-content {
  display: flex;
  justify-content: center;
}

.index-carousel {
  width: 32vw;
  height: 42vh;

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

.index-table {
  width: 35vw;
  height: 20vh;
  margin-left: 2%;
}

.notic-container {
  width: 95%;
  height: 40vh;
  display: flex;
  justify-content: space-between;

  .font-color {
    margin-left: 10px;
  }

  div {
    width: 18vw;
    margin-right: 5%;

    div {
      width: 100%;

      .font {
        width: 40%;
        text-align: center;
        font-size: 2vh;
      }
    }
  }

  .notic-padding {
    //height:90%;
    ////margin-top: 10%;
    //background: #f2f2f2;
  }

  video {
    width: 17vw;
    height: 33vh;
    margin-top: -13%;
    margin-left: 3%;
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
}

.nxzw-guess {
  height: 249px;
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
  height: 310px;

  .font-color {
    width: 25vw;
    height: 3vh;
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

  // ::v-deep .el-menu--horizontal {
  //   border-bottom: none;
  // }
}
.article{
  width: 100%;
  height: 40vh;
  //border: 1px solid darkgray;
}
</style>
