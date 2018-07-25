import Vue from 'vue'
import App from '@/App'
// api: https://github.com/vuejs/vue-router
import router from '@/router'
// api: https://github.com/vuejs/vuex
import store from '@/store'
// api: https://github.com/alfhen/vue-cookie
import VueCookie from 'vue-cookie'
// api: https://github.com/ElemeFE/element
import '@/element-ui'
// api: http://www.iconfont.cn/
import '@/icons'
import '@/element-ui-theme'
import '@/assets/scss/index.scss'
// api: https://github.com/axios/axios
import httpRequest from '@/utils/httpRequest'
import {isAuth} from '@/utils'

Vue.use(VueCookie)
Vue.config.productionTip = false

// 非生产环境, 适配 mockjs 模拟数据，api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

// 挂载全局
// ajax 请求方法
Vue.prototype.$http = httpRequest
// 权限方法
Vue.prototype.isAuth = isAuth

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
