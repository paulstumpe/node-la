const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const app = express(feathers());
const PORT = process.env.PORT || 3000;
// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
app.use(express.static(__dirname));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());

// app.use(express.errorHandler());

// A messages service that allows to create new
// and return all existing messages
/*
This class follows the feathers js doc to a t utilizing
express as a way to run a RESTFUL api server
*/
class MessageBoardPostService {
  constructor() {
    this.board = [];
  }
  async find() {
    // Just return all our messages
    return this.board;
  }
  async create (post) {
    // The new message is the data merged with a unique identifier
    // using the messages length since it changes whenever we add one
    const messageBoardPost = {
      id: this.board.length,
      text: post.text
    }
    // Add new message to the list
    this.board.push(messageBoardPost);
    return messageBoardPost;
  }
}

// Register the message service on the Feathers application
app.use('posts', new MessageBoardPostService());

// Log every time a new message has been created
app.service('posts').on('created', post => {
  console.log('A new post has been created', post);
});

app.service('posts').create({
  
  text: 'Hello world from the server'
});

app.listen(PORT).on('listening', () =>
  console.log(`Feathers server is listening on ${PORT}! 🚀`)
);
