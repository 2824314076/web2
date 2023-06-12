<template>
  <div class="layout-show">
    <div class="top">
      <div class="wrap">
        <div class="hi">
          <span style="font-size: 1vh">Hi，欢迎来到宁东基地物流公共信息管理平台！</span>
        </div>
        <div class="tool_bar">
          <!--          <a href="http://www.ndkjcx.com/ndkjcx/dashboard/workplace" target="_blank">登录</a>-->
        </div>

      </div>
    </div>
    <el-backtop :bottom="60"></el-backtop>
    <div class="top-bar">
      <div class="layout-log">
        <div id="top-bar-left">
          <img src="@/assets/home_img/logo.png" class="image" height="50px"/>
        </div>
        <div id="top-bar-right">
          <!--          <el-button class="button" type="primary" size="mini" @click="administration">后台管理</el-button>-->
          <!--          <el-dialog-->
          <!--              title="提示"-->
          <!--              :visible.sync="dialogVisible"-->
          <!--              width="30%">-->
          <!--            <el-input placeholder="请输入账号" v-model="inputs.account" ></el-input>-->
          <!--            <el-input placeholder="请输入密码" v-model="inputs.password" show-password></el-input>-->
          <!--            <span slot="footer" class="dialog-footer">-->
          <!--              <el-button @click="dialogVisible = false">取 消</el-button>-->
          <!--              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
          <!--            </span>-->
          <!--          </el-dialog>-->
          <div style="margin-top:5px;" suffix-icon="el-icon-search">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select"
                      @keyup.enter.native="search(input)">
              <el-button slot="suffix" @click="search(input)">
                <img src="@/assets/home_img/wxb搜索ICON.png" alt="">
              </el-button>
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <el-menu :default-active="$route.name" class="header-menu" mode="horizontal" @select="handleSelect"
               active-text-color="white" background-color="#409EFF" text-color="white">
        <!--1.1982d1 3.ffd04b 2.white-->
        <!--        <el-menu-item><img src="/img/logo.png"/></el-menu-item>-->
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="jianguan">综合监管</el-menu-item>
        <el-submenu index="2">
          <template slot="title">行业监测</template>
          <el-menu-item class="hover"><a href="http://sztoosun.com:8205/#/login?redirect=%2Fhome">建设和交通局</a>
          </el-menu-item>
          <el-menu-item class="hover">经济发展局</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><a href="/#/enterprises">综合运输</a></template>
          <el-menu-item class="hover" index="weihuo">危货运输</el-menu-item>
          <el-menu-item class="hover" index="puhuo">普货运输</el-menu-item>
          <el-menu-item class="hover" index="tielu">公铁联运</el-menu-item>
          <el-menu-item class="hover" index="keyun">客运运输</el-menu-item>
        </el-submenu>
        <el-menu-item index="maoyi">大宗贸易</el-menu-item>
        <el-menu-item index="thirdservice">第三方服务</el-menu-item>
      </el-menu>
    </div>
    <el-main class="show-main">
      <router-view></router-view>
    </el-main>
    <div class="footer">
      <div class="flex footer-container">
        <div class="m-l-200 footer-right" v-cloak>
          <p>备案号：</p>
          <p>
            建议您使用IE9以上版本、Edge、Chrome、Firefox、360等主流浏览器浏览本网站
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import "@/views/show/layout-show/index.scss"

