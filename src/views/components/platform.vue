<template>
  <div class="platform">
    <div>
      <div class="supervise-flex">
        <div class="supervise-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider content-position="right">
        <slot></slot>
      </el-divider>
    </div>
    <div class="flex">
      <el-cascader
          v-model="value"
          :options="options"
          :props="{value:'adcode',label:'name',children:'childrens',expandTrigger: 'hover',checkStrictly: true}"
          :show-all-levels="false"
          clearable
          filterable
          placeholder="选择或搜索"
          @change="handleChange"
      >
      </el-cascader>
      <el-input
          placeholder="按下回车搜索"
          v-model="input"
          clearable
          @change="searchinput()"
      >
      </el-input>
    </div>
    <div class="platform-box flex wrap">
      <div v-for="(item, index) in this.city" :key="index" class="platform-each">
        <div v-if="bool" class="supervise supervise-flex">
          <div class="supervise-box">
            <div>
              <div class="supervise-log">
                <div class="supervise-icon">
                  <img :src="item.imgUrl" alt="">
                </div>
              </div>
            </div>
            <div class="supervise-font">{{ item.webName }}</div>
          </div>
        </div>
      </div>
      <el-empty :class="this.bool === false ? 'center':'none'" :image-size="200"></el-empty>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'PlatForm',
  props: {
    name: {
      type: String,
      default: () => '',
    },
    yunshu: {
      type: Array,
      default: () => [],
    },
    type: {
      type: Number,
    }
  },
  data() {
    return {
      activeName: '银川市',
      city: [],
      options: [],
      value: '',
      adcode: '',
      input:'',
      bool: true
    }
  },
  methods: {
    gotoPlat(url) {
      window.open(url, '_blank')
    },
    handleClick(tab) {
      this.activeName = tab._props.name
    },
    changeimg() {
      for (let i = 0; i < this.city.length; i++) {
        this.city[i].content = this.yunshu
      }
    },
    handleChange(value) {
      this.adcode = value[value.length - 1]
      this.axiosdata()
    },
    axiosdata() {
      axios.post(`http://43.142.179.198:8081/v1/web/get?htype=${this.type}&qhdm=${this.adcode}`).then(res => {
        this.city = res.data.data.list
        if (res.data.data.list.length == 0) {
          this.bool = false
        } else {
          for (let i = 0; i < this.city.length; i++) {
            this.city[i].imgUrl = 'http://43.142.179.198/' + this.city[i].imgUrl.slice(23)
          }
          this.bool = true
        }
        console.log(res.data.data.list.length)
      })
    },
    searchinput(){
      axios.post(`http://43.142.179.198:8081/v1/web/detail?webName=${this.input}&htype=${this.type}`).then(res => {
        this.city = res.data.data.list
        if (res.data.data.list.length == 0) {
          this.bool = false
        } else {
          for (let i = 0; i < this.city.length; i++) {
            this.city[i].imgUrl = 'http://43.142.179.198/' + this.city[i].imgUrl.slice(23)
          }
          this.bool = true
        }
      })
    },
    adcodeMap() {
      axios.post('http://43.142.179.198:8081/area/all').then(res => {
        this.options = res.data.data.list
        this.value = 640100
        this.adcode = 640100
        this.axiosdata()
      })
    }
  },
  mounted() {
    this.changeimg()
    this.adcodeMap()

  }
}
</script>

<style lang="scss" scoped>
.platform {
  width: 1200px;
  margin: auto;
}

.supervise {
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(29, 107, 204, 0.15);
  border-radius: 20px;
  box-shadow: 0 1px 8px 1px rgb(29 107 204 / 30%);

  .supervise-log {
    height: 9vw;
    padding-top: 10%;
    padding-left: 30%;

    .supervise-icon {
      width: 6vw;
      height: 6vw;
      background-color: white;
      border-radius: 50%;

      img {
        width: 5vw;
        margin-left: 50%;
        margin-top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }


  .supervise-font {
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10%;
  }

  .supervise-box {
    width: 100%;
    margin-right: 3%;
    margin-top: 4%;
  }

  .supervise-box:hover {
    background-color: #0068b7;
    color: white;
  }


}

.anliP {
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  float: left;
  width: calc(33% - 20px);
  height: 250px;
  cursor: pointer;
}

.anliP > img {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none
}

.firstTitle {
  font-size: 30px;
}

.main {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 50px;
  height: 650px;
}


.supervise-flex {
  display: flex;
}

.supervise-breadcrumb {
  margin-top: 10px;
}

.platform-box {
  border: 1px solid #e5e5e5;
  padding: 1%;
  margin-top: 1%;
}

.platform-each {
  width: 22%;
  height: 30vh;
  margin-right: 1.5%;
  margin-left: 1.5%;
  margin-top: 2%;
}

::v-deep .is-active {
  color: #0068b7;
}

::v-deep .el-tabs__active-bar {
  background-color: #0068b7;
}

::v-deep .el-tabs__item:hover {
  color: #0068b7;
}

img {
  border-radius: 50%;
}

.wrap {
  flex-wrap: wrap;
}

.none {
  display: none;
}

.center {
  margin: auto;
}
</style>