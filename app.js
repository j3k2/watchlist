var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var sass = require('node-sass-middleware');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


require('./models/users');
require('./models/shows');
require('./models/ratings');
require('./models/lists');
require('./models/listings');

// require('./config/passport')

var routes = require('./routes/index');
var api = require('./routes/api');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/watchlist-logo.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sass({
    src: __dirname + '/sass',
    dest: __dirname + '/public/stylesheets',
    debug: true,
    outputStyle: 'compressed',
    prefix: '/stylesheets'
}));

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/templates', express.static(__dirname + '/templates'));
app.use('/', express.static(__dirname + '/public'));

mongoose.connect(process.env.MONGOLAB_URI);
// mongoose.connect('mongodb://localhost/watch-list');
app.use(session({
    secret: 'pop pop in the attic',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    saveUninitialized: true,
   resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/api', api);
// app.use('/users', users);


// passport config
var User = require('./models/users');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//

// // mongoose
// mongoose.connect('mongodb://' + process.env.MONGO_URI + '/watchlist');
// app.configure('development', function() {
//   mongoose.connect('mongodb://localhost/watch-list');
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