export default {
  name: 'IndexPage',
  data() {
    return {
      inputs: {
        account: '',
        password: ''
      },
      input: '',
      dialogVisible: false,
      activeIndex: '1',
      //以下为后端数据
      date: '日期',
      hotPhone: '',
      beiAnHao: '',
      address: '',
    }
  },
  mounted() {
  },
  methods: {
    add() {
      this.$route.push({name: 'admin'})
    },
    handleSelect(key) {
      this.$router
          .push({
            name: key,
          })
          .catch((err) => {
            err
          })
    },
    search(input) {
      console.log(input);
      axios.post(`http://43.142.179.198:8081/noticeList/like?title=${input}`).then(res => {
        this.$router
            .push({
              name: "gonglue",
              params: {
                list: res.data,
                title: input
              }
            })

      })
    },
    administration() {
      this.dialogVisible = true
      if (this.input === '于顺') {
        console.log(123)
      }
    },
    dateFormat() {
      var date = new Date()
      var year = date.getFullYear()
      var month =
          date.getMonth() + 1 < 10
              ? '0' + (date.getMonth() + 1)
              : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      return year + '年' + month + '月' + day + '日'
    },
  },
}
</script>

<style lang="scss" scoped>
.layout-show {
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    background: #0068b7;
    position: sticky;
    top: 0;
    z-index: 999;

    .header-menu {
      border: none;
    }
    .el-menu{
      width: 64%;
    }
  }
}

.footer {
  background-color: #4169e1;
  color: white;
  height: 10vh;

  .footer-container {
    width: 50vw;
    margin: 0vh auto;
  }

  .footer-right {
    //margin-top: 5vh;

    p {
      margin-top: 16px;
    }
  }
}

.dzjgbs {
  width: 80px;
  height: 80px;
}

a {
  text-decoration: none;
}

.footer > div {
  font-size: 15px;
}

.footer > div > p > a {
  color: white;
}

.footer > div > p {
  color: white;
}

.el-main {
  /*background-color: #e9eef3;*/
  color: #333;
}

.top-bar {
  height: 161px;
  background: url('~@/assets/top_img.png') no-repeat;

  .button {
    width: 100px;
    height: 30px;
    font-size: 15px;
    background-color: #0068b7;
    border-radius: 30px;
    font-weight: 600;
    margin-left: 200px;
    margin-top: 30px;
  }
}

#top-bar-left {
  width: 425px;
  height: 55px;
  left: 160px;
  top: 53px;
  /*float: left;
  margin-left: 10%;*/
  padding-top: 4%;
}

#top-bar-right > a {
  margin-right: 30px;
  color: #ffffff;
}

.el-menu {
  width: 80%;
  background-color: rgba(0, 104, 183, 1);
  padding: 0 !important;
}

.el-menu-item, .el-submenu {
  font-size: 16px !important;
  font-weight: 600;
  width: 16.6666%;
  text-align: center;
}

//.jianguan{
//  width: 15%;
//  padding-left:0.5vw;
//  padding-left:0.5vw;
//}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}

.hover {
  width: 10.5vw;
  margin: 0;
  padding: 0;

  :hover {
    width: 100%;
  }
}

.layout-log {
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: auto;

  img {
    margin-top: 2%;
  }
}

.el-input {
  // opacity: 0.7;
  width: 300px;

  ::v-deep .el-input__inner {
    // background: rgb(255,255,255,0);
    background: rgba($color: #ffffff, $alpha: 0.6);
    color: black;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }

  .el-button {
    margin-right: -10px;
    border-radius: 20px;
    background: #0068b7;
    color: white;
    height: 40px;

    img {
      width: 20px;
      height: 20px;
      margin-top: -2px;
    }
  }
}

::v-deep .el-input__inner::placeholder {
  color: rgba(0, 0, 0, 0.432);
  font-size: 15px;
}

.el-button {
  background: #0068b7;
  color: white;
}

#top-bar-right {
  margin-top: 5%;
}

::v-deep .el-submenu__title {
  font-size: 16px !important;
  font-weight: 600;
}

::v-deep .el-submenu__icon-arrow {
  display: none;
}

.el-main {
  padding: 0;
}

.top {
  .wrap {
    display: flex;
    justify-content: space-around;
  }

  .tool_bar {
    color: #1786df;
  }
}


.hi {
  width: 100%;
  background: #eff1f6;
  padding-left: 20%;
}
</style>
