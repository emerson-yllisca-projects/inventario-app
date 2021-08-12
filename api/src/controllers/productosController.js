
const {Productos , Marca , Proveedor} = require('../models');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


const getAll = async ( req , res ) => {

   const data = await Productos.findAll({
    attributes: ['nombre_producto', 'descripcion_producto' , 'precio' , 'stock' , 'createdAt' , 'updatedAt'],
    include: [
        {
          model: Marca,
          as:'marca'
        },
        {
          model:Proveedor,
          as:'proveedor'
        }
    ]});

    return res.json({
        ok:true,
        data
    })
}

module.exports = {
    getAll
}