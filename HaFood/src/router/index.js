import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '../components/home/Home1.vue'
import Home2 from '../components/home/Home2.vue'
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
        },
        {
        	path: '/Home2',
      		component: Home2
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
