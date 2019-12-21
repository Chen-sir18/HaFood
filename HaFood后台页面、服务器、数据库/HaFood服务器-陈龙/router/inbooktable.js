let url = require('url')
let data = require('../controller/data/')

module.exports = {
	async inbooktab (req, res) {
		
		let booktable = await data.booktable()
		if (booktable) {
			res.json({
				status: 200,
				message: '查询成功',
				data: booktable
			})
		} else {
			res.json({
				status: 511,
				message: '查询失败'
			})
		}
	}
}