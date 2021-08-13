const { Router } = require('express');
const { getAll , create , getOne , update} = require('../controllers/categoriasController');
const { check  , query } = require('express-validator');
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

    router.post('/create' , [
        check('categoria_nombre' , 'El nombre de la categoria es obligatoria').not().isEmpty(),
        check('categoria_descripcion' , 'La descripcion de la categoria es obligatoria').not().isEmpty(),
        check('categoria_estado' , 'El estado de la categoria es obligatoria').not().isEmpty(),
        validarCampos
    ] , create);

    router.put('/update' , [
        check('id' , 'El id de la categoria es obligatoria').not().isEmpty(),
        check('id' , 'El id de la categoria es obligatoria').isNumeric(),
        validarCampos
    ] , update);


module.exports = router;
