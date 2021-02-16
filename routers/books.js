const { Router } = require('express');
const booksRouter = Router();
const {
  deleteBooks,
  addBook,
  getAllBooks,
  getBook,
  updateBook,
} = require('../controllers/books');

const { validateBookId } = require('../middlewares');

booksRouter.get('/', getAllBooks);
booksRouter.get('/:bookId', validateBookId, getBook);
booksRouter.post('/', addBook);
booksRouter.put('/:bookId', validateBookId, updateBook);
booksRouter.delete('/:bookId', validateBookId, deleteBooks);

module.exports = booksRouter;
