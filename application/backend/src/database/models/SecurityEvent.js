const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database;

const SecurityEvent = sequelize.define('SecurityEvent', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  reported_incident: {
    type: DataTypes.STRING,
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

module.exports = SecurityEvent;
