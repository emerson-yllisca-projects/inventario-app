
const {Productos , Marca , Proveedor , Categorias} = require('../models');

const getAll = async(req , res) => {

    return res.json({
        ok:true,
        msg:'Get All Categorias'
    });

}

module.exports = {
    getAll
}