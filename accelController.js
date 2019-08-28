
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
export.index = async function find() {

  const client = await MongoClient.connect(url, { useNewUrlParser: true })
      .catch(err => { console.log(err); });

  if (!client) {
      return;
  }

  try {

      const db = client.db("unipj");

      let collection = db.collection('sensordatas');

      let res =  await collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });

      console.log(res);

  } catch (err) {
      console.log(err);
  } finally {
      client.close();
  }
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


