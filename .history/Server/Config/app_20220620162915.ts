import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//import db package
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
//import modules
import indexRouter from '../Routes/index'; //TOP LEVEL ROUTES
import businessContactRouter from '../Routes/business_contact'; //BUSINESS CONTACT ROUTES
import authRouter from '../Routes/auth'; //AUTH ROUTER
import flash from 'connect-flash';

import cors from 'cors';

let localStrategy = passportLocal.Strategy; // alias

import User from '../Models/user';



var app = express();
//DB configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.LocalURI);

const db=mongoose.connection;
db.on("open", function()
{
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
})
db.on("error", function()
{
  console.log(`Connection Error`);
})

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname,'../../node_modules')));

app.use(cors()); // adds CORS middleware

app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));

// Step 5 for auth - setup Connect Flash
app.use(flash());

// Step 6 for auth - initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Step 7 for auth - implement the auth strategy
passport.use(User.createStrategy());

// Step 8 for auth - setup User serialization and deserialization (encoding / decoding)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/', businessContactRouter);
app.use('/', authRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
