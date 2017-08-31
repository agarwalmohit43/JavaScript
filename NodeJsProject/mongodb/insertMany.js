var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mohit";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var obj=[   { name: 'John', Last_First_Name: 'Highway 71'},
        { First_Name: 'Peter', Last_Name: 'Lowstreet 4'},
        { First_Name: 'Amy', Last_Name: 'Apple st 652'},
        { First_Name: 'Hannah', Last_Name: 'Mountain 21'},
        { First_Name: 'Michael', Last_Name: 'Valley 345'},
        { First_Name: 'Sandy', Last_Name: 'Ocean blvd 2'},
        { First_Name: 'Betty', Last_Name: 'Green Grass 1'},
        { First_Name: 'Richard', Last_Name: 'Sky st 331'},
        { First_Name: 'Susan', Last_Name: 'One way 98'},
        { First_Name: 'Vicky', Last_Name: 'Yellow Garden 2'},
        { First_Name: 'Ben', Last_Name: 'Park Lane 38'},
        { First_Name: 'William', Last_Name: 'Central st 954'},
        { First_Name: 'Chuck', Last_Name: 'Main Road 989'},
        { First_Name: 'Viola', Last_Name: 'Sideway 1633'}];
    db.collection("MohitNodejs").insertMany(obj,function (err,res) {
        if (err) throw err;
        console.log("Insertted Successfully");
    });
    db.close();
});/**
 * Created by MOHIT AGARWAL on 29-06-2017.
 */
