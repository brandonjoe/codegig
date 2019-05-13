const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'Liquidtlo7!', {
  connectionString: process.env.DATABASE_URL,
  ssl: true
  });