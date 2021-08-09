const { Router } = require('express');
const { getAll , create , getOne } = require('../controllers/categoriasController');
const { check  , query, param} = require('express-validator');
const { validarCampos  } = require('../utils/middlewares/valida-routes');


const router = Router();

    router.post('/' , [
        query('page' , 'La pagina es obligatoria').not().isEmpty(),
        query('page' , 'La pagina debe ser numerica').isNumeric(),
        validarCampos
    ],getAll);

    router.get('/' , [
        query('id' , 'Debe enviar el id de la categoria').not().isEmpty(),
        query('id' , 'El id debe ser numerico').isNumeric(),
        validarCampos
    ] , getOne );

    router.post('/create' , create)


module.exports = router;
