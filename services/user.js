const { userRepository } = require('../repositories');

function findUserById(userId) {
  return userRepository.getUserRecordById(userId);
}

function createNewUser(username, firstName, lastName, email, password) {
  if (hasUsername(username)) {
    throw new Error('Username in use');
  }
  userRepository.addUser(username, firstName, lastName, email, password);
}

module.exports = {
  findUserByName,
  createNewUser,
};
