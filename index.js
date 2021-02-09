const express = require('express');
const bodyParser = require('body-parser');
const { bookRoutes, errorRoutes, customerRoutes } = require('./routers');
const { bookDB, cartDB } = require('./db');
const app = express();
const port = 8080;

app.use(bodyParser.json());

// user wants to buy a book
app.post('/users/:userId/cart/:cartId', (req, res) => {
  const { userId, cartId } = req.params;
  const booklist = req.body;

  // check if the books are in the database

  let bookIndexes = [];
  for (let bookTitle of booklist) {
    let titleIsFound = bookDB.some((bookEntry) => {
      return bookEntry.title === bookTitle;
    });

    if (!titleIsFound) {
      res.status(400).send(`Could not find book title: ${bookTitle}`);
      return;
    }

    // find book index
    for (let i = 0; i < bookDB.length; i++) {
      if (bookDB[i].title === bookTitle) {
        bookIndexes.push(i);
      }
    }
  }

  bookIndexes.forEach((index) => {
    cartDB[userId][index] += 1;
  });

  res.status(200).send('data received');
});

app.use('/books', bookRoutes);
app.use('/customers', customerRoutes);
app.use('*', errorRoutes);

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
