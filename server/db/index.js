const mariaConfig = require('./config');

const Sequelize = require('sequelize');
const UserModel = require('./models/User');
const HoodModel = require('./models/Hood');
const CommentModel = require('./models/Comment');
const PostModel = require('./models/Post');
const PostTypeModel = require('./models/PostType');

const sequelize = new Sequelize('nodela', 'root', '', mariaConfig);

const database = config.nodela;
logger.info(`Creating database "${database}"...`);
sequelize.query(`CREATE DATABASE IF NOT EXISTS "${database}"`).then(() => logger.info('Database created'));

const User = UserModel(sequelize, Sequelize);
const Hood = HoodModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
const PostType = PostTypeModel(sequelize, Sequelize);

User.hasOne(Hood);
User.hasMany(Post);
User.hasMany(Comment);
Hood.belongsTo(User);
Post.hasOne(User);
Post.belongsTo(User);
Post.hasOne(PostType);
Post.hasOne(Hood);
Post.hasMany(Comment);
Comment.belongsTo(User);
Comment.hasOne(PostType);

// sequelize.sync({ force: true });

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