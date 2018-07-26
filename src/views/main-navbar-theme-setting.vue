<template>
  <el-dialog title="主题设置" :visible.sync="visible" :append-to-body="true" width="350px">
    <el-form label-width="80px">
      <el-form-item label="导航条">
        <el-radio-group v-model="navbarLayoutType">
          <el-radio label="default" border>默认</el-radio>
          <el-radio label="inverse" border>推荐</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="侧边栏">
        <el-radio-group v-model="sidebarLayoutSkin">
          <el-radio label="light" border>亮色</el-radio>
          <el-radio label="dark" border>暗色</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="visible = false">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data: function () {
      return {
        visible: false
      }
    },
    computed: {
      navbarLayoutType: {
        get: function () {
          return this.$store.state.common.navbarLayoutType
        },
        set: function (val) {
          this.$store.commit('common/updateNavbarLayoutType', val)
        }
      },
      sidebarLayoutSkin: {
        get: function () {
          return this.$store.state.common.sidebarLayoutSkin
        },
        set: function (val) {
          this.$store.commit('common/updateSidebarLayoutSkin', val)
        }
      }
    },
    methods: {
      // 初始化
      init: function () {
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
        })
      }
    }
  }
</script>

