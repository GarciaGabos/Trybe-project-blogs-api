const express = require('express');
require('express-async-errors');

const app = express();

app.use(express.json());

const validateJWT = require('./auth/validateJWT');

const userController = require('./controllers/user.controllers');
const categoriesController = require('./controllers/categories.controllers');
const postsController = require('./controllers/posts.controllers');

const userValidations = require('./middlewares/userValidations');

app.post('/login', userValidations.validateLogin, userController.userLogin);

app.post('/user', userValidations.validateEmail,
 userValidations.validadeNewUser, userController.userAdd);

app.get('/user', validateJWT, userController.userListAll);

app.get('/user/:id', validateJWT, userController.userListById);

app.post('/categories', validateJWT, categoriesController.postNewCategory);

app.get('/categories', validateJWT, categoriesController.categoryListAll);

app.post('/post', validateJWT, postsController.postNewPost);

app.get('/post', validateJWT, postsController.listAllPost);

module.exports = app;
