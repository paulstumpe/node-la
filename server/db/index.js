const util = require('util')
const mariaConfig = require('./config')
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodela', 'root', '', mariaConfig);

//const query = util.promisify(sequelize.query).bind(sequelize)
//must use this specific syntax to connect with sequelize

// const getPosts = () => {
//   return query('SELECT * FROM users')
// }

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  main_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
})

User.sync({ force: true })
  .then(() => {
    return User.create({
      username: 'testUser'
    })
  })


  const Hood = sequelize.define('hood', {
    up_down: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hood_name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  //on post request to board
    Hood.sync({ force: true })
    .then(() => {
      return Hood.create({
        up_down: 'downtown',
        hood_name: 'treme'
      })
    })


const Post_Type = sequelize.define('post_type', {
  help_gen: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

Post_Type.sync({ force: true })
  .then(() => {
    return Post_Type.create({
      help_gen: 'general'
    })
  })

const Post = sequelize.define('post', {
  post_hood_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Hood,
      key: 'id'
    }
  },
  post_type_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  post_body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  post_votes: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Post.sync({ force: true })
  .then(() => {
    return Post.create({
      post_hood_id: 1,
      post_type_id: 1,
      post_body: 'this is a test post',
      post_votes: 1
    })
  })


const Comment = sequelize.define('comment', {
  comment_user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  comment_post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    }
  },
  comment_body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comment_votes: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Comment.sync({ force: true })
  .then(() => {
    return Comment.create({
      comment_user_id: 1,
      comment_post_id: 1,
      comment_body: 'this is a test comment',
      comment_votes: 1
    })
  })



  Hood.hasOne(Post)
  User.hasOne(Hood)
  User.hasOne(Post_Type)
  User.hasMany(Post, {
  foreignKey: 'main_id',
  sourceKey: 'main_id',
  constraints: false
  }),
  User.hasMany(Comment)
  Hood.belongsTo(User)
  Post.hasOne(Post_Type)
  Post.hasOne(Hood)
  Post.hasOne(User)
  Post.hasMany(Comment)
  Comment.belongsTo(User)
  Post_Type.hasOne(Post)
  Post_Type.belongsTo(Post)



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