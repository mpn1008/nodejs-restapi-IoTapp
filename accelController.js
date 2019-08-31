const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
var async = require("async");
var assert = require('assert')

const uri = "mongodb+srv://phuong01:12345@fptclus-vezuu.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

//GET all elements from the database
/*exports.index = function (req, res) {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection =  client.db("unipj").collection("sensordatas");
        console.log('connected');
        collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        
        });
       client.close();
      });
}*/
exports.index = async function(req, res){
  let client;

  try {
    await MongoClient.connect(uri, async function(err,client){
      console.log("Connected correctly to server");
    assert.equal(null,err);
    const db = client.db('unipj');
    const col = db.collection('sensordatas');
    const docs = await col.find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
    
  });
    //assert.equal(2, docs.length);
  } catch (err) {
    console.log(err.stack);
  }
  // Close connection
  await client.close();
}
/*MongoClient.connect(url, async function(err, client) {
  assert.equal(null, err);
  console.log('successfully connected to mongoDB server: ' + url);

  const db = client.db('unipj');
  try{
    var senateInsert = await waitInsert(db, 'senate');
  }
  catch(err) {
    console.log(err);
  }
  console.log('closing database connection');
  client.close();
})*/
/*module.exports = {
  myFunction: async (query) => {
    let db, client;
    try {
      client = await MongoClient.connect(uri, { useNewUrlParser: true });
      db = client.db('unipj');
      return await db.collection('sensordatas').find({}).toArray()
    } finally {
      client.close();
    }
  }
}*/
/*exports.index = function(req , res){
  var result = myFunction();
  console.log(JSON.stringify(result))
  res.send = JSON.stringify(result)
}*/

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


