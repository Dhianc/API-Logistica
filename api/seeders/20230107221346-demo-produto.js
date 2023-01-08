'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
      {
        nomeProduto: 'Produto1',
        qtdePorUnidade: 4,
        precoUnitario: 13.60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeProduto: 'Produto2',
        qtdePorUnidade: 3,
        precoUnitario: 3.50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeProduto: 'Produto3',
        qtdePorUnidade: 3,
        precoUnitario: 3.30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeProduto: 'Produto4',
        qtdePorUnidade: 6,
        precoUnitario: 5.10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeProduto: 'Produto5',
        qtdePorUnidade: 4,
        precoUnitario: 9.87,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
