/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var url=require('url');

var address="http://localhost:8080/default.htm?year=2017&month=June";

var parseUrl=url.parse(address,true);

console.log(parseUrl.hostname);
console.log(parseUrl.pathname);
console.log(parseUrl.search);

var getObject=parseUrl.query;
console.log(getObject);

console.log(getObject.month);
