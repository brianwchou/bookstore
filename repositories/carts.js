const db = require('./db');

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

function addBookToUsersCart() {}

module.exports = {
  createNewCartForUser,
  getUsersCart,
  addBookToUsersCart,
};
