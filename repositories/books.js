const { bookDB } = require('../db');

function addBook(author, title, pages) {
  bookDB.push({
    id: bookDB.length,
    author,
    title,
    pages,
  });
}

function getBookWithId(id) {
  return bookDB[id];
}

function getAllBooks() {
  return bookDB;
}

function updateBookWithId(id, author, title, pages) {
  bookDB[id] = { author, title, pages };
}

function deleteBookWithId(id) {
  bookDB.splice(indexToDelete, 1);
}

module.exports = {
  addBook,
  getBookWithId,
  getAllBooks,
  deleteBookWithId,
  updateBookWithId,
};
