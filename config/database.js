// const Sequelize = require('sequelize');

// module.exports =  new Sequelize('codegig', 'postgres', 'Liquidtlo7!', {
//   host: 'postgres://rvhnwcqkjmknrr:960eaf8c99f4124a82542cca5bddf95c5f96e6fa320d45b605c25143d0fa8691@ec2-54-221-198-156.compute-1.amazonaws.com:5432/d448nklknmlneu',
//   dialect: 'postgres',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });
const Sequelize = require('sequelize');
module.exports = new Sequelize(process.env.HEROKU_POSTGRESQL_MAROON_URL, {
  dialect: 'postgres'

});
