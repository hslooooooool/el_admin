<template>
  <div
    class="site-wrapper"
    :class="{ 'site-sidebar--fold': sidebarFold }"
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中">
    <template v-if="!loading">
      <main-navbar/>
      <main-sidebar/>
      <div class="site-content__wrapper" :style="{ 'min-height': documentClientHeight + 'px' }">
        <main-content/>
      </div>
    </template>
  </div>
</template>

<script>
  import MainNavbar from './main-navbar'
  import MainSidebar from './main-sidebar'
  import MainContent from './main-content'

  export default {
    data: function () {
      return {
        loading: true
      }
    },
    components: {
      MainNavbar,
      MainSidebar,
      MainContent
    },
    computed: {
      documentClientHeight: {
        get: function () {
          return this.$store.state.common.documentClientHeight
        },
        set: function (val) {
          this.$store.commit('common/updateDocumentClientHeight', val)
        }
      },
      sidebarFold: {
        get: function () {
          return this.$store.state.common.sidebarFold
        }
      },
      userId: {
        get: function () {
          return this.$store.state.user.id
        },
        set: function (val) {
          this.$store.commit('user/updateId', val)
        }
      },
      userName: {
        get: function () {
          return this.$store.state.user.name
        },
        set: function (val) {
          this.$store.commit('user/updateName', val)
        }
      }
    },
    created: function () {
      this.getUserInfo()
    },
    mounted: function () {
      this.resetDocumentClientHeight()
    },
    methods: {
      // 重置窗口可视高度
      resetDocumentClientHeight: function () {
        this.documentClientHeight = document.documentElement['clientHeight']
        window.onresize = () => {
          this.documentClientHeight = document.documentElement['clientHeight']
        }
      },
      // 获取当前管理员信息
      getUserInfo: function () {
        this.$http({
          url: this.$http.adornUrl('/sys/user/info'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.loading = false
            this.userId = data.user.userId
            this.userName = data.user.username
          }
        })
      }
    }
  }
</script>
