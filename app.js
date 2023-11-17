var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var bodyParser = require('body-parser')
//route ở đây
var userApi= require("./routes_api/user.api")
var commentApi = require("./routes_api/comment.api")
var bookApi = require("./routes_api/book.api")
//setup for upload image

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.text());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/uploads", express.static('uploads'))
app.use("/search/uploads", express.static('uploads'))

//chạy api ở đây
app.use('/api/user', userApi)
app.use('/api/comment', commentApi)
app.use("/api/book", bookApi)


//chạy web quản lý ở đây


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
