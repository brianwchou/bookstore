const { Router } = require('express');
const userRouter = Router();
const {
  getUserByName,
  addUser,
  putBooksInCart,
} = require('../controllers/user');
const { userValidation } = require('../middlewares');

userRouter.get('/find', getUserByName);
userRouter.post('/add', addUser);
userRouter.post('/:userId/cart', userValidation.validateUserId, putBooksInCart);

module.exports = userRouter;
