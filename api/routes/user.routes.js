const router = require('express').Router();

const UserRoutes = require('../controllers/user.controller');


router.get('/', UserRoutes.getAllUsers);


module.exports = router;