let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API is Working'
    });
});
let aCtrl = require('./accelController');
// Contact routes
router.route('/accels')
    .get(aCtrl.index)
    .post(aCtrl.new);

module.exports = router;