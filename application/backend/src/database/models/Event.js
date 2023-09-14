const { DataTypes } = require('sequelize');
const database = require('../database');
const County = require('./County');
const Address = require('./Adress');

const sequelize = database;

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  county_name: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  CountyId: {
    type: DataTypes.INTEGER,
    references: {
      model: County,
      key: 'id',
    },
  },
  AddressId: {
    type: DataTypes.INTEGER,
    references: {
      model: Address,
      key: 'id',
    },
  },
});

module.exports = Event;
