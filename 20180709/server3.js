
//1、引入模块
var http = require("http");

//2、创建服务
var server = http.createServer(function(req,res){

    var url = req.url;//  /index.html

    console.log("url:",url);

    switch(url){
        case "/index.html":
            res.end("index.html");
            break;
        case "/a.html":
            res.end("a.html");
            break;
        case "/b.html":
            res.end("b.html");
            break;
        default:
            res.end("404.html");
    }
});

//3、监听端口
server.listen(9000);





