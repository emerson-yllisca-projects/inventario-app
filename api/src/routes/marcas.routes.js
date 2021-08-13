const { Router } = require('express');
const { check  , query } = require('express-validator');
const { validarCampos  } = require('../utils/middlewares/valida-routes');
const { getAll , getOne , create , update} = require('../controllers/marcasController');

const router = Router();

router.post('/' , [
    query('page' , 'La pagina es obligatoria').not().isEmpty(),
    query('page' , 'La pagina debe ser numerica').isNumeric(),
    validarCampos
] ,getAll);

router.get('/' , [
    query('id' , 'La pagina es obligatoria').not().isEmpty(),
    query('id' , 'La pagina debe ser numerica').isNumeric(),
    validarCampos
] , getOne );

router.post('/create' , [
    check('nombre_marca' , 'El nombre de la marca es obligatoria').not().isEmpty(),
     validarCampos
]   ,create);

router.put('/update' , [
    check('id' , 'El id de la categoria es obligatoria').not().isEmpty(),
    check('id' , 'El id de la categoria es obligatoria').isNumeric(),
] ,update);


module.exports = router;
