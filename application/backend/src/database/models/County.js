const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database;

const County = sequelize.define('County', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  lat: {
    type: DataTypes.STRING,
  },
  lon: {
    type: DataTypes.STRING,
  },
});

module.exports = County;
