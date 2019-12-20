// 书写登录 的回调

let mysqlDb = require('../controller/mysql')
const jwt = require('jsonwebtoken')
let login = async function(req,res) {
    //接收到邮箱和密码
    let email = req.body.email || req.query.email
    let psd = req.body.password || req.query.password
    // console.log(psd)
	// console.log(req.query)
    // console.log(email)
    if(!email) {
        res.json({
            status: 501,
            message: '请输入邮箱'
        })
        return false
    }
    if(!psd) {
        res.json({
            status: 502,
            message: '请输入密码'
        })
        return false
    }
    // 去数据库中验证传入的数据是否正确
    let sql = 'SELECT id,nickname,email,tel,headpic FROM USER where email = ? && psd = ?'
    await mysqlDb(sql, [email, psd]).then(function(data){
        // console.log(data)
        if(data.length > 0){
			// 创建token
			// jwt.sign (数据，自己设置的签名，token过期时间)
			let secret = 'chenlong'
			const token = jwt.sign(Object.assign({},  data[0]), secret, {
				expiresIn:  60 * 60  // 过期时间1小时
			})
            // 登录就返回token  还没有操作
            res.json({
                status: 200,
				message: '登录成功',
                data: {
                    userinfo: data[0],
                    token: token
                }
            })
        } else {
            res.json({
                status: 503,
                message: '用户或密码不正确'
            })
        }
    })
}


module.exports = {
    login
}