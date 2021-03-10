const { cartRepository, bookRepository } = require('../repositories');
const bookService = require('../services/book');

async function addBooksToCart(userId, books) {
  const notFoundBooks = await bookService.getNotFoundBooks(books);
  console.log(notFoundBooks);
  if (notFoundBooks.length > 0) {
    throw Error('List contains unknown books');
  }

  const bookIds = await Promise.all(
    books.map(async (bookTitle) => {
      const book = await bookRepository.getBookByTitle(bookTitle);

      return book.id;
    })
  );
  console.log('bookids', bookIds);
  for (const bookId of bookIds) {
    cartRepository.addBookToUsersCart(userId, bookId);
  }
}

async function getUserCart(userId) {
  return await cartRepository.getUsersCart(userId);
}

async function clearBookQuantity(userId, bookId) {
  await cartRepository.removeBookFromCart(userId, bookId);
}

async function decrementBookQuantity(userId, bookId, decrement) {
  const currentQuantity = await cartRepository.getBooksQuantity(userId, bookId);

  if (currentQuantity < decrement) {
    clearBookQuantity(userId, bookId);
    return;
  }

  cartRepository.updateBooksQuanity(
    userId,
    bookId,
    currentQuantity - decrement
  );
}

async function incrementBookQuantity(userId, bookId, increment) {
  const currentQuantity = await cartRepository.getBooksQuantity(userId, bookId);

  cartRepository.updateBooksQuanity(
    userId,
    bookId,
    currentQuantity + increment
  );
}

module.exports = {
  addBooksToCart,
  getUserCart,
  incrementBookQuantity,
  decrementBookQuantity,
  clearBookQuantity,
};
