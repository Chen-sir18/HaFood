import Vue from 'vue'
import Router from 'vue-router'
import Home1 from '../components/home/Home1.vue'
import Home2 from '../components/home/Home2.vue'
import Home3 from '../components/home/Home3.vue'
import Home4 from '../components/home/Home4.vue'
import Login from '../components/public/login.vue'
import Blogdetail from '../components/blogs/blogdetail.vue'
import Bloggrid from '../components/blogs/bloggrid.vue'
import Blogmasonry from '../components/blogs/blogmasonry.vue'
import Bloglist from '../components/blogs/blogsbody.vue'
import App from '../App.vue'
const Shopcart = () => import('../components/public/Shopcar.vue')
const ProductList = () => import('../components/product/Prlist.vue')
const ProductGrid = () => import('../components/product/Prgrid.vue')
const ProductDetails = () => import('../components/product/Prdetails.vue')
Vue.use(Router)

let Router1 = new Router({
  routes: [
    {
      path: '/',
      redirect: '/register'
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
        	path: '/Home3',
      		component: Home3
        },
        {
        	path: '/Home4',
      		component: Home4
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
        },
        {
          path: '/Shopcar',
          component: Shopcart
        },
        {
          path: '/ProductList',
          component: ProductList
        },
        {
          path: '/ProductGrid',
          component: ProductGrid
        },
        {
          path: '/ProductDetails',
          component: ProductDetails
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Login
    }
  ],
  mode: 'history'
})
export default Router1
Router1.beforeEach((to, from, next) => {
  if (to.fullPath === '/Home' || to.fullPath === '/Product' || to.fullPath === '/Blog') {
   return false
  } else {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    next()
  }
})
