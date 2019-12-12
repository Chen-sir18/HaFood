<template>
	<div>
  <!-- 头部导航部分 -->
		<div v-bind:class="{header:true,headerbox:true,headerbox1:routepath === '/Home3' || routepath === '/Home4' || routepath === '/shopcar'}">
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
			  <!--购物车和搜索的开启按钮-->
				<div class="search-and-cart">
					<div class="search" @click="dropsearch">
						<span class="icon iconfont font-24">&#xe66b;</span>
					</div>
					<div @click="rightcar" class="cart">
						<span class="icon iconfont font-18">&#xe61c;</span>
						<div class="cart-count">{{cartgoodscount}}</div>
					</div>
					<!--小屏时候出现的导航条-->
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
						<div class="little-nav-second-box">
							<div class="little-nav-second" v-bind:key="id" v-for="(content, id) in item.content">
								<router-link class="little-nav-second-link" tag="div" :to="content.replace(/\s/g, '')">{{content}}</router-link>
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
		<div class="right-cart-box">
			<div class="cart-title">
				<span class="font-wi-600">Shopping Cart</span> <span @click="closeshopcart" class="font-20 font-wi-600 close-shopcart">X</span>
			</div>
			<!-- 购物车登录实际内容 -->
			<div v-if="islogin">
				<div class="cart-goods-box"  v-for="(item, index) in shopgoods" v-bind:key="index">
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
					<div class="view-cart">
						<span class="">VIEW CART</span>
					</div>
				</div>
			</div>
			<!-- 购物车未登录的实际内容 -->
			<div v-if="!islogin" class="login-button" @click="linktologin">
				<span>LOGIN UP NOW</span>
			</div>
		</div>
		<div class="body">
			<router-view></router-view>
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
			  {title: 'Shop', content: []},
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
			routepath: this.$route.fullPath
  	}
  },
  methods: {
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
	  closedropsearch: function (e) {
		  let dropsearch = document.querySelector('.d-drop-search')
		  dropsearch.style.transform = 'translateY(-120%)'
		  if (String(e).includes('KeyboardEvent')) {
		    let serachinput = document.querySelector('.input-search')
			  this.serachvalue = serachinput.value
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
		linktologin: function (e) {
			this.$router.push('/login')
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
			let goodsdata = response.data.data
			goodsdata.forEach(item => {
				item.price = item.price.slice(1)
			})
			this.shopgoods = goodsdata
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
			if (val >= 30 && !this.navobj.classList.contains('headerbox1')) {
				  this.navobj.style.background = '#fb7e00'
			} else if (val >= 30 && this.navobj.classList.contains('headerbox1')) {
					this.navobj.style.boxShadow = '0 2px 10px #343a40'
			} else if (val < 30 && !this.navobj.classList.contains('headerbox1')) {
			  	this.navobj.style.background = 'transparent'
			} else {
					this.navobj.style.boxShadow = 'none'
			}
		}
	}
}
</script>
<style lang="less" scoped>
@import "../../less/dheader.less";
</style>
