
const {Productos , Marca , Proveedor , Categorias} = require('../models');
const _ = require('lodash');
const {getPagination , getPagingData } = require('../utils/general');

const getAll = async(req , res) => {

    const  { page } = req.query;

    const { limit, offset } = getPagination(page, 10);

    const data = await Categorias.findAndCountAll({
        limit,
        offset
    });

    const response = getPagingData(data, page, limit);

    return res.json({
        ok:true,
        categorias:response
    });

}

const getOne = async(req , res) => {

    const { id } = req.query;

    const data = await Categorias.findOne({
        where: {
            id
          }
    });

    return res.json({
        ok:true,
        categoria:data
    });

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

        return res.status(201).json(categoria);
    }
    catch(e) {
        return res.status(500).json({Error: e.message});
    }
    
}

module.exports = {
    getAll,
    getOne,
    create
}