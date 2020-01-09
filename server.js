let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParse = require('body-parser');
let routes = require('./routes');
const mongoose = require('mongoose');
const cors = require("cors");

app.use(cors());

//CORS Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.get('/', (req, res) => res.send("Phuong's rest webservice"));
app.use('/api', routes);

app.listen(port, function () {
    console.log("Running Rest webservice on port " + port);
});
