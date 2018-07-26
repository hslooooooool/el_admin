<!--顶部操作栏-->
<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">
    <div class="site-navbar__header">
      <h1 class="site-navbar__brand" @click="$router.push({ name: 'home' })">
        <a class="site-navbar__brand-lg" href="javascript:;">开发平台</a>
        <a class="site-navbar__brand-mini" href="javascript:;">平台</a>
      </h1>
    </div>
    <div class="site-navbar__body clearfix">
      <el-menu
        class="site-navbar__menu"
        mode="horizontal">
        <el-menu-item class="site-navbar__switch" index="0" @click="sidebarFold = !sidebarFold">
          <icon-svg name="zhedie"/>
        </el-menu-item>
      </el-menu>
      <el-menu
        class="site-navbar__menu site-navbar__menu--right"
        mode="horizontal">
        <!--侨务资源管理-->
        <el-menu-item index="1">
          <template slot="title">
            侨务资源管理
          </template>
        </el-menu-item>
        <!--侨务服务管理-->
        <el-menu-item index="2">
          <template slot="title">
            侨务服务管理
          </template>
        </el-menu-item>
        <!--单位门户管理-->
        <el-menu-item index="3">
          <template slot="title">
            单位门户管理
          </template>
        </el-menu-item>
        <!--双创门户管理-->
        <el-menu-item index="4">
          <template slot="title">
            双创门户管理
          </template>
        </el-menu-item>
        <!--系统管理-->
        <el-menu-item index="5">
          <template slot="title">
            系统管理
          </template>
        </el-menu-item>
        <!--我的-->
        <el-menu-item class="site-navbar__avatar" index="4">
          <el-dropdown :show-timeout="0" placement="bottom">
            <span class="el-dropdown-link">
              <img src="~@/assets/img/avatar.png" :alt="userName">{{ userName }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="themeSettingHandle()">主题设置</el-dropdown-item>
              <el-dropdown-item @click.native="updatePasswordHandle()">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 弹窗, 主题设置 -->
    <theme-setting v-if="themeSettingVisible" ref="themeSetting"/>
    <!-- 弹窗, 修改密码 -->
    <update-password v-if="updatePasswordVisible" ref="updatePassword"/>
  </nav>
</template>

<script>
  import UpdatePassword from './main-navbar-update-password'
  import ThemeSetting from './main-navbar-theme-setting'

  export default {
    data: function () {
      return {
        themeSettingVisible: false,
        updatePasswordVisible: false
      }
    },
    components: {
      UpdatePassword,
      ThemeSetting
    },
    computed: {
      navbarLayoutType: {
        get: function () {
          return this.$store.state.common.navbarLayoutType
        }
      },
      sidebarFold: {
        get: function () {
          return this.$store.state.common.sidebarFold
        },
        set: function (val) {
          this.$store.commit('common/updateSidebarFold', val)
        }
      },
      mainTabs: {
        get: function () {
          return this.$store.state.common.mainTabs
        },
        set: function (val) {
          this.$store.commit('common/updateMainTabs', val)
        }
      },
      userName: {
        get: function () {
          return this.$store.state.user.name
        }
      }
    },
    methods: {
      // 主题设置
      themeSettingHandle: function () {
        this.themeSettingVisible = true
        this.$nextTick(() => {
          this.$refs.themeSetting.init()
        })
      },
      // 修改密码
      updatePasswordHandle: function () {
        this.updatePasswordVisible = true
        this.$nextTick(() => {
          this.$refs.updatePassword.init()
        })
      },
      // 退出
      logoutHandle: function () {
        this.$confirm(`确定进行[退出]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url: this.$http.adornUrl('/sys/logout'),
            method: 'post',
            data: this.$http.adornData()
          }).then(({data}) => {
            if (data && data.code === 0) {
              this.$cookie.delete('token')
              this.$router.options.isAddDynamicMenuRoutes = false
              this.$router.push({name: 'login'})
            }
          })
        }).catch(() => {
        })
      }
    }
  }
</script>
