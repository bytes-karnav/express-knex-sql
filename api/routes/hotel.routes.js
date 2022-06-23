const router = require('express').Router();

const Hotel = require('../controllers/hotel.controller');



router.post('/create', Hotel.create);
router.post('/update', Hotel.update);
router.post('/get/:id', Hotel.getById);
router.post('/getAll', Hotel.getAll);

module.exports = router;