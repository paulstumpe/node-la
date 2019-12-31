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


//create a user
const postUser = function (req, res, next) {
  const username = req.body.username; // Grab username from req body
  const id = req.body.id; // Grab password from req body
  User.create({
    username: username, 
    id: id 
  }).then((data) => {
    res.status(201).json({ // Send 201 status upon success.
      status: 'success',
      data: data,
      message: `POSTED ${username} TO DATABASE`
    });
  }).catch(err =>  {// Error handling for inner callback create
    console.log('There was an error adding the user to the db', err);
    return next();
  });
}

const getUsers = function(req, res, next){
User.findAll({})
.then((response) => {
  res.status(200)
  res.send(JSON.stringify({
    status: 'success',
    data: response.data,
    message: 'Here are all the users!'
  }))
  return next();
})
.catch(err => {
  console.log(err)
  return next();
})
}

const getSinglePost = function(req, res) {
  const id = req.params.goal_id;
  db.Post.find({
    where: {
      id: id
    }
  })
  .then((singlePost) => {
    res.status(200).json({
      data: singlePost
    });
  })
  .catch(err => res.send('ERROR: Couldnt grab that post from the DB', err))
};

const getPosts = function(req, res, next){
  Post.findAll({})
  .then((response) => {
    res.status(200)
    res.send(JSON.stringify({
      status: 'success',
      data: response.data,
      message: 'Here are all the posts!'
    }))
    return next();
  })
  .catch(err => {
    console.log(err)
    return next();
  })
}

  module.exports = {
    getUsers,
    getPosts,
    getSinglePost
}