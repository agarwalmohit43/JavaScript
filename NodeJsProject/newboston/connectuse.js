/**
 * Created by MOHIT AGARWAL on 25-06-2017.
 */
var connect=require('connect');
var http=require('http');

var app = connect();

function profile(request,response) {
    console.log('A user has made a request for profile');
    response.writeHead(200,{'Context-Type':'text/plain'});
    response.write('Hello Mohit');
    response.end();
}

app.use("/profile",profile);

http.createServer(app).listen(8080);
console.log('Server is running');