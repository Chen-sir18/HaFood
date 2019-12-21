// home1最开始的内容
let mysqlDb = require('../controller/mysql')

let foodclass = function(req, res) {
    let sql = 'SELECT * FROM foodclass'
    mysqlDb(sql).then(function(data) {
        if(data.length > 0) {
            res.json({
                status: 200,
                data:data
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
    foodclass
}