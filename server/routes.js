const ctrl = require('./db/Controllers');

module.exports = function(app, express){
  return app.get('/posts', ctrl.getUsers);
}