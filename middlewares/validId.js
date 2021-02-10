const { booksDB } = require('../db');
const { userDB } = require('../db');

const validateBookId = (req, res, next) => {
  const { id } = req.params;
  const index = Number(id);

  if (index < 0 || index >= booksDB.length) {
    res.send('record id is out of bounds').status(409);
    return;
  }
  next();
};

const validateUserId = (req, res, next) => {
  const { userId } = req.params;

  if (userId < 0 || userId > userDB.length) {
    res.send('user id does not exist').status(409);
  }

  next();
};

module.exports = {
  validateBookId,
  validateUserId,
};
