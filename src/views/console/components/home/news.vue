<template>
  <div class="template">
    <div style="margin-top:2%">
      <div>
        <el-form :inline="true" :model="formInline" class="user-search">
          <el-form-item label="搜索：">
            <el-input v-model="formInline.deptName" placeholder="输入部门名称" size="small"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="formInline.deptNo" placeholder="输入部门代码" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" size="small" type="success" @click="search">搜索</el-button>
            <el-button icon="el-icon-plus" size="small" type="success" @click="handleClick()">添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            align="center"
            fixed
            label="日期"
            prop="date"
            width="300">
        </el-table-column>
        <el-table-column
            label="标题"
            prop="title">
        </el-table-column>
        <el-table-column
            align="center"
            fixed="right"
            label="操作"
            width="250">
          <template slot-scope="scope">
            <el-button size="small" type="success" @click="view(scope.row)">查看</el-button>
            <el-button size="small" type="success" @click="handleClick()">编辑</el-button>
            <el-button size="small" type="danger" @click="deleteUser(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--      <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>-->
      <Pagination></Pagination>
      <div>
        <el-dialog :visible.sync="editFormVisible" title="添加" width="30%" @click="closeDialog">
          <el-form ref="editForm" :model="editForm" :rules="rules" label-width="120px">
            <el-form-item label="标题" prop="deptName">
              <el-input v-model="editForm.depttitle" auto-complete="off" placeholder="请输入标题"
                        size="small"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="deptNo">
              <el-input v-model="editForm.depturl" auto-complete="off" placeholder="请输入地址"
                        size="small"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="small" @click="closeDialog">取消</el-button>
            <el-button :loading="loading" class="title" size="small" type="primary" @click="submitForm('editForm')">保存
            </el-button>
          </div>
        </el-dialog>
      </div>
      <div>
        <el-dialog :visible.sync="editFormVisible2" title="查看" width="30%" @click="closeDialog">
          <el-form ref="editForm" label-width="120px">
            <el-form-item label="标题" prop="deptName">
              <el-input v-model="editForm.depttitle" size="small"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="deptNo">
              <el-input v-model="editForm.depturl" size="small"></el-input>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>

    <!--    <div class="empty">-->
    <!--      <el-empty description="暂无数据"></el-empty>-->
    <!--    </div>-->
  </div>
</template>

<script>
import {deptDelete, deptSave} from '@/api/authority'
import Pagination from '@/views/console/components/Pagination'

