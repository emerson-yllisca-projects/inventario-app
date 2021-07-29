'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Marca.init({
    nombre_marca: DataTypes.STRING,
    descripcion_marca:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Marca',
  });
  return Marca;
};