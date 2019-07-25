let mongoose = require('mongoose');

const uri = "mongodb+srv://phuong01:12345@fptclus-vezuu.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true});

var db = mongoose.connection;
if (db){
    console.log('success')
}
module.exports = db;