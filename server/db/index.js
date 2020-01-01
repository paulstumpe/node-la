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

  User.hasOne(Hood);
  //User.hasOne(PostType);
  User.hasMany(Post),
  User.hasMany(Comment);
  //Hood.hasOne(Post);
  Hood.belongsTo(User);
  //Hood.belongsTo(User)
  // Post.hasOne(User);
  Post.belongsTo(User)
  Post.hasOne(PostType);
  Post.hasOne(Hood);
  Post.hasMany(Comment);
  Comment.belongsTo(User);
  Comment.hasOne(PostType)
  //PostType.hasOne(Post);
  //PostType.belongsTo(Post);

 // sequelize.sync({ force: true });

  User.sync({ force: true })
  .then(() => { console.log(`Database & tables!`)})

  Hood.sync({ force: true })
  .then(() => { console.log(`Hood synced!`)})

  Post.sync({ force: true })
  .then(() => { console.log(`Post synced!`)})

  PostType.sync({ force: true })
  .then(() => { console.log(`PostType Synced!`)})

  Comment.sync({ force: true })
  .then(() => { console.log(`Comments Synced!`)})

  
sequelize.authenticate()
.then(() => console.log('Connection to the database has been established successfully.'))
.catch(err => console.log('Database Connection Error', err));

module.exports = {
  User,
  Comment,
  Post,
  Hood,
  PostType
}


// Hood.hasOne(Post);
// User.hasOne(Hood);
// User.hasOne(PostType);
// User.hasMany(Post),
// User.hasMany(Comment);
// Hood.belongsTo(User);
// Post.hasOne(PostType);
// Post.hasOne(Hood);
// Post.hasOne(User);
// Post.hasMany(Comment);
// Comment.belongsTo(User);
// PostType.hasOne(Post);
// PostType.belongsTo(Post);

