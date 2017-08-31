var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mohit";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var obj={"First_Name":"Mohit","Last_Name":"Agarwal"};
    db.collection("MohitNodejs").insertOne(obj,function (err,res) {
        if (err) throw err;
        console.log("Insertted Successfully");
    });
    db.close();
});