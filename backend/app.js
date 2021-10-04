var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var config = require('./config');
var produtosRouter = require('./routes/produtos');
var pedidosRouter = require('./routes/pedidos');
var servicosRouter = require('./routes/servicos');

const mongoose = require('mongoose');


const url =  config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());


app.use('/users', usersRouter);



app.use(express.static(path.join(__dirname, 'public')));




app.use('/produtos', produtosRouter);
app.use('/pedidos', pedidosRouter);
app.use('/servicos', servicosRouter);


module.exports = app;