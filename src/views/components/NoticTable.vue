<template>
  <div class="notic-table">
    <div class="flex ju-between">
      <div class="flex-1 handle-more">
        <div class="through frist"></div>
        <img src="../../assets/images/n-more.jpg" @click="RouterTo">
        <div class="through last"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

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
  components: {
  },
  data() {
    return {}
  },
  mounted() {

  },
  methods: {
    RouterTo() {
      if (this.title === "信息管理平台视频") {
        router.push({
          name: "list",
          params: {type: this.type, title: this.title}
        })
      } else {
        router.push({
          name: "gonglue",
          params: {type: this.type, title: this.title}
        })
      }
    }
  },
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

img:hover {
  cursor: pointer;
}
</style>
