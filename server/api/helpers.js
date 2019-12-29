
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const app = express(feathers());


// A messages service that allows to create new
// and return all existing posts
/*
This class follows the feathers js doc to a t utilizing
express as a way to run a RESTFUL api server
*/
class MessageBoardService {
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
module.exports.MessageBoardService = MessageBoardService;