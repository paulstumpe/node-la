const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const { Service } = require('./routes.js');
const router = require('./routes.js');
//const { MessageBoardService } = require('./api/helpers');
const CLIENT_PATH = path.join(__dirname, '../client/dist');
const PORT = process.env.PORT || 3000;
const { User, Post, Comment, PostType, Hood } = require('../server/db/index');

const app = express(feathers());

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params for REST services
app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
app.use(express.static(CLIENT_PATH));
// Enable REST service support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());
//catch errors
app.use(express.errorHandler());

// Register the message service on the Feathers application


const route = router(app, express);
//app.use('/posts', route);

// app.use('signup', (req, res) => {
//   User.create(req.body)
//   .then(() => console.log(`a new user with the name ${req.body} has been added to the DB!`));
// });

// app.use('posts', (req, res) => {
//   Post.create(req.body)
// })

  
  
// app.service('/posts').on('created', post => {
//   console.log('A new post has been created on the forum', post);
// });
  
//   app.service('/posts').create({
//     text: 'Hello world from the server'
//   });
  
  
  
app.listen(PORT).on('listening', () =>
  console.log(`Feathers server is listening on ${PORT}! 🚀`)
);
