
let data = require('../controller/data')

let deleteIngre = function (req, res){
	let params = req.query
	// console.log(params)
	let deleteIngred = data.deleteIngred(params.id)
	if(deleteIngred){   //成功
	    res.json({
	        status: 200,
	        message: '删除成功'
	    })
		
	}else{   //失败
	    res.json({
	        status: 508,
	        message: '删除失败'
	    })
	}
}

module.exports = {
	deleteIngre
}