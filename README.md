# 开发文档
## 安装说明
<pre><code> npm -y install ipip-datx</code></pre>
## 示例
<pre>
<code>
const datx = require('ipip-datx'); // 引入ipip-datx模块

var city = new datx.City("/path/to/mydata4vipday4.datx");
 // findSync 此方法只接受IPv4类型的IP地址，请自行检查参数是否符合规定；
console.log(city.findSync("123.121.17.72"));

var district = new datx.District("/path/to/quxian.datx");
// findSync 此方法只接受IPv4类型的IP地址，请自行检查参数是否符合规定；
console.log(district.findSync("123.121.17.72")); 
</code>
</pre>
