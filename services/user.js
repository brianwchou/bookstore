const { userRepository } = require('../repositories');

function findUserByName(firstName, lastName) {
  return userRepository.getUserRecord(firstName, lastName);
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
