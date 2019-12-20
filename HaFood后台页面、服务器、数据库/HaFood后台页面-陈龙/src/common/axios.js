// 封装axios请求  promise

import axios from 'axios'
import {api} from './api'
import qs from 'qs'

// axios.defaults.baseURL = api

// 请求拦截
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token
  }
  // console.log(config)
  return config
}, function (error) {
  console.log(error)
})
// 直接 post请求 get请求都能够发送的请求
let request = function (url, method = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: api + url,
      method: method,
      // post     qs序列化字符串 对象
      data: qs.stringify(data),
      // get
      params: data
    }).then((res) => {
      // console.log(res)
      // 请求成功返回后台数据
      resolve(res.data)
    }).catch((error) => {
      // 请求失败
      reject(error)
    })
  })
}

// get post 分开

let get = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data
    }).then((res) => {
      // 请求成功返回后台数据
      resolve(res.data)
    }).catch((error) => {
      // 请求失败
      reject(error)
    })
  })
}

let post = function (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data)).then((res) => {
      // 请求成功返回后台数据
      resolve(res.data)
    }).catch((error) => {
      // 请求失败
      reject(error)
    })
  })
}
export {
  request,
  get,
  post
}
