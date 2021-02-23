const { booksDB } = require('../../db');

function validateBookId(req, res, next) {
  const { id } = req.params;
  const index = Number(id);

  if (index < 0 || index >= booksDB.length) {
    res.send('record id is out of bounds').status(409);
    return;
  }
  next();
}

module.exports = {
  validateBookId,
};
