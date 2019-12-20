// 订桌vuex数据
let state = {
  alltableData: [{
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }, {
    date: '2016-05-02',
    goodsname: '春暖花开',
    createName: '王晓虎',
    tel: '18185848888',
    sex: '男'
  }]
}

let mutations = {
  changeBooktab (state, data) {
    state.alltableData = data
  }
}

let actions = {
  changereBooktab (context, data) {
    context.commit('changeBooktab', data)
  }
}

export default {
  state: state,
  mutations,
  actions
}
