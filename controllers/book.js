const { bookRepository } = require('../repositories');

function getAllBooks(req, res) {
  const books = bookRepository.getAllBooks();

  res.send(books).status(200);
}

function updateBook(req, res) {
  const { bookId } = req.params;
  const { author, title, pages } = req.body;

  bookRepository.updateBookWithId(bookId, author, title, pages);

  res.send('record updated successfuly').status(200);
}

function deleteBooks(req, res) {
  const { bookId } = req.params;

  bookRepository.deleteBookWithId(bookId);

  res.send('delete successful').status(400);
}

module.exports = {
  deleteBooks,
  getAllBooks,
  updateBook,
};
