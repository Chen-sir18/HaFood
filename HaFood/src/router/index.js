import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '../components/home/Home1.vue'
import Home2 from '../components/home/Home2.vue'
import Login from '../components/public/login.vue'
import Blogdetail from '../components/blogs/blogdetail.vue'
import Bloggrid from '../components/blogs/bloggrid.vue'
import Blogmasonry from '../components/blogs/blogmasonry.vue'
import Bloglist from '../components/blogs/blogsbody.vue'
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
        },
        {
        	path: '/BlogList',
        	component: Bloglist
        },
        {
        	path: '/BlogGrid',
        	component: Bloggrid
       	},
       	{
       		path: '/BlogMasonry',
        	component: Blogmasonry
       	},
       	{
       		path: '/BlogDetails',
        	component: Blogdetail
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
