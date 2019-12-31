const { User, Post, PostTypes, Hood, Comment } = require('./index');
const parser = require('body-parser');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

const app = express(feathers());






//delete a post or comment from the db

//select a single post or comment from the db

//update a post or comment in the db


//create & save a user to the db
//create a user
const createUser = function(req, res, next) {
  const username = req.body.username; // Grab username from req body
  const id = req.body.id; // Grab password from req body
  User.create({
    username: username,
    id: id
  })
    .then((data) => {
      res.status(201).json({ // Send 201 status upon success.
        status: 'success',
        data: data,
        message: `POSTED ${username} TO DATABASE`
      });
    })
    .catch(err => {
      console.log('There was an error adding the user to the db', err);
      return next();
    });
};

const getSingleUser = function(req, res, next) {
  const id = req.params.id;
  User.findOrCreate({
    where: {
      id: id
    }
  })
    .then((data) => { // Find the user with the given auth0_id.
      res.status(200).json({ // Send 200 status upon success.
        status: 'success',
        data: data,
        message: 'Here\'s that user you asked for'
      });
    })
    .catch(function (err) {
      console.log('Unfortunately I was unable to find that user\'s information', err);
      return next();
    });
};

const getUsers = function(req, res, next) {
  User.findAll({})
    .then((response) => {
      res.status(200);
      res.send(JSON.stringify({
        status: 'success',
        data: response.data,
        message: 'Here are all the users!'
      }));
      return next();
    })
    .catch(err => {
      res.sendStatus(400);
      return next();
    });
};

const getSinglePost = function(req, res) {
  const id = req.params.postId;
  Post.findOne({
    where: {
      id: id
    }
  })
    .then((singlePost) => {
      res.status(200).json({
        data: singlePost
      });
    })
    .catch((err) => {
      res.sendStatus(400);
    });
};

//get all the posts or comments from the db based on user id
const getPosts = function(req, res, next) {
  Post.findAll({})
    .then((response) => {
      res.status(200);
      res.send(JSON.stringify({
        status: 'success',
        data: response.data,
        message: 'Here are all the posts!'
      }));
      return next();
    })
    .catch(err => {
      console.log(err);
      return next();
    });
};

//save the posts & comments to the db

module.exports = {
  getUsers,
  getPosts,
  getSinglePost,
  createUser,
  getSingleUser
};