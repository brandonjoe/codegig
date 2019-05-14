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
if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('example-app-db', 'root', null)
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User:      sequelize.import(__dirname + '/user') 
    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db