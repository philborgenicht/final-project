require('dotenv').config()


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var athletesRouter= require('./routes/athletes');
var customersRouter=require('./routes/customers');
var teamsRouter=require('./routes/teams');
var sportsRouter=require('./routes/sports');
var customers_athletes=require('./routes/customers_athletes')
var customers_sports=require('./routes/customers_sports')
var customers_teams=require('./routes/customers_teams')



var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/athletes', athletesRouter)
app.use('/customers', customersRouter)
app.use('/teams', teamsRouter)
app.use('/sports', sportsRouter)
app.use('/customers_teams', customers_teams)
app.use('/customers_sports', customers_sports)
app.use('/customers_athletes', customers_athletes)

module.exports = app;
