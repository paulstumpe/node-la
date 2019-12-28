const mariadb = require('mariadb');
const util = require('util')
const mariaConfig = require('./config')a
// const mariaConfig = require('./config')
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

//must use this specific syntax to connect with sequelize
const sqlize = new Sequelize('nodela', 'root', '', mariaConfig);

//use authenticate method to test the connection
sqlize.authenticate()
  .then(function () {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('SQLIZE ERR:', err);
  });

  const User = sqlize.define('user', {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
  })


  //get all the posts or comments from the db

  //save the posts & comments to the db

  //delete a post or comment from the db

  //select a single post or comment from the db

  //update a post or comment in the db

  //sync all models at once to the db instead of individually
  sqlize.sync()