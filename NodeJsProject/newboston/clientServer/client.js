var http = require('http');
var querystring = require('querystring');

//var postData = querystring.stringify({
//  msg: 'hello world'
//})/
var options = {
    hostname: 'localhost',
    port: 3000,
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain'
        //'Content-Length': postData.length
    }
};

var req = http.request(options, function (res) {
    console.log('STATUS:', res.statusCode);
    console.log('HEADERS:', JSON.stringify(res.headers));

    res.setEncoding('utf8');

    req.on('data', function (data) {
        console.log("Getting from server");
        console.log('BODY:', data);
        req.write(data);

    });

    res.on('end', function () {
        console.log('No more data in response.');
    });
});

req.on('error', function (e) {
    console.log('Problem with request:', e.message);
});

req.end();


//var net = require('net');
//var io = require('socket.io');
//var events = require('events');
//var eventEmitter = new events.EventEmitter();


//// listener #1
//var listner1 = function listner1() {
//    console.log('listner1 executed.');
//}

//// listener #2
//var listner2 = function listner2() {
//    console.log('listner2 executed.');
//}

//// Bind the connection event with the listner1 function
//eventEmitter.addListener('server_data', listner1);

//// Bind the connection event with the listner2 function
//eventEmitter.on('connection', listner2);


//var client = net.connect({ port: 8001 }, function (data) {
//    console.log('connected to server!');
//    console.log(data)

//});

//client.on('connect', function (data) {
//    console.log('CLIENT -- connect event received');
//    console.log(data);
//    client.end();
//});

//client.on('server_data', function (data) {
//    console.log('CLIENT -- server_data event received');
//    console.log(data.message);
//    client.end();
//});



////var net = require('net');

////var client = new net.Socket();

////client.connect(10993, '127.0.0.1', function () {
////    console.log('Connected');

////    client.emit('client_data', { 'letter': 'sdfasf' });
////});
