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

     await queryInterface.bulkInsert('Categorias', [
      {
        categoria_nombre:'Bebidas',
        categoria_descripcion:'Aqui no aplican bebidas alcholicas',
        categoria_estado:true,
        createdAt: new Date(),
        updatedAt: null
      }, 
      {
        categoria_nombre:'Lacteos',
        categoria_descripcion:'Leche, Yogurt',
        categoria_estado:true,
        createdAt: new Date(),
        updatedAt: null
      }
  ], {});


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
