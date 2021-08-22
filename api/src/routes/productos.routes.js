const { Router } = require('express');
const { check  , query } = require('express-validator');

const {getAll , getOne, create } = require('../controllers/productosController');
const { validarCampos  } = require('../utils/middlewares/valida-routes');

const router = Router();

    router.post('/' ,[
        query('page' , 'La pagina es obligatoria').not().isEmpty(),
        query('page' , 'La pagina debe ser numerica').isNumeric(),
        validarCampos
    ], getAll );

    router.get('/' , [
        query('id' , 'Debe enviar el id de la categoria').not().isEmpty(),
        query('id' , 'El id debe ser numerico').isNumeric(),
        validarCampos
    ] ,getOne);

    router.post('/create' ,[
        
        check('nombre_producto' , 'El nombre del producto es requerido').not().isEmpty(),
        check('descripcion_producto' , 'La descripción del producto es requerido').not().isEmpty(),
       
        check('marca_id' , 'El codigo de la marca es requerido').not().isEmpty(),
        check('marca_id' , 'El codigo de la marca no es valido').isNumeric(),

        check('categoria_id' , 'El codigo de la categoria es requerido').not().isEmpty(),
        check('categoria_id' , 'El codigo de la categoria no es valido').isNumeric(),

        check('proveedor_id' , 'El codigo del proveedor es requerido').isNumeric(),
        check('proveedor_id' , 'El codigo del proveedor no es valido').isNumeric(),

        check('precio' , 'El precio del producto es requerido').not().isEmpty(),
        check('precio' , 'El precio del producto no es valido').isNumeric(),

        check('stock' , 'El stock del producto es requerido').not().isEmpty(),
        check('stock' , 'El stock del producto no es valido').isNumeric(),

        validarCampos
    ] , create)

module.exports = router;

