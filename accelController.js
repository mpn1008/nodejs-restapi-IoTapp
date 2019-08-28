
const MongoClient = require('mongodb').MongoClient;
var async = require("async");

const uri = "mongodb+srv://phuong01:12345@fptclus-vezuu.gcp.mongodb.net/test?retryWrites=true&w=majority";

//GET all elements from the database
/*exports.index = async function (req, res) {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("unipj").collection("sensordatas");
        console.log('connected');
        collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        
        });
       client.close();
      });
}*/
module.exports = {
  myFunction: async (query) => {
    let db, client;
    try {
      client = await MongoClient.connect(uri, { useNewUrlParser: true });
      db = client.db('unipj');
      return await db.collection('sensordatas').find({}).toArray();
    } finally {
      client.close();
    }
  }
}
exports.index = function(req , res){
  res = myFunction();
}

exports.new = function(req, res){
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("unipj").collection("sensordatas");
        console.log('connected'); 
        collection.insertOne(req.body, function(err, res) {
            if (err) throw err;
          });
        client.close();
      });
}


