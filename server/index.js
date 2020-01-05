const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const router = require('./routes.js');
const CLIENT_PATH = path.join(__dirname, '../client/dist');
//const auth = require('./auth')


const app = express(feathers());

//a great way to monitor the requests to the app
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Parse HTTP JSON bodies
app.use(express.json());
// Parse URL-encoded params for REST services
app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
app.use(express.static(CLIENT_PATH));
// Enable REST service support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());
//catch errors
app.use(express.errorHandler());
//app.configure(auth)

//call the router to initialize the routes
const route = router(app, express);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🍃🌱`);
});