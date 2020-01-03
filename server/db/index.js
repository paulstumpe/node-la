const mariaConfig = require('./config');
const Sequelize = require('sequelize');
const UserModel = require('./Models/User');
const HoodModel = require('./Models/Hood');
const CommentModel = require('./Models/Comment');
const PostModel = require('./Models/Post');
const PostTypeModel = require('./Models/PostType');

const sequelize = new Sequelize('nodela', 'root', '', mariaConfig);

const User = UserModel(sequelize, Sequelize);
const Hood = HoodModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
const PostType = PostTypeModel(sequelize, Sequelize);

User.sync({ force: true })
  .then(() => console.log('Users synced!'));

Hood.sync({ force: true })
  .then(() => console.log('Hood synced!'));

Post.sync({ force: true })
  .then(() => console.log('Post synced!'));

PostType.sync({ force: true })
  .then(() => console.log('PostType synced!'));

Comment.sync({ force: true })
  .then(() => console.log('Comments synced!'));

sequelize.authenticate()
  .then(() => console.log('Connection to the database has been established successfully.'))
  .catch(err => console.log('Database Connection Error', err));

module.exports = {
  User,
  Comment,
  Post,
  Hood,
  PostType
};