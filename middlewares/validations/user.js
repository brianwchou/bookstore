const { userDB } = require('../../db');

function validateUserId(req, res, next) {
  const { userId } = req.params;

  if (userId < 0 || userId > userDB.length) {
    res.send('user id does not exist').status(409);
    return;
  }

  next();
}

module.exports = {
  validateUserId,
};
