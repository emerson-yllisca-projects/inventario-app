const { Categorias , Marca , Proveedor , Productos } = require('../models');

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

const buscarProveedorPorId = async( id ) => {
    let data = {};

    data = await Proveedor.findOne({
        where:{
            id
        }
    });

    return data;
}


const buscarProductoPorId = async( id ) => {

     let data = {};

    data = await Productos.findOne({
        where:{
            id
        },
        include: [
            {
              model: Marca,
              as:'marca'
            },
            {
              model:Proveedor,
              as:'proveedor'
            },
            {
              model:Categorias,
              as:'categoria'
            }
        ]
    });

    return data;

}

module.exports = {
    buscarCategoriaPorId,
    buscarMarcasPorId,
    buscarProveedorPorId,
    buscarProductoPorId
}