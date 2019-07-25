let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
let aCtrl = require('./accelController');
// Contact routes
router.route('/accels')
    .get(aCtrl.index)
   // .post(aCtrl.new);

module.exports = router;