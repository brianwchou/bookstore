const { userRepository } = require('../repositories');

function findUserById(userId) {
  return userRepository.getUserRecordById(userId);
}

function createNewUser(newUserData) {
  if (hasUsername(newUserData.username)) {
    throw new Error('Username in use');
  }
  userRepository.addUser(newUserData);
}

module.exports = {
  findUserById,
  createNewUser,
};
