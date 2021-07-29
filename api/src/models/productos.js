'use strict';
const {
  Model
} = require('sequelize');
const Marca = require('./marca')
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {

    static associate(models) { }
  };
  Productos.init({
    nombre_producto: DataTypes.STRING,
    descripcion_producto: DataTypes.STRING,
    marca_id:DataTypes.INTEGER,
    proveedor_id:DataTypes.INTEGER,
    precio:DataTypes.DOUBLE,
    stock:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};