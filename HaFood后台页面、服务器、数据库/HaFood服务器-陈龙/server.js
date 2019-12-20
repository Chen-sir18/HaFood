
// 引入express
let express = require('express')
var path = require('path')
var fs = require("fs")

let app = express() // 调用 express

let bodyParser = require('body-parser')
let router = require('./router')
// application/json形式接收    jsonParser 与 lencodedParser称为中间件
let parserJson = bodyParser.json()
// application/x-www-form-urlencoded 形式接收
let parserUrlencoded = bodyParser.urlencoded({
    extended: false
})
// 解析post请求的参数  解析出来放到 req.body
app.use(parserJson)
app.use(parserUrlencoded)
//启用图片静态服务器
app.use(express.static(__dirname+'/upload'));


app.all("*",function(request,response,next){ 
    response.header("Access-Control-Allow-Origin", "*");//访问控制允许来源：所有
    response.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//访问控制允许方法  
	response.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    next(); 
})
// 监听登录接口
// 接收参数通过bodyparser
app.post('/login',router.login)

// 注册接口
app.post('/register',router.register)

// 用户中心修改信息接口
app.get('/usercenter',router.usercenter)

// 获取验证码接口
app.get('/code',router.getCode)

// 忘记密码时修改密码获取验证码接口
app.get('/forgetcode',router.forgetcode)

// 忘记密码接口获取验证码
//post请求时会出现错误   接收不到参数
app.get("/forget",router.forget)

// 评论接口
app.get('/comments',router.comments)

// 添加评论接口
app.get('/incomment',router.incomment)

// shop部分和product的水果蔬菜内容接口
app.get('/ingredients',router.ingredients)

// 后台页面商品管理编辑修改商品接口
app.get('/reingred',router.reingredients)

// 后台页面商品管理增加商品接口
app.get('/addreingred',router.addreingred)

//图片上传接口
app.post('/upload', router.upload)

// 删除后台页面的商品接口
app.get('/deleteIngred',router.deleteIngre)

// home3部分的 popular的内容 home2 trending food的内容接口
app.get('/popular',router.popular)

// home1最开始的内容接口
app.get('/foodclass',router.foodclass)

// home4的商品内容接口
app.get('/drink',router.drink)

// home3的商品内容接口
app.get('/cakes',router.cakes)

// blogo部分出现的商品内容 和 home1的latestnews和 home2的	cokking tips 和 home4的latestnews 接口
app.get('/bloglists',router.bloglists)

// 查询shopcar 接口
app.get('/shopcar',router.shopcar)

// 购物车添加商品接口
app.get('/addshopcar',router.addshopcar)

// 购物车删除商品接口
app.get('/delshopcar',router.deleteshopcar)

// 购物车删除商品接口多条数据删除
app.get('/delshopcarmul',router.delShopcarMultiple)

// team的 about页面的团队成员接口
app.get('/team',router.team)

// 插入信息booktable订桌接口
app.get('/booktable',router.booktable)

// 查看信息inbooktab订桌接口
app.get('/inbooktab',router.inbooktab)

// Bestseller轮播数据接口
app.get('/bestseller',router.bestseller)

// 搜索查询商品接口
app.get('/search',router.search)

// 查询所有用户信息接口
app.get('/userinfo',router.userinfo)


// 监听端口
app.listen(3000,function(){
    console.log('port:3000')
})