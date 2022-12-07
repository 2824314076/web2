<template>
  <div class="notic-table">
    <div class="flex ju-between">
      <div class="flex-1 handle-more">
        <div class="through frist"></div>
        <router-link :to="{ name: 'gonglue', params: { type: this.type, title: this.title } }" class="more-btn">
          <img src="../../assets/images/n-more.jpg">
        </router-link>
        <div class="through last"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '',
    },

  },
  mounted() {

  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.notic-table {
  width: 100%;
}

.table-title {
  user-select: none;
}

.handle-more {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;

  .frist {
    width: 100%;
  }

  .last {
    width: 10%;
  }
}

.title {
  display: inline-block;
  width: 200px;
}

.through {
  background-color: #ededed;
  height: 1vh;
  user-select: none;
  position: relative;
  margin: auto 0;
}
</style>
