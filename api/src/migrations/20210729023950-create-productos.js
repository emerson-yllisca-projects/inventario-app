'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_producto: {
        type: Sequelize.STRING
      },
      descripcion_producto:{
        type: Sequelize.STRING
      },
      categoria_id:{
        type: Sequelize.INTEGER
      },
      marca_id:{
        type: Sequelize.INTEGER
      },
      proveedor_id:{
        type: Sequelize.INTEGER
      },
      precio:{
        type: Sequelize.DOUBLE
      },
      stock:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Productos');
  }
};