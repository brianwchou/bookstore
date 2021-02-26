const { cartRepository } = require('../repositories');
const { bookService } = require('../services/book');

function addBooksToCart(userId, books) {
  const notFoundBooks = bookService.getNotFoundBooks(booklist);
  if (notFoundBooks.length > 0) {
    throw Error('List contains unknown books');
  }

  const bookIds = books.map((bookTitle) => {
    const book = bookDB.find(({ title }) => title === bookTitle);
    return book.id;
  });

  for (const bookId of bookIds) {
    cartDB.addBookToUsersCart(userId, bookId);
  }

  return cartDB.getBooks();
}

async function getUserCart(userId) {
  return await cartRepository.getUsersCart(userId);
}

module.exports = {
  addBooksToCart,
  getUserCart,
};
