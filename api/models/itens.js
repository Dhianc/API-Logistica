'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itens.belongsTo(models.Pedidos, {
        foreignKey: 'numeroPedido'
      })
      Itens.belongsTo(models.Produtos, {
        foreignKey: 'numeroProduto'
      })
    }
  }
  Itens.init({
    precoUnitario: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Itens',
  });
  return Itens;
};