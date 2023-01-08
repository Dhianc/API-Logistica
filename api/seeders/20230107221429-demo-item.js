'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens', [
      {
        numeroPedido: 1,
        numeroProduto: 1,
        precoUnitario: 13.60,
        quantidade: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numeroPedido: 2,
        numeroProduto: 2,
        precoUnitario: 3.50,
        quantidade: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {numeroPedido: 3,
        numeroProduto: 3,
        precoUnitario: 3.30,
        quantidade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numeroPedido: 4,
        numeroProduto: 4,
        precoUnitario: 5.10,
        quantidade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numeroPedido: 5,
        numeroProduto: 5,
        precoUnitario: 9.87,
        quantidade: 5,
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
