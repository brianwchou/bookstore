const { Router } = require('express');
const { userValidation } = require('../middlewares');
const { userCartService, userService } = require('../services');

const userRouter = Router();

userRouter.get('/:userId', getUserById);
userRouter.post('/', addUser);
userRouter.post('/:userId/cart', userValidation.validateUserId, putBooksInCart);

function putBooksInCart(req, res) {
  const { userId } = req.params;
  const booklist = req.body;

  try {
    userCartService.addBooksToCart(userId, booklist);
    res.status(200).send('data received');
  } catch (error) {
    if (error.message === 'List contains unknown books') {
      res
        .status(400)
        .send(`Could not find book title: ${notFoundBooks.join()}`);
    } else throw error;
  }
}

async function getUserById(req, res) {
  const { userId } = req.params;

  const record = await userService.findUserById(+userId);

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
