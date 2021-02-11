const userDB = require('./userDB');
const bookDB = require('./bookDB');

class CartDB {
  constructor() {
    this.data = new Map();
  }
  createNewCartForUser(userId) {
    this.data.set(userId, new Map());
  }

  getUsersCart(userId) {
    return this.data.get(userId);
  }

  addBookToUsersCart(userId, bookId) {
    let usercart = this.getUsersCart(userId);

    if (!usercart) {
      this.createNewCartForUser(userId);
      usercart = this.getUsersCart(userId);
    }

    let bookQuantities = usercart.get(bookId);

    if (!bookQuantities) {
      usercart.set(bookId, 1);
    } else {
      usercart.set(bookId, usercart.get(bookId) + 1);
    }
  }
}

module.exports = new CartDB();
