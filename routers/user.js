const { Router } = require('express');
const userRouter = Router();
const { getUserById, addUser, putBooksInCart } = require('../controllers/user');
const { userValidation } = require('../middlewares');

userRouter.get('/', getUserById);
userRouter.post('/', addUser);
userRouter.post('/:userId/cart', userValidation.validateUserId, putBooksInCart);

module.exports = userRouter;
