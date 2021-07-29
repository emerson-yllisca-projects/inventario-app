'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


      await queryInterface.bulkInsert('Productos', [{
        nombre_producto: 'Producto 1',
        descripcion_producto: 'desc Producto 1',
        marca_id: 1,
        proveedor_id:1,
        precio:12.3,
        stock:11,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
