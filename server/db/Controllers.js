const { User, Post, PostTypes, Hood, Comment } = require('./index');
const parser = require('body-parser');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

const app = express(feathers());

// ! USER CRUD
//create & save a user to the db
// !CREATE
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

//user login function
// ! READ
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

//get all users
const getUsers = function(req, res, next) {
  User.findAll({})
  .then((users) => {
    res.status(200);
    res.send(JSON.stringify({
      status: 'success',
      data: users,
      message: 'Here are all the users!'
    }));
    return next();
  })
  .catch(err => {
    res.sendStatus(400);
    return next();
  });
};

//Update User
//! UPDATE
const updateUser = function(req, res){
User.update({
  username: newUsername,
  }, {
  where: {
    id: id
  }
})
.then((newName) => {
  res.status(201);
  console.log(`This username has been updated to ${newName}`);
});
};

//! DELETE
const deleteUser = function(req, res, next){
  User.destroy({
    where: {
      id: id,
      username: username
    }
  });
}

//! POST CRUD
//select a single post or comment from the db
//! CREATE
const getSinglePost = function(req, res) {
  const id = req.params.postId;
  Post.findOne({
    where: {
      title: title,
      id: id
    }
  })
  .then((singlePost) => {
    res.status(200).json({
      data: singlePost
    });
  })
  .catch(err => res.sendStatus(400));
};

//get all the posts or comments from the db based on user id
//!READ
const getPosts = function(req, res, next) {
  Post.findAll({
    //where id : userId
    limit: 5
  })
    .then((response) => {
      res.status(200);
      res.send(JSON.stringify({
        status: 'success',
        data: response.data,
        message: 'Here are all that user\'s posts!'
      }));
      return next();
    })
    .catch(err => {
      console.log(err);
      return next();
    });
};


//delete a specific post by iD
//!DELETE
const deletePost = function(req, res, next){
  Post.destroy({
    where: {
      id: id,
    }
  });
}

//COMMENT CRUD





module.exports = {
  getUsers,
  getPosts,
  getSinglePost,
  createUser,
  getSingleUser
};