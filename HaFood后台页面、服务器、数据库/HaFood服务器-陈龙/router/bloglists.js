// blogo部分出现的商品内容 和 home1的latestnews和 home2的	cokking tips 和 home4的latestnews
let mysqlDb = require('../controller/mysql')

let bloglists = function (req, res) {
    let sql = 'SELECT * FROM bloglists'
    mysqlDb(sql).then(function(data) {
        if (data.length > 0) {
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
    bloglists
}