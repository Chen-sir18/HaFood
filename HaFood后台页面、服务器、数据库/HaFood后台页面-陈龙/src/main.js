// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import store from './store'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import './css/public.less'
import router from './router'
import {request, get, post} from 'js/axios'

Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$get = get
Vue.prototype.$post = post

// 路由守卫，判断token有无
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  if (to.meta.requireUser && to.meta.requireUser === 2) {
    // 需要用户登录 判断用户是否登录
    if (token) {
      next()
    } else {
      next('/')
    }
  } else if (to.meta.requireUser && to.meta.requireUser === 1) {
    // 判断是否登录 登陆了就不能进入当前页面
    if (token) {
      next('/index')
    } else {
      next()
    }
  } else {
    // 不需要登录 直接进入
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
