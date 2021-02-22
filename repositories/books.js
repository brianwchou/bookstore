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
  if (id === 0) {
    bookDB = bookDB.slice(1, bookDB.length);
  } else {
    let firsthalf = bookDB.slice(0, id);
    let secondhalf = bookDB.slice(id + 1, bookDB.length);

    bookDB = [...firsthalf, ...secondhalf];
  }
}

module.exports = {
  addBook,
  getBookWithId,
  getAllBooks,
  deleteBookWithId,
  updateBookWithId,
};
