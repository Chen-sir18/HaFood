// 集中发送ajax的地方
// 所有ajax发送的地方
// proxy 代理 vue 自带
// jsonp跨域  插件协助 vuejsonp jsonop
import {request} from './axios'
// 登录请求
// params是一个对象
// 包含data
// 成功回调
let loginRequest = (params) => { // 登录请求
  // console.log(params)
  request('login', 'post', params.data).then(function (res) {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}
let forget = (params) => { // 修改密码请求验证码
  console.log(params)
  request('forget', 'get', params.data).then(function (res) {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}
let ingredients = (params) => { // 商品渲染请求
  // console.log(params)
  request('ingredients', 'get', params.data).then(function (res) {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}
let addreingred = (params) => { // 商品增加请求
  // console.log(params)
  request('addreingred', 'get', params.data).then(function (res) {
    console.log(res)
  }).catch((error) => {
    params.error(error)
  })
}
let reingredients = (params) => { // 编辑修改商品请求
  // console.log(params)
  request('reingred', 'get', params.data).then(function (res) {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}
let inbooktab = (params) => { // 订桌订单请求
  request('inbooktab', 'get', params.data).then(function (res) {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}
let userinfo = (params) => { // 所有用户的信息请求
  request('userinfo', 'get', params.data).then((res) => {
    params.success(res)
  }).catch((error) => {
    params.error(error)
  })
}

export {
  loginRequest,
  forget,
  ingredients,
  addreingred,
  reingredients,
  inbooktab,
  userinfo
}
