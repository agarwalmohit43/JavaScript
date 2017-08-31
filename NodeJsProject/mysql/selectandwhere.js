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
    var id='1';
    var name='Mohit Kumar';
    var sql='Select * from mohit where id=? and name=?';
    con.query(sql,[id,name],function (err,res, fields) {
        if(err) throw err;
        console.log(res);

    });
});