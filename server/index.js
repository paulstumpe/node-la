const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const Sequelize = require('sequelize')
const service = require('feathers-sequelize')
const { MessageBoardService } = require('./api/helpers')
const CLIENT_PATH = path.join(__dirname, '../client/dist');
const PORT = process.env.PORT || 3000;
const mariaConfig = require('./db/config')

const sequelize = new Sequelize('nodela', 'root', '', mariaConfig);

sequelize.authenticate()
  .then(() => console.log('Connection to the database has been established successfully.'))
  .catch(err => console.log('Database Connection Error', err));

const app = express(feathers());
// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
app.use(express.static(CLIENT_PATH));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());

app.use(express.errorHandler());
// Register the message service on the Feathers application
app.use('/posts', new MessageBoardService());


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
      post_hood_id: 'downtown',
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
      model: User,
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

app.service('posts')
  .create({
    text: 'Hello world from the server'
  });


app.service('posts').on('created', post => {
  console.log('A new post has been created on the forum', post);
})

app.listen(PORT).on('listening', () =>
  console.log(`Feathers server is listening on ${PORT}! 🚀`)
);
