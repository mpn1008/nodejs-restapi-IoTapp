var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const accelSchema = new Schema({
  _id: ObjectId,
  axisx: Number,
});

// Export Contact model
var Accel = module.exports = mongoose.model('accels', accelSchema);
module.exports.get = function (callback, limit) {
    Accel.find(callback).limit(limit);
}