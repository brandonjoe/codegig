const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'Liquidtlo7!', {
  host: process.env.HEROKU_POSTGRESQL_MAUVE_URL,
  ssl: true,
  });