let mongoose = require('mongoose');
let MongoClient = require('mongodb').MongoClient;
let async = require("async");
const uri = "mongodb+srv://phuong01:12345@fptclus-vezuu.gcp.mongodb.net/unipj?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

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
var accelSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  accel:Number,
  dateCreated: { 
     type: Date,
     default: Date.now()
  }
}, {versionKey: false});

var accelModel = mongoose.model('sensordatas', accelSchema);

exports.index = async function(req, res){
  let client;
  try {
    await MongoClient.connect(uri,{ useNewUrlParser: true }, async function(err,client){
      console.log("Connected correctly to server");
   // assert.equal(null,err);
    const db = client.db('unipj');
    const col = db.collection('sensordatas');
    const docs = await col.find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
  } catch (err) {
    console.log(err.stack);
  }
  // Close connection
  await client.close();
}

exports.new = function(req, res){
      var accelData = new accelModel({
        _id: new mongoose.Types.ObjectId(),
        accel: req.body.accel,
      });
      accelData.save(function(err){
          if (err) throw err;
          console.log("Data added");
          res.json({
            'message' : "data added successfully"
          })
      });
}

