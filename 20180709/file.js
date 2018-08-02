//fs fileSystem文件系统
var fs = require("fs");

//readFile(地址，回调函数);
fs.readFile("a.txt","utf8",function(err,data){

    if(err){
        console.log("文件读取失败");
    } else {
        console.log(data);
    }
});


