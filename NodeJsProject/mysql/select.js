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
    var sql='Select * from mohit';
    con.query(sql,function (err,res, fields) {
        if(err) throw err;
        console.log(res);
        console.log(res[0].name);
        console.log(fields);
        console.log(fields[0].name);
    });
});