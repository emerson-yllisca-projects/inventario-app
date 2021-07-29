const { Router } = require('express');
const {getAll} = require('../controllers/productosController');
const router = Router();

router.get('/' , getAll )
module.exports = router;
