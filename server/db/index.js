const util = require('util');
const mariaConfig = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodela', 'root', '', mariaConfig);


sequelize.authenticate()
  .then(() => console.log('Connection to the database has been established successfully.'))
  .catch(err => console.log('Database Connection Error', err));

//const query = util.promisify(sequelize.query).bind(sequelize)
//must use this specific syntax to connect with sequelize

// const getPosts = () => {
//   return query('SELECT * FROM users')
// }

//User Table

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  mainId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

User.sync({ force: true })
  .then(() => {
    return User.create({
      username: 'testUser'
    });
  });

//Neighborhood Table
const Hood = sequelize.define('hood', {
  upOrDown: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hoodName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Hood.sync({ force: true })
  .then(() => {
    return Hood.create({
      upOrDown: 'downtown',
      hoodName: 'treme'
    });
  });

//Post Type Table
const PostType = sequelize.define('post_type', {
  helpOrGen: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

PostType.sync({ force: true })
  .then(() => {
    return PostType.create({
      helpOrGen: 'general'
    });
  });

//Post Table
const Post = sequelize.define('post', {
  postHoodId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Hood,
      key: 'id'
    }
  },
  postTypeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  postBody: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  postVotes: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Post.sync({ force: true })
  .then(() => {
    return Post.create({
      postHoodId: 1,
      postTypeId: 1,
      postBody: 'this is a test post',
      postVotes: 1
    });
  });

//Comment Table

const Comment = sequelize.define('comment', {
  commentUserId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  commentPostId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    }
  },
  commentBody: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  commentVotes: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Comment.sync({ force: true })
  .then(() => {
    return Comment.create({
      commentUserId: 1,
      commentPostId: 1,
      commentBody: 'this is a test comment',
      commentVotes: 1
    });
  });

//Associations
Hood.hasOne(Post);
User.hasOne(Hood);
User.hasOne(PostType);
User.hasMany(Post),
User.hasMany(Comment);
Hood.belongsTo(User);
Post.hasOne(PostType);
Post.hasOne(Hood);
Post.hasOne(User);
Post.hasMany(Comment);
Comment.belongsTo(User);
PostType.hasOne(Post);
PostType.belongsTo(Post);



//get all the posts or comments from the db

//save the posts & comments to the db

//delete a post or comment from the db

//select a single post or comment from the db

//update a post or comment in the db

//sync all models at once to the db instead of individually
//sqlize.sync()

// module.exports = {
//   getPosts,
// }