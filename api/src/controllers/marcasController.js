const _ = require('lodash');
const logger = require('../../config/server/logger');
const {getPagination , getPagingData } = require('../utils/general');
const { Marca } = require('../models');
const { buscarMarcasPorId } = require('../utils/modelosUtils');
 
const getAll = async( req , res) => {

    const  { page } = req.query;

    logger.info(`Listando las marcas...`);

    const { limit, offset } = getPagination(page, 10);

    const data = await Marca.findAndCountAll({
        limit,
        offset
    });

    logger.info(`Paginando las categorias`);

    const response = getPagingData(data, page, limit);

    return res.json({
        ok:true,
        marcas:response
    });
}

const getOne = async ( req , res ) => {

    const { id } = req.query;

    try {

        let data = await buscarMarcasPorId(id);

        if(!data){
            data = {};
        }

        return res.status(200).json({
            ok:true,
            marca:data
        });

    } catch (e) {
        return res.status(500).json({Error: e.message});
    }

}

const create = async ( req , res ) => {

    let marca = {};

    let data = _.pick(req.body, [
        'nombre_marca',
        'descripcion_marca'
    ]);

    data.createdAt = new Date();
    data.updatedAt = new Date();

    try {
        
        marca =  JSON.parse(JSON.stringify(await Marca.create(data)));

        return res.status(201).json({
            ok:true,
            msg:`Se creo correctamente la marca  ${marca.nombre_marca}`,
            marca
        });

    } catch (e) {

        return res.status(500).json({
            ok:false,
            Error: e.message
        });

    }
}

const update = async ( req , res ) => {

    let marca = {};

    let data = _.pick(req.body, [
        "id",
        "nombre_marca",
        "descripcion_marca",
        "createdAt",
        "updatedAt"
    ]);

    try {

        const existeMarca =  await buscarMarcasPorId(data.id);
        
        //await buscarMarcasPorId(data.id);

         if(!existeMarca){
            return res.status(400).json({
                ok:false,
                msg: `La marca con id ${data.id} no existe`
            });

        }else{
            // se actualiza la fehca de actualizacion 
            data.updatedAt = new Date();

            await Marca.update(data ,{
                where: {
                    id: data.id
                }});


            marca  = await buscarMarcasPorId(data.id)

            return res.json({
                ok:true,
                msg:`Marca ${data.id} actualizada correctamente`,
                marca
            });
        }

    } catch (e) {
        return res.status(500).json({
            ok:false,
            Error: e.message
        });
    }
}


module.exports = {
    getAll,
    getOne,
    create,
    update
}