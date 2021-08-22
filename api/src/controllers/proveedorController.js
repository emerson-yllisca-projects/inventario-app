const _ = require('lodash');
const { Proveedor } = require('../models');
const { buscarProveedorPorId } = require('../utils/modelosUtils');
const { getErrorResponse ,getNotFoundResponse ,   getPagination , getPagingData  } = require('../utils/general');
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
    
        logger.info(`Paginando las Proveedores`);
    
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

    let proveedor = {};

    let data = _.pick(req.body, [
        'nombre_proveedor',
        'descripcion_proveedor',
        'telefono_proveedor',
        'correo_proveedor'
    ]);

    data.createdAt = new Date();
    data.updatedAt = new Date();

    try {

        proveedor = JSON.parse(JSON.stringify(await Proveedor.create(data)));
       
        return res.status(201).json({
            ok:true,
            msg:`Se creo correctamente el proveedor  ${proveedor.nombre_proveedor}`,
            proveedor
        });

    } catch (error) {
        return  getErrorResponse(res , error); 
    }
}

const update = async(req , res ) => {

    let data = _.pick(req.body ,[
        'id',
        'nombre_proveedor',
        'descripcion_proveedor',
        'telefono_proveedor',
        'correo_proveedor',
        'createdAt'
    ]);

    try {

        let existeProveedor = await buscarProveedorPorId(data.id);

        if(!existeProveedor){
           return getNotFoundResponse(res , 'Provedor');
        }else{

            data.updatedAt = new Date();
 
            await Proveedor.update(data , {
                    where: {
                        id: data.id
                    }
                });
            };

            return res.json({
                ok:true,
                msg:`Proveedor ${data.id} actualizada correctamente`,
                proveedor:data
            });
         
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