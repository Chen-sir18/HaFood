// 模块的数据
let state = {
  tabIndex: 1,
  moduleList: [{
    name: '首页',
    desciptor: '产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述',
    showName: '首页',
    path: '/acount',
    icon: 'el-icon-s-home',
    id: 1
  },
  {
    name: '产品管理',
    desciptor: '产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述',
    showName: '产品管理',
    path: '/product',
    icon: 'el-icon-goods',
    id: 2
  },
  {
    name: '商家管理',
    desciptor: '产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述',
    showName: '商家管理',
    path: '/entprise',
    icon: 'el-icon-s-platform',
    id: 3
  },
  {
    name: '订桌管理',
    desciptor: '产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述产品管理描述',
    showName: '订桌管理',
    icon: 'el-icon-s-grid',
    path: '/reservation',
    id: 4
  }
  ],
  chooseModule: []
}

let mutations = {
  changeModuleList (state, moduleList) {
    console.log(moduleList)
    state.moduleList = moduleList
  }
}

let actions = {
}

export default {
  state: state,
  mutations,
  actions
}
