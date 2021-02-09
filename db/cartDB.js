const customerDB = require('./customerDB');
const bookDB = require('./bookDB');

/*
    relate customer and book and quantity

    store using a matrix

    customerDB is a 1d array
    bookDB is another 1d array

    cartDB should be a 2d array

    [[]]

    cartDB should update when there is a new relation between books and customer
    i want to be able to fetch how many books and kinds a customer has as well as how many
    of a book are in people's carts

    cart should be a 2d array where every index should relate to the index of a a given
    customer or a book

    when bookdb gets updated with a new entry cartDB should be updated with a new row
    when shop owner removes a book from the database, the row should also be removed from
    this record
*/

const cart = {
  record: new Array(customerDB.length).fill(new Array(bookDB.length).fill(0)),
};

module.exports = cart;
