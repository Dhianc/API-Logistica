'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      Produtos.hasMany(models.Itens, {
        foreignKey: 'numeroProduto'
      })
    }
  }
  Produtos.init({
    nomeProduto: DataTypes.STRING,
    qtdePorUnidade: DataTypes.INTEGER,
    precoUnitario: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};