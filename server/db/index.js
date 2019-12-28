const mariadb = require('mariadb');
const mariaConfig = require('./config')
const Sequelize = require('sequelize');


mariadb.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodela',
  port: 3306
})
  .then(conn => console.log('connected to the db! with the id' + conn.threadId))
  .catch(err => console.log('MARIA ERR:', err))

const sqlize = new Sequelize('nodela', 'root', '', {
    dialect: 'mariadb',
    dialectOptions: { connectionTimeout: 1000}
});

sqlize.authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('SQLIZE ERR:', err);
  });
