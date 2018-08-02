//1 引入模块 http
var http = require("http");

http.createServer(function(req,res){

    //request 客户 --->服务器
    //response 服务器 --->客户
    console.log("有人来了");
    console.log(req.url);

    res.write("hello",function(){
        console.log("write写完成了");
    });
    res.end("hello end",function(){
        console.log("end写完成了");
    });
//端口 一个应用程序只能有一个端口
}).listen(9000,function(){
    console.log("你的服务已经开启：http://localhost:9000");
});


