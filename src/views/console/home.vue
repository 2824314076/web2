/**
* 左边菜单
*/
<template>
  <div class="all">
    <div>
      <el-menu :collapse="collapsed" active-text-color="#ffd04b" background-color="#334157"
               class="el-menu-vertical-demo" collapse-transition
               default-active="2" router text-color="#fff" unique-opened>
        <div class="img" :class="visib">
          <img src="../../../logo.png" alt="宁东基地物流公共信息管理平台">
<!--          <div style="color: white">宁东基地物流公共信息管理平台</div>-->
        </div>
        <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
          <template slot="title">
            <i :class="menu.icon" class="iconfont"></i>
            <span>{{ menu.menuname }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="chmenu in menu.menus" :key="chmenu.menuid" :index="chmenu.menuid" @click="router(chmenu.menuname,chmenu.menuid,chmenu.list)">
              <i :class="chmenu.icon" class="iconfont"></i>
              <span>{{ chmenu.menuname }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <div class="header">
        <HeaDer @isCollapse="coll"></HeaDer>
      </div>
      <div>
        <keep-alive>
          <router-view ref="event"/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import HeaDer from "./components/header"

export default {
  name: 'houtai-Hoem',
  components: {
    HeaDer
  },
  data() {
    return {
      collapsed: null,
      visib:"",
      allmenu: []
    }
  },
  // 创建完毕状态(里面是操作)
  created() {
    // 获取图形验证码
    let res = {
      success: true,
      data: [
        {
          menuid: 1,
          icon: 'homepage',
          menuname: '首页',
          menus: [
            // {
            //   menuid: 2,
            //   icon: 'icon-cat-skuQuery',
            //   menuname: '新闻轮播图',
            //   list:[
            //     {
            //       date: '2016-05-02',
            //       title: '新闻轮播图',
            //     }
            //   ],
            // },
            // {
            //   menuid: 3,
            //   icon: 'icon-cat-skuQuery',
            //   menuname: '平台轮播图',
            //   list:[
            //     {
            //       date: '2016-05-02',
            //       title: '平台轮播图',
            //     }
            //   ],
            // },
            // {
            //   menuid: 4,
            //   icon: 'icon-cat-skuQuery',
            //   menuname: '视频管理',
            //   list:[
            //     {
            //       date: '2016-05-02',
            //       title: '视频管理',
            //     }
            //   ],
            // },
            {
              menuid: 5,
              icon: 'icon-cat-skuQuery',
              menuname: '文章管理',
              list:[
                {
                  date: '2016-05-02',
                  title: '文章管理',
                }
              ],
            }
          ]
        },
        {
          menuid: 11,
          icon: 'ManagementPlatform',
          menuname: '管理平台',
          // menus: [
          //   {
          //     menuid: 12,
          //     icon: 'icon-order-manage',
          //     menuname: '平台添加',
          //     hasThird: 'N',
          //     url: 'pay/Order',
          //     menus: null
          //   }
          // ]
        },
        {
          menuid: 21,
          icon: 'Eachbureau',
          menuname: '宁东各局',
          menus: [
            {
              menuid: 22,
              icon: 'icon-cus-manage',
              menuname: '各局添加',
              list:[
                {
                  date: '2016-05-02',
                  title: '各局添加',
                }
              ],
            },
          ]
        },
        {
          menuid: 31,
          icon: 'transport',
          menuname: '综合运输',
          menus: [
            {
              menuid: 32,
              icon: 'icon-provider-manage',
              menuname: '危货运输',
              list:[
                {
                  date: '2016-05-02',
                  title: '危货运输',
                }
              ],
            },
            {
              menuid: 33,
              icon: 'icon-provider-manage',
              menuname: '普货运输',
              list:[
                {
                  date: '2016-05-02',
                  title: '普货运输',
                }
              ],
            },
            {
              menuid: 34,
              icon: 'icon-provider-manage',
              menuname: '客运运输',
              list:[
                {
                  date: '2016-05-02',
                  title: '客运运输',
                }
              ],
            },
            {
              menuid: 35,
              icon: 'icon-provider-manage',
              menuname: '公铁联运',
              list:[
                {
                  date: '2016-05-02',
                  title: '公铁联运',
                }
              ],
            },
          ]
        },
        {
          menuid: 41,
          icon: 'Bulktrade',
          menuname: '大宗贸易',
          menus: [
            {
              menuid: 42,
              icon: 'icon-provider-manage',
              menuname: '大宗贸易',
              list:[
                {
                  date: '2016-05-02',
                  title: '大宗贸易',
                }
              ],
            }
          ]
        },
        {
          menuid: 51,
          icon: 'thirdparty',
          menuname: '第三方服务',
          menus: [
            {
              menuid: 52,
              icon: 'icon-provider-manage',
              menuname: '第三方服务',
              list:[
                {
                  date: '2016-05-02',
                  title: '第三方服务',
                }
              ],
            }
          ]
        }
      ],
      msg: 'success'
    }
    this.allmenu = res.data

    // menu(localStorage.getItem('logintoken'))
    //   .then(res => {
    //     console.log(JSON.stringify(res))
    //     if (res.success) {
    //       this.allmenu = res.data
    //     } else {
    //       this.$message.error(res.msg)
    //       return false
    //     }
    //   })
    //   .catch(err => {
    //     this.$message.error('菜单加载失败，请稍后再试！')
    //   })
    // 监听
  },
  methods: {
    coll(val) {
      this.collapsed = val
      setTimeout(() => {
        if (this.collapsed) {
          this.visib = "visib"
        } else {
          this.visib = ""
        }
      }, 110)
    },
    router(name,id,params){
      this.$router.push({name: 'homenews', params: {
          name:name,
          id:id,
          list:params,
        }})
      this.$refs.event.getSomething()
    }
  }
}
</script>
<style lang="scss" scoped>
.all {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  //width: 11vw;
  min-height: 100vh;
}

.el-menu--collapse {
  height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 23vh;
  border: none;
}

.el-menu {
  border: none;
}


.right {
  width: 100%;
}

.logobox {
  height: 40px;
  line-height: 40px;
  color: #9d9d9d;
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
}

.logoimg {
  height: 40px;
}

.header {
  width: 100%;
}

.img{
  width: 8vw;
  margin: 2vh auto;
  img{
    width: 4vm;
  }
}

.visib{
  visibility: hidden;
}

.thirdparty:before {
  content: "\e96f";
  color: white;
  font-size: 3vh;
}

.homepage:before {
  content: "\e64f";
  color: white;
  font-size: 3vh;
}

.transport:before {
  content: "\e882";
  color: white;
  font-size: 3vh;
}

.ManagementPlatform:before {
  content: "\e657";
  color: white;
  font-size: 3vh;
}

.Bulktrade:before {
  content: "\e881";
  color: white;
  font-size: 3vh;
}

.Eachbureau:before {
  content: "\e61e";
  color: white;
  font-size: 3vh;
}
</style>
