<template>
  <div>
    <platform :name="name" :type=1 :yunshu='weihua'/>
  </div>
</template>

<script>
// import axios from 'axios'
import platform from '@/views/components/platform.vue'

export default {
  components: {
    platform
  },
  name: 'WeiHuo',
  data() {
    return {
      name: '危货运输',
      isList: true,
      contentStyle: {
        fontSize: 20,
        color: 'black'
      },
      weihua: [
        {
          img: require('@/assets/home_img/weihua.png'),
          title: '宁东危化品运输管理平台',
          url: 'http://aimonitoring.rybsj.cn/webgis/login.jsp'
        },
        {
          img: require('@/assets/weihuo/antai.png'),
          title: '宁夏安泰物流有限公司',
          url: 'http://www.wxbkdz.com/wxp.asp'
        },
        {
          img: require('@/assets/weihuo/baojiang.png'),
          title: '宁夏宝江危货运输有限公司',
          url: 'http://www.nxbjys.com/'
        },
        {
          img: require('@/assets/weihuo/dalian.png'),
          title: '辽宁大连化学危险品物流运输公司',
          url: 'http://lanchuguoji56.com/'
        },
      ]
    }
  },
  methods: {
    gotoPlat() {
      // 惠浩运输平台官网
      window.open('http://aimonitoring.rybsj.cn/webgis/login.jsp', '_bank');
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