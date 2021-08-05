
const {Productos , Marca , Proveedor , Categorias} = require('../models');
const _ = require('lodash');

const getAll = async(req , res) => {

    return res.json({
        ok:true,
        msg:'Get All Categorias'
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
    create
}