export default {
  name: "home-news",
  components: {
    Pagination
  },
  data() {
    return {
      title: '添加',
      name: "",
      editFormVisible: false, //控制编辑页面显示与隐藏
      editFormVisible2: false,
      loading: false, //是显示加载
      tableData: [],
      formInline: {
        page: 1,
        limit: 10,
        varLable: '',
        varName: '',
        token: localStorage.getItem('logintoken')
      },
      editForm: {
        depttitle: '',
        depturl: '',
        deptNo: '',
        token: localStorage.getItem('logintoken')
      },
      rules: {
        deptName: [
          {required: true, message: '请输入部门名称', trigger: 'blur'}
        ],
        deptNo: [{required: true, message: '请输入部门代码', trigger: 'blur'}]
      },
    };
  },
  mounted() {
    // console.log(this.$route.params.list)
    this.getSomething()
  },
  methods: {
    handleClick() {
      if (this.name == "各局添加") {
        this.editFormVisible = true
      } else if (this.name == "危货运输") {
        this.$router.push({name: 'yunhsubianji', params: {isShow: true}})
      } else if (this.name == "普货运输") {
        this.$router.push({name: 'yunhsubianji', params: {isShow: true}})
      } else if (this.name == "公铁联运") {
        this.$router.push({name: 'yunhsubianji', params: {isShow: true}})
      } else if (this.name == "客运运输") {
        this.$router.push({name: 'yunhsubianji', params: {isShow: true}})
      } else if (this.name == "大宗贸易") {
        this.$router.push({name: 'yunhsubianji', params: {isShow: true}})
      } else if (this.name == "第三方服务") {
        this.$router.push({name: 'yunhsubianji', params: {isShow: true}})
      } else {
        this.$router.push({name: 'articleidnex', params: {isShow: true}})
      }
    },
    view(title) {
      console.log(this.name)
      if (this.name == "各局添加") {
        this.editFormVisible2 = true
      } else if (this.name == "危货运输") {
        this.$router.push({name: 'weihuoyunshu', params: {isShow: true}})
      } else if (this.name == "普货运输") {
        this.$router.push({name: 'puhuoyunshu', params: {isShow: true}})
      } else if (this.name == "客运运输") {
        this.$router.push({name: 'keyunyunshu', params: {isShow: true}})
      } else if (this.name == "公铁联运") {
        this.$router.push({name: 'tieluyunshu', params: {isShow: true}})
      } else if (this.name == "大宗贸易") {
        this.$router.push({name: 'dazongmaoyi', params: {isShow: true}})
      } else if (this.name == "第三方服务") {
        this.$router.push({name: 'disanfangfuwu', params: {isShow: true}})
      } else {
        this.$router.push({name: 'articleview', params: {list: title}})
      }
    },

    search() {
      this.getdata(this.formInline)
    },
    // 关闭编辑、增加弹出框
    closeDialog() {
      this.editFormVisible = false
    },
    getdata() {
      this.loading = true
      // 模拟数据开始
      let res = {
        code: 0,
        msg: null,
        count: 5,
        data: [
          {
            addUser: null,
            editUser: null,
            addTime: 1521062371000,
            editTime: 1526700200000,
            deptId: 2,
            deptName: 'XX分公司',
            deptNo: '1',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1521063247000,
            editTime: 1526652291000,
            deptId: 3,
            deptName: '上海测试',
            deptNo: '02',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1526349555000,
            editTime: 1526349565000,
            deptId: 12,
            deptName: '1',
            deptNo: '11',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1526373178000,
            editTime: 1526373178000,
            deptId: 13,
            deptName: '5',
            deptNo: '5',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1526453107000,
            editTime: 1526453107000,
            deptId: 17,
            deptName: 'v',
            deptNo: 'v',
            parentId: 1
          }
        ]
      }
      this.loading = false
      this.listData = res.data
      this.pageparm.currentPage = this.formInline.page
      this.pageparm.pageSize = this.formInline.limit
      this.pageparm.total = res.count
      // 模拟数据结束
    },
    //// 删除
    deleteUser(index, row) {
      this.$confirm('确定要删除吗?', '信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
          .then(() => {
            deptDelete(row.deptId)
                .then(res => {
                  if (res.success) {
                    this.$message({
                      type: 'success',
                      message: '公司已删除!'
                    })
                    this.getdata(this.formInline)
                  } else {
                    this.$message({
                      type: 'info',
                      message: res.msg
                    })
                  }
                })
                .catch(() => {
                  this.loading = false
                  this.$message.error('公司删除失败，请稍后再试！')
                })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
    },
    // 编辑、增加页面保存方法
    submitForm(editData) {
      this.$refs[editData].validate(valid => {
        if (valid) {
          deptSave(this.editForm)
              .then(res => {
                this.editFormVisible = false
                this.loading = false
                if (res.success) {
                  this.getdata(this.formInline)
                  this.$message({
                    type: 'success',
                    message: '保存成功！'
                  })
                } else {
                  this.$message({
                    type: 'info',
                    message: res.msg
                  })
                }
              })
              .catch(() => {
                this.editFormVisible = false
                this.loading = false
                this.$message.error('保存失败，请稍后再试！')
              })
        } else {
          return false
        }
      })
    },
    getSomething() {
      if (this.$route.params.list !== []) {
        this.$nextTick(() => {
          this.tableData = this.$route.params.list
          this.name = this.$route.params.name
        })
      } else {
        this.tableData = [
          {
            date: '2016-05-02',
            title: '王小虎',
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.template {
  width: 95%;
  margin: 0 auto;
}

.header {
  margin: 1% 0;
  display: flex;
  justify-content: space-between;
}

.empty {
}
</style>