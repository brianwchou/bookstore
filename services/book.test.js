const bookRepository = require('../repositories/books');
const bookService = require('./book');

jest.mock('../repositories/books');

describe('Book Service', () => {
  describe('#getNotFoundBooks', () => {
    test('should call getAllBooks once', async () => {
      try {
        await bookService.getNotFoundBooks(['thing']);
      } catch {}

      expect(bookRepository.getAllBooks).toHaveBeenCalledTimes(1);
    });

    test('should throw an error when bookRepository.getAllBooks throws an error', async () => {
      bookRepository.getAllBooks = jest.fn().mockImplementation(() => {
        throw new Error('books not found');
      });

      try {
        await bookService.getNotFoundBooks(['thing']);
      } catch (error) {
        expect(error).toStrictEqual(Error('books not found'));
      }
    });
  });
});
