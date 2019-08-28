let router = require('express').Router();
let aCtrl = require('./accelController');

router.route('/sensordatas')
    .get(aCtrl.index)
    .post(aCtrl.new);
module.exports = router;

