const express = require('express');
const bodyParser = require('body-parser');
const { bookRoutes, errorRoutes, userRoutes } = require('./routers');
const { bookDB, cartDB } = require('./db');
const app = express();
const port = 8080;

app.use(bodyParser.json());

// user wants to buy a book
app.post('/users/:userId/cart/', (req, res) => {
  const { userId } = req.params;

  // need to check if userID exists on the userid tablet
  // if the user id does not exist then we need to send back a error to the calling side
  //

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
app.use('/users', userRoutes);
app.use('*', errorRoutes);

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
