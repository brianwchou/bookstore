const { bookRepository } = require('../repositories');

function getNotFoundBooks(booklist) {
  const existingBookTitles = bookRepository
    .getAllBooks()
    .map((book) => book.title);

  return booklist.filter(({ title }) => existingBookTitles.includes(title));
}

module.exports = {
  getNotFoundBooks,
};
