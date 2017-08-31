var mysql = require('mysql');

var con= mysql.createConnection({
   host: "localhost",
    user:"root",
    password:"loverboy43"
});

con.connect(function (err) {
    if(err)throw err;
    console.log('Connected');
});