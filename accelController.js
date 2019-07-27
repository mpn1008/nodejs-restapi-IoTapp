let Accel = require('./accelModel');
let mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://phuong01:12345@fptclus-vezuu.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true});



exports.index = function (req, res) {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("unipj").collection("accels");
        console.log('connected');
       
        collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        
        });
        client.close();
      });
}

exports.new = function(req, res){
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("unipj").collection("accels");
        console.log('connected'); 
        collection.insertOne(req.body, function(err, res) {
            if (err) throw err;
          });
        client.close();
      });
}


