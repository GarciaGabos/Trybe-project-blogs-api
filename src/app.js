const express = require('express');
require('express-async-errors');

const app = express();

app.use(express.json());

const validateJWT = require('./auth/validateJWT');

const user = require('./controllers/user.controllers');

const userValidations = require('./middlewares/userValidations');

app.post('/login', userValidations.validateLogin, user.userLogin);

app.post('/user', userValidations.validateEmail, userValidations.validadeNewUser, user.userAdd);

app.get('/user', validateJWT, user.userListAll);

// app.get('/user', user.userListById);

module.exports = app;
