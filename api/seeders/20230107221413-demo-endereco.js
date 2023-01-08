'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enderecos', [
      {
        idCliente: 1,
        rua: 'Rua Pedra',
        cidade: "Rock",
        cep: "11111-111",
        pais: "Brasil",
        telefone: "11 11111-1111",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 2,
        rua: 'Rua Papel',
        cidade: "Caderno",
        cep: "22222-222",
        pais: "Brasil",
        telefone: "22 22222-2222",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 3,
        rua: 'Rua Tesoura',
        cidade: "Costura",
        cep: "33333-333",
        pais: "Brasil",
        telefone: "33 33333-3333",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 4,
        rua: 'Rua Lança',
        cidade: "Indianópolis",
        cep: "44444-444",
        pais: "Brasil",
        telefone: "44 444444-4444",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idCliente: 5,
        rua: 'Rua Trovão',
        cidade: "Asgard",
        cep: "55555-555",
        pais: "Brasil",
        telefone: "55 55555-5555",
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
