// 添加购物车商品接口
let url = require('url')
let data = require('../controller/data')

module.exports = {
	async addshopcar (req, res) {
		let params = req.query
		let goodscount = Number(params.goodscount)
		let userid = Number(params.userid)
		let ingredientsid = Number(params.ingredientsid)
		// console.log(params)
		// 查询
		let shopcar = await data.inshopcar([userid, ingredientsid])
		// console.log(shopcar)
		if (shopcar.length > 0) {
			// 修改count
			let upCount =await data.upCount([goodscount,userid,ingredientsid])
			// console.log(upCount)
			if (upCount) {
				res.json({
					status: 200,
					message: '添加成功1'
				})
			} else {
				res.json({
					status: 514,
					message: '添加失败'
				})
			}
			
		} else {
			// 添加
			let addShopcar = await data.addShopcar([null,userid,ingredientsid,goodscount])
			if (addShopcar) {
				res.json({
					status: 200,
					message: '添加成功2'
				})
			} else {
				res.json({
					status: 515,
					message: '添加失败'
				})
			}
		}
		
	}
}