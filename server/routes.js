const ctrl = require('./db/Controllers');
const axios = require('axios');
const { weatherKey } = require('../config');
/*
This file routes the client requests at a specific endpoint to a handling
function.
*/
module.exports = function (app, express) {
  //login to an account/get a single user
  app.post('/signup', ctrl.createUser);
  //get single user info
  app.get('/users:id', ctrl.getSingleUser);
  //get all users
  app.get('/users', ctrl.getUsers);
  //update a user
  // ? app.put('/users:id/', ctrl.updateUser)
  //create a post
  app.post('/posts', ctrl.createPost);
  // get all the posts
  app.get('/posts', ctrl.getPosts);
  //get single user's post
  app.get('/users:id/post', ctrl.getSinglePost);
  // deleteUser,
  // ? app.put('/posts:id'. ctrl.updatePost);
  //delete a post
  app.delete('/users:id/posts:id', ctrl.deletePost);
  //darksky current weather api request
  app.get('/weather', (req, res) => {
    axios.get(`https://api.darksky.net/forecast/${weatherKey}/29.9511,-90.0715`)
      .then((darkSky) => {
        darkSkyData = darkSky.data;
        res.status(200).json({ // Send 200 status upon success.
          status: 'success',
          data: darkSkyData,
          message: 'NOLA weather from darkSky'
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
