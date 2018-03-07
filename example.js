var District = require('./lib/district');

var d = new District("c:/work/tiantexin/framework/library/ip/quxian.datx");
console.log(d.findSync("123.121.17.72"));

var City = require('./lib/city');

var c = new City("c:/work/tiantexin/17mon/mydata4vipday4.datx");
console.log(c.findSync("123.121.17.72"));