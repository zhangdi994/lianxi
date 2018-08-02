
//1、引入模块
var http = require("http");
var fs = require("fs");

//2、创建服务
var server = http.createServer(function(req,res){

    var url = req.url;//  /index.html

    console.log("url:",url);

    fs.readFile("www"+url,function(err,data){
        if(err){
            res.end("404");
        }else {
            res.end(data);
        }
    });
 
});

//3、监听端口
server.listen(9000);





