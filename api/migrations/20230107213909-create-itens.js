'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numeroPedido: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pedidos', key: 'id'}
      },
      numeroProduto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Produtos', key: 'id'}
      },
      precoUnitario: {
        type: Sequelize.FLOAT
      },
      quantidade: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Itens');
  }
};