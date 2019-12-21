import Vue from 'vue'
import Router from 'vue-router'
const Home1 = () => import('../components/home/Home1.vue')
const Home2 = () => import('../components/home/Home2.vue')
const Home3 = () => import('../components/home/Home3.vue')
const Home4 = () => import('../components/home/Home4.vue')
const Login = () => import('../components/public/login.vue')
const Forget = () => import('../components/forget/forget.vue')
const Blogdetail = () => import('../components/blogs/blogdetail.vue')
const Bloggrid = () => import('../components/blogs/bloggrid.vue')
const Blogmasonry = () => import('../components/blogs/blogmasonry.vue')
const Blogstate = () => import('../components/blogs/state.vue')
const Bloglist = () => import('../components/blogs/blogsbody.vue')
const Blogorder = () => import('../components/blogs/orderpage.vue')
const Center = () => import('../components/center/center.vue')
const App = () => import('../App.vue')
const Shopcart = () => import('../components/public/Shopcar.vue')
const ProductList = () => import('../components/product/Prlist.vue')
const ProductGrid = () => import('../components/product/Prgrid.vue')
const ProductDetails = () => import('../components/product/Prdetails.vue')
const AboutUs = () => import('../components/About/index.vue')
const Contact = () => import('../components/Contact/index.vue')
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
          component: Home1,
          meta: {
            requireLogin: 1
          }
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
        },
        {
          path: '/order',
          component: Blogorder
        },
        {
          path: '/state',
          component: Blogstate
        },
        {
          path: '/AboutUs',
          component: AboutUs
        },
        {
          path: '/Contact',
          component: Contact
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
    },
    {
      path: '/forget',
      component: Forget
    },
	{
	  path: '/Center',
	  component: Center,
	  meta: {
	    requireLogin: 1
	  }
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
