let mongoose = require('mongoose')
var dataSchema = mongoose.Schema({
    accel:Number,
    createdDate:Date
});
var Data = module.exports = mongoose.model('sensordatas', dataSchema);
/*module.exports.get = function (req,res) {
    Data.find(call).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}*/