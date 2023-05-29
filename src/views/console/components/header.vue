/**
* 头部菜单
*/
<template>
  <div style="width: 100%;">
    <el-menu active-text-color="#fff" background-color="#334157" class="el-menu-demo" mode="horizontal"
             text-color="#fff">
      <el-button class="buttonimg" @click="toggle">
        <i :class="icon" class="iconfont"></i>
      </el-button>
      <el-submenu class="submenu" index="2">
        <!-- <template slot="title">{{user.userRealName}}</template> -->
        <template slot="title">超级管理员</template>
        <el-menu-item index="2-1">设置</el-menu-item>
        <!--      <el-menu-item @click="content()" index="2-2">个人中心</el-menu-item>-->
        <el-menu-item index="2-3" @click="exit()">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'houtai-herder',
  data() {
    return {
      isCollapse: false,
      icon: "icon-shouqicaidan",
      user: {}
    }
  },
  methods: {
    // 退出登录
    exit() {
      this.$confirm('退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
          .then(() => {
            setTimeout(() => {
              this.$store.commit('logout', 'false')
              this.$router.push({path: '/login'})
              this.$message({
                type: 'success',
                message: '已退出登录!'
              })
            }, 1000)
            // loginout()
            //   .then(res => {
            //     if (res.success) {
            //       //如果请求成功就让他2秒跳转路由
            //       setTimeout(() => {
            //         this.$store.commit('logout', 'false')
            //         this.$router.push({ path: '/login' })
            //         this.$message({
            //           type: 'success',
            //           message: '已退出登录!'
            //         })
            //       }, 1000)
            //     } else {
            //       this.$message.error(res.msg)
            //       this.logining = false
            //       return false
            //     }
            //   })
            //   .catch(err => {
            //     // 获取图形验证码
            //     this.getcode()
            //     this.logining = false
            //     this.$message.error('退出失败，请稍后再试！')
            //   })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            })
          })
    },
    // 切换显示
    toggle() {
      if (this.isCollapse === false) {
        this.icon = "icon-zhankaicaidan"
        this.isCollapse = !this.isCollapse
      } else {
        this.icon = "icon-shouqicaidan"
        this.isCollapse = !this.isCollapse
      }
      this.$emit("isCollapse", this.isCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
}

.submenu {
  float: right;
}

.buttonimg {
  height: 60px;
  background-color: transparent;
  border: none;
}

.showimg {
  width: 26px;
  height: 26px;
  position: absolute;
  top: 17px;
  left: 17px;
}

.showimg:active {
  border: none;
}

.el-menu {
  width: 100%;
}

.el-menu-item {
  width: 6.8vw;
}

.icon-shouqicaidan:before {
  content: "\e622";
  color: white;
  font-size: 3vh;
}

.icon-zhankaicaidan:before {
  content: "\e624";
  color: white;
  font-size: 3vh;
}

</style>