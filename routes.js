let router = require('express').Router();
let aCtrl = require('./accelController');
// Contact routes
router.route('/accels')
    .get(aCtrl.index)
    .post(aCtrl.new);
module.exports = router;

