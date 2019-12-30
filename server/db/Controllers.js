const { User, Post, PostTypes, Hood, Comment } = require('../db/index');
const parser = require('body-parser');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

const app = express(feathers());



//create & save a user to the db

//get all the posts or comments from the db based on user id

//save the posts & comments to the db

//delete a post or comment from the db

//select a single post or comment from the db

//update a post or comment in the db


const getUsers = function(req, res, next){
User.findAll({})
.then((response) => {
  res.status(200)
  res.send(JSON.stringify({
    status: 'success',
    data: response.data,
    message: 'Here are all the users!'
  }))
  next();
})
.catch(err => {
  console.log(err)
  next();
})
}

module.exports = {
  getUsers
}