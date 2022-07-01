const router = require('express').Router();

const Package = require('../controllers/package.controller');


router.post('/create', Package.create)
router.get('/getAll', Package.getAll);
router.get('/get/:id', Package.getById)

module.exports = router;