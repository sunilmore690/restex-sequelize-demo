const express = require('express');
var bodyParser = require('body-parser');
const Sequelize = require('sequelize');
var cors = require('cors');
let RestEx = require('restex');
const sequelize = require('./db');
const path = require('path')
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

let restex = new RestEx(app, {
  database: {
    provider: 'sequelize',
    Sequelize, //mongodb,mysql
    conn: sequelize,
  },
  // controllersPath: path.resolve(__dirname + "/controllers"), //
  // modelsPath: path.resolve(__dirname + "/models"),
  // routesPath: path.resolve(__dirname + "/routes"),
  // middlewaresPath: path.resolve(__dirname + "/middleware.js")
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(8081, function () {
  console.log('restex-sequelize-demo listening on 8081');
});
