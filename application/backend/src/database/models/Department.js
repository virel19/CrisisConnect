const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database;

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  county_name: {
    type: DataTypes.STRING,
  },
});

module.exports = Department;
