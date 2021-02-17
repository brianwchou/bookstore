const { bookRepository } = require('../repositories');

const addBook = (req, res) => {
  const { author, title, pages } = req.body;

  bookRepository.addBookWithAuthorTitleAndPages(author, title, pages);

  res.send('record creation sucessful').status(201);
};

const getAllBooks = (req, res) => {
  let books = bookRepository.getAllBooks();

  res.send(books).status(200);
};

const getBook = (req, res) => {
  const { bookId } = req.params;

  let book = bookRepository.getBookWithId(bookId);

  res.json(book).status(200);
};

const updateBook = (req, res) => {
  const { bookId } = req.params;
  const { author, title, pages } = req.body;

  bookRepository.updateBookWithId(bookId, author, title, pages);

  res.send('record updated successfuly').status(200);
};

const deleteBooks = (req, res) => {
  const { bookId } = req.params;

  bookRepository.deleteBookWithId(bookId);

  res.send('delete successful').status(400);
};

module.exports = {
  deleteBooks,
  addBook,
  getBook,
  getAllBooks,
  updateBook,
};
