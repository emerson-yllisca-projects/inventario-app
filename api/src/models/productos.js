'use strict';
const {
  Model
} = require('sequelize');
const Marca = require('./marca')
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {

    static associate(models) { 
    //models.Evento.idTurnoAnalistaN2 = models.Evento.belongsTo(models.TurnoAnalistaN2 , { foreignKey: 'idTurnoAnalistaN2'})

    models.Productos.marca_id = models.Productos.belongsTo(models.Marca , { as:'marca', foreignKey:'marca_id'} )
    models.Productos.categoria_id = models.Productos.belongsTo(models.Categorias , { as:'categoria', foreignKey:'categoria_id'} )
    models.Productos.proveedor_id = models.Productos.belongsTo(models.Proveedor , { as:'proveedor', foreignKey:'proveedor_id'} )

    }
  };
  Productos.init({
    nombre_producto: DataTypes.STRING,
    descripcion_producto: DataTypes.STRING,
    marca_id:DataTypes.INTEGER,
    categoria_id:DataTypes.INTEGER,
    proveedor_id:DataTypes.INTEGER,
    precio:DataTypes.DOUBLE,
    stock:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};