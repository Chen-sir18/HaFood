//所有请求回调的出口
let login = require('./login')
let register = require('./register')
let code = require('./code')
let forgetcode = require('./forgetcode')
let forget = require('./forget')
let usercenter = require('./usercenter')
let comments = require('./comments')
let incomment = require('./incomment')
let ingredients = require('./ingredients')
let reingredients = require('./reingredients')
let deleteIngred = require('./deleteIngred')
let addreingred = require('./addreingred')
let popular = require('./popular')
let foodclass = require('./foodclass ')
let drink = require('./drink')
let cakes = require('./cakes')
let bloglists = require('./bloglists')
let shopcar = require('./shopcar')
let addshopcar = require('./addshopcar')
let deleteshopcar = require('./deleteshopcar')
let delShopcarMul = require('./delShopcarMultiple')
let team = require('./team')
let booktable = require('./booktable')
let inbooktab = require('./inbooktable')
let bestseller = require('./bestseller')
let upload = require('./upload')
let search = require('./search')
let userinfo = require('./userinfo')

// Object.assign合并对象
let router = Object.assign({},
    login,
	register,
	code,
	forgetcode,
    forget,
	usercenter,
    comments,
	incomment,
    ingredients,
	reingredients,
	deleteIngred,
	addreingred,
    popular,
    foodclass,
    drink,
    cakes,
    bloglists,
    shopcar,
	addshopcar,
	deleteshopcar,
	delShopcarMul,
    team,
	booktable,
	inbooktab,
	bestseller,
	upload,
	search,
	userinfo
    )
module.exports = router