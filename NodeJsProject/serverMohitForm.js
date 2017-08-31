var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.use('/mohitRes',function (req,res) {
   var response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);

    res.send(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8022, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})