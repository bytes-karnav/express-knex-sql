const router = require('express').Router();

const AuthRoutes = require('../controllers/auth.controller');
router.post('/register', AuthRoutes.register);
router.post('/login', AuthRoutes.login);

module.exports = router;