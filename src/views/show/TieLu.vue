<template>
  <div>
    <!-- <div v-show="isList" style="text-align: center;">
      <el-descriptions :title="'平台名称: ' + item.title" v-for="item, index in zhaoPins" :key="index"
        style="border: grey solid 1px; background-color:#d3dce6;margin-bottom:20px" :content-style="contentStyle"
        :label-style="{ fontSize: 20 }">
        <el-descriptions-item label="公司地点">{{ item.address }}</el-descriptions-item>
        <el-descriptions-item label="驾驶证要求"> B2及以上</el-descriptions-item>
        <el-descriptions-item label="注册司机数">{{ item.num }}人</el-descriptions-item>
        <el-descriptions-item label="平台描述">{{ item.describe }}</el-descriptions-item>
        <el-descriptions-item label="平台优势">{{ item.text }}</el-descriptions-item>
        <el-descriptions-item label="加入该平台">
          <el-button type="primary" size="small" @click="gotoPlat()">注册</el-button>
        </el-descriptions-item>
      </el-descriptions>
      <div style="margin-top: 100px;margin-buttom:200px">
        <el-button v-show="pageNumber > 2 && currentPage != 1" @click="upload(1)">第一页</el-button>
        <el-button v-for="index in pageNumber" :key="index" @click="upload(index)" plain>{{ index }}</el-button>
        <el-button v-show="pageNumber > 2 && currentPage != pageNumber" @click="upload(pageNumber)">最后一页</el-button>
      </div>
    </div> -->
    <platform :name="name" :type=3></Platform>
  </div>
</template>

<script>
import platform from '@/views/components/platform.vue'

export default {
  components: {
    platform
  },
  name: 'TieLu',
  data() {
    return {
      name: '公铁联运',
      isList: true,
      contentStyle: {
        fontSize: 20,
        color: 'black'
      },
      eduValue: 0,
      edus: [
        {label: '高中以下', value: 0},
        {label: '高中', value: 1},
        {label: '大专', value: 2},
        {label: '本科', value: 3},
        {label: '硕士', value: 4},
        {label: '博士', value: 5},
      ],
      //
      zhaoPins: [
        {
          id: 1,
          title: '开发工程师',
          describe: '好好干就是了',
          address: '苏州市吴中区',
          education: 3,
          num: 4,
          text: '熟练使用自己的手'
        }
      ],
      pageNumber: 0,
      currentPage: 1,
      yingPin: {
        zhaoPin: {id: -1},
        name: '',
        sex: 1,
        birthYear: 0,
        education: 0,
        school: '',
        phone: '',
        skill: ''
      },
    }
  },
  methods: {},
  mounted() {
  },
  filters: {}
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