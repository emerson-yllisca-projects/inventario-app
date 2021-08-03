const { Router } = require('express');
const { getAll } = require('../controllers/categoriasController');

const router = Router();
router.get('/' , getAll)

module.exports = router;
