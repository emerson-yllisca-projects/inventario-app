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

     await queryInterface.bulkInsert('Categorias', [{
      categoria_nombre:'Categoria 1',
      categoria_descripcion:'desc Categoria 1',
      categoria_estado:true,
      createdAt: new Date(),
      updatedAt: new Date()
      }, 
      {
        categoria_nombre:'Categoria 2',
        categoria_descripcion:'desc Categoria 2',
        categoria_estado:true,
        createdAt: new Date(),
        updatedAt: new Date()
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
