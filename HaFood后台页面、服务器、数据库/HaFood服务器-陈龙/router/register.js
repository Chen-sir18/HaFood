//注册接口
let url = require('url');
let common = require('../controller/common');
let data = require('../controller/data');

module.exports = {

    //注册
   async register (req,res){
        let params = req.body || req.query
		// console.log(params)
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
        //判断密码是否存在
        if(!params.psd){
            res.json({
                status: 504,
                message: '请输入密码'
            })
            return false;
        }
        //判断用户是否注册
        let isregister = await data.isRegister(params.email);
        if(!isregister){
            res.json({
                status: 505,
                message: '用户已注册'
            })
            return false;
        }
        //将信息添加到数据库中
        let regist = await data.register([params.email,params.psd]);
        if(regist){   //成功
            res.json({
                status: 200,
                message: '注册成功'
            })
        }else{   //失败
            res.json({
                status: 507,
                message: '服务器错误'
            })
        }
    }
}