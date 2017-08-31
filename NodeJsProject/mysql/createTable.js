/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var mysql = require('mysql');

var con= mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"loverboy43",
    database:"nodedb"
});

con.connect(function (err) {
    if(err)throw err;
    console.log('Connected');
    var sql='Create table mohit (id int(5),name varchar(255))';
    con.query(sql,function (err,res) {
        if(err) throw err;
        console.log('Table Created');
    });
});