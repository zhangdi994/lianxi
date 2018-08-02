var url = require("url");

var str = "/login?user=aaa&pass=123";
var str = "/login";
//parse
//{user:'aaa',pass:123}
console.log(url.parse(str,true));