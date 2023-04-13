<template>
  <div>
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