const db = require('../db');

async function getUsersCart(userId) {
  return db
    .query(
      'SELECT books.title, quantity FROM carts INNER JOIN books ON carts.book_id=books.id WHERE user_id=$1;',
      [userId]
    )
    .then((res) => {
      return res.rows;
    });
}
async function getBooksQuantity(userId, bookId) {
  return db
    .query('SELECT quantity FROM carts WHERE user_id=$1 AND book_id=$2', [
      userId,
      bookId,
    ])
    .then((res) => {
      return res.rows[0].quantity;
    });
}

async function updateBooksQuanity(userId, bookId, newQuantity) {
  db.query('UPDATE carts SET quantity=$1 WHERE user_id=$2 AND book_id=$3 ', [
    newQuantity,
    userId,
    bookId,
  ]);
}

function addBookToUsersCart() {}

module.exports = {
  getUsersCart,
  addBookToUsersCart,
  getBooksQuantity,
  updateBooksQuanity,
};
