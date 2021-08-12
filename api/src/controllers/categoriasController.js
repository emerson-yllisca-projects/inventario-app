
const { Categorias } = require('../models');
const _ = require('lodash');
const {getPagination , getPagingData } = require('../utils/general');
const logger = require('../../config/server/logger');
const { buscarCategoriaPorId  } = require('../utils/modelosUtils');
const { validaNulls } = require('../utils/general')

const getAll = async(req , res) => {

    const  { page } = req.query;

    logger.info(`Listando las categorias...`);

    const { limit, offset } = getPagination(page, 10);

    const data = await Categorias.findAndCountAll({
        limit,
        offset
    });

    logger.info(`Paginando las categorias`);

    const response = getPagingData(data, page, limit);
    
    return res.json({
        ok:true,
        categorias:response
    });

}

const getOne = async(req , res) => {

    const { id } = req.query;

    try {

        let data = await buscarCategoriaPorId(id);

        if(validaNulls(data)){
            data = {};
        }

        return res.status(200).json({
            ok:true,
            categoria:data
        });

    } catch (e) {
        return res.status(500).json({Error: e.message});
    }
}

const create = async( req , res) => {
    let categoria = {};

    let data = _.pick(req.body, [
        'categoria_nombre',
        'categoria_descripcion',
        'categoria_estado'
    ]);

    data.createdAt = new Date();
    data.updatedAt = new Date();

    try {
        categoria = JSON.parse(JSON.stringify(await Categorias.create(data)));

        return res.status(201).json({
            ok:true,
            msg:`Se creo correctamente la categoria  ${categoria.categoria_nombre}`,
            categoria
        });
    }
    catch(e) {
        return res.status(500).json({Error: e.message});
    }
}

const update = async(req , res) => {

    let categoria = {};
    let  existeCategoria = {} ;
    let data = _.pick(req.body, [
        'categoria_id',
        'categoria_nombre',
        'categoria_descripcion',
        'categoria_estado'
    ]);

    try {
         existeCategoria =  await buscarCategoriaPorId(data.categoria_id);

        if(validaNulls(existeCategoria)){
            return res.status(400).json({
                ok:false,
                msg: `La categoria con id ${data.categoria_id} no existe`
            });
        }else{
            // se actualiza la fehca de actualizacion 
            data.updatedAt = new Date();
            categoria = JSON.parse(JSON.stringify(await Categorias.update(data)));

            return res.json({
                ok:true,
                msg:`Categoria ${categoria.id} actualizada correctamente`,
                categoria
            })
        }

    } catch (e) {
        return res.status(500).json({Error: e.message});
    }
}


module.exports = {
    getAll,
    getOne,
    create,
    update
}