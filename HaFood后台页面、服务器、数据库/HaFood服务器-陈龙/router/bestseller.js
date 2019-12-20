// Bestseller轮播数据
let mysqlDb = require('../controller/mysql')

let bestseller = function (req, res) {
    let sql = 'SELECT * FROM Bestseller'
    mysqlDb(sql).then(function(data) {
        if (data.length > 0) {
            res.json({
                status: 200,
                data:data
            })
        } else {
            res.json({
                status: 501,
                message: '商品数据错误'
            })
        }
    })
}

module.exports = {
    bestseller
}