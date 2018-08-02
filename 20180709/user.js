var http = require("http");
var fs = require("fs");

var users = {aaa:123}//{aaa:123,zhangsan:123456}

var server = http.createServer(function(req,res){
    var url = req.url;
    // /login /reg
    console.log("url:",url);

    var GET = {};
    if(url.indexOf("?") != -1){//接口
        // /login?user=aaa&pass=123 
        var arr = url.split("?"); //[/login,user=aaa&pass=123]
        url = arr[0];
        var arr2 = arr[1].split("&");// [user=aaa,pass=123]
        for(var i = 0; i < arr2.length; i++){
            var arr3 = arr2[i].split("=")//[user,aaa]
            GET[arr3[0]] = arr3[1];
        }

        console.log("url:",url,"GET:",GET);

        if(url == "/login"){
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
        }

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









