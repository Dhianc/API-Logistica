'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [
      {
        idCliente: 1,
        dataPedido: "2022-12-27",
        dataDespacho: "2022-01-03",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 2,
        dataPedido: "2023-01-02",
        dataDespacho: "2023-01-05",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 3,
        dataPedido: "2023-01-03",
        dataDespacho: "2023-01-05",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 4,
        dataPedido: "2023-01-04",
        dataDespacho: "2023-01-05",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 5,
        dataPedido: "2023-01-05",
        dataDespacho: new Date(),
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
