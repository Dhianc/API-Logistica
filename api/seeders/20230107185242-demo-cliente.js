'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [
      {
        nomeEmpresa: 'Empresa1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeEmpresa: 'Empresa2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeEmpresa: 'Empresa3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeEmpresa: 'Empresa4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nomeEmpresa: 'Empresa5',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
