const router = require('express').Router();

const Address = require('../controllers/address.controller');



router.post('/create', Address.create);
router.post('/update/:id', Address.update);
router.post('/get/:id', Address.getById);

module.exports = router;