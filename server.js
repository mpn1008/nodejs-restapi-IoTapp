let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParse = require('body-parser');
let routes = require('./routes');

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());


/*const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("unipj").collection("accel");
  console.log('connected');
  var ins = {axisx:1 , axisy: 2, axisz: 32};
  collection.insertOne(ins, function(err,res){
      console.log('inserted a new obj');
  })

  client.close();
});
*/


app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', routes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
// Launch app to listen to specified port
