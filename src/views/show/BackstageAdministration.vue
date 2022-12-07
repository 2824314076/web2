<template>
  <div id="background">
    <el-input v-model="corporate.webName" placeholder="请输入公司名称"></el-input>
    <el-input v-model="corporate.webUrl" placeholder="请输入公司网络地址"></el-input>
    <el-select v-model="corporate.type" clearable filterable placeholder="选择或搜索">
      <el-option
          v-for="item in option"
          :key="item.type"
          :label="item.label"
          :value="item.type"
      >
      </el-option>
    </el-select>
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
    <div class="upload">
      <el-upload
          ref="upload"
          :auto-upload="true"
          :data="corporate"
          :file-list="fileList"
          :limit="1"
          :on-exceed="exceed"
          action="http://43.142.179.198:8081/v1/picture/push"
          class="upload-demo"
          drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击选择文件</em></div>
        <div slot="tip" class="el-upload__tip" style="color: red">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <el-button type="primary" @click="upload">上传</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BackstageAdministration",
  data() {
    return {
      corporate: {
        webName: '',
        webUrl: '',
        type: '',
        adcode: '',
      },
      fileList: [],
      value: '',
      options: [],
      option: [
        {
          type: 1,
          label: '危货运输'
        }, {
          type: 2,
          label: '普货运输'
        }, {
          type: 3,
          label: '公铁联运'
        }, {
          type: 4,
          label: '客运运输'
        }, {
          type: 5,
          label: '大宗贸易'
        }, {
          type: 6,
          label: '第三方服务'
        }
      ]
    }
  },
  mounted() {
    this.adcodeMap()
  },
  methods: {
    upload() {
      // 43.142.179.198:8081/v1/picture/push
      // axios.post('http://43.142.179.198:8081/v1/picture/push',{data:{
      //     file:this.corporate.fileList[0],
      //     webName:this.corporate.name,
      //     webUrl:this.corporate.address,
      //     adcode:this.adcode.toString(),
      //     type:this.corporate.type,
      //   }}).then((res) => {
      //   if (res.data.success){
      //     this.$message.success('成功')
      //   }else {
      //     this.$message.error(res.data.msg)
      //   }
      // }).catch((e)=>{
      //   this.$message.error('成功',e)
      // })
    },
    exceed() {
      this.$message.error('仅允许上传一个图片');
    },
    handleChange() {
      let number = this.value.length - 1
      this.corporate.adcode = this.value[number]
      console.log(this.corporate.adcode)
    },
    adcodeMap() {
      // 43.142.179.198:8081/area/all
      axios.post('http://43.142.179.198:8081/area/all').then(res => {
        this.options = res.data.data.list
        console.log(this.options)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#background {
  width: 80%;
  margin: auto;
  padding: 0;
}

.el-button {
  background: #409dfe;
  margin-top: 1%;
}

.upload {
  width: 100%;
  height: 100%;
  min-height: 30vh;
}

div {
  margin-top: 1%;
}

.el-cascader {
  width: 100%;
}

.el-select {
  width: 100%;
}
</style>