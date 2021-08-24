
 
const { getErrorResponse } = require('../utils/general');
const  { subirArchivo  } = require('../utils/helpers/subirArchivo');

const loadingUploads = async( req , res ) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json({
            ok:false,
            Message:'No files were uploaded.'});
        return;
      }
 
      try {

        const nombreArchivo  = await subirArchivo(req.files)

        return res.json({
            nombreArchivo
        })
          
      } catch (error) {
            return getErrorResponse(res, error);
      }
      
    }   



    const updateImage = async (req , res ) => {

        const { id , coleccion } = req.params;

        return res.json({
            id , coleccion
        })
    }
module.exports = {
    loadingUploads,
    updateImage
}