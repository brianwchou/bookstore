const { bookRepository } = require('../repositories');

async function getNotFoundBooks(booklist) {
  let allBooks;
  try {
    allBooks = await bookRepository.getAllBooks();
  } catch (error) {
    console.log(error);
  }
  const existingBookTitles = allBooks.map((book) => book.title);

  return booklist.filter((title) => !existingBookTitles.includes(title));
}

async function createBook(author, title, pages) {
  bookRepository.addBook(author, title, pages);
}

async function getBookById(id) {
  return bookRepository.getBookWithId(id);
}

async function getAllBooks() {
  return bookRepository.getAllBooks();
}

async function updateBook(bookData) {
  bookRepository.updateBookWithId(bookData);
}

async function deleteBook(id) {
  bookRepository.deleteBookWithId(id);
}

module.exports = {
  getNotFoundBooks,
  createBook,
  getBookById,
  updateBook,
  getAllBooks,
  deleteBook,
};
