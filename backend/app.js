var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose')
var cors=require('cors')
var indexRouter = require('./routes/index');
/* var usersRouter = require('./routes/users'); */
var adminRouter=require('./routes/admin')
var voterRouter=require('./routes/voters')
var candidateRouter=require('./routes/candidate')

var electionRouter=require('./routes/election')


var app = express();

mongoose.connect('mongodb://localhost:27017/users')
.then(()=>{console.log("Database created successfully")})
  .catch((err)=>{console.log(err)})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
/* app.use('/users', usersRouter); */
app.use('/users', adminRouter);
app.use('/users', voterRouter);
app.use('/users', candidateRouter);
app.use('/users',electionRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
