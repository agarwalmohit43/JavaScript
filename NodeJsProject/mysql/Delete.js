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
    var sql='Delete from mohit where id= 4';
    con.query(sql,function (err,res, fields) {
        if(err) throw err;
        console.log("No. of rows affected: "+res.affectedRows);

    });
});