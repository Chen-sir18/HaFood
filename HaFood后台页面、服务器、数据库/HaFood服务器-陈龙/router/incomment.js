// 添加评论的接口
let url = require('url')
let data = require('../controller/data')

module.exports = {
	async incomment (req, res) {
		let params = req.query
		let content = params.comments || '这是默认的评论'
		// console.log(params)
		// 验证用户是否登录,使用判断邮箱是否存在的方法
		let login = await data.incomLogin([params.email])
		if (login) {
			//将评论信息添加到数据库中
			// console.log(parseInt(params.userid), content)
			let inComments = await data.inComments([parseInt(params.userid), content])
			if (inComments) {
				res.json({
					status: 200,
					message: '评论成功'
				})
			} else {
				res.json({
					status: 513,
					message: '评论失败'
				})
			}
		} else {
			res.json({
				status: 512,
				message: '用户未登录，不能添加评论'
			})
		}
	}
}