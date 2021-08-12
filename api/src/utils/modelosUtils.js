const { Categorias} = require('../models');


const buscarCategoriaPorId = async ( id ) => {
    let data = {};

    data = await Categorias.findOne({
        where: {
            id
          }
    });

    return data;
}

module.exports = {
    buscarCategoriaPorId
}