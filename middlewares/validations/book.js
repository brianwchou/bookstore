const { bookService } = require('../../services');

async function validateBookId(req, res, next) {
  const { id } = req.params;

  let book = await bookService.getBookById(id);
  if (!book) {
    res.send('record id does not exist').status(409);
    return;
  }
  next();
}

module.exports = {
  validateBookId,
};
