// booktable订桌接口
let url = require('url');
let data = require('../controller/data');

module.exports = {
	// 订桌
	async booktable(req, res) {
		let params = req.query
		// console.log(params)
		// 验证用户是否登录
		let incomLogin = await data.incomLogin([params.email])
		if (incomLogin) {
			//将信息添加到数据库中
			let booktab = await data.inbooktable([params.userid, params.consumer, params.bookday, params.booktime, params.personcount, params.node]);
			if(booktab){   //成功
			    res.json({
			        status: 200,
			        message: '订单成功'
			    })
			}else{   //失败
			    res.json({
			        status: 511,
			        message: '订单失败'
			    })
			}
		} else {
			res.json({
				status: 512,
				message: '用户未登录，不能定单'
			})
		}
	}
}