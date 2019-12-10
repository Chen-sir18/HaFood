import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '../components/home/home1.vue'
import Login from '../components/public/login.vue'
import App from '../App.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      component: App,
      children: [
        {
          path: '/Home1',
          component: Home1
        }
      ]
    },
    {
      path: '/Login',
      component: Login
    }
  ],
  mode: 'history'
})
