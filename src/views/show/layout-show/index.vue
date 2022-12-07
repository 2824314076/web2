<template>
  <div class="layout-show">
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
               active-text-color="white" text-color="white">
        <!--1.1982d1 3.ffd04b 2.white-->
        <!--        <el-menu-item><img src="/img/logo.png"/></el-menu-item>-->
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="jianguan">监管平台</el-menu-item>
        <el-menu-item index="weihuo">危货运输</el-menu-item>
        <el-menu-item index="puhuo">普货运输</el-menu-item>
        <el-menu-item index="tielu">公铁联运</el-menu-item>
        <el-menu-item index="keyun">客运运输</el-menu-item>
        <el-menu-item index="maoyi">大宗贸易</el-menu-item>
        <el-menu-item index="thirdservice">第三方服务</el-menu-item>
      </el-menu>
    </div>

    <el-main class="show-main">
      <router-view></router-view>
    </el-main>
    <div class="footer">
      <div class="flex footer-container">
        <div class="dzjgbs">
          <a href="https://bszs.conac.cn/sitename?method=show&id=54A18E2E0E011A7AE053012819AC5512" target="_blank">
            <img src="@/assets/home_img/yc-icon-11.png" style="width: 100px; height: 100px"/>
          </a>
          <a href="https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=6401000028&url=http%3A%2F%2Fwww.yinchuan.gov.cn%2F"
             target="_blank">
            <img src="@/assets/home_img/jiucuo.png"/>
          </a>
        </div>
        <div class="m-l-200 footer-right" v-cloak>
          <p>联系电话：19809505825</p>
          <p>地址：宁东管委会</p>
          <p>主办方：宁夏宁东科技创业投资有限公司</p>
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
      // if (
      //   key === 'tielu' ||
      //   key === 'keyun' ||
      //   key === 'maoyi' ||
      //   key === 'thirdservice'
      // )
      //   this.$message({ message: '此功能暂未开放！', type: 'warning' })
      // else
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
  min-width: 1200px;

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
  }
}

.footer {
  background-color: #4169e1;
  color: white;
  height: 220px;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
  }

  .footer-right {
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
  height: 190px;
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
}

.el-menu-item {
  font-size: 16px !important;
  font-weight: 600;
  width: 12.5%;
  text-align: center;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  background: #409EFF !important;
}

.el-menu .el-menu-item:hover {
  background-color: #409EFF !important;
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
</style>
