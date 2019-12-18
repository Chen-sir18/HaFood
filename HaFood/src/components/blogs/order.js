// 将订单页面的数据存入vuex中
const state = {
  orderpage: {
    name: '',
    region: '',
    phonenumber: ''
  }
}
const mutations = {
  changeOrder (state, data) {
    state.orderpage = data
  }
}
export default {
  state: state,
  mutations
}
