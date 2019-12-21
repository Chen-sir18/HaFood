// about页面的团队成员
let mysqlDb = require('../controller/mysql')

let team = function (req, res) {
    let sql = 'SELECT * FROM team'
    mysqlDb(sql).then(function(data) {
        if (data.length > 0) {
            res.json({
                status: 200,
                data:data
            })
        } else {
            res.json({
                status: 507,
                message: '团队成员数据错误'
            })
        }
    })
}

module.exports = {
    team
}