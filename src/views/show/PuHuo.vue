<template>
  <div>
    <platform :name="name" :type=2 :yunshu="puhuo"/>
  </div>
</template>

<script>
// import axios from 'axios'
import platform from '@/views/components/platform.vue'

export default {
  name: 'PuHuo',
  components: {
    platform
  },
  data() {
    return {
      name: '普货运输',
      isList: true,
      contentStyle: {
        fontSize: 20,
        color: 'black'
      },
      puhuo: [
        {
          img: require('@/assets/log/log.png'),
          title: '惠浩运网络货运平台',
          url: 'https://pc.huihaoyun.cn/login.html?v=1324',
        },
        {
          img: require('@/assets/home_img/xinhua.png'),
          title: '新华智慧物流平台',
          url: 'http://www.xinhuawuliugroup.com/'
        },
        {
          img: require('@/assets/home_img/jingying.png'),
          title: '宁夏世纪金鹰物流有限公司',
          url: 'http://www.nxjywl.com/'
        }, {
          img: require('@/assets/home_img/mengtuoling.png'),
          title: '宁夏梦驼铃科技有限责任公司',
          url: ''
        },
      ]
    }
  },
  methods: {
    gotoPlat() {
      // 惠浩运输平台官网
      window.open('https://pc.huihaoyun.cn/login.html?v=1324/', '_bank');
    },
    // upload(num) {
    //     axios.get('/prod-api/huo/page?status=1').then(res => {
    //         this.pageNumber = res.data
    //     })
    //     axios.get('/prod-api/puHuo?num=' + num).then(res => {
    //         this.zhaoPins = res.data
    //         this.currentPage = num
    //     })
    // },
    // submit() {
    //     axios.post('/yingPin/add', this.yingPin).then(res => {
    //         if (res.data) {
    //             this.$notify({
    //                 title: '成功',
    //                 message: '成功',
    //                 type: 'success'
    //             })
    //             const temp = this.yingPin.zhaoPin.id
    //             this.yingPin = {
    //                 zhaoPin: { id: temp },
    //                 id: -1,
    //                 name: '',
    //                 sex: 1,
    //                 birthYear: 0,
    //                 education: 0,
    //                 school: '',
    //                 phone: '',
    //                 skill: ''
    //             }
    //         }
    //         else
    //             this.$notify({
    //                 title: '警告',
    //                 message: '失败',
    //                 type: 'warning'
    //             })
    //     },
    //         () => {
    //             this.$notify({
    //                 title: '警告',
    //                 message: '失败',
    //                 type: 'warning'
    //             })
    //         }
    //     )
    // }
  },
  mounted() {
  }
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