var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

require('dotenv').config();
// DB connection
require('./services/database');
require('./services/firebase');

var authController = require('./controllers/auth/authController');

const User = require('./models/User');
const jwt = require('jsonwebtoken');

const {
  JWT_PASSPHRASE: jwtSecret,
  CALLBACK_URL: callback_url,
  CLIENT_ID: client_id,
} = process.env;

var index = require('./routes/index');

var app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
