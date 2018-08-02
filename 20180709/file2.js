//fs fileSystem文件系统
var fs = require("fs");

//readFileSync(地址);

try{
    var data = fs.readFileSync("a.txt");//,"utf-8"
    console.log(data.toString());
}catch(e){
    console.log("catch:文件读取失败");
}

console.log(1111111);