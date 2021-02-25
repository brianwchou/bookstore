const { Router } = require('express');
const { bookService } = require('../services');
const { bookValidation } = require('../middlewares');

const booksRouter = Router();

booksRouter.get('/', getAllBooks);
booksRouter.get('/:bookId', getBookById);
booksRouter.post('/', addBook);
booksRouter.put('/:bookId', bookValidation.validateBookId, updateBook);
booksRouter.delete('/:bookId', bookValidation.validateBookId, deleteBook);

function addBook(req, res) {
  const { author, title, pages } = req.body;

  bookService.createBook(author, title, pages);

  res.send('record creation sucessful').status(201);
}

async function getBookById(req, res) {
  const { bookId } = req.params;

  const book = await bookService.getBookById(bookId);

  res.json(book).status(200);
}

function getAllBooks(req, res) {
  const books = bookService.getAllBooks();

  res.send(books).status(200);
}

function updateBook(req, res) {
  const { bookId } = req.params;
  const { author, title, pages } = req.body;

  bookService.updateBook({ bookId, author, title, pages });

  res.send('record updated successfuly').status(200);
}

function deleteBook(req, res) {
  const { bookId } = req.params;

  bookService.deleteBook(bookId);

  res.send('delete successful').status(400);
}

module.exports = booksRouter;
