const {Productos , Marca , Proveedor , Categorias} = require('../models');
const _ = require('lodash');
const {getPagination , getPagingData } = require('../utils/general');


const getAll = async(req , res) => {

    const  { page } = req.query;

    const { limit, offset } = getPagination(page, 10);

    const data = await Marcas.findAndCountAll({
        limit,
        offset
    });

    const response = getPagingData(data, page, limit);

    return res.json({
        ok:true,
        marcas:response
    });
}

const create = async ( req , res ) => {

    return res.json({
        ok:true,
        msg:'Create Marca'
    });
}


module.exports = {
    getAll,
    create
}