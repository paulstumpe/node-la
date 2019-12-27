const mariadb = require('mariadb');
const mariaConfig = require('./config')


mariadb.createConnection(mariaConfig)
  .then(conn => console.log('connected to the db! with the id' + conn.threadId))
  .catch(err => console.log(err))


