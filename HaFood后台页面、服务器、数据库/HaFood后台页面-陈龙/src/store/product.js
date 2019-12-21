// 商品数据
let state = {
  alltableData: [{
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }, {
    goodsname: '香蕉',
    picstr: 'product_1.jpg',
    depict: 'dsfsdg'
  }]
}

let mutations = {
  changeShopcar (state, data) {
    state.alltableData = data
    // console.log(data)
  }
}

let actions = {
  changste (context, data) {
    context.commit('changeShopcar', data)
  }
}

export default {
  state: state,
  mutations,
  actions
}
