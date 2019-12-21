// 忘记密码
//注册接口
let url = require('url');
let common = require('../controller/common');
let data = require('../controller/data');

module.exports = {
    //获取验证码
    async forget (req,res) {
		let params = req.query
		//接收到邮箱和密码
		//判断邮箱是否正确
		if(!params.email || !common.isEmail(params.email)){
		    res.json({
		        status: 501,
		        message: '邮箱格式不正确'
		    })
		    return false;
		}
		//判断验证码是否存在
		if(!params.valicode){
		    res.json({
		        status: 503,
		        message: '请输入验证码'
		    })
		    return false;
		}
		//判断验证码是否正确
		let isCode = await data.isCode(params.email,params.valicode);
		if(!isCode){
		    res.json({
		        status: 506,
		        message: '验证码错误'
		    })
		    return false;
		}
		//判断用户是否注册
		let isregister = await data.isRegister(params.email);
		if(isregister){
		    res.json({
		        status: 505,
		        message: '用户未注册'
		    })
		    return false;
		}
		//将修改信息添加到数据库中
		let forget = await data.forget([params.psd,params.email]);
		if(forget){   //成功
		    res.json({
		        status: 200,
		        message: '密码修改成功'
		    })
		}else{   //失败
		    res.json({
		        status: 507,
		        message: '密码修改失败'
		    })
		}
	}

}
