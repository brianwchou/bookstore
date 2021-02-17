const { Router } = require('express');
const userRouter = Router();
const {
  getUserByName,
  createUser,
  putBooksInCart,
} = require('../controllers/user');
const { validateUserId } = require('../middlewares');

userRouter.get('/find', getUserByName);
userRouter.post('/create', createUser);
userRouter.post('/:userId/cart', validateUserId, putBooksInCart);

module.exports = userRouter;
