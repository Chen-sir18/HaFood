// 前台用户评论内容

let mysqlDb = require('../controller/mysql')
let data = require('../controller/data');

let comments = function (req, res) {
	// console.log(req)
    let sql = 'SELECT nickname,content,headpic FROM USER,comments WHERE user.id = comments.userid'
    mysqlDb(sql).then(function(data){
        // console.log(data)
        if (data.length > 0) {
            res.json({
                status: 200,
                data: data
            })
        } else {
            res.json({
                status: 504,
                message: '暂无评论'
            })
        }
    })
}

module.exports = {
    comments
}