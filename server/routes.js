const ctrl = require('./db/Controllers');

module.exports = function(app, express){
  app.get('/', ctrl.getPosts)
  app.post('/signup', ctrl.createUser)
  //get all users
  app.get('/users', ctrl.getUsers);
  //get single user post
  app.get('/users:id/post', ctrl.getSinglePost);
 // app.post('/users:id', )
}