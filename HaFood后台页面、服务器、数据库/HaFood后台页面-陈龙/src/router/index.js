import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Forget from '../components/Login/forget.vue'
import Index from '../components/Index'
import Acount from '../components/acount'
import Product from '../components/product'
import Entprise from '../components/entprise'
import Reservation from '../components/reservation'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      // 登录路由
      path: '/',
      component: Login,
      meta: {
        requireUser: 1
      }
    },
    {
      // 修改密码路由
      path: '/forget',
      component: Forget
    },
    {
      path: '/index', // 用户登录后首页
      component: Index,
      meta: {
        requireUser: 2
      },
      children: [
        {
          path: '/acount',
          component: Acount
        },
        {
          path: '/product',
          component: Product
        },
        {
          path: '/entprise',
          component: Entprise
        },
        {
          path: '/reservation',
          component: Reservation
        }
      ]
    }
  ]
})
