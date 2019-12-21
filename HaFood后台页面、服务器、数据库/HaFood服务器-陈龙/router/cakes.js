// home3的商品内容
let mysqlDb = require('../controller/mysql')

let cakes = function (req, res) {
    let sql = 'SELECT * FROM cakes'
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
    cakes
}