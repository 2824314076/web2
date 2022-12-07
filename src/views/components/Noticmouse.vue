<template>
  <div class="notic-table">
    <div v-if="list.length > 0" class="list">
      <div v-for="(item, index) in list" :key="index" class="pointer item" :class="item.id ? 'href-item' : ''"
           @click="item.id ? handleCurrentChange(item.id) : ''">
        <div class="text-ellipsis-1">{{ item.title }}</div>
        <div class="title">{{ item.date }}</div>
      </div>
    </div>
    <el-empty v-else description="暂无内容"></el-empty>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      add: []
    }
  },
  mounted() {
    this.tabletitle()
  },
  methods: {
    handleCurrentChange(id) {
      const routeData = this.$router.resolve({
        name: 'notice',
      })
      sessionStorage.setItem('url', '/prod-api/noticeList/get?id=' + id)
      window.open(routeData.href, '_blank')
    },
    tabletitle(title) {
      if (typeof (title) == 'string') {
        this.add.push(title)
      } else if (typeof (title) == 'object') {
        this.add = title
      } else if (typeof (title) == 'undefined') {
        this.tabletitle(this.title)
      }
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
