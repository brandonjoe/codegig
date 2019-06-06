
# CodeGig

CodeGig is a website that is made for employers and developers to post and find gigs. It was built with a popular ORM on PostgreSQL called Sequelize. It uses a node/express server with html and CSS in the front-end. It is a simple concept that has the bare minimum. This app was designed by Brad Traversy, but fully built by me. 


### Demo

[Live Demo](https://codegigs.herokuapp.com/)

### General use

Use the search feature to only search for languages in a tech stack, not keywords or locations (search for "Javascript" not "web developer"). You will be returned a list of gigs related to your search query. You can also look at all the gigs if you wish by clicking "all gigs". Feel free to add a gig just post fake information! This is a project, not a production application. Keep the description brief and short. 

### Future use

This was app was made to apply what I've learned and deploy it. This is deployed on Heroku through their free/developer plan, therefore the server will shutdown after 30 minutes and reploy when necessary. Because it redeploys, any saved data is lost. I've tried to set a timeout function to ping heroku every 5 minutes to prevent the server from sleeping, but Heroku doesn't like that, and I feel like I'm avoiding paying for an actual server. Because the server shuts down and needs to wake up during this free plan, the initial start up will take a bit longer, but after that it should work perfectly fine. 

### Tech

```
Html, css, javascript, node/express, postgreSQL, sequelize. 
```

