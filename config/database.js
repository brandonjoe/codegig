const Sequelize = require('sequelize');

module.exports =  new Sequelize(process.env.HEROKU_POSTGRESQL_MAUVE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
      ssl: true
  }
});