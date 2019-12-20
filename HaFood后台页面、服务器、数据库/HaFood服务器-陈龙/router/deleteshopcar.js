// 删除购物车商品
let url = require('url')
let data = require('../controller/data')

module.exports = {
	async deleteshopcar (req, res) {
		let params = req.query
		// console.log(params)
		let userid = params.userid
		let ingredientsid = params.ingredientsid
		let deleteShopcar = await data.deleteShopcar([JSON.parse(userid),JSON.parse(ingredientsid)])
		if (deleteShopcar) {
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