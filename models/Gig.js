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
    title: ' REACT Developer (Santa monica)',
    technologies: 'React, webpack, html, css, sass, node.js, Express, mySQL',
    description: 'The Front-End Developer will be part of a team that builds the next generation enterprise user interface applications leveraging the latest and evolving set of user interface and technologies.  ',
    budget: '5000',
    contact_email: 'contact@consumergeneration.com'
     
  });
});
module.exports = Gig;