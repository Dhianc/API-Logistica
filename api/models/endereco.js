'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Endereco.belongsTo(models.Clientes, {
        foreignKey: 'idCliente'
      })
    }
  }
  Endereco.init({
    rua: DataTypes.STRING,
    cidade: DataTypes.STRING,
    cep: DataTypes.STRING,
    pais: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};