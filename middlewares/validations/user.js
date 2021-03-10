const { userRepository } = require('../../repositories');

async function validateUserId(req, res, next) {
  const { userId } = req.params;

  const user = await userRepository.getUserRecordById(userId);

  if (!user) {
    res.send('user id does not exist').status(409);
    return;
  }

  next();
}

module.exports = {
  validateUserId,
};
