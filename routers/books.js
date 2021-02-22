const { Router } = require('express');
const booksRouter = Router();
const {
  deleteBooks,
  getAllBooks,
  updateBook,
} = require('../controllers/books');

const { createBook, getBook } = require('../services/book');

const { bookValidation } = require('../middlewares');

booksRouter.get('/', getAllBooks);
booksRouter.get('/:bookId', bookValidation.validateBookId, getBookById);
booksRouter.post('/', addBook);
booksRouter.put('/:bookId', bookValidation.validateBookId, updateBook);
booksRouter.delete('/:bookId', bookValidation.validateBookId, deleteBooks);

function addBook(req, res) {
  const { author, title, pages } = req.body;

  createBook(author, title, pages);

  res.send('record creation sucessful').status(201);
}

function getBookById(req, res) {
  const { bookId } = req.params;

  const book = getBook(bookId);

  res.json(book).status(200);
}

module.exports = booksRouter;
