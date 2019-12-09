import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '../components/home/home1.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home1'
    },
    {
      path: '/Home1',
      component: Home1
    }
  ],
  mode: 'history'
})
