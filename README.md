Tech: Html, css, javascript, node/express, postgreSQL, sequelize. 

General use: Coding gig is project that uses a popular ORM on PostgreSQL called Sequelized with a node/express as the server language with html and css in the front end. Although this app is still is made to stay in experimental form, it's end goal is to become an app for employers to post gigs for developers to look through. Anyone can post a new gig to be added (keep descriptions short) to the database and it will be displayed instantly. Feel free to post anything! This app was designed by Brad Traversy, fully built by me. 

Future use: This was app was made to apply what I've learned and deploy it. This is deployed on Heroku through their free/developer plan, therefore the server will shutdown after 30 minutes and reploy when necessary. Because it redeploys, any saved data is lost. I've tried to set a timeout function to ping heroku every 5 minutes to prevent the server from sleeping, but Heroku doesn't like that, and I feel like I'm avoiding paying for an actual server. Because the server shuts down and needs to wake up during this free plan, the initial start up will take a bit longer, but after that it should work perfectly fine. 

[Live Demo](https://codegigs.herokuapp.com/)
