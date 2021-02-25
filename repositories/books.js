const db = require('../db');

async function addBook(author, title, pages) {
  db.query('INSERT INTO books(author, title, pages) VALUES($1,$2,$3)', [
    author,
    title,
    pages,
  ]);
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
