// 后台页面商品管理编辑商品接口
let url = require('url')
let data = require('../controller/data')

module.exports = {
	async reingredients (req,res) {
		let params = req.query
		// console.log(params)
		let updateIngred = await data.updateIngred([params.goodsname, params.picstr, params.price, params.depict, params.id])
		if (updateIngred) {
			res.json({
				status:200,
				messaage: '修改成功'
			})
		} else {
			res.json({
				status: 508,
				messaage: '修改失败'
			})
		}
	}
}