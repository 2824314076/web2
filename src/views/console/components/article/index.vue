<template>
  <div class="template">
    <el-page-header class="header" content="" @back="goBack"></el-page-header>
    <div>
      <div class="title">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </div>
      <div class="active">
        <div>
          <el-input v-model="input" placeholder="请输入作者"></el-input>
        </div>
        <div>
          <el-input v-model="input" placeholder="请输入单位"></el-input>
        </div>
        <div>
          <el-select v-model="value" placeholder="请选择是否为原创">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div style="display: flex;justify-content: space-between">
        <div>
          <el-upload
              action=""
              class="upload-demo"
              drag
              multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip" style="color: red">请上传文章封面</div>
          </el-upload>
        </div>
        <div>
          <el-image
              :preview-src-list="srcList"
              :src="url"
              style="width:500px; height:200px">
          </el-image>
        </div>
      </div>
      <div>
        <quill-editor
            ref="myQuillEditor"
            v-model="content"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @change="onEditorChange($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
        >
        </quill-editor>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articel-index",
  data() {
    return {
      content: "",
      TiLength: 0,
      // 富文本编辑器配置
      editorOption: {},
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }],
      options: [
        {
          value: true,
          label: '是'
        },
        {
          value: false,
          label: '否'
        }
      ],
      value: ''
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // 失去焦点事件
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    // 获得焦点事件
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    // 准备富文本编辑器
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    // 内容改变事件
    onEditorChange({quill, html, text}) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    goBack() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="scss" scoped>
.template {
  width: 95%;
  margin: 0 auto;
}

.header {
  margin: 1% 0 1% 0;
}

.title {
  /*width: 50%;*/
  margin: 0 auto;
}

.quill-editor {
  height: 50vh;
}

.active {
  display: flex;
  justify-content: space-between;

  div {
    width: 20%;
    margin: 1% 0;

    .el-input {
      width: 100%;
    }

    .el-select {
      width: 100%;
    }
  }
}
</style>