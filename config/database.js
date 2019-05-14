const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'Liquidtlo7!', {
  host: 'ec2-54-227-245-146.compute-1.amazonaws.com',
  dialect: 'postgres',
});