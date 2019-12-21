let url = require('url')
let data = require('../controller/data')

module.exports = {
	async usercenter (req, res) {
		let params = req.query
		// console.log(params)
		let usercente = await data.usercenter([params.nickname, params.tel, params.headpic, params.email])
		if (usercente) {
			let incomLogin = await data.incomLogin(params.email)
			if (incomLogin) {
				res.json({
					status: 200,
					message: '修改成功',
					data: incomLogin
				})
			} else {
				res.json({
					status: 514,
					message: '修改失败'
				})
			}
		} else {
			res.json({
				status: 513,
				message: '修改失败'
			})
		}
	}
}