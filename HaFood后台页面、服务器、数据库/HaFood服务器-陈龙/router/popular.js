//  home3部分的 popular的内容 home2 trending food的内容
let mysqlDb = require('../controller/mysql')

let popular = function(req, res) {
    let sql = 'SELECT * FROM popular'
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
    popular
}
