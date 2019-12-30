
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
  async find(params) {
    // Just return all our messages
    return [];
  }
  async create (post) {
    // The new message is the data merged with a unique identifier
    // using the messages length since it changes whenever we add one
  }
}



// const postService = {
//   find(params) {
//     let posts = Post.findAll({
//       where: {
//         //username: params.username,
//         //add find method for specific post
//       }
//     });
//     return Promise.resolve(posts);
//   },
//   get(id, params) {
//     let post = Post.findOne({
//       where: {
//         id: id
//       }
//     });
//     return Promise.resolve(post);
//   },
//   create(data, params){
//     const createPost = Post.create({
//       postHoodId: 1,
//       postTypeId:1,
//       postBody:1,
//       postVotes: 0
//     });
//     return Promise.resolve(createPost);
//     },
//     // update(id, data, params){
      
//       // },
//       // patch(id, data, params){
        
//         // },
//   // remove(id, params){
    
//     // },
//     // setup(app, path){
      
//       // }
//     }


module.exports.MessageBoardService = MessageBoardService;