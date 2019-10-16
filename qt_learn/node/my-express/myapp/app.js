var createError = require('http-errors');
var express = require('express');
var path = require('path');
// 中间件 每个用户的cookie
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入index.ejs路由配置文件
var indexRouter = require('./routes/index');
// 引入users.ejs路由配置文件
var usersRouter = require('./routes/users');

// 启动express web服务
var app = express();

// view engine setup
// 指定视图文件夹views
app.set('views', path.join(__dirname, 'views'));
// 指定视图引擎ejs
app.set('view engine', 'ejs');

// 使用刚刚加载的资源
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 指定公共资源文件夹为public
app.use(express.static(path.join(__dirname, 'public')));

// 路径为'/'，即http://localhost:3000时 匹配index.ejs
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// 匹配404 即路径未匹配
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
