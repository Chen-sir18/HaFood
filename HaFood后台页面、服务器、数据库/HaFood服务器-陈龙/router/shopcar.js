//  userid连接user的id ，ingredientsid连接 ingredients表的id 三表联查
let url = require('url')
let data = require('../controller/data')
module.exports = {
	async shopcar (req, res) {
		let params = req.query
		// console.log(params.userid)
		let shopcar = await data.shopcar(params.userid)
		if (shopcar) {
			res.json({
				status: 200,
				data: shopcar
			})
		} else {
			res.json({
				status: 506,
				message: '暂无商品'
			})
		}
	}
}