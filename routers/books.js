const { Router } = require('express');
const booksRouter = Router();
const {
  deleteBooks,
  addBookEntry,
  getAllBooks,
  getBookEntry,
  updateBookEntry,
} = require('../controllers/books');

const { validateBookId } = require('../middlewares');

booksRouter.get('/', getAllBooks);
booksRouter.get('/:id', validateBookId, getBookEntry);
booksRouter.post('/', addBookEntry);
booksRouter.put('/:id', validateBookId, updateBookEntry);
booksRouter.delete('/:id', validateBookId, deleteBooks);

module.exports = booksRouter;
