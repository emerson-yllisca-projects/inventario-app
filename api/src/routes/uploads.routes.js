const { Router } = require('express');
const { check } = require('express-validator');
const { loadingUploads , updateImage  } = require('../controllers/uploadsController');
const { TIPO_CARPETAS } = require('../utils/helpers/subirArchivo');
const { validarCampos  } = require('../utils/middlewares/valida-routes');

const router = Router();

      router.post('/' , loadingUploads);
      router.put('/:coleccion/:id' , [
            check('coleccion').custom(c => colecionesPermitidas(c , TIPO_CARPETAS)),
            validarCampos
      ] , updateImage )
module.exports = router;