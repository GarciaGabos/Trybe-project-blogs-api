const express = require('express');
require('express-async-errors');

const app = express();

app.use(express.json());

const user = require('./controllers/user.controllers');

const userValidations = require('./middlewares/userValidations');

app.post('/login', userValidations.validateLogin, user.userLogin);

app.post('/user', userValidations.validateEmail, userValidations.validadeNewUser, user.userAdd);

module.exports = app;
