const express = require('express');
const bodyParser = require('body-parser');
const { bookRoutes, errorRoutes, customerRoutes } = require('./routers');
const { bookDB } = require('./db');
const app = express();
const port = 8080;

app.use(bodyParser.json());

// user wants to buy a book
app.post('/users/:userId/cart/:cartId', (req, res) => {
  const { userId, cartId } = req.params;
  const booklist = req.body;

  console.log(booklist);

  // check if the book is in the database
  booklist.forEach((title) => {
    let exists = bookDB.some((bookEntry) => {
      return bookEntry.title === title;
    });

    console.log(exists);
  });

  res.status(200).send('data received');
});

app.use('/books', bookRoutes);
app.use('/customers', customerRoutes);
app.use('*', errorRoutes);

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
