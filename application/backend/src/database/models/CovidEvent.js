const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database;

const CovidEvent = sequelize.define('CovidEvent', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  covid_cases: {
    type: DataTypes.INTEGER,
  },
  covid_death: {
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
  },
  name: {
    type: DataTypes.STRING,
  },
  county_name: {
    type: DataTypes.STRING,
  },
});

module.exports = CovidEvent;
