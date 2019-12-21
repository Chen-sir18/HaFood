// 删除购物车商品多条删除
let url = require('url')
let data = require('../controller/data')

module.exports = {
	async delShopcarMultiple (req, res) {
		let params = req.query
		let userid = params.userid
		let ingredientsid = params.ingredientsid
		let delShopcarMultiple = await data.delShopcarMultiple([JSON.parse(userid),JSON.parse(ingredientsid)])
		if (delShopcarMultiple) {
			res.json({
				status: 200,
				message: '删除成功'
			})
		} else {
			res.json({
				status: 508,
				message: '删除商品失败'
			})
		}
	}
}