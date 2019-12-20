let url = require('url')
let data = require('../controller/data')

module.exports = {
	async addreingred (req, res) {
		let params = req.query
		// console.log(params)
		let addreIngre = await data.addreIngred([null,params.goodsname, params.picstr, params.price, null, null, params.depict])
		if (addreIngre) {
			res.json({
				status: 200,
				message: '添加商品成功'
			})
		} else {
			res.json({
				status: 512,
				message: '添加商品失败'
			})
		}
	}
}