const userRouter = require('express').Router();
const UserController = require('../controllers/userController');

userRouter
    .route('/login')
    .post(UserController.login);

module.exports = userRouter