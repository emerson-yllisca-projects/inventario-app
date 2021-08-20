
const {Productos , Marca , Proveedor} = require('../models');
const { buscarProveedorPorId } = require('../utils/modelosUtils');
const { StatusSucessResponses ,getErrorResponse ,  getPagination , getPagingData  } = require('../utils/general');
const logger = require('../../config/server/logger');

const getAll = async(req , res ) => {

    const  { page } = req.query;

    logger.info(`Listando los Proveedores....`);

    const { limit, offset } = getPagination(page, 10);

    try {
        const data = await Proveedor.findAndCountAll({
            limit,
            offset
        });
    
        logger.info(`Paginando las proveedores`);
    
        const response = getPagingData(data, page, limit);

        return res.status(200).json({
            ok:true,
            response
        })
    
    } catch (error) {
        return  getErrorResponse(res , error);
    }
}

const getOne = async( req , res ) => {

    const { id } = req.query;

    try {

        let data = await buscarProveedorPorId(id);

        if(!data){
            data = {};
        }

        return res.status(200).json({
            ok:true,
            categoria:data
        });

    } catch (e) {
        return  getErrorResponse(res , error);
    }
}

const create = async (req , res) => {

    try {
        
    } catch (error) {
        return  getErrorResponse(res , error); 
    }
}

const update = async(req , res ) => {

    try {
        
    } catch (error) {
        return  getErrorResponse(res , error); 
    }
}


module.exports = {
    getAll,
    getOne, 
    create, 
    update
}