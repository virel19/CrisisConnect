const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database;

const WeatherEvent = sequelize.define('WeatherEvent', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  temperature: {
    type: DataTypes.INTEGER,
  },
  wind_speed: {
    type: DataTypes.INTEGER,
  },
  precipitation: {
    type: DataTypes.INTEGER,
  },
  uv_index: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  county_name: {
    type: DataTypes.STRING,
  },
});

module.exports = WeatherEvent;
