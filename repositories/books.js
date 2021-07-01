const db = require('../db');

async function addBook(author, title, pages) {
  db.query('INSERT INTO books(author, title, pages) VALUES($1, $2, $3)', 
  [author, title, pages]);
}

async function getBookWithId(id) {
  return db.query('SELECT * FROM books WHERE id=$1', [id]).then((res) => {
    return res.rows[0];
  });
}

async function getBookByTitle(title) {
  return db
    .query('SELECT id FROM books WHERE title=$1', [title])
    .then((res) => {
      return res.rows[0];
    });
}

function getAllBooks() {
  return db.query('SELECT * FROM books').then((res) => {
    return res.rows;
  });
}

function updateBookWithId({ id, author, title, pages }) {
  db.query(
    'UPDATE books SET author=$1, title=$2, pages=$3 WHERE id=$4',
    [author, title, pages, id]
  );
}

function deleteBookWithId(id) {
  db.query('DELETE FROM books WHERE id=$1', [id]);
}

module.exports = {
  addBook,
  getBookWithId,
  getBookByTitle,
  getAllBooks,
  deleteBookWithId,
  updateBookWithId,
};
