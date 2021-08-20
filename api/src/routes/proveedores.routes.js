const { Router } = require('express');
const {getAll} = require('../controllers/proveedorController');

const router = Router();
router.post('/' , getAll);

 module.exports = router;
