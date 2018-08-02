//1 引入模块 http
var http = require("http");

var server = http.createServer(function(req,res){

    //request 客户 --->服务器
    //response 服务器 --->客户
    console.log("有人来了");
    console.log(req.url);

    //res.write("hello");
    //给客户端返回
    res.end("hello end");

});

//端口 一个应用程序只能有一个端口
server.listen(9000);


