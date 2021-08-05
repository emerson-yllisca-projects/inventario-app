const { Router } = require('express');
const { getAll , create } = require('../controllers/categoriasController');

const router = Router();
router.get('/' , getAll)
router.post('/' , create)
module.exports = router;
