var http = require('http');

var server = http.createServer().listen(3000);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        body += data;
        console.log('Getting data from client:')
        console.log(body);
    });

    req.on('end', function () {
        console.log('Sending Data to client:');
        res.write("Hello World");
        console.log('Disconnected');


    });
});

console.log('Listening on port 3000');



//var http = require('http');
//var io = require('socket.io');

//var events = require('events');
//var eventEmitter = new events.EventEmitter();

//var server = http.createServer(function (request, response) {
//    response.write("lowercase");

//    request.on('data', (data) => {

//    response.end();
//});

//server.on("connection", (socket) => {
//    process.stdout.write("HI")
//    process.stdout.write("HI")
//    socket.emit('server_data', { 'message': 'serverdata' });
//    eventEmitter.emit('server_data', { 'message': 'serverdata' });

//}


//);
//server.listen(8001);


////var listener = io.listen(server);
////listener.sockets.on
////    ('connection', function (socket) {
////        server.
////            socket.emit('server_data', { 'message': 'LowerCase' });
////    });

//////recieve client data
////listener.sockets.on('client_data', function (data) {
////    process.stdout.write(data.letter);
////});