let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let bodyParse = require('body-parser');
let routes = require('./routes');
let mongoose = require('mongoose')

const uri = "mongodb+srv://phuong01:12345@fptclus-vezuu.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.get('/', (req, res) => res.send("Phuong's rest webservice"));
app.use('/api', routes);

app.listen(port, function () {
    console.log("Running Rest webservice on port " + port);
});

