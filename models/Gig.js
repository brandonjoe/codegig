const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
})

Gig.sync({ force: true }).then(() => {
  
  return Gig.create({
    Title: 'John',
    technologies: 'Hancock',
    description: 'react',
    budget: '1000',
    contact_email: 'user2312@gmail.com'
     
  });
});
module.exports = Gig;