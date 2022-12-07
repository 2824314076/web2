<template>
  <div class="notic-table">
    <div v-if="list.length > 0" class="list">
      <div v-for="(item, index) in list" :key="index" class="pointer item" :class="item.id ? 'href-item' : ''"
           @click="handleCurrentChange(item.id)">
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
      str: ''
    }
  },
  mounted() {
    this.tabletitle()
  },
  methods: {
    // handleCurrent(content){
    //   if (content == '') {
    //     this.$router.push({
    //       name: 'introduce',
    //       params: {
    //         list: "暂无内容",
    //         empty: 1
    //       }
    //     })
    //   } else if (this.str !== null) {
    //     window.open(content, '_blank')
    //   } else {
    //     this.$router.push({
    //       name: 'introduce',
    //       params: {
    //         list: this.list[i],
    //         empty: 2
    //       }
    //     })
    //   }
    // },
    handleCurrentChange(id) {
      // str = str.match(/http:\/\/.+/);
      // if (str == null){
      //  alert('你输入的URL无效');
      //  return false;
      // }else{
      //  alert("你输入的URL有效");
      //  return true;
      // }
      for (let i = 0; i < this.list.length; i++) {
        this.str = this.list[i].content;
        this.str = this.str.match(/^http[s]?:\/\/.*/);
        if (this.list[i].id == id) {
          if (this.list[i].content == '') {
            this.$router.push({
              name: 'introduce',
              params: {
                list: "暂无内容",
                empty: 1
              }
            })
          } else if (this.str !== null) {
            window.open(this.list[i].content, '_blank')
          } else {
            this.$router.push({
              name: 'introduce',
              params: {
                list: this.list[i],
                empty: 2
              }
            })
          }
        }
      }
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
.list {
  width: 100%;

  .item {
    position: relative;
    padding-left: 12px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

    &:hover {
      color: #0068b7;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 3px;
      height: 3px;
      background-color: #0068b7;
    }
  }
}

.flex2 {
  border: none;
}

.title {
  color: #999;
}
</style>
