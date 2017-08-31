/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var http=require('http');


http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("The Date and Time currently are: "+ Date());
    res.write("<br>");
    res.write(req.url);
    res.write("</br>");
    res.end();

}).listen(8080);
console.log("Server Is running");