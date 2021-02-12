const { Router } = require('express');
const userRouter = Router();
const {
  findUserByFirstOrLastName,
  createUserEntry,
  putBooksInCart,
} = require('../controllers/user');
const { validateUserId } = require('../middlewares');

userRouter.get('/find', findUserByFirstOrLastName);
userRouter.post('/create', createUserEntry);
userRouter.post('/:userId/cart', validateUserId, putBooksInCart);

module.exports = userRouter;
