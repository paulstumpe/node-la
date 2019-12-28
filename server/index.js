const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const app = express(feathers());
const { MessageBoardService }  = require('./api/routes')


const PORT = process.env.PORT || 3000;
// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
const CLIENT_PATH = path.join(__dirname, '../client/dist');
app.use(express.static(CLIENT_PATH));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());

app.use(express.errorHandler());
// Register the message service on the Feathers application
app.use('/posts', new MessageBoardService());

// Log every time a new message has been created
app.service('posts').on('created', post => {
  
  console.log('A new post has been created on the forum', post);
});

app.service('posts').create({
  text: 'Hello world from the server'
});





app.listen(PORT).on('listening', () =>
  console.log(`Feathers server is listening on ${PORT}! 🚀`)
);
