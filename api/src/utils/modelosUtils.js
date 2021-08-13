const { Categorias , Marca} = require('../models');


const buscarCategoriaPorId = async ( id ) => {
    let data = {};

    data = await Categorias.findOne({
        where: {
            id
          }
    });

    return data;
}

const buscarMarcasPorId = async (id ) => {
    let data = {};

    data = await Marca.findOne({
        where: {
            id
          }
    });

    return data;
}

module.exports = {
    buscarCategoriaPorId,
    buscarMarcasPorId
}