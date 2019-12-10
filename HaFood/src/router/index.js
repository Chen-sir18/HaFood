import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '../components/home/Home1.vue'
import Home2 from '../components/home/Home2.vue'
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
    },
    {
      path: '/Home2',
      component: Home2
    }
  ],
  mode: 'history'
})
