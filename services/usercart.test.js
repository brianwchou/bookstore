const usercartService = require('./usercart');
const bookService = require('./book');
const { bookRepository, cartRepository } = require('../repositories');

jest.mock('../repositories/');
jest.mock('./book');

describe('Usercart Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('#addbooksToCart', () => {
    test('should add several books to usercart', async () => {
      const userId = 1;
      const books = [
        'agile methodology',
        'some book title',
        'anothr book title',
      ];

      bookService.getNotFoundBooks = jest.fn().mockResolvedValue([]);
      bookRepository.getBookByTitle = jest.fn().mockResolvedValue({ id: 1 });

      await usercartService.addBooksToCart(userId, books);

      expect(bookService.getNotFoundBooks).toHaveBeenCalledTimes(1);
      expect(bookRepository.getBookByTitle).toHaveBeenCalledTimes(3);
      expect(cartRepository.addBookToUsersCart).toHaveBeenCalledTimes(3);
    });

    test('should add a book to usercart', async () => {
      const userId = 1;
      const books = ['agile methodology'];

      bookService.getNotFoundBooks = jest.fn().mockResolvedValue([]);
      bookRepository.getBookByTitle = jest.fn().mockResolvedValue({
        id: 1,
      });

      await usercartService.addBooksToCart(userId, books);

      expect(bookService.getNotFoundBooks).toHaveBeenCalledTimes(1);
      expect(bookRepository.getBookByTitle).toHaveBeenCalledTimes(1);
      expect(cartRepository.addBookToUsersCart).toHaveBeenCalledTimes(1);
    });

    test('should throw error when books are not found', async () => {
      const userId = 1;
      const books = ['agile methodology'];

      bookService.getNotFoundBooks = jest
        .fn()
        .mockResolvedValue(['a title not found']);
      bookRepository.getBookByTitle = jest.fn().mockResolvedValue({
        id: 1,
      });

      expect(usercartService.addBooksToCart(userId, books)).rejects.toThrow(
        'List contains unknown books'
      );
    });
  });

  describe('#decrementBooksQuantity', () => {
    test('should call cartRepository.removeBookFromCart when decrement is greater than books in cart', async () => {
      const userId = 1;
      const bookId = 1;
      const decrement = 3;

      cartRepository.getBooksQuantity = jest.fn().mockResolvedValue(2);

      await usercartService.decrementBookQuantity(userId, bookId, decrement);

      expect(cartRepository.removeBookFromCart).toHaveBeenCalledTimes(1);
      expect(cartRepository.updateBooksQuanity).toHaveBeenCalledTimes(0);
    });

    test('should call cartRepository.updateBooksQuanity', async () => {
      const userId = 1;
      const bookId = 1;
      const decrement = 1;

      cartRepository.getBooksQuantity = jest.fn().mockResolvedValue(2);

      await usercartService.decrementBookQuantity(userId, bookId, decrement);

      expect(cartRepository.removeBookFromCart).toHaveBeenCalledTimes(0);
      expect(cartRepository.updateBooksQuanity).toHaveBeenCalledTimes(1);
    });
  });
});
