var http = require("http");
var fs = require("fs");
var modUrl = require("url");

var users = {aaa:123}//{aaa:123,zhangsan:123456}

var server = http.createServer(function(req,res){
    var url = req.url;
    // /login /reg
    console.log("url:",url);

    var GET = {};
    // /login?user=aaa&pass=123 
    var urlObj = modUrl.parse(url,true);
    url = urlObj.pathname;
    GET = urlObj.query;

    console.log("url:",url,"GET:",GET);
    if(url == "/login"){//接口
        var username = GET.user;//aaa
        var password = GET.pass;//123
        //验证
        if(!users[username]){//123 undefined 用户不存在
            res.end('{"error":0,"msg":"用户名或者密码不正确"}');
        } else {//用户已经存在
            if(users[username] == password){
                res.end('{"error":0,"msg":"登录成功"}');
            } else {
                res.end('{"error":0,"msg":"用户名或者密码不正确"}');
            }
        }
    } else if(url == "/reg"){
        res.end('{"error":1,"msg":"reg"}');
    } else {//文件
        fs.readFile("www"+url,function(err,data){
            if(err){
                res.end("404");
            } else {
                res.end(data);
            }
        });
    }


});
server.listen(9000);









