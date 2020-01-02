// const mariaConfig = require('./config');

// const Sequelize = require('sequelize');
// const UserModel = require('./Models/User');
// const HoodModel = require('./Models/Hood');
// const CommentModel = require('./Models/Comment');
// const PostModel = require('./Models/Post');
// const PostTypeModel = require('./Models/PostType');

// const sequelize = new Sequelize('nodela', 'root', '', mariaConfig);

// const User = UserModel(sequelize, Sequelize);
// const Post = PostModel(sequelize, Sequelize);
// const Comment = CommentModel(sequelize, Sequelize);
// const Hood = HoodModel(sequelize, Sequelize);
// const PostType = PostTypeModel(sequelize, Sequelize);

  // User.hasOne(Hood);
  // User.hasOne(PostType);
  // User.hasMany(Post),
  // User.hasMany(Comment);
  // Post.belongsTo(User)
  // Post.hasOne(PostType);
  // Post.hasOne(Hood);
  // Post.hasMany(Comment);
  // Comment.belongsTo(User);
  // Comment.hasOne(PostType)
  // Hood.hasOne(Post);
  // Hood.belongsTo(User);
  // Hood.belongsTo(User)
  // Post.hasOne(User);
  // PostType.hasOne(Post);
  // PostType.belongsTo(Post);

 // sequelize.sync({ force: true });

//   User.sync({ force: true })
//   .then(() => { console.log(`Database & tables!`)})

// Post.sync({ force: true })
//   .then(() => { console.log(`Post synced!`) })

//   Comment.sync({ force: true })
//     .then(() => { console.log(`Comments Synced!`) })

//   Hood.sync({ force: true })
//   .then(() => { console.log(`Hood synced!`)})

//   PostType.sync({ force: true })
//   .then(() => { console.log(`PostType Synced!`)})
  
// sequelize.authenticate()
// .then(() => console.log('Connection to the database has been established successfully.'))
// .catch(err => console.log('Database Connection Error', err));

// module.exports = {
//   User,
//   Comment,
//   Post,
//   Hood,
//   PostType
// }

// // Hood.hasOne(Post);
// // User.hasOne(Hood);
// // User.hasOne(PostType);
// // User.hasMany(Post),
// // User.hasMany(Comment);
// // Hood.belongsTo(User);
// // Post.hasOne(PostType);
// // Post.hasOne(Hood);
// // Post.hasOne(User);
// // Post.hasMany(Comment);
// // Comment.belongsTo(User);
// // PostType.hasOne(Post);
// // PostType.belongsTo(Post);

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