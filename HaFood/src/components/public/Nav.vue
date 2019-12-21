<template>
	<div>
  <!-- 头部导航部分 -->
		<div v-bind:class="{header:true,headerbox:true,headerbox1:routepath === '/Home3' || routepath === '/Home4' || routepath === '/Shopcar'}">
			<div class="change-content">
				<span class="logo font-wi-900 font-30">
					HaFood
				</span>
				<div class="navlist font-14 clearfix" >
					<router-link @mouseleave.native='line' @mouseenter.native='lineright' class='router-link text-no-blue font-wi-500' tag='div' :key='index' v-for='(item, index) in navlist' :to="item.title.replace(/\s/g,'')">
						{{item.title}}
						<div class="border-bottom-block">
							<div class="border-bottom">
							</div>
						</div>
					<div class="nav-list-box">
						<div class="nav-list" :key="id" v-for="(list, id) in item.content">
							<router-link  :to="list.replace(/\s/g,'')" tag="div" class="nav-list-link">{{list}}</router-link>
						</div>
					</div>
					</router-link>
				</div>
			  <!--购物车和搜索丶登录的开启按钮-->
				<div class="search-and-cart">
					<div class="search" @click="dropsearch">
						<span class="icon iconfont font-24">&#xe66b;</span>
					</div>
					<div v-if="!(this.$route.fullPath === '/Shopcar' || this.$route.fullPath === '/order')" @click="rightcar" class="cart">
						<span class="icon iconfont font-18">&#xe61c;</span>
						<div v-if="islogin" class="cart-count">{{this.$store.state.shopcargoods.length}}</div>
					</div>
					<div class="login-btn">
						<span @click="logout" v-if="islogin">LOGOUT</span>
						<span @click="linktologin" v-else>LOGIN</span>
					</div>
					<!--小屏时候出现的导航条按钮-->
					<div @click="dropnav" class="little-nav-btn">
						<span v-show="!navShow" class="icon iconfont little-nav-text font-30">&#xe605;</span>
					  <span v-show="navShow" class="icon iconfont little-nav-text font-20">&#xe612;</span>
					</div>
				</div>
				<!--头部的小导航栏下拉-->
				<div class="little-nav-box">
					<router-link tag="div" :to="item.title.replace(/\s/g,'')" class="little-nav-title" v-bind:key='index' v-for="(item, index) in navlist">
						{{item.title}}
						<span class="icon iconfont dropicon text-no-bluew" @click="dropsecondnav" v-if="item.content.length">
							&#xe60c;
						</span>
						<!--二级导航栏 -->
						<div ref="secondnav" class="little-nav-second-box">
							<div class="little-nav-second" v-bind:key="id" v-for="(content, id) in item.content">
								<router-link @click.native="dropnav" class="little-nav-second-link" tag="div" :to="content.replace(/\s/g, '')">{{content}}</router-link>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	<!-- 头部搜索框下拉效果部分 -->
		<div class="d-drop-search">
			<div class="change-content mar-t-60">
				<div class="title">
					<div class="title-left title-part"><span>Search</span></div>
					<div class="title-right title-part"><span>Close</span><span class="close-search text-no-blue" @click="closedropsearch">X</span></div>
				</div>
				<div class="input-search-box">
					<input @keydown.enter="closedropsearch" class="input-search" type="text" placeholder="Search for Products">
				</div>
			</div>
		</div>
		<!--侧边购物车-->
		<div class="right-cart-box" v-if="!(this.$route.fullPath === '/Shopcar' || this.$route.fullPath === '/order')">
			<div class="cart-title">
				<span class="font-wi-600">Shopping Cart</span> <span @click="closeshopcart" class="font-20 font-wi-600 close-shopcart">X</span>
			</div>
			<!-- 购物车登录实际内容 -->
			<div v-if="islogin && shopgoods.length !== 0">
				<div class="cart-goods-big-box" v-show="this.$store.state.shopcargoods.length !== 0">
					<div class="cart-goods-box"  v-for="(item, index) in this.$store.state.shopcargoods" v-bind:key="index">
						<div class="goods-img-box">
							<img class="goods-img" v-if="!(item.picstr === undefined)" :src="'api/'+ item.picstr">
						</div>
						<div  class="goods-infos">
							<div class="goods-name goods-info">{{item.goodsname}}</div>
							<div class="goods-count goods-info"><span>QTY:</span><span class="count">{{item.goodscount}}</span></div>
							<div class="goods-money goods-info">${{item.goodscount * item.price}}.00</div>
						</div>
						<div class="totalmoney">
							<span class="subtotal">Subtotal:</span><span class="allmoney">${{shopallmoney}}.00</span>
						</div>
						<div @click="linktoshopcar" class="view-cart">
							<span class="">VIEW CART</span>
						</div>
					</div>
				</div>
			</div>
			<!-- 购物车未登录的实际内容 -->
			<div v-if="!islogin" class="login-button" @click="linktologin">
				<span>LOGIN UP NOW</span>
			</div>
			<!-- 购物车登录却没有内容 -->
			<div v-if="this.$store.state.shopcargoods.length === 0 && islogin" class='shopgoods-none'>
				暂无数据
				<div class="login-button">
					<span @click="linktoproduct">ADD GOODS</span>
				</div>
			</div>
		</div>
		<div class="body">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
  	return {
			cartgoodscount: 0,
			navobj: {},
			// 判断是否已经登录
			islogin: false,
		  navlist: [
			  {title: 'Home', content: ['Home1', 'Home2', 'Home3', 'Home4']},
			  {title: 'About Us', content: []},
			  {title: 'Product', content: ['Product List', 'Product Grid', 'Product Details']},
			  {title: 'Blog', content: ['Blog List', 'Blog Grid', 'Blog Masonry', 'Blog Details']},
			  {title: 'Center', content: []},
			  {title: 'Contact', content: []}
		  ],
		  serachvalue: '',
		  navShow: false,
		  // 购物车商品
		  shopgoods: [
			],
			// 购物车总价格
			shopallmoney: '00',
			scrollTop: document.body.scrollTop,
			// 当前的路由
			routepath: this.$route.fullPath
  	}
  },
  methods: {
		// 控制退出登录
		logout: function () {
			window.localStorage.removeItem('info')
			window.localStorage.removeItem('token')
			this.islogin = false
			if (this.$route.fullPath !== '/Home1') {
				this.$router.replace('/Home1')
			}
		},
		// 控制线条
  	line: function (e) {
  	  e.currentTarget.children[0].children[0].style.transform = 'translateX(105%)'
  	  setTimeout(() => {
  		  e.target.children[0].children[0].style.transform = 'translateX(-105%)'
        e.target.children[0].children[0].style.transition = 'all 0s'
  	  }, 500)
  	},
  	lineright: function (e) {
  	  e.currentTarget.children[0].children[0].style.transform = 'translateX(0)'
      e.currentTarget.children[0].children[0].style.transition = 'all 0.5s'
	  },
	  dropsearch: function (e) {
		  let dropsearch = document.querySelector('.d-drop-search')
		  dropsearch.style.transform = 'translateY(0)'
		},
		// 搜索框所在的位置
	  closedropsearch: function (e) {
		  let dropsearch = document.querySelector('.d-drop-search')
		  dropsearch.style.transform = 'translateY(-120%)'
		  if (String(e).includes('KeyboardEvent')) {
		    let serachinput = document.querySelector('.input-search')
				this.serachvalue = serachinput.value
				axios({
					method: 'get',
					url: 'api/search',
					params: {
						goodsname: this.serachvalue
					}
				}).then((response) => {
					if (response.data.status === 200) {
						let searchdata = response.data.data
						this.$store.commit({
							type: 'changesearchdata',
							searchdata: searchdata
						})
						if (this.$route.fullPath !== '/ProductDetails') {
							this.$router.push('/ProductDetails')
						}
					}
				})
		  }
	  },
	  dropnav: function (e) {
		  let dropnav = document.querySelector('.little-nav-box')
		  this.navShow = !this.navShow
		  if (this.navShow) {
		    dropnav.style.transform = 'translateY(0)'
		  } else {
		    dropnav.style.transform = 'translateY(-120%)'
		  }
	  },
	  dropsecondnav: function (e) {
			let secondnav = e.currentTarget.nextElementSibling
			let allsecondnav = document.querySelectorAll('.little-nav-second-box')
		  if (secondnav.style.display !== 'block') {
				allsecondnav.forEach(item => {
					item.style.display = 'none'
				})
		    e.currentTarget.nextElementSibling.style.display = 'block'
		  } else {
		    e.currentTarget.nextElementSibling.style.display = 'none'
		  }
	  },
	  rightcar: function (e) {
		  let carbox = document.querySelector('.right-cart-box')
		  carbox.style.transform = 'translateX(0)'
	  },
	  closeshopcart: function (e) {
		  e.currentTarget.parentNode.parentNode.style.transform = 'translateX(100%)'
		},
		linktoproduct: function () {
			this.$router.push('/ProductList')
		},
		linktologin: function (e) {
			this.$router.push('/login')
		},
		linktoshopcar: function () {
			this.$router.push('/Shopcar')
		}
  },
  mounted: function () {
		// 关于头部导航样式不同的触发
		this.routepath = this.$route.fullPath
		// 判断购物车是否已经登录的问题
		let userinfo = JSON.parse(window.localStorage.getItem('info'))
		let token = window.localStorage.getItem('token')
		if (userinfo && token) {
			// 关于购物车渲染的问题
		this.islogin = true
		axios({
			method: 'GET',
			url: 'api/shopcar',
			params: {
				userid: userinfo.id
			}
		}).then((response) => {
			if (response.data.status === 200) {
				let goodsdata = response.data.data
				goodsdata.forEach(item => {
					item.price = item.price.slice(1)
				})
				// 将数据保存到vuex的shopcargoods中
				this.$store.commit({
					type: 'changeshopcargoods',
					shopcargoods: goodsdata
				})
				this.shopgoods = goodsdata
			}
		})
		}
		// 关于滚动条的绑定
		const that = this
    window.onscroll = () => {
      return (() => {
        window.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
				that.scrollTop = window.scrollTop
      })()
		}
		// 关于头部整体的变化
		this.navobj = document.querySelector('.headerbox')
		},
	updated: function () {
		//  关于路由改变的监控
		this.routepath = this.$route.fullPath
		// 关注购物车商品的数量
		this.cartgoodscount = this.shopgoods.length
		// 关注购物车总价格
		let allmoney = 0
		this.shopgoods.forEach(item => {
			allmoney += parseInt(item.price * item.goodscount)
		})
		this.shopallmoney = allmoney
	},
	watch: {
		scrollTop (val) {
			if (val >= 30 && this.routepath !== '/Home3' && this.routepath !== '/Home4') {
			  this.navobj.style.background = '#fb7e00'
			} else if (val < 30 && this.routepath !== '/Home3' && this.routepath !== '/Home4') {
			  this.navobj.style.background = 'transparent'
			}
		},
		routepath (val) {
			if (val === '/Home3' || val === '/Home4') {
				this.navobj.style.color = '#222'
				this.navobj.style.background = '#fff'
			} else if (this.scrollTop < 30) {
				this.navobj.style.color = '#fff'
				this.navobj.style.background = 'transparent'
			} else if (this.scrollTop >= 30) {
				this.navobj.style.color = '#fff'
				this.navobj.style.background = '#fb7e00'
			}
		}
	}
}
</script>
<style lang="less" scoped>
@import "../../less/dheader.less";
</style>
