const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'Liquidtlo7!', {
  host: process.env.DATABASE_URL,
  ssl: true,
    dialect: 'postgres',
  });