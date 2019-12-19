import Vue from 'vue'
import Vuex from 'vuex'
//  使用vuex的插件
Vue.use(Vuex)
//  创建一个store对象
const store = new Vuex.Store({
  //  定义的公共变量,小组成员不要在这里面定义任何东西
	state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
	ordergoods: {},
	shopcargoods: [],
	orderpage: {
		name: '',
		region: '',
		phonenumber: ''
	},
	checkedAddress: {
		detailaddress: '',
		iphonenumber: '',
		receiveName: ''
	},
	searchdata: []
  },
  //  state中的变量只能在mutations中通过方法修改
  	mutations: {
			createordergoods: function (state, playload) {
				state.ordergoods = playload.orderdata
			},
			changeshopcargoods: function (state, playload) {
				state.shopcargoods = playload.shopcargoods
			},
			changeOrder (state, data) {
				state.orderpage = data
			},
			checkedData (state, data) {
				state.checkedAddress = data
			},
			changesearchdata: function (state, playload) {
				state.searchdata = playload.searchdata
			}
  	},
  	actions: {
  	},
  	getters: {
  	},
  //  小组成员的数据全部放到modules里面
  	modules: {
  	}
})
//  导出这个对象
export default store
