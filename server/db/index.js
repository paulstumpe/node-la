const util = require('util')
const mariaConfig = require('./config')
const Sequelize = require('sequelize');

//const sequelize = new Sequelize('nodela', 'root', '', mariaConfig);

//const query = util.promisify(sequelize.query).bind(sequelize)
//must use this specific syntax to connect with sequelize

// const getPosts = () => {
//   return query('SELECT * FROM users')
// }


  //get all the posts or comments from the db

  //save the posts & comments to the db

  //delete a post or comment from the db

  //select a single post or comment from the db

  //update a post or comment in the db

  //sync all models at once to the db instead of individually
  //sqlize.sync()

  module.exports = {
    getPosts,
  }