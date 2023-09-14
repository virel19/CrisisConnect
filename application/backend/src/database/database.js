const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_DB, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql',
});

module.exports = sequelize;
