const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const { MessageBoardService } = require('./api/helpers');
const CLIENT_PATH = path.join(__dirname, '../client/dist');
const PORT = process.env.PORT || 3000;


const app = express(feathers());


// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
app.use(express.static(CLIENT_PATH));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());

app.use(express.errorHandler());
// Register the message service on the Feathers application
app.use('/posts', new MessageBoardService());


app.service('posts')
  .create({
    text: 'Hello world from the server'
  });


app.service('posts').on('created', post => {
  console.log('A new post has been created on the forum', post);
});

app.listen(PORT).on('listening', () =>
  console.log(`Feathers server is listening on ${PORT}! 🚀`)
);
