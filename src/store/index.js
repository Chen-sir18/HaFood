import Vue from 'vue'
import Vuex from 'vuex'
//  使用vuex的插件
Vue.use(Vuex)
//  创建一个store对象
const store = new Vuex.Store({
  //  定义的公共变量,小组成员不要在这里面定义任何东西
  	state: {
  	},
  //  state中的变量只能在mutations中通过方法修改
  	mutations: {
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
