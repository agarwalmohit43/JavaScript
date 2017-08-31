var http= require('http');

function onRequest(request,response){
    console.log('A user has made a request'+ request.uri);
    response.writeHead(200,{'Context-Type':'text/plain'});
    //response={"firstname":"mohit"};
    response.write('Hello Mohit');
    console.log(response);
    //response.write(JSON.stringify(response));

    response.end();

}

http.createServer(onRequest).listen(8888);
console.log('Server is running');