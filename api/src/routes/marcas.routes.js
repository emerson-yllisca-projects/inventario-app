const { Router } = require('express');
const { getAll } = require('../controllers/marcasController');

const router = Router();
router.get('/' , getAll)

module.exports = router;
