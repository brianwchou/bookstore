const { Router } = require('express');
const booksRouter = Router();
const {
  deleteBooks,
  addBook,
  getAllBooks,
  getBook,
  updateBook,
} = require('../controllers/books');

const { bookValidation } = require('../middlewares');

booksRouter.get('/', getAllBooks);
booksRouter.get('/:bookId', bookValidation.validateBookId, getBook);
booksRouter.post('/', addBook);
booksRouter.put('/:bookId', bookValidation.validateBookId, updateBook);
booksRouter.delete('/:bookId', bookValidation.validateBookId, deleteBooks);

module.exports = booksRouter;
