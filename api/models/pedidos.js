'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.hasMany(models.Itens, {
        foreignKey: 'numeroPedido'
      })
      Pedidos.belongsTo(models.Clientes, {
        foreignKey: 'idCliente'
      })
    }
  }
  Pedidos.init({
    dataPedido: DataTypes.DATEONLY,
    dataDespacho: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};