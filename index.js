var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://yamin:1234@cluster0.tzuqr.mongodb.net?retryWrites=true&w=majority";

var config= { useUnifiedTopology: true };

MongoClient.connect(URL,config,function (error,MyMongoClinet) {
    if(error){
        console.log("Connection Fail")
    }
    else{
        console.log("Connection Success");

        // InsertData(MyMongoClinet);
        DeleteData(MyMongoClinet);
    }
});

function InsertData(MyMongoClinet){
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');
    var MyData={name:"Alam Yamin",Roll:"02",Class:"Ten",City:"Dinajpur"};
    MyCollection.insertOne(MyData,function (error) {
        if(error){
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }
    })
}

function DeleteData(MyMongoClient){

    var MyDatabase= MyMongoClient.db('school');
    var MyCollection = MyDatabase.collection('students');

    var DeleteItem = {Roll: "02"}

    MyCollection.deleteOne(DeleteItem, function (error){

        if (error){

            console.log('Data Deleted Failed')
        }
        else {

            console.log('Data Deleted Successfully');
        }
    })
}