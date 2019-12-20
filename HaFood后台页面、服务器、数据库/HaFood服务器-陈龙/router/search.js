// 搜索商品
let url = require('url')
let data = require('../controller/data')

module.exports = {
	async search (req, res) {
		let params = req.query
		// console.log(params)
		let onSearch = await data.onSearch(params.goodsname)
		if (onSearch) {
			res.json({
				status: 200,
				message: '查询成功',
				data: onSearch
			})
		} else {
			res.json({
				status: 501,
				message: '暂无此商品'
			})
		}
	}
}