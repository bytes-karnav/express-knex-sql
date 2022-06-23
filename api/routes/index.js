const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/user', require('./user.routes'));
router.use('/hotel', require('./hotel.routes'));

module.exports = router;