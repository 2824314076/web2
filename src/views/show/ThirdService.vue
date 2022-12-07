<template>
  <div>
    <!-- <div v-show="isList" style="text-align: center;">
      <el-descriptions :title="'平台名称: '+item.title" v-for="item, index in zhaoPins" :key="index" style="border: grey solid 1px; background-color:#d3dce6;margin-bottom:20px" :content-style="contentStyle" :label-style="{fontSize:20}">
        <el-descriptions-item label="公司地点">{{item.address}}</el-descriptions-item>
        <el-descriptions-item label="驾驶证要求"> B2及以上</el-descriptions-item>
        <el-descriptions-item label="注册司机数">{{item.num}}人</el-descriptions-item>
        <el-descriptions-item label="平台描述">{{item.describe}}</el-descriptions-item>
        <el-descriptions-item label="平台优势">{{item.text}}</el-descriptions-item>
        <el-descriptions-item label="加入该平台"><el-button type="primary" size="small" @click="gotoPlat() ">注册</el-button></el-descriptions-item>
      </el-descriptions>
      <div style="margin-top: 100px;margin-buttom:200px">
        <el-button v-show="pageNumber>2&&currentPage!=1" @click="upload(1)">第一页</el-button>
        <el-button v-for="index in pageNumber" :key="index" @click="upload(index)" plain>{{index}}</el-button>
        <el-button v-show="pageNumber>2&&currentPage!=pageNumber" @click="upload(pageNumber)">最后一页</el-button>
      </div>
    </div> -->
    <platform :name="name" :type=6></Platform>
  </div>
</template>

<script>
// import axios from 'axios'
import platform from '@/views/components/platform.vue'

export default {
  components: {
    platform
  },
  name: 'ThirdService',
  data() {
    return {
      name: '第三方服务',
      isList: true,
      contentStyle: {
        fontSize: 20,
        color: 'black'
      },
    }
  },
  methods: {
    gotoPlat() {
      // 惠浩运输平台官网
      window.open('https://pc.huihaoyun.cn/login.html?v=1324/', '_bank');
    },
  },
  mounted() {
  },
}
</script>

<style scoped>
a {
  text-decoration: none
}

.main {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 50px;
  min-height: 590px;
}
</style>