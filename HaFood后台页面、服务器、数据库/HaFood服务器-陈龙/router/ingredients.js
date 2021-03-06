// shop部分和product的水果蔬菜内容
let mysqlDb = require('../controller/mysql')

let ingredients = function (req, res) {
    let sql = 'SELECT * FROM ingredients'
    mysqlDb(sql).then(function(data){
        // console.log(data)
        if (data.length > 0) {
            res.json({
                status: 200,
                data: data
            })
        } else {
            res.json({
                status: 505,
                message: '商品数据丢失'
            })
        }
    })
	
}

module.exports = {
    ingredients
}