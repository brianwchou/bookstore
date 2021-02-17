const books = require('../db/bookDB');

module.exports = {
  bookRepository: require('./books'),
  userRepository: require('./users'),
};
