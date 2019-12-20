//注册接口
let url = require('url');
let common = require('../controller/common');
let sendEmail = require("../controller/emailTransport");
let query = require('../controller/mysql');
let data = require('../controller/data');

module.exports = {
	//获取验证码
    async getCode (req,res){
		let params = req.query
        // console.log(123)
        //获取前端发送过来的邮箱
        //验证邮箱是否正确
      let email= url.parse(req.url,true).query.email;
		let isregister = await data.isRegister(params.email);
		// console.log(isregister)
		if(!isregister){
			res.json({
				status: 505,
				message: '用户已注册'
			})
			return false;
		}
      if(common.isEmail(email) && isregister){
            //获取验证码  发送到邮箱
                //Math.round四舍五入为最近的整数
            let code = Math.round(Math.random()*8999+1000);
            let html = `<h1 style="color:red;">你的邮箱验证码为：${code}</h1>`
            sendEmail(email,'注册验证码',html,function(error,response){
                if(error){
                    res.json({
                        status: 510,
                        message: '邮箱发送失败'
                    })
                }else{
                        let sql = 'insert into changecode(email,valicode,createtime) values(?)'
                    query(sql,[[email,code,null]]).then(function(result){
                        res.json({
                            status: 200,
                            message: '成功'
                        })
                    }).catch(function(){
                        res.json({
                            status: 502,
                            message: '数据库失败'
                        })
                    })
                }
            })
        }else{
          res.json({
              status: 501,
              message: '邮箱格式不正确'
          })
      }
	  
    }
}