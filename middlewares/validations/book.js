const { bookService } = require('../../services');

async function validateBookId(req, res, next) {
  const { bookId } = req.params;

  let book = await bookService.getBookById(bookId);

  if (!book) {
    res.send('record id does not exist').status(409);
    return;
  }
  next();
}

module.exports = {
  validateBookId,
};
