const bookRepository = require('../repositories/books');
const bookService = require('./book');

jest.mock('../repositories/books');

describe('Book Service', () => {
  describe('#getNotFoundBooks', () => {
    test('should call bookRepository.getAllBooks once', async () => {
      try {
        await bookService.getNotFoundBooks(['some book title']);
      } catch {}

      expect(bookRepository.getAllBooks).toHaveBeenCalledTimes(1);
    });

    test('should throw an error when bookRepository.getAllBooks throws an error', async () => {
      bookRepository.getAllBooks = jest.fn().mockImplementation(() => {
        throw new Error('books not found');
      });

      expect(bookService.getNotFoundBooks(['some book title'])).rejects.toThrow(
        Error('books not found')
      );
    });

    test('should return empty array when input contains all matching titles', async () => {
      bookRepository.getAllBooks = jest
        .fn()
        .mockImplementation(() => [
          { title: 'some book title' },
          { title: 'another book title' },
        ]);

      let booksNotFound;
      try {
        booksNotFound = await bookService.getNotFoundBooks(['some book title']);
      } catch {}

      expect(booksNotFound).toStrictEqual([]);
    });

    test('should return titles that dont exist', async () => {
      bookRepository.getAllBooks = jest
        .fn()
        .mockImplementation(() => [
          { title: 'non-existant book title' },
          { title: 'another book title' },
        ]);

      let booksNotFound;
      try {
        booksNotFound = await bookService.getNotFoundBooks(['some book title']);
      } catch {}

      expect(booksNotFound).toStrictEqual(['some book title']);
    });
  });
});
