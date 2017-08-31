/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var mysql = require('mysql');

var con= mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"loverboy43"
});

con.connect(function (err) {
    if(err)throw err;
    console.log('Connected');

    con.query('Create database nodedb',function (err,res) {
        if(err) throw err;
        console.log('Database Created');
    });
});