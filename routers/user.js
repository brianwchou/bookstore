const { Router } = require('express');
const { userValidation } = require('../middlewares');
const { userCartService, userService } = require('../services');

const userRouter = Router();

userRouter.get('/:userId', getUserById);
userRouter.post('/', addUser);
userRouter.post('/:userId/cart', userValidation.validateUserId, putBooksInCart);
userRouter.get('/:userId/cart', userValidation.validateUserId, getUserCart);
userRouter.put(
  '/:userId/cart',
  userValidation.validateUserId,
  updateBooksInCart
);

async function updateBooksInCart(req, res) {
  const { userId } = req.params;
  const { bookId, quantity } = req.body;

  userCartService.updateBooksInCart(userId, bookId, quantity);

  res.status(200).send();
}

async function getUserCart(req, res) {
  const { userId } = req.params;

  const cart = await userCartService.getUserCart(userId);

  res.status(200).json(cart);
}

async function putBooksInCart(req, res) {
  const { userId } = req.params;
  const booklist = req.body;

  try {
    await userCartService.addBooksToCart(userId, booklist);
    res.status(200).send('data received');
  } catch (error) {
    if (error.message === 'List contains unknown books') {
      res.status(400).send(`Could not find book title`);
    } else throw error;
  }
}

async function getUserById(req, res) {
  const { userId } = req.params;

  const record = await userService.findUserById(userId);

  res.status(200).json(record);
}

async function addUser(req, res) {
  const { username, firstName, lastName, email, password } = req.body;
  try {
    userService.createNewUser({
      username,
      firstName,
      lastName,
      email,
      password,
    });
    res.status(200).send('added a customer record');
  } catch (error) {
    if (error.message === 'Username in use') {
      res.status(409).send('username is already in use');
      return;
    } else throw error;
  }
}

module.exports = userRouter;
