let url = require('url')
let data = require('../controller/data')

module.exports = {
	async userinfo (req, res) {
		let userinfo = await data.userinfo()
		if (userinfo) {
			res.json({
				status: 200,
				message: '成功',
				data: userinfo
			})
		} else {
			res.json({
				status: 502,
				message: '失败'
			})
		}
	}
}