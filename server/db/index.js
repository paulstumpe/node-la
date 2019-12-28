const mariadb = require('mariadb');
const mariaConfig = require('./config')
const Sequelize = require('sequelize');


mariadb.createConnection(mariaConfig)
  .then(conn => console.log('connected to the db! with the id' + conn.threadId))
  .catch(err => console.log(err))

const sqlize = new Sequelize('nodela', 'root', '', {
  dialect: "mariadb", // or 'sqlite', 'postgres', 'mariadb'
  port:    3306, // or 5432 (for postgres)
});

sqlize
.authenticate()
.then(function(err) {
console.log('Connection has been established successfully.');
}, function (err) { 
console.log('Unable to connect to the database:', err);
});
