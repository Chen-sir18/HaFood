// 图片上传
var formidable = require('formidable');
 
var path = require("path");
var fs = require("fs");
 
function upload (req, res) {
	// console.log(req)
    let datas = {};
    datas.code = '0';
    datas.message = '上传图片成功';
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';

    form.uploadDir = path.resolve(__dirname, '../upload') // 上传放的地址
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files) {
        // console.log(files.file);
        var filename = files.file.name
		// // 可以存入数据库的图片名称filename
        var newPath = form.uploadDir + '/' + filename;
		
		fs.renameSync(files.file.path, newPath) //重命名

        return;
    })
}
 
module.exports = {
	upload
};