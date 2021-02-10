const userDB = require('./userDB');
const bookDB = require('./bookDB');

const cart = [
  {
    userId: userDB[0].id,
    books: [
      {
        bookId: bookDB[1].id,
        count: 2,
      },
    ],
  },
  {
    userId: userDB[1].id,
    books: [
      {
        bookId: bookDB[2].id,
        count: 3,
      },
      {
        bookId: bookDB[1].id,
        count: 1,
      },
    ],
  },
];

module.exports = cart;
