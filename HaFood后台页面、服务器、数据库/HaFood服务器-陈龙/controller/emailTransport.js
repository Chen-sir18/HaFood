
//引用
let  nodemailer = require('nodemailer');

let nodemailerTransport = require('nodemailer-smtp-transport');

let config = require('../config');

//配置邮箱的信息
//配置的内容
nodemailerTransport = nodemailer.createTransport(nodemailerTransport({
    service: config.email.service,
    auth:{
        user: config.email.user,
        pass: config.email.pass
    },
    domains: [
        "qq.com"
    ],
    host: "smtp.qq.com",
    port: 465,
    secure: true
}))

/**
 * @description 发送邮件
 * 
 * @param {string} receipt 收件人
 * @param subject {string}  邮件主题
 * @param html {string}   邮件内容
 * @param callback  回调函数   回调了成功和失败
 */
//发送邮件方法
 let sendEmail = function(receipt,subject,html,callback){
    nodemailerTransport.sendMail({
        from: config.email.user,
        to: receipt,
        subject,
        html
    },callback)
 }

 module.exports = sendEmail