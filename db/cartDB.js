const userDB = require('./userDB');
const bookDB = require('./bookDB');

class CartDB {
  constructor() {
    this.data = new Map();
  }

  createNewCartForUser(userId) {
    return this.data.set(userId, new Map());
  }

  getUsersCart(userId) {
    return this.data.get(userId);
  }

  addBookToUsersCart(userId, bookId) {
    let userCart = this.getUsersCart(userId);
    if (!this.data.has(userId)) {
      userCart = this.createNewCartForUser(userId);
    }

    const newQuantity = !userCart.has(bookId) ? 1 : usercart.get(bookId) + 1;
    userCart.set(bookId, newQuantity);
  }

  updateUserCart(userId, bookId, N) {
    const usercart = this.getUsersCart(userId);

    usercart.set(bookId, N);
  }

  clearUserCart(userId) {
    this.createNewCartForUser(userId);
  }

  deleteBookFromUserCart(userId, bookId) {
    const userCart = this.getUsersCart(userId);

    userCart.delete(bookId);
  }
}

module.exports = new CartDB();
