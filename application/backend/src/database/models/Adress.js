const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database;

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  lon: {
    type: DataTypes.STRING,
  },
  lat: {
    type: DataTypes.STRING,
  },
});

module.exports = Address;
