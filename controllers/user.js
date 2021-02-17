const { bookService, usercartService, userService } = require('../services');

function putBooksInCart(req, res) {
  const { userId } = req.params;
  const booklist = req.body;

  try {
    usercartService.addBooksToCart(userId, booklist);
    res.status(200).send('data received');
  } catch (error) {
    if (error.message === 'List contains unknown books') {
      res
        .status(400)
        .send(`Could not find book title: ${notFoundBooks.join()}`);
    } else throw error;
  }
}

function getUserByName(req, res) {
  const { firstName, lastName } = req.query;

  let record = userService.findUserByName(firstName, lastName);

  res.status(200).json(record);
}

function createUser(req, res) {
  let { username, firstName, lastName, email, password } = req.body;

  try {
    userService.create(username, firstName, lastName, email, password);
    res.status(200).send('added a customer record');
  } catch (error) {
    if (error.message === 'Username in use') {
      res.status(409).send('username is already in use');
      return;
    }
  }
}

module.exports = {
  getUserByName,
  createUser,
  putBooksInCart,
};
