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
        // DeleteData(MyMongoClinet);
        // DeleteAllItem(MyMongoClinet);
        // FindOneWithOutCondition(MyMongoClinet);
        // FindOneWithCondition(MyMongoClinet);
        FindAllData(MyMongoClinet);
    }
});

function InsertData(MyMongoClinet){
    var MyDataBase= MyMongoClinet.db("school");
    var MyCollection= MyDataBase.collection('students');
    var MyData={name:"Saharia",Roll:"01",Class:"Ten",City:"DHaka"};
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

function DeleteAllItem(MyMongoClient){

    var MyDatabase = MyMongoClient.db('school');
    var MyCollection = MyDatabase.collection('students');

    MyCollection.deleteMany(function (error, ResultObj){

        if (error){

            console.log("Delete Failed")
        }
        else {

            console.log(ResultObj.result.n + " Item Deleted")
        }

    })
}

function FindOneWithOutCondition(MyMongoClient){

    var MyDatabase = MyMongoClient.db('school');
    var MyCollection = MyDatabase.collection('students');

    var FindObj = {};

    MyCollection.findOne(FindObj, function (error, result){

        console.log(result)
    })

}

function FindOneWithCondition(MyMongoClient){

    var MyDatabase = MyMongoClient.db('school');
    var MyCollection = MyDatabase.collection('students');

    var FindObj = {Roll: "01"};

    MyCollection.findOne(FindObj, function (error, result){

        console.log(result)
    })

}
function FindAllData(MyMongoClient){

    var MyDatabase = MyMongoClient.db('school');
    var MyCollection = MyDatabase.collection('students');

    // var FindObj = {Roll: "01"};

    MyCollection.find().toArray(function (error, result){

        console.log(result)
    })

}