const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'Liquidtlo7!', {
    host: 'localhost',
    dialect: 'postgres',
  });