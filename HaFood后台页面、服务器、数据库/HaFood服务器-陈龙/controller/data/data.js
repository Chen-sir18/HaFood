//只要有数据库的操作就在这儿进行
let query = require('../mysql');

module.exports = {
    //async 变成异步方法  await等待同步
    //判断用户是否注册
    isRegister: async function(email){
     let data = await query('select * from user where email = ?',email);
        // console.log(data)
        if(data.length>0){
            return false;  //表示注册过了
        }else {
            return true;  //表示没有注册
        }
    },
    //判断验证码是否正确
    isCode : async function(email,code){
        let sql = 'select * from changecode where email = ? order by createTime desc'
        let data = await query(sql,email)
		// console.log(data)
        if(data[0].valicode == code){
            return true;
        }else{
            return false;
        }
    },
    //将信息添加到数据库中
    register: async function(data){
        let  sql = 'insert into user(email,psd) values(?)'
        let result = await query(sql,[data]).catch(function(res){   //  .catch(function(){})   捕捉数据库操作失败的
            console.log(res)   //操作失败则数据到  res  里面
        })
        if(result){  //操作成功则数据到  result里面
            return true;
        }else{
            return false;
        }  
        
    },
    //验证用户登录信息
    login: async function(data){
        let sql = "select * from user where email=? and psd=?";
        let result = await query(sql,data)
        if(result.length>0){
            return result[0];
        }else{
            return false;
        }
    },
	// 用户忘记密码修改密码
	forget: async function(data) {
		let sql = 'UPDATE USER SET psd = (?) WHERE email = (?)'
		let result = await query(sql,data).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 用户中心修改信息接口
	usercenter: async function(data) {
		let sql = 'UPDATE USER SET nickname = ? , tel = ?, headpic = ? WHERE email = ?'
		let result = await query(sql,data).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	//评论时候验证用户是否登录
	incomLogin: async function(data){
		console.log(data)
	    let sql = "select id,nickname,email,tel,headpic from user where email=?";
	    let result = await query(sql,data)
	
	    if(result.length>0){
	        return result[0];
	    }else{
	        return false;
	    }
	},
	// 查看booktable订桌信息数据
	booktable: async function (data) {
		let sql = 'SELECT * FROM booktable'
		let result = await query(sql,data).catch(function (res) {
			console.log(res)
		})
		if (result) {
			return result
		} else {
			return false
		}
	},
	// 将booktable订桌信息添加到数据库中
	inbooktable: async function(data) {
		let sql = 'insert into booktable(userid, consumer, bookday, booktime, personcount, node) values(?)'
		let result = await query(sql,[data]).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 将评论信息添加到数据库中
	inComments: async function(data) {
		let sql = 'insert into comments(userid,content) values(?)'
		let result = await query(sql,[data]).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 增加ingredients中商品
	addreIngred: async function(data) {
		let sql = 'INSERT INTO ingredients VALUES(?)'
		let result = await query(sql,[data]).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 删除ingredients表中商品
	deleteIngred: async function (data) {
		let sql = 'DELETE FROM ingredients WHERE id = ?'
		let result = await query(sql,[data]).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 修改ingredients表中商品内容
	updateIngred: async function (data) {
		// console.log(data) // data是数组
		let sql = 'UPDATE ingredients SET goodsname = ?,picstr = ?,price = ?,depict = ? WHERE id=?'
		let result = await query(sql,data).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 查询购物车商品
	shopcar: async function (data) {
		// console.log(data)
		  let sql = 'SELECT userid,picstr,price,goodscount,goodsname,ingredientsid FROM shopcar,USER,ingredients WHERE shopcar.ingredientsid = ingredients.id AND shopcar.userid = user.id AND shopcar.userid = (?)'
		  let result = await query(sql,[data]).catch(function(res) {
		  	console.log(res)
		  })
		  // console.log(result)
		  if (result) {
		  	return result
		  } else {
		  	return false
		  }
	},
	// 添加时查询购物车
	inshopcar: async function (data) {
		// console.log(data)
		  let sql = 'SELECT userid,picstr,price,goodscount,goodsname FROM shopcar,USER,ingredients WHERE shopcar.ingredientsid = ingredients.id AND shopcar.userid = user.id AND shopcar.userid = (?) and shopcar.ingredientsid = (?)'
		  let result = await query(sql,data).catch(function(res) {
		  	console.log(res)
		  })
		  // console.log(result)
		  if (result) {
		  	return result
		  } else {
		  	return false
		  }
	},
	// 购物车添加商品
	addShopcar: async function (data) {
		console.log(data)
		let sql = 'INSERT INTO shopcar VALUES(?)'
		let result = await query(sql,[data]).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 修改购物车商品数量
	upCount: async function (data) {
		let sql = 'UPDATE shopcar SET goodscount = ? WHERE userid = ? and ingredientsid = ?'
		let result = await query(sql,data).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 删除购物车商品
	deleteShopcar: async function (data) {
		console.log(data)
		let sql = 'DELETE FROM shopcar WHERE userid = (?) AND ingredientsid = (?)'
		let result = await query(sql,data).catch(function(res) {
			console.log(res)
		})
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 删除购物车商品多条商品删除
	delShopcarMultiple: async function (data) {
		// console.log(data)
		let sql = 'DELETE FROM shopcar WHERE userid = (?) AND ingredientsid in (?)'
		let result = await query(sql,data).catch(function(res) {
			console.log(res)
		})
		// console.log(result)
		if (result) {
			return true
		} else {
			return false
		}
	},
	// 搜索所有商品
	onSearch: async function(data) {
		let sql = 'SELECT * FROM ingredients WHERE goodsname = ?'
		let result = await query(sql, data).catch(function(res) {
			console.log(res)
		})
		console.log(result)
		if (result) {
			return result
		} else {
			return false
		}
	},
	// 用户信息
	userinfo: async function(data){
		let sql = 'SELECT id,nickname,email,tel,headpic FROM USER'
		let result = await query(sql, data).catch((res) => {
			console.log(res)
		})
		if (result) {
			return result
		} else {
			return false
		}
	}
}