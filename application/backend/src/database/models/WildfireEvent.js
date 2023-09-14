const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database;

const WildfireEvent = sequelize.define('WildfireEvent', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  evac_level: {
    type: DataTypes.INTEGER,
  },
  wildfire_count: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  county_name: {
    type: DataTypes.STRING,
  },
});

module.exports = WildfireEvent;
