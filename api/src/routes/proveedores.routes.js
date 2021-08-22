const { Router } = require('express');
const {getAll , getOne , create , update} = require('../controllers/proveedorController');

const { check  , query } = require('express-validator');
const { validarCampos  } = require('../utils/middlewares/valida-routes');

const router = Router();

    router.post('/' , [
        query('page' , 'La pagina es obligatoria').not().isEmpty(),
        query('page' , 'La pagina debe ser numerica').isNumeric(),
        validarCampos
    ], getAll);

    router.get('/', [
        query('id' , 'Debe enviar el id de la categoria').not().isEmpty(),
        query('id' , 'El id debe ser numerico').isNumeric(),
        validarCampos
    ] , getOne);

    router.post('/create' , [
        check('nombre_proveedor' , 'El nombre  es requerida').not().isEmpty(),
        check('descripcion_proveedor' , 'La descripcion  es requerida').not().isEmpty(),
        check('telefono_proveedor' , 'El telefono es requerido').not().isEmpty(),
        check('correo_proveedor' , 'El correo es requerido'),
        validarCampos
    ] , create );

    router.put('/update' , [
        check('id' , 'El id del proveedor es requerido').not().isEmpty(),
        check('id' , 'El id del proveedor debe ser numerico').isNumeric(),
        validarCampos
    ] , update);

 module.exports = router;